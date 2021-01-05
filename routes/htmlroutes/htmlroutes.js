
const path = require("path");

// Setting up HTML Routes
module.exports = function (app) {

//make reservation
app.get('/reservation', function (req, res) {
    res.sendFile(path.join(__dirname, "../../public/views/reservation.html"))
  });

//view tables 
app.get('/table', function (req, res) {
    res.sendFile(path.join(__dirname, "../../public/views/table.html"))
  });

  // main page
app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "../../public/views/main.html"))
});
}

