const btnColors = ['yellow', 'blue', 'red', 'green'];
let gamePattern = [];
let userPattern = [];
let step = 0;
let level = 0;

const nextSequence = () => {
	return Math.floor(Math.random() * 4);
};

const randomColor = () => {
	return btnColors[nextSequence()];
};

const addColor = () => {
	level++;
	if (level > 0) $('#level-title').text('Level ' + level);
	const ranColor = randomColor();
	$('#' + ranColor).toggleClass('pressed');
	playSound(ranColor);
	gamePattern.push(ranColor);
	// console.log(gamePattern);
	setTimeout(() => {
		$('#' + ranColor).toggleClass('pressed');
	}, 300);
};

const playSound = (color) => {
	const audioColor = new Audio('./sounds/' + color + '.mp3');
	audioColor.play();
};

const checkAnswer = () => {
	if (userPattern[step] === gamePattern[step]) {
		step++;
		if (step == gamePattern.length) {
			console.log(userPattern);
			step = 0;
			userPattern = [];
			setTimeout(() => {
				addColor();
			}, 1000);
		}
	} else {
		// console.log('Bad');
		level = 0;
		$('#level-title').text('Game Over. Press any key to restart');
		$('body').addClass('game-over');
		playSound('wrong');
		removeClick();
		restartGame();
	}
};

const addClick = () => {
	$('.btn').click(function () {
		const userChosenColor = this.id;
		userPattern.push(userChosenColor);
		playSound(userChosenColor);
		$('#' + userChosenColor).toggleClass('pressed');
		setTimeout(() => {
			$('#' + userChosenColor).toggleClass('pressed');
		}, 300);
		checkAnswer();
	});
};

const removeClick = () => {
	$('.btn').off();
};

const restartGame = () => {
	$(document).on('keydown', function () {
		$(document).off();
		addClick();
		$('body').removeClass('game-over');
		gamePattern = [];
		userPattern = [];
		step = 0;
		level = 0;
		addColor();
	});
};

restartGame();
