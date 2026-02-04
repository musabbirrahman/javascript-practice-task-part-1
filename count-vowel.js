//Write a function to count the number of vowels in a string.

const string = 'This is a string and it has many vowels';

function countVowel(string){
    let count = 0;
    for(let character of string){
        let lowerCase = character.toLowerCase();
        if(lowerCase === 'a'
            || lowerCase === 'e'
            || lowerCase === 'i' 
            || lowerCase === 'o' 
            || lowerCase === 'u'
        ){
            count++;
        }
    }
    return count;
}


const resultCountVowel = countVowel(string);
console.log(resultCountVowel)