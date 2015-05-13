var profile = require("/Users/tempuser/Desktop/JavaScript/NodeGetProfile.js");
var users = process.argv.slice(2);

users.forEach(profile.get);