// Bonfire: Reverse a String
// Reverse the provided string.
//
// You may need to turn the string into an array before you can reverse it.
//
// Your result must be a string.
//
// Remember to use Read-Search-Ask if you get stuck. Write your own code.
//
// Here are some helpful links:
//
// Global String Object
// String.split()
// Array.reverse()
// Array.join()




function reverseString(str) {
  str = str.split('').reverse().join('');
  return str;
}

reverseString("hello", "");
