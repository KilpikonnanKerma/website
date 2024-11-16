var keys = {32:1, 33: 1, 34:1, 35:1, 36: 1, 37: 1, 38: 1, 39: 1, 40: 1};

function Start() {
    disableScroll();
}

function preventDefault(e) {
    e.preventDefault();
}
  
function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

var supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', { 
        get: function () { supportsPassive = true; } 
    }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
  }

function showProjects() {
    document.getElementById('projects').scrollIntoView({
        block: 'start', behavior: 'smooth'});
}

function showAbout() {
    document.getElementById('about').scrollIntoView({
        block: 'start', behavior: 'smooth'});
}

function showSkills() {
    document.getElementById('skills').scrollIntoView({
        block: 'start', behavior: 'smooth'});
}

function backToTop() {
    document.getElementById('header').scrollIntoView({
        block: 'start', behavior: 'smooth'})
}