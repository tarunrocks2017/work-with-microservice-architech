const router = require('express').Router();

const controller = require('./AuthController');


router.post('/Register', async (req, res) => {
  try {
    const item = {
      email: req.body.email,
      username: req.body.username,
      userpassword: await controller.doHash(req.body.userpassword),
    };
    const result = await controller.enterData(item);
    if (result[0].affectedRows === 0) {
      res.json(false);
    }
    res.json(true);
  } catch (err) {
    return res.send('duplicate user');
  }
});

router.post('/login', async (req, res) => {
  const exist = await controller.UserExist(req.body.email, req.body.userpassword);
  if (!exist) {
    res.json(false);
  }
  res.json(true);
});


module.exports = router;
