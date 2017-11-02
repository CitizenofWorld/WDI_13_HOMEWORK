var request = require('request');
// var http = require('http');
// var fs = require('fs');





request('http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=942c82c7fb4f03389db435943908e538',
	function (error, response, body) {

  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

  var toJSON = JSON.parse(body);
  console.log( toJSON.list[0].main.temp ); // Print the HTML for the Google homepage.
});


