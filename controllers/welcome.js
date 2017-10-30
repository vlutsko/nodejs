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


const css = `
<style type="text/css">
body{
    margin: 0 auto;
    text-align: center;
    background-color: #ddd;
    width: 500px;
    height: 300px;
    border: 3px dashed blue;
}
h1{
    color: green;
    background-color: #eee;
}
img{
    width="100px";
    float: left;
}
</style>
`;
const js = `
<script>
    onload = (event)=>{
        console.log(event.target.URL);
    }
</script>
`;
const html_template = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Welcome (Євгеній, тобто укр.шрифти працюють - і це гуд :-) )</title>
${css}
</head>
<body>

<h1>Welcome</h1>
<a href="profile">to profile</a>
<br><br><br>
<a href="image">to image</a>
${js}
</body>
</html>
`;



module.exports = (req, res)=>{
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(html_template);
	//console.log(req);
}
