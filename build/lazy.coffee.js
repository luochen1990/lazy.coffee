!function r(n,t,u){function e(i,f){if(!t[i]){if(!n[i]){var a="function"==typeof require&&require;if(!f&&a)return a(i,!0);if(o)return o(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var l=t[i]={exports:{}};n[i][0].call(l.exports,function(r){var t=n[i][1][r];return e(t?t:r)},l,l.exports,r,n,t,u)}return t[i].exports}for(var o="function"==typeof require&&require,i=0;i<u.length;i++)e(u[i]);return e}({1:[function(r,n){var t,u=[].slice;t=function(r){var n,t,e,o,i,f,a,c,l,v,h,s,g,p,m,d,y,b,z,S,x,E,A,M,N,k,L,O,_,w,I,R,W,j,q,T,U,D;return n=r.Symbol,z=function(r){return r[n.iterator]=function(){return r()},r.toString=function(){return"LazyList"},r},M=z(function(){return M}),M.toString=function(){return"nil"},d=function(r){return r.next=function(){var n;return n=r(),{value:n,done:n===M}},r.toString=function(){return"Iterator"},r},A=z(function(){var r;return r=-1,d(function(){return++r})}),O=function(){var r;return r=1<=arguments.length?u.call(arguments,0):[],0===r.length?A:z(1===r.length?function(){var n,t;return t=r[0],n=-1,d(function(){return++n<t?n:M})}:2===r.length?function(){var n,t,u;return t=r[0],u=r[1],u>t?(n=t-1,d(function(){return++n<u?n:M})):(n=t+1,d(function(){return--n>u?n:M}))}:function(){var n,t,u,e;if(t=r[0],e=r[1],u=r[2],e!==t&&0>(e-t)*u)throw"ERR IN range(): YOU ARE CREATING AN UNLIMITTED RANGE";return n=t-u,d(e>t?function(){return(n+=u)<e?n:M}:function(){return(n+=u)>e?n:M})})},k=z(function(){return s(function(r){return t(function(n){return r%n!==0})(T(function(n){return r>=n*n})(O(2,1/0)))})(O(2,1/0))()}),b=function(r){return z("function"==typeof r?r:null!=r[n.iterator]?function(){var t;return t=r[n.iterator](),d(function(){var r;return r=t.next(),r.done?M:r.value})}:function(){var n;return n=-1,d(function(){return n+=1,n<r.length?r[n]:M})})},h=function(r){return null!=r[n.iterator]||r instanceof Array?U(A,r):z(function(){var n,t;return t=Object.keys(r),n=-1,d(function(){var u;return++n<t.length?[u=t[n],r[u]]:M})})},I=function(r){return z(function(){return d(function(){return r})})},m=function(r,n){return z(function(){var t;return t=r,d(function(){var r;return r=t,t=n(t),r})})},L=function(){var r;return r=function(r){return r=1e4*Math.sin(r),r-Math.floor(r)},function(n){var t,u;return u=null!=(t=null!=n?n.seed:void 0)?t:Math.random(),m(u,r)}}(),_=function(r,n){var t,u;return u=null!=(t=null!=n?n.seed:void 0)?t:Math.random(),E(function(n){return Math.floor(n*r)})(L({seed:u}))},N=function(){var r;return r=function(r){var n,t,u,e,o;for(r=r.slice(0),n=r.length-1;n>=1&&r[n]<=r[n-1];)--n;if(0!==n){for(t=r.length-1;t>n-1&&r[t]<=r[n-1];)--t;e=[r[n-1],r[t]],r[t]=e[0],r[n-1]=e[1]}for(u=r.length-1;u>n;)o=[r[u],r[n]],r[n]=o[0],r[u]=o[1],++n,--u;return r},function(n){return 0===n.length?M:a([n.slice(0)],T(function(r){return json(r)!==json(n)})(l(1)(m(n,r))))}}(),q=function(r){return function(t){return z(function(){var u,e;return e=(null!=t[n.iterator]?t:b(t))[n.iterator](),u=-1,d(function(){return++u<r?e():M})})}},T=function(r){return function(t){return z(function(){var u;return u=(null!=t[n.iterator]?t:b(t))[n.iterator](),d(function(){var n;return(n=u())!==M&&r(n)?n:M})})}},l=function(r){return function(t){return z(function(){var u,e,o,i,f;for(o=(null!=t[n.iterator]?t:b(t))[n.iterator](),u=!1,e=i=0,f=r;(f>=0?f>i:i>f)&&(u||(u=o()===M),!u);e=f>=0?++i:--i);return u?function(){return M}:o})}},v=function(r){return function(t){return z(function(){var u,e;for(u=(null!=t[n.iterator]?t:b(t))[n.iterator]();r(e=u())&&e!==M;);return d(function(){var r,n;return n=[e,u()],r=n[0],e=n[1],r})})}},c=function(r){return function(t){return z(function(){var u;return u=null,d(function(){return null===u?(u=(null!=t[n.iterator]?t:b(t))[n.iterator](),r):u()})})}},E=function(r){return function(t){return z(function(){var u;return u=(null!=t[n.iterator]?t:b(t))[n.iterator](),d(function(){var n;return(n=u())!==M?r(n):M})})}},s=function(r){return function(t){return z(function(){var u;return u=(null!=t[n.iterator]?t:b(t))[n.iterator](),d(function(){for(var n;!r(n=u())&&n!==M;);return n})})}},W=function(r,t){return function(u){return z(function(){var e;return e=(null!=u[n.iterator]?u:b(u))[n.iterator](),d(function(){var n,u;return n=t,t=(u=e())!==M?r(t,u):M,n})})}},j=function(r){return function(t){return z(function(){var u,e;return e=(null!=t[n.iterator]?t:b(t))[n.iterator](),u=[],d(function(){var n;return(n=e())===M?M:(u.push(n),u.length>r&&u.shift(1),u.slice(0))})})}},R=function(r){var t;return t=null!=r[n.iterator]?x(r):copy(r),b(t.reverse())},a=function(){var r;return r=1<=arguments.length?u.call(arguments,0):[],z(function(){var t,u;return u=(null!=r[0][n.iterator]?r[0]:b(r[0]))[n.iterator](),t=0,d(function(){var e;return(e=u())!==M?e:++t<r.length?(u=(null!=r[t][n.iterator]?r[t]:b(r[t]))[n.iterator]())():M})})},w=function(){var r,t,e;return r=function(r){var n,t,u;for(n=0,t=r.length;t>n;n++)if(u=r[n],u===M)return!0;return!1},t=function(){var t;return t=1<=arguments.length?u.call(arguments,0):[],z(function(){var u,e;return u=function(){var r,u,o;for(o=[],r=0,u=t.length;u>r;r++)e=t[r],o.push((null!=e[n.iterator]?e:b(e))[n.iterator]());return o}(),d(function(){var n,t;return t=function(){var r,t,e;for(e=[],r=0,t=u.length;t>r;r++)n=u[r],e.push(n());return e}(),r(t)?M:t})})},e=function(t){return function(){var e;return e=1<=arguments.length?u.call(arguments,0):[],z(function(){var u,o;return u=function(){var r,t,u;for(u=[],r=0,t=e.length;t>r;r++)o=e[r],u.push((null!=o[n.iterator]?o:b(o))[n.iterator]());return u}(),d(function(){var n,e;return e=function(){var r,t,e;for(e=[],r=0,t=u.length;t>r;r++)n=u[r],e.push(n());return e}(),r(e)?M:t.apply(null,e)})})}},{zip:t,zipWith:e}}(),U=w.zip,D=w.zipWith,f=function(){var r,n;return n=function(r){var n;return n=r.length-1,function(t){var u;for(u=n;!(++t[u]<r[u]||0>=u);)t[u--]=0;return t}},r=function(r){var n;return n=r.length,function(t){var u,e,o,i;for(i=[],u=e=0,o=n;o>=0?o>e:e>o;u=o>=0?++e:--e)i.push(r[u][t[u]]);return i}},function(){var t;return t=1<=arguments.length?u.call(arguments,0):[],z(function(){var u,e,o,i,f,a,c,l,v;for(t=function(){var r,n,u;for(u=[],r=0,n=t.length;n>r;r++)v=t[r],u.push(x(v));return u}(),c=function(){var r,n,u;for(u=[],e=r=0,n=t.length;n>=0?n>r:r>n;e=n>=0?++r:--r)u.push(t[e].length);return u}(),i=0,a=c.length;a>i;i++)if(f=c[i],0===f)return M;return o=n(c),u=r(t),l=function(){var r,n,u;for(u=[],e=r=0,n=t.length;n>=0?n>r:r>n;e=n>=0?++r:--r)u.push(0);return u}(),d(function(){var r;return l[0]<c[0]?(r=u(l),o(l),r):M})})}}(),x=function(r){var t,u,e;if(null!=r[n.iterator]){for(t=r[n.iterator](),u=[];(e=t())!==M;)u.push(e);return u}if(r instanceof Array)return r;throw Error("list(xs): xs is neither LazyList nor Array")},y=function(r){var t,u,e,o;if(null==r[n.iterator])return null!=(e=r[r.length-1])?e:M;for(t=(null!=r[n.iterator]?r:b(r))[n.iterator](),u=M;(o=t())!==M;)u=o;return u},S=function(r){var t,u,e;if(null==r[n.iterator])return r.length;for(t=(null!=r[n.iterator]?r:b(r))[n.iterator](),u=0;(e=t())!==M;)++u;return u},g=function(r,t){return function(u){var e,o;for(e=(null!=u[n.iterator]?u:b(u))[n.iterator]();(o=e())!==M;)t=r(t,o);return t}},o=function(r){return function(t){var u,e,o;if(e=(null!=t[n.iterator]?t:b(t))[n.iterator](),(o=e())===M)return null;for(;(u=e())!==M;)o=r(u,o)?u:o;return o}},t=function(r){return"function"!=typeof r&&(r=function(n){return n===r}),function(t){var u,e;for(u=(null!=t[n.iterator]?t:b(t))[n.iterator]();(e=u())!==M;)if(!r(e))return!1;return!0}},e=function(r){var n;return n=t(function(n){return!r(n)}),function(r){return!n(r)}},i=function(){return i},i.toString=function(){return"foreach.break"},p=function(r,t,u){var e,o;for(e=(null!=r[n.iterator]?r:b(r))[n.iterator]();(o=e())!==M&&t(o,u)!==i;);return u},Object.defineProperties(p,{"break":{writable:!1,configurable:!1,enumerable:!1,value:i}}),{nil:M,lazylist:z,iterator:d,Symbol:n,naturals:A,range:O,primes:k,lazy:b,enumerate:h,repeat:I,generate:m,random_gen:L,ranged_random_gen:_,permutation_gen:N,cons:c,map:E,filter:s,take:q,takeWhile:T,drop:l,dropWhile:v,scanl:W,streak:j,reverse:R,concat:a,zip:U,zipWith:D,cartProd:f,list:x,last:y,length:S,foldl:g,best:o,all:t,any:e,foreach:p}},n.exports=t({Symbol:"undefined"!=typeof Symbol&&null!==Symbol?Symbol:{iterator:"iter"}})},{}]},{},[1]);
//# sourceMappingURL=lazy.coffee.js.map