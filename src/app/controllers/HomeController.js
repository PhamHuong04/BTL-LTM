const res = require("express/lib/response");
const Book = require('../model/Book');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class HomeController {

    index(req, res, next) {

        Book.find()
            .then(books => {

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