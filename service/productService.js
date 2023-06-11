const Product = require('../model/ProductModel')
const {v4: uuidv4} = require('uuid')

const getAllProduct = (req, res) => {
    console.log("Fetching all the product")
    Product.find({})
        .then((data) => {
            res.json(data)
            res.end();
        })
        .catch((error) => {
            console.error("Error while fetching all the product from the db")
            console.error(error)
            res.send("Error while fetching all the product from the db")
            res.end();
        })

}

const getProduct = (req, res) => {
    console.log("Fetching a particular product")

    Product.findById(req.params.id)
        .then((data) => {
            console.log(`Fetched data ${data}`)
            res.json(data)
            res.end();
        })
        .catch((error) => {
            console.log(`Error while fetching product with productId: ${req.params.id}`)
            res.send("Error while fetching product")
            res.end();
        })
}

const updateProduct = (req, res) => {
    console.log("Updating a particular product")
    Product.findById(req.params.id)
        .then((data) => {
            console.log(`Fetched product is ${data}`)
            data['name'] = req.body.name
            data['companyName'] = req.body.companyName
            data.save()
                .then(r => {
                    console.log(`${req.params.id} is updated with the latest info`)
                    res.send("updated the product")
                    res.end();
                })
                .catch((error) => {
                    console.log("Error while updating the productId ")
                    res.send('Error while saving back the product')
                    res.end()
                })

        })
        .catch((error) => {
            console.log("Error while updating the product")
            console.error(error)
            res.send('Error while looking for the product')
            res.end()

        })
}

const deleteProduct = (req, res) => {
    console.log("Deleting a particular product")
    Product.findByIdAndDelete(req.params.id)
        .then(() => console.log(`${req.params.id} deleted from mongodb`))
        .catch((error) => console.error(error))
    res.send("Deleting a particular product")
    res.end();
}

const createProduct = (req, res) => {
    const {name, companyName} = req.body;
    const obj = new Product({
        _id: uuidv4(),
        name: name,
        companyName: companyName
    })

    obj.save()
        .then(() => console.log("Product saved to the database."))
    console.log("Creating product with the provided details ")
    res.send("Creating product with the provided details")
    res.end();
}

module.exports = {getAllProduct, getProduct, updateProduct, deleteProduct, createProduct}