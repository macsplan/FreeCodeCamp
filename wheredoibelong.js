// Bonfire: Where do I belong
// Return the lowest index at which a value (second argument) should be inserted into a sorted array (first argument).
//
// For example, where([1,2,3,4], 1.5) should return 1 because it is greater than 1 (0th index), but less than 2 (1st index).


function where(arr, num) {
  // Find my place in this sorted array.
  arr.push(num);
  arr.sort(function(a,b) {
   if (a < b) {
     return -1;
   } else if (a > b) {
     return 1;
   } else {
     return 0;
   }
  });

  return arr.indexOf(num);
}

where([40, 60], 50);
