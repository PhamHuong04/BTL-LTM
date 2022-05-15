const res = require("express/lib/response");
const History = require('../model/History');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class HistoryController {

    index(req, res, next) {

        History.find()
            .then(historys => {

                res.render('history', {
                    historys: mutipleMongooseToObject(historys),
                });
            })
            .catch(next);
    }



    show(req, res) {
        res.send('New detail!!');
    }

}

module.exports = new HistoryController;