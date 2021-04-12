express = require('express')

var router = express.Router();

router.route('/').get((req,res)=>{
    res.send(`Home page url <br>
    <b><a href='http://localhost:3000/login'> login </b> <br>
    <b><a href='http://localhost:3000/registration'> registration </b>
    `);
})


module.exports = router