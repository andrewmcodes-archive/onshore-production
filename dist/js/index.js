"use strict";

var shiftWindow = function() { scrollBy(0, -60) };
window.addEventListener("hashchange", shiftWindow);
function load() { if (window.location.hash) shiftWindow(); }
