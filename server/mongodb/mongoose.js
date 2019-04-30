const mongoose = require(`mongoose`)

module.exports = () => {
	const connect = () => {
		if (process.env.NODE_ENV !== `production`) {
			mongoose.set(`debug`, true)
		}

		mongoose.connect(`mongodb://taeuk:dnrxo123@localhost:27017/chatbot`, {
			dbName: `hanyangfood`,
		}, error => {
			if (error) {
				console.error(`몽고DB 연결 실패`, error)
			} else {
				console.info(`몽고DB 연결 성공`)
			}
		})
	}
	
	connect()

	mongoose.connection.on(`error`, error => {
		console.error(`몽고DB 연결 실패`, error)
	})

	mongoose.connection.on(`disconnected`, () => {
		console.error(`몽고DB 연결 끊김. 재시도`)
		connect()
	})

	require(`./hanyangfood`)
}
