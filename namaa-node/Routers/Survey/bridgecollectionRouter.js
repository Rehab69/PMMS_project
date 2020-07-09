const express = require('express')
const mongoose = require('mongoose')

const BridgeSurvey = require('../../models/survey/Bridge-model')
const bridgecollectionRouter = express.Router();


//Get All
bridgecollectionRouter.get('/',(req,res,next)=>{


})




//Get one element by id
bridgecollectionRouter.get('/:id',(req,res,next)=>{
  
 
})

//post
bridgecollectionRouter.post('/',(req,res,next)=>{
    
    
})


//delete by id
bridgecollectionRouter.delete('/:id',(req,res,next)=>{
    const {params:{id}} = req;
    console.log(555);
    BridgeSurvey.deleteOne({_id:id},(err,data)=>{
        if(err){
            return next(err)
        }else{
            res.send(data)
        }
    })
})


//edit
bridgecollectionRouter.patch('/:id',(req,res,next)=>{
 

})







module.exports =bridgecollectionRouter;