const mongoose = require("mongoose")

const instructorSchema = new mongoose.Schema({
    InstructorId:{type:String,required:true},
    subject:{type:String,required:true},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true}

},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model("instructor",instructorSchema)