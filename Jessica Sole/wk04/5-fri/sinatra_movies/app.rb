require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get '/' do
  
end


get '/lookup' do
  @title = params[:title]
  @result = HTTParty.get("http://omdbapi.com/?s=#{@title}&apikey=#{
    ENV['OMDB_API_KEY']}")
    @movie = @result['Search']
    erb :lookup

end

get '/details' do
  @title = params[:t]
  @result = HTTParty.get("http://omdbapi.com/?t=#{@title}&apikey=#{
    ENV['OMDB_API_KEY']}")
  @movie = @result
  erb :details

end
