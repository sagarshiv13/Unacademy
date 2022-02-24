const mongoose = require("mongoose")

const FWDSchema = new mongoose.Schema({
     id: {type:String,required:true},
    name: {type:String,required:true},
    img: {type:String,required:true},
    subject: {type:String,required:true},
    title: {type:String,required:true},
    end: {type:String,required:true},
    language: {type:String,required:true},
    desc: {type:String,required:true},
    watch: {type:String,required:true}
   
    

},{
    versionKey:false,
    timestamps:true
})
module.exports = mongoose.model("FWD",FWDSchema)