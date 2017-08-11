/*
esto es lo que probe en un comienzo pero no funciono


var seleccion = document.getElementsByTagName("select");
var boton = document.getElementById("boton");
	boton.addEventListener("click", function(){
	var valorSelect = seleccion[2].value;
		if(seleccion[2].value == "2"){
			alert("Funciona");
			var title = document.getElementById("inputTitle").value;

	$.ajax({
		url: 'https://netflixroulette.net/api/api.php?title=' + title,
		type: 'GET',
		dataType: 'json',
	})
	.done(function(e) {
		console.log(e.show_title);
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
		}else{
			alert("mal!!");
		}
		console.log(seleccion[2].value);
})
*/

/*Comienza seccion nombre de titulo*/
/*
$(document).ready(function(){
	$(".j_select").change(function(){
		var j_dir = $(".j_select").val();
		if(j_dir == "1" || j_dir == "2"){
			$(".j_input").attr('pk', '2').show();
		}
		if(j_dir != "2"){
			$(".j_input").attr('pk').hide();
		}
	})


	$(".j_btn").click(function(e) {

		var j_titulo = $(".j_input").val()
		var j_replace = j_titulo.replace(/\s/g,"%20")
		$.ajax({
			url: 'https://netflixroulette.net/api/api.php?title='+j_replace,
			type: 'GET',
			dataType: 'JSON',
		})
		.done(function(er) {
			console.log("success");
			er.forEach(function(e){
				$(".j_show").append('<div class="j_movie row"><div class="col s6"><h2 class="j_title">'+e.show_title+'</h2>');				
			})
			
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() { 
			console.log("complete");
		});
			
	});

});*/