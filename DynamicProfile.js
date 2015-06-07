var router = require("/Users/tempuser/Desktop/JavaScript/router.js");
//Problem: Need a simple way to look at a user's badge count, javascript points afrom a web browser
//Solution: Use Node.js to perform the profile look ups and serve our templates via http

//Create a web server

var http = require('http');
http.createServer(function(request,response){
	router.home(request, response);
	router.user(request, response);
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
