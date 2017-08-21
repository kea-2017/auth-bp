import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Greetings from './Greetings'
import RegisterForm from './RegisterForm'
import LoginForm from './LoginForm'

const App = () => (
  <Router>
    <div className='app-container'>
      <h1>Hello World</h1>
      <Route exact path="/" component={Greetings} />
      <RegisterForm />
      <LoginForm />
    </div>
  </Router>
)

export default App
