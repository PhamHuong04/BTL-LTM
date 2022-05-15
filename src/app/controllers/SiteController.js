const res = require("express/lib/response");

class SiteController {


    //[GET]/ (home)
    home(req, res) {
        res.render('home');
    }

    history(req, res) {
        res.render('history');
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }

    new(req, res) {
        res.render('news');
    }

    new(req, res) {
        res.render('readingBook');
    }
    
    
    
}

module.exports = new SiteController;