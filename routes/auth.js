const express = require('express');
const authRouter = express.Router();
const jwt = require('jsonwebtoken');


authRouter("/signup", (res, req, next) => {
    // try to find a user with the provided username. (If it already exists, we want to tell them
    // that the username is already taken.)
})

authRouter('/login', (res, req, next) =>{
    // Try to find the user with the submitted username (lowercased)
})


module.exports = authRouter;