const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema({
    city_ID : {type: Number, required:true},
    city_Name : { type:String, required:true },
    total_Regions:{ type:Number, required:true },
    total_MajorRoutes:{ type:Number, required:true },
    total_Bridges:{ type:Number, required:true }
},
{ timestamps: { createdAt: true, updatedAt: true } }
)

const City = mongoose.model('City', citySchema);

module.exports = City;