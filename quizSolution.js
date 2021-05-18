/* Write a program to perform a Get request on the route 

https://coderbyte.com/api/challenges/json/age-counting
 
which contains aa data key and the value is a string which contains
items in the format key=STRING, age=INTEGER. 

Your goal is to count how many items 
exist that have an age equal to 32. 

Then you should create a write stream to a file 
called output.txt and the contents should be the key values (from the json) each on a 
separate line in the order they appeared in the  json file (the file should end with a 
newline character on its own line). 

Finally, then output the SHA1 hash of the file.

*/

const https = require('https');
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')


https.get('https://coderbyte.com/api/challenges/json/age-counting', (response) => {
  let {statusCode} = response
  let contentType = response.headers['content-type']
  response.setEncoding('utf-8')
  let data = '';

  // parse json data here...
  response.on('data', (d) => {
    data += [d]
  })


    response.on('end', () => {
    let parsedData = data.split(",")
    .filter(data =>!data.indexOf(" age="))
    .map(data => data.replace(" age=",""))
    .map(data => parseInt(data))
    .filter(data => {
     return (data == 32);
    }).length

    console.log(parsedData)  // This Prints out 6 as the number of items with age 32

  })
  response.on("error", (e) => {
    console.log("error", e)
  })



});


   // console.log(parsedData);

      //const file = fs.createWriteStream('output.txt')

// the file you want to get the hash    
//var fd = fs.createReadStream('output.txt');
//var hash = crypto.createHash('sha1');
//hash.setEncoding('hex');

//fd.on('end', function() {
 //   hash.end();
   // console.log(hash.read()); // the desired sha1sum
//});

// read all file and pipe it (write it) to the hash object
//fd.pipe(hash);

