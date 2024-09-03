/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str){

    str = str.toLowerCase().replace(/\s|[.,!?]/g, "");
    const stringify = Array.from(str);

    let reverseStrArr = [];

    for(let i = stringify.length - 1; i >= 0; i--){
        reverseStrArr.push(stringify[i])
    }

    const reverseStr = reverseStrArr.join('');
    
    if(reverseStr !== str){
        return false;
    }

    return true;    
}

//Or there is shorter way

// function isPalindrome(str){
//     const reverseStr = srt.split('').reverse().join('');

//     if(reverseStr !== str){
//         return false;
//     }

//     return true;
// }

module.exports = isPalindrome;