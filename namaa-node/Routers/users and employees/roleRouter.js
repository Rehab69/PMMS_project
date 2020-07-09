const express = require('express')
const mongoose = require('mongoose')

const Role = require('../../models/users and emplyees/Role-model')
const roleRouter = express.Router();


//Get All
roleRouter.get('/', (req, res, next) => {

    console.log("get all roles")
    Role.find({}, { _id: 0, role_ID: 1, roleName: 1, descriptionRole: 1}, (err, data) => {
        if (err) {
            return next(err);
        } else {
            console.log(data)

            res.status(200).send(data);
        }
    })
})




//Get one element by id
roleRouter.get('/:id', (req, res, next) => {
    const { params: { id } } = req;
    console.log("get one role")
    Role.findOne({ role_ID: id }, (err, data) => {
        if (data) {

            Role.findOne({ role_ID: id }, { _id: 0 }, (err, data) => {
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
roleRouter.post('/',  (req, res, next) => {

    const { role_ID, roleName, descriptionRole } = req.body;

    const newRole = new Role({
        role_ID: role_ID,
        roleName: roleName,
        descriptionRole: descriptionRole
    })


    Role.findOne({ role_ID: role_ID }, (err, data) => {
        if (data) {
            res.status(201).send("Role exists in system before")
        } else {
            Role.create(newRole, (err, data) => {
                if (err) {
                    err.status = 401;
                    res.send("Failed to Add")
                    return next(err)
                } else {
                    console.log(data)
                    res.status(201).send(`Role added successfully: ${newRole}`)
                }
            })
        }
    })

})





//delete by id
roleRouter.delete('/:id', (req, res, next) => {
    const { params: { id } } = req;
    Role.findOne({ role_ID: id }, (err, data) => {
        if (data) {
            Role.deleteOne({ role_ID: id }, (err, data) => {
                if (err) {
                    return next(err)
                } else {
                    
                    res.status(200).send(data)
                }
            })
        } else {
            return next(err)
        }
    })

})


//edit
roleRouter.patch('/:id', (req, res, next) => {

    console.log("edit role")

    const { params: { id } } = req;
    console.log(req.body)
    Role.findOne({ role_ID: id }, (err, data) => {
        if (data) {
           
            Role.updateOne({ role_ID: id }, { $set: req.body }, (err, data) => {
                if (err) {
                    return next(err)
                } else {
                    res.send("Edited Successfully")
                }
            })

        }else{
            return next(err)
        }
    }
    
    )
})







module.exports =roleRouter;