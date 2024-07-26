// const = variable that can't be changed

const PI = 3.14159;
// making constant variables in uppercase is only allowed for primitive data types like numbers. But it wouldn't work with strings that is not primitive data type.
let radius;
let circumference;

document.getElementById('mySubmit').onclick = function() {
  radius = document.getElementById('myText').value
  radius = Number(radius);
  circumference = 2 * PI * radius;

  document.getElementById('myH3').textContent = circumference + "cm";
}