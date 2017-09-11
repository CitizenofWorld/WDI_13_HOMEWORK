// link : https://gist.github.com/kasun-maldeni/c337852cb0bf5072d6e91cb5ba78500e/
var marioImg = document.querySelector(".heads-mario");
var bowserImg = document.querySelector(".tails-bowser");
var button = document.querySelector("#button");

var coin = ["heads","tails"];
var results =[]


//counter to count flips
var winnerPoint = 5;
var heads = 0;
var tails = 0;




// RUN


	var randomCoin =  function() {
	var marioCurrentLeft = parseInt(marioImg.style.left);
	var bowserCurrentLeft = parseInt(bowserImg.style.left);
	var randomNumber = coin[Math.floor( (Math.random() * coin.length))];

		   		if (heads === 5 || tails === 5){
	               marioImg.style.left = 550 + "px";
	               bowserImg.style.left = 550 + "px";
	               heads = 0;
	               tails = 0;
	               return 
	               }


			   if ( randomNumber === "heads"){
		  	 	heads ++
		  	 	marioImg.style.left = (marioCurrentLeft + 100) + "px";
		   	    }else{
		   		tails ++
		   		bowserImg.style.left = (bowserCurrentLeft + 100) + "px";
		   	}
	}


button.addEventListener("click", randomCoin);







//when button is hit then img moves across screen 
// 	// var randomNumber = coin[Math.round(Math.random())]  is another way to get number between 0-1
		//var randomNumber = coin[Math.floor( (Math.random() * coin.length))];
		// var randomNumber = coin[Math.round(Math.random())]  is another way to get number between 0-1
	// can also use a while loop. if the stoping of the loop is based on a condition