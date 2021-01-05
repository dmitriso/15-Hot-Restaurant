const express = require('express');
const path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTML ROUTES
app.get('/tables', function (req, res) {
    res.sendFile(path.join(__dirname, './tables.html'));
});

app.get('/reserve', function (req, res) {
    res.sendFile(path.join(__dirname, './reserve.html'));
});

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './view.html'));
});





var tables = [
    {
        customerName: "Ahmed",
        customerEmail: "ahmed@example.com",
        customerID: "afhaque89",
        phoneNumberww: "000-000-0000"
    }
]

var waitlist = [
    {
    customerName: "Saima",
    customerEmail: "saima@example.com",
    phoneNumber: "000-000-0000",
    customerID: "saimaCool"
    }
    ]

// API ROUTES
app.get('/api/waitlist', (req, res) => {
    return res.json(waitlist);
});

app.get('/api/table', (req, res) => {
    return res.json(tables);
});

app.post('/api/table', (req,res) => {
    var newTable = req.body;
    
    console.log(newTable);

    tables.push(newTable);

    res.json(newTable);

})


// SERVER LISTEN
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});