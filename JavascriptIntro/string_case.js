var name = 'Greg';
console.log(name.toUpperCase());
console.log(name.toLowerCase());

var yourName = prompt('Write your name.');
var styleName =
	yourName.slice(0, 1).toUpperCase() +
	yourName.slice(1, yourName.length).toLowerCase();
alert('Hello ' + styleName);
