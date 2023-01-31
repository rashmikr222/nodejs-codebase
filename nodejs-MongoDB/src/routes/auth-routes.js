const express = require('express')
const router = express.Router()

const { ROUTES_PATH } = require('../utils/common')
const AUTHVALIDATION = require('./middlewares/validationMiddleware')

const userService = require('../controller/user')
const auth = require('../routes/middlewares/auth')

const validation = require('../routes/middlewares/validationMiddleware')
const { userSchema, loginSchema } = require('../validation/userValidation')
console.log("=======>update",ROUTES_PATH.USER.UPDATE);
// refresToken 
// router.post(ROUTES_PATH.USER.REFRESHTOKEN)

router.post(ROUTES_PATH.USER.SIGNUP, validation(userSchema), userService.userSignup)
router.post(ROUTES_PATH.USER.LOGIN, validation(loginSchema), userService.userLogin)
router.put(ROUTES_PATH.USER.UPDATE, userService.updateUser)
// router.delete(ROUTES_PATH.USER.DELETE)


module.exports = router