// document.querySelector('.img1').src = './images/dice1.png';
// var image = document.querySelector('.img1');
var ranNum1 = Math.floor(Math.random() * 6);
var ranNum2 = Math.floor(Math.random() * 6);
console.log(ranNum1);
console.log(ranNum2);
console.log(ranNum1 > ranNum2);
document.querySelector('.img1').src = `./images/dice${ranNum1 + 1}.png`;
document.querySelector('.img2').src = `./images/dice${ranNum2 + 1}.png`;
if (ranNum1 === ranNum2) {
	document.querySelector('h1').textContent = 'Draw!';
} else if (ranNum1 > ranNum2) {
	document.querySelector('h1').textContent = 'Player 1 wins!';
} else {
	document.querySelector('h1').textContent = 'Player 2 wins!';
}
