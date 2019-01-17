const express = require('express');
const fetch = require('node-fetch');

const configUrl = require('../../config/configURL');

const router = express.Router();

const pageRedirecting = require('../../middlewareFunctions/middleWare');

router.use(pageRedirecting.pageRedirectingToLogin);

router.get('/', async (req, res) => {
  const response = await fetch(configUrl.MYSQL_MOVIE_URL, { method: 'GET' });
  const result = await response.json();
  res.render('pages/movies', { isActive: req.session.isActive, movieInfo: result });
});


router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const url = `${configUrl.MYSQL_MOVIE_URL}${id}`;
  const response = await fetch(url, { method: 'GET' });
  const result = await response.json();
  res.render('pages/movie-info', {
    isActive: req.session.isActive, obj: result, msg: 'this is movie', rating: result[0].rating,
  });
});

module.exports = router;
