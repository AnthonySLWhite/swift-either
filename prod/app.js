parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"A2T1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;
/**
 * Execute Either utility
 *
 * @param {number} [withErr] - 1 If you want errors to be logged to the console
 * @returns {function} either - Error handling utility
 */
const r=(r=0)=>{return e=>{let o=0,t=null;
/**
     * ### If things don't go right then
     *
     * @param {string} msg - Error message
     * @param {function} [errorCallback] - **Optional** Callback
     */
const n=(e,n)=>{throw n&&(t=n),r&&console.error(e),o=1,e};try{return e?e(n):console.error("No callback suplied!")}catch(s){
// If it was a Handled Error
if(o)return t?t(s):s;// If it was an Unhandled Error
const e=`Unhandled Error: \n      ${s.message}`;return r&&console.error(e),e}}};var e=r;exports.default=e;
},{}]},{},["A2T1"], null)
//# sourceMappingURL=app.map