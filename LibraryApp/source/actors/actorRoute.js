const express = require('express');

const fetch = require('node-fetch');

const router = express.Router();

const config = require('../../config/configURL');

const pageRedirecting = require('../../middlewareFunctions/middleWare');

router.use(pageRedirecting.pageRedirectingToLogin);

router.get('/', async (req, res) => {
  const response = await fetch(config.MYSQL_ACTOR_URL, { method: 'GET' });
  const result = await response.json();
  res.render('pages/workers', { isActive: req.session.isActive, ActorInformation: result });
});

router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const url = `${config.MYSQL_ACTOR_URL}${id}`;
    const response = await fetch(url, { method: 'GET' });
    const result = await response.json();
    console.log(result[0]);
    if (result.length === 0) res.render('pages/error', { msg: '500 id not found' });
    else res.render('pages/workers-info', { isActive: req.session.isActive, workerObj: result });
  } catch (err) {
    res.send('some thinf went wrong');
  }
});

module.exports = router;
