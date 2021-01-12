import React, { Component } from 'react'

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
export class LoginButtonComp extends Component {

    constructor(props){
        super(props);
        this.state={
         name:"",
         email:"",
         password:"",
         mobileno:"",
         
        }

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
         this.state = {isLoggedIn: false};
       
      }



      handleLoginClick() {
        this.setState({isLoggedIn: true});
      }
    
      handleLogoutClick() {
        this.setState({isLoggedIn: false});
      }



    render() {
      

        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
          button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
          button = <LoginButton onClick={this.handleLoginClick} />;
        }
        return (
            <div>
            <div class="text-center">
            {/* <button type="button" className="btn btn-sm btn-warning float-right" 
               onClick={this.changeState} data-toggle="modal" data-target="#login"><i class="fas fa-sign-in-alt ml-3"></i></button>  */}
               {button}
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
}

export default LoginButtonComp
