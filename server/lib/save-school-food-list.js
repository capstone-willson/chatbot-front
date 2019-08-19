const schedule = require(`node-schedule`)
const puppeteer = require(`puppeteer`)
const Hanyangfood = require(`../mongodb/hanyangfood.js`)

module.exports = () => {	
	// 11: 교직원, 12: 학식, 13: 기식, 14: 푸드코트, 15: 창보
	for(let i = 11; i < 16; i++) {
		crawl(i)
	}	
	schedule.scheduleJob(`00 14 * * *`, () => {
		for(let i = 11; i < 16; i++) {
			crawl(i) 
		}
	})
}

async function crawl(place) {	
	const browser = await puppeteer.launch({
		headless: true,
		args: [`--no-sandbox`, `--disable-setuid-sandbox`],
	})
	const page = await browser.newPage()
	const date = new Date(new Date().setTime(new Date().getTime() + 1000 * 9 * 60 * 60))
	const year = date.getFullYear()
	const month = date.getMonth()
	const day = date.getDate()

	await page.goto(`https://www.hanyang.ac.kr/web/www/re${place}?p_p_id=foodView_WAR_foodportlet&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&p_p_col_id=column-1&p_p_col_pos=1&p_p_col_count=2&_foodView_WAR_foodportlet_sFoodDateDay=${day}&_foodView_WAR_foodportlet_sFoodDateYear=${year}&_foodView_WAR_foodportlet_action=view&_foodView_WAR_foodportlet_sFoodDateMonth=${month}`, {waitUntil: `networkidle2`})	
	
	const links = await page.evaluate(() => {
		const result = []

		searchBreakfast()
		searchLunch()
		searchDinner()

		return result

		function searchBreakfast() {
			let breakfast = Array.from(document.querySelectorAll(`h4`))
			breakfast = breakfast.find(each => each.textContent === `조식`)
			if (breakfast !== undefined) {
				breakfast = breakfast.parentNode.querySelectorAll(`h3`)
			
				result[0] = []
				for(const menu of breakfast) {
					result[0].push(menu.textContent.trim())
				}
			}
		}

		function searchLunch() {
			let lunch = Array.from(document.querySelectorAll(`h4`))
			lunch = lunch.find(each => each.textContent === `중식`)
			if (lunch !== undefined) {
				lunch = lunch.parentNode.querySelectorAll(`h3`)
			
				result[1] = []
				for(const menu of lunch) {
					result[1].push(menu.textContent.trim())
				}
			}
		}

		function searchDinner() {
			let dinner = Array.from(document.querySelectorAll(`h4`))
			dinner = dinner.find(each => each.textContent === `석식`)
			if (dinner !== undefined) {
				dinner = dinner.parentNode.querySelectorAll(`h3`)
			
				result[2] = []
				for(const menu of dinner) { 
					result[2].push(menu.textContent.trim())
				}
			}
		}		
	})

	browser.close() 
	Hanyangfood.findOneAndUpdate({placeId: place}, {foodList: links}, {multi: true, upsert: true}, (err, _result) => {
		if (err) {
			console.error(err)
		} else {
			// console.info(_result) 
		}
	}) 
}
