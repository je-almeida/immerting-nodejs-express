const express = require('express')
const router = express.Router()
const routerApi = require('./api')
const routerWeb = require('./web')

// for domain.com.br/api/*
router.use('/api', routerApi)

// for domain.com.br/web/*
router.use('/web', routerWeb)

module.exports = router
