const express = require('express');
const router = express.Router();

const {sendEmail} = require('../controllers/email')

router.post('/mail', (req, res) => {

    sendEmail(req.body)

    res.send({message: 'email sent'})
    res.end()
})

module.exports = router