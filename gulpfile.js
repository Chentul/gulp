var gulp = require( 'gulp' ); // agregamos la dependencia
var sass = require( 'gulp-sass' ); // agregamos la dependencia
var browserSync = require( 'browser-sync' ); // agregamos la dependencia
var reload = browserSync.reload; // propiedad de browserSync

/* definimos la tarea sass */
gulp.task( 'sass', function() {

	// origen del archivo
	gulp.src( 'sass/app.sass' )
		.pipe( sass({

			includePaths: [ 'sass' ]
		}) )
		// destino del archivo
		.pipe( gulp.dest( 'app/css' ) );
} );

/* difinimos una tarea nueva, la cual se va a encargar de realizar los cambios en el navegador en tiempo real. Indicando el nombre de la tarea y como segundo paramatro la tarea que ejecuta antes de ejecutar la función */
gulp.task( 'serve', [ 'sass' ], function() {

	browserSync.init([ "app/css/*.css", "app/js/*.js", "*.html" ], {
		
		server: {
			baseDir: 'app'
		}
	}); // fin del browserSyn.init
} );

/* agrega la tarea para cuando en la terminar cuando corramos el comando "gulp" se realice esta tarea */
gulp.task( 'default', [ 'serve' ] );