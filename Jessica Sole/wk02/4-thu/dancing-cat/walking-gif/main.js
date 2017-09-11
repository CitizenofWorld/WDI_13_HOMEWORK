var catTimerID = null;
var stopBtn = document.querySelector("#stop-button");
var fasterBtn = document.querySelector("#speed-button");
var startBtn = document.querySelector("#start-button");
var backBtn = document.querySelector("#back-button");
var img = document.querySelector("img");



var originalSpeed = 400;



// cat walk one step
var startWalk = function() {
	var currentLeftOffset = parseInt(img.style.left);
	img.style.left = (currentLeftOffset + 10) +"px";
	if (currentLeftOffset > 700){
	img.style.left = 0 + "px";
	}
}

// walk backwards
var backwards = function(){
	var currentLeftOffset = parseInt(img.style.left);
	img.style.left = (currentLeftOffset - 10) +"px";
	if (currentLeftOffset === 0 ){
		img.style.left = 0 + "px";
		clearInterval(catTimerID);

	}

}

// start walking on the click
var clickStart = function(){
	if (catTimerID !== null) {
		clearInterval(catTimerID);
	}
	catTimerID = setInterval(startWalk, originalSpeed);
}

 //stop walking
var stop = function(){
	clearInterval(catTimerID);
}

// walk faster on click
var faster = function () {
	if (catTimerID !== null) {
		clearInterval(catTimerID)
	}
	catTimerID = setInterval(startWalk, (originalSpeed - 200) );
}


// start backwards on click
var clickBack = function(){
		if (catTimerID !== null) {
		clearInterval(catTimerID)
	}

	catTimerID = setInterval(backwards, 200)

}



 startBtn.addEventListener("click", clickStart);
 stopBtn.addEventListener("click", stop);
 fasterBtn.addEventListener("click", faster);
 backBtn.addEventListener("click", clickBack);


// // window.innerWidth
// var stopCatWalk = function() {

// }


// var startCatWalk = function() {
// 	setInterval(catWalk, 100);

// }