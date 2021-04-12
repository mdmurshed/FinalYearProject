const express = require('express')
const app = express();
const mongoose = require('mongoose');

// enviroment variables 
require('dotenv').config();
app.use(express.json())


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



app.use((req,res,next)=>{
    console.log("App middileware")
    next();
})


// app.use('/',require('./Router/home'))
app.use('/Login',require('./Router/login'))
app.use('/Registration',require('./Router/registration'))


var port =  process.env.PORT || 3000;
var server = app.listen(port, () => {
    var host = 'localhost'
    var port = server.address().port
    console.log(`Server is running http://${host}:${port}`)
})