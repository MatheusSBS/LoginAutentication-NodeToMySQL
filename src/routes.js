const router = require('express').Router()

router.post('/', (req, res) => res.json({ success: true }))

module.exports = router