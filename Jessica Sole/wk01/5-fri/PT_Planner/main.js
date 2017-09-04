var alamein = ["Flinders Street", "Richmond", "East Richmond", "Burnley", "Hawthorne", "Glenferie"];
var glenWaverly = ["Flagstaff", "Melbourne Central", "Parliament", "Richmond", "Kooyong", "Tooronga"];
var sandringham = ["Southern Cross", "Richmond", "South Yarra", "Prahan", "Windsor"];

var originPosition = [] //array to reference origin position by pushing the given number to represent the chosen origin array and its origin index
var destinationPos = [] //array to reference destination by pushing the given number to represent the chosen destination array and its  index


var directions = function() {
    var promptOrigin = prompt("Enter your origin");
    var promptDestination = prompt("Enter your destination");
    var origin = promptOrigin.toLowerCase();
    var destination = promptDestination.toLowerCase();
    var transfer = "richmond"; // create a fixed variable for the transfer point, identified transfer position on origin line using transfer poin as destination and origin points.
    var originTransPos = []; //array for transfer
    var destinationTransPos = []; //array for transfer
    var stops = 0; // string iterated to keep track and log number of stops, stops are added by how many times i run through loop not the array.
    var output = ""; // string created to contain the output from directions function



    //determins the array and position of origin
    if (alamein.indexOf(origin) >= 0) {
        originPosition.push(1, alamein.indexOf(origin));
        originTransPos.push(1, alamein.indexOf(transfer));
    } else if (glenWaverly.indexOf(origin) >= 0) {
        originPosition.push(2, glenWaverly.indexOf(origin));
        originTransPos.push(2, glenWaverly.indexOf(transfer));
    } else if (sandringham.indexOf(origin) >= 0) {
        originPosition.push(3, sandringham.indexOf(origin));
        originTransPos.push(3, sandringham.indexOf(transfer));
    }
    //determines the array and position of destination

    //determins the array and position of destination
    if (alamein.indexOf(destination) >= 0) {
        destinationPos.push(1, alamein.indexOf(destination));
        destinationTransPos.push(1, alamein.indexOf(transfer));
    } else if (glenWaverly.indexOf(destination) >= 0) {
        destinationPos.push(2, glenWaverly.indexOf(destination));
        destinationTransPos.push(2, glenWaverly.indexOf(transfer));
    } else if (sandringham.indexOf(destination) >= 0) {
        destinationPos.push(3, sandringham.indexOf(destination));
        destinationTransPos.push(3, sandringham.indexOf(transfer));
    }

    //if the origin and destination are on the same line and origin is before the destination this statement will run

    if (originPosition[0] === destinationPos[0] && originPosition[1] !== destinationPos[1] && originPosition[1] < destinationPos[1]) {
        //the for loop prints each stop in increasing order from origin to destination
        for (var i = originPosition[1]; i < destinationPos[1]; i++) {
            if (originPosition[0] === 1) {
                output += alamein[i];
            } else if (originPosition[0] === 2) {
                output += glenWaverly[i];
            } else if (originPosition[0] === 3) {
                output += sandringham[i];
            }
            output += " -----> "; // adds arrow to output in between each stop
            stops++; // adds number of stops to var stops
        }
    }

    //if the origin and destination are on the same line and origin is after the destination this statement will run

    if (originPosition[0] === destinationPos[0] && originPosition[1] !== destinationPos[1] && originPosition[1] > destinationPos[1]) {
        //the for loop prints each stop in decreasing order from origin to destination
        for (var i = originPosition[1]; i > destinationPos[1]; i--) {
            if (originPosition[0] === 1) {
                output += alamein[i];
            } else if (originPosition[0] === 2) {
                output += glenWaverly[i];
            } else if (originPosition[0] === 3) {
                output += sandringham[i];
            }
            output += " -----> "; // adds arrow to output in between each stop
            stops++; // adds number of stops to var stops
        }

    }

    //if the origin and destination are not on the same line and origin is before the transfer this statement will run

    if (originPosition[0] !== destinationPos[0] && originPosition[1] < originTransPos[1]) {
        //the for loop prints each stop in increasing order from origin to transfer
        for (var i = originPosition[1]; i < originTransPos[1]; i++) {
            if (originPosition[0] === 1) {
                output += alamein[i];
            } else if (originPosition[0] === 2) {
                output += glenWaverly[i];
            } else if (originPosition[0] === 3) {
                output += sandringham[i];
            }
            output += " -----> "; // adds arrow to output in between each stop
            stops++; // adds number of stops to var stops
        }

    }

    //if the origin and destination are not on the same line and origin is after the transfer this statement will run
    if (originPosition[0] !== destinationPos[0] && originPosition[1] > originTransPos[1]) {
        //the for loop prints each stop in decreasing order from origin to transfer
        for (var i = originPosition[1]; i > originTransPos[1]; i--) {
            if (originPosition[0] === 1) {
                output += alamein[i];
            } else if (originPosition[0] === 2) {
                output += glenWaverly[i];
            } else if (originPosition[0] === 3) {
                output += sandringham[i];
            }
            output += " -----> "; // adds arrow to output in between each stop
            stops++; // adds number of stops to var stops
        }

    }

    //if the origin and destination are not on the same line and transfer is before the destination this statement will run

    if (originPosition[0] !== destinationPos[0] && destinationTransPos[1] < destinationPos[1]) {
        //the for loop prints each stop in increasing order from origin to transfer
        for (var i = destinationTransPos[1]; i < destinationPos[1]; i++) {
            if (destinationTransPos[0] === 1) {
                output += alamein[i];
            } else if (destinationTransPos[0] === 2) {
                output += glenWaverly[i];
            } else if (destinationTransPos[0] === 3) {
                output += sandringham[i];
            }
            output += " -----> "; // adds arrow to output in between each stop
            stops++; // adds number of stops to var stops
        }

    }

    //if the origin and destination are not on the same line and the transfer is after the destination this statement will run

    if (originPosition[0] !== destinationPos[0] && destinationTransPos[1] > destinationPos[1]) {
        //the for loop prints each stop in increasing order from origin to transfer
        for (var i = destinationTransPos[1]; i > destinationPos[1]; i--) {
            if (destinationTransPos[0] === 1) {
                output += alamein[i];
            } else if (destinationTransPos[0] === 2) {
                output += glenWaverly[i];
            } else if (destinationTransPos[0] === 3) {
                output += sandringham[i];
            }
            output += " -----> "; // adds arrow to output in between each stop
            stops++; // adds number of stops to var stops
        }
    }

    output += destination; // append destination to avoid printing arrow at the end
    console.log(output + "\n" + stops + " stops");

}
directions();