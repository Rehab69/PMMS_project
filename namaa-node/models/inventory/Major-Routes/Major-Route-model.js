const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MajorSchema = new Schema({
    Route_ID : {type: Number, required:true},
    Route_Name: { type:String, required:true },
    City_ID : { type: Number, ref: "City" },
    No_lanes_Per_Direction:{type:Number, required:true},
    Total_No_of_sections:{type:Number, required:true},
    Total_No_of_intersections:{type:Number, required:true},
    Total_Length_inKM:{type:Number, required:true},
    Construction_Yr: {type:Number, required: true},
    Pavement_Type:{type:String, default:"asphalt"},

    main_Contractor:{type:String,required:false},
    Owner_of_Road:{type:String,required:false},
    Construction_start_Yr:{type:Number,required:false},
    Construction_end_Yr:{type:Number,required:false},
    Construction_Manager:{type:String,required:false}
},
{ timestamps: { createdAt: true, updatedAt: true } }
)

const Major = mongoose.model('Major', MajorSchema);

module.exports = Major;