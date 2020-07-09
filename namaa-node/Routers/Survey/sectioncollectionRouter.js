const express = require('express')
const mongoose = require('mongoose')

const SectionSurvey = require('../../models/survey/Major-Section-model')
const sectioncollectionRouter = express.Router();


//Get All
sectioncollectionRouter.get('/',(req,res,next)=>{


})




//Get one element by id
sectioncollectionRouter.get('/:id',(req,res,next)=>{
  
 
})

//post
sectioncollectionRouter.post('/',(req,res,next)=>{
    
    
})


//delete by id
sectioncollectionRouter.delete('/:id',(req,res,next)=>{
    const {params:{id}} = req;
    console.log(555);
    SectionSurvey.deleteOne({_id:id},(err,data)=>{
        if(err){
            return next(err)
        }else{
            res.send(data)
        }
    })
})


//edit
sectioncollectionRouter.patch('/:id',(req,res,next)=>{
 

})







module.exports =sectioncollectionRouter;