const express = require('express')
const router = express.Router()

// const subscribers = require('./Web/subscribers')

router.use('/web', (req, res, next) => {
    console.log('middleware that says aloha on "/web" routes')
    return next()
})

// Routes of views to the Basic Example CRUD
// router.use('/subscribers', subscribers)

module.exports = router