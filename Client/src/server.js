const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require("dotenv").config();

const transporter = nodemailer.createTransport({
    host : "",
    port: 5000,
    auth: {
        user : process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  app.post('./send', (req, res, next) =>
  {
      var firstname = req.body.firstname
      var lastname = req.body.lastname
      var email = req.body.email
      var message = req.body.message

      var mail = {
        from: firstname,
        to: '' ,
        text : message
      }
    
      transporter.sendMail(mail, (err, data) => {
        if (err) {
          res.json({
            status: 'fail'
          })
        } else {
          res.json({
           status: 'success'
          })
        }
      })
  })