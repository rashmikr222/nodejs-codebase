const express = require('express')

// import database connection
require('./database/connection').connect()

module.exports = async (app) => {
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    console.log("inside express app")
}