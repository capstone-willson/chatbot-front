import {html, render} from '../../node_modules/lit-html/lit-html.js'

class ModalLogin extends HTMLElement {
	constructor() {
		super()

		this.attachShadow({ mode: `open` })
		render(this.render(), this.shadowRoot)

		this.eventClickBack = this.onClickBack.bind(this)
	}

	connectedCallback() {
		this.addEventListener(`click`, this.eventClickBack, false)
		this.shadowRoot.addEventListener(`click`, event => event.stopPropagation(), false)
	}

	disconnectedCallback() {
		this.removeEventListener(`click`, this.eventClickBack, false)
	}

	onClickBack() {
		this.style.display = `none`
	}

	render() {
		return html`
			${style}
			<div id='modalLogin'>
				
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
		background-color: rgba(0, 0, 0, 0.4);
		z-index: 50;
	}

	#modalLogin {
		position: absolute;
		width: 400px;
		height: 400px;
		align-self: center;
		justify-self: center;
		border-radius: 3px;
		background-color: white;
		overflow: scroll;
		animation: up 0.1s ease-in-out;
	}

	@keyframes up {
		0% {
			transform: scale(0);
		}

		100% {
			transform: scale(1);
		}
	}

</style>
`

customElements.define(`modal-login`, ModalLogin)
