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

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }







var _ref = false ? undefined : {
  name: "cph91i-Dials",
  styles: "overflow:hidden;stroke:#fff;stroke-width:5;stroke-linejoin:round;stroke-linecap:round;background:conic-gradient( red,yellow,lime,aqua,blue,magenta,red );;label:Dials;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9DUmVhdGl2ZTU5L0RvY3VtZW50cy9XZWIgUHJvamVjdHMvaGFiaXRzLXBhcnJvdC9zcmMvY29tcG9uZW50cy9EaWFscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ2dCIiwiZmlsZSI6Ii9Vc2Vycy9DUmVhdGl2ZTU5L0RvY3VtZW50cy9XZWIgUHJvamVjdHMvaGFiaXRzLXBhcnJvdC9zcmMvY29tcG9uZW50cy9EaWFscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIjtcblxuY29uc3QgRGlhbHMgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IFthbmltYXRlLCBzZXRBbmltYXRlXSA9IHVzZVN0YXRlKFwidmlzaWJsZVwiKTtcblxuICBjb25zdCBpY29uID0ge1xuICAgIGhpZGRlbjoge1xuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIHBhdGhMZW5ndGg6IDAsXG4gICAgICBwYXRoT2Zmc2V0OiAwLFxuICAgICAgZmlsbDogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDApXCJcbiAgICB9LFxuICAgIHZpc2libGU6IHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBwYXRoTGVuZ3RoOiAwLjUsXG4gICAgICBwYXRoT2Zmc2V0OiAwLjksXG4gICAgICBmaWxsOiBcInJnYmEoMjU1LCA4MCwgNzAsIDApXCJcbiAgICB9LFxuICAgIGhhbGY6IHtcbiAgICAgIG9wYWNpdHk6IDAuNSxcbiAgICAgIHBhdGhMZW5ndGg6IDAuNSxcbiAgICAgIHBhdGhPZmZzZXQ6IDAuNCxcbiAgICAgIGZpbGw6IFwicmdiYSgyNTUsIDgwLCA3MCwgMC43KVwiXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEJveCB3PVwiNDAwcHhcIiBoPVwiNDAwcHhcIiBiZz1cImdyYXkuNTAwXCIgcD1cIjRcIj5cbiAgICAgIDxtb3Rpb24uc3ZnXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICB2aWV3Qm94PVwiMCAwIDIxNiAyMTZcIlxuICAgICAgICBjc3M9e2Nzc2BcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHN0cm9rZTogI2ZmZjtcbiAgICAgICAgICBzdHJva2Utd2lkdGg6IDU7XG4gICAgICAgICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbiAgICAgICAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gICAgICAgICAgYmFja2dyb3VuZDogY29uaWMtZ3JhZGllbnQoXG4gICAgICAgICAgICByZWQsXG4gICAgICAgICAgICB5ZWxsb3csXG4gICAgICAgICAgICBsaW1lLFxuICAgICAgICAgICAgYXF1YSxcbiAgICAgICAgICAgIGJsdWUsXG4gICAgICAgICAgICBtYWdlbnRhLFxuICAgICAgICAgICAgcmVkXG4gICAgICAgICAgKTtcbiAgICAgICAgYH1cbiAgICAgID5cbiAgICAgICAgPG1vdGlvbi5wYXRoXG4gICAgICAgICAgZD1cIk0xMDggMjA4QzUyLjc3MTUgMjA4IDggMTYzLjIyOCA4IDEwOEM4IDUyLjc3MTUgNTIuNzcxNSA4IDEwOCA4QzE2My4yMjggOCAyMDggNTIuNzcxNSAyMDggMTA4QzIwOCAxNjMuMjI4IDE2My4yMjggMjA4IDEwOCAyMDhaXCJcbiAgICAgICAgICB2YXJpYW50cz17aWNvbn1cbiAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICBhbmltYXRlPXthbmltYXRlfVxuICAgICAgICAgIHRyYW5zaXRpb249e3tcbiAgICAgICAgICAgIGRlZmF1bHQ6IHsgZHVyYXRpb246IDQsIGVhc2U6IFwiZWFzZUluT3V0XCIgfSxcbiAgICAgICAgICAgIGZpbGw6IHsgZHVyYXRpb246IDIsIGVhc2U6IFsxLCAwLCAwLjgsIDFdIH1cbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9tb3Rpb24uc3ZnPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRBbmltYXRlKFwiaGFsZlwiKX0+dGVzdDwvYnV0dG9uPlxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRGlhbHM7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var Dials = function Dials(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("visible"),
      animate = _useState[0],
      setAnimate = _useState[1];

  var icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      pathOffset: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      opacity: 1,
      pathLength: 0.5,
      pathOffset: 0.9,
      fill: "rgba(255, 80, 70, 0)"
    },
    half: {
      opacity: 0.5,
      pathLength: 0.5,
      pathOffset: 0.4,
      fill: "rgba(255, 80, 70, 0.7)"
    }
  };
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    w: "400px",
    h: "400px",
    bg: "gray.500",
    p: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].svg, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 216 216",
    css:
    /*#__PURE__*/
    _ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].path, {
    d: "M108 208C52.7715 208 8 163.228 8 108C8 52.7715 52.7715 8 108 8C163.228 8 208 52.7715 208 108C208 163.228 163.228 208 108 208Z",
    variants: icon,
    initial: "hidden",
    animate: animate,
    transition: {
      "default": {
        duration: 4,
        ease: "easeInOut"
      },
      fill: {
        duration: 2,
        ease: [1, 0, 0.8, 1]
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["jsx"])("button", {
    onClick: function onClick() {
      return setAnimate("half");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "test"));
};

/* harmony default export */ __webpack_exports__["default"] = (Dials);

/***/ })

})
//# sourceMappingURL=stats.js.731bb4eab18716485105.hot-update.js.map