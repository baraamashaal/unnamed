define([],function(){function r(r,t,e,a){for(var f=-1,o=r.length,h=-1,u=e.length,g=-1,i=t.length,l=n(o-u,0),v=Array(l+i),c=!a;++f<l;)v[f]=r[f];for(var d=f;++g<i;)v[d+g]=t[g];for(;++h<u;)(c||o>f)&&(v[d+e[h]]=r[f++]);return v}var n=Math.max;return r});