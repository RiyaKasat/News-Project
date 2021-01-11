import React, { Component } from 'react';
import ContactFooter from './ContactFooter.js';
import axios from 'axios';
import './Contact_Us.css';
 
export class Contact_Us extends Component {
   
    state={
        email:'',
        firstname:'',
        lastname:'',
        message:''
        
        
    }

    //handle input
handleEmail=(e)=>{
    this.setState({
        email:e.target.value
    })
}

handleFirstName=(e)=>{
    this.setState({
        firstname:e.target.value
    })
}

handleLastname=(e)=>{
    this.setState({
        lastname:e.target.value
    })
}

handleMessage=(e)=>{
    this.setState({
        message:e.target.value
    })
}

ContactformSubmit=(e)=>{
    e.preventDefault();
    let data={
        email:this.state.email,
        firstname:this.state.firstname,
        lastname:this.state.lastname,
        message:this.state.message,
    
    }
axios.post('/api/contactus',data)
    .then(res=>{
        this.setState({
            
            sent:true,
    
        }.this.resetform())
        }).catch(()=>{
            console.log('mesaage not sent');
        })
    
    }

    
    resetForm=()=>{
        this.setState({
            email:'',
            firstname:'',
            lastname:'',
            message:''

        })
    
        setTimeout(()=>{
            this.setState({
                sent:false
            })
        },3000)
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
                        <form  onSubmit={this.ContactformSubmit}>
                    <h3 style={{color:"blue"}}><b>Contact Us</b></h3>
    
                    <div className="form-group">
                        <label>First name</label>
                        <input type="text" className="form-control" value={this.state.firstname} onChange={this.handleFirstName} name="firstname" placeholder="First name" required />
                    </div>
    
                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" className="form-control" value={this.state.lastname} onChange={this.handleLastname} name="lasttname" placeholder="Last name" required/>
                    </div>
    
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" name="email" value={this.state.email} onChange={this.handleEmail} placeholder="Enter email" required />
                    </div>
    
                    <div className="form-group">
                        <label>Your message here</label>
                        <textarea rows="4" className="form-control" name="message" value={this.state.message} onChange={this.handleMessage} placeholder="Write us" required />
                    </div>
    
                    {/* <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" required />
                    </div> */}
    
                    <button type="submit" className="btn btn-primary btn-block">Send</button>
                    {/* <p className="forgot-password text-center">
                        Already registered <a href="#">sign in?</a>
                    </p> */}
                </form>
    
                            
                        </div>
               
                </div>
    
                    </div>
    
                    <div class="col-md-6 mt-5 contact-widget-section2 wow animated fadeInLeft" data-wow-delay=".2s">
                    <iframe src="https://maps.google.com/maps?q=warsaw&t=k&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height={538} frameBorder={0} style={{border: 0}} allowFullScreen data-aos="fade-left" data-aos-duration={3000} />
                    </div>
    
    
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

export default Contact_Us
