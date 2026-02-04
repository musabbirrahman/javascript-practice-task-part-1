//Write a function to convert temperature from Celsius to Fahrenheit.

function convertCelsiusToFahrenheit(celsius){
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

const resultFahrenheit = convertCelsiusToFahrenheit(0);
console.log(resultFahrenheit);
