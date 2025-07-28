const args = process.argv.slice(2);

let playerChoice = args.join(" ");

if (playerChoice) {
  const words = playerChoice.match(/[a-zA-Z]+|[^a-zA-Z]+/g);

  let translatedWords = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let translatedCurrentWord = "";

    if (/[a-zA-Z]+/.test(word)) {
      let firstLetterLowerCase = word.charAt(0).toLowerCase();
      let secondLetterLowerCase = word.charAt(1).toLowerCase();

      const vowels = ["a", "e", "i", "o", "u"];

      if (vowels.includes(firstLetterLowerCase)) {
        translatedCurrentWord = word + "way";
      } else if (
        !vowels.includes(firstLetterLowerCase) &&
        secondLetterLowerCase &&
        !vowels.includes(secondLetterLowerCase)
      ) {
        const secondRuleFirstTwoLetters = word.slice(0, 2);
        const secondRuleRemainingLetters = word.slice(2);
        translatedCurrentWord =
          secondRuleRemainingLetters + secondRuleFirstTwoLetters + "ay";
      } else if (
        !vowels.includes(firstLetterLowerCase) &&
        vowels.includes(secondLetterLowerCase)
      ) {
        const thirdRuleFirstLetter = word.slice(0, 1);
        const thirdRuleRemainingLetter = word.slice(1);
        translatedCurrentWord =
          thirdRuleRemainingLetter + thirdRuleFirstLetter + "ay";
      } else {
        translatedCurrentWord = word + "ay";
      }
      translatedWords.push(translatedCurrentWord);
    } else {
      translatedWords.push(word);
    }
  }
  console.log(translatedWords.join(""));
} else {
  console.log(
    "Please provide an argument. Example: node pigLatin.js Hello World"
  );
}
