
const express = require("express")
const Instructor = require("../Models/InstructorModel")
const router = express.Router()

router.get("",async(req,res) =>{
    try{
        const instructors = await Instructor.find().lean().exec()
       return res.status(200).send(instructors)
    }catch(e){
        return res.status(500).send(e.message)
    }
 
})
router.post("",async(req,res) =>{
    try{
        const instructors = await Instructor.create(req.body)
        return res.status(201).send(instructors)
    }catch(e){
        return res.status(500).send(e.message)
    }
 
})
module.exports = router