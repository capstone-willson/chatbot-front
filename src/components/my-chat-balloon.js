import {html, render} from '../../node_modules/lit-html/lit-html.js'

class MyChatBalloon extends HTMLElement {
	constructor() {
		super()

		this.attachShadow({ mode: `open` })
		render(this.render(), this.shadowRoot)
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
		width: 100%;
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 1fr;
		min-height: 30px;
		box-sizing: border-box;
		float: right;
	}	

	.chat-wrap {
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
		background: #6B7EFC;
		border-radius: 5px;
		padding: 5px 10px 5px 10px;
		box-sizing: border-box;
		font-size: 13px;
		color: white;
		margin-right: 20px;
		margin-left: auto;
	}

	.chat-content:before {
		right: -10px;
		top: 5px;
		content: " ";
		height: 20px;
		width: 20px;
		position: absolute;
		pointer-events: none;
		border-radius: 25px;
		background: #6B7EFC;
		z-index: -1;
	}

	.chat-content:after {
		right: -15px;
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

customElements.define(`my-chat-balloon`, MyChatBalloon)
