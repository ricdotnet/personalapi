const nodemailer = require('nodemailer')
require('dotenv').config()

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 465,
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
})

function sendEmail(body) {
    transporter.sendMail({
        from: `${body.name} via <me@rrocha.uk>`,
        to: 'me@rrocha.uk',
        subject: 'Website Contact Form',
        html: `${body.name} - ${body.email}<br><br>${body.userMessage}`
    }, (err, info) => {
        if(err)
            return console.log(err)
    })
}

module.exports = {
    sendEmail
}