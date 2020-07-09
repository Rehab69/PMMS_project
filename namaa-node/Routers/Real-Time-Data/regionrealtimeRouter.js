const express = require('express')
const mongoose = require('mongoose')

const RegionRealTime = require('../../models/Real-Time-Data/RegionsRealTime')
const regionrealtimeRouter = express.Router();


//Get All
regionrealtimeRouter.get('/',(req,res,next)=>{


})




//Get one element by id
regionrealtimeRouter.get('/:id',(req,res,next)=>{
  
 
})

//post
regionrealtimeRouter.post('/',(req,res,next)=>{
    
    
})


//delete by id
regionrealtimeRouter.delete('/:id',(req,res,next)=>{
    const {params:{id}} = req;
    console.log(555);
    RegionRealTime.deleteOne({_id:id},(err,data)=>{
        if(err){
            return next(err)
        }else{
            res.send(data)
        }
    })
})


//edit
regionrealtimeRouter.patch('/:id',(req,res,next)=>{
 

})







module.exports =regionrealtimeRouter;