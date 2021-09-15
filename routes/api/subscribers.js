const express = require('express')
const router = express.Router()
const controller = require('../../controllers/api/subscriber.api.controller');

router.get('/', controller.index)

router.get('/:id', controller.getSubscriber, controller.get)

router.post('/', controller.store)

router.patch('/:id', controller.getSubscriber, controller.update)

router.put('/', controller.update)

router.delete('/:id', controller.getSubscriber, controller.delete)

module.exports = router