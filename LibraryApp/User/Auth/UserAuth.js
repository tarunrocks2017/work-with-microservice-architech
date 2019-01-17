const router = require('express').Router();

const fetch = require('node-fetch');

const { check, validationResult } = require('express-validator/check');

const Redirect = require('../../middlewareFunctions/middleWare');

router.get('/Register', (req, res) => {
  res.render('pages/registration', { isActive: req.session.isActive, b: false, errors: [''] });
});

router.post('/Register', [
  check('email').isEmail(),
  check('username').isLength({ min: 5 }),
  check('password').isLength({ min: 5 }),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.render('pages/registration', { b: true, errors: 'email is not coreect', isActive: false });
  }
  try {
    const response = await fetch('http://localhost:4002/Register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: req.body.email,
        username: req.body.username,
        userpassword: req.body.password,
      }),
    });

    const result = await response.json();

    if (!result) {
      res.send('facing problem in registration');
    }
    res.redirect('/login');
  } catch (err) {
    return res.send('duplicate user');
  }
});

router.get('/login', Redirect.RedirectLogin, (req, res) => {
  res.render('pages/Login', { isActive: req.session.isActive, msg: 'login redirecting', b: false });
});

router.post('/login', [check('email').isEmail()], async (req, res) => {
  const response = await fetch('http://localhost:4002/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: req.body.email,
      userpassword: req.body.password,
    }),
  });

  const result = await response.json();
  if (result) {
    req.session.isActive = true;
    res.redirect('/');
  } else {
    res.send('login fail');
  }
});


module.exports = router;
