"use strict";
//Creating an array manipulation program.
// let Fruits=["apple", "banana", "cherry", "date", "elderberry"]
// Fruits.push("strawberry")
// console.log(Fruits);
// Fruits.unshift("pineapple")
// console.log(Fruits);
// const indextoremove=2
// const replacementFruit="kiwi"
// Fruits.splice(indextoremove ,1,replacementFruit)
// console.log(Fruits);
let Fruits = ["apple", "banana", "cherry", "date", "elderberry"];
Fruits.unshift('apricot');
console.log('prepend a value in array', Fruits);
Fruits.splice(3, 2, "orangeJuice");
console.log('Remove a fruit from its specific place', Fruits);
