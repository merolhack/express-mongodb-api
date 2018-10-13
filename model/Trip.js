const mongoose = require('mongoose')
const TripSchema = new mongoose.Schema({
    name: {
        type: String
    },
    short_description: {
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
    created_at: {
        type : Date,
        default: Date.now
    },
    updated_at: {
        type : Date,
    },
})

mongoose.connect('mongodb://localhost:27017/trips-app', { useNewUrlParser: true })

const TripModel = mongoose.model('Trip', TripSchema)
module.exports = TripModel
