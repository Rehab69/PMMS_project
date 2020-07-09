const express = require('express')
const mongoose = require('mongoose')

const Overall_PC_Region = require('../../../models/Condition and Reports/Overall-Condition-Region')
const regionGIRouter = express.Router();


//Get All
regionGIRouter.get('/',(req,res,next)=>{


})




//Get one element by id
regionGIRouter.get('/:id',(req,res,next)=>{
  
 
})

//post
regionGIRouter.post('/',(req,res,next)=>{
    
    
})


//delete by id
regionGIRouter.delete('/:id',(req,res,next)=>{
    const {params:{id}} = req;
    console.log(555);
    Overall_PC_Region.deleteOne({_id:id},(err,data)=>{
        if(err){
            return next(err)
        }else{
            res.send(data)
        }
    })
})


//edit
regionGIRouter.patch('/:id',(req,res,next)=>{
 

})







module.exports =regionGIRouter;