//the library necessary for filesystem operations
const fs = require('fs');
//write to file
fs.writeFile('teste.txt','conteudo do arquivo', (err) => {
	if(err){
		console.log(err);
		//if suscefully wrote to file:
	}else{
		console.log('arquivo criado com sucesso');
		fs.readFile('teste.txt', 'utf8', (err,file) => {
			if(err){
				console.log(err);
			}else{
				console.log('file content: \n');
				console.log(file);
			}
		});
	}
});

