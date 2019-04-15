const readline = require('readline');

const rl =readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
//gets two random numbers between 1 and 10
let num1 = Math.floor(Math.random() * 10 + 1);
let num2 = Math.floor(Math.random() * 10 + 1);
const answer = num1 + num2;

rl.question(`quanto é ${num1} + ${num2} ?? \n`,
	(userInput) => {
		if(userInput.trim() == answer){
			rl.close();
		}else{
			rl.setPrompt('incorrect response, please try again.\n');
			rl.prompt();
			rl.on('line', (userInput) =>{
				if(userInput.trim() == answer){
					console.log('agora sim!');
					rl.close();
				}else{
					rl.setPrompt('tente novamente.');
					rl.prompt();
				}
			});
		}
	}
);

rl.on('close', () => {console.log('correto!')});