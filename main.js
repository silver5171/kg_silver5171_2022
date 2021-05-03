


var arr = [3, 25, 209];
var arrNum;

var nameObj = {
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

var outputString = "";
for (var i=0; i<arr.length; ++i) {
  var outputAddon = "";
  arrNum = arr[i];
  while (!(arrNum === 0)) {
    outputAddon = nameObj[(arrNum % 10) + ""] + outputAddon;
    arrNum = Math.floor(arrNum/10);
  }
  outputString += outputAddon;
  if (!(i === arr.length-1)) {
    outputString += ",";
  }
}
console.log(outputString);