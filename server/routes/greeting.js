var express = require('express')
var router = express.Router()
const verifyJwt = require('express-jwt')

var greetingsDb = require('../db/greeting')

function getSecret (req, payload, done) {
  done(null, process.env.JWT_SECRET)
}

router.get('/', verifyJwt({
    credentialsRequired: false,
    secret: getSecret
  }), (req, res) => {
  let db = req.app.get('db')
  greetingsDb.getGreetings(db)
    .then(greetings => {
      console.log(req.user)
      res.json(greetings)
    })
})

module.exports = router
