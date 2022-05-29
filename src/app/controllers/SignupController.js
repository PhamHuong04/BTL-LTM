const res = require("express/lib/response");
const User = require('../model/User');
const { mutipleMongooseToObject } = require('../../util/mongoose');
var expressHbs = require('express-handlebars');

class SignupController {


    signup(req, res, next) {
        User.find()
            .then(users => {
                res.render('signup', {
                    users: mutipleMongooseToObject(users),
                });
            })
            .catch(next);
    }

    // [POST] / SIGNUP / SUCESSFULLY

    sucessfully(req, res, next) {
       
        const user = new User(req.body);
        // hbsContent.loggedin = false;
        // console.log("thông tin đăng nhập: ",user);
        user.save()
            .then(() => res.redirect('/login'))
            .catch(error => {
                res.redirect('/signup')
            })
    }

}

module.exports = new SignupController();