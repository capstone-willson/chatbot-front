import {html, render} from '../../node_modules/lit-html/lit-html.js'

class ChatWindowFooter extends HTMLElement {	
	constructor() {
		super()

		this.attachShadow({ mode: `open` })
		render(this.render(), this.shadowRoot)

		this.eventKeydownTextarea = this.onkeydownTextarea.bind(this)
		this.eventClickSendButton = this.onClickSendButton.bind(this)
	}

	connectedCallback() {
		this.shadowRoot.querySelector(`.send_text`).addEventListener(`keypress`, this.eventKeydownTextarea)
		this.shadowRoot.querySelector(`.send_button`).addEventListener(`click`, this.eventClickSendButton)
	}

	disconnectedCallback() {
		this.shadowRoot.querySelector(`.send_text`).removeEventListener(`keypress`, this.eventKeydownTextarea)
		this.shadowRoot.querySelector(`.send_button`).removeEventListener(`click`, this.eventClickSendButton)
	}

	onkeydownTextarea(event) {
		const isEnter = event.code === `Enter`
		const chatBody = document.querySelector(`chat-window`).shadowRoot.querySelector(`chat-window-body`)
		const sendText = this.shadowRoot.querySelector(`.send_text`)

		if(isEnter) {
			event.preventDefault()
			chatBody.send(sendText.value)
			this.analyzeText(sendText.value)
			// this.replyByPingpongAPI(sendText.value)
			sendText.value = ``			
		}
	}

	onClickSendButton() {
		const chatBody = document.querySelector(`chat-window`).shadowRoot.querySelector(`chat-window-body`)
		const sendText = this.shadowRoot.querySelector(`.send_text`)

		chatBody.send(sendText.value)
		this.analyzeText(sendText.value)
		// this.replyByPingpongAPI(sendText.value)
		sendText.value = ``		
	}

	analyzeText(text) {
		const xhr = new XMLHttpRequest()
		const COMPLETED = 4, OK = 200
		let subject, verb

		if(!xhr) {
			throw new Error(`XHR 호출 불가`)
		}		
		xhr.open(`POST`, `http://aiopen.etri.re.kr:8000/Demo/WiseNLU`)	
		xhr.setRequestHeader(`x-requested-with`, `XMLHttpRequest`)
		xhr.addEventListener(`readystatechange`, () => {
			if(xhr.readyState === COMPLETED) {
				if(xhr.status === OK) {
					subject = JSON.parse(xhr.responseText)[`return_object`][`sentence`][0][`SRL`][0][`argument`][0][`text`]

					if(JSON.parse(xhr.responseText)[`return_object`][`sentence`][0][`SRL`].length === 0) {
						return
					}					
					verb = JSON.parse(xhr.responseText)[`return_object`][`sentence`][0][`SRL`][0][`verb`]
					console.info(subject, verb)
					
					this.searchBook(subject, verb)
				} else {
					throw new Error(`No XHR`)
				}
			}
		})		
		xhr.send(`{"request_id": "reserved field","argument": {"text": "${text}","analysis_code": "srl"}}`)
	}

	searchBook(subject, verb) {
		const chatBody = document.querySelector(`chat-window`).shadowRoot.querySelector(`chat-window-body`)
		const NO_SEARCH = -1
		if (verb.indexOf(`찾`) !== NO_SEARCH) {
			chatBody.reply(`<iframe class='iframe_library' src='http://localhost:8080/https://information.hanyang.ac.kr/#/search/mon/si?all=1%7Ck%7Ca%7C%EB%8B%AC%EB%B9%9B%20%EC%95%84%EB%A6%AC%EB%9E%91&rq=BRANCH%3D9'></iframe`)			
		}
	}

	replyByPingpongAPI(text) {
		const xhr = new XMLHttpRequest()
		const COMPLETED = 4, OK = 200, FIRST_TEXT = 0
		const chatBody = document.querySelector(`chat-window`).shadowRoot.querySelector(`chat-window-body`)

		if(!xhr) {
			throw new Error(`XHR 호출 불가`)
		}		
		xhr.open(`GET`, `http://localhost:8080/https://pingpong.us/api/reaction.php?custom=basic&query=${encodeURIComponent(text)}`)	
		xhr.setRequestHeader(`x-requested-with`, `XMLHttpRequest`)
		xhr.addEventListener(`readystatechange`, () => {
			if(xhr.readyState === COMPLETED) {
				if(xhr.status === OK) {
					const data = JSON.parse(xhr.responseText)
					const RAND = Math.floor(Math.random() * data.length)
					const speack = data[RAND][`message`].split(`(`)[FIRST_TEXT]
					chatBody.reply(speack)
				} else {
					throw new Error(`No XHR`)
				}
			}
		})		
		xhr.send()
	}
	

	render() {
		return html`
			${style}
			<main>
				<textarea class='send_text'></textarea>
				<div class='send_button_wrap'>
					<button class='send_button' type='button'>${i18next.t(`SEND_MESSAGE`)}</button>
				</div>
			</main>
		`
	}
}

const style = html`
<style scoped>
	main {
		display: grid;
		grid-template-columns: 1fr 70px;
		grid-template-rows: 1fr;
		width: 100%;
		height: 100%;
	}

	.send_text {
		border: 0;
		resize: none;
		margin: 10px;
		font-size: 14px;
	}

	.send_text:focus {
		outline: none;
	}

	.send_button {
		background-color: #FFEC42;
		border: 0.5px solid #DFCE3D;
		box-sizing: border-box;
		padding-top: 5px;
		padding-bottom: 5px;
		width: 50px;
		margin-left: auto;
		margin-right: auto;
		border-radius: 2px;
		font-size: 12px;
		position: relative;
		top: 10%;
		left: 50%;
		transform: translateX(-50%);
		color: rgba(0, 0, 0, 0.4);
	}

	.send_button:hover {
		background-color: #F5E340;
		color: rgba(0, 0, 0, 0.8);
	}
</style>
`

customElements.define(`chat-window-footer`, ChatWindowFooter)
