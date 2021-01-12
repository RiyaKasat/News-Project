 import React, { Component } from 'react';
import ContactFooter from './ContactFooter';
import axios from 'axios';
import './Contact_Us.css';
// import { response } from 'express';
 


export class Contact extends Component {
    constructor()
    {   super()
        this.state = {
            firstName:'',
            lastName:'',
            email:'',
            message:''
        }
        this.changefirstName = this.changefirstName.bind(this)
        this.changelastName = this.changelastName.bind(this)
        this.changeemail = this.changeemail.bind(this)
        this.changemessage = this.changemessage.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changefirstName(event)
    {
        this.setState({
            firstName:event.target.value
        })
    }
    changelastName(event)
    {
        this.setState({
            lastName:event.target.value
        })
    }
    changeemail(event)
    {
        this.setState({
            email:event.target.value
        })
    }
    changemessage(event)
    {
        this.setState({
            message:event.target.value
        })
    }
    onSubmit(event)
    {
        event.preventDefault()

        const registered = {
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            email:this.state.email,
            message:this.state.message
        }
        axios.post('http://localhost:1337/app/contactus',registered)
        .then(response => console.log(response.data))

        this.setState({
            firstName:'',
            lastName:'',
            email:'',
            message:''
        })
    }
   
    render() {
        return (
       

        <section class="Material-contact-section section-padding section-dark">
        <div class="container">
           <div class="container" className="A">
            
            </div>
            <div class="row">
             
                
               
                <div class="col-md-6 mt-5 contact-widget-section2 wow animated fadeInRight" data-wow-delay=".2s">

{/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#eee' }}> */}
<div className="container-sm  pt-3" style={{maxWidth:'500px'}}>
                    {/* <h5 class="card-header" style={{ textAlign: 'center', backgroundColor: 'white' }}>Love to Hear From You</h5> */}
                    <div class="card-body" >
                    <form onSubmit={this.onSubmit}>
                <h3 style={{color:"blue"}}><b>Contact Us</b></h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" onChange={this.changefirstName} value={this.state.firstName} required />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" onChange={this.changelastName} value={this.state.lastName}  required/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={this.changeemail} value={this.state.email}   required />
                </div>

                <div className="form-group">
                    <label>Your message here</label>
                    <textarea rows="4" className="form-control" placeholder="Write us" onChange={this.changemessage} value={this.state.message} required />
                </div>

                {/* <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" required />
                </div> */}

                <button type="submit" className="btn btn-primary btn-block">Get Callback</button>
                {/* <p className="forgot-password text-center">
                    Already registered <a href="#">sign in?</a>
                </p> */}
            </form>

                        
                    </div>
           
            </div>

                </div>

                <div class="col-md-6 mt-5 contact-widget-section2 wow animated fadeInLeft" data-wow-delay=".2s">
                <iframe src="https://maps.google.com/maps?q=pune&t=k&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height={538} frameBorder={0} style={{border: 0}} allowFullScreen data-aos="fade-left" data-aos-duration={3000} />
                </div>

                {/* <div style="width: 100%"><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=LTI%20Pune%20Hinjewadi+()&t=&z=14&ie=UTF8&iwloc=B&output=embed"><a href="https://www.maps.ie/route-planner.htm">Journey Planner
                </a></div> */}


            </div>
        </div>

        <section>
           <div>
            <ContactFooter/>
            </div>
          </section>
       
       
      </section>
     
     
        )
    }
}

export default Contact


