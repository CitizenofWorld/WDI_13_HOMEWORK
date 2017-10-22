//https://gist.github.com/epoch/ef6a0cda5b68cb005dc1bf327bcc65e4

console.log("working")


$(".search-btn").on('click', function(){
	var options = {
		url: "http://api.giphy.com/v1/gifs/search",
		method: "get",
		data: {
			api_key: "bGVvSQAffW3URvIMgqtvLVK2zwd2yU50",
			q: $('.search').val(),
			limit: 10
		}
	}

	var appendGiphy = function(response){
			_.each(response['data'], function(gif){
				var $img = $('<img/>',{
					src: gif.images.downsized_medium.url
				});

				$('.results').append( $img )
				$('img').addClass('image')
			})

	}

	$.ajax( options ).done( appendGiphy )

});




$(window).scroll(function() {

	if ($(window).scrollTop() > $('body').height() * 2 / 3){

	var options = {
		url: "http://api.giphy.com/v1/gifs/search",
		method: "get",
		data: {
			api_key: "bGVvSQAffW3URvIMgqtvLVK2zwd2yU50",
			q: $('.search').val(),
			limit: 10,
			offset: $('img').length
		}
	}

	var appendGiphy = function(response){
			_.each(response['data'], function(gif){
				var $img = $('<img/>',{
					src: gif.images.downsized_medium.url
				});

				$('.results').append( $img )
				$('img').addClass('image')
			})

	}

	$.ajax( options ).done( appendGiphy )

	}
})