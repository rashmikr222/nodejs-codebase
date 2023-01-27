const mongoose = require('mongoose');
const config = require('../config') //for importing variables from .env files

module.exports.connect = () => {
    try {
        mongoose.connect(config.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Successfully connected to the database")
    } catch (error) {
        console.log("database connection failed. exiting now...");
        console.log(error);
        process.exit(1);
    }

}