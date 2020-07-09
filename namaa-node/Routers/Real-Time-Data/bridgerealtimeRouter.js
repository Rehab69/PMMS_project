const express = require('express')
const mongoose = require('mongoose')

const RealTimeDataBridge = require('../../models/Real-Time-Data/BridgeRealTime')
const bridgerealtimeRouter = express.Router();


//Get All
bridgerealtimeRouter.get('/',(req,res,next)=>{


})




//Get one element by id
bridgerealtimeRouter.get('/:id',(req,res,next)=>{
  
 
})

//post
bridgerealtimeRouter.post('/',(req,res,next)=>{
    
    
})


//delete by id
bridgerealtimeRouter.delete('/:id',(req,res,next)=>{
    const {params:{id}} = req;
    console.log(555);
    RealTimeDataBridge.deleteOne({_id:id},(err,data)=>{
        if(err){
            return next(err)
        }else{
            res.send(data)
        }
    })
})


//edit
bridgerealtimeRouter.patch('/:id',(req,res,next)=>{
 

})







module.exports =bridgerealtimeRouter;