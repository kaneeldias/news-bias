require('dotenv').config();

module.exports = {
    googleAuth: {
        clientId: process.env.clientId,
        clientSecret: process.env.clientSecret
    },
    clientUrl: process.env.clientUrl,
    database: {
        host: process.env["database.host"],
        user: process.env["database.user"],
        password: process.env["database.password"],
        database: process.env["database.database"]
    }
}