const mongoose = require("mongoose");

const pixelArtSchema = new mongoose.Schema({
  name: String,
  filename: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

module.exports = mongoose.model("PixelArt", pixelArtSchema);
