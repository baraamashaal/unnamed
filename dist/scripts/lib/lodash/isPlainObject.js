define(["./_getPrototype","./_isHostObject","./isObjectLike"],function(t,r,n){function o(o){if(!n(o)||a.call(o)!=e||r(o))return!1;var c=t(o);if(null===c)return!0;var f=u.call(c,"constructor")&&c.constructor;return"function"==typeof f&&f instanceof f&&i.call(f)==l}var e="[object Object]",c=Object.prototype,i=Function.prototype.toString,u=c.hasOwnProperty,l=i.call(Object),a=c.toString;return o});