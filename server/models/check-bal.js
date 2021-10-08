const mongoose= require('mongoose')

const Schema = mongoose.Schema

const balanceSchema = new Schema({
    fullname : String,
    email : String,
    address : String,
    city : String,
    state : String,
    zip : Number,
    name_card : String,
    card_num : Number,
    exp_mon : String,
    exp_year : Number,
    cvv : Number
    
})

module.exports = mongoose.model('balance',balanceSchema,'balances')