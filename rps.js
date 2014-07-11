var choices = ["rock", "paper", "scissors"];

function compuChoice(choice) {
  var computerChoice= Math.floor(Math.random() * choice.length);
  	alert(choices[computerChoice])
}
