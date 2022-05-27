const express = require('express')
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const methodOverride = require('method-override');
// const User = require('./app/model/User')

const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

const hbsContent = { userName: '', loggedin: false, id: '' };
// const hbsContent = require('./constants/index')

// set morgan to log info about our requests for development use.
app.use(morgan('dev'));

db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended: true,
}));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser());
// initialize express-session to allow us track the logged-in user across sessions.
app.use(session({
    key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60000000
    }
}));


const exphbs = require('express-handlebars');
// const { devNull } = require('os');
const hbs = exphbs.create({ extname: '.hbs' })

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, 'resources', 'views'));

app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
        res.clearCookie('user_sid');
    }
    next();
});
app.use(methodOverride('_method'));
app.use(express.json());


//Routes init
route(app);


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

