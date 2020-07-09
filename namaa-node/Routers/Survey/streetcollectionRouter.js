const express = require('express')
const mongoose = require('mongoose')

const StreetSurvey = require('../../models/survey/Street-Region-model')
const streetcollectionRouter = express.Router();


//Get All
streetcollectionRouter.get('/',(req,res,next)=>{


})




//Get one element by id
streetcollectionRouter.get('/:id',(req,res,next)=>{
  
 
})

//post
streetcollectionRouter.post('/',(req,res,next)=>{
    
    
})


//delete by id
streetcollectionRouter.delete('/:id',(req,res,next)=>{
    const {params:{id}} = req;
    console.log(555);
    StreetSurvey.deleteOne({_id:id},(err,data)=>{
        if(err){
            return next(err)
        }else{
            res.send(data)
        }
    })
})


//edit
streetcollectionRouter.patch('/:id',(req,res,next)=>{
 

})







module.exports =streetcollectionRouter;