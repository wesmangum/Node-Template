
/**
 *		RequireJS configuration file
 *
 *		desc:
 *			replace all instances of 'example' with
 *			project name
 *			see app/boilerplate_require_module.js
 *			for example module
 */

requirejs.config( {
	'paths': {

		'example':					'example',

		'jquery': 					'/bower_components/jquery/dist/jquery'

	},
	'shim': {
		// place any modules that require jquery here
	}
} );

requirejs( [
	'example/boilerplate_require_module',

	'jquery'
]);

