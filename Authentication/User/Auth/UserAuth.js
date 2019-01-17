const router = require('express').Router();

const controller = require('./AuthController');


router.post('/Register', async (req, res) => {
  try {
    console.log('request came');
    console.log(req.body);
    const item = {
      email: req.body.email,
      username: req.body.username,
      userpassword: await controller.doHash(req.body.userpassword),
    };
    console.log(item);
    const result = await controller.enterData(item);
    console.log(result);
    res.json(true);
  } catch (err) {
    return res.send('duplicate user');
  }
});

router.post('/login', async (req, res) => {
  console.log('request come fopr login');
  const exist = await controller.UserExist(req.body.email, req.body.userpassword);
  if (!exist) {
    res.json(false);
  }
  res.json(true);
});


module.exports = router;
