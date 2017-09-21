
class Client

	def initialize(name, age, child_num, pet_list)
		@name = name
		@age = age
		@child_num = child_num
		@pet_list = pet_list
		@client_list = []
	end

	def get_client_info
		puts "My name is #{@name}. I am a #{@age} years old with #{@child_num} children and #{@pet_list} pets."
	end

	def get_client_list(info)
		@client_list.push(info)
	end



end