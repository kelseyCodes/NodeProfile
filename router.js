var Profile = require("/Users/tempuser/Desktop/JavaScript/getProfile.js");
var renderer = require("/Users/tempuser/Desktop/JavaScript/renderer.js");
var querystring = require("querystring");

var commonHeader = {'Content-Type': 'text/html'};

function home(request, response) {
		//if url === "/" && GET
		if(request.url === "/") {
			if(request.method.toLowerCase() === "get") {
			//show search field		
			response.writeHead(200, commonHeader);
			renderer.view("header", {}, response);
			renderer.view("search", {}, response);
			renderer.view("footer", {}, response);
			response.end();
		} else {
			//get the post data from body
			request.on('data', function(postBody){
			//extract the username
			var query = querystring.parse(postBody.toString());
			response.writeHead(303, {"Location": "/" + query.username});
			response.end();
			});
		}
	}
}
	
	
function user(request, response) {
	//if url === "/..." 
	var username = request.url.replace("/", "");
	if (username.length > 0) {
		response.writeHead(200, commonHeader);
		renderer.view("header", {}, response);
			// get json from Treehouse
		var studentProfile = new Profile(username);
		//on "end"
		studentProfile.on('end', function(profileJSON) {
			//show profile
			//store the values we need
			var values = {
				avatarUrl: profileJSON.gravatar_url,
				username: profileJSON.profile_name,
				badges: profileJSON.badges.length,
				javaScript: profileJSON.points.JavaScript
				}
				//simple response
				renderer.view("profile", values, response);
				renderer.view("footer", {}, response);
				response.end();
		});
		//on "error"
		studentProfile.on('error', function(error){
			//show error
			renderer.view("error", {errorMessage: error.message}, response);
			renderer.view("search", {}, response);
			renderer.view("footer", {}, response);
			response.end();
		});
		
		
	}
}

module.exports.home = home;
module.exports.user = user;