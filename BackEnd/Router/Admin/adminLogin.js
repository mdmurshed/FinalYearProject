const router = require('express').Router();
const auth = require('../../auth/auth')
const AdminUser = require('../../models/AdminUser')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')



router.get('/logout',(req,res)=>{ 
    res.status(201)
    .clearCookie('token')
    .send("loged_out")
})
// new admin add 
router.post('/adminAdd',auth,async (req, res) => {
    AdminUser.find({email:req.body.email})
    .exec()
    .then(data=>{
        if(data.length>=1) {
               return res.status(400).json({
                    massage:'Email exist'
                })
        }

        // send the user info to the database
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            if(err) {
                return res.status(400).json({
                    error: err
                })
            }
            const newUser = new AdminUser({
                email: req.body.email,
                password : hash
            })
            // const newUser = new user(req.body);
    
            newUser.save()
                .then(() => res.status(200).json({massage:'Admin added added!'}))
                .catch(
                    err => res.status(400).json({
                        error : err
                    })
                )
        })
        

    })
    .catch(err=>{
        res.status(400).json({
            error: err
        })
    })

    

})

// chack it loged or not
router.get('/chack', auth ,(req, res) => {
    res.status(200).send(true)
})

// admin login
router.post('/', (req, res) => {
    AdminUser.find({ email: req.body.email })
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
                        massage: 'Admin login :'+ users[0].email,
                        token: token
                    })
                }
                res.status(202).json({
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
