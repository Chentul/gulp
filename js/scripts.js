

/* TODOS MIS EVENTOS AQUI */
jQuery( '#formulario input[type=submit]' ).on( 'click', function( e ) {

	e.preventDefault();
	
	var nombre = jQuery( '#formulario input[type=nombre]' ).val();
	var correo = jQuery( '#formulario input[type=correo]' ).val();
	
	console.log( nombre )
});
	
	
});