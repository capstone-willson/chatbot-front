const express = require(`express`)
const router = express.Router()

/**
 * @swagger
 * tags:
 *   name: Hanyangfoods
 *   description: 한양대학교 학식 데이터 수집
 */
module.exports = router
 
/**
 * @swagger
 * /hanyangfood/:
 *   get:
 *     summary: 한양대학교 학식 데이터 수집
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: hanyangfoods
 *         type: object
 *         description: |
 *          한양대학교 학식 데이터 수집
 *     responses:
 *       200:
 *         description: 성공
 *       403:
 *         $ref: '#/components/res/Forbidden'
 *       404:
 *         $ref: '#/components/res/NotFound'
 *       500:
 *         $ref: '#/components/res/BadRequest'
 */
router.get(`/`, async (req, res, next) => {
	const Hanyangfood = require(`../mongodb/hanyangfood.js`)

	Hanyangfood.find({}).then(schema => {
		res.json(schema)
	}).catch(err => {
		console.error(err)
		next(err)
	})
})
