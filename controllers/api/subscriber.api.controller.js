// import model
const Subscriber = require('../../models/subscriber.model');

/**
 * Get Collection of object
 * @param {*} req 
 * @param {*} res 
 */
exports.index = async (req, res)  => {
    try {
        const subscribers = await Subscriber.find()
        res.json({data: subscribers})
    } catch (err) {
        res.status(500).json({message: err.message})
        console.log('Cagoou')
        throw err
    }
}

// Restore an object by id: this method uses a getSubscriber middleware
exports.get = async (req, res)  => {
    res.json({data: res.subscriber})
}

// Save an object
exports.store = async (req, res)  => {
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    } catch (err) {
        res.status(500).json({message: err.message})
        console.log('Cagoou')
        throw err
    }
}

// Run Update in an object by id: this method uses a getSubscriber middleware
exports.update = async (req, res)  => {
    try {
        const subscribers = await Subscriber.find()
        res.json({data: subscribers})
    } catch (err) {
        res.status(500).json({message: err.message})
        console.log('Cagoou')
        throw err
    }
}

// Remove from collection an object by id: this method uses a getSubscriber middleware
exports.delete = async (req, res)  => {
    try {
        const subscribers = await Subscriber.find()
        res.json({data: subscribers})
    } catch (err) {
        res.status(500).json({message: err.message})
        console.log('Cagoou')
        throw err
    }
}

/**
 * Middleware to restore a object on database
 * get an object by id: this method will is used by middleware on anothers methods
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
exports.getSubscriber = async function (req, res, next) {
    try {
        // Restore Object on Database
        subscriber = await Subscriber.findById(req.params.id)
        
        if(subscriber == null) {
            // When id of object not exists
            return res.status(404).json({message: 'Subscriber not found!'})
        }

    } catch (err) {
        // When ID param has incorrect
        res.status(500).json({message: err.message})        
    }

    // When Object exist
    res.subscriber = subscriber

    // Return to continue request
    return next()

}