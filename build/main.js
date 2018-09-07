/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/images/ideas.svg":
/*!******************************!*\
  !*** ./src/images/ideas.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/ideas.svg\";\n\n//# sourceURL=webpack:///./src/images/ideas.svg?");

/***/ }),

/***/ "./src/images/jessi.jpg":
/*!******************************!*\
  !*** ./src/images/jessi.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/jessi.jpg\";\n\n//# sourceURL=webpack:///./src/images/jessi.jpg?");

/***/ }),

/***/ "./src/images/onshore-logo.svg":
/*!*************************************!*\
  !*** ./src/images/onshore-logo.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/onshore-logo.svg\";\n\n//# sourceURL=webpack:///./src/images/onshore-logo.svg?");

/***/ }),

/***/ "./src/images/profile-picture.jpg":
/*!****************************************!*\
  !*** ./src/images/profile-picture.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/profile-picture.jpg\";\n\n//# sourceURL=webpack:///./src/images/profile-picture.jpg?");

/***/ }),

/***/ "./src/images/spencer.jpg":
/*!********************************!*\
  !*** ./src/images/spencer.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/spencer.jpg\";\n\n//# sourceURL=webpack:///./src/images/spencer.jpg?");

/***/ }),

/***/ "./src/images/stapleton.jpg":
/*!**********************************!*\
  !*** ./src/images/stapleton.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/stapleton.jpg\";\n\n//# sourceURL=webpack:///./src/images/stapleton.jpg?");

/***/ }),

