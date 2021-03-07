var name = 'greg';
// slice (start index, end index non inclusive)
console.log(name.slice(1, 4));

var tweet = prompt('Write a tweet.');
var tweetUnder140 = tweet.slice(0, 140);
alert(tweetUnder140);
