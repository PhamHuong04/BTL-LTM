const res = require("express/lib/response");
const User = require('../model/User');
const { mutipleMongooseToObject } = require('../../util/mongoose');
var expressHbs = require('express-handlebars');
var bcrypt = require('bcrypt');
const { hbsContent } = require("../../constants");

class LogoutController {


    // index(req, res, next) {

    //     User.find({})
    //         .then(user => {
    //             res.render('logout', {
    //                 user: mutipleMongooseToObject(user),
    //                 // ...hbsContent
    //             });
    //         })
    //         .catch(next);
    // }


    logoutSaved(req, res, next) {
        User.findOne({ email: req.body.email, password: req.body.password })
            .then(user => {
                // console.log("Thong tin tim duoc: ", user)
                if (user) {
                    hbsContent.loggedin = false; 
                    res.clearCookie('user_sid');
                    res.redirect('/login');
                } else {
                    res.redirect('/login');
                }

            })
            .catch(next);
    }



    // show(req, res) {
    //     res.send('New detail!!');
    // }

}

module.exports = new LogoutController;