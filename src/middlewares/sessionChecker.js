const sessionChecker = (req, res, next) => {

    if (!req.session.user || !req.cookies.user_sid) {
        return res.redirect('/login');

    }
    next()
};

module.exports = sessionChecker;
