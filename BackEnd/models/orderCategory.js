const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const orderCate  = new Schema({
    category:{
        type:String,
        required: true,
    },
    photos:{
        type:String,
        required: true,
    }
    
})
const Gellary = mongoose.model('Gellary',GellarySchema);

module.exports = Gellary

