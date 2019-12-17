webpackHotUpdate("static/development/pages/stats.js",{

/***/ "./components/Dials.js":
/*!*****************************!*\
  !*** ./components/Dials.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "../node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "../node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "../node_modules/@emotion/core/dist/core.browser.esm.js");
var _jsxFileName = "/Users/CReative59/Documents/Web Projects/habits-parrot/src/components/Dials.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "transparent"
  },
  visible: {
    opacity: 1,
    pathLength: 0.9,
    fill: "transparent"
  },
  half: {
    opacity: 0.5,
    pathLength: 0.2,
    fill: "transparent"
  }
};

var Dial = function Dial(_ref) {
  var r = _ref.r,
      s = _ref.s,
      color = _ref.color;
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].path, {
    d: "\n            M 100, 100\n            m 0, ".concat(-r, "\n            a ").concat(r, ",").concat(r, " 0 1,0 0,").concat(r * 2, "\n            a ").concat(r, ",").concat(r, " 0 1,0 0,").concat(-r * 2, "\n        "),
    strokeWidth: s,
    strokeLinecap: "round",
    stroke: color,
    variants: icon,
    initial: "hidden",
    animate: "visible",
    transition: {
      duration: "5",
      type: "spring",
      stiffness: 40
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  });
};

var Dials = function Dials(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("visible"),
      animate = _useState[0],
      setAnimate = _useState[1];

  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    w: "400px",
    h: "400px",
    bg: "gray.500",
    p: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].svg, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 200 200",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(Dial, {
    r: 75,
    s: 20,
    color: "red",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(Dial, {
    r: 53,
    s: 20,
    color: "#f2f2f2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("circle", {
    cx: "100",
    cy: "20",
    r: "20",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("button", {
    onClick: function onClick() {
      return setAnimate("half");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "test"));
};

/* harmony default export */ __webpack_exports__["default"] = (Dials);

/***/ })

})
//# sourceMappingURL=stats.js.579cff2a1008813885f3.hot-update.js.map