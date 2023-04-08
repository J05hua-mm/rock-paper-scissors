var a = "draw";
var b = "players wins";
var c = "computerwins";

var computerpoints = 0;
var playerpoints = 0;


function getComputerchoice() {
var i = Math.floor((Math.random()*3)+1);

if(i === 1)
{
  return "rock";
}
else if(i === 2)
{
  return "paper";
}
else if(i === 3)
{
  return "scissors";
}
}



function playground() {

  var computerSelection = getComputerchoice();
  var text = prompt("choose your weapon");
  var playerselection = text.toLowerCase();

if(playerselection === "rock")
{
  if(computerSelection === "rock")
  {
    return a;
  }
  else if (computerSelection === "paper")
  {
    return c;
  }
  else if(computerSelection === "scissors")
  {
 return b;
  }
}
else if(playerselection === "paper")
{
  if(computerSelection === "rock")
  {
return b;
  }
  else if (computerSelection === "paper")
  {
return a;
  }
  else if(computerSelection === "scissors")
  {
return c;
  }
}
else if(playerselection === "scissors")
{
  if(computerSelection === "rock")
  {
return b;
  }
  else if (computerSelection === "paper")
  {
return c;
  }
  else if(computerSelection === "scissors")
  {
return a;
  }
}
}

function game() {
var result = playground();
console.log(result);

if(result === c)
{
computerpoints++;
}
else if(result === b)
{
playerpoints++;
}

// var result = playground();
// console.log(result);
//
// if(result === c)
// {
// computerpoints++;
// }
// else if(result === b)
// {
// playerpoints++;
// }

// var result = playground();
// console.log(result);
//
// if(result === c)
// {
// computerpoints++;
// }
// else if(result === b)
// {
// playerpoints++;
// }
//
// var result = playground();
// console.log(result);
//
// if(result === c)
// {
// computerpoints++;
// }
// else if(result === b)
// {
// playerpoints++;
// }
//
// var result = playground();
// console.log(result);
//
// if(result === c)
// {
// computerpoints++;
// }
// else if(result === b)
// {
// playerpoints++;
// }
// else if(result === a) {
//   computerpoints++;
//   playerpoints++;
// }

if(computerpoints > playerpoints)
{
  alert("computer wins!,player loses");
}
else if(playerpoints > computerpoints)
{
  alert("player wins!,computer loses  ");
}
else if(playerpoints === computerpoints)
{
  alert("draw match");
}

alert("game over");
var option = prompt("do you want another round type 'yes' or 'no'");
if(option === 'yes')
{
  game();
}
}

game();
