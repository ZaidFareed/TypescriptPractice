"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prompt = require('prompt-sync')();
function factorial(num = parseInt(prompt("Please Provide a Number For Factorial : "))) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result = result * i; // 1 ,2 , 6 , 24 , 120 
        console.log(result);
    }
    return result;
}
console.log(`Your Given Number Factorial is `, factorial(undefined));
