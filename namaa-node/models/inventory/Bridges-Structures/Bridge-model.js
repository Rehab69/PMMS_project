const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bridgeSchema = new Schema({
    bridge_ID : {type: Number, required:true},
    Bridge_Name : { type:String, required:true },
    city_ID : { type: Schema.Types.ObjectId,ref: "City" },
    Total_Length_inKM: { type:Number, required:true },
    Total_Width_of_Bridge:{type:Number,default:14},
    Width_of_sidewalkInM:{type:Number,default:2},
    Type_of_bridge: {type:String, default:"Concrete"},
    No_of_spans: {type:Number},
    oneWay_Dir: {type:Boolean, required:true, default:false},
    No_lanes:{type:Number, required:false,default:2},
    Constuction_Year:{type:Number, required:false},
    main_Contractor:{type:String},
    Owner_of_Road:{type:String}
},
{ timestamps: { createdAt: true, updatedAt: true } }
)

const Bridge = mongoose.model('Bridge', bridgeSchema);

module.exports = Bridge;