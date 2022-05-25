const res = require("express/lib/response");
const User = require('../model/User');
const { mutipleMongooseToObject } = require('../../util/mongoose');
var expressHbs = require('express-handlebars');
var bcrypt = require('bcrypt');
class LoginController {
   

    index(req, res, next) {

        User.find({})

            .then(user => {
                res.render('login', {
                    user: mutipleMongooseToObject(user),
                });
            })
            .catch(next);
    }
    loginSaved(req, res, next) {

        User.findOne({username: req.body.username,password: req.body.password})
            .then(user => {
                var hbs = expressHbs.create({});
                hbs.handlebars.registerHelper("checkLogin", function (user, pass) {
                    if (username == user && password == pass)
                    return 1;
                    else return 0;
                })
                console.log(user);
                // res.render('login', {
                //     user: mutipleMongooseToObject(user),
                // });
            })
            .catch(next);
    }
    


    show(req, res) {
        res.send('New detail!!');
    }

}

module.exports = new LoginController;