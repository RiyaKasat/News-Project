import React, { Component } from 'react'
import axios from 'axios';
import './Subscribe.css';

function loadScript(src){
    return new Promise((resolve=>{

   
    const script = document.createElement('script')
    script.src=src
    
    script.onload=()=>{
        resolve(true)
    }
    script.onerror=()=>{
        resolve(false)
    }
    document.body.appendChild(script)
}))
}

const __DEV__ = document.domain==='localhost'

export default class Subscribe extends Component {
    state={
        email:'',
        email1:'',
        email2:''
        
    }

    //handle input
handleEmail=(e)=>{
    this.setState({
        email:e.target.value
    })
}

handleEmail1=(e)=>{
    this.setState({
        email1:e.target.value
    })
}

handleEmail2=(e)=>{
    this.setState({
        email2:e.target.value
    })
}

formSubmit=(e)=>{
e.preventDefault();
let data={
    email:this.state.email,

}
axios.post('/api/forma',data)
.then(res=>{
    this.setState({
        
        sent:true,

    }.this.resetform())
    }).catch(()=>{
        console.log('mesaage not sent');
    })

}

formSubmit1=(e)=>{
    e.preventDefault();
    let data={
        email1:this.state.email1,
    
    }
    axios.post('/api/formb',data)
    .then(res=>{
        this.setState({
            
            sent:true,
    
        }.this.resetform())
        }).catch(()=>{
            console.log('mesaage not sent');
        })
    
    }

    
formSubmit2=(e)=>{
    e.preventDefault();
    let data={
        email2:this.state.email2,
    
    }
    axios.post('/api/formc',data)
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
        email:''
    })

    setTimeout(()=>{
        this.setState({
            sent:false
        })
    },3000)
}

