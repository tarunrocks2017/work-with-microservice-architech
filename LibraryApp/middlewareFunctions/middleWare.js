const winston = require('../config/winston');

// const connection = require('../MigrationScripts/mongoScripts/connectDB');
const collection = require('../User/userModel');

const logger = (req, res, next) => {
  winston.log('info', `${req.url} requested`);
  next();
};

const RedirectLogin = (req, res, next) => {
  if (req.session.isActive) {
    res.redirect('/');
  } else {
    next();
  }
};
const pageRedirectingToLogin = (req, res, next) => {
  if (!req.session.isActive) {
    res.redirect('/Login');
  } else {
    next();
  }
};

const checkUser = async (req, res, next) => {
  // connection.getMongoConnection();
  const userExist = await collection.User.find({ email: req.body.email });
  if (userExist.length > 0) {
    res.status(422).render('pages/registration', { b: true, errors: ['user already exist'], isActive: false });
  } else {
    next();
  }
};

module.exports = {
  logger,
  RedirectLogin,
  pageRedirectingToLogin,
  checkUser,
};
