const router = require('express').Router();
let PaymentOrder = require('../../models/paymentModel')
let User = require('../../models/registration.model')
const auth = require('../../auth/auth')
router.get('/orderItems',auth,(req, res) => {
    PaymentOrder.find({orderStatus:false})
        .exec()
        .then(data => {
            res.status(200).json({
                status: 'Order Status',
                data: data
            })
        }).catch(err=>{
            res.status(404).json({error:err})
        })
})
router.get('/orderHistoy',auth,(req, res) => {
    PaymentOrder.find({orderStatus:true})
        .exec()
        .then(data => {
            res.status(200).json({
                status: 'Order history Status',
                data: data
            })
        }).catch(err=>{
            res.status(404).json({error:err})
        })
})

router.patch('/orderDone/:id',(req,res)=>{
    const id = req.params.id
    PaymentOrder.find({_id:id})
        .exec()
        .then(data=>{
            data[0].orderStatus = true
            PaymentOrder.update({_id:id},{
                $set:data[0]
            }).exec()
            .then(result=>{
                res.status(200).json({
                    status:"order Done",
                    data:result
                })
            })
            .catch(err=>{
                console.log(err)
                res.status(404).json({error:err})
            })
        })
})
router.get('/:email',(req, res) => {

    const email = req.params.email
    PaymentOrder.find({person:email})
        .exec()
        .then(data => {
            res.status(200).json({
                status: 'Order history',
                data: data
            })
        }).catch(err=>{
            console.log(err)
        })


})
router.post('/',auth, (req, res) => {
     const orderSave = new PaymentOrder({
        person: req.body.person,
        orders: req.body.orders,
        orderStatus:false,
        price: req.body.price
    })
    orderSave.save()
        .then(() => {
            res.status(200).json({ massage: 'orders added! ' })
        }).catch(err =>  res.status(400).json({ err:err }))

})

module.exports = router