require('dotenv').load()

const cookieParser = require('cookie-parser')
const express = require('express')
const passport = require('passport')
const TwitterStrategy = require('passport-twitter').Strategy

var path = require('path')
var bodyParser = require('body-parser')
var cors = require('cors')

const auth = require('./lib/auth')
const users = require('./lib/users')
const apiRoutes = require('./routes/api')

var greetings = require('./routes/greeting')

var server = express()

server.use(cors('*'))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/greetings', greetings)

module.exports = function(db) {
  server.set('db', db)
  return server
}

process.on('unhandledRejection', (error, promise) => {
  console.error('UNHANDLED REJECTION', error.stack)
})

server.set('JWT_SECRET', process.env.JWT_SECRET) // Can this be moved to api.js?

server.use(cookieParser())
server.use(passport.initialize()) // Can this be moved to api.js?
server.use('/api/v1', apiRoutes)

server.get('/', (req, res) => {
  res.send(`Token is: ${req.cookies.token}`)
  console.log(req.cookies.token)
})

// Can these be moved to api.js?
passport.use(new TwitterStrategy(auth.twitterConfig, auth.verify))
passport.serializeUser(users.serialize)
passport.deserializeUser(users.deserialize)
