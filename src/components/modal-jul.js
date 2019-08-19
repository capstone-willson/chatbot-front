import {html, render} from '../../node_modules/lit-html/lit-html.js'
import './toast.js'

window.css = new CSSStyleSheet()
window.css.replace(`@import url("/stylesheets/bootstrap.min.css")`)

class ModalJul extends HTMLElement {
	constructor() {
		super()				

		this.attachShadow({ mode: `open` })
		this.shadowRoot.adoptedStyleSheets = [window.css]
		render(this.render(), this.shadowRoot)

		this.eventClickBack = this.onClickBack.bind(this)
		this.eventClickCreate = this.onClickCreate.bind(this)
	}

	connectedCallback() {
		this.addEventListener(`click`, this.eventClickBack, false)
		this.shadowRoot.addEventListener(`click`, event => event.stopPropagation(), false)
		this.shadowRoot.querySelector(`.area-btn-3`).addEventListener(`click`, this.eventClickCreate, false)

		this.createContent()
			.loadXHR()
	}

	disconnectedCallback() {
		this.removeEventListener(`click`, this.eventClickBack, false)
		this.shadowRoot.querySelector(`.area-btn-3`).removeEventListener(`click`, this.eventClickCreate, false)
	}

	onClickBack() {
		this.style.display = `none`
	}

	onClickCreate() {		
		const xhr = new XMLHttpRequest()
		const formData = new FormData()
		formData.append(`orig`, this.shadowRoot.querySelector(`.create-subject`).value)
		formData.append(`sub`, this.shadowRoot.querySelector(`.create-text`).value)

		if(!xhr) {
			throw new Error(`XHR 호출 불가`)			
		}

		xhr.open(`POST`, `https://hanyang-chatbot.kro.kr/api/v2/db/voca/jul-immal`)
		xhr.addEventListener(`readystatechange`, () => {
			if (xhr.readyState === xhr.DONE) {
				if (xhr.status === 200 || xhr.status === 201) {	
					const div = document.createElement(`div`)
					const createDiv = document.createElement(`div`)
					const modal = this.shadowRoot.querySelector(`.modal-context`)

					div.innerHTML = `
					<modal-toast text='DB 문단 저장 성공!'></modal-toast>
					`
					document.body.appendChild(div)					
					
					createDiv.classList.add(`content`)
					createDiv.innerHTML = `
					<input type='hidden' value='${this.shadowRoot.querySelector(`.oId`).value}' />
					<input type='text' class='form-control area-subject' placeholder='줄임말' value='${this.shadowRoot.querySelector(`.create-subject`).value}' />					
					<textarea class='form-control area-text' rows='5'>${this.shadowRoot.querySelector(`.create-text`).value}</textarea>
					<button type='button' class='btn btn-info area-btn'>수정</button>
					<button type='button' class='btn btn-danger area-btn-2'>삭제</button>
					`
					modal.appendChild(createDiv)
					this.shadowRoot.querySelector(`.create-subject`).value = ``
					this.shadowRoot.querySelector(`.create-text`).value = ``
				}
			}			
		})
		xhr.send(formData)
		return this
	}
	

	createContent() {
		const modal = this.shadowRoot.querySelector(`.modal-context`)
		let data		
		return {
			loadXHR() {
				const xhr = new XMLHttpRequest()

				if(!xhr) {
					throw new Error(`XHR 호출 불가`)			
				}

				xhr.open(`GET`, `https://hanyang-chatbot.kro.kr/api/v2/db/voca/jul-immal`)
				xhr.addEventListener(`readystatechange`, () => {
					if (xhr.readyState === xhr.DONE) {
						if (xhr.status === 200 || xhr.status === 201) {	
							data = JSON.parse(xhr.responseText)
							this.create()
						}
					}			
				})
				xhr.send()
				return this
			},
			create() {
				data.forEach(each => {
					const div = document.createElement(`div`)
					div.classList.add(`content`)
					div.innerHTML = `
					<input type='hidden' class='oId' value='${each[`_id`]}' />
					<input type='text' class='form-control area-subject' placeholder='Subject' value='${each[`orig`]}' />					
					<textarea class='form-control area-text' rows='5'>${each[`sub`]}</textarea>
					<button type='button' class='btn btn-info area-btn'>수정</button>
					<button type='button' class='btn btn-danger area-btn-2'>삭제</button>
					`
					modal.appendChild(div)
				})
				return this
			},
		}
	}

	render() {
		return html`
			${style}						
			<div class='modal-context'>
				<h1 class='title'>줄임말 처리</h1>
				<div class='content'>
					<input type='text' class='form-control area-subject create-subject' placeholder='줄임말' />					
					<textarea class='form-control area-text create-text' rows='5' placeholder="원래 단어"></textarea>
					<button type='button' class='btn btn-success area-btn-3'>생성</button>
				</div>
			</div>
		`
	}	
}

const style = html`
<style>
	:host {
		display: flex;
		justify-content: center;
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.4);
		z-index: 50;
	}	

	.modal-context {
		position: absolute;
		width: 400px;
		height: 90vh;
		align-self: center;
		justify-self: center;
		border-radius: 3px;
		background-color: white;
		overflow: scroll;
		animation: up 0.1s ease-in-out;

		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: min-content;		
	}

	.title {		
		position: fixed;
		width: inherit;
		height: 50px;
		text-align: center;
		font-weight: bold;
		line-height: 50px;
		background-color: #6B7EFC;
		color: white;
		font-size: 18px;
		margin: 0 0 50px 0;
	}

	@keyframes up {
		0% {
			transform: scale(0);
		}

		100% {
			transform: scale(1);
		}
	}

	.content:first-of-type {
		margin-top: 50px;
	}

	.content {
		display: grid;
		grid-auto-rows: 40px 40px;
		grid-template-columns: 80% 20%;
		grid-template-areas: 
			"a b"
			"c d";
		padding: 5px 20px 5px 5px;
		height: min-content;
	}

	.area-subject {
		grid-area: a;
	}

	.area-text {
		grid-area: c;
	}

	.area-btn {		
		grid-area: b;
	}

	.area-btn-2 {		
		grid-area: d;
	}

	.area-btn-3 {		
		grid-area: b / span 1 / span 2;
	}
</style>
`

customElements.define(`modal-jul`, ModalJul)
