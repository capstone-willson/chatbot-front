class SearchFoodMenu {
	openHanyangSite() {
		const xhr = new XMLHttpRequest()
		if(!xhr) {
			throw new Error(`Err. XHR`)
		}
		xhr.open(`GET`, `http://localhost:8080/hanyangfood`)
		xhr.setRequestHeader(`x-requested-with`, `XMLHttpRequest`)
		xhr.addEventListener(`readystatechange`, () => {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					const chatBody = document.querySelector(`chat-window`).shadowRoot.querySelector(`chat-window-body`)
					if (typeof JSON.parse(xhr.responseText) === `string`) {
						return
					}					
					JSON.parse(xhr.responseText).forEach(each => {
						chatBody.reply(JSON.stringify(each))
					})					
				} else {
					throw new Error(`No XHR`)
				}
			}
		})
		xhr.send()
	}
}
const searchFoodMenu = new SearchFoodMenu()
export default searchFoodMenu
