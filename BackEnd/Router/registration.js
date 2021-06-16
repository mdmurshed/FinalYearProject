
const router = require('express').Router()

let User = require('../models/registration.model');
const bcrypt = require('bcrypt')
// router.route('/chack').get((req,res)=>{
//     user.find()
//         .then(users=>res.json(users))
//         .catch(err=>res.stautus(400).json('Error : ' + err))
// })

router.route('/').post(async (req, res) => {
    User.find({email:req.body.email})
    .exec()
    .then(data=>{
        if(data.length>=1) {
               return res.status(400).json({
                    massage:'Email exist'
                })
        }

        // send the user info to the database
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            if(err) {
                return res.status(400).json({
                    error: err
                })
            }
            const newUser = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                number: req.body.number,
                email: req.body.email,
                password : hash,
                date: new Date()
            })
            // const newUser = new user(req.body);
    
            newUser.save()
                .then(() => res.status(200).json({massage:'User added!'}))
                .catch(
                    err => res.status(202).json({
                        error : err
                    })
                )
        })
        

    })
    .catch(err=>{
        res.status(202).json({
            error: err
        })
    })

    

})

module.exports = router