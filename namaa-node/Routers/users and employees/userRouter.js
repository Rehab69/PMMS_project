const express = require('express')
const mongoose = require('mongoose')

const User = require('../../models/users and emplyees/User-model')
const Role = require('../../models/users and emplyees/Role-model')
const Employee = require('../../models/users and emplyees/Employee-model')

const userRouter = express.Router();

//Get All
userRouter.get('/', (req, res, next) => {

    console.log("get all users")
    User.find({}, { _id: 0, user_emp_ID: 1, userName: 1, userPassword: 1, userRole: 1 }, (err, data) => {
        if (err) {
            return next(err);
        } else {
            console.log(data)

            res.status(200).send(data);
        }
    })
})




//Get one element by id
userRouter.get('/:id', (req, res, next) => {
    const { params: { id } } = req;
    console.log("get one user")
    User.findOne({ user_emp_ID: id }, (err, data) => {
        if (data) {

            User.findOne({ user_emp_ID: id }, { _id: 0 }, (err, data) => {
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
userRouter.post('/', async (req, res, next) => {

    const { user_emp_ID, userName, userPassword, userRole } = req.body;
    let employee = await Employee.findOne({ emp_ID: user_emp_ID })
    let role = await Role.findOne({ role_ID: userRole })
    let user = await User.findOne({ user_emp_ID: user_emp_ID })
    console.log(employee)
    console.log(role)
    console.log(user)
    
    if (employee !== null && user === null) {

        const newUser = new User({
            user_ID: employee._id,
            user_emp_ID:user_emp_ID,
            userName: userName,
            userPassword: userPassword,
            userRole:userRole
        })


        User.create(newUser, (err, data) => {
            if (err) {
                err.status = 401;
                res.send("Failed to Add")
                return next(err)
            } else {
                console.log(data)
                res.status(201).send(`User added successfully: ${newUser}`)
            }
        })
    } else {

        res.send("Wrong ID")
    }

    

})





//delete by id
userRouter.delete('/:id', (req, res, next) => {
    const { params: { id } } = req;
    User.findOne({ user_emp_ID: id }, (err, data) => {
        if (data) {
            User.deleteOne({ user_emp_ID: id }, (err, data) => {
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
userRouter.patch('/:id', (req, res, next) => {

    console.log("edit user")

    const { params: { id } } = req;
    console.log(req.body)
    User.findOne({ user_emp_ID: id }, (err, data) => {
        if (data) {

            User.updateOne({ user_emp_ID: id }, { $set: req.body }, (err, data) => {
                if (err) {
                    return next(err)
                } else {
                    res.send("Edited Successfully")
                }
            })


        } else {
            return next(err)
        }
    }

    )
})




module.exports = userRouter;