const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const PaymentsSchema  = new Schema({
    person:{
        type:String,
        required: true,
    },
    orders:{
        type:String
    },
    price:{
        type:Number,
        required: true
    }
})
const PaymentOrder = mongoose.model('PaymentOrder',PaymentsSchema);

module.exports = PaymentOrder

