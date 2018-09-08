import './styles.css';
import './index.html';
import './images/onshore-logo.svg';
import './images/stapleton.jpg';
import './images/jessi.jpg';
import './images/spencer.jpg';
import './images/uncw-logo.jpg';
import './images/profile-picture.jpg';

document.addEventListener("DOMContentLoaded", function () {
  var menu = document.getElementById("js-nav-menu")
  var closeElements = document.getElementsByClassName("js-menu-dismiss")
  for (var i = 0; i < closeElements.length; i++) {
    closeElements[i].addEventListener("click", function () {
      if (!menu.classList.contains("hidden")) {
        menu.classList.add("hidden");
      }
    })
  }
  document.getElementById("js-nav-menu-button").addEventListener("click", toggleMenu)
});

function toggleMenu() {
  document.getElementById("js-nav-menu").classList.toggle("hidden");
}

var shiftWindow = function () {
  scrollBy(0, -60)
};
window.addEventListener("hashchange", shiftWindow);

function load() {
  if (window.location.hash) shiftWindow();
}
