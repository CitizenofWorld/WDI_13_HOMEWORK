
//what the current balance is
var currBalance = document.querySelector(".current-balance");

//number inside input box
var enteredAmount = document.querySelector(".input-amount");
var withdraw =document.querySelector(".withdraw");
var deposit = document.querySelector(".deposit");

var amountWithdraw = function(num) {
		if (Number(enteredAmount.value) > Number(currBalance.textContent)) {
	document.getElementById("overdraw").style.color = "red";
}
	return Number(currBalance.textContent) - num
}

var amountDeposit = function(num) {
			if (Number(currBalance.textContent) >= 0) {
	document.getElementById("overdraw").style.color = "green";
}

	return Number(currBalance.textContent) + num
}


withdraw.addEventListener("click", function(){
	//debugger
	var num = Number(enteredAmount.value);
	var sum = amountWithdraw(num);
	//debugger
	currBalance.textContent = sum.toFixed(2)

})

deposit.addEventListener("click", function(){
	var num = Number(enteredAmount.value);
	var sum = amountDeposit(num);
	//debugger
	currBalance.textContent = sum.toFixed(2)
})



// withdraw more than you have




// make two accounts link two accounts and if you withdraw more than it will take from the savings