const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    emp_ID: { type: Number, required: true },
    employeeName: { type: String, required: true },
    departmentName: { type: String, required: true },
    jobTitle: { type: String, required: true }
})

const Employee = mongoose.model('Employee', employeeSchema)

module.exports = Employee

