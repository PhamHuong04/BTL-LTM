const newRouter = require('./news');
const coursesRouter = require('./courses');
const bookRouter = require('./books');
const siteRouter = require('./site');
const loginRouter = require("./login");
const homeRouter = require("./home");
const historyRouter = require("./history");
const readingBookRouter = require("./readingBook");

function route(app) {

    app.use('/news', newRouter);
    app.use('/courses', coursesRouter);
    app.use('/search', siteRouter);
    app.use('/home', homeRouter);
    app.use('/login', loginRouter);
    app.use('/books', bookRouter);
    app.use('/history', historyRouter);
    app.use('/readingBook', readingBookRouter);
    app.use('/', homeRouter);



}

module.exports = route;
