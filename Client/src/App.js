import './App.css';
import logo from './images/logo.png';


import Home from './Home.js';
import Business from './Business.js';
import Sports from './Sports.js';
import Entertainment from './Entertainment.js';
import Science from './Science.js';
import Health from './Health.js';
import Error from './Error.js';
import {Switch,Route} from 'react-router-dom';
import Contact_Us from './Contact_Us';
// import logo1 from './images/DailyNews2..jpg';
import logo1 from './images/ab.jpg';

import Subscribe from './Subscribe';

 import { DropdownSubmenu, NavDropdownMenu} from "react-bootstrap-submenu";
// // import {NavBar, Nav} from 'react-bootstrap';
 import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap';
  import Figure from 'react-bootstrap/Figure' ;
 import FigureImage from 'react-bootstrap/FigureImage';
import FooterM from './FooterM';
import UserInt from './UserInt';
import SignUpLogin from './SignUpLogin.js';
import Alan from './VoiceComponent/Alan';
import Voice from './Voice';
import SearchForm from './SearchForm';
import { useState, useEffect } from 'react';
import axios from 'axios';
import * as ReactBootstrap from 'react-bootstrap';
import AppWithRouterAccess from './AppWithRouterAccess';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import Protected from './Protected';
import AdminLogin from './AdminLogin';
import AdminPage from './AdminPage';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  const [loading,setLoading] =useState(false);
  const loadFunction= async ()=>{
    try{
      const data = await axios
      setLoading(true);
    }catch(e){
      console.log(e)
    }
  }

  useEffect(() => {
    loadFunction();
    
  }, []);
  
  // const history = useHistory();
  // const { oktaAuth, authState } = useOktaAuth();

  // if (authState.isPending) return null;

  // const login = async () => history.push('/login');
  
  // const logout = async () => oktaAuth.signOut();

  // const button = authState.isAuthenticated ? 
  //   <button onClick={logout}>Logout</button> :
  //   <button onClick={login}>Login</button>;

