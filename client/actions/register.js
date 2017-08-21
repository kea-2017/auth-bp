import request from '../utils/api'
import {saveUserToken} from '../utils/auth'

function registerUserRequest ({username, password}) {
  request
    .post('/api/v1/auth/register')
    .set({
      Accept: 'application/json',
      Authorization: get('token')
    })
    .send({
      username, password
    })
    .end((err, res) => {
    })
}


request
  .get('/')
  ,end((err, res) => {
    callback(res.body)
  })


return request
  .get('/')
  .then((res) => return res)
  .catch(err => )


request('post', '/auth/register', {username, password})
  .then((res) => {

  })
  .catch(err => {

  })
