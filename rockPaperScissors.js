const args = process.argv.slice(2);
console.log(args);

const allowedInput = ["Rock", "Paper", "Scissors"];
let playerChoice = process.argv[2];

if (!allowedInput.includes(playerChoice)) {
  console.log(
    "Wrong input! You can only answer with: rock, paper or scissors!"
  );
  process.exit(1);
}

console.log(`You chose: ${playerChoice}`);

const cpuChoices = ["Rock", "Paper", "Scissors"];

const randomNumber = Math.floor(Math.random() * cpuChoices.length);
const cpuChoice = cpuChoices[randomNumber];
console.log(`CPU chose: ${cpuChoice}`);

if (playerChoice == cpuChoice) {
  console.log(`CPU chose ${cpuChoice} you chose ${playerChoice} its a draw!`);
} else if (
  (playerChoice === "Rock" && cpuChoice === "Scissors") ||
  (playerChoice === "Paper" && cpuChoice === "Rock") ||
  (playerChoice === "Scissors" && cpuChoice === "Paper")
) {
  console.log(`${playerChoice} beats ${cpuChoice} you won!`);
} else {
  console.log(`${cpuChoice} beats ${playerChoice} you lost!`);
}
