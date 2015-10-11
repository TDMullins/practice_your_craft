var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.redirect('/index.html');
});


app.listen(process.env.PORT || '3000');
console.log("App listening on port 3000");