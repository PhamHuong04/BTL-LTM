const res = require("express/lib/response");
const ReadingBook = require('../model/ReadingBook');
const Book = require('../model/Book');
const { mongooseToObject } = require('../../util/mongoose');
var expressHbs = require('express-handlebars');
class ReadingBookController {
    show(req, res, next) {
        ReadingBook.findOne({ chapter: req.params.chapter })
            .then(readingBook => {
                var hbs = expressHbs.create({});
                hbs.handlebars.registerHelper('backChapter', function (chapter) {
                    return chapter == 1 ? chapter : chapter - 1;
                })

                hbs.handlebars.registerHelper('nextChapter', function (chapter) {
                    return chapter == 5 ? chapter : chapter + 1;
                })


                Book.findOne({ plug: req.params.plug })
                    .then(book => {
                        res.render('readingBook/show', { readingBook: mongooseToObject(readingBook), book: mongooseToObject(book) });
                    })

            })
            .catch(next);
    }
}
module.exports = new ReadingBookController;
