 import React, { Component } from 'react';


export class Contact extends Component {
    
   
    render() {
        return (
       

        <section class="Material-contact-section section-padding section-dark">
        <div class="container">
           
            <div class="row">
             
                
               
                <div class="col-md-6 mt-5 contact-widget-section2 wow animated fadeInRight" data-wow-delay=".2s">

{/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#eee' }}> */}
<div className="container-sm  pt-3" style={{maxWidth:'500px'}}>
                    {/* <h5 class="card-header" style={{ textAlign: 'center', backgroundColor: 'white' }}>Love to Hear From You</h5> */}
                    <div class="card-body" >
                    <form >
                <h3>Contact Us</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" required />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" required/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" required />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" required />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-center">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>

                        
                    </div>
           
            </div>

                </div>

                <div class="col-md-6 mt-5 contact-widget-section2 wow animated fadeInLeft" data-wow-delay=".2s">
                <iframe src="https://maps.google.com/maps?q=warsaw&t=k&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height={538} frameBorder={0} style={{border: 0}} allowFullScreen data-aos="fade-left" data-aos-duration={3000} />
                </div>


            </div>
        </div>
      </section>
        )
    }
}

export default Contact




// export class Contact extends Component {

//     constructor(props)
//     {
//         super(props);
//         this.state = {
//             username: '',
//             roll_no : null,
//             errormessage: ''
//         };
//     }
    
//     myChangeHandler = (event) => {

//         let nam = event.target.name;
//         let val = event.target.value;
//         let err = '';
//         if(nam === "username"){
//             if(val.length == 0){
//                 err = <strong> Name should not be empty </strong>
//             }
//         }

//         if(nam === "roll_no"){
//             if(val != "" && !Number(val)){
//                 err = <strong> Your roll_no must be a number </strong>
//             }
//         }
//         this.setState({errormessage: err});
//         this.setState({[nam]: val});
//     }

//     render() {
//         return (
//             <div className="form">
//             <form style={{width:'50%',margin:'auto',padding:'5%',backgroundColor:'lightgray', borderRadius:'10px'}}>
            

// <h1>Hello {this.state.username} </h1> 
// <p>Register your name:</p> 
// <input 
// type='text' //form type  
// name='username'  
// onChange={this.myChangeHandler} 
// /> 
// {this.state.errormessage} 
// <p>Enter your roll_no:</p> 
// <input 
// type='text' //form type  
// name='roll_no'  
// onChange={this.myChangeHandler} 
// /> 
// <h5>Your roll number {this.state.roll_no}</h5>
// </form>  
               
//             </div>
//         );
//     }
// }


