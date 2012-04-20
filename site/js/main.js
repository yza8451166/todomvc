(function() {

	// Demos popover
	$('#demos li a').popover({
		delay: 200,
		placement: 'in right',
		title: function() {
			return $( this ).text() + '<a href="' + $( this ).data('source') + '">Go to site</a>';
		}
	}).on('click', '.popover', function( e ) {
		// Prevent click on the popover, but allow links inside
		if ( e.target.nodeName.toLowerCase() !== 'a' ) {
			e.preventDefault();
		}
	});

})();