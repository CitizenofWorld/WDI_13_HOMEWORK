#You are to generate a basic "guess my number" game. The computer will pick a random number between 0 and 10. The user will 
#guess the number until they guess correctly
#https://gist.github.com/epoch/c05113c6b3666711c773x
require 'pry'


# print 'Enter a Max number: '
# x = gets.chomp.to_i
user_guess = gets.chomp.to_i
number = rand(1..10)

puts 'Guess my number: '
puts 'Wrong! Guess again: ' until user_guess == number
puts 'You guessed it'


# puts 'Guess my number: ' until user_guess == number
# if user_guess < number
# 	puts 'Guess Higher: '
# else user_guess > number
# 	puts 'Guess Lower: '
# end



binding.pry

