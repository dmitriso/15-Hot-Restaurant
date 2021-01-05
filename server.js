const express = require('express');
const path = require("path");



var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTML ROUTES





// API ROUTES


// SERVER LISTEN
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });