
class Client

attr_accessor :name, :age, :child_num, :pet_num, :client_list

	def initialize(name, age, child_num, pet_num)
		@name = name
		@age = age
		@child_num = child_num
		@pet_num = pet_num
		@client_list = []
	end

	def get_client_info
		puts "My name is #{@name}. I am a #{@age} years old with #{@child_num} children and #{@pet_list} pets."
	end

		def create_client(info)
			@client_list.push(info)
			puts "Welcome #{@name} to the Happitails family!"
	end



end