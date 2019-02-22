require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const expressJwt = require("express-jwt");
const bcrypt = require("bcrypt");

// database setup ---------------------

mongoose.connect(`mongodb://localhost:${process.env.DB}/Pixel-art`);
db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("we're connected!"));


// server setup -----------------------
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
app.use("/api/pixel-art", require("./routes/pixel-image"));

app.listen(process.env.PORT, () =>
  console.log(`Listening on Port: ${process.env.PORT}`)
);
