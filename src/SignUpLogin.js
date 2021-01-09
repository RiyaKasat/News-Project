import React, { Component } from 'react'
import axios from 'axios';
export class SignUpLogin extends Component {
    constructor(props){
        super(props);
        this.state={
         name:"",
         email:"",
         password:""
        }
    
        this.validateForm= this.validateForm.bind(this);
        this.onChangeInput=this.onChangeInput.bind(this);
      }
    
      validateForm(){
        const name=  this.state.name;
        const email=this.state.email;
        const password=this.state.password;
        console.log("----validating form");

        //constructing formdata
        var signupform={
            name : name,
            email:email,
            password:password
        }

        //post to server
        axios.post('http://localhost/3003/newssignup', signupform)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      }

      onChangeInput(event)
      {
        console.log('----onchange');
        const name= event.target.name;
        const value=event.target.value;
        this.setState({[name]:value});

        const email= event.target.email;
        const value1=event.target.value;
        this.setState({[email]:value1});

        const password= event.target.password;
        const value2=event.target.value;
        this.setState({[password]:value2});
      }


    render() {
        return (
           
                 <div class="d-flex justify-content-center">
      <div class="text-center">
       <button type="button" className="btn btn-sm btn-warning float-right " data-toggle="modal"data-target="#signup" >SignUp<i class="fas fa-user-plus ml-3"></i></button> 
       </div>
       <div class="text-center">
       <button type="button" className="btn btn-sm btn-warning float-right" data-toggle="modal" data-target="#login">Login<i class="fas fa-sign-in-alt ml-3"></i></button> 
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
                <input type="text" class="form-control validate" value={this.state.name} name="name" required onChange={(e)=>this.onChangeInput(e)} />
                <label data-error="wrong" data-success="right">Enter Your Name</label>
                </div>

                <div class="md-form mb-5 needs-validation">
                <i class="fa fa-envelope prefix grey-text"></i>
                <input type="email" class="form-control validate" value={this.state.email} name="email" required onChange={(e)=>this.onChangeInput(e)}></input>
                <label data-error="wrong" data-success="right">Enter Your Email Id</label>
                </div>

                <div class="md-form mb-5 needs-validation">
                <i class="fas fa-lock prefix grey-text"></i>
                <input type="password" class="form-control validate" value={this.state.password} name="password" onChange={(e)=>this.onChangeInput(e)}/>
                <label data-error="wrong" data-success="right" required>Enter Your Password</label>
                </div>

              </div>

                <div class="modal-footer d-flex justify-content-center">
                  <button class="btn btn-primary" onClick={this.validateForm}>Sign Up</button>
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
}

export default SignUpLogin
