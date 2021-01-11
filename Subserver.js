
var express= require('express');
const path= require('path');
const Razorpay=require('razorpay');
const shortid=require('shortid');
const cors = require('cors');
const bodyParser=require('body-parser');
const nodemailer=require('nodemailer');
const SMTPTransport = require('nodemailer/lib/smtp-transport');
const app = express();

app.use(cors());

const razorpay= new Razorpay({
    key_id:'rzp_test_CZR9V8wiTmNPW6',
    key_secret:'2NkDKmlV4ZmXENN999XMYMUr'
});

app.get('/show',(req,res)=>{
    res.sendFile(path.join(__dirname,'/dist/show.txt'))
})

app.post('/razorpay',async(req,res)=>{
    const payment_capture=1
    const amount= 149
    

    const options ={
        amount: (amount*100).toString(),
        
        currency: "INR",
        receipt: shortid.generate(),
        payment_capture
    }
    
 try{
  const response = await  razorpay.orders.create(options)
    console.log(response)
    res.json({
        id:response.id,
        currency:response.currency,
        amount:response.amount,
        
    })
 }catch(err){
     console.log(err);
 }

})

app.post('/razorpay1',async(req,res)=>{
    const payment_capture=1
    const amount= 399
    

    const options ={
        amount: (amount*100).toString(),
        
        currency: "INR",
        receipt: shortid.generate(),
        payment_capture
    }
    
 try{
  const response = await  razorpay.orders.create(options)
    console.log(response)
    res.json({
        id:response.id,
        currency:response.currency,
        amount:response.amount,
        
    })
 }catch(err){
     console.log(err);
 }

})

app.post('/razorpay2',async(req,res)=>{
    const payment_capture=1
    const amount= 1399
    

    const options ={
        amount: (amount*100).toString(),
        
        currency: "INR",
        receipt: shortid.generate(),
        payment_capture
    }
    
 try{
  const response = await  razorpay.orders.create(options)
    console.log(response)
    res.json({
        id:response.id,
        currency:response.currency,
        amount:response.amount,
        
    })
 }catch(err){
     console.log(err);
 }

})

//gg code 
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));


// app.get('/',()=>{
//     resizeBy.send('Welcome To My Form')
// })

app.post('/api/forma',(req,res)=>{
    let data=req.body
    
let transporter = nodemailer.createTransport({
    service: 'gmail',
    port:465,
    auth: {
      user: 'testprojectlti@gmail.com',
      pass: 'LTI@2021'
    }
  });

  var mailOptions = {
    from: 'testprojectlti@gmail.com',
    to: data.email,
    subject: 'NEWS HUB SUBSCRIPTION',
    text: 'MONTLY PLAN'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  })
  SMTPTransport.close();

})
  


app.post('/api/formb',(req,res)=>{
    let data=req.body
    
let transporter = nodemailer.createTransport({
    service: 'gmail',
    port:465,
    auth: {
      user: 'testprojectlti@gmail.com',
      pass: 'LTI@2021'
    }
  });

  var mailOptions = {
    from: 'testprojectlti@gmail.com',
    to: data.email1,
    subject: 'NEWS HUB SUBSCRIPTION',
    text: 'QUATERLY PLAN'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  })
  SMTPTransport.close();

})


app.post('/api/formc',(req,res)=>{
    let data=req.body
    
let transporter = nodemailer.createTransport({
    service: 'gmail',
    port:465,
    auth: {
      user: 'testprojectlti@gmail.com',
      pass: 'LTI@2021'
    }
  });

  var mailOptions = {
    from: 'testprojectlti@gmail.com',
    to: data.email2,
    subject: 'NEWS HUB SUBSCRIPTION',
    text: 'ANNUAL PLAN'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  })
  SMTPTransport.close();

})

app.post('/api/contactus',(req,res)=>{
  let data=req.body
  
let transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 465,
  auth: {
    user: 'testprojectlti@gmail.com',
    pass: 'LTI@2021'
  }
});

var mailOptions = {
  from: data.email,
  to:'testprojectlti@gmail.com',
  subject: 'Customer Contact Us',
  html:  data.firstname +" "+
  data.lastname +" "+ 
   data.message 
  
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
})
SMTPTransport.close();

})

app.listen(1337,()=>{
    console.log("listening 1337")
})