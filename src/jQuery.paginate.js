(function($) {
	$.fn.paginate = function(options) {
		var defaults = {
			pagination_class: "pagination",
			items_per_page: 5
		};

		// Merge deafults into options
		var options = $.extend(defaults, options);

		obj = $(this);

		// Count entries in block for pagination
		var n = obj.children().size();

		// Calculate number of pages
		var pages = Math.ceil( n / options.items_per_page );

		// Add a div after the #slideshow to put the navigation controls in
		// TODO: Add class for navigation controls div
		// TODO: The div for navigation controls should be inside the pagination element so as to have the same width.
		obj.append(
			$('<div/>').addClass(options.pagination_class + "__controls").append(
			$('<ul/>').addClass(options.pagination_class))
		);

		function createPaginationControls(pages) {
			// For each div (slide) add a link in span for controls
			for ( var i = 0; i < pages; i++ ) {
				$("." + options.pagination_class).append( '<li><a href="#' + (i+1) + '">' + (i+1) + '</a></li>');
			};
		}

		function showPage(page_number){
			var start_from = (page_number * options.items_per_page);
			var end_on = ((page_number + 1) * options.items_per_page);
			obj.children().not('.pagination__controls').css('display', 'none').slice(start_from, end_on).css('display','block');
		}

		createPaginationControls(pages);
		showPage(0);

		$('.pagination li').first().addClass('active');

		// Navigate to the coresponding slide when clicking on a nav-control
		$('.pagination li').click(function() {
			var pageIndex = $(this).index();
			// remove active class from all elements
			$(this).parent().children().removeClass('active');
			$(this).addClass('active');
			showPage(pageIndex);
		});


	};
})(jQuery);
