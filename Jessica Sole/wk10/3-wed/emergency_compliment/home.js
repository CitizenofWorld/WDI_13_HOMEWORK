var _ = require('underscore')

var compliments = [
  "Your instructors love you",
  "High five = ^5",
  "You're great!",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

function home( req, resp ) {

	var randomColor = _.sample(['green', 'mistyrose', 'lightblue', 'purple','yellow'])

	resp.render('index', { 
		magic: _.sample(compliments) ,
		color: randomColor,
		name:  req.params.name || ''
	});
}

function about(req, resp) {
	resp.send('asdfasdfadsfasdf')
}

module.exports = {
	home: home,
	about: about
}
