const res = require("express/lib/response");
const Book = require('../model/Book');
// const ReadingBook = require('../model/ReadingBook');
const { mongooseToObject } = require('../../util/mongoose');

class BookController {
    // [GET] /books/:slug
    show(req, res, next) {
        Book.findOne({ plug: req.params.plug })
            .then(book => {
                res.render('book/show', { book: mongooseToObject(book) });
                // console.log(book);
                // ReadingBook.findOne({ plug: req.params.plug })
                //     .then(readingBook => {
                //         console.log(req.params.plug);
                //         res.render('book/show', { readingBook: mongooseToObject(readingBook), book: mongooseToObject(book) });
                //     })
                // book.name.sort();
                // console.log(book.name);
               
            })
            .catch(next);
    }
}
module.exports = new BookController;
