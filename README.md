# pangramChecker
written in JavaScript

Pangram is a sentence using every letter of a given alphabet (English in our case) at least once. For example: The five boxing wizards jump quickly.

This script will help you to find out, if your sentence is a pangram or not. If not, it will show you all letters that are missing.



To run the code, you have to call the function pangramChecker (by writing its name) and write the sentence you want to prove in the parameter (in brackets) using the quote marks (it could be double or single quotes, but make sure, that you use only one type). For example: pangramChecker (“Is this a pangram?”). 

Then the script takes an English alphabet (which is in a constant alphabet) and compare it with your phrase. 

Every time the script finds the letter, that isn’t present in your phrase, it saves this letter in constant missingLetters. 

After script goes through whole alphabet, it checks if there is any information saved in constant missingLetters. 

If there is at least one letter, script makes an output with a message “This is not a pangram” and shows the content of constant 
missingLetters. 

If this constant is empty, it means that all letters of English alphabet are present in the input and the phrase is a pangram and the output will be “This is a pangram”. 
