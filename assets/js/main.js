$(document).ready(function() {
	/*films.forEach(function(e){
		var id = e.show_id;
		var imagen = 'https://netflixroulette.net/api/posters/'+ id +'.jpg';
		var titulo = e.show_title;
		var categoria = e.category;
		var resumen = e.summary;
		var director = e.director;
		var elenco = e.show_cast;
		var contenedor = $('<div/>');

		contenedor.append('<div class="row">' + 
							'<div class="col s12">' + 
								imagen + 
								'<div class="text">' + 
									'<h4>' + titulo + '</h4>' + '<h6>' + categoria + '</h6>' +
									'<p>' + description + '</p>' +
									'<h5>' + director + '</h5>' +
									'<h5>' + elenco + '</h5>' +
								'</div>' +
							'</div>' +
						'</div>');
		$("#option").append(contenedor);
		console.log(option);
	});*/


	$(".m_btn").click(function(e) {

		var m_replace = 
		$.ajax({
			url: 'https://netflixroulette.net/api/api.php?director=' + m_replace,
			type: 'GET',
			dataType: 'JSON',
		})
		.done(function(er) {
			console.log("success");
			er.forEach(function(e){
				$(".pictures").append('<div class="col s6"><img class="responsive-img m_img" src="'+e.poster+'"></div></div>');							
			})

		})
		.fail(function() {
			console.log("error");
		})
		.always(function() { 
			console.log("complete");
		});
		
	});

});


