const mongoose = require(`mongoose`)

const { Schema } = mongoose
const hanyangfood = new Schema({
	placeId: {
		type: Number,
	},
	foodList: {
		type: Object,
	},
})

module.exports = mongoose.model(`Hanyangfoods`, hanyangfood)
