require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const bcrypt = require('bcrypt')


const app = express();
app.use(express.json())


app.listen(process.env.PORT, () => console.log(`Listening on Port: ${process.env.PORT}`))