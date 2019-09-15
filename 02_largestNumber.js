/*
Largest Number
Write a method that will take an array of numbers
and return whichever is the largest.

Test your solution:
npm test

Question: Why does the test pass for the third (last) test 
with no changes to the function?
*/

function largestNumber(arr) {
    let largest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (largest < arr[i]) {
            largest = arr[i];
        }
    }
    return largest;
}

module.exports = {
    largestNumber
}