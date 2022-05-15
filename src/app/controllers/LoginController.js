const res = require("express/lib/response");
const Course = require('../model/Course');
const {mutipleMongooseToObject} = require ('../../util/mongoose');
class LoginController {

    index(req, res, next) {
        

        Course.find({})
            .then(courses =>{
    
                res.render('login',{
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }




    show(req, res) {
        res.send('New detail!!');
    }

}

module.exports = new LoginController;