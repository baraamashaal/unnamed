define(["./_hashClear","./_hashDelete","./_hashGet","./_hashHas","./_hashSet"],function(e,t,h,o,r){function a(e){var t=-1,h=e?e.length:0;for(this.clear();++t<h;){var o=e[t];this.set(o[0],o[1])}}return a.prototype.clear=e,a.prototype["delete"]=t,a.prototype.get=h,a.prototype.has=o,a.prototype.set=r,a});