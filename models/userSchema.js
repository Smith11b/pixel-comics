const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  images: Array,
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("PixelArt", userSchema)
