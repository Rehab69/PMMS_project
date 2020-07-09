const express = require('express')
const mongoose = require('mongoose')

const Bridge = require('../../../models/inventory/Bridges-Structures/Bridge-model')
const bridgeRouter = express.Router();


//Get All
bridgeRouter.get('/',(req,res,next)=>{


})




//Get one element by id
bridgeRouter.get('/:id',(req,res,next)=>{
  
 
})

//post
bridgeRouter.post('/',(req,res,next)=>{
    
    
})


//delete
bridgeRouter.delete('/:id',(req,res,next)=>{
    const {params:{id}} = req;
    console.log(555);
    Bridge.deleteOne({_id:id},(err,data)=>{
        if(err){
            return next(err)
        }else{
            res.send(data)
        }
    })
})


//edit
bridgeRouter.patch('/:id',(req,res,next)=>{
 

})







module.exports =bridgeRouter;