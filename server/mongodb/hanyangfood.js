const mongoose = require(`mongoose`)
// const puppeteer = require(`puppeteer`)

const { Schema } = mongoose
const hanyangfood = new Schema({
	test: {
		type: String,
		required: true,
		unique: true,
	},
})

module.exports = mongoose.model(`Hanyangfood`, hanyangfood)
