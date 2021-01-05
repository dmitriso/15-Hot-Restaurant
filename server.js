const express = require('express');
const path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());


require('./routes/htmlroutes/htmlroutes.js')(app);
require('./routes/apiroutes/apiroutes.js')(app);


var tables = [
    {
        customerName: "Ahmed",
        customerEmail: "ahmed@example.com",
        customerID: "afhaque89",
        phoneNumber: "000-000-0000"
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

// // API ROUTES
// app.get('/api/waitlist', (req, res) => {
//     return res.json(waitlist);
// });

// app.get('/api/table', (req, res) => {
//     return res.json(tables);
// });

// app.post('/api/table', (req,res) => {
//     var newTable = req.body;

//     console.log(newTable);

//     tables.push(newTable);

//     res.json(newTable);

// })


// SERVER LISTEN
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});