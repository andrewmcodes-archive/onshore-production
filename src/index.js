import styles from './styles.css';
import html from './index.html';
import onshore from './images/onshore_logo.svg';
import stapleton from './images/stapleton.jpg';
import jessi from './images/jessi.jpg';
import spencer from './images/spencer.jpg';
import aqxLogo from './images/uncw_logo.jpg';
import drStapleton from './images/profile_picture.jpg';

document.addEventListener("DOMContentLoaded", function () {
  var menu = document.getElementById("js-nav-menu")
  var navIconContainer = document.getElementById("nav-icon-container")
  var closeElements = document.getElementsByClassName("js-menu-dismiss")
  for (var i = 0; i < closeElements.length; i++) {
    closeElements[i].addEventListener("click", function () {
      if (!menu.classList.contains("hidden")) {
        menu.classList.add("hidden");
      }
      if (!navIconContainer.classList.contains("hidden")) {
        navIconContainer.classList.add("hidden");
      }
    })
  }
  document.getElementById("js-nav-menu-button").addEventListener("click", toggleMenu)
});

function toggleMenu() {
  document.getElementById("js-nav-menu").classList.toggle("hidden");
  document.getElementById("nav-icon-container").classList.toggle("hidden");
}

var shiftWindow = function () {
  scrollBy(0, -60)
};
window.addEventListener("hashchange", shiftWindow);

function load() {
  if (window.location.hash) shiftWindow();
}
