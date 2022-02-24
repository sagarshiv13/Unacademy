
const express = require("express")
const Student = require("../Models/studentModel")
const router = express.Router()

router.get("",async(req,res) =>{
    try{
        const students = await Student.find().lean().exec()
       return res.status(200).send(students)
    }catch(e){
        return res.status(500).send(e.message)
    }
 
})
router.post("",async(req,res) =>{
    try{
        const students = await Student.create(req.body)
        return res.status(201).send(students)
    }catch(e){
        return res.status(500).send(e.message)
    }
 
})
module.exports = router