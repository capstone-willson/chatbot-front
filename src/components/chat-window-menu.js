import {html, render} from '../../node_modules/lit-html/lit-html.js'
import Main from '../main.js'

class ChatWindowMenu extends HTMLElement {
	constructor() {
		super()

		this.attachShadow({ mode: `open` })
		render(this.render(), this.shadowRoot)

		this.menuState = `hide`
		this.eventClickBotSetting = this.onClickBotSetting.bind(this)
	}

	connectedCallback() {
		this.shadowRoot.querySelector(`.menu .bot-setting`).addEventListener(`click`, this.eventClickBotSetting)
		this.shadowRoot.querySelector(`.menu`).addEventListener(`click`, event => this.onClickOutOfMenu(event))
	}

	disconnectedCallback() {
		this.shadowRoot.querySelector(`.menu .bot-setting`).removeEventListener(`click`, this.eventClickBotSetting)
	}	

	onClickOutOfMenu(event) {
		if(event.target.classList.contains(`menu`)) {
			this.hide()
		}
	}

	onClickBotSetting() {
		this.hide()
		this.openBotSetting()
	}

	openBotSetting() {
		Main.loadingDOM()
		Main.renderBotSettingWindow()
	}

	show() {
		this.style.display = `block`
		this.menuState = `show`
	}

	hide() {
		this.style.display = `none`
		this.menuState = `hide`
	}

	render() {
		return html`
			${style}
			<ul class='menu'>
				<li class='bot-setting' title='${i18next.t(`MENU_BOT_SETTING`)}'>${i18next.t(`MENU_BOT_SETTING`)}</li>
				<li class='check-analysis' title='${i18next.t(`MENU_CHECK_ANALYSIS`)}'><input type='checkbox' id='check-analysis' /><label for='check-analysis'>${i18next.t(`MENU_CHECK_ANALYSIS`)}</label></li>
			</ul>
		`
	}
}

const style = html`
<style scoped>
	.menu::before {
		content: '';
		position: absolute;
		top: -57px;
		right: -5px;
		width: 100vw;
		height: 100vh;
		z-index: -1;
	}

	.menu {
		background-color: white;
		padding: 0;
		margin: 0;
		display: grid;
		grid-template-columns: max-content;
		list-style: none;
		border-radius: 2px;
	}

	.menu li {
		padding: 10px 15px 10px 15px;
		margin: 0 1px 0 1px;
		box-sizing: border-box;
		max-width: 200px;
		font-size: 12px;
		text-align: left;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.menu li:not(:last-child) {
		border-bottom: 1px solid #F0F0F0;
	}

	.menu li:hover {
		background-color: #F0F0F0;
	}

	#check-analysis {
		vertical-align: middle;
	}
</style>
`

customElements.define(`chat-window-menu`, ChatWindowMenu)
