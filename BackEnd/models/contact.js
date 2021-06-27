const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name:{
        type: 'string',
        require:true
    },
    email:{
        type:String,
        unique:true,
        required: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    phone:{
        type:Number,
        required:true
    },
    message:{
        type:String,
        required: true
    }
    
})
const Contact = mongoose.model('Contact',ContactSchema);

module.exports = Contact


