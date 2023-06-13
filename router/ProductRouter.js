const {
    deleteProduct
    , getProduct, getAllProduct, updateProduct,
    createProduct,
} = require('../service/productService')

module.exports = (router,app) =>{
    router.get('/', app.oauth.authorise(),(req, res) => {
        getAllProduct(req, res)
    })
    router.get('/:id', app.oauth.authorise(),(req, res) => {
        getProduct(req, res)
    })
    router.post('/', app.oauth.authorise(),(req, res) => {
        createProduct(req, res)
    })
    router.put('/:id',app.oauth.authorise(), (req, res) => {
        updateProduct(req, res)
    })
    router.delete('/:id',app.oauth.authorise(), (req, res) => {
        deleteProduct(req, res)
    })
    return router;
}



