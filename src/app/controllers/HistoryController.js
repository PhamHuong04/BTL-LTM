const res = require("express/lib/response");
const History = require('../model/History');
const Book = require('../model/Book');
const User = require('../model/User');
const { mongooseToObject } = require('../../util/mongoose');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const { hbsContent } = require("../../constants");
var expressHbs = require('express-handlebars');
class HistoryController {

    index(req, res, next) {

        History.find({ idUser: req.session.user._id })
            .then((histories) => {
                // console.log("user: ", req.session.user._id)
                if (req.session.user) {
                    hbsContent.loggedin = true;
                    hbsContent.userName = req.session.user.username;
                }
                var hbs = expressHbs.create({});
                hbs.handlebars.registerHelper('sum', function (a) {
                    return a + 1;
                })
                const books = []
                histories.forEach(async (history, index) => {

                    const book = await Book.findOne({ _id: history.idBook })
                    // console.log(book.name);
                    // console.log(book.tacgia);
                    const date = new Date(history.updatedAt)
                    const bookItem = {
                        name: book.name,
                        tacgia: book.tacgia,
                        updatedAt: date.toDateString(),
                        process: history.process
                    }
                    books.push(bookItem)

                    if (histories.length - 1 === index) {
                        // console.log(books);
                        res.render('history', {
                            histories: books,

                            ...hbsContent
                        });

                    }
                })

                // const response = await Promise.all(newHis)
                // console.log("Test history: ", response);

            })
            .catch(next);
    }



    show(req, res) {
        res.send('New detail!!');
    }

}

module.exports = new HistoryController;