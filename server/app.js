const createError = require(`http-errors`)
const express = require(`express`)
const path = require(`path`)
const cookieParser = require(`cookie-parser`)
const logger = require(`morgan`)
const cors = require(`cors`)
const helmet = require(`helmet`)
const compression = require('compression')

const indexRouter = require(`./routes/index`)



// 몽구스, 노드-스케줄러 실행
const connect = require(`./mongodb/mongoose.js`)
const doScheduler = require(`./lib/save-school-food-list.js`)
// const doScheduler2 = require(`./lib/save-class-info.js`)

const app = express()
app.use(compression())
app.use(cors())
app.use(helmet({
	frameguard: false
}))

connect()
doScheduler()
// doScheduler2()

const swaggerJSDoc = require(`swagger-jsdoc`)
const swaggerOption = require(`./swagger-jsdoc.js`)
const swaggerSpec = swaggerJSDoc(swaggerOption)
const swaggerUi = require(`swagger-ui-express`)

// view engine setup
app.set(`views`, path.join(__dirname, `views`))
app.engine(`html`, require(`ejs`).renderFile)
app.set(`view engine`, `html`)
// app.set(`view engine`, `pug`)

app.use(logger(`dev`))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, `public`)))

app.use(`/`, indexRouter)
app.use(`/options`, indexRouter)
app.use(`/api-docs`, swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// catch 404 and forward to error handler
app.use((req, res, next) => {
	next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
	// set locals, only providing error in development
	res.locals.message = err.message
	res.locals.error = req.app.get(`env`) === `development` ? err : {}

	// render the error page
	res.status(err.status || 500)
	res.render(`error`)
})

module.exports = app
