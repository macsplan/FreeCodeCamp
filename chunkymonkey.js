// Bonfire: Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array.


function chunk(arr, size) {
  var newArr = [];
  for (var i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
 return newArr;
}

chunk(["a", "b", "c", "d"], 2);



function chunk (arr, size) {
  var result = [];
      i = 0,
      n = arr.length;

  while (i < n) {
    result.push(arr.slice(i, i += size));
  }
  return result;
}
chunk(['a', 'b', 'c', 'd'], 4);
