const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PC_SectionSamplesSchema = new Schema({
    Route_ID : {type:Schema.Types.ObjectId, ref:"Major"},
    Section_ID:{type:Schema.Types.ObjectId,ref:"Section"},
    Lane_ID:{type:Schema.Types.ObjectId,ref:"Lane"},
    Section_Sample_ID:{type:Schema.Types.ObjectId,ref:"SectionSurvey"}, 
    Sample_GI:{type:Number, required:true, min:0,max:100},
    Analyst_Responsible:{type:Schema.Types.ObjectId, ref:"User" , required:false}
})

const PC_SectionSamples = mongoose.model("PC_SectionSamples",PC_SectionSamplesSchema);

module.exports = PC_SectionSamples;