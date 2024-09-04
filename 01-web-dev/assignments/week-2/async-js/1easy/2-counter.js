/*
    Without using setInterval, try to code a counter in Javascript.
    (Hint: setTimeout)
*/
let count = 1;

const counter = function (count){
    console.log(count);
    setTimeout(function (){
        counter(count + 1)
    },1000)
}

counter(count);