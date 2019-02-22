const express = require("express");
const imageRouter = express.Router();
const Image = require("../models/imageSchema");
const multer = require("multer");

const upload = multer({ dest: __dirname + "/public/images" });
const type = upload.single("image");

imageRouter.post("/images", type, (req, res, next) => {
  const img = new Image(req.body);
  img.user = req.user._id;
  img.save((err, image) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(image);
  });
});

imageRouter.get("images", (req, res) => {
  Image.find({ user: req.user._id }, (err, data) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(data);
  });
});

module.exports = imageRouter;
