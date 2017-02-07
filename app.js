var express = require('express');
var path = require('path');

var app = express();

app.set('port', (process.env.PORT || 5000));

//configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));

//use middleware

//define routes
//home
app.get('/', function (req, res) {
    res.render('index')
});

//catch the favicon first
app.get('/favicon.ico', function(req, res) {
    res.json(204);
});

var testy = {};

//get new URL, add to database and send
app.get('/:id', function (req, res) {
    testy.number1 = req.params.id;
    res.json(testy)
});


app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
});