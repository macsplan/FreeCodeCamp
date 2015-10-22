// Bonfire: Repeat a string repeat a string
// Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number.

function repeat(str, num) {
  // repeat after me
  var strRepeat = [];
  while (strRepeat.length < num) {
    strRepeat.push(str);
  }
  return strRepeat.join('');
}

repeat('abc', 3);



function repeat(str, num) {
  // repeat after me
  if (num > 0) {
    return str.repeat(num);
  } else {
    return str.repeat(0);
  }
}

repeat("abc", 3);
