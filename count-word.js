/**Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming

*/

const string = 'I am learning Programming to become a programmer';

function findLongestWord(string){
    const words = string.split(' ');
    let max = words[0];
    for(let word of words){
        if(word.length > max.length){
            max = word;
        }
    }
    return max;
}

const resultLongestWord = findLongestWord(string);
console.log(resultLongestWord);

