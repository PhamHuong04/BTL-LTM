const bookRouter = require('./books');
const loginRouter = require("./login");
const homeRouter = require("./home");
const historyRouter = require("./history");
const readingBookRouter = require("./readingBook");
const signupRouter = require("./signup");

function route(app) {

    app.use('/login', loginRouter);
    app.use('/books', bookRouter);
    app.use('/history', historyRouter);
    app.use('/readingBook', readingBookRouter);
    app.use('/signup', signupRouter);
    app.use('/', homeRouter);
}

module.exports = route;
