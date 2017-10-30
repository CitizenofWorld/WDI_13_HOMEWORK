class MoviesController < ApplicationController
	protect_from_forgery with: :null_session

def index
	@movies = Movie.all
end

end
