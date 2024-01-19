const { NODE_ENV = "development" } = process.env;
const express = require("express");
const app = express();

// Middleware
const validateZip = require("./middleware/validateZip");

// Util
const getZoos = require("./utils/getZoos");

// Routes
app.get("/check/:zip", validateZip, (req, res, next) => {
  const zip = req.params.zip;
  const message = getZoos(zip) ? `${zip} exists in our records.` : `${zip} does not exist in our records.`;
  res.send(message);
});

app.get("/zoos/all", (req, res, next) => {
  const admin = req.query.admin;
  let message = "You do not have access to that route.";
  if (admin == "true") {
    message = `All zoos: ${getZoos().join("; ")}`;
    res.send(message);
  } else {
    res.send("You do not have access to that route.");
  }

});

app.get("/zoos/:zip", validateZip, (req, res, next) => {
  const zip = req.params.zip;
  const zoos = getZoos(zip);
  let message;
  if (zoos.length == 0)
    message = `${zip} has no zoos.`;
  else if (zoos.length == 1)
    message = `${zip} zoos: ${zoos[0]}`;
  else {
    message = `${zip} zoos: ${zoos.join("; ")}`;
//     let length1 = zoos.length;
//     for (x of zoos.slice(0, -1)) {
//       message = message + " " + x + ";";
//     }
//     message = message + " " + zoos[length1-1];
  }
  res.send(message);
});



// Error handling
app.use((req, res, next) => {
  next("That route could not be found!");
});

app.use((err, req, res, next) => {
  err = err || "Internal server error!";
  res.send(err);
});

module.exports = app;
