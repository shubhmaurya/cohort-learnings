/*
    Read a file, remove all the extra spaces and write it back to the same file.

    For example, if the file input was
        hello     world    my    name   is       raman
    
    After the program runs, the output should be
        hello world my name is raman
*/

const fs = require("fs");

function removeSpaces(filePath){

    fs.readFile(filePath, "utf-8", function (err, data){
        if(err){
            throw new Error(`unable to read ${err}`)
        }else{
            data = data.trim().replace(/\s+/g, " ");
            fs.writeFile(filePath, data, function (err){
                if(err){
                    throw new Error(`Error while removing spaces ${err}`);
                }else{
                    console.log("All the extra spaces has been removed");
                }
            })
        }
    })
}

removeSpaces("file.txt")