import {html, render} from '../../node_modules/lit-html/lit-html.js'

class ModalVisualCategory2 extends HTMLElement {
	constructor() {
		super()

		this.attachShadow({ mode: `open` })
		render(this.render(), this.shadowRoot)

		this.eventClickBack = this.onClickBack.bind(this)
	}

	connectedCallback() {
		this.addEventListener(`click`, this.eventClickBack, false)
		this.shadowRoot.addEventListener(`click`, event => event.stopPropagation(), false)

		this.loadXHR()
	}

	disconnectedCallback() {
		this.removeEventListener(`click`, this.eventClickBack, false)
	}

	onClickBack() {
		this.style.display = `none`		
	}

	onKeyDownEnter(event) {
		if (event.keyCode === 13) {
			this.reloadXHR(this.shadowRoot.querySelector(`.query`).value)			
		}				
	}

	loadXHR() {
		const xhr = new XMLHttpRequest()

		if(!xhr) {
			throw new Error(`XHR 호출 불가`)			
		}

		xhr.open(`GET`, `https://hanyang-chatbot.kro.kr:8000/v2/visualization/doughnut/category/answer`)
		xhr.addEventListener(`readystatechange`, () => {
			if (xhr.readyState === xhr.DONE) {
				if (xhr.status === 200 || xhr.status === 201) {
					console.info(JSON.parse(xhr.responseText))
					this.draw(JSON.parse(xhr.responseText))
				}
			}			
		})
		xhr.send()
	}

	reloadXHR() {
		const xhr = new XMLHttpRequest()

		if(!xhr) {
			throw new Error(`XHR 호출 불가`)			
		}
		this.shadowRoot.querySelector(`.lds-roller`).style.display = `block`
		xhr.open(`GET`, `https://hanyang-chatbot.kro.kr:8000/v2/visualization/doughnut/category/answer`)
		xhr.addEventListener(`readystatechange`, () => {
			if (xhr.readyState === xhr.DONE) {
				if (xhr.status === 200 || xhr.status === 201) {
					const json = JSON.parse(xhr.responseText)					
					this.chart.config = {
						type: `doughnut`,
						data: {
							datasets: [{
								data: Object.entries(json).map(el => el[1]),
								backgroundColor: [`#A5DFF9`, `#FEEE7D`, `#9055A2`, `#FFA500`, `#FAB1CE`, `#9DC8C8`],
							}],
							labels: [`셔틀버스`, `도서관`, `일상대화`, `식단`, `QA`, `사전답변`],
						},
						options: {
							legend: {
								display: true,
								fullWidth: true,
							},
							showAllTooltips: true,
						},
					}
					this.chart.update()
					this.shadowRoot.querySelector(`.lds-roller`).style.display = `none`
				}

			}			
		})
		xhr.send()
	}

	draw(json) {
		const ctx = this.shadowRoot.getElementById(`myChart`).getContext(`2d`)		
		this.chart = new Chart(ctx, {
			type: `doughnut`,
			data: {
				datasets: [{
					data: Object.entries(json).map(el => el[1]),
					backgroundColor: [`#A5DFF9`, `#FEEE7D`, `#9055A2`, `#FFA500`, `#FAB1CE`, `#9DC8C8`],
				}],
				labels: [`셔틀버스`, `도서관`, `일상대화`, `식단`, `QA`, `사전답변`],
			},
			options: {
				legend: {
					display: true,
					position: `bottom`,
					labels: {
						usePointStyle: true,
					},
				},
				showAllTooltips: true,
			},
		})
		this.shadowRoot.querySelector(`.lds-roller`).style.display = `none`
	}

	render() {
		return html`
			${style}			
			<div id='modalVisualCategory'>
				<div class='title'>${i18next.t(`PROCESS_VISUAL_CATEGORY_TITLE`)}</div>
				<div class='lds-roller'><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
				<canvas id='myChart' width='400' height='500'></canvas>
			</div>
		`
	}
}

const style = html`
<?xml-stylesheet type='text/css'?>
<style>
	* {
		user-select: none;
	}
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
	#modalVisualCategory {
		position: absolute;
		width: 400px;
		height: 90vh;
		align-self: center;
		justify-self: center;
		border-radius: 3px;
		background-color: white;
		overflow: scroll;
		animation: up 0.1s ease-in-out;
		box-shadow: 0 8px 6px -6px black;
		overflow-x: scroll;
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
	#modalVisualCategory > .wrap {
		position: relative;
	}
	
	.title {
		top: 0;
		position: absolute;
		width: 100%;
		height: 50px;
		text-align: center;
		font-weight: bold;
		line-height: 50px;
		background-color: #6B7EFC;
		color: white;
		font-size: 18px;
	}
	#myChart {
		position: absolute;
		top: 100px;
		left: 0;
	}
	.query {
		top: 55px;
		left: 10px;
		width: calc(100% - 35px);
		height: 30px;
		position: absolute;
		border-radius: 2px;
		border: 1px solid gray;
		padding-left: 15px;		
	}
	.lds-roller {
		display: block;
		position: relative;
		width: 64px;
		height: 64px;
		top: 35%;
    	margin-left: auto;
		margin-right: auto;
	}
	.lds-roller div {
		animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
		transform-origin: 32px 32px;
	}
	.lds-roller div:after {
		content: " ";
		display: block;
		position: absolute;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: #6B7EFC;
		margin: -3px 0 0 -3px;
	}
	.lds-roller div:nth-child(1) {
		animation-delay: -0.036s;
	}
	.lds-roller div:nth-child(1):after {
		top: 50px;
		left: 50px;
	}
	.lds-roller div:nth-child(2) {
		animation-delay: -0.072s;
	}
	.lds-roller div:nth-child(2):after {
		top: 54px;
		left: 45px;
	}
	.lds-roller div:nth-child(3) {
		animation-delay: -0.108s;
	}
	.lds-roller div:nth-child(3):after {
		top: 57px;
		left: 39px;
	}
	.lds-roller div:nth-child(4) {
		animation-delay: -0.144s;
	}
	.lds-roller div:nth-child(4):after {
		top: 58px;
		left: 32px;
	}
	.lds-roller div:nth-child(5) {
		animation-delay: -0.18s;
	}
	.lds-roller div:nth-child(5):after {
		top: 57px;
		left: 25px;
	}
	.lds-roller div:nth-child(6) {
		animation-delay: -0.216s;
	}
	.lds-roller div:nth-child(6):after {
		top: 54px;
		left: 19px;
	}
	.lds-roller div:nth-child(7) {
		animation-delay: -0.252s;
	}
	.lds-roller div:nth-child(7):after {
		top: 50px;
		left: 14px;
	}
	.lds-roller div:nth-child(8) {
		animation-delay: -0.288s;
	}
	.lds-roller div:nth-child(8):after {
		top: 45px;
		left: 10px;
	}
	@keyframes lds-roller {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
`

customElements.define(`modal-visual-category-2`, ModalVisualCategory2)
