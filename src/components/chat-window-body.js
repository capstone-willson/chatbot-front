import {html, render} from '../../node_modules/lit-html/lit-html.js'
import './bot-chat-balloon.js'
import './my-chat-balloon.js'
import './book-list.js'
import './bus-info.js' 
import '@vaadin/vaadin-tabs/vaadin-tabs.js'
import '@vaadin/vaadin-list-box/vaadin-list-box.js'

class ChatWindowBody extends HTMLElement {
	constructor() {
		super()

		this.attachShadow({ mode: `open` })
		render(this.render(), this.shadowRoot)		
	}

	connectedCallback() {
		this.chatWindow = document.querySelector(`chat-window`)

		this.socket = io.connect(`https://hanyang-chatbot.kro.kr:8088`, {
			path: `/socket.io`,
		})

		this.socket.on(`botSay`, data => {
			this.replyFront(data)
		})

		this.socket.on(`userSay`, data => {
			this.sendFront(data)
		})

		this.socket.on(`muted`, () => {
			const chatFooter = querySelectorShadowDom.querySelectorDeep(`chat-window-footer`)
			chatFooter.canTyping = false
		})

		this.socket.on(`unmuted`, () => {
			const chatFooter = querySelectorShadowDom.querySelectorDeep(`chat-window-footer`)			
			chatFooter.canTyping = true
		})
	}

	loading_done() {
		this.bot.sortReplies()
	}
	
	botSay(sendText) {
		const username = `hy-lion`

		this.bot.sortReplies()		

		this.bot.reply(username, sendText).then(reply => {
			this.reply(reply)
		})
	}

	loading_error(error) {
		throw new Error(`Error when loading files: ${error}`)
	}

	reply(text, config = {backgroundColor: `white`}) {
		this.replyFront(text, config)
		this.socket.emit(`reply`, text)	
	}

	replyFront(text, config) {
		const main = this.shadowRoot.querySelector(`main`)
		const ONE = 1, LAST_CHILD_NUM = main.children.length - ONE
		const lastChat = main.children[LAST_CHILD_NUM]
		const isBot = main.children.length && main.children[LAST_CHILD_NUM].localName === `bot-chat-balloon`
		

		if(isBot == false) {
			const botChatBalloon = document.createElement(`bot-chat-balloon`)
			main.appendChild(botChatBalloon)
			botChatBalloon.chat(text, config)
			document.querySelector(`chat-window`).scrollToLast()
			return
		}
		lastChat.chat(text, config)
		document.querySelector(`chat-window`).scrollToLast()
	}

	send(text) {
		this.sendFront(text)
		this.socket.emit(`question`, text)
	}

	sendFront(text) {
		const main = this.shadowRoot.querySelector(`main`)
		const ONE = 1, LAST_CHILD_NUM = main.children.length - ONE
		const lastChat = main.children[LAST_CHILD_NUM]
		const isMe = main.children.length && main.children[LAST_CHILD_NUM].localName === `my-chat-balloon`

		if(isMe == false) {
			const myChatBalloon = document.createElement(`my-chat-balloon`)
			main.appendChild(myChatBalloon)
			myChatBalloon.chat(text)
			document.querySelector(`chat-window`).scrollToLast()
			return
		}
		lastChat.chat(text)
		document.querySelector(`chat-window`).scrollToLast()
	}

	waitSend(callback) {
		const observer = new MutationObserver(mutations => {
			mutations.forEach(mutation => {
				if (mutation[`addedNodes`][0][`localName`] === `my-chat-balloon`) {
					callback(mutation[`addedNodes`][0].shadowRoot.querySelector(`.chat-content`).textContent)
				}
				observer.disconnect()
			})
		})

		const config = {
			childList: true,
			subtree: true || null,
		}
		observer.observe(this.shadowRoot, config)
	}

	// async showMap(location) {
	// 	this.reply(`<div id='map' style='width:400px;height:300px;'></div>`)

	// 	naver.maps.Service.geocode({
	// 		query: location,
	// 	}, (status, response) => {
	// 		const botChat = this.shadowRoot.querySelectorAll(`bot-chat-balloon`)

	// 		if (status !== naver.maps.Service.Status.OK) {
	// 			throw new Error(`Something wrong!`)
	// 		}
	
	// 		const result = response.v2,
	// 			items = result.addresses
	
	// 		console.log(items)
	// 		const mapOptions = {
	// 			center: new naver.maps.LatLng(items[0][`y`], items[0][`x`]),
	// 			zoom: 12,
	// 		}
			
	// 		const map = new naver.maps.Map(botChat[botChat.length - 1].shadowRoot.querySelector(`#map`), mapOptions)
	// 	})		
	// }

	sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms))
	}

	render() {
		return html`
			${style}
			<main>				
				<!-- <my-chat-balloon></my-chat-balloon>
				<bot-chat-balloon></bot-chat-balloon> -->
			</main>
		`
	}
}

const style = html`
<style scoped>
	main {
		display: grid;
		grid-template-columns: 1fr;
		grid-auto-rows: min-content;
		width: 100%;
		height: 100%;		
	}

	bot-chat-balloon, my-chat-balloon {
		width: 100%;
		min-height: min-content;
	}	
</style>
`

customElements.define(`chat-window-body`, ChatWindowBody)
const chatWindowBody = new ChatWindowBody()
export default chatWindowBody
