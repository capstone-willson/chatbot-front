import {html, render} from '../../node_modules/lit-html/lit-html.js'

class BusInfo extends HTMLElement {
	constructor() {
		super()

		this.attachShadow({ mode: `open` })
		render(this.render(), this.shadowRoot)
	}

	connectedCallback() {
		setInterval(
		this.syncBusArriveTime()
			.getData()
			.setDorm()
			.setShuttle()	
			.setStation()		
			.setArtin()
			.setDormLast()
		, 1000)
	}

	syncBusArriveTime() {
		const dorm = this.shadowRoot.querySelector(`#dorm .bus-time-wrap`)
		const shuttle = this.shadowRoot.querySelector(`#shuttle .bus-time-wrap`)
		const station = this.shadowRoot.querySelector(`#station .bus-time-wrap`)
		const artin = this.shadowRoot.querySelector(`#artin .bus-time-wrap`)
		const dormLast = this.shadowRoot.querySelector(`#dormLast .bus-time-wrap`)
		let json
		return {
			getData() {
				const xhr = new XMLHttpRequest()		
				const COMPLETED = 4, OK = 200
				const formData = new FormData()
				formData.append(`chat`, `셔틀 언제와`)

				if(!xhr) {
					throw new Error(`XHR 호출 불가`)
				}
				xhr.open(`POST`, `http://34.80.42.161:8000/v1/chat`)
				xhr.addEventListener(`readystatechange`, () => {
					if(xhr.readyState === COMPLETED) {
						if(xhr.status === OK) {
							json = JSON.parse(xhr.responseText)
						}
					}
				})		
				xhr.send(formData)

				return this
			},			
			setBlank() {
				dorm.innerHTML = ``
				shuttle.innerHTML = ``
				station.innerHTML = ``
				artin.innerHTML = ``
				dormLast.innerHTML = ``	

				return this
			},
			setDorm() {
				if (json.dorm_cycle.status) {
					dorm.innerHTML += `<div class='bus-time'>${i18next.t(`DORM_CYCLE`)} ${json.dorm_cycle.minutes}:${json.dorm_cycle.seconds}</div>`
				}
				if (json.dorm_station.status) {
					dorm.innerHTML += `<div class='bus-time'>${i18next.t(`DORM_STATION`)} ${json.dorm_station.minutes}:${json.dorm_station.seconds}</div>`
				}
				if (json.dorm_artin.status) {
					dorm.innerHTML += `<div class='bus-time'>${i18next.t(`DORM_ARTIN`)} ${json.dorm_artin.minutes}:${json.dorm_artin.seconds}</div>`
				}	
				return this
			},
			setShuttle() {						
				if (json.shuttle_cycle.status) {
					shuttle.innerHTML += `<div class='bus-time'>${i18next.t(`SHUTTLE_CYCLE`)} ${json.shuttle_cycle.minutes}:${json.shuttle_cycle.seconds}</div>`
				}				
				if (json.shuttle_station.status) {
					shuttle.innerHTML += `<div class='bus-time'>${i18next.t(`SHUTTLE_STATION`)} ${json.shuttle_station.minutes}:${json.shuttle_station.seconds}</div>`
				}
				if (json.shuttle_artin.status) {
					shuttle.innerHTML += `<div class='bus-time'>${i18next.t(`SHUTTLE_ARTIN`)} ${json.shuttle_artin.minutes}:${json.shuttle_artin.seconds}</div>`
				}
				return this
			},
			setStation() {
				if (json.station.status) {
					station.innerHTML += `<div class='bus-time'>${i18next.t(`STATION_CYCLE`)} ${json.station.minutes}:${json.station.seconds}</div>`
				}	
				if (json.station_artin.status) {
					station.innerHTML += `<div class='bus-time'>${i18next.t(`STATION_ARTIN`)} ${json.station_artin.minutes}:${json.station_artin.seconds}</div>`
				}			
				return this	
			},
			setArtin() {
				if (json.artin.status) {
					artin.innerHTML += `<div class='bus-time'>${i18next.t(`ARTIN_CYCLE`)} ${json.artin.minutes}:${json.artin.seconds}</div>`
				}
				return this
			},
			setDormLast() {
				if (json.shuttle_dorm.status) {
					dormLast.innerHTML += `<div class='bus-time'>${i18next.t(`SHUTTLE_DROM`)} ${json.shuttle_dorm.minutes}:${json.shuttle_dorm.seconds}</div>`
				}
				return this
			},
		}
	}

