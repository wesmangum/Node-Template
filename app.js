// set variables for environment
var express = require('express'),
	app = express(),
	path = require('path'),
	initRoutes = require(__dirname + '/lib/init-routes.js')
;

// views as directory for all template files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

/**
 * Pipleline
 */
app.use(initRoutes);
app.set('port', (process.env.PORT || 4000));
app.use(express.static(__dirname + '/public'));


// set server port
app.listen(app.get('port'), function () {
	console.log('server is running!!!');
});