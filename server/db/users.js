var {knex} = require('../index')
var hash = require('../auth/hash')

module.exports = {
  createUser,
  userExists,
  getUserByName
}

function createUser (username, password, conn) {
  console.log("create user", {username, password});
  const passwordHash = hash.generate(password)
  var db = conn || knex
  return db('users')
    .insert({username, hash: passwordHash})
}

function userExists (username, conn) {
  var db = conn || knex
  return db('users')
    .count('id as n')
    .where('username', username)
    .then(count => {
      return count[0].n > 0
    })
}

function getUserByName(username, conn) {
  var db = conn || knex
  return db('users')
    .select()
    .where('username', username)
    .first()
}
