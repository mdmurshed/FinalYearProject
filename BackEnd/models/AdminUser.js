const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email:{
        type:String,
        unique:true,
        required: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password:{
        type:String,
        required:true,
    }
})
const AdminUser = mongoose.model('AdminUser',UserSchema);

module.exports = AdminUser


