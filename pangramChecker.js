function pangramChecker(input) {
  input = input.toLowerCase(); // here we bring our input to lower case, so it doesn't affect, if we use upper case in input
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const missingLetters = alphabet.filter(n => input.indexOf(n) === -1); // here we compare alphabet with our input

  return missingLetters.length === 0 // means if missingLetters is empty
    ? 'This is a pangram'
    : `This is not a pangram. Missing letters are ${missingLetters}`;

}

