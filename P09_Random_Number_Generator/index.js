// RANDOM NUMBER GENERATOR

// let randomNum = Math.random() ; // It will return a random number from 0 to 1 with long decimals.

// Let's say we want to roll a 6-sided dice. We would want random number from 1 - 6

// let randomNum = Math.floor(Math.random() * 5) + 1; // This would return a random number from 0 to 6 exclusive.
// but we want from 1 through 6, not from 0 to 5. Solution: Add +1 at the end.


// If we wanted a random number within a certain range:
// const min = 50;
// const max = 100;
// let randomNum = Math.floor(Math.random() * (max - min)) + min;

// console.log(randomNum);

const myButton = document.getElementById('myButton');
const label1 = document.getElementById('label1');
const label2 = document.getElementById('label2');
const label3 = document.getElementById('label3');

const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function() {
  randomNum1 = Math.floor(Math.random() * max) + min;
  randomNum2 = Math.floor(Math.random() * max) + min;
  randomNum3 = Math.floor(Math.random() * max) + min;
  label1.textContent = randomNum1;
  label2.textContent = randomNum2;
  label3.textContent = randomNum3;
}