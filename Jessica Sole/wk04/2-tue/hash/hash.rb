require 'pry'

users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}



# How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
users["Jonathan"][:twitter]


#How would you add the number 7 to Erik's favorite numbers?
users['Erik'][:favorite_numbers] << 7


# How would you add yourself to the users hash?
users.keys << "Jessica"
users["Jessica"] = { :twitter=>"jfhejfhej", :favorite_numbers=>[13, 29] }

# How would you return the array of Erik's favorite numbers?
users["Erik"][:favorite_numbers]

# How would you return the smallest of Erik's favorite numbers?
users["Erik"][:favorite_numbers].sort[0]

# How would you return an array of Anil's favorite numbers that are also even?
users["Erik"][:favorite_numbers].select{|num| num.even?}

# How would you return an array of the favorite numbers common to all users?
fav_num_arr = []

users.each do |key, value|
  puts fav_num_arr += value[:favorite_numbers]
end


# How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
fav_num_arr.sort.uniq

binding.pry


