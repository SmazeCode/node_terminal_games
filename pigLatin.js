const args = process.argv.slice(2);

let sentence = args.join(" ");

if (sentence) {
  if (/[^a-zA-Z\s]/.test(sentence)) {
    console.error("Error: Numbers and special characters are not allowed.");
    process.exit(1);
  }

  const words = sentence.split(" ");
  let newWords = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let newWord = "";

    if (word === "") {
      newWords.push("");
      continue;
    }

    let firstLetterLowerCase = word.charAt(0).toLowerCase();
    let secondLetterLowerCase = word.charAt(1)
      ? word.charAt(1).toLowerCase()
      : "";
    const vowels = ["a", "e", "i", "o", "u"];

    if (vowels.includes(firstLetterLowerCase)) {
      newWord = word + "way";
    } else if (
      !vowels.includes(firstLetterLowerCase) &&
      secondLetterLowerCase &&
      !vowels.includes(secondLetterLowerCase)
    ) {
      const secondRuleFirstTwoLetters = word.slice(0, 2);
      const secondRuleRemainingLetters = word.slice(2);
      newWord = secondRuleRemainingLetters + secondRuleFirstTwoLetters + "ay";
    } else if (
      !vowels.includes(firstLetterLowerCase) &&
      vowels.includes(secondLetterLowerCase)
    ) {
      const thirdRuleFirstLetter = word.slice(0, 1);
      const thirdRuleRemainingLetter = word.slice(1);
      newWord = thirdRuleRemainingLetter + thirdRuleFirstLetter + "ay";
    } else {
      newWord = word + "ay";
    }
    newWords.push(newWord);
  }
  console.log(newWords.join(" "));
} else {
  console.log(
    "Please provide an argument. Example: node pigLatin.js Hello world"
  );
}
