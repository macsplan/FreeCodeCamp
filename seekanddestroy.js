// Bonfire: Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.


function destroyer(arr) {
  var mustDelete = [];
  for (var i = 1; i < arguments.length; i++) {
    mustDelete.push(arguments[i]);
  }
  return arr.filter(function(x) {
    if (mustDelete.indexOf(x) >= 0) {
      return false;
    } else {
      return true;
    }
  });
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);



function destroyer(arr) {
  var slicedArgs = Array.prototype.slice.call(arguments ,1);
  return arr.filter(function(element) {
    return slicedArgs.indexOf(element) === -1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
