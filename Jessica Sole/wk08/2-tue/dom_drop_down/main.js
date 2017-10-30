console.log("working")

var cities =[
{
	name: "New York City",
	cssName: "new-york",
	val: "nyc"
},
{
	name: "San Francisco",
	cssName: "san-fran",
	val: "sf"
},
{
	name: "Los Angeles",
	cssName: "l-a",
	val: "la"
},
{
	name: "Austin",
	cssName: "aus-texas",
	val: "austin"
},
{
	name: "Sydney",
	cssName: "syd",
	val: "sydney"
}];






$(document).ready(function(){
  _.each( cities, function(elem){

    var $option = $('<option>').text( elem.name ).addClass(elem.cssName).val(elem.val);
    $("#city-type").append( $option );
   })
});


// $(document).ready(function(){
// $('select, #city-type').on('click', function(event) {
// 	var $selected = $(event.target).val()
// 	$('body').removeClass().addClass( $selected );
// 	// debugger
//   })
// })

$(document).ready(function(){
$('#city-type').change( function() {
	var $selected = $('#city-type').val()
	$('body').removeClass().addClass( $selected )

  })
})
