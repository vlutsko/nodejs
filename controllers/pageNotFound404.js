/*
const fs = require('fs');

if (fs.existsSync('./package2.json')){
	console.log('Yes');
}else{
	console.log('No');
}


const http = require('http');

http.createServer((req, res)=>{
	res.writeHead(200);
	res.end('Hello, World');
	//console.log(req);
}).listen(3030);
*/

const template = `
<html>
<head>
<meta charset="utf-8"><title>404</title>
<style type="text/css">
h1{
    color: red;
}
</style>
</head>
<body>
<h1>404: Page not found</h1>
<a href="welcome">to main page</a></body>
</html>
`;

module.exports = (req, res)=>{
	res.writeHead(404);
	res.end(template);
	//console.log(req);
}
