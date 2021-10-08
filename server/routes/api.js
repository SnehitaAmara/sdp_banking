const express = require('express')
const router = express.Router()

const User =require('../models/user')

const Account =require('../models/account')

const Contact =require('../models/contact')

const Balance =require('../models/check-bal')

const mongoose = require('mongoose')


mongoose.connect("mongodb://127.0.0.1:27017/sdp_database", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(() => {
    console.log('connection succesfull');
}).catch((e) => {
    console.log('no connection');
})

router.get('/',(req, res) => {
    res.send('from API route')
})

router.post('/register', (req, res) => {
    let userData = req.body
    let user= new User(userData)
    user.save((error , registeredUser) => {
        if(error) {
            console.log(error)
        } else {
            res.status(200).send(registeredUser)
        }
    })
})

router.post('/login', (req, res) => {
    let userData = req.body

    User.findOne({username: userData.username}, (error, user) => {
        if(error) {
            console.log(error)
        } else {
            if (!user) {
                res.status(401).send('Invalid username')
            } else
            if ( user.password !== userData.password) {
                res.status(401).send('Invalid password')
            } else {
                res.status(200).send(user)
            }
        }

    })
})

router.post('/account', (req, res) => {
    let accData = req.body
    let account= new Account(accData)
    account.save((error , accUser) => {
        if(error) {
            console.log(error)
        } else {
            res.status(200).send(accUser)
        }
    })
})

router.post('/contact', (req, res) => {
    let conData = req.body
    let contact= new Contact(conData)
    contact.save((error , conUser) => {
        if(error) {
            console.log(error)
        } else {
            res.status(200).send(conUser)
        }
    })
})

router.post('/balance', (req, res) => {
    let balData = req.body
    let balance= new Balance(balData)
    balance.save((error , balUser) => {
        if(error) {
            console.log(error)
        } else {
            res.status(200).send(balUser)
        }
    })
})

module.exports = router