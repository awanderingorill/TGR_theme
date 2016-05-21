$(document).ready(function()
{
	$('.services-button').click(function()
	{
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
	})
})