/* Puede observar que no se declara ninguna var */
// integramos las librerias jQuery
global.jQuery = require( 'jquery' );
// agregamos las librerias bootstrap
bootstrap = require( 'bootstrap' );
// agregamos las librerias mustache
mustache = require ( 'mustache' );

jQuery( 'document' ).ready( function() {
	bienvenida();
});