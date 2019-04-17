const http  = require('http');
const fs = require('fs');

http.createServer((req,res) => {
	if(req.url == '/'){
		const readStream = fs.createReadStream('./static/index.html');
		res.writeHead(200, {'Content-type': 'text/html'});
		readStream.pipe(res);
	}	
	if(req.url == '/image'){
		const readStream = fs.createReadStream('./static/image.webp');
		res.writeHead(200, {'Content-type': 'image/webp'});
		readStream.pipe(res);
	}
	if(req.url == '/json'){
		const readStream = fs.createReadStream('./static/data.json');
		res.writeHead(200, {'Content-type': 'application/json'})
		readStream.pipe(res);
	}
}).listen(3000);