$(document).ready(function()
{
	$('.leadership .grav-lightslider').css('visibility', 'hidden');

	setTimeout(function()
	{
		$('.leadership .grav-lightslider').hide();
	}, 500)

	$('.services-button').click(function()
	{
		// Handle button and callout quote hide/show
		if (!$(this).hasClass('active'))
		{
			// Grab inactive quote before removing 'active' from active one
			var inactiveQuote = $('.services-callout-panel:not(.active)');

			// Remove 'active' from active quote + button
			$('.active').removeClass('active');

			// Highlight appropriate quote
			inactiveQuote.addClass('active');
			// Highlight appropriate button
			$(this).addClass('active');
		}

		// Handle lightslider hide/show
		if ($('.services-button.active h4').hasClass('leadership'))
		{
			$('.strategy .grav-lightslider').hide();
			$('.leadership .grav-lightslider').css('visibility', 'visible');
			$('.leadership .grav-lightslider').show();
		}
		else
		{
			$('.leadership .grav-lightslider').hide();
			$('.strategy .grav-lightslider').show();
		}
	});

	// Lightslider mobile padding adjustment
	var width = $(window).width();
	if (width <= 500)
	{
		$('.panel-padding').css('padding', '0px 15px');

		$('.grav-lightslider').parent('.strategy').css('position', 'relative').css('top', '-20px');
	}
})