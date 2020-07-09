const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bridgeSurveySchema = new Schema({
    Survey_No : {type: Number, required:true},
    Collected_Date: { type:Date, required:true },
    Survey_Responsible:{type:String, required:true},
    bridge_ID : {type: Schema.Types.ObjectId, ref:'Bridge'},
    condition_of_ExpansionJoints:{type:Number,required:true},        //from 1-> 5 and 5 is bad
    condition_of_ConstructionJoints:{type:Number,required:true},
    condition_of_SideWalk:{type:Number,required:true},
    condition_of_DraiangeSystem:{type:Number,required:true},
    condition_of_BridgeDeckSurface:{type:Number,required:true},
    condition_of_Beams:{type:Number,required:true},
    condition_of_Utilities:{type:Number,required:true},
    condition_of_Footings:{type:Number,required:true},
    condition_of_Lighting:{type:Number,required:true}

})

const BridgeSurvey = mongoose.model('BridgeSurvey', bridgeSurveySchema);

module.exports = BridgeSurvey;