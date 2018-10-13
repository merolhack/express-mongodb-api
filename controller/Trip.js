const TripModel = require('../model/Trip')

const findAll = function(req, res, next) {
    TripModel.find({}, function(error, trips) {
        if (error) {
            res.send(error)
        }
        res.send(trips)
    })
}

const find = function(req, res, next) {
    const id = req.params.id
    TripModel.findById(id, function(error, trip) {
        if (error) {
            res.send(error)
        }
        res.send(trip)
    })
}

const create = function(req, res, next) {
    const newTrip = new TripModel(req.body);
    newTrip.save(function(error) {
        if (error) {
            res.send(error)
        }
        res.send(newTrip)
    })
}

const update = function(req, res, next) {
    const id = req.params.id
    TripModel.updateOne({ _id: id }, req.body, function() {
        res.send({message: 'updated'})
    })
}

const remove = function(req, res, next) {
    const id = req.params.id
    TripModel.findById(id, function(error, trip) {
        if (error) {
            res.send(error)
        }
        TripModel.deleteOne({ _id: id }, function (error) {
            if (error) {
                res.send(error)
            }
            res.send({message: 'Deleted'})
        });
    })
}

module.exports = {
    findAll,
    find,
    create,
    update,
    remove
}
