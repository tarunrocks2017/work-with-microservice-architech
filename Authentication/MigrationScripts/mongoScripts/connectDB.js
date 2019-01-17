const mongoose = require('mongoose');
const config = require('../../config/urlConfig');

async function getMongoConnection() {
  const dbName = process.env.MONGO_DB || config.DB_NAME;
  mongoose.connect(`${config.MONGO_URL}${dbName}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
  });
}
module.exports = {
  getMongoConnection,
};
