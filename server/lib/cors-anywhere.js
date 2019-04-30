// © 2013 - 2016 Rob Wu <rob@robwu.nl>
// Released under the MIT license
/* eslint-disable */

'use strict'

const httpProxy = require(`http-proxy`)
const net = require(`net`)
const url = require(`url`)
const fs = require(`fs`)
const regexp_tld = require(`./regexp-top-level-domain`)
const getProxyForUrl = require(`proxy-from-env`).getProxyForUrl

const help_text = {}
function showUsage(help_file, headers, response) {
	const isHtml = /\.html$/.test(help_file)
	const isJs = /\.js$/.test(help_file)
	const isCss = /\.css$/.test(help_file)
	const isPng = /\.png$/.test(help_file)
	const isGif = /\.gif$/.test(help_file)
	const isJpeg = /\.gif$/.test(help_file)
	const isSvg = /\.svg$/.test(help_file)
	headers[`content-type`] = isHtml ? `text/html` : `text/plain`
	headers[`content-type`] = isJs ? `application/javascript; charset=UTF-8` : headers[`content-type`]
	headers[`content-type`] = isCss ? `text/css; charset=UTF-8` : headers[`content-type`]
	headers[`content-type`] = isPng ? `image/png` : headers[`content-type`]
	headers[`content-type`] = isGif ? `image/gif` : headers[`content-type`]
	headers[`content-type`] = isJpeg ? `image/jpeg` : headers[`content-type`]
	headers[`content-type`] = isSvg ? `image/svg+xml` : headers[`content-type`]
	console.log(`test`, headers[`content-type`])
	if (isPng || isGif || isJpeg) {
		const img = fs.readFileSync(help_file)
     	response.end(img, `base64`)
	}
	if (isSvg) {
		const img = fs.readFileSync(help_file)
		response.writeHead(200, {'Content-Type': 'image/svg+xml' });
		response.end(img, `base64`)
	}
	if (help_text[help_file] != null) {
		response.writeHead(200, headers)
		response.end(help_text[help_file])
	} else {
		require(`fs`).readFile(help_file, `utf8`, (err, data) => {
			if (err) {
				console.error(err)
				response.writeHead(500, headers)
				response.end()
			} else {
				help_text[help_file] = data
				showUsage(help_file, headers, response)
			}
		})
	}
}

/**
 * Check whether the specified hostname is valid.
 *
 * @param hostname {string} Host name (excluding port) of requested resource.
 * @return {boolean} Whether the requested resource can be accessed.
 */
function isValidHostName(hostname) {
	return !!(
		regexp_tld.test(hostname) ||
    net.isIPv4(hostname) ||
    net.isIPv6(hostname)
	)
}

/**
 * Adds CORS headers to the response headers.
 *
 * @param headers {object} Response headers
 * @param request {ServerRequest}
 */
function withCORS(headers, request) {
	headers[`access-control-allow-origin`] = `*`
	const corsMaxAge = request.corsAnywhereRequestState.corsMaxAge
	if (corsMaxAge) {
		headers[`access-control-max-age`] = corsMaxAge
	}
	if (request.headers[`access-control-request-method`]) {
		headers[`access-control-allow-methods`] = request.headers[`access-control-request-method`]
		delete request.headers[`access-control-request-method`]
	}
	if (request.headers[`access-control-request-headers`]) {
		headers[`access-control-allow-headers`] = request.headers[`access-control-request-headers`]
		delete request.headers[`access-control-request-headers`]
	}

	headers[`access-control-expose-headers`] = Object.keys(headers).join(`,`)

	return headers
}

/**
 * Performs the actual proxy request.
 *
 * @param req {ServerRequest} Incoming http request
 * @param res {ServerResponse} Outgoing (proxied) http request
 * @param proxy {HttpProxy}
 */
