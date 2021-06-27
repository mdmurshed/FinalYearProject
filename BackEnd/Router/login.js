const router = require('express').Router();
const auth = require('../auth/auth')
const User = require('../models/registration.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



router.get('/logout',(req,res)=>{ 
    res.status(201)
    .clearCookie('token')
    .send("loged_out")
})

router.get('/users', auth ,(req, res) => {
    User.find()
        .exec()
        .then(users => {
            res.status(200).json({
                massage: "All users",
                info: users.map(user => {
                    return user
                })
            })
        })
        .catch(err => {
            res.status(404).json({
                error: err
            })
        })
})
router.get('/user/:email' ,(req, res) => {
    User.findOne({email:req.params.email})
        .exec()
        .then(user => {
            res.status(200).json({
                info:user
            })
        })
        .catch(err => {
            res.status(404).json({
                error: err
            })
        })
})
router.post('/userUpdate/:email',(req, res) => {
    User.find({email:req.body.email})
    .exec()
    .then(data=>{
        // console.log(data)
        // send the user info to the database
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            if(err) {
                return res.status(400).json({
                    error: err
                })
            }
            data[0].firstName = req.body.firstName
            data[0].lastName = req.body.lastName
            data[0].email = req.body.email
            data[0].number = req.body.number
            data[0].password = hash
            console.log(data[0])
            User.updateOne({email:req.body.email},{
                $set:data[0]
            }).exec()
            .then(result=>{
                res.status(200).json({
                    status:"Update Done",
                    data:result
                })
            })
            .catch(err=>{
                console.log(err)
                res.status(404).json({error:err})
            })
        })
        

    })
    .catch(err=>{
        res.status(202).json({
            error: err
        })
    })

})

router.get('/chack', auth ,(req, res) => {
    res.status(200).send(true)
})

router.post('/', (req, res) => {
    User.find({ email: req.body.email })
        .exec()
        .then(users => {
            console.log(users[0].password)
            if (users.length < 1) res.status('500').json({
                massage: "email not found"
            })
            bcrypt.compare(req.body.password, users[0].password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message: 'Auth failed'
                    })
                }
                if (result) {
                    const token = jwt.sign({
                        email: users[0].email,
                        userId: users[0]._id
                    }, "secret",
                        {
                            expiresIn: "1h"
                        });
                    return res.status(200).cookie(
                        'token ',token,{
                            sameSite:'strict',
                            path:'/',
                            expires:new Date(new Date().getTime() + 5000 * 1000)
                            }
                    ).json({
                        massage: 'login '+ users[0].email,
                        token: token
                    })
                }
                res.status(402).json({
                    message: 'wrong password'
                })
            })
        })
        .catch(err => {
            res.status(401).json({
                error: err
            })
        })
})

module.exports = router;
