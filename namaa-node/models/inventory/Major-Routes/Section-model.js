const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SectionSchema = new Schema({
    Route_ID : {type: Number,ref:'Major', required:true},
    Section_ID : {type: Number, required:true},
    Total_No_Samples:{type:Number, required:true},
    WidthInM:{type:Number, required:true},
    LengthInM:{type:Number, required:true},
    AreaInM2:{type:Number, required:true},
    OneWay:{type:Number,default:true}
},
{ timestamps: { createdAt: true, updatedAt: true } }
)

const Section = mongoose.model('Section', SectionSchema);

module.exports = Section;