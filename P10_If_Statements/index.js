// IF STATEMENTS = if a condition is true, execiute some code
//                 if not, do something else

// let age = 25;

// if (age >= 18) {
//   console.log("You are old enough to enter this site.");
// }
// else {
//   console.log("You must be 18+ to enter this site.");
// }


// let time = 14;
// if (time < 12) {
//   console.log("Good morning!");
// }
// else {
//   console.log("Good afternoon!")
// }


// if statements with booleans
// let isStudent = false;

// if (isStudent) {
//   console.log("You are a student.")
// }
// else {
//   console.log("You are NOT a student!");
// }


// Nested if statments
// let age = 21;
// let hasLicense = true;

// if (age >= 16) {
//   console.log("You are old enough to drive.");
//     if (hasLicense) {
//       console.log("You have your license.");
//     }
//     else {
//       console.log("You do not have your license yet.");
//     }
// }
// else {
//   console.log("You must be 16+ to have a license.");
// }

const myText = document.getElementById('myText');
const mySubmit = document.getElementById('mySubmit');
const resultElement = document.getElementById('resultElement');
let age;

mySubmit.onclick = function() {

  age = myText.value; // the input's data type is string, so has to be casted to a number.
  age = Number(age);

  // else if statements
  if (age >= 100) {
    resultElement.textContent = "You are too old to enter this site.";
  }
  else if (age == 0) {
    resultElement.textContent = "You can't enter. You were just born.";
  }
  else if(age < 0) {
    resultElement.textContent = "Your age can't be below 0.";
  }
  else if (age >= 18) {
    resultElement.textContent = "You are old enough to enter this site.";
  }
  else {
    resultElement.textContent = "You must be 18+ to enter this site.";
  }

}
