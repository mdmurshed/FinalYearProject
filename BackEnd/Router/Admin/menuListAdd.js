const router = require('express').Router();
let Category = require('../../models/ItemCategory')
let MenuItems = require('../../models/menuItems')
router.get('/menuItemAdd', (req, res) => {
    Category.find()
        .exec()
        .then(data => {
            res.status(200).json({
                status: 'Admin on working',
                data: data
            })
        })


})
router.post('/menuItemAdd', (req, res) => {
    Category.find({ category: req.body.category })
        .exec()
        .then(data => {
            if (data.length >= 1) {
                // return res.status(400).json({
                //     massage: 'Category exits'
                // })
                const newMenuItem = new MenuItems({
                    category: req.body.category,
                    item: req.body.item,
                    discription: req.body.discription,
                    price: req.body.price
                })
                newMenuItem.save()
                    .then(() => {
                        res.status(200).json({ massage: 'MenuList added! ' })
                    })
            }
            else {
                //  Categoru added to the database
                const newCategory = new Category({
                    category: req.body.category
                })
                // console.log('Category')
                newCategory.save()
                    .then(() => {
                        // res.status(200).json({status:"New Categroy added"})
                        //  menu item add to the databse
                        const newMenuItem = new MenuItems({
                            category: req.body.category,
                            item: req.body.item,
                            discription: req.body.discription,
                            price: req.body.price
                        })
                        newMenuItem.save()
                            .then(() => {
                                 res.status(200).json({ massage: 'MenuList added! and New Category'})
                            })
                    })
                    .catch(
                        err => res.status(400).json({
                            error: err
                        })
                    )
            }
        })
        .catch(err => {
            res.status(400).json({
                error: "Category Error" + err
            })
        })

})

module.exports = router