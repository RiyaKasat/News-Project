const { request, response } = require('express');
const express=require('express');
const router=express.Router();
const contactusTemplateCopy = require('../models/ContactModels')

router.post('/contactus',(request,response) =>
{
    const signedUpUser = new contactusTemplateCopy({
        firstName:request.body.firstName,
        lastName:request.body.lastName,
        email:request.body.email,
        message:request.body.message

    })
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
         response.json(error)
    })
}) 

module.exports = router