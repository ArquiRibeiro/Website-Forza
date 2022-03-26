const express = require('express');
const path = require('path');
const app = express();
const port = 8081;

app.use(express.static(path.join(__dirname,'../')));
//app.use(express.static(path.join(__dirname,'../IMAGES')));
//app.use(express.static(path.join(__dirname,'../')));

app.get('/index', function(req, res){
	res.sendFile(path.join(__dirname,'../Teste_SASS.html'));
});

app.listen(port, function(){
	console.log('App listening on port:'+port+'!');
});