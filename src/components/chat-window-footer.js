import {html, render} from '../../node_modules/lit-html/lit-html.js'
import searchLibrary from '../modules/search-library.js'
// import searchFoodMenu from '../modules/search-food-menu.js'
// import chatWindowBody from './chat-window-body.js'

class ChatWindowFooter extends HTMLElement {	
	constructor() {
		super()

		this.attachShadow({ mode: `open` })
		render(this.render(), this.shadowRoot)

		this.eventKeydownTextarea = this.onkeydownTextarea.bind(this)
		this.eventClickSendButton = this.onClickSendButton.bind(this)
		this.canTyping = true
		this.canUserChat = true
		this.canRemoteChat = false
		this.isLibraryMode = false
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

		if (event.target.value.trim() === ``) {			
			return
		}

		if (isEnter) {
			event.preventDefault()
			this.sendAndReply()
		}
	}

	onClickSendButton() {
		if (this.shadowRoot.querySelector(`.send_text`).value.trim() === ``) {
			return
		}
		this.sendAndReply()		
	}

	sendAndReply() {
		const chatBody = document.querySelector(`chat-window`).shadowRoot.querySelector(`chat-window-body`)
		const sendText = this.shadowRoot.querySelector(`.send_text`)		
		
		if (this.canUserChat) {
			chatBody.send(sendText.value)
		}

		if (this.canRemoteChat) {
			chatBody.reply(sendText.value)
			chatBody.socket.emit(`replyRemote`, {
				target: this.target,
				chat: sendText.value,
			})							

			const xhr = new XMLHttpRequest()
			const formData = new FormData()
			const question = querySelectorShadowDom.querySelectorAllDeep(`my-chat-balloon .chat-content`)[querySelectorShadowDom.querySelectorAllDeep(`my-chat-balloon .chat-content`).length - 1].textContent
			formData.append(`text`, question)
			formData.append(`answer`, sendText.value)
			formData.append(`category`, `talk`)

			console.info(question, sendText.value)

			if(!xhr) {
				throw new Error(`XHR 호출 불가`)
			}

			xhr.open(`POST`, `http://hanyang-chatbot.kro.kr:8000/v1/db/questions/add`)
			xhr.addEventListener(`readystatechange`, () => {
				if (xhr.readyState === xhr.DONE) {
					if (xhr.status === 200 || xhr.status === 201) {		
						console.info(JSON.parse(xhr.responseText))
						chatBody.reply(JSON.parse(xhr.responseText)[`answer`][`answer`])
					}
				}
			})
			xhr.send(formData)			
		}

		if (this.canTyping) {			
			this.chatQuestionAnalysis(sendText.value)
			this.replyChat(sendText.value)
		}
		// chatBody.botSay(sendText.value)

		// searchLibrary.replyAboutLibrary(sendText.value)
		// searchFoodMenu.openHanyangSite()
		// this.replyByPingpongAPI(sendText.value)
		// document.querySelector(`chat-window`).shadowRoot.querySelector(`chat-window-body`).reply(`<bus-info question='${sendText.value}'></bus-info>`)
		sendText.value = ``
	}

