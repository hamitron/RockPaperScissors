var choices = ["rock", "paper", "scissors"];

function compuChoice(choice) {
  var computerChoice= Math.floor(Math.random() * choice.length);
  	document.getElementsByClassName("shape-choice")[computerChoice].style.backgroundColor = "blue";
}



function mouseOverColor() {
	document.getElementsByClassName("shape-choice")[0].style.backgroundColor = "rgba(191,255,255,0.8)";
	compuChoice(choices);
};
function mouseOverColor1() {
	document.getElementsByClassName("shape-choice")[1].style.backgroundColor = "rgba(191,255,255,0.8)";
};
function mouseOverColor2() {
	document.getElementsByClassName("shape-choice")[2].style.backgroundColor = "rgba(191,255,255,0.8)";
};

// function mouseOverColor2() {
// 	document.getElementById(this).style.backgroundColor = "rgba(191,255,255,0.8)";
// };


