require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DB_MONGO_URL, {
    useNewUrlParser: true, useUnifiedTopology: true
})

const db = mongoose.connection

//
// Events of connection
//
//on error connection
db.on('error', (err) => console.log(err))
//on open connection
db.once('open', (err) => console.log('DB Connected!'))

// enable json
app.use(express.json())

// Declaration routes
const routes = require('./routes/routes')
app.use(routes)
// app.use('/subscribers', subscribersRouter)

// Run Server
app.listen(process.env.SERVER_PORT, () => console.log('Server is running!'))
