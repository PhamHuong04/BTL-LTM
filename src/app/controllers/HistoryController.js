const res = require("express/lib/response");
const History = require('../model/History');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const { hbsContent } = require("../../constants");
class HistoryController {

    index(req, res, next) {

        History.find()
            .then(historys => {
                if (req.session.user) {
                    hbsContent.loggedin = true;
                    hbsContent.userName = req.session.user.username;
                }
                res.render('history', {
                    historys: mutipleMongooseToObject(historys),
                    ...hbsContent
                });
            })
            .catch(next);
    }



    show(req, res) {
        res.send('New detail!!');
    }

}

module.exports = new HistoryController;