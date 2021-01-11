const nodemailer = require('nodemailer');

exports.handler = function(event, context, callback)
{
    let data = JSON.parse(event.body)

    let transport = nodemailer.createTransport({
        host: [SMTP],
        port:[SMTP],
        auth:{
            user:[SMTP username],
            pass:[SMTP pass]
        }
    });

    transporter.sendMail({
        from: [YOUR SMTP SERVER EMAIL ADDRESS],
        to: [RECIPIENT EMAIL ADDRESS],
        subject: `Sending with React, Nodemailer and Netlify`,
        html: `
            <h3>Email from ${data.name} ${data.email}<h3>
            <p>${data.message}<p>
            `
    }, function(error, info) {
        if (error) {
            callback(error);
        } else {
            callback(null, {
            statusCode: 200,
            body: JSON.stringify({
                   'result': 'success'
                })
        });
        }
    });
}