require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const expressJwt = require("express-jwt");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());
app.use("/api", expressJwt({ secret: process.env.SECRET }));
app.use((err, req, res, next) => {
  console.error(err);
  if (err.name === "UnauthorizedError") {
    res.status(err.status);
  }
  return res.send({ message: err.message });
});
app.use("/auth", require("./routes/auth"));

app.listen(process.env.PORT, () =>
  console.log(`Listening on Port: ${process.env.PORT}`)
);
