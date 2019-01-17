const AUTH_URL = 'http://localhost:4002';
let MONGO_URL = 'mongodb://localhost:27017/';
const DB_NAME = 'tarunMongoDB';

if (process.env.MODE === 'prod') {
  MONGO_URL = 'mongodb://tarun:tarunharsh2019@ds159204.mlab.com:59204/tarunmongodb';
}

module.exports = {
  AUTH_URL,
  MONGO_URL,
  DB_NAME,
};
