// Este arquivo é para bagunçar com metodos que deveriam constar em controllers
const express = require('express')
const router = express.Router()

// import model::::::::
const Subscriber = require('../../models/subscriber.model')

router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find()
        res.json({data: subscribers})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

router.get('/:id', getSubscriber, (req, res) => {
    res.json({data: res.subscriber})
})

router.post('/', async (req, res) => {
    const subscriber = new Subscriber({
        userName: req.body.userName,
        userChannel: req.body.userChannel,
    })

    try {
        const newSubscriber = await subscriber.save()
        res.status(200).json(newSubscriber)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

/**
 * Para alterar poucas informações
 */
router.patch('/:id', getSubscriber, async (req, res) => {
    if(req.body.userName != null) {
        res.subscriber.userName = req.body.userName
    }

    if(req.body.userChannel != null) {
        res.subscriber.userChannel = req.body.userChannel
    }

    try {
        const updatedSubscriber = await res.subscriber.save()
        res.json(updatedSubscriber)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

/**
 * Para alterar muitas informações
 */
router.put('/', (req, res) => {
    res.send('Put')    
})

router.delete('/:id', getSubscriber, async (req, res) => {
    try {
        await res.subscriber.remove()
        res.json({message: 'Subscriber has been deleted'})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

async function getSubscriber(req, res, next) {
    try {

        subscriber = await Subscriber.findById(req.params.id)

        if(subscriber == null) {
            return res.status(404).json({message: 'Subscriber not found!'})
        }

    } catch (err) {
        res.status(500).json({message: err.message})        
    }

    res.subscriber = subscriber
    return next()

}

module.exports = router