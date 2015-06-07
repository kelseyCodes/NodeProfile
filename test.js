var fs = require('fs');
var ejs = require('ejs');
var tumblr = require('tumblr.js');


var client = tumblr.createClient({
  consumer_key: 'bfwVRD3YTMKs4oHWOHKJM5X5ToPayDAqgEUAVGEYfkOIS8xW8X',
  consumer_secret: 'JS7tSgUwCAfnx7K4HnFbJw9xElne9HKhrh8nWA4vUeEqQvduNW',
  token: 'KhnEEfsoIf4yivcGrvSZYS0ZzRcgWuFfJumqvdZRRGcrIhcBSW',
  token_secret: 'meNzqbWaMZRNldLaUD9avcFwRykhkDtUU0BwVuSzNfdiTy0guf'
});

client.posts("https://www.tumblr.com/blog/kelseycodes", function(err, blog){
  console.log(blog);
})