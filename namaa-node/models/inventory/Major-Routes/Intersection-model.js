const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IntersectionSchema = new Schema({
    Route1_ID : {type: Number,ref:'Major', required:true},
    Route2_ID : {type: Number,ref:'Major', required:true},
    Intersection_ID : {type: Number, required:true},
    AreaInM2:{type:Number, required:true},
},
{ timestamps: { createdAt: true, updatedAt: true } }
)

const Intersection = mongoose.model('Intersection', IntersectionSchema);

module.exports = Intersection;