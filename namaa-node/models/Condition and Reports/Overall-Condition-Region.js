const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Overall_PC_RegionSchema = new Schema({
    Region_ID : {type:Schema.Types.ObjectId, ref:"Region"},
    City_ID:{type:Schema.Types.ObjectId,ref:"City"},
    Current_Overall_GI:{type:Number, required:true, min:0,max:100},
    Yr_Calc_GI:{type:Number, required:false},
    Region_Condition:{type:String, required:true},
    OnPlan_of_maintenance:{type:Boolean, required:false},
    Recommended_Treatment_Type:{type:String, required:false},
    planned_Yrs_of_maintenance:{type:Number, required:false},
    Start_Yr_maintenance:{type:Number, required:false},
    Duration_Maintenance:{type:Number, required:false},
    Predicted_GI_After_maintenance:{type:Number, required:false},
    Cost_of_Maintenance:{type:Number, required:false}
    
    // Is_Recommended_To_Maintain:{type:Boolean,required:false, default:false},
    // Remaining_Life:{type:Number, required:false},
})

const Overall_PC_Region = mongoose.model("Overall_PC_Region",Overall_PC_RegionSchema);

module.exports = Overall_PC_Region;