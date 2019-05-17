var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
var navBar = document.getElementById('navbar');
    if (prevScrollpos < currentScrollPos) {
        navBar.classList.add('hideNav');
    } else {
        navBar.classList.remove('hideNav');
    }
    prevScrollpos = currentScrollPos;
}

