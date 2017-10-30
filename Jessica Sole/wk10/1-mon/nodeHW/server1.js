var fs = require('fs');
var http = require('http');

var toJson = function( csv ) {
	var lines = csv.split("\n");
	var result = [];

	var headers = lines[0].split(",");

		for (var i = 1; i < lines.length; i++){

      var object = {};
      var currentline = lines[i].split(",");

      for (var j=0; j<headers.length; j++){
        object[headers] = currentline[j];
      }
        result.push( object );

			}debugger
			return JSON.stringify( result );
		}


var app = function(request,response) {
	fs.readFile('mycsv.csv', 'utf-8', function(err, data) {
		response.write( toJson( data ) );
		response.end();
	})
}

var server = http.createServer( app );
server.listen( 8888 );