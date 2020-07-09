const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LaneSchema = new Schema({
    Route_ID : {type: Number,ref:'Major', required:true},
    Lane_ID : {type: Number, required:true},
    Direction:{type:Boolean, required:true}        
},
{ timestamps: { createdAt: true, updatedAt: true } }
)

const Lane = mongoose.model('Lane', LaneSchema);

module.exports = Lane;