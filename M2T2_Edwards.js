
// Question 1: No Code 

// Questions 2
// Log your favorite pizza topping to the console. 

console.log("cheese, mashrooms and bana pepers");

// On the next line log your favorite book or movie 
console.log('American Tragedy.');

// Answer 2

cheese, mashrooms and banana peppers.
American Tragedy.




// Question 3

console.log('JavaScript');
console.log(33.7);
console.log(true);
console.log(null);

// Answer 3

JavaScript
33.7
true
null

// Question 4

console.log(39 + 3.5);
console.log(2018 - 1969);
console.log(65 / 240);
console.log(0.2708 * 100);

// Answer 4
42.5
49
0.2708333333333333
27.08

// Question 5

console.log("Teaching the world how to code".length);

// Answer 5
  30
 
 // Question 6
 
 // Log Codecademy in all uppercase letters
console.log('Codecademy'.toUpperCase()); 

// Use a string method to log the following statment without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim()); 

// Answer 6

CODECADEMY
Remove whitespace

// Question 7 

console.log(Math.floor(Math.random() * 100))
console.log(Math.ceil(43.8))
console.log(Number.isInteger(2017))

// Answer 7 

52
44
true

// Question 8

console.log('Opening line');
console.log('It was love at first sight.');

// console.log('The first time Yossarian saw the chaplain he fell madly in love with him.'); 
console.log('Yossarian was in the hospital with a pain in his liver that fell just short of being jaundice.');
console.log('The doctors were puzzled by the fact that it wasn\'t quite jaundice.');
console.log('If it became jaundice they could treat it.');
console.log('If it didn\'t become jaundice and went away they could discharge him.');
// console.log('But this just being short of jaundice all the time confused them.'); 


// Answer 8

It was love at first sight.
// The first time Yossarian saw the chaplain he fell madly in love with him. 
Yossarian was in the hospital with a pain in his liver that fell just short of being jaundice.
The doctors were puzzled by the fact that it wasn't quite jaundice.
If it became jaundice they could treat it.
If it didn't become jaundice and went away they could discharge him.
// But this just being short of jaundice all the time confused them. 

// Question 9: No Code 


Variables


// Question 1

// This line of code sets the variable location to the string New York City
const location = 'New York City';

// This line of code sets the variable latitude to the number 40.7
let latitude = 40.7;

// This line of code sets the variable inNorthernHemisphere to true
let inNorthernHemisphere = true;

// Answer 1

// after running the code nothing printed on the console

// Question 1 after adding the folloing lines of code to the bottom of the app.js

// This line of code sets the variable location to the string New York City
const location = 'New York City';

// This line of code sets the variable latitude to the number 40.7
let latitude = 40.7;

// This line of code sets the variable inNorthernHemisphere to true
let inNorthernHemisphere = true;
console.log(location);
console.log(latitude);
console.log(inNorthernHemisphere);

// Answer 1 with the extra coding 

New York City
40.7
true

// Question 2 

const entree = 'Enchiladas'; 
const price = 12;
console.log(entree);
console.log(price);





entree = 'Tacos';


// Answer 2 

Enchiladas
12


/home/ccuser/workspace/learn-javascript-variables-const/app.js:31
entree = 'Tacos';
       ^

TypeError: Assignment to constant variable.
    at Object.<anonymous> (/home/ccuser/workspace/learn-javascript-variables-const/app.js:31:8)
    at Module._compile (module.js:571:32)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:488:32)
    at tryModuleLoad (module.js:447:12)
    at Function.Module._load (module.js:439:3)
    at Module.runMain (module.js:605:10)
    at run (bootstrap_node.js:427:7)
    at startup (bootstrap_node.js:151:9)
    at bootstrap_node.js:542:3
	
// Question 3

let changeMe = true;

changeMe = false;
console.log(changeMe);

// Answer 3

false

// Question 4

let notDefined;
console.log(notDefined);
let valueless = undefined;
console.log(valueless);

// Answer 4

undefined
undefined	

// Question 5

let molecule = 16;
let particle = 18;
let assay = 3;

// Add and assign to molecule below
molecule += 16;

// Multiply and assign to particle below
particle *= 6.02;

// Increment assay by 1
assay ++;



// Answer 5

// For some reasons when I click Run I do not get anything and I tried a few times to run it bu I get a blank page


// Question 6

let favoriteAnimal = 'my Cat Oscar';
console.log('My favorite animal ' + favoriteAnimal + '.');

// Answer 6

My favorite animal my Cat Oscar.

// Question 7

let myName = 'Florinda';
let myCity = 'Orlando';

console.log(`My name is ${myName}. My favorite city is ${myCity}.`);

// Answer 7 

My name is Florinda. My favorite city is Orlando.

// Question 8 No Code