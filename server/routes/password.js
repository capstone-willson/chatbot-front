const express = require(`express`)
const router = express.Router()

router.post(`/`, (req, res, next) => {
	res.send(req.body.password === process.env.MONGO_PASSWORD)
})

module.exports = router
