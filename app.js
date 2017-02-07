var express = require('express');
var path = require('path');
var multer = require('multer');

var app = express();

app.set('port', (process.env.PORT || 5000));

//configure app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));




//home
app.get('/', function (req, res) {
    res.render('index')
});

//catch the favicon first
app.get('/favicon.ico', function(req, res) {
    res.json(204);
});

var fileInfo = {};

app.post('/', multer({dest: './uploads/'}).single('upload'), function(req, res) {

    fileInfo.Bytes = req.file.size;
    fileInfo.Kilobytes = req.file.size/1000;
    fileInfo.Megabytes = req.file.size/1000000;
    res.json(fileInfo);

});

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
});