const express = require('express')
const mongoose = require('mongoose')

const InterSectionSurvey = require('../../models/survey/Major-Intersection-model')
const intersectioncollectionRouter = express.Router();


//Get All
intersectioncollectionRouter.get('/',(req,res,next)=>{


})




//Get one element by id
intersectioncollectionRouter.get('/:id',(req,res,next)=>{
  
 
})

//post
intersectioncollectionRouter.post('/',(req,res,next)=>{
    
    
})


//delete by id
intersectioncollectionRouter.delete('/:id',(req,res,next)=>{
    const {params:{id}} = req;
    console.log(555);
    InterSectionSurvey.deleteOne({_id:id},(err,data)=>{
        if(err){
            return next(err)
        }else{
            res.send(data)
        }
    })
})


//edit
intersectioncollectionRouter.patch('/:id',(req,res,next)=>{
 

})







module.exports =intersectioncollectionRouter;