
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define the Schema 
const userSchema = new Schema({
  userName: String
  
 
});
const User = mongoose.model('User', userSchema);
module.exports = User;
