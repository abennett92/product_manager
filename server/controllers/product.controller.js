const Product = require("../models/product.model");


module.exports.getAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => {
            res.json({ results: allProducts })
        })
        .catch(err => {
            res.json({ err: err })
        })
}

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => {
            res.json({ results: newProduct })
        })
        .catch(err => {
            res.json({ err: err })
        })
}

module.exports.findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(foundProduct => {
            res.json({ results: foundProduct })
        })
        .catch(err => {
            res.json({ err: err })
        })
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => {
            res.json({ results: updatedProduct })
        })
        .catch(err => {
            res.json({ err: err })
        })
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(deletedProduct => {
            res.json({ results: deletedProduct })
        })
        .catch(err => {
            res.json({ err: err })
        })
}