// Bonfire: Slasher Flick
// Return the remaining elements of an array after chopping off n elements from the head.
//
// The head meaning the beginning of the array, or the zeroth index



function slasher(arr, howMany) {
  // it doesn't always pay to be first
  var removed = arr.splice(0, howMany);
  return arr;
}

slasher([1, 2, 3], 2);



function slasher(arr, howMany) {
  // it doesn't always pay to be first
  return arr.splice(howMany);
}

slasher([1, 2, 3], 2);
