function fibonacci(n) {
	if (n === 0) return;
	if (n === 1) return [0];
	if (n === 2) return [0, 1];
	var fibArr = [0, 1];
	for (var i = 2; i < n; i++) {
		fibArr.push(fibArr[i - 1] + fibArr[i - 2]);
	}
	return fibArr;
}

console.log(fibonacci(7));
