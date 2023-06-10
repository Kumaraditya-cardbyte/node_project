const express = require('express')
const app = express();
const productRouter = require('./router/ProductRouter')

app.use('/product',productRouter)
app.listen(5000,()=>{
  console.log("server running on 5000")
})