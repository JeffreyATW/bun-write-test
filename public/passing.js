(self["webpackChunklunch"] = self["webpackChunklunch"] || []).push([["landing"],{

  /***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].rules[2]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].rules[4]!./node_modules/sass-loader/dist/cjs.js!./src/routes/main/landing/Landing.scss":
  /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
  
  // Imports
  var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js");
  var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
  var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__("./node_modules/css-loader/dist/runtime/getUrl.js");
  var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__("./src/styles/ham.jpg");
  var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__("./src/routes/main/landing/jumbotron.jpg");
  var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
  var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
  var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
  // Module
  ___CSS_LOADER_EXPORT___.push([module.id, `/*
   * Colors
   * ========================================================================== */
  /*
   * Typography
   * ========================================================================== */
  /*
   * Layout
   * ========================================================================== */
  /*
   * Media queries breakpoints
   * ========================================================================== */
  /* Extra small screen / phone */
  /* Small screen / tablet */
  /* Medium screen / desktop */
  /* Large screen / wide desktop */
  /*
   * Etc.
   * ========================================================================== */
  .Landing-root {
    background: pink url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-attachment: fixed;
  }
  .Landing-root img {
    flex: 0 0 auto;
    width: 100%;
  }
  
  .Landing-jumbotron {
    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) no-repeat 50%;
    background-size: cover;
    border-bottom: 3px solid #000;
    margin: 0;
    padding: 48px 0 6em;
    text-align: center;
    text-shadow: 0 0 0.25em white, 0 0 0.5em white, 0 0 1em white, 0 0 2em white;
  }
  .Landing-jumbotron p {
    margin-bottom: 15px;
    font-size: 21px;
  }
  
  .Landing-jumbotronHeading {
    font-size: 63px;
    font-weight: bold;
    white-space: nowrap;
  }
  
  .Landing-form {
    display: flex;
    text-shadow: none;
  }
  
  .Landing-formGroup {
    flex-grow: 1;
    margin-right: 0.5em;
  }
  .Landing-formGroup .Landing-field {
    width: 100%;
  }
  
  .Landing-feature {
    display: flex;
    font-size: 2em;
    position: relative;
  }
  .Landing-feature::before, .Landing-feature::after {
    border-bottom: 3px solid #000;
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    width: calc(50vw + 1.5px);
    z-index: 0;
  }
  .Landing-feature::before {
    border-right: 3px solid #000;
    right: calc(50% - 1.5px);
  }
  .Landing-feature::after {
    left: calc(50% + 1.5px);
  }
  .Landing-feature:nth-child(even)::after, .Landing-feature:nth-child(odd)::before {
    background: #fff;
  }
  .Landing-feature:last-child::before {
    border-bottom: none;
  }
  .Landing-feature > :first-child {
    align-items: center;
  }
  .Landing-feature > * {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: calc(1.5rem + 3px) 1.5rem;
    position: relative;
    z-index: 1; /* above pseudoelements */
  }
  .Landing-feature > * > :first-child {
    font-size: 1.5em;
    margin-top: 0;
  }
  .Landing-feature:nth-child(odd) > :first-child {
    padding-right: 0.75rem;
  }
  .Landing-feature:nth-child(even) > :first-child {
    padding-left: 0.75rem;
  }
  .Landing-feature:nth-child(odd) {
    flex-direction: row-reverse;
    text-align: right;
  }
  
  .Landing-finalCta {
    margin-top: 4em;
    text-align: center;
  }
  .Landing-finalCta:last-child {
    padding-bottom: 4em;
  }
  
  @media (width <= 991px) {
    .Landing-feature {
      font-size: 1.5em;
    }
  }
  @media (width <= 479px) {
    .Landing-root img {
      height: auto;
    }
    .Landing-jumbotronHeading {
      font-size: 3em;
    }
    .Landing-feature {
      display: block;
    }
    .Landing-feature::before, .Landing-feature::after {
      display: none;
    }
    .Landing-feature:nth-child(odd) {
      text-align: left;
    }
    .Landing-feature > * {
      float: none;
    }
    .Landing-feature > :first-child {
      padding-left: 0.75rem;
      padding-right: 0.75rem;
      text-align: center;
    }
    .Landing-feature > :last-child::before {
      background: #fff;
      border: 3px solid #000;
      border-width: 3px 0;
      content: "";
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100vw;
      z-index: -1;
    }
    .Landing-feature img {
      max-width: 480px;
    }
  }`, "",{"version":3,"sources":["webpack://./src/styles/_variables.scss","webpack://./src/routes/main/landing/Landing.scss"],"names":[],"mappings":"AAAA;;+EAAA;AAqBA;;+EAAA;AAQA;;+EAAA;AAKA;;+EAAA;AAGuB,+BAAA;AACA,0BAAA;AACA,4BAAA;AACC,gCAAA;AAExB;;+EAAA;ACxCA;EACE,wDAAA;EACA,4BAAA;AAkBF;AAhBE;EACE,cAAA;EACA,WAAA;AAkBJ;;AAdA;EACE,iEAAA;EACA,sBAAA;EACA,6BDiCe;EChCf,SAAA;EACA,mBAAA;EACA,kBAAA;EACA,4EAAA;AAiBF;AAfE;EACE,mBAAA;EACA,eAAA;AAiBJ;;AAbA;EACE,eAAA;EACA,iBAAA;EACA,mBAAA;AAgBF;;AAbA;EACE,aAAA;EACA,iBAAA;AAgBF;;AAbA;EACE,YAAA;EACA,mBAAA;AAgBF;AAdE;EACE,WAAA;AAgBJ;;AAZA;EACE,aAAA;EACA,cAAA;EACA,kBAAA;AAeF;AAbE;EAEE,6BDNa;ECOb,WAAA;EACA,cAAA;EACA,YAAA;EACA,kBAAA;EACA,MAAA;EACA,yBAAA;EACA,UAAA;AAcJ;AAXE;EACE,4BDjBa;ECkBb,wBAAA;AAaJ;AAVE;EACE,uBAAA;AAYJ;AATE;EAEE,gBDxEU;ACkFd;AANI;EACE,mBAAA;AAQN;AAJE;EACE,mBAAA;AAMJ;AAHE;EACE,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,kCAAA;EACA,kBAAA;EACA,UAAA,EAAA,yBAAA;AAKJ;AAHI;EACE,gBAAA;EACA,aAAA;AAKN;AADE;EACE,sBAAA;AAGJ;AAAE;EACE,qBAAA;AAEJ;AACE;EACE,2BAAA;EACA,iBAAA;AACJ;;AAGA;EACE,eAAA;EACA,kBAAA;AAAF;AAEE;EACE,mBAAA;AAAJ;;AAIA;EACE;IACE,gBAAA;EADF;AACF;AAIA;EAEI;IACE,YAAA;EAHJ;EAOA;IACE,cAAA;EALF;EAQA;IACE,cAAA;EANF;EAQE;IAEE,aAAA;EAPJ;EAUE;IACE,gBAAA;EARJ;EAWE;IACE,WAAA;EATJ;EAYE;IACE,qBAAA;IACA,sBAAA;IACA,kBAAA;EAVJ;EAcI;IACE,gBDnKM;ICoKN,sBDvHS;ICwHT,mBAAA;IACA,WAAA;IACA,YAAA;IACA,OAAA;IACA,kBAAA;IACA,MAAA;IACA,YAAA;IACA,WAAA;EAZN;EAgBE;IACE,gBAAA;EAdJ;AACF","sourcesContent":["/*\n * Colors\n * ========================================================================== */\n$white-color: #fff;\n$black-color: #000;\n$background-color: #333;\n$border-color: $black-color;\n$text-color: $black-color;\n\n// Bootstrap overrides\n$gray-base: $black-color;\n$gray-darker: $black-color;\n$gray-dark: $black-color;\n$gray: $black-color;\n$btn-default-color: $black-color;\n$list-group-border: #ddd;\n$list-group-link-color: $black-color;\n$link-color: #66e;\n$danger: #ff75e3;\n$primary: $link-color;\n\n/*\n * Typography\n * ========================================================================== */\n$font-family-base: nunito, sans-serif;\n$font-size-base: .875rem;\n$normal-weight: 400;\n$bold-weight: 900;\n\n/*\n * Layout\n * ========================================================================== */\n$max-content-width: 1000px;\n\n/*\n * Media queries breakpoints\n * ========================================================================== */\n$screen-xs-min: 480px; /* Extra small screen / phone */\n$screen-sm-min: 768px; /* Small screen / tablet */\n$screen-md-min: 992px; /* Medium screen / desktop */\n$screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n/*\n * Etc.\n * ========================================================================== */\n$border-radius: 4px;\n$border-radius-lg: 6px;\n$default-border-width: 3px;\n$default-border: $default-border-width solid $border-color;\n$enable-caret: false;\n$modal-header-border-color: $list-group-border;\n$popover-font-size: $font-size-base;\n$table-border-color: $list-group-border;\n\n@import \"~bootstrap/scss/functions\";\n@import \"~bootstrap/scss/variables\";\n","@import \"../../../styles/variables\";\n\n.root {\n  background: pink url(\"../../../styles/ham.jpg\");\n  background-attachment: fixed;\n\n  img {\n    flex: 0 0 auto; // IE11 hack\n    width: 100%;\n  }\n}\n\n.jumbotron {\n  background: url(\"./jumbotron.jpg\") no-repeat 50%;\n  background-size: cover;\n  border-bottom: $default-border;\n  margin: 0;\n  padding: 48px 0 6em;\n  text-align: center;\n  text-shadow: 0 0 .25em white, 0 0 .5em white, 0 0 1em white, 0 0 2em white;\n\n  p {\n    margin-bottom: 15px;\n    font-size: 21px;\n  }\n}\n\n.jumbotronHeading {\n  font-size: 63px;\n  font-weight: bold;\n  white-space: nowrap;\n}\n\n.form {\n  display: flex;\n  text-shadow: none;\n}\n\n.formGroup {\n  flex-grow: 1;\n  margin-right: .5em;\n\n  .field {\n    width: 100%;\n  }\n}\n\n.feature {\n  display: flex;\n  font-size: 2em;\n  position: relative;\n\n  &::before,\n  &::after {\n    border-bottom: $default-border;\n    content: \"\";\n    display: block;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    width: calc(50vw + 1.5px);\n    z-index: 0;\n  }\n\n  &::before {\n    border-right: $default-border;\n    right: calc(50% - 1.5px);\n  }\n\n  &::after {\n    left: calc(50% + 1.5px);\n  }\n\n  &:nth-child(even)::after,\n  &:nth-child(odd)::before {\n    background: $white-color;\n  }\n\n  &:last-child {\n    &::before {\n      border-bottom: none;\n    }\n  }\n\n  & > :first-child {\n    align-items: center;\n  }\n\n  & > * {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: calc($grid-gutter-width + $default-border-width) $grid-gutter-width;\n    position: relative;\n    z-index: 1; /* above pseudoelements */\n\n    & > :first-child {\n      font-size: 1.5em;\n      margin-top: 0;\n    }\n  }\n\n  &:nth-child(odd) > :first-child {\n    padding-right: calc($grid-gutter-width / 2);\n  }\n\n  &:nth-child(even) > :first-child {\n    padding-left: calc($grid-gutter-width / 2);\n  }\n\n  &:nth-child(odd) {\n    flex-direction: row-reverse;\n    text-align: right;\n  }\n}\n\n.finalCta {\n  margin-top: 4em;\n  text-align: center;\n\n  &:last-child {\n    padding-bottom: 4em;\n  }\n}\n\n@media (width <= calc($screen-md-min - 1px)) {\n  .feature {\n    font-size: 1.5em;\n  }\n}\n\n@media (width <= calc($screen-xs-min - 1px)) {\n  .root {\n    img {\n      height: auto;\n    }\n  }\n\n  .jumbotronHeading {\n    font-size: 3em;\n  }\n\n  .feature {\n    display: block;\n\n    &::before,\n    &::after {\n      display: none;\n    }\n\n    &:nth-child(odd) {\n      text-align: left;\n    }\n\n    & > * {\n      float: none;\n    }\n\n    & > :first-child {\n      padding-left: calc($grid-gutter-width / 2);\n      padding-right: calc($grid-gutter-width / 2);\n      text-align: center;\n    }\n\n    & > :last-child {\n      &::before {\n        background: $white-color;\n        border: $default-border;\n        border-width: $default-border-width 0;\n        content: \"\";\n        height: 100%;\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 100vw;\n        z-index: -1;\n      }\n    }\n\n    img {\n      max-width: 480px;\n    }\n  }\n}\n"],"sourceRoot":""}]);
  // Exports
  ___CSS_LOADER_EXPORT___.locals = {
    "root": `Landing-root`,
    "jumbotron": `Landing-jumbotron`,
    "jumbotronHeading": `Landing-jumbotronHeading`,
    "form": `Landing-form`,
    "formGroup": `Landing-formGroup`,
    "field": `Landing-field`,
    "feature": `Landing-feature`,
    "finalCta": `Landing-finalCta`
  };
  module.exports = ___CSS_LOADER_EXPORT___;
  
  
  /***/ }),
  
  /***/ "./src/routes/main/landing/decide.png":
  /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
  
  module.exports = __webpack_require__.p + "src/routes/main/landing/decide.png?de873116";
  
  /***/ }),
  
  /***/ "./src/routes/main/landing/search.png":
  /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
  
  module.exports = __webpack_require__.p + "src/routes/main/landing/search.png?fc4ecffc";
  
  /***/ }),
  
  /***/ "./src/routes/main/landing/tag.png":
  /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
  
  module.exports = __webpack_require__.p + "src/routes/main/landing/tag.png?6e029263";
  
  /***/ }),
  
  /***/ "./src/routes/main/landing/vote.png":
  /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
  
  module.exports = __webpack_require__.p + "src/routes/main/landing/vote.png?ed1e0c28";
  
  /***/ }),
  
  /***/ "./src/routes/main/landing/Landing.scss":
  /***/ ((module, exports, __webpack_require__) => {
  
  
      var refs = 0;
      var css = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].rules[2]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].rules[4]!./node_modules/sass-loader/dist/cjs.js!./src/routes/main/landing/Landing.scss");
      var insertCss = __webpack_require__("./node_modules/isomorphic-style-loader/insertCss.js");
      var content = typeof css === 'string' ? [[module.id, css, '']] : css;
  
      exports = module.exports = css.locals || {};
      exports._getContent = function() { return content; };
      exports._getCss = function() { return '' + css; };
      exports._insertCss = function(options) { return insertCss(content, options) };
  
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) { var removeCss; }
    
  
  /***/ }),
  
  /***/ "./src/routes/main/landing/Landing.tsx":
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
  /* harmony export */ });
  /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.mjs");
  /* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/isomorphic-style-loader/withStyles.js");
  /* harmony import */ var isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1__);
  /* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-bootstrap/esm/Button.js");
  /* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react-bootstrap/esm/Col.js");
  /* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/react-bootstrap/esm/Form.js");
  /* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/react-bootstrap/esm/Container.js");
  /* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/react-bootstrap/esm/Row.js");
  /* harmony import */ var _search_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/routes/main/landing/search.png");
  /* harmony import */ var _search_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_search_png__WEBPACK_IMPORTED_MODULE_7__);
  /* harmony import */ var _tag_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/routes/main/landing/tag.png");
  /* harmony import */ var _tag_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tag_png__WEBPACK_IMPORTED_MODULE_8__);
  /* harmony import */ var _vote_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/routes/main/landing/vote.png");
  /* harmony import */ var _vote_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_vote_png__WEBPACK_IMPORTED_MODULE_9__);
  /* harmony import */ var _decide_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/routes/main/landing/decide.png");
  /* harmony import */ var _decide_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_decide_png__WEBPACK_IMPORTED_MODULE_10__);
  /* harmony import */ var _Landing_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/routes/main/landing/Landing.scss");
  /* harmony import */ var _Landing_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Landing_scss__WEBPACK_IMPORTED_MODULE_11__);
  
  
  
  
  
  
  
  
  
  
  
  
  const renderForm = () => (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__["default"], { className: (_Landing_scss__WEBPACK_IMPORTED_MODULE_11___default().form), action: "/invitation?success=sent", method: "post" },
      react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__["default"].Group, { className: (_Landing_scss__WEBPACK_IMPORTED_MODULE_11___default().formGroup), controlId: "landing-email" },
          react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__["default"].Label, { visuallyHidden: true }, "Email"),
          react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__["default"].Control, { size: "lg", className: (_Landing_scss__WEBPACK_IMPORTED_MODULE_11___default().field), name: "email", placeholder: "Enter your email", required: true, type: "email" })),
      " ",
      react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__["default"], { size: "lg", variant: "primary", type: "submit" }, "Get invited")));
  const Landing = () => (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: (_Landing_scss__WEBPACK_IMPORTED_MODULE_11___default().root) },
      react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("section", { className: (_Landing_scss__WEBPACK_IMPORTED_MODULE_11___default().jumbotron) },
          react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__["default"], null,
              react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", { className: (_Landing_scss__WEBPACK_IMPORTED_MODULE_11___default().jumbotronHeading) },
                  "Figure it out,",
                  react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("br", null),
                  "together."),
              react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__["default"], null,
                  react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], { xs: 12, sm: { span: 6, offset: 3 } },
                      react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Unsure what to eat? Want to leave the office for a bit and grab some grub with your team? Try\u00A0Lunch!"),
                      renderForm())))),
      react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__["default"], null,
          react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__["default"], { className: (_Landing_scss__WEBPACK_IMPORTED_MODULE_11___default().feature) },
              react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], { xs: 12, sm: 6 },
                  react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", { src: (_search_png__WEBPACK_IMPORTED_MODULE_7___default()), alt: "" })),
              react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], { xs: 12, sm: 6 },
                  react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", null, "Search!"),
                  react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Put together a list of nearby restaurants. You can add as many as you like."))),
          react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__["default"], { className: (_Landing_scss__WEBPACK_IMPORTED_MODULE_11___default().feature) },
              react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], { xs: 12, sm: 6 },
                  react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", { src: (_tag_png__WEBPACK_IMPORTED_MODULE_8___default()), alt: "" })),
              react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], { xs: 12, sm: 6 },
                  react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", null, "Tag!"),
                  react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Tag the restaurants, then filter or exclude certain kinds. Emoji tags? Go for it!"))),
          react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__["default"], { className: (_Landing_scss__WEBPACK_IMPORTED_MODULE_11___default().feature) },
              react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], { xs: 12, sm: 6 },
                  react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", { src: (_vote_png__WEBPACK_IMPORTED_MODULE_9___default()), alt: "" })),
              react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], { xs: 12, sm: 6 },
                  react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", null, "Vote!"),
                  react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "You only get one vote per restaurant each day, but you can vote for as many as you like. Voting also affects what shows up at the top of the list tomorrow!"))),
          react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__["default"], { className: (_Landing_scss__WEBPACK_IMPORTED_MODULE_11___default().feature) },
              react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], { xs: 12, sm: 6 },
                  react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", { src: (_decide_png__WEBPACK_IMPORTED_MODULE_10___default()), alt: "" })),
              react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], { xs: 12, sm: 6 },
                  react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", null, "Decide!"),
                  react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "When you mark a restaurant as the decision for the day, it\u2019ll be sorted to the bottom of the list for the next few weeks to keep things fresh.")))),
      react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__["default"], null,
          react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: (_Landing_scss__WEBPACK_IMPORTED_MODULE_11___default().finalCta) },
              react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", null, "Sign up today!"),
              react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__["default"], null,
                  react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], { xs: 12, sm: { span: 6, offset: 3 } }, renderForm()))),
          react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: (_Landing_scss__WEBPACK_IMPORTED_MODULE_11___default().finalCta) },
              react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", null, "Already a member? Come on in!"),
              react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__["default"], { size: "lg", variant: "primary", href: "/login" }, "Log into your teams")))));
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1___default()((_Landing_scss__WEBPACK_IMPORTED_MODULE_11___default()))(Landing));
  
  
  /***/ }),
  
  /***/ "./src/routes/main/landing/index.tsx":
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
  /* harmony export */ });
  /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.mjs");
  /* harmony import */ var _components_Layout_LayoutContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Layout/LayoutContainer.ts");
  /* harmony import */ var _helpers_renderIfLoggedOut__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/routes/helpers/renderIfLoggedOut.ts");
  /* harmony import */ var _Landing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/routes/main/landing/Landing.tsx");
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  
  
  
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((context) => {
      const state = context.store.getState();
      return (0,_helpers_renderIfLoggedOut__WEBPACK_IMPORTED_MODULE_2__["default"])(state, () => ({
          chunks: ["landing"],
          component: (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_components_Layout_LayoutContainer__WEBPACK_IMPORTED_MODULE_1__["default"], { path: context.pathname },
              react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_Landing__WEBPACK_IMPORTED_MODULE_3__["default"], null))),
          fullTitle: "Lunch – Team voting for nearby restaurants",
      }));
  });
  
  
  /***/ }),
  
  /***/ "./src/routes/main/landing/jumbotron.jpg":
  /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
  
  module.exports = __webpack_require__.p + "src/routes/main/landing/jumbotron.jpg?e94b016e";
  
  /***/ }),
  
  /***/ "./src/styles/ham.jpg":
  /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
  
  module.exports = __webpack_require__.p + "src/styles/ham.jpg?be04cc12";
  
  /***/ })
  
  }]);
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZGluZy5jaHVuay5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0EsNENBQTRDLG1CQUFPLENBQUMsc0RBQWdFO0FBQ3BILGtDQUFrQyxtQkFBTyxDQUFDLCtDQUF5RDtBQUNuRyxzQ0FBc0MsbUJBQU8sQ0FBQyxrREFBNEQ7QUFDMUcsb0NBQW9DLG1CQUFPLENBQUMsc0JBQXlCO0FBQ3JFLG9DQUFvQyxtQkFBTyxDQUFDLHlDQUFpQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsbUNBQW1DO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixtQ0FBbUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlKQUFpSixNQUFNLE9BQU8sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLFlBQVksV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsT0FBTyxLQUFLLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxXQUFXLFdBQVcsT0FBTyxLQUFLLFVBQVUsV0FBVyxPQUFPLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLFlBQVksS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxxQkFBcUIsS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FB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QUN4Qix5RkFBdUI7WUFDdkIsNERBQUMsMkRBQUc7Z0JBQ0YsNERBQUMsMkRBQUcsSUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUNwQyxVQUFVLEVBQUUsQ0FDVCxDQUNGLENBQ0Y7UUFDTixxRUFBSyxTQUFTLEVBQUUsZ0VBQVU7WUFDeEIsd0dBQXNDO1lBQ3RDLDREQUFDLDhEQUFNLElBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLElBQUksRUFBQyxRQUFRLDBCQUV4QyxDQUNMLENBQ0ksQ0FDUixDQUNQLENBQUM7QUFFRixpRUFBZSx5RUFBVSxDQUFDLHVEQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSHRDOzs7Ozs7O0dBT0c7QUFFdUI7QUFDK0M7QUFFVDtBQUNoQztBQUVoQyxpRUFBZSxDQUFDLE9BQW1CLEVBQUUsRUFBRTtJQUNyQyxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRXZDLE9BQU8sc0VBQWlCLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDckMsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDO1FBQ25CLFNBQVMsRUFBRSxDQUNULDREQUFDLDBFQUFlLElBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1lBQ3JDLDREQUFDLGdEQUFPLE9BQUcsQ0FDSyxDQUNuQjtRQUNELFNBQVMsRUFBRSw0Q0FBNEM7S0FDeEQsQ0FBQyxDQUFDLENBQUM7QUFDTixDQUFDLEVBQUM7Ozs7Ozs7O0FDM0JGLGlCQUFpQixxQkFBdUI7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QiIsInNvdXJjZXMiOlsiL1VzZXJzL2plZmZyZXlhdHcvQ29kZS9MYWJaZXJvL0xhYlplcm8vbHVuY2gvc3JjL3JvdXRlcy9tYWluL2xhbmRpbmcvTGFuZGluZy5zY3NzIiwiL1VzZXJzL2plZmZyZXlhdHcvQ29kZS9MYWJaZXJvL0xhYlplcm8vbHVuY2gvc3JjL3JvdXRlcy9tYWluL2xhbmRpbmcvZGVjaWRlLnBuZyIsIi9Vc2Vycy9qZWZmcmV5YXR3L0NvZGUvTGFiWmVyby9MYWJaZXJvL2x1bmNoL3NyYy9yb3V0ZXMvbWFpbi9sYW5kaW5nL3NlYXJjaC5wbmciLCIvVXNlcnMvamVmZnJleWF0dy9Db2RlL0xhYlplcm8vTGFiWmVyby9sdW5jaC9zcmMvcm91dGVzL21haW4vbGFuZGluZy90YWcucG5nIiwiL1VzZXJzL2plZmZyZXlhdHcvQ29kZS9MYWJaZXJvL0xhYlplcm8vbHVuY2gvc3JjL3JvdXRlcy9tYWluL2xhbmRpbmcvdm90ZS5wbmciLCJ3ZWJwYWNrOi8vbHVuY2gvLi9zcmMvcm91dGVzL21haW4vbGFuZGluZy9MYW5kaW5nLnNjc3M/ZDVjMSIsIi9Vc2Vycy9qZWZmcmV5YXR3L0NvZGUvTGFiWmVyby9MYWJaZXJvL2x1bmNoL3NyYy9yb3V0ZXMvbWFpbi9sYW5kaW5nL0xhbmRpbmcudHN4IiwiL1VzZXJzL2plZmZyZXlhdHcvQ29kZS9MYWJaZXJvL0xhYlplcm8vbHVuY2gvc3JjL3JvdXRlcy9tYWluL2xhbmRpbmcvaW5kZXgudHN4IiwiL1VzZXJzL2plZmZyZXlhdHcvQ29kZS9MYWJaZXJvL0xhYlplcm8vbHVuY2gvc3JjL3JvdXRlcy9tYWluL2xhbmRpbmcvanVtYm90cm9uLmpwZyIsIi9Vc2Vycy9qZWZmcmV5YXR3L0NvZGUvTGFiWmVyby9MYWJaZXJvL2x1bmNoL3NyYy9zdHlsZXMvaGFtLmpwZyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vc3R5bGVzL2hhbS5qcGdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSByZXF1aXJlKFwiLi9qdW1ib3Ryb24uanBnXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qXG4gKiBDb2xvcnNcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKlxuICogVHlwb2dyYXBoeVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qXG4gKiBMYXlvdXRcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKlxuICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXG4vKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cbi8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovXG4vKiBMYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3AgKi9cbi8qXG4gKiBFdGMuXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLkxhbmRpbmctcm9vdCB7XG4gIGJhY2tncm91bmQ6IHBpbmsgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xufVxuLkxhbmRpbmctcm9vdCBpbWcge1xuICBmbGV4OiAwIDAgYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5MYW5kaW5nLWp1bWJvdHJvbiB7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KSBuby1yZXBlYXQgNTAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzAwMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiA0OHB4IDAgNmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtc2hhZG93OiAwIDAgMC4yNWVtIHdoaXRlLCAwIDAgMC41ZW0gd2hpdGUsIDAgMCAxZW0gd2hpdGUsIDAgMCAyZW0gd2hpdGU7XG59XG4uTGFuZGluZy1qdW1ib3Ryb24gcCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGZvbnQtc2l6ZTogMjFweDtcbn1cblxuLkxhbmRpbmctanVtYm90cm9uSGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogNjNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5MYW5kaW5nLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbn1cblxuLkxhbmRpbmctZm9ybUdyb3VwIHtcbiAgZmxleC1ncm93OiAxO1xuICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xufVxuLkxhbmRpbmctZm9ybUdyb3VwIC5MYW5kaW5nLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5MYW5kaW5nLWZlYXR1cmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDJlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLkxhbmRpbmctZmVhdHVyZTo6YmVmb3JlLCAuTGFuZGluZy1mZWF0dXJlOjphZnRlciB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDAwO1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IGNhbGMoNTB2dyArIDEuNXB4KTtcbiAgei1pbmRleDogMDtcbn1cbi5MYW5kaW5nLWZlYXR1cmU6OmJlZm9yZSB7XG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICMwMDA7XG4gIHJpZ2h0OiBjYWxjKDUwJSAtIDEuNXB4KTtcbn1cbi5MYW5kaW5nLWZlYXR1cmU6OmFmdGVyIHtcbiAgbGVmdDogY2FsYyg1MCUgKyAxLjVweCk7XG59XG4uTGFuZGluZy1mZWF0dXJlOm50aC1jaGlsZChldmVuKTo6YWZ0ZXIsIC5MYW5kaW5nLWZlYXR1cmU6bnRoLWNoaWxkKG9kZCk6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uTGFuZGluZy1mZWF0dXJlOmxhc3QtY2hpbGQ6OmJlZm9yZSB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4uTGFuZGluZy1mZWF0dXJlID4gOmZpcnN0LWNoaWxkIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5MYW5kaW5nLWZlYXR1cmUgPiAqIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IGNhbGMoMS41cmVtICsgM3B4KSAxLjVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTsgLyogYWJvdmUgcHNldWRvZWxlbWVudHMgKi9cbn1cbi5MYW5kaW5nLWZlYXR1cmUgPiAqID4gOmZpcnN0LWNoaWxkIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5MYW5kaW5nLWZlYXR1cmU6bnRoLWNoaWxkKG9kZCkgPiA6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xufVxuLkxhbmRpbmctZmVhdHVyZTpudGgtY2hpbGQoZXZlbikgPiA6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XG59XG4uTGFuZGluZy1mZWF0dXJlOm50aC1jaGlsZChvZGQpIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLkxhbmRpbmctZmluYWxDdGEge1xuICBtYXJnaW4tdG9wOiA0ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5MYW5kaW5nLWZpbmFsQ3RhOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLWJvdHRvbTogNGVtO1xufVxuXG5AbWVkaWEgKHdpZHRoIDw9IDk5MXB4KSB7XG4gIC5MYW5kaW5nLWZlYXR1cmUge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gIH1cbn1cbkBtZWRpYSAod2lkdGggPD0gNDc5cHgpIHtcbiAgLkxhbmRpbmctcm9vdCBpbWcge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICAuTGFuZGluZy1qdW1ib3Ryb25IZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDNlbTtcbiAgfVxuICAuTGFuZGluZy1mZWF0dXJlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuTGFuZGluZy1mZWF0dXJlOjpiZWZvcmUsIC5MYW5kaW5nLWZlYXR1cmU6OmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5MYW5kaW5nLWZlYXR1cmU6bnRoLWNoaWxkKG9kZCkge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgLkxhbmRpbmctZmVhdHVyZSA+ICoge1xuICAgIGZsb2F0OiBub25lO1xuICB9XG4gIC5MYW5kaW5nLWZlYXR1cmUgPiA6Zmlyc3QtY2hpbGQge1xuICAgIHBhZGRpbmctbGVmdDogMC43NXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuTGFuZGluZy1mZWF0dXJlID4gOmxhc3QtY2hpbGQ6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjMDAwO1xuICAgIGJvcmRlci13aWR0aDogM3B4IDA7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICB6LWluZGV4OiAtMTtcbiAgfVxuICAuTGFuZGluZy1mZWF0dXJlIGltZyB7XG4gICAgbWF4LXdpZHRoOiA0ODBweDtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9yb3V0ZXMvbWFpbi9sYW5kaW5nL0xhbmRpbmcuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7K0VBQUE7QUFxQkE7OytFQUFBO0FBUUE7OytFQUFBO0FBS0E7OytFQUFBO0FBR3VCLCtCQUFBO0FBQ0EsMEJBQUE7QUFDQSw0QkFBQTtBQUNDLGdDQUFBO0FBRXhCOzsrRUFBQTtBQ3hDQTtFQUNFLHdEQUFBO0VBQ0EsNEJBQUE7QUFrQkY7QUFoQkU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQWtCSjs7QUFkQTtFQUNFLGlFQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkRpQ2U7RUNoQ2YsU0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw0RUFBQTtBQWlCRjtBQWZFO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FBaUJKOztBQWJBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFnQkY7O0FBYkE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUFnQkY7O0FBYkE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFnQkY7QUFkRTtFQUNFLFdBQUE7QUFnQko7O0FBWkE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBZUY7QUFiRTtFQUVFLDZCRE5hO0VDT2IsV0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FBY0o7QUFYRTtFQUNFLDRCRGpCYTtFQ2tCYix3QkFBQTtBQWFKO0FBVkU7RUFDRSx1QkFBQTtBQVlKO0FBVEU7RUFFRSxnQkR4RVU7QUNrRmQ7QUFOSTtFQUNFLG1CQUFBO0FBUU47QUFKRTtFQUNFLG1CQUFBO0FBTUo7QUFIRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUEsRUFBQSx5QkFBQTtBQUtKO0FBSEk7RUFDRSxnQkFBQTtFQUNBLGFBQUE7QUFLTjtBQURFO0VBQ0Usc0JBQUE7QUFHSjtBQUFFO0VBQ0UscUJBQUE7QUFFSjtBQUNFO0VBQ0UsMkJBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBQUY7QUFFRTtFQUNFLG1CQUFBO0FBQUo7O0FBSUE7RUFDRTtJQUNFLGdCQUFBO0VBREY7QUFDRjtBQUlBO0VBRUk7SUFDRSxZQUFBO0VBSEo7RUFPQTtJQUNFLGNBQUE7RUFMRjtFQVFBO0lBQ0UsY0FBQTtFQU5GO0VBUUU7SUFFRSxhQUFBO0VBUEo7RUFVRTtJQUNFLGdCQUFBO0VBUko7RUFXRTtJQUNFLFdBQUE7RUFUSjtFQVlFO0lBQ0UscUJBQUE7SUFDQSxzQkFBQTtJQUNBLGtCQUFBO0VBVko7RUFjSTtJQUNFLGdCRG5LTTtJQ29LTixzQkR2SFM7SUN3SFQsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLE9BQUE7SUFDQSxrQkFBQTtJQUNBLE1BQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtFQVpOO0VBZ0JFO0lBQ0UsZ0JBQUE7RUFkSjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qXFxuICogQ29sb3JzXFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4kd2hpdGUtY29sb3I6ICNmZmY7XFxuJGJsYWNrLWNvbG9yOiAjMDAwO1xcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiRib3JkZXItY29sb3I6ICRibGFjay1jb2xvcjtcXG4kdGV4dC1jb2xvcjogJGJsYWNrLWNvbG9yO1xcblxcbi8vIEJvb3RzdHJhcCBvdmVycmlkZXNcXG4kZ3JheS1iYXNlOiAkYmxhY2stY29sb3I7XFxuJGdyYXktZGFya2VyOiAkYmxhY2stY29sb3I7XFxuJGdyYXktZGFyazogJGJsYWNrLWNvbG9yO1xcbiRncmF5OiAkYmxhY2stY29sb3I7XFxuJGJ0bi1kZWZhdWx0LWNvbG9yOiAkYmxhY2stY29sb3I7XFxuJGxpc3QtZ3JvdXAtYm9yZGVyOiAjZGRkO1xcbiRsaXN0LWdyb3VwLWxpbmstY29sb3I6ICRibGFjay1jb2xvcjtcXG4kbGluay1jb2xvcjogIzY2ZTtcXG4kZGFuZ2VyOiAjZmY3NWUzO1xcbiRwcmltYXJ5OiAkbGluay1jb2xvcjtcXG5cXG4vKlxcbiAqIFR5cG9ncmFwaHlcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiRmb250LWZhbWlseS1iYXNlOiBudW5pdG8sIHNhbnMtc2VyaWY7XFxuJGZvbnQtc2l6ZS1iYXNlOiAuODc1cmVtO1xcbiRub3JtYWwtd2VpZ2h0OiA0MDA7XFxuJGJvbGQtd2VpZ2h0OiA5MDA7XFxuXFxuLypcXG4gKiBMYXlvdXRcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiRtYXgtY29udGVudC13aWR0aDogMTAwMHB4O1xcblxcbi8qXFxuICogTWVkaWEgcXVlcmllcyBicmVha3BvaW50c1xcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuJHNjcmVlbi14cy1taW46IDQ4MHB4OyAvKiBFeHRyYSBzbWFsbCBzY3JlZW4gLyBwaG9uZSAqL1xcbiRzY3JlZW4tc20tbWluOiA3NjhweDsgLyogU21hbGwgc2NyZWVuIC8gdGFibGV0ICovXFxuJHNjcmVlbi1tZC1taW46IDk5MnB4OyAvKiBNZWRpdW0gc2NyZWVuIC8gZGVza3RvcCAqL1xcbiRzY3JlZW4tbGctbWluOiAxMjAwcHg7IC8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xcblxcbi8qXFxuICogRXRjLlxcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuJGJvcmRlci1yYWRpdXM6IDRweDtcXG4kYm9yZGVyLXJhZGl1cy1sZzogNnB4O1xcbiRkZWZhdWx0LWJvcmRlci13aWR0aDogM3B4O1xcbiRkZWZhdWx0LWJvcmRlcjogJGRlZmF1bHQtYm9yZGVyLXdpZHRoIHNvbGlkICRib3JkZXItY29sb3I7XFxuJGVuYWJsZS1jYXJldDogZmFsc2U7XFxuJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3I6ICRsaXN0LWdyb3VwLWJvcmRlcjtcXG4kcG9wb3Zlci1mb250LXNpemU6ICRmb250LXNpemUtYmFzZTtcXG4kdGFibGUtYm9yZGVyLWNvbG9yOiAkbGlzdC1ncm91cC1ib3JkZXI7XFxuXFxuQGltcG9ydCBcXFwifmJvb3RzdHJhcC9zY3NzL2Z1bmN0aW9uc1xcXCI7XFxuQGltcG9ydCBcXFwifmJvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlc1xcXCI7XFxuXCIsXCJAaW1wb3J0IFxcXCIuLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzXFxcIjtcXG5cXG4ucm9vdCB7XFxuICBiYWNrZ3JvdW5kOiBwaW5rIHVybChcXFwiLi4vLi4vLi4vc3R5bGVzL2hhbS5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuXFxuICBpbWcge1xcbiAgICBmbGV4OiAwIDAgYXV0bzsgLy8gSUUxMSBoYWNrXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG4uanVtYm90cm9uIHtcXG4gIGJhY2tncm91bmQ6IHVybChcXFwiLi9qdW1ib3Ryb24uanBnXFxcIikgbm8tcmVwZWF0IDUwJTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBib3JkZXItYm90dG9tOiAkZGVmYXVsdC1ib3JkZXI7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiA0OHB4IDAgNmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCAuMjVlbSB3aGl0ZSwgMCAwIC41ZW0gd2hpdGUsIDAgMCAxZW0gd2hpdGUsIDAgMCAyZW0gd2hpdGU7XFxuXFxuICBwIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG4gICAgZm9udC1zaXplOiAyMXB4O1xcbiAgfVxcbn1cXG5cXG4uanVtYm90cm9uSGVhZGluZyB7XFxuICBmb250LXNpemU6IDYzcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLmZvcm1Hcm91cCB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBtYXJnaW4tcmlnaHQ6IC41ZW07XFxuXFxuICAuZmllbGQge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuLmZlYXR1cmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgJjo6YmVmb3JlLFxcbiAgJjo6YWZ0ZXIge1xcbiAgICBib3JkZXItYm90dG9tOiAkZGVmYXVsdC1ib3JkZXI7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IGNhbGMoNTB2dyArIDEuNXB4KTtcXG4gICAgei1pbmRleDogMDtcXG4gIH1cXG5cXG4gICY6OmJlZm9yZSB7XFxuICAgIGJvcmRlci1yaWdodDogJGRlZmF1bHQtYm9yZGVyO1xcbiAgICByaWdodDogY2FsYyg1MCUgLSAxLjVweCk7XFxuICB9XFxuXFxuICAmOjphZnRlciB7XFxuICAgIGxlZnQ6IGNhbGMoNTAlICsgMS41cHgpO1xcbiAgfVxcblxcbiAgJjpudGgtY2hpbGQoZXZlbik6OmFmdGVyLFxcbiAgJjpudGgtY2hpbGQob2RkKTo6YmVmb3JlIHtcXG4gICAgYmFja2dyb3VuZDogJHdoaXRlLWNvbG9yO1xcbiAgfVxcblxcbiAgJjpsYXN0LWNoaWxkIHtcXG4gICAgJjo6YmVmb3JlIHtcXG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICB9XFxuICB9XFxuXFxuICAmID4gOmZpcnN0LWNoaWxkIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gICYgPiAqIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IGNhbGMoJGdyaWQtZ3V0dGVyLXdpZHRoICsgJGRlZmF1bHQtYm9yZGVyLXdpZHRoKSAkZ3JpZC1ndXR0ZXItd2lkdGg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMTsgLyogYWJvdmUgcHNldWRvZWxlbWVudHMgKi9cXG5cXG4gICAgJiA+IDpmaXJzdC1jaGlsZCB7XFxuICAgICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICB9XFxuICB9XFxuXFxuICAmOm50aC1jaGlsZChvZGQpID4gOmZpcnN0LWNoaWxkIHtcXG4gICAgcGFkZGluZy1yaWdodDogY2FsYygkZ3JpZC1ndXR0ZXItd2lkdGggLyAyKTtcXG4gIH1cXG5cXG4gICY6bnRoLWNoaWxkKGV2ZW4pID4gOmZpcnN0LWNoaWxkIHtcXG4gICAgcGFkZGluZy1sZWZ0OiBjYWxjKCRncmlkLWd1dHRlci13aWR0aCAvIDIpO1xcbiAgfVxcblxcbiAgJjpudGgtY2hpbGQob2RkKSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICB9XFxufVxcblxcbi5maW5hbEN0YSB7XFxuICBtYXJnaW4tdG9wOiA0ZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAmOmxhc3QtY2hpbGQge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNGVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKHdpZHRoIDw9IGNhbGMoJHNjcmVlbi1tZC1taW4gLSAxcHgpKSB7XFxuICAuZmVhdHVyZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICB9XFxufVxcblxcbkBtZWRpYSAod2lkdGggPD0gY2FsYygkc2NyZWVuLXhzLW1pbiAtIDFweCkpIHtcXG4gIC5yb290IHtcXG4gICAgaW1nIHtcXG4gICAgICBoZWlnaHQ6IGF1dG87XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5qdW1ib3Ryb25IZWFkaW5nIHtcXG4gICAgZm9udC1zaXplOiAzZW07XFxuICB9XFxuXFxuICAuZmVhdHVyZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcblxcbiAgICAmOjpiZWZvcmUsXFxuICAgICY6OmFmdGVyIHtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuICAgICY6bnRoLWNoaWxkKG9kZCkge1xcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIH1cXG5cXG4gICAgJiA+ICoge1xcbiAgICAgIGZsb2F0OiBub25lO1xcbiAgICB9XFxuXFxuICAgICYgPiA6Zmlyc3QtY2hpbGQge1xcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYygkZ3JpZC1ndXR0ZXItd2lkdGggLyAyKTtcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKCRncmlkLWd1dHRlci13aWR0aCAvIDIpO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAmID4gOmxhc3QtY2hpbGQge1xcbiAgICAgICY6OmJlZm9yZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGUtY29sb3I7XFxuICAgICAgICBib3JkZXI6ICRkZWZhdWx0LWJvcmRlcjtcXG4gICAgICAgIGJvcmRlci13aWR0aDogJGRlZmF1bHQtYm9yZGVyLXdpZHRoIDA7XFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgICB6LWluZGV4OiAtMTtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgaW1nIHtcXG4gICAgICBtYXgtd2lkdGg6IDQ4MHB4O1xcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInJvb3RcIjogYExhbmRpbmctcm9vdGAsXG5cdFwianVtYm90cm9uXCI6IGBMYW5kaW5nLWp1bWJvdHJvbmAsXG5cdFwianVtYm90cm9uSGVhZGluZ1wiOiBgTGFuZGluZy1qdW1ib3Ryb25IZWFkaW5nYCxcblx0XCJmb3JtXCI6IGBMYW5kaW5nLWZvcm1gLFxuXHRcImZvcm1Hcm91cFwiOiBgTGFuZGluZy1mb3JtR3JvdXBgLFxuXHRcImZpZWxkXCI6IGBMYW5kaW5nLWZpZWxkYCxcblx0XCJmZWF0dXJlXCI6IGBMYW5kaW5nLWZlYXR1cmVgLFxuXHRcImZpbmFsQ3RhXCI6IGBMYW5kaW5nLWZpbmFsQ3RhYFxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvcm91dGVzL21haW4vbGFuZGluZy9kZWNpZGUucG5nP2RlODczMTE2XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3JjL3JvdXRlcy9tYWluL2xhbmRpbmcvc2VhcmNoLnBuZz9mYzRlY2ZmY1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9yb3V0ZXMvbWFpbi9sYW5kaW5nL3RhZy5wbmc/NmUwMjkyNjNcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvcm91dGVzL21haW4vbGFuZGluZy92b3RlLnBuZz9lZDFlMGMyOFwiOyIsIlxuICAgIHZhciByZWZzID0gMDtcbiAgICB2YXIgY3NzID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ucnVsZXNbMl0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnJ1bGVzWzRdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0xhbmRpbmcuc2Nzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvaW5zZXJ0Q3NzLmpzXCIpO1xuICAgIHZhciBjb250ZW50ID0gdHlwZW9mIGNzcyA9PT0gJ3N0cmluZycgPyBbW21vZHVsZS5pZCwgY3NzLCAnJ11dIDogY3NzO1xuXG4gICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3NzLmxvY2FscyB8fCB7fTtcbiAgICBleHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIGV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gJycgKyBjc3M7IH07XG4gICAgZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG5cbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnJ1bGVzWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5ydWxlc1s0XSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9MYW5kaW5nLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNzcyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnJ1bGVzWzJdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5ydWxlc1s0XSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9MYW5kaW5nLnNjc3NcIik7XG4gICAgICAgIGNvbnRlbnQgPSB0eXBlb2YgY3NzID09PSAnc3RyaW5nJyA/IFtbbW9kdWxlLmlkLCBjc3MsICcnXV0gOiBjc3M7XG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSBcImlzb21vcnBoaWMtc3R5bGUtbG9hZGVyL3dpdGhTdHlsZXNcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9CdXR0b25cIjtcbmltcG9ydCBDb2wgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db2xcIjtcbmltcG9ydCBGb3JtIGZyb20gXCJyZWFjdC1ib290c3RyYXAvRm9ybVwiO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lclwiO1xuaW1wb3J0IFJvdyBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL1Jvd1wiO1xuaW1wb3J0IHNlYXJjaCBmcm9tIFwiLi9zZWFyY2gucG5nXCI7XG5pbXBvcnQgdGFnIGZyb20gXCIuL3RhZy5wbmdcIjtcbmltcG9ydCB2b3RlIGZyb20gXCIuL3ZvdGUucG5nXCI7XG5pbXBvcnQgZGVjaWRlIGZyb20gXCIuL2RlY2lkZS5wbmdcIjtcbmltcG9ydCBzIGZyb20gXCIuL0xhbmRpbmcuc2Nzc1wiO1xuXG5jb25zdCByZW5kZXJGb3JtID0gKCkgPT4gKFxuICA8Rm9ybSBjbGFzc05hbWU9e3MuZm9ybX0gYWN0aW9uPVwiL2ludml0YXRpb24/c3VjY2Vzcz1zZW50XCIgbWV0aG9kPVwicG9zdFwiPlxuICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT17cy5mb3JtR3JvdXB9IGNvbnRyb2xJZD1cImxhbmRpbmctZW1haWxcIj5cbiAgICAgIDxGb3JtLkxhYmVsIHZpc3VhbGx5SGlkZGVuPkVtYWlsPC9Gb3JtLkxhYmVsPlxuICAgICAgPEZvcm0uQ29udHJvbFxuICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICBjbGFzc05hbWU9e3MuZmllbGR9XG4gICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbFwiXG4gICAgICAgIHJlcXVpcmVkXG4gICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAvPlxuICAgIDwvRm9ybS5Hcm91cD57XCIgXCJ9XG4gICAgPEJ1dHRvbiBzaXplPVwibGdcIiB2YXJpYW50PVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgIEdldCBpbnZpdGVkXG4gICAgPC9CdXR0b24+XG4gIDwvRm9ybT5cbik7XG5cbmNvbnN0IExhbmRpbmcgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtzLnJvb3R9PlxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17cy5qdW1ib3Ryb259PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT17cy5qdW1ib3Ryb25IZWFkaW5nfT5cbiAgICAgICAgICBGaWd1cmUgaXQgb3V0LFxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIHRvZ2V0aGVyLlxuICAgICAgICA8L2gyPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17eyBzcGFuOiA2LCBvZmZzZXQ6IDMgfX0+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgVW5zdXJlIHdoYXQgdG8gZWF0PyBXYW50IHRvIGxlYXZlIHRoZSBvZmZpY2UgZm9yIGEgYml0IGFuZCBncmFiXG4gICAgICAgICAgICAgIHNvbWUgZ3J1YiB3aXRoIHlvdXIgdGVhbT8gVHJ5Jm5ic3A7THVuY2ghXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICB7cmVuZGVyRm9ybSgpfVxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvc2VjdGlvbj5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFJvdyBjbGFzc05hbWU9e3MuZmVhdHVyZX0+XG4gICAgICAgIDxDb2wgeHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPGltZyBzcmM9e3NlYXJjaH0gYWx0PVwiXCIgLz5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2wgeHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPGgzPlNlYXJjaCE8L2gzPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgUHV0IHRvZ2V0aGVyIGEgbGlzdCBvZiBuZWFyYnkgcmVzdGF1cmFudHMuIFlvdSBjYW4gYWRkIGFzIG1hbnkgYXNcbiAgICAgICAgICAgIHlvdSBsaWtlLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICAgIDxSb3cgY2xhc3NOYW1lPXtzLmZlYXR1cmV9PlxuICAgICAgICA8Q29sIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxpbWcgc3JjPXt0YWd9IGFsdD1cIlwiIC8+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgIDxoMz5UYWchPC9oMz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFRhZyB0aGUgcmVzdGF1cmFudHMsIHRoZW4gZmlsdGVyIG9yIGV4Y2x1ZGUgY2VydGFpbiBraW5kcy4gRW1vamlcbiAgICAgICAgICAgIHRhZ3M/IEdvIGZvciBpdCFcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgICA8Um93IGNsYXNzTmFtZT17cy5mZWF0dXJlfT5cbiAgICAgICAgPENvbCB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8aW1nIHNyYz17dm90ZX0gYWx0PVwiXCIgLz5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2wgeHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgPGgzPlZvdGUhPC9oMz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFlvdSBvbmx5IGdldCBvbmUgdm90ZSBwZXIgcmVzdGF1cmFudCBlYWNoIGRheSwgYnV0IHlvdSBjYW4gdm90ZSBmb3JcbiAgICAgICAgICAgIGFzIG1hbnkgYXMgeW91IGxpa2UuIFZvdGluZyBhbHNvIGFmZmVjdHMgd2hhdCBzaG93cyB1cCBhdCB0aGUgdG9wIG9mXG4gICAgICAgICAgICB0aGUgbGlzdCB0b21vcnJvdyFcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgICA8Um93IGNsYXNzTmFtZT17cy5mZWF0dXJlfT5cbiAgICAgICAgPENvbCB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8aW1nIHNyYz17ZGVjaWRlfSBhbHQ9XCJcIiAvPlxuICAgICAgICA8L0NvbD5cbiAgICAgICAgPENvbCB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICA8aDM+RGVjaWRlITwvaDM+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBXaGVuIHlvdSBtYXJrIGEgcmVzdGF1cmFudCBhcyB0aGUgZGVjaXNpb24gZm9yIHRoZSBkYXksIGl04oCZbGwgYmVcbiAgICAgICAgICAgIHNvcnRlZCB0byB0aGUgYm90dG9tIG9mIHRoZSBsaXN0IGZvciB0aGUgbmV4dCBmZXcgd2Vla3MgdG8ga2VlcFxuICAgICAgICAgICAgdGhpbmdzIGZyZXNoLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICA8L0NvbnRhaW5lcj5cbiAgICA8Q29udGFpbmVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3MuZmluYWxDdGF9PlxuICAgICAgICA8aDM+U2lnbiB1cCB0b2RheSE8L2gzPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17eyBzcGFuOiA2LCBvZmZzZXQ6IDMgfX0+XG4gICAgICAgICAgICB7cmVuZGVyRm9ybSgpfVxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3MuZmluYWxDdGF9PlxuICAgICAgICA8aDM+QWxyZWFkeSBhIG1lbWJlcj8gQ29tZSBvbiBpbiE8L2gzPlxuICAgICAgICA8QnV0dG9uIHNpemU9XCJsZ1wiIHZhcmlhbnQ9XCJwcmltYXJ5XCIgaHJlZj1cIi9sb2dpblwiPlxuICAgICAgICAgIExvZyBpbnRvIHlvdXIgdGVhbXNcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHMpKExhbmRpbmcpO1xuIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0Q29udGFpbmVyIGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXRDb250YWluZXJcIjtcbmltcG9ydCB7IEFwcENvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vaW50ZXJmYWNlc1wiO1xuaW1wb3J0IHJlbmRlcklmTG9nZ2VkT3V0IGZyb20gXCIuLi8uLi9oZWxwZXJzL3JlbmRlcklmTG9nZ2VkT3V0XCI7XG5pbXBvcnQgTGFuZGluZyBmcm9tIFwiLi9MYW5kaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IChjb250ZXh0OiBBcHBDb250ZXh0KSA9PiB7XG4gIGNvbnN0IHN0YXRlID0gY29udGV4dC5zdG9yZS5nZXRTdGF0ZSgpO1xuXG4gIHJldHVybiByZW5kZXJJZkxvZ2dlZE91dChzdGF0ZSwgKCkgPT4gKHtcbiAgICBjaHVua3M6IFtcImxhbmRpbmdcIl0sXG4gICAgY29tcG9uZW50OiAoXG4gICAgICA8TGF5b3V0Q29udGFpbmVyIHBhdGg9e2NvbnRleHQucGF0aG5hbWV9PlxuICAgICAgICA8TGFuZGluZyAvPlxuICAgICAgPC9MYXlvdXRDb250YWluZXI+XG4gICAgKSxcbiAgICBmdWxsVGl0bGU6IFwiTHVuY2gg4oCTIFRlYW0gdm90aW5nIGZvciBuZWFyYnkgcmVzdGF1cmFudHNcIixcbiAgfSkpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9yb3V0ZXMvbWFpbi9sYW5kaW5nL2p1bWJvdHJvbi5qcGc/ZTk0YjAxNmVcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzcmMvc3R5bGVzL2hhbS5qcGc/YmUwNGNjMTJcIjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=