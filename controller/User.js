// Dependencies
const bcrypt = require('bcrypt')
const UserModel = require('../model/User')

// Contants
const _SALT_ROUNDS = 10

const findAll = function(req, res, next) {
    UserModel.find({}, function(error, Users) {
        if (error) {
            res.send(error)
        }
        res.send(Users)
    })
}

const find = function(req, res, next) {
    const id = req.params.id
    UserModel.findById(id, function(error, User) {
        if (error) {
            res.send(error)
        }
        res.send(User)
    })
}

const create = function(req, res, next) {
    const password = req.body.password
    bcrypt.hash(password, _SALT_ROUNDS, function(err, hash) {
        req.body.password = hash
        const newUser = new UserModel(req.body);
        newUser.save(function(error) {
            if (error) {
                res.send(error)
            }
            res.send(newUser)
        })
    });
}

const update = function(req, res, next) {
    const id = req.params.id
    UserModel.updateOne({ _id: id }, req.body, function() {
        res.send({message: 'updated'})
    })
}

const remove = function(req, res, next) {
    const id = req.params.id
    UserModel.findById(id, function(error, User) {
        if (error) {
            res.send(error)
        }
        UserModel.deleteOne({ _id: id }, function (error) {
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
