import React from 'react'
import {connect} from 'react-redux'
import {registerUserRequest} from '../actions/register'


class RegisterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      confirm: ''
    }
   }

   updateField(e) {
     this.setState({
       [e.target.name]: e.target.value
     })
   }

   handleSubmit(e) {
     e.preventDefault()
     if (this.state.password != this.state.confirm) {
        alert('wrong password, practice your typing')
        this.setState({ password: '', confirm: '' })
     } else {
       const {username, password} = this.state
      this.props.onSubmit({username, password})
     }
   }

   render() {
     return (
       <div>
         <h1>Register!</h1>
         <form onSubmit={this.handleSubmit.bind(this)}>
           <input type="text" name="username" value={this.state.username} placeholder="username" onChange={this.updateField.bind(this)} />
           <input type="password" name="password" value={this.state.password} onChange={this.updateField.bind(this)} />
           <input type="password" name="confirm" value={this.state.confirm} onChange={this.updateField.bind(this)} />
           <input type="submit" value="Register" />
         </form>
       </div>
     )
   }
}

function mapDispatchToProps(dispatch) {
    return {
      onSubmit: (creds) => {dispatch(registerUserRequest(creds))}
    }
}

export default connect(undefined, mapDispatchToProps)(RegisterForm)
