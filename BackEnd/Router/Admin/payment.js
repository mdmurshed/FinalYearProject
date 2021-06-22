const router = require('express').Router();
const uuid = require('uuid')

// add a stripe key
const stripe = require('stripe')("sk_test_51J4tH5Ait3FweL0L1R528GW5hwqCL0YbgjRgdX4RvWcqIRozvImKC2gPVjuSLPT1DYJ8miLgG6PnUiMGZR6CjyYK00BXl5JD6X")

router.get("/", (req, res) => {
    res.status(200).json({ message: "Payment routing is working" })
})
router.post("/", (req, res) => {
    const { product, token } = req.body
    console.log(token.email)
    console.log(token.id)
    // console.log(product)

    const idempontencyKey = uuid
    stripe.customers.create({
        email: token.email,
        source: token.id

    }).then(customer => {
        try {
            stripe.charges.create({
                amount: product.price,
                currency: 'usd',
                customer: customer.id,
                receipt_email: token.email,
                description: `purchase of product.name`,
                shipping: {
                    name: token.card.name,
                    address: {
                        country: token.card.address_country
                    }
                }
            }, { idempontencyKey })
        } catch (err) {
            console.log(err)
        }
    }).then(result => {
        console.log("result", result)
        res.status(200).json({ result: result })
    }).catch(err => {
        res.status(400).json({
            err: err
        })
    })



})



module.exports = router