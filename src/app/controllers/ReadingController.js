
const res = require("express/lib/response");
// const ReadingBook = require('../model/Book');
const Book = require('../model/Book');
const { mongooseToObject } = require('../../util/mongoose');
var expressHbs = require('express-handlebars');
const { clearConfigCache } = require("prettier");

class ReadingBookController {
    show(req, res, next) {

        Book.findOne({ chapter: req.params.chapter })

            .then(book => {
                // console.log(book.contents)
                var hbs = expressHbs.create({});
                hbs.handlebars.registerHelper('backChapter', function (chapter) {
                    return chapter == 1 ? chapter : chapter - 1;
                })

                hbs.handlebars.registerHelper('nextChapter', function (chapter) {
                    return chapter == 5 ? chapter : chapter + 1;
                })
                hbs.handlebars.registerHelper('list-item', function (indexNum) {
                    return indexNum + 1;

                })
                hbs.handlebars.registerHelper('getContent', function (contexts, ndx) {
                    return contexts[ndx - 1].content;
                })
                
                Book.findOne({ plug: req.params.plug })
                    .then(book => {
                        res.render('readingBook/show', {
                            book: mongooseToObject(book),
                            currentChapter: Number(req.params.chapter),
                            contents: mongooseToObject(book).contents[req.params.chapter]

                        });
                        // console.log("Test: ", mongooseToObject(book).contents[req.params.chapter].chapter);
                    })

            })
            .catch(next);
    }
}
module.exports = new ReadingBookController;
