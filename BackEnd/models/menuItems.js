const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const MenuItemsSchema  = new Schema({
    category:{
        type:String,
        required: true,
    },
    item:{
        type:String,
        required: true,
    },
    discription:{
        type:String
    },
    price:{
        type:Number,
        required: true
    }
})
const MenuItems = mongoose.model('MenuItem',MenuItemsSchema);

module.exports = MenuItems

