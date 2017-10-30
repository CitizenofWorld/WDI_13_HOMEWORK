def request_omdb title
	HTTParty.get("http://omdbapi.com/?s=#{@title}&apikey=#{ENV['OMDB_API_KEY']}").parsed_response
end


def get_movie_from_db?(title)
	Movie.find_by(title: title)
end
