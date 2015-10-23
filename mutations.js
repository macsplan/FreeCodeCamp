// Bonfire: Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
//
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
//
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
//
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".


function mutation(arr) {
  var array1 = arr[1].toLowerCase().split('');
  var array2 = arr[0].toLowerCase().split('');
  for (i = 0; i < array1.length; i++) {
    if (array2.indexOf(array1[i]) < 0)
      return false;
  }
  return true;
}

mutation(["hello", "Hey"]);


function mutation(arr) {

  var firstArray = arr[0].toLowerCase();
  var secondArray = arr[1].toLowerCase();
  for(var i = 0; i < arr[1].length; i++) {
    if ( firstArray.indexOf(secondArray[i]) === -1)
      { return false;
      }
  }
  return true;
}

mutation(['hello', 'hey']);
