const router = require('express').Router()

let Reservation = require('../../models/reservation');


router.get("/",(req,res)=>{
    Reservation.find()
    .then(data=>{
        res.status(200).json({
            data:data
        })
    })
})

router.get('/update/:id',(req,res)=>{
    const id = req.params.id
    Reservation.find({_id:id})
        .exec()
        .then(data=>{
            data[0].recived = true
            Reservation.update({_id:id},{
                $set:data[0]
            }).exec()
            .then(result=>{
                res.status(200).json({
                    status:"Reservation Accepted",
                    data:result
                })
            })
            .catch(err=>{
                console.log(err)
                res.status(404).json({error:err})
            })
        })
})
router.delete("/:id",(req,res)=>{
    const id = req.params.id
    Reservation.deleteOne({_id:id})
        .exec()
        .then(()=>{
            res.status(200).json({massage : "Reservation not accepted"})
        })
        .catch(error=>{
            res.status(404).json("Deleted Error : " + error)
        })
})

router.route('/').post(async (req, res) => {
            const newReservation = new Reservation({
                name: req.body.name,
                phone: req.body.phone,
                guest: req.body.guest,
                recived:false,
                message: req.body.message
            })
            newReservation.save()
                .then(() => res.status(200).json({message:'We recived the reservation request.'}))
                .catch(
                    err => res.status(202).json({
                        error : err
                    })
                )
    

 })

module.exports = router