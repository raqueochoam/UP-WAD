console.log("Exercise 2");

var fs = require("fs");

fs.readFile('file1.txt','utf-8', function(err, data){
    console.log(data);
})