import request from 'superagent'
import {saveUserToken} from '../utils/auth'

export function registerUserRequest ({username, password}) {
  return (dispatch) => {
    request
      .post('/api/v1/auth/register')
      .send({
        username, password
      })
      .end((err, res) => {
        console.log(res.body)
      })
  }
}
