import React, { Component } from 'react'
import firebase from './firebase';


export class OTPFirebase extends Component {
    
        state={
         
         mobileno:"",
         
        }

     
      
  setUpRecaptcha=()=>{
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      'size': 'normal',
      'callback': function(response)  {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.onSignInSubmit();
      },
    });
    
  };

  onSignInSubmit=(event)=>{
    // getPhoneNumberFromUserInput()
    event.preventDefault();
     this.setUpRecaptcha();
    const phoneNumber =  (this.state.mobileno);
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;

      const code = window.prompt("Enter the OTP");
confirmationResult.confirm(code).then((result) => {
  // User signed in successfully.
  const user = result.user;

  console.log("User is signed in")
  // ...
}).catch((error) => {
  // User couldn't sign in (bad verification code?)
  // ...
});
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
    });

  }

  handleChange =(event)=>
  {
    this.setState({mobileno: event.target.value})
  }
  render() {
    
    return (
        
      <div className="App">
      <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-sm-6 text-left">
         
          <form onSubmit={this.onSignInSubmit}>
              <div id="recaptcha-container"></div>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Phone Number</label>
          {/* <input type="text"   onChange={this.handleChange}required className="form-control"/> */}
          <input type="text" placeholder="Mobile No (+91) format" value={this.mobileno} onChange={this.handleChange} required className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary mx-auto">Click for OTP</button>
          </form>
        </div>
    </div>
    </div>
    </div>
    )
  }
}





export default OTPFirebase
