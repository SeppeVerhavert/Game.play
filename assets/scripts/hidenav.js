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

    var $winBot = document.querySelector('body').offsetHeight();
    var $winTop = $(window).scrollTop();
    var forceReload = window.location.reload(true);

    if ($winTop < 900 && prevScrollpos > currentScrollPos) {
        location.reload(true);
    } if (currentScrollPos <= $winBot) {
        location.reload(true);
    }
}

