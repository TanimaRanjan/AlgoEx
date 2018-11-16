
var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdddle"}, age: 34},
  {name: {first: "Ev", middle: "Lu", last: "Atorg"}, age: 40},
  {name: {first: "Le", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

function getFullName(obj) {
  var name = '';
  var longestNameL = 0;
  var longestName
  for(var i=0; i<people.length;i++) {
    nameObj = people[i].name;
    if(nameObj.middle !== undefined) {
      name = nameObj.first + ' ' + nameObj.middle + ' ' + nameObj.last;
    } else {
      name = nameObj.first + ' ' + nameObj.last;
    }
    if(longestNameL < name.length) {
      longestNameL = name.length;
      longestName = i;
    }
    console.log(name);
  }
  console.log(longestNameL);
  console.log(obj[longestName]);
}

