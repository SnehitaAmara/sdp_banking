const mongoose= require('mongoose')

const Schema = mongoose.Schema

const accountSchema = new Schema({
    firstname : String,
    lastname : String,
    email : String,
    location : String,
    pho_num : Number
})

module.exports = mongoose.model('account',accountSchema,'accounts')
