/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/pages/app.tsx":
/*!**********************************!*\
  !*** ./src/client/pages/app.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.App = void 0;
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
const App = () => {
    return (react_1.default.createElement(react_router_dom_1.Routes, null,
        react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement("div", null,
                "HOME",
                react_1.default.createElement("br", null),
                react_1.default.createElement(react_router_dom_1.Link, { to: "/hi" }, "Go to HI! page")) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/hi", element: react_1.default.createElement("div", null,
                "HI!",
                react_1.default.createElement("br", null),
                react_1.default.createElement(react_router_dom_1.Link, { to: "/" }, "Go to Home page")) })));
};
exports.App = App;


/***/ }),

/***/ "./src/server/index.ts":
/*!*****************************!*\
  !*** ./src/server/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
// server/index.ts
const express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
const fs_1 = __importDefault(__webpack_require__(/*! fs */ "fs"));
const path_1 = __importDefault(__webpack_require__(/*! path */ "path"));
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ "react-dom/server"));
const server_2 = __webpack_require__(/*! react-router-dom/server */ "react-router-dom/server");
const app_1 = __webpack_require__(/*! ../client/pages/app */ "./src/client/pages/app.tsx");
const server = (0, express_1.default)();
server.set("view engine", "ejs");
server.set("views", path_1.default.join(__dirname, "views"));
server.use("/", express_1.default.static(path_1.default.join(__dirname, "client")));
const manifest = fs_1.default.readFileSync(path_1.default.join(__dirname, "client/manifest.json"), "utf-8");
server.use(function (_, res, next) {
    res.header("X-Powered-By", "dwlhm");
    next();
});
const assets = JSON.parse(manifest);
server.get("*", (req, res) => {
    // res.send("HELLO FROM SERVER")
    const component = server_1.default.renderToString(react_1.default.createElement(server_2.StaticRouter, { location: req.url }, react_1.default.createElement(app_1.App)));
    res.render("client", { assets, component });
});
server.listen(3030, () => {
    console.log("SERVER RUNNING on :3030");
});


