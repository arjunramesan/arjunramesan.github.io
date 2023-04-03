console.log('hello')

// Setup isScrolling variable
var isScrolling;
var currentScrolling = false;
var oldScrollX = window.scrollX;

window.addEventListener('scroll', function ( event ) {

	// Clear our timeout throughout the scroll
	window.clearTimeout( isScrolling );

    if(currentScrolling == false){

        if(oldScrollX <= window.scrollX){
            document.getElementById('arjun').style.transform = 'scaleX(1)'
        }
        
        else{
            document.getElementById('arjun').style.transform = 'scaleX(-1)'
        }
        document.getElementById('arjun').src = "/assets/images/character/walk.gif";
    }
    currentScrolling = true;

	// Set a timeout to run after scrolling ends
	isScrolling = setTimeout(function() {
		// Run the callback
		document.getElementById('arjun').src = "/assets/images/character/idle.gif";
        oldScrollX = window.scrollX;
        currentScrolling = false;

	}, 60);

}, false);