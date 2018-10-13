// Dependencies
const bcrypt = require('bcrypt')
const UserModel = require('../model/User')

// Contants
const _SALT_ROUNDS = 10

/**
 * 
 * @param {Object} data
 * @returns Promise<Object>
 */
const getHashedPassword = function(data) {
    if (data.password) {
        const password = data.password
        return new Promise((resolve,reject) => {
            bcrypt.hash(password, _SALT_ROUNDS, function(err, hash) {
                if (err) {
                    reject(err)
                }
                data.password = hash
                resolve(data)
            })
        })
    }
}

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
    getHashedPassword(req.body)
    .then(function(data) {
        const newUser = new UserModel(data);
        newUser.save(function(error) {
            if (error) {
                res.send(error)
            }
            const response = {
                data: newUser,
                message: 'Trip created'
            }
            res.send(response)
        })
    })
}

const update = function(req, res, next) {
    getHashedPassword(req.body)
    .then(function(data) {
        const id = req.params.id
        UserModel.updateOne({ _id: id }, data, function() {
            res.send({data, message: 'Trip updated'})
        })
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
            res.send({message: 'Trip deleted'})
        })
    })
}

module.exports = {
    findAll,
    find,
    create,
    update,
    remove
}
