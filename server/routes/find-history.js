const express = require(`express`)
const router = express.Router()
const history = require(`../mongodb/history.js`)

router.post(`/`, (req, res, next) => {
	if (req.body.password === process.env.MONGO_PASSWORD) {
		history.find({ip: req.body.target}, null, {sort: {date: -1}}, (error, _history) => {
			res.json(_history)
		})
	} else {
		res.end(`fail`)
	}
})

module.exports = router
