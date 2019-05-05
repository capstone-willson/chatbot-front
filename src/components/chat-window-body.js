import {html, render} from '../../node_modules/lit-html/lit-html.js'
import './bot-chat-balloon.js'
import './my-chat-balloon.js'
import './book-list.js'
import './bus-info.js' 

class ChatWindowBody extends HTMLElement {
	constructor() {
		super()

		this.attachShadow({ mode: `open` })
		render(this.render(), this.shadowRoot)		
	}

	connectedCallback() {
		this.chatWindow = document.querySelector(`chat-window`)

		// this.bot = new RiveScript()

		// 라이브 스크립트 테스트 코드
		// this.bot.loadFile(`/assets/hy-lion.rive`).then(this.loading_done.bind(this)).catch(this.loading_error)
	}
	
	loading_done() {
		const username = `hy-lion`
		const sendText = `hello`

		this.bot.sortReplies()		

		this.send(sendText)
		this.bot.reply(username, sendText).then(reply => {
			this.reply(reply)
		})
	}

	loading_error(error) {
		throw new Error(`Error when loading files: ${error}`)
	}

	reply(text) {
		const main = this.shadowRoot.querySelector(`main`)
		const ONE = 1, LAST_CHILD_NUM = main.children.length - ONE
		const lastChat = main.children[LAST_CHILD_NUM]
		const isBot = main.children.length && main.children[LAST_CHILD_NUM].localName === `bot-chat-balloon`
		

		if(isBot == false) {
			const botChatBalloon = document.createElement(`bot-chat-balloon`)
			main.appendChild(botChatBalloon)
			botChatBalloon.chat(text)
			this.chatWindow.scrollToLast()
			return
		}
		lastChat.chat(text)
		this.chatWindow.scrollToLast()
	}

	send(text) {
		const main = this.shadowRoot.querySelector(`main`)
		const ONE = 1, LAST_CHILD_NUM = main.children.length - ONE
		const lastChat = main.children[LAST_CHILD_NUM]
		const isMe = main.children.length && main.children[LAST_CHILD_NUM].localName === `my-chat-balloon`

		if(isMe == false) {
			const myChatBalloon = document.createElement(`my-chat-balloon`)
			main.appendChild(myChatBalloon)
			myChatBalloon.chat(text)
			this.chatWindow.scrollToLast()
			return
		}
		lastChat.chat(text)
		this.chatWindow.scrollToLast()
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
