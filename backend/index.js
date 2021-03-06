const app = require('express')()
const consign = require('consign')
const db = require('./config/db')
const mongoose = require('mongoose')

require('./config/mongodb')

app.db = db
app.mongoose = mongoose

app.db = db

consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./schedule')
    .then('./api/model') 
    .then('./api/service') 
    .then('./api')    
    .then('./config/routes.js')
    .into(app)

app.listen(3000, () =>{
    console.log('executando backend...')
})