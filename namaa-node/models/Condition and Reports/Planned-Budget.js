const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlannedBudget_Schema = new Schema({
    Total_BudgetInMillion:{type:Number, required:true},
    Major_BudgetInMillion:{type:Number, required:false},
    Street_BudgetInMillion:{type:Number, required:false},
    Bridge_BudgetInMillion:{type:Number, required:false},
    Budget_Yr:{type:Number,required:false}
})

const PlannedBudget = mongoose.model("PlannedBudget",PlannedBudget_Schema);

module.exports = PlannedBudget;