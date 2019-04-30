import {html, render} from '../node_modules/lit-html/lit-html.js'
import './components/bot-setting-window-header.js'
import './components/bot-setting-window-body.js'

class BotSettingWindow extends HTMLElement {
	constructor() {
		super()

		this.attachShadow({ mode: `open` })
		render(this.render(), this.shadowRoot)
	}

	render() {
		return html`
			${style}
			<main>
				<bot-setting-header></bot-setting-header>
				<bot-setting-body></bot-setting-body>
				<bot-setting-footer></bot-setting-footer>
			</main>
		`
	}
}

const style = html`
<style scoped>
	main {
		position: absolute;		
		top: 0;
		left: 0;		
		width: 100vw;
		height: 100vh;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 80px 1fr;		
	}

	bot-setting-header {
		background-color: #A9BDCE;
	}

	bot-setting-body {		
		white-space: pre;
		padding-left: 10px;
		position: relative;
		overflow: scroll;
	}
</style>
`

customElements.define(`bot-setting-window`, BotSettingWindow)
