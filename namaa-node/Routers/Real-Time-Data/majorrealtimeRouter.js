const express = require('express')
const mongoose = require('mongoose')

const RealTimeDataMajor = require('../../models/Real-Time-Data/Major-RoadsRealTime')
const majorrealtimeRouter = express.Router();


//Get All
majorrealtimeRouter.get('/',(req,res,next)=>{


})




//Get one element by id
majorrealtimeRouter.get('/:id',(req,res,next)=>{
  
 
})

//post
majorrealtimeRouter.post('/',(req,res,next)=>{
    
    
})


//delete by id
majorrealtimeRouter.delete('/:id',(req,res,next)=>{
    const {params:{id}} = req;
    console.log(555);
    RealTimeDataMajor.deleteOne({_id:id},(err,data)=>{
        if(err){
            return next(err)
        }else{
            res.send(data)
        }
    })
})


//edit
majorrealtimeRouter.patch('/:id',(req,res,next)=>{
 

})







module.exports =majorrealtimeRouter;