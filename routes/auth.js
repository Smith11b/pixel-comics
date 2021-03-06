const express = require("express");
const authRouter = express.Router();
require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");

authRouter.post("/signup", (req, res, next) => {
  // try to find a user with the provided username. (If it already exists, we want to tell them
  // that the username is already taken.)

  User.findOne({ username: req.body.username }, (err, existingUser) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    if (existingUser !== null) {
      res.status(400);
      return next(new Error("That user already exists"));
    }

    const newUser = new User(req.body);
    newUser.save((err, user) => {
      if (err) {
        res.status(500);
        return next(err);
      }

      const token = jwt.sign(user.toObject(), process.env.SECRET);
      return res
        .status(201)
        .send({ success: true, user: user.toObject(), token });
    });
  });
});

authRouter.post("/login", (req, res, next) => {
  // Try to find the user with the submitted username (lowercased)
  User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
    if (err) {
      return next(err);
    }
    user.checkPassword(req.body.password, (err, match) => {
      if (err) return res.status(500).send(err);
      if (!match)
        res.status(401).send({
          success: false,
          message: "Username or password are incorrect"
        });

      // If that user isn't in the database OR the password is wrong:
      if (!user) {
        res.status(403);
        return next(new Error("Username password are incorrect"));
      }

      const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
      return res.send({
        token: token,
        user: user.withoutPassword(),
        success: true
      });
    });
  });

  // If username and password both match an entry in the database,
  // create a JWT! Add the user object as the payload and pass in the secret.
  // This secret is like a "password" for your JWT, so when you decode it
  // you'll pass the same secret used to create the JWT so that it knows
  // you're allowed to decode it.
});

module.exports = authRouter;
