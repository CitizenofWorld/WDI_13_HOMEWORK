require 'pry'
require_relative 'animal'
require_relative 'client'
require_relative 'shelter'

print 'Hello, would you like to add animal, add client? '
answer = gets.chomp.downcase


case answer
	when "add animal"

		puts "Enter animal name "
		animal_name = gets.chomp.downcase
		puts "Enter age "
		animal_age = gets.chomp
		puts "Enter gender "
		animal_gender = gets.chomp.downcase
		puts "Enter species "
		animal_species = gets.chomp.downcase
		new_animal_entry = Animal.new(animal_name, animal_age, animal_gender, animal_species)
		animal_info =[animal_name, animal_age, animal_gender, animal_species]
		new_animal_entry.create_animal(animal_info)

	when "add client"
		puts "Enter your name "
		client_name = gets.chomp.downcase
		puts "Enter your age "
		client_age = gets.chomp
		puts "How many children live in your household "
		client_child_num = gets.chomp
		puts "How many pets do you own"
		client_pet_num = gets.chomp
		new_client_entry = Client.new(client_name, client_age, client_child_num, client_pet_num)
		client_info = [client_name, client_age, client_child_num, client_pet_num]
		new_client_entry.create_client(client_info)


	when "shelter"
		puts "Would you like to look at client or animal inventory "
		shelter_answer = gets.chomp.downcase
			if shelter_answer == "animal"
				new_animal_entry.inventory
			elsif shelter_answer == "client"
				new_client_entry.client_list
			else
				puts "Error: incorrect input"
			end

	end

	print "Would you like to adopt an animal? "
	answer2 = gets.chomp

	when "yes"
		puts "Who would you like to adopt? "
		adopt_name = gets.chomp
		new_adopt = Adopt.new(adopt_name)



	else
		puts "Have a nice day!"


end











#user_input = Animals.new(name, age, gender, species)
binding.pry
