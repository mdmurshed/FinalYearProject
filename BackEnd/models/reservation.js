const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const ReservationSchema = new Schema({
    name:{
        type: 'string',
        require:true
    },
    phone:{
        type:Number,
        required:true
    },
    guest:{
        type:Number,
        required:true
    },
    recived:{
        type:Boolean,
        required:true

    },
    message:{
        type:String,
        required: true
    }
    
})
const Reservation = mongoose.model('Reservation',ReservationSchema);

module.exports = Reservation


