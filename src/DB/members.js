const mongoose = require("mongoose");
const validator=require("validator");


const memberSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    lastName:{
        type:String
    },
    email:{
        type:String,
        Validate(value){
           if(!validator.isEmail(value)){
              throw new error;
           }
        }
    },
    gender:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    age:{
        type:String,
        required:true
    },

    password:{
        type:Number,
        required:true
    },
    
    cpassword:{
        type:Number,
        required:true
    },
    
    
})

const Member = new mongoose.model("Member",memberSchema);
module.exports =Member ;