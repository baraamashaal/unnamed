define(["./_escapeHtmlChar","./toString"],function(e,r){function t(t){return t=r(t),t&&c.test(t)?t.replace(n,e):t}var n=/[&<>"'`]/g,c=RegExp(n.source);return t});