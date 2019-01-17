let MYSQL_ACTOR_URL = 'http://localhost:8080/actors';
let MYSQL_MOVIE_URL = 'http://localhost:8080/movies';
const TEST_URL = 'http://localhost:4001';

if (process.env.MODE === 'prod') {
  MYSQL_ACTOR_URL = 'http://18.218.23.234/actors';
  MYSQL_MOVIE_URL = 'http://18.218.23.234/movies';
}

module.exports = {
  MYSQL_ACTOR_URL,
  MYSQL_MOVIE_URL,
  TEST_URL,
};
