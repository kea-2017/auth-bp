import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Greetings from './Greetings'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

const App = () => (
  <Router>
    <div className='app-container'>
      <h1>Hello World</h1>
      <Route exact path="/" component={Greetings} />
      <LoginForm />
      <RegisterForm />
    </div>
  </Router>
)

export default App