function proxyRequest(req, res, proxy) {
	const location = req.corsAnywhereRequestState.location
	req.url = location.path

	const proxyOptions = {
		changeOrigin: false,
		prependPath: false,
		target: location,
		headers: {
			host: location.host,
		},
		// HACK: Get hold of the proxyReq object, because we need it later.
		// https://github.com/nodejitsu/node-http-proxy/blob/v1.11.1/lib/http-proxy/passes/web-incoming.js#L144
		buffer: {
			pipe: function(proxyReq) {
				const proxyReqOn = proxyReq.on
				// Intercepts the handler that connects proxyRes to res.
				// https://github.com/nodejitsu/node-http-proxy/blob/v1.11.1/lib/http-proxy/passes/web-incoming.js#L146-L158
				proxyReq.on = function(eventName, listener) {
					if (eventName !== `response`) {
						return proxyReqOn.call(this, eventName, listener)
					}
					return proxyReqOn.call(this, `response`, proxyRes => {
						if (onProxyResponse(proxy, proxyReq, proxyRes, req, res)) {
							try {
								listener(proxyRes)
							} catch (err) {
								// Wrap in try-catch because an error could occur:
								// "RangeError: Invalid status code: 0"
								// https://github.com/Rob--W/cors-anywhere/issues/95
								// https://github.com/nodejitsu/node-http-proxy/issues/1080

								// Forward error (will ultimately emit the 'error' event on our proxy object):
								// https://github.com/nodejitsu/node-http-proxy/blob/v1.11.1/lib/http-proxy/passes/web-incoming.js#L134
								proxyReq.emit(`error`, err)
							}
						}
					})
				}
				return req.pipe(proxyReq)
			},
		},
	}

	const proxyThroughUrl = req.corsAnywhereRequestState.getProxyForUrl(location.href)
	if (proxyThroughUrl) {
		proxyOptions.target = proxyThroughUrl
		proxyOptions.toProxy = true
		// If a proxy URL was set, req.url must be an absolute URL. Then the request will not be sent
		// directly to the proxied URL, but through another proxy.
		req.url = location.href
	}

	// Start proxying the request
	proxy.web(req, res, proxyOptions)
}

/**
 * This method modifies the response headers of the proxied response.
 * If a redirect is detected, the response is not sent to the client,
 * and a new request is initiated.
 *
 * client (req) -> CORS Anywhere -> (proxyReq) -> other server
 * client (res) <- CORS Anywhere <- (proxyRes) <- other server
 *
 * @param proxy {HttpProxy}
 * @param proxyReq {ClientRequest} The outgoing request to the other server.
 * @param proxyRes {ServerResponse} The response from the other server.
 * @param req {IncomingMessage} Incoming HTTP request, augmented with property corsAnywhereRequestState
 * @param req.corsAnywhereRequestState {object}
 * @param req.corsAnywhereRequestState.location {object} See parseURL
 * @param req.corsAnywhereRequestState.getProxyForUrl {function} See proxyRequest
 * @param req.corsAnywhereRequestState.proxyBaseUrl {string} Base URL of the CORS API endpoint
 * @param req.corsAnywhereRequestState.maxRedirects {number} Maximum number of redirects
 * @param req.corsAnywhereRequestState.redirectCount_ {number} Internally used to count redirects
 * @param res {ServerResponse} Outgoing response to the client that wanted to proxy the HTTP request.
 *
 * @returns {boolean} true if http-proxy should continue to pipe proxyRes to res.
 */
