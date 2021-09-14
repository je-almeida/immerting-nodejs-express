'use strict'
// get lib to use database mongodb
const mongoose = require('mongoose')

// configuration Model
const subscriberSchema = new mongoose.Schema({
    /**
     * A user name of Subscriber:
     * 
     * Rules: [
     *  ...
     *  ...
     *  ...
     *  ex: max 100 characters | min 4 characters
     * 
     *  // obs > needs validation
     * ]
     */
    userName: {
        type: String,
        required: true
    },

    /**
     * A user channel of Subscriber:
     * 
     * Rules: [
     *  ...
     *  ...
     *  ...
     *  ex: max 100 characters | min 4 characters
     * 
     *  // obs > needs validation
     * ]
     */
    userChannel: {
        type: String,
        required: true
    },

    /**
     * Because the param timestamps after this, the userDate param is deprecated.
     * But for example of param with default value, i puted this attribute
     */
    userDate: {
        type: Date,
        required: true,
        default: Date.now()
    }
}, { 
    /**
     * Will set a default value on updatedAt & createdAt on change or insert Object
     */
    timestamps: true 
})

// Export Model to use in anothers locals
module.exports = mongoose.model('Subscriber', subscriberSchema)