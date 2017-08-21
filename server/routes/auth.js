var express = require('express')
var router = express.Router()

var {userExists, createUser} = require('../db/users')


router.post('/register', register)

function register (req, res) {
  const {username, password} = req.body
  console.log("comes in to auth route", {username, password});
  userExists(username, req.app.get('db'))
    .then(exists => {
      if(exists) {
        return res.status(400).send({message: 'User exists'})
      }
      createUser(username, password, req.app.get('db'))
        .then(() => res.status(201).end())
    })
    .catch(err => {
      res.status(500).send({message: err.message})
    })
}

module.exports = router
