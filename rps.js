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

	if ((computerChoice == outcomeUser) || (outcomeUser == computerChoice)){
		document.getElementsByClassName("whoWins")[0].innerHTML = "<p>Tie!!!<p/>";
	} else if (
		(outcomeUser == 0 && computerChoice == 1 ) ||
		(outcomeUser == 1 && computerChoice == 2 ) ||
		(outcomeUser == 2 && computerChoice == 0 )) {
			document.getElementsByClassName("whoWins")[0].innerHTML = "<p>Computer Wins!</p>";
	} else if (
		(outcomeUser == 0 && computerChoice == 2 ) ||
		(outcomeUser == 1 && computerChoice == 0 ) ||
		(outcomeUser == 2 && computerChoice == 1 )) {
			document.getElementsByClassName("whoWins")[0].innerHTML = "<p>You Win!</p>";
	} else {
		document.getElementsByClassName("whoWins")[0].innerHTML = "<p>How did we get here?</p>";
	}

}


function playAgain () {
	document.getElementsByClassName("whoWins")[0].innerHTML= "<p>Who wins?</p>";
	for (i = 0; i < 3; i++) { document.getElementsByClassName("shape-choice")[i].style.backgroundColor = "white";};
	


}
