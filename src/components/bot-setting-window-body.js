import {html, render} from '../../node_modules/lit-html/lit-html.js'
import './modal-food.js'
import './modal-shuttle.js'
import './modal-query.js'
import './modal-context.js'
import './modal-visual-intersection.js'
import './modal-visual-vector.js'
import './modal-visual-vector-query.js'
import './modal-visual-keywords.js'
import './modal-visual-category.js'

class BotSettingBody extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: `open` })
		render(this.render(), this.shadowRoot)		
		
		this.eventClickProcessBoxData = this.onClickProcessBoxData.bind(this)
		this.eventClickProcessBoxAnalysis = this.onClickProcessBoxAnalysis.bind(this)
		this.eventClickProcessBoxVisual = this.onClickProcessBoxVisual.bind(this)

		this.eventClickSubBoxFood = this.onClickSubBoxFood.bind(this)
		this.eventClickSubBoxShuttle = this.onClickSubBoxShuttle.bind(this)
		this.eventClickSubBoxQuery = this.onClickSubBoxQuery.bind(this)
		this.eventClickSubBoxContext = this.onClickSubBoxContext.bind(this)

		this.eventClickSubBoxIntersection = this.onClickSubBoxIntersection.bind(this)
		this.eventClickSubBoxVector = this.onClickSubBoxVector.bind(this)
		this.eventClickSubBoxVectorQuery = this.onClickSubBoxVectorQuery.bind(this)
		this.eventClickSubBoxKeywords = this.onClickSubBoxKeywords.bind(this)
		this.eventClickSubBoxCategory = this.onClickSubBoxCategory.bind(this)
		this.eventAnimatedEnd = this.onAnimatedEnd.bind(this)
	}

	connectedCallback() {				
		this.shadowRoot.querySelector(`.process-data-collection`).addEventListener(`click`, this.eventClickProcessBoxData, true)
		this.shadowRoot.querySelector(`.process-data-analysis`).addEventListener(`click`, this.eventClickProcessBoxAnalysis, true)
		this.shadowRoot.querySelector(`.process-data-visualization`).addEventListener(`click`, this.eventClickProcessBoxVisual, true)
		this.shadowRoot.querySelector(`.process-data.food`).addEventListener(`click`, this.eventClickSubBoxFood, true)
		this.shadowRoot.querySelector(`.process-data.bus`).addEventListener(`click`, this.eventClickSubBoxShuttle, true)
		this.shadowRoot.querySelector(`.process-data.queries`).addEventListener(`click`, this.eventClickSubBoxQuery, true)
		this.shadowRoot.querySelector(`.process-data.context`).addEventListener(`click`, this.eventClickSubBoxContext, true)

		this.shadowRoot.querySelector(`.process-visual.intersection`).addEventListener(`click`, this.eventClickSubBoxIntersection, true)
		this.shadowRoot.querySelector(`.process-visual.vector`).addEventListener(`click`, this.eventClickSubBoxVector, true)
		this.shadowRoot.querySelector(`.process-visual.vector-query`).addEventListener(`click`, this.eventClickSubBoxVectorQuery, true)
		this.shadowRoot.querySelector(`.process-visual.keywords`).addEventListener(`click`, this.eventClickSubBoxKeywords, true)
		this.shadowRoot.querySelector(`.process-visual.category`).addEventListener(`click`, this.eventClickSubBoxCategory, true)
		this.shadowRoot.querySelector(`main`).addEventListener(`transitionend`, this.eventAnimatedEnd, true)	
	}

	disconnectedCallback() {
		this.shadowRoot.querySelector(`.process-data-collection`).removeEventListener(`click`, this.eventClickProcessBoxData, true)
		this.shadowRoot.querySelector(`.process-data-analysis`).removeEventListener(`click`, this.eventClickProcessBoxAnalysis, true)
		this.shadowRoot.querySelector(`.process-data-visualization`).removeEventListener(`click`, this.eventClickProcessBoxVisual, true)
		this.shadowRoot.querySelector(`.process-data.food`).removeEventListener(`click`, this.eventClickSubBoxFood, true)
		this.shadowRoot.querySelector(`.process-data.bus`).removeEventListener(`click`, this.eventClickSubBoxShuttle, true)
		this.shadowRoot.querySelector(`.process-data.queries`).removeEventListener(`click`, this.eventClickSubBoxQuery, true)
		this.shadowRoot.querySelector(`.process-data.context`).removeEventListener(`click`, this.eventClickSubBoxContext, true)

		this.shadowRoot.querySelector(`.process-visual.intersection`).removeEventListener(`click`, this.eventClickSubBoxIntersection, true)
		this.shadowRoot.querySelector(`.process-visual.vector`).removeEventListener(`click`, this.eventClickSubBoxVector, true)
		this.shadowRoot.querySelector(`.process-visual.vector-query`).removeEventListener(`click`, this.eventClickSubBoxVectorQuery, true)
		this.shadowRoot.querySelector(`.process-visual.keywords`).removeEventListener(`click`, this.eventClickSubBoxKeywords, true)
		this.shadowRoot.querySelector(`.process-visual.category`).removeEventListener(`click`, this.eventClickSubBoxCategory, true)
		this.shadowRoot.querySelector(`main`).removeEventListener(`transitionend`, this.eventAnimatedEnd, true)
	}	

	onClickProcessBoxData(event) {
		const target = event.target			

		if (target) {
			const array = [`.process-data-collection`, `.food`, `.bus`, `.queries`, `.questions`, `.context`]

			array.forEach(each => {
				this.shadowRoot.querySelector(each).classList.toggle(`clicked`)
			})

			this.shadowRoot.querySelectorAll(`.process-box:not(.process-data-collection)`).forEach(box => {
				box.classList.remove(`clicked`)
			})
			this.shadowRoot.querySelectorAll(`.process-sub-box:not(.process-data)`).forEach(subBox => {
				subBox.classList.remove(`clicked`)
			})
		}
	}

	onClickProcessBoxAnalysis(event) {
		const target = event.target	

		if (target) {
			const array = [`.process-data-analysis`, `.similar-distance`, `.morphological`]

			array.forEach(each => {
				this.shadowRoot.querySelector(each).classList.toggle(`clicked`)
			})

			this.shadowRoot.querySelectorAll(`.process-box:not(.process-data-analysis)`).forEach(box => {
				box.classList.remove(`clicked`)
			})
			this.shadowRoot.querySelectorAll(`.process-sub-box:not(.process-analysis)`).forEach(subBox => {
				subBox.classList.remove(`clicked`)
			})
		}
	}

	onClickProcessBoxVisual(event) {
		const target = event.target	

		if (target) {
			const array = [`.process-data-visualization`, `.intersection`, `.vector`, `.vector-query`, `.keywords`, `.category`]

			array.forEach(each => {
				this.shadowRoot.querySelector(each).classList.toggle(`clicked`)
			})

			this.shadowRoot.querySelectorAll(`.process-box:not(.process-data-visualization)`).forEach(box => {
				box.classList.remove(`clicked`)
			})
			this.shadowRoot.querySelectorAll(`.process-sub-box:not(.process-visual)`).forEach(subBox => {
				subBox.classList.remove(`clicked`)
			})
		}
	}

	onClickSubBoxFood(event) {
		const target = event.target.closest(`.process-data`)

		if (target) {
			if (this.shadowRoot.querySelector(`main modal-food`)) {
				this.shadowRoot.querySelector(`main modal-food`).style.display = `flex`
			} else {
				this.shadowRoot.querySelector(`main`).insertAdjacentHTML(`beforeend`, `<modal-food></modal-food>`)
			}		
		}
	}

	onClickSubBoxShuttle(event) {
		const target = event.target.closest(`.process-data`)

		if (target) {
			if (this.shadowRoot.querySelector(`main modal-shuttle`)) {
				this.shadowRoot.querySelector(`main modal-shuttle`).style.display = `flex`
			} else {
				this.shadowRoot.querySelector(`main`).insertAdjacentHTML(`beforeend`, `<modal-shuttle></modal-shuttle>`)
			}		
		}
	}

	onClickSubBoxQuery(event) {
		const target = event.target.closest(`.process-data`)

		if (target) {
			if (this.shadowRoot.querySelector(`main modal-query`)) {
				this.shadowRoot.querySelector(`main modal-query`).style.display = `flex`
			} else {
				this.shadowRoot.querySelector(`main`).insertAdjacentHTML(`beforeend`, `<modal-query></modal-query>`)
			}		
		}
	}

	onClickSubBoxContext(event) {
		const target = event.target.closest(`.process-data`)

		if (target) {
			if (this.shadowRoot.querySelector(`main modal-context`)) {
				this.shadowRoot.querySelector(`main modal-context`).style.display = `flex`
			} else {
				this.shadowRoot.querySelector(`main`).insertAdjacentHTML(`beforeend`, `<modal-context></modal-context>`)
			}		
		}
	}

	onClickSubBoxIntersection(event) {
		const target = event.target.closest(`.process-visual`)

		if (target) {
			if (this.shadowRoot.querySelector(`main modal-visual-intersection`)) {
				this.shadowRoot.querySelector(`main modal-visual-intersection`).style.display = `flex`
			} else {
				this.shadowRoot.querySelector(`main`).insertAdjacentHTML(`beforeend`, `<modal-visual-intersection></modal-visual-intersection>`)
			}		
		}
	}

	onClickSubBoxVector(event) {
		const target = event.target.closest(`.process-visual`)

		if (target) {
			if (this.shadowRoot.querySelector(`main modal-visual-vector`)) {
				this.shadowRoot.querySelector(`main modal-visual-vector`).style.display = `flex`
			} else {
				this.shadowRoot.querySelector(`main`).insertAdjacentHTML(`beforeend`, `<modal-visual-vector></modal-visual-vector>`)
			}		
		}
	}

	onClickSubBoxVectorQuery(event) {
		const target = event.target.closest(`.process-visual`)

		if (target) {
			if (this.shadowRoot.querySelector(`main modal-visual-vector-query`)) {
				this.shadowRoot.querySelector(`main modal-visual-vector-query`).style.display = `flex`
			} else {
				this.shadowRoot.querySelector(`main`).insertAdjacentHTML(`beforeend`, `<modal-visual-vector-query></modal-visual-vector-query>`)
			}		
		}
	}

	onClickSubBoxKeywords(event) {
		const target = event.target.closest(`.process-visual`)

		if (target) {
			if (this.shadowRoot.querySelector(`main modal-visual-keywords`)) {
				this.shadowRoot.querySelector(`main modal-visual-keywords`).style.display = `flex`
			} else {
				this.shadowRoot.querySelector(`main`).insertAdjacentHTML(`beforeend`, `<modal-visual-keywords></modal-visual-keywords>`)
			}		
		}
	}

	onClickSubBoxCategory(event) {
		const target = event.target.closest(`.process-visual`)

		if (target) {
			if (this.shadowRoot.querySelector(`main modal-visual-category`)) {
				this.shadowRoot.querySelector(`main modal-visual-category`).style.display = `flex`
			} else {
				this.shadowRoot.querySelector(`main`).insertAdjacentHTML(`beforeend`, `<modal-visual-category></modal-visual-category>`)
			}		
		}
	}

	onAnimatedEnd(event) {
		const dataBox = this.shadowRoot.querySelector(`.process-data-collection`)
		const analysisBox = this.shadowRoot.querySelector(`.process-data-analysis`)
		const visualBox = this.shadowRoot.querySelector(`.process-data-visualization`)

		if (event.propertyName === `margin-left`) {
			this.emptyLine(``)
			this.connectLine(dataBox, this.shadowRoot.querySelector(`.food`), ``)
			this.connectLine(dataBox, this.shadowRoot.querySelector(`.bus`), ``)
			this.connectLine(dataBox, this.shadowRoot.querySelector(`.queries`), ``)
			this.connectLine(dataBox, this.shadowRoot.querySelector(`.questions`), ``)
			this.connectLine(dataBox, this.shadowRoot.querySelector(`.context`), ``)

			this.emptyLine(`-2`)
			this.connectLine(analysisBox, this.shadowRoot.querySelector(`.similar-distance`), `-2`)
			this.connectLine(analysisBox, this.shadowRoot.querySelector(`.morphological`), `-2`)

			this.emptyLine(`-4`)
			this.connectLine(visualBox, this.shadowRoot.querySelector(`.intersection`), `-4`)
			this.connectLine(visualBox, this.shadowRoot.querySelector(`.vector`), `-4`)
			this.connectLine(visualBox, this.shadowRoot.querySelector(`.vector-query`), `-4`)
			this.connectLine(visualBox, this.shadowRoot.querySelector(`.keywords`), `-4`)
			this.connectLine(visualBox, this.shadowRoot.querySelector(`.category`), `-4`)
		}
	}

	emptyLine(line) {
		const svg = this.shadowRoot.querySelector(`.svg-line${line}`)
		svg.innerHTML = ``
	}

	connectLine(div1, div2, line) {	
		const svg = this.shadowRoot.querySelector(`.svg-line${line}`)

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
					<img class='process-box-img' src="../../images/data.svg" width='50' height='50' />
					<p>${i18next.t(`PROCESS_DATA_COLLECTION`)}</p>					
				</span>

				<!-- 1. 데이터 수집 하위박스 START -->
				<span class='process-sub-box process-data food'>
					<img class='process-box-img' src="../../images/food.svg" width='30' height='30' />
					<p>${i18next.t(`PROCESS_DATA_FOOD`)}</p>			
				</span>
				<span class='process-sub-box process-data bus'>
					<img class='process-box-img' src='../../images/bus.svg' width='30' height='30' />
					<p>${i18next.t(`PROCESS_DATA_BUS`)}</p>	
				</span>
				<span class='process-sub-box process-data queries'>
					<img class='process-box-img' src='../../images/queries.svg' width='30' height='30' />
					<p>${i18next.t(`PROCESS_DATA_QUERY`)}</p>	
				</span>
				<span class='process-sub-box process-data questions'>
					<img class='process-box-img' src='../../images/question.svg' width='30' height='30' />
					<p>${i18next.t(`PROCESS_DATA_QUESTION`)}</p>	
				</span>
				<span class='process-sub-box process-data context'>
					<img class='process-box-img' src='../../images/question.svg' width='30' height='30' />
					<p>${i18next.t(`PROCESS_DATA_CONTEXT`)}</p>	
				</span>
				<!-- 데이터 수집 하위박스 END -->

				<span class='process-box process-data-detail-analysis'>
					<img class='process-box-img' src='../../images/search-plus.svg' width='50' height='50' />
					<p>${i18next.t(`PROCESS_DATA_DETAIL`)}</p>
				</span>	
				
				<span class='process-box process-data-analysis'>
					<img class='process-box-img' src='../../images/search.svg' width='50' height='50' />
					<p>${i18next.t(`PROCESS_DATA_ANALYSIS`)}</p>
				</span>
				<!-- 2. 데이터 분석 하위박스 START -->
				<span class='process-sub-box process-analysis similar-distance'>
					<img class='process-box-img' src='../../images/arrows-alt.svg' width='30' height='30' />
					<p>${i18next.t(`PROCESS_ANALYSIS_SIMILAR`)}</p>	
				</span>
				<span class='process-sub-box process-analysis morphological'>
					<img class='process-box-img' src='../../images/poll.svg' width='30' height='30' />
					<p>${i18next.t(`PROCESS_ANALYSIS_MORPHOLOGICAL`)}</p>	
				</span>
				<!-- 데이터 분석 하위박스 END -->							

				<span class='process-box process-data-visualization'>
					<img class='process-box-img' src='../../images/chart.svg' width='50' height='50' />
					<p>${i18next.t(`PROCESS_DATA_VISUALIZATION`)}</p>
				</span>

				<!-- 4. 데이터 시각화 하위박스 START -->
				<span class='process-sub-box process-visual intersection'>					
					<img class='process-box-img' src='../../images/cogs.svg' width='30' height='30' />
					<p>${i18next.t(`PROCESS_VISUAL_INTERSECTION`)}</p>
				</span>
				<span class='process-sub-box process-visual vector'>
					<img class='process-box-img' src='../../images/vector.svg' width='30' height='30' />					
					<p>${i18next.t(`PROCESS_VISUAL_VECTOR`)}</p>	
				</span>
				<span class='process-sub-box process-visual vector-query'>
					<img class='process-box-img' src='../../images/vector.svg' width='30' height='30' />
					<p>${i18next.t(`PROCESS_VISUAL_VECTOR_QUERY`)}</p>
				</span>
				<span class='process-sub-box process-visual keywords'>
					<img class='process-box-img' src='../../images/vector.svg' width='30' height='30' />
					<p>${i18next.t(`PROCESS_VISUAL_KEYWORDS`)}</p>
				</span>
				<span class='process-sub-box process-visual category'>
					<img class='process-box-img' src='../../images/vector.svg' width='30' height='30' />
					<p>${i18next.t(`PROCESS_VISUAL_CATEGORY`)}</p>
				</span>	
				<!-- 데이터 상세분석 하위박스 END -->
			</main>

			<svg class='svg-line'></svg>
			<svg class='svg-line-2'></svg>
			<svg class='svg-line-4'></svg>
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
		padding-top: 20px;
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

	.process-data-detail-analysis {
		grid-area: b;
	}

	.process-data-analysis {
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

	.food, .bus, .queries, .questions, .context {
		grid-area: a;
		background-color: #6B7EFC;
	}

	.similar-distance, .morphological {
		grid-area: c;
		background-color: #6B7EFC;
	}

	.intersection, .vector, .vector-query, .keywords, .category {
		grid-area: d;
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

	.context.clicked {
		top: calc(50% + 100px);
	}

	.similar-distance.clicked {
		left: calc(50% - 100px);
	}

	.morphological.clicked {
		left: calc(50% + 100px);
	}

	.intersection.clicked {
		top: calc(50% - 100px);
		left: calc(50% + 100px);
	}

	.vector.clicked {
		top: calc(50% + 100px);
		left: calc(50% + 100px);
	}

	.vector-query.clicked {
		top: calc(50% - 100px);
		left: calc(50% - 100px);
	}
	.keywords.clicked {
		top: calc(50% + 100px);
		left: calc(50% - 100px);
	}
	.category.clicked {
		top: calc(50% + 100px);
	}

	.svg-line, .svg-line-2, .svg-line-4 {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
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
