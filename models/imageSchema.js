const mongoose = require("mongoose");

const pixelArtSchema = new mongoose.Schema({
  name: String,
  backendId: String,
  userGivenId: String
});

module.exports = mongoose.model("PixelArt", pixelArtSchema)
