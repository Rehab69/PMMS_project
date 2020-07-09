const mongoose = require('mongoose')

const roleSchema =new mongoose.Schema({
    role_ID:{ type: Number, required: true },
    roleName:{ type:String, required: true },
    descriptionRole: {type: String, required: false}
})

const Role = mongoose.model('Role', roleSchema)

module.exports = Role

