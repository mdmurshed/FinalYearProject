const router = require('express').Router();
let Category = require('../../models/ItemCategory')
let MenuItems = require('../../models/menuItems')
const auth = require('../../auth/auth')
router.get('/', auth ,(req, res) => {
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
router.get('/oneItem/:id', auth ,(req, res) => {
    MenuItems.find({_id:req.params.id})
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

router.post('/menuItemAdd',auth, (req, res) => {
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

// search by item or category 
// not done yet
router.get('/itemSearch',(req,res)=>{
    const searchString  = req.body.searchItem
    console.log(typeof(searchString))
    console.log(searchString)
    MenuItems.find( {$or:[{ item:{$regex:searchString}},{category:{$regex:searchString}},{discription:{$regex:searchString}}]})
        .exec()
        .then((item)=>{
            res.status(200).json(item)
        })
        .catch(error=>{
            res.status(404).json("error in search:" + error.massage)
        })
})

// update is working 

router.patch("/itemSearch/:id",(req,res)=>{
    const id = req.params.id
    Category.find({category:req.body.category})
    .exec()
    .then(chacking=>{
        if(chacking.length>=1){
            MenuItems.update({_id:id},{
                $set:req.body
            }).exec()
            .then(result=>{
                res.status(200).json(result)
            })
            .catch(err=>{
                console.log(err)
                res.status(404).json({error:err})
            })
        }
        else{
            const newCategory = new Category({
                category: req.body.category
            })
            // console.log('Category')
            newCategory.save()
            .then(() => {
                MenuItems.update({_id:id},{
                    $set:req.body
                }).exec()
                .then(result=>{
                    res.status(200).json(result)
                })
                .catch(err=>{
                    console.log(err)
                    res.status(404).json({error:err})
                })
            })
        }
    })

   
})

// delete is working
router.delete("/itemSearch/:id",(req,res)=>{
    const id = req.params.id
    MenuItems.find({_id:id})
    .exec()
    .then(chacking=>{
        if(chacking.length==1){
            Category.deleteOne({category:chacking[0].category})
            .then(res=>{
                console.log('delete category no other category left in the item')
            })
        }
    })
    MenuItems.deleteOne({_id:id})
        .exec()
        .then(()=>{
            res.status(200).json({massage : "Item deleted"})
        })
        .catch(error=>{
            res.status(404).json("Deleted Error : " + error)
        })
})


module.exports = router