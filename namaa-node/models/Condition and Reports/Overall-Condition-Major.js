const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Overall_PC_MajorSchema = new Schema({
    Route_ID : {type:Schema.Types.ObjectId, ref:"Major"},
    City_ID:{type:Schema.Types.ObjectId,ref:"City"},
    Current_Overall_GI:{type:Number, required:true, min:0,max:100},
    Yr_Calc_GI:{type:Number, required:false},
    Route_Condition:{type:String, required:true},
    OnPlan_of_maintenance:{type:Boolean, required:false},
    Recommended_Treatment_Type:{type:String, required:false},
    planned_Yrs_of_maintenance:{type:Number, required:false},
    Start_Yr_maintenance:{type:Number, required:false},
    Duration_MaintenanceInMonths:{type:Number, required:false},
    Predicted_GI_After_maintenance:{type:Number, required:false},
    Cost_of_MaintenanceInMillion:{type:Number, required:false}
    // Remaining_Life:{type:Number, required:false},
    // Is_Recommended_To_Maintain:{type:Boolean,required:false, default:false},
})

const Overall_PC_Major = mongoose.model("Overall_PC_Major",Overall_PC_MajorSchema);

module.exports = Overall_PC_Major;