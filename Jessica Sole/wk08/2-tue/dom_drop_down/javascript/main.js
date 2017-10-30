console.log("working")

var cities = ["Austin", "NYC", "Sydney", "San Francisco", "Los Angeles"]


//loop array and create p elems
_.each(cities, function(key){
	var $p = $('<p>').text

})

//create p elems
var createElement = function(){
		var t = document.createTextNode(_.each(cities, function(key) {
		p.append(t)
	}));
	document.getElementById("city-type").append(p)
}
























// 	var x = document.createElement("P");                        // Create a <p> node
// var t = document.createTextNode("This is a paragraph.");    // Create a text node
// x.appendChild(t);                                           // Append the text to <p>
// document.body.appendChild(x);                               // Append <p> to <body>