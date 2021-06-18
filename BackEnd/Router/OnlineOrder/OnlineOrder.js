const router = require('express').Router();
let Category = require('../../models/ItemCategory')
let MenuItems = require('../../models/menuItems')
const auth = require('../../auth/auth')
router.get('/category' ,(req, res) => {
    Category.find().sort({"category" :1 })
        .exec()
        .then(data => {
            res.status(200).json({
                status: 'Admin on working',
                data: data
            })
        })
        .catch((error)=>{
            res.status(202).json({ err : error})
        })
})
router.get('/' ,(req, res) => {
    MenuItems.find()
        .exec()
        .then(data => {
            res.status(200).json({
                status: 'Admin on working',
                data: data
            })
        })
        .catch((error)=>{
            res.status(202).json({ err : error})
        })
})
// router.get('/items' ,(req, res) => {
//     MenuItems.find({category}).sort({"category" :1 })
//         .exec()
//         .then(data => {
//             res.status(200).json({
//                 status: 'Admin on working',
//                 data: data
//             })
//         })
//         .catch((error)=>{
//             res.status(202).json({ err : error})
//         })
// })


// search by item or category 
router.get('/itemSearch/:category',(req,res)=>{
    const searchString  = req.params.category
    // console.log(typeof(searchString))
    // console.log(searchString)
    MenuItems.find({category:searchString})
        .exec()
        .then((item)=>{
            res.status(200).json({ data:item})
        })
        .catch(error=>{
            res.status(404).json("error in search:" + error.massage)
        })
})


// // search by item or category 
// router.get('/itemSearch/:category',(req,res)=>{
//     const searchString  = req.params.category
//     console.log(typeof(searchString))
//     console.log(searchString)
//     MenuItems.find( {$or:[{ item:{$regex:searchString}},{category:{$regex:searchString}},{discription:{$regex:searchString}}]})
//         .exec()
//         .then((item)=>{
//             res.status(200).json(item)
//         })
//         .catch(error=>{
//             res.status(404).json("error in search:" + error.massage)
//         })
// })

module.exports = router