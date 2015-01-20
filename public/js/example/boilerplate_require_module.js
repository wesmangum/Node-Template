/**
 * Name
 * @description Description
 */
define(

	// what does this module rely on?
	[
		'jquery'
	],

	// let's pass in aliases for the dependencies
	// capitalize any external modules
	function(
		$
	) {

		// define any private variables
		var _name = 'Example',
			_debug_enable = true,
			debug = ( _debug_enable ) ? function(text){console.log(text);} : function(){}
		;

		// insert init if module should auto-initialize
		init();

		/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

		/**
		 * Initialize Modules
		 */
		function init() {
			debug( _name + ': initialized' );
		}

		/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

		/**
		 * Private Method
		 */
		function _private_method() {

		}

		/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

		// return any public methods
		return {
			init: init
		};
	}
);