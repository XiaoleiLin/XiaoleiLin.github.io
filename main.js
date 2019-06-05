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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nul.timeline {\r\n    list-style-type: none;\r\n    position: relative;\r\n}\r\nul.timeline:before {\r\n    content: ' ';\r\n    background: #d4d9df;\r\n    display: inline-block;\r\n    position: absolute;\r\n    left: 29px;\r\n    width: 2px;\r\n    height: 100%;\r\n    z-index: 400;\r\n}\r\nul.timeline > li {\r\n    margin: 20px 0;\r\n    padding-left: 20px;\r\n}\r\nul.timeline > li:before {\r\n    content: ' ';\r\n    background: white;\r\n    display: inline-block;\r\n    position: absolute;\r\n    border-radius: 50%;\r\n    border: 3px solid #22c0e8;\r\n    left: 20px;\r\n    width: 20px;\r\n    height: 20px;\r\n    z-index: 400;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\n<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\" integrity=\"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy\" crossorigin=\"anonymous\"></script>\n\n<div data-spy=\"scroll\" data-target=\"#list-example\" data-offset=\"0\" class=\"scrollspy-example\" >\n  <div id=\"intro\" class=\"text-center p-3 mb-2 bg-secondary text-white container-fluid\">\n    <img width=\"250\" height=\"250\" class=\"mt-5 rounded-circle img-fluid\" src=\"./assets/foto.png\"  alt=\"...\">\n    <h1 class = \"p-3\" >Xiaolei Lin</h1>\n    <p>Apasionado del Blockchain y la tecnología. Me considero autodidacta<p>\n    <p>Me gusta los videojuegos, tanto como programarlo<p>\n    <a id = \"descargarCV\" href=\"./assets/CV.pdf\" class=\"btn btn-primary mb-5 mt-3\" role=\"button\" aria-pressed=\"true\">Descargar CV</a>\n\n  </div>\n\n  <div id=\"estudios\" class=\"container-fluid\">\n    <div class=\"container mt-4 mb-5\">\n       <div class=\"row\">\n\t         <div class=\"col-md-6 offset-md-3\">\n\t\t         <h4 class = \"text-center\">Formación académica</h4>\n\t\t         <ul class=\"timeline\">\n              <li>\n\t              <a target=\"_blank\">Universidad Politécnica de Cataluña (UPC)</a>\n\t              <a class=\"float-right\"> 2015 - actualidad </a>\n                <p>Grado Ingeniería Informática - Especializado en la Tecnologías de la Información en la Facultad de Informática de Barcelona (FIB)</p>\n\t\t\t        </li>\n\t\t\t        <li>\n\t\t\t          <a>Bachillerato</a>\n\t\t\t\t        <a class=\"float-right\">2012 - 2015</a>\n\t\t\t\t        <p>INS Emperador Carles</p>\n\t\t\t        </li>\n\t\t        </ul>\n\t        </div>\n       </div>\n    </div>\n  </div>\n\n\n  <div class = \"bg-secondary text-white \">\n    <h4 id=\"idiomas\" class = \"p-4 text-center\">Idiomas</h4>\n    <div class = \"container text-center\">\n      <div class = \"row\">\n\n          <div class=\"col-sm\">\n            <li class=\"media pb-5\">\n              <img width=\"55\" class=\"mr-3 rounded\"  src=\"./assets/spain.png\" alt=\"Generic placeholder image\">\n              <div class=\"media-body\">\n                <h5 class=\"mt-0 mb-1\">Español</h5>\n                <a>Avanzado</a>\n              </div>\n            </li>\n          </div>\n\n\n          <div class=\"col-sm\">\n            <li class=\"media pb-5\">\n              <img width=\"55\" class=\"mr-3 rounded\"  src=\"./assets/catalan.png\" alt=\"...\">\n              <div class=\"media-body\">\n                <h5 class=\"mt-0 mb-1\">Catalán</h5>\n                <a>Medio</a>\n              </div>\n            </li>\n          </div>\n\n          <div class=\"col-sm\">\n            <li class=\"media pb-5\">\n              <img width=\"55\" class=\"mr-3 rounded\"  src=\"./assets/ingles.png\" alt=\"...\">\n              <div class=\"media-body\">\n                <h5 class=\"mt-0 mb-1\">Inglés</h5>\n                <a>Medio</a>\n              </div>\n            </li>\n          </div>\n\n          <div class=\"col-sm\">\n            <li class=\"media pb-5\">\n              <img width=\"65\" class=\"mr-3 rounded\"  src=\"./assets/china.png\" alt=\"...\">\n              <div class=\"media-body\">\n                <h5 class=\"mt-0 mb-1\">Chino</h5>\n                <a>Nativo</a>\n              </div>\n            </li>\n          </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <h4 id=\"aptitudes\" class = \"text-center p-4 \" >Aptitudes</h4>\n\n    <div>\n      <h5> Nivel medio:</h5>\n    </div>\n    <div class = \"row\">\n      <div class = \"col p-3 pl-5\">\n        <img width=\"75\" src=\"./assets/c+++.png\" class=\"rounded\" alt=\"...\">\n      </div>\n      <div class = \"col\">\n        <img width=\"120\" src=\"./assets/c.png\" class=\"rounded\" alt=\"...\">\n      </div>\n      <div class = \"col\">\n        <img width=\"120\" src=\"./assets/java.png\" class=\"rounded\" alt=\"...\">\n      </div>\n      <div class = \"col p-4\">\n        <img width=\"90\" src=\"./assets/office.png\" class=\"rounded\" alt=\"...\">\n      </div>\n      <div class = \"col pt-5 pb-5\">\n        <img width=\"120\" src=\"./assets/opengl.svg\" class=\"rounded\" alt=\"...\">\n      </div>\n    </div>\n\n    <div class = \"mb-5\">\n      <div>\n      <h5> Nivel básico:</h5>\n      </div>\n      <div class = \"row\">\n        <div class = \"col p-3\">\n          <img width=\"90\" src=\"./assets/html.png\" class=\"rounded\" alt=\"...\">\n        </div>\n        <div class = \"col p-2\">\n          <img width=\"74\" src=\"./assets/javascript.png\" class=\"rounded\" alt=\"...\">\n        </div>\n        <div class = \"col p-3\">\n          <img width=\"65\" src=\"../assets/css.png\" class=\"rounded\" alt=\"...\">\n        </div>\n        <div class = \"col p-2\">\n          <img width=\"110\" src=\"./assets/angular.png\" class=\"rounded\" alt=\"...\">\n        </div>\n        <div class = \"col p-4\">\n          <img width=\"125\" src=\"./assets/bootstrap.png\" class=\"rounded\" alt=\"...\">\n        </div>\n        <div class = \"col p-3\">\n          <img width=\"130\" src=\"./assets/postgresql.png\" class=\"rounded\" alt=\"...\">\n        </div>\n        <div class = \"col pt-4\">\n          <img width=\"140\" src=\"./assets/unity.png\" class=\"rounded\" alt=\"...\">\n        </div>\n        <div class = \"col p-3\">\n          <img width=\"100\" src=\"./assets/qt.png\" class=\"rounded\" alt=\"...\">\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"bg-secondary text-white pb-5\">\n    <div class = \"container text-center\">\n    <h4 id=\"Proyectos\" class = \"text-center p-4\" >Portafolio</h4>\n    <div class = \"text-left\">\n      <h5> Games:</h5>\n    </div>\n        <div class = \"row\">\n          <div class=\"col p-4\">\n            <div>\n            <h5>2D Game - BlueBlue</h5>\n            </div>\n            <youtube-player\n              [videoId]=\"d2\"\n              (ready)=\"savePlayer($event)\"\n              (change)=\"onStateChange($event)\"\n              [playerVars]=\"playerVars\">\n            </youtube-player>\n            <h6>Desde la base con C++ y OpenGL</h6>\n          </div>\n\n          <div class=\"col p-4\">\n            <div>\n            <h5>3D Game - Heroes vs Villains</h5>\n            </div>\n            <youtube-player\n              [videoId]=\"d3\"\n              (ready)=\"savePlayer($event)\"\n              (change)=\"onStateChange($event)\"\n              [playerVars]=\"playerVars\">\n            </youtube-player>\n            <h6>Mediante el motor de Unity</h6>\n          </div>\n        </div>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <div class = \"container text-center\">\n    <h4 id=\"contact\" class = \"text-center p-4\" >Contacto</h4>\n        <div class = \"row\">\n          <div class=\"col p-4\">\n            <img width = \"30\" src =\"./assets/location.png\" alt = \"...\">\n            <a class = \"px-3\">Barcelona, España</a>\n          </div>\n          <div class=\"col p-4\">\n            <img width = \"35\" src =\"./assets/correo.gif\" alt = \"...\">\n            <a class = \"px-3\">linbcn10@gmail.com</a>\n          </div>\n          <div class=\"col p-4\">\n            <img width = \"30\" src =\"./assets/telefono.png\" alt = \"...\">\n            <a class = \"px-3\">630829112</a>\n          </div>\n        </div>\n    </div>\n  </div>\n\n   <!--\n   <nav class=\"navbar navbar-default navbar-static-top\">\n   <div id=\"list\" class=\"list-group\" >\n    <a class=\"list-group-item list-group-item-action\" href=\"#intro\">About Me</a>\n    <a class=\"list-group-item list-group-item-action\" href=\"#estudios\">Estudios</a>\n    <a class=\"list-group-item list-group-item-action\" href=\"#idiomas\">Idiomas</a>\n    <a class=\"list-group-item list-group-item-action\" href=\"#conocimientos\">Conocimientos</a>\n    <a class=\"list-group-item list-group-item-action\" href=\"#contact\">Contact Me</a>\n  </div>\n  </nav>\n-->\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.d2 = 'prA4WTvw92o';
        this.d3 = 'Xonv4yrGKro';
    }
    AppComponent.prototype.savePlayer = function (player) {
        this.player = player;
    };
    AppComponent.prototype.playVideo = function () {
        this.player.playVideo();
    };
    AppComponent.prototype.pauseVideo = function () {
        this.player.pauseVideo();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-youtube-player */ "./node_modules/ngx-youtube-player/fesm5/ngx-youtube-player.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_youtube_player__WEBPACK_IMPORTED_MODULE_2__["NgxYoutubePlayerModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Proyectos\www\mi-perfil\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map