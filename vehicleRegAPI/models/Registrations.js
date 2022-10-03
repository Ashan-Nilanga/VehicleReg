const mongoose = require('mongoose');

const regSchema = mongoose.Schema({
    plateNo:{
        type:String,
        required:true,
    },

    owner:{
        type:String,
        required:true,
    },

    manufacturer:{
        type:String,
        required:true,
    },

    manufacturedYear:{
        type:String,
        required:true,
    },

    color:{
        type:String,

    },

    vehicle:{
        type:String,
        required:true,
    },

    vehicleType:{
        type:String,
    },

    ownerNic:{
        type:String,
        required:true,
    },

});


module.exports = mongoose.model('Registrations',regSchema);