	render() {
		return html`
			${style}
			<main>
				<span class='bus-arrow-pillar'></span>
				<div class='bus-stop' id='dorm'>
					<span class='bus-stop-name'>${i18next.t(`BUS_STOP_DORM`)}</span>
					<span class='bus-time-wrap'></span>
					<span class='bus-arrow'>▼</span>
				</div>
				<div class='bus-stop' id='shuttle'>
					<span class='bus-stop-name'>${i18next.t(`BUS_STOP_SHUTTLE`)}</span>
					<span class='bus-time-wrap'></span>
					<span class='bus-arrow'>▼</span>
				</div>
				<div class='bus-stop' id='station'>
					<span class='bus-stop-name'>${i18next.t(`BUS_STOP_STATION`)}</span>
					<span class='bus-time-wrap'></span>
					<span class='bus-arrow'>▼</span>
				</div>
				<div class='bus-stop' id='artin'>
					<span class='bus-stop-name'>${i18next.t(`BUS_STOP_ARTIN`)}</span>
					<span class='bus-time-wrap'></span>
					<span class='bus-arrow'>▼</span>
				</div>
				<div class='bus-stop' id='dormLast'>
					<span class='bus-stop-name'>${i18next.t(`BUS_STOP_DORM`)}</span>
					<span class='bus-time-wrap'></span>
					<span class='bus-arrow'>▼</span>
				</div>
			</main>
		`
	}
}

const style = html`
<style scoped>
	main {
		display: grid;
		grid-template-rows: repeat(5, auto);
		max-width: 80vw;
		width: 200px;
		overflow: hidden;
	}

	.bus-stop {
		display: flex;
		height: 80px;
	}

	.bus-stop:not(:last-child) {
		border-bottom: 1px solid hsla(0, 0%, 60%, 0.2);		
	}

	.bus-stop-name {
		align-self: center;
		color: dodgerblue;
		font-weight: bold;
		position: absolute;
		right: 7px;
		width: 60px;
		text-align: left;
	}

	.bus-time-wrap {
		display: flex;
		flex-flow: column;
		text-align: right;
		justify-content: center;
		position: absolute;
		height: 80px;
		right: 52px;
		width: 165px;
		overflow: hidden;
	}

	.bus-time {
		color: hsl(217, 20%, 56%);
		text-align: center;
		position: relative;
		background: white;
		border: 0px solid hsl(217, 20%, 56%);
		margin: 2px;
		width: 105px;
		border-radius: 5px;
	}

	.bus-time:after, .bus-time:before {
		left: 100%;
		top: 50%;
		border: solid transparent;		
		content: " ";
		height: 0;
		width: 0;
		position: absolute;
		pointer-events: none;
	}

	.bus-time:after {
		border-color: rgba(136, 183, 213, 0);
		border-left-color: white;
		border-width: 3px;
		margin-top: -3px;
	}

	.bus-time:before {
		border-color: rgba(194, 225, 245, 0);
		border-left-color: hsl(217, 20%, 56%);
		border-width: 5px;
		margin-top: -5px;
	}

	.bus-arrow {
		user-select: none;
		right: 76px;
		position: absolute;
		align-self: center;
		border: 1px solid #FB7100;
		height: 15px;
		border-radius: 100%;
		color: #FB7100;
		background-color: white;
		z-index: 10;		
	}

	.bus-arrow-pillar {
		position: absolute;
		top: 40px;
		height: 330px;
		background: #FB7100;
		width: 3px;
		right: 82px;
		z-index: 5;
	}
</style>
`

customElements.define(`bus-info`, BusInfo)
