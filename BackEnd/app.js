const express = require('express');

const app = express();
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const additionalConfig = require('./additionalConfig')
const cors = require('cors')
const databaseConnection = require('./databaseConnection')

// database connection
databaseConnection();


// every routing logs
app.use(morgan('dev'));

//static function 
app.use('/uploads',express.static('uploads'))


app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',
    optionSuccessStatus:200
}))
app.use(express.json())
app.use(cookieParser())
//static function 
// app.use('/uploads',express.static('uploads'))
// body parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



// desable the port 
app.use(additionalConfig.postDisable)

// Routing section
app.use('/login',require('./Router/login'))
app.use('/registration',require('./Router/registration'))
app.use('/gallery',require('./Router/gallery'))
app.use('/admin',require('./Router/Admin/admin'))
app.use('/admin/login',require('./Router/Admin/adminLogin'))
app.use('/onlineOrder',require('./Router/OnlineOrder/OnlineOrder'))
app.use('/payment',require('./Router/Admin/payment'))
app.use('/orderList',require('./Router/Admin/orderList'))
app.use('/contact',require('./Router/Contact/contact'))
app.use('/reservation',require('./Router/Reservation/reservation'))
//  Error handeling
app.use(additionalConfig.createMidError)
app.use(additionalConfig.MidErrorShow)

module.exports = app;