	replyChat(text) {
		const chatBody = document.querySelector(`chat-window`).shadowRoot.querySelector(`chat-window-body`)
		const xhr = new XMLHttpRequest()
		const formData = new FormData()
		formData.append(`chat`, text)

		if(!xhr) {
			throw new Error(`XHR 호출 불가`)			
		}

		xhr.open(`POST`, `http://hanyang-chatbot.kro.kr:8000/v1/chat`)
		xhr.addEventListener(`readystatechange`, () => {
			if (xhr.readyState === xhr.DONE) {
				if (xhr.status === 200 || xhr.status === 201) {	
					// JSON.parse(xhr.responseText)[`answer`][`mode`]
					console.info(JSON.parse(xhr.responseText)) 
					if (this.isLibraryMode === false) {
						if (JSON.parse(xhr.responseText)[`answer`] && JSON.parse(xhr.responseText)[`answer`][`mode`] === `talk`) {
							// this.replyByPingpongAPI(text)
							chatBody.reply(JSON.parse(xhr.responseText)[`answer`][`answer`])
						} else if (JSON.parse(xhr.responseText)[`answer`] && JSON.parse(xhr.responseText)[`answer`][`mode`] === `book`) {
							searchLibrary.replyAboutLibrary(text)
						} else if (JSON.parse(xhr.responseText)[`answer`] && JSON.parse(xhr.responseText)[`answer`][`mode`] === `shuttle_bus`) {
							document.querySelector(`chat-window`).shadowRoot.querySelector(`chat-window-body`).reply(`<bus-info question='${text}'></bus-info>`)
						} else if (JSON.parse(xhr.responseText)[`answer`] && JSON.parse(xhr.responseText)[`answer`][`mode`] === `prepared`) {
							chatBody.reply(JSON.parse(xhr.responseText)[`answer`][`answer`])
						} else if (JSON.parse(xhr.responseText)[`answer`] && JSON.parse(xhr.responseText)[`answer`][`mode`] === `search`) {
							this.chatAboutSearch(JSON.parse(xhr.responseText), text)
						} else if (JSON.parse(xhr.responseText)[`answer`] && JSON.parse(xhr.responseText)[`answer`][`mode`] === `food`) {							
							this.getFoodList()
						} else if (JSON.parse(xhr.responseText)[`answer`] && JSON.parse(xhr.responseText)[`answer`][`mode`] === `unknown`) {							
							chatBody.reply(JSON.parse(xhr.responseText)[`answer`][`answer`])
						} else {
							chatBody.reply(`무슨 말인지 모르겠다냥~ 다시 해달라냥`)
						}
					}
				} else {
					chatBody.reply(`서버 점검 중이다냥~`)
				}
			}			
		})
		xhr.send(formData)
	}

	getFoodList() {
		const chatBody = document.querySelector(`chat-window`).shadowRoot.querySelector(`chat-window-body`)
		const xhr = new XMLHttpRequest()		

		if(!xhr) {
			throw new Error(`XHR 호출 불가`)
		}		
		xhr.open(`GET`, `http://hanyang-chatbot.kro.kr:8080/hanyangfood/`)			
		xhr.addEventListener(`readystatechange`, () => {
			if (xhr.readyState === xhr.DONE) {
				if (xhr.status === 200 || xhr.status === 201) {
					chatBody.reply(`
					<vaadin-tabs>
						<vaadin-tab>교직원</vaadin-tab>
						<vaadin-tab>학생식당</vaadin-tab>
						<vaadin-tab>기숙사</vaadin-tab>
						<vaadin-tab>푸드코트</vaadin-tab>
						<vaadin-tab>창업보육센터</vaadin-tab>
					</vaadin-tabs>
					<vaadin-list-box>
						${JSON.parse(xhr.responseText)[0][`foodList`][0] ? JSON.parse(xhr.responseText)[0][`foodList`][0].map(each => `<vaadin-item disabled>아침 ${each}</vaadin-item>`): ``}
						<hr>
						${JSON.parse(xhr.responseText)[0][`foodList`][1] ? JSON.parse(xhr.responseText)[0][`foodList`][1].map(each => `<vaadin-item disabled>점심 ${each}</vaadin-item>`): ``}
						<hr>
						${JSON.parse(xhr.responseText)[0][`foodList`][2] ? JSON.parse(xhr.responseText)[0][`foodList`][2].map(each => `<vaadin-item disabled>저녁 ${each}</vaadin-item>`): ``}
					</vaadin-list-box>`)
				}
			}
		})		
		xhr.send()		
	}

