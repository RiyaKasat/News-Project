import React, { Component, useState } from 'react'
import axios from 'axios';
import swal from 'sweetalert';
import SweetAlert from 'sweetalert2-react';



function LoginButton(props) {
  return (
    <button className="btn btn-sm btn-warning float-right" data-toggle="modal" data-target="#login"  onClick={props.onClick}>
      Login
      <i class="fas fa-sign-in-alt ml-3"></i>
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button className="btn btn-sm btn-warning float-right" data-toggle="modal"  data-target="#logout"  onClick={props.onClick}>
      Logout
      <i class="fas fa-sign-in-alt ml-3"></i>
    </button>
  );
}
export function SignUpLogin() {
 
      const [fullName, setfullName]= useState('');
      const [email, setemail]= useState('');
      const [password, setpassword]= useState('');

      const addData=()=>{
        axios.post('http://localhost:1337/signupinsert', {fullName: fullName, email:email,password:password});
        
      }


      // const isLoggedIn = this.state.isLoggedIn;
      // let button;
      // if (isLoggedIn) {
      //   button = <LogoutButton onClick={this.handleLogoutClick} />;
      // } else {
      //   button = <LoginButton onClick={this.handleLoginClick} />;
      // }
     
        return (
           
                 <div class="d-flex justify-content-center">
      <div class="text-center">
       <button type="button" className="btn btn-sm btn-warning float-right " data-toggle="modal"data-target="#signup" >SignUp<i class="fas fa-user-plus ml-3"></i></button> 
       </div>
       <div class="text-center">
       {/* <button type="button" className="btn btn-sm btn-warning float-right" 
          onClick={this.changeState} data-toggle="modal" data-target="#login"><i class="fas fa-sign-in-alt ml-3"></i></button>  */}
          {/* {button} */}
       </div>

        {/* Sign up */}
        <div class="modal fade" id="signup">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header text-center">
                  <h4 class="modal-title text-center w-100 font-weight:bold">SignUp</h4>
                  <button type="button" class="close" data-dismiss="modal" >&times;</button>
              </div>
              <div class="modal-body mx-3">

                <div class="md-form mb-5 ">
                <i class="fas fa-user prefix grey-text"></i>
                <input type="text" class="form-control validate"  name="name" required  onChange={(e)=>{setfullName(e.target.value)}} />
                <label data-error="wrong" data-success="right">Enter Your Name</label>
                </div>

                <div class="md-form mb-5 needs-validation">
                <i class="fa fa-envelope prefix grey-text"></i>
                <input type="email" class="form-control validate"  name="email" required onChange={(e)=>{setemail(e.target.value)}}></input>
                <label data-error="wrong" data-success="right">Enter Your Email Id</label>
                </div>

                <div class="md-form mb-5 needs-validation">
                <i class="fas fa-lock prefix grey-text"></i>
                <input type="password" class="form-control validate"  name="password" onChange={(e)=>{setpassword(e.target.value)}}/>
                <label data-error="wrong" data-success="right" required>Enter Your Password</label>
                </div>

              </div>

                <div class="modal-footer d-flex justify-content-center">
                  <button class="btn btn-primary" onClick={addData}>Sign Up</button>
                </div>
                </div>
              </div>
            </div>

      {/*Logout */}
      <div class="modal fade" id="logout">
      <div class="modal-dialog">
         
      <div class="modal-content">
          <div class=" text-center">
            <h3 class="modal-title w-100 dark-grey-text font-weight-bold"><i class="fas fa-user prefix grey-text"></i>
            You have successfully logged out
            </h3>
            <button type="button" class="close" data-dismiss="modal" >&times;</button>
          </div>
      </div>
     
            </div> 
            

            </div>


            {/* LOGIN */}
  <div class="modal fade" id="login">
  <div class="modal-dialog">
    <div class="modal-content">
      
      <div class="modal-header text-center">
        <h3 class="modal-title w-100 dark-grey-text font-weight-bold">Login</h3>
        <button type="button" class="close" data-dismiss="modal" >&times;</button>
      </div>

      <div class="modal-body mx-4">
        <div class="md-form">
          <input type="email" class="form-control validate"/>
          <label data-error="wrong" data-success="right">Enter Your Email Id</label>
        </div>

        <div class="md-form">
          <input type="password" class="form-control validate"/>
          <label data-error="wrong" data-success="right">Enter Your Password</label>
          <p class="font-small blue-text d-flex justify-content-end"><a href="#" class="blue-text ml-1">Forgot Password?</a></p>
        </div>

        <div class="text-center mb-3">
          <button type="button" class="btn btn-primary btn-block z-depth-1a">Login</button>
        </div>
        <p class="font-small dark-grey-text d-flex justify-content-center">Or Login with:</p>

        <div class="row my-3 justify-content-center">
          <a href="https://www.facebook.com/" type="button" class="btn btn-primary z-depth-1a"><i class="fab fa-facebook-f text-center"></i></a>
          <a href="https://twitter.com/login" type="button" class="btn btn-purple z-depth-1a"><i class="fab fa-twitter text-center"></i></a>
         
        </div>
      </div>
    </div>
    </div> 
  </div>
  
          
        </div>
            
        )
    
}

export default SignUpLogin
