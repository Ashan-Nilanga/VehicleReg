const express = require('express');
const Registrations = require('../models/Registrations');
const Registration = require('../routes/Registration');

const router = express.Router();


//CREATE New Vehicle Registration
router.post("/registrations/new",(req, res)=>{
    let newRegistration = new Registrations(req.body);
    const testing = req.body.plateNo
    const regex = /sri/;
    const isExisting = regex.test(testing);
    console.log(isExisting);
    if(isExisting===true){
        console.log("vintage")
        req.body.vehicleType==="vintage"
    }
    newRegistration.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        return res.status(200).json({
            success:"Vehicle Registration is Successfully"
        });
    });
});


//VIEW Registered Vehicles
router.get('/registrations',(req, res)=>{
    Registrations.find().exec((err,Registrations)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            availableRegistrations:Registrations
        })
    });
});


//UPDATE Registered Vehicles
router.put("/registrations/update/:id",(req, res)=>{
    Registrations.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,Registrations)=>{
            if(err){
                return res.status(400).json({
                    error});
            }return res.status(200).json({
                success:"Updated Successfully"
            })
        }
    );
});


//DELETE Registered Vehicles
router.delete('/registrations/delete/:id',(req, res)=>{
    Registrations.findByIdAndRemove(req.params.id).exec((err,deleteRegistrations)=>{
        if(err) return res.status(400).json({
            message:"Vehicle not Deleted",err
        });
        return res.json({
            message:"Deleted Vehicle",deleteRegistrations
        });
    });
});