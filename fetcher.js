// A command line node app which takes a URL as a command-line argument as well as
// a local file path and downloads the resource to the specified path. 


const request = require('request');
const fs = require('fs');

const arr = process.argv.slice(2); // Saves input from command line arguments
//console.log(arr);

request(arr[0], (error, response, body) => {
  if (error) {
    return console.log(`Error: ${error}`); // Print the error if one occurred
  }
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
   
  fs.writeFile(arr[1], body, function (err,data) {
    if (err) {
      return console.log(err);
    }
    //console.log(data);
  });

  let stats = fs.statSync(arr[1]);
  console.log(`Downloaded and saved ${stats.size} bytes to ${arr[1]}`);
});


// Sample Command Line Inputs
// node fetcher.js http://www.example.edu/ ./index.html
// node fetcher.js http://www.eenadu.net/ ./index1.html