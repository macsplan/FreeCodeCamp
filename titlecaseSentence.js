// Bonfire: Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
//
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
  var words = str.split(" ");
  for (var i = 0; i < words.length; i++) {
    var left = words[i].charAt(0).toUpperCase();
    var right = words[i].slice(1).toLowerCase();
    words[i] = left + right;
  }
  return words.join(" ");
}

titleCase("I'm a little tea pot");
