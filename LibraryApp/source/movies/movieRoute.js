const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

const pageRedirecting = require('../../middlewareFunctions/middleWare');

router.use(pageRedirecting.pageRedirectingToLogin);

router.get('/', async (req, res) => {
  const url = 'http://localhost:8080/movies';
  const response = await fetch(url, { method: 'GET' });
  const result = await response.json();
  console.log(result);
  res.render('pages/movies', { isActive: req.session.isActive, movieInfo: result });
});


router.get('/:id', async (req, res) => {
  console.log(req.params.id);
  const id = parseInt(req.params.id, 10);
  const url = `http://localhost:8080/movies/${id}`;
  const response = await fetch(url, { method: 'GET' });
  const result = await response.json();
  res.render('pages/movie-info', {
    isActive: req.session.isActive, obj: result, msg: 'this is movie', rating: result[0].rating,
  });
});

module.exports = router;
