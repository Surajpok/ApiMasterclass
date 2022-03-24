const mongoose = require('mongoose');

const BootcampSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true,'please add name'],
            unique: true,
            trin:true,
            maxlength: [50, 'name can be longer than 50 characters']
        },
        slug: String,
        discription: {
            type: String,
            required: [true,'please add a proper discription'],
            maxlength: [500, 'name cannot be more than 500 characters']
        },
       
        phone:{
            type: String,
            maxlength: [20,'phone number cannot be longer then 20 characters']
        }
    }
);
 