const mongoose = require('mongoose')
require('dotenv').config();


module.exports = ()=>{

// database connection
const uri = process.env.ATLAS_URI
// console.log(uri)
mongoose.connect(uri,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
})
// database connection testing
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log('MongoDb database is connected');
})
}