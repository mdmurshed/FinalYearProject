const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const ItemCategorySchema  = new Schema({
    category:{
        type:String,
        required: true,
    }
})
const Category = mongoose.model('Category',ItemCategorySchema);

module.exports = Category;

