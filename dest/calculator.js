"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),Calculator=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"add",value:function(e,n){return e+n}},{key:"subtract",value:function(e,n){return e-n}},{key:"multiply",value:function(e,n){return e*n}},{key:"divide",value:function(e,n){return e===n?NaN:e/n}}]),e}();module.exports=Calculator;