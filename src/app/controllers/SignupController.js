const res = require("express/lib/response");
const User = require('../model/User');
const { mutipleMongooseToObject } = require('../../util/mongoose');
var expressHbs = require('express-handlebars');
class SignupController {


    signup(req, res, next) {
        res.send('Thêm tài khoản mới');
    }


}

module.exports = new SignupController;