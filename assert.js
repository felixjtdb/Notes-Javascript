var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  },

  isEqual: function(operand1, operand2) {
    if (operand1 !== operand2) {
      // throw new Error("Assertion failed: " + operand1 + " is not equal to " + operand2);
      document.getElementById("test").innerHTML = ("Assertion failed: " + operand1 + " is not equal to " + operand2);
    } else {
     document.getElementById("test").innerHTML = "PASSED TEST"
    }
  }


};
