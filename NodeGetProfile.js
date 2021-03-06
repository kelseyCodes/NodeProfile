var http = require("http");


//Print Out Message
function printMessage(username, badgeCount, points) {
	var message = username + " has " + badgeCount + " total badges and " + " points in JavaScript. Woo hoo!!";
	console.log(message);
};

//Print Out Error Message
function printError(error) {
	console.error(error.message);
};


function get(username){
	var request = http.get("http://teamtreehouse.com/" + username + ".json", function(response){
		var body = "";
	
		response.on("data", function(chunk){
			body += chunk;
		});
	
		response.on("end", function(){
			if(response.statusCode === 200) {
				try {
					var profile = JSON.parse(body);
					printMessage(username, profile.badges.length, profile.points.JavaScript);
				} catch(error) {
					//parse error
					printError(error.message);
				}
			} else {
					//Status code error
					printError({message: "There was an error retrieving the profile for " + username + "." });
		}
		});
	
	});
	//Connection error
	request.on("error", printError);
}

module.exports.get = get;
