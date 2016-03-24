$(document).ready(function() {
	$('#section-team #national-tabs li').click(function() {
		var tab_id = $(this).attr('data-tab');
        $('#section-team #national-tabs li').removeClass('current');

        $('#section-team .thumbnail').hide();

        if (tab_id === 'all') {
            $('#section-team .thumbnail').show();
        } else {
            $('#section-team .thumbnail').find("[data-tab='" + tab_id + "']").parents('.thumbnail').show();
        }
					
		if (tab_id === 'ontario') {
			$('#ontario-tabs').show();
		} else {
			$('#ontario-tabs').hide();
		}

        $(this).addClass('current');
    })
	

	$('#section-team #ontario-tabs li').click(function() {
		var tab_id = $(this).attr('data-ontario-tab');
        $('#section-team #ontario-tabs li').removeClass('current');

        $('#section-team .thumbnail').hide();

        if (tab_id === 'all') {
            $('#section-team .thumbnail').find( '[data-ontario-tab]' ).parents('.thumbnail').show();
        } else {
            $('#section-team .thumbnail').find("[data-ontario-tab='" + tab_id + "']").parents('.thumbnail').show();
        }

        $(this).addClass('current');

        $("body").on("click", ".navbar a", scroll_if_anchor);
	$("body").on("click", ".anchor_refer", scroll_if_anchor);
    })
});


/**
 * Check an href for an anchor. If exists, and in document, scroll to it.
 * If href argument omitted, assumes context (this) is HTML Element,
 * which will be the case when invoked by jQuery after an event
 */
function scroll_if_anchor(href) {
	href = typeof (href) == "string" ? href : $(this).attr("href");

	// If href missing, ignore
	if (!href)
		return;

	// You could easily calculate this dynamically if you prefer
	var fromTop = 65;

	// If our Href points to a valid, non-empty anchor, and is on the same page (e.g. #foo)
	// Legacy jQuery and IE7 may have issues: http://stackoverflow.com/q/1593174
	if (href.charAt(0) == "#") {
		var $target = $(href);

		// Older browsers without pushState might flicker here, as they momentarily
		// jump to the wrong position (IE < 10)
		if ($target.length) {
			$('html, body').animate({
				scrollTop : $target.offset().top - fromTop
			});
			if (history && "pushState" in history) {
				history.pushState({}, document.title, window.location.pathname + href);
				return false;
			}
		}
	}
}
