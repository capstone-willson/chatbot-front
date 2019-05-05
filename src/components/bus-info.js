import {html, render} from '../../node_modules/lit-html/lit-html.js'

class BusInfo extends HTMLElement {
	constructor() {
		super()		

		this.question = this.getAttribute(`question`)		

		this.attachShadow({ mode: `open` })
		render(this.render(), this.shadowRoot)
	}

	connectedCallback() {	
		this.parentNode.parentNode.parentNode.parentNode.host.style.display = `none`

		this.syncBusArriveTime(this.question)
			.getData()
	}

	syncBusArriveTime(question) {
		const dorm = this.shadowRoot.querySelector(`#dorm .bus-time-wrap`)
		const shuttle = this.shadowRoot.querySelector(`#shuttle .bus-time-wrap`)
		const station = this.shadowRoot.querySelector(`#station .bus-time-wrap`)
		const artin = this.shadowRoot.querySelector(`#artin .bus-time-wrap`)
		const dormLast = this.shadowRoot.querySelector(`#dormLast .bus-time-wrap`)
		const busInfo = this
		let json		
		return {
			getData() {
				const xhr = new XMLHttpRequest()		
				const COMPLETED = 4, OK = 200
				const formData = new FormData()
				formData.append(`chat`, question)

				if(!xhr) {
					throw new Error(`XHR 호출 불가`)
				}
				xhr.open(`POST`, `http://34.80.42.161:8000/v1/chat`)
				xhr.addEventListener(`readystatechange`, () => {
					if(xhr.readyState === COMPLETED) {
						if(xhr.status === OK) {
							json = JSON.parse(xhr.responseText)
							json = json.answer
							if (json.mode === `shuttle_bus`) {		
								busInfo.parentNode.parentNode.parentNode.parentNode.host.style.display = `block`
								document.querySelector(`chat-window`).scrollToLast()				
								this.setBlank()
									.setDorm()
									.setShuttle()	
									.setStation()
									.setArtin()
									.setDormLast()
									.getBackData()
							} else {
								console.warn(`CATEGORY: NOT SHUTTLE`)
								busInfo.parentNode.parentNode.parentNode.parentNode.host.remove()
							}			
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
					dorm.innerHTML += `<div class='bus-time'>${i18next.t(`DORM_CYCLE`)} ${this.addZeros(json.dorm_cycle.minutes, 2)}:${this.addZeros(json.dorm_cycle.seconds, 2)}</div>`
				}
				if (json.dorm_station.status) {
					dorm.innerHTML += `<div class='bus-time'>${i18next.t(`DORM_STATION`)} ${this.addZeros(json.dorm_station.minutes, 2)}:${this.addZeros(json.dorm_station.seconds, 2)}</div>`
				}
				if (json.dorm_artin.status) {
					dorm.innerHTML += `<div class='bus-time'>${i18next.t(`DORM_ARTIN`)} ${this.addZeros(json.dorm_artin.minutes, 2)}:${this.addZeros(json.dorm_artin.seconds, 2)}</div>`
				}	
				return this
			},
			setShuttle() {						
				if (json.shuttle_cycle.status) {
					shuttle.innerHTML += `<div class='bus-time'>${i18next.t(`SHUTTLE_CYCLE`)} ${this.addZeros(json.shuttle_cycle.minutes, 2)}:${this.addZeros(json.shuttle_cycle.seconds, 2)}</div>`
				}				
				if (json.shuttle_station.status) {
					shuttle.innerHTML += `<div class='bus-time'>${i18next.t(`SHUTTLE_STATION`)} ${this.addZeros(json.shuttle_station.minutes, 2)}:${this.addZeros(json.shuttle_station.seconds,2)}</div>`
				}
				if (json.shuttle_artin.status) {
					shuttle.innerHTML += `<div class='bus-time'>${i18next.t(`SHUTTLE_ARTIN`)} ${this.addZeros(json.shuttle_artin.minutes,2)}:${this.addZeros(json.shuttle_artin.seconds, 2)}</div>`
				}
				return this
			},
			setStation() {
				if (json.station.status) {
					station.innerHTML += `<div class='bus-time'>${i18next.t(`STATION_CYCLE`)} ${this.addZeros(json.station.minutes, 2)}:${this.addZeros(json.station.seconds, 2)}</div>`
				}	
				if (json.station_artin.status) {
					station.innerHTML += `<div class='bus-time'>${i18next.t(`STATION_ARTIN`)} ${this.addZeros(json.station_artin.minutes, 2)}:${this.addZeros(json.station_artin.seconds, 2)}</div>`
				}			
				return this	
			},
			setArtin() {
				if (json.artin.status) {
					artin.innerHTML += `<div class='bus-time'>${i18next.t(`ARTIN_CYCLE`)} ${this.addZeros(json.artin.minutes, 2)}:${this.addZeros(json.artin.seconds, 2)}</div>`
				}
				return this
			},
			setDormLast() {
				if (json.shuttle_dorm.status) {
					dormLast.innerHTML += `<div class='bus-time'>${i18next.t(`SHUTTLE_DROM`)} ${this.addZeros(json.shuttle_dorm.minutes, 2)}:${this.addZeros(json.shuttle_dorm.seconds, 2)}</div>`
				}
				return this
			},
			getBackData() {
				const rotateData = [`dorm_cycle`, `dorm_station`, `dorm_artin`, `shuttle_cycle`, `shuttle_station`, `shuttle_artin`, `station`, `station_artin`, `artin`, `shuttle_dorm`]
				let canChange = false

				for (const Line of rotateData) {
					if (isTimeZero(Line)) {
						canChange = true
					}
				}

				if (canChange) {
					this.getData()
				} else {
					this.minusTime().then(() => {
						this.setBlank()
							.setDorm()
							.setShuttle()	
							.setStation()
							.setArtin()
							.setDormLast()
							.getBackData()
					})					
				}

				function isTimeZero(Line) {
					return json[Line][`status`] && json[Line][`minutes`] <= 0					
				}

				return this
			},
			async minusTime() {
				const rotateData = [`dorm_cycle`, `dorm_station`, `dorm_artin`, `shuttle_cycle`, `shuttle_station`, `shuttle_artin`, `station`, `station_artin`, `artin`, `shuttle_dorm`]

				for (const Line of rotateData) {
					if (json[Line][`status`]) {
						json[Line][`seconds`]--

						if (json[Line][`seconds`] <= 0) {
							json[Line][`seconds`] = 59
							json[Line][`minutes`]--
						}
					}
				}
				await this.sleep()
				return this
			},
			sleep() {
				return new Promise(resolve => setInterval(resolve, 1000))
			},
			addZeros(num, digit) {
				const _num = num.toString()		
				let zero = ``		
				
				if (_num.length < digit) {
					for (let i = 0; i < digit - _num.length; i++) {
						zero += `0`
					}
				}
				return zero + _num
			},
		}
	}		

	render() {
		return html`
			${style}
			<main>
				<div class='bus-left-time'>${i18next.t(`BUS_LEFT_TIME`)}</div>
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

	.bus-left-time {
		font-weight: bold;
		color: dodgerblue;
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
		height: 370px;
		background: #FB7100;
		width: 3px;
		right: 82px;
		z-index: 5;
	}
</style>
`

customElements.define(`bus-info`, BusInfo)
