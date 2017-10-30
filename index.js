/*
const fs = require('fs');

if (fs.existsSync('./package2.json')){
	console.log('Yes');
}else{
	console.log('No');
}
*/

const http = require('http');
const welcomeController = require('./controllers/welcome');
const profileController = require('./controllers/profile');
const pageNotFound404Controller = require('./controllers/pageNotFound404');
const imageController = require('./controllers/image');


http.createServer((req, res)=>{
	//console.log(req.url);
	//console.log(req.method);
	//console.log(req.headers);
	//res.writeHead(200);
	//res.end('Hello, World');
	
	switch(req.url){
		case '/':
		welcomeController(req, res);
		break;
		
		case '/welcome':
		welcomeController(req, res);
		break;
		
		case '/profile':
		profileController(req, res);
		break;
		
		case '/image':
		imageController(req, res);
		break;
		
		default:
		pageNotFound404Controller(req, res);
	}

}).listen(3030, ()=>console.log('Server working on port 3030...'));

