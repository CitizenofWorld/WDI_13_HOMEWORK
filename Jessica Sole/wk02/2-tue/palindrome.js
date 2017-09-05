//Palindrome Problem
palindromeString = "a but tuba";

var Palindrome = function(){
	if (palindromeString.split("") === palindromeString.split("").reverse()){
		console.log("True");
	}else{
		console.log("False");
	}
}
Palindrome(palindromeString);

// did not finish.  my function returns False and I am trying to debug it.