const express = require('express');
const path = require("path");



var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTML ROUTES
app.get('/tables', function(req,res) {
    res.sendFile(path.join(__dirname, './tables.html'));
});

app.get('/reserve', function(req,res) {
    res.sendFile(path.join(__dirname, './reserve.html'));
});

app.get('*', function(req,res) {
    res.sendFile(path.join(__dirname, './index.html'));
});




// API ROUTES
app.get('/api/waitlist', (req,res) => {
    
})

app.get('/api/table', (req,res) => {

})

// SERVER LISTEN
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });