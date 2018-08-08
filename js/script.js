$('.reset').on( 'click', function() {
	flickity.select(0);
});

var $carousel = $('.carousel-cell').flickity({
  groupCells: true
});