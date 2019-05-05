import {html, render} from '../../node_modules/lit-html/lit-html.js'

class BotSettingBody extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: `open` })
		render(this.render(), this.shadowRoot)		
		
		this.eventClickProcessBox = this.onClickProcessBox.bind(this)
	}

	connectedCallback() {				
		this.shadowRoot.querySelector(`.process-data-collection`).addEventListener(`click`, this.eventClickProcessBox, true)
	}

	disconnectedCallback() {
		this.shadowRoot.querySelector(`.process-data-collection`).removeEventListener(`click`, this.eventClickProcessBox, true)		
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

	render() {
		return html`
			${style}
			<main>
				<span class='process-box process-data-collection'>
					<object class='process-box-img' type="image/svg+xml" data="../../images/data.svg" width='50' height='50'></object>
					<p>${i18next.t(`PROCESS_DATA_COLLECTION`)}</p>					
				</span>

				<span class='process-sub-box food'>
					<object class='process-box-img' type="image/svg+xml" data="../../images/food.svg" width='30' height='30'></object>
					<p>${i18next.t(`PROCESS_DATA_FOOD`)}</p>			
				</span>
				<span class='process-sub-box bus'>
					<object class='process-box-img' type="image/svg+xml" data="../../images/bus.svg" width='30' height='30'></object>
					<p>${i18next.t(`PROCESS_DATA_BUS`)}</p>	
				</span>
				<span class='process-sub-box queries'>
					<object class='process-box-img' type="image/svg+xml" data="../../images/queries.svg" width='30' height='30'></object>
					<p>${i18next.t(`PROCESS_DATA_QUERY`)}</p>	
				</span>
				<span class='process-sub-box questions'>
					<object class='process-box-img' type="image/svg+xml" data="../../images/question.svg" width='30' height='30'></object>
					<p>${i18next.t(`PROCESS_DATA_QUESTION`)}</p>	
				</span>
				
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
		background-color: #379392;
	}

	.process-data-analysis {
		background-color: #4FB0C6;
	}

	.process-data-detail-analysis {
		background-color: #4F86C6;
	}

	.process-data-visualization {
		background-color: #6C49B8;
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
		z-index: 0;
	}

	.process-sub-box:hover {
		animation: sub-bubble 0.5s ease-in-out infinite;
	}

	@keyframes sub-bubble {
		0% {
			transform: scale(1) translate(-50%, -50%);
		}

		50% {
			transform: scale(1.1) translate(-50%, -50%);
		}

		100% {
			transform: scale(1) translate(-50%, -50%);
		}
	}

	.food, .bus, .queries, .questions {
		grid-area: a;
		background-color: hsl(179, 46%, 60%);
	}

	.process-sub-box.clicked {
		display: flex;
		transform: translate(-50%, -50%);
		flex-flow: column;
		z-index: 0;
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
</style>
`

customElements.define(`bot-setting-body`, BotSettingBody)
