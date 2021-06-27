const router = require('express').Router()

let Contact = require('../../models/contact');


router.get("/",(req,res)=>{
    Contact.find()
    .then(data=>{
        res.status(200).json({
            data:data
        })
    })
})

router.route('/').post(async (req, res) => {
            const contactMessage = new Contact({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                message: req.body.message
            })
            contactMessage.save()
                .then(() => res.status(200).json({message:'We are informed.'}))
                .catch(
                    err => res.status(202).json({
                        error : err
                    })
                )
    

 })

module.exports = router