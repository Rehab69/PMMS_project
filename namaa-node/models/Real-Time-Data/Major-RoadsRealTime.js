
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RealTimeDataMajorSchema = new Schema({
    Route_ID : {type:Schema.Types.ObjectId, ref:"Major"},
Latest_Pavement_Condition:{type:String, required:true},
    Average_Annual_Daily_Traffic:{type:Number, required:false},
    Annual_Daily_Traffic:{type:Number, required:false},
    Annual_Accident_rate:{type:Number, required:false},
    Climate_Condition:{type:String},
    min_Air_Temp:{type:Number, required:false},
    max_Air_Temp:{type:Number, required:false},
    min_Humidity: {type:Number, required:false},
    max_Humidity: {type:Number, required:false},
    Last_Maintenance_Year:{type:Number, required:false},
    Type_of_Last_maintenance:{type:String},
    Last_Survey_Year:{type:Number},
},
{ timestamps: { createdAt: true, updatedAt: true } }
)

const RealTimeDataMajor = mongoose.model('RealTimeDataMajor', RealTimeDataMajorSchema);

module.exports = RealTimeDataMajor;