function onProxyResponse(proxy, proxyReq, proxyRes, req, res) {
	const requestState = req.corsAnywhereRequestState

	const statusCode = proxyRes.statusCode

	if (!requestState.redirectCount_) {
		res.setHeader(`x-request-url`, requestState.location.href)
	}
	// Handle redirects
	if (statusCode === 301 || statusCode === 302 || statusCode === 303 || statusCode === 307 || statusCode === 308) {
		let locationHeader = proxyRes.headers.location
		if (locationHeader) {
			locationHeader = url.resolve(requestState.location.href, locationHeader)

			if (statusCode === 301 || statusCode === 302 || statusCode === 303) {
				// Exclude 307 & 308, because they are rare, and require preserving the method + request body
				requestState.redirectCount_ = requestState.redirectCount_ + 1 || 1
				if (requestState.redirectCount_ <= requestState.maxRedirects) {
					// Handle redirects within the server, because some clients (e.g. Android Stock Browser)
					// cancel redirects.
					// Set header for debugging purposes. Do not try to parse it!
					res.setHeader(`X-CORS-Redirect-${ requestState.redirectCount_}`, `${statusCode } ${ locationHeader}`)

					req.method = `GET`
					req.headers[`content-length`] = `0`
					delete req.headers[`content-type`]
					requestState.location = parseURL(locationHeader)

					// Remove all listeners (=reset events to initial state)
					req.removeAllListeners()

					// Remove the error listener so that the ECONNRESET "error" that
					// may occur after aborting a request does not propagate to res.
					// https://github.com/nodejitsu/node-http-proxy/blob/v1.11.1/lib/http-proxy/passes/web-incoming.js#L134
					proxyReq.removeAllListeners(`error`)
					proxyReq.once(`error`, () => {})
					proxyReq.abort()

					// Initiate a new proxy request.
					proxyRequest(req, res, proxy)
					return false
				}
			}
			proxyRes.headers.location = `${requestState.proxyBaseUrl }/${ locationHeader}`
		}
	}

	// Strip cookies
	delete proxyRes.headers[`set-cookie`]
	delete proxyRes.headers[`set-cookie2`]

	proxyRes.headers[`x-final-url`] = requestState.location.href
	withCORS(proxyRes.headers, req)
	return true
}


/**
 * @param req_url {string} The requested URL (scheme is optional).
 * @return {object} URL parsed using url.parse
 */
function parseURL(req_url) {
	const match = req_url.match(/^(?:(https?:)?\/\/)?(([^\/?]+?)(?::(\d{0,5})(?=[\/?]|$))?)([\/?][\S\s]*|$)/i)
	//                              ^^^^^^^          ^^^^^^^^      ^^^^^^^                ^^^^^^^^^^^^
	//                            1:protocol       3:hostname     4:port                 5:path + query string
	//                                              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
	//                                            2:host
	if (!match) {
		return null
	}
	if (!match[1]) {
		// Scheme is omitted.
		if (req_url.lastIndexOf(`//`, 0) === -1) {
			// "//" is omitted.
			req_url = `//${ req_url}`
		}
		req_url = (match[4] === `443` ? `https:` : `http:`) + req_url
	}
	return url.parse(req_url)
}

