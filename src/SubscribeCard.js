import React, { Component } from 'react'
import img1 from './images/news12.jpg';
import './subscribeCard.css';
import {FaFire } from 'react-icons/fa';
import {BsXDiamondFill } from 'react-icons/bs';
import {GiCrystalize} from 'react-icons/gi';

export class SubscribeCard extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="container">
  <div class="row">
    <div class="col-sm-4">
    <div class="card"  >
  <img class="card-img-top" src={img1} alt="Card image cap"/>
  <div class="card-body">
  <div className="icon">
                               <FaFire></FaFire>
                           </div>
    <h5 class="card-title">Plan 1</h5>
    <p class="card-text"><h3>Starter</h3>
                           <h4>$8.99</h4>
                           <p>per month</p></p>
                           
                        
    <a href="#" class="btn btn-primary">Confirm</a>
  </div>
</div>
    </div>
    <div class="col-sm-4">
    <div class="card" >
  <img class="card-img-top" src={img1}  alt="Card image cap"/>
  <div class="card-body">
  <div className="icon">
                               <GiCrystalize/>
                           </div>
    <h5 class="card-title">Plan 2</h5>
   
    <p class="card-text">
    <h3>Starter</h3>
                           <h4>$8.99</h4>
                           <p>per month</p>
    </p>
    <a href="#" class="btn btn-primary">Confirm</a>
  </div>
</div>
    </div>
    <div class="col-sm-4">
    <div class="card" >
  <img class="card-img-top" src={img1} alt="Card image cap"/>
  <div class="card-body">
  <div className="icon">
                               <BsXDiamondFill />
                           </div>
    <h5 class="card-title">Plan 3</h5>
    
    <p class="card-text">
    <h3>Starter</h3>
                           <h4>$8.99</h4>
                           <p>per month</p>
    </p>
    <a href="#" class="btn btn-primary">Confirm</a>
  </div>
</div>
    </div>
  </div>
</div>

        </React.Fragment>   
        )
    }
}

export default SubscribeCard
