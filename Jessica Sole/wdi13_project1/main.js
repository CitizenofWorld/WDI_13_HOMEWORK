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

for (i = 0; i < iMax; i++) {
    p1Board[i] = new Array();
    for (j = 0; j < jMax; j++) {
        p1Board[i][j] = 0;
    }
}
for (i = 0; i < iMax; i++) {
    p2Board[i] = new Array();
    for (j = 0; j < jMax; j++) {
        p2Board[i][j] = 0;
    }
}




var getCol = function() {
    for (var k = 1; k <= 9; k++) {


        document.querySelector(".col" + k).addEventListener("click", function(event) {
            clickNumber++
            if (clickNumber % 2 === 0) {
                event.target.classList.add("ninja-cat");
                boxPos = Number(event.target.id.substr(5, 1));
                rowPos = Number(event.target.id.substr(3, 1));
                p2Board[rowPos][boxPos] = 1
            } else {
                event.target.classList.add("ninja-dog");
                boxPos = Number(event.target.id.substr(5, 1));
                rowPos = Number(event.target.id.substr(3, 1));
                p1Board[rowPos][boxPos] = 1
            }

            // player 1  win addition for 3 in a row win.
            var p1Row0Total = 0;
            var p1Row1Total = 0;
            var p1Row2Total = 0;
            for (var l = 0; l <= 2; l++) {
                p1Row0Total = p1Row0Total + p1Board[0][l]
                p1Row1Total = p1Row1Total + p1Board[1][l]
                p1Row2Total = p1Row2Total + p1Board[2][l]
            }
            if (p1Row0Total === 3) {
                console.log("win");
            } else if (p1Row1Total === 3) {
                console.log("win");
            } else if (p1Row2Total === 3) {
                console.log("win");
            }

            //player 2 win addition for 3 across win.
            var p2Row0Total = 0;
            var p2Row1Total = 0;
            var p2Row2Total = 0;
            for (var m = 0; m <= 2; m++) {
                p2Row0Total = p2Row0Total + p2Board[0][m];
                p2Row1Total = p2Row1Total + p2Board[1][m];
                p2Row2Total = p2Row2Total + p2Board[2][m];
            }
            if (p2Row0Total === 3) {
                console.log("win");
            } else if (p2Row1Total === 3) {
                console.log("win");
            } else if (p2Row2Total === 3) {
                console.log("win");
            }

            //  Player 1 addition of columns for win

            var p1Col0Total = 0;
            var p1Col1Total = 0;
            var p1Col2Total = 0;

            // adds FIRST column in each for loop

            for (var n = 0; n <= 2; n++) {
                p1Col0Total = p1Col0Total + p1Board[n][0];
            }
            for (var o = 0; o <= 2; o++) {
                p1Col1Total = p1Col1Total + p1Board[o][1];
            }
            for (var p = 0; p <= 2; p++) {
                p1Col2Total = p1Col2Total + p1Board[p][2];
            }

            // diagonal win

            var p1Diag1 = 0;
            var p1Diag2 = 0;
            var p2Diag1 = 0;
            var p2Diag2 = 0;


            for (var q = 0; q <= 2; q++) {
                p1Diag1 = p1Diag1 + p1Board[q][q];
            }

            for (var r = 0; r<= 2; r++){
                p1Diag2 = p1Diag2 + p1Board[r][r];
            }
            for (var s = 0; s <= 2; s++) {
                p1Diag1 = p1Diag1 + p2Board[s][s];
            }

            for (var t = 0; t<= 2; t++){
                p1Diag2 = p1Diag2 + p2Board[t][t];
            }


            if (p1Diag1 === 3){
                console.log("win");
            } else if (p1Diag2 === 3){
                console.log("win");
            }else if(p2Diag1 === 3){
                console.log("win");
            }else if(p2Diag2 === 3){
                console.log("win");
            }



            //determins which has 3 in a row for column winner
            if (p1Col0Total === 3) {
                console.log("win");
            } else if (p1Col1Total === 3) {
                console.log("win");
            } else if (p1Col2Total === 3) {
                console.log("win");
            }

            //column addition for Player 2

            console.log(p1Col0Total, p1Col1Total, p1Col2Total)

        })
    }
}

getCol();


// var addRow = p1Board[0].reduce(function (a, b) {
//    return a + b;
// }, 0);