// nayan





    render() {
        async function displayRazorpay(){
            const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
            if(!res){
                alert("Payment gateway failed, check if you are online")
                return
            }
            const data= await fetch('http://localhost:1337/razorpay',{method:'POST'}).then((t)=>t.json())
            console.log(data);
        
            const options = {
                "key": __DEV__ ? 'rzp_test_CZR9V8wiTmNPW6' : 'Api production', // Enter the Key ID generated from the Dashboard
                // "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                // "currency": "INR",
                currency:data.currency,
                amount:data.amount.toString(),
                order_id:data.id,
                "name": "Wave Subscription",
                "description": "Subcribe to Wave to receive daily updates of the fields you like",
                "image": "http://localhost:1337/show",
                 //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
                "prefill": {
                    "name": "Nayan Deosarkar",
                    "email": "gaurav.kumar@example.com",
                    "contact": "9999999999"
                },
                "notes": {
                    "address": "Razorpay Corporate Office"
                },
                "theme": {
                    "color": "#3399cc"
                }
            };
            const paymentObject = new window.Razorpay(options);
            paymentObject.open()
        }
        async function displayRazorpay1(){
            const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
            if(!res){
                alert("Payment gateway failed, check if you are online")
                return
            }
            const data= await fetch('http://localhost:1337/razorpay1',{method:'POST'}).then((t)=>t.json())
            console.log(data);
        
            const options = {
                "key": __DEV__ ? 'rzp_test_CZR9V8wiTmNPW6' : 'Api production', // Enter the Key ID generated from the Dashboard
                // "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                // "currency": "INR",
                currency:data.currency,
                amount:data.amount,
                order_id:data.id,
                "name": "Wave Subscription",
                "description": "Subcribe to Wave to receive daily updates of the fields you like",
                "image": "http://localhost:1337/show",
                 //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
                "prefill": {
                    "name": "Nayan Deosarkar",
                    "email": "gaurav.kumar@example.com",
                    "contact": "9999999999"
                },
                "notes": {
                    "address": "Razorpay Corporate Office"
                },
                "theme": {
                    "color": "#3399cc"
                }
            };
            const paymentObject = new window.Razorpay(options);
            paymentObject.open()
        }
        async function displayRazorpay2(){
            const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
            if(!res){
                alert("Payment gateway failed, check if you are online")
                return
            }
            const data= await fetch('http://localhost:1337/razorpay2',{method:'POST'}).then((t)=>t.json())
            console.log(data);
        
            const options = {
                "key": __DEV__ ? 'rzp_test_CZR9V8wiTmNPW6' : 'Api production', // Enter the Key ID generated from the Dashboard
                // "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                // "currency": "INR",
                currency:data.currency,
                amount:data.amount,
                order_id:data.id,
                "name": "Wave Subscription",
                "description": "Subcribe to Wave to receive daily updates of the fields you like",
                "image": "http://localhost:1337/show",
                 //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
                "prefill": {
                    "name": "Nayan Deosarkar",
                    "email": "gaurav.kumar@example.com",
                    "contact": "9999999999"
                },
                "notes": {
                    "address": "Razorpay Corporate Office"
                },
                "theme": {
                    "color": "#3399cc"
                }
            };
            const paymentObject = new window.Razorpay(options);
            paymentObject.open()
        }
        return (
             <div class="container">
            <div class="container" className="ABCD">
            
            </div>
            <br></br>
            <h3 class="text-danger">GET UNLIMITED ACCESS TO QUALITY JOURNALISM.</h3>
            <h2 class="text-secondary"><b>Subscribe to The News Hub e-paper</b></h2>
            <h4 class="text-dark">Get your copy delivered to you in your <b>email,</b> on <b>WhatsApp</b> or access online or via the <b>App</b>.

</h4>
<br></br>
<br></br>
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-12 ">
                    <div class="card bg bg-warning">
                        <div class="card-body">

                            <h3 class="card-title"><b>MONTHLY PLAN</b></h3>
                            <h1><b>₹ 149</b></h1>
                            <hr></hr>
                            <p>SUBSCRIBE AND GET ACCESS TO</p>

                            <h4><i class="fa fa-check text-success" aria-hidden="true"></i> News Hub ePaper for a month</h4>
                            <br></br>
                            <br></br>
                            <form onSubmit={this.formSubmit}>
                               Enter The Email <input type="email" value={this.state.email} onChange={this.handleEmail} required placeholder="Enter the Email Id"></input>
                                <button href="#!" type="submit" class="btn btn-danger  w-50 mx-auto">Proceed To Subscribe</button>

                            </form>
                            <a className="App-link" onClick={displayRazorpay} target="_blank" rel="noopener noreferrer" class="btn btn-primary">Plan 1</a>
                            <br></br>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="card bg bg-light">
                        <div class="card-body">
                            <h3 class="card-title"><b>QUARTERLY PLAN</b></h3>
                            <h1><b>₹399</b></h1>
                            <hr></hr>
                            <p>SUBSCRIBE AND GET ACCESS TO</p>

                            <h4><i class="fa fa-check text-success" aria-hidden="true"></i> News Hub Paper for 3 months</h4>
                            <h4><i class="fa fa-check text-success" aria-hidden="true"></i> 1 month of ePaper archive</h4>
                            <br></br>
                            <form onSubmit={this.formSubmit1}>
                               Enter The Email <input type="email" value={this.state.email1} onChange={this.handleEmail1} required placeholder="Enter the Email Id"></input>
                                <button href="#!" type="submit" class="btn btn-danger w-50 mx-auto">Proceed To Subscribe</button>

                            </form>
                            <a className="App-link" onClick={displayRazorpay1} target="_blank" rel="noopener noreferrer" class="btn btn-primary">Plan 2</a>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="card bg bg-info">
                        <div class="card-body">
                            <h3 class="card-title"><b>ANNUAL PLAN</b></h3>
                            <h1><b>₹1399</b></h1>
                            <hr></hr>
                            <p>SUBSCRIBE AND GET ACCESS TO</p>

                            <h4><i class="fa fa-check text-success" aria-hidden="true"></i> News Hub ePaper for 12 months</h4>
                            <h4><i class="fa fa-check text-success" aria-hidden="true"></i> 12 month of ePaper archive</h4>
                            <form onSubmit={this.formSubmit2}>
                               Enter The Email <input type="email" value={this.state.email2} onChange={this.handleEmail2} required placeholder="Enter the Email Id"></input>
                                <button href="#!" type="submit" class="btn btn-danger  w-50 mx-auto">Proceed To Subscribe</button>

                            </form>
                            <a className="App-link" onClick={displayRazorpay2} target="_blank" rel="noopener noreferrer" class="btn btn-primary">Plan 3</a>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
            </div>
        </div>

        )
    }
}