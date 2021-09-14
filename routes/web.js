const express = require('express')
const router = express.Router()

const subscribers = require('./Web/subscribers')
router.all('*', (req, res, next) => {
    // put where the middleware (ex: auth)
    // example: "authMiddleware",
    console.log('Put here middlewares to all routes of api: example >> authMiddleware')
    return next()
})

router.use('*', (req, res, next) => {
    console.log('middleware that says aloha')
    return next()
})

// Routes of views to the Basic Example CRUD
router.use('/subscribers', subscribers)

module.exports = router