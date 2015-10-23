// Bonfire: Falsy Bouncer
// Remove all falsy values from an array.
//
// Falsy values in javascript are false, null, 0, "", undefined, and NaN.


function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  function isNotFalse(value) {
    return Boolean(value);
  }

  var filtered = arr.filter(isNotFalse);
  return filtered;
}

bouncer([7, "ate", "", false, 9]);
