var gulp = require( 'gulp' ); // agregamos la dependencia
var sass = require( 'gulp-sass' ); // agregamos la dependencia
var browserSync = require( 'browser-sync' ); // agregamos la dependencia
var reload = browserSync.reload; // propiedad de browserSync
var autoprefixer = require( 'gulp-autoprefixer' ); // agregamos la dependencia
var concat = require( 'gulp-concat' ) // agregamos la dependencia del paquete
var browserify = require( 'gulp-browserify' ); // agregamos las dependencias

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
		.pipe( concat( 'script.js' ) ) // archivo que contiene todas las concatenaciónes de fuentesJS
		.pipe( browserify() ) // agregamos browserify a nuestra tarea de concatenación
		.pipe( gulp.dest( 'app/js' ) ) // el destino donde se va a guardar nuestro js con todas las concatenaciónes
		.pipe( reload({ stream: true }) ) // permite que los archivos se puedan recargar
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

	/* 1erParametro: Ruta de donde tiene que escuchar los archivos. 2erParametro: tarea a realizar despues de escuchar los cambios de los archivos. */
	gulp.watch( [ 'scss/*.scss' ], [ 'sass' ] );
	gulp.watch( [ 'js/*.js' ], [ 'js' ] );
} );

/* agrega la tarea para cuando en la terminar cuando corramos el comando "gulp" se realice esta tarea */
gulp.task( 'default', [ 'watch' ] );