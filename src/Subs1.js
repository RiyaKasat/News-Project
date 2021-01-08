import React, { Component } from 'react'
import img1 from './images/news12.jpg';
import './subscribeCard.css';
import {FaFire } from 'react-icons/fa';
import {BsXDiamondFill } from 'react-icons/bs';
import {GiCrystalize} from 'react-icons/gi';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

export class Subs1 extends Component {
    render() {
        return (
           
                <div>
                     <div class="container">
  <div class="row">
    <div class="col-sm-4">
                <Card className="A">
        <CardImg top width="100%" src={img1} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Plan 1</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>
          <CardText><h3>Starter</h3>
                           <h4>$8.99</h4>
                           <p>per month</p></CardText>
          <Button>Confirm</Button>
        </CardBody>
      </Card>
      </div>
      <div class="col-sm-4">
      <Card>
        <CardImg top width="100%" src={img1} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Plan 2</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>
          <CardText><h3>Starter</h3>
                           <h4>$8.99</h4>
                           <p>per month</p></CardText>
          <Button>Confirm</Button>
        </CardBody>
      </Card>
</div>
      <div class="col-sm-4">
      <Card>
        <CardImg top width="100%" src={img1} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Plan 3</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>
          <CardText><h3>Starter</h3>
                           <h4>$8.99</h4>
                           <p>per month</p></CardText>
          <Button>Confirm</Button>
        </CardBody>
      </Card>
      </div>
      </div>
   </div>
</div>

//                  <div class="container">
//    <div class="row">
//     <div class="col-sm-4">
//     <div class="card"  >
//   <img class="card-img-top" src={img1} alt="Card image cap"/>
//   <div class="card-body">
//   <div className="icon">
//                                <FaFire></FaFire>
//                            </div>
//     <h5 class="card-title">Plan 1</h5>
//     <p class="card-text"><h3>Starter</h3>
//                            <h4>$8.99</h4>
//                            <p>per month</p></p>
                           
                        
//     <a href="#" class="btn btn-primary">Confirm</a>
//   </div>
// </div>
//     </div>
//     <div class="col-sm-4">
//     <div class="card" >
//   <img class="card-img-top" src={img1}  alt="Card image cap"/>
//   <div class="card-body">
//   <div className="icon">
//                                <GiCrystalize/>
//                            </div>
//     <h5 class="card-title">Plan 2</h5>
   
//     <p class="card-text">
//     <h3>Starter</h3>
//                            <h4>$8.99</h4>
//                            <p>per month</p>
//     </p>
//     <a href="#" class="btn btn-primary">Confirm</a>
//   </div>
// </div>
//     </div>
//     <div class="col-sm-4">
//     <div class="card" >
//   <img class="card-img-top" src={img1} alt="Card image cap"/>
//   <div class="card-body">
//   <div className="icon">
//                                <BsXDiamondFill />
//                            </div>
//     <h5 class="card-title">Plan 3</h5>
    
//     <p class="card-text">
//     <h3>Starter</h3>
//                            <h4>$8.99</h4>
//                            <p>per month</p>
//     </p>
//     <a href="#" class="btn btn-primary">Confirm</a>
//   </div>
// </div>
      

       
        )
    }
}

export default Subs1
