var gulp = require( 'gulp' ); // agregamos la dependencia
var sass = require( 'gulp-sass' ); // agregamos la dependencia
var browserSync = require( 'browser-sync' ); // agregamos la dependencia
var reload = browserSync.reload; // propiedad de browserSync
var autoprefixer = require( 'gulp-autoprefixer' ); // agregamos la dependencia
var concat = require( 'gulp-concat' ) // agregamos la dependencia del paquete

// Se agregan los archivos js
var fuentesJS = [
	'js/funciones.js',
	'js/scripts.js'
];



/* definimos la tarea sass */
gulp.task( 'sass', function() {

	// origen del archivo
	gulp.src( 'scss/app.scss' )
		.pipe(autoprefixer()
    	)
		.pipe( sass({

			includePaths: [ 'scss' ]
		}) )
		// destino del archivo
		.pipe( gulp.dest( 'app/css' ) );
} );

gulp.task( 'js', function() {

	gulp.src( fuentesJS )
		.pipe( concat( 'script.js' ) )
		.pipe( gulp.dest( 'app/js' ) )
} );

/* difinimos una tarea nueva, la cual se va a encargar de realizar los cambios en el navegador en tiempo real. Indicando el nombre de la tarea y como segundo paramatro la tarea que ejecuta antes de ejecutar la función */
gulp.task( 'serve', [ 'sass' ], function() {

	browserSync.init([ "app/css/*.css", "app/js/*.js", "app/*.html" ], {
		
		server: {
			baseDir: 'app'
		}
	}); // fin del browserSyn.init
} );

/* creamos la tarea que se va a encargar de estar revisando los cambios en nuestros archivos */
gulp.task( 'watch', [ 'sass','serve', 'js' ], function(){

	/* para poder escuchar los cambios en sass, necesita ejecutar la tarea [ 'sass' ] */
	gulp.watch( [ 'scss/*.scss' ], [ 'sass' ] );
} );

/* agrega la tarea para cuando en la terminar cuando corramos el comando "gulp" se realice esta tarea */
gulp.task( 'default', [ 'watch' ] );