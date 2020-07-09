const express = require('express')
const mongoose = require('mongoose')

const Street = require('../../../models/inventory/Streets-Regions/Street-model')
const streetRouter = express.Router();


//Get All
streetRouter.get('/',(req,res,next)=>{


})




//Get one element by id
streetRouter.get('/:id',(req,res,next)=>{
  
 
})

//post
streetRouter.post('/',(req,res,next)=>{
    
    
})


//delete by id
streetRouter.delete('/:id',(req,res,next)=>{
    const {params:{id}} = req;
    console.log(555);
    Street.deleteOne({_id:id},(err,data)=>{
        if(err){
            return next(err)
        }else{
            res.send(data)
        }
    })
})


//edit
streetRouter.patch('/:id',(req,res,next)=>{
 

})







module.exports =streetRouter;