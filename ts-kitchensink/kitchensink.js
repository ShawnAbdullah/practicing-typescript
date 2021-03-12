"use strict";
//intro
var myName = "shawn abdullah";
var usa = 50;
var nine = 5 + 4;
// hello world alertC:\Users\User\Documents\innovate_birmingham\typescript\typescript lectures\hello-typescript\ts-kitchensink\kitchensink.ts
var sayHello = "Hello World";
window.confirm(sayHello);
//you must be 21 or older to view this page!
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
    else {
        console.log("welcome " + name);
    }
}
;
//license and registration please
checkAge("charles", 21);
checkAge("abby", 27);
checkAge("james", 18);
checkAge("john", 17);
// veggie tales
var vegetables = ["carrots", "broccoli", "spinach", "kale", "mushrooms"];
console.log(vegetables);
for (var v = 0; v < vegetables.length; v++) {
    console.log(vegetables[v]);
}
//pets!
var pet = {
    name: "Pryde",
    breed: "mixed-breed",
};
console.log(pet);
//5 object array
var friends = [
    { name: "chevy", age: 39 },
    { name: "filinta", age: 30 },
    { name: "josh", age: 37 },
    { name: "alan", age: 19 },
    { name: "angelica", age: 20 },
];
//calling checkAge
for (var i = 0; i < friends.length; i++) {
    checkAge(friends[i].name, friends[i].age);
}
//evening the odds
function getLength(word) {
    return (word.length);
}
var characterLength = getLength("hello world");
if (characterLength % 2 == 0) {
    console.log("the world is nice and even!");
}
else {
    console.log("the world is an odd place!");
}
// function sayHi(word) {
// console.log(word)
// }
// sayHi(21)
