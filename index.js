const express 		= require('express'),
	  app 			= express(),
	  bodyParser 	= require('body-parser');

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('landing');
});

app.get('/about', (req, res) => {
	res.render('about');
});

app.get('/pricing', (req, res) => {
	res.render('pricing');
});

app.post('/', (req, res)  => {
	res.render('landing');
});


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});