const express = require('express')
const mongoose = require('mongoose')

const Employee = require('../../models/users and emplyees/Employee-model');
const employeeRouter = express.Router();


//Get All
employeeRouter.get('/', (req, res, next) => {

    console.log("get all employees")
    Employee.find({}, { _id: 0, emp_ID: 1, employeeName: 1, departmentName: 1, jobTitle: 1 }, (err, data) => {
        if (err) {
            return next(err);
        } else {
            console.log(data)

            res.status(200).send(data);
        }
    })
})




//Get one element by id
employeeRouter.get('/:id', (req, res, next) => {
    const { params: { id } } = req;
    console.log("get one employee")
    Employee.findOne({ emp_ID: id }, (err, data) => {
        if (data) {

            Employee.findOne({ emp_ID: id }, { _id: 0, emp_ID: 1, employeeName: 1, departmentName: 1, jobTitle: 1 }, (err, data) => {
                if (err) {
                    return next(err);
                } else {
                    console.log(data)

                    res.status(200).send(data);
                }
            })
        } else {
            next(err)
        }
    })

})

//post
employeeRouter.post('/', async (req, res, next) => {

    const { emp_ID, employeeName, departmentName, jobTitle } = req.body;

    const newEmployee = new Employee({
        emp_ID: emp_ID,
        employeeName: employeeName,
        departmentName: departmentName,
        jobTitle: jobTitle
    })
    //         Employee.create(newEmployee).then((data)=>{
    //             console.log(data)
    //             res.send("Employee added successfully",newEmployee) 
    //         }).catch((error)=>{
    //             res.send("Failed to Add")
    //             return next(error)

    // })

    Employee.findOne({ emp_ID: emp_ID }, (err, data) => {
        if (data) {
            res.status(201).send("Employee exists in system before")
        } else {
            Employee.create(newEmployee, (err, data) => {
                if (err) {
                    err.status = 401;
                    return next(err)
                } else {
                    console.log(data)
                    res.status(200).send(`Employee added successfully: ${newEmployee}`)
                }
            })
        }
    })

})





//delete by id
employeeRouter.delete('/:id', (req, res, next) => {
    const { params: { id } } = req;
    console.log(555);
    Employee.findOne({ emp_ID: id }, (err, data) => {
        if (data) {
            Employee.deleteOne({ emp_ID: id }, (err, data) => {
                if (err) {
                    return next(err)
                } else {
                    res.send(data)
                }
            })
        } else {
            return next(err)
        }
    })

})


//edit
employeeRouter.patch('/:id', (req, res, next) => {

    console.log("edit element")

    const { params: { id } } = req;
    console.log(req.body)
    Employee.findOne({ emp_ID: id }, (err, data) => {
        if (data) {
           
            Employee.updateOne({ emp_ID: id }, { $set: req.body }, (err, data) => {
                if (err) {
                    return next(err)
                } else {
                    res.send("Edited Successfully")
                }
            })

            // Employee.findOneAndUpdate({emp_ID:id},req.body,{useFindAndModify:false},(err,UpdatedData)=>{
            //     console.log(UpdatedData)
            // })


        }else{
            return next(err)
        }
    }
    
    )
})







module.exports = employeeRouter