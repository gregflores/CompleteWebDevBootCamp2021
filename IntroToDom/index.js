// document;
// #document<!DOCTYPE html><html lang=​"en">​<head>​<meta charset=​"UTF-8">​<meta http-equiv=​"X-UA-Compatible" content=​"IE=edge">​<meta name=​"viewport" content=​"width=device-width, initial-scale=1.0">​<title>​My Website​</title>​<link rel=​"stylesheet" href=​"style.css">​</head>​<body>​<h1>​Hello​</h1>​<input type=​"checkbox" name=​"checkbox" id=​"check">​<button>​Click Me​</button>​<ul>​…​</ul>​<!-- Code injected by live-server --><script type=​"text/​javascript">​…​</script>​</body>​</html>​
// document.firstElementChild
// <html lang=​"en">​<head>​…​</head>​<body>​…​</body>​</html>​
// document.firstElementChild.firstElementChild
// <head>​<meta charset=​"UTF-8">​<meta http-equiv=​"X-UA-Compatible" content=​"IE=edge">​<meta name=​"viewport" content=​"width=device-width, initial-scale=1.0">​<title>​My Website​</title>​<link rel=​"stylesheet" href=​"style.css">​</head>​
// document.firstElementChild.lastElementChild
// <body>​…​</body>​
// document.firstElementChild.lastElementChild.firstElementChild
// <h1>​Hello​</h1>​
// var heading = document.firstElementChild.lastElementChild
// undefined
// heading
// <body>​…​</body>​
// heading = heading.firstElementChild
// <h1>​Hello​</h1>​
// heading.innerHTML = "Good Bye"
// "Good Bye"
// heading.innerText = "Hello"
// "Hello"
// heading.innerHTML = "Good Bye"
// "Good Bye"
// heading.style.color = "red"
// "red"
// document.querySelector("input").click
// ƒ click() { [native code] }
// document.querySelector("input").click()
// undefined
// document.querySelector("input").click()
// undefined
// document.querySelector("input").click()
// undefined
// document.querySelector("input").click()
// undefined
// document.querySelector("input").click()
// undefined
// heading.color
// undefined
// heading.style.color
// "red"
// heading.style.colour
// undefined
// heading.style.color
// "red"
