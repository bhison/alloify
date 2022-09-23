type vowel = "a" | "e" | "i" | "o" | "u";
const vowels = ["a", "e", "i", "o", "u"];
const alternativeVowels = {
  a: ["e", "i", "o", "u"],
  e: ["a", "i", "o", "u"],
  i: ["a", "e", "o", "u"],
  o: ["a", "e", "i", "u"],
  u: ["a", "e", "i", "o"],
};
const vowelPairs = [
  //   "ae",
  //   "ai",
  //   "ao",
  //   "au",
  "ey",
  //   "ai",
  //   "ee",
  //   "oo",
  //   "ou",
  //   "ea",
  //   "ay",
];
const dontTouchEnders = ["xx"]; //["ed", "ey"];
const loners = ["i", "a"];

const alloifyEngine = (input: string): string => {
  let returnString = "";
  for (let i = 0; i < input.length; i++) {
    console.log("!!");
    const letter = input[i].toLowerCase();
    if (vowels.includes(letter)) {
      //check loner
      if (loners.includes(letter) && i < input.length && input[i + 1] === " ") {
        returnString += letter;
        continue;
      }

      //check enders
      // if (i < input.length - 1 && letter === "e" && input[i + 1] === " ") {
      //   returnString += letter;
      //   continue;
      // }
      // if (
      //   i < input.length - 2 &&
      //   input[i + 2].toLowerCase() === " " &&
      //   dontTouchEnders.includes(letter + input[i + 1].toLowerCase())
      // ) {
      //   returnString += letter + input[i + 1].toLowerCase();
      //   i++;
      //   continue;
      // }

      //check pairs
      // if (
      //   i < input.length - 1 &&
      //   vowelPairs.includes(letter + input[i + 1].toLowerCase())
      // ) {
      //   returnString +=
      //     vowelPairs[Math.floor(Math.random() * vowelPairs.length)];
      //   i += 2;
      //   continue;
      // }

      //individual
      console.log(input[i]);
      returnString +=
        alternativeVowels[letter as vowel][Math.floor(Math.random() * 4) % 4];
    } else {
      returnString += input[i];
    }
  }

  return returnString;
};

export { alloifyEngine };
