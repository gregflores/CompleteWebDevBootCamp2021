var n = 9;
while (n > 0) {
	console.log(n + ' bottles of beer on the wall, ' + n + ' bottles of beer.');
	console.log(
		'Take one down and pass it around, ' +
			n +
			' bottles of beer on the wall.'
	);

	n--;
}
if (n === 0) {
	console.log(
		'No more bottles of beer on the wall, no more bottles of beer.'
	);
	console.log(
		'Go to the store and buy some more, 99 bottles of beer on the wall.'
	);
}
