$('.main-carousel').flickity({
  // options
	cellAlign: 'left',
	draggable: true,
	prevNextButtons: false,
	pageDots: false,
	hash: true
});

$('.change_gallery').on( 'click', '.reset', function() {
  var index = $(this).index();
  $main-carousel.flickity( 'selectCell', index );
});