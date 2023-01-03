const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
require('dotenv').config()
const database = require('./server/database/database')
const router = express.Router()
const controllers = require('./server/controllers/controllers')

app.set(morgan('tiny'))
app.set('view engine','ejs')
app.set('views',__dirname+'/views')

app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

const dbConnection = async () => {
    await database(process.env.DATABASE_URL)
    app.listen(process.env.PORT || port, console.log(`connected on the server on port ${port}`))
}

dbConnection()

app.use('/', require('./server/routes/routes'))
