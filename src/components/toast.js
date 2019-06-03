import {html, render} from '../../node_modules/lit-html/lit-html.js'

class ModalToast extends HTMLElement {
	constructor() {
		super()

		this.attachShadow({ mode: `open` })
		this.text = this.getAttribute(`text`)
		render(this.render(), this.shadowRoot)		
	}

	connectedCallback() {
		setTimeout(() => {
			this.remove()
		}, 2000)
	}	

	render() {
		return html`
			${style}
			<div>${this.text}</div>
		`
	}
}

const style = html`
<style>
	:host {
		background-color: rgba(0,0,0,0.75);
		color: white;
		font-size: 20px;
		text-align: center;
		animation: up 0.2s ease-in-out;		
		position: fixed;
		bottom: 100px;
		left: 50%;
		transform: translateX(-50%);
		width: 80vw;
		height: 100px;
		border-radius: 10px;
		z-index: 10000;
	}

	div {
		line-height: 100px;
	}

	@keyframes up {
		0% {
			bottom: -200px;
		}

		100% {
			bottom: 100px;
		}
	}
</style>
`

customElements.define(`modal-toast`, ModalToast)