// Request handler factory
function getHandler(options, proxy) {
	const corsAnywhere = {
		getProxyForUrl: getProxyForUrl, // Function that specifies the proxy to use
		maxRedirects: 5, // Maximum number of redirects to be followed.
		originBlacklist: [], // Requests from these origins will be blocked.
		originWhitelist: [], // If non-empty, requests not from an origin in this list will be blocked.
		checkRateLimit: null, // Function that may enforce a rate-limit by returning a non-empty string.
		redirectSameOrigin: false, // Redirect the client to the requested URL for same-origin requests.
		requireHeader: null, // Require a header to be set?
		removeHeaders: [], // Strip these request headers.
		setHeaders: {}, // Set these request headers.
		corsMaxAge: 0, // If set, an Access-Control-Max-Age header with this value (in seconds) will be added.
		helpFile: `${__dirname }/help.txt`,
	}

	Object.keys(corsAnywhere).forEach(option => {
		if (Object.prototype.hasOwnProperty.call(options, option)) {
			corsAnywhere[option] = options[option]
		}
	})

	// Convert corsAnywhere.requireHeader to an array of lowercase header names, or null.
	if (corsAnywhere.requireHeader) {
		if (typeof corsAnywhere.requireHeader === `string`) {
			corsAnywhere.requireHeader = [corsAnywhere.requireHeader.toLowerCase()]
		} else if (!Array.isArray(corsAnywhere.requireHeader) || corsAnywhere.requireHeader.length === 0) {
			corsAnywhere.requireHeader = null
		} else {
			corsAnywhere.requireHeader = corsAnywhere.requireHeader.map(headerName => headerName.toLowerCase())
		}
	}
	const hasRequiredHeaders = function(headers) {
		return !corsAnywhere.requireHeader || corsAnywhere.requireHeader.some(headerName => Object.hasOwnProperty.call(headers, headerName))
	}

	return function(req, res) {
		req.corsAnywhereRequestState = {
			getProxyForUrl: corsAnywhere.getProxyForUrl,
			maxRedirects: corsAnywhere.maxRedirects,
			corsMaxAge: corsAnywhere.corsMaxAge,
		}

		const cors_headers = withCORS({}, req)
		if (req.method === `OPTIONS`) {
			// Pre-flight request. Reply successfully:
			res.writeHead(200, cors_headers)
			res.end()
			return
		}

		const location = parseURL(req.url.slice(1))

		if (!location) {
			// Invalid API call. Show how to correctly use the API
			showUsage(corsAnywhere.helpFile, cors_headers, res)
			return
		}

		if (location.host === `iscorsneeded`) {
			// Is CORS needed? This path is provided so that API consumers can test whether it's necessary
			// to use CORS. The server's reply is always No, because if they can read it, then CORS headers
			// are not necessary.
			res.writeHead(200, {'Content-Type': `text/plain`})
			res.end(`no`)
			return
		}

		if (location.host === `options`) {
			res.writeHead(200, {'Content-Type': `text/html; charset=utf-8`})
			fs.readFile('./views/index.html', (err, data) => {
				if (err) {
				  return console.error(err);
				}
				res.end(data, 'utf-8');
			  });
			return
		}

		if (location.host === `hanyangfood`) {
			const puppeteer = require('puppeteer')			
			res.writeHead(200, {
				'Content-Type': `text/plain; charset=UTF-8`,
				'access-control-allow-origin': `*`})
			
			// 11: 교직원, 12: 학식, 13: 기식, 14: 푸드코트, 15: 창보
			crawl(new URL(location.href).searchParams.get(`place`))
			async function crawl(place) {
				const browser = await puppeteer.launch()
				const page = await browser.newPage()
				const date = new Date()
				const year = date.getFullYear()
				const month = date.getMonth()
				const day = date.getDate()
				await page.goto(`https://www.hanyang.ac.kr/web/www/re${place}?p_p_id=foodView_WAR_foodportlet&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&p_p_col_id=column-1&p_p_col_pos=1&p_p_col_count=2&_foodView_WAR_foodportlet_sFoodDateDay=${day}&_foodView_WAR_foodportlet_sFoodDateYear=${year}&_foodView_WAR_foodportlet_action=view&_foodView_WAR_foodportlet_sFoodDateMonth=${month}`, {waitUntil: 'networkidle2'})
				// await page.waitForSelector('h3')
				const links = await page.evaluate(() => {
					const result = []

					let breakfast = Array.from(document.querySelectorAll(`h4`))
					breakfast = breakfast.find(each => each.textContent === `조식`)
					if (breakfast !== undefined) {
						breakfast = breakfast.parentNode.querySelectorAll(`h3`)
					
						for(const menu of breakfast) {
							result.push({breakfast: menu.textContent.trim()})
						}
					} else {
						result.push({breakfast: null})
					}

					let lunch = Array.from(document.querySelectorAll(`h4`))
					lunch = lunch.find(each => each.textContent === `중식`)
					if (lunch !== undefined) {
						lunch = lunch.parentNode.querySelectorAll(`h3`)
					
						for(const menu of lunch) {
							result.push({lunch: menu.textContent.trim()})
						}
					} else {
						result.push({lunch: null})
					}

					let dinner = Array.from(document.querySelectorAll(`h4`))
					dinner = dinner.find(each => each.textContent === `석식`)
					if (dinner !== undefined) {
						dinner = dinner.parentNode.querySelectorAll(`h3`)
					
						for(const menu of dinner) {
							result.push({dinner: menu.textContent.trim()})
						}
					} else {
						result.push({dinner: null})
					}
					
				  	return result
				})
				browser.close()
				res.end(JSON.stringify(links))
			}						
			return
		}

		if (location.port > 65535) {
			// Port is higher than 65535
			res.writeHead(400, `Invalid port`, cors_headers)
			res.end(`Port number too large: ${ location.port}`)
			return
		}

		if (!/^\/https?:/.test(req.url) && !isValidHostName(location.hostname)) {
			// Don't even try to proxy invalid hosts (such as /favicon.ico, /robots.txt)
			//   res.writeHead(404, 'Invalid host', cors_headers);
			//   res.end('Invalid host: ' + location.hostname);
	  		showUsage(`${__dirname}/../public/${req.url}`, cors_headers, res)
			return
		}

		if (!hasRequiredHeaders(req.headers)) {
			res.writeHead(400, `Header required`, cors_headers)
			res.end(`Missing required request header. Must specify one of: ${ corsAnywhere.requireHeader}`)
			return
		}

		const origin = req.headers.origin || ``
		if (corsAnywhere.originBlacklist.indexOf(origin) >= 0) {
			res.writeHead(403, `Forbidden`, cors_headers)
			res.end(`The origin "${ origin }" was blacklisted by the operator of this proxy.`)
			return
		}

		if (corsAnywhere.originWhitelist.length && corsAnywhere.originWhitelist.indexOf(origin) === -1) {
			res.writeHead(403, `Forbidden`, cors_headers)
			res.end(`The origin "${ origin }" was not whitelisted by the operator of this proxy.`)
			return
		}

		const rateLimitMessage = corsAnywhere.checkRateLimit && corsAnywhere.checkRateLimit(origin)
		if (rateLimitMessage) {
			res.writeHead(429, `Too Many Requests`, cors_headers)
			res.end(`The origin "${ origin }" has sent too many requests.\n${ rateLimitMessage}`)
			return
		}

		if (corsAnywhere.redirectSameOrigin && origin && location.href[origin.length] === `/` &&
        location.href.lastIndexOf(origin, 0) === 0) {
			// Send a permanent redirect to offload the server. Badly coded clients should not waste our resources.
			cors_headers.vary = `origin`
			cors_headers[`cache-control`] = `private`
			cors_headers.location = location.href
			res.writeHead(301, `Please use a direct request`, cors_headers)
			res.end()
			return
		}

		const isRequestedOverHttps = req.connection.encrypted || /^\s*https/.test(req.headers[`x-forwarded-proto`])
		const proxyBaseUrl = (isRequestedOverHttps ? `https://` : `http://`) + req.headers.host

		corsAnywhere.removeHeaders.forEach(header => {
			delete req.headers[header]
		})

		Object.keys(corsAnywhere.setHeaders).forEach(header => {
			req.headers[header] = corsAnywhere.setHeaders[header]
		})

		req.corsAnywhereRequestState.location = location
		req.corsAnywhereRequestState.proxyBaseUrl = proxyBaseUrl

		proxyRequest(req, res, proxy)
	}
}

