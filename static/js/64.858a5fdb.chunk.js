/*! For license information please see 64.858a5fdb.chunk.js.LICENSE.txt */
(this["webpackJsonpionic-react-conference-app"]=this["webpackJsonpionic-react-conference-app"]||[]).push([[64],{173:function(t,e,n){"use strict";n.r(e),n.d(e,"startTapClick",(function(){return o}));var i=n(22),o=function(t){var e,n,o,v,l=10*-f,p=0,L=t.getBoolean("animated",!0)&&t.getBoolean("rippleEffect",!0),m=new WeakMap,h=function(t){l=Object(i.q)(t),w(t)},E=function(){clearTimeout(v),v=void 0,n&&(j(!1),n=void 0)},b=function(t){n||void 0!==e&&null!==e.parentElement||(e=void 0,g(a(t),t))},w=function(t){g(void 0,t)},g=function(t,e){if(!t||t!==n){clearTimeout(v),v=void 0;var o=Object(i.p)(e),a=o.x,r=o.y;if(n){if(m.has(n))throw new Error("internal error");n.classList.contains(s)||q(n,a,r),j(!0)}if(t){var d=m.get(t);d&&(clearTimeout(d),m.delete(t));var f=c(t)?0:u;t.classList.remove(s),v=setTimeout((function(){q(t,a,r),v=void 0}),f)}n=t}},q=function(t,e,n){p=Date.now(),t.classList.add(s);var i=L&&r(t);i&&i.addRipple&&(T(),o=i.addRipple(e,n))},T=function(){void 0!==o&&(o.then((function(t){return t()})),o=void 0)},j=function(t){T();var e=n;if(e){var i=d-Date.now()+p;if(t&&i>0&&!c(e)){var o=setTimeout((function(){e.classList.remove(s),m.delete(e)}),d);m.set(e,o)}else e.classList.remove(s)}},O=document;O.addEventListener("ionScrollStart",(function(t){e=t.target,E()})),O.addEventListener("ionScrollEnd",(function(){e=void 0})),O.addEventListener("ionGestureCaptured",E),O.addEventListener("touchstart",(function(t){l=Object(i.q)(t),b(t)}),!0),O.addEventListener("touchcancel",h,!0),O.addEventListener("touchend",h,!0),O.addEventListener("mousedown",(function(t){var e=Object(i.q)(t)-f;l<e&&b(t)}),!0),O.addEventListener("mouseup",(function(t){var e=Object(i.q)(t)-f;l<e&&w(t)}),!0),O.addEventListener("contextmenu",(function(t){w(t)}),!0)},a=function(t){if(!t.composedPath)return t.target.closest(".ion-activatable");for(var e=t.composedPath(),n=0;n<e.length-2;n++){var i=e[n];if(i.classList&&i.classList.contains("ion-activatable"))return i}},c=function(t){return t.classList.contains("ion-activatable-instant")},r=function(t){if(t.shadowRoot){var e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")},s="ion-activated",u=200,d=200,f=2500}}]);
//# sourceMappingURL=64.858a5fdb.chunk.js.map