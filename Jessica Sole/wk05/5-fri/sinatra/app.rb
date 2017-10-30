require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'
require_relative 'db_config'
require_relative'models/movie'
require_relative 'movie_methods'

# always call the folder with index views
#binding.pry

get '/' do
  erb :index
end


# --- search for movie --
get '/about' do
  title = params[:title]
  @result = HTTParty.get("http://omdbapi.com/?s=#{@title}&apikey=#{
    ENV['OMDB_API_KEY']}")
  @movies = @result.parsed_response['Search']
	# @title = params[:t]
 #  @result = HTTParty.get("http://omdbapi.com/?t=#{@title}&apikey=#{
 #    ENV['OMDB_API_KEY']}")
 #  @movie = @result

@movie = get_movie_from_db?(title) #return nil if no movie

unless @movie
	@movie = request_omdb(title)
end

	erb :search

end


#--- display a list of search results click for individual display
get '/detail' do
movie = params[:search]
results = HTTParty.get("http://omdbapi.com/?t=#{movie}&apikey=#{
    ENV['OMDB_API_KEY']}")
@data = results.parsed_response

erb :about

end



# get '/movie' do
# 	imdb_id = params[:imdb_id]
# 	@movie = HTTParty.get("http://omdbapi.com/?t=#{movie}&apikey=#{
#     ENV['OMDB_API_KEY']}").parsed_response
# 	erb :movieend





