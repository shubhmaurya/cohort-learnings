/*
    Write code to read contents of a file and print it to the console. You can use the fs library to as a black box, the goal is to understand async tasks. Try to do an expensive operation below the file read and see how it affects the output. Make the expensive operation more and more expensive and see how it affects the output.
*/

const fs = require("fs")

function readMyFile(filePath){
    fs.readFile(filePath, 'utf-8', function (err,data){
        if(err){
            throw new Error(`Unable to read the file ${err}`);
        } else{
            console.log(data);
        }
    })
}


readMyFile("read.txt");

// Expensive operation (adjust to make it more expensive)
(function() {
    for (let i = 0; i < 1000000; i++) {
        Math.sqrt(i) * Math.sin(i) * Math.cos(i);
    }
    console.log('Expensive operation completed');
})();

