// Bonfire: Confirm the Ending
// Check if a string (first argument) ends with the given target string (second argument).

function end(str, target) {
  return str.substr(str.length - target.length) === target;
}

end('Bastian', 'n');


function end(str, target) {
  //take string and find last letter
  var lastLetter = str.substr(str.length - target.length);
  if (lastLetter === target) {
    return true;
  } else {
    return false;
  }
}

end("Bastian", "n");
