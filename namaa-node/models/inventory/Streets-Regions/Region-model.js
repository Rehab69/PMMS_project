const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegionSchema = new Schema({
    Region_ID : {type: Number, required:true},
    Region_Name : { type:String, required:true },
    city_ID : { type: Schema.Types.ObjectId,ref :"City" },
    Total_No_Streets:{type:Number, required:true}
},
{ timestamps: { createdAt: true, updatedAt: true } }
)

const Region = mongoose.model('Region', RegionSchema);

module.exports = Region;