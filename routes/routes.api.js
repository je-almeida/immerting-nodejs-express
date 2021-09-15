const express = require('express')
const router = express.Router()

// Example of middleware to all routes /api/*
router.use('*', (req, res, next) => {
    console.log('middleware that says aloha on "/api" routes')
    return next()
})

// CRUD routes Subscribers
router.use('/subscribers', require('./api/subscribers'))

module.exports = router