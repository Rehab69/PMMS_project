const express = require('express')
const mongoose = require('mongoose')

const Lane = require('../../../models/inventory/Major-Routes/Lane-model')
const laneRouter = express.Router();
const Major = require("../../../models/inventory/Major-Routes/Major-Route-model")

//Get All
laneRouter.get('/', (req, res, next) => {

    console.log("get all Citys")
    Lane.find({}, { _id: 0, Route_ID: 1, Lane_ID: 1, Direction: 1 }, (err, data) => {
        if (err) {
            return next(err);
        } else {
            console.log(data)

            res.status(200).send(data);
        }
    })
})




//Get one element by id
laneRouter.get('/:id', (req, res, next) => {
    const { params: { id } } = req;
    console.log("get one Lane")
    Lane.findOne({ Lane_ID: id }, { _id: 0, Route_ID: 1, Lane_ID: 1, Direction: 1 }, (err, data) => {
        if (data) {

            Lane.findOne({ Lane_ID: id }, { _id: 0 }, (err, data) => {
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
laneRouter.post('/', async (req, res, next) => {

    const { Route_ID, Lane_ID, Direction } = req.body;
    let route = await Major.findOne({ Route_ID: Route_ID })
    let lane = await Lane.findOne({Lane_ID:Lane_ID})
    console.log(route)

    if (lane === null&&route!==null) {
        const newLane = await new Lane({
            Route_ID: Route_ID,
            Lane_ID: Lane_ID,
            Direction: Direction,

        })
        Lane.create(newLane, (err, data) => {
            if (err) {
                err.status = 401;
                res.send("Failed to Add")
                return next(err)
            } else {
                console.log(data)
                res.status(201).send(`Lane added successfully: ${newLane}`)
            }
        })

    } else {
        res.send("Lane exists or wrong Route ID")
    }



})





//delete by id
laneRouter.delete('/:id', (req, res, next) => {
    const { params: { id } } = req;
    Lane.findOne({ Lane_ID: id }, (err, data) => {
        if (data) {
            Lane.deleteOne({ Lane_ID: id }, (err, data) => {
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
laneRouter.patch('/:id', (req, res, next) => {

    console.log("edit Lane")

    const { params: { id } } = req;
    console.log(req.body)
    Lane.findOne({ Lane_ID: id }, (err, data) => {
        if (data) {

            Lane.updateOne({ Lane_ID: id }, { $set: req.body }, (err, data) => {
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








module.exports = laneRouter;