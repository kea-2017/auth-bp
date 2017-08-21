var express = require('express')
var router = express.Router()

var {userExists, createUser} = require('../db/users')
var token = require('../auth/token')


router.post('/register', register, token.issue)

function register (req, res, next) {
  const {username, password} = req.body
  console.log("comes in to auth route", {username, password});
  userExists(username, req.app.get('db'))
    .then(exists => {
      if(exists) {
        return res.status(400).send({message: 'User exists'})
      }
      createUser(username, password, req.app.get('db'))
        .then(() => next())
    })
    .catch(err => {
      res.status(500).send({message: err.message})
    })
}

router.get('/username', token.decode, (req, res) => {
  const {username} = req.user
  console.log(req.user);
  res.json({
    username
  })
})


module.exports = router
