var guestList = ['Greg', 'Sam', 'Ryan', 'Ashley', 'Will', 'kaleb'];

console.log(guestList[0]);

var guestName = prompt('What is your name?');
var isOnList = guestList.includes(guestName);

if (isOnList) alert('Welcome!');
else alert("You're not on the list");
