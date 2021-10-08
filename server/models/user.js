const mongoose= require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: String,
    password: String,
    email : String,
    pho_num : Number
})

module.exports = mongoose.model('user',userSchema,'users')



