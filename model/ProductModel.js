const mongoose = require('mongoose')
const schema = mongoose.Schema;

const productSchema = new schema({
    _id: {type: String},
    name: {type: String},
    companyName: {type: String}
})
const Product = mongoose.model('Product',productSchema)
module.exports = Product;