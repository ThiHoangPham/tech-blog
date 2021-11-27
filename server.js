const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const helpers = require('./utils/helpers');

const app = express();

const PORT = process.env.PORT || 8080;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'my-secret',
    cookie: {
        maxAge: (1000 * 60 * 60 * 24 * 7) //expires after 1 week
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({ db: sequelize })
};

const hbs = exphbs.create({ helpers });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sess));
app.use(express.static('public'));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const routes = require('./controllers');
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});

export function cookieParser(arg0: string): any {
    throw new Error('Function not implemented.');
}

