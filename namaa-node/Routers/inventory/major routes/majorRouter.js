const express = require('express')
const mongoose = require('mongoose')

const Major = require('../../../models/inventory/Major-Routes/Major-Route-model')
const majorRouter = express.Router();
const City = require("../../../models/inventory/City-model")


//Get All
majorRouter.get('/', (req, res, next) => {

    console.log("get all Citys")
    Major.find({},  { _id: 0, Route_ID:1, Route_Name:1, City_ID:1 ,No_lanes_Per_Direction:1,
        Total_No_of_sections:1,Total_No_of_intersections:1,Total_Length_inKM:1,
        Construction_Yr:1,main_Contractor:1,Owner_of_Road:1}, (err, data) => {
        if (err) {
            return next(err);
        } else {
            console.log(data)

            res.status(200).send(data);
        }
    })
})




//Get one element by id
majorRouter.get('/:id', (req, res, next) => {
    const { params: { id } } = req;
    console.log("get one Major")
    Major.findOne({ Route_ID: id }, { _id: 0, Route_ID:1, Route_Name:1, City_ID:1 ,No_lanes_Per_Direction:1,
        Total_No_of_sections:1,Total_No_of_intersections:1,Total_Length_inKM:1,
        Construction_Yr:1,main_Contractor:1,Owner_of_Road:1}, (err, data) => {
        if (data) {

            Major.findOne({ Route_ID: id }, { _id: 0 }, (err, data) => {
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
majorRouter.post('/', async (req, res, next) => {

    const { Route_ID, Route_Name, City_ID ,No_lanes_Per_Direction,Total_No_of_sections,Total_No_of_intersections,
        Total_Length_inKM,Construction_Yr,main_Contractor,Owner_of_Road} = req.body;
let city = await City.findOne({city_ID:City_ID})
let route = await Major.findOne({Route_ID:Route_ID})
console.log(route)

if(route===null){
    const newMajor = await new Major({
        Route_ID: Route_ID,
        Route_Name: Route_Name,
        City_ID: City_ID,
        No_lanes_Per_Direction:No_lanes_Per_Direction,
        Total_No_of_sections:Total_No_of_sections,
        Total_No_of_intersections:Total_No_of_intersections,
        Total_Length_inKM:Total_Length_inKM,
        Construction_Yr:Construction_Yr,
        main_Contractor:main_Contractor,
        Owner_of_Road:Owner_of_Road
    })
    Major.create(newMajor, (err, data) => {
        if (err) {
            err.status = 401;
            res.send("Failed to Add")
            return next(err)
        } else {
            console.log(data)
            res.status(201).send(`Major added successfully: ${newMajor}`)
        }
    })

}else{
    res.send("This route exists")
}

   

})





//delete by id
majorRouter.delete('/:id', (req, res, next) => {
    const { params: { id } } = req;
    Major.findOne({ Route_ID: id }, (err, data) => {
        if (data) {
            Major.deleteOne({ Route_ID: id }, (err, data) => {
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
majorRouter.patch('/:id', (req, res, next) => {

    console.log("edit Major")

    const { params: { id } } = req;
    console.log(req.body)
    Major.findOne({ Route_ID: id }, (err, data) => {
        if (data) {
           
            Major.updateOne({ Route_ID: id }, { $set: req.body }, (err, data) => {
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




module.exports =majorRouter;