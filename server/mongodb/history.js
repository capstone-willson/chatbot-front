const mongoose = require(`mongoose`)

const { Schema } = mongoose
const history = new Schema({
	ip: {
		type: String,
	},
	date: {
		type: Date,
		default: Date.now,
	},
	user: {
		type: String,
	},
	chat: {
		type: String,
	},
})

module.exports = mongoose.model(`historys`, history)
