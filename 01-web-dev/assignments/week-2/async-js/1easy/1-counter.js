/*
    Create a counter in js it should go up as time goes by in interval of 1 second
*/

function counter(){

    let counter = 0;

    setInterval(function (){
        counter += 1;
        console.log(counter);
    },1000);
}

counter();