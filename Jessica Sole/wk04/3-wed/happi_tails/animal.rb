


class Animal

	def initialize(name, age, gender, species, inventory)
		@name = name
		@age = age
		@gender = gender
		@species = species
		@inventory = []
	end

	def animal_info

		puts "My name is #{@name}. I am a #{@age} year old #{@gender} #{@species}."
	end

	def create_animal(info)
			@inventory.push(info)
	end



end 

