const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StreetSchema = new Schema({
    Street_ID : {type: Number, required:true},
    Street_Name: { type:String, required:true },
    region_ID : { type: Schema.Types.ObjectId, ref: "Region" },
    City_ID : { type: Schema.Types.ObjectId, ref: "City" },
    Construction_Yr: {type:Number, default: 2015},
    oneWay_Dir: {type:Boolean, default:false},
    No_lanes:{type:Number, required:true},
    Pavement_Type:{type:String, default:"asphalt"},
    LengthInM:{type:Number, required:true},
    WidthInM:{type:Number, required:true},
    Thickness_of_pavement:{type:Number, required:true},
    main_Contractor:{type:String,required:false},
    Owner_of_Road:{type:String,required:false}
},
{ timestamps: { createdAt: true, updatedAt: true } }
)

const Street = mongoose.model('Street', StreetSchema);

module.exports = Street;