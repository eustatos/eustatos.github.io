/*! For license information please see ed9bbed841a32b4c7a1582eadf6d71d316bffb3c-c172012fa0e3b0f65e54.js.LICENSE.txt */
(self.webpackChunkgatsby=self.webpackChunkgatsby||[]).push([[672],{9047:function(e,t,n){var r={"./deckgo-highlight-code_2.entry.js":[2518,518]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id=9047,e.exports=o},1659:function(e,t,n){"use strict";n.d(t,{H:function(){return H},b:function(){return ye},c:function(){return re},g:function(){return ne},h:function(){return Z},p:function(){return k},r:function(){return we}});var r=n(5671),o=n(3144);function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var a=n(9611);var u=n(1002);function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}function l(e,t,n){return l=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}()?Reflect.construct.bind():function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&(0,a.Z)(o,n.prototype),o},l.apply(null,arguments)}function s(e){var t="function"==typeof Map?new Map:void 0;return s=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return l(e,arguments,c(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),(0,a.Z)(r,e)},s(e)}var f=n(5861),$=n(2982);var h=n(181);function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,u=[],c=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(u.push(r.value),u.length!==t);c=!0);}catch(s){l=!0,o=s}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(e,t)||(0,h.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d=n(4687),m=n.n(d);function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===(0,u.Z)(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return i(e)}(this,n)}}var y,g,b=!1,w=!1,x="undefined"!=typeof window?window:{},E=x.document||{head:{}},L={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,n,r){return e.addEventListener(t,n,r)},rel:function(e,t,n,r){return e.removeEventListener(t,n,r)},ce:function(e,t){return new CustomEvent(e,t)}},k=function(e){return Promise.resolve(e)},N=function(){try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1}(),S=function(e,t,n,r){n&&n.map((function(n){var r=p(n,3),o=r[0],i=r[1],a=r[2],u=j(e,o),c=O(t,a),l=R(o);L.ael(u,i,c,l),(t.$rmListeners$=t.$rmListeners$||[]).push((function(){return L.rel(u,i,c,l)}))}))},O=function(e,t){return function(n){try{256&e.$flags$?e.$lazyInstance$[t](n):(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,n])}catch(r){Le(r)}}},j=function(e,t){return 4&t?E:e},R=function(e){return 0!=(2&e)},P="http://www.w3.org/1999/xlink",M=new WeakMap,_=function(e,t,n){var r=Se.get(e);N&&n?"string"==typeof(r=r||new CSSStyleSheet)?r=t:r.replaceSync(t):r=t,Se.set(e,r)},T=function(e){var t=e.$cmpMeta$,n=e.$hostElement$,r=t.$flags$,o=(t.$tagName$,function(){}),i=function(e,t,n,r){var o=C(t),i=Se.get(o);if(e=11===e.nodeType?e:E,i)if("string"==typeof i){e=e.head||e;var a,u=M.get(e);u||M.set(e,u=new Set),u.has(o)||((a=E.createElement("style")).innerHTML=i,e.insertBefore(a,e.querySelector("link")),u&&u.add(o))}else e.adoptedStyleSheets.includes(i)||(e.adoptedStyleSheets=[].concat((0,$.Z)(e.adoptedStyleSheets),[i]));return o}(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&r&&(n["s-sc"]=i,n.classList.add(i+"-h")),o()},C=function(e,t){return"sc-"+e.$tagName$},A={},I=function(e){return"object"===(e=typeof e)||"function"===e},Z=function(e,t){for(var n=null,r=null,o=!1,i=!1,a=[],u=arguments.length,c=new Array(u>2?u-2:0),l=2;l<u;l++)c[l-2]=arguments[l];if(function t(r){for(var u=0;u<r.length;u++)n=r[u],Array.isArray(n)?t(n):null!=n&&"boolean"!=typeof n&&((o="function"!=typeof e&&!I(n))&&(n=String(n)),o&&i?a[a.length-1].$text$+=n:a.push(o?B(null,n):n),i=o)}(c),t){t.key&&(r=t.key);var s=t.className||t.class;s&&(t.class="object"!=typeof s?s:Object.keys(s).filter((function(e){return s[e]})).join(" "))}if("function"==typeof e)return e(null===t?{}:t,a,F);var f=B(e,null);return f.$attrs$=t,a.length>0&&(f.$children$=a),f.$key$=r,f},B=function(e,t){var n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null,$attrs$:null,$key$:null};return n},H={},F={forEach:function(e,t){return e.map(U).forEach(t)},map:function(e,t){return e.map(U).map(t).map(q)}},U=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}},q=function(e){if("function"==typeof e.vtag){var t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),Z.apply(void 0,[e.vtag,t].concat((0,$.Z)(e.vchildren||[])))}var n=B(e.vtag,e.vtext);return n.$attrs$=e.vattrs,n.$children$=e.vchildren,n.$key$=e.vkey,n.$name$=e.vname,n},z=function(e,t,n,r,o,i){if(n!==r){var a=Ee(e,t),u=t.toLowerCase();if("class"===t){var c=e.classList,l=D(n),s=D(r);c.remove.apply(c,(0,$.Z)(l.filter((function(e){return e&&!s.includes(e)})))),c.add.apply(c,(0,$.Z)(s.filter((function(e){return e&&!l.includes(e)}))))}else if("style"===t){for(var f in n)r&&null!=r[f]||(f.includes("-")?e.style.removeProperty(f):e.style[f]="");for(var h in r)n&&r[h]===n[h]||(h.includes("-")?e.style.setProperty(h,r[h]):e.style[h]=r[h])}else if("key"===t);else if("ref"===t)r&&r(e);else if(a||"o"!==t[0]||"n"!==t[1]){var p=I(r);if((a||p&&null!==r)&&!o)try{if(e.tagName.includes("-"))e[t]=r;else{var d=null==r?"":r;"list"===t?a=!1:null!=n&&e[t]==d||(e[t]=d)}}catch(v){}var m=!1;u!==(u=u.replace(/^xlink\:?/,""))&&(t=u,m=!0),null==r||!1===r?!1===r&&""!==e.getAttribute(t)||(m?e.removeAttributeNS(P,t):e.removeAttribute(t)):(!a||4&i||o)&&!p&&(r=!0===r?"":r,m?e.setAttributeNS(P,t,r):e.setAttribute(t,r))}else t="-"===t[2]?t.slice(3):Ee(x,u)?u.slice(2):u[2]+t.slice(3),n&&L.rel(e,t,n,!1),r&&L.ael(e,t,r,!1)}},G=/\s/,D=function(e){return e?e.split(G):[]},V=function(e,t,n,r){var o=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,i=e&&e.$attrs$||A,a=t.$attrs$||A;for(r in i)r in a||z(o,r,i[r],void 0,n,t.$flags$);for(r in a)z(o,r,i[r],a[r],n,t.$flags$)},W=function e(t,n,r,o){var i,a,u=n.$children$[r],c=0;if(null!==u.$text$)i=u.$elm$=E.createTextNode(u.$text$);else{if(b||(b="svg"===u.$tag$),i=u.$elm$=E.createElementNS(b?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",u.$tag$),b&&"foreignObject"===u.$tag$&&(b=!1),V(null,u,b),null!=y&&i["s-si"]!==y&&i.classList.add(i["s-si"]=y),u.$children$)for(c=0;c<u.$children$.length;++c)(a=e(t,u,c))&&i.appendChild(a);"svg"===u.$tag$?b=!1:"foreignObject"===i.tagName&&(b=!0)}return i},Y=function(e,t,n,r,o,i){var a,u=e;for(u.shadowRoot&&u.tagName===g&&(u=u.shadowRoot);o<=i;++o)r[o]&&(a=W(null,n,o))&&(r[o].$elm$=a,u.insertBefore(a,t))},Q=function(e,t,n,r,o){for(;t<=n;++t)(r=e[t])&&(o=r.$elm$,ee(r),o.remove())},J=function(e,t,n,r){for(var o,i,a=0,u=0,c=0,l=0,s=t.length-1,f=t[0],$=t[s],h=r.length-1,p=r[0],d=r[h];a<=s&&u<=h;)if(null==f)f=t[++a];else if(null==$)$=t[--s];else if(null==p)p=r[++u];else if(null==d)d=r[--h];else if(K(f,p))X(f,p),f=t[++a],p=r[++u];else if(K($,d))X($,d),$=t[--s],d=r[--h];else if(K(f,d))X(f,d),e.insertBefore(f.$elm$,$.$elm$.nextSibling),f=t[++a],d=r[--h];else if(K($,p))X($,p),e.insertBefore($.$elm$,f.$elm$),$=t[--s],p=r[++u];else{for(c=-1,l=a;l<=s;++l)if(t[l]&&null!==t[l].$key$&&t[l].$key$===p.$key$){c=l;break}c>=0?((i=t[c]).$tag$!==p.$tag$?o=W(t&&t[u],n,c):(X(i,p),t[c]=void 0,o=i.$elm$),p=r[++u]):(o=W(t&&t[u],n,u),p=r[++u]),o&&f.$elm$.parentNode.insertBefore(o,f.$elm$)}a>s?Y(e,null==r[h+1]?null:r[h+1].$elm$,n,r,u,h):u>h&&Q(t,a,s)},K=function(e,t){return e.$tag$===t.$tag$&&e.$key$===t.$key$},X=function(e,t){var n=t.$elm$=e.$elm$,r=e.$children$,o=t.$children$,i=t.$tag$,a=t.$text$;null===a?(b="svg"===i||"foreignObject"!==i&&b,"slot"===i||V(e,t,b),null!==r&&null!==o?J(n,r,t,o):null!==o?(null!==e.$text$&&(n.textContent=""),Y(n,null,t,o,0,o.length-1)):null!==r&&Q(r,0,r.length-1),b&&"svg"===i&&(b=!1)):e.$text$!==a&&(n.data=a)},ee=function e(t){t.$attrs$&&t.$attrs$.ref&&t.$attrs$.ref(null),t.$children$&&t.$children$.map(e)},te=function(e,t){var n,r=e.$hostElement$,o=e.$cmpMeta$,i=e.$vnode$||B(null,null),a=(n=t)&&n.$tag$===H?t:Z(null,null,t);g=r.tagName,o.$attrsToReflect$&&(a.$attrs$=a.$attrs$||{},o.$attrsToReflect$.map((function(e){var t=p(e,2),n=t[0],o=t[1];return a.$attrs$[o]=r[n]}))),a.$tag$=null,a.$flags$|=4,e.$vnode$=a,a.$elm$=i.$elm$=r.shadowRoot||r,y=r["s-sc"],X(i,a)},ne=function(e){return be(e).$hostElement$},re=function(e,t,n){var r=ne(e);return{emit:function(e){return oe(r,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}}},oe=function(e,t,n){var r=L.ce(t,n);return e.dispatchEvent(r),r},ie=function(e,t){t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))},ae=function(e,t){if(e.$flags$|=16,!(4&e.$flags$)){ie(e,e.$ancestorComponent$);return Te((function(){return ue(e,t)}))}e.$flags$|=512},ue=function(e,t){var n,r=(e.$cmpMeta$.$tagName$,function(){}),o=e.$lazyInstance$;return t&&(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map((function(e){var t=p(e,2),n=t[0],r=t[1];return $e(o,n,r)})),e.$queuedListeners$=null),n=$e(o,"componentWillLoad")),r(),he(n,(function(){return ce(e,o,t)}))},ce=function(){var e=(0,f.Z)(m().mark((function e(t,n,r){var o,i,a,u,c,l;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=t.$hostElement$,t.$cmpMeta$.$tagName$,i=function(){},a=o["s-rc"],r&&T(t),t.$cmpMeta$.$tagName$,u=function(){},le(t,n),a&&(a.map((function(e){return e()})),o["s-rc"]=void 0),u(),i(),c=o["s-p"],l=function(){return se(t)},0===c.length?l():(Promise.all(c).then(l),t.$flags$|=4,c.length=0);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),le=function(e,t,n){try{t=t.render(),e.$flags$&=-17,e.$flags$|=2,te(e,t)}catch(r){Le(r,e.$hostElement$)}return null},se=function(e){e.$cmpMeta$.$tagName$;var t=e.$hostElement$,n=function(){},r=e.$lazyInstance$,o=e.$ancestorComponent$;64&e.$flags$?($e(r,"componentDidUpdate"),n()):(e.$flags$|=64,pe(t),$e(r,"componentDidLoad"),n(),e.$onReadyResolve$(t),o||fe()),e.$onInstanceResolve$(t),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&_e((function(){return ae(e,!1)})),e.$flags$&=-517},fe=function(e){pe(E.documentElement),_e((function(){return oe(x,"appload",{detail:{namespace:"deckdeckgo-highlight-code"}})}))},$e=function(e,t,n){if(e&&e[t])try{return e[t](n)}catch(r){Le(r)}},he=function(e,t){return e&&e.then?e.then(t):t()},pe=function(e){return e.classList.add("hydrated")},de=function(e,t,n,r){var o,i,a=be(e),u=a.$hostElement$,c=a.$instanceValues$.get(t),l=a.$flags$,s=a.$lazyInstance$;o=n,i=r.$members$[t][0],n=null==o||I(o)?o:4&i?"false"!==o&&(""===o||!!o):1&i?String(o):o;var f=Number.isNaN(c)&&Number.isNaN(n);if((!(8&l)||void 0===c)&&(n!==c&&!f)&&(a.$instanceValues$.set(t,n),s)){if(r.$watchers$&&128&l){var $=r.$watchers$[t];$&&$.map((function(e){try{s[e](n,c,t)}catch(r){Le(r,u)}}))}2==(18&l)&&ae(a,!1)}},me=function(e,t,n){if(t.$members$){e.watchers&&(t.$watchers$=e.watchers);var r=Object.entries(t.$members$),o=e.prototype;if(r.map((function(e){var r=p(e,2),i=r[0],a=p(r[1],1)[0];31&a||2&n&&32&a?Object.defineProperty(o,i,{get:function(){return e=i,be(this).$instanceValues$.get(e);var e},set:function(e){de(this,i,e,t)},configurable:!0,enumerable:!0}):1&n&&64&a&&Object.defineProperty(o,i,{value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=be(this);return r.$onInstancePromise$.then((function(){var e;return(e=r.$lazyInstance$)[i].apply(e,t)}))}})})),1&n){var i=new Map;o.attributeChangedCallback=function(e,t,n){var r=this;L.jmp((function(){var t=i.get(e);if(r.hasOwnProperty(t))n=r[t],delete r[t];else if(o.hasOwnProperty(t)&&"number"==typeof r[t]&&r[t]==n)return;r[t]=(null!==n||"boolean"!=typeof r[t])&&n}))},e.observedAttributes=r.filter((function(e){var t=p(e,2);t[0];return 15&t[1][0]})).map((function(e){var n=p(e,2),r=n[0],o=n[1],a=o[1]||r;return i.set(a,r),512&o[0]&&t.$attrsToReflect$.push([r,a]),a}))}}return e},ve=function(){var e=(0,f.Z)(m().mark((function e(t,n,r,o,i){var a,u,c,l,s,f,$;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=(32&n.$flags$)){e.next=17;break}if(n.$flags$|=32,!(i=Ne(r)).then){e.next=9;break}return a=function(){},e.next=7,i;case 7:i=e.sent,a();case 9:i.isProxied||(r.$watchers$=i.watchers,me(i,r,2),i.isProxied=!0),r.$tagName$,u=function(){},n.$flags$|=8;try{new i(n)}catch(t){Le(t)}n.$flags$&=-9,n.$flags$|=128,u(),i.style&&(c=i.style,l=C(r),Se.has(l)||(r.$tagName$,s=function(){},_(l,c,!!(1&r.$flags$)),s()));case 17:f=n.$ancestorComponent$,$=function(){return ae(n,!0)},f&&f["s-rc"]?f["s-rc"].push($):$();case 20:case"end":return e.stop()}}),e)})));return function(t,n,r,o,i){return e.apply(this,arguments)}}(),ye=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=function(){},c=[],l=n.exclude||[],f=x.customElements,$=E.head,h=$.querySelector("meta[charset]"),d=E.createElement("style"),m=[],y=!0;Object.assign(L,n),L.$resourcesUrl$=new URL(n.resourcesUrl||"./",E.baseURI).href,e.map((function(e){e[1].map((function(n){var u={$flags$:n[0],$tagName$:n[1],$members$:n[2],$listeners$:n[3]};u.$members$=n[2],u.$listeners$=n[3],u.$attrsToReflect$=[],u.$watchers$={};var $=u.$tagName$,h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&(0,a.Z)(e,t)}(c,e);var n=v(c);function c(e){var t;return(0,r.Z)(this,c),e=i(t=n.call(this,e)),xe(e,u),1&u.$flags$&&e.attachShadow({mode:"open"}),t}return(0,o.Z)(c,[{key:"connectedCallback",value:function(){var e=this;t&&(clearTimeout(t),t=null),y?m.push(this):L.jmp((function(){return function(e){if(0==(1&L.$flags$)){var t=be(e),n=t.$cmpMeta$,r=(n.$tagName$,function(){});if(1&t.$flags$)S(e,t,n.$listeners$);else{t.$flags$|=1;for(var o=e;o=o.parentNode||o.host;)if(o["s-p"]){ie(t,t.$ancestorComponent$=o);break}n.$members$&&Object.entries(n.$members$).map((function(t){var n=p(t,2),r=n[0];if(31&p(n[1],1)[0]&&e.hasOwnProperty(r)){var o=e[r];delete e[r],e[r]=o}})),ve(e,t,n)}r()}}(e)}))}},{key:"disconnectedCallback",value:function(){var e=this;L.jmp((function(){return function(e){if(0==(1&L.$flags$)){var t=be(e);t.$rmListeners$&&(t.$rmListeners$.map((function(e){return e()})),t.$rmListeners$=void 0)}}(e)}))}},{key:"componentOnReady",value:function(){return be(this).$onReadyPromise$}}]),c}(s(HTMLElement));u.$lazyBundleId$=e[0],l.includes($)||f.get($)||(c.push($),f.define($,me(h,u,1)))}))})),d.innerHTML=c+"{visibility:hidden}.hydrated{visibility:inherit}",d.setAttribute("data-styles",""),$.insertBefore(d,h?h.nextSibling:$.firstChild),y=!1,m.length?m.map((function(e){return e.connectedCallback()})):L.jmp((function(){return t=setTimeout(fe,30)})),u()},ge=new WeakMap,be=function(e){return ge.get(e)},we=function(e,t){return ge.set(t.$lazyInstance$=e,t)},xe=function(e,t){var n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return n.$onInstancePromise$=new Promise((function(e){return n.$onInstanceResolve$=e})),n.$onReadyPromise$=new Promise((function(e){return n.$onReadyResolve$=e})),e["s-p"]=[],e["s-rc"]=[],S(e,n,t.$listeners$),ge.set(e,n)},Ee=function(e,t){return t in e},Le=function(e,t){return(0,console.error)(e,t)},ke=new Map,Ne=function(e,t,r){var o=e.$tagName$.replace(/-/g,"_"),i=e.$lazyBundleId$,a=ke.get(i);if(a)return a[o];if(!r||!BUILD.hotModuleReplacement){if("deckgo-highlight-code_2"===i)return n.e(518).then(n.bind(n,2518)).then((function(e){return ke.set(i,e),e[o]}),Le)}return n(9047)("./".concat(i,".entry.js")).then((function(e){return ke.set(i,e),e[o]}),Le)},Se=new Map,Oe=[],je=[],Re=function(e,t){return function(n){e.push(n),w||(w=!0,t&&4&L.$flags$?_e(Me):L.raf(Me))}},Pe=function(e){for(var t=0;t<e.length;t++)try{e[t](performance.now())}catch(n){Le(n)}e.length=0},Me=function e(){Pe(Oe),Pe(je),(w=Oe.length>0)&&L.raf(e)},_e=function(e){return k().then(e)},Te=Re(je,!0)},3603:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r,o=n(7294),i=n(1082),a="layout-module--nav-link-item--a5f0a",u="layout-module--nav-link-text--69cda",c=n(1659);!function(){if("undefined"!=typeof window&&void 0!==window.Reflect&&void 0!==window.customElements){var e=HTMLElement;window.HTMLElement=function(){return Reflect.construct(e,[],this.constructor)},HTMLElement.prototype=e.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,e)}}(),"undefined"==typeof window?Promise.resolve():(0,c.p)().then((function(){return(0,c.b)([["deckgo-highlight-code_2",[[1,"deckgo-highlight-code",{language:[513],highlightLines:[513,"highlight-lines"],lineNumbers:[516,"line-numbers"],terminal:[513],editable:[4],editableLabel:[1,"editable-label"],theme:[513],revealProgress:[1025,"reveal-progress"],themeStyle:[32],loaded:[32],highlightRows:[32],load:[64],reveal:[64],hide:[64],revealAll:[64],hideAll:[64],nextHighlight:[64],prevHighlight:[64]},[[5,"prismLanguageLoaded","onLanguageLoaded"],[5,"prismLanguageError","onLanguageError"]]],[1,"deckgo-highlight-code-edit",{label:[1]}]]]],r)}));var l=function(e){var t=e.pageTitle,n=e.children,r=(0,i.useStaticQuery)("3159585216");return o.createElement("div",{className:"layout-module--container--78b04"},o.createElement("title",null,t," | ",r.site.siteMetadata.title),o.createElement("header",{className:"layout-module--site-title--e4dea"},r.site.siteMetadata.title),o.createElement("nav",null,o.createElement("ul",{className:"layout-module--nav-links--1113b"},o.createElement("li",{className:a},o.createElement(i.Link,{to:"/",className:u},"Home")),o.createElement("li",{className:a},o.createElement(i.Link,{to:"/about",className:u},"About")),o.createElement("li",{className:a},o.createElement(i.Link,{to:"/blog",className:u},"Blog")))),o.createElement("main",null,o.createElement("h1",{className:"layout-module--heading--f158c"},t),n))}},7061:function(e,t,n){var r=n(8698).default;function o(){"use strict";e.exports=o=function(){return t},e.exports.__esModule=!0,e.exports.default=e.exports;var t={},n=Object.prototype,i=n.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},u="function"==typeof Symbol?Symbol:{},c=u.iterator||"@@iterator",l=u.asyncIterator||"@@asyncIterator",s=u.toStringTag||"@@toStringTag";function f(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{f({},"")}catch(P){f=function(e,t,n){return e[t]=n}}function $(e,t,n,r){var o=t&&t.prototype instanceof d?t:d,i=Object.create(o.prototype),u=new O(r||[]);return a(i,"_invoke",{value:L(e,n,u)}),i}function h(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(P){return{type:"throw",arg:P}}}t.wrap=$;var p={};function d(){}function m(){}function v(){}var y={};f(y,c,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(j([])));b&&b!==n&&i.call(b,c)&&(y=b);var w=v.prototype=d.prototype=Object.create(y);function x(e){["next","throw","return"].forEach((function(t){f(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function n(o,a,u,c){var l=h(e[o],e,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==r(f)&&i.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,u,c)}),(function(e){n("throw",e,u,c)})):t.resolve(f).then((function(e){s.value=e,u(s)}),(function(e){return n("throw",e,u,c)}))}c(l.arg)}var o;a(this,"_invoke",{value:function(e,r){function i(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(i,i):i()}})}function L(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return R()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=k(a,n);if(u){if(u===p)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=h(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function k(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var o=h(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,p;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function j(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(i.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:R}}function R(){return{value:void 0,done:!0}}return m.prototype=v,a(w,"constructor",{value:v,configurable:!0}),a(v,"constructor",{value:m,configurable:!0}),m.displayName=f(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,f(e,s,"GeneratorFunction")),e.prototype=Object.create(w),e},t.awrap=function(e){return{__await:e}},x(E.prototype),f(E.prototype,l,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new E($(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},x(w),f(w,s,"Generator"),f(w,c,(function(){return this})),f(w,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var u=i.call(o,"catchLoc"),c=i.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),S(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:j(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},t}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports},8698:function(e){function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},4687:function(e,t,n){var r=n(7061)();e.exports=r;try{regeneratorRuntime=r}catch(o){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},5861:function(e,t,n){"use strict";function r(e,t,n,r,o,i,a){try{var u=e[i](a),c=u.value}catch(l){return void n(l)}u.done?t(c):Promise.resolve(c).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var a=e.apply(t,n);function u(e){r(a,o,i,u,c,"next",e)}function c(e){r(a,o,i,u,c,"throw",e)}u(void 0)}))}}n.d(t,{Z:function(){return o}})},5671:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:function(){return r}})},3144:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(9142);function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(0,r.Z)(o.key),o)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}}}]);
//# sourceMappingURL=ed9bbed841a32b4c7a1582eadf6d71d316bffb3c-c172012fa0e3b0f65e54.js.map