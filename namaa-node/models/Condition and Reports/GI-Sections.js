const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PC_SectionSchema = new Schema({
    Route_ID : {type:Schema.Types.ObjectId, ref:"Major"},
    Section_ID:{type:Schema.Types.ObjectId,ref:"Section"},
    City_ID:{type:Schema.Types.ObjectId,ref:"City"},
    Section_GI:{type:Number, required:true, min:0,max:100},
})

const PC_Section = mongoose.model("PC_Section",PC_SectionSchema);

module.exports = PC_Section;