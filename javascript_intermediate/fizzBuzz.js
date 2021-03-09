function fizzBuzz(n) {
	var output = [];
	output.push(1);
	output.pop();
	for (var i = 1; i < n; i++) {
		var value;
		if (i % 3 === 0 && i % 5 === 0) value = 'FizzBuzz';
		else if (i % 3 === 0) value = 'Fizz';
		else if (i % 5 === 0) value = 'Buzz';
		else value = i;
		output.push(value);
		value = '';
	}
	console.log(output);
}

fizzBuzz(21);
