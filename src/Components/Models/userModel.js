const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    email:{type:String, required:true,unique:true},
    password:{type:String, required:true,unique:true},
    mobile:{type:Number, required:true,unique:true},
    gender:{type:String, required:true},
    dob  :{type:String, required:true}

},{
    versionKey:false,
    timestamps:true
}) 
module.exports = mongoose.model("user",UserSchema)