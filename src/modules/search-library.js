class SearchLibrary {	
	replyAboutLibrary() {
		const chatBody = document.querySelector(`chat-window`).shadowRoot.querySelector(`chat-window-body`)
		const chatFooter = querySelectorShadowDom.querySelectorDeep(`chat-window-footer`)

		chatBody.reply(i18next.t(`INPUT_BOOK_NAME`))
		chatFooter.isLibraryMode = true
		chatBody.waitSend(data => {
			this.searchBook(data)
		})
		return this
	}
	// 책 이름 그대로 검색 받으면, 검색 해줌
	searchBook(text) {
		const xhr = new XMLHttpRequest()			
		if(!xhr) {
			throw new Error(`XHR 호출 불가`)
		}
		xhr.open(`GET`, `https://lib.hanyang.ac.kr/pyxis-api/2/collections/6/search?all=k%7Ca%7C${text}&rq=BRANCH%3D9`)	
		xhr.setRequestHeader(`x-requested-with`, `XMLHttpRequest`)
		xhr.addEventListener(`readystatechange`, () => this.onReadyBookSearch(xhr))		
		xhr.send()
	}

	onReadyBookSearch(xhr) {
		const COMPLETED = 4, OK = 200
		const chatFooter = querySelectorShadowDom.querySelectorDeep(`chat-window-footer`)
		let title, author, publication, imageSrc, isCheckout
		if(xhr.readyState === COMPLETED) {
			if(xhr.status === OK) {					
				// console.log(JSON.parse(xhr.responseText)[`data`][`list`])
				for(let i = 0; i < 3; i++) {
					try {
						title = JSON.parse(xhr.responseText)[`data`][`list`][i][`titleStatement`]
						author = JSON.parse(xhr.responseText)[`data`][`list`][i][`author`]
						publication = JSON.parse(xhr.responseText)[`data`][`list`][i][`publication`]
						imageSrc = JSON.parse(xhr.responseText)[`data`][`list`][i][`thumbnailUrl`]
						isCheckout = JSON.parse(xhr.responseText)[`data`][`list`][i][`branchVolumes`]
							.find(each => each.name.indexOf(`ERICA`))[`cState`]
						// console.log(title, author, publication, imageSrc, isCheckout)							
						this.createBookList({
							title,
							author,
							publication,
							imageSrc,
							isCheckout,
						})	
					} catch(err) {
						chatFooter.isLibraryMode = false
					}			
				}
			} else {
				chatFooter.isLibraryMode = false
				throw new Error(`No XHR`)
			}
		}
	}

	createBookList(bookInfo) {
		const chatBody = document.querySelector(`chat-window`).shadowRoot.querySelector(`chat-window-body`)
		const chatFooter = querySelectorShadowDom.querySelectorDeep(`chat-window-footer`)

		chatBody.reply(`<book-list 
			imageSrc='${bookInfo.imageSrc}' 
			title='${bookInfo.title}' 
			author='${bookInfo.author}' 
			publication='${bookInfo.publication}' 
			isCheckout='${bookInfo.isCheckout}' ></book-list>`)
		setTimeout(() => {
			chatFooter.isLibraryMode = false
		}, 500)
	}
}

const searchLibrary = new SearchLibrary()
export default searchLibrary
