const res = require("express/lib/response");
const User = require('../model/User');
const { mongooseToObject } = require('../../util/mongoose');
var expressHbs = require('express-handlebars');
var bcrypt = require('bcrypt');
const { hbsContent } = require("../../constants");

class MeController {


    infor(req, res, next) {

        User.findOne({})
            .then(user => {
                if (req.session.user) {
                    hbsContent.loggedin = true;
                    hbsContent.userName = req.session.user.username;
                }
                // console.log("Thoong tin nguoi dang dang nhap: ", user);
                res.render('me/infor', {
                    user: mongooseToObject(user),
                    ...hbsContent
                });
            })
            .catch(next);
    }

    update(req, res, next) {
        // console.log(req.body);
        const { username, email, age, sex, phone } = req.body;
        User.findOne({ username, email })
            .then(user => {

                if (user) {

                    User.findOneAndUpdate({
                        _id: user._id
                    }, {
                        age,
                        phone,
                        sex
                    }, { new: true })
                        .then((_user) => {
                            console.log(_user);
                            if (_user) {

                                res.redirect('/')
                            }
                        })
                        .catch(next);
                }
            })
            .catch(next);

    }

    // show(req, res) {
    //     res.send('New detail!!');
    // }

}

module.exports = new MeController;