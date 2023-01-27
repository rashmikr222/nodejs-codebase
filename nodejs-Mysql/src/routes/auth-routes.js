const express = require('express')
const router = express.Router()

const testService = require('../controller/test')
const auth = require('../routes/middlewares/auth')

router.post('/signin', testService.test)
router.get('/getApi',auth,testService.getApi)

module.exports = router