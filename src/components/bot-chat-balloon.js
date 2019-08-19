import {html, render} from '../../node_modules/lit-html/lit-html.js'

class BotChatBalloon extends HTMLElement {
	constructor() {
		super()

		this.attachShadow({ mode: `open` })
		render(this.render(), this.shadowRoot)
		this.chatWindow = document.querySelector(`chat-window`)
		this.eventClickBlockquote = this.onClickBlockquote.bind(this)
		this.eventClickTabs = this.onClickTabs.bind(this)
	}

	connectedCallback() {
		this.shadowRoot.addEventListener(`click`, this.eventClickBlockquote, true)
		this.shadowRoot.addEventListener(`click`, this.eventClickTabs, true)
	}

	disconnectedCallback() {
		this.shadowRoot.removeEventListener(`click`, this.eventClickBlockquote, true)
		this.shadowRoot.removeEventListener(`click`, this.eventClickTabs, true)
	}

	onClickBlockquote(event) {
		const target = event.target

		if (target.localName === `blockquote`) {
			this.shadowRoot.querySelectorAll(`blockquote`).forEach(each => {
				each.classList.remove(`active`)
				each.closest(`[class*=chat-content]`).style.backgroundColor = `lightgray`
				if (each.querySelector(`string`)) {
					each.querySelector(`string`).style.color = `#4A4C4E`
				}				
			})
			target.classList.add(`active`)
			target.closest(`[class*=chat-content]`).style.backgroundColor = `white`
			if (target.querySelector(`string`)) {
				target.querySelector(`string`).style.color = `blue`
			}			
			this.loadXhrQA(target)		
		}		
	}

