(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<app-menu></app-menu>\n<div class=\"container-fluid\">\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <h3>Panel gerencial</h3>\n      <hr/>\n      <div class=\"row justify-content-md-center align-items-center mb-4\">\n        <div class=\"col-lg-4 col-md-6\">\n          <div class=\"card mb-2\">\n            <div class=\"card-header pt-2 pb-2\">\n              <b>Ventas mensuales</b>\n            </div>\n            <div class=\"card-body\">\n              <small>\n                <b>Mes</b>\n              </small>\n              <div class=\"text-center\">\n                <h2 class=\"mb-0\">\n                  $ {{'23488693.23' | number}}\n                </h2>\n                <small>\n                  <b>Margen</b> {{'67.2' | number}} %\n                </small>\n              </div>\n              <hr/>\n              <small>\n                <b>Año</b>\n              </small>\n              <div class=\"text-center\">\n                <h2 class=\"mb-0\">\n                  $ {{'8849577392.23' | number}}\n                </h2>\n                <small>\n                  <b>Margen</b> {{'70.7' | number}} %\n                </small>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-6\">\n          <div class=\"card mb-2\">\n            <div class=\"card-header pt-2 pb-2\">\n              <b>Inventario</b>\n            </div>\n            <div class=\"card-body\">\n              <small>\n                <b>Mes</b>\n              </small>\n              <div class=\"text-center\">\n                <h2 class=\"mb-0\">\n                  $ {{'38958374' | number}}\n                </h2>\n                <small>\n                  Costo inventario total\n                </small>\n                <br/>\n                <small>\n                  <b>Meses de inventario: </b> {{'3.4' | number}}\n                </small>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4 col-md-6\">\n          <div class=\"card mb-2\">\n            <div class=\"card-header pt-2 pb-2\">\n              <b>Personal</b>\n            </div>\n            <div class=\"card-body text-center\">\n              <div class=\"row\">\n                <div class=\"col-12 col-md-7 mb-2\">\n                  <h2 class=\"m-0\">{{'1678' | number}}</h2>\n                  <small>Puestos vacantes</small>\n                  <hr/>\n                  <div class=\"row\">\n                    <div class=\"col-6\">\n                      <h5 class=\"m-0\">{{'1450' | number}}</h5>\n                      <small>Contratos indefinidos</small>\n                    </div>\n                    <div class=\"col-6\">\n                      <h5 class=\"m-0\">{{'228' | number}}</h5>\n                      <small>Contratos definidos</small>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-12 col-md-5\">\n                  <h4 class=\"m-0\">{{'1650' | number}}</h4>\n                  <small>Ocupados</small>\n                  <hr/>\n                  <h4 class=\"m-0\">{{'28' | number}}</h4>\n                  <small>Vacantes</small>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.styl":
/*!************************************!*\
  !*** ./src/app/app.component.styl ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*# sourceMappingURL=src/app/app.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zdHlsIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9EQUFvRCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc3R5bCJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'panel-gerencial';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.styl */ "./src/app/app.component.styl")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-panel\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-no-link\">\n        <span class=\"nav-link\">\n          <b>\n            Panel Gerencial\n          </b>\n        </span>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/\">\n          <i class=\"fa fa-home\"></i>\n          Inicio\n        </a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/menu/menu.component.styl":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.styl ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-panel {\n  color: #fff;\n  background-color: #fbc531;\n}\n.navbar {\n  padding: 0 1rem;\n  margin-bottom: 10px;\n}\n.nav-item {\n  padding: 0.4rem;\n}\n.nav-item:hover {\n  background-color: #e1b12c;\n}\n.nav-link {\n  color: #fff !important;\n}\n.nav-no-link {\n  padding: 0.4rem;\n}\n.navbar-brand {\n  width: 30px;\n}\n.img-logo {\n  top: 0px;\n  position: absolute;\n  background-color: #fff;\n  padding: 3px;\n  width: 36px;\n  height: 56px;\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.35);\n}\n/*# sourceMappingURL=src/app/components/menu/menu.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51L3NyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnN0eWwiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zdHlsIiwic3JjL2FwcC9jb21wb25lbnRzL21lbnUvc3JjL2Fzc2V0cy9mdW5jdGlvbnMuc3R5bCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLFdBQU07RUFDTix5QkFBaUI7QUNGbkI7QURJQTtFQUNFLGVBQVE7RUFDUixtQkFBYztBQ0ZoQjtBRElBO0VBQ0UsZUFBUTtBQ0ZWO0FER0U7RUFDRSx5QkFBaUI7QUNEckI7QURHQTtFQUNFLHNCQUFNO0FDRFI7QURHQTtFQUNFLGVBQVE7QUNEVjtBREdBO0VBQ0UsV0FBTTtBQ0RSO0FER0E7RUFDRSxRQUFJO0VBQ0osa0JBQVM7RUFDVCxzQkFBaUI7RUFDakIsWUFBUTtFQUNSLFdBQU07RUFDTixZQUFPO0VFM0JQLHdDQUFXO0FENkJiO0FBQ0EscUVBQXFFIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnN0eWwiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3ZhcmlhYmxlcy5zdHlsXCJcclxuQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9mdW5jdGlvbnMuc3R5bFwiXHJcblxyXG4uYmctcGFuZWxcclxuICBjb2xvciBXSElURV9DT0xPUlxyXG4gIGJhY2tncm91bmQtY29sb3IgTUFJTl9DT0xPUlxyXG5cclxuLm5hdmJhclxyXG4gIHBhZGRpbmcgMCAxcmVtXHJcbiAgbWFyZ2luLWJvdHRvbSAxMHB4XHJcblxyXG4ubmF2LWl0ZW1cclxuICBwYWRkaW5nIDAuNHJlbVxyXG4gICY6aG92ZXJcclxuICAgIGJhY2tncm91bmQtY29sb3IgQVRFTlVFX0NPTE9SXHJcblxyXG4ubmF2LWxpbmtcclxuICBjb2xvciBXSElURV9DT0xPUiAhaW1wb3J0YW50XHJcblxyXG4ubmF2LW5vLWxpbmtcclxuICBwYWRkaW5nIC40cmVtXHJcblxyXG4ubmF2YmFyLWJyYW5kXHJcbiAgd2lkdGggMzBweFxyXG5cclxuLmltZy1sb2dvXHJcbiAgdG9wIDBweFxyXG4gIHBvc2l0aW9uIGFic29sdXRlXHJcbiAgYmFja2dyb3VuZC1jb2xvciBXSElURV9DT0xPUlxyXG4gIHBhZGRpbmcgM3B4XHJcbiAgd2lkdGggMzZweFxyXG4gIGhlaWdodCA1NnB4XHJcbiAgYm94U2hhZG93KDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4zNSkpXHJcbiIsIi5iZy1wYW5lbCB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJjNTMxO1xufVxuLm5hdmJhciB7XG4gIHBhZGRpbmc6IDAgMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5uYXYtaXRlbSB7XG4gIHBhZGRpbmc6IDAuNHJlbTtcbn1cbi5uYXYtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWIxMmM7XG59XG4ubmF2LWxpbmsge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuLm5hdi1uby1saW5rIHtcbiAgcGFkZGluZzogMC40cmVtO1xufVxuLm5hdmJhci1icmFuZCB7XG4gIHdpZHRoOiAzMHB4O1xufVxuLmltZy1sb2dvIHtcbiAgdG9wOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogM3B4O1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiA1NnB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4zNSk7XG4gIC1tb3otYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjM1KTtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjM1KTtcbn1cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LmNzcy5tYXAgKi8iLCJcclxuYm94U2hhZG93KGFyZ3MpXHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93IGFyZ3NcclxuICAtbW96LWJveC1zaGFkb3cgYXJnc1xyXG4gIGJveC1zaGFkb3cgYXJnc1xyXG5cclxuYm9yZGVyUmFkaXVzKGFyZ3MpXHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzIGFyZ3NcclxuICAtbW96LWJvcmRlci1yYWRpdXMgYXJnc1xyXG4gIGJvcmRlci1yYWRpdXMgYXJnc1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.styl */ "./src/app/components/menu/menu.component.styl")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\Documents\Proyectos\panel-gerencial\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map