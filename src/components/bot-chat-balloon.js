import {html, render} from '../../node_modules/lit-html/lit-html.js'

class BotChatBalloon extends HTMLElement {
	constructor() {
		super()

		this.attachShadow({ mode: `open` })
		render(this.render(), this.shadowRoot)
		this.chatWindow = document.querySelector(`chat-window`)
	}

	chat(text) {
		const NO_CHAT = 0
		const isNoChat = this.shadowRoot.querySelector(`.chat-wrap`).childElementCount === NO_CHAT

		if(isNoChat) {
			this.newChat(text)
			return
		}

		this.continueChat(text)
	}

	newChat(text) {
		const div = document.createElement(`div`)
		div.classList.add(`chat-content`)
		div.innerHTML = text
		this.shadowRoot.querySelector(`.chat-wrap`).appendChild(div)
	}

	continueChat(text) {
		const div = document.createElement(`div`)
		div.classList.add(`chat-content-continue`)
		div.innerHTML = text
		this.shadowRoot.querySelector(`.chat-wrap`).appendChild(div)
	}

	render() {
		return html`
			${style}
			<main>
				<div class='profile'>
					<div class='profile-img'></div>
				</div>
				<div class='name'>${i18next.t(`BOT_NAME`)}</div>
				<div class='chat-wrap'>
					<!-- <div class='chat-content'></div> -->
					<!-- <div class='chat-content-continue'></div> -->
				</div>
			</main>
		`
	}
}

const style = html`
<style scoped>
	main {
		display: grid;
		grid-template-columns: min-content 1fr;
		grid-template-rows: min-content 1fr;
		grid-template-areas: 
			"a b"
			"a c";
		min-height: 70px;
	}	

	.profile {
		padding: 15px 10px 15px 15px;
		grid-area: a;
		z-index: 10;
	}

	.profile-img {
		width: 40px;
		height: 40px;
		border-radius: 25px;
		background-image: url('/images/hi-lion.png');
		background-repeat: no-repeat;
    	background-position: center;
    	background-size: contain;
	}
	
	.name {
		grid-area: b;
		font-size: 12px;
		color: #4A4C4E;
		padding-top: 12px;
	}

	.chat-wrap {
		grid-area: c;
		padding-top: 5px;
		padding-bottom: 5px;
		z-index: 5;

		display: grid;
		grid-template-rows: 1fr;
		grid-row-gap: 5px;
	}

	.chat-content, .chat-content-continue {
		display: inline-block;
		position: relative;
		min-height: 28px;
		min-width: 20px;
		width: fit-content;
		max-width: calc(80vw - 65px);
		background: white;
		border-radius: 5px;
		padding: 5px 10px 5px 10px;
		box-sizing: border-box;
		font-size: 13px;
		color: #4A4C4E;
	}

	.chat-content:before {
		left: -10px;
		top: 5px;
		content: " ";
		height: 20px;
		width: 20px;
		position: absolute;
		pointer-events: none;
		border-radius: 25px;
		background: white;
		z-index: -1;
	}

	.chat-content:after {
		left: -15px;
		top: 0px;
		content: " ";
		height: 20px;
		width: 20px;
		position: absolute;
		pointer-events: none;
		border-radius: 25px;
		background: #EDEEFE;
		z-index: -1;
	}	
</style>
`

customElements.define(`bot-chat-balloon`, BotChatBalloon)
