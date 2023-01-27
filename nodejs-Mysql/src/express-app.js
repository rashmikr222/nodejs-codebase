const express = require('express')
const cors = require('cors')
// import database connection
require('./database/connection').connect()
//routes 
const testRoutes = require('../src/routes/auth-routes')
module.exports = async (app) => {
    // middlewares
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(cors())
    // 
    app.use(testRoutes)
    console.log("inside express app")
}