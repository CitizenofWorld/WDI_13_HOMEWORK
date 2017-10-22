// https://gist.github.com/epoch/c173a5b0c545babd3c40da93e150303a

//console.log("working")

$("#search-btn").on('click', function(event){
	event.preventDefault();
	var options = {
		url:"http://www.omdbapi.com",
		method: "get",
		data: {
			apikey:"2f6435d9",
			s: $('input').val()
		}
	}

	var appendMovie = function(response){
		$('.results').addClass("show")
		_.each(response.Search, function(movie){
			// debugger
			console.log(movie.Title)
				var $h2 = $('<h2>').text( movie.Title );
				var $year = $('<h3>').text( movie.Year);
				var $img = $('<img/>', {
					src: movie.Poster
				});
				$(".results").append( $h2 );
				$(".results").append( $year );
				$(".results").append( $img );
		})
	}

	$.ajax( options ).done( appendMovie )

});


