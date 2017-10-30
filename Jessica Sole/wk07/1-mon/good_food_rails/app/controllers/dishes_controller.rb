class DishesController < ApplicationController

	def show
		@dish = Dish.find(params[:id])
		@comments = @dish.comments
		# markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML)
		# @content_html = markdown.render(@dish.content)

	end

	def index
		@dishes = Dish.all
	end

	def edit
		@dish = Dish.find(params[:id])
	end

	def new

	end

	def create
		dish = Dish.new
		dish.title = params[:title]
		dish.content = params[:content]
		dish.save
		redirect_to '/dishes'
	end

	def update
		dish = Dish.find(params[:id])
		dish.title = params[:title]
		dish.content = params[:content]
		dish.save
		redirect_to "/dishes/#{dish.id}"
	end

	def destroy
	@dish = Dish.find(params[:id])
	@dish.destroy
	redirect_to '/dishes'

	end

end
