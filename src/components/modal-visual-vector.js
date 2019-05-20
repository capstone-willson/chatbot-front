import {html, render} from '../../node_modules/lit-html/lit-html.js'

class ModalVisualVector extends HTMLElement {
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

	loadXHR(text = `안녕`) {
		const xhr = new XMLHttpRequest()
		const formData = new FormData()
		formData.append(`chat`, text)

		if(!xhr) {
			throw new Error(`XHR 호출 불가`)			
		}

		xhr.open(`POST`, `http://34.80.42.161:8000/v1/analysis/visualize/similarity`)
		xhr.addEventListener(`readystatechange`, () => {
			if (xhr.readyState === xhr.DONE) {
				if (xhr.status === 200 || xhr.status === 201) {		
					console.log(JSON.parse(xhr.responseText))
					this.draw(JSON.parse(xhr.responseText))
				}
			}			
		})
		xhr.send(formData)
	}

	draw(json) {
		const ctx = this.shadowRoot.getElementById(`myChart`).getContext(`2d`)
		new Chart(ctx, {
			type: `scatter`,
			data: {
				datasets: [{
					label: `shuttle_bus`,
					backgroundColor: `red`,
					data: json[`shuttle_bus`],
				},
				{
					label: `food`,
					backgroundColor: `orange`,
					data: json[`food`],
				},
				{
					label: `talk`,
					backgroundColor: `yellow`,
					data: json[`talk`],
				},
				{
					label: `prepared`,
					backgroundColor: `green`,
					data: json[`prepared`],
				},
				{
					label: `book`,
					backgroundColor: `skyblue`,
					data: json[`book`],
				},
				],
			},
			options: {
				tooltips: {
					callbacks: {
						label: (tooltipItem, data) => {
							let label = data.datasets[tooltipItem.datasetIndex].label || ``
		
							if (label) {
								label += `: `
							}
							label += Math.round(tooltipItem.yLabel * 100) / 100
							return label
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
	}

	onKeyDownEnter(event) {
		if (event.keyCode === 13) {
			this.loadXHR(this.shadowRoot.querySelector(`.query`).value)
		}				
	}

	render() {
		return html`
			${style}			
			<div id='modalVisualVector'>
				<div class='title'>${i18next.t(`PROCESS_VISUAL_VECTOR_TITLE`)}</div>
				<input class='query' type='text' placeholder='${i18next.t(`PROCESS_VISUAL_INTER_QUERY`)}' />
				<canvas id='myChart'></canvas>
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
		height: 300px;
		top: 100px;
		left: 0;
		width: 100%;
	}

	.query {
		left: 10px;
		width: calc(100% - 35px);
		height: 30px;
		position: absolute;
		border-radius: 2px;
		border: 1px solid gray;
		padding-left: 15px;
	}
</style>
`

customElements.define(`modal-visual-vector`, ModalVisualVector)
