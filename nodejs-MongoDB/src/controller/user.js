
const userModel = require('../database/models/user')
const { GenerateSalt, GeneratePassword, ValidatePassword, CheckPassword, GenerateSignature } = require('../utils')
const createError = require('http-errors')

// user signup /create user data
module.exports.userSignup = async (req, res, next) => {
    try {
        const { name, email, password, phone } = req.body
        console.log("======>", req.body)
        // email and phone number should be unique
        const isEmailExist = await userModel.exists({ email: email, status: "active" })
        if (isEmailExist) {
            return next(createError.Conflict('Entered email is used by another user'))
        }
        const isPhoneExist = await userModel.exists({ phone: phone, status: "active" })
        if (isPhoneExist) {
            return next(createError.Conflict('Entered phone number is used by another user'))
        }

        const salt = await GenerateSalt()
        // encrypt password and using salt
        const encryptedPassword = await GeneratePassword(password, salt)
        const newUser = new userModel({
            name: name,
            email: email, password: encryptedPassword,
            phone: phone, salt: salt
        })
        await newUser.save()
        return res.send({
            status_code: 200,
            message: "User created successfully!"
        })
    } catch (error) {
        console.log("========>error from create user", error)
        throw new Error(error);
    }
}

// user login
module.exports.userLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body

        // check if the email is exist in database
        const isEmailExist = await userModel.exists({ email: email, status: "active" })
        if (!isEmailExist) {
            return next(createError.NotFound("Please enter valid email id"))
        }

        // get the user password from the database 
        const userData = await userModel.findOne({ email: email, status: "active" })
        const storedPassword = userData.password
        const storedSalt = userData.salt

        const isValidPassword = await ValidatePassword(password, storedPassword, storedSalt)
        if (!isValidPassword) {
            return next(createError.Unauthorized('Please enter valid password'))
        }

        // const token = GenerateSignature()

        //
        return res.send({
            status_code: 200,
            message: "Login successful!"
        })

    } catch (error) {
        console.log("=======user login error", error)
        throw new Error(error)
    }
}

// user update
module.exports.updateUser = async (req, res, next) => {
    console.log("inside update")
    const userID = req.params.id;
    const userData = req.body;
    if(userData.name == "" || userData.email == "" 
    || userData.password == "" ||
     userData ){
        return res.send({
            status_code: 400,
            message: "fields required"
        }) 
    }
    console.log("userid========", userID)
    await userModel.findOneAndUpdate({ _id: userID }, { ...userData })
    return res.send({
        status_code: 200,
        message: "user updated"
    })
    // // const userData = req.body;
    // const isEmpty = Object.values(req.body).some(val => val === null || val === '')
    try {
        //     // check if the user entered email and phone number is used by another user
        //     // email and phone number should be unique
        //     const isEmailExist = await userModel.exists({ email: req.body.email, status: "active" })
        //     if (isEmailExist) {
        //         return next(createError.Conflict('Entered email is used by another user'))
        //     }
        //     const isPhoneExist = await userModel.exists({ phone: req.body.phone, status: "active" })
        //     if (isPhoneExist) {
        //         return next(createError.Conflict('Entered phone number is used by another user'))
        //     }
    } catch (error) {
        throw new Error(error)
    }
}