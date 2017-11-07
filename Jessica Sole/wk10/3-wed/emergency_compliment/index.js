var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var PORT = 8888;
var _ = require('underscore')

var pagesController = require('./home')


app.set('views', './views');
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: false }))
app.use( express.static('public') );



app.get('/about', pagesController.about)
app.post('/do_stuff', function(req, resp) {
	
	resp.redirect('/about')
})


app.get('/', pagesController.home);
app.get('/:name', pagesController.home);




app.listen( PORT );