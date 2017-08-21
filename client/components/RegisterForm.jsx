import React from 'react'
import {connect} from 'react-redux'


class RegisterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
   }




   render() {
     return (
       <div>
         <h1>Register!</h1>
         <form>
           <input type="text" name="username" placeholder="username" />
           <input type="password" name="hash" placeholder="password" />
           <input type="submit" value="Register" />
         </form>
       </div>
     )
   }
}

export default connect()(RegisterForm)
