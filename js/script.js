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
  var index = $('.first');
  $carousel.flickity( 'select1', index );
});