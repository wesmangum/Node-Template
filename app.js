// set variables for environment
var express = require('express'),
	app = express(),
	path = require('path'),
	initRoutes = require(__dirname + '/lib/init-routes.js')
;

app.set('port', (process.env.PORT || 5000));

// views as directory for all template files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

/**
 * Pipleline
 */
app.use(initRoutes);
express.static(__dirname + '/public');
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));



// set server port
app.listen(4000);
console.log('server is running!!!');
