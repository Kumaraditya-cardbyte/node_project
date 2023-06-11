const express = require('express')
const app = express();
require('./config/MongoDBConnection')
const productRouter = require('./router/ProductRouter')
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/product', productRouter)
app.listen(5000, () => {
    console.log("server running on 5000")
})