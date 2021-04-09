const express = require('express')


const app = express()
const port =  3000;


// app.use('/',require('./Router/home'))
// app.use('/onlineorder',require('./Router/onlineorder'))
// app.use('/gellary',require('./Router/gellary'))
// app.use('/contact',require('./Router/contact'))
app.use('/login',require('./Router/login'))

app.listen(port,()=>{
    console.log(`Server is running on port: ${port}`)
})