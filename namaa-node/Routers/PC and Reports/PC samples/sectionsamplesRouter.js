const express = require('express')
const mongoose = require('mongoose')

const PC_SectionSamples = require('../../../models/Condition and Reports/GI-section-samples')
const sectionsamplesRouter = express.Router();


//Get All
sectionsamplesRouter.get('/',(req,res,next)=>{


})




//Get one element by id
sectionsamplesRouter.get('/:id',(req,res,next)=>{
  
 
})

//post
sectionsamplesRouter.post('/',(req,res,next)=>{
    
    
})


//delete by id
sectionsamplesRouter.delete('/:id',(req,res,next)=>{
    const {params:{id}} = req;
    console.log(555);
    PC_SectionSamples.deleteOne({_id:id},(err,data)=>{
        if(err){
            return next(err)
        }else{
            res.send(data)
        }
    })
})


//edit
sectionsamplesRouter.patch('/:id',(req,res,next)=>{
 

})







module.exports =sectionsamplesRouter;