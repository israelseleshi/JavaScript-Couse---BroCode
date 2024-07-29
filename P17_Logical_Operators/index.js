// logical operators = used to combine or manipulate boolean values
//                     (true or false)

//                     AND = &&
//                     OR  = ||
//                     NOT = !

const temp = 250;

// Showcase of && operator
if (temp >  0 && temp <= 30) {
  console.log("The weather is GOOD.");
}
else {
  console.log("The weather is BAD.")
}

// Showcase of || operator
if (temp <= 0 || temp > 30) {
  console.log("The weather is BAD.");
}
else {
  console.log("The weather is GOOD.")
}

// Showcase of ! operator
const isSunny = true;

if (!isSunny) {
  console.log("It is cloudy.");
}
else {
  console.log("It is sunny.");
}