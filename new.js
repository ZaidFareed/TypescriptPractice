"use strict";
// function calc(num1: number, num2: number){
// }
//console.log(arguments)}
//calc(2,5);
//function addition (num1: number, num2: number){
//  return num1 + num2
//}
//console.log(addition(99,188))
//function multiplication (num1: number, num2: number){
//   return num1 * num2}
// console.log(multiplication(13,2))
//function division (num1: number, num2: number){
//    return num1 / num2
//}
//console.log(division(13,2))
//if else
//let age = 28;
//if (age>18){
//     console.log("You are allowed");
//  } else {
//     console.log("you are not allowed")
// }
//if else and else if
// let myCountry = "pakistan";
// let correctAns= "Pakistan";
// if(myCountry==correctAns){
//     console.log("correcAns");
// }else if (myCountry === "Pakista"){
//     console.log("close");
// }
// else{
//     console.log("Wrong Answer");
// }
//ARRAY if you have to store multiple values in single variable you use array...
//arrays can store multiple data
// let fruits= ["apple","mango","grapes", "orange"]
// console.log(fruits[3]);
//let students=["PIAIC","PIAIC2","PIAIC3","PIAIC4"];
//console.log(students)
//console.log(students[3])
//POP method
// let students=["PIAIC","PIAIC2","PIAIC3","PIAIC4"];
// students.pop()
// console.log(students)
//PUSH METHOD
// let students=["PIAIC","PIAIC2","PIAIC3","PIAIC4"];
// students.push("PIAIC5")
// console.log(students)
//SHIFT
// let students=["PIAIC","PIAIC2","PIAIC3","PIAIC4"];
// students.shift()
// console.log(students)
// //UNSHIFT
// let students=["PIAIC","PIAIC2","PIAIC3","PIAIC4"];
// students.unshift("PIAIC1")
// console.log(students)
// function addition (num1: number, num2: number){
//         return num1 + num2}
//         console.log(addition(12,2));
// let students=["Zaid","Yassa","Haris","Yusha"]
// console.log(students[2]);
// let n=5;
// console.log(n);
// n+=5;
// console.log(n);
// n-=5;
// console.log(n);
// console.log(n==5);
// console.log(n===5);
// console.log(n != 5);
// console.log(n > 9);
// console.log(n<59);
// console.log(n >= 8);
// console.log(n <= 8);
// // logical operators
// console.log(n >= 5 && n < 10);
// console.log(n<=8 && n>4);
// console.log(!(n > 10));
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice( 2, 1, "Lemon", "Kiwi", "Tomato"); 
// console.log(fruits);
// slice
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1); // [Orange,Lemon,Apple,Mango]
// console.log(citrus);
// for (let students = 0; students < 10; students++) {
//   console.log("hello "+students);
// }
// let students=75;
// if(students>50){
//   console.log("Class is on time");}
//   else if (students <50){
//   console.log("no class");
// }
// for(let i=0;i<5;i++){
//   console.log("SALAMALEYKUM"+i)
// }
// let x: number = 10, y = 20;
// if (x > y) 
// {
//     console.log('x is greater than y.');
// } 
// else if (x < y)
// {
//     console.log('x is less than y.'); //This will be executed
// }
// else if (x == y) 
// {
//     console.log('x is equal to y');
// }
// var myName = "daniyal" ;
// var hello = "Hello "+ myName ;
//Assignment
// var hisName = "Eric "
// var hello= "Hello "  +   hisName    +  "would you like to learn some python today?";
// console.log(hello);
// //Storing the name in a variable
// let myName = "John Smith";
// // Printing the name in lowercase
// console.log(myName.toLocaleLowerCase(myName));
// //Printing the name in uppercase
// console.log(myName.toUpperCase);
// function printname(){
// let name = "zaid fareed";
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.);
// }
// printname()
function toTitleCase(inputString) {
    const words = inputString.split(' ');
    const titleCaseWords = words.map(word => {
        const firstletter = word.charAt(0).toUpperCase();
        const restOfWord = word.slice(1).toLowerCase();
        return `${firstletter}${restOfWord}`;
    });
    return titleCaseWords.join('');
}
const myName = "zaid fareed";
const titleCasemyName = toTitleCase(myName);
console.log(titleCasemyName);
