const res = require("express/lib/response");
const Book = require('../model/Book');
var expressHbs = require('express-handlebars');
const { mutipleMongooseToObject } = require('../../util/mongoose');
var expressHbs = require('express-handlebars');
class HomeController {

    index(req, res, next) {

 
        const query = req.query;
        // console.log("query: ", query)
        Book.find().sort(query)
            .then(books => {
                // console.log(books);
                res.render('home', {
                    books: mutipleMongooseToObject(books),
                });
            })
            .catch(next);



    }



    show(req, res) {
        res.send('New detail!!');
    }

}

module.exports = new HomeController;