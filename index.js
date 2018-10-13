// Dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const TripController = require('./controller/Trip')
const UserController = require('./controller/User')

// Contants
const _PORT = 4000

// Express configuration
const app = express()
app.use( bodyParser.urlencoded({extended: false}) )
app.use( bodyParser.json() )
app.use( cors() )

// Routes for Trips
app.post('/v1/trips', TripController.create)
app.get('/v1/trips', TripController.findAll)
app.get('/v1/trips/:id', TripController.find)
app.delete('/v1/trips/:id', TripController.remove)
// Routes for Users
app.post('/v1/users', UserController.create)
app.get('/v1/users', UserController.findAll)
app.get('/v1/users/:id', UserController.find)
app.delete('/v1/users/:id', UserController.remove)

// Start server
app.listen(_PORT, () => {
    console.log(`Server listening in the port ${_PORT}`)
})
