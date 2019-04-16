const fs = require('fs');
const readStream = fs.createReadStream('./lorem.txt', 'utf8');
const writeStream = fs.createWriteStream('./fileto.txt');
const anotherStream = fs.createWriteStream('./pipeExample.txt');
//file must have permissions to read
readStream.on('data',(chunk) => {
	//get the chunks and write to writeStream
	writeStream.write(chunk);
});

//this does the same as the above.
readStream.pipe(anotherStream);


