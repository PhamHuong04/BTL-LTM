
const res = require("express/lib/response");
// const ReadingBook = require('../model/Book');
const Book = require('../model/Book');
const History = require('../model/History');
const { mongooseToObject } = require('../../util/mongoose');
var expressHbs = require('express-handlebars');
const { clearConfigCache } = require("prettier");
const { hbsContent } = require("../../constants");
let currentProcess = 0;
class ReadingBookController {
    show(req, res, next) {
        Book.findOne({ chapter: req.params.chapter })

            .then(book => {

                if (req.session.user) {
                    hbsContent.loggedin = true;
                    hbsContent.userName = req.session.user.username;
                }

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

                        History.findOne({ idBook: book._id, idUser: req.session.user._id })
                            .then(history => {

                                if (!!history) {
                                    let process = (req.params.chapter / book.contents.length) * 100;
                                    if (process > history.process) {
                                        currentProcess = process;
                                        History.findOneAndUpdate({
                                            _id: history._id
                                        }, {
                                            process: (req.params.chapter / book.contents.length) * 100,
                                        }, { new: true })
                                            .then(() => {
                                                console.log("Thanh cong ")

                                            })
                                            .catch(
                                                console.log("That bai")
                                            )
                                    }
                                    else {
                                        currentProcess = history.process;
                                    }

                                }
                                else {
                                    let newHistory = new History();
                                    newHistory.idBook = book._id;
                                    newHistory.idUser = req.session.user._id;
                                    newHistory.process = (req.params.chapter / book.contents.length) * 100;


                                    newHistory.save();
                                }
                            })
                        res.render('readingBook/show', {
                            book: mongooseToObject(book),
                            process: currentProcess,
                            currentChapter: Number(req.params.chapter),
                            contents: mongooseToObject(book).contents[req.params.chapter],
                            ...hbsContent
                        });


                    })
                    .catch(next);
            })
            .catch(next);
    }
}
module.exports = new ReadingBookController;
