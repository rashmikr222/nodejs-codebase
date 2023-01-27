const dotenv = require('dotenv')
const path = require('path');
const envCmdrcPath = path.join(__dirname, "..", ".env-cmdrc")
console.log("env-cmdrc file path ==> ", envCmdrcPath);

dotenv.config({ path: envCmdrcPath })

// const MONGODB_URI = `mongodb://username:password@44.203.27.87:27017/database_name?authMechanism=SCRAM-SHA-1&authSource=admin&readPreference=primary&directConnection=true&ssl=false`.replace("username", USERNAME).replace("password", PASSWORD).replace("database_name", DATABASE_NAME)
const MONGODB_URI = `mongodb://localhost:27017`
module.exports = {
    PORT: process.env.PORT,
    JWT_SECRET_KEY:process.env.JWT_SECRET_KEY,
    MONGODB_URI
}