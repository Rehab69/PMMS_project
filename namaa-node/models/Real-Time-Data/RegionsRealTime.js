const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const regionRealTimeSchema = new Schema({
    Region_ID : {type:Schema.Types.ObjectId, ref:"Region"},
Latest_Pavement_Condition:{type:String, required:true},
Average_Annual_Daily_Traffic:{type:Number, required:false},
Annual_Daily_Traffic:{type:Number, required:false},
Annual_Accident_rate:{type:Number, required:false},
Climate_Condition:{type:String, required:false},
min_Air_Temp:{type:Number, required:false},
max_Air_Temp:{type:Number, required:false},
min_Humidity: {type:Number, required:false},
max_Humidity: {type:Number, required:false},
Last_Maintenance_Year:{type:Number, required:true},
Type_of_Last_maintenance:{type:String, required:false},
Last_Survey_Year:{type:Number, required:false},
Population_Density:{type:Number, required:false}



},
{ timestamps: { createdAt: true, updatedAt: true } }
)

const RegionRealTime = mongoose.model('RegionRealTimeModel', regionRealTimeSchema);

module.exports = RegionRealTime;