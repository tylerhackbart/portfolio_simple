$(document).ready(function() {
	$('#card').hover(function(){
		$(this).css("border", "1px solid black");
	}, function() {
		$(this).css("border", "1px solid #fcfcfc");
		// $(this).css("background-color", "White");
	});

});