// Create server with default and given values
// Creator still needs to call .listen()
exports.createServer = function createServer(options) {
	options = options || {}

	// Default options:
	const httpProxyOptions = {
		xfwd: true, // Append X-Forwarded-* headers
	}
	// Allow user to override defaults and add own options
	if (options.httpProxyOptions) {
		Object.keys(options.httpProxyOptions).forEach(option => {
			httpProxyOptions[option] = options.httpProxyOptions[option]
		})
	}

	const proxy = httpProxy.createServer(httpProxyOptions)
	const requestHandler = getHandler(options, proxy)
	let server
	if (options.httpsOptions) {
		server = require(`https`).createServer(options.httpsOptions, requestHandler)
	} else {
		server = require(`http`).createServer(requestHandler)
	}

	// When the server fails, just show a 404 instead of Internal server error
	proxy.on(`error`, (err, req, res) => {
		if (res.headersSent) {
			// This could happen when a protocol error occurs when an error occurs
			// after the headers have been received (and forwarded). Do not write
			// the headers because it would generate an error.
			return
		}

		// When the error occurs after setting headers but before writing the response,
		// then any previously set headers must be removed.
		const headerNames = res.getHeaderNames ? res.getHeaderNames() : Object.keys(res._headers || {})
		headerNames.forEach(name => {
			res.removeHeader(name)
		})

		res.writeHead(404, {'Access-Control-Allow-Origin': `*`})
		res.end(`Not found because of proxy error: ${ err}`)
	})

	return server
}
