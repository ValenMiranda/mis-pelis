$(document).ready(function() {
	var nomcategoria = 'Jackie Brown';
		$.ajax({
			url: 'https://netflixroulette.net/api/api.php?',
			type: 'GET',
			datatype: 'json',
			data: {show_title: nomcategoria}
		})
		.done(function(response){
			console.log(response);
		})
		.fail(function(){
			console.log("error");
		});
});