/***/ "./src/images/uncw_logo.jpg":
/*!**********************************!*\
  !*** ./src/images/uncw_logo.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"./images/uncw_logo.jpg\";\n\n//# sourceURL=webpack:///./src/images/uncw_logo.jpg?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = \"<!doctype html>\\n<html lang=\\\"en\\\">\\n\\n<head>\\n  <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n  <meta charset=\\\"utf-8\\\">\\n  <title>Onshore Studios</title>\\n  <meta name=\\\"description\\\" content=\\\"We build amazing websites\\\">\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1, shrink-to-fit=yes\\\">\\n  <script>\\n    (function (i, s, o, g, r, a, m) {\\n      i['GoogleAnalyticsObject'] = r;\\n      i[r] = i[r] || function () {\\n        (i[r].q = i[r].q || []).push(arguments)\\n      }, i[r].l = 1 * new Date();\\n      a = s.createElement(o),\\n        m = s.getElementsByTagName(o)[0];\\n      a.async = 1;\\n      a.src = g;\\n      m.parentNode.insertBefore(a, m)\\n    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');\\n\\n    ga('create', 'UA-99046738-1', 'auto');\\n    ga('send', 'pageview');\\n  </script>\\n  <meta name=\\\"robots\\\" content=\\\"all,follow\\\">\\n  <meta name=\\\"msapplication-TileColor\\\" content=\\\"#da532c\\\">\\n  <meta name=\\\"theme-color\\\" content=\\\"#ffffff\\\">\\n  <link rel=\\\"manifest\\\" href=\\\"../manifest.json\\\">\\n  <link rel=\\\"stylesheet\\\" href=\\\"./main.css\\\">\\n  <script src=\\\"./index.js\\\"></script>\\n  <link rel=\\\"stylesheet\\\" href=\\\"https://use.fontawesome.com/releases/v5.2.0/css/all.css\\\" integrity=\\\"sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ\\\"\\n    crossorigin=\\\"anonymous\\\">\\n</head>\\n\\n<body class=\\\"font-primary\\\">\\n  <nav class=\\\"nav\\\" id=\\\"myNav\\\">\\n    <div class=\\\"nav-brand-container\\\">\\n      <a rel=\\\"noopener\\\" data-scroll href=\\\"#home\\\" class=\\\"nav-brand\\\">Onshore Studios</a>\\n    </div>\\n    <div class=\\\"hider block text-primary lg:hidden\\\">\\n      <button class=\\\"nav-btn\\\" id=\\\"js-nav-menu-button\\\">\\n        <svg class=\\\"hamburger-menu\\\" viewBox=\\\"0 0 20 20\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n          <title>Menu</title>\\n          <path d=\\\"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z\\\" />\\n        </svg>\\n      </button>\\n    </div>\\n    <div class=\\\"hidden nav-content-container\\\" id=\\\"js-nav-menu\\\">\\n      <div class=\\\"nav-container\\\">\\n        <div class=\\\"nav-link-container\\\">\\n          <a rel=\\\"noopener\\\" data-scroll href=\\\"#home\\\" class=\\\"js-menu-dismiss nav-link\\\">\\n            Home\\n          </a>\\n          <a rel=\\\"noopener\\\" data-scroll href=\\\"#about\\\" class=\\\"js-menu-dismiss nav-link\\\">\\n            About\\n          </a>\\n          <a rel=\\\"noopener\\\" data-scroll href=\\\"#services\\\" class=\\\"js-menu-dismiss nav-link\\\">\\n            Services\\n          </a>\\n          <a rel=\\\"noopener\\\" data-scroll href=\\\"#solutions\\\" class=\\\"js-menu-dismiss nav-link\\\">\\n            Solutions\\n          </a>\\n          <a rel=\\\"noopener\\\" data-scroll href=\\\"#testimonials\\\" class=\\\"js-menu-dismiss nav-link\\\">\\n            Testimonials\\n          </a>\\n          <a rel=\\\"noopener\\\" data-scroll href=\\\"#recent-work\\\" class=\\\"js-menu-dismiss nav-link\\\">\\n            Recent Work\\n          </a>\\n          <a rel=\\\"noopener\\\" data-scroll href=\\\"#contact\\\" class=\\\"js-menu-dismiss nav-link\\\">\\n            Contact\\n          </a>\\n        </div>\\n      </div>\\n      <!-- <div class=\\\"nav-container\\\">\\n        <a rel=\\\"noopener\\\" data-scroll href=\\\"#contact\\\" class=\\\"btn nav-cta\\\">Contact</a>\\n      </div> -->\\n    </div>\\n  </nav>\\n  <div class=\\\"js-menu-dismiss z-10 bg-grey-lightest w-full\\\">\\n    <div class=\\\"color-container\\\">\\n      <div class=\\\"rect1\\\"></div>\\n      <div class=\\\"rect2\\\"></div>\\n      <div class=\\\"rect3\\\"></div>\\n      <div class=\\\"rect4\\\"></div>\\n      <div class=\\\"rect5\\\"></div>\\n      <div class=\\\"dots\\\"></div>\\n    </div>\\n    <section id=\\\"home\\\">\\n      <div class=\\\"logo-header\\\">\\n        <img src=\\\"\" + __webpack_require__(/*! ./images/onshore-logo.svg */ \"./src/images/onshore-logo.svg\") + \"\\\" width=\\\"32px\\\" height=\\\"48px\\\" alt=\\\"\\\">\\n        <h1>Onshore Studios</h1>\\n      </div>\\n      <div class=\\\"home-content\\\">\\n        <h1>Digital Design & Web Development</h1>\\n        <h2>We create, design, and develop innovative apps and websites that bring value to your business</h2>\\n        <a href=\\\"#contact\\\">Let's work together</a>\\n      </div>\\n    </section>\\n    <section id=\\\"about\\\" class=\\\"bg-black\\\">\\n      <div class=\\\"section-header\\\">\\n        <h1>We provide value for our clients</h1>\\n        <p class=\\\"section-content\\\">\\n          We offer a variety of services, focused on increasing conversion through digital\\n          mediums. We specialize in responsive, SEO friendly websites, and have experience with a variety of\\n          programming languages, frameworks, and technologies. Our other areas of expertise are graphic design,\\n          branding, and consulting.\\n        </p>\\n      </div>\\n    </section>\\n    <section id=\\\"services\\\">\\n      <div class=\\\"section-header\\\">\\n        <h1>We offer many services</h1>\\n      </div>\\n      <div class=\\\"section-content-flex\\\">\\n        <div class=\\\"section-item\\\">\\n          <h2>Discovery</h2>\\n          <p>We will research your industry, and competitors, in order to make sure you are on top.</p>\\n        </div>\\n        <div class=\\\"section-item\\\">\\n          <h2>Branding</h2>\\n          <p>From logos to digital advertisements, we offer many graphic design services.</p>\\n        </div>\\n        <div class=\\\"section-item\\\">\\n          <h2>Design</h2>\\n          <p>We’ll help you stand out from your competitors with our creative designs.</p>\\n        </div>\\n        <div class=\\\"section-item\\\">\\n          <h2>Development</h2>\\n          <p>We create responsive websites, using the current best practices, to increase online conversion.</p>\\n        </div>\\n      </div>\\n    </section>\\n    <section id=\\\"solutions\\\">\\n      <div class=\\\"section-header\\\">\\n        <h1>We can work with a variety of web technologies</h1>\\n        <p class=\\\"section-content\\\">For us, it is important to offer a wide variety of solutions to help increase the\\n          value of our client's web presence. We work with businesses of all sizes and scales, from start-ups to\\n          established companies. We seek to work with people who have exciting visions, that share the same passion we\\n          do. We are able to work with modern web frameworks, such as React and Vue.js, web application frameworks,\\n          like Ruby on Rails, and CSS frameworks and pre-processors. Whatever your business requires, we have you\\n          covered</p>\\n      </div>\\n    </section>\\n    <section id=\\\"testimonials\\\">\\n      <div class=\\\"section-header\\\">\\n        <div class=\\\"circle\\\">\\n          <img src=\\\"\" + __webpack_require__(/*! ./images/profile-picture.jpg */ \"./src/images/profile-picture.jpg\") + \"\\\" alt=\\\"Ann Stapleton Profile Image\\\" height=\\\"64px\\\">\\n        </div>\\n      </div>\\n      <div class=\\\"section-content-flex\\\">\\n        <div class=\\\"section-item\\\">\\n          <p>\\\"It's so fun to see UNCW students succeed! Andrew's design professor referred him to me and he constructed\\n            my original web site during his first design class. I am really pleased with the work Andrew and Ethan have\\n            done for me for the new page design, it's inspiring to see how they have developed their business. They are\\n            an excellent team to work with, with great customer service and terrific ideas.\\\"</p>\\n          <p class=\\\"testimonial-author\\\">Dr. Ann E. Stapleton // Professor at the University of North Carolina -\\n            Wilmington</p>\\n        </div>\\n      </div>\\n    </section>\\n    <section id=\\\"recent-work\\\">\\n      <div class=\\\"section-header\\\">\\n        <h1>Recent Work</h1>\\n        <p class=\\\"section-subtitle\\\">\\n          Here are some of our most recent projects.\\n        </p>\\n        <p class=\\\"section-subtitle\\\">\\n          Check out our <a href=\\\"https://www.instagram.com/onshorestudios/?hl=en\\\">Instagram</a> to see even more.\\n        </p>\\n      </div>\\n      <div class=\\\"section-content-grid\\\">\\n        <div class=\\\"section-item\\\"><img height=\\\"200px\\\" src=\\\"\" + __webpack_require__(/*! ./images/jessi.jpg */ \"./src/images/jessi.jpg\") + \"\\\" alt=\\\"Keeping Yesterday Logo\\\">\\n          <p class=\\\"section-item-content\\\">Keeping Yesterday Logo</p>\\n        </div>\\n        <div class=\\\"section-item\\\"><img height=\\\"200px\\\" src=\\\"\" + __webpack_require__(/*! ./images/uncw_logo.jpg */ \"./src/images/uncw_logo.jpg\") + \"\\\" alt=\\\"Keeping Yesterday Logo\\\">\\n          <p class=\\\"section-item-content\\\">UNCW Aquatics Logo</p>\\n        </div>\\n        <div class=\\\"section-item\\\"><img height=\\\"128px\\\" src=\\\"\" + __webpack_require__(/*! ./images/stapleton.jpg */ \"./src/images/stapleton.jpg\") + \"\\\" alt=\\\"\\\">\\n          <p class=\\\"section-item-content\\\">Dr. Ann E. Stapleton's Website</p>\\n        </div>\\n        <div class=\\\"section-item\\\"><img src=\\\"\" + __webpack_require__(/*! ./images/spencer.jpg */ \"./src/images/spencer.jpg\") + \"\\\" alt=\\\"\\\">\\n          <p class=\\\"section-item-content\\\">Composite Cases Packaging</p>\\n        </div>\\n      </div>\\n    </section>\\n    <section id=\\\"contact\\\">\\n      <div class=\\\"color-container\\\">\\n        <div class=\\\"rect1\\\"></div>\\n        <div class=\\\"rect2\\\"></div>\\n        <div class=\\\"rect3\\\"></div>\\n        <div class=\\\"rect4\\\"></div>\\n        <div class=\\\"rect5\\\"></div>\\n        <div class=\\\"dots\\\"></div>\\n      </div>\\n      <div class=\\\"section-header\\\">\\n        <h1>Contact Us</h1>\\n        <p class=\\\"section-subtitle\\\">\\n          We are currently open for new projects\\n        </p>\\n      </div>\\n      <div class=\\\"section-content\\\">\\n        <form method=\\\"POST\\\" netlify-recaptcha netlify action=\\\"/\\\">\\n          <div class=\\\"form-block\\\">\\n            <input type=\\\"text\\\" class=\\\"\\\" name=\\\"name\\\" id=\\\"name\\\" placeholder=\\\"Your Name\\\">\\n          </div>\\n          <div class=\\\"form-block\\\">\\n            <input type=\\\"email\\\" class=\\\"\\\" name=\\\"email\\\" id=\\\"email\\\" placeholder=\\\"Your Email Address\\\">\\n          </div>\\n          <div class=\\\"form-block\\\">\\n            <textarea name=\\\"message\\\" id=\\\"message\\\" cols=\\\"30\\\" rows=\\\"10\\\" placeholder=\\\"Please leave a short summary of the project you would like us to help with\\\"></textarea>\\n          </div>\\n          <div class=\\\"form-block\\\">\\n            <button class=\\\"btn\\\" type=\\\"submit\\\">Send Message</button>\\n          </div>\\n        </form>\\n        <p class=\\\"section-content\\\">\\n          Or you can email us at <a href=\\\"mailto:onshorestudios@gmail.com\\\">onshorestudios@gmail.com</a>\\n        </p>\\n      </div>\\n    </section>\\n    <footer>\\n      <div class=\\\"footer-content\\\">\\n        <p>All content © Onshore Studios 2018</p>\\n      </div>\\n    </footer>\\n  </div>\\n  <script src=\\\"https://www.google.com/recaptcha/api.js\\\"></script>\\n  <link href=\\\"https://fonts.googleapis.com/css?family=Muli:300,400,700\\\" rel=\\\"stylesheet\\\">\\n</body>\\n\\n</html>\\n\";\n\n//# sourceURL=webpack:///./src/index.html?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_html__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_ideas_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/ideas.svg */ \"./src/images/ideas.svg\");\n/* harmony import */ var _images_ideas_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_ideas_svg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _images_onshore_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/onshore-logo.svg */ \"./src/images/onshore-logo.svg\");\n/* harmony import */ var _images_onshore_logo_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_onshore_logo_svg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _images_profile_picture_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/profile-picture.jpg */ \"./src/images/profile-picture.jpg\");\n/* harmony import */ var _images_profile_picture_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_profile_picture_jpg__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var menu = document.getElementById(\"js-nav-menu\")\n  var closeElements = document.getElementsByClassName(\"js-menu-dismiss\")\n  for (var i = 0; i < closeElements.length; i++) {\n    closeElements[i].addEventListener(\"click\", function () {\n      if (!menu.classList.contains(\"hidden\")) {\n        menu.classList.add(\"hidden\");\n      }\n    })\n  }\n  document.getElementById(\"js-nav-menu-button\").addEventListener(\"click\", toggleMenu)\n});\n\nfunction toggleMenu() {\n  document.getElementById(\"js-nav-menu\").classList.toggle(\"hidden\");\n}\n\nvar shiftWindow = function () {\n  scrollBy(0, -60)\n};\nwindow.addEventListener(\"hashchange\", shiftWindow);\n\nfunction load() {\n  if (window.location.hash) shiftWindow();\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ })

/******/ });