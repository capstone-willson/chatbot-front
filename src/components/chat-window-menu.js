import {html, render} from '../../node_modules/lit-html/lit-html.js'
import Main from '../main.js'

class ChatWindowMenu extends HTMLElement {
	constructor() {
		super()

		this.attachShadow({ mode: `open` })
		render(this.render(), this.shadowRoot)

		this.menuState = `hide`
		this.eventClickBotSetting = this.onClickBotSetting.bind(this)
		this.eventClickBotMode = this.onClickBotMode.bind(this)
	}

	connectedCallback() {
		this.shadowRoot.querySelector(`.menu .bot-setting`).addEventListener(`click`, this.eventClickBotSetting)
		this.shadowRoot.querySelector(`.menu .bot-mode`).addEventListener(`click`, this.eventClickBotMode)
		this.shadowRoot.querySelector(`.menu`).addEventListener(`click`, event => this.onClickOutOfMenu(event))
	}

	disconnectedCallback() {
		this.shadowRoot.querySelector(`.menu .bot-setting`).removeEventListener(`click`, this.eventClickBotSetting)
		this.shadowRoot.querySelector(`.menu .bot-mode`).removeEventListener(`click`, this.eventClickBotMode)
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

	onClickBotMode() {
		const chatBody = querySelectorShadowDom.querySelectorDeep(`chat-window-body`)
		const chatFooter = querySelectorShadowDom.querySelectorDeep(`chat-window-footer`)

		if (chatFooter.canTyping) {
			chatBody.reply(`<span style='color:red'>--- 문장 학습모드 작동 ---</span>`)			
			chatBody.reply(`<span style='color:red'>비밀번호를 말하시오</span>`)
			chatFooter.canTyping = false
			chatBody.waitSend(password => {
				this.isPassword(password, result => {
					if (result) {
						chatBody.reply(`<span style='color:red'>Target을 말하시오</span>`)
						chatBody.waitSend(target => {
							this.getHistory(password, target, json => {
								if (json !== `fail` && json.length > 0) {									
									querySelectorShadowDom.querySelectorDeep(`chat-window-body main`).innerHTML = ``
									json.splice(0,10).reverse().forEach(each => {										
										if (each.user === `bot`) {
											chatBody.replyFront(each.chat)
										} else if (each.user === `user`) {
											chatBody.sendFront(each.chat)											
										}										
									})
									chatBody.socket.emit(`mute`, target)
									chatBody.socket.emit(`changeIp`, target)	
									chatFooter.canUserChat = false
									chatFooter.canRemoteChat = true
									chatFooter.target = target
									this.target = target
								} else {
									chatFooter.canTyping = true
									chatBody.reply(`<span style='color:red'>틀렸다</span>`)
									chatBody.reply(`<span style='color:red'>--- 문장 학습모드 해제 ---</span>`)
								}
							})
						})
					} else {
						chatFooter.canTyping = true
						chatBody.reply(`<span style='color:red'>틀렸다</span>`)
						chatBody.reply(`<span style='color:red'>--- 문장 학습모드 해제 ---</span>`)
					}
				})
			})
		} else {
			chatBody.socket.emit(`unmute`, this.target)
			chatFooter.canUserChat = true
			chatFooter.canRemoteChat = false
			chatFooter.target = null
			chatFooter.canTyping = true
			chatBody.reply(`<span style='color:red'>--- 문장 학습모드 해제 ---</span>`)
		}
	}

	isPassword(password, callback) {				
		const xhr = new XMLHttpRequest()

		if(!xhr) {
			throw new Error(`XHR 호출 불가`)			
		}

		xhr.open(`POST`, `https://hanyang-chatbot.kro.kr/password`)
		xhr.setRequestHeader(`Content-type`, `application/x-www-form-urlencoded`)
		xhr.addEventListener(`readystatechange`, () => {
			if (xhr.readyState === xhr.DONE) {
				if (xhr.status === 200 || xhr.status === 201) {
					callback(JSON.parse(xhr.responseText))
				}
			}			
		})
		xhr.send(`password=${password}`)
	}

	getHistory(password, target, callback) {
		const xhr = new XMLHttpRequest()

		if(!xhr) {
			throw new Error(`XHR 호출 불가`)			
		}

		xhr.open(`POST`, `https://hanyang-chatbot.kro.kr/history`)
		xhr.setRequestHeader(`Content-type`, `application/x-www-form-urlencoded`)
		xhr.addEventListener(`readystatechange`, () => {
			if (xhr.readyState === xhr.DONE) {
				if (xhr.status === 200 || xhr.status === 201) {
					callback(JSON.parse(xhr.responseText))
				}
			}			
		})
		xhr.send(`password=${password}&target=${target}`)
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
				<li class='bot-mode' title='${i18next.t(`MENU_CHECK_BOT_MODE`)}'>${i18next.t(`MENU_CHECK_BOT_MODE`)}</li>
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
