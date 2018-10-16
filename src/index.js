import './styles.css';
import './index.html';
import './contact.html';
import 'animate.css';
import cloudinary from 'cloudinary-core';

const $ = require('jquery');

const cl = new cloudinary.Cloudinary({cloud_name: "onshore-studios", secure: true});
cl.responsive()

document.addEventListener("DOMContentLoaded", function () {
  let menu = document.getElementById("js-nav-menu")
  let navIconContainer = document.getElementById("nav-icon-container")
  let closeElements = document.getElementsByClassName("js-menu-dismiss")

  for (let i = 0; i < closeElements.length; i++) {
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

let shiftWindow = function () {
  scrollBy(0, -80)
};
window.addEventListener("hashchange", shiftWindow);

function load() {
  if (window.location.hash) shiftWindow();
}

// @TODO remove Jquery
$(document).ready(function() {
  // Check if element is scrolled into view
  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  // If element is scrolled into view, fade it in
  $(window).scroll(function() {
    $('.scroll-animations .animated').each(function() {
      if (isScrolledIntoView(this) === true) {
        $(this).addClass('fadeInUp');
      }
    });
  });
});

$("#contact-form").submit(function (e) {
  e.preventDefault();

  var $form = $(this);
  $.post($form.attr("action"), $form.serialize()).then(function () {
    document.getElementById("contact-form").reset();
    alert("Thank you! We will be in touch shortly.");
  });
});
