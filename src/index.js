const express = require('express')
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');



db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({
    extended: true,
}));

const exphbs = require('express-handlebars');
const { devNull } = require('os');
const hbs = exphbs.create({ extname: '.hbs' })

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, 'resources', 'views'));


app.use(express.json());
//Routes init
route(app);


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})