	loadXhrQA(target) {
		const _target = target		
		const xhr = new XMLHttpRequest()		

		if(!xhr) {
			throw new Error(`XHR 호출 불가`)
		}		
		xhr.open(`GET`, `https://hanyang-chatbot.kro.kr:8000/v2/service/QA/_id?text=${_target.dataset.text}&_id=${_target.dataset.id}`)
		xhr.addEventListener(`readystatechange`, () => {
			if (xhr.readyState === xhr.DONE) {
				if (xhr.status === 200 || xhr.status === 201) {
					if (JSON.parse(xhr.responseText)[`answer`]) {
						target.innerHTML = target.textContent.replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/g, ``)
						target.innerHTML = target.textContent.split(JSON.parse(xhr.responseText)[`answer`]).join(`<string style='color: blue'>${JSON.parse(xhr.responseText)[`answer`]}</string>`)
					} else {
						if (!target.textContent.includes(`(정답 없음)`)) {
							target.innerHTML = `${target.textContent}<span style='color:red'>(정답 없음)</span>`
						}						
					}
					if (JSON.parse(xhr.responseText)[`answer`]) {
						this.shadowRoot.querySelector(`.chat-content`).textContent = `${JSON.parse(xhr.responseText)[`answer`]}이다냥~`
					} else {
						this.shadowRoot.querySelector(`.chat-content`).textContent = `못찾겠다다냥~`
					}
				}
			}
		})
		xhr.send()
	}

	onClickTabs(event) {
		const target = event.target
		if (target.localName === `vaadin-tab`) {			
			const list = this.shadowRoot.querySelector(`vaadin-list-box`)
			const xhr = new XMLHttpRequest()		

			if(!xhr) {
				throw new Error(`XHR 호출 불가`)
			}		
			xhr.open(`GET`, `https://34.80.42.161:8080/hanyangfood/`)
			xhr.addEventListener(`readystatechange`, () => {
				if (xhr.readyState === xhr.DONE) {
					if (xhr.status === 200 || xhr.status === 201) {
						const json = JSON.parse(xhr.responseText)					
						if (target.textContent === `교직원`) {
							list.innerHTML = `
								${json[0][`foodList`][0] ? json[0][`foodList`][0].map(each => `<vaadin-item disabled>아침 ${each}</vaadin-item>`).join(``): ``}
								<hr>
								${json[0][`foodList`][1] ? json[0][`foodList`][1].map(each => `<vaadin-item disabled>점심 ${each}</vaadin-item>`).join(``): ``}
								<hr>
								${json[0][`foodList`][2] ? json[0][`foodList`][2].map(each => `<vaadin-item disabled>저녁 ${each}</vaadin-item>`).join(``): ``}
							`	
						} else if (target.textContent === `학생식당`) {
							list.innerHTML = `
								${json[1][`foodList`][0] ? json[1][`foodList`][0].map(each => `<vaadin-item disabled>아침 ${each}</vaadin-item>`).join(``): ``}
								<hr>
								${json[1][`foodList`][1] ? json[1][`foodList`][1].map(each => `<vaadin-item disabled>점심 ${each}</vaadin-item>`).join(``): ``}
								<hr>
								${json[1][`foodList`][2] ? json[1][`foodList`][2].map(each => `<vaadin-item disabled>저녁 ${each}</vaadin-item>`).join(``): ``}
							`	
						} else if (target.textContent === `기숙사`) {
							list.innerHTML = `
								${json[2][`foodList`][0] ? json[2][`foodList`][0].map(each => `<vaadin-item disabled>아침 ${each}</vaadin-item>`).join(``): ``}
								<hr>
								${json[2][`foodList`][1] ? json[2][`foodList`][1].map(each => `<vaadin-item disabled>점심 ${each}</vaadin-item>`).join(``): ``}
								<hr>
								${json[2][`foodList`][2] ? json[2][`foodList`][2].map(each => `<vaadin-item disabled>저녁 ${each}</vaadin-item>`).join(``): ``}
							`	
						} else if (target.textContent === `푸드코트`) {
							list.innerHTML = `
								${json[3][`foodList`][0] ? json[3][`foodList`][0].map(each => `<vaadin-item disabled>아침 ${each}</vaadin-item>`).join(``): ``}
								<hr>
								${json[3][`foodList`][1] ? json[3][`foodList`][1].map(each => `<vaadin-item disabled>점심 ${each}</vaadin-item>`).join(``): ``}
								<hr>
								${json[3][`foodList`][2] ? json[3][`foodList`][2].map(each => `<vaadin-item disabled>저녁 ${each}</vaadin-item>`).join(``): ``}
							`	
						} else if (target.textContent === `창업보육센터`) {
							list.innerHTML = `
								${json[4][`foodList`][0] ? json[4][`foodList`][0].map(each => `<vaadin-item disabled>아침 ${each}</vaadin-item>`).join(``): ``}
								<hr>
								${json[4][`foodList`][1] ? json[4][`foodList`][1].map(each => `<vaadin-item disabled>점심 ${each}</vaadin-item>`).join(``): ``}
								<hr>
								${json[4][`foodList`][2] ? json[4][`foodList`][2].map(each => `<vaadin-item disabled>저녁 ${each}</vaadin-item>`).join(``): ``}
							`	
						}					
					}
				}
			})

			xhr.send()		
		}		
	}

	chat(text, config) {
		const NO_CHAT = 0
		const isNoChat = this.shadowRoot.querySelector(`.chat-wrap`).childElementCount === NO_CHAT

		if(isNoChat) {
			this.newChat(text, config)
			return
		}

		this.continueChat(text, config)
	}

	newChat(text, config = {backgroundColor: `white`}) {
		const div = document.createElement(`div`)
		div.style.backgroundColor = config.backgroundColor
		div.classList.add(`chat-content`)
		div.innerHTML = text
		this.shadowRoot.querySelector(`.chat-wrap`).appendChild(div)
	}

	continueChat(text, config = {backgroundColor: `white`}) {
		const div = document.createElement(`div`)
		div.style.backgroundColor = config.backgroundColor
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
		max-width: calc(100vw - 80px);		
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

	blockquote {
		max-width: calc(100vw - 80px);
		box-sizing: border-box;
	}

	blockquote:not(.active) {
		margin: 0;
		border-left: 3px solid gray;
		padding-left: 30px;
		width: 400px;
		font-style: italic;
		cursor: pointer;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;		
	}

	blockquote.active {
		margin: 0;
		border-left: 3px solid gray;
		padding-left: 30px;
		width: 400px;
		font-style: italic;
		cursor: pointer;
	}

	.block-1 {
		margin-top: 20px !important;
	}

	.block-1::before {
		content: '“';
		font-family: Arial;
		color: gray;
		font-size:4em;
		position: absolute;
		left: 15px;
		top: -10px;
	}

	.block-1::after {
		position: absolute;
		left: 45px;
    	font-weight: bold;
		top: 5px;
		content: '찾은 문단';
		font-family: Arial;
		color: gray;
	}

	.input-form {
		grid-template-areas: "a b c" "d e c" "f g c";
    	display: grid;
	}

	.label-text {
		grid-area: a;
		font-weight: bold;
	}

	#text {
		grid-area: b;
		border: 1px solid lightgray;
	}

	.label-answer {
		grid-area: d;
		font-weight: bold;
	}

	#answer {
		grid-area: e;
		border: 1px solid lightgray;
	}

	#btnSubmit {
		grid-area: c;
		background-color: #6B7EFC;
		color: white;
		border: 0;
		border-radius: 2px;
		font-weight: bold;
	}

	#btnSubmit:hover {
		color: black;
	}

	.label-category {
		grid-area: f;
		font-weight: bold;
	}

	#category {
		grid-area: g;
		border: 1px solid lightgray;
	}

	iframe {
		height: 100px;
		border: 0;
	}

	::selection {
		background-color: yellow;
	}
</style>
`

customElements.define(`bot-chat-balloon`, BotChatBalloon)
