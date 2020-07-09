const express = require('express')
const mongoose = require('mongoose')

const Region = require('../../../models/inventory/Streets-Regions/Region-model')
const regionRouter = express.Router();


//Get All
regionRouter.get('/',(req,res,next)=>{


})




//Get one element by id
regionRouter.get('/:id',(req,res,next)=>{
  
 
})

//post
regionRouter.post('/',(req,res,next)=>{
    
    
})


//delete by id
regionRouter.delete('/:id',(req,res,next)=>{
    const {params:{id}} = req;
    console.log(555);
    Region.deleteOne({_id:id},(err,data)=>{
        if(err){
            return next(err)
        }else{
            res.send(data)
        }
    })
})


//edit
regionRouter.patch('/:id',(req,res,next)=>{
 

})







module.exports =regionRouter;