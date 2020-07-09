const express = require('express');              ///it is better to order all require like 
const fs = require('fs');                        //|| built in modules --> then (npm) modules --> (../) modules
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const pdf = require('html-pdf')

//users & employees
const userRouter = require('./Routers/users and employees/userRouter')
const employeeRouter = require('./Routers/users and employees/employeeRouter')
const roleRouter = require('./Routers/users and employees/roleRouter')

//inventory
const cityRouter = require('./Routers/inventory/cityRouter')

const majorRouter = require('./Routers/inventory/major routes/majorRouter')
const laneRouter = require('./Routers/inventory/major routes/laneRouter')
const intersectionRouter = require('./Routers/inventory/major routes/intersectionRouter')
const sectionRouter = require('./Routers/inventory/major routes/sectionRouter')
const sampleRouter = require('./Routers/inventory/major routes/sampleRouter')

const regionRouter = require('./Routers/inventory/streets and regions/regionRouter')
const streetRouter = require('./Routers/inventory/streets and regions/streetRouter')

const bridgeRouter = require('./Routers/inventory/bridges/bridgeRouter')

//survey and collection data

const intersectioncollectionRouter = require('./Routers/Survey/intersectioncollectionRouter')
const sectioncollectionRouter = require('./Routers/Survey/sectioncollectionRouter')
const streetcollectionRouter = require('./Routers/Survey/streetcollectionRouter')
const bridgecollectionRouter = require('./Routers/Survey/bridgecollectionRouter')

//Real time data
const majorrealtimeRouter = require('./Routers/Real-Time-Data/majorrealtimeRouter')
const regionrealtimeRouter = require('./Routers/Real-Time-Data/regionrealtimeRouter')
const bridgerealtimeRouter = require('./Routers/Real-Time-Data/bridgerealtimeRouter')

//PC & remports
const majorGIRouter = require('./Routers/PC and Reports/Overall PC/majorGIRouter')
const regionGIRouter = require('./Routers/PC and Reports/Overall PC/regionGIRouter')
const bridgeGIRouter = require('./Routers/PC and Reports/Overall PC/bridgeGIRouter')

const secionGIRouter = require('./Routers/PC and Reports/PC samples/secionGIRouter')
const sectionsamplesRouter = require("./Routers/PC and Reports/PC samples/sectionsamplesRouter")
const intersectionGIRouter = require("./Routers/PC and Reports/PC samples/intersectionGIRouter")
const streetGIRouter = require("./Routers/PC and Reports/PC samples/streetGIRouter")

//budget
const plannedbudgetRouter = require('./Routers/PC and Reports/plannedbudgetRouter')


const app = require('./server/connection');
// const roleRouter = 

//body parsing
app.use(express.json());
//cors to enable any one access our API
app.use(cors());



///////////////////////////////Maintenance Priority/////////////////////////////////////

const maintainanceMR = require('./helpers/DMaker Reports/maintainance-MR')
const maintainanceReg = require('./helpers/DMaker Reports/maintainanceREG')
const priorityMR = require('./helpers/DMaker Reports/priorityMR')
const priorityREG = require('./helpers/DMaker Reports/priorityREG')
///maintenance Report Major Roads
app.post('/create-MMR',(req,res)=>{
    pdf.create(maintainanceMR(req.body),{
        "format": "A4",
        "orientation": "landscape",
        "border": "0",  
        "renderDelay": 500,
        paginationOffset: 1,       // Override the initial pagination number
        // "header": {
        //   "height": "45mm",
        //   "contents": '<div style="text-align: center;">Author: Marc Bachmann</div>'
        // },
          "footer": {
            "height": "10mm",
            "contents": {
              first: 'First Page',
              2: 'Second page', // Any page number is working. 1-based index
              default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
              last: 'Last Page'
            }
          },
        "type": "pdf"
    }).toFile('Maintenance-reports-Major-Roads.pdf',(err)=>{
      if(err){
        res.status(500).send(Promise.reject());
    }
    res.status(200).send(Promise.resolve());
    })
})
app.get('/MMR-pdf',(req,res)=>{
    res.sendFile(`${__dirname}/Maintenance-reports-Major-Roads.pdf`)
})

