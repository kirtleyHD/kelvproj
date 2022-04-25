// a constant variable kelvin is assigned the value of 293
const kelvin = 293;

// a variable celcius is 273 less than kelvin
const celcius = kelvin - 273;

// using a changable varibale fahrenheit and rounding down the conversion from celcius using the formula given
var fahrenheit = Math.floor(celcius * ( 9 / 5 ) + 32);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// extra practice

var newton = Math.floor(celcius * ( 33 / 100 ));

console.log(`It is ${newton} degrees Newton.`);
