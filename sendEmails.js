'use strict';
const nodemailer = require('nodemailer');

nodemailer.nodemailerFunction = function(dancer){

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ayaghsizian@gmail.com',
        pass: 'chus2bhapy'
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: 'ayaghsizian@gmail.com', // sender address
    to: `${dancer.email}`, // list of receivers
    subject: `Hello ${dancer.firstName}`, // Subject line
    text: 'aras short message', // plain text body
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