///maintenance Report Regions
app.post('/create-MReg',(req,res)=>{
    pdf.create(maintainanceReg(req.body),{
        "format": "letter",
        "orientation": "landscape",
        "border": "0",  
        "renderDelay": 500,
        paginationOffset: 1,       // Override the initial pagination number
        // "header": {
        //   "height": "45mm",
        //   "contents": '<div style="text-align: center;">Author: Marc Bachmann</div>'
        // },
          "footer": {
            "height": "5mm",
            "contents": {
              first: 'First Page',
              2: 'Second page', // Any page number is working. 1-based index
              default: '<span style="color: #444; font-size:6px;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
              last: 'Last Page'
            }
          },
        "type": "pdf"
    }).toFile('Maintenance-reports-Regions.pdf',(err)=>{
      if(err){
        res.status(500).send(Promise.reject());
    }
    res.status(200).send(Promise.resolve());
    })
})
app.get('/MReg-pdf',(req,res)=>{
    res.sendFile(`${__dirname}/Maintenance-reports-Regions.pdf`)
})


///Priority Report Major Roads
app.post('/create-PMR',(req,res)=>{
    pdf.create(priorityMR(req.body),{
        "format": "A4",
        "orientation": "landscape",
        "border": "0",  
        "renderDelay": 500,
        paginationOffset: 1,       // Override the initial pagination number
        // "header": {
        //   "height": "45mm",
        //   "contents": '<div style="text-align: center;">Author: Marc Bachmann</div>'
        // },
          "footer": {
            "height": "10mm",
            "contents": {
              first: 'First Page',
              2: 'Second page', // Any page number is working. 1-based index
              default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
              last: 'Last Page'
            }
          },
        "type": "pdf"
    }).toFile('Priority-reports-Major-Roads.pdf',(err)=>{
      if(err){
        res.status(500).send(Promise.reject());
    }
    res.status(200).send(Promise.resolve());
    })
})
app.get('/PMR-pdf',(req,res)=>{
    res.sendFile(`${__dirname}/Priority-reports-Major-Roads.pdf`)
})

///Priority Report Regions
app.post('/create-PReg',(req,res)=>{
    pdf.create(priorityREG(req.body),{
        "format": "A4",
        "orientation": "landscape",
        "border": "0",  
        "renderDelay": 500,
        paginationOffset: 1,       // Override the initial pagination number
        // "header": {
        //   "height": "45mm",
        //   "contents": '<div style="text-align: center;">Author: Marc Bachmann</div>'
        // },
          "footer": {
            "height": "10mm",
            "contents": {
              first: 'First Page',
              2: 'Second page', // Any page number is working. 1-based index
              default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
              last: 'Last Page'
            }
          },
        "type": "pdf"
    }).toFile('Maintenance-reports-Regions.pdf',(err)=>{
      if(err){
        res.status(500).send(Promise.reject());
    }
    res.status(200).send(Promise.resolve());
    })
})
app.get('/PReg-pdf',(req,res)=>{
    res.sendFile(`${__dirname}/Maintenance-reports-Regions.pdf`)
})
//////////////////////////////////////////////////////////////////////////////





////////////////////////////////Data Entry And Reviewer Reports//////////////////////////////////////

const sectionsSamples = require('./helpers/Data-Entry-Reviewer Reports/sections-samples')
const intersection = require('./helpers/Data-Entry-Reviewer Reports/intersection')
const streets = require('./helpers/Data-Entry-Reviewer Reports/streets')

//sectionsSamples Reports
app.post('/create-SectionR',(req,res)=>{
    pdf.create(sectionsSamples(req.body),{
      "height": "10.5in",        // allowed units: mm, cm, in, px
      "width": "23in",            // allowed units: mm, cm, in, px
        "border": "0",  
        "renderDelay": 500,
        paginationOffset: 1,       // Override the initial pagination number
        // "header": {
        //   "height": "45mm",
        //   "contents": '<div style="text-align: center;">Author: Marc Bachmann</div>'
        // },
          "footer": {
            "height": "10mm",
            "contents": {
              first: 'First Page',
              2: 'Second page', // Any page number is working. 1-based index
              default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
              last: 'Last Page'
            }
          },
        "type": "pdf"
    }).toFile('Sections-reports.pdf',(err)=>{
        if(err){
            res.status(500).send(Promise.reject());
        }
        res.status(200).send(Promise.resolve());
    })
})
app.get('/SectionR-pdf',(req,res)=>{
    res.sendFile(`${__dirname}/Sections-reports.pdf`)
})


