$('.main-carousel').flickity({
  // options
	cellAlign: 'left',
	draggable: true,
	prevNextButtons: false,
	pageDots: false,
	hash: true
});

var $carousel = $('.main-carousel').flickity({
  groupCells: true
});

$('.reset').on( 'click', function() {
  var index = $(this).index();
  $carousel.flickity( 'returnToFirst', index );
});