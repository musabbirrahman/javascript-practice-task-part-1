//You are given an array of numbers. Count how many times the a number is repeated in the array.
//Find 5.

const numbers = [5, 6, 11, 12, 98, 5];

function findRepeatedNumber(numbers, target){
    let count = 0;
    for(let number of numbers){
        if(number === target){
            count++;
        }
    }
    return count;
}

const repeatedNumberResult = findRepeatedNumber(numbers, 5);
console.log(repeatedNumberResult)