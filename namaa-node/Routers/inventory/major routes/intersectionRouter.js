const express = require('express')
const mongoose = require('mongoose')

const Intersection = require('../../../models/inventory/Major-Routes/Intersection-model')
const Major = require('../../../models/inventory/Major-Routes/Major-Route-model')
const intersectionRouter = express.Router();

//Get All
intersectionRouter.get('/', (req, res, next) => {

    console.log("get all Citys")
    Intersection.find({}, { _id: 0, Route1_ID: 1, Route2_ID: 1, Intersection_ID: 1,AreaInM2:1 }, (err, data) => {
        if (err) {
            return next(err);
        } else {
            console.log(data)

            res.status(200).send(data);
        }
    })
})




//Get one element by id
intersectionRouter.get('/:id', (req, res, next) => {
    const { params: { id } } = req;
    console.log("get one Intersection")
    Intersection.findOne({ Intersection_ID: id },  { _id: 0, Route1_ID: 1, Route2_ID: 1, Intersection_ID: 1,AreaInM2:1 }, (err, data) => {
        if (data) {

            Intersection.findOne({ Intersection_ID: id }, { _id: 0 }, (err, data) => {
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
intersectionRouter.post('/', async (req, res, next) => {

    const { Route1_ID, Route2_ID,Intersection_ID, AreaInM2 } = req.body;
    let route1 = await Major.findOne({ Route_ID:Route1_ID })
    let route2 = await Major.findOne({ Route_ID:Route2_ID })
    let intersection = await Intersection.findOne({Intersection_ID:Intersection_ID})
 

    if (intersection === null&&route1!==null&&route2!==null&&Route1_ID!==Route2_ID) {
        const newIntersection = await new Intersection({
            Route1_ID: Route1_ID,
            Route2_ID: Route2_ID,
            Intersection_ID: Intersection_ID,
            AreaInM2:AreaInM2

        })
        Intersection.create(newIntersection, (err, data) => {
            if (err) {
                err.status = 401;
                res.send("Failed to Add")
                return next(err)
            } else {
                console.log(data)
                res.status(201).send(`Intersection added successfully: ${newIntersection}`)
            }
        })

    } else {
        res.send("Intersection exists or wrong Route ID")
    }



})





//delete by id
intersectionRouter.delete('/:id', (req, res, next) => {
    const { params: { id } } = req;
    Intersection.findOne({ Intersection_ID: id }, (err, data) => {
        if (data) {
            Intersection.deleteOne({ Intersection_ID: id }, (err, data) => {
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
intersectionRouter.patch('/:id', (req, res, next) => {

    console.log("edit Intersection")

    const { params: { id } } = req;
    console.log(req.body)
    Intersection.findOne({ Intersection_ID: id }, (err, data) => {
console.log(data)
        if (data) {

            Intersection.updateOne({ Intersection_ID: id }, { $set: req.body }, (err, data) => {
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







module.exports =intersectionRouter;