const express = require('express');
const router = express.Router();

const {sendEmail} = require('../controllers/email')

router.post('/mail', send, (req, res) => {
    //TODO add bearer token to authenticate and not allow invalid email senders...
    res.end()
})

module.exports = router

function send(req, res, next) {

    if(!req.body.name || !req.body.email || !req.body.userMessage) {
        res.send({message: 'invalid body...'})
        next()
        return
    }

    sendEmail(req.body)
    res.send({message: 'email sent.'})
    next()
}