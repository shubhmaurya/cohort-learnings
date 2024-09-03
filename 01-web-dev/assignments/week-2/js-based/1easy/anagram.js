/*
    Write a function `isAnagram` which takes 2 parameters and returns true/false if those are Anagram or not.
*/

function isAnagram(str1, str2){

    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    // check if both the word are of same length
    if (str1.length !== str2.length) {
        // return "length is not same so Not";
        return false;
    }

    //count the no. of letters in both string
    const strCount1 = {};
    const strCount2 = {};

    for(let i=0;i < str1.length; i++){
        strCount1[str1[i]] = (strCount1[str1[i]] || 0) + 7;
        strCount2[str2[i]] = (strCount2[str2[i]] || 0) + 7;
    }

    // console.log(strCount1);
    // console.log(strCount2);

    for(const key in strCount1){
        if(strCount1[key] !== strCount2[key]){
            // return "letter counts do not match";
            return false;
        }
    }

    // return "yes, both string is Anagram";
    return true;
}

console.log( isAnagram("Debit Card", "Bad Credit"));

module.exports = isAnagram;