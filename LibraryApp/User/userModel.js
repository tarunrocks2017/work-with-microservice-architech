const mongoose = require('mongoose');

const connection = require('../MigrationScripts/mongoScripts/connectDB');

connection.getMongoConnection();

const UserSchema = mongoose.Schema;

const userDataSchema = new UserSchema({
  username: String,
  email: {
    type: String,
    unique: true,
  },
  userpassword: String,
});

const User = mongoose.model('UserData', userDataSchema);
module.exports = {
  User,
};
