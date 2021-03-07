/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to
 * write any Karel program you want.
 **/
function main() {
	//your code here
	//cornerToCorner();
	//beeperLine();
	chessPattern();
}

function chessPattern() {
	beeperRowPair();
	beeperRowPair();
	threeBeeperRow();
}

function beeperRowPair() {
	threeBeeperRow();
	turnLeft();
	move();
	turnLeft();
	twoBeeperRow();
	turnRight();
	move();
	turnRight();
}

function threeBeeperRow() {
	putBeeper();
	move();
	move();
	putBeeper();
	move();
	move();
	putBeeper();
}

function twoBeeperRow() {
	move();
	putBeeper();
	move();
	move();
	putBeeper();
	move();
}

function cornerToCorner() {
	move();
	move();
	move();
	move();
	turnLeft();
	move4Times();
}

function move4Times() {
	move();
	move();
	move();
	move();
}

function beeperLine() {
	putBeeper();
	moveDiagnol();
	putBeeper();
	moveDiagnol();
	putBeeper();
	moveDiagnol();
	putBeeper();
	moveDiagnol();
	putBeeper();
}

function turnRight() {
	turnLeft();
	turnLeft();
	turnLeft();
}

function moveDiagnol() {
	move();
	turnLeft();
	move();
	turnRight();
}
