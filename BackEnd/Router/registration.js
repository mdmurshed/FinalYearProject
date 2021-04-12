
const router = require('express').Router()

let User = require('../models/registration.model');

// router.route('/chack').get((req,res)=>{
//     user.find()
//         .then(users=>res.json(users))
//         .catch(err=>res.stautus(400).json('Error : ' + err))
// })

router.route('/').post(async (req,res)=>{
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const number = req.body.number
    const email = req.body.email
    const password = req.body.password
    const date = req.body.date
    console.log(firstName)
    console.log(lastName)
    console.log(number)
    console.log(email)
    console.log(password)
    const newUser = new User({
        firstName,
        lastName,
        number,
        email,
        password,
        date
    })
    // const newUser = new user(req.body);

    newUser.save()
        .then(()=>res.json('User added!'))
        .catch(err=>res.status(400).json('Error :' + err))
})

module.exports = router