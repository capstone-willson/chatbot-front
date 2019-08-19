import './chat-window.js'
import './bot-setting-window.js'

export default class Main {
	static init() {
		this.loadingDOM()
		this.router()
			.isEdge()
			.isIE11()
			.isIE10()
			.isPathRoot()
			.isPathOptions()
	}

	static router() {
		const path = location.pathname
		return {
			isEdge() {
				if (navigator.userAgent.includes(`Edge`)) {
					document.querySelector(`.loading`).innerHTML += `브라우저 지원X`
					return false
				}
				return this
			},
			isIE11() {
				if (navigator.userAgent.includes(`rv:11`)) {
					this.emptyDOM()
					document.querySelector(`.loading`).innerHTML += `브라우저 지원X`
					return false
				}
				return this
			},
			isIE10() {
				if (navigator.userAgent.includes(`MSIE`)) {
					this.emptyDOM()
					document.querySelector(`.loading`).innerHTML += `브라우저 지원X`
					return false
				}
				return this
			},
			isPathRoot() {
				if (path === `/`) {					
					Main.renderChatWindow()
				}
				return this
			},
			isPathOptions() {
				if (path === `/options`) {
					Main.renderBotSettingWindow()
				}
				return this
			},
		}
	}

	static loadingDOM() {
		const root = document.querySelector(`.app-root`)
		const loading = document.createElement(`div`)
		const FIVE = 5
				
		this.emptyDOM()
		loading.classList.add(`loading`)
		for (let i=0; i < FIVE; i++) {
			loading.appendChild(document.createElement(`span`))
		}
		root.appendChild(loading)
	}

	static renderChatWindow() {
		this.emptyDOM()
		const chatWindow = document.createElement(`chat-window`)
		document.querySelector(`.app-root`).appendChild(chatWindow)
		history.pushState({}, `Main Page`, `/`)
	}

	static renderBotSettingWindow() {
		this.emptyDOM()
		const botSettingWIndow = document.createElement(`bot-setting-window`)
		document.querySelector(`.app-root`).appendChild(botSettingWIndow)
		history.pushState({}, `Option Page`, `/options`)
	}

	static emptyDOM() {
		document.querySelector(`.app-root`).innerHTML = ``
	}
}

Main.init()
