const mongoose= require('mongoose')

const Schema = mongoose.Schema

const contactSchema = new Schema({
    firstname : String,
    lastname : String,
    email : String,
    Subject : String
})

module.exports = mongoose.model('contact',contactSchema,'contacts')