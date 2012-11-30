// JavaScript Document
$(document).on("ready", evento);

function evento (e)
{
	$('#enviar').css('cursor','pointer');
		
	$('#enviar').click(function(e){
		
		$("#data").remove();
		
		var loquebusco = $('#campo').val();
		//console.log(loquebusco);
		$.ajax({  
	
			url : 'http://search.twitter.com/search.json?q='+loquebusco+'&callback=?', 
				 
			dataType : "json",  
			timeout:15000,  
			success : function(data) {

				$.each(data, function(i,l) {		
				
					$('body').append('<div id="data"></div>');							
					for (var i=0;i<data.results.length;i++)
					{ 					
						console.log(data.results[i]);
						$("#data").append('<img src="'+ data.results[i].profile_image_url + '" />');
						$("#data").append("<div>@"+ data.results[i].from_user + "</div>");
						$("#data").append("<div>"+ data.results[i].text + "</div>");
						$("#data").append("<div>"+ data.results[i].created_at + "</div>");
						$("#data").append("<div>"+ data.results[i].metadata.result_type + "</div>");					
					}					
				});			
				
			},			
		 
			error : function()  
			{  
				alert("Failure!");  
			},  
		
    	});	
	})	
}	







