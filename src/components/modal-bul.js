import {html, render} from '../../node_modules/lit-html/lit-html.js'

window.css = new CSSStyleSheet()
window.css.replace(`@import url("/stylesheets/bootstrap.min.css")`)

class ModalBul extends HTMLElement {
	constructor() {
		super()				

		this.attachShadow({ mode: `open` })
		this.shadowRoot.adoptedStyleSheets = [window.css]
		render(this.render(), this.shadowRoot)

		this.eventClickBack = this.onClickBack.bind(this)
		this.eventEnter = this.onEnter.bind(this)
	}

	connectedCallback() {
		this.addEventListener(`click`, this.eventClickBack, false)
		this.shadowRoot.addEventListener(`click`, event => event.stopPropagation(), false)

		this.shadowRoot.querySelector(`#typeText`).addEventListener(`keydown`, this.eventEnter, false)
	}

	disconnectedCallback() {
		this.removeEventListener(`click`, this.eventClickBack, false)
		this.shadowRoot.querySelector(`#typeText`).removeEventListener(`keydown`, this.eventEnter, false)
	}

	onClickBack() {
		this.style.display = `none`
	}

	onEnter(event) {
		if (event.keyCode === 13) {
			this.loadXHR(this.shadowRoot.querySelector(`#typeText`).value)
		}	
	}

	loadXHR(text) {
		const xhr = new XMLHttpRequest()

		if(!xhr) {
			throw new Error(`XHR 호출 불가`)			
		}

		xhr.open(`GET`, `https://hanyang-chatbot.kro.kr/api/v2/preprocess/clean/${encodeURIComponent(text)}`)
		xhr.addEventListener(`readystatechange`, () => {
			if (xhr.readyState === xhr.DONE) {
				if (xhr.status === 200 || xhr.status === 201) {							
					const json = JSON.parse(xhr.responseText)
					console.info(json)
					this.shadowRoot.querySelector(`.result`).textContent = json[`cleaend`][0]
					this.shadowRoot.querySelector(`.result-bul`).textContent = json[`cleaend`][1].join(`,`)
				}
			}			
		})
		xhr.send()
	}

	render() {
		return html`
			${style}						
			<div class='modal-context'>
				<h1 class='title'>불용어 처리</h1>				
				<input type='text' class='form-control' id='typeText' placeholder='텍스트를 입력하세요'>
				<label>결과</label>
				<pre class='result'>테스트 결과</pre>

				<label>불용어</label>
				<pre class='result-bul'>불용어 처리 결과</pre>
			</div>
		`
	}	
}

const style = html`
<style>
	::-webkit-scrollbar {
		width: 0;
	}

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
		grid-auto-rows: min-content;		
	}

	.title {		
		width: inherit;
		height: 50px;
		text-align: center;
		font-weight: bold;
		line-height: 50px;
		background-color: #6B7EFC;
		color: white;
		font-size: 18px;
		margin: 0;
	}

	@keyframes up {
		0% {
			transform: scale(0);
		}

		100% {
			transform: scale(1);
		}
	}

	pre {
		display: block;
		padding: 9.5px;
		margin: 0 0 10px;
		font-size: 13px;
		line-height: 1.42857143;
		color: #333;
		word-break: break-all;
		word-wrap: break-word;
		background-color: #f5f5f5;
		border: 1px solid #ccc;
		border-radius: 4px;
		margin: 10px;
		width: 380px;
		box-sizing: border-box;
		white-space: normal;
	}

	#typeText {
		margin: 10px;
		width: 380px;
		box-sizing: border-box;
	}

	label {
		margin: 10px;
		font-weight: bold;
	}
</style>
`

customElements.define(`modal-bul`, ModalBul)
