/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numList){
    let largestNum = numList[0];
    
    for(const e of numList){
        // console.log(e);
        if (e>largestNum) {
            largestNum = e;
        }
    }

    return largestNum;
}

module.exports = findLargestElement;