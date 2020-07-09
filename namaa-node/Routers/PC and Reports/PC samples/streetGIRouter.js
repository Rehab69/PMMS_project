const express = require('express')
const mongoose = require('mongoose')

const PC_Streets = require('../../../models/Condition and Reports/GI-Streets')
const streetGIRouter = express.Router();


//Get All
streetGIRouter.get('/',(req,res,next)=>{


})




//Get one element by id
streetGIRouter.get('/:id',(req,res,next)=>{
  
 
})

//post
streetGIRouter.post('/',(req,res,next)=>{
    
    
})


//delete by id
streetGIRouter.delete('/:id',(req,res,next)=>{
    const {params:{id}} = req;
    console.log(555);
    PC_Streets.deleteOne({_id:id},(err,data)=>{
        if(err){
            return next(err)
        }else{
            res.send(data)
        }
    })
})


//edit
streetGIRouter.patch('/:id',(req,res,next)=>{
 

})







module.exports =streetGIRouter;