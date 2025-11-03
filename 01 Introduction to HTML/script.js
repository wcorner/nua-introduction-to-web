console.log("Hello World!");

const myButton = document.getElementById("button");
// console.log(myButton);

// My Name
let myName = "Will";
myName = "Hannah";
console.log(myName.toLowerCase());

let myNumber = 7;
myNumber *= 5;
console.log(myNumber);

let newNumber = 6;
newNumber++;
console.log(newNumber);

console.log(13 < 12);

// if (myNumber === 12) {
//     console.log("is 12");
// } else {
//     console.log("isn't 12");
// }

let weather = "snowing";
let cloudy = true;

// if (weather === "raining") {
//   console.log("it's raining");
// } else if (weather === "sunny") {
//   console.log("it's sunny");
// } else if (weather === "cloudy") {
//   console.log("it's cloudy");
// } else {
//   console.log("I don't know what the weather is...");
// }

switch (weather) {
  case "raining": 
    console.log("it's raining");
    break;
  case "sunny":
    console.log("it's sunny");
    break;
  case "cloudy":
    console.log("it's cloudy");
    break;
  default:
    console.log("I don't know what the weather is...");
}

const iAmTired = function() {
    console.log("I am tired!");
}

myButton.addEventListener("click", iAmTired);

iAmTired();

// console.log(cloudy ? "it's cloudy" : "it's not cloudy");
