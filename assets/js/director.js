
$(document).ready(function() {

	$(".m_select").change(function(){
		var m_dir = $(".m_select").val();
		if(m_dir == "1" || m_dir == "2"){
			$(".m_input").attr('pk', '1').show();
		}
		if(m_dir != "1"){
			$(".m_input").attr('pk').hide();
		}
	})


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
			$(".m_show").append('<div class="m_movie row"><div class="col s6"><h2 class="m_title">'+e.show_title+'</h2>'+
								'<h4 class="m_year"> Year: '+e.release_year+'</h4>'+
								'<h4 class="m_category"> Category: '+e.category+'</h4>'+
								'<h4 class="m_time"> Time: '+e.runtime+'</h4></div>'+
								'<div class="col s6"><img class="responsive-img m_img" src="'+e.poster+'"></div></div>')							
								
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
