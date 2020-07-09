const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SampleSectionSchema = new Schema({
    Sample_ID : {type: Number, required:true},
    Section_ID : {type: Schema.Types.ObjectId,ref:'Section', required:true},
    Lane_ID : {type: Schema.Types.ObjectId,ref:'Lane', required:true},
    Route_ID : {type: Schema.Types.ObjectId,ref:'Major', required:true},
    WidthInM: {type: Number, required:true},
    LengthInM : {type: Number, required:true}
      
},
{ timestamps: { createdAt: true, updatedAt: true } }
)

const SampleSection = mongoose.model('SampleSection', SampleSectionSchema);

module.exports = SampleSection;