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

/*
var fs = require('fs');

var img = fs.readFileSync('img/image231x218px.jpg');
*/

var fs = require('fs');

var profile_txt = fs.readFileSync('profile.txt');

console.log(profile_txt.toString());

const css = `
<style type="text/css">
body{
    margin: 0 auto;
    text-align: center;
    background-color: #ddd;
    width: 500px;
    height: 400px;
    border: 3px dashed blue;
}
h1{
    color: green;
    background-color: #eee;
}
#profile{
    width: 300px;
    height: 100px;
    margin: 40px auto;
    border: 1px solid green;
}
#profile ul{
    width: 120px;
    height: 100px;
    margin-left: 30px;
    margin-top: 0px;
    border-left: 5px dotted pink;
    text-align: left;
    float: left;
}
img{
    width:100px;
    float: left;
}
</style>
`;
const js = `
    <script>
    const button = document.querySelector('button');
    button.addEventListener('click', (event)=>{
        //alert('Show profile');
        
        let body = document.querySelector('body').innerHTML;

        let out = '';
        out =  body + '<div id="profile"><img src="./img/image231x218px.jpg" alt="AVATAR picture"><ul>';
        out += '<li>login: evgen</li>';
        out += '<li>age: 25</li>';
        out += '<li>name: Євгеній</li>';
        out += '</ul></div>';
        document.querySelector('body').innerHTML = out;
        
    });
    </script>
`;
const html_template = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Profile</title>
${css}
</head>
<body>

<h1>Profile Євгеній</h1>
<a href="welcome">to welcome</a>
<br><br><br>
<button>Show profile</button>
${js}
</body>
</html>
`;

module.exports = (req, res)=>{
	res.writeHead(200);
    //console.log(img);
	res.end(html_template);
	//console.log(req);
}
