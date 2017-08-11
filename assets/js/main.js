$(document).ready(function() {
/*
	$(".m_select").change(function(){
		var m_dir = $(".m_select").val();
		if(m_dir == "1" || m_dir == "2"){
			$(".m_input").attr('pk', '1').show();
		}
		if(m_dir != "1"){
			$(".m_input").attr('pk').hide();
		}
	})
*/

$(".m_btn").click(function(e) {

	var m_director = $(".m_input").val()
	var m_replace = m_director.replace(/\s/g,"%20")
	$.ajax({
		url: 'https://netflixroulette.net/api/api.php?director='+m_replace,
		type: 'GET',
		dataType: 'JSON',
	})
	.done(function(er) {
		console.log("success");
		er.forEach(function(e){
			$(".m_show").append('<div><h4>'+e.show_title+'</h4>'+
								'<img src="'+e.poster+'"">'+
								'<h5> year: '+e.release_year+'</h5>'+
								'<h5> category: '+e.category+'</h5>'+
								'<h6> time: '+e.runtime+'</h6></div>')
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
