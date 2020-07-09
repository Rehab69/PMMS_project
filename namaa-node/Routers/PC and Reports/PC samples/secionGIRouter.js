const express = require('express')
const mongoose = require('mongoose')

const PC_Section = require('../../../models/Condition and Reports/GI-Sections')
const secionGIRouter = express.Router();


//Get All
secionGIRouter.get('/',(req,res,next)=>{


})




//Get one element by id
secionGIRouter.get('/:id',(req,res,next)=>{
  
 
})

//post
secionGIRouter.post('/',(req,res,next)=>{
    
    
})


//delete by id
secionGIRouter.delete('/:id',(req,res,next)=>{
    const {params:{id}} = req;
    console.log(555);
    PC_Section.deleteOne({_id:id},(err,data)=>{
        if(err){
            return next(err)
        }else{
            res.send(data)
        }
    })
})


//edit
secionGIRouter.patch('/:id',(req,res,next)=>{
 

})







module.exports =secionGIRouter;