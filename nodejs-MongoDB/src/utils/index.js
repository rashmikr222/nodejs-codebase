// Bcrypt is a popular and trusted method for salt and hashing passwords
const bcrypt = require('bcrypt')
const config = require('../config')
const jwt = require('jsonwebtoken')

console.log("process.env.JWT_SECRET_KEY", config.JWT_SECRET_KEY)

// A salt is a random string that makes the hash unpredictable
module.exports.GenerateSalt = async () => {
    return await bcrypt.genSalt()
}
// hashed password and saving in database
module.exports.GeneratePassword = async (password, salt) => {
    return await bcrypt.hash(password, salt)
}

// validate the password stored in the database with user entered
module.exports.ValidatePassword = async (enteredPassword, savedPassword, salt) => {
    return await this.GeneratePassword(enteredPassword, salt) === savedPassword
}

// generate token(JWT)
module.exports.GenerateSignature = (payload) => {
    console.log("Inside the generate signature", payload)
    try {
        return new Promise((resolve, reject) => {
            jwt.sign(
                payload, config.JWT_SECRET_KEY, {
                expiresIn: "1m"
            }, (err, token) => {
                if (err) {
                    console.log("erroooooo", err)
                    reject(err)
                } else {
                    resolve(token)
                }
            })
        })

    } catch (error) {
        console.log("======>", error)
    }
}

// password string
// module.exports.CheckPassword = async (password) => {
//     console.log("====password", password)
//     // min 8 letter password, with at least a symbol, upper and lower case letters and a number
//     let regularExpression = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
//     console.log("regular expression",regularExpression)
//     if (!regularExpression.test(password)) {
//         console.log("inside if")
//         return false
//     }
// }

