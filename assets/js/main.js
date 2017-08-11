$( document ).ready(function(){
	$(".button-collapse").sideNav();

	$('#cuenta').click(function(){
		document.location.href = "create-account.html";
	})

/* VALIDACIONES */
var nombre = /[0-9]/;
var valEmail = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

	$("#account").click(function (){
		console.log($('#name').val());
	        if( $("#name").val() == "" || nombre.test($("#name").val()) ){
	            $("#name").after("<span class='error'>Ingrese un nombre válido y/o  sin números</span>");
	            return false;
	        }else if( $("#username").val() == "" || nombre.test($("#username").val()) ){
	            $("#username").after("<span class='error'>Ingrese un username valido y/o sin números</span>");
	            return false;
			}else if( $("#email").val() == "" || !valEmail.test($("#email").val()) ){
	            $("#email").focus().after("<span class='error'>Ingrese un email válido</span>");
	            return false;
	        }else if ( $("#country").val() == "" || nombre.test($("#country").val()) ){
	            $("#country").after("<span class='error'>Ingrese el país de residencia</span>");
	            return false;
			}else{
        	$("#account").attr("href","index2.html");
        	}
	    });
	 
})