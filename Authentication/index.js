const express = require('express');

const bodyparser = require('body-parser');

const path = require('path');

require('dotenv').config();

const session = require('express-session');


const authentication = require('./User/Auth/UserAuth');
const middlewareFunction = require('./middlewareFunctions/middleWare');

const fileName = path.basename(`${__dirname}/views/public`);
const app = express();


app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(middlewareFunction.logger);

app.use(session({
  secret: 'email',
  resave: false,
  saveUninitialized: false,
}));

app.set('view engine', 'ejs');

app.use(express.static(`${fileName}/images`));
app.use(express.static(`${fileName}/css-files`));


app.use(authentication);


app.get('/', (req, res) => {
  res.render('pages/Home', { isActive: req.session.isActive });
});

app.get('*', (req, res) => {
  res.status(404).render('pages/error', { msg: '404 page not found . think you are sending wrong request' });
});

app.listen(4002, () => {
});
