var jwt = require('jsonwebtoken')
var {getUserByName} = require('../db/users')


function issue (req, res) {
  getUserByName(req.body.username, req.app.get('db'))
    .then(user => {
      var token = createToken(user, process.env.JWT_SECRET)
      res.json({
        message: 'Authentication successful',
        token
      })
    })
}

function createToken (user, secret) {
  return jwt.sign({
    id:user.id,
    username: user.username
  }, secret, {
    expiresIn: '24h'
  })
}

module.exports = {
  issue,
  createToken
}
