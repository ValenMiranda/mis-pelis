$(document).ready(function() {
	films.forEach(function(e){
		var contenedor = $('<div/>');

		contenedor.append('<div class="col s6"><img class="responsive-img" src="'+e.poster+'"></div></div>');
		$(".pictures").append(contenedor);
	});


	
});


