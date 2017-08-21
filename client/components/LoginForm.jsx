import React from 'react'
import {connect} from 'react-redux'

class LoginForm extends React.Component {
   constructor(props) {
     super(props)
     this.state = {

     }
   }


   render() {
     return (
       <div>
         <h1>Login!</h1>
         <form>
           <input type="text" name="username" placeholder="username" />
           <input type="password" name="hash" placeholder="password" />
           <input type="submit" value="Login" />
         </form>
       </div>
     )
   }
 }

 export default connect()(LoginForm)