/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-dom/server":
/*!******************************************!*\
  !*** external "react-router-dom/server" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("react-router-dom/server");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELFdBQVc7QUFDWCxnQ0FBZ0MsbUJBQU8sQ0FBQyxvQkFBTztBQUMvQywyQkFBMkIsbUJBQU8sQ0FBQywwQ0FBa0I7QUFDckQ7QUFDQTtBQUNBLGtFQUFrRTtBQUNsRTtBQUNBO0FBQ0EseUVBQXlFLFdBQVcsc0JBQXNCO0FBQzFHLGtFQUFrRTtBQUNsRTtBQUNBO0FBQ0EseUVBQXlFLFNBQVMsdUJBQXVCO0FBQ3pHO0FBQ0EsV0FBVzs7Ozs7Ozs7Ozs7QUNuQkU7QUFDYjtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHdCQUFTO0FBQ25ELDZCQUE2QixtQkFBTyxDQUFDLGNBQUk7QUFDekMsK0JBQStCLG1CQUFPLENBQUMsa0JBQU07QUFDN0MsZ0NBQWdDLG1CQUFPLENBQUMsb0JBQU87QUFDL0MsaUNBQWlDLG1CQUFPLENBQUMsMENBQWtCO0FBQzNELGlCQUFpQixtQkFBTyxDQUFDLHdEQUF5QjtBQUNsRCxjQUFjLG1CQUFPLENBQUMsdURBQXFCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsNkdBQTZHLG1CQUFtQjtBQUNoSSwyQkFBMkIsbUJBQW1CO0FBQzlDLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7QUM5QkQ7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jbGllbnQvcGFnZXMvYXBwLnRzeCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zZXJ2ZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvZXh0ZXJuYWwgY29tbW9uanMgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvZXh0ZXJuYWwgY29tbW9uanMgXCJyZWFjdFwiIiwid2VicGFjazovL3RvZG9saXN0L2V4dGVybmFsIGNvbW1vbmpzIFwicmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovL3RvZG9saXN0L2V4dGVybmFsIGNvbW1vbmpzIFwicmVhY3Qtcm91dGVyLWRvbVwiIiwid2VicGFjazovL3RvZG9saXN0L2V4dGVybmFsIGNvbW1vbmpzIFwicmVhY3Qtcm91dGVyLWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly90b2RvbGlzdC9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwiZnNcIiIsIndlYnBhY2s6Ly90b2RvbGlzdC9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwicGF0aFwiIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQXBwID0gdm9pZCAwO1xuY29uc3QgcmVhY3RfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuY29uc3QgcmVhY3Rfcm91dGVyX2RvbV8xID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7XG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChyZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9yb3V0ZXJfZG9tXzEuUm91dGVzLCBudWxsLFxuICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9yb3V0ZXJfZG9tXzEuUm91dGUsIHsgcGF0aDogXCIvXCIsIGVsZW1lbnQ6IHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgICAgICAgICAgXCJIT01FXCIsXG4gICAgICAgICAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChyZWFjdF9yb3V0ZXJfZG9tXzEuTGluaywgeyB0bzogXCIvaGlcIiB9LCBcIkdvIHRvIEhJISBwYWdlXCIpKSB9KSxcbiAgICAgICAgcmVhY3RfMS5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVhY3Rfcm91dGVyX2RvbV8xLlJvdXRlLCB7IHBhdGg6IFwiL2hpXCIsIGVsZW1lbnQ6IHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgICAgICAgICAgXCJISSFcIixcbiAgICAgICAgICAgICAgICByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxuICAgICAgICAgICAgICAgIHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHJlYWN0X3JvdXRlcl9kb21fMS5MaW5rLCB7IHRvOiBcIi9cIiB9LCBcIkdvIHRvIEhvbWUgcGFnZVwiKSkgfSkpKTtcbn07XG5leHBvcnRzLkFwcCA9IEFwcDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gc2VydmVyL2luZGV4LnRzXG5jb25zdCBleHByZXNzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImV4cHJlc3NcIikpO1xuY29uc3QgZnNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZnNcIikpO1xuY29uc3QgcGF0aF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJwYXRoXCIpKTtcbmNvbnN0IHJlYWN0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbmNvbnN0IHNlcnZlcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpKTtcbmNvbnN0IHNlcnZlcl8yID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb20vc2VydmVyXCIpO1xuY29uc3QgYXBwXzEgPSByZXF1aXJlKFwiLi4vY2xpZW50L3BhZ2VzL2FwcFwiKTtcbmNvbnN0IHNlcnZlciA9ICgwLCBleHByZXNzXzEuZGVmYXVsdCkoKTtcbnNlcnZlci5zZXQoXCJ2aWV3IGVuZ2luZVwiLCBcImVqc1wiKTtcbnNlcnZlci5zZXQoXCJ2aWV3c1wiLCBwYXRoXzEuZGVmYXVsdC5qb2luKF9fZGlybmFtZSwgXCJ2aWV3c1wiKSk7XG5zZXJ2ZXIudXNlKFwiL1wiLCBleHByZXNzXzEuZGVmYXVsdC5zdGF0aWMocGF0aF8xLmRlZmF1bHQuam9pbihfX2Rpcm5hbWUsIFwiY2xpZW50XCIpKSk7XG5jb25zdCBtYW5pZmVzdCA9IGZzXzEuZGVmYXVsdC5yZWFkRmlsZVN5bmMocGF0aF8xLmRlZmF1bHQuam9pbihfX2Rpcm5hbWUsIFwiY2xpZW50L21hbmlmZXN0Lmpzb25cIiksIFwidXRmLThcIik7XG5zZXJ2ZXIudXNlKGZ1bmN0aW9uIChfLCByZXMsIG5leHQpIHtcbiAgICByZXMuaGVhZGVyKFwiWC1Qb3dlcmVkLUJ5XCIsIFwiZHdsaG1cIik7XG4gICAgbmV4dCgpO1xufSk7XG5jb25zdCBhc3NldHMgPSBKU09OLnBhcnNlKG1hbmlmZXN0KTtcbnNlcnZlci5nZXQoXCIqXCIsIChyZXEsIHJlcykgPT4ge1xuICAgIC8vIHJlcy5zZW5kKFwiSEVMTE8gRlJPTSBTRVJWRVJcIilcbiAgICBjb25zdCBjb21wb25lbnQgPSBzZXJ2ZXJfMS5kZWZhdWx0LnJlbmRlclRvU3RyaW5nKHJlYWN0XzEuZGVmYXVsdC5jcmVhdGVFbGVtZW50KHNlcnZlcl8yLlN0YXRpY1JvdXRlciwgeyBsb2NhdGlvbjogcmVxLnVybCB9LCByZWFjdF8xLmRlZmF1bHQuY3JlYXRlRWxlbWVudChhcHBfMS5BcHApKSk7XG4gICAgcmVzLnJlbmRlcihcImNsaWVudFwiLCB7IGFzc2V0cywgY29tcG9uZW50IH0pO1xufSk7XG5zZXJ2ZXIubGlzdGVuKDMwMzAsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlNFUlZFUiBSVU5OSU5HIG9uIDozMDMwXCIpO1xufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tL3NlcnZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zZXJ2ZXIvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=