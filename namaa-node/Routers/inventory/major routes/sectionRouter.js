const express = require('express')
const mongoose = require('mongoose')

const Section = require('../../../models/inventory/Major-Routes/Section-model')
const sectionRouter = express.Router();
const Major = require("../../../models/inventory/Major-Routes/Major-Route-model")


//Get All
sectionRouter.get('/', (req, res, next) => {

    console.log("get all Sections")
    Section.find({}, { _id: 0, Route_ID: 1, Section_ID: 1, Total_No_Samples: 1,WidthInM:1,LengthInM:1,AreaInM2:1,OneWay:1 }, (err, data) => {
        if (err) {
            return next(err);
        } else {
            console.log(data)

            res.status(200).send(data);
        }
    })
})




//Get one element by id
// sectionRouter.get('/:id', (req, res, next) => {
//     const { params: { id } } = req;
//     console.log("get one Section")
//     Section.findOne({ Section_ID: id },{ _id: 0, Route_ID: 1, Section_ID: 1, Total_No_Samples: 1,WidthInM:1,LengthInM:1,AreaInM2:1,OneWay:1 }, (err, data) => {
//         if (data) {

//             Section.findOne({ Section_ID: id }, { _id: 0 }, (err, data) => {
//                 if (err) {
//                     return next(err);
//                 } else {
//                     console.log(data)

//                     res.status(200).send(data);
//                 }
//             })
//         } else {
//             next(err)
//         }
//     })

// })

sectionRouter.get('/id',async (req,res,next)=>{
    const { params: { id } } = req;
    let section = await Section.findOne({Section_ID:id});
    await section.populate('Major').execPopulate();
    console.log(section.Route_ID.Route_Name)
    res.send("Ok")
})

//post
sectionRouter.post('/', async (req, res, next) => {

    const { Route_ID, Section_ID, Total_No_Samples,WidthInM,LengthInM,AreaInM2,OneWay } = req.body;
    let route = await Major.findOne({ Route_ID: Route_ID })
    let section = await Section.findOne({Section_ID:Section_ID})
    console.log(route)
    console.log(section)
    if (section === null&&route!==null) {
        const newSection = await new Section({
            Route_ID: Route_ID,
            Section_ID: Section_ID,
            Total_No_Samples:Total_No_Samples,
            WidthInM:WidthInM,
            LengthInM:LengthInM,
            AreaInM2:AreaInM2,
            OneWay:OneWay
        })
        Section.create(newSection, (err, data) => {
            if (err) {
                err.status = 401;
                res.send("Failed to Add")
                return next(err)
            } else {
                console.log(data)
                res.status(201).send(`Section added successfully: ${newSection}`)
            }
        })

    } else {
        res.send("Section exists or wrong Route ID")
    }



})





//delete by id
sectionRouter.delete('/:id', (req, res, next) => {
    const { params: { id } } = req;
    Section.findOne({ Section_ID: id }, (err, data) => {
        if (data) {
            Section.deleteOne({ Section_ID: id }, (err, data) => {
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
sectionRouter.patch('/:id', (req, res, next) => {

    console.log("edit Section")

    const { params: { id } } = req;
    console.log(req.body)
    Section.findOne({ Section_ID: id }, (err, data) => {
        if (data) {

            Section.updateOne({ Section_ID: id }, { $set: req.body }, (err, data) => {
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









module.exports =sectionRouter;