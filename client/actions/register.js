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
        if (err) {
          alert("didn't work")
        }
        else {
          saveUserToken(res.body.token)
        }
      })
  }
}
