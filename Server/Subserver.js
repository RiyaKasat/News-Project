
var express= require('express');
const path= require('path');
const Razorpay=require('razorpay');
const shortid=require('shortid');
const cors = require('cors');
const bodyParser=require('body-parser');
const nodemailer=require('nodemailer');
const SMTPTransport = require('nodemailer/lib/smtp-transport');
const app = express();
const mongoose = require ('mongoose');
const dotenv=require('dotenv');
const routesUrls=require('./routes/routs');

const signupmodel = require('./models/signup')



app.use(cors());

//first install razorpay using npm
//in razorpay webiste Go to Integration steps

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
        //short id is used for genertaing random number in reciept
        receipt: shortid.generate(),
        //payment is succesful is confirm or not
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

//DATBASE
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/signupdb',function (err,res) {
  if (err) throw err;  
  console.log('connected to mongo');
  useNewUrlParser:true
})

app.post('/signupinsert',async (req,res)=> {
  const fullName= req.body.fullName;
  const email = req.body.email;
  const password = req.body.password;
   const Users = new signupmodel({fullName:fullName,email:email,password:password})
  try{
    await Users.save();
    res.send("inserted data to Users");
  }catch(error){
    console.log(error);
  }
})

app.get('/signupread', async (req,res)=>{
  signupmodel.find({}, (err,result)=>{
    if (err) throw err;
    console.log(err);
    res.send(result);
  })
})

app.put('/signupemail/:id', async (req,res)=>{
  const newEmail=req.body.newEmail;
  const id = req.body.id;
  try{
    await signupmodel.findById(id,req.body,(err,changeEmail)=>{
      if(err) throw err;
      changeEmail.email=newEmail;
      changeEmail.save();
      res.send("update");
    });
   
  }catch(err){
    console.log(err);
  }
  })

  app.delete('/signupdelete/:id', async (req, res) => {
    const id= req.params.id;
    await signupmodel.findByIdAndRemove(id).exec()
    res.send("deleted");
      
  });
//CONATCT US
  
mongoose.connect('mongodb://localhost:27017/mytable', function(err, response){
    if(err){ console.log('Failed to connect to '); }
    else{ console.log('Connected to db '); }
 });

app.use(express.json()) 
app.use(cors())
app.use('/app',routesUrls)

app.listen(1337,()=>{
    console.log("listening 1337")
})