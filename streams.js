const fs = require('fs');

const zlib = require('zlib');
const gzip = zlib.createGzip();

const readStream = fs.createReadStream('./lorem.txt', 'utf8');
const anotherStream = fs.createWriteStream('./pipeExample.txt');
const writeStream = fs.createWriteStream('./compressed.gz');
//file must have permissions to read
readStream.on('data',(chunk) => {
	//get the chunks and write to writeStream
	anotherStream.write(chunk);
});


//create a compressed zip with the text the zlip gzip.
readStream.pipe(gzip).pipe(writeStream);


