const express = require('express')
const mongoose = require('mongoose')

const PC_InterSec = require('../../../models/Condition and Reports/GI-intersection')
const intersectionGIRouter = express.Router();


//Get All
intersectionGIRouter.get('/',(req,res,next)=>{


})




//Get one element by id
intersectionGIRouter.get('/:id',(req,res,next)=>{
  
 
})

//post
intersectionGIRouter.post('/',(req,res,next)=>{
    
    
})


//delete by id
intersectionGIRouter.delete('/:id',(req,res,next)=>{
    const {params:{id}} = req;
    console.log(555);
    PC_InterSec.deleteOne({_id:id},(err,data)=>{
        if(err){
            return next(err)
        }else{
            res.send(data)
        }
    })
})


//edit
intersectionGIRouter.patch('/:id',(req,res,next)=>{
 

})







module.exports =intersectionGIRouter;