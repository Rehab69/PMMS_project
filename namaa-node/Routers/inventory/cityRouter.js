const express = require('express')
const mongoose = require('mongoose')

const City = require('../../models/inventory/City-model')
const cityRouter = express.Router();


//Get All
cityRouter.get('/', (req, res, next) => {

    console.log("get all Citys")
    City.find({}, { _id: 0, city_ID: 1, city_Name: 1, total_Regions: 1,total_MajorRoutes:1,total_Bridges:1}, (err, data) => {
        if (err) {
            return next(err);
        } else {
            console.log(data)

            res.status(200).send(data);
        }
    })
})




//Get one element by id
cityRouter.get('/:id', (req, res, next) => {
    const { params: { id } } = req;
    console.log("get one City")
    City.findOne({ city_ID: id }, { _id: 0, city_ID: 1, city_Name: 1, total_Regions: 1,total_MajorRoutes:1,total_Bridges:1}, (err, data) => {
        if (data) {

            City.findOne({ city_ID: id }, { _id: 0 }, (err, data) => {
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
cityRouter.post('/',  (req, res, next) => {

    const { city_ID, city_Name, total_Regions ,total_MajorRoutes,total_Bridges} = req.body;

    const newCity = new City({
        city_ID: city_ID,
        city_Name: city_Name,
        total_Regions: total_Regions,
        total_MajorRoutes:total_MajorRoutes,
        total_Bridges:total_Bridges
    })


    City.findOne({ city_ID: city_ID }, (err, data) => {
        if (data) {
            res.status(201).send("City exists in system before")
        } else {
            City.create(newCity, (err, data) => {
                if (err) {
                    err.status = 401;
                    res.send("Failed to Add")
                    return next(err)
                } else {
                    console.log(data)
                    res.status(201).send(`City added successfully: ${newCity}`)
                }
            })
        }
    })

})





//delete by id
cityRouter.delete('/:id', (req, res, next) => {
    const { params: { id } } = req;
    City.findOne({ city_ID: id }, (err, data) => {
        if (data) {
            City.deleteOne({ city_ID: id }, (err, data) => {
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
cityRouter.patch('/:id', (req, res, next) => {

    console.log("edit City")

    const { params: { id } } = req;
    console.log(req.body)
    City.findOne({ city_ID: id }, (err, data) => {
        if (data) {
           
            City.updateOne({ city_ID: id }, { $set: req.body }, (err, data) => {
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









module.exports =cityRouter;