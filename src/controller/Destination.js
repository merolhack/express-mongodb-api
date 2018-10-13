const DestinationModel = require('../model/Destination')

const findAll = function(req, res, next) {
    DestinationModel.find({}, function(error, Destinations) {
        if (error) {
            res.send(error)
        }
        res.send(Destinations)
    })
}

const find = function(req, res, next) {
    const id = req.params.id
    DestinationModel.findById(id, function(error, Destination) {
        if (error) {
            res.send(error)
        }
        res.send(Destination)
    })
}

const create = function(req, res, next) {
    console.log('req.body', req.body)
    const newDestination = new DestinationModel(req.body)
    newDestination.save(function(error) {
        if (error) {
            res.send(error)
        }
        res.send(newDestination)
    })
}

const update = function(req, res, next) {
    const id = req.params.id
    DestinationModel.updateOne({ _id: id }, req.body, function() {
        res.send({message: 'updated'})
    })
}

const remove = function(req, res, next) {
    const id = req.params.id
    DestinationModel.findById(id, function(error, Destination) {
        if (error) {
            res.send(error)
        }
        DestinationModel.deleteOne({ _id: id }, function (error) {
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
