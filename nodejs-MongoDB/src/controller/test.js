// import the logger in controller
const logger = require('../controller/logger')
const { GenerateSignature } = require('../utils/index')

module.exports.signUp = async (req, res, next) => {
    try {
        

    } catch (error) {
        console.log("=======>", error)
        next(error)
    }
}

module.exports.test = async (req, res) => {
    try {
        const userData = {
            id: 2
        }
        const token = await GenerateSignature(userData)
        console.log("token ======", token)
        return res.send({
            token: token
        })
    } catch (error) {
        console.log("error=========", error)
    }

}

module.exports.getApi = (req, res) => {
    try {
        console.log("inside api")
        // logger.testLogger.log('info','Successful')
        logger.testLogger.log('error', 'Error ')
    } catch (error) {
        console.log("error=========", error)
        logger.testLogger.log('error', 'Error ')
    }
}

