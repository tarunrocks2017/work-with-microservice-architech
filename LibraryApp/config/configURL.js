let MYSQL_ACTOR_URL = 'http://localhost:8080/actors';
let MYSQL_MOVIE_URL = 'http://localhost:8080/movies';
const TEST_URL = 'http://localhost:4001';

if (process.env.MODE === 'prod') {
  MYSQL_ACTOR_URL = 'http://3.16.41.170:8080/actors';
  MYSQL_MOVIE_URL = 'http://3.16.41.170:8080/movies';
}

module.exports = {
  MYSQL_ACTOR_URL,
  MYSQL_MOVIE_URL,
  TEST_URL,
};
