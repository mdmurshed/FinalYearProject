const router = require('express').Router();
let PaymentOrder = require('../../models/paymentModel')
const auth = require('../../auth/auth')
router.get('/', (req, res) => {
    PaymentOrder.find()
        .exec()
        .then(data => {
            res.status(200).json({
                status: 'Admin on working',
                data: data
            })
        })


})
router.post('/',auth, (req, res) => {
     const orderSave = new PaymentOrder({
        person: req.body.person,
        orders: req.body.orders,
        price: req.body.price
    })
    orderSave.save()
        .then(() => {
            res.status(200).json({ massage: 'orders added! ' })
        }).catch(err =>  res.status(400).json({ err:err }))

})

module.exports = router