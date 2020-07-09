const express = require('express')
const mongoose = require('mongoose')

const PlannedBudget = require('../../models/Condition and Reports/Planned-Budget')
const plannedbudgetRouter = express.Router();


//Get All
plannedbudgetRouter.get('/',(req,res,next)=>{


})




//Get one element by id
plannedbudgetRouter.get('/:id',(req,res,next)=>{
  
 
})

//post
plannedbudgetRouter.post('/',(req,res,next)=>{
    
    
})


//delete by id
plannedbudgetRouter.delete('/:id',(req,res,next)=>{
    const {params:{id}} = req;
    console.log(555);
    PlannedBudget.deleteOne({_id:id},(err,data)=>{
        if(err){
            return next(err)
        }else{
            res.send(data)
        }
    })
})


//edit
plannedbudgetRouter.patch('/:id',(req,res,next)=>{
 

})







module.exports =plannedbudgetRouter;