const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  nama: {
    type: String,
    lowercase: true,
  },
  hobi: {
    type: String,
  },
  alamat: {
    type: String,
  },
  nomor_telp: {
    type: Number,
    default: 0,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});
module.exports = function UsersModel() {
  return mongoose.model("users", usersSchema);
};
