const mongoose = require('mongoose')
require('dotenv/config')
const dbURL = process.env.MONGODB_URL

return mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("connected to the Db"))