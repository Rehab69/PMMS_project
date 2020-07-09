const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    user_emp_ID: {type: Number, required:true},
    user_ID: { type: Schema.Types.ObjectId, ref: 'Employee' },      ///one-many relationship
    userName: { type: String, required: true, minLength: 3, maxLength: 20 },
    userPassword: { type: String, required: true },
    confirmedInSystem: { type: Boolean, required: true, default: false },
    userRole: { type: Number, ref: 'Role' }         ///one-many relationship
},
    { timestamps: { createdAt: true, updatedAt: true } }
)

const User = mongoose.model('User', userSchema)

module.exports = User

