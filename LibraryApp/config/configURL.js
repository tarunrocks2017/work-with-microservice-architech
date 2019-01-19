let MYSQL_ACTOR_URL = 'http://localhost:8080/actors';
let MYSQL_MOVIE_URL = 'http://localhost:8080/movies';
const TEST_URL = 'http://localhost:4001';

if (process.env.NODE_ENV === 'production') {
  MYSQL_ACTOR_URL = `http://${process.env.IP}/actors`;
  MYSQL_MOVIE_URL = `http://${process.env.IP}/movies`;
}

module.exports = {
  MYSQL_ACTOR_URL,
  MYSQL_MOVIE_URL,
  TEST_URL,
};
