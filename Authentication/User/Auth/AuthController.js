const bcrypt = require('bcrypt');

const collection = require('../userModel');

const connection = require('../../MigrationScripts/mongoScripts/connectDB');


const saltround = 10;

async function doHash(password) {
  console.log(password)
  try {
    const salt = await bcrypt.genSalt(saltround);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (err) {
    return 'password not hashed';
  }
}

async function enterData(data) {
  try {
    console.log('request aai thi');
    console.log(data);
    connection.getMongoConnection();
    const userData = new collection.User(data);
    await userData.save();
    const user = await collection.User.find({ email: data.email });
    return user;
  } catch (err) {
    return 'duplicate user';
  }
}
async function UserExist(email, password) {
  try {
    let exist = false;
    const userObj = await collection.User.find({ email });
    if (userObj.length === 0) {
      return exist;
    }
    exist = await bcrypt.compare(password, userObj[0].userpassword);
    return exist;
  } catch (error) {
    return error;
  }
}

module.exports = {
  doHash,
  enterData,
  UserExist,
};
