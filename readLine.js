const readline = require('readline');
//creates a read/write to console interface
const rl =readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
//gets two random numbers between 1 and 10
let num1 = Math.floor(Math.random() * 10 + 1);
let num2 = Math.floor(Math.random() * 10 + 1);
const answer = num1 + num2;
//question writes something then receive a callback with one argument
//which is the userInput
rl.question(`quanto é ${num1} + ${num2} ?? \n`,
	(userInput) => {
		//if user got it right, close the interface and exit program
		if(userInput.trim() == answer){
			//must close the readline to exit program
			rl.close();
		}else{
			rl.setPrompt('incorrect response, please try again.\n');
			rl.prompt();
			//recursevily calls itself as user enter key
			//calls the line event
			rl.on('line', (userInput) =>{
				if(userInput.trim() == answer){
					console.log('agora sim!');
					//the close method calls sends a close event.
					rl.close();
				}else{
					rl.setPrompt('tente novamente.');
					rl.prompt();
				}
			});
		}
	}
);
//when the user got it right, calls the close event.
rl.on('close', () => {console.log('correto!')});