import {html, render} from '../../node_modules/lit-html/lit-html.js'
// import searchLibrary from '../modules/search-library.js'
// import searchFoodMenu from '../modules/search-food-menu.js'
import chatWindowBody from './chat-window-body.js'

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

		if(isEnter) {
			event.preventDefault()
			this.sendAndReply()
		}
	}

	onClickSendButton() {		
		this.sendAndReply()
	}

	sendAndReply() {
		const chatBody = document.querySelector(`chat-window`).shadowRoot.querySelector(`chat-window-body`)
		const sendText = this.shadowRoot.querySelector(`.send_text`)

		chatBody.send(sendText.value)		
		
		// chatBody.botSay(sendText.value)

		// searchLibrary.replyAboutLibrary(sendText.value)
		// searchFoodMenu.openHanyangSite()
		// this.replyByPingpongAPI(sendText.value)
		// document.querySelector(`chat-window`).shadowRoot.querySelector(`chat-window-body`).reply(`<bus-info question='${sendText.value}'></bus-info>`)
		sendText.value = ``		
	}

	replyAboutLibrary(text) {
		const xhr = new XMLHttpRequest()		

		if(!xhr) {
			throw new Error(`XHR 호출 불가`)
		}		
		xhr.open(`POST`, `http://aiopen.etri.re.kr:8000/Demo/WiseQAnal`)	
		xhr.setRequestHeader(`x-requested-with`, `XMLHttpRequest`)
		xhr.addEventListener(`readystatechange`, () => this.onCompletedSearchBook(xhr))		
		xhr.send(`{"request_id": "reserved field","argument": {"text": "${text}"}}`)

		return this
	}

	onCompletedSearchBook(xhr) {
		const chatBody = document.querySelector(`chat-window`).shadowRoot.querySelector(`chat-window-body`)
		const COMPLETED = 4, OK = 200
		if (xhr.readyState === COMPLETED) {
			if (xhr.status === OK) {
				if (isTopicBook()) {
					chatBody.reply(i18next.t(`INPUT_BOOK_NAME`))
					chatBody.waitSend(data => {
						this.searchBook(data)
					})
				}
			} else {
				throw new Error(`No XHR`)
			}
		}
		
		function isTopicBook() {
			const condition = JSON.parse(xhr.responseText)[`return_object`][`orgQInfo`][`orgQUnit`][`vSATs`][0][`strSAT`]
			if (JSON.parse(xhr.responseText)[`return_object`][`orgQInfo`][`orgQUnit`][`vSATs`][0]) {
				return condition === `AFW_DOCUMENT` || condition === `OGG_LIBRARY`
			}
			return false
		}
	}

	// 책 이름 그대로 검색 받으면, 검색 해줌
	searchBook(text) {
		const xhr = new XMLHttpRequest()			
		if(!xhr) {
			throw new Error(`XHR 호출 불가`)
		}
		xhr.open(`GET`, `https://lib.hanyang.ac.kr/pyxis-api/2/collections/6/search?all=k%7Ca%7C${text}&rq=BRANCH%3D9`)	
		xhr.setRequestHeader(`x-requested-with`, `XMLHttpRequest`)
		xhr.addEventListener(`readystatechange`, () => this.onReadyBookSearch(xhr))		
		xhr.send()
	}

	onReadyBookSearch(xhr) {
		const COMPLETED = 4, OK = 200
		let title, author, publication, imageSrc, isCheckout
		if(xhr.readyState === COMPLETED) {
			if(xhr.status === OK) {					
				// console.log(JSON.parse(xhr.responseText)[`data`][`list`])
				for(let i = 0; i < 3; i++) {
					title = JSON.parse(xhr.responseText)[`data`][`list`][i][`titleStatement`]
					author = JSON.parse(xhr.responseText)[`data`][`list`][i][`author`]
					publication = JSON.parse(xhr.responseText)[`data`][`list`][i][`publication`]
					imageSrc = JSON.parse(xhr.responseText)[`data`][`list`][i][`thumbnailUrl`]
					isCheckout = JSON.parse(xhr.responseText)[`data`][`list`][i][`branchVolumes`]
						.find(each => each.name === `ERICA학술정보관`)[`cState`]
					// console.log(title, author, publication, imageSrc, isCheckout)							
					this.createBookList({
						title,
						author,
						publication,
						imageSrc,
						isCheckout,
					})	
				}
			} else {
				throw new Error(`No XHR`)
			}
		}
	}

	createBookList(bookInfo) {
		const chatBody = document.querySelector(`chat-window`).shadowRoot.querySelector(`chat-window-body`)

		chatBody.reply(`<book-list 
			imageSrc='${bookInfo.imageSrc}' 
			title='${bookInfo.title}' 
			author='${bookInfo.author}' 
			publication='${bookInfo.publication}' 
			isCheckout='${bookInfo.isCheckout}' ></book-list>`)
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
		background-color: #6B7EFC;
		border: 0.5px solid #6B7EFC;
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
		color: white;
		font-weight: bold;
		transition: all 0.1s ease-in;
	}

	.send_button:hover {
		color: black;
	}	
</style>
`

customElements.define(`chat-window-footer`, ChatWindowFooter)
