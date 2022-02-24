const path = require("path")
const express = require("express")
const Course = require("../Models/FWDModel")
const router = express.Router()


router.get("",async(req,res) =>{
    try{
        const courses = await Course.find().lean().exec()
       return res.status(200).send(courses)
    }catch(e){
        return res.status(500).send(e.message)
    }
 
})
router.get("/:id",async(req,res) =>{
    try{
        const courses = await Course.findById(req.params.id).lean().exec()
       return res.status(200).send(courses)
    }catch(e){
        return res.status(500).send(e.message)
    }
 
})
// router.get("/:name",async(req,res) =>{
//     try{
//         const courses = await Course.find(req.params.name).lean().exec()
//        return res.status(200).send(courses)
//     }catch(e){
//         return res.status(500).send(e.message)
//     }
 
// })
router.post("",async(req,res) =>{
    try{
        const courses = await Course.create(req.body)
        return res.status(201).json({courses})
    }catch(e){
        return res.status(500).send(e.message)
    }
 
})
// router.post("",async(req,res) => {
//     return res.send("single")
//     // try{
//     //     const videos = await Video.create(req.body)
//     //    return res.status(200).send(videos)
//     // }catch(e){
//     //     return res.status(500).send(e.message)
//     // }
    
// })
module.exports = router