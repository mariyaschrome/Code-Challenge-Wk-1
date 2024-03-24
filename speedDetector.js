const prompt = require("prompt-sync")({ sigint: true });
// Function to check speed of car
function detectSpeed(speed) {
  // set speed limit and deduction of demerit point for every 5km
  let speedLimit = 70;
  if (speed <= speedLimit) {
    return "Ok";
  } else {
  // use math expression to calculate demerit points for speed above speed limit
    let kmPerDemerit = 5;
    demeritPoints = Math.abs(speed - speedLimit) / kmPerDemerit;
    if (demeritPoints >= 12) {
      return "License Suspended.";
    } else {
      return `You have ${demeritPoints} demerit points`;
    }
  }
}

// Prompt the user to input Speed
const speed = prompt("Please enter your speed.");
// Output demerit points
console.log(`${detectSpeed(speed)}`);
