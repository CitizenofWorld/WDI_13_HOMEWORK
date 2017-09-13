// add event listener to box.  if click is odd
//add player 1 if click is even add player 2
console.log("working");
// var appendImg = document.querySelector("#col1");
var clickNumber = 0;
var boxPos = 0

var p1Board = new Array();
var p2Board = new Array();

var iMax = 3;
var jMax = 3;
var f = new Array();

	for (i=0;i<iMax;i++) {
 p1Board[i] = new Array();
 for (j = 0;j < jMax; j++) {
  p1Board[i][j] = 0;
	  }
  }
  	for (i=0;i<iMax;i++) {
 p2Board[i] = new Array();
 for (j = 0;j < jMax; j++) {
  p2Board[i][j] = 0;
	  }
  }



var getCol = function() {
	for (var i = 1; i<= 9; i++){


		document.querySelector(".col" + i).addEventListener("click", function(event){
			clickNumber++
			if (clickNumber % 2 === 0){
				event.target.classList.add("ninja1");
				boxPos = Number(event.target.id.substr(5,1));
				rowPos = Number(event.target.id.substr(3,1));
				p1Board[rowPos][boxPos] = 1
			}else{
				event.target.classList.add("ninja2");
				boxPos = Number(event.target.id.substr(5,1));
				rowPos = Number(event.target.id.substr(3,1));
				p2Board[rowPos][boxPos] = 1
			}

			})


		}


	}



getCol();

