const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    avatar_name: {
        type: String
    },
    profile_image: {
        type: String
    },
    trips: {
        type: [String]
    },
    created_at: {
        type : Date,
        default: Date.now
    },
    updated_at: {
        type : Date,
        default: Date.now
    },
})

mongoose.connect('mongodb://localhost:27017/trips-app', { useNewUrlParser: true })

const UserModel = mongoose.model('User', UserSchema)
module.exports = UserModel
