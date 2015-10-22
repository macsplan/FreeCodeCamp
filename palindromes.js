// Bonfire: Check for Palindromes
// Return true if the given string is a palindrome. Otherwise, return false.
//
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
//
// You'll need to remove punctuation and turn everything lower case in order to check for palindromes.
//
// We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.


function palindrome(str) {
  // get phrase, remove spaces, convert to lowercase, store into variable
var strEdited = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  // reverse sting
var StrReverse = strEdited.split('').reverse().join('');
  // compare reversed string with original
  // if same
  //   return true
  // else
  //   return false
  // end
    if ( StrReverse === strEdited) {
  return true;
} else {
  return false;
};
}



palindrome("race car");



function palindrome(str) {
  var clean = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();
  var compare = clean.toLocaleLowerCase().split("").reverse().join("");
  if (clean === compare) {
    return true;
  }
  else {
    return false;
  }
}

palindrome("race car");
