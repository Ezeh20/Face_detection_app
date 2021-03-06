import userEvent from "@testing-library/user-event";
import React from "react";
import './Signin.css'

class Signin extends React.Component { 
  constructor(props){
    super(props)
    this.state={
      signInEmail:'',
      signInPassword:''
    }
  }
  onEmailChange=(event)=>{
    this.setState({signInEmail: event.target.value})
  }
  onPasswordChange=(event)=>{
    this.setState({signInPassword: event.target.value})
  }
  onSubmitSignIn=()=>{
    fetch('https://sleepy-dusk-13865.herokuapp.com/signin',{
      method:'post',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    }).then(response=>response.json()).then(user=>{
      if(user.id){
        this.props.loadUser(user)
        this.props.onRouteChange('home')
      }
    })
  }
  render(){
    const {onRouteChange}=this.props;
    return(
<article className="br2 ba dark-gray bg-white  mv4 w-100 w-50-m w-25-l mw6 top center shadow-5 br4 me">
<main className="pa4 white-80">
<div className="measure ">
  <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
    <legend className="f2 fw6 ph0 mh0 blue">Sign In</legend>
    <div className="mt3">
      <label className="db fw4 lh-copy f5 black" for="email-address">Email</label>
      <input onChange={this.onEmailChange}  className="pa2 input-reset ba bg-white b--light-blue w-100" type="email" name="email-address"  id="email-address"/>
    </div>
    <div className="mv3">
      <label className="db fw4 lh-copy f5 black" for="password">Password</label>
      <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-white b--light-blue w-100" type="password" name="password"  id="password"/>
    </div>
  </fieldset>
  <div className="">
    <input onClick={this.onSubmitSignIn} className="b ph3 pv2 input-reset ba b--lightest-blue bg-lightest-black br2 shadow-4 grow pointer f6 dib " type="submit" value="Sign in"/>
  </div>
  <div className="lh-copy mt3">
    <p onClick={()=> onRouteChange('register')} className="f6 link dim black db pointer ">Register</p>
  </div>
</div>
</main>
</article>
  )
  }
   
}
export default Signin