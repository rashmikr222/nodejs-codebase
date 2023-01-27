const express = require('express')


module.exports = async (app) => {
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    console.log("inside express app")
}