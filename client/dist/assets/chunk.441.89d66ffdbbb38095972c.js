/*! For license information please see chunk.441.89d66ffdbbb38095972c.js.LICENSE.txt */
(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[441],{518:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>l})
var n=r(866),o=r(219),i=r(353),s=r(292),a=r(574),u=r.n(a)
const{keys:c}=Object,h={raw:!1}
class l extends(u()){constructor(){if(super(...arguments),this._document=this._document||window.document,void 0===this._fastBoot){let e=(0,s.getOwner)(this)
this._fastBoot=e.lookup("service:fastboot")}}_getDocumentCookies(){let e=this._document.cookie.split(";")
return this._filterDocumentCookies(e).reduce(((e,t)=>{if(!(0,n.isEmpty)(t)){let[r,n]=t
e[r.trim()]=(n||"").trim()}return e}),{})}_getFastBootCookies(){let e=this._fastBoot.request.cookies
e=c(e).reduce(((t,r)=>{let n=e[r]
return t[r]={value:n},t}),{})
let t=this._fastBootCookiesCache||{}
return e=Object.assign({},e,t),this._fastBootCookiesCache=e,this._filterCachedFastBootCookies(e)}read(e,t={}){let r
return t=Object.assign({},h,t||{}),(0,i.assert)("Domain, Expires, Max-Age, and Path options cannot be set when reading cookies",(0,n.isEmpty)(t.domain)&&(0,n.isEmpty)(t.expires)&&(0,n.isEmpty)(t.maxAge)&&(0,n.isEmpty)(t.path)),r=this._isFastBoot()?this._getFastBootCookies():this._getDocumentCookies(),e?this._decodeValue(r[e],t.raw):(c(r).forEach((e=>r[e]=this._decodeValue(r[e],t.raw))),r)}write(e,t,r={}){r=Object.assign({},h,r||{}),(0,i.assert)("Cookies cannot be set as signed as signed cookies would not be modifyable in the browser as it has no knowledge of the express server's signing key!",!r.signed),(0,i.assert)("Cookies cannot be set with both maxAge and an explicit expiration time!",(0,n.isEmpty)(r.expires)||(0,n.isEmpty)(r.maxAge)),t=this._encodeValue(t,r.raw),(0,i.assert)("Cookies larger than 4096 bytes are not supported by most browsers!",this._isCookieSizeAcceptable(t)),this._isFastBoot()?this._writeFastBootCookie(e,t,r):((0,i.assert)("Cookies cannot be set to be HTTP-only from a browser!",!r.httpOnly),r.path=r.path||this._normalizedDefaultPath(),this._writeDocumentCookie(e,t,r))}clear(e,t={}){t=Object.assign({},t||{}),(0,i.assert)("Expires, Max-Age, and raw options cannot be set when clearing cookies",(0,n.isEmpty)(t.expires)&&(0,n.isEmpty)(t.maxAge)&&(0,n.isEmpty)(t.raw)),t.expires=new Date("1970-01-01"),t.path=t.path||this._normalizedDefaultPath(),this.write(e,null,t)}exists(e){let t
return t=this._isFastBoot()?this._getFastBootCookies():this._getDocumentCookies(),Object.prototype.hasOwnProperty.call(t,e)}_writeDocumentCookie(e,t,r={}){let n=this._serializeCookie(e,t,r)
this._document.cookie=n}_writeFastBootCookie(e,t,r={}){let o=this._fastBoot.response.headers,i=this._serializeCookie(...arguments);(0,n.isEmpty)(r.maxAge)||(r.maxAge*=1e3),this._cacheFastBootCookie(...arguments)
let s=!1,a=o.getAll("set-cookie")
for(let n=0;n<a.length;n++)if(a[n].startsWith(`${e}=`)){a[n]=i,s=!0
break}s||o.append("set-cookie",i)}_cacheFastBootCookie(e,t,r={}){let n=this._fastBootCookiesCache||{},o=Object.assign({},r)
if(o.maxAge){let e=new Date
e.setSeconds(e.getSeconds()+r.maxAge),o.expires=e,delete o.maxAge}n[e]={value:t,options:o},this._fastBootCookiesCache=n}_filterCachedFastBootCookies(e){let{path:t}=this._fastBoot.request,r=(0,o.get)(this._fastBoot,"request.host")
return c(e).reduce(((n,o)=>{let{value:i,options:s}=e[o]
s=s||{}
let{path:a,domain:u,expires:c}=s
return a&&0!==t.indexOf(a)||u&&r.indexOf(u)+u.length!==r.length||c&&c<new Date||(n[o]=i),n}),{})}_encodeValue(e,t){return(0,n.isNone)(e)?"":t?e:encodeURIComponent(e)}_decodeValue(e,t){return(0,n.isNone)(e)||t?e:decodeURIComponent(e)}_filterDocumentCookies(e){return e.map((e=>{let t=e.indexOf("=")
return[e.substring(0,t),e.substring(t+1)]})).filter((e=>2===e.length&&(0,n.isPresent)(e[0])))}_serializeCookie(e,t,r={}){return((e,t,r={})=>{let o=`${e}=${t}`
return(0,n.isEmpty)(r.domain)||(o=`${o}; domain=${r.domain}`),"date"===(0,n.typeOf)(r.expires)&&(o=`${o}; expires=${r.expires.toUTCString()}`),(0,n.isEmpty)(r.maxAge)||(o=`${o}; max-age=${r.maxAge}`),r.secure&&(o=`${o}; secure`),r.httpOnly&&(o=`${o}; httpOnly`),(0,n.isEmpty)(r.path)||(o=`${o}; path=${r.path}`),(0,n.isEmpty)(r.sameSite)||(o=`${o}; SameSite=${r.sameSite}`),o})(e,t,r)}_isCookieSizeAcceptable(e){let t,r=0,n=0
for(;t=e.charCodeAt(n++);)r+=t>>11?3:t>>7?2:1
return r<4096}_normalizedDefaultPath(){if(!this._isFastBoot()){let e=window.location.pathname
return e.substring(0,e.lastIndexOf("/"))}}_isFastBoot(){return this._fastBoot&&this._fastBoot.isFastBoot}}},778:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>a})
var n=r(22),o=r(872),i=r.n(o),s=r(219),a=r.n(s)().extend(i(),{restore:()=>n.ZP.reject(),authenticate:()=>n.ZP.reject(),invalidate:()=>n.ZP.resolve()})},625:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>p})
var n=r(22),o=r(866),i=r(773),s=r(614),a=r(353),u=r(292),c=r(778),h=r(54),l=r(456),p=c.default.extend({clientId:null,serverTokenEndpoint:"/token",serverTokenRevocationEndpoint:null,refreshAccessTokens:!0,get tokenRefreshOffset(){return 1e3*(Math.floor(5*Math.random())+5)},_refreshTokenTimeout:null,restore(e){return new n.ZP.Promise(((t,r)=>{const n=(new Date).getTime(),i=this.get("refreshAccessTokens")
!(0,o.isEmpty)(e.expires_at)&&e.expires_at<n?i?this._refreshAccessToken(e.expires_in,e.refresh_token).then(t,r):r():this._validate(e)?(this._scheduleAccessTokenRefresh(e.expires_in,e.expires_at,e.refresh_token),t(e)):r()}))},authenticate(e,t,r=[],a={}){return new n.ZP.Promise(((n,u)=>{const c={grant_type:"password",username:e,password:t},h=this.get("serverTokenEndpoint"),l=(0,s.makeArray)(r).join(" ");(0,o.isEmpty)(l)||(c.scope=l),this.makeRequest(h,c,a).then((e=>{(0,i.run)((()=>{this._validate(e)||u("access_token is missing in server response")
const t=this._absolutizeExpirationTime(e.expires_in)
this._scheduleAccessTokenRefresh(e.expires_in,t,e.refresh_token),(0,o.isEmpty)(t)||(e=Object.assign(e,{expires_at:t})),n(e)}))}),(e=>{(0,i.run)(null,u,e)}))}))},invalidate(e){const t=this.get("serverTokenRevocationEndpoint")
function r(e){(0,i.cancel)(this._refreshTokenTimeout),delete this._refreshTokenTimeout,e()}return new n.ZP.Promise((i=>{if((0,o.isEmpty)(t))r.apply(this,[i])
else{const a=[];(0,s.A)(["access_token","refresh_token"]).forEach((r=>{const n=e[r];(0,o.isEmpty)(n)||a.push(this.makeRequest(t,{token_type_hint:r,token:n}))}))
const u=()=>{r.apply(this,[i])}
n.ZP.all(a).then(u,u)}}))},makeRequest:(0,l.waitFor)((function(e,t,r={}){r["Content-Type"]="application/x-www-form-urlencoded"
const i=this.get("clientId");(0,o.isEmpty)(i)||(t.client_id=this.get("clientId"))
const s={body:Object.keys(t).map((e=>`${encodeURIComponent(e)}=${encodeURIComponent(t[e])}`)).join("&"),headers:r,method:"POST"}
return new n.ZP.Promise(((t,r)=>{fetch(e,s).then((e=>{e.text().then((n=>{try{let o=JSON.parse(n)
e.ok?t(o):(e.responseJSON=o,r(e))}catch(t){e.responseText=n,r(e)}}))})).catch(r)}))})),_scheduleAccessTokenRefresh(e,t,r){if(this.get("refreshAccessTokens")&&!(0,h.default)((0,u.getOwner)(this))){const n=(new Date).getTime();(0,o.isEmpty)(t)&&!(0,o.isEmpty)(e)&&(t=new Date(n+1e3*e).getTime())
const s=this.get("tokenRefreshOffset")
!(0,o.isEmpty)(r)&&!(0,o.isEmpty)(t)&&t>n-s&&((0,i.cancel)(this._refreshTokenTimeout),delete this._refreshTokenTimeout,this._refreshTokenTimeout=(0,i.later)(this,this._refreshAccessToken,e,r,t-n-s))}},_refreshAccessToken(e,t){const r={grant_type:"refresh_token",refresh_token:t},o=this.get("serverTokenEndpoint")
return new n.ZP.Promise(((n,s)=>{this.makeRequest(o,r).then((r=>{(0,i.run)((()=>{e=r.expires_in||e,t=r.refresh_token||t
const o=this._absolutizeExpirationTime(e),i=Object.assign(r,{expires_in:e,expires_at:o,refresh_token:t})
this._scheduleAccessTokenRefresh(e,null,t),this.trigger("sessionDataUpdated",i),n(i)}))}),(e=>{(0,a.warn)(`Access token could not be refreshed - server responded with ${e.responseJSON}.`,!1,{id:"ember-simple-auth.failedOAuth2TokenRefresh"}),s()}))}))},_absolutizeExpirationTime(e){if(!(0,o.isEmpty)(e))return new Date((new Date).getTime()+1e3*e).getTime()},_validate:e=>!(0,o.isEmpty)(e.access_token)})},114:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>o})
const n="index"
var o={rootURL:"",routeAfterAuthentication:n,load(e){this.rootURL=void 0!==e.rootURL?e.rootURL:"",this.routeAfterAuthentication=void 0!==e.routeAfterAuthentication?e.routeAfterAuthentication:n}}},479:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>d})
var n=r(22),o=r(866),i=r(379),s=r.n(i),a=r(872),u=r.n(a),c=r(219),h=r(353),l=r(292),p=(r(64).Z.extend({init(){this._super(...arguments),this.clear()},persist(e){return this._data=JSON.stringify(e||{}),n.ZP.resolve()},restore(){const e=JSON.parse(this._data)||{}
return n.ZP.resolve(e)},clear(){return delete this._data,this._data="{}",n.ZP.resolve()}}),s().extend(u(),{authenticator:null,store:null,isAuthenticated:!1,attemptedTransition:null,init(){this._super(...arguments),this.set("content",{authenticated:{}}),this.set("store",(0,l.getOwner)(this).lookup("session-store:application")),this._busy=!1,this._bindToStoreEvents()},authenticate(e,...t){return this._busy=!0,(0,h.assert)(`Session#authenticate requires the authenticator to be specified, was "${e}"!`,!(0,o.isEmpty)(e)),this._lookupAuthenticator(e).authenticate(...t).then((t=>(this._busy=!1,this._setup(e,t,!0))),(e=>{const t=()=>n.ZP.Promise.reject(e)
return this._busy=!1,this._clear().then(t,t)}))},invalidate(){if(this._busy=!0,this.set("attemptedTransition",null),!this.get("isAuthenticated"))return this._busy=!1,n.ZP.Promise.resolve()
let e=this._lookupAuthenticator(this.authenticator)
return e.invalidate(this.content.authenticated,...arguments).then((()=>(e.off("sessionDataUpdated",this,this._onSessionDataUpdated),this._busy=!1,this._clear(!0))),(e=>(this.trigger("sessionInvalidationFailed",e),this._busy=!1,n.ZP.Promise.reject(e))))},restore(){this._busy=!0
const e=()=>n.ZP.Promise.reject()
return this.store.restore().then((t=>{let{authenticator:r}=t.authenticated||{}
return r?(delete t.authenticated.authenticator,this._lookupAuthenticator(r).restore(t.authenticated).then((e=>(this.set("content",t),this._busy=!1,this._setup(r,e))),(n=>((0,h.debug)(`The authenticator "${r}" rejected to restore the session - invalidating…`),n&&(0,h.debug)(n),this._busy=!1,this._clearWithContent(t).then(e,e))))):(delete(t||{}).authenticated,this._busy=!1,this._clearWithContent(t).then(e,e))}),(()=>(this._busy=!1,this._clear().then(e,e))))},_setup(e,t,r){return r=Boolean(r)&&!this.get("isAuthenticated"),this.setProperties({isAuthenticated:!0,authenticator:e,"content.authenticated":t}),this._bindToAuthenticatorEvents(),this._updateStore().then((()=>{r&&this.trigger("authenticationSucceeded")}),(()=>{this.setProperties({isAuthenticated:!1,authenticator:null,"content.authenticated":{}})}))},_clear(e){return e=Boolean(e)&&this.get("isAuthenticated"),this.setProperties({isAuthenticated:!1,authenticator:null,"content.authenticated":{}}),this._updateStore().then((()=>{e&&this.trigger("invalidationSucceeded")}))},_clearWithContent(e,t){return this.set("content",e),this._clear(t)},setUnknownProperty(e,t){(0,h.assert)('"authenticated" is a reserved key used by Ember Simple Auth!',"authenticated"!==e)
let r=this._super(e,t)
return/^_/.test(e)||this._updateStore(),r},_updateStore(){let e=this.content
return(0,o.isEmpty)(this.authenticator)||(0,c.set)(e,"authenticated",Object.assign({authenticator:this.authenticator},e.authenticated||{})),this.store.persist(e)},_bindToAuthenticatorEvents(){const e=this._lookupAuthenticator(this.authenticator)
e.on("sessionDataUpdated",this,this._onSessionDataUpdated),e.on("sessionDataInvalidated",this,this._onSessionDataInvalidated)},_onSessionDataUpdated(e){this._setup(this.authenticator,e)},_onSessionDataInvalidated(){this._clear(!0)},_bindToStoreEvents(){this.store.on("sessionDataUpdated",(e=>{if(!this._busy){this._busy=!0
let{authenticator:t}=e.authenticated||{}
t?(delete e.authenticated.authenticator,this._lookupAuthenticator(t).restore(e.authenticated).then((r=>{this.set("content",e),this._busy=!1,this._setup(t,r,!0)}),(r=>{(0,h.debug)(`The authenticator "${t}" rejected to restore the session - invalidating…`),r&&(0,h.debug)(r),this._busy=!1,this._clearWithContent(e,!0)}))):(this._busy=!1,this._clearWithContent(e,!0))}}))},_lookupAuthenticator(e){let t=(0,l.getOwner)(this),r=t.lookup(e)
return(0,h.assert)(`No authenticator for factory "${e}" could be found!`,!(0,o.isNone)(r)),(0,l.setOwner)(r,t),r}}))
function d(e){e.register("session:main",p)}},229:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>d})
var n=r(652),o=r(574),i=r.n(o),s=r(292),a=r(353),u=r(114),c=r(54),h=r(850)
const l=/^data\./
function p(e){e||(0,a.assert)("Ember Simple Auth: session#setup wasn't called. Make sure to call session#setup in your application route's beforeModel hook.",!1)}var d=i().extend({isAuthenticated:(0,n.readOnly)("session.isAuthenticated"),data:(0,n.readOnly)("session.content"),store:(0,n.readOnly)("session.store"),attemptedTransition:(0,n.alias)("session.attemptedTransition"),session:null,init(){this._super(...arguments),this.set("session",(0,s.getOwner)(this).lookup("session:main"))},set(e,t){if(l.test(e)){const r=`session.${e.replace(l,"")}`
return this._super(r,t)}return this._super(...arguments)},_setupHandlers(){this.get("session").on("authenticationSucceeded",(()=>this.handleAuthentication(u.default.routeAfterAuthentication))),this.get("session").on("invalidationSucceeded",(()=>this.handleInvalidation(u.default.rootURL)))},authenticate(){return this.get("session").authenticate(...arguments)},invalidate(){return this.get("session").invalidate(...arguments)},requireAuthentication(e,t){p(this._setupIsCalled)
let r=function(e,t){let r=e.lookup("service:session"),n=r.get("isAuthenticated")
if(!n)if(t&&(0,c.default)(e)){const r=e.lookup("service:fastboot")
e.lookup("service:cookies").write("ember_simple_auth-redirectTarget",t.intent.url,{path:"/",secure:"https"===r.get("request.protocol")})}else t&&r.set("attemptedTransition",t)
return n}((0,s.getOwner)(this),e)
if(!r){let e=typeof t
"string"===e?(o=t,((n=(0,s.getOwner)(this)).lookup("service:router")||n.lookup("router:main")).transitionTo(o)):"function"===e?t():(0,a.assert)(`The second argument to requireAuthentication must be a String or Function, got "${e}"!`,!1)}var n,o
return r},prohibitAuthentication(e){p(this._setupIsCalled)
let t=this.get("isAuthenticated")
if(t){let t=typeof e
"string"===t?(n=e,((r=(0,s.getOwner)(this)).lookup("service:router")||r.lookup("router:main")).transitionTo(n)):"function"===t?e():(0,a.assert)(`The first argument to prohibitAuthentication must be a String or Function, got "${t}"!`,!1)}var r,n
return!t},handleAuthentication(e){!function(e,t){let r=e.lookup("service:session"),n=r.get("attemptedTransition"),o=e.lookup("service:cookies")
const i=o.read("ember_simple_auth-redirectTarget")
let s=e.lookup("service:router")
n?(n.retry(),r.set("attemptedTransition",null)):i?(s.transitionTo(i),o.clear("ember_simple_auth-redirectTarget")):s.transitionTo(t)}((0,s.getOwner)(this),e)},handleInvalidation(e){!function(e,t){(0,c.default)(e)?e.lookup("service:router").transitionTo(t):h.default.replace(t)}((0,s.getOwner)(this),e)},setup(){return this._setupIsCalled=!0,this._setupHandlers(),this.session.restore().catch((()=>{}))}})},945:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>c})
var n=r(219),o=r(574),i=r(292),s=r(64)
const a="_ember_simple_auth_test_key",u=function(){return(0,n.computed)({get(e){return this.get(`_${e}`)},set(e,t){this.set(`_${e}`,t)
let r=this.get("_store")
return r&&r.set(e,t),t}})}
var c=s.Z.extend({localStorageKey:"ember_simple_auth-session",_cookieDomain:null,cookieDomain:u(),_sameSite:null,sameSite:u(),_cookieName:"ember_simple_auth-session",cookieName:u(),_cookiePath:"/",cookiePath:u(),_cookieExpirationTime:null,cookieExpirationTime:u(),_cookies:(0,o.inject)("cookies"),_isLocalStorageAvailable:(0,n.computed)({get:()=>function(){try{return localStorage.setItem(a,!0),localStorage.removeItem(a),!0}catch(e){return!1}}(),set:(e,t)=>t}),init(){this._super(...arguments)
let e,t=(0,i.getOwner)(this)
if(t&&!this.hasOwnProperty("_fastboot")&&(this._fastboot=t.lookup("service:fastboot")),this.get("_isLocalStorageAvailable")){const r=t.lookup("session-store:local-storage"),n={key:this.get("localStorageKey"),_isFastBoot:!1}
r.setProperties(n),e=r}else{const r=t.lookup("session-store:cookie"),n=this.getProperties("cookieDomain","cookieName","cookieExpirationTime","cookiePath","sameSite")
r.setProperties(n),this.set("cookieExpirationTime",r.get("cookieExpirationTime")),e=r}this.set("_store",e),this._setupStoreEvents(e)},_setupStoreEvents(e){return e.on("sessionDataUpdated",(e=>{this.trigger("sessionDataUpdated",e)})),e},persist(){return this.get("_store").persist(...arguments)},restore(){return this.get("_store").restore()},clear(){return this.get("_store").clear()}})},64:(e,t,r)=>{"use strict"
r.d(t,{Z:()=>u})
var n=r(22),o=r(219),i=r.n(o),s=r(872),a=r.n(s),u=i().extend(a(),{persist:()=>n.ZP.reject(),restore:()=>n.ZP.reject(),clear:()=>n.ZP.reject()})},133:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>f})
var n=r(22),o=r(219),i=r(574),s=r(773),a=r(866),u=r(614),c=r(292),h=r(353),l=r(64),p=r(69)
const d=function(e=function(){}){return(0,o.computed)({get(e){return this.get(`_${e}`)},set(t,r){return e.apply(this,[t,r]),this.set(`_${t}`,r),(0,s.scheduleOnce)("actions",this,this.rewriteCookie),r}})}
var f=l.Z.extend({_syncDataTimeout:null,_renewExpirationTimeout:null,_cookieDomain:null,cookieDomain:d(),_sameSite:null,sameSite:d(),_cookieName:"ember_simple_auth-session",cookieName:d((function(){this._oldCookieName=this._cookieName})),_cookiePath:"/",cookiePath:d(),_cookieExpirationTime:null,cookieExpirationTime:d((function(e,t){(0,a.isNone)(t)?this.get("_cookies").clear(`${this.get("cookieName")}-expiration_time`):t<90&&(0,h.warn)("The recommended minimum value for `cookieExpirationTime` is 90 seconds. If your value is less than that, the cookie may expire before its expiration time is extended (expiration time is extended every 60 seconds).",!1,{id:"ember-simple-auth.cookieExpirationTime"})})),_cookies:(0,i.inject)("cookies"),_secureCookies(){return this.get("_fastboot.isFastBoot")?"https:"===this.get("_fastboot.request.protocol"):"https:"===window.location.protocol},_isPageVisible(){return!this.get("_fastboot.isFastBoot")&&"visible"===("undefined"!=typeof document&&(document.visibilityState||"visible"))},init(){this._super(...arguments)
let e=(0,c.getOwner)(this)
e&&!this.hasOwnProperty("_fastboot")&&(this._fastboot=e.lookup("service:fastboot"))
let t=this._read(`${this.get("cookieName")}-expiration_time`)
t&&this.set("cookieExpirationTime",parseInt(t,10)),this.get("_fastboot.isFastBoot")?this._renew():(0,s.next)((()=>{this._syncData().then((()=>{this._renewExpiration()}))}))},persist(e){this._lastData=e,e=JSON.stringify(e||{})
let t=this._calculateExpirationTime()
return this._write(e,t),n.ZP.resolve()},restore(){let e=this._read(this.get("cookieName"))
return(0,a.isEmpty)(e)?n.ZP.resolve({}):n.ZP.resolve(JSON.parse(e))},clear(){return this._write("",0),this._lastData={},n.ZP.resolve()},_read(e){return this.get("_cookies").read(e)||""},_calculateExpirationTime(){let e=this._read(`${this.get("cookieName")}-expiration_time`)
return e=e?(new Date).getTime()+1e3*e:null,this.get("cookieExpirationTime")?(new Date).getTime()+1e3*this.get("cookieExpirationTime"):e},_write(e,t){let r={domain:this.get("cookieDomain"),expires:(0,a.isEmpty)(t)?null:new Date(t),path:this.get("cookiePath"),secure:this._secureCookies(),sameSite:this.get("sameSite")}
if(this._oldCookieName&&((0,u.A)([this._oldCookieName,`${this._oldCookieName}-expiration_time`]).forEach((e=>{this.get("_cookies").clear(e)})),delete this._oldCookieName),this.get("_cookies").write(this.get("cookieName"),e,r),!(0,a.isEmpty)(t)){let e=`${this.get("cookieName")}-expiration_time`,t=this.get("_cookies").read(e)
this.get("_cookies").write(e,this.get("cookieExpirationTime")||t,r)}},_syncData(){return this.restore().then((e=>{(0,p.default)(e,this._lastData)||(this._lastData=e,this.trigger("sessionDataUpdated",e)),(0,s.cancel)(this._syncDataTimeout),this._syncDataTimeout=(0,s.later)(this,this._syncData,500)}))},_renew(){return this.restore().then((e=>{if(!(0,a.isEmpty)(e)&&(e.constructor!==Object||0!==Object.keys(e).length)){e="string"===(0,a.typeOf)(e)?e:JSON.stringify(e||{})
let t=this._calculateExpirationTime()
this._write(e,t)}}))},_renewExpiration(){return(0,s.cancel)(this._renewExpirationTimeout),this._renewExpirationTimeout=(0,s.later)(this,this._renewExpiration,6e4),this._isPageVisible()?this._renew():n.ZP.resolve()},rewriteCookie(){const e=this._oldCookieName||this._cookieName,t=this._read(e)
if((0,a.isPresent)(t)){const e=this._calculateExpirationTime()
this._write(t,e)}}})},349:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>c})
var n=r(22),o=r(773),i=r(292),s=r(64),a=r(69),u=r(54),c=s.Z.extend({key:"ember_simple_auth-session",init(){this._super(...arguments),this._isFastBoot=this.hasOwnProperty("_isFastBoot")?this._isFastBoot:(0,u.default)((0,i.getOwner)(this)),this._boundHandler=(0,o.bind)(this,this._handleStorageEvent),this.get("_isFastBoot")||window.addEventListener("storage",this._boundHandler)},willDestroy(){this.get("_isFastBoot")||window.removeEventListener("storage",this._boundHandler)},persist(e){return this._lastData=e,e=JSON.stringify(e||{}),localStorage.setItem(this.key,e),n.ZP.resolve()},restore(){let e=localStorage.getItem(this.key)
return n.ZP.resolve(JSON.parse(e)||{})},clear(){return localStorage.removeItem(this.key),this._lastData={},n.ZP.resolve()},_handleStorageEvent(e){e.key===this.get("key")&&this.restore().then((e=>{(0,a.default)(e,this._lastData)||(this._lastData=e,this.trigger("sessionDataUpdated",e))}))}})},177:(e,t,r)=>{"use strict"
function n(e,t,r,n){(e.inject||e.injection).call(e,t,r,n)}r.r(t),r.d(t,{default:()=>n})},54:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>o})
var n=r(353)
function o(e){(0,n.assert)("You must pass in an owner to isFastBoot!",e&&"function"==typeof e.lookup)
const t=e.lookup("service:fastboot")
return!!t&&t.get("isFastBoot")}},850:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>n})
const n=new class{constructor(){var e,t,r
e=this,t="location",r=window.location,(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e
var r=e[Symbol.toPrimitive]
if(void 0!==r){var n=r.call(e,"string")
if("object"!=typeof n)return n
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}replace(...e){this.location.replace(...e)}}},69:(e,t,r)=>{"use strict"
function n(e,t){return function e(t,r){let n
if(isNaN(t)&&isNaN(r)&&"number"==typeof t&&"number"==typeof r)return!0
if(t===r)return!0
if(!(t instanceof Object&&r instanceof Object))return!1
for(n in r){if(r.hasOwnProperty(n)!==t.hasOwnProperty(n))return!1
if(typeof r[n]!=typeof t[n])return!1}for(n in t){if(r.hasOwnProperty(n)!==t.hasOwnProperty(n))return!1
if(typeof r[n]!=typeof t[n])return!1
if("object"==typeof t[n]){if(!e(t[n],r[n]))return!1}else if(t[n]!==r[n])return!1}return!0}(e,t)}r.r(t),r.d(t,{default:()=>n})},589:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>s})
var n=r(797),o=r.n(n),i=r(698)
class s extends(o()){compute(e){for(let t=0,r=e.length;t<r;t++)if(!1===(0,i.Z)(e[t]))return e[t]
return e[e.length-1]}}},500:(e,t,r)=>{"use strict"
function n(e,t){return e===t}r.r(t),r.d(t,{default:()=>n})},217:(e,t,r)=>{"use strict"
function n(e,t,r){return r?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e>t}r.r(t),r.d(t,{default:()=>n})},733:(e,t,r)=>{"use strict"
function n(e,t,r){return r?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e>=t}r.r(t),r.d(t,{default:()=>n})},270:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>o})
var n=r(614)
function o(...e){return e.every(n.isArray)}},583:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>n.isEmpty})
var n=r(866)},370:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>n.isEqual})
var n=r(866)},878:(e,t,r)=>{"use strict"
function n(e,t,r){return r?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e<t}r.r(t),r.d(t,{default:()=>n})},871:(e,t,r)=>{"use strict"
function n(e,t,r){return r?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e<=t}r.r(t),r.d(t,{default:()=>n})},57:(e,t,r)=>{"use strict"
function n(e,t){return e!==t}r.r(t),r.d(t,{default:()=>n})},966:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>o})
var n=r(698)
function o(...e){return e.every((e=>!(0,n.Z)(e)))}},254:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>s})
var n=r(698),o=r(797),i=r.n(o)
class s extends(i()){compute(e){for(let t=0,r=e.length;t<r;t++)if(!0===(0,n.Z)(e[t]))return e[t]
return e[e.length-1]}}},540:(e,t,r)=>{"use strict"
r.r(t),r.d(t,{default:()=>o})
var n=r(698)
function o(e,t){return(0,n.Z)(e)!==(0,n.Z)(t)}},698:(e,t,r)=>{"use strict"
r.d(t,{Z:()=>o})
var n=r(614)
function o(e){return"object"==typeof e&&e&&"isTruthy"in e&&"boolean"==typeof e.isTruthy?e.isTruthy:(0,n.isArray)(e)?0!==e.length:!!e}},22:(e,t,r)=>{"use strict"
function n(e,t){for(var r=0,n=e.length;r<n;r++)if(e[r]===t)return r
return-1}function o(e){var t=e._promiseCallbacks
return t||(t=e._promiseCallbacks={}),t}r.d(t,{ZP:()=>ye})
var i={mixin:function(e){return e.on=this.on,e.off=this.off,e.trigger=this.trigger,e._promiseCallbacks=void 0,e},on:function(e,t){if("function"!=typeof t)throw new TypeError("Callback must be a function")
var r=o(this),i=void 0;(i=r[e])||(i=r[e]=[]),-1===n(i,t)&&i.push(t)},off:function(e,t){var r,i=o(this),s=void 0
t?-1!==(r=n(s=i[e],t))&&s.splice(r,1):i[e]=[]},trigger:function(e,t,r){var n
if(n=o(this)[e])for(var i=0;i<n.length;i++)(0,n[i])(t,r)}},s={instrument:!1}
function a(e,t){if(2!==arguments.length)return s[e]
s[e]=t}function u(e){return"function"==typeof e}function c(e){return null!==e&&"object"==typeof e}i.mixin(s)
var h=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)},l=Date.now||function(){return(new Date).getTime()},p=[]
function d(e,t,r){1===p.push({name:e,payload:{key:t._guidKey,id:t._id,eventName:e,detail:t._result,childId:r&&r._id,label:t._label,timeStamp:l(),error:s["instrument-with-stack"]?new Error(t._label):null}})&&setTimeout((function(){for(var e=0;e<p.length;e++){var t=p[e],r=t.payload
r.guid=r.key+r.id,r.childGuid=r.key+r.childId,r.error&&(r.stack=r.error.stack),s.trigger(t.name,t.payload)}p.length=0}),50)}function f(e,t){if(e&&"object"==typeof e&&e.constructor===this)return e
var r=new this(m,t)
return k(r,e),r}function m(){}var g=void 0,v=1,_=2,y=new S
function b(e){try{return e.then}catch(e){return y.error=e,y}}function w(e,t,r){t.constructor===e.constructor&&r===z&&e.constructor.resolve===f?function(e,t){t._state===v?A(e,t._result):t._state===_?(t._onError=null,E(e,t._result)):P(t,void 0,(function(r){t!==r?k(e,r):A(e,r)}),(function(t){return E(e,t)}))}(e,t):r===y?(E(e,y.error),y.error=null):u(r)?function(e,t,r){s.async((function(e){var n=!1,o=function(r,o,i,s){try{r.call(o,(function(r){n||(n=!0,t!==r?k(e,r):A(e,r))}),(function(t){n||(n=!0,E(e,t))}))}catch(e){return e}}(r,t,0,0,e._label)
!n&&o&&(n=!0,E(e,o))}),e)}(e,t,r):A(e,t)}function k(e,t){var r,n
e===t?A(e,t):(n=typeof(r=t),null===r||"object"!==n&&"function"!==n?A(e,t):w(e,t,b(t)))}function x(e){e._onError&&e._onError(e._result),T(e)}function A(e,t){e._state===g&&(e._result=t,e._state=v,0===e._subscribers.length?s.instrument&&d("fulfilled",e):s.async(T,e))}function E(e,t){e._state===g&&(e._state=_,e._result=t,s.async(x,e))}function P(e,t,r,n){var o=e._subscribers,i=o.length
e._onError=null,o[i]=t,o[i+v]=r,o[i+_]=n,0===i&&e._state&&s.async(T,e)}function T(e){var t=e._subscribers,r=e._state
if(s.instrument&&d(r===v?"fulfilled":"rejected",e),0!==t.length){for(var n=void 0,o=void 0,i=e._result,a=0;a<t.length;a+=3)n=t[a],o=t[a+r],n?O(r,n,o,i):o(i)
e._subscribers.length=0}}function S(){this.error=null}var j=new S
function O(e,t,r,n){var o=u(r),i=void 0,s=void 0
if(o){if(i=function(e,t){try{return e(t)}catch(e){return j.error=e,j}}(r,n),i===j)s=i.error,i.error=null
else if(i===t)return void E(t,new TypeError("A promises callback cannot return that same promise."))}else i=n
t._state!==g||(o&&void 0===s?k(t,i):void 0!==s?E(t,s):e===v?A(t,i):e===_&&E(t,i))}function z(e,t,r){var n=this,o=n._state
if(o===v&&!e||o===_&&!t)return s.instrument&&d("chained",n,n),n
n._onError=null
var i=new n.constructor(m,r),a=n._result
if(s.instrument&&d("chained",n,i),o===g)P(n,i,e,t)
else{var u=o===v?e:t
s.async((function(){return O(o,i,u,a)}))}return i}var C=function(){function e(e,t,r,n){this._instanceConstructor=e,this.promise=new e(m,n),this._abortOnReject=r,this._init.apply(this,arguments)}return e.prototype._init=function(e,t){var r=t.length||0
this.length=r,this._remaining=r,this._result=new Array(r),this._enumerate(t),0===this._remaining&&A(this.promise,this._result)},e.prototype._enumerate=function(e){for(var t=this.length,r=this.promise,n=0;r._state===g&&n<t;n++)this._eachEntry(e[n],n)},e.prototype._settleMaybeThenable=function(e,t){var r=this._instanceConstructor,n=r.resolve
if(n===f){var o=b(e)
if(o===z&&e._state!==g)e._onError=null,this._settledAt(e._state,t,e._result)
else if("function"!=typeof o)this._remaining--,this._result[t]=this._makeResult(v,t,e)
else if(r===D){var i=new r(m)
w(i,e,o),this._willSettleAt(i,t)}else this._willSettleAt(new r((function(t){return t(e)})),t)}else this._willSettleAt(n(e),t)},e.prototype._eachEntry=function(e,t){var r
null!==(r=e)&&"object"==typeof r?this._settleMaybeThenable(e,t):(this._remaining--,this._result[t]=this._makeResult(v,t,e))},e.prototype._settledAt=function(e,t,r){var n=this.promise
n._state===g&&(this._abortOnReject&&e===_?E(n,r):(this._remaining--,this._result[t]=this._makeResult(e,t,r),0===this._remaining&&A(n,this._result)))},e.prototype._makeResult=function(e,t,r){return r},e.prototype._willSettleAt=function(e,t){var r=this
P(e,void 0,(function(e){return r._settledAt(v,t,e)}),(function(e){return r._settledAt(_,t,e)}))},e}()
function I(e,t,r){return e===v?{state:"fulfilled",value:r}:{state:"rejected",reason:r}}var Q="rsvp_"+l()+"-",R=0,D=function(){function e(t,r){this._id=R++,this._label=r,this._state=void 0,this._result=void 0,this._subscribers=[],s.instrument&&d("created",this),m!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(e,t){var r=!1
try{t((function(t){r||(r=!0,k(e,t))}),(function(t){r||(r=!0,E(e,t))}))}catch(t){E(e,t)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype._onError=function(e){var t=this
s.after((function(){t._onError&&s.trigger("error",e,t._label)}))},e.prototype.catch=function(e,t){return this.then(void 0,e,t)},e.prototype.finally=function(e,t){var r=this.constructor
return this.then((function(t){return r.resolve(e()).then((function(){return t}))}),(function(t){return r.resolve(e()).then((function(){throw t}))}),t)},e}()
function U(){this.value=void 0}D.cast=f,D.all=function(e,t){return h(e)?new C(this,e,!0,t).promise:this.reject(new TypeError("Promise.all must be called with an array"),t)},D.race=function(e,t){var r=new this(m,t)
if(!h(e))return E(r,new TypeError("Promise.race must be called with an array")),r
for(var n=0;r._state===g&&n<e.length;n++)P(this.resolve(e[n]),void 0,(function(e){return k(r,e)}),(function(e){return E(r,e)}))
return r},D.resolve=f,D.reject=function(e,t){var r=new this(m,t)
return E(r,e),r},D.prototype._guidKey=Q,D.prototype.then=z
var F=new U,N=new U
function q(e,t,r){try{e.apply(t,r)}catch(e){return F.value=e,F}}function $(e,t){return{then:function(r,n){return e.call(t,r,n)}}}function B(e){return!(!e||"object"!=typeof e)&&(e.constructor===D||function(e){try{return e.then}catch(e){return F.value=e,F}}(e))}var Z=function(e){function t(t,r,n){return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,t,r,!1,n))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(C)
Z.prototype._makeResult=I
var H=Object.prototype.hasOwnProperty,L=function(e){function t(t,r){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=arguments[3]
return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,t,r,n,o))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype._init=function(e,t){this._result={},this._enumerate(t),0===this._remaining&&A(this.promise,this._result)},t.prototype._enumerate=function(e){var t=this.promise,r=[]
for(var n in e)H.call(e,n)&&r.push({position:n,entry:e[n]})
var o=r.length
this._remaining=o
for(var i=void 0,s=0;t._state===g&&s<o;s++)i=r[s],this._eachEntry(i.entry,i.position)},t}(C),M=function(e){function t(t,r,n){return function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,t,r,!1,n))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t)
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(L)
function V(e,t){return D.resolve(e,t)}function J(e,t){return D.all(e,t)}M.prototype._makeResult=I
var W=0,K=void 0
function Y(e,t){oe[W]=e,oe[W+1]=t,2===(W+=2)&&de()}var G="undefined"!=typeof window?window:void 0,X=G||{},ee=X.MutationObserver||X.WebKitMutationObserver,te="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),re="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel
function ne(){return function(){return setTimeout(ie,1)}}var oe=new Array(1e3)
function ie(){for(var e=0;e<W;e+=2)(0,oe[e])(oe[e+1]),oe[e]=void 0,oe[e+1]=void 0
W=0}var se,ae,ue,ce,he,le,pe,de=void 0
if(te?(he=process.nextTick,le=process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/),Array.isArray(le)&&"0"===le[1]&&"10"===le[2]&&(he=setImmediate),de=function(){return he(ie)}):ee?(ae=0,ue=new ee(ie),ce=document.createTextNode(""),ue.observe(ce,{characterData:!0}),de=function(){return ce.data=ae=++ae%2}):re?((se=new MessageChannel).port1.onmessage=ie,de=function(){return se.port2.postMessage(0)}):de=void 0===G?function(){try{var e=r(927)
return void 0!==(K=e.runOnLoop||e.runOnContext)?function(){K(ie)}:ne()}catch(e){return ne()}}():ne(),"object"==typeof self)self
else{if("object"!=typeof global)throw new Error("no global: `self` or `global` found")
global}function fe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}s.async=Y,s.after=function(e){return setTimeout(e,0)}
var me=V
function ge(){s.on.apply(s,arguments)}if("undefined"!=typeof window&&"object"==typeof window.__PROMISE_INSTRUMENTATION__){var ve=window.__PROMISE_INSTRUMENTATION__
for(var _e in a("instrument",!0),ve)ve.hasOwnProperty(_e)&&ge(_e,ve[_e])}const ye=(fe(pe={asap:Y,cast:me,Promise:D,EventTarget:i,all:function(e,t){return D.all(e,t)},allSettled:function(e,t){return h(e)?new Z(D,e,t).promise:D.reject(new TypeError("Promise.allSettled must be called with an array"),t)},race:function(e,t){return D.race(e,t)},hash:function(e,t){return c(e)?new L(D,e,t).promise:D.reject(new TypeError("Promise.hash must be called with an object"),t)},hashSettled:function(e,t){return c(e)?new M(D,e,!1,t).promise:D.reject(new TypeError("RSVP.hashSettled must be called with an object"),t)},rethrow:function(e){throw setTimeout((function(){throw e})),e},defer:function(e){var t={resolve:void 0,reject:void 0}
return t.promise=new D((function(e,r){t.resolve=e,t.reject=r}),e),t},denodeify:function(e,t){var r=function(){for(var r=arguments.length,n=new Array(r+1),o=!1,i=0;i<r;++i){var s=arguments[i]
if(!o){if((o=B(s))===N){var a=new D(m)
return E(a,N.value),a}o&&!0!==o&&(s=$(o,s))}n[i]=s}var u=new D(m)
return n[r]=function(e,r){e?E(u,e):void 0===t?k(u,r):!0===t?k(u,function(e){for(var t=e.length,r=new Array(t-1),n=1;n<t;n++)r[n-1]=e[n]
return r}(arguments)):h(t)?k(u,function(e,t){for(var r={},n=e.length,o=new Array(n),i=0;i<n;i++)o[i]=e[i]
for(var s=0;s<t.length;s++)r[t[s]]=o[s+1]
return r}(arguments,t)):k(u,r)},o?function(e,t,r,n){return D.all(t).then((function(t){var o=q(r,n,t)
return o===F&&E(e,o.value),e}))}(u,n,e,this):function(e,t,r,n){var o=q(r,n,t)
return o===F&&E(e,o.value),e}(u,n,e,this)}
return r.__proto__=e,r},configure:a,on:ge,off:function(){s.off.apply(s,arguments)},resolve:V,reject:function(e,t){return D.reject(e,t)},map:function(e,t,r){return h(e)?u(t)?D.all(e,r).then((function(e){for(var n=e.length,o=new Array(n),i=0;i<n;i++)o[i]=t(e[i])
return D.all(o,r)})):D.reject(new TypeError("RSVP.map expects a function as a second argument"),r):D.reject(new TypeError("RSVP.map must be called with an array"),r)}},"async",(function(e,t){return s.async(e,t)})),fe(pe,"filter",(function(e,t,r){return h(e)||c(e)&&void 0!==e.then?u(t)?(h(e)?J(e,r):function(e,t){return D.resolve(e,t).then((function(e){return J(e,t)}))}(e,r)).then((function(e){for(var n=e.length,o=new Array(n),i=0;i<n;i++)o[i]=t(e[i])
return J(o,r).then((function(t){for(var r=new Array(n),o=0,i=0;i<n;i++)t[i]&&(r[o]=e[i],o++)
return r.length=o,r}))})):D.reject(new TypeError("RSVP.filter expects function as a second argument"),r):D.reject(new TypeError("RSVP.filter must be called with an array or promise"),r)})),pe)},879:function(e,t,r){var n,o
!function(i,s){"use strict"
e.exports?e.exports=s():void 0===(o="function"==typeof(n=s)?n.call(t,r,t,e):n)||(e.exports=o)}(0,(function(e){"use strict"
var t=e&&e.IPv6
return{best:function(e){var t,r,n=e.toLowerCase().split(":"),o=n.length,i=8
for(""===n[0]&&""===n[1]&&""===n[2]?(n.shift(),n.shift()):""===n[0]&&""===n[1]?n.shift():""===n[o-1]&&""===n[o-2]&&n.pop(),-1!==n[(o=n.length)-1].indexOf(".")&&(i=7),t=0;t<o&&""!==n[t];t++);if(t<i)for(n.splice(t,1,"0000");n.length<i;)n.splice(t,0,"0000")
for(var s=0;s<i;s++){r=n[s].split("")
for(var a=0;a<3&&"0"===r[0]&&r.length>1;a++)r.splice(0,1)
n[s]=r.join("")}var u=-1,c=0,h=0,l=-1,p=!1
for(s=0;s<i;s++)p?"0"===n[s]?h+=1:(p=!1,h>c&&(u=l,c=h)):"0"===n[s]&&(p=!0,l=s,h=1)
h>c&&(u=l,c=h),c>1&&n.splice(u,c,""),o=n.length
var d=""
for(""===n[0]&&(d=":"),s=0;s<o&&(d+=n[s],s!==o-1);s++)d+=":"
return""===n[o-1]&&(d+=":"),d},noConflict:function(){return e.IPv6===this&&(e.IPv6=t),this}}}))},452:function(e,t,r){var n,o
!function(i,s){"use strict"
e.exports?e.exports=s():void 0===(o="function"==typeof(n=s)?n.call(t,r,t,e):n)||(e.exports=o)}(0,(function(e){"use strict"
var t=e&&e.SecondLevelDomains,r={list:{ac:" com gov mil net org ",ae:" ac co gov mil name net org pro sch ",af:" com edu gov net org ",al:" com edu gov mil net org ",ao:" co ed gv it og pb ",ar:" com edu gob gov int mil net org tur ",at:" ac co gv or ",au:" asn com csiro edu gov id net org ",ba:" co com edu gov mil net org rs unbi unmo unsa untz unze ",bb:" biz co com edu gov info net org store tv ",bh:" biz cc com edu gov info net org ",bn:" com edu gov net org ",bo:" com edu gob gov int mil net org tv ",br:" adm adv agr am arq art ato b bio blog bmd cim cng cnt com coop ecn edu eng esp etc eti far flog fm fnd fot fst g12 ggf gov imb ind inf jor jus lel mat med mil mus net nom not ntr odo org ppg pro psc psi qsl rec slg srv tmp trd tur tv vet vlog wiki zlg ",bs:" com edu gov net org ",bz:" du et om ov rg ",ca:" ab bc mb nb nf nl ns nt nu on pe qc sk yk ",ck:" biz co edu gen gov info net org ",cn:" ac ah bj com cq edu fj gd gov gs gx gz ha hb he hi hl hn jl js jx ln mil net nm nx org qh sc sd sh sn sx tj tw xj xz yn zj ",co:" com edu gov mil net nom org ",cr:" ac c co ed fi go or sa ",cy:" ac biz com ekloges gov ltd name net org parliament press pro tm ",do:" art com edu gob gov mil net org sld web ",dz:" art asso com edu gov net org pol ",ec:" com edu fin gov info med mil net org pro ",eg:" com edu eun gov mil name net org sci ",er:" com edu gov ind mil net org rochest w ",es:" com edu gob nom org ",et:" biz com edu gov info name net org ",fj:" ac biz com info mil name net org pro ",fk:" ac co gov net nom org ",fr:" asso com f gouv nom prd presse tm ",gg:" co net org ",gh:" com edu gov mil org ",gn:" ac com gov net org ",gr:" com edu gov mil net org ",gt:" com edu gob ind mil net org ",gu:" com edu gov net org ",hk:" com edu gov idv net org ",hu:" 2000 agrar bolt casino city co erotica erotika film forum games hotel info ingatlan jogasz konyvelo lakas media news org priv reklam sex shop sport suli szex tm tozsde utazas video ",id:" ac co go mil net or sch web ",il:" ac co gov idf k12 muni net org ",in:" ac co edu ernet firm gen gov i ind mil net nic org res ",iq:" com edu gov i mil net org ",ir:" ac co dnssec gov i id net org sch ",it:" edu gov ",je:" co net org ",jo:" com edu gov mil name net org sch ",jp:" ac ad co ed go gr lg ne or ",ke:" ac co go info me mobi ne or sc ",kh:" com edu gov mil net org per ",ki:" biz com de edu gov info mob net org tel ",km:" asso com coop edu gouv k medecin mil nom notaires pharmaciens presse tm veterinaire ",kn:" edu gov net org ",kr:" ac busan chungbuk chungnam co daegu daejeon es gangwon go gwangju gyeongbuk gyeonggi gyeongnam hs incheon jeju jeonbuk jeonnam k kg mil ms ne or pe re sc seoul ulsan ",kw:" com edu gov net org ",ky:" com edu gov net org ",kz:" com edu gov mil net org ",lb:" com edu gov net org ",lk:" assn com edu gov grp hotel int ltd net ngo org sch soc web ",lr:" com edu gov net org ",lv:" asn com conf edu gov id mil net org ",ly:" com edu gov id med net org plc sch ",ma:" ac co gov m net org press ",mc:" asso tm ",me:" ac co edu gov its net org priv ",mg:" com edu gov mil nom org prd tm ",mk:" com edu gov inf name net org pro ",ml:" com edu gov net org presse ",mn:" edu gov org ",mo:" com edu gov net org ",mt:" com edu gov net org ",mv:" aero biz com coop edu gov info int mil museum name net org pro ",mw:" ac co com coop edu gov int museum net org ",mx:" com edu gob net org ",my:" com edu gov mil name net org sch ",nf:" arts com firm info net other per rec store web ",ng:" biz com edu gov mil mobi name net org sch ",ni:" ac co com edu gob mil net nom org ",np:" com edu gov mil net org ",nr:" biz com edu gov info net org ",om:" ac biz co com edu gov med mil museum net org pro sch ",pe:" com edu gob mil net nom org sld ",ph:" com edu gov i mil net ngo org ",pk:" biz com edu fam gob gok gon gop gos gov net org web ",pl:" art bialystok biz com edu gda gdansk gorzow gov info katowice krakow lodz lublin mil net ngo olsztyn org poznan pwr radom slupsk szczecin torun warszawa waw wroc wroclaw zgora ",pr:" ac biz com edu est gov info isla name net org pro prof ",ps:" com edu gov net org plo sec ",pw:" belau co ed go ne or ",ro:" arts com firm info nom nt org rec store tm www ",rs:" ac co edu gov in org ",sb:" com edu gov net org ",sc:" com edu gov net org ",sh:" co com edu gov net nom org ",sl:" com edu gov net org ",st:" co com consulado edu embaixada gov mil net org principe saotome store ",sv:" com edu gob org red ",sz:" ac co org ",tr:" av bbs bel biz com dr edu gen gov info k12 name net org pol tel tsk tv web ",tt:" aero biz cat co com coop edu gov info int jobs mil mobi museum name net org pro tel travel ",tw:" club com ebiz edu game gov idv mil net org ",mu:" ac co com gov net or org ",mz:" ac co edu gov org ",na:" co com ",nz:" ac co cri geek gen govt health iwi maori mil net org parliament school ",pa:" abo ac com edu gob ing med net nom org sld ",pt:" com edu gov int net nome org publ ",py:" com edu gov mil net org ",qa:" com edu gov mil net org ",re:" asso com nom ",ru:" ac adygeya altai amur arkhangelsk astrakhan bashkiria belgorod bir bryansk buryatia cbg chel chelyabinsk chita chukotka chuvashia com dagestan e-burg edu gov grozny int irkutsk ivanovo izhevsk jar joshkar-ola kalmykia kaluga kamchatka karelia kazan kchr kemerovo khabarovsk khakassia khv kirov koenig komi kostroma kranoyarsk kuban kurgan kursk lipetsk magadan mari mari-el marine mil mordovia mosreg msk murmansk nalchik net nnov nov novosibirsk nsk omsk orenburg org oryol penza perm pp pskov ptz rnd ryazan sakhalin samara saratov simbirsk smolensk spb stavropol stv surgut tambov tatarstan tom tomsk tsaritsyn tsk tula tuva tver tyumen udm udmurtia ulan-ude vladikavkaz vladimir vladivostok volgograd vologda voronezh vrn vyatka yakutia yamal yekaterinburg yuzhno-sakhalinsk ",rw:" ac co com edu gouv gov int mil net ",sa:" com edu gov med net org pub sch ",sd:" com edu gov info med net org tv ",se:" a ac b bd c d e f g h i k l m n o org p parti pp press r s t tm u w x y z ",sg:" com edu gov idn net org per ",sn:" art com edu gouv org perso univ ",sy:" com edu gov mil net news org ",th:" ac co go in mi net or ",tj:" ac biz co com edu go gov info int mil name net nic org test web ",tn:" agrinet com defense edunet ens fin gov ind info intl mincom nat net org perso rnrt rns rnu tourism ",tz:" ac co go ne or ",ua:" biz cherkassy chernigov chernovtsy ck cn co com crimea cv dn dnepropetrovsk donetsk dp edu gov if in ivano-frankivsk kh kharkov kherson khmelnitskiy kiev kirovograd km kr ks kv lg lugansk lutsk lviv me mk net nikolaev od odessa org pl poltava pp rovno rv sebastopol sumy te ternopil uzhgorod vinnica vn zaporizhzhe zhitomir zp zt ",ug:" ac co go ne or org sc ",uk:" ac bl british-library co cym gov govt icnet jet lea ltd me mil mod national-library-scotland nel net nhs nic nls org orgn parliament plc police sch scot soc ",us:" dni fed isa kids nsn ",uy:" com edu gub mil net org ",ve:" co com edu gob info mil net org web ",vi:" co com k12 net org ",vn:" ac biz com edu gov health info int name net org pro ",ye:" co com gov ltd me net org plc ",yu:" ac co edu gov org ",za:" ac agric alt bourse city co cybernet db edu gov grondar iaccess imt inca landesign law mil net ngo nis nom olivetti org pix school tm web ",zm:" ac co com edu gov net org sch ",com:"ar br cn de eu gb gr hu jpn kr no qc ru sa se uk us uy za ",net:"gb jp se uk ",org:"ae",de:"com "},has:function(e){var t=e.lastIndexOf(".")
if(t<=0||t>=e.length-1)return!1
var n=e.lastIndexOf(".",t-1)
if(n<=0||n>=t-1)return!1
var o=r.list[e.slice(t+1)]
return!!o&&o.indexOf(" "+e.slice(n+1,t)+" ")>=0},is:function(e){var t=e.lastIndexOf(".")
if(t<=0||t>=e.length-1)return!1
if(e.lastIndexOf(".",t-1)>=0)return!1
var n=r.list[e.slice(t+1)]
return!!n&&n.indexOf(" "+e.slice(0,t)+" ")>=0},get:function(e){var t=e.lastIndexOf(".")
if(t<=0||t>=e.length-1)return null
var n=e.lastIndexOf(".",t-1)
if(n<=0||n>=t-1)return null
var o=r.list[e.slice(t+1)]
return o?o.indexOf(" "+e.slice(n+1,t)+" ")<0?null:e.slice(n+1):null},noConflict:function(){return e.SecondLevelDomains===this&&(e.SecondLevelDomains=t),this}}
return r}))},275:function(e,t,r){var n,o,i
!function(s,a){"use strict"
e.exports?e.exports=a(r(192),r(879),r(452)):(o=[r(192),r(879),r(452)],void 0===(i="function"==typeof(n=a)?n.apply(t,o):n)||(e.exports=i))}(0,(function(e,t,r,n){"use strict"
var o=n&&n.URI
function i(e,t){var r=arguments.length>=1
if(!(this instanceof i))return r?arguments.length>=2?new i(e,t):new i(e):new i
if(void 0===e){if(r)throw new TypeError("undefined is not a valid argument for URI")
e="undefined"!=typeof location?location.href+"":""}if(null===e&&r)throw new TypeError("null is not a valid argument for URI")
return this.href(e),void 0!==t?this.absoluteTo(t):this}i.version="1.19.11"
var s=i.prototype,a=Object.prototype.hasOwnProperty
function u(e){return e.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}function c(e){return void 0===e?"Undefined":String(Object.prototype.toString.call(e)).slice(8,-1)}function h(e){return"Array"===c(e)}function l(e,t){var r,n,o={}
if("RegExp"===c(t))o=null
else if(h(t))for(r=0,n=t.length;r<n;r++)o[t[r]]=!0
else o[t]=!0
for(r=0,n=e.length;r<n;r++)(o&&void 0!==o[e[r]]||!o&&t.test(e[r]))&&(e.splice(r,1),n--,r--)
return e}function p(e,t){var r,n
if(h(t)){for(r=0,n=t.length;r<n;r++)if(!p(e,t[r]))return!1
return!0}var o=c(t)
for(r=0,n=e.length;r<n;r++)if("RegExp"===o){if("string"==typeof e[r]&&e[r].match(t))return!0}else if(e[r]===t)return!0
return!1}function d(e,t){if(!h(e)||!h(t))return!1
if(e.length!==t.length)return!1
e.sort(),t.sort()
for(var r=0,n=e.length;r<n;r++)if(e[r]!==t[r])return!1
return!0}function f(e){return e.replace(/^\/+|\/+$/g,"")}function m(e){return escape(e)}function g(e){return encodeURIComponent(e).replace(/[!'()*]/g,m).replace(/\*/g,"%2A")}i._parts=function(){return{protocol:null,username:null,password:null,hostname:null,urn:null,port:null,path:null,query:null,fragment:null,preventInvalidHostname:i.preventInvalidHostname,duplicateQueryParameters:i.duplicateQueryParameters,escapeQuerySpace:i.escapeQuerySpace}},i.preventInvalidHostname=!1,i.duplicateQueryParameters=!1,i.escapeQuerySpace=!0,i.protocol_expression=/^[a-z][a-z0-9.+-]*$/i,i.idn_expression=/[^a-z0-9\._-]/i,i.punycode_expression=/(xn--)/i,i.ip4_expression=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,i.ip6_expression=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,i.find_uri_expression=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi,i.findUri={start:/\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,end:/[\s\r\n]|$/,trim:/[`!()\[\]{};:'".,<>?«»“”„‘’]+$/,parens:/(\([^\)]*\)|\[[^\]]*\]|\{[^}]*\}|<[^>]*>)/g},i.leading_whitespace_expression=/^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,i.ascii_tab_whitespace=/[\u0009\u000A\u000D]+/g,i.defaultPorts={http:"80",https:"443",ftp:"21",gopher:"70",ws:"80",wss:"443"},i.hostProtocols=["http","https"],i.invalid_hostname_characters=/[^a-zA-Z0-9\.\-:_]/,i.domAttributes={a:"href",blockquote:"cite",link:"href",base:"href",script:"src",form:"action",img:"src",area:"href",iframe:"src",embed:"src",source:"src",track:"src",input:"src",audio:"src",video:"src"},i.getDomAttribute=function(e){if(e&&e.nodeName){var t=e.nodeName.toLowerCase()
if("input"!==t||"image"===e.type)return i.domAttributes[t]}},i.encode=g,i.decode=decodeURIComponent,i.iso8859=function(){i.encode=escape,i.decode=unescape},i.unicode=function(){i.encode=g,i.decode=decodeURIComponent},i.characters={pathname:{encode:{expression:/%(24|26|2B|2C|3B|3D|3A|40)/gi,map:{"%24":"$","%26":"&","%2B":"+","%2C":",","%3B":";","%3D":"=","%3A":":","%40":"@"}},decode:{expression:/[\/\?#]/g,map:{"/":"%2F","?":"%3F","#":"%23"}}},reserved:{encode:{expression:/%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/gi,map:{"%3A":":","%2F":"/","%3F":"?","%23":"#","%5B":"[","%5D":"]","%40":"@","%21":"!","%24":"$","%26":"&","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"="}}},urnpath:{encode:{expression:/%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/gi,map:{"%21":"!","%24":"$","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"=","%40":"@"}},decode:{expression:/[\/\?#:]/g,map:{"/":"%2F","?":"%3F","#":"%23",":":"%3A"}}}},i.encodeQuery=function(e,t){var r=i.encode(e+"")
return void 0===t&&(t=i.escapeQuerySpace),t?r.replace(/%20/g,"+"):r},i.decodeQuery=function(e,t){e+="",void 0===t&&(t=i.escapeQuerySpace)
try{return i.decode(t?e.replace(/\+/g,"%20"):e)}catch(t){return e}}
var v,_={encode:"encode",decode:"decode"},y=function(e,t){return function(r){try{return i[t](r+"").replace(i.characters[e][t].expression,(function(r){return i.characters[e][t].map[r]}))}catch(e){return r}}}
for(v in _)i[v+"PathSegment"]=y("pathname",_[v]),i[v+"UrnPathSegment"]=y("urnpath",_[v])
var b=function(e,t,r){return function(n){var o
o=r?function(e){return i[t](i[r](e))}:i[t]
for(var s=(n+"").split(e),a=0,u=s.length;a<u;a++)s[a]=o(s[a])
return s.join(e)}}
function w(e){return function(t,r){return void 0===t?this._parts[e]||"":(this._parts[e]=t||null,this.build(!r),this)}}function k(e,t){return function(r,n){return void 0===r?this._parts[e]||"":(null!==r&&(r+="").charAt(0)===t&&(r=r.substring(1)),this._parts[e]=r,this.build(!n),this)}}i.decodePath=b("/","decodePathSegment"),i.decodeUrnPath=b(":","decodeUrnPathSegment"),i.recodePath=b("/","encodePathSegment","decode"),i.recodeUrnPath=b(":","encodeUrnPathSegment","decode"),i.encodeReserved=y("reserved","encode"),i.parse=function(e,t){var r
return t||(t={preventInvalidHostname:i.preventInvalidHostname}),(r=(e=(e=e.replace(i.leading_whitespace_expression,"")).replace(i.ascii_tab_whitespace,"")).indexOf("#"))>-1&&(t.fragment=e.substring(r+1)||null,e=e.substring(0,r)),(r=e.indexOf("?"))>-1&&(t.query=e.substring(r+1)||null,e=e.substring(0,r)),"//"===(e=(e=e.replace(/^(https?|ftp|wss?)?:+[/\\]*/i,"$1://")).replace(/^[/\\]{2,}/i,"//")).substring(0,2)?(t.protocol=null,e=e.substring(2),e=i.parseAuthority(e,t)):(r=e.indexOf(":"))>-1&&(t.protocol=e.substring(0,r)||null,t.protocol&&!t.protocol.match(i.protocol_expression)?t.protocol=void 0:"//"===e.substring(r+1,r+3).replace(/\\/g,"/")?(e=e.substring(r+3),e=i.parseAuthority(e,t)):(e=e.substring(r+1),t.urn=!0)),t.path=e,t},i.parseHost=function(e,t){e||(e="")
var r,n,o=(e=e.replace(/\\/g,"/")).indexOf("/")
if(-1===o&&(o=e.length),"["===e.charAt(0))r=e.indexOf("]"),t.hostname=e.substring(1,r)||null,t.port=e.substring(r+2,o)||null,"/"===t.port&&(t.port=null)
else{var s=e.indexOf(":"),a=e.indexOf("/"),u=e.indexOf(":",s+1);-1!==u&&(-1===a||u<a)?(t.hostname=e.substring(0,o)||null,t.port=null):(n=e.substring(0,o).split(":"),t.hostname=n[0]||null,t.port=n[1]||null)}return t.hostname&&"/"!==e.substring(o).charAt(0)&&(o++,e="/"+e),t.preventInvalidHostname&&i.ensureValidHostname(t.hostname,t.protocol),t.port&&i.ensureValidPort(t.port),e.substring(o)||"/"},i.parseAuthority=function(e,t){return e=i.parseUserinfo(e,t),i.parseHost(e,t)},i.parseUserinfo=function(e,t){var r=e;-1!==e.indexOf("\\")&&(e=e.replace(/\\/g,"/"))
var n,o=e.indexOf("/"),s=e.lastIndexOf("@",o>-1?o:e.length-1)
return s>-1&&(-1===o||s<o)?(n=e.substring(0,s).split(":"),t.username=n[0]?i.decode(n[0]):null,n.shift(),t.password=n[0]?i.decode(n.join(":")):null,e=r.substring(s+1)):(t.username=null,t.password=null),e},i.parseQuery=function(e,t){if(!e)return{}
if(!(e=e.replace(/&+/g,"&").replace(/^\?*&*|&+$/g,"")))return{}
for(var r,n,o,s={},u=e.split("&"),c=u.length,h=0;h<c;h++)r=u[h].split("="),n=i.decodeQuery(r.shift(),t),o=r.length?i.decodeQuery(r.join("="),t):null,"__proto__"!==n&&(a.call(s,n)?("string"!=typeof s[n]&&null!==s[n]||(s[n]=[s[n]]),s[n].push(o)):s[n]=o)
return s},i.build=function(e){var t="",r=!1
return e.protocol&&(t+=e.protocol+":"),e.urn||!t&&!e.hostname||(t+="//",r=!0),t+=i.buildAuthority(e)||"","string"==typeof e.path&&("/"!==e.path.charAt(0)&&r&&(t+="/"),t+=e.path),"string"==typeof e.query&&e.query&&(t+="?"+e.query),"string"==typeof e.fragment&&e.fragment&&(t+="#"+e.fragment),t},i.buildHost=function(e){var t=""
return e.hostname?(i.ip6_expression.test(e.hostname)?t+="["+e.hostname+"]":t+=e.hostname,e.port&&(t+=":"+e.port),t):""},i.buildAuthority=function(e){return i.buildUserinfo(e)+i.buildHost(e)},i.buildUserinfo=function(e){var t=""
return e.username&&(t+=i.encode(e.username)),e.password&&(t+=":"+i.encode(e.password)),t&&(t+="@"),t},i.buildQuery=function(e,t,r){var n,o,s,u,c=""
for(o in e)if("__proto__"!==o&&a.call(e,o))if(h(e[o]))for(n={},s=0,u=e[o].length;s<u;s++)void 0!==e[o][s]&&void 0===n[e[o][s]+""]&&(c+="&"+i.buildQueryParameter(o,e[o][s],r),!0!==t&&(n[e[o][s]+""]=!0))
else void 0!==e[o]&&(c+="&"+i.buildQueryParameter(o,e[o],r))
return c.substring(1)},i.buildQueryParameter=function(e,t,r){return i.encodeQuery(e,r)+(null!==t?"="+i.encodeQuery(t,r):"")},i.addQuery=function(e,t,r){if("object"==typeof t)for(var n in t)a.call(t,n)&&i.addQuery(e,n,t[n])
else{if("string"!=typeof t)throw new TypeError("URI.addQuery() accepts an object, string as the name parameter")
if(void 0===e[t])return void(e[t]=r)
"string"==typeof e[t]&&(e[t]=[e[t]]),h(r)||(r=[r]),e[t]=(e[t]||[]).concat(r)}},i.setQuery=function(e,t,r){if("object"==typeof t)for(var n in t)a.call(t,n)&&i.setQuery(e,n,t[n])
else{if("string"!=typeof t)throw new TypeError("URI.setQuery() accepts an object, string as the name parameter")
e[t]=void 0===r?null:r}},i.removeQuery=function(e,t,r){var n,o,s
if(h(t))for(n=0,o=t.length;n<o;n++)e[t[n]]=void 0
else if("RegExp"===c(t))for(s in e)t.test(s)&&(e[s]=void 0)
else if("object"==typeof t)for(s in t)a.call(t,s)&&i.removeQuery(e,s,t[s])
else{if("string"!=typeof t)throw new TypeError("URI.removeQuery() accepts an object, string, RegExp as the first parameter")
void 0!==r?"RegExp"===c(r)?!h(e[t])&&r.test(e[t])?e[t]=void 0:e[t]=l(e[t],r):e[t]!==String(r)||h(r)&&1!==r.length?h(e[t])&&(e[t]=l(e[t],r)):e[t]=void 0:e[t]=void 0}},i.hasQuery=function(e,t,r,n){switch(c(t)){case"String":break
case"RegExp":for(var o in e)if(a.call(e,o)&&t.test(o)&&(void 0===r||i.hasQuery(e,o,r)))return!0
return!1
case"Object":for(var s in t)if(a.call(t,s)&&!i.hasQuery(e,s,t[s]))return!1
return!0
default:throw new TypeError("URI.hasQuery() accepts a string, regular expression or object as the name parameter")}switch(c(r)){case"Undefined":return t in e
case"Boolean":return r===Boolean(h(e[t])?e[t].length:e[t])
case"Function":return!!r(e[t],t,e)
case"Array":return!!h(e[t])&&(n?p:d)(e[t],r)
case"RegExp":return h(e[t])?!!n&&p(e[t],r):Boolean(e[t]&&e[t].match(r))
case"Number":r=String(r)
case"String":return h(e[t])?!!n&&p(e[t],r):e[t]===r
default:throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter")}},i.joinPaths=function(){for(var e=[],t=[],r=0,n=0;n<arguments.length;n++){var o=new i(arguments[n])
e.push(o)
for(var s=o.segment(),a=0;a<s.length;a++)"string"==typeof s[a]&&t.push(s[a]),s[a]&&r++}if(!t.length||!r)return new i("")
var u=new i("").segment(t)
return""!==e[0].path()&&"/"!==e[0].path().slice(0,1)||u.path("/"+u.path()),u.normalize()},i.commonPath=function(e,t){var r,n=Math.min(e.length,t.length)
for(r=0;r<n;r++)if(e.charAt(r)!==t.charAt(r)){r--
break}return r<1?e.charAt(0)===t.charAt(0)&&"/"===e.charAt(0)?"/":"":("/"===e.charAt(r)&&"/"===t.charAt(r)||(r=e.substring(0,r).lastIndexOf("/")),e.substring(0,r+1))},i.withinString=function(e,t,r){r||(r={})
var n=r.start||i.findUri.start,o=r.end||i.findUri.end,s=r.trim||i.findUri.trim,a=r.parens||i.findUri.parens,u=/[a-z0-9-]=["']?$/i
for(n.lastIndex=0;;){var c=n.exec(e)
if(!c)break
var h=c.index
if(r.ignoreHtml){var l=e.slice(Math.max(h-3,0),h)
if(l&&u.test(l))continue}for(var p=h+e.slice(h).search(o),d=e.slice(h,p),f=-1;;){var m=a.exec(d)
if(!m)break
var g=m.index+m[0].length
f=Math.max(f,g)}if(!((d=f>-1?d.slice(0,f)+d.slice(f).replace(s,""):d.replace(s,"")).length<=c[0].length||r.ignore&&r.ignore.test(d))){var v=t(d,h,p=h+d.length,e)
void 0!==v?(v=String(v),e=e.slice(0,h)+v+e.slice(p),n.lastIndex=h+v.length):n.lastIndex=p}}return n.lastIndex=0,e},i.ensureValidHostname=function(t,r){var n=!!t,o=!1
if(!!r&&(o=p(i.hostProtocols,r)),o&&!n)throw new TypeError("Hostname cannot be empty, if protocol is "+r)
if(t&&t.match(i.invalid_hostname_characters)){if(!e)throw new TypeError('Hostname "'+t+'" contains characters other than [A-Z0-9.-:_] and Punycode.js is not available')
if(e.toASCII(t).match(i.invalid_hostname_characters))throw new TypeError('Hostname "'+t+'" contains characters other than [A-Z0-9.-:_]')}},i.ensureValidPort=function(e){if(e){var t=Number(e)
if(!(/^[0-9]+$/.test(t)&&t>0&&t<65536))throw new TypeError('Port "'+e+'" is not a valid port')}},i.noConflict=function(e){if(e){var t={URI:this.noConflict()}
return n.URITemplate&&"function"==typeof n.URITemplate.noConflict&&(t.URITemplate=n.URITemplate.noConflict()),n.IPv6&&"function"==typeof n.IPv6.noConflict&&(t.IPv6=n.IPv6.noConflict()),n.SecondLevelDomains&&"function"==typeof n.SecondLevelDomains.noConflict&&(t.SecondLevelDomains=n.SecondLevelDomains.noConflict()),t}return n.URI===this&&(n.URI=o),this},s.build=function(e){return!0===e?this._deferred_build=!0:(void 0===e||this._deferred_build)&&(this._string=i.build(this._parts),this._deferred_build=!1),this},s.clone=function(){return new i(this)},s.valueOf=s.toString=function(){return this.build(!1)._string},s.protocol=w("protocol"),s.username=w("username"),s.password=w("password"),s.hostname=w("hostname"),s.port=w("port"),s.query=k("query","?"),s.fragment=k("fragment","#"),s.search=function(e,t){var r=this.query(e,t)
return"string"==typeof r&&r.length?"?"+r:r},s.hash=function(e,t){var r=this.fragment(e,t)
return"string"==typeof r&&r.length?"#"+r:r},s.pathname=function(e,t){if(void 0===e||!0===e){var r=this._parts.path||(this._parts.hostname?"/":"")
return e?(this._parts.urn?i.decodeUrnPath:i.decodePath)(r):r}return this._parts.urn?this._parts.path=e?i.recodeUrnPath(e):"":this._parts.path=e?i.recodePath(e):"/",this.build(!t),this},s.path=s.pathname,s.href=function(e,t){var r
if(void 0===e)return this.toString()
this._string="",this._parts=i._parts()
var n=e instanceof i,o="object"==typeof e&&(e.hostname||e.path||e.pathname)
if(e.nodeName&&(e=e[i.getDomAttribute(e)]||"",o=!1),!n&&o&&void 0!==e.pathname&&(e=e.toString()),"string"==typeof e||e instanceof String)this._parts=i.parse(String(e),this._parts)
else{if(!n&&!o)throw new TypeError("invalid input")
var s=n?e._parts:e
for(r in s)"query"!==r&&a.call(this._parts,r)&&(this._parts[r]=s[r])
s.query&&this.query(s.query,!1)}return this.build(!t),this},s.is=function(e){var t=!1,n=!1,o=!1,s=!1,a=!1,u=!1,c=!1,h=!this._parts.urn
switch(this._parts.hostname&&(h=!1,n=i.ip4_expression.test(this._parts.hostname),o=i.ip6_expression.test(this._parts.hostname),a=(s=!(t=n||o))&&r&&r.has(this._parts.hostname),u=s&&i.idn_expression.test(this._parts.hostname),c=s&&i.punycode_expression.test(this._parts.hostname)),e.toLowerCase()){case"relative":return h
case"absolute":return!h
case"domain":case"name":return s
case"sld":return a
case"ip":return t
case"ip4":case"ipv4":case"inet4":return n
case"ip6":case"ipv6":case"inet6":return o
case"idn":return u
case"url":return!this._parts.urn
case"urn":return!!this._parts.urn
case"punycode":return c}return null}
var x=s.protocol,A=s.port,E=s.hostname
s.protocol=function(e,t){if(e&&!(e=e.replace(/:(\/\/)?$/,"")).match(i.protocol_expression))throw new TypeError('Protocol "'+e+"\" contains characters other than [A-Z0-9.+-] or doesn't start with [A-Z]")
return x.call(this,e,t)},s.scheme=s.protocol,s.port=function(e,t){return this._parts.urn?void 0===e?"":this:(void 0!==e&&(0===e&&(e=null),e&&(":"===(e+="").charAt(0)&&(e=e.substring(1)),i.ensureValidPort(e))),A.call(this,e,t))},s.hostname=function(e,t){if(this._parts.urn)return void 0===e?"":this
if(void 0!==e){var r={preventInvalidHostname:this._parts.preventInvalidHostname}
if("/"!==i.parseHost(e,r))throw new TypeError('Hostname "'+e+'" contains characters other than [A-Z0-9.-]')
e=r.hostname,this._parts.preventInvalidHostname&&i.ensureValidHostname(e,this._parts.protocol)}return E.call(this,e,t)},s.origin=function(e,t){if(this._parts.urn)return void 0===e?"":this
if(void 0===e){var r=this.protocol()
return this.authority()?(r?r+"://":"")+this.authority():""}var n=i(e)
return this.protocol(n.protocol()).authority(n.authority()).build(!t),this},s.host=function(e,t){if(this._parts.urn)return void 0===e?"":this
if(void 0===e)return this._parts.hostname?i.buildHost(this._parts):""
if("/"!==i.parseHost(e,this._parts))throw new TypeError('Hostname "'+e+'" contains characters other than [A-Z0-9.-]')
return this.build(!t),this},s.authority=function(e,t){if(this._parts.urn)return void 0===e?"":this
if(void 0===e)return this._parts.hostname?i.buildAuthority(this._parts):""
if("/"!==i.parseAuthority(e,this._parts))throw new TypeError('Hostname "'+e+'" contains characters other than [A-Z0-9.-]')
return this.build(!t),this},s.userinfo=function(e,t){if(this._parts.urn)return void 0===e?"":this
if(void 0===e){var r=i.buildUserinfo(this._parts)
return r?r.substring(0,r.length-1):r}return"@"!==e[e.length-1]&&(e+="@"),i.parseUserinfo(e,this._parts),this.build(!t),this},s.resource=function(e,t){var r
return void 0===e?this.path()+this.search()+this.hash():(r=i.parse(e),this._parts.path=r.path,this._parts.query=r.query,this._parts.fragment=r.fragment,this.build(!t),this)},s.subdomain=function(e,t){if(this._parts.urn)return void 0===e?"":this
if(void 0===e){if(!this._parts.hostname||this.is("IP"))return""
var r=this._parts.hostname.length-this.domain().length-1
return this._parts.hostname.substring(0,r)||""}var n=this._parts.hostname.length-this.domain().length,o=this._parts.hostname.substring(0,n),s=new RegExp("^"+u(o))
if(e&&"."!==e.charAt(e.length-1)&&(e+="."),-1!==e.indexOf(":"))throw new TypeError("Domains cannot contain colons")
return e&&i.ensureValidHostname(e,this._parts.protocol),this._parts.hostname=this._parts.hostname.replace(s,e),this.build(!t),this},s.domain=function(e,t){if(this._parts.urn)return void 0===e?"":this
if("boolean"==typeof e&&(t=e,e=void 0),void 0===e){if(!this._parts.hostname||this.is("IP"))return""
var r=this._parts.hostname.match(/\./g)
if(r&&r.length<2)return this._parts.hostname
var n=this._parts.hostname.length-this.tld(t).length-1
return n=this._parts.hostname.lastIndexOf(".",n-1)+1,this._parts.hostname.substring(n)||""}if(!e)throw new TypeError("cannot set domain empty")
if(-1!==e.indexOf(":"))throw new TypeError("Domains cannot contain colons")
if(i.ensureValidHostname(e,this._parts.protocol),!this._parts.hostname||this.is("IP"))this._parts.hostname=e
else{var o=new RegExp(u(this.domain())+"$")
this._parts.hostname=this._parts.hostname.replace(o,e)}return this.build(!t),this},s.tld=function(e,t){if(this._parts.urn)return void 0===e?"":this
if("boolean"==typeof e&&(t=e,e=void 0),void 0===e){if(!this._parts.hostname||this.is("IP"))return""
var n=this._parts.hostname.lastIndexOf("."),o=this._parts.hostname.substring(n+1)
return!0!==t&&r&&r.list[o.toLowerCase()]&&r.get(this._parts.hostname)||o}var i
if(!e)throw new TypeError("cannot set TLD empty")
if(e.match(/[^a-zA-Z0-9-]/)){if(!r||!r.is(e))throw new TypeError('TLD "'+e+'" contains characters other than [A-Z0-9]')
i=new RegExp(u(this.tld())+"$"),this._parts.hostname=this._parts.hostname.replace(i,e)}else{if(!this._parts.hostname||this.is("IP"))throw new ReferenceError("cannot set TLD on non-domain host")
i=new RegExp(u(this.tld())+"$"),this._parts.hostname=this._parts.hostname.replace(i,e)}return this.build(!t),this},s.directory=function(e,t){if(this._parts.urn)return void 0===e?"":this
if(void 0===e||!0===e){if(!this._parts.path&&!this._parts.hostname)return""
if("/"===this._parts.path)return"/"
var r=this._parts.path.length-this.filename().length-1,n=this._parts.path.substring(0,r)||(this._parts.hostname?"/":"")
return e?i.decodePath(n):n}var o=this._parts.path.length-this.filename().length,s=this._parts.path.substring(0,o),a=new RegExp("^"+u(s))
return this.is("relative")||(e||(e="/"),"/"!==e.charAt(0)&&(e="/"+e)),e&&"/"!==e.charAt(e.length-1)&&(e+="/"),e=i.recodePath(e),this._parts.path=this._parts.path.replace(a,e),this.build(!t),this},s.filename=function(e,t){if(this._parts.urn)return void 0===e?"":this
if("string"!=typeof e){if(!this._parts.path||"/"===this._parts.path)return""
var r=this._parts.path.lastIndexOf("/"),n=this._parts.path.substring(r+1)
return e?i.decodePathSegment(n):n}var o=!1
"/"===e.charAt(0)&&(e=e.substring(1)),e.match(/\.?\//)&&(o=!0)
var s=new RegExp(u(this.filename())+"$")
return e=i.recodePath(e),this._parts.path=this._parts.path.replace(s,e),o?this.normalizePath(t):this.build(!t),this},s.suffix=function(e,t){if(this._parts.urn)return void 0===e?"":this
if(void 0===e||!0===e){if(!this._parts.path||"/"===this._parts.path)return""
var r,n,o=this.filename(),s=o.lastIndexOf(".")
return-1===s?"":(r=o.substring(s+1),n=/^[a-z0-9%]+$/i.test(r)?r:"",e?i.decodePathSegment(n):n)}"."===e.charAt(0)&&(e=e.substring(1))
var a,c=this.suffix()
if(c)a=e?new RegExp(u(c)+"$"):new RegExp(u("."+c)+"$")
else{if(!e)return this
this._parts.path+="."+i.recodePath(e)}return a&&(e=i.recodePath(e),this._parts.path=this._parts.path.replace(a,e)),this.build(!t),this},s.segment=function(e,t,r){var n=this._parts.urn?":":"/",o=this.path(),i="/"===o.substring(0,1),s=o.split(n)
if(void 0!==e&&"number"!=typeof e&&(r=t,t=e,e=void 0),void 0!==e&&"number"!=typeof e)throw new Error('Bad segment "'+e+'", must be 0-based integer')
if(i&&s.shift(),e<0&&(e=Math.max(s.length+e,0)),void 0===t)return void 0===e?s:s[e]
if(null===e||void 0===s[e])if(h(t)){s=[]
for(var a=0,u=t.length;a<u;a++)(t[a].length||s.length&&s[s.length-1].length)&&(s.length&&!s[s.length-1].length&&s.pop(),s.push(f(t[a])))}else(t||"string"==typeof t)&&(t=f(t),""===s[s.length-1]?s[s.length-1]=t:s.push(t))
else t?s[e]=f(t):s.splice(e,1)
return i&&s.unshift(""),this.path(s.join(n),r)},s.segmentCoded=function(e,t,r){var n,o,s
if("number"!=typeof e&&(r=t,t=e,e=void 0),void 0===t){if(h(n=this.segment(e,t,r)))for(o=0,s=n.length;o<s;o++)n[o]=i.decode(n[o])
else n=void 0!==n?i.decode(n):void 0
return n}if(h(t))for(o=0,s=t.length;o<s;o++)t[o]=i.encode(t[o])
else t="string"==typeof t||t instanceof String?i.encode(t):t
return this.segment(e,t,r)}
var P=s.query
return s.query=function(e,t){if(!0===e)return i.parseQuery(this._parts.query,this._parts.escapeQuerySpace)
if("function"==typeof e){var r=i.parseQuery(this._parts.query,this._parts.escapeQuerySpace),n=e.call(this,r)
return this._parts.query=i.buildQuery(n||r,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),this.build(!t),this}return void 0!==e&&"string"!=typeof e?(this._parts.query=i.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),this.build(!t),this):P.call(this,e,t)},s.setQuery=function(e,t,r){var n=i.parseQuery(this._parts.query,this._parts.escapeQuerySpace)
if("string"==typeof e||e instanceof String)n[e]=void 0!==t?t:null
else{if("object"!=typeof e)throw new TypeError("URI.addQuery() accepts an object, string as the name parameter")
for(var o in e)a.call(e,o)&&(n[o]=e[o])}return this._parts.query=i.buildQuery(n,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),"string"!=typeof e&&(r=t),this.build(!r),this},s.addQuery=function(e,t,r){var n=i.parseQuery(this._parts.query,this._parts.escapeQuerySpace)
return i.addQuery(n,e,void 0===t?null:t),this._parts.query=i.buildQuery(n,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),"string"!=typeof e&&(r=t),this.build(!r),this},s.removeQuery=function(e,t,r){var n=i.parseQuery(this._parts.query,this._parts.escapeQuerySpace)
return i.removeQuery(n,e,t),this._parts.query=i.buildQuery(n,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),"string"!=typeof e&&(r=t),this.build(!r),this},s.hasQuery=function(e,t,r){var n=i.parseQuery(this._parts.query,this._parts.escapeQuerySpace)
return i.hasQuery(n,e,t,r)},s.setSearch=s.setQuery,s.addSearch=s.addQuery,s.removeSearch=s.removeQuery,s.hasSearch=s.hasQuery,s.normalize=function(){return this._parts.urn?this.normalizeProtocol(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build():this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()},s.normalizeProtocol=function(e){return"string"==typeof this._parts.protocol&&(this._parts.protocol=this._parts.protocol.toLowerCase(),this.build(!e)),this},s.normalizeHostname=function(r){return this._parts.hostname&&(this.is("IDN")&&e?this._parts.hostname=e.toASCII(this._parts.hostname):this.is("IPv6")&&t&&(this._parts.hostname=t.best(this._parts.hostname)),this._parts.hostname=this._parts.hostname.toLowerCase(),this.build(!r)),this},s.normalizePort=function(e){return"string"==typeof this._parts.protocol&&this._parts.port===i.defaultPorts[this._parts.protocol]&&(this._parts.port=null,this.build(!e)),this},s.normalizePath=function(e){var t,r=this._parts.path
if(!r)return this
if(this._parts.urn)return this._parts.path=i.recodeUrnPath(this._parts.path),this.build(!e),this
if("/"===this._parts.path)return this
var n,o,s=""
for("/"!==(r=i.recodePath(r)).charAt(0)&&(t=!0,r="/"+r),"/.."!==r.slice(-3)&&"/."!==r.slice(-2)||(r+="/"),r=r.replace(/(\/(\.\/)+)|(\/\.$)/g,"/").replace(/\/{2,}/g,"/"),t&&(s=r.substring(1).match(/^(\.\.\/)+/)||"")&&(s=s[0]);-1!==(n=r.search(/\/\.\.(\/|$)/));)0!==n?(-1===(o=r.substring(0,n).lastIndexOf("/"))&&(o=n),r=r.substring(0,o)+r.substring(n+3)):r=r.substring(3)
return t&&this.is("relative")&&(r=s+r.substring(1)),this._parts.path=r,this.build(!e),this},s.normalizePathname=s.normalizePath,s.normalizeQuery=function(e){return"string"==typeof this._parts.query&&(this._parts.query.length?this.query(i.parseQuery(this._parts.query,this._parts.escapeQuerySpace)):this._parts.query=null,this.build(!e)),this},s.normalizeFragment=function(e){return this._parts.fragment||(this._parts.fragment=null,this.build(!e)),this},s.normalizeSearch=s.normalizeQuery,s.normalizeHash=s.normalizeFragment,s.iso8859=function(){var e=i.encode,t=i.decode
i.encode=escape,i.decode=decodeURIComponent
try{this.normalize()}finally{i.encode=e,i.decode=t}return this},s.unicode=function(){var e=i.encode,t=i.decode
i.encode=g,i.decode=unescape
try{this.normalize()}finally{i.encode=e,i.decode=t}return this},s.readable=function(){var t=this.clone()
t.username("").password("").normalize()
var r=""
if(t._parts.protocol&&(r+=t._parts.protocol+"://"),t._parts.hostname&&(t.is("punycode")&&e?(r+=e.toUnicode(t._parts.hostname),t._parts.port&&(r+=":"+t._parts.port)):r+=t.host()),t._parts.hostname&&t._parts.path&&"/"!==t._parts.path.charAt(0)&&(r+="/"),r+=t.path(!0),t._parts.query){for(var n="",o=0,s=t._parts.query.split("&"),a=s.length;o<a;o++){var u=(s[o]||"").split("=")
n+="&"+i.decodeQuery(u[0],this._parts.escapeQuerySpace).replace(/&/g,"%26"),void 0!==u[1]&&(n+="="+i.decodeQuery(u[1],this._parts.escapeQuerySpace).replace(/&/g,"%26"))}r+="?"+n.substring(1)}return r+i.decodeQuery(t.hash(),!0)},s.absoluteTo=function(e){var t,r,n,o=this.clone(),s=["protocol","username","password","hostname","port"]
if(this._parts.urn)throw new Error("URNs do not have any generally defined hierarchical components")
if(e instanceof i||(e=new i(e)),o._parts.protocol)return o
if(o._parts.protocol=e._parts.protocol,this._parts.hostname)return o
for(r=0;n=s[r];r++)o._parts[n]=e._parts[n]
return o._parts.path?(".."===o._parts.path.substring(-2)&&(o._parts.path+="/"),"/"!==o.path().charAt(0)&&(t=(t=e.directory())||(0===e.path().indexOf("/")?"/":""),o._parts.path=(t?t+"/":"")+o._parts.path,o.normalizePath())):(o._parts.path=e._parts.path,o._parts.query||(o._parts.query=e._parts.query)),o.build(),o},s.relativeTo=function(e){var t,r,n,o,s,a=this.clone().normalize()
if(a._parts.urn)throw new Error("URNs do not have any generally defined hierarchical components")
if(e=new i(e).normalize(),t=a._parts,r=e._parts,o=a.path(),s=e.path(),"/"!==o.charAt(0))throw new Error("URI is already relative")
if("/"!==s.charAt(0))throw new Error("Cannot calculate a URI relative to another relative URI")
if(t.protocol===r.protocol&&(t.protocol=null),t.username!==r.username||t.password!==r.password)return a.build()
if(null!==t.protocol||null!==t.username||null!==t.password)return a.build()
if(t.hostname!==r.hostname||t.port!==r.port)return a.build()
if(t.hostname=null,t.port=null,o===s)return t.path="",a.build()
if(!(n=i.commonPath(o,s)))return a.build()
var u=r.path.substring(n.length).replace(/[^\/]*$/,"").replace(/.*?\//g,"../")
return t.path=u+t.path.substring(n.length)||"./",a.build()},s.equals=function(e){var t,r,n,o,s,u=this.clone(),c=new i(e),l={}
if(u.normalize(),c.normalize(),u.toString()===c.toString())return!0
if(n=u.query(),o=c.query(),u.query(""),c.query(""),u.toString()!==c.toString())return!1
if(n.length!==o.length)return!1
for(s in t=i.parseQuery(n,this._parts.escapeQuerySpace),r=i.parseQuery(o,this._parts.escapeQuerySpace),t)if(a.call(t,s)){if(h(t[s])){if(!d(t[s],r[s]))return!1}else if(t[s]!==r[s])return!1
l[s]=!0}for(s in r)if(a.call(r,s)&&!l[s])return!1
return!0},s.preventInvalidHostname=function(e){return this._parts.preventInvalidHostname=!!e,this},s.duplicateQueryParameters=function(e){return this._parts.duplicateQueryParameters=!!e,this},s.escapeQuerySpace=function(e){return this._parts.escapeQuerySpace=!!e,this},i}))},192:function(e,t,r){var n
e=r.nmd(e),function(o){t&&t.nodeType,e&&e.nodeType
var i="object"==typeof global&&global
i.global!==i&&i.window!==i&&i.self
var s,a=2147483647,u=36,c=26,h=38,l=700,p=/^xn--/,d=/[^\x20-\x7E]/,f=/[\x2E\u3002\uFF0E\uFF61]/g,m={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},g=u-1,v=Math.floor,_=String.fromCharCode
function y(e){throw new RangeError(m[e])}function b(e,t){for(var r=e.length,n=[];r--;)n[r]=t(e[r])
return n}function w(e,t){var r=e.split("@"),n=""
return r.length>1&&(n=r[0]+"@",e=r[1]),n+b((e=e.replace(f,".")).split("."),t).join(".")}function k(e){for(var t,r,n=[],o=0,i=e.length;o<i;)(t=e.charCodeAt(o++))>=55296&&t<=56319&&o<i?56320==(64512&(r=e.charCodeAt(o++)))?n.push(((1023&t)<<10)+(1023&r)+65536):(n.push(t),o--):n.push(t)
return n}function x(e){return b(e,(function(e){var t=""
return e>65535&&(t+=_((e-=65536)>>>10&1023|55296),e=56320|1023&e),t+_(e)})).join("")}function A(e,t){return e+22+75*(e<26)-((0!=t)<<5)}function E(e,t,r){var n=0
for(e=r?v(e/l):e>>1,e+=v(e/t);e>g*c>>1;n+=u)e=v(e/g)
return v(n+(g+1)*e/(e+h))}function P(e){var t,r,n,o,i,s,h,l,p,d,f,m=[],g=e.length,_=0,b=128,w=72
for((r=e.lastIndexOf("-"))<0&&(r=0),n=0;n<r;++n)e.charCodeAt(n)>=128&&y("not-basic"),m.push(e.charCodeAt(n))
for(o=r>0?r+1:0;o<g;){for(i=_,s=1,h=u;o>=g&&y("invalid-input"),((l=(f=e.charCodeAt(o++))-48<10?f-22:f-65<26?f-65:f-97<26?f-97:u)>=u||l>v((a-_)/s))&&y("overflow"),_+=l*s,!(l<(p=h<=w?1:h>=w+c?c:h-w));h+=u)s>v(a/(d=u-p))&&y("overflow"),s*=d
w=E(_-i,t=m.length+1,0==i),v(_/t)>a-b&&y("overflow"),b+=v(_/t),_%=t,m.splice(_++,0,b)}return x(m)}function T(e){var t,r,n,o,i,s,h,l,p,d,f,m,g,b,w,x=[]
for(m=(e=k(e)).length,t=128,r=0,i=72,s=0;s<m;++s)(f=e[s])<128&&x.push(_(f))
for(n=o=x.length,o&&x.push("-");n<m;){for(h=a,s=0;s<m;++s)(f=e[s])>=t&&f<h&&(h=f)
for(h-t>v((a-r)/(g=n+1))&&y("overflow"),r+=(h-t)*g,t=h,s=0;s<m;++s)if((f=e[s])<t&&++r>a&&y("overflow"),f==t){for(l=r,p=u;!(l<(d=p<=i?1:p>=i+c?c:p-i));p+=u)w=l-d,b=u-d,x.push(_(A(d+w%b,0))),l=v(w/b)
x.push(_(A(l,0))),i=E(r,g,n==o),r=0,++n}++r,++t}return x.join("")}s={version:"1.3.2",ucs2:{decode:k,encode:x},decode:P,encode:T,toASCII:function(e){return w(e,(function(e){return d.test(e)?"xn--"+T(e):e}))},toUnicode:function(e){return w(e,(function(e){return p.test(e)?P(e.slice(4).toLowerCase()):e}))}},void 0===(n=function(){return s}.call(t,r,t,e))||(e.exports=n)}()}}])
