$( document ).ready(function(){
	$.ajax({
        url: '/api/quote/',
        success: function (quote) {
            $('#quote').html(quote.text);
            $('#author').html(quote.author);
        }
    });

    $('#bodyContent').on('click', function (event) {
	    $.ajax({
	        url: '/api/quote/',
	        success: function (quote) {
	            $('#quote').html(quote.text);
	            $('#author').html(quote.author);

	            //change color
	            var color = Math.random() * 360;
				$('#bodyContent').attr('style','background-color:' +  'hsl( ' + color + ', 60%, 70%)');
	        }
	    });
	});
});

