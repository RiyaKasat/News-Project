import React, { Component, useState } from 'react'
import axios from 'axios';
import firebase from './firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import AppWithRouterAccess from './AppWithRouterAccess';
import OTPFirebase from './OTPFirebase';
import LoginButtonComp from './LoginButtonComp';





export function SignUpLogin() {

  
      const [fullName, setfullName]= useState('');
      const [email, setemail]= useState('');
      const [password, setpassword]= useState('');

      const addData=()=>{
        axios.post('http://localhost:1337/signupinsert', {fullName: fullName, email:email,password:password});
        
      }

      // const[isLoggedIn, setLogin]=useState(true);
      //  const changeState=() =>
      // {
      //   let button;
      //   if (isLoggedIn) {
      //     button = <LogoutButton onClick={handleLogoutClick} />;
      //   } else {
      //     button = <LoginButton onClick={handleLoginClick} />;
      //   }
      // }

      return (
           
      <div class="d-flex justify-content-center">
      <div class="text-center">
      <button type="button" className="btn btn-sm btn-warning float-right " data-toggle="modal"data-target="#signup" >SignUp<i class="fas fa-user-plus ml-3"></i></button> 
       </div>

       {/* <div class="text-center">
       <button type="button" className="btn btn-sm btn-warning float-right" 
          onClick={handleAuth}  data-toggle="modal" data-target="#login">{isLoggedIn ?'Logout': 'Login'}<i class="fas fa-sign-in-alt ml-3"></i></button>  
           {button}
       </div> */}
    
       
    
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

              <OTPFirebase/>
                <div class="modal-footer d-flex justify-content-center">
                  <button class="btn btn-primary" onClick={addData}>Sign Up</button>
                </div>
                 
                 
              
                </div>
              </div>

             
            </div>

            <LoginButtonComp/>
            
     
  </div>
  
  
      
            
        )
    
}

export default SignUpLogin
