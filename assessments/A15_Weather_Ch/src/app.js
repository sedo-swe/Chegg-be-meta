const express = require("express");
const mongoose = require("mongoose")
const dotenv = require('dotenv').config();
const weatherRouter = require("./weather/weather.router");


const app = express();
app.use(express.json());

// Write your code here

mongoose
    .connect(process.env.DATABASE_URL, {
        useNewUrlParser: true
    })
    .then(() => {
        console.log("Connected to MongoDB!")
    })
    .catch(error => console.error(error.message));

app.use("/weather", weatherRouter)

// Not found handler
app.use((request, response, next) => {
  next(`Not found: ${request.originalUrl}`);
});

// Error handler
app.use((error, req, res, next) => {
  console.error(error);
  const { status = 500, message = "Something went wrong!" } = error;
  res.status(status).json({ error: message });
});

module.exports = app;
