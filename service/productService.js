const getAllProduct =(req,res)=>{
    console.log("Fetching all the product")
    res.send("Fetched all the product")
    res.end();
}

const getProduct = (req,res) => {
    console.log("Fetching a particular product")
    res.send("Fetched a particular product")
    res.end();
}

const updateProduct = (req,res) => {
    console.log("Updating a particular product")
    res.send("Updating a particular product")
    res.end();
}

const deleteProduct =  (req,res) => {
    console.log("Deleting a particular product")
    res.send("Deleting a particular product")
    res.end();
}

const createProduct =(req,res) =>{
    console.log("Creating product with the provided details ")
    res.send("Creating product with the provided details")
    res.end();
}

module.exports = {getAllProduct,getProduct,updateProduct,deleteProduct,createProduct}