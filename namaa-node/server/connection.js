require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const Port = process.env.PORT||5000
const app = express();
// mongoose.connect(process.env.CONNECTION_DB || "mongodb://localhost:27012", { useNewUrlParser: true, useUnifiedTopology: true },
mongoose.connect("mongodb://localhost:27017/namaaDB", { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) {
            //it is for exit connection in case of error
            console.error(err)
            process.exit();
        }
        console.log("Connection successfully")
        app.listen(Port, () => {
            console.log(`app listening at http://localhost:${Port}`)
        })
    })

module.exports = app;