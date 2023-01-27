const express = require('express')
const config = require('./config')
const expressApp = require('../src/express-app')
const app = express()
console.log("========>", config.PORT);

function startServer() {
    expressApp(app)
    app.listen(config.PORT, () => {
        console.log("server is up and running");
    })
}
startServer();

