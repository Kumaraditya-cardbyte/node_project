const express = require('express')
const router = express.Router();
const {
    deleteProduct
    , getProduct, getAllProduct, updateProduct,
    createProduct,
    deletePage, updatePage
} = require('../service/productService')

router.get('/', (req, res) => {
    getAllProduct(req, res)
})
router.get('/:id', (req, res) => {
    getProduct(req, res)
})
router.post('/', (req, res) => {
    createProduct(req, res)
})
router.put('/:id', (req, res) => {
    updateProduct(req, res)
})
router.delete('/:id', (req, res) => {
    deleteProduct(req, res)
})

router.get('/page/delete',(req,res) =>{
deletePage(req,res)
})
router.get('/page/update',(req,res) =>{
    updatePage(req,res)
})

module.exports = router;