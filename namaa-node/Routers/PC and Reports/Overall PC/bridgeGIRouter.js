const express = require('express')
const mongoose = require('mongoose')

const Overall_Condition_Bridge = require('../../../models/Condition and Reports/Bridge_Condition')
const bridgeGIRouter = express.Router();


//Get All
bridgeGIRouter.get('/',(req,res,next)=>{


})




//Get one element by id
bridgeGIRouter.get('/:id',(req,res,next)=>{
  
 
})

//post
bridgeGIRouter.post('/',(req,res,next)=>{
    
    
})


//delete by id
bridgeGIRouter.delete('/:id',(req,res,next)=>{
    const {params:{id}} = req;
    console.log(555);
    Overall_Condition_Bridge.deleteOne({_id:id},(err,data)=>{
        if(err){
            return next(err)
        }else{
            res.send(data)
        }
    })
})


//edit
bridgeGIRouter.patch('/:id',(req,res,next)=>{
 

})







module.exports =bridgeGIRouter;