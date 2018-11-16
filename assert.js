
function assert(expectedBeh, descOfBehavior) {
  if(!expectedBeh) {
    console.log(descOfBehavior);
  } else {
    console.log("Test Passed");
  }
}

var first = [1, 2, 3, 4, 5];
var second = [1, 2, 3, 4, 5];
var third = [1, 9, 2, 4, 6];
var fourth = [1, 2, 3, 4, 5, 6];
var fifth = [0, 0, 1];
var sixth = [9, 9, 1];

function testArrayEquality(array1, array2) {
  for (var i = 0; i < array1.length; i++) {
    var globalEquality = true
    if (array1.length !== array2.length) {
        globalEquality = false
    }
    if (array1[i] !== array2[i]) {
      globalEquality = false;
    } 
  }
  return globalEquality
}

assert(testArrayEquality(first, second) === true, 'it should return true when inputs are equivalent');
assert(testArrayEquality(first, third) === false, 'it should return false when inputs are different');
assert(testArrayEquality(first, fourth) === false, 'it should return false when inputs are different');
assert(testArrayEquality(fifth, sixth) === false, 'it should return false when inputs are different');
