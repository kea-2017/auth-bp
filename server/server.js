var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var passport = require('passport')

var greetings = require('./routes/greeting')
var auth = require('./routes/auth')

var server = express()

server.use(cors('*'))

server.use(passport.initialize())
server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/greetings', greetings)
server.use('/api/v1/auth', auth)

module.exports = function(db) {
  server.set('db', db)
  return server
}
