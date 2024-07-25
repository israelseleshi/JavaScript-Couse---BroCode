// arithmetic operators = operands (values, variables, etc.)
//                        operators (+ - * /)
//                        ex. 11 - x + 5;

let students = 30;

// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;
// students = students ** 2;
// let extraStudents = students % 3;

// augmented assignment operators:
// students += 1;
// students -= 1;
// students *= 2;
// students /= 2;
// students **= 2;
// students %= 2;

// There is also the increment and the decrement operators.

// students ++;
// students --;

// console.log(students);

/*
  operator precedence
  1. parenthesis ()
  2. exponents
  3. multiplication & division & modulo
  4. addition and subtraction
*/

// let result = 1 + 2 * 3 + 4 ** 2; // result: 23
// let result = 12 % 5 + 8 / 2; // result: 6
let result = 6 / 2 ** (2 + 5); // result: 0.046875

console.log(result);