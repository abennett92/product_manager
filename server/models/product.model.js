const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required:[true, "A title is required"],
        minlength: [2, "The title must be at least 2 characters"]
    },
    price:{
        type:Number,
        required:[true, "Price is required"],
        min: [1, "Price must be higher than 0"]
    },
    description:{
        type:String,
        required:[true, "Description is required"],
        minlength:[5, "The description must be at least 5 characters"]
    }
})

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product;