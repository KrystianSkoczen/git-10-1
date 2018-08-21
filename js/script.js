var flkty = new Flickity( '.main-carousel', {
    cellAlign: 'left',
    draggable: true,
    prevNextButtons: true,
    pageDots: false,
    hash: true
});

$('.reset').on( 'click', function() {
    flkty.select(0);
});