const express = require('express')
const router = express.Router()

// Getting Model
const subscribers = require('./Api/subscribers')

router.all('*', (req, res, next) => {
    // put where the middleware (ex: auth)
    // example: "authMiddleware",
    console.log('Put here middlewares to all routes of api: example >> authMiddleware')
    return next()
})

// Example of middleware to all routes /api/*
router.use('*', (req, res, next) => {
    console.log('middleware that says aloha')
    return next()
})

router.use('*', (req, res, next) => {
    console.log('middleware that says aloha')
    return next()
})

// CRUD routes Subscribers
router.use('/subscribers', subscribers)

module.exports = router