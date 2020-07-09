const express = require('express')
const mongoose = require('mongoose')

const Overall_PC_Major = require('../../../models/Condition and Reports/Overall-Condition-Major')
const majorGIRouter = express.Router();


//Get All
majorGIRouter.get('/',(req,res,next)=>{


})




//Get one element by id
majorGIRouter.get('/:id',(req,res,next)=>{
  
 
})

//post
majorGIRouter.post('/',(req,res,next)=>{
    
    
})


//delete by id
majorGIRouter.delete('/:id',(req,res,next)=>{
    const {params:{id}} = req;
    console.log(555);
    Overall_PC_Major.deleteOne({_id:id},(err,data)=>{
        if(err){
            return next(err)
        }else{
            res.send(data)
        }
    })
})


//edit
majorGIRouter.patch('/:id',(req,res,next)=>{
 

})







module.exports =majorGIRouter;