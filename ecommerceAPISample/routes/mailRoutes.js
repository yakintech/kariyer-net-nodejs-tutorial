const express = require('express');
const router = express.Router();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'bilgebatman19@gmail.com',
        pass: 'Superman!35'
    }
})


router.post('/', (req, res) => {
    let mailOptions = {
        from: 'bilgebatman19@gmail.com',
        to: req.body.email,
        subject: req.body.subject,
        text: req.body.text
    }
    transporter.sendMail(mailOptions, (err, information) => {

        if (!err) {
            res.json(information)
        } else {
            res.json(err);
        }

    })
});





module.exports = router
