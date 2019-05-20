import {html, render} from '../../node_modules/lit-html/lit-html.js'

class ModalVisualIntersection extends HTMLElement {
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

		this.drawVenn()		
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
			this.loadXHR(this.shadowRoot.querySelector(`.query`).value)
		}				
	}

	drawVenn(size1 = 6, size2 = 6, sizeIn = 2) {
		const sets = [ {sets: [`입력값`], size: size1},
			{sets: [`유사값`], size: size2},
			{sets: [`입력값`,`유사값`], size: sizeIn}]
		
		const chart = venn.VennDiagram()
			.width(380)
			.height(250)

		d3.select(this.shadowRoot.querySelector(`#venn`))
			.datum(sets)
			.call(chart)
	}

	loadXHR(text) {
		const xhr = new XMLHttpRequest()
		const formData = new FormData()
		formData.append(`chat`, text)

		if(!xhr) {
			throw new Error(`XHR 호출 불가`)			
		}

		xhr.open(`POST`, `http://34.80.42.161:8000/v1/analysis/similarity/morphs`)
		xhr.addEventListener(`readystatechange`, () => {
			if (xhr.readyState === xhr.DONE) {
				if (xhr.status === 200 || xhr.status === 201) {		
					console.info(JSON.parse(xhr.responseText))
					this.modifyContent(JSON.parse(xhr.responseText))
						.writeScore()
						.writeSentence()
						.writeVenn()
						.writeTable()
				}
			}			
		})
		xhr.send(formData)
	}

	modifyContent(json) {
		const modal = this.shadowRoot
		const func = this
		return {
			writeScore(select = 1) {
				modal.querySelector(`.score`).textContent = `SCORE: ${Math.floor(json[`question_${select}`][`score`] * 100)}점`
				return this
			},
			writeSentence(select = 1) {
				modal.querySelector(`.question-${select}`).classList.add(`active`)
				for (let i = 1; i < 4; i++) {
					modal.querySelector(`.question-${i}`).value = json[`question_${i}`][`text`]
				}				
				return this
			},
			writeVenn(select = 1) {
				func.drawVenn(++Object.keys(json[`question_${select}`][`only_in_query`]).length, ++Object.keys(json[`question_${select}`][`only_in_question`]).length, Object.keys(json[`question_${select}`][`in_both`]).length)				
				return this
			},
			writeTable(select = 1) {
				modal.querySelectorAll(`tbody`).forEach(each => {
					each.textContent = ``
				})
				Object.entries(json[`question_${select}`][`only_in_query`]).forEach(each => {
					modal.querySelector(`.data-table-1 tbody`).innerHTML += `
						<tr>
							<td>${each[0]}</td>
							<td>${each[1]}</td>	
						</tr>
					`
				})				
				Object.entries(json[`question_${select}`][`in_both`]).forEach(each => {
					modal.querySelector(`.data-table-2 tbody`).innerHTML += `
						<tr>
							<td>${each[0]}</td>
							<td>${each[1]}</td>
						</tr>
					`
				})
				Object.entries(json[`question_${select}`][`only_in_question`]).forEach(each => {
					modal.querySelector(`.data-table-3 tbody`).innerHTML += `
						<tr>
							<td>${each[0]}</td>
							<td>${each[1]}</td>
						</tr>
					`
				})
				return this
			},
		}
	}
 
	render() {
		return html`
			${style}			
			<div id='modalVisualIntersection'>
				<div class='title'>${i18next.t(`PROCESS_VISUAL_INTER_TITLE`)}</div>				
				<input class='query' type='text' placeholder='${i18next.t(`PROCESS_VISUAL_INTER_QUERY`)}' />
				<img class='arrow' src='../../images/arrows-alt-v.svg' width='30' height='30' />
				<span class='score'>SCORE</span>
				<input class='question question-1' type='text' placeholder='1th' readonly />
				<input class='question question-2' type='text' placeholder='2th' readonly />
				<input class='question question-3' type='text' placeholder='3th' readonly />
				<div id='venn'></div>
				<table class='data-table-1'>
					<thead>
						<tr>
							<th>Name</th>
							<th>Type</th>
						</tr>
					</thead>					
					<tbody></tbody>
				</table>
				<table class='data-table-2'>
					<thead>
						<tr>
							<th>Name</th>
							<th>Type</th>
						</tr>
					</thead>					
					<tbody></tbody>
				</table>
				<table class='data-table-3'>
					<thead>
						<tr>
							<th>Name</th>
							<th>Type</th>
						</tr>
					</thead>					
					<tbody></tbody>
				</table>
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

	#modalVisualIntersection {
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

	#question, #query, #intersect {
		position: absolute;
		display: inline-block;
		width: 200px;
		height: 200px;
		border: 1px solid black;
		border-radius: 100%;
	}

	#question {
		top: 0;
		left: 0;
		z-index: 10;
	}

	#intersect {
		border: 0;
		top: 20px;
		height: 160px;
		width: 100px;
		left: 100px;
		z-index: 20;
	}

	#query {
		top: 0;
		left: 100px;
		z-index: 10;
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

	.query, .question {
		left: 10px;
		width: calc(100% - 35px);
		height: 30px;
		position: absolute;
		border-radius: 2px;
		border: 1px solid gray;
		padding-left: 15px;
	}
	
	.arrow {
		position: absolute;
		left: 15px;
		top: 100px;
	}

	.score {
		position: absolute;
		left: 50px;
		top: 104px;
	}

	.query {
		background-color: #C7DDEC;
		top: 60px;
	}

	.question.active {
		background-color: bisque;
	}

	.question-1 {
		top: 140px;
	}

	.question-2 {
		top: 180px;
	}

	.question-3 {
		top: 220px;
	}

	#venn {
		left: 10px;
		top: 270px;
		position: absolute;
		width: calc(100% - 20px);
		height: 250px;
	}

	g.venn-area path:hover {
		stroke: red;
    	stroke-width: 1;
	}

	g.venn-area path::after {
		content: 'AA';
		position: absolute;
		border-style: solid;
		border-width: 10px 10px 10px 0;
		border-color: transparent gray;
		display: block;
		width: 0;
		z-index: 1;
		left: -10px;
		top: 40px;
	}

	g.venn-area path:hover::after {
		
	}

	table {
		border-collapse: collapse;
		position: absolute;		
		top: 530px;
		width: 30%;
		table-layout: fixed;
		white-space: pre-line;
	}

	.data-table-1 {
		left: 10px;
	}

	.data-table-2 {
		left: 140px;
	}

	.data-table-3 {
		left: 270px;
	}

	table td, table th {
		border: 1px solid #ddd;
		padding: 8px;
	}

	table tr:nth-child(even){
		background-color: #f2f2f2;
	}

	table tr:hover {
		background-color: #ddd;
	}

	table th {
		text-align: left;
		color: white;
	}

	.data-table-1 th {
		background-color: #C7DDEC;
	}

	.data-table-2 th {
		background-color: #D5C5B4;
	}

	.data-table-3 th {
		background-color: #FFDFC3;
	}

	tspan {
		pointer-events: none;
	}
</style>
`

customElements.define(`modal-visual-intersection`, ModalVisualIntersection)
