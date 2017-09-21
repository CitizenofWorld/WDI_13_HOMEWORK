require 'pry'
require_relative 'animal'
require_relative 'client'
require_relative 'shelter'

print 'Hello, would you like to add a new client or new animal?'
answer = gets.chomp.downcase

if answer == "new animal"

		print 'Enter animal name '
		new_name = gets.chomp.downcase
		print 'What is the animal age '
		new_age = gets.chomp
		print 'What gender is the animal '
		new_gender = gets.chomp
		print 'What is the animal species '
		new_species = gets.chomp
		else
		print 'Enter your name '
		client_name = gets.chomp.downcase
		print 'What is your age '
		client_age = gets.chomp
		print 'Do you have any children '
		client_child_num = gets.chomp
		print 'How many pets do you own '
		 client_pet_num = gets.chompend
end
	new_animal_entry = [new_name, new_age, new_gender, new_species]
	new_client_entry = [client_name, client_age, client_child_num, client_pet_num]



user_animal = Animal.new("0", "0", "0" ,"0", "0")
user_client = Client.new("0", "0", "0", "0")



#user_input = Animals.new(name, age, gender, species)
binding.pry
