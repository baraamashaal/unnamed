define(["./toInteger","./toLength"],function(n,t){function e(e,o,f,u){var g=e.length;for(f=n(f),0>f&&(f=-f>g?0:g+f),u=u===r||u>g?g:n(u),0>u&&(u+=g),u=f>u?0:t(u);u>f;)e[f++]=o;return e}var r;return e});