const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SectionSurveySchema = new Schema({
    Survey_No : {type: Number, required:true},
    Collected_Date: { type:Date, required:true },
    Survey_Responsible:{type:String, required:true},
    Sample_ID:{type:Number, required:true},
    Lane_ID:{type:Schema.Types.ObjectId, ref:"Lane"},
    Section_ID:{type:Schema.Types.ObjectId, ref:"Section"},
    Route_ID:{type:Schema.Types.ObjectId, ref:"Major"},

    From:{type:Number,required:true},
    To:{type:Number,required:true},
    LengthInM:{type:Number,required:true},
    WidthInM:{type:Number,required:true},
    Thickness_Pavement:{type:Number,required:true},
    //distress no1
    isThere_AlligatorCrack :{type:Boolean, required:true, default:false},
    Degree_of_AlligatorCrack:{type:Number, required:false},                 //from 1 -> 5  & 1 is good  
    Area_of_AlligatorCrackIn_CM2:{type:Number, required:false},
    //distress no2
    isThere_Rutting:{type:Boolean, required:true, default:false},
    Degree_of_Rutting:{type:Number, required:false},
    Area_of_RuttingIn_CM2:{type:Number, required:false},
    //distress no3
    isThere_Potholes:{type:Boolean, required:true, default:false},
    Degree_of_Potholes:{type:Number, required:false},
    Area_of_PotholesIn_CM2:{type:Number, required:false},
    //distress no4
    isThere_Long_Trans_Crack:{type:Boolean, required:true, default:false},
    Degree_of_Long_Trans_Crack:{type:Number, required:false},
    Area_of_Long_Trans_CrackIn_CM2:{type:Number, required:false},
    //distress no5
    isThere_Edge_cracking:{type:Boolean, required:true, default:false},
    Degree_of_Edge_cracking:{type:Number, required:false},
    Area_of_Edge_cracking:{type:Number, required:false},
    //distress no6
    isThere_Blocking_cracks:{type:Boolean, required:true, default:false},
    Degree_of_Blocking_cracks:{type:Number, required:false},
    Area_of_Blocking_cracksIn_CM2:{type:Number, required:false},

    
    Comment:{type:String, required:false},
    Img:{type:Buffer, required:false},
    Entry_Date:{type:Date, default:Date.now()},
    Data_Entry_Responsible:{type:Schema.Types.ObjectId, ref:"User", required:false},
    Data_Entry_Confirmed:{type:Boolean,default:false},
    Review_Responsible:{type:Schema.Types.ObjectId, ref:"User", required:false},
    Review_Confirmed:{type:Boolean, default:false},
    Analyst_Responsible:{type:Schema.Types.ObjectId, ref:"User", required:false},
    is_PCI_Considered:{type:Boolean, required:false},
    Senior_Analyst_Confirmed:{type:Boolean, required:false}
}
)

const SectionSurvey = mongoose.model('SectionSurvey', SectionSurveySchema);

module.exports = SectionSurvey;