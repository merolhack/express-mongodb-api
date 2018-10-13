const mongoose = require('mongoose')
const TripSchema = new mongoose.Schema({
    name: {
        type: String
    },
    destinations: {
        type: [String]
    },
    short_description: {
        type: String
    },
    description: {
        type: String
    },
    date_start: {
        type : Date,
    },
    date_end: {
        type : Date,
    },
    image: {
        type: String
    },
    gallery: {
        type: [String]
    },
    price: {
        type: String
    },
    private: {
        type: Boolean
    },
    created_at: {
        type : Date,
        default: Date.now
    },
    updated_at: {
        type : Date,
    },
})

const TripModel = mongoose.model('Trip', TripSchema)
module.exports = TripModel
