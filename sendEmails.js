'use strict';
const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');


nodemailer.nodemailerFunction = function(dancer){

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
        user: "salsaClassesNYC@gmail.com",
        pass: process.env.GMAIL_PASS
    }
}));

// setup email data with unicode symbols
let mailOptions = {
    from: "salsaClassesNYC@gmail.com", // sender address
    to: `${dancer.email}, salsaClassesNYC@gmail.com`, // list of receivers
    subject: `Hello ${dancer.firstName},`, // Subject line
    text: `Thank you for your interest in signing up with SalsaClassesNYC.`, // plain text body
    html: `<b>Hi ${dancer.firstName} ${dancer.lastName},
              <br><br>
              Thanks for your interest in signing up with SalsaClassesNYC.  We
              have your phone number as ${dancer.phoneNumber} and your email as
              ${dancer.email} and we will be sending a followup email shortly.
              If any information is incorrect please let us know by
              re-submitting the correct information as soon as possible.  We're
              looking forward to sharing the dance floor with you.

              <br><br>
              Best Regards,
              <br><br>
              The SalsaClassesNYC team
              <br><br>
              <br><br>
              Your message to us: ${dancer.message}
              </b>` // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info) {
    console.log(`this is dancer.email ${dancer.email}`);
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});

}//nodemailerFunction

module.exports = nodemailer;
