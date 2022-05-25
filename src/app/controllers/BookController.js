const res = require("express/lib/response");
const Book = require('../model/Book');
const { mongooseToObject } = require('../../util/mongoose');

class BookController {
    // [GET] /books/:slug
    show(req, res, next) {
        Book.findOne({ plug: req.params.plug })
            .then(book => {
                res.render('book/show', { book: mongooseToObject(book) });
               
            })
            .catch(next);
    }
}
module.exports = new BookController;
