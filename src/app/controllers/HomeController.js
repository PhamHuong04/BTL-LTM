const res = require("express/lib/response");
const Book = require('../model/Book');
var expressHbs = require('express-handlebars');
const { mutipleMongooseToObject } = require('../../util/mongoose');
var expressHbs = require('express-handlebars');
const { hbsContent } = require("../../constants");
class HomeController {

    index(req, res, next) {
        const query = req.query;
        Book.find().sort(query)
            .then(books => {
                // console.log(books);
                if (req.session.user) {
                    hbsContent.loggedin = true;
                    hbsContent.userName = req.session.user.username;
                }
                res.render('home', {
                    books: mutipleMongooseToObject(books),
                    ...hbsContent
                });
            })
            .catch(next);


    }



    show(req, res) {
        res.send('New detail!!');
    }

}

module.exports = new HomeController;