var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var PORT = 8888;



app.set('views', './views');
app.set('view engine', 'ejs');


app.use( express.static('public') );

app.get('/', function( req, resp ) {
	resp.render('index');
});


app.get('/randy', function(req, resp) {
	resp.render('randy', {name: req.query.nameVal});
});



app.listen( PORT );