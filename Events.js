//the events require loads events functionality 
const EventEmitter = require('events');
//the event emitter objcet has suport for event driven programming 
const eventEmitter = new EventEmitter();
//prepares an action to be called on the tutorial event
eventEmitter.on('tutorial', () => {
	console.log('tutorial event has occurred');
});
//prepares an action to be called on the sum event 
eventEmitter.on('sum', (num1,num2) => {
	console.log(num1 + num2)
});
//call tutorial event and then the sum event with arguments
eventEmitter.emit('tutorial');
eventEmitter.emit('sum',1,1);
//class extending eventEmmiter. Can have events inserted and called.
class Person extends EventEmitter{

	constructor(name){
		super();
		this._name = name;
	}

	get name(){
		return this._name;
	}

}
//instantiates a person that inhereted eventEmitter
let pedro = new Person('Pedro');
//sets funcitonality on name calling event
pedro.on('name',() =>{
	console.log('name: ' + pedro._name);
});
//call the name
pedro.emit('name');

