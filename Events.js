const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', () => {
	console.log('tutorial event has occurred');
});

eventEmitter.on('sum', (num1,num2) => {
	console.log(num1 + num2)
});

eventEmitter.emit('tutorial');
eventEmitter.emit('sum',1,1);

class Person extends EventEmitter{

	constructor(name){
		super();
		this._name = name;
	}

	get name(){
		return this._name;
	}

}

let pedro = new Person('Pedro');

pedro.on('name',() =>{
	console.log('name: ' + pedro._name);
});

pedro.emit('name');

