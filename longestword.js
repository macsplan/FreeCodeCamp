// Bonfire: Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.
//
// Your response should be a number.

function findLongestWord(str) {
  // split string into array and store in a variable
  var wordSplit = str.split(' ');
  // declare longest word length variable
  var longestWordLength = 0;
  // declare longest word variable
  var longestWord;

  // for loop to check length of each word
  for (var i = 0; i < wordSplit.length; i++) {
    // if length is greater then previous replace longestWordLength and remember longestWord
    if (wordSplit[i].length > longestWordLength) {
      longestWordLength = wordSplit[i].length;
      longestWord = wordSplit[i];
    }
  }
   return longestWord.length

  // return the longestword
}

findLongestWord("The quick brown fox jumped over the lazy dog");




function findLongestWord(str) {
  str = str.split(' ');
  var longestword = str;
  var longest = 0;
  for (var i = 0; i < longestword.length; i++ ) {
    if ( longest < longestword[i].length ) {
       longest = longestword[i].length;
    }

  }
  return longest;
}

findLongestWord('The quick brown fox jumped over the lazy dog');
