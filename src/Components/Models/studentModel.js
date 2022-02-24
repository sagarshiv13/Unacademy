
const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    studentId:{type:String,required:true},
    batch:{type:String,required:true},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true}

},{
    versionKey:false,
    timestamps:true
})
module.exports = mongoose.model("student",studentSchema)