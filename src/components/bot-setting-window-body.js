import {html, render} from '../../node_modules/lit-html/lit-html.js'
import './modal-food.js'

class BotSettingBody extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: `open` })
		render(this.render(), this.shadowRoot)		
		
		this.eventClickProcessBox = this.onClickProcessBox.bind(this)
		this.eventClickSubBox = this.onClickSubBox.bind(this)
		this.eventAnimatedEnd = this.onAnimatedEnd.bind(this)
	}

	connectedCallback() {				
		this.shadowRoot.querySelector(`.process-data-collection`).addEventListener(`click`, this.eventClickProcessBox, true)
		this.shadowRoot.querySelector(`.process-data.food`).addEventListener(`click`, this.eventClickSubBox, true)
		this.shadowRoot.querySelector(`main`).addEventListener(`transitionend`, this.eventAnimatedEnd, true)
	}

	disconnectedCallback() {
		this.shadowRoot.querySelector(`.process-data-collection`).removeEventListener(`click`, this.eventClickProcessBox, true)
		this.shadowRoot.querySelector(`.process-data.food`).removeEventListener(`click`, this.eventClickSubBox, true)	
		this.shadowRoot.querySelector(`main`).removeEventListener(`transitionend`, this.eventAnimatedEnd, true)
	}	

	onClickProcessBox(event) {
		const target = event.target	

		if (target) {
			const array = [`.process-data-collection`, `.food`, `.bus`, `.queries`, `.questions`]

			array.forEach(each => {
				this.shadowRoot.querySelector(each).classList.toggle(`clicked`)
			})
		}
	}

	onClickSubBox(event) {
		const target = event.target.closest(`.process-data`)

		if (target) {
			this.shadowRoot.querySelector(`main`).insertAdjacentHTML(`beforeend`, `<modal-food></modal-food>`)
		}		
	}

	onAnimatedEnd(event) {
		const target = event.target
		if (event.propertyName === `margin-left` && target.classList.contains(`process-data-collection`)) {
			this.emptyLine()
			this.connectLine(target, this.shadowRoot.querySelector(`.food`))
			this.connectLine(target, this.shadowRoot.querySelector(`.bus`))
			this.connectLine(target, this.shadowRoot.querySelector(`.queries`))
			this.connectLine(target, this.shadowRoot.querySelector(`.questions`))
		}
	}

	emptyLine() {
		const svg = this.shadowRoot.querySelector(`.svg-line`)
		svg.innerHTML = ``
	}

	connectLine(div1, div2) {	
		const svg = this.shadowRoot.querySelector(`.svg-line`)

		svg.innerHTML +=`
				<line
					class = 'line'
					x1 = '${div1.offsetLeft + div1.offsetWidth/2}'
					y1 = '${div1.offsetTop + div1.offsetHeight/2 + 20}'
					x2 = '${div2.offsetLeft + div2.offsetWidth/2 - 30}'
					y2 = '${div2.offsetTop + div2.offsetHeight/2 - 20}'></line>
			`
	}

	render() {
		return html`
			${style}
			<main>
				<span class='process-box process-data-collection'>
					<object class='process-box-img' type="image/svg+xml" data="../../images/data.svg" width='50' height='50'></object>
					<p>${i18next.t(`PROCESS_DATA_COLLECTION`)}</p>					
				</span>

				<!-- 데이터 수집 하위박스 START -->
				<span class='process-sub-box process-data food'>
					<object class='process-box-img' type="image/svg+xml" data="../../images/food.svg" width='30' height='30'></object>
					<p>${i18next.t(`PROCESS_DATA_FOOD`)}</p>			
				</span>
				<span class='process-sub-box process-data bus'>
					<object class='process-box-img' type="image/svg+xml" data="../../images/bus.svg" width='30' height='30'></object>
					<p>${i18next.t(`PROCESS_DATA_BUS`)}</p>	
				</span>
				<span class='process-sub-box process-data queries'>
					<object class='process-box-img' type="image/svg+xml" data="../../images/queries.svg" width='30' height='30'></object>
					<p>${i18next.t(`PROCESS_DATA_QUERY`)}</p>	
				</span>
				<span class='process-sub-box process-data questions'>
					<object class='process-box-img' type="image/svg+xml" data="../../images/question.svg" width='30' height='30'></object>
					<p>${i18next.t(`PROCESS_DATA_QUESTION`)}</p>	
				</span>
				<!-- 데이터 수집 하위박스 END -->

				<span class='process-box process-data-analysis'>
					<object class='process-box-img' type="image/svg+xml" data="../../images/search.svg" width='50' height='50'></object>
					<p>${i18next.t(`PROCESS_DATA_ANALYSIS`)}</p>
				</span>
				<span class='process-box process-data-detail-analysis'>
					<object class='process-box-img' type="image/svg+xml" data="../../images/search-plus.svg" width='50' height='50'></object>
					<p>${i18next.t(`PROCESS_DATA_DETAIL`)}</p>
				</span>
				<span class='process-box process-data-visualization'>
					<object class='process-box-img' type="image/svg+xml" data="../../images/chart.svg" width='50' height='50'></object>
					<p>${i18next.t(`PROCESS_DATA_VISUALIZATION`)}</p>
				</span>
			</main>

			<svg class='svg-line'></svg>			
		`
	}
}

