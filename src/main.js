/* eslint-disable */
!function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(i,o,function(t){return e[t]}.bind(null,o));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=0)}([function(e,t,n){n(1),e.exports=n(2)},function(e,t,n){},function(e,t,n){"use strict";function i(){var e=document.documentElement.scrollTop;a.forEach(function(t,n){t<=e+(s+1e3)&&(r[n].classList.add("loaded"),a.splice(n,1),r.splice(n,1),0===a.length&&window.removeEventListener("scroll"))})}function o(){var e=document.querySelector(".nav");(window.scrollY||window.scrollTop||document.getElementsByTagName("html")[0].scrollTop)>50?e.classList.add("collapse"):e.classList.remove("collapse")}n.r(t);n(3),n(4);var r=[].slice.call(document.querySelectorAll(".section")),a=[],s=window.innerHeight;r.forEach(function(e){a.push(e.offsetTop)}),i(),window.addEventListener("scroll",function(){i()}),window.addEventListener("scroll",o),window.addEventListener("ready",o);var l=document.getElementsByClassName("page-scroll");Array.prototype.slice.call(l).forEach(function(e){e.addEventListener("click",function(){document.getElementById("nav-menu").checked=!1})}),document.querySelectorAll('a[href^="#"]').forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth",block:"start",inline:"nearest"})})})},function(e,t){function n(){if("denied"===Notification.permission)return a.textContent="Push Messaging Blocked.",a.disabled=!0,void r();a.textContent=s?"Disable News Push Notifications":"Enable News Push Notifications",a.disabled=!1}function i(e){var t="/subscription";s&&(t="delete/subscription"),function(e,t){fetch(e,{method:"post",body:JSON.stringify(t),headers:{"Content-Type":"application/json; charset=utf-8"}})}(t,e)}function o(){var e=function(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/-/g,"+").replace(/_/g,"/"),n=window.atob(t),i=new Uint8Array(n.length),o=0;o<n.length;++o)i[o]=n.charCodeAt(o);return i}(applicationServerPublicKey);l.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:e}).then(function(e){i(e),s=!0,n()})}function r(){l.pushManager.getSubscription().then(function(e){e&&(e.unsubscribe(),i(e),s=!1,n())})}var a=document.querySelector(".notification.news"),s=!1,l=null;"serviceWorker"in navigator&&"PushManager"in window?navigator.serviceWorker.register("/sw.js").then(function(e){l=e,a?a.addEventListener("click",function(){a.disabled=!0,s?r():o()}):a={},l.pushManager.getSubscription().then(function(e){s=!(null===e),n()})}):''},function(e,t,n){(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}/*! lazysizes - v4.0.1 */
!function(n,i){var o=function(e,t){"use strict";if(t.getElementsByClassName){var n,i,o=t.documentElement,r=e.Date,a=e.HTMLPictureElement,s="addEventListener",l="getAttribute",c=e[s],u=e.setTimeout,d=e.requestAnimationFrame||u,f=e.requestIdleCallback,p=/^picture$/i,m=["load","error","lazyincluded","_lazyloaded"],y={},v=Array.prototype.forEach,h=function(e,t){return y[t]||(y[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),y[t].test(e[l]("class")||"")&&y[t]},g=function(e,t){h(e,t)||e.setAttribute("class",(e[l]("class")||"").trim()+" "+t)},b=function(e,t){var n;(n=h(e,t))&&e.setAttribute("class",(e[l]("class")||"").replace(n," "))},z=function e(t,n,i){var o=i?s:"removeEventListener";i&&e(t,n),m.forEach(function(e){t[o](e,n)})},w=function(e,i,o,r,a){var s=t.createEvent("CustomEvent");return o||(o={}),o.instance=n,s.initCustomEvent(i,!r,!a,o),e.dispatchEvent(s),s},C=function(t,n){var o;!a&&(o=e.picturefill||i.pf)?o({reevaluate:!0,elements:[t]}):n&&n.src&&(t.src=n.src)},E=function(e,t){return(getComputedStyle(e,null)||{})[t]},A=function(e,t,n){for(n=n||e.offsetWidth;n<i.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},S=function(){var e,n,i=[],o=[],r=i,a=function(){var t=r;for(r=i.length?o:i,e=!0,n=!1;t.length;)t.shift()();e=!1},s=function(i,o){e&&!o?i.apply(this,arguments):(r.push(i),n||(n=!0,(t.hidden?u:d)(a)))};return s._lsFlush=a,s}(),M=function(e,t){return t?function(){S(e)}:function(){var t=this,n=arguments;S(function(){e.apply(t,n)})}},N=function(e){var t,n,i=function(){t=null,e()},o=function e(){var t=r.now()-n;99>t?u(e,99-t):(f||i)(i)};return function(){n=r.now(),t||(t=u(o,99))}};!function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:300};i=e.lazySizesConfig||e.lazysizesConfig||{};for(t in n)t in i||(i[t]=n[t]);e.lazySizesConfig=i,u(function(){i.init&&P()})}();var _=function(){var a,d,m,y,A,_,P,T,L,k,O,W,j,B,F=/^img$/i,q=/^iframe$/i,R="onscroll"in e&&!/glebot/.test(navigator.userAgent),D=0,H=0,I=-1,$=function e(t){H--,t&&t.target&&z(t.target,e),(!t||0>H||!t.target)&&(H=0)},K=function(e,n){var i,r=e,a="hidden"==E(t.body,"visibility")||"hidden"!=E(e,"visibility");for(T-=n,O+=n,L-=n,k+=n;a&&(r=r.offsetParent)&&r!=t.body&&r!=o;)(a=(E(r,"opacity")||1)>0)&&"visible"!=E(r,"overflow")&&(i=r.getBoundingClientRect(),a=k>i.left&&L<i.right&&O>i.top-1&&T<i.bottom+1);return a},V=function(){var e,r,s,c,u,f,p,m,v,h=n.elements;if((y=i.loadMode)&&8>H&&(e=h.length)){r=0,I++,null==j&&("expand"in i||(i.expand=o.clientHeight>500&&o.clientWidth>500?500:370),W=i.expand,j=W*i.expFactor),j>D&&1>H&&I>2&&y>2&&!t.hidden?(D=j,I=0):D=y>1&&I>1&&6>H?W:0;for(;e>r;r++)if(h[r]&&!h[r]._lazyRace)if(R)if((m=h[r][l]("data-expand"))&&(f=1*m)||(f=D),v!==f&&(_=innerWidth+f*B,P=innerHeight+f,p=-1*f,v=f),s=h[r].getBoundingClientRect(),(O=s.bottom)>=p&&(T=s.top)<=P&&(k=s.right)>=p*B&&(L=s.left)<=_&&(O||k||L||T)&&(i.loadHidden||"hidden"!=E(h[r],"visibility"))&&(d&&3>H&&!m&&(3>y||4>I)||K(h[r],f))){if(Z(h[r]),u=!0,H>9)break}else!u&&d&&!c&&4>H&&4>I&&y>2&&(a[0]||i.preloadAfterLoad)&&(a[0]||!m&&(O||k||L||T||"auto"!=h[r][l](i.sizesAttr)))&&(c=a[0]||h[r]);else Z(h[r]);c&&!u&&Z(c)}},J=function(e){var t,n=0,o=i.ricTimeout,a=function(){t=!1,n=r.now(),e()},s=f&&i.ricTimeout?function(){f(a,{timeout:o}),o!==i.ricTimeout&&(o=i.ricTimeout)}:M(function(){u(a)},!0);return function(e){var i;(e=!0===e)&&(o=33),t||(t=!0,0>(i=125-(r.now()-n))&&(i=0),e||9>i&&f?s():u(s,i))}}(V),U=function(e){g(e.target,i.loadedClass),b(e.target,i.loadingClass),z(e.target,G),w(e.target,"lazyloaded")},Y=M(U),G=function(e){Y({target:e.target})},Q=function(e){var t,n=e[l](i.srcsetAttr);(t=i.customMedia[e[l]("data-media")||e[l]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},X=M(function(e,t,n,o,r){var a,s,c,d,f,y;(f=w(e,"lazybeforeunveil",t)).defaultPrevented||(o&&(n?g(e,i.autosizesClass):e.setAttribute("sizes",o)),s=e[l](i.srcsetAttr),a=e[l](i.srcAttr),r&&(c=e.parentNode,d=c&&p.test(c.nodeName||"")),y=t.firesLoad||"src"in e&&(s||a||d),f={target:e},y&&(z(e,$,!0),clearTimeout(m),m=u($,2500),g(e,i.loadingClass),z(e,G,!0)),d&&v.call(c.getElementsByTagName("source"),Q),s?e.setAttribute("srcset",s):a&&!d&&(q.test(e.nodeName)?function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}}(e,a):e.src=a),r&&(s||d)&&C(e,{src:a})),e._lazyRace&&delete e._lazyRace,b(e,i.lazyClass),S(function(){(!y||e.complete&&e.naturalWidth>1)&&(y?$(f):H--,U(f))},!0)}),Z=function(e){var t,n=F.test(e.nodeName),o=n&&(e[l](i.sizesAttr)||e[l]("sizes")),r="auto"==o;(!r&&d||!n||!e[l]("src")&&!e.srcset||e.complete||h(e,i.errorClass)||!h(e,i.lazyClass))&&(t=w(e,"lazyunveilread").detail,r&&x.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,H++,X(e,t,r,o,n))},ee=function e(){if(!d){if(r.now()-A<999)return void u(e,999);var t=N(function(){i.loadMode=3,J()});d=!0,i.loadMode=3,J(),c("scroll",function(){3==i.loadMode&&(i.loadMode=2),t()},!0)}};return{_:function(){A=r.now(),n.elements=t.getElementsByClassName(i.lazyClass),a=t.getElementsByClassName(i.lazyClass+" "+i.preloadClass),B=i.hFac,c("scroll",J,!0),c("resize",J,!0),e.MutationObserver?new MutationObserver(J).observe(o,{childList:!0,subtree:!0,attributes:!0}):(o[s]("DOMNodeInserted",J,!0),o[s]("DOMAttrModified",J,!0),setInterval(J,999)),c("hashchange",J,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){t[s](e,J,!0)}),/d$|^c/.test(t.readyState)?ee():(c("load",ee),t[s]("DOMContentLoaded",J),u(ee,2e4)),n.elements.length?(V(),S._lsFlush()):J()},checkElems:J,unveil:Z}}(),x=function(){var e,n=M(function(e,t,n,i){var o,r,a;if(e._lazysizesWidth=i,i+="px",e.setAttribute("sizes",i),p.test(t.nodeName||""))for(o=t.getElementsByTagName("source"),r=0,a=o.length;a>r;r++)o[r].setAttribute("sizes",i);n.detail.dataAttr||C(e,n.detail)}),o=function(e,t,i){var o,r=e.parentNode;r&&(i=A(e,r,i),o=w(e,"lazybeforesizes",{width:i,dataAttr:!!t}),o.defaultPrevented||(i=o.detail.width)&&i!==e._lazysizesWidth&&n(e,r,o,i))},r=N(function(){var t,n=e.length;if(n)for(t=0;n>t;t++)o(e[t])});return{_:function(){e=t.getElementsByClassName(i.autosizesClass),c("resize",r)},checkElems:r,updateElem:o}}(),P=function e(){e.i||(e.i=!0,x._(),_._())};return n={cfg:i,autoSizer:x,loader:_,init:P,uP:C,aC:g,rC:b,hC:h,fire:w,gW:A,rAF:S}}}(n,n.document);n.lazySizes=o,"object"==t(e)&&e.exports&&(e.exports=o)}(window)}).call(this,n(5)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}}]);
//# sourceMappingURL=main.js.map