return (
  <>
    <div className="container-fluid ">
    {loading ? "" :(<div class="loading"><ReactBootstrap.Spinner animation="border"/></div>)}
      <div className=" ABC2">
      <div className="   SL"><SignUpLogin/></div>
      
     

      <nav className="navbar ABC1">
      <div className="navbar-brand LOGO" >
    <img src={logo1} alt="News logo" width="80" height="60"/>
    <span class="  mt-4 font-weight-bold  text-warning">  THE NEWS WAVE</span>
    </div>

    <div>
    
    <button type="button" class="btn btn-warning btn-rounded btn-sm " style={{fontFamily:"Georgia", color:"black" }}>
          <Link to="/subscribe" >
    <i class="far fa-newspaper fa-lg"></i> &nbsp; <span class="items_A"> Subscribe </span> </Link></button>
          </div>

        
        
        

        {/* <div class="d-flex justify-content-center">
      <div class="text-center">
       <button type="button" className="btn btn-info float-right" data-toggle="modal"data-target="#signup" >SignUp<i class="fas fa-user-plus ml-3"></i></button> 
       </div>
       <div class="text-center">
       <button type="button" className="btn btn-info float-right" data-toggle="modal" data-target="#login">Login<i class="fas fa-sign-in-alt ml-3"></i></button> 
       </div>

        {/* Sign up */}
        {/*  <div class="modal fade" id="signup">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header text-center">
                  <h4 class="modal-title text-center w-100 font-weight:bold">SignUp</h4>
                  <button type="button" class="close" data-dismiss="modal" >&times;</button>
              </div>
              <div class="modal-body mx-3">

                <div class="md-form mb-5 ">
                <i class="fas fa-user prefix grey-text"></i>
                <input type="text" class="form-control validate" name="name" required />
                <label data-error="wrong" data-success="right">Enter Your Name</label>
                </div>

                <div class="md-form mb-5 needs-validation">
                <i class="fa fa-envelope prefix grey-text"></i>
                <input type="email" class="form-control validate" name="email" required ></input>
                <label data-error="wrong" data-success="right">Enter Your Email Id</label>
                </div>

                <div class="md-form mb-5 needs-validation">
                <i class="fas fa-lock prefix grey-text"></i>
                <input type="password" class="form-control validate" name="password"/>
                <label data-error="wrong" data-success="right" required>Enter Your Password</label>
                </div>

              </div>

                <div class="modal-footer d-flex justify-content-center">
                  <button class="btn btn-primary">Sign Up</button>
                </div>
                </div>
              </div>
            </div> */}


            {/* LOGIN */}
  {/*<div class="modal fade" id="login">
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
  
          
        </div> */}
        
      
      {/* <a href="https://www.facebook.com/" className="nav-item nav-link yt"><i className="fa fa-2x fa-facebook"></i></a>
			<a href="https://twitter.com/?lang=en" className="nav-item nav-link yt"><i className="fa fa-2x fa-twitter "></i></a>
			<a href="https://www.instagram.com/" className="nav-item nav-link yt"><i className="fa fa-2x fa-instagram "></i></a>
			<a href="https://www.youtube.com/" className="nav-item nav-link yt"><i className="fa fa-2x fa-youtube "></i></a>   */}
       
       

       
       <marquee className="marq  items_B" ><strong>BREAKING NEWS:US passes 20 million novel coronavirus cases    
        PM Modi to lay foundation stone of permanent campus of IIM-Sambalpur today. </strong></marquee>
      
      </nav>
     
      
      
        </div> 

          



      {/* NAVIGATION    */}

      <div>
        <nav className="navbar navbar-expand-lg items_A mx-auto A_NAV sticky-top " >
          
        {/* Creating button so that when reduce screen size there will be button in which all menu are will be there */}
    {/* 
  navbar-toggler is used for collapsing menu items
  data-toggler is used to hide section 
  data-target is used as id and same hide should be there in elemnt to hide items */}

            <button type="button" className="navbar-toggler navbar-dark bg bg-light" data-toggle="collapse" data-target="#menu">
              <span className="navbar-toggler-icon  navbar-dark"></span>
            </button>


            




            <div className="collapse navbar-collapse" id="menu">
            <ul className="nav navbar-nav mr-auto items_A">


              {/* drop down with submenu */}
             
               {/* <li className="nav-item dropdown">

                <a href="https://www.google.com/"  className="nav-link dropdown-toggle ml-3  items_A" data-toggle="dropdown">
                  Explore
                </a>

                <ul className="dropdown-menu">
                  <li><a href="https://www.google.com/" className="dropdown-item  items_A">INDIA</a></li>
                  <li><a href="https://www.google.com/" className="dropdown-item  items_A">WORLD</a></li> */}
                  {/* <li><a href="https://www.google.com/" className="dropdown-item">Health</a></li>
                  
                  <li className="dropdown-submenu">
                    <a href="https://www.google.com/" className="dropdown-toggle" data-toggle="dropdown">
                      <span className="nav-label">Contact Us</span>
                    </a>
                    <li class="dropdown-submenu">
            <a class="test" href="#">Another dropdown <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">3rd level dropdown</a></li>
              <li><a href="#">3rd level dropdown</a></li>
            </ul>
          </li>
                  </li>  */}
                {/* </ul>

               </li>  */}





               <li className="nav-item"><Link to="/" className="nav-link active items_A">
    <i class="fas fa-home"></i> Home</Link> </li>
              <li className="nav-item"><Link to="/business" className="nav-link items_A"><i class="fa fa-building" aria-hidden="true"></i> Business</Link> </li>
              <li className="nav-item"><Link to="/sports" className="nav-link items_A"><i class="fas fa-running"></i> Sports</Link> </li>
              
              <li className="nav-item"><Link to="/entertainment" className="nav-link items_A"><i class="fa fa-television" aria-hidden="true"></i> Entertainment</Link> </li> 
              <li className="nav-item"><Link to="/science" className="nav-link items_A"><i class="fas fa-brain"></i> Science</Link> </li> 
              <li className="nav-item"><Link to="/health" className="nav-link items_A"><i class="fa fa-medkit" aria-hidden="true"></i> Health</Link> </li>
               {/* <li className="nav-item"><Link to="/registration" className="nav-link">Registration</Link> </li>  */}
               <li className="nav-item"><Link to="/Contact_Us" className="nav-link items_A"><i class="fa fa-envelope" aria-hidden="true"></i> Contact Us</Link> </li> 
               <li className="nav-item"><Link to="/voice" className="nav-link items_A"><i class="fa fa-microphone" aria-hidden="true"></i>  Voice Assistant</Link> </li> 
       
            </ul>

            {/* Searh Bar */}
              {/* <form className="form-inline  ml-5 my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search"></input>
                <button className="btn btn-outline-primary my-2 my-sm-0 "  type="submit">Search</button>
              </form> */}
              {/* <form class="navbar-form-inline  navbar-right" role="search">
              <input className="form-control mr-sm-2" type="search" placeholder="Search"></input>
                <button className="btn btn-outline-primary my-2 my-sm-0 "  type="submit">Search</button>
          
        </form> */}
        
{/* <SearchForm/> */}
        <form class="input-group w-auto my-auto d-none d-sm-flex">
        <input
          autocomplete="off"
          type="search"
          class="form-control rounded"
          placeholder="Search"
          style={{minWidth: '50px'}}
        />
        <span class="input-group-text border-0 d-none d-lg-flex"
          ><i class="fas fa-search"></i
        ></span>
      </form>


            </div>  

        </nav>
      </div>
{/* 
Content Part */}
      
    <Switch>
    <Route exact path='/' component={Home}/>
      <Route exact path='/business' component={Business}/>
      <Route exact path='/sports' component={Sports}/>
      <Route exact path='/entertainment' component={Entertainment}/>
      <Route exact path='/Science' component={Science}/>
      <Route exact path='/health' component={Health}/> 
      <Route exact path="/Contact_Us" component={Contact_Us} />
       <Route exact path="/Voice" component={Voice} /> 
       <Route exact path="/subscribe" component={Subscribe}/>
     
       <Route exact path="/AdminPage" component={AdminPage}/>
       
       {/* <SecureRoute path='/protected' component={Protected} />
        <Route path='/login' render={() => <AdminLogin config={oktaSignInConfig} />} />
        <Route path='/login/callback' component={LoginCallback} /> */}
      <Route component={Error}/>
      
    </Switch>
    
   
    <FooterM/>
   
    
    <br/><br/>

    </div>
    </>
  );
}

export default App;
