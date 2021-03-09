var n = Math.random();
n = n * 6;
n = Math.floor(n) + 1;
console.log(n);

var name1 = prompt('Your Name:');
var name2 = prompt('Your lovers name:');
var love = Math.random();
love = love * 101;
love = Math.floor(love);
console.log(love);

if (love === 100) {
	alert(
		'Your love score is ' +
			love +
			'%. You love yourself like Kanye loves Kanye.'
	);
} else if (love > 70) {
	alert('Your love score is ' + love + '%.');
} else if (love > 30 && love <= 70) {
} else if (love <= 30) {
}
