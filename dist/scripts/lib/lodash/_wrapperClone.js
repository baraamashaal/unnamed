define(["./_LazyWrapper","./_LodashWrapper","./_copyArray"],function(_,n,e){function r(r){if(r instanceof _)return r.clone();var a=new n(r.__wrapped__,r.__chain__);return a.__actions__=e(r.__actions__),a.__index__=r.__index__,a.__values__=r.__values__,a}return r});