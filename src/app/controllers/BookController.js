const res = require("express/lib/response");
const Book = require('../model/Book');
const { mongooseToObject } = require('../../util/mongoose');
const { hbsContent } = require("../../constants");
class BookController {
    // [GET] /books/:slug
    show(req, res, next) {
        Book.findOne({ plug: req.params.plug })
            .then(book => {
                if (req.session.user) {
                    hbsContent.loggedin = true;
                    hbsContent.userName = req.session.user.username;
                }
                res.render('book/show', { book: mongooseToObject(book),
                    ...hbsContent
                 });
               
            })
            .catch(next);
    }
}
module.exports = new BookController;
