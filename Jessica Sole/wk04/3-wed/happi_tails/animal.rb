


class Animal
	attr_accessor :name, :age, :gender, :species, :inventory 

	def initialize(name, age, gender, species)
		@name = name
		@age = age
		@gender = gender
		@species = species
		@inventory = []
	end



	def create_animal(info)
			@inventory.push(info)
			puts "You added #{@name} to the shelter"
	end



end 