const style = html`
<style scoped>
	* {
		padding: 0;
		margin: 0;
	}

	main {
		display: grid;		
		grid-template-areas: 
			"a"
			"b"
			"c"
			"d";
		grid-row-gap: 20px;
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		justify-content: center;
		justify-items: center;
		align-content: center;
		margin-top: 20px;
	}

	.process-box {
		position: relative;
		width: 100px;
		background-color: white;
		height: 100px;
		display: flex;
		border-radius: 15px;
		transition: all 0.1s ease-in-out;
		color: white;
		text-align: center;
		font-weight: bold;
		user-select: none;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		align-content: center;
		cursor: pointer;	
		z-index: 10;
	}

	.process-data-collection {
		grid-area: a;
	}

	.process-data-analysis {
		grid-area: b;
	}

	.process-data-detail-analysis {
		grid-area: c;
	}

	.process-data-visualization {
		grid-area: d;
	}

	.process-data-collection {
		background-color: #6B7EFC;
	}

	.process-data-analysis {
		background-color: #6B7EFC;
	}

	.process-data-detail-analysis {
		background-color: #6B7EFC;
	}

	.process-data-visualization {
		background-color: #6B7EFC;
	}

	.process-box.clicked {
		transform: scale(0.7);
		margin: 80px;
	}

	.process-box:hover {
		animation: bubble 0.5s ease-in-out infinite;
	}

	.process-box.clicked:hover {
		animation: bubble2 0.5s ease-in-out infinite;
	}

	.process-box-img{
		pointer-events: none;
	}

	@keyframes bubble {
		0% {
			transform: scale(1);
		}

		50% {
			transform: scale(1.1);
		}

		100% {
			transform: scale(1);
		}
	}

	@keyframes bubble2 {
		0% {
			transform: scale(0.7);
		}

		50% {
			transform: scale(0.8);
		}

		100% {
			transform: scale(0.7);
		}
	}

	.process-sub-box {
		display: flex;
		position: absolute;
		background-color: white;
		width: 70px;
		height: 70px;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
  	  	align-content: center;
		border-radius: 15px;
		transition: all 0.1s ease-in-out;
		color: white;
		text-align: center;
		font-weight: bold;
		user-select: none;
		top: calc(50%);
		left: calc(50%);
		transform: translate(-50%, -50%);
		transition: all 0.1s ease-in;
		font-size: 12px;
		cursor: pointer;
		z-index: 5;
	}

	.process-sub-box:hover {
		animation: sub-bubble 0.5s ease-in-out infinite;
	}

	@keyframes sub-bubble {
		0% {
			transform: translate(-50%, -50%) scale(1);
		}

		50% {
			transform: translate(-50%, -50%) scale(1.1);
		}

		100% {
			transform: translate(-50%, -50%) scale(1);
		}
	}

	.food, .bus, .queries, .questions {
		grid-area: a;
		background-color: #6B7EFC;
	}

	.process-sub-box.clicked {
		display: flex;
		transform: translate(-50%, -50%);
		flex-flow: column;
		z-index: 5;
	}

	.food.clicked {
		top: calc(50% - 100px);
		left: calc(50% + 100px);
	}

	.bus.clicked {
		top: calc(50% + 100px);
		left: calc(50% + 100px);
	}

	.queries.clicked {
		top: calc(50% - 100px);
		left: calc(50% - 100px);
	}

	.questions.clicked {
		top: calc(50% + 100px);
		left: calc(50% - 100px);
	}

	.svg-line {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		pointer-events: none;
		z-index: 0;
	}

	.line {		
		stroke-width: 2px;
		stroke: #6B7EFC;
		stroke-dasharray: 4px;
	}

</style>
`

customElements.define(`bot-setting-body`, BotSettingBody)
