const express 		= require('express'),
	  app 			= express(),
	  mongoose 		= require('mongoose'),
	  bodyParser 	= require('body-parser');

app.get('/', (req, res) => {
	res.render('landing.ejs');
});

app.listen(3000, () => {
	console.log('AHouse is Running!');
});