const express = require('express');
const path = require("path");


var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Setting up HTML Routes
module.exports = function (app) {

// main page
app.get("/", (req, res) => {
      res.send(path.join(__dirname, "/main.html"))
});


//make reservation
app.get('/reservation', function (req, res) {
    res.send(path.join(__dirname, "/reservation.html"))
  });

//view tables 
app.get('/table', function (req, res) {
    res.send(path.join(__dirname, "/table.html"))
  });
  
}

  // SERVER LISTEN
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  