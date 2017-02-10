'use strict';
const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');


nodemailer.nodemailerFunction = function(dancer){

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASS
    }
}));

// setup email data with unicode symbols
let mailOptions = {
    from: process.env.GMAIL_EMAIL, // sender address
    to: `${dancer.email}, ayaghsizian@gmail.com`, // list of receivers
    subject: `Hello ${dancer.firstName}`, // Subject line
    text: 'Thanks for your interest in Salsa Sancing with us.', // plain text body
    html: '<b>Hello world ?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});

}//nodemailerFunction

module.exports = nodemailer;
