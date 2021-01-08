import React from 'react';
import {FaFire} from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import contact1 from './images/contact1.jpg';
const Subscribe = props =>{
    return (
     <div className="card text-center">
         <div className="overflow">
         <div className="icon">
                              <img src={contact1} alt="img1"/>
                           </div>
             <div className="card-body text-dark">
                 <h4 className="card-title">Card Title</h4>
                 <div className="icon">
                               <FaFire/>
                           </div>
                           
                 <p className="card-text text-secondary">
                     ABC
                     <h3>Starter</h3>
                           <h4>$8.99</h4>
                           <p>per month</p>
                           <ul className="pricing__container-features">
                               <li>100 Transactions</li>
                           </ul>
                 </p>
                 <a href="#" className="btn btn-outlibe-success">Confirm</a>
             </div>

         </div>
     </div>
    );
}

export default Subscribe