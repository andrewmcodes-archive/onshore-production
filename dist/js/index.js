"use strict";

var shiftWindow = function() { scrollBy(0, -60) };
window.addEventListener("hashchange", shiftWindow);
function load() { if (window.location.hash) shiftWindow(); }

var myNav = document.getElementById('mynav');
window.onscroll = function () {
    "use strict";
    if (document.body.scrollTop >= 200 ) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    }
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};
