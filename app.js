
const tutorial = require('./tutorial.js')

//testing if the require for the tutorial worked
console.log(tutorial);
//using the imported tutorial functions and properties
console.log(tutorial.sum(1,2));
console.log(tutorial.PI);
console.log(new tutorial.someMathObject())
