const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  userName: String,
  password: String,
  movies: [],
  tvs: [],
}, {
  timestamp: true,
});

module.exports = mongoose.model('UserAuth', UserSchema);
