console.log('hello world..')


// Walking Animation //
var timer = null;
var character_walking = document.getElementById('arjun_walking')
var character_idle = document.getElementById('arjun_idle')
const scrollContainer = document.querySelector("main");

character_idle.style.display = 'block'

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    character_walking.style.display = 'block'
    character_idle.style.display = 'none'

    if(evt.deltaY > 0){
        character_walking.style.transform = 'scaleX(1)'
        character_idle.style.transform = 'scaleX(1)'
    }
    else{
        character_walking.style.transform = 'scaleX(-1)'
        character_idle.style.transform = 'scaleX(-1)'
    }
    scrollContainer.scrollLeft += evt.deltaY;

    if(timer !== null) {
        clearTimeout(timer);       
    }
    timer = setTimeout(function() {
        character_idle.style.display = 'block'
        character_walking.style.display = 'none'
    }, 60);

});
////

