const args = process.argv.slice(2);

if (args.length < 2) {
  console.log('Invalid: Example node caesarCipher.js "hello world" 3');
  process.exit(1);
}

const numberArgs = parseInt(args[args.length - 1]);
const sentenceArgs = args.slice(0, -1);
let playerChoice = sentenceArgs.join(" ");

function alphabetArray() {
  const alphabet = [];
  for (let i = 97; i <= 122; i++) {
    alphabet.push(String.fromCharCode(i));
  }
  return alphabet;
}

const alphabet = alphabetArray();

const words = playerChoice.match(/[a-zA-Z]+|[^a-zA-Z]+/g);
let translatedWords = [];

for (let i = 0; i < words.length; i++) {
  let word = words[i];
  let translatedCurrentWord = "";

  if (/[a-zA-Z]+/.test(word)) {
    for (let l = 0; l < word.length; l++) {
      let char = word[l];
      let letterLowerCase = char.toLowerCase();
      let index = alphabet.indexOf(letterLowerCase);

      if (index !== -1) {
        let newIndex = (index + numberArgs) % alphabet.length;
        if (newIndex < 0) {
          newIndex += alphabet.length;
        }

        let newChar = alphabet[newIndex];

        if (char === char.toUpperCase()) {
          newChar = newChar.toUpperCase();
        }
        translatedCurrentWord += newChar;
      } else {
        translatedCurrentWord += char;
      }
    }
    translatedWords.push(translatedCurrentWord);
  } else {
    translatedWords.push(word);
  }
}
console.log(translatedWords.join(""));
