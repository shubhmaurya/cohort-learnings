/*
    Using the fs library again, try to write to the contents of a file. You can use the fs library to as a black box, the goal is to understand async tasks.
*/

const fs = require("fs");

function writeToFile(filePath, dataToWrite){
    fs.writeFile(filePath, dataToWrite, function (error){
        if(error){
            throw new Error(`File can't be created ${error}`);
        }
        console.log("Data has been written to file.");
    })
}

const data = "Hi all, Shubham this side.";

writeToFile("write.txt", data);