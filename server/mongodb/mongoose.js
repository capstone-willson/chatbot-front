const mongoose = require(`mongoose`)

module.exports = () => {
	const connect = () => {
		if (process.env.NODE_ENV !== `production`) {
			mongoose.set(`debug`, true)
		}

		mongoose.connect(`mongodb://taeuk:dnrxo123@34.80.42.161:27017/admin`, {
			user: `taeuk`,
			pass: `dnrxo123`,
			dbName: `chatbot`,
			useNewUrlParser: true,
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

	require(`./hanyangfood.js`)
}
