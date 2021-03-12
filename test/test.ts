
/* cd into project folder, run 'npm init -y', 'npm i typescript', 'tsc --init' since you have typescript installed globally
    add 
    "dev": "tsc -w" 
    to the "scripts" portion of the package.json */

//typing a string
let greeting: string = "hey";

//typing an object
let person: { pName: string, age: number } = {
  pName: "Bob",
  age: 25,
};

//typing an array of objects
let people: { pName: string, age: number }[] = [
  {
    pName: "Bob",
    age: 25,
  },
  {
    pName: "Sherry",
    age: 29,
  },
  {
    pName: "Tim",
    age: 32,
  },
];

let myFunc = (num: number) => {
  console.log(num)
}

myFunc(25);