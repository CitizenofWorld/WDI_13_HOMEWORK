require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'
require_relative 'db_config'
require_relative'models/movie'

# always call the folder with index views
#binding.pry

get '/' do
  erb :index
end


# --- search for movie --
get '/about' do
  @title = params[:title]
  @result = HTTParty.get("http://omdbapi.com/?s=#{@title}&apikey=#{
    ENV['OMDB_API_KEY']}")
  @movies = @result.parsed_response['Search']
	# @title = params[:t]
 #  @result = HTTParty.get("http://omdbapi.com/?t=#{@title}&apikey=#{
 #    ENV['OMDB_API_KEY']}")
 #  @movie = @result
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





