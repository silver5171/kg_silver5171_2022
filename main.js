/* -----------------------------------------------------------------------------  *
*   This is the Kargo summer 2021 internship pre-assessment for Derek DeVaughn    *
*   GitHub: silver5171                                                            *
*  ----------------------------------------------------------------------------- */

// The name object that maps digits to their phonetic string equivelent
var CONSTNAMEOBJ = {
  "1": "One",
  "2": "Two",
  "3": "Three",
  "4": "Four",
  "5": "Five",
  "6": "Six",
  "7": "Seven",
  "8": "Eight",
  "9": "Nine",
  "0": "Zero"
};

/* Requires:  arr to be an array of integers
*  Effects:   Takes each integer and returns a string of the phonetic equivalent
*             of each digit in the integer
*  Example:
*             arr = [3, 25, 209, -7]
*             returns "Three,TwoFive,TwoZeroNine,Seven" */
function makeIntsStrings(arr) {
  var outputString = "";
  var arrNum;
  for (var i=0; i<arr.length; ++i) {
    var outputAddon = "";
    arrNum = arr[i];
    if (arrNum < 0) {
      arrNum *= -1;
    }
    while (arrNum !== 0) {
      outputAddon = CONSTNAMEOBJ[(arrNum % 10) + ""] + outputAddon;
      // To reset the arrNum to an integer
      arrNum = Math.floor(arrNum/10);
    }
    outputString += outputAddon;
    if (i !== (arr.length-1)) {
      outputString += ",";
    }
  }
  return outputString;
}

var arr = [];
for (var i=2; i<process.argv.length; ++i) {
  arr.push(process.argv[i]);
}
console.log(makeIntsStrings(arr));

/*Completed task.

Bugs Found and fixed:
        Question said that it can input integers. I did not account for negative numbers. Fixed with a simple negative
        (<0) check.
Additions:
  - Made the functionality of the solution a function for potential later use.
  - Now able to take in user input from the command line like in the question
  - Added some comments in the code*/