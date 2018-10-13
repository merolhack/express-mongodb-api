const mongoose = require('mongoose')

/**
 * Creating connection to Mongo DB
 */
const connect = () => {
    return mongoose.connect('mongodb://localhost:27017/trips-app', { useNewUrlParser: true });
}

module.exports = {
    connect
}
