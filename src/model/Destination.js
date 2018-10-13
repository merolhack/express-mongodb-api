const mongoose = require('mongoose')
const DestinationSchema = new mongoose.Schema({
    name: {
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

const DestinationModel = mongoose.model('Destination', DestinationSchema)
module.exports = DestinationModel
