const res = require("express/lib/response");
const User = require('../model/User');
const { mutipleMongooseToObject } = require('../../util/mongoose');
var expressHbs = require('express-handlebars');
var bcrypt = require('bcrypt');
const { hbsContent } = require("../../constants");

class LoginController {


    index(req, res, next) {

        User.find({})
            .then(user => {
                res.render('login', {
                    user: mutipleMongooseToObject(user),
                    ...hbsContent
                });
            })
            .catch(next);
    }


    loginSaved(req, res, next) {
        User.findOne({ email: req.body.email, password: req.body.password })
            .then(user => {
                // console.log("Thong tin tim duoc: ", user)
                if (user) {
                    req.session.user = user
                    res.redirect('/');
                } else {
                    res.redirect('/login');
                }

            })
            .catch(next);
    }



    show(req, res) {
        res.send('New detail!!');
    }

}

module.exports = new LoginController;