define(["./_baseFindIndex","./_baseIteratee","./toInteger"],function(e,n,r){function t(t,u,i){var f=t?t.length:0;if(!f)return-1;var d=null==i?0:r(i);return 0>d&&(d=a(f+d,0)),e(t,n(u,3),d)}var a=Math.max;return t});