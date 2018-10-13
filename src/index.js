// Dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const mongodbUtils = require('./utils/mongodb')

const TripController = require('./controller/Trip')
const UserController = require('./controller/User')
const DestinationController = require('./controller/Destination')

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
app.put('/v1/trips/:id', TripController.update)
app.delete('/v1/trips/:id', TripController.remove)
// Routes for Users
app.post('/v1/users', UserController.create)
app.get('/v1/users', UserController.findAll)
app.get('/v1/users/:id', UserController.find)
app.put('/v1/users/:id', UserController.update)
app.delete('/v1/users/:id', UserController.remove)
// Routes for Destinations
app.post('/v1/destinations', DestinationController.create)
app.get('/v1/destinations', DestinationController.findAll)
app.get('/v1/destinations/:id', DestinationController.find)
app.put('/v1/destinations/:id', DestinationController.update)
app.delete('/v1/destinations/:id', DestinationController.remove)

// Start server
app.listen(_PORT, () => {
    mongodbUtils.connect().then(() => {
        console.log(`Server listening in the port ${_PORT}`)
    }).catch(err => {
        throw new Error(err);
    });
})
