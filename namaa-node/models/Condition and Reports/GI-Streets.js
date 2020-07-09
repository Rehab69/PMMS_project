const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PC_StreetsSchema = new Schema({
    Street_ID : {type:Schema.Types.ObjectId, ref:"StreetSurvey"},
    Region_ID:{type:Schema.Types.ObjectId,ref:"Region"},
    City_ID:{type:Schema.Types.ObjectId,ref:"City"},
    Street_GI:{type:Number, required:true, min:0,max:100},
    Analyst_Responsible:{type:Schema.Types.ObjectId,required:false, ref:"User"}
})

const PC_Streets = mongoose.model("PC_Streets",PC_StreetsSchema);

module.exports = PC_Streets;