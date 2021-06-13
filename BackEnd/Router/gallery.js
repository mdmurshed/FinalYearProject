const router = require('express').Router();
const auth = require('../auth/auth')
const Gellary = require('../models/gallery.models')
// image uplode the server 
// store the files in server 
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./uploads/');
    },
    filename: function(req,file,cb){
        cb(null, file.originalname);
    }
});
const fileFilter = (req,file,cb)=>{
    // reject a file
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        return cb(null,true);
    }
    cb(null,false);
}
const uplode = multer({
    storage: storage,
    limits:{fileSize:1024 * 1024 * 5},
    fileFilter:fileFilter
})

router.post('/',uplode.single('galleryImage'),(req,res,next)=>{
    const gellary = new Gellary({
        category:req.body.category,
        photos: req.file.path
    })
    gellary
        .save()
        .then(result=>{
         console.log(result),
         res.status(200).json({
            massage:'Image posted'
        })
        })
        .catch(err=>{
            console.log("Gallery err, " + err) 
        })
})

module.exports = router