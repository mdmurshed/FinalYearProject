const router = require('express').Router();

const User = require('../models/registration.model')

router.route('/:email').get(async (req,res)=>{
    // console.log(req.body.email);
    // console.log(req.body.password);
    User.find({email:req.body.email})
        .then(
            function(user){
                if(user[0].password === req.body.password)(res.json("rightPassword"))
                else (res.json('wrongPassword'))
            }
        
        )
        .catch(err=>res.status(400).json("Error :" + err))
})


module.exports = router;
