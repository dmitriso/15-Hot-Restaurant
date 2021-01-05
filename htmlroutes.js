
const path = require("path");

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

