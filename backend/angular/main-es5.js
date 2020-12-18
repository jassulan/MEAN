(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+b8U":
    /*!*********************************************!*\
      !*** ./src/app/myscript/scripts.service.ts ***!
      \*********************************************/

    /*! exports provided: ScriptsService */

    /***/
    function b8U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScriptsService", function () {
        return ScriptsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/scripts';

      var ScriptsService = /*#__PURE__*/function () {
        function ScriptsService(http, router) {
          _classCallCheck(this, ScriptsService);

          this.http = http;
          this.router = router;
          this.scriptUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }

        _createClass(ScriptsService, [{
          key: "getScript",
          value: function getScript(step1, step2, step3, step4, step5) {
            var _this = this;

            var queryParams = "?step1=".concat(step1, "&step2=").concat(step2, "&step3=").concat(step3, "&step4=").concat(step4, "&step5=").concat(step5);
            this.http.get(BACKEND_URL + '/' + queryParams).subscribe(function (scriptImagePath) {
              console.log(scriptImagePath);
              _this.scriptImagePath = scriptImagePath;

              _this.scriptUpdated.next({
                scriptImagePath: _this.scriptImagePath
              });
            });
          }
        }, {
          key: "getScriptUpdateListener",
          value: function getScriptUpdateListener() {
            return this.scriptUpdated.asObservable();
          }
        }, {
          key: "addScript",
          value: function addScript() {
            this.http.post(BACKEND_URL, null).subscribe(function (responseData) {
              console.log("successfully added");
            });
          }
        }]);

        return ScriptsService;
      }();

      ScriptsService.ɵfac = function ScriptsService_Factory(t) {
        return new (t || ScriptsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      ScriptsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ScriptsService,
        factory: ScriptsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScriptsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/zhassulankaishentayev/Downloads/Desktop/CSS633/MEAN/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "0PS2":
    /*!**************************************************!*\
      !*** ./src/app/main-page/main-page.component.ts ***!
      \**************************************************/

    /*! exports provided: MainPageComponent */

    /***/
    function PS2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainPageComponent", function () {
        return MainPageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../auth/auth.service */
      "qXBG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      function MainPageComponent_mat_spinner_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
        }
      }

      var MainPageComponent = /*#__PURE__*/function () {
        function MainPageComponent(authservice) {
          _classCallCheck(this, MainPageComponent);

          this.authservice = authservice;
          this.testValue = "";
          this.isLoading = false;
          this.userIsAuthenticated = false;
        }

        _createClass(MainPageComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.userIsAuthenticated = this.authservice.getIsAuth();
            this.authListenerSubs = this.authservice.getAuthStatusListener().subscribe(function (isAuthenticated) {
              _this2.userIsAuthenticated = isAuthenticated;
            });
          }
        }, {
          key: "onClickTest",
          value: function onClickTest() {
            this.testValue = "New Text";
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.authListenerSubs.unsubscribe();
          }
        }]);

        return MainPageComponent;
      }();

      MainPageComponent.ɵfac = function MainPageComponent_Factory(t) {
        return new (t || MainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
      };

      MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MainPageComponent,
        selectors: [["app-main-page"]],
        decls: 4,
        vars: 1,
        consts: [[4, "ngIf"]],
        template: function MainPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MainPageComponent_mat_spinner_0_Template, 1, 0, "mat-spinner", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " MEAN (MongoDB, Express.js, AngularJS (or Angular), and Node.js) is a free and open-source JavaScript software stack for building dynamic web sites and web applications. Because all components of the MEAN stack support programs that are written in JavaScript, MEAN applications can be written in one language for both server-side and client-side execution environments. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatSpinner"]],
        styles: ["[_nghost-%COMP%] {\r\n  display: block;\r\n}\r\n\r\nmat-paginator[_ngcontent-%COMP%] {\r\n  margin-top: 1rem;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  width: 100vw;\r\n}\r\n\r\n#img1[_ngcontent-%COMP%] {\r\n  margin-top: 2.5vw;\r\n  width: 100vw;\r\n  height: 35vw;\r\n}\r\n\r\n#welcome[_ngcontent-%COMP%] {\r\n  color: #1AC3C3;\r\n  margin-top: 4vw;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  line-height: 3vw;\r\n  margin-bottom: 4vw;\r\n  margin-left: 4vw;\r\n  margin-right: 4vw;\r\n  color: #707070;\r\n  font-size: 2vw;\r\n}\r\n\r\n#getStarted[_ngcontent-%COMP%] {\r\n  margin-top: 200px;\r\n  margin-left: 180px;\r\n  margin-right: 180px;\r\n  text-align: center;\r\n  background-color: #42A0D1;\r\n  color: white;\r\n  padding: 25px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  margin-top: 30px;\r\n  margin-left: 42vw;\r\n  height: 80px;\r\n  width: 17vw;\r\n  color: white;\r\n  font-size: 30px;\r\n  background-color: #1AC3C3;\r\n\r\n  border: none;\r\n}\r\n\r\n#div_container[_ngcontent-%COMP%] {\r\n  width: 100vw;\r\n  display: flex;\r\n  margin-top: 120px;\r\n  padding-bottom: 35px;\r\n\r\n}\r\n\r\n#img2[_ngcontent-%COMP%] {\r\n  height: 125px;\r\n  width: 8.6vw;\r\n  margin-left: 3.5vw;\r\n\r\n}\r\n\r\n#div_container2[_ngcontent-%COMP%] {\r\n  width: 30vw;\r\n  margin-left: 24vw;\r\n}\r\n\r\n#div_container2_1[_ngcontent-%COMP%]{\r\n  margin-left: 2.78vw;\r\n  margin-top: 70px;\r\n  font-size: 20px;\r\n  color: #374F86;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGNBQWM7QUFDaEI7O0FBSUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZix5QkFBeUI7O0VBRXpCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG9CQUFvQjs7QUFFdEI7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxubWF0LXBhZ2luYXRvciB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG59XHJcblxyXG4jaW1nMSB7XHJcbiAgbWFyZ2luLXRvcDogMi41dnc7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMzV2dztcclxufVxyXG5cclxuI3dlbGNvbWUge1xyXG4gIGNvbG9yOiAjMUFDM0MzO1xyXG4gIG1hcmdpbi10b3A6IDR2dztcclxufVxyXG5cclxucCB7XHJcbiAgbGluZS1oZWlnaHQ6IDN2dztcclxuICBtYXJnaW4tYm90dG9tOiA0dnc7XHJcbiAgbWFyZ2luLWxlZnQ6IDR2dztcclxuICBtYXJnaW4tcmlnaHQ6IDR2dztcclxuICBjb2xvcjogIzcwNzA3MDtcclxuICBmb250LXNpemU6IDJ2dztcclxufVxyXG5cclxuXHJcblxyXG4jZ2V0U3RhcnRlZCB7XHJcbiAgbWFyZ2luLXRvcDogMjAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE4MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTgwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MkEwRDE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXJnaW4tbGVmdDogNDJ2dztcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgd2lkdGg6IDE3dnc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUFDM0MzO1xyXG5cclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbiNkaXZfY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiAxMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMzVweDtcclxuXHJcbn1cclxuXHJcblxyXG4jaW1nMiB7XHJcbiAgaGVpZ2h0OiAxMjVweDtcclxuICB3aWR0aDogOC42dnc7XHJcbiAgbWFyZ2luLWxlZnQ6IDMuNXZ3O1xyXG5cclxufVxyXG5cclxuI2Rpdl9jb250YWluZXIyIHtcclxuICB3aWR0aDogMzB2dztcclxuICBtYXJnaW4tbGVmdDogMjR2dztcclxufVxyXG5cclxuI2Rpdl9jb250YWluZXIyXzF7XHJcbiAgbWFyZ2luLWxlZnQ6IDIuNzh2dztcclxuICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogIzM3NEY4NjtcclxufVxyXG5cclxuXHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-main-page',
            templateUrl: './main-page.component.html',
            styleUrls: ['./main-page.component.css']
          }]
        }], function () {
          return [{
            type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "1XzQ":
    /*!***********************************************!*\
      !*** ./src/app/main-page/main-page.module.ts ***!
      \***********************************************/

    /*! exports provided: MainPageModule */

    /***/
    function XzQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainPageModule", function () {
        return MainPageModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _main_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./main-page.component */
      "0PS2");
      /* harmony import */


      var _angular_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../angular-material.module */
      "rhD1");

      var MainPageModule = function MainPageModule() {
        _classCallCheck(this, MainPageModule);
      };

      MainPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MainPageModule
      });
      MainPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MainPageModule_Factory(t) {
          return new (t || MainPageModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainPageModule, {
          declarations: [_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "1s7i":
    /*!*********************************************!*\
      !*** ./src/app/contacts/contacts.module.ts ***!
      \*********************************************/

    /*! exports provided: ContactsModule */

    /***/
    function s7i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactsModule", function () {
        return ContactsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _contacts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./contacts.component */
      "iZNs");
      /* harmony import */


      var _angular_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../angular-material.module */
      "rhD1");

      var ContactsModule = function ContactsModule() {
        _classCallCheck(this, ContactsModule);
      };

      ContactsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ContactsModule
      });
      ContactsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ContactsModule_Factory(t) {
          return new (t || ContactsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContactsModule, {
          declarations: [_contacts_component__WEBPACK_IMPORTED_MODULE_5__["ContactsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_contacts_component__WEBPACK_IMPORTED_MODULE_5__["ContactsComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        apiUrl: "http://localhost:3000/api"
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "CG0s":
    /*!******************************************!*\
      !*** ./src/app/error/error.component.ts ***!
      \******************************************/

    /*! exports provided: ErrorComponent */

    /***/
    function CG0s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () {
        return ErrorComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");

      var ErrorComponent = /*#__PURE__*/function () {
        // constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) {}
        function ErrorComponent(dialog, dialogRef, data) {
          _classCallCheck(this, ErrorComponent);

          this.dialog = dialog;
          this.dialogRef = dialogRef;
          this.data = data;
        }

        _createClass(ErrorComponent, [{
          key: "close",
          value: function close() {
            this.dialogRef.close(true);
          }
        }]);

        return ErrorComponent;
      }();

      ErrorComponent.ɵfac = function ErrorComponent_Factory(t) {
        return new (t || ErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
      };

      ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ErrorComponent,
        selectors: [["app-error"]],
        decls: 8,
        vars: 1,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "mat-body-1"], ["mat-dialog-actions", ""], [3, "click"]],
        template: function ErrorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "An Error Occurred!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ErrorComponent_Template_button_click_6_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.message);
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            templateUrl: "./error.component.html",
            selector: "app-error"
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Mnkj":
    /*!****************************************!*\
      !*** ./src/app/error/error.service.ts ***!
      \****************************************/

    /*! exports provided: ErrorService */

    /***/
    function Mnkj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorService", function () {
        return ErrorService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ErrorService = /*#__PURE__*/function () {
        function ErrorService() {
          _classCallCheck(this, ErrorService);

          this.errorListener = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        }

        _createClass(ErrorService, [{
          key: "getErrorListener",
          value: function getErrorListener() {
            return this.errorListener.asObservable();
          }
        }, {
          key: "throwError",
          value: function throwError(message) {
            this.errorListener.next(message);
          }
        }, {
          key: "handleError",
          value: function handleError() {
            this.errorListener.next(null);
          }
        }]);

        return ErrorService;
      }();

      ErrorService.ɵfac = function ErrorService_Factory(t) {
        return new (t || ErrorService)();
      };

      ErrorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: ErrorService,
        factory: ErrorService.ɵfac,
        providedIn: "root"
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ErrorService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: "root"
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "S4uW":
    /*!******************************************************!*\
      !*** ./src/app/profiles/profile-create.component.ts ***!
      \******************************************************/

    /*! exports provided: ProfileCreateComponent */

    /***/
    function S4uW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileCreateComponent", function () {
        return ProfileCreateComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _mime_type_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./mime-type.validator */
      "h2eb");
      /* harmony import */


      var _profiles_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profiles.service */
      "t83K");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../auth/auth.service */
      "qXBG");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");

      function ProfileCreateComponent_mat_spinner_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner");
        }
      }

      function ProfileCreateComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.imagePreview, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r1.form.value.name);
        }
      }

      function ProfileCreateComponent_form_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ProfileCreateComponent_form_10_Template_form_submit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.onSaveProfile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r3.userName);
        }
      }

      var ProfileCreateComponent = /*#__PURE__*/function () {
        function ProfileCreateComponent(profilesService, route, authService) {
          _classCallCheck(this, ProfileCreateComponent);

          this.profilesService = profilesService;
          this.route = route;
          this.authService = authService;
          this.isLoading = false;
          this.userName = "temporary";
          this.mode = "create";
          this.profiles = [];
          this.totalProfiles = 0;
          this.profilesPerPage = 1;
          this.currentPage = 1;
        }

        _createClass(ProfileCreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            //this.isLoading = true;
            this.profilesService.getProfileByUserId();
            this.userId = this.authService.getUserId();
            this.authStatusSub = this.authService.getAuthStatusListener().subscribe(function (authStatus) {
              _this3.isLoading = false;
            });
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]
              }),
              surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
              }),
              image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                asyncValidators: [_mime_type_validator__WEBPACK_IMPORTED_MODULE_2__["mimeType"]]
              })
            });
            this.profilesSub = this.profilesService.getProfileUpdateListener().subscribe(function (profileData) {
              _this3.userName = _this3.authService.getUserName();

              if (profileData.profileExist) {
                _this3.mode = "edit";
                _this3.profileId = profileData.profile.id;
                _this3.profile = {
                  id: profileData.profile.id,
                  name: profileData.profile.name,
                  surname: profileData.profile.surname,
                  imagePath: profileData.profile.imagePath,
                  userId: profileData.profile.userId
                };
                _this3.imagePreview = profileData.profile.imagePath;

                _this3.form.setValue({
                  name: _this3.profile.name,
                  surname: _this3.profile.surname,
                  image: _this3.profile.imagePath
                });
              } else {
                _this3.mode = "create";
                _this3.profileId = null;
              }
            });
          }
        }, {
          key: "onImagePicked",
          value: function onImagePicked(event) {
            var _this4 = this;

            var file = event.target.files[0];
            this.form.patchValue({
              image: file
            });
            this.form.get("image").updateValueAndValidity();
            var reader = new FileReader();

            reader.onload = function () {
              _this4.imagePreview = reader.result;
            };

            reader.readAsDataURL(file);
          }
        }, {
          key: "onSaveProfile",
          value: function onSaveProfile() {
            if (this.form.invalid) {
              console.log("form is invalid");
              return;
            }

            this.isLoading = true;

            if (this.mode === "create") {
              this.profilesService.addProfile(this.form.value.name, this.form.value.surname, this.form.value.image);
            } else {
              this.profilesService.updateProfile(this.profileId, this.form.value.name, this.form.value.surname, this.form.value.image);
            }

            this.form.reset();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.profilesSub.unsubscribe();
            this.authStatusSub.unsubscribe();
          }
        }]);

        return ProfileCreateComponent;
      }();

      ProfileCreateComponent.ɵfac = function ProfileCreateComponent_Factory(t) {
        return new (t || ProfileCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_profiles_service__WEBPACK_IMPORTED_MODULE_3__["ProfilesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]));
      };

      ProfileCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProfileCreateComponent,
        selectors: [["app-profile-create"]],
        decls: 18,
        vars: 3,
        consts: [[4, "ngIf"], ["class", "image-preview", 4, "ngIf"], ["id", "pick_picture", "mat-stroked-button", "", "type", "button", 3, "click"], ["type", "file", 3, "change"], ["filePicker", ""], [3, "formGroup", "submit", 4, "ngIf"], ["id", "div_container"], ["id", "div_container1"], ["id", "img2", "src", "images/Logo.jpg"], ["id", "div_container2"], ["id", "div_container2_1"], ["id", "div_container3"], [1, "image-preview"], [3, "src", "alt"], [3, "formGroup", "submit"], [1, "input_container"], ["matInput", "", "type", "text", "formControlName", "name", "placeholder", "First Name"], ["matInput", "", "type", "text", "formControlName", "surname", "placeholder", "Last Name"], ["matInput", "", "type", "email", "readonly", "", 3, "placeholder"], ["matInput", "", "type", "password", "placeholder", "Current Password*"], ["matInput", "", "type", "password", "placeholder", "New Password*"], ["id", "save", "mat-raised-button", "", "type", "submit"]],
        template: function ProfileCreateComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileCreateComponent_mat_spinner_2_Template, 1, 0, "mat-spinner", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileCreateComponent_div_4_Template, 2, 2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileCreateComponent_Template_button_click_6_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

              return _r2.click();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Upload Image");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProfileCreateComponent_Template_input_change_8_listener($event) {
              return ctx.onImagePicked($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProfileCreateComponent_form_10_Template, 13, 2, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Copyright 2020. All Rights Reserved.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imagePreview !== "" && ctx.imagePreview && ctx.form.get("image").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatSpinner"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
        styles: ["body[_ngcontent-%COMP%] {\r\n  width: 100vw;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%] {\r\n  margin-left: 4vw;\r\n  margin-right: 4vw;\r\n  background-color: #EDE1E1;\r\n  display: flex;\r\n  width: 92vw;\r\n  height: 37vw;\r\n}\r\n\r\n.image-preview[_ngcontent-%COMP%] {\r\n  width: 27vw;\r\n  height: 27vw;\r\n  border-radius: 50%;\r\n  background-color: white;\r\n  margin-left: 8vw;\r\n  margin-top: 2vw;\r\n}\r\n\r\n.image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 27vw;\r\n  height: 27vw;\r\n  border-radius: 50%;\r\n}\r\n\r\n#pick_picture[_ngcontent-%COMP%]{\r\n  color: white;\r\n  background-color: #1AC3C3;\r\n  margin-left: 14vw;\r\n  margin-top: 2.25vw;\r\n  height: 4vw;\r\n  width: 15vw;\r\n  font-size: 2vw;\r\n  border-style: none;\r\n}\r\n\r\ninput[type=\"file\"][_ngcontent-%COMP%] {\r\n  visibility: hidden;\r\n}\r\n\r\nform[_ngcontent-%COMP%] {\r\n  margin-right: 7vw;\r\n  padding: 0%;\r\n  margin-top: 1vw;\r\n  height: 32vw;\r\n  width: 50vw;\r\n  text-align: center;\r\n}\r\n\r\n.input_container[_ngcontent-%COMP%] {\r\n  margin-top: 1.5vw;\r\n\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  width: 40vw;\r\n  height: 4vw;\r\n  font-size: 2vw;\r\n  text-align: center;\r\n\r\n}\r\n\r\ninput[_ngcontent-%COMP%]::-webkit-input-placeholder {position:relative;}\r\n\r\n#save[_ngcontent-%COMP%] {\r\n  color: white;\r\n  background-color: #1AC3C3;\r\n  margin-top: 1.5vw;\r\n  height: 4vw;\r\n  width: 15vw;\r\n  font-size: 2vw;\r\n  border-style: none;\r\n}\r\n\r\n#div_container[_ngcontent-%COMP%] {\r\n  width: 100vw;\r\n  display: flex;\r\n  margin-top: 8.333vw;\r\n  padding-bottom: 2.431vw;\r\n\r\n}\r\n\r\n#img2[_ngcontent-%COMP%] {\r\n  height: 125px;\r\n  width: 8.6vw;\r\n  margin-left: 3.5vw;\r\n\r\n}\r\n\r\n#div_container2[_ngcontent-%COMP%] {\r\n  width: 30vw;\r\n  margin-left: 24vw;\r\n}\r\n\r\n#div_container2_1[_ngcontent-%COMP%]{\r\n  margin-left: 2.78vw;\r\n  margin-top: 70px;\r\n  font-size: 20px;\r\n  color: #374F86;\r\n}\r\n\r\nmat-spinner[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZXMvcHJvZmlsZS1jcmVhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFJQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFHQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCOztBQUVuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjs7QUFFcEI7O0FBRUEsa0NBQWtDLGlCQUFpQixDQUFDOztBQUVwRDtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1Qjs7QUFFekI7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGVzL3Byb2ZpbGUtY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuYm9keSB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDR2dztcclxuICBtYXJnaW4tcmlnaHQ6IDR2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRURFMUUxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDkydnc7XHJcbiAgaGVpZ2h0OiAzN3Z3O1xyXG59XHJcblxyXG4uaW1hZ2UtcHJldmlldyB7XHJcbiAgd2lkdGg6IDI3dnc7XHJcbiAgaGVpZ2h0OiAyN3Z3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tbGVmdDogOHZ3O1xyXG4gIG1hcmdpbi10b3A6IDJ2dztcclxufVxyXG5cclxuLmltYWdlLXByZXZpZXcgaW1nIHtcclxuICB3aWR0aDogMjd2dztcclxuICBoZWlnaHQ6IDI3dnc7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4jcGlja19waWN0dXJle1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUFDM0MzO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNHZ3O1xyXG4gIG1hcmdpbi10b3A6IDIuMjV2dztcclxuICBoZWlnaHQ6IDR2dztcclxuICB3aWR0aDogMTV2dztcclxuICBmb250LXNpemU6IDJ2dztcclxuICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcblxyXG5cclxuaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuXHJcbmZvcm0ge1xyXG4gIG1hcmdpbi1yaWdodDogN3Z3O1xyXG4gIHBhZGRpbmc6IDAlO1xyXG4gIG1hcmdpbi10b3A6IDF2dztcclxuICBoZWlnaHQ6IDMydnc7XHJcbiAgd2lkdGg6IDUwdnc7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW5wdXRfY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAxLjV2dztcclxuXHJcbn1cclxuXHJcbmlucHV0IHtcclxuICB3aWR0aDogNDB2dztcclxuICBoZWlnaHQ6IDR2dztcclxuICBmb250LXNpemU6IDJ2dztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG5pbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7cG9zaXRpb246cmVsYXRpdmU7fVxyXG5cclxuI3NhdmUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUFDM0MzO1xyXG4gIG1hcmdpbi10b3A6IDEuNXZ3O1xyXG4gIGhlaWdodDogNHZ3O1xyXG4gIHdpZHRoOiAxNXZ3O1xyXG4gIGZvbnQtc2l6ZTogMnZ3O1xyXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuI2Rpdl9jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi10b3A6IDguMzMzdnc7XHJcbiAgcGFkZGluZy1ib3R0b206IDIuNDMxdnc7XHJcblxyXG59XHJcblxyXG5cclxuI2ltZzIge1xyXG4gIGhlaWdodDogMTI1cHg7XHJcbiAgd2lkdGg6IDguNnZ3O1xyXG4gIG1hcmdpbi1sZWZ0OiAzLjV2dztcclxuXHJcbn1cclxuXHJcbiNkaXZfY29udGFpbmVyMiB7XHJcbiAgd2lkdGg6IDMwdnc7XHJcbiAgbWFyZ2luLWxlZnQ6IDI0dnc7XHJcbn1cclxuXHJcbiNkaXZfY29udGFpbmVyMl8xe1xyXG4gIG1hcmdpbi1sZWZ0OiAyLjc4dnc7XHJcbiAgbWFyZ2luLXRvcDogNzBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICMzNzRGODY7XHJcbn1cclxuXHJcbm1hdC1zcGlubmVyIHtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileCreateComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: "app-profile-create",
            templateUrl: "./profile-create.component.html",
            styleUrls: ["./profile-create.component.css"]
          }]
        }], function () {
          return [{
            type: _profiles_service__WEBPACK_IMPORTED_MODULE_3__["ProfilesService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }, {
            type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "SJn0":
    /*!**************************************!*\
      !*** ./src/app/error-interceptor.ts ***!
      \**************************************/

    /*! exports provided: ErrorInterceptor */

    /***/
    function SJn0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
        return ErrorInterceptor;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _error_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./error/error.component */
      "CG0s");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _error_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./error/error.service */
      "Mnkj");

      var ErrorInterceptor = /*#__PURE__*/function () {
        function ErrorInterceptor(dialog, errorService) {
          _classCallCheck(this, ErrorInterceptor);

          this.dialog = dialog;
          this.errorService = errorService;
        }

        _createClass(ErrorInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var _this5 = this;

            return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["catchError"])(function (error) {
              var errorMessage = "An unknown error occurred!";

              if (error.error.message) {
                errorMessage = error.error.message;
              }

              _this5.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"], {
                data: {
                  message: errorMessage
                }
              }); // this.errorService.throwError(errorMessage);


              return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
            }));
          }
        }]);

        return ErrorInterceptor;
      }();

      ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) {
        return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_error_error_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"]));
      };

      ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: ErrorInterceptor,
        factory: ErrorInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ErrorInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
          }, {
            type: _error_error_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth/auth.service */
      "qXBG");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./header/header.component */
      "fECr");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(authService) {
          _classCallCheck(this, AppComponent);

          this.authService = authService;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.authService.autoAuthUser();
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
        styles: ["main[_ngcontent-%COMP%]{\r\n  width:80%;\r\n  margin:1 rem auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1QsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWlue1xyXG4gIHdpZHRoOjgwJTtcclxuICBtYXJnaW46MSByZW0gYXV0bztcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], function () {
          return [{
            type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "YxGc":
    /*!*********************************************!*\
      !*** ./src/app/profiles/profiles.module.ts ***!
      \*********************************************/

    /*! exports provided: ProfilesModule */

    /***/
    function YxGc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilesModule", function () {
        return ProfilesModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _profile_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./profile-create.component */
      "S4uW");
      /* harmony import */


      var _angular_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../angular-material.module */
      "rhD1");

      var ProfilesModule = function ProfilesModule() {
        _classCallCheck(this, ProfilesModule);
      };

      ProfilesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ProfilesModule
      });
      ProfilesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ProfilesModule_Factory(t) {
          return new (t || ProfilesModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfilesModule, {
          declarations: [_profile_create_component__WEBPACK_IMPORTED_MODULE_4__["ProfileCreateComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfilesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_profile_create_component__WEBPACK_IMPORTED_MODULE_4__["ProfileCreateComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _contacts_contacts_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./contacts/contacts.module */
      "1s7i");
      /* harmony import */


      var _myscript_myscript_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./myscript/myscript.module */
      "jpBz");
      /* harmony import */


      var _main_page_main_page_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./main-page/main-page.module */
      "1XzQ");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./header/header.component */
      "fECr");
      /* harmony import */


      var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./auth/auth-interceptor */
      "kuTz");
      /* harmony import */


      var _error_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./error-interceptor */
      "SJn0");
      /* harmony import */


      var _error_error_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./error/error.component */
      "CG0s");
      /* harmony import */


      var _angular_material_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./angular-material.module */
      "rhD1");
      /* harmony import */


      var _profiles_profiles_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./profiles/profiles.module */
      "YxGc");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
          useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__["AuthInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
          useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_11__["ErrorInterceptor"],
          multi: true
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _profiles_profiles_module__WEBPACK_IMPORTED_MODULE_14__["ProfilesModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_13__["AngularMaterialModule"], _main_page_main_page_module__WEBPACK_IMPORTED_MODULE_8__["MainPageModule"], _contacts_contacts_module__WEBPACK_IMPORTED_MODULE_6__["ContactsModule"], _myscript_myscript_module__WEBPACK_IMPORTED_MODULE_7__["MyscriptModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _profiles_profiles_module__WEBPACK_IMPORTED_MODULE_14__["ProfilesModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_13__["AngularMaterialModule"], _main_page_main_page_module__WEBPACK_IMPORTED_MODULE_8__["MainPageModule"], _contacts_contacts_module__WEBPACK_IMPORTED_MODULE_6__["ContactsModule"], _myscript_myscript_module__WEBPACK_IMPORTED_MODULE_7__["MyscriptModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _profiles_profiles_module__WEBPACK_IMPORTED_MODULE_14__["ProfilesModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_13__["AngularMaterialModule"], _main_page_main_page_module__WEBPACK_IMPORTED_MODULE_8__["MainPageModule"], _contacts_contacts_module__WEBPACK_IMPORTED_MODULE_6__["ContactsModule"], _myscript_myscript_module__WEBPACK_IMPORTED_MODULE_7__["MyscriptModule"]],
            providers: [{
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
              useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__["AuthInterceptor"],
              multi: true
            }, {
              provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
              useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_11__["ErrorInterceptor"],
              multi: true
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            entryComponents: [_error_error_component__WEBPACK_IMPORTED_MODULE_12__["ErrorComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "evIt":
    /*!************************************************!*\
      !*** ./src/app/myscript/myscript.component.ts ***!
      \************************************************/

    /*! exports provided: MyscriptComponent */

    /***/
    function evIt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyscriptComponent", function () {
        return MyscriptComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _scripts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./scripts.service */
      "+b8U");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function MyscriptComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Step 1 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MyscriptComponent_ng_template_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Step 2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MyscriptComponent_ng_template_94_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Step 3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MyscriptComponent_ng_template_156_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Step 4 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MyscriptComponent_ng_template_208_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Step 5 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MyscriptComponent_ng_template_272_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Download ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var MyscriptComponent = /*#__PURE__*/function () {
        function MyscriptComponent(scriptsService, _formBuilder) {
          _classCallCheck(this, MyscriptComponent);

          this.scriptsService = scriptsService;
          this._formBuilder = _formBuilder;
          this.isLoading = false;
          this.isLinear = false;
          this.filename = "Your_Script.zip";
        }

        _createClass(MyscriptComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.scriptsSub = this.scriptsService.getScriptUpdateListener().subscribe(function (scriptData) {
              _this6.imagePath = scriptData.scriptImagePath;

              _this6.downloadScript();
            });
            this.firstFormGroup = this._formBuilder.group({
              firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
            this.secondFormGroup = this._formBuilder.group({
              secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
            this.thirdFormGroup = this._formBuilder.group({
              thirdCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
            this.fourthFormGroup = this._formBuilder.group({
              fourthCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
            this.fifthFormGroup = this._formBuilder.group({
              fifthCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "onCreateScript",
          value: function onCreateScript() {
            this.scriptsService.addScript();
          }
        }, {
          key: "onGetScript",
          value: function onGetScript(step1, step2, step3, step4, step5) {
            this.scriptsService.getScript(step1, step2, step3, step4, step5);
          }
        }, {
          key: "downloadScript",
          value: function downloadScript() {
            var link = document.createElement('a');
            link.setAttribute('target', '_blank');
            link.setAttribute('href', this.imagePath);
            link.setAttribute('download', this.filename);
            document.body.appendChild(link);
            link.click();
            link.remove();
          }
        }, {
          key: "onResetForm",
          value: function onResetForm() {
            this.imagePath = null;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.scriptsSub.unsubscribe();
          }
        }]);

        return MyscriptComponent;
      }();

      MyscriptComponent.ɵfac = function MyscriptComponent_Factory(t) {
        return new (t || MyscriptComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_scripts_service__WEBPACK_IMPORTED_MODULE_2__["ScriptsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      MyscriptComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MyscriptComponent,
        selectors: [["app-myscript"]],
        decls: 306,
        vars: 15,
        consts: [["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"), "integrity", "sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z", "crossorigin", "anonymous"], [1, "blocktext"], ["linear", "true"], ["stepper", ""], [3, "stepControl"], ["matStepLabel", ""], [2, "position", "relative", "width", "98vw", "height", "36vw", "margin-top", "2vw"], ["src", "images/national-cancer-institute-zz_3tCcrk7o-unsplash.png", "alt", "", 2, "width", "98vw", "height", "36vw", "border", "none"], ["id", "step1_form", 3, "formGroup"], ["id", "container1"], ["id", "container1_1"], ["id", "container1_2"], ["id", "container1_2_1"], ["id", "circle1"], ["id", "question1"], ["id", "container1_2_2"], ["aria-label", "Select an option", "formControlName", "firstCtrl", "required", ""], ["radioGroup1", "matRadioGroup"], ["id", "container1_2_2_0"], ["id", "images_container1"], ["id", "images_container1_1"], ["src", "images/Alzheimers.png", "alt", "form.value.name", 2, "width", "13.89vw", "height", "13.89vw"], ["id", "images_container1_2"], ["src", "images/HealthyControl.png", "alt", "form.value.name", 2, "width", "13.89vw", "height", "13.89vw"], ["id", "radio_button_container1"], ["id", "radio_button_container1_1"], ["value", "Alzheimers"], [2, "font-size", "1.25vw"], ["id", "radio_button_container1_2"], ["value", "HealthyControl"], ["id", "button1", "mat-button", "", "matStepperNext", "", 1, "btn", "btn-primary", "active"], ["id", "footer"], ["id", "footer1"], ["id", "footer_img", "src", "images/Logo.jpg"], ["id", "footer2"], ["id", "footer2_1"], ["id", "footer3"], ["id", "step2_form", 3, "formGroup"], ["id", "container2"], ["id", "container2_1"], ["id", "container2_2"], ["id", "container2_2_1"], ["id", "circle2"], ["id", "question2"], ["id", "container2_2_2"], ["aria-label", "Select an option", "formControlName", "secondCtrl", "required", ""], ["radioGroup2", "matRadioGroup"], ["id", "radio_button_container2"], ["value", "FBR"], [1, "option2"], [1, "option_number2"], [1, "option_content2"], ["value", "PiB"], [2, "margin-left", "23vw", "margin-top", "3.5vw", "font-size", "1.2vw", "color", "#707070"], ["id", "button_container2"], [1, "triangle-left"], ["id", "button2_1", "mat-button", "", "matStepperPrevious", "", 1, "btn", "btn-primary", "active"], ["id", "button2_2"], ["id", "button2_3", "mat-button", "", "matStepperNext", "", 1, "btn", "btn-primary", "active"], [1, "triangle-right"], ["id", "step3_form", 3, "formGroup"], ["id", "container3"], ["id", "container3_1"], [1, "container3_1"], [2, "font-weight", "bold"], ["id", "container3_2"], ["id", "container3_2_1"], ["id", "circle3"], ["id", "question3"], ["id", "container3_2_2"], ["aria-label", "Select an option", "formControlName", "thirdCtrl", "required", ""], ["radioGroup3", "matRadioGroup"], ["id", "radio_button_container3"], ["value", "Re-alignment"], [1, "option3"], [1, "option_number3"], [1, "option_content3"], ["value", "Co-registration"], ["value", "Normalization"], ["id", "button_container3"], ["id", "button3_1", "mat-button", "", "matStepperPrevious", "", 1, "btn", "btn-primary", "active"], ["id", "button3_2"], ["id", "button3_3", "mat-button", "", "matStepperNext", "", 1, "btn", "btn-primary", "active"], ["id", "step4_form", 3, "formGroup"], ["id", "container4"], ["id", "container4_1"], [1, "container4_1"], ["id", "container4_2"], ["id", "container4_2_1"], ["id", "circle4"], ["id", "question4"], ["id", "container4_2_2"], ["aria-label", "Select an option", "formControlName", "fourthCtrl", "required", ""], ["radioGroup4", "matRadioGroup"], ["id", "radio_button_container4"], ["value", "FSL"], [1, "option4"], [1, "option_number4"], [1, "option_content4"], ["value", "SPM"], ["id", "button_container4"], ["id", "button4_1", "mat-button", "", "matStepperPrevious", "", 1, "btn", "btn-primary", "active"], ["id", "button4_2"], ["id", "button4_3", "mat-button", "", "matStepperNext", "", 1, "btn", "btn-primary", "active"], ["id", "step5_form", 3, "formGroup"], ["id", "container5"], ["id", "container5_1"], [1, "container5_1", 2, "color", "#1AC3C3"], [1, "container5_1"], ["id", "container5_2"], ["id", "container5_2_1"], ["id", "circle5"], ["id", "question5"], ["id", "container5_2_2"], ["aria-label", "Select an option", "formControlName", "fifthCtrl", "required", ""], ["radioGroup5", "matRadioGroup"], ["id", "radio_button_container5"], ["value", "Frontal-lope"], [1, "option5"], [1, "option_number5"], [1, "option_content5"], ["value", "Whole-cerebellum"], ["value", "Cerebellar-gray-matter"], ["id", "button_container5"], ["id", "button5_1", "mat-button", "", "matStepperPrevious", "", 1, "btn", "btn-primary", "active"], ["id", "button5_2"], ["id", "button5_3", "mat-button", "", "matStepperNext", "", 1, "btn", "btn-primary", "active"], ["id", "step6_form"], ["id", "container6_1"], ["id", "container6_2"], ["id", "button_container6"], ["id", "button6_1", "mat-button", "", "matStepperPrevious", "", 1, "btn", "btn-primary", "active"], ["id", "button6_2_container"], ["id", "button6_2", "mat-button", "", 1, "btn", "btn-primary", "active", 3, "click"], ["id", "button6_3_container"], ["id", "button6_3", "mat-button", "", 1, "btn", "btn-primary", "active", 3, "click"], ["id", "step"]],
        template: function MyscriptComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "P", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-horizontal-stepper", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-step", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MyscriptComponent_ng_template_6_Template, 2, 0, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " This module allows you to understand common PET/MR processing metrics used to align images prior to implementing any analytical techniques. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " 1 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " What pathology would you like to study? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-radio-group", 16, 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-radio-button", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Alzheimer's Disease");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-radio-button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Healthy Control");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Copyright 2020. All Rights Reserved.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-step", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, MyscriptComponent_ng_template_47_Template, 2, 0, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "form", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " What GAAIN is: The Global Alzheimer\u2019s Association Interactive Network (GAAIN) has developed the first operational online integrated research platform, which links scientists, shared data, and sophisticated analysis tools. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " 2 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Which data set would you like to study? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-radio-group", 45, 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-radio-button", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " GAAIN \u2013 Florbetapir ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-radio-button", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " GAAIN - PittsburghBCompund ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "*Uploaded by Navitsky et al\u2019s research team via GAAIN Alzheimers Association Portal");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "div", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "button", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Copyright 2020. All Rights Reserved.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mat-step", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](94, MyscriptComponent_ng_template_94_Template, 2, 0, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "form", 60);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 61);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 62);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Re-alignment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " is characterization and correction of interpolation effects in the realignment of MRI.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Co-registration");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " is to achieve matching of inter-modality intra- subject data.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 63);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Normalization");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " is to fit the image to standard space and facilitate inter-subject analyses.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 65);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 66);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 67);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " 3 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 68);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " Which processing metrics would you like to implement? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "mat-radio-group", 70, 71);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 72);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "mat-radio-button", 73);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Re-allignment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "mat-radio-button", 77);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Co-registration");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "mat-radio-button", 78);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 74);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 75);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 76);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Normalization");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 79);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "button", 80);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "div", 81);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "button", 82);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Copyright 2020. All Rights Reserved.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "mat-step", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](156, MyscriptComponent_ng_template_156_Template, 2, 0, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "form", 83);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 84);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "span", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "FSL:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " Image analysis and statistical tools for functional, structural and diffusion MRI brain imaging data.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 86);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "span", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "SPM:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " Construction and assessment of spatially extended statistical processes used to test hypotheses about functional imaging data.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 87);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 88);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 89);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " 4 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 90);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " Which imaging languages would you like to use? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 91);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "mat-radio-group", 92, 93);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 94);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "mat-radio-button", 95);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "FSL");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "mat-radio-button", 99);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 96);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 97);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 98);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "SPM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 100);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "button", 101);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "div", 102);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "button", 103);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Copyright 2020. All Rights Reserved.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "mat-step", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](208, MyscriptComponent_ng_template_208_Template, 2, 0, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "form", 104);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 105);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 106);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 107);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Did you know?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 108);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "span", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "The Frontal Lope");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, " involved in, problem solving, spontaneity, memory, language, initiation, judgement, impulse control, and social and sexual behavior.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 108);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "span", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "The Cerebellum");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, " coordinates voluntary movements such as posture, balance, coordination, and speech, resulting in smooth and balanced muscular activity.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 108);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "span", 64);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "The Cerebellar Gray Matter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, " control muscular and sensory activity.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 109);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 110);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 111);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, " 5 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 112);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, " Which areas of the brain would you like to analyze? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 113);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "mat-radio-group", 114, 115);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 116);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "mat-radio-button", 117);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 118);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 119);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 120);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "Frontal lope");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "mat-radio-button", 121);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 118);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 119);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 120);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Whole cerebellum");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "mat-radio-button", 122);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 118);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 119);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 120);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "Cerebellar gray matter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 123);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "button", 124);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "div", 125);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "button", 126);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](263, "div", 59);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "Copyright 2020. All Rights Reserved.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "mat-step");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](272, MyscriptComponent_ng_template_272_Template, 2, 0, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "img", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 127);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 128);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "You Selected the Following:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 129);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 130);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "button", 131);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 132);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "button", 133);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyscriptComponent_Template_button_click_294_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

              _r0.reset();

              return ctx.onResetForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "Restart");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "div", 134);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "button", 135);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyscriptComponent_Template_button_click_297_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

              var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](62);

              var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](120);

              var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](178);

              var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](236);

              return ctx.onGetScript(_r2.value, _r4.value, _r6.value, _r8.value, _r10.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, " Download Script ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](301, "img", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "div", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "div", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "Copyright 2020. All Rights Reserved.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](305, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](62);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](120);

            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](178);

            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](236);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.firstFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.firstFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.secondFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.secondFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.thirdFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.thirdFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](58);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.fourthFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.fourthFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](48);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("stepControl", ctx.fifthFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.fifthFormGroup);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](69);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Pathology: ", _r2.value, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Data set: ", _r4.value, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Processing metrics: ", _r6.value, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Imaging languages: ", _r8.value, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Areas of the brain: ", _r10.value, "");
          }
        },
        directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStepLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStepperNext"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStepperPrevious"]],
        styles: [".blocktext[_ngcontent-%COMP%] {\r\n  width: 100vw;\r\n}\r\n\r\n#step[_ngcontent-%COMP%] {\r\n  font-size: 1.5vw;\r\n  color: #707070;\r\n}\r\n\r\n.step_form[_ngcontent-%COMP%] {\r\n  margin-top: 3vw;\r\n  margin-left: 4vw;\r\n  width: 92vw;\r\n  height: 30vw;\r\n  background-color: #C4D9ED;\r\n}\r\n\r\n.triangle-left[_ngcontent-%COMP%] {\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 2.5vw solid transparent;\r\n  border-bottom: 2.5vw solid transparent;\r\n  border-right: 5vw solid #42A0D1;\r\n}\r\n\r\n.triangle-right[_ngcontent-%COMP%] {\r\n  width: 0;\r\n  height: 0;\r\n  border-top: 2.5vw solid transparent;\r\n  border-bottom: 2.5vw solid transparent;\r\n  border-left: 5vw solid #42A0D1;\r\n}\r\n\r\ninput[type=\"file\"][_ngcontent-%COMP%] {\r\n  visibility: hidden;\r\n}\r\n\r\n\r\n\r\n#step1_form[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 3vw;\r\n  left: 3vw;\r\n  width: 92vw;\r\n  height: 30vw;\r\n  background-color: #C4D9ED;\r\n\r\n}\r\n\r\n#container1[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n\r\n}\r\n\r\n#container1_1[_ngcontent-%COMP%] {\r\n  font-size: 2vw;\r\n  line-height: 2.5vw;\r\n  color: #707070;\r\n  width: 30vw;\r\n  height: 20vw;\r\n  margin-top: 8vw;\r\n  margin-left: 5vw;\r\n  margin-right: 4vw;\r\n}\r\n\r\n#container1_2[_ngcontent-%COMP%] {\r\n  margin-left: 1.5vw;\r\n  margin-top: 3.5vw;\r\n}\r\n\r\n#container1_2_1[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n#circle1[_ngcontent-%COMP%] {\r\n  width: 4vw;\r\n  height: 4vw;\r\n  border-radius: 50%;\r\n  background-color:#374F86;\r\n  text-align: center;\r\n  line-height: 4vw;\r\n  font-size: 2vw;\r\n  color: white;\r\n  border-style: solid;\r\n  border-width: 0.1vw;\r\n  border-color: #707070;\r\n}\r\n\r\n#question1[_ngcontent-%COMP%] {\r\n  margin-top: 0.5vw;\r\n  padding-left: 0.5vw;\r\n  padding-right: 0.5vw;\r\n  text-align: center;\r\n  line-height: 3vw;\r\n  height: 3vw;\r\n  font-size: 2vw;\r\n  background-color: white;\r\n  color: #707070;\r\n  border-color: #707070;\r\n  border-radius: 5%;\r\n  border-style: solid;\r\n  border-width: 0.1vw;\r\n}\r\n\r\n#container1_2_2[_ngcontent-%COMP%] {\r\n  margin-left: 6vw;\r\n}\r\n\r\n#images_container1[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: row;\r\n  margin-top: 1.5vw;\r\n}\r\n\r\n#images_container1_2[_ngcontent-%COMP%]{\r\n  margin-left: 6vw;\r\n}\r\n\r\n#radio_button_container1[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: row;\r\n  margin-top: 1.25vw;\r\n}\r\n\r\n#radio_button_container1_1[_ngcontent-%COMP%] {\r\n  margin-left: 0.5vw;\r\n}\r\n\r\n#radio_button_container1_2[_ngcontent-%COMP%]{\r\n  margin-left: 7vw;\r\n}\r\n\r\n\r\n\r\n#button1[_ngcontent-%COMP%] {\r\n  margin-top: 5vw;\r\n  margin-left: 45vw;\r\n  margin-right: 45vw;\r\n  font-size: 2vw;\r\n  height: 5vw;\r\n  width: 10vw;\r\n  padding-top: 0;\r\n  background-color:#42A0D1;\r\n}\r\n\r\n\r\n\r\n#step2_form[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 3vw;\r\n  left: 3vw;\r\n  width: 92vw;\r\n  height: 30vw;\r\n  background-color: #C4D9ED;\r\n\r\n}\r\n\r\n#container2[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n\r\n}\r\n\r\n#container2_1[_ngcontent-%COMP%] {\r\n  font-size: 1.8vw;\r\n  color: #707070;\r\n  width: 30vw;\r\n  height: 20vw;\r\n  margin-top: 5vw;\r\n  margin-left: 5vw;\r\n  margin-right: 2vw;\r\n  line-height: 2.5vw;\r\n}\r\n\r\n#container2_2[_ngcontent-%COMP%] {\r\n  margin-top: 3.5vw;\r\n}\r\n\r\n#container2_2_1[_ngcontent-%COMP%] {\r\n  margin-left: 2vw;\r\n  display: flex;\r\n}\r\n\r\n#circle2[_ngcontent-%COMP%] {\r\n  width: 4vw;\r\n  height: 4vw;\r\n  border-radius: 50%;\r\n  border-color: #707070;\r\n  background-color:#374F86;\r\n  text-align: center;\r\n  line-height: 4vw;\r\n  font-size: 2vw;\r\n  color: white;\r\n  border-style: solid;\r\n  border-width: 0.1vw;\r\n}\r\n\r\n#question2[_ngcontent-%COMP%] {\r\n  width: 45vw;\r\n  text-align: center;\r\n  line-height: 4vw;\r\n  height: 4vw;\r\n  font-size: 2vw;\r\n  background-color: white;\r\n  color: #707070;\r\n  border-color: #707070;\r\n  border-radius: 5%;\r\n  border-style: solid;\r\n  border-width: 0.1vw;\r\n}\r\n\r\n#container2_2_2[_ngcontent-%COMP%] {\r\n  margin-left: 6.5vw;\r\n}\r\n\r\n#radio_button_container2[_ngcontent-%COMP%] {\r\n  margin-top: 1vw;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.option2[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.option_number2[_ngcontent-%COMP%] {\r\n  height: 6vw;\r\n  width: 3vw;\r\n  font-size: 2.5vw;\r\n  text-align: center;\r\n  line-height: 6vw;\r\n  margin-top: 1vw;\r\n  margin-right: 0%;\r\n  background-color: #374F86;\r\n  color: white;\r\n  border-style: solid;\r\n  border-width: 0.1vw;\r\n  border-color: #707070;\r\n}\r\n\r\n.option_content2[_ngcontent-%COMP%] {\r\n  height: 6vw;\r\n  width: 30vw;\r\n  font-size: 2vw;\r\n  padding-left: 1vw;\r\n  line-height: 6vw;\r\n  margin-left: 0%;\r\n  margin-top: 1vw;\r\n  background-color:#EDE1E1;\r\n  color:  #707070;\r\n  border-style: solid;\r\n  border-width: 0.1vw;\r\n  border-color: #707070;\r\n}\r\n\r\n\r\n\r\n#button_container2[_ngcontent-%COMP%] {\r\n  width: 80vw;\r\n  margin-top: 5vw;\r\n  margin-bottom: 5vw;\r\n  margin-left: 10vw;\r\n  margin-right: 10vw;\r\n  display: flex;\r\n  border: none;\r\n\r\n}\r\n\r\n#button2_1[_ngcontent-%COMP%] {\r\n  font-size: 2vw;\r\n  height: 5vw;\r\n  width: 10vw;\r\n  padding-top: 0;\r\n  margin: 0%;\r\n  background-color:#42A0D1;\r\n  border: none;\r\n}\r\n\r\n#button2_2[_ngcontent-%COMP%] {\r\n  margin: 0%;\r\n  width: 55vw;\r\n}\r\n\r\n#button2_3[_ngcontent-%COMP%] {\r\n  font-size: 2vw;\r\n  height: 5vw;\r\n  width: 10vw;\r\n  margin: 0%;\r\n  padding-top: 0;\r\n  background-color:#42A0D1;\r\n  border: none;\r\n}\r\n\r\n\r\n\r\n#step3_form[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 3vw;\r\n  left: 3vw;\r\n  width: 92vw;\r\n  height: 30vw;\r\n  background-color: #C4D9ED;\r\n\r\n}\r\n\r\n#container3[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n\r\n}\r\n\r\n#container3_1[_ngcontent-%COMP%] {\r\n  width: 30vw;\r\n  height: 20vw;\r\n  margin-top: 4vw;\r\n  margin-left: 5vw;\r\n  margin-right: 2vw;\r\n}\r\n\r\n.container3_1[_ngcontent-%COMP%]{\r\n  line-height: 2.5vw;\r\n  font-size: 2vw;\r\n  color: #707070;\r\n}\r\n\r\n#container3_2[_ngcontent-%COMP%] {\r\n  margin-top: 3.5vw;\r\n  margin-left: 3.5vw;\r\n}\r\n\r\n#container3_2_1[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n#circle3[_ngcontent-%COMP%] {\r\n  width: 4vw;\r\n  height: 4vw;\r\n  border-radius: 50%;\r\n  border-color: #707070;\r\n  background-color:#374F86;\r\n  text-align: center;\r\n  line-height: 4vw;\r\n  font-size: 2vw;\r\n  color: white;\r\n  border-style: solid;\r\n  border-width: 0.1vw;\r\n}\r\n\r\n#question3[_ngcontent-%COMP%] {\r\n  margin-top: 0.5vw;\r\n  padding-left: 0.5vw;\r\n  padding-right: 0.5vw;\r\n  text-align: center;\r\n  line-height: 3vw;\r\n  height: 3vw;\r\n  font-size: 1.75vw;\r\n  background-color: white;\r\n  color: #707070;\r\n  border-color: #707070;\r\n  border-radius: 5%;\r\n  border-style: solid;\r\n  border-width: 0.1vw;\r\n}\r\n\r\n#container3_2_2[_ngcontent-%COMP%] {\r\n  margin-left: 5vw;\r\n}\r\n\r\n#radio_button_container3[_ngcontent-%COMP%] {\r\n  margin-top: 1vw;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.option3[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.option_number3[_ngcontent-%COMP%] {\r\n  height: 5vw;\r\n  width: 3vw;\r\n  font-size: 2vw;\r\n  text-align: center;\r\n  line-height: 5vw;\r\n  margin-top: 1vw;\r\n  margin-right: 0%;\r\n  background-color: #374F86;\r\n  color: white;\r\n  border-style: solid;\r\n  border-width: 0.1vw;\r\n  border-color: #707070;\r\n}\r\n\r\n.option_content3[_ngcontent-%COMP%] {\r\n  height: 5vw;\r\n  width: 30vw;\r\n  font-size: 2vw;\r\n  padding-left: 1vw;\r\n  line-height: 5vw;\r\n  margin-left: 0%;\r\n  margin-top: 1vw;\r\n  background-color:#EDE1E1;\r\n  color:  #707070;\r\n  border-style: solid;\r\n  border-width: 0.1vw;\r\n  border-color: #707070;\r\n}\r\n\r\n\r\n\r\n#button_container3[_ngcontent-%COMP%] {\r\n  width: 80vw;\r\n  margin-top: 5vw;\r\n  margin-bottom: 5vw;\r\n  margin-left: 10vw;\r\n  margin-right: 10vw;\r\n  display: flex;\r\n  border: none;\r\n\r\n}\r\n\r\n#button3_1[_ngcontent-%COMP%] {\r\n  font-size: 2vw;\r\n  height: 5vw;\r\n  width: 10vw;\r\n  padding-top: 0;\r\n  margin: 0%;\r\n  background-color:#42A0D1;\r\n  border: none;\r\n}\r\n\r\n#button3_2[_ngcontent-%COMP%] {\r\n  margin: 0%;\r\n  width: 55vw;\r\n}\r\n\r\n#button3_3[_ngcontent-%COMP%] {\r\n  font-size: 2vw;\r\n  height: 5vw;\r\n  width: 10vw;\r\n  margin: 0%;\r\n  padding-top: 0;\r\n  background-color:#42A0D1;\r\n  border: none;\r\n}\r\n\r\n\r\n\r\n#step4_form[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 3vw;\r\n  left: 3vw;\r\n  width: 92vw;\r\n  height: 30vw;\r\n  background-color: #C4D9ED;\r\n\r\n}\r\n\r\n#container4[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n\r\n}\r\n\r\n#container4_1[_ngcontent-%COMP%] {\r\n  width: 30vw;\r\n  height: 20vw;\r\n  margin-top: 4vw;\r\n  margin-left: 5vw;\r\n  margin-right: 2vw;\r\n}\r\n\r\n.container4_1[_ngcontent-%COMP%]{\r\n  line-height: 2.5vw;\r\n  font-size: 2vw;\r\n  color: #707070;\r\n}\r\n\r\n#container4_2[_ngcontent-%COMP%] {\r\n  margin-top: 5.5vw;\r\n  margin-left: 2vw;\r\n}\r\n\r\n#container4_2_1[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin-left: 2vw;\r\n}\r\n\r\n#circle4[_ngcontent-%COMP%] {\r\n  width: 4vw;\r\n  height: 4vw;\r\n  border-radius: 50%;\r\n  border-color: #707070;\r\n  background-color:#374F86;\r\n  text-align: center;\r\n  line-height: 4vw;\r\n  font-size: 2vw;\r\n  color: white;\r\n  border-style: solid;\r\n  border-width: 0.1vw;\r\n}\r\n\r\n#question4[_ngcontent-%COMP%] {\r\n  margin-top: 0.5vw;\r\n  padding-left: 0.5vw;\r\n  padding-right: 0.5vw;\r\n  text-align: center;\r\n  line-height: 3vw;\r\n  height: 3vw;\r\n  font-size: 1.75vw;\r\n  background-color: white;\r\n  color: #707070;\r\n  border-color: #707070;\r\n  border-radius: 5%;\r\n  border-style: solid;\r\n  border-width: 0.1vw;\r\n}\r\n\r\n#container4_2_2[_ngcontent-%COMP%] {\r\n  margin-left: 5vw;\r\n}\r\n\r\n#radio_button_container4[_ngcontent-%COMP%] {\r\n  margin-top: 1vw;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.option4[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.option_number4[_ngcontent-%COMP%] {\r\n  height: 5vw;\r\n  width: 3vw;\r\n  font-size: 2vw;\r\n  text-align: center;\r\n  line-height: 5vw;\r\n  margin-top: 1vw;\r\n  margin-right: 0%;\r\n  background-color: #374F86;\r\n  color: white;\r\n  border-style: solid;\r\n  border-width: 0.1vw;\r\n  border-color: #707070;\r\n}\r\n\r\n.option_content4[_ngcontent-%COMP%] {\r\n  height: 5vw;\r\n  width: 30vw;\r\n  font-size: 2vw;\r\n  padding-left: 1vw;\r\n  line-height: 5vw;\r\n  margin-left: 0%;\r\n  margin-top: 1vw;\r\n  background-color:#EDE1E1;\r\n  color:  #707070;\r\n  border-style: solid;\r\n  border-width: 0.1vw;\r\n  border-color: #707070;\r\n}\r\n\r\n\r\n\r\n#button_container4[_ngcontent-%COMP%] {\r\n  width: 80vw;\r\n  margin-top: 5vw;\r\n  margin-bottom: 5vw;\r\n  margin-left: 10vw;\r\n  margin-right: 10vw;\r\n  display: flex;\r\n  border: none;\r\n\r\n}\r\n\r\n#button4_1[_ngcontent-%COMP%] {\r\n  font-size: 2vw;\r\n  height: 5vw;\r\n  width: 10vw;\r\n  padding-top: 0;\r\n  margin: 0%;\r\n  background-color:#42A0D1;\r\n  border: none;\r\n}\r\n\r\n#button4_2[_ngcontent-%COMP%] {\r\n  margin: 0%;\r\n  width: 55vw;\r\n}\r\n\r\n#button4_3[_ngcontent-%COMP%] {\r\n  font-size: 2vw;\r\n  height: 5vw;\r\n  width: 10vw;\r\n  margin: 0%;\r\n  padding-top: 0;\r\n  background-color:#42A0D1;\r\n  border: none;\r\n}\r\n\r\n\r\n\r\n#step5_form[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 3vw;\r\n  left: 3vw;\r\n  width: 92vw;\r\n  height: 30vw;\r\n  background-color: #C4D9ED;\r\n\r\n}\r\n\r\n#container5[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n\r\n}\r\n\r\n#container5_1[_ngcontent-%COMP%] {\r\n  width: 30vw;\r\n  height: 20vw;\r\n  margin-top: 2vw;\r\n  margin-left: 5vw;\r\n  margin-right: 2vw;\r\n}\r\n\r\n.container5_1[_ngcontent-%COMP%]{\r\n  line-height: 2vw;\r\n  font-size: 1.75vw;\r\n  color: #707070;\r\n}\r\n\r\n#container5_2[_ngcontent-%COMP%] {\r\n  margin-top: 3.5vw;\r\n  margin-left: 3.5vw;\r\n}\r\n\r\n#container5_2_1[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n#circle5[_ngcontent-%COMP%] {\r\n  width: 4vw;\r\n  height: 4vw;\r\n  border-radius: 50%;\r\n  border-color: #707070;\r\n  background-color:#374F86;\r\n  text-align: center;\r\n  line-height: 4vw;\r\n  font-size: 2vw;\r\n  color: white;\r\n  border-style: solid;\r\n  border-width: 0.1vw;\r\n}\r\n\r\n#question5[_ngcontent-%COMP%] {\r\n  margin-top: 0.5vw;\r\n  padding-left: 0.5vw;\r\n  padding-right: 0.5vw;\r\n  text-align: center;\r\n  line-height: 3vw;\r\n  height: 3vw;\r\n  font-size: 1.75vw;\r\n  background-color: white;\r\n  color: #707070;\r\n  border-color: #707070;\r\n  border-radius: 5%;\r\n  border-style: solid;\r\n  border-width: 0.1vw;\r\n}\r\n\r\n#container5_2_2[_ngcontent-%COMP%] {\r\n  margin-left: 5vw;\r\n}\r\n\r\n#radio_button_container5[_ngcontent-%COMP%] {\r\n  margin-top: 1vw;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.option5[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n.option_number5[_ngcontent-%COMP%] {\r\n  height: 5vw;\r\n  width: 3vw;\r\n  font-size: 2vw;\r\n  text-align: center;\r\n  line-height: 5vw;\r\n  margin-top: 1vw;\r\n  margin-right: 0%;\r\n  background-color: #374F86;\r\n  color: white;\r\n  border-style: solid;\r\n  border-width: 0.1vw;\r\n  border-color: #707070;\r\n}\r\n\r\n.option_content5[_ngcontent-%COMP%] {\r\n  height: 5vw;\r\n  width: 30vw;\r\n  font-size: 2vw;\r\n  padding-left: 1vw;\r\n  line-height: 5vw;\r\n  margin-left: 0%;\r\n  margin-top: 1vw;\r\n  background-color:#EDE1E1;\r\n  color:  #707070;\r\n  border-style: solid;\r\n  border-width: 0.1vw;\r\n  border-color: #707070;\r\n}\r\n\r\n\r\n\r\n#button_container5[_ngcontent-%COMP%] {\r\n  width: 80vw;\r\n  margin-top: 5vw;\r\n  margin-bottom: 5vw;\r\n  margin-left: 10vw;\r\n  margin-right: 10vw;\r\n  display: flex;\r\n  border: none;\r\n\r\n}\r\n\r\n#button5_1[_ngcontent-%COMP%] {\r\n  font-size: 2vw;\r\n  height: 5vw;\r\n  width: 10vw;\r\n  padding-top: 0;\r\n  margin: 0%;\r\n  background-color:#42A0D1;\r\n  border: none;\r\n}\r\n\r\n#button5_2[_ngcontent-%COMP%] {\r\n  margin: 0%;\r\n  width: 55vw;\r\n}\r\n\r\n#button5_3[_ngcontent-%COMP%] {\r\n  font-size: 2vw;\r\n  height: 5vw;\r\n  width: 10vw;\r\n  margin: 0%;\r\n  padding-top: 0;\r\n  background-color:#42A0D1;\r\n  border: none;\r\n}\r\n\r\n\r\n\r\n#step6_form[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 3vw;\r\n  left: 3vw;\r\n  width: 92vw;\r\n  height: 30vw;\r\n  background-color: #C4D9ED;\r\n\r\n}\r\n\r\n\r\n\r\n#button_container6[_ngcontent-%COMP%] {\r\n  width: 86vw;\r\n  margin-top: 5vw;\r\n  margin-bottom: 5vw;\r\n  margin-left: 7vw;\r\n  margin-right: 7vw;\r\n  display: flex;\r\n  border: none;\r\n\r\n\r\n}\r\n\r\n#container6_1[_ngcontent-%COMP%] {\r\n  margin-top: 2vw;\r\n  margin-left: 19vw;\r\n  margin-right: 19vw;\r\n  width: 56vw;\r\n  height: 6vw;\r\n  padding-left: 2vw;\r\n  background-color: white;\r\n  color:  #707070;\r\n  font-size: 2vw;\r\n  line-height: 6vw;\r\n  border-style: solid;\r\n  border-width: 0.1vw;\r\n  border-color: #707070;\r\n}\r\n\r\n#container6_2[_ngcontent-%COMP%] {\r\n  margin-top: 2vw;\r\n  margin-left: 19vw;\r\n  margin-right: 19vw;\r\n  padding-top: 1.5vw;\r\n  padding-bottom: 1.5vw;\r\n  width: 56vw;\r\n  padding-left: 2vw;\r\n  background-color:#EDE1E1;\r\n  color:  #707070;\r\n  font-size: 2vw;\r\n  line-height: 3vw;\r\n  border-style: solid;\r\n  border-width: 0.1vw;\r\n  border-color: #707070;\r\n}\r\n\r\n#button6_1[_ngcontent-%COMP%] {\r\n  font-size: 2vw;\r\n  height: 5vw;\r\n  width: 10vw;\r\n  padding-top: 0;\r\n  margin: 0%;\r\n  background-color:#42A0D1;\r\n  border: none;\r\n}\r\n\r\n#button6_2_container[_ngcontent-%COMP%] {\r\n  margin: 0%;\r\n  width: 55vw;\r\n  padding-left: 24vw;\r\n}\r\n\r\n#button6_2[_ngcontent-%COMP%] {\r\n\r\n  font-size: 2vw;\r\n  height: 5vw;\r\n  width: 9vw;\r\n  padding-top: 0;\r\n  margin: 0%;\r\n  background-color:#42A0D1;\r\n  border: none;\r\n}\r\n\r\n#button6_3_container[_ngcontent-%COMP%] {\r\n  margin: 0%;\r\n  padding-top: 0;\r\n\r\n}\r\n\r\n#button6_3[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-size: 2vw;\r\n  height: 5vw;\r\n  width: 16.5vw;\r\n  margin: 0%;\r\n  padding-top: 0;\r\n  background-color:#1AC3C3;\r\n  border: none;\r\n}\r\n\r\n\r\n\r\n#footer[_ngcontent-%COMP%] {\r\n  width: 100vw;\r\n  display: flex;\r\n  margin-top: 5vw;\r\n}\r\n\r\n#footer_img[_ngcontent-%COMP%] {\r\n  margin-left: 1vw;\r\n  height: 8.68vw;\r\n  width: 8.68vw;\r\n  border: none;\r\n\r\n}\r\n\r\n#footer2[_ngcontent-%COMP%] {\r\n  width: 30vw;\r\n  margin-left: 27vw;\r\n}\r\n\r\n#footer2_1[_ngcontent-%COMP%]{\r\n  margin-left: 2.78vw;\r\n  margin-top: 4.86vw;\r\n  font-size: 1.39vw;\r\n  color: #374F86;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlzY3JpcHQvbXlzY3JpcHQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7O0FBRWpCO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxtQ0FBbUM7RUFDbkMsc0NBQXNDO0VBQ3RDLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLFFBQVE7RUFDUixTQUFTO0VBQ1QsbUNBQW1DO0VBQ25DLHNDQUFzQztFQUN0Qyw4QkFBOEI7QUFDaEM7O0FBR0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUEsbUJBQW1COztBQUNuQjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCOztBQUUzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7O0FBRXJCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUdBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFHQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQSxpQkFBaUI7O0FBSWpCO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztFQUNkLHdCQUF3QjtBQUMxQjs7QUFHQSxvQkFBb0I7O0FBRXBCO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7O0FBRTNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjs7QUFFckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFLQSxpQkFBaUI7O0FBQ2pCO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTs7QUFFZDs7QUFHQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7RUFDZCxVQUFVO0VBQ1Ysd0JBQXdCO0VBQ3hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFdBQVc7RUFDWCxVQUFVO0VBQ1YsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixZQUFZO0FBQ2Q7O0FBSUEsbUJBQW1COztBQUVuQjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCOztBQUUzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7O0FBRXJCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQSxpQkFBaUI7O0FBQ2pCO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTs7QUFFZDs7QUFJQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7RUFDZCxVQUFVO0VBQ1Ysd0JBQXdCO0VBQ3hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFdBQVc7RUFDWCxVQUFVO0VBQ1YsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixZQUFZO0FBQ2Q7O0FBRUEsb0JBQW9COztBQUVwQjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCOztBQUUzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7O0FBRXJCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUEsaUJBQWlCOztBQUNqQjtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7O0FBRWQ7O0FBSUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjO0VBQ2QsVUFBVTtFQUNWLHdCQUF3QjtFQUN4QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxXQUFXO0VBQ1gsVUFBVTtFQUNWLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsWUFBWTtBQUNkOztBQUVBLG1CQUFtQjs7QUFFbkI7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5Qjs7QUFFM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1COztBQUVyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUEsaUJBQWlCOztBQUNqQjtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7O0FBRWQ7O0FBSUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFdBQVc7RUFDWCxjQUFjO0VBQ2QsVUFBVTtFQUNWLHdCQUF3QjtFQUN4QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxXQUFXO0VBQ1gsVUFBVTtFQUNWLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsWUFBWTtBQUNkOztBQUtBLGtCQUFrQjs7QUFDbEI7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5Qjs7QUFFM0I7O0FBR0EsaUJBQWlCOztBQUVqQjtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLFlBQVk7OztBQUdkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7RUFDZCxVQUFVO0VBQ1Ysd0JBQXdCO0VBQ3hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsVUFBVTtFQUNWLGNBQWM7RUFDZCxVQUFVO0VBQ1Ysd0JBQXdCO0VBQ3hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjOztBQUVoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYLGFBQWE7RUFDYixVQUFVO0VBQ1YsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixZQUFZO0FBQ2Q7O0FBSUEsV0FBVzs7QUFFWDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsYUFBYTtFQUNiLFlBQVk7O0FBRWQ7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL215c2NyaXB0L215c2NyaXB0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNYWRlIGJ5IEVuZHkgKi9cclxuXHJcbi5ibG9ja3RleHQge1xyXG4gIHdpZHRoOiAxMDB2dztcclxufVxyXG5cclxuI3N0ZXAge1xyXG4gIGZvbnQtc2l6ZTogMS41dnc7XHJcbiAgY29sb3I6ICM3MDcwNzA7XHJcbn1cclxuXHJcbi5zdGVwX2Zvcm0ge1xyXG4gIG1hcmdpbi10b3A6IDN2dztcclxuICBtYXJnaW4tbGVmdDogNHZ3O1xyXG4gIHdpZHRoOiA5MnZ3O1xyXG4gIGhlaWdodDogMzB2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzREOUVEO1xyXG59XHJcblxyXG4udHJpYW5nbGUtbGVmdCB7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIGJvcmRlci10b3A6IDIuNXZ3IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b206IDIuNXZ3IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yaWdodDogNXZ3IHNvbGlkICM0MkEwRDE7XHJcbn1cclxuXHJcbi50cmlhbmdsZS1yaWdodCB7XHJcbiAgd2lkdGg6IDA7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIGJvcmRlci10b3A6IDIuNXZ3IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b206IDIuNXZ3IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1sZWZ0OiA1dncgc29saWQgIzQyQTBEMTtcclxufVxyXG5cclxuXHJcbmlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi8qIFRoZSBmaXJzdCBzdGVwICovXHJcbiNzdGVwMV9mb3JtIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzdnc7XHJcbiAgbGVmdDogM3Z3O1xyXG4gIHdpZHRoOiA5MnZ3O1xyXG4gIGhlaWdodDogMzB2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzREOUVEO1xyXG5cclxufVxyXG5cclxuI2NvbnRhaW5lcjEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbn1cclxuXHJcbiNjb250YWluZXIxXzEge1xyXG4gIGZvbnQtc2l6ZTogMnZ3O1xyXG4gIGxpbmUtaGVpZ2h0OiAyLjV2dztcclxuICBjb2xvcjogIzcwNzA3MDtcclxuICB3aWR0aDogMzB2dztcclxuICBoZWlnaHQ6IDIwdnc7XHJcbiAgbWFyZ2luLXRvcDogOHZ3O1xyXG4gIG1hcmdpbi1sZWZ0OiA1dnc7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0dnc7XHJcbn1cclxuXHJcbiNjb250YWluZXIxXzIge1xyXG4gIG1hcmdpbi1sZWZ0OiAxLjV2dztcclxuICBtYXJnaW4tdG9wOiAzLjV2dztcclxufVxyXG5cclxuI2NvbnRhaW5lcjFfMl8xIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4jY2lyY2xlMSB7XHJcbiAgd2lkdGg6IDR2dztcclxuICBoZWlnaHQ6IDR2dztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMzc0Rjg2O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogNHZ3O1xyXG4gIGZvbnQtc2l6ZTogMnZ3O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMC4xdnc7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNzA3MDcwO1xyXG59XHJcblxyXG4jcXVlc3Rpb24xIHtcclxuICBtYXJnaW4tdG9wOiAwLjV2dztcclxuICBwYWRkaW5nLWxlZnQ6IDAuNXZ3O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXZ3O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogM3Z3O1xyXG4gIGhlaWdodDogM3Z3O1xyXG4gIGZvbnQtc2l6ZTogMnZ3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiAjNzA3MDcwO1xyXG4gIGJvcmRlci1jb2xvcjogIzcwNzA3MDtcclxuICBib3JkZXItcmFkaXVzOiA1JTtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMC4xdnc7XHJcbn1cclxuXHJcbiNjb250YWluZXIxXzJfMiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDZ2dztcclxufVxyXG5cclxuXHJcbiNpbWFnZXNfY29udGFpbmVyMXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgbWFyZ2luLXRvcDogMS41dnc7XHJcbn1cclxuXHJcbiNpbWFnZXNfY29udGFpbmVyMV8ye1xyXG4gIG1hcmdpbi1sZWZ0OiA2dnc7XHJcbn1cclxuXHJcbiNyYWRpb19idXR0b25fY29udGFpbmVyMXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgbWFyZ2luLXRvcDogMS4yNXZ3O1xyXG59XHJcblxyXG4jcmFkaW9fYnV0dG9uX2NvbnRhaW5lcjFfMSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuNXZ3O1xyXG59XHJcblxyXG5cclxuI3JhZGlvX2J1dHRvbl9jb250YWluZXIxXzJ7XHJcbiAgbWFyZ2luLWxlZnQ6IDd2dztcclxufVxyXG4vKiBzdGVwMSBidXR0b24gKi9cclxuXHJcblxyXG5cclxuI2J1dHRvbjEge1xyXG4gIG1hcmdpbi10b3A6IDV2dztcclxuICBtYXJnaW4tbGVmdDogNDV2dztcclxuICBtYXJnaW4tcmlnaHQ6IDQ1dnc7XHJcbiAgZm9udC1zaXplOiAydnc7XHJcbiAgaGVpZ2h0OiA1dnc7XHJcbiAgd2lkdGg6IDEwdnc7XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojNDJBMEQxO1xyXG59XHJcblxyXG5cclxuLyogVGhlIHNlY29uZCBzdGVwICovXHJcblxyXG4jc3RlcDJfZm9ybSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogM3Z3O1xyXG4gIGxlZnQ6IDN2dztcclxuICB3aWR0aDogOTJ2dztcclxuICBoZWlnaHQ6IDMwdnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0M0RDlFRDtcclxuXHJcbn1cclxuXHJcbiNjb250YWluZXIyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG59XHJcblxyXG4jY29udGFpbmVyMl8xIHtcclxuICBmb250LXNpemU6IDEuOHZ3O1xyXG4gIGNvbG9yOiAjNzA3MDcwO1xyXG4gIHdpZHRoOiAzMHZ3O1xyXG4gIGhlaWdodDogMjB2dztcclxuICBtYXJnaW4tdG9wOiA1dnc7XHJcbiAgbWFyZ2luLWxlZnQ6IDV2dztcclxuICBtYXJnaW4tcmlnaHQ6IDJ2dztcclxuICBsaW5lLWhlaWdodDogMi41dnc7XHJcbn1cclxuXHJcbiNjb250YWluZXIyXzIge1xyXG4gIG1hcmdpbi10b3A6IDMuNXZ3O1xyXG59XHJcblxyXG4jY29udGFpbmVyMl8yXzEge1xyXG4gIG1hcmdpbi1sZWZ0OiAydnc7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuI2NpcmNsZTIge1xyXG4gIHdpZHRoOiA0dnc7XHJcbiAgaGVpZ2h0OiA0dnc7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci1jb2xvcjogIzcwNzA3MDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMzNzRGODY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiA0dnc7XHJcbiAgZm9udC1zaXplOiAydnc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAwLjF2dztcclxufVxyXG5cclxuI3F1ZXN0aW9uMiB7XHJcbiAgd2lkdGg6IDQ1dnc7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiA0dnc7XHJcbiAgaGVpZ2h0OiA0dnc7XHJcbiAgZm9udC1zaXplOiAydnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6ICM3MDcwNzA7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNzA3MDcwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAwLjF2dztcclxufVxyXG5cclxuI2NvbnRhaW5lcjJfMl8yIHtcclxuICBtYXJnaW4tbGVmdDogNi41dnc7XHJcbn1cclxuXHJcbiNyYWRpb19idXR0b25fY29udGFpbmVyMiB7XHJcbiAgbWFyZ2luLXRvcDogMXZ3O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLm9wdGlvbjIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuLm9wdGlvbl9udW1iZXIyIHtcclxuICBoZWlnaHQ6IDZ2dztcclxuICB3aWR0aDogM3Z3O1xyXG4gIGZvbnQtc2l6ZTogMi41dnc7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiA2dnc7XHJcbiAgbWFyZ2luLXRvcDogMXZ3O1xyXG4gIG1hcmdpbi1yaWdodDogMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3NEY4NjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDAuMXZ3O1xyXG4gIGJvcmRlci1jb2xvcjogIzcwNzA3MDtcclxufVxyXG5cclxuLm9wdGlvbl9jb250ZW50MiB7XHJcbiAgaGVpZ2h0OiA2dnc7XHJcbiAgd2lkdGg6IDMwdnc7XHJcbiAgZm9udC1zaXplOiAydnc7XHJcbiAgcGFkZGluZy1sZWZ0OiAxdnc7XHJcbiAgbGluZS1oZWlnaHQ6IDZ2dztcclxuICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgbWFyZ2luLXRvcDogMXZ3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6I0VERTFFMTtcclxuICBjb2xvcjogICM3MDcwNzA7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDAuMXZ3O1xyXG4gIGJvcmRlci1jb2xvcjogIzcwNzA3MDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLyogc3RlcDIgYnV0dG9uICovXHJcbiNidXR0b25fY29udGFpbmVyMiB7XHJcbiAgd2lkdGg6IDgwdnc7XHJcbiAgbWFyZ2luLXRvcDogNXZ3O1xyXG4gIG1hcmdpbi1ib3R0b206IDV2dztcclxuICBtYXJnaW4tbGVmdDogMTB2dztcclxuICBtYXJnaW4tcmlnaHQ6IDEwdnc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXI6IG5vbmU7XHJcblxyXG59XHJcblxyXG5cclxuI2J1dHRvbjJfMSB7XHJcbiAgZm9udC1zaXplOiAydnc7XHJcbiAgaGVpZ2h0OiA1dnc7XHJcbiAgd2lkdGg6IDEwdnc7XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbiAgbWFyZ2luOiAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiM0MkEwRDE7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4jYnV0dG9uMl8yIHtcclxuICBtYXJnaW46IDAlO1xyXG4gIHdpZHRoOiA1NXZ3O1xyXG59XHJcblxyXG4jYnV0dG9uMl8zIHtcclxuICBmb250LXNpemU6IDJ2dztcclxuICBoZWlnaHQ6IDV2dztcclxuICB3aWR0aDogMTB2dztcclxuICBtYXJnaW46IDAlO1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzQyQTBEMTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcblxyXG5cclxuLyogVGhlIHRoaXJkIHN0ZXAgKi9cclxuXHJcbiNzdGVwM19mb3JtIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzdnc7XHJcbiAgbGVmdDogM3Z3O1xyXG4gIHdpZHRoOiA5MnZ3O1xyXG4gIGhlaWdodDogMzB2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzREOUVEO1xyXG5cclxufVxyXG5cclxuI2NvbnRhaW5lcjMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbn1cclxuXHJcbiNjb250YWluZXIzXzEge1xyXG4gIHdpZHRoOiAzMHZ3O1xyXG4gIGhlaWdodDogMjB2dztcclxuICBtYXJnaW4tdG9wOiA0dnc7XHJcbiAgbWFyZ2luLWxlZnQ6IDV2dztcclxuICBtYXJnaW4tcmlnaHQ6IDJ2dztcclxufVxyXG5cclxuLmNvbnRhaW5lcjNfMXtcclxuICBsaW5lLWhlaWdodDogMi41dnc7XHJcbiAgZm9udC1zaXplOiAydnc7XHJcbiAgY29sb3I6ICM3MDcwNzA7XHJcbn1cclxuXHJcbiNjb250YWluZXIzXzIge1xyXG4gIG1hcmdpbi10b3A6IDMuNXZ3O1xyXG4gIG1hcmdpbi1sZWZ0OiAzLjV2dztcclxufVxyXG5cclxuI2NvbnRhaW5lcjNfMl8xIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4jY2lyY2xlMyB7XHJcbiAgd2lkdGg6IDR2dztcclxuICBoZWlnaHQ6IDR2dztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNzA3MDcwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzM3NEY4NjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDR2dztcclxuICBmb250LXNpemU6IDJ2dztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDAuMXZ3O1xyXG59XHJcblxyXG4jcXVlc3Rpb24zIHtcclxuICBtYXJnaW4tdG9wOiAwLjV2dztcclxuICBwYWRkaW5nLWxlZnQ6IDAuNXZ3O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXZ3O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogM3Z3O1xyXG4gIGhlaWdodDogM3Z3O1xyXG4gIGZvbnQtc2l6ZTogMS43NXZ3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiAjNzA3MDcwO1xyXG4gIGJvcmRlci1jb2xvcjogIzcwNzA3MDtcclxuICBib3JkZXItcmFkaXVzOiA1JTtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMC4xdnc7XHJcbn1cclxuXHJcbiNjb250YWluZXIzXzJfMiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDV2dztcclxufVxyXG5cclxuI3JhZGlvX2J1dHRvbl9jb250YWluZXIzIHtcclxuICBtYXJnaW4tdG9wOiAxdnc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ub3B0aW9uMyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4ub3B0aW9uX251bWJlcjMge1xyXG4gIGhlaWdodDogNXZ3O1xyXG4gIHdpZHRoOiAzdnc7XHJcbiAgZm9udC1zaXplOiAydnc7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiA1dnc7XHJcbiAgbWFyZ2luLXRvcDogMXZ3O1xyXG4gIG1hcmdpbi1yaWdodDogMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3NEY4NjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDAuMXZ3O1xyXG4gIGJvcmRlci1jb2xvcjogIzcwNzA3MDtcclxufVxyXG5cclxuLm9wdGlvbl9jb250ZW50MyB7XHJcbiAgaGVpZ2h0OiA1dnc7XHJcbiAgd2lkdGg6IDMwdnc7XHJcbiAgZm9udC1zaXplOiAydnc7XHJcbiAgcGFkZGluZy1sZWZ0OiAxdnc7XHJcbiAgbGluZS1oZWlnaHQ6IDV2dztcclxuICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgbWFyZ2luLXRvcDogMXZ3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6I0VERTFFMTtcclxuICBjb2xvcjogICM3MDcwNzA7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDAuMXZ3O1xyXG4gIGJvcmRlci1jb2xvcjogIzcwNzA3MDtcclxufVxyXG5cclxuLyogc3RlcDMgYnV0dG9uICovXHJcbiNidXR0b25fY29udGFpbmVyMyB7XHJcbiAgd2lkdGg6IDgwdnc7XHJcbiAgbWFyZ2luLXRvcDogNXZ3O1xyXG4gIG1hcmdpbi1ib3R0b206IDV2dztcclxuICBtYXJnaW4tbGVmdDogMTB2dztcclxuICBtYXJnaW4tcmlnaHQ6IDEwdnc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXI6IG5vbmU7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbiNidXR0b24zXzEge1xyXG4gIGZvbnQtc2l6ZTogMnZ3O1xyXG4gIGhlaWdodDogNXZ3O1xyXG4gIHdpZHRoOiAxMHZ3O1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG4gIG1hcmdpbjogMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojNDJBMEQxO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuI2J1dHRvbjNfMiB7XHJcbiAgbWFyZ2luOiAwJTtcclxuICB3aWR0aDogNTV2dztcclxufVxyXG5cclxuI2J1dHRvbjNfMyB7XHJcbiAgZm9udC1zaXplOiAydnc7XHJcbiAgaGVpZ2h0OiA1dnc7XHJcbiAgd2lkdGg6IDEwdnc7XHJcbiAgbWFyZ2luOiAwJTtcclxuICBwYWRkaW5nLXRvcDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiM0MkEwRDE7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4vKiBUaGUgZm91cnRoIHN0ZXAgKi9cclxuXHJcbiNzdGVwNF9mb3JtIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzdnc7XHJcbiAgbGVmdDogM3Z3O1xyXG4gIHdpZHRoOiA5MnZ3O1xyXG4gIGhlaWdodDogMzB2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzREOUVEO1xyXG5cclxufVxyXG5cclxuI2NvbnRhaW5lcjQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbn1cclxuXHJcbiNjb250YWluZXI0XzEge1xyXG4gIHdpZHRoOiAzMHZ3O1xyXG4gIGhlaWdodDogMjB2dztcclxuICBtYXJnaW4tdG9wOiA0dnc7XHJcbiAgbWFyZ2luLWxlZnQ6IDV2dztcclxuICBtYXJnaW4tcmlnaHQ6IDJ2dztcclxufVxyXG5cclxuLmNvbnRhaW5lcjRfMXtcclxuICBsaW5lLWhlaWdodDogMi41dnc7XHJcbiAgZm9udC1zaXplOiAydnc7XHJcbiAgY29sb3I6ICM3MDcwNzA7XHJcbn1cclxuXHJcbiNjb250YWluZXI0XzIge1xyXG4gIG1hcmdpbi10b3A6IDUuNXZ3O1xyXG4gIG1hcmdpbi1sZWZ0OiAydnc7XHJcbn1cclxuXHJcbiNjb250YWluZXI0XzJfMSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tbGVmdDogMnZ3O1xyXG59XHJcblxyXG4jY2lyY2xlNCB7XHJcbiAgd2lkdGg6IDR2dztcclxuICBoZWlnaHQ6IDR2dztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNzA3MDcwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzM3NEY4NjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDR2dztcclxuICBmb250LXNpemU6IDJ2dztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDAuMXZ3O1xyXG59XHJcblxyXG4jcXVlc3Rpb240IHtcclxuICBtYXJnaW4tdG9wOiAwLjV2dztcclxuICBwYWRkaW5nLWxlZnQ6IDAuNXZ3O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXZ3O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogM3Z3O1xyXG4gIGhlaWdodDogM3Z3O1xyXG4gIGZvbnQtc2l6ZTogMS43NXZ3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiAjNzA3MDcwO1xyXG4gIGJvcmRlci1jb2xvcjogIzcwNzA3MDtcclxuICBib3JkZXItcmFkaXVzOiA1JTtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMC4xdnc7XHJcbn1cclxuXHJcbiNjb250YWluZXI0XzJfMiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDV2dztcclxufVxyXG5cclxuI3JhZGlvX2J1dHRvbl9jb250YWluZXI0IHtcclxuICBtYXJnaW4tdG9wOiAxdnc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ub3B0aW9uNCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4ub3B0aW9uX251bWJlcjQge1xyXG4gIGhlaWdodDogNXZ3O1xyXG4gIHdpZHRoOiAzdnc7XHJcbiAgZm9udC1zaXplOiAydnc7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiA1dnc7XHJcbiAgbWFyZ2luLXRvcDogMXZ3O1xyXG4gIG1hcmdpbi1yaWdodDogMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3NEY4NjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDAuMXZ3O1xyXG4gIGJvcmRlci1jb2xvcjogIzcwNzA3MDtcclxufVxyXG5cclxuLm9wdGlvbl9jb250ZW50NCB7XHJcbiAgaGVpZ2h0OiA1dnc7XHJcbiAgd2lkdGg6IDMwdnc7XHJcbiAgZm9udC1zaXplOiAydnc7XHJcbiAgcGFkZGluZy1sZWZ0OiAxdnc7XHJcbiAgbGluZS1oZWlnaHQ6IDV2dztcclxuICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgbWFyZ2luLXRvcDogMXZ3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6I0VERTFFMTtcclxuICBjb2xvcjogICM3MDcwNzA7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDAuMXZ3O1xyXG4gIGJvcmRlci1jb2xvcjogIzcwNzA3MDtcclxufVxyXG5cclxuLyogc3RlcDQgYnV0dG9uICovXHJcbiNidXR0b25fY29udGFpbmVyNCB7XHJcbiAgd2lkdGg6IDgwdnc7XHJcbiAgbWFyZ2luLXRvcDogNXZ3O1xyXG4gIG1hcmdpbi1ib3R0b206IDV2dztcclxuICBtYXJnaW4tbGVmdDogMTB2dztcclxuICBtYXJnaW4tcmlnaHQ6IDEwdnc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXI6IG5vbmU7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbiNidXR0b240XzEge1xyXG4gIGZvbnQtc2l6ZTogMnZ3O1xyXG4gIGhlaWdodDogNXZ3O1xyXG4gIHdpZHRoOiAxMHZ3O1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG4gIG1hcmdpbjogMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojNDJBMEQxO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuI2J1dHRvbjRfMiB7XHJcbiAgbWFyZ2luOiAwJTtcclxuICB3aWR0aDogNTV2dztcclxufVxyXG5cclxuI2J1dHRvbjRfMyB7XHJcbiAgZm9udC1zaXplOiAydnc7XHJcbiAgaGVpZ2h0OiA1dnc7XHJcbiAgd2lkdGg6IDEwdnc7XHJcbiAgbWFyZ2luOiAwJTtcclxuICBwYWRkaW5nLXRvcDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiM0MkEwRDE7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4vKiBUaGUgZmlmdGggc3RlcCAqL1xyXG5cclxuI3N0ZXA1X2Zvcm0ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDN2dztcclxuICBsZWZ0OiAzdnc7XHJcbiAgd2lkdGg6IDkydnc7XHJcbiAgaGVpZ2h0OiAzMHZ3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNDNEQ5RUQ7XHJcblxyXG59XHJcblxyXG4jY29udGFpbmVyNSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxufVxyXG5cclxuI2NvbnRhaW5lcjVfMSB7XHJcbiAgd2lkdGg6IDMwdnc7XHJcbiAgaGVpZ2h0OiAyMHZ3O1xyXG4gIG1hcmdpbi10b3A6IDJ2dztcclxuICBtYXJnaW4tbGVmdDogNXZ3O1xyXG4gIG1hcmdpbi1yaWdodDogMnZ3O1xyXG59XHJcblxyXG4uY29udGFpbmVyNV8xe1xyXG4gIGxpbmUtaGVpZ2h0OiAydnc7XHJcbiAgZm9udC1zaXplOiAxLjc1dnc7XHJcbiAgY29sb3I6ICM3MDcwNzA7XHJcbn1cclxuXHJcbiNjb250YWluZXI1XzIge1xyXG4gIG1hcmdpbi10b3A6IDMuNXZ3O1xyXG4gIG1hcmdpbi1sZWZ0OiAzLjV2dztcclxufVxyXG5cclxuI2NvbnRhaW5lcjVfMl8xIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4jY2lyY2xlNSB7XHJcbiAgd2lkdGg6IDR2dztcclxuICBoZWlnaHQ6IDR2dztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNzA3MDcwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzM3NEY4NjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDR2dztcclxuICBmb250LXNpemU6IDJ2dztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDAuMXZ3O1xyXG59XHJcblxyXG4jcXVlc3Rpb241IHtcclxuICBtYXJnaW4tdG9wOiAwLjV2dztcclxuICBwYWRkaW5nLWxlZnQ6IDAuNXZ3O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDAuNXZ3O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogM3Z3O1xyXG4gIGhlaWdodDogM3Z3O1xyXG4gIGZvbnQtc2l6ZTogMS43NXZ3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiAjNzA3MDcwO1xyXG4gIGJvcmRlci1jb2xvcjogIzcwNzA3MDtcclxuICBib3JkZXItcmFkaXVzOiA1JTtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMC4xdnc7XHJcbn1cclxuXHJcbiNjb250YWluZXI1XzJfMiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDV2dztcclxufVxyXG5cclxuI3JhZGlvX2J1dHRvbl9jb250YWluZXI1IHtcclxuICBtYXJnaW4tdG9wOiAxdnc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ub3B0aW9uNSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcblxyXG4ub3B0aW9uX251bWJlcjUge1xyXG4gIGhlaWdodDogNXZ3O1xyXG4gIHdpZHRoOiAzdnc7XHJcbiAgZm9udC1zaXplOiAydnc7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiA1dnc7XHJcbiAgbWFyZ2luLXRvcDogMXZ3O1xyXG4gIG1hcmdpbi1yaWdodDogMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3NEY4NjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDAuMXZ3O1xyXG4gIGJvcmRlci1jb2xvcjogIzcwNzA3MDtcclxufVxyXG5cclxuLm9wdGlvbl9jb250ZW50NSB7XHJcbiAgaGVpZ2h0OiA1dnc7XHJcbiAgd2lkdGg6IDMwdnc7XHJcbiAgZm9udC1zaXplOiAydnc7XHJcbiAgcGFkZGluZy1sZWZ0OiAxdnc7XHJcbiAgbGluZS1oZWlnaHQ6IDV2dztcclxuICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgbWFyZ2luLXRvcDogMXZ3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6I0VERTFFMTtcclxuICBjb2xvcjogICM3MDcwNzA7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDAuMXZ3O1xyXG4gIGJvcmRlci1jb2xvcjogIzcwNzA3MDtcclxufVxyXG5cclxuLyogc3RlcDUgYnV0dG9uICovXHJcbiNidXR0b25fY29udGFpbmVyNSB7XHJcbiAgd2lkdGg6IDgwdnc7XHJcbiAgbWFyZ2luLXRvcDogNXZ3O1xyXG4gIG1hcmdpbi1ib3R0b206IDV2dztcclxuICBtYXJnaW4tbGVmdDogMTB2dztcclxuICBtYXJnaW4tcmlnaHQ6IDEwdnc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXI6IG5vbmU7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbiNidXR0b241XzEge1xyXG4gIGZvbnQtc2l6ZTogMnZ3O1xyXG4gIGhlaWdodDogNXZ3O1xyXG4gIHdpZHRoOiAxMHZ3O1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG4gIG1hcmdpbjogMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojNDJBMEQxO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuI2J1dHRvbjVfMiB7XHJcbiAgbWFyZ2luOiAwJTtcclxuICB3aWR0aDogNTV2dztcclxufVxyXG5cclxuI2J1dHRvbjVfMyB7XHJcbiAgZm9udC1zaXplOiAydnc7XHJcbiAgaGVpZ2h0OiA1dnc7XHJcbiAgd2lkdGg6IDEwdnc7XHJcbiAgbWFyZ2luOiAwJTtcclxuICBwYWRkaW5nLXRvcDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiM0MkEwRDE7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4vKiBUaGUgbGFzdCBzdGVwICovXHJcbiNzdGVwNl9mb3JtIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzdnc7XHJcbiAgbGVmdDogM3Z3O1xyXG4gIHdpZHRoOiA5MnZ3O1xyXG4gIGhlaWdodDogMzB2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzREOUVEO1xyXG5cclxufVxyXG5cclxuXHJcbi8qIHN0ZXA2IGJ1dHRvbiAqL1xyXG5cclxuI2J1dHRvbl9jb250YWluZXI2IHtcclxuICB3aWR0aDogODZ2dztcclxuICBtYXJnaW4tdG9wOiA1dnc7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXZ3O1xyXG4gIG1hcmdpbi1sZWZ0OiA3dnc7XHJcbiAgbWFyZ2luLXJpZ2h0OiA3dnc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXI6IG5vbmU7XHJcblxyXG5cclxufVxyXG5cclxuI2NvbnRhaW5lcjZfMSB7XHJcbiAgbWFyZ2luLXRvcDogMnZ3O1xyXG4gIG1hcmdpbi1sZWZ0OiAxOXZ3O1xyXG4gIG1hcmdpbi1yaWdodDogMTl2dztcclxuICB3aWR0aDogNTZ2dztcclxuICBoZWlnaHQ6IDZ2dztcclxuICBwYWRkaW5nLWxlZnQ6IDJ2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogICM3MDcwNzA7XHJcbiAgZm9udC1zaXplOiAydnc7XHJcbiAgbGluZS1oZWlnaHQ6IDZ2dztcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMC4xdnc7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNzA3MDcwO1xyXG59XHJcblxyXG4jY29udGFpbmVyNl8yIHtcclxuICBtYXJnaW4tdG9wOiAydnc7XHJcbiAgbWFyZ2luLWxlZnQ6IDE5dnc7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxOXZ3O1xyXG4gIHBhZGRpbmctdG9wOiAxLjV2dztcclxuICBwYWRkaW5nLWJvdHRvbTogMS41dnc7XHJcbiAgd2lkdGg6IDU2dnc7XHJcbiAgcGFkZGluZy1sZWZ0OiAydnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojRURFMUUxO1xyXG4gIGNvbG9yOiAgIzcwNzA3MDtcclxuICBmb250LXNpemU6IDJ2dztcclxuICBsaW5lLWhlaWdodDogM3Z3O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAwLjF2dztcclxuICBib3JkZXItY29sb3I6ICM3MDcwNzA7XHJcbn1cclxuXHJcbiNidXR0b242XzEge1xyXG4gIGZvbnQtc2l6ZTogMnZ3O1xyXG4gIGhlaWdodDogNXZ3O1xyXG4gIHdpZHRoOiAxMHZ3O1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG4gIG1hcmdpbjogMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojNDJBMEQxO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuI2J1dHRvbjZfMl9jb250YWluZXIge1xyXG4gIG1hcmdpbjogMCU7XHJcbiAgd2lkdGg6IDU1dnc7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNHZ3O1xyXG59XHJcblxyXG4jYnV0dG9uNl8yIHtcclxuXHJcbiAgZm9udC1zaXplOiAydnc7XHJcbiAgaGVpZ2h0OiA1dnc7XHJcbiAgd2lkdGg6IDl2dztcclxuICBwYWRkaW5nLXRvcDogMDtcclxuICBtYXJnaW46IDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzQyQTBEMTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbiNidXR0b242XzNfY29udGFpbmVyIHtcclxuICBtYXJnaW46IDAlO1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG5cclxufVxyXG5cclxuI2J1dHRvbjZfMyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMnZ3O1xyXG4gIGhlaWdodDogNXZ3O1xyXG4gIHdpZHRoOiAxNi41dnc7XHJcbiAgbWFyZ2luOiAwJTtcclxuICBwYWRkaW5nLXRvcDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMxQUMzQzM7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG5cclxuXHJcbi8qIGZvb3RlciAqL1xyXG5cclxuI2Zvb3RlciB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLXRvcDogNXZ3O1xyXG59XHJcblxyXG5cclxuI2Zvb3Rlcl9pbWcge1xyXG4gIG1hcmdpbi1sZWZ0OiAxdnc7XHJcbiAgaGVpZ2h0OiA4LjY4dnc7XHJcbiAgd2lkdGg6IDguNjh2dztcclxuICBib3JkZXI6IG5vbmU7XHJcblxyXG59XHJcblxyXG4jZm9vdGVyMiB7XHJcbiAgd2lkdGg6IDMwdnc7XHJcbiAgbWFyZ2luLWxlZnQ6IDI3dnc7XHJcbn1cclxuXHJcbiNmb290ZXIyXzF7XHJcbiAgbWFyZ2luLWxlZnQ6IDIuNzh2dztcclxuICBtYXJnaW4tdG9wOiA0Ljg2dnc7XHJcbiAgZm9udC1zaXplOiAxLjM5dnc7XHJcbiAgY29sb3I6ICMzNzRGODY7XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyscriptComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-myscript',
            templateUrl: './myscript.component.html',
            styleUrls: ['./myscript.component.css']
          }]
        }], function () {
          return [{
            type: _scripts_service__WEBPACK_IMPORTED_MODULE_2__["ScriptsService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "fECr":
    /*!********************************************!*\
      !*** ./src/app/header/header.component.ts ***!
      \********************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function fECr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../auth/auth.service */
      "qXBG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      function HeaderComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "|");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Signup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HeaderComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Create Script");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "|");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "My Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "|");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_7_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.onLogout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(authservice) {
          _classCallCheck(this, HeaderComponent);

          this.authservice = authservice;
          this.userIsAuthenticated = false;
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.userIsAuthenticated = this.authservice.getIsAuth();
            this.authListenerSubs = this.authservice.getAuthStatusListener().subscribe(function (isAuthenticated) {
              _this7.userIsAuthenticated = isAuthenticated;
            });
          }
        }, {
          key: "onLogout",
          value: function onLogout() {
            this.authservice.logout();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.authListenerSubs.unsubscribe();
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 8,
        vars: 2,
        consts: [["id", "div_container"], ["id", "div_container2"], ["id", "div_container2_1"], ["id", "div_container3"], ["id", "div_container4"], ["id", "div_container4_2", 4, "ngIf"], ["id", "div_container4_3", 4, "ngIf"], ["id", "div_container4_2"], ["id", "div_container4_2_1"], ["mat-button", "", "routerLink", "/auth/login", "routerLinkActive", "mat-accent"], ["id", "div_container4_2_2"], ["id", "div_container4_2_3"], ["mat-button", "", "routerLink", "/auth/signup", "routerLinkActive", "mat-accent"], ["id", "div_container4_3"], ["id", "div_container4_3_1"], ["mat-button", "", "routerLink", "/script", "routerLinkActive", "mat-accent"], ["id", "div_container4_3_2"], ["id", "div_container4_3_3"], ["mat-button", "", "routerLink", "/profile", "routerLinkActive", "mat-accent"], ["id", "div_container4_3_4"], ["id", "div_container4_3_5"], ["mat-button", "", 3, "click"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_div_6_Template, 10, 0, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_div_7_Template, 16, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userIsAuthenticated);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userIsAuthenticated);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]],
        styles: ["#div_container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  height: 13.89vw;\r\n  width: 100vw;\r\n}\r\n\r\n#div_container1[_ngcontent-%COMP%] {\r\n  width: 2.7778vw;\r\n}\r\n\r\n#img1[_ngcontent-%COMP%] {\r\n  margin: 0.6944vw;\r\n  height: 12.84vw;\r\n  width: 12.84vw;\r\n}\r\n\r\n#div_container2[_ngcontent-%COMP%] {\r\n  width: 27.78vw;\r\n  height: 11.81vw;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: flex-end;\r\n}\r\n\r\n#div_container3[_ngcontent-%COMP%] {\r\n  width: 20.83vw;\r\n}\r\n\r\n#div_container4[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  width: 13.89vw;\r\n  margin-left: 0.6944vw;\r\n\r\n}\r\n\r\n#img2[_ngcontent-%COMP%] {\r\n  margin-left: 1.3889vw;\r\n}\r\n\r\n#div_container4_2[_ngcontent-%COMP%] {\r\n  margin-bottom: 1.0417vw;\r\n  margin-left: 0.6944vw;\r\n  width: 12.5vw;\r\n  display: flex;\r\n  justify-content: space-around;\r\n\r\n}\r\n\r\n#div_container4_3[_ngcontent-%COMP%] {\r\n  margin-bottom: 1.0417vw;\r\n  margin-left: 0.6944vw;\r\n  width: 0.6944vw;\r\n  display: flex;\r\n  justify-content: space-around;\r\n\r\n}\r\n\r\n#div_container4_2_2[_ngcontent-%COMP%] {\r\n  padding-top: 0.5556vw;\r\n}\r\n\r\n#div_container4_3_2[_ngcontent-%COMP%] {\r\n  padding-top: 0.5556vw;\r\n}\r\n\r\n#div_container4_3_4[_ngcontent-%COMP%] {\r\n  padding-top: 0.5556vw;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n  font-size: 1.7361vw;\r\n  text-decoration: none;\r\n  color:#374F86;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n  font-size: 1.7361vw;\r\n  color:#374F86;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLGNBQWM7RUFDZCxxQkFBcUI7O0FBRXZCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsYUFBYTtFQUNiLDZCQUE2Qjs7QUFFL0I7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixhQUFhO0VBQ2IsNkJBQTZCOztBQUUvQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4jZGl2X2NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgaGVpZ2h0OiAxMy44OXZ3O1xyXG4gIHdpZHRoOiAxMDB2dztcclxufVxyXG5cclxuI2Rpdl9jb250YWluZXIxIHtcclxuICB3aWR0aDogMi43Nzc4dnc7XHJcbn1cclxuXHJcbiNpbWcxIHtcclxuICBtYXJnaW46IDAuNjk0NHZ3O1xyXG4gIGhlaWdodDogMTIuODR2dztcclxuICB3aWR0aDogMTIuODR2dztcclxufVxyXG5cclxuI2Rpdl9jb250YWluZXIyIHtcclxuICB3aWR0aDogMjcuNzh2dztcclxuICBoZWlnaHQ6IDExLjgxdnc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuXHJcbiNkaXZfY29udGFpbmVyMyB7XHJcbiAgd2lkdGg6IDIwLjgzdnc7XHJcbn1cclxuXHJcbiNkaXZfY29udGFpbmVyNCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIHdpZHRoOiAxMy44OXZ3O1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjY5NDR2dztcclxuXHJcbn1cclxuXHJcbiNpbWcyIHtcclxuICBtYXJnaW4tbGVmdDogMS4zODg5dnc7XHJcbn1cclxuXHJcbiNkaXZfY29udGFpbmVyNF8yIHtcclxuICBtYXJnaW4tYm90dG9tOiAxLjA0MTd2dztcclxuICBtYXJnaW4tbGVmdDogMC42OTQ0dnc7XHJcbiAgd2lkdGg6IDEyLjV2dztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cclxufVxyXG5cclxuI2Rpdl9jb250YWluZXI0XzMge1xyXG4gIG1hcmdpbi1ib3R0b206IDEuMDQxN3Z3O1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjY5NDR2dztcclxuICB3aWR0aDogMC42OTQ0dnc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHJcbn1cclxuXHJcbiNkaXZfY29udGFpbmVyNF8yXzIge1xyXG4gIHBhZGRpbmctdG9wOiAwLjU1NTZ2dztcclxufVxyXG5cclxuI2Rpdl9jb250YWluZXI0XzNfMiB7XHJcbiAgcGFkZGluZy10b3A6IDAuNTU1NnZ3O1xyXG59XHJcblxyXG4jZGl2X2NvbnRhaW5lcjRfM180IHtcclxuICBwYWRkaW5nLXRvcDogMC41NTU2dnc7XHJcbn1cclxuXHJcbmF7XHJcbiAgZm9udC1zaXplOiAxLjczNjF2dztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IzM3NEY4NjtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gIGZvbnQtc2l6ZTogMS43MzYxdnc7XHJcbiAgY29sb3I6IzM3NEY4NjtcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
          }]
        }], function () {
          return [{
            type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "h2eb":
    /*!*************************************************!*\
      !*** ./src/app/profiles/mime-type.validator.ts ***!
      \*************************************************/

    /*! exports provided: mimeType */

    /***/
    function h2eb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "mimeType", function () {
        return mimeType;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var mimeType = function mimeType(control) {
        if (typeof control.value === 'string') {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
        }

        var file = control.value;
        var fileReader = new FileReader();
        var frObs = rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
          fileReader.addEventListener("loadend", function () {
            var arr = new Uint8Array(fileReader.result).subarray(0, 4);
            var header = "";
            var isValid = false;

            for (var i = 0; i < arr.length; i++) {
              header += arr[i].toString(16);
            }

            switch (header) {
              case "89504e47":
                isValid = true;
                break;

              case "ffd8ffe0":
              case "ffd8ffe1":
              case "ffd8ffe2":
              case "ffd8ffe3":
              case "ffd8ffe8":
                isValid = true;
                break;

              default:
                isValid = false; // Or you can use the blob.type as fallback

                break;
            }

            if (isValid) {
              observer.next(null);
            } else {
              observer.next({
                invalidMimeType: true
              });
            }

            observer.complete();
          });
          fileReader.readAsArrayBuffer(file);
        });
        return frObs;
      };
      /***/

    },

    /***/
    "iZNs":
    /*!************************************************!*\
      !*** ./src/app/contacts/contacts.component.ts ***!
      \************************************************/

    /*! exports provided: ContactsComponent */

    /***/
    function iZNs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactsComponent", function () {
        return ContactsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");

      function ContactsComponent_th_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContactsComponent_td_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r12.order, " ");
        }
      }

      function ContactsComponent_th_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContactsComponent_td_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r13.name, " ");
        }
      }

      function ContactsComponent_th_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Position ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContactsComponent_td_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r14.position, " ");
        }
      }

      function ContactsComponent_th_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContactsComponent_td_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r15.email, " ");
        }
      }

      function ContactsComponent_tr_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 25);
        }
      }

      function ContactsComponent_tr_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 26);
        }
      }

      function ContactsComponent_tr_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("No data matching the filter \"", _r0.value, "\"");
        }
      }

      var CONTACTS_DATA = [{
        order: 1,
        name: 'Cicek Tekin',
        position: 'Project Manager',
        email: 'cicekt@bu.edu'
      }, {
        order: 2,
        name: 'Chen Long',
        position: 'Business Analytics',
        email: 'longchen@bu.edu'
      }, {
        order: 3,
        name: 'Ben Harris-Eze',
        position: 'Business Analytics',
        email: 'bhe@bu.edu'
      }, {
        order: 4,
        name: 'Zhassulan Kaishentayev',
        position: 'Developer',
        email: 'jassulan@bu.edu'
      }, {
        order: 5,
        name: 'Michael Ranasinghe',
        position: 'Developer',
        email: 'ranasm@bu.edu'
      }, {
        order: 6,
        name: 'Kehua Wang',
        position: 'Developer',
        email: 'endywang@bu.edu'
      }];

      var ContactsComponent = /*#__PURE__*/function () {
        function ContactsComponent() {
          _classCallCheck(this, ContactsComponent);

          this.displayedColumns = ['order', 'name', 'position', 'email'];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](CONTACTS_DATA);
        }

        _createClass(ContactsComponent, [{
          key: "applyFilter",
          value: function applyFilter(event) {
            var filterValue = event.target.value;
            this.dataSource.filter = filterValue.trim().toLowerCase();
          }
        }]);

        return ContactsComponent;
      }();

      ContactsComponent.ɵfac = function ContactsComponent_Factory(t) {
        return new (t || ContactsComponent)();
      };

      ContactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContactsComponent,
        selectors: [["app-contacts"]],
        decls: 36,
        vars: 3,
        consts: [["id", "img1", "src", "images/Contact Us Page Banner.jpg"], [2, "margin-left", "4vw", "margin-top", "6vw", "color", "#707070", "font-size", "2vw"], [2, "margin-bottom", "4vw"], [2, "margin-bottom", "6vw"], ["id", "contact_content"], ["matInput", "", "placeholder", "Ex. ium", 3, "keyup"], ["input", ""], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "order"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "position"], ["matColumnDef", "email"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["id", "div_container"], ["id", "div_container1"], ["id", "img2", "src", "images/Logo.jpg"], ["id", "div_container2"], ["id", "div_container2_1"], ["id", "div_container3"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]],
        template: function ContactsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "We would love to hear from you!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Please contact us via email and let us know your feedback, questions and concerns...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Filter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ContactsComponent_Template_input_keyup_11_listener($event) {
              return ctx.applyFilter($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "table", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ContactsComponent_th_15_Template, 2, 0, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ContactsComponent_td_16_Template, 2, 1, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](17, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ContactsComponent_th_18_Template, 2, 0, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ContactsComponent_td_19_Template, 2, 1, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](20, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ContactsComponent_th_21_Template, 2, 0, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ContactsComponent_td_22_Template, 2, 1, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](23, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ContactsComponent_th_24_Template, 2, 0, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ContactsComponent_td_25_Template, 2, 1, "td", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ContactsComponent_tr_26_Template, 1, 0, "tr", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ContactsComponent_tr_27_Template, 1, 0, "tr", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ContactsComponent_tr_28_Template, 3, 1, "tr", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Copyright 2020. All Rights Reserved.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          }
        },
        directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatNoDataRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]],
        styles: ["body[_ngcontent-%COMP%] {\n  width: 100vw;\n}\n#img1[_ngcontent-%COMP%] {\n  margin-top: 2vw;\n  width: 100vw;\n  height: 33.33vw;\n}\n#contact_content[_ngcontent-%COMP%]{\n  margin-left: 4vw;\n  margin-right: 4vw;\n  margin-top: 2vw;\n  width: 92vw;\n  background-color: #C4D9ED;\n  padding-bottom: 2vw;\n}\n.mat-form-field[_ngcontent-%COMP%] {\n  margin: 2vw;\n  font-size: 1vw;\n  width: 88vw;\n}\ntable[_ngcontent-%COMP%] {\n  margin-left: 2vw;\n  margin-right: 2vw;\n  width: 88vw;\n\n}\n#div_container[_ngcontent-%COMP%] {\n  width: 100vw;\n  display: flex;\n  margin-top: 120px;\n  padding-bottom: 35px;\n\n}\n#img2[_ngcontent-%COMP%] {\n  height: 125px;\n  width: 8.6vw;\n  margin-left: 3.5vw;\n\n}\n#div_container2[_ngcontent-%COMP%] {\n  width: 30vw;\n  margin-left: 24vw;\n}\n#div_container2_1[_ngcontent-%COMP%]{\n  margin-left: 2.78vw;\n  margin-top: 70px;\n  font-size: 20px;\n  color: #374F86;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjO0FBQ2Q7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztBQUNiO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFdBQVc7O0FBRWI7QUFJQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG9CQUFvQjs7QUFFdEI7QUFHQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCOztBQUVwQjtBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzL2NvbnRhY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHJ1Y3R1cmUgKi9cbmJvZHkge1xuICB3aWR0aDogMTAwdnc7XG59XG5cbiNpbWcxIHtcbiAgbWFyZ2luLXRvcDogMnZ3O1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMzMuMzN2dztcbn1cblxuI2NvbnRhY3RfY29udGVudHtcbiAgbWFyZ2luLWxlZnQ6IDR2dztcbiAgbWFyZ2luLXJpZ2h0OiA0dnc7XG4gIG1hcmdpbi10b3A6IDJ2dztcbiAgd2lkdGg6IDkydnc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDNEQ5RUQ7XG4gIHBhZGRpbmctYm90dG9tOiAydnc7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbjogMnZ3O1xuICBmb250LXNpemU6IDF2dztcbiAgd2lkdGg6IDg4dnc7XG59XG5cbnRhYmxlIHtcbiAgbWFyZ2luLWxlZnQ6IDJ2dztcbiAgbWFyZ2luLXJpZ2h0OiAydnc7XG4gIHdpZHRoOiA4OHZ3O1xuXG59XG5cblxuXG4jZGl2X2NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDB2dztcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMTIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzNXB4O1xuXG59XG5cblxuI2ltZzIge1xuICBoZWlnaHQ6IDEyNXB4O1xuICB3aWR0aDogOC42dnc7XG4gIG1hcmdpbi1sZWZ0OiAzLjV2dztcblxufVxuXG4jZGl2X2NvbnRhaW5lcjIge1xuICB3aWR0aDogMzB2dztcbiAgbWFyZ2luLWxlZnQ6IDI0dnc7XG59XG5cbiNkaXZfY29udGFpbmVyMl8xe1xuICBtYXJnaW4tbGVmdDogMi43OHZ3O1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMzc0Rjg2O1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-contacts',
            templateUrl: './contacts.component.html',
            styleUrls: ['./contacts.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "jpBz":
    /*!*********************************************!*\
      !*** ./src/app/myscript/myscript.module.ts ***!
      \*********************************************/

    /*! exports provided: MyscriptModule */

    /***/
    function jpBz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyscriptModule", function () {
        return MyscriptModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _myscript_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./myscript.component */
      "evIt");
      /* harmony import */


      var _angular_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../angular-material.module */
      "rhD1");

      var MyscriptModule = function MyscriptModule() {
        _classCallCheck(this, MyscriptModule);
      };

      MyscriptModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MyscriptModule
      });
      MyscriptModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MyscriptModule_Factory(t) {
          return new (t || MyscriptModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MyscriptModule, {
          declarations: [_myscript_component__WEBPACK_IMPORTED_MODULE_4__["MyscriptComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyscriptModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_myscript_component__WEBPACK_IMPORTED_MODULE_4__["MyscriptComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "kuTz":
    /*!******************************************!*\
      !*** ./src/app/auth/auth-interceptor.ts ***!
      \******************************************/

    /*! exports provided: AuthInterceptor */

    /***/
    function kuTz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
        return AuthInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth.service */
      "qXBG");

      var AuthInterceptor = /*#__PURE__*/function () {
        function AuthInterceptor(authService) {
          _classCallCheck(this, AuthInterceptor);

          this.authService = authService;
        }

        _createClass(AuthInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var authToken = this.authService.getToken();
            var authRequest = req.clone({
              headers: req.headers.set("Authorization", "Bearer " + authToken)
            });
            return next.handle(authRequest);
          }
        }]);

        return AuthInterceptor;
      }();

      AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
        return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
      };

      AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthInterceptor,
        factory: AuthInterceptor.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "qXBG":
    /*!**************************************!*\
      !*** ./src/app/auth/auth.service.ts ***!
      \**************************************/

    /*! exports provided: AuthService */

    /***/
    function qXBG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + '/user';

      var AuthService = /*#__PURE__*/function () {
        function AuthService(http, router) {
          _classCallCheck(this, AuthService);

          this.http = http;
          this.router = router;
          this.isAuthenticated = false;
          this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }

        _createClass(AuthService, [{
          key: "getToken",
          value: function getToken() {
            return this.token;
          }
        }, {
          key: "getIsAuth",
          value: function getIsAuth() {
            return this.isAuthenticated;
          }
        }, {
          key: "getAuthStatusListener",
          value: function getAuthStatusListener() {
            return this.authStatusListener.asObservable();
          }
        }, {
          key: "getUserId",
          value: function getUserId() {
            return this.userId;
          }
        }, {
          key: "getUserName",
          value: function getUserName() {
            return this.userEmail;
          }
        }, {
          key: "createUser",
          value: function createUser(email, password) {
            var _this8 = this;

            var authData = {
              email: email,
              password: password
            };
            return this.http.post(BACKEND_URL + '/signup', authData).subscribe(function () {
              console.log("this.router.navigate");

              _this8.router.navigate(['/auth/login']);
            }, function (error) {
              _this8.authStatusListener.next(false);
            });
          }
        }, {
          key: "updateUser",
          value: function updateUser(email, password, newPassword) {
            var _this9 = this;

            var authData = {
              email: email,
              password: password
            };
            return this.http.post(BACKEND_URL + '/signup', authData).subscribe(function () {
              console.log("this.router.navigate");

              _this9.router.navigate(['/auth/login']);
            }, function (error) {
              _this9.authStatusListener.next(false);
            });
          }
        }, {
          key: "login",
          value: function login(email, password) {
            var _this10 = this;

            var authData = {
              email: email,
              password: password
            };
            this.http.post(BACKEND_URL + '/login', authData).subscribe(function (response) {
              var token = response.token;
              _this10.token = token;

              if (token) {
                var expiresInDuration = response.expiresIn;

                _this10.setAuthTimer(expiresInDuration);

                _this10.isAuthenticated = true;
                _this10.userId = response.userId;
                _this10.userEmail = email;

                _this10.authStatusListener.next(true);

                var now = new Date();
                var expirationDate = new Date(now.getTime() + expiresInDuration * 1000);

                _this10.saveAuthData(token, expirationDate, response.userId, email);

                _this10.router.navigate(['/']);
              }
            }, function (error) {
              _this10.authStatusListener.next(false);
            });
          }
        }, {
          key: "autoAuthUser",
          value: function autoAuthUser() {
            var authInformation = this.getAuthData();

            if (!authInformation) {
              return;
            }

            var now = new Date();
            var expiresIn = authInformation.expirationDate.getTime() - now.getTime();

            if (expiresIn > 0) {
              this.token = authInformation.token;
              this.isAuthenticated = true;
              this.userId = authInformation.userId;
              this.userEmail = authInformation.userEmail;
              this.setAuthTimer(expiresIn / 1000);
              this.authStatusListener.next(true);
            }
          }
        }, {
          key: "logout",
          value: function logout() {
            this.token = null;
            this.isAuthenticated = false;
            this.authStatusListener.next(false);
            clearTimeout(this.tokenTimer);
            this.userId = null;
            this.userEmail = null;
            this.clearAuthData();
            this.router.navigate(['/']);
          }
        }, {
          key: "setAuthTimer",
          value: function setAuthTimer(duration) {
            var _this11 = this;

            this.tokenTimer = setTimeout(function () {
              _this11.logout();
            }, duration * 1000);
          }
        }, {
          key: "saveAuthData",
          value: function saveAuthData(token, expirationDate, userId, userEmail) {
            localStorage.setItem('token', token);
            localStorage.setItem('expiration', expirationDate.toISOString());
            localStorage.setItem('userId', userId);
            localStorage.setItem('userEmail', userEmail);
          }
        }, {
          key: "clearAuthData",
          value: function clearAuthData() {
            localStorage.removeItem('token');
            localStorage.removeItem('expiration');
            localStorage.removeItem('userId');
            localStorage.removeItem('userEmail');
          }
        }, {
          key: "getAuthData",
          value: function getAuthData() {
            var token = localStorage.getItem('token');
            var expirationDate = localStorage.getItem('expiration');
            var userId = localStorage.getItem('userId');
            var userEmail = localStorage.getItem('userEmail');

            if (!token || !expirationDate || !userId || !userEmail) {
              return;
            }

            return {
              token: token,
              expirationDate: new Date(expirationDate),
              userId: userId,
              userEmail: userEmail
            };
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "rhD1":
    /*!********************************************!*\
      !*** ./src/app/angular-material.module.ts ***!
      \********************************************/

    /*! exports provided: AngularMaterialModule */

    /***/
    function rhD1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function () {
        return AngularMaterialModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/stepper */
      "xHqg");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/radio */
      "QibW");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "Xa2L");

      var AngularMaterialModule = function AngularMaterialModule() {
        _classCallCheck(this, AngularMaterialModule);
      };

      AngularMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AngularMaterialModule
      });
      AngularMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AngularMaterialModule_Factory(t) {
          return new (t || AngularMaterialModule)();
        },
        imports: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularMaterialModule, {
          exports: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularMaterialModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            exports: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "t83K":
    /*!**********************************************!*\
      !*** ./src/app/profiles/profiles.service.ts ***!
      \**********************************************/

    /*! exports provided: ProfilesService */

    /***/
    function t83K(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilesService", function () {
        return ProfilesService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/profiles';

      var ProfilesService = /*#__PURE__*/function () {
        function ProfilesService(http, router) {
          _classCallCheck(this, ProfilesService);

          this.http = http;
          this.router = router;
          this.profiles = [];
          this.profilesUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.profileUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }

        _createClass(ProfilesService, [{
          key: "getProfiles",
          value: function getProfiles(profilesPerPage, currentPage) {
            var _this12 = this;

            var queryParams = "?pagesize=".concat(profilesPerPage, "&page=").concat(currentPage);
            this.http.get(BACKEND_URL + '/' + queryParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (profileData) {
              return {
                profiles: profileData.profiles.map(function (profile) {
                  return {
                    name: profile.name,
                    surname: profile.surname,
                    id: profile._id,
                    imagePath: profile.imagePath,
                    userId: profile.userId
                  };
                }),
                maxProfiles: profileData.maxProfiles
              };
            })).subscribe(function (transformedProfileData) {
              _this12.profiles = transformedProfileData.profiles;

              _this12.profilesUpdated.next({
                profiles: _toConsumableArray(_this12.profiles),
                profileCount: transformedProfileData.maxProfiles
              });
            });
          }
        }, {
          key: "getProfilesUpdateListener",
          value: function getProfilesUpdateListener() {
            return this.profilesUpdated.asObservable();
          }
        }, {
          key: "getProfileByUserId",
          value: function getProfileByUserId() {
            var _this13 = this;

            this.http.get(BACKEND_URL + '/byUserId/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (profileData) {
              if (profileData.message === "no_user_founded") {
                return {
                  profile: {
                    name: null,
                    surname: null,
                    id: null,
                    imagePath: null,
                    userId: null
                  },
                  profileExist: false
                };
              } else {
                console.log("user_founded");
                console.log(profileData);
                return {
                  profile: {
                    name: profileData.profile.name,
                    surname: profileData.profile.surname,
                    id: profileData.profile._id,
                    imagePath: profileData.profile.imagePath,
                    userId: profileData.profile.userId
                  },
                  profileExist: true
                };
              }

              ;
            })).subscribe(function (transformedProfileData) {
              console.log(transformedProfileData.profile);
              _this13.profile = transformedProfileData.profile;

              _this13.profileUpdated.next({
                profile: _this13.profile,
                profileExist: transformedProfileData.profileExist
              });
            });
          }
        }, {
          key: "getProfileUpdateListener",
          value: function getProfileUpdateListener() {
            return this.profileUpdated.asObservable();
          }
        }, {
          key: "getProfile",
          value: function getProfile(id) {
            return this.http.get(BACKEND_URL + '/' + id);
          }
        }, {
          key: "addProfile",
          value: function addProfile(name, surname, image) {
            var _this14 = this;

            var profileData = new FormData();
            profileData.append('name', name);
            profileData.append('surname', surname);
            profileData.append('image', image, name);
            this.http.post(BACKEND_URL, profileData).subscribe(function (responseData) {
              _this14.router.navigate(['/']);
            });
          }
        }, {
          key: "updateProfile",
          value: function updateProfile(id, name, surname, image) {
            var _this15 = this;

            var profileData;

            if (typeof image === 'object') {
              profileData = new FormData();
              profileData.append('id', id);
              profileData.append('name', name);
              profileData.append('surname', surname);
              profileData.append('image', image, name);
            } else {
              profileData = {
                id: id,
                name: name,
                surname: surname,
                imagePath: image,
                userId: null
              };
            }

            this.http.put(BACKEND_URL + '/' + id, profileData).subscribe(function (response) {
              _this15.router.navigate(['/']);
            });
          }
        }, {
          key: "deleteProfile",
          value: function deleteProfile(profileId) {
            return this.http["delete"](BACKEND_URL + '/' + profileId);
          }
        }]);

        return ProfilesService;
      }();

      ProfilesService.ɵfac = function ProfilesService_Factory(t) {
        return new (t || ProfilesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
      };

      ProfilesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ProfilesService,
        factory: ProfilesService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfilesService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ud6y":
    /*!*************************************!*\
      !*** ./src/app/auth/auth.guards.ts ***!
      \*************************************/

    /*! exports provided: AuthGuard */

    /***/
    function ud6y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth.service */
      "qXBG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(authService, router) {
          _classCallCheck(this, AuthGuard);

          this.authService = authService;
          this.router = router;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route, state) {
            var isAuth = this.authService.getIsAuth();

            if (!isAuth) {
              this.router.navigate(['/login']);
            }

            return isAuth;
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./main-page/main-page.component */
      "0PS2");
      /* harmony import */


      var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./contacts/contacts.component */
      "iZNs");
      /* harmony import */


      var _myscript_myscript_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./myscript/myscript.component */
      "evIt");
      /* harmony import */


      var _profiles_profile_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profiles/profile-create.component */
      "S4uW");
      /* harmony import */


      var _auth_auth_guards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./auth/auth.guards */
      "ud6y");

      var routes = [{
        path: '',
        component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"]
      }, {
        path: 'contacts',
        component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_3__["ContactsComponent"]
      }, {
        path: 'script',
        component: _myscript_myscript_component__WEBPACK_IMPORTED_MODULE_4__["MyscriptComponent"],
        canActivate: [_auth_auth_guards__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
      }, {
        path: 'profile',
        component: _profiles_profile_create_component__WEBPACK_IMPORTED_MODULE_5__["ProfileCreateComponent"],
        canActivate: [_auth_auth_guards__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
      }, {
        path: 'edit/:profileId',
        component: _profiles_profile_create_component__WEBPACK_IMPORTED_MODULE_5__["ProfileCreateComponent"],
        canActivate: [_auth_auth_guards__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
      }, {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        providers: [_auth_auth_guards__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
              relativeLinkResolution: 'legacy'
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [_auth_auth_guards__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports, __webpack_require__) {
      var map = {
        "./auth/auth.module": ["Yj9t", "auth-auth-module"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return __webpack_require__.e(ids[1]).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "zn8P";
      module.exports = webpackAsyncContext;
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map