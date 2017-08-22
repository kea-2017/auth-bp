import request from 'superagent'
import consume from '../utils/api'

export const receiveGreetings = (greetings) => {
  return {
    type: 'RECEIVE_GREETINGS',
    greetings
  }
}

export function getGreetings () {
  return (dispatch) => {
    consume('get', 'greetings')
      .then((res) => {
        console.log(res)
      })
  }
}
