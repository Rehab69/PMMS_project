const express = require('express')
const mongoose = require('mongoose')

const SampleSection = require('../../../models/inventory/Major-Routes/samples-section')
const sampleRouter = express.Router();


//Get All
sampleRouter.get('/',(req,res,next)=>{


})




//Get one element by id
sampleRouter.get('/:id',(req,res,next)=>{
  
 
})

//post
sampleRouter.post('/',(req,res,next)=>{
    
    
})


//delete
sampleRouter.delete('/:id',(req,res,next)=>{
    const {params:{id}} = req;
    console.log(555);
    SampleSection.deleteOne({_id:id},(err,data)=>{
        if(err){
            return next(err)
        }else{
            res.send(data)
        }
    })
})


//edit
sampleRouter.patch('/:id',(req,res,next)=>{
 

})







module.exports =sampleRouter;