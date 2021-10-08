const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

require("./models/user")
require("./models/account")
require("./models/contact")
require("./models/check-bal")

const PORT = 3000
const api = require('./routes/api')
const app = express()
app.use(cors())

app.use(bodyParser.json())

app.use('/api', api)
app.get('/',function(req, res){
    res.send('Hello from server')
})

app.listen(PORT, function(){
    console.log('server is running on localhost:' + PORT)
})