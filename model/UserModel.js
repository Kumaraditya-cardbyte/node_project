const mongoose = require('mongoose')
const schema = mongoose.Schema;

const userSchema = new schema({
    _id: {type: String},
    firstName: {type: String},
    lastName: {type: String},
    emailId:{type: String},
    phoneNumber:{type:String}
})
const Product = mongoose.model('User',userSchema)
module.exports = Product;