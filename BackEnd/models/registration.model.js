const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName:{
        type:String,
        required: true,
    },
    lastName:{
        type:String,
        required: true,
    },
    number:{
        type:Number,
        unique:true,
        required: true,
    },
    email:{
        type:String,
        unique:true,
        required: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
    }
})
const User = mongoose.model('User',UserSchema);

module.exports = User


