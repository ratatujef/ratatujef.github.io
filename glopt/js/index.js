!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){window.addEventListener("DOMContentLoaded",(function(){let e=document.querySelectorAll("button"),t=document.querySelector(".overlay");e.forEach(e=>{e.classList.contains("button_form")||e.classList.contains("button_question-form")||e.addEventListener("click",()=>{t.classList.add("overlay_active")})}),t.addEventListener("click",e=>{e.target==t?t.classList.remove("overlay_active"):console.log(e.target)});let n=document.querySelector(".slider__pre"),r=document.querySelector(".slider__next"),o=document.querySelectorAll(".item_slider"),i=1;function c(e){i=e<1?o.length:e>o.length?1:e,o.forEach(e=>{e.classList.remove("item_slider_active")}),o[i-1].classList.add("item_slider_active")}c(i),r.addEventListener("click",()=>c(i+1)),n.addEventListener("click",()=>c(i-1))}))}]);
//# sourceMappingURL=index.js.map