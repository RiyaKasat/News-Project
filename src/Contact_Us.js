import React, { Component } from 'react';
import ContactFooter from './ContactFooter';
 
import './Contact_Us.css'

class Contact_Us extends Component {
    
   
    render() {
        return (
            <section class="Material-contact-section section-padding section-dark">
            <div className="jumbotron-fluid" >
            <div class="container" className="A">
             
               
               
                 
           
           </div>
           </div>

        
        <div class="container">
           
            <div class="row">
             
                
               
                <div class="col-md-6 mt-5 contact-widget-section2 wow animated fadeInRight" data-wow-delay=".2s">

{/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#eee' }}> */}
<div className="container-sm  pt-3" style={{maxWidth:'500px'}}>
                    {/* <h5 class="card-header" style={{ textAlign: 'center', backgroundColor: 'white' }}>Love to Hear From You</h5> */}
                    <div class="card-body" >
                    <form >
                <h3 style={{color:"blue"}}><b>Contact Us</b></h3>

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
                    <label>Your message here</label>
                    <textarea rows="4" className="form-control" placeholder="Write us" required />
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


// import React, { Component } from 'react';
// // import '/Contact.css';

// export class Contact extends Component {
//     render() {
//         return (
  
// <div class="container animated fadeIn">

//   <div class="row">
//     <h1 class="header-title"> Contact </h1>
//     <hr/>
//     <div class="col-sm-12" id="parent">
//     	<div class="col-sm-6">
//     	<iframe width="100%" height="320px;" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJaY32Qm3KWTkRuOnKfoIVZws&key=AIzaSyAf64FepFyUGZd3WFWhZzisswVx2K37RFY" allowfullscreen></iframe>
//     	</div>

//     	<div class="col-sm-6">
//     		<form >
	
// 		        <div class="form-group">
// 		          <input type="text" class="form-control" id="name" name="nm" placeholder="Name" required="" autofocus=""/>
// 		        </div>
		    
		    
// 		        <div class="form-group form_left">
// 		          <input type="email" class="form-control" id="email" name="em" placeholder="Email" required=""/>
// 		        </div>
		    
// 		      <div class="form-group">
// 		           <input type="text" class="form-control" id="phone" onkeypress="return event.charCode >= 48 && event.charCode <= 57" maxlength="10" placeholder="Mobile No." required=""/>
// 		      </div>
// 		      <div class="form-group">
// 		      <textarea class="form-control textarea-contact" rows="5" id="comment" name="FB" placeholder="Type Your Message/Feedback here..." required=""></textarea>
// 		      <br/>
// 	      	  <button class="btn btn-default btn-send"> <span class="glyphicon glyphicon-send"></span> Send </button>
// 		      </div>
//      		</form>
//     	</div>
//     </div>
//   </div>
  

//   <div class="container second-portion">
// 	<div class="row">
      
//     	<div class="col-xs-12 col-sm-6 col-lg-4">
// 			<div class="box">							
// 				<div class="icon">
// 					<div class="image"><i class="fa fa-envelope" aria-hidden="true"></i></div>
// 					<div class="info">
// 						<h3 class="title">MAIL & WEBSITE</h3>
// 						<p>
// 							<i class="fa fa-envelope" aria-hidden="true"></i> &nbsp gondhiyahardik6610@gmail.com
// 							<br/>
// 							<br/>
// 							<i class="fa fa-globe" aria-hidden="true"></i> &nbsp www.hardikgondhiya.com
// 						</p>
					
// 					</div>
// 				</div>
// 				<div class="space"></div>
// 			</div> 
// 		</div>
			
//         <div class="col-xs-12 col-sm-6 col-lg-4">
// 			<div class="box">							
// 				<div class="icon">
// 					<div class="image"><i class="fa fa-mobile" aria-hidden="true"></i></div>
// 					<div class="info">
// 						<h3 class="title">CONTACT</h3>
//     					<p>
// 							<i class="fa fa-mobile" aria-hidden="true"></i> &nbsp (+91)-9624XXXXX
// 							<br/>
// 							<br/>
// 							<i class="fa fa-mobile" aria-hidden="true"></i> &nbsp  (+91)-756706XXXX
// 						</p>
// 					</div>
// 				</div>
// 				<div class="space"></div>
// 			</div> 
// 		</div>
			
//         <div class="col-xs-12 col-sm-6 col-lg-4">
// 			<div class="box">							
// 				<div class="icon">
// 					<div class="image"><i class="fa fa-map-marker" aria-hidden="true"></i></div>
// 					<div class="info">
// 						<h3 class="title">ADDRESS</h3>
//     					<p>
// 							 <i class="fa fa-map-marker" aria-hidden="true"></i> &nbsp 15/3 Junction Plot 
// 							 "Shree Krishna Krupa", Rajkot - 360001.
// 						</p>
// 					</div>
// 				</div>
// 				<div class="space"></div>
// 			</div> 
// 		</div>		    
		
	    
// 	</div>
// </div>

// </div>
            
//         );
//     }
// }

 //export default Contact_Us


