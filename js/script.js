var flkty = new Flickity( '.main-carousel', {
    cellAlign: 'left',
    draggable: true,
    prevNextButtons: true,
    pageDots: false,
    hash: true
});

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
 	progress = Math.max( 0, Math.min( 1, progress ) );
	progressBar.style.width = progress * 100 + '%';
});

$('.reset').on( 'click', function() {
    flkty.select(0);
});