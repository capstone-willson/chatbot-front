import {html, render} from '../../node_modules/lit-html/lit-html.js'

class ModalVisualVectorQuery extends HTMLElement {
	constructor() {
		super()

		this.attachShadow({ mode: `open` })
		render(this.render(), this.shadowRoot)

		this.eventClickBack = this.onClickBack.bind(this)
		this.eventKeyDownEnter = this.onKeyDownEnter.bind(this)
	}

	connectedCallback() {
		this.addEventListener(`click`, this.eventClickBack, false)
		this.shadowRoot.addEventListener(`click`, event => event.stopPropagation(), false)
		this.shadowRoot.querySelector(`.query`).addEventListener(`keydown`, this.eventKeyDownEnter, false)		

		this.loadXHR()
	}

	disconnectedCallback() {
		this.removeEventListener(`click`, this.eventClickBack, false)
		this.shadowRoot.querySelector(`.query`).removeEventListener(`keydown`, this.eventKeyDownEnter, false)
	}

	onClickBack() {
		this.style.display = `none`		
	}

	onKeyDownEnter(event) {
		if (event.keyCode === 13) {
			this.reloadXHR(this.shadowRoot.querySelector(`.query`).value)			
		}				
	}

	loadXHR(text = ``) {
		const xhr = new XMLHttpRequest()
		const formData = new FormData()
		formData.append(`chat`, text)

		if(!xhr) {
			throw new Error(`XHR 호출 불가`)			
		}

		xhr.open(`POST`, `http://hanyang-chatbot.kro.kr:8000/v1/analysis/visualize/similarity/queries`)
		xhr.addEventListener(`readystatechange`, () => {
			if (xhr.readyState === xhr.DONE) {
				if (xhr.status === 200 || xhr.status === 201) {
					console.info(JSON.parse(xhr.responseText))
					this.draw(JSON.parse(xhr.responseText))
				}

			}			
		})
		xhr.send(formData)
	}

	reloadXHR(text = ``) {
		const xhr = new XMLHttpRequest()
		const formData = new FormData()
		formData.append(`chat`, text)
		this.shadowRoot.querySelector(`.lds-roller`).style.display = `block`

		if(!xhr) {
			throw new Error(`XHR 호출 불가`)			
		}

		xhr.open(`POST`, `http://hanyang-chatbot.kro.kr:8000/v1/analysis/visualize/similarity/queries`)
		xhr.addEventListener(`readystatechange`, () => {
			if (xhr.readyState === xhr.DONE) {
				if (xhr.status === 200 || xhr.status === 201) {
					const json = JSON.parse(xhr.responseText)
					const image = new Image(15, 15)
					image.src = `/images/star.svg`
					console.info(`json`, json)
					this.scatterChart.config = {
						type: `scatter`,
						data: {
							datasets: [{
								label: `현재 단어`,
								backgroundColor: `red`,
								pointStyle: image,
								pointBorderColor: `red`,
								pointRadius: 15,
								data: json[`input`],
							},
							{
								label: `셔틀버스`,
								backgroundColor: `#a5dff9`,
								data: json[`shuttle_bus`],
							},
							{
								label: `식단`,
								backgroundColor: `orange`,
								data: json[`food`],
							},
							{
								label: `일상대화`,
								backgroundColor: `#9055A2`,
								data: json[`talk`],
							},
							{
								label: `학교정보`,
								backgroundColor: `#60c5ba`,
								data: json[`prepared`],
							},
							{
								label: `도서관`,
								backgroundColor: `#feee7d`,
								data: json[`book`],
							}],
						},
						options: {
							tooltips: {
								callbacks: {
									label: (tooltipItem, data) => {
										const _data = data
										return _data.datasets[tooltipItem.datasetIndex][`data`][tooltipItem.index][`text`]
									},
								},
							},
							scales: {
								xAxes: [{
									type: `linear`,
									position: `bottom`,
								}],
							},
						},
					}
					this.scatterChart.update()
					this.shadowRoot.querySelector(`.lds-roller`).style.display = `none`
				}

			}			
		})
		xhr.send(formData)
	}

	draw(json) {
		const ctx = this.shadowRoot.getElementById(`myChart`).getContext(`2d`)		
		this.scatterChart = new Chart(ctx, {
			type: `scatter`,
			data: {
				datasets: [{
					label: `셔틀버스`,
					backgroundColor: `#a5dff9`,
					data: json[`shuttle_bus`],
				},
				{
					label: `식단`,
					backgroundColor: `orange`,
					data: json[`food`],
				},
				{
					label: `일상대화`,
					backgroundColor: `#9055A2`,
					data: json[`talk`],
				},
				{
					label: `학교정보`,
					backgroundColor: `#60c5ba`,
					data: json[`prepared`],
				},
				{
					label: `도서관`,
					backgroundColor: `#feee7d`,
					data: json[`book`],
				},
				{
					label: `현재 단어`,
					backgroundColor: `red`,
					data: json[`input`],
				}],
			},
			options: {
				tooltips: {
					callbacks: {
						label: (tooltipItem, data) => {
							const _data = data
							return _data.datasets[tooltipItem.datasetIndex][`data`][tooltipItem.index][`text`]
						},
					},
				},
				scales: {
					xAxes: [{
						type: `linear`,
						position: `bottom`,
					}],
				},
			},
		})
		this.shadowRoot.querySelector(`.lds-roller`).style.display = `none`
	}

	render() {
		return html`
			${style}			
			<div id='modalVisualVector'>
				<div class='title'>${i18next.t(`PROCESS_VISUAL_VECTOR_TITLE`)}</div>
				<input class='query form-control' type='text' placeholder='${i18next.t(`PROCESS_VISUAL_INTER_QUERY`)}' />
				<div class='lds-roller'><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
				<canvas id='myChart' width='400' height='700'></canvas>
			</div>
		`
	}
}

const style = html`
<?xml-stylesheet type='text/css'?>
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
	#modalVisualVector {
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
	#modalVisualIntersection > .wrap {
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
		height: 700px;
		top: 100px;
		left: 0;
		width: 100%;
	}
	.query {
		top: 60px;
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

customElements.define(`modal-visual-vector-query`, ModalVisualVectorQuery)
