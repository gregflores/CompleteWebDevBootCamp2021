function getMilk() {
	console.log('going to get milk');
	console.log('buying milk');
	console.log('returning home');
}

getMilk();

const getMilk2 = (() => {
	console.log('Arrow Function');
})();
