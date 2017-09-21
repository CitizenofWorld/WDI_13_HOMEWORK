

class Monkey

	def initialize(name, species)
		@name = name
		@species = species
		@foods_eaten = []
	end

	def name
		return @name
	end

	def species
		 return @species
	end

	def eat(food)
		@foods_eaten.push food
	end

	def introduce
		puts "Hi my name is #{@name}. I am a #{@species}. I had #{@foods_eaten} for brunch"
	end

end
