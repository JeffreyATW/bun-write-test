(self["webpackChunklunch"] = self["webpackChunklunch"] || []).push([["login"],{

  /***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].rules[2]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].rules[4]!./node_modules/sass-loader/dist/cjs.js!./src/routes/login/Login.scss":
  /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
  
  // Imports
  var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js");
  var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
  var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
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
  .Login-root {
    z-index: 1; /* set page z-index below hamburger menu overlay */
    position: relative;
    background: #fff;
    padding: 2em 0;
  }
  
  .Login-googleButtonContainer {
    margin: 2em 0;
  }
  
  .Login-googleButton {
    height: 46px;
    position: relative;
    padding-left: 60px;
  }
  
  .Login-googleLogo {
    border-radius: 5px;
    left: 0;
    height: 44px;
    position: absolute;
    top: 0;
  }`, "",{"version":3,"sources":["webpack://./src/styles/_variables.scss","webpack://./src/routes/login/Login.scss","webpack://./src/styles/_mixins.scss"],"names":[],"mappings":"AAAA;;+EAAA;AAqBA;;+EAAA;AAQA;;+EAAA;AAKA;;+EAAA;AAGuB,+BAAA;AACA,0BAAA;AACA,4BAAA;AACC,gCAAA;AAExB;;+EAAA;ACxCA;ECoBE,UAAA,EAAA,kDAAA;EACA,kBAAA;EANA,gBFdY;EEeZ,cAAA;ADMF;;AAlBA;EACE,aAAA;AAqBF;;AAhBA;EACE,YAAA;EACA,kBAAA;EACA,kBAAA;AAmBF;;AAhBA;EACE,kBAAA;EACA,OAAA;EACA,YAXc;EAYd,kBAAA;EACA,MAAA;AAmBF","sourcesContent":["/*\n * Colors\n * ========================================================================== */\n$white-color: #fff;\n$black-color: #000;\n$background-color: #333;\n$border-color: $black-color;\n$text-color: $black-color;\n\n// Bootstrap overrides\n$gray-base: $black-color;\n$gray-darker: $black-color;\n$gray-dark: $black-color;\n$gray: $black-color;\n$btn-default-color: $black-color;\n$list-group-border: #ddd;\n$list-group-link-color: $black-color;\n$link-color: #66e;\n$danger: #ff75e3;\n$primary: $link-color;\n\n/*\n * Typography\n * ========================================================================== */\n$font-family-base: nunito, sans-serif;\n$font-size-base: .875rem;\n$normal-weight: 400;\n$bold-weight: 900;\n\n/*\n * Layout\n * ========================================================================== */\n$max-content-width: 1000px;\n\n/*\n * Media queries breakpoints\n * ========================================================================== */\n$screen-xs-min: 480px; /* Extra small screen / phone */\n$screen-sm-min: 768px; /* Small screen / tablet */\n$screen-md-min: 992px; /* Medium screen / desktop */\n$screen-lg-min: 1200px; /* Large screen / wide desktop */\n\n/*\n * Etc.\n * ========================================================================== */\n$border-radius: 4px;\n$border-radius-lg: 6px;\n$default-border-width: 3px;\n$default-border: $default-border-width solid $border-color;\n$enable-caret: false;\n$modal-header-border-color: $list-group-border;\n$popover-font-size: $font-size-base;\n$table-border-color: $list-group-border;\n\n@import \"~bootstrap/scss/functions\";\n@import \"~bootstrap/scss/variables\";\n","@import \"../../styles/mixins\";\n\n.root {\n  @include page-root;\n}\n\n.googleButtonContainer {\n  margin: 2em 0;\n}\n\n$button-height: 44px;\n\n.googleButton {\n  height: calc($button-height + 2px);\n  position: relative;\n  padding-left: calc($button-height + 16px);\n}\n\n.googleLogo {\n  border-radius: calc($border-radius-lg - 1px);\n  left: 0;\n  height: $button-height;\n  position: absolute;\n  top: 0;\n}\n","@import \"./variables\";\n\n@mixin plain-button {\n  background: none;\n  border: 0;\n  padding: 0;\n  text-align: left;\n}\n\n@mixin plain-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n@mixin page-root {\n  @include page-root-layer;\n  background: $white-color;\n  padding: 2em 0;\n}\n\n@mixin page-root-layer {\n  z-index: 1; /* set page z-index below hamburger menu overlay */\n  position: relative;\n}\n\n@mixin autosuggest-container {\n  display: inline-block;\n  position: relative;\n\n  input {\n    display: inline;\n    vertical-align: middle;\n  }\n}\n\n@mixin autosuggest-suggestions-container {\n  position: absolute;\n  width: 100%;\n  z-index: 1;\n\n  ul {\n    @include plain-list;\n    background: $white-color;\n    border: 1px solid $black-color;\n  }\n}\n\n@mixin autosuggest-suggestion {\n  cursor: pointer;\n  padding: 0 .25em;\n}\n\n@mixin autosuggest-suggestion-focused {\n  background: pink;\n}\n\n@mixin filter-form-root {\n  display: inline-block;\n  margin-bottom: 10px;\n  margin-right: 1em;\n\n  &:last-child {\n    margin-right: 0;\n  }\n\n  button {\n    border: $default-border;\n    border-radius: $border-radius;\n  }\n}\n\n@mixin filter-form-form {\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n@mixin info-window {\n  bottom: 100%;\n  position: absolute;\n  text-align: left;\n  transform: translateX(-50%);\n\n  &::before,\n  &::after {\n    border-style: solid;\n    content: \"\";\n    left: 50%;\n    margin-top: -13px;\n    position: absolute;\n    top: 100%;\n    height: 0;\n    width: 0;\n  }\n\n  &::before {\n    border-width: 44px 8px 0;\n    border-color: $black-color transparent transparent;\n    margin-left: -8px;\n  }\n\n  &::after {\n    border-width: 32px 5px 0;\n    border-color: $white-color transparent transparent;\n    margin-left: -5px;\n  }\n}\n\n@mixin text-on-texture {\n  color: $white-color;\n  text-shadow: 0 0 5px $black-color, 0 0 10px $black-color,\n    0 0 20px $black-color;\n}\n\n@mixin shadow-focus {\n  filter: drop-shadow(0 0 3px rgb(0 0 0 / 50%));\n}\n\n@mixin image-replace {\n  text-indent: 102%;\n  white-space: nowrap;\n  overflow: hidden;\n  padding: 0;\n}\n"],"sourceRoot":""}]);
  // Exports
  ___CSS_LOADER_EXPORT___.locals = {
    "root": `Login-root`,
    "googleButtonContainer": `Login-googleButtonContainer`,
    "googleButton": `Login-googleButton`,
    "googleLogo": `Login-googleLogo`
  };
  module.exports = ___CSS_LOADER_EXPORT___;
  
  
  /***/ }),
  
  /***/ "./src/routes/login/google.svg":
  /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
  
  module.exports = __webpack_require__.p + "src/routes/login/google.svg?278a3bba";
  
  /***/ }),
  
  /***/ "./src/routes/login/Login.scss":
  /***/ ((module, exports, __webpack_require__) => {
  
  
      var refs = 0;
      var css = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].rules[2]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].rules[4]!./node_modules/sass-loader/dist/cjs.js!./src/routes/login/Login.scss");
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
  
  /***/ "./src/routes/login/Login.tsx":
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
  /* harmony import */ var _google_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/routes/login/google.svg");
  /* harmony import */ var _google_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_google_svg__WEBPACK_IMPORTED_MODULE_7__);
  /* harmony import */ var _Login_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/routes/login/Login.scss");
  /* harmony import */ var _Login_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Login_scss__WEBPACK_IMPORTED_MODULE_8__);
  
  
  
  
  
  
  
  
  
  class Login extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
      constructor(props) {
          super(props);
          this.handleChange = (field) => (event) => this.setState({
              [field]: event.currentTarget.value,
          });
          this.state = {
              email: "",
              password: "",
          };
      }
      render() {
          const { host, next, team } = this.props;
          const { email, password } = this.state;
          const googleParams = {};
          const nextParams = {};
          if (team) {
              googleParams.team = team;
          }
          if (next) {
              googleParams.next = next;
              nextParams.next = next;
          }
          const googleQuery = new URLSearchParams(googleParams).toString();
          const nextQuery = new URLSearchParams(nextParams).toString();
          return (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: (_Login_scss__WEBPACK_IMPORTED_MODULE_8___default().root) },
              react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_5__["default"], null,
                  react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h2", null, "Log in"),
                  react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", { className: (_Login_scss__WEBPACK_IMPORTED_MODULE_8___default().googleButtonContainer) },
                      react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__["default"], { size: "lg", variant: "primary", className: (_Login_scss__WEBPACK_IMPORTED_MODULE_8___default().googleButton), href: `//${host}/login/google${googleQuery ? `?${googleQuery}` : ""}` },
                          react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("img", { className: (_Login_scss__WEBPACK_IMPORTED_MODULE_8___default().googleLogo), src: (_google_svg__WEBPACK_IMPORTED_MODULE_7___default()), alt: "" }),
                          "Sign in with Google")),
                  react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", null, "Email/password"),
                  react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("form", { action: `/login${nextQuery ? `?${nextQuery}` : ""}`, method: "post" },
                      react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_6__["default"], null,
                          react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_3__["default"], { sm: 6 },
                              react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__["default"].Group, { className: "mb-3", controlId: "login-email" },
                                  react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__["default"].Label, null, "Email"),
                                  react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__["default"].Control, { onChange: this.handleChange("email"), name: "email", type: "email", required: true, value: email })),
                              react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__["default"].Group, { className: "mb-3", controlId: "login-password" },
                                  react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__["default"].Label, null, "Password"),
                                  react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_4__["default"].Control, { onChange: this.handleChange("password"), name: "password", type: "password", required: true, value: password })))),
                      react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__["default"], { type: "submit" }, "Log in"),
                      react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_2__["default"], { href: `//${host}/password/new${email ? `?email=${email}` : ""}`, variant: "link" }, "Forgot password?")))));
      }
  }
  Login.defaultProps = {
      next: undefined,
      team: undefined,
  };
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isomorphic_style_loader_withStyles__WEBPACK_IMPORTED_MODULE_1___default()((_Login_scss__WEBPACK_IMPORTED_MODULE_8___default()))(Login));
  
  
  /***/ }),
  
  /***/ "./src/routes/login/LoginContainer.ts":
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
  /* harmony export */ });
  /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react-redux/es/index.js");
  /* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/routes/login/Login.tsx");
  
  
  const mapStateToProps = (state, ownProps) => ({
      host: state.host,
      team: ownProps.team,
      next: ownProps.next,
  });
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps)(_Login__WEBPACK_IMPORTED_MODULE_1__["default"]));
  
  
  /***/ }),
  
  /***/ "./src/routes/login/index.tsx":
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
  /* harmony export */ });
  /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.mjs");
  /* harmony import */ var _components_Layout_LayoutContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/Layout/LayoutContainer.ts");
  /* harmony import */ var _helpers_renderIfLoggedOut__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/routes/helpers/renderIfLoggedOut.ts");
  /* harmony import */ var _LoginContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/routes/login/LoginContainer.ts");
  /**
   * React Starter Kit (https://www.reactstarterkit.com/)
   *
   * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  
  
  
  function action(context) {
      var _a;
      const state = context.store.getState();
      const subdomain = context.subdomain;
      const next = (_a = context.query) === null || _a === void 0 ? void 0 : _a.get("next");
      return (0,_helpers_renderIfLoggedOut__WEBPACK_IMPORTED_MODULE_2__["default"])(state, () => ({
          chunks: ["login"],
          component: (react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_components_Layout_LayoutContainer__WEBPACK_IMPORTED_MODULE_1__["default"], { path: context.pathname },
              react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(_LoginContainer__WEBPACK_IMPORTED_MODULE_3__["default"], { team: subdomain, next: next }))),
          title: "Log in",
          ogTitle: "Lunch",
      }));
  }
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (action);
  
  
  /***/ })
  
  }]);
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUV2QyxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO0lBQ3BDLE1BQU0sSUFBSSxHQUFHLGFBQU8sQ0FBQyxLQUFLLDBDQUFFLEdBQUcsQ0FBQyxNQUFNLENBQXVCLENBQUM7SUFFOUQsT0FBTyxzRUFBaUIsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNyQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUM7UUFDakIsU0FBUyxFQUFFLENBQ1QsNERBQUMsMEVBQWUsSUFBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLFFBQVE7WUFDckMsNERBQUMsdURBQWMsSUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLEdBQUksQ0FDL0IsQ0FDbkI7UUFDRCxLQUFLLEVBQUUsUUFBUTtRQUNmLE9BQU8sRUFBRSxPQUFPO0tBQ2pCLENBQUMsQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUVELGlFQUFlLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL2plZmZyZXlhdHcvQ29kZS9MYWJaZXJvL0xhYlplcm8vbHVuY2gvc3JjL3JvdXRlcy9sb2dpbi9Mb2dpbi5zY3NzIiwiL1VzZXJzL2plZmZyZXlhdHcvQ29kZS9MYWJaZXJvL0xhYlplcm8vbHVuY2gvc3JjL3JvdXRlcy9sb2dpbi9nb29nbGUuc3ZnIiwid2VicGFjazovL2x1bmNoLy4vc3JjL3JvdXRlcy9sb2dpbi9Mb2dpbi5zY3NzP2Q3YTUiLCIvVXNlcnMvamVmZnJleWF0dy9Db2RlL0xhYlplcm8vTGFiWmVyby9sdW5jaC9zcmMvcm91dGVzL2xvZ2luL0xvZ2luLnRzeCIsIi9Vc2Vycy9qZWZmcmV5YXR3L0NvZGUvTGFiWmVyby9MYWJaZXJvL2x1bmNoL3NyYy9yb3V0ZXMvbG9naW4vTG9naW5Db250YWluZXIudHMiLCIvVXNlcnMvamVmZnJleWF0dy9Db2RlL0xhYlplcm8vTGFiWmVyby9sdW5jaC9zcmMvcm91dGVzL2xvZ2luL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLypcbiAqIENvbG9yc1xuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qXG4gKiBUeXBvZ3JhcGh5XG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLypcbiAqIExheW91dFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qXG4gKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLyogRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmUgKi9cbi8qIFNtYWxsIHNjcmVlbiAvIHRhYmxldCAqL1xuLyogTWVkaXVtIHNjcmVlbiAvIGRlc2t0b3AgKi9cbi8qIExhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcCAqL1xuLypcbiAqIEV0Yy5cbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4uTG9naW4tcm9vdCB7XG4gIHotaW5kZXg6IDE7IC8qIHNldCBwYWdlIHotaW5kZXggYmVsb3cgaGFtYnVyZ2VyIG1lbnUgb3ZlcmxheSAqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDJlbSAwO1xufVxuXG4uTG9naW4tZ29vZ2xlQnV0dG9uQ29udGFpbmVyIHtcbiAgbWFyZ2luOiAyZW0gMDtcbn1cblxuLkxvZ2luLWdvb2dsZUJ1dHRvbiB7XG4gIGhlaWdodDogNDZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG59XG5cbi5Mb2dpbi1nb29nbGVMb2dvIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDQ0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9yb3V0ZXMvbG9naW4vTG9naW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fbWl4aW5zLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OytFQUFBO0FBcUJBOzsrRUFBQTtBQVFBOzsrRUFBQTtBQUtBOzsrRUFBQTtBQUd1QiwrQkFBQTtBQUNBLDBCQUFBO0FBQ0EsNEJBQUE7QUFDQyxnQ0FBQTtBQUV4Qjs7K0VBQUE7QUN4Q0E7RUNvQkUsVUFBQSxFQUFBLGtEQUFBO0VBQ0Esa0JBQUE7RUFOQSxnQkZkWTtFRWVaLGNBQUE7QURNRjs7QUFsQkE7RUFDRSxhQUFBO0FBcUJGOztBQWhCQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBbUJGOztBQWhCQTtFQUNFLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFlBWGM7RUFZZCxrQkFBQTtFQUNBLE1BQUE7QUFtQkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLypcXG4gKiBDb2xvcnNcXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbiR3aGl0ZS1jb2xvcjogI2ZmZjtcXG4kYmxhY2stY29sb3I6ICMwMDA7XFxuJGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuJGJvcmRlci1jb2xvcjogJGJsYWNrLWNvbG9yO1xcbiR0ZXh0LWNvbG9yOiAkYmxhY2stY29sb3I7XFxuXFxuLy8gQm9vdHN0cmFwIG92ZXJyaWRlc1xcbiRncmF5LWJhc2U6ICRibGFjay1jb2xvcjtcXG4kZ3JheS1kYXJrZXI6ICRibGFjay1jb2xvcjtcXG4kZ3JheS1kYXJrOiAkYmxhY2stY29sb3I7XFxuJGdyYXk6ICRibGFjay1jb2xvcjtcXG4kYnRuLWRlZmF1bHQtY29sb3I6ICRibGFjay1jb2xvcjtcXG4kbGlzdC1ncm91cC1ib3JkZXI6ICNkZGQ7XFxuJGxpc3QtZ3JvdXAtbGluay1jb2xvcjogJGJsYWNrLWNvbG9yO1xcbiRsaW5rLWNvbG9yOiAjNjZlO1xcbiRkYW5nZXI6ICNmZjc1ZTM7XFxuJHByaW1hcnk6ICRsaW5rLWNvbG9yO1xcblxcbi8qXFxuICogVHlwb2dyYXBoeVxcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuJGZvbnQtZmFtaWx5LWJhc2U6IG51bml0bywgc2Fucy1zZXJpZjtcXG4kZm9udC1zaXplLWJhc2U6IC44NzVyZW07XFxuJG5vcm1hbC13ZWlnaHQ6IDQwMDtcXG4kYm9sZC13ZWlnaHQ6IDkwMDtcXG5cXG4vKlxcbiAqIExheW91dFxcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuJG1heC1jb250ZW50LXdpZHRoOiAxMDAwcHg7XFxuXFxuLypcXG4gKiBNZWRpYSBxdWVyaWVzIGJyZWFrcG9pbnRzXFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4kc2NyZWVuLXhzLW1pbjogNDgwcHg7IC8qIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lICovXFxuJHNjcmVlbi1zbS1taW46IDc2OHB4OyAvKiBTbWFsbCBzY3JlZW4gLyB0YWJsZXQgKi9cXG4kc2NyZWVuLW1kLW1pbjogOTkycHg7IC8qIE1lZGl1bSBzY3JlZW4gLyBkZXNrdG9wICovXFxuJHNjcmVlbi1sZy1taW46IDEyMDBweDsgLyogTGFyZ2Ugc2NyZWVuIC8gd2lkZSBkZXNrdG9wICovXFxuXFxuLypcXG4gKiBFdGMuXFxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4kYm9yZGVyLXJhZGl1czogNHB4O1xcbiRib3JkZXItcmFkaXVzLWxnOiA2cHg7XFxuJGRlZmF1bHQtYm9yZGVyLXdpZHRoOiAzcHg7XFxuJGRlZmF1bHQtYm9yZGVyOiAkZGVmYXVsdC1ib3JkZXItd2lkdGggc29saWQgJGJvcmRlci1jb2xvcjtcXG4kZW5hYmxlLWNhcmV0OiBmYWxzZTtcXG4kbW9kYWwtaGVhZGVyLWJvcmRlci1jb2xvcjogJGxpc3QtZ3JvdXAtYm9yZGVyO1xcbiRwb3BvdmVyLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xcbiR0YWJsZS1ib3JkZXItY29sb3I6ICRsaXN0LWdyb3VwLWJvcmRlcjtcXG5cXG5AaW1wb3J0IFxcXCJ+Ym9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zXFxcIjtcXG5AaW1wb3J0IFxcXCJ+Ym9vdHN0cmFwL3Njc3MvdmFyaWFibGVzXFxcIjtcXG5cIixcIkBpbXBvcnQgXFxcIi4uLy4uL3N0eWxlcy9taXhpbnNcXFwiO1xcblxcbi5yb290IHtcXG4gIEBpbmNsdWRlIHBhZ2Utcm9vdDtcXG59XFxuXFxuLmdvb2dsZUJ1dHRvbkNvbnRhaW5lciB7XFxuICBtYXJnaW46IDJlbSAwO1xcbn1cXG5cXG4kYnV0dG9uLWhlaWdodDogNDRweDtcXG5cXG4uZ29vZ2xlQnV0dG9uIHtcXG4gIGhlaWdodDogY2FsYygkYnV0dG9uLWhlaWdodCArIDJweCk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nLWxlZnQ6IGNhbGMoJGJ1dHRvbi1oZWlnaHQgKyAxNnB4KTtcXG59XFxuXFxuLmdvb2dsZUxvZ28ge1xcbiAgYm9yZGVyLXJhZGl1czogY2FsYygkYm9yZGVyLXJhZGl1cy1sZyAtIDFweCk7XFxuICBsZWZ0OiAwO1xcbiAgaGVpZ2h0OiAkYnV0dG9uLWhlaWdodDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG59XFxuXCIsXCJAaW1wb3J0IFxcXCIuL3ZhcmlhYmxlc1xcXCI7XFxuXFxuQG1peGluIHBsYWluLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbkBtaXhpbiBwbGFpbi1saXN0IHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5AbWl4aW4gcGFnZS1yb290IHtcXG4gIEBpbmNsdWRlIHBhZ2Utcm9vdC1sYXllcjtcXG4gIGJhY2tncm91bmQ6ICR3aGl0ZS1jb2xvcjtcXG4gIHBhZGRpbmc6IDJlbSAwO1xcbn1cXG5cXG5AbWl4aW4gcGFnZS1yb290LWxheWVyIHtcXG4gIHotaW5kZXg6IDE7IC8qIHNldCBwYWdlIHotaW5kZXggYmVsb3cgaGFtYnVyZ2VyIG1lbnUgb3ZlcmxheSAqL1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5AbWl4aW4gYXV0b3N1Z2dlc3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIGlucHV0IHtcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gYXV0b3N1Z2dlc3Qtc3VnZ2VzdGlvbnMtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgei1pbmRleDogMTtcXG5cXG4gIHVsIHtcXG4gICAgQGluY2x1ZGUgcGxhaW4tbGlzdDtcXG4gICAgYmFja2dyb3VuZDogJHdoaXRlLWNvbG9yO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkYmxhY2stY29sb3I7XFxuICB9XFxufVxcblxcbkBtaXhpbiBhdXRvc3VnZ2VzdC1zdWdnZXN0aW9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDAgLjI1ZW07XFxufVxcblxcbkBtaXhpbiBhdXRvc3VnZ2VzdC1zdWdnZXN0aW9uLWZvY3VzZWQge1xcbiAgYmFja2dyb3VuZDogcGluaztcXG59XFxuXFxuQG1peGluIGZpbHRlci1mb3JtLXJvb3Qge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIG1hcmdpbi1yaWdodDogMWVtO1xcblxcbiAgJjpsYXN0LWNoaWxkIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgfVxcblxcbiAgYnV0dG9uIHtcXG4gICAgYm9yZGVyOiAkZGVmYXVsdC1ib3JkZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gZmlsdGVyLWZvcm0tZm9ybSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuQG1peGluIGluZm8td2luZG93IHtcXG4gIGJvdHRvbTogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuXFxuICAmOjpiZWZvcmUsXFxuICAmOjphZnRlciB7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIG1hcmdpbi10b3A6IC0xM3B4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTAwJTtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICB3aWR0aDogMDtcXG4gIH1cXG5cXG4gICY6OmJlZm9yZSB7XFxuICAgIGJvcmRlci13aWR0aDogNDRweCA4cHggMDtcXG4gICAgYm9yZGVyLWNvbG9yOiAkYmxhY2stY29sb3IgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xcbiAgfVxcblxcbiAgJjo6YWZ0ZXIge1xcbiAgICBib3JkZXItd2lkdGg6IDMycHggNXB4IDA7XFxuICAgIGJvcmRlci1jb2xvcjogJHdoaXRlLWNvbG9yIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcXG4gIH1cXG59XFxuXFxuQG1peGluIHRleHQtb24tdGV4dHVyZSB7XFxuICBjb2xvcjogJHdoaXRlLWNvbG9yO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggJGJsYWNrLWNvbG9yLCAwIDAgMTBweCAkYmxhY2stY29sb3IsXFxuICAgIDAgMCAyMHB4ICRibGFjay1jb2xvcjtcXG59XFxuXFxuQG1peGluIHNoYWRvdy1mb2N1cyB7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAzcHggcmdiKDAgMCAwIC8gNTAlKSk7XFxufVxcblxcbkBtaXhpbiBpbWFnZS1yZXBsYWNlIHtcXG4gIHRleHQtaW5kZW50OiAxMDIlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJyb290XCI6IGBMb2dpbi1yb290YCxcblx0XCJnb29nbGVCdXR0b25Db250YWluZXJcIjogYExvZ2luLWdvb2dsZUJ1dHRvbkNvbnRhaW5lcmAsXG5cdFwiZ29vZ2xlQnV0dG9uXCI6IGBMb2dpbi1nb29nbGVCdXR0b25gLFxuXHRcImdvb2dsZUxvZ29cIjogYExvZ2luLWdvb2dsZUxvZ29gXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInNyYy9yb3V0ZXMvbG9naW4vZ29vZ2xlLnN2Zz8yNzhhM2JiYVwiOyIsIlxuICAgIHZhciByZWZzID0gMDtcbiAgICB2YXIgY3NzID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ucnVsZXNbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnJ1bGVzWzRdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0xvZ2luLnNjc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2luc2VydENzcy5qc1wiKTtcbiAgICB2YXIgY29udGVudCA9IHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnID8gW1ttb2R1bGUuaWQsIGNzcywgJyddXSA6IGNzcztcblxuICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNzcy5sb2NhbHMgfHwge307XG4gICAgZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBleHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuICcnICsgY3NzOyB9O1xuICAgIGV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5ydWxlc1syXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ucnVsZXNbNF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTG9naW4uc2Nzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY3NzID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ucnVsZXNbMl0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnJ1bGVzWzRdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0xvZ2luLnNjc3NcIik7XG4gICAgICAgIGNvbnRlbnQgPSB0eXBlb2YgY3NzID09PSAnc3RyaW5nJyA/IFtbbW9kdWxlLmlkLCBjc3MsICcnXV0gOiBjc3M7XG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgIiwiaW1wb3J0IFJlYWN0LCB7IENoYW5nZUV2ZW50LCBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gXCJpc29tb3JwaGljLXN0eWxlLWxvYWRlci93aXRoU3R5bGVzXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQnV0dG9uXCI7XG5pbXBvcnQgQ29sIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ29sXCI7XG5pbXBvcnQgRm9ybSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwL0Zvcm1cIjtcbmltcG9ydCBDb250YWluZXIgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Db250YWluZXJcIjtcbmltcG9ydCBSb3cgZnJvbSBcInJlYWN0LWJvb3RzdHJhcC9Sb3dcIjtcbmltcG9ydCBnb29nbGUgZnJvbSBcIi4vZ29vZ2xlLnN2Z1wiO1xuaW1wb3J0IHMgZnJvbSBcIi4vTG9naW4uc2Nzc1wiO1xuXG5pbnRlcmZhY2UgTG9naW5Qcm9wcyB7XG4gIGhvc3Q6IHN0cmluZztcbiAgbmV4dD86IHN0cmluZztcbiAgdGVhbT86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIExvZ2luU3RhdGUge1xuICBlbWFpbD86IHN0cmluZztcbiAgcGFzc3dvcmQ/OiBzdHJpbmc7XG59XG5cbmNsYXNzIExvZ2luIGV4dGVuZHMgQ29tcG9uZW50PExvZ2luUHJvcHMsIExvZ2luU3RhdGU+IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBuZXh0OiB1bmRlZmluZWQsXG4gICAgdGVhbTogdW5kZWZpbmVkLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBMb2dpblByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9XG4gICAgKGZpZWxkOiBrZXlvZiBMb2dpblN0YXRlKSA9PlxuICAgIChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQ+KSA9PlxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIFtmaWVsZF06IGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUsXG4gICAgICB9KTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBob3N0LCBuZXh0LCB0ZWFtIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgY29uc3QgZ29vZ2xlUGFyYW1zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XG4gICAgY29uc3QgbmV4dFBhcmFtczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuICAgIGlmICh0ZWFtKSB7XG4gICAgICBnb29nbGVQYXJhbXMudGVhbSA9IHRlYW07XG4gICAgfVxuICAgIGlmIChuZXh0KSB7XG4gICAgICBnb29nbGVQYXJhbXMubmV4dCA9IG5leHQ7XG4gICAgICBuZXh0UGFyYW1zLm5leHQgPSBuZXh0O1xuICAgIH1cblxuICAgIGNvbnN0IGdvb2dsZVF1ZXJ5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhnb29nbGVQYXJhbXMpLnRvU3RyaW5nKCk7XG4gICAgY29uc3QgbmV4dFF1ZXJ5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhuZXh0UGFyYW1zKS50b1N0cmluZygpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnJvb3R9PlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxoMj5Mb2cgaW48L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmdvb2dsZUJ1dHRvbkNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzLmdvb2dsZUJ1dHRvbn1cbiAgICAgICAgICAgICAgaHJlZj17YC8vJHtob3N0fS9sb2dpbi9nb29nbGUke1xuICAgICAgICAgICAgICAgIGdvb2dsZVF1ZXJ5ID8gYD8ke2dvb2dsZVF1ZXJ5fWAgOiBcIlwiXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17cy5nb29nbGVMb2dvfSBzcmM9e2dvb2dsZX0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgU2lnbiBpbiB3aXRoIEdvb2dsZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGgzPkVtYWlsL3Bhc3N3b3JkPC9oMz5cbiAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgYWN0aW9uPXtgL2xvZ2luJHtuZXh0UXVlcnkgPyBgPyR7bmV4dFF1ZXJ5fWAgOiBcIlwifWB9XG4gICAgICAgICAgICBtZXRob2Q9XCJwb3N0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICA8Q29sIHNtPXs2fT5cbiAgICAgICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwibG9naW4tZW1haWxcIj5cbiAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkVtYWlsPC9Gb3JtLkxhYmVsPlxuICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoXCJlbWFpbFwiKX1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImxvZ2luLXBhc3N3b3JkXCI+XG4gICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5QYXNzd29yZDwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKFwicGFzc3dvcmRcIil9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TG9nIGluPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGhyZWY9e2AvLyR7aG9zdH0vcGFzc3dvcmQvbmV3JHtlbWFpbCA/IGA/ZW1haWw9JHtlbWFpbH1gIDogXCJcIn1gfVxuICAgICAgICAgICAgICB2YXJpYW50PVwibGlua1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEZvcmdvdCBwYXNzd29yZD9cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMocykoTG9naW4pO1xuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IExvZ2luIGZyb20gXCIuL0xvZ2luXCI7XG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzXCI7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChcbiAgc3RhdGU6IFN0YXRlLFxuICBvd25Qcm9wczogeyB0ZWFtPzogc3RyaW5nOyBuZXh0Pzogc3RyaW5nIH1cbikgPT4gKHtcbiAgaG9zdDogc3RhdGUuaG9zdCxcbiAgdGVhbTogb3duUHJvcHMudGVhbSxcbiAgbmV4dDogb3duUHJvcHMubmV4dCxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTG9naW4pO1xuIiwiLyoqXG4gKiBSZWFjdCBTdGFydGVyIEtpdCAoaHR0cHM6Ly93d3cucmVhY3RzdGFydGVya2l0LmNvbS8pXG4gKlxuICogQ29weXJpZ2h0IMKpIDIwMTQtcHJlc2VudCBLcmlhc29mdCwgTExDLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS50eHQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0Q29udGFpbmVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dC9MYXlvdXRDb250YWluZXJcIjtcbmltcG9ydCByZW5kZXJJZkxvZ2dlZE91dCBmcm9tIFwiLi4vaGVscGVycy9yZW5kZXJJZkxvZ2dlZE91dFwiO1xuaW1wb3J0IHsgQXBwQ29udGV4dCB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzXCI7XG5pbXBvcnQgTG9naW5Db250YWluZXIgZnJvbSBcIi4vTG9naW5Db250YWluZXJcIjtcblxuZnVuY3Rpb24gYWN0aW9uKGNvbnRleHQ6IEFwcENvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGUgPSBjb250ZXh0LnN0b3JlLmdldFN0YXRlKCk7XG5cbiAgY29uc3Qgc3ViZG9tYWluID0gY29udGV4dC5zdWJkb21haW47XG4gIGNvbnN0IG5leHQgPSBjb250ZXh0LnF1ZXJ5Py5nZXQoXCJuZXh0XCIpIGFzIHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICByZXR1cm4gcmVuZGVySWZMb2dnZWRPdXQoc3RhdGUsICgpID0+ICh7XG4gICAgY2h1bmtzOiBbXCJsb2dpblwiXSxcbiAgICBjb21wb25lbnQ6IChcbiAgICAgIDxMYXlvdXRDb250YWluZXIgcGF0aD17Y29udGV4dC5wYXRobmFtZX0+XG4gICAgICAgIDxMb2dpbkNvbnRhaW5lciB0ZWFtPXtzdWJkb21haW59IG5leHQ9e25leHR9IC8+XG4gICAgICA8L0xheW91dENvbnRhaW5lcj5cbiAgICApLFxuICAgIHRpdGxlOiBcIkxvZyBpblwiLFxuICAgIG9nVGl0bGU6IFwiTHVuY2hcIixcbiAgfSkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhY3Rpb247XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=