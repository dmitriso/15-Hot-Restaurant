
var app = express();

module.exports = function (app) {
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

});
}