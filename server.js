var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000; //if there is no process.evn.port use 3000
//when you use uppercase for a variable name in java script, you're saying that the variable's value shouldnt be changed
//'the root defaults to index.html'

var middleware = require('./middleware.js');


app.use(middleware.logger); //causes middleware.logger to be called for every page requested and every route hit

//app.use(middleware.requireAuthentication); //get called for every page requests and every route hit

app.get('/about', middleware.requireAuthentication, function (req, res){
	res.send('About Us!');
});

app.use(express.static(__dirname + '/public')); //static takes the folder you want to expose


app.listen(PORT, function (){ //the second argument runs when the server starts
	console.log('Express server started on port ' + PORT + '!');
});