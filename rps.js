var choices = [0, 1, 2];
var outcomeUser 
var computerChoice

function mouseOverColor() {
	document.getElementsByClassName("shape-choice")[0].style.backgroundColor = "rgba(20,204,204,0.5)";
	outcomeUser = 0;
	compuChoice(outcomeUser);
};
function mouseOverColor1() {
	document.getElementsByClassName("shape-choice")[1].style.backgroundColor = "rgba(20,204,204,0.5)";
	outcomeUser = 1;
	compuChoice(outcomeUser);
};
function mouseOverColor2() {
	document.getElementsByClassName("shape-choice")[2].style.backgroundColor = "rgba(20,2204,204,0.5)";
	outcomeUser = 2;
	compuChoice(outcomeUser);
};

function compuChoice(choice) {
  computerChoice = Math.floor(Math.random() * choices.length);
  document.getElementsByClassName("shape-choice")[computerChoice].style.backgroundColor = "rgba(255,0,187,0.5)";

	if (computerChoice == outcomeUser || outcomeUser == computerChoice ) {
		document.getElementsByClassName("whoWins")[0].innerHTML = "<p>TiE!!!</p>" ;
	} else if (outcomeUser == 0 && computerChoice == 1){
		document.getElementsByClassName("whoWins")[0].innerHTML = "<p>Computer Wins!</p>" ;
	} else if (outcomeUser == 0 && computerChoice == 2){
		document.getElementsByClassName("whoWins")[0].innerHTML = "<p>You Win!</p>";
	} else if (outcomeUser == 1 && computerChoice == 0){
		document.getElementsByClassName("whoWins")[0].innerHTML = "<p>You Win!</p>";
	} else if (outcomeUser == 1 && computerChoice == 2){
		document.getElementsByClassName("whoWins")[0].innerHTML = "<p>Computer Wins!</p>";
	} else if (outcomeUser == 2 && computerChoice == 0){
		document.getElementsByClassName("whoWins")[0].innerHTML = "<p>Computer Wins!</p>";
	} else if (outcomeUser == 2 && computerChoice == 1){
		document.getElementsByClassName("whoWins")[0].innerHTML = "<p>You Win!</p>";
	}
	else {
		document.getElementsByClassName("whoWins")[0].innerHTML = "<p>Nothing</p>";
}
};









// function rpsOutcome(outcomeUser, computerChoice) {
// if (computerChoice == outcomeUser) {
// 	document.getElementsByClassName("whoWins")[0].innerHTML = "<p>It is a Tie!</p>";
// } else if (computerChoice === 0 && outcomeUser === 1) {
// 	document.getElementsByClassName("shape-choice")[outcome2].style.backgroundColor = "rgba(255,255,255,1);";
// } else {
// 		document.getElementsByClassName("whoWins")[0].innerHTML = "<p>Nothing</p>";
// }
// };






// function mouseOverColor2() {
// 	document.getElementById(this).style.backgroundColor = "rgba(191,255,255,0.8)";
// };


