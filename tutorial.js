//function sum created by arrow function
const sum = (num1,num2) => num1 + num2;
const PI  = 3.14;

class someMathObject {
	constructor(){
		console.log('object constructed');
	}
} 

//exporting all modules in two ways:
//you can each property in a line 
//module.exports.sum = sum;
//module.exports.PI = PI;
//module.exports.someMathObject = someMathObject;
//or export all functions and objects like this:
module.exports = {sum: sum, PI: PI, someMathObject: someMathObject};
