var express = require('express'),
app = express(),
path = require('path');
app.use(express.static(__dirname ));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + 'index.html'));
});
var server = app.listen(process.env.PORT || 3000);