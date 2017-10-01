require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'
# always call the folder with index views
#binding.pry

get '/' do
  erb :index
end

get '/answer' do
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