//Generate a random number between 10 to 20.

function getRandomNumber(min, max){
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return random;
}

const random = getRandomNumber(10, 20);
console.log(random);