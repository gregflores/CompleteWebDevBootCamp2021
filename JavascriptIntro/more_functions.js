// function getMilk(bottles) {
// 	console.log('leaveHouse');
// 	console.log('moveRight');
// 	console.log('moveRight');
// 	console.log('moveUp');
// 	console.log('moveUp');
// 	console.log('moveUp');
// 	console.log('moveUp');
// 	console.log('moveRight');
// 	console.log('moveRight');
// 	console.log('buy ' + bottles + ' bottles of milk');
// 	console.log('moveLeft');
// 	console.log('moveLeft');
// 	console.log('moveDown');
// 	console.log('moveDown');
// 	console.log('moveDown');
// 	console.log('moveDown');
// 	console.log('moveLeft');
// 	console.log('moveLeft');
// 	console.log('enterHouse');
// }

// getMilk(4);

// function getMilk(money) {
// 	var milkCost = 1.5;
// 	var bottlesPossible = money / 1.5;
// 	console.log('leaveHouse');
// 	console.log('moveRight');
// 	console.log('moveRight');
// 	console.log('moveUp');
// 	console.log('moveUp');
// 	console.log('moveUp');
// 	console.log('moveUp');
// 	console.log('moveRight');
// 	console.log('moveRight');
// 	console.log('buy ' + Math.floor(bottlesPossible) + ' bottles of milk');
// 	console.log('moveLeft');
// 	console.log('moveLeft');
// 	console.log('moveDown');
// 	console.log('moveDown');
// 	console.log('moveDown');
// 	console.log('moveDown');
// 	console.log('moveLeft');
// 	console.log('moveLeft');
// 	console.log('enterHouse');
// }

// getMilk(7);

function getMilk(money, milkCost) {
	console.log('leaveHouse');
	console.log('moveRight');
	console.log('moveRight');
	console.log('moveUp');
	console.log('moveUp');
	console.log('moveUp');
	console.log('moveUp');
	console.log('moveRight');
	console.log('moveRight');
	console.log('buy ' + calcBottles(money, milkCost) + ' bottles of milk');
	console.log('moveLeft');
	console.log('moveLeft');
	console.log('moveDown');
	console.log('moveDown');
	console.log('moveDown');
	console.log('moveDown');
	console.log('moveLeft');
	console.log('moveLeft');
	console.log('enterHouse');
	return calcChange(money, milkCost);
}

console.log(getMilk(7, 3));

function calcBottles(startingMoney, costPerBottle) {
	var bottlesPossible = Math.floor(startingMoney / costPerBottle);
	return bottlesPossible;
}

function calcChange(startingMoney, milkCost) {
	return startingMoney % milkCost;
}
