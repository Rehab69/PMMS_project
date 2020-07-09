const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PC_InterSecSchema = new Schema({
    Route1_ID : {type:Schema.Types.ObjectId, ref:"Major"},
    Route2_ID : {type:Schema.Types.ObjectId, ref:"Major"},
    InterSec_ID:{type:Schema.Types.ObjectId,ref:"InterSectionSurvey"},
    City_ID:{type:Schema.Types.ObjectId,ref:"City"},
    InterSec_GI:{type:Number, required:true, min:0,max:100},
})

const PC_InterSec = mongoose.model("PC_InterSection",PC_InterSecSchema);

module.exports = PC_InterSec;