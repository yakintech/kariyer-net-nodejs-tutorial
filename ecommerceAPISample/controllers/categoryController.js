const { validationResult } = require("express-validator");
const { Category } = require("../models/categoryModel")
var jwt = require('jsonwebtoken');
const { privateJWTKey } = require("../config/environments");


const categoryController = {
    getAll: (req, res) => {

        Category.find(((err, docs) => {
            if (!err) {
                res.json(docs);
            }
            else {
                res.status(500).json(err)
            }
        }))

    },
    getById: (req, res) => {

        let id = req.params.id;

        if (id) {
            Category.findById(id).exec((err, doc) => {
                if (!err) {
                    if (doc) {
                        res.json(doc)
                    }
                    else {
                        res.status(404).json(doc)
                    }
                }
                else {
                    res.status(500).json(err)
                }
            })
        }
        else {
            res.status(422).json({ msg: 'Lütfen id parametresini gönderiniz..' })
        }


    },
    add: (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        var newCategory = Category({
            name: req.body.name,
            cNumber: req.body.cNumber
        })

        newCategory.save((err, doc) => {
            if (!err) {
                res.status(201).json(doc)
            }
            else {
                res.json(err);
            }
        })
    },
    update: (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        let id = req.body._id;
        console.log(req.body);

        Category.findByIdAndUpdate(id, { name: req.body.name, cNumber: req.body.cNumber }).exec((err, doc) => {
            if (!err) {
                res.json(doc);
            }
            else {
                res.status(500).json(err);
            }
        })
    },
    delete: (req, res) => {

        let id = req.params.id;

        if (id) {

            Category.findByIdAndRemove(id).exec((err, doc) => {
                if (!err) {
                    if (doc) {
                        res.json(doc)
                    }
                    else {
                        res.status(404).json({ 'message': 'Böyle bir döküman bulunamadı!' })
                    }

                }
                else {
                    res.status(500).json(err);
                }
            })

        }
        else {
            res.status(422).json({ msg: 'Lütfen id parametresini gönderiniz..' })
        }

    }
}


module.exports = {
    categoryController
}