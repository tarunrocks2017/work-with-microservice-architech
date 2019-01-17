const AUTH_URL = 'http://localhost:4002';
let MONGO_URL = 'mongodb://localhost:27017/';
let DB_NAME = 'tarunMongoDB';

if (process.env.MODE === 'prod') {
  MONGO_URL = 'mongo ds159204.mlab.com:59204';
  DB_NAME = 'tarunmongodb';
}

module.exports = {
  AUTH_URL,
  MONGO_URL,
  DB_NAME,
};
