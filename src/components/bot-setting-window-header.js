import {html, render} from '../../node_modules/lit-html/lit-html.js'
import './bot-setting-menu.js'

class BotSettingHeader extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: `open` })
		render(this.render(), this.shadowRoot)

		this.eventClickMenu = this.onClickMenu.bind(this)
		this.eventClickRivescript = this.onClickRivescript.bind(this)
	}

	connectedCallback() {
		this.shadowRoot.querySelector(`.menu-button`).addEventListener(`click`, this.eventClickMenu, true)
		this.shadowRoot.querySelector(`.button-rivescript`).addEventListener(`click`, this.eventClickRivescript, true)
	}

	disconnectedCallback() {
		this.shadowRoot.querySelector(`.menu-button`).removeEventListener(`click`, this.eventClickMenu, true)
		this.shadowRoot.querySelector(`.button-rivescript`).removeEventListener(`click`, this.eventClickRivescript, true)
	}

	onClickMenu() {
		const botSettingMenu = this.shadowRoot.querySelector(`bot-setting-menu`)
		if(botSettingMenu.menuState === `hide`) {
			botSettingMenu.show()
		} else {
			botSettingMenu.hide()
		}
	}

	onClickRivescript() {
		const body = document.querySelector(`bot-setting-window`).shadowRoot.querySelector(`bot-setting-body`)
		const buttonRivescript = this.shadowRoot.querySelector(`.button-rivescript`)

		this.emptyBody()
		if (buttonRivescript.classList.contains(`on`)) {
			buttonRivescript.classList.remove(`on`)
		} else {
			buttonRivescript.classList.add(`on`)
			this.readRivescript().then(script => {			
				body.textContent = script
			}).catch(error => {
				throw new Error(`No read Rivescript: ${error}`)
			})
		}				
	}

	emptyBody() {
		document.querySelector(`bot-setting-window`).shadowRoot.querySelector(`bot-setting-body`).innerHTML = ``		
	}

	readRivescript() {
		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest()
			const COMPLETE = 200

			xhr.open(`GET`, `http://localhost:8080/assets/hy-lion.rive`)
			xhr.send()
			xhr.addEventListener(`readystatechange`, () => {
				if (xhr.readyState === XMLHttpRequest.DONE) {
					if (xhr.status === COMPLETE) {
						resolve(xhr.response)
					} else {
						reject(xhr.statusText)
					}
				}
			})
		})
	}

	render() {
		return html`
			${style}
			<main>
				<div class='setting-img-wrap'>
					<span class='setting-img'></span>
				</div>
				<div class='title-submenu'>
					<div class='title'>${i18next.t(`BOT_SETTING_TITLE`)}</div>
					<div class='submenu'>
						<button class='button-rivescript' title='${i18next.t(`CONVERT_RIVESCRIPT`)}'>${i18next.t(`CONVERT_RIVESCRIPT`)}</button>
					</div>
				</div>
				<div class='menu'>		
					<button class='menu-button' title='메뉴'>
						<svg height='20' width='32' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
						<bot-setting-menu></bot-setting-menu>
					</button>
				</div>
			</main>
		`
	}
}

const style = html`
<style scoped>
	* {
		user-select: none;
	}

	main {
		width: 100%;
		height: 100%;
		box-sizing: border-box;		
		display: grid;
		grid-template-columns: 80px 1fr 100px;
		grid-template-rows: 1fr;
	}

	.setting-img-wrap {
		position: relative;
		padding: 15px;	
	}
	
	.setting-img {
		position: absolute;
		background-color: white;
		width: 50px;
		height: 50px;
		border-radius: 25px;
		background-image: url(/images/bot-setting.svg);
		background-repeat: no-repeat;
		background-position: center;
		background-size: 30px;
	}

	.title-submenu {
		display:grid;
		grid-template-rows: 1fr 1fr;
	}

	.title {
		padding-top: 20px;
		font-size: 12px;
		font-weight: bold;
		color: #4A4C4E;
	}

	.button-rivescript {
		border: 0;
		background-color: hsl(162, 100%, 0%);
		color: white;
		box-sizing: border-box;
		height: 20px;
		border-radius: 2px;
	}

	.button-rivescript:not(.on):hover, .button-rivescript.on {
		background-color: hsl(162, 100%, 43%);
	}

	.button-rivescript.on:hover {
		background-color: hsl(162, 100%, 0%);
	}

	.menu svg:hover {
		color: black;
	}

	.menu {
		text-align: right;
    	padding-right: 15px;
	}

	.menu > svg {
		vertical-align: middle;	
		cursor: pointer;		
		position:relative;
		top: 50%;
		transform: translateY(-50%);
		color: #65717C;
	}	

	.menu-button {
		vertical-align: middle;
		position:relative;
		top: 50%;
		transform: translateY(-50%);
		z-index: 20;
		padding: 0;
		border: 0;
		background-color: transparent;
	}

	.menu-button svg {
		color: #65717C;
		cursor: pointer;
	}

	bot-setting-menu {
		display: none;			
		position: absolute;
		top: 24px;
		right: -10px;
	}
</style>
`

customElements.define(`bot-setting-header`, BotSettingHeader)