	chatAboutSearch(json, text) {
		const chatBody = querySelectorShadowDom.querySelectorDeep(`chat-window-body`)
		chatBody.reply(`${json[`answer`][`answer`]}이다냥~`)
		chatBody.reply(`
		<blockquote class='block-1 active' data-text='${text}' data-subject='${json[`answer`][`output`][`context_subject-1`]}'>
			${json[`answer`][`output`][`context-1`].split(json[`answer`][`answer`]).join(`<string style='color: blue'>${json[`answer`][`answer`]}</string>`)}
		</blockquote>		
		`)
		chatBody.reply(`
		<blockquote class='block-2' data-text='${text}' data-subject='${json[`answer`][`output`][`context_subject-2`]}'>
			${json[`answer`][`output`][`context-2`].split(json[`answer`][`answer`]).join(`<string style='color: blue'>${json[`answer`][`answer`]}</string>`)}
		</blockquote>
		`, {
			backgroundColor: `lightgray`,
		})
		chatBody.reply(`
		<blockquote class='block-3' data-text='${text}' data-subject='${json[`answer`][`output`][`context_subject-3`]}'>
			${json[`answer`][`output`][`context-3`].split(json[`answer`][`answer`]).join(`<string style='color: blue'>${json[`answer`][`answer`]}</string>`)}
		</blockquote>
		`, {
			backgroundColor: `lightgray`,
		})		
		console.info(json)
	}

	chatQuestionAnalysis(text) {
		const checkbox = document.querySelector(`chat-window`).shadowRoot.querySelector(`chat-window-header`).shadowRoot.querySelector(`chat-window-menu`).shadowRoot.querySelector(`#check-analysis`)
		if (checkbox.checked) {
			const xhr = new XMLHttpRequest()
			const formData = new FormData()
			formData.append(`chat`, text)
	
			if(!xhr) {
				throw new Error(`XHR 호출 불가`)			
			}
	
			xhr.open(`POST`, `http://hanyang-chatbot.kro.kr:8000/v1/analysis/similarity/morphs`)
			xhr.addEventListener(`readystatechange`, () => {
				if (xhr.readyState === xhr.DONE) {
					if (xhr.status === 200 || xhr.status === 201) {		
						console.info(JSON.parse(xhr.responseText))
						this.insertContent(JSON.parse(xhr.responseText))
							.writeSentence()
							.writeText()
							.scroll()						
					}
				}			
			})
			xhr.send(formData)
		}		
	}

	insertContent(json) {
		const chatBody = document.querySelector(`chat-window`).shadowRoot.querySelector(`chat-window-body`)
		const chatWindow = document.querySelector(`chat-window`)

		return {
			writeSentence(select = 1) {
				for (let i = 1; i < 4; i++) {
					chatBody.reply(`${json[`question_${i}`][`text`]} (SCORE: ${Math.floor(json[`question_${i}`][`score`] * 100)})`)
				}
				chatBody.reply(`<div id='venn'></div>`)
				this.darwVenn(++Object.keys(json[`question_${select}`][`only_in_query`]).length, ++Object.keys(json[`question_${select}`][`only_in_question`]).length, Object.keys(json[`question_${select}`][`in_both`]).length)
				return this
			},
			darwVenn(size1 = 6, size2 = 6, sizeIn = 2) {
				const sets = [ {sets: [`입력값`], size: size1},
					{sets: [`유사값`], size: size2},
					{sets: [`입력값`,`유사값`], size: sizeIn}]
				
				const chart = venn.VennDiagram()
					.width(300)
					.height(200)

				const botChat = chatBody.shadowRoot.querySelectorAll(`bot-chat-balloon`)
				d3.select(botChat[botChat.length - 1].shadowRoot.querySelector(`#venn`))
					.datum(sets)
					.call(chart)

				return this
			},
			writeText() {
				chatBody.reply(`
					<form class='input-form' action='http://hanyang-chatbot.kro.kr:8000/v1/db/questions/add' method='post' target='ifra'>
						<label class='label-text' for='text'>등록질문:</label> <input id='text' name='text' type='text' />
						<label class='label-answer' for='answer'>등록답변:</label> <input id='answer' name='answer' type='text' />
						<label class='label-category' for='category'>등록카테고리:</label> <input id='category' name='category' type='text' />
						<input id='btnSubmit' type='submit' value='전송' />
					</form>
					<iframe name='ifra'></iframe>
				`)
				return this
			},
			scroll() {
				chatWindow.scrollToLast()

				return this
			},
		}
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
		xhr.open(`GET`, `http://hanyang-chatbot.kro.kr:8080/https://pingpong.us/api/reaction.php?custom=basic&query=${encodeURIComponent(text)}`)	
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
