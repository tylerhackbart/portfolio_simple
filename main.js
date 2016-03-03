$(document).ready(function() {
	$('#card').hover(function(){
		$(this).css("border", "1px solid black");
	}, function() {
		$(this).css("border", "0px solid black");
		// $(this).css("background-color", "White");
	});

});