//intersection Reports
app.post('/create-intersectionR',(req,res)=>{
    pdf.create(intersection(req.body),{
      "height": "10.5in",        // allowed units: mm, cm, in, px
      "width": "23in",            // allowed units: mm, cm, in, px
        "border": "0",  
        "renderDelay": 500,
        paginationOffset: 1,       // Override the initial pagination number
        // "header": {
        //   "height": "45mm",
        //   "contents": '<div style="text-align: center;">Author: Marc Bachmann</div>'
        // },
          "footer": {
            "height": "10mm",
            "contents": {
              first: 'First Page',
              2: 'Second page', // Any page number is working. 1-based index
              default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
              last: 'Last Page'
            }
          },
        "type": "pdf"
    }).toFile('Intersections-reports.pdf',(err)=>{
      if(err){
        res.status(500).send(Promise.reject());
    }
    res.status(200).send(Promise.resolve());
    })
})
app.get('/intersectionR-pdf',(req,res)=>{
    res.sendFile(`${__dirname}/Intersections-reports.pdf`)
})

//streets Reports
app.post('/create-streetsR',(req,res)=>{
    pdf.create(streets(req.body),{
        // "format": "A4",
        // "orientation": "landscape",
        "height": "10.5in",        // allowed units: mm, cm, in, px
        "width": "23in",            // allowed units: mm, cm, in, px
        "border": "0",  
        "renderDelay": 500,
        paginationOffset: 1,       // Override the initial pagination number
        // "header": {
        //   "height": "45mm",
        //   "contents": '<div style="text-align: center;">Author: Marc Bachmann</div>'
        // },
          "footer": {
            "height": "10mm",
            "contents": {
              first: 'First Page',
              2: 'Second page', // Any page number is working. 1-based index
              default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
              last: 'Last Page'
            }
          },
        "type": "pdf"
    }).toFile('Streets-reports.pdf',(err)=>{
      if(err){
        res.statusCode=500;
        res.send(Promise.reject());
    }
    res.statusCode=200
    res.send(Promise.resolve());
    })
})
app.get('/streetsR-pdf',(req,res)=>{
    res.sendFile(`${__dirname}/Streets-reports.pdf`)
})



























//apis in system  ----*///
//1. Folder (users and employees)
app.use('/emloyees',employeeRouter);        //done
app.use('/users',userRouter);               //done
app.use('/roles',roleRouter);               //done

//2. Folder (inventory) 
app.use('/cities',cityRouter)               //done
//2. Folder (inventory) -->Major-Routes
app.use('/majorroutes',majorRouter)         //done
app.use('/lanes',laneRouter)                //done
app.use('/intersections',intersectionRouter)    //done
app.use('/sections',sectionRouter)              //done
app.use('/samplessection',sampleRouter)         
//2. Folder (inventory) -->Streets-Regions
app.use('/regions',regionRouter)
app.use('/streets',streetRouter)

//2. Folder (inventory) -->Bridges-structures
app.use('/bridges',bridgeRouter)


//3. Folder survey
app.use('/intersectioncollection',intersectioncollectionRouter)
app.use('/sectioncollection',sectioncollectionRouter)
app.use('/streetcollection',streetcollectionRouter)
app.use('/bridgecollection',bridgecollectionRouter)

//4. Folder Real-Time-Date
app.use('/majorrealtime',majorrealtimeRouter)
app.use('/regionrealtime',regionrealtimeRouter)
app.use('/bridgerealtime',bridgerealtimeRouter)

//5. Folder Pavement condition PC - Reports

// overall condition major
app.use('/majorGI',majorGIRouter)
// overall condition region
app.use('/regionGI',regionGIRouter)
// overall condition bridge
app.use('/bridgeGI',bridgeGIRouter)
// condition samples 
app.use('/secionGI',secionGIRouter)
app.use('/sectionsamples',sectionsamplesRouter)
app.use('/intersectionGI',intersectionGIRouter)
app.use('/streetGI',streetGIRouter)

//planned-Budget
app.use('/plannedbudget',plannedbudgetRouter)



////logging 
// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))



//for page not found
// app.use((req,res,next)=>{
//     const error = new Error("Page not found")
//     error.status = 404
//     next(error);
// })


//global error handler==> it must take 4 parameters
app.use((err,req,res,next)=>{
    if(err.status <= 500) {
        return res.status(err.status).send(err.message)
    }
res.status(500).send("Internal Server error")
})

