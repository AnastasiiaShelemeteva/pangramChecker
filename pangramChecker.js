function pangramChecker(input) {
  input = input.toLowerCase();
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const missingLetters = alphabet.filter(n => input.indexOf(n) === -1);

  return missingLetters.length === 0
    ? 'This is a pangram'
    : `This is not a pangram. Missing letters are ${missingLetters}`;

}

