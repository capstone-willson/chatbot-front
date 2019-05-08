import {html, render} from '../../node_modules/lit-html/lit-html.js'

class ModalShuttle extends HTMLElement {
	constructor() {
		super()

		this.attachShadow({ mode: `open` })
		render(this.render(), this.shadowRoot)

		this.eventClickBack = this.onClickBack.bind(this)
	}

	connectedCallback() {
		this.addEventListener(`click`, this.eventClickBack, false)
		this.shadowRoot.addEventListener(`click`, event => event.stopPropagation(), false)

		this.shadowRoot.querySelector(`iframe`).addEventListener(`load`, async () => {
			const iframe = this.shadowRoot.querySelector(`iframe`).contentDocument
			iframe.head.insertAdjacentHTML(`beforeend`, `
				<style>
					
				</style>
			`)
		})

	}

	disconnectedCallback() {
		this.removeEventListener(`click`, this.eventClickBack, false)
	}

	onClickBack() {
		this.style.display = `none`
	}

	sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms))
	}

	render() {
		return html`
			${style}
			<div id='modalShuttle'>
				<iframe src='http://34.80.42.161/api/'></iframe>
			</div>
		`
	}	
}

const style = html`
<style>
	*::-webkit-scrollbar {
		width: 0;
		display: none;
	}

	:host {
		display: flex;
		justify-content: center;
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: 50;
	}

	#modalShuttle {
		position: absolute;
		width: 400px;
		height: 90vh;
		align-self: center;
		justify-self: center;
		border-radius: 3px;
		background-color: white;
		overflow: scroll;
		animation: up 0.1s ease-in-out;
	}

	@keyframes up {
		0% {
			width: 0;
			height: 0;
		}

		100% {
			width: 400px;
			height: 90vh;
		}
	}

	iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
`

customElements.define(`modal-shuttle`, ModalShuttle)
