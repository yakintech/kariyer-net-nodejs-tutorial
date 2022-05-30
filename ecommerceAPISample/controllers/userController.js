const { User } = require("../models/userModel");
var jwt = require('jsonwebtoken');
const { privateJWTKey } = require("../config/environments");




const userController = {
    register: (req, res) => {

        var newUser = User({
            email: req.body.email,
            //Parolayı da istersek şifreleyebiliriz...
            password: req.body.password
        })


        newUser.save((err, doc) => {
            if (!err) {
                res.json(doc);
            }
            else {
                res.status(500).json(err);
            }
        })

    },
    token: (req, res) => {

        User.findOne({ email: req.body.email, password: req.body.password }, (err, doc) => {

            if (!err) {
                if (doc) {
                    //Burada kullanıcıya token oluşturup veriyoruz.
                    let token = jwt.sign({email: doc.email}, privateJWTKey, {
                        algorithm: 'HS256',
                        expiresIn: '1h',
                      })

                    res.json({'token': token});
                }
                else {
                    res.status(404).json({ 'msg': 'User not found!' })
                }
            }
            else {
                res.status(500).json(err);
            }
        })
    },
    getAll: (req, res) => {

        User.find().select('email').exec((err, docs) => {

            if (!err) {
                res.json(docs);
            }
            else {
                res.status(500).json(err);
            }

        })

    }
}


module.exports = {
    userController
}