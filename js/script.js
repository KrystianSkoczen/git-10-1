$('.main-carousel').flickity({
  // options
	cellAlign: 'left',
	draggable: true,
	prevNextButtons: false,
	pageDots: false,
	hash: true
});

var $carousel = $('.carousel-cell').flickity({
  groupCells: true
});

$('.reset').on( 'click', function() {
	flickity.select(0);
});