var gulp = require( 'gulp' ); // dependencia
var sass = require( 'gulp-sass' ); // dependencia

/* definimos la tarea sass */
gulp.task( 'sass', function() {

	// origen del archivo
	gulp.src( 'sass/app.sass' )
		.pipe( sass({

			includePaths: ['sass']
		}) )
		// destino del archivo
		.pipe( gulp.dest( 'app/css' ) );
});

/* agrega la tarea para cuando en la terminar cuando corramos el comando "gulp" se realice esta tarea */
gulp.task( 'default', [ 'sass' ] );