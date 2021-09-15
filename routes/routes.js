const express = require('express')
const router = express.Router()
const routerApi = require('./routes.api')
const routerWeb = require('./routes.web')

// for domain.com.br/api/*
router.use('/api', routerApi)

// for domain.com.br/web/*
router.use('/web', routerWeb)

module.exports = router
