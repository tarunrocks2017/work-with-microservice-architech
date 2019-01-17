const express = require('express');

const bodyparser = require('body-parser');

const path = require('path');

require('dotenv').config();

const session = require('express-session');

const movieRoutes = require('./source/movies/movieRoute');
const actorRoutes = require('./source/actors/actorRoute');
const authentication = require('./User/Auth/UserAuth');
const logoutRoute = require('./User/userLogout/logoutroute');
const middlewareFunction = require('./middlewareFunctions/middleWare');

const fileName = path.basename(`${__dirname}/views/public`);
const app = express();


app.use(bodyparser.urlencoded({ extended: false }));

app.use(middlewareFunction.logger);

app.use(session({
  secret: 'email',
  resave: false,
  saveUninitialized: false,
}));

app.set('view engine', 'ejs');

app.use(express.static(`${fileName}/images`));
app.use(express.static(`${fileName}/css-files`));

app.use('/workers', actorRoutes);
app.use('/movies', movieRoutes);
app.use(authentication);
app.use('/Logout', logoutRoute);

app.get('/', (req, res) => {
  res.render('pages/Home', { isActive: req.session.isActive });
});

app.get('*', (req, res) => {
  res.status(404).render('pages/error', { msg: '404 page not found . think you are sending wrong request' });
});

app.listen(4001, () => {
});
