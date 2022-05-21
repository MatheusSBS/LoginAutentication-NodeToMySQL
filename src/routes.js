const express = require('express')
const router = express.Router()

//import controllers
const UserController = require('./controllers/UserController')

router.post('/login', UserController.login)

module.exports = router