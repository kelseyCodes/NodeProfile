var profile = require("/Users/tempuser/Desktop/JavaScript/NodeGetProfile.js");
var users = process.argv.slice(2);
var studentProfile = new profile("chalkers");

console.log(studentProfile);