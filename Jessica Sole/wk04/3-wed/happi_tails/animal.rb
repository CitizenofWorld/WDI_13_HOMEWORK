
class Animal
	attr_accessor :name, :age, :gender, :species, :inventory


#@@animals = []
	def initialize(name, age, gender, species)
		@name = name
		@age = age
		@gender = gender
		@species = species
		@inventory = []
		#Animal.add(self) --- or --- #@@animals.push self
	end

# def Animal.add(animal)
# @@animals.push(animal)
# end

	def create_animal(info)
			@inventory.push(info)
			puts "Thank You, you added #{@name} to the shelter"
	end


# def Animal.display_animal-----------use class method to work with all the objects you have
# @@animal.each do |animal|
# 	puts animal.name
# end


# def Animal.find(animals, animal_name)
# 	animals.each do |animal|
# 		if animal == animal_name
# 			return animal_name
# 		end
# 	end

end

