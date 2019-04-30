import {html, render} from '../../node_modules/lit-html/lit-html.js'

class BotSettingBody extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({ mode: `open` })
		render(this.render(), this.shadowRoot)

		this.eventClickProcessBox = this.onClickProcessBox.bind(this)
	}

	connectedCallback() {
		this.shadowRoot.querySelector(`main`).addEventListener(`click`, this.eventClickProcessBox, true)
	}

	disconnectedCallback() {
		this.shadowRoot.querySelector(`main`).removeEventListener(`click`, this.eventClickProcessBox, true)		
	}	

	onClickProcessBox(event) {
		const target = event.target
		if (target.classList.contains(`process-box`)) {
			event.stopPropagation()			
			target.classList.toggle(`clicked`)
		}
	}

	render() {
		return html`
			${style}
			<main>
				<span class='process-box process-data-collection'>
					<p>${i18next.t(`PROCESS_DATA_COLLECTION`)}</p>
				</span>
				<span class='process-box process-data-analysis'>
					<p>${i18next.t(`PROCESS_DATA_ANALYSIS`)}</p>
				</span>
				<span class='process-box process-data-detail-analysis'>
					<p>${i18next.t(`PROCESS_DATA_DETAIL`)}</p>
				</span>
				<span class='process-box process-data-visualization'>
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
		grid-template-rows: repeat(4, minmax(auto, 100px));
		grid-row-gap: 20px;
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		justify-content: center;
		justify-items: center;
    	align-content: center;
	}

	.process-box {
		width: 100px;
		background-color: white;
		height: 100px;
		display: inline-block;
		border-radius: 15px;
		transition: all 0.1s ease-in-out;
		color: white;
		text-align: center;
		font-weight: bold;
	}

	.process-data-collection {
		background-color: #379392;
	}

	.process-data-analysis {
		background-color: #379392;
	}

	.process-data-detail-analysis {
		background-color: #4F86C6;
	}

	.process-data-visualization {
		background-color: #6C49B8;
	}

	.clicked {
		width: 80px;
		height: 80px;
		margin: 80px;
	}

	.process-box:hover, .process-box.clicked:hover {
		animation: bubble 0.5s ease-in-out infinite;
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
</style>
`

customElements.define(`bot-setting-body`, BotSettingBody)
