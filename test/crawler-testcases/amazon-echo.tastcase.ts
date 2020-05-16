/* eslint-disable */

import { AmazonCrawler } from '../../src/crawler/crawlers/amazon.crawler';

export const amazonEchoTaseCase = {
  crawlerType: AmazonCrawler,
  sizes: [{ id: 'ONESIZE', isAvailable: true, name: 'ONESIZE' }],

  sizeChecks: [
    { size: 'ONESIZE', isAvailable: true, isLowInStock: false },
    { size: 'any', isAvailable: true, isLowInStock: false },
  ],

  name:
    'Echo Input (Schwarz) – Bringen Sie Alexa auf Ihren Lautsprecher – Externer Lautsprecher mit 3,5-mm-Audioeingang oder Bluetooth erforderlich',

  priceChecks: [
    { size: 'ONESIZE', price: 39.99 },
    { size: '', price: 39.99 },
  ],

  testResponse: `<!doctype html><html lang="de-de" class="a-no-js" data-19ax5a9jf="dingo"><!-- sp:feature:head-start -->
<head><script>var aPageStart = (new Date()).getTime();</script><meta charset="utf-8">
<script type='text/javascript'>var ue_t0=ue_t0||+new Date();</script><!-- sp:feature:cs-optimization -->
<script type='text/javascript'>
window.ue_ihb = (window.ue_ihb || window.ueinit || 0) + 1;
if (window.ue_ihb === 1) {

var ue_csm = window,
    ue_hob = +new Date();
(function(d){var e=d.ue=d.ue||{},f=Date.now||function(){return+new Date};e.d=function(b){return f()-(b?0:d.ue_t0)};e.stub=function(b,a){if(!b[a]){var c=[];b[a]=function(){c.push([c.slice.call(arguments),e.d(),d.ue_id])};b[a].replay=function(b){for(var a;a=c.shift();)b(a[0],a[1],a[2])};b[a].isStub=1}};e.exec=function(b,a){return function(){if(1==window.ueinit)try{return b.apply(this,arguments)}catch(c){ueLogError(c,{attribution:a||"undefined",logLevel:"WARN"})}}}})(ue_csm);


    var ue_err_chan = 'jserr-rw';
(function(d,e){function h(f,b){if(!(a.ec>a.mxe)&&f){a.ter.push(f);b=b||{};var c=f.logLevel||b.logLevel;c&&c!==k&&c!==m&&c!==n&&c!==p||a.ec++;c&&c!=k||a.ecf++;b.pageURL=""+(e.location?e.location.href:"");b.logLevel=c;b.attribution=f.attribution||b.attribution;a.erl.push({ex:f,info:b})}}function l(a,b,c,e,g){d.ueLogError({m:a,f:b,l:c,c:""+e,err:g,fromOnError:1,args:arguments},g?{attribution:g.attribution,logLevel:g.logLevel}:void 0);return!1}var k="FATAL",m="ERROR",n="WARN",p="DOWNGRADED",a={ec:0,ecf:0,
pec:0,ts:0,erl:[],ter:[],mxe:50,startTimer:function(){a.ts++;setInterval(function(){d.ue&&a.pec<a.ec&&d.uex("at");a.pec=a.ec},1E4)}};l.skipTrace=1;h.skipTrace=1;h.isStub=1;d.ueLogError=h;d.ue_err=a;e.onerror=l})(ue_csm,window);


var ue_id = 'S7Y7MCSM8BQQZXDKY4RQ',
    ue_url = '/gp/uedata',
    ue_navtiming = 1,
    ue_mid = 'A1PA6795UKMFR9',
    ue_sid = '262-9898842-9713804',
    ue_sn = 'www.amazon.de',
    ue_furl = 'fls-eu.amazon.de',
    ue_surl = 'https://unagi-eu.amazon.com/1/events/com.amazon.csm.nexusclient.prod',
    ue_int = 0,
    ue_fcsn = 1,
    ue_urt = 3,
    ue_rpl_ns = 'cel-rpl',
    ue_ddq = 1,
    ue_fpf = '//fls-eu.amazon.de/1/batch/1/OP/A1PA6795UKMFR9:262-9898842-9713804:S7Y7MCSM8BQQZXDKY4RQ$uedata=s:',
    ue_rsc = 0,
    ue_mcimp = 3,
    ue_sbuimp = 1,

    ue_swi = 1;
function ue_viz(){(function(c,e,a){function k(b){if(c.ue.viz.length<p&&!l){var a=b.type;b=b.originalEvent;/^focus./.test(a)&&b&&(b.toElement||b.fromElement||b.relatedTarget)||(a=e[m]||("blur"==a||"focusout"==a?"hidden":"visible"),c.ue.viz.push(a+":"+(+new Date-c.ue.t0)),"visible"==a&&(ue.isl&&uex("at"),l=1))}}for(var l=0,f,g,m,n=["","webkit","o","ms","moz"],d=0,p=20,h=0;h<n.length&&!d;h++)if(a=n[h],f=(a?a+"H":"h")+"idden",d="boolean"==typeof e[f])g=a+"visibilitychange",m=(a?a+"V":"v")+"isibilityState";
k({});d&&e.addEventListener(g,k,0);c.ue&&d&&(c.ue.pageViz={event:g,propHid:f})})(ue_csm,document,window)};

(function(a,g,u){function x(a){return a&&a.replace&&a.replace(/^\\s+|\\s+$/g,"")}function q(a){return"undefined"===typeof a}function y(a){try{var b=u.cookie.match(RegExp("(^| )"+a+"=([^;]+)"));if(b)return b[2].trim()}catch(c){}}function A(d,b){d&&(a.ue_id=h.id=h.rid=d,a.ue_fpf=a.ue_fpf.replace(/((.*?:){2})(\\w+)/,function(a,b){return b+d}));b&&(a.ue_fpf=a.ue_fpf.replace(/(.*?:)(\\w|-)+/,function(a,d){return d+b}),a.ue_sid=b);a.ue.tag("accelerated-experience")}function t(d,b,c,k){var g=k||+new Date,n;
a.ueam&&a.ueam(b,d,k);if(b||q(c)){if(d)for(n in k=b?f("t",b)||f("t",b,{}):a.ue.t,k[d]=g,c)c.hasOwnProperty(n)&&f(n,b,c[n]);return g}}function f(d,b,c){var f=a.ue,g=b&&b!=f.id?f.sc[b]:f;g||(g=f.sc[b]={});"id"==d&&c&&(f.cfa2=1);return g[d]=c||g[d]}function C(d,b,c,f,g){c="on"+c;var n=b[c];"function"===typeof n?d&&(a.ue.h[d]=n):n=function(){};b[c]=g?function(a){f(a);n(a)}:function(a){n(a);f(a)};b[c]&&(b[c].isUeh=1)}function D(d,b,c){function k(b,c){var e=[b],J=0,g={},n,k;c?(e.push("m=1"),g[c]=1):g=a.ue.sc;
for(k in g)if(g.hasOwnProperty(k)){var l=f("wb",k),h=f("t",k)||{},p=f("t0",k)||a.ue.t0,m;if(c||2==l){l=l?J++:"";e.push("sc"+l+"="+k);for(m in h)3>=m.length&&!q(h[m])&&null!==h[m]&&e.push(m+l+"="+(h[m]-p));e.push("t"+l+"="+h[d]);if(f("ctb",k)||f("wb",k))n=1}}!z&&n&&e.push("ctb=1");return e.join("&")}function B(b,c,d,e){if(b){var f=a.ue_err,k;a.ue_url&&(!e||!a.ue.log)&&b&&0<b.length&&(k=new Image,a.ue.iel.push(k),k.src=b);K?a.ue_fpf&&g.encodeURIComponent&&b&&(e=new Image,b=""+a.ue_fpf+g.encodeURIComponent(b)+
":"+(+new Date-a.ue_t0),a.ue.iel.push(e),e.src=b):a.ue.log&&(k=g.chrome&&"ul"==c,a.ue.log(b,"uedata",a.ue_svi?{n:1,img:!e&&k?1:0}:{n:1}),a.ue.ielf.push(b));f&&!f.ts&&f.startTimer();a.ue.b&&(f=a.ue.b,a.ue.b="",B(f,c,d,1))}}function n(b){if(!ue.collected){var c=b.timing,e=b.navigation,d=ue.t;c&&(d.na_=c.navigationStart,d.ul_=c.unloadEventStart,d._ul=c.unloadEventEnd,d.rd_=c.redirectStart,d._rd=c.redirectEnd,d.fe_=c.fetchStart,d.lk_=c.domainLookupStart,d._lk=c.domainLookupEnd,d.co_=c.connectStart,d._co=
c.connectEnd,d.sc_=c.secureConnectionStart,d.rq_=c.requestStart,d.rs_=c.responseStart,d._rs=c.responseEnd,d.dl_=c.domLoading,d.di_=c.domInteractive,d.de_=c.domContentLoadedEventStart,d._de=c.domContentLoadedEventEnd,d._dc=c.domComplete,d.ld_=c.loadEventStart,d._ld=c.loadEventEnd,c=d.na_,b="function"!==typeof b.now||q(c)?0:new Date(c+b.now())-new Date,d.ntd=b+a.ue.t0);e&&(d.ty=e.type+a.ue.t0,d.rc=e.redirectCount+a.ue.t0);ue.collected=1}}function s(b){var c=r&&r.navigation?r.navigation.type:w,d=c&&
2!=c,e=a.ue.bfini;a.ue.cfa2||(e&&1<e&&(b+="&bfform=1",d||(a.ue.isBFT=e-1)),2==c&&(b+="&bfnt=1",a.ue.isBFT=a.ue.isBFT||1),a.ue.ssw&&a.ue.isBFT&&(q(a.ue.isNRBF)&&(c=a.ue.ssw(a.ue.oid),c.e||q(c.val)||(a.ue.isNRBF=1<c.val?0:1)),q(a.ue.isNRBF)||(b+="&nrbf="+a.ue.isNRBF)),a.ue.isBFT&&!a.ue.isNRBF&&(b+="&bft="+a.ue.isBFT));return b}if(!h.paused&&(b||q(c))){for(var p in c)c.hasOwnProperty(p)&&f(p,b,c[p]);t("pc",b,c);p=f("id",b)||a.ue.id;var e=a.ue.url+"?"+d+"&v="+a.ue.v+"&id="+p,z=f("ctb",b)||f("wb",b),r=
g.performance||g.webkitPerformance,l,m;z&&(e+="&ctb="+z);1<a.ueinit&&(e+="&ic="+a.ueinit);!a.ue._fi||"at"!=d||b&&b!=p||(e+=a.ue._fi());if(!("ld"!=d&&"ul"!=d||b&&b!=p)){if("ld"==d){try{g.onbeforeunload&&g.onbeforeunload.isUeh&&(g.onbeforeunload=null)}catch(y){}if(g.chrome)for(m=0;m<ue.ulh.length;m++)E("beforeunload",ue.ulh[m]);(m=u.ue_backdetect)&&m.ue_back&&m.ue_back.value++;a._uess&&(l=a._uess());a.ue.isl=1}ue._bf&&(e+="&bf="+ue._bf());a.ue_navtiming&&r&&r.timing&&(f("ctb",p,"1"),1==a.ue_navtiming&&
t("tc",w,w,r.timing.navigationStart));r&&n(r);a.ue.t.hob=a.ue_hob;a.ue.t.hoe=a.ue_hoe;a.ue.ifr&&(e+="&ifr=1")}t(d,b,c);c="ld"==d&&b&&f("wb",b);var v;c||b&&b!==p||L(b);c||p==a.ue.oid||M((f("t",b)||{}).tc||+f("t0",b),+f("t0",b));a.ue_mbl&&a.ue_mbl.cnt&&!c&&(e+=a.ue_mbl.cnt());c?f("wb",b,2):"ld"==d&&(h.lid=x(p));for(v in a.ue.sc)if(1==f("wb",v))break;if(c){if(a.ue.s)return;e=k(e,null)}else m=k(e,null),m!=e&&(m=s(m),a.ue.b=m),l&&(e+=l),e=k(e,b||a.ue.id);e=s(e);if(a.ue.b||c)for(v in a.ue.sc)2==f("wb",
v)&&delete a.ue.sc[v];l=0;ue._rt&&(e+="&rt="+ue._rt());c||(a.ue.s=0,(l=a.ue_err)&&0<l.ec&&l.pec<l.ec&&(l.pec=l.ec,e+="&ec="+l.ec+"&ecf="+l.ecf),l=f("ctb",b),f("t",b,{}));e&&a.ue.tag&&0<a.ue.tag().length&&(e+="&csmtags="+a.ue.tag().join("|"),a.ue.tag=a.ue.tagC());e&&a.ue.viz&&0<a.ue.viz.length&&(e+="&viz="+a.ue.viz.join("|"),a.ue.viz=[]);e&&!q(a.ue_pty)&&(e+="&pty="+a.ue_pty+"&spty="+a.ue_spty+"&pti="+a.ue_pti);e&&a.ue.tabid&&(e+="&tid="+a.ue.tabid);e&&a.ue.aftb&&(e+="&aftb=1");e&&a.ue.sbf&&(e+="&sbf=1");
!a.ue._ui||b&&b!=p||(e+=a.ue._ui());a.ue.a=e;B(e,d,l,c)}}function L(a){var b=g.ue_csm_markers||{},c;for(c in b)b.hasOwnProperty(c)&&t(c,a,w,b[c])}function s(d,b,c){c=c||g;a.ue_pel&&window.EventTarget&&window.EventTarget.prototype&&window.EventTarget.prototype.addEventListener?window.EventTarget.prototype.addEventListener.call(c,d,b,!!window.ue_clf):c.addEventListener?c.addEventListener(d,b,!!window.ue_clf):c.attachEvent&&c.attachEvent("on"+d,b)}function E(d,b,c){c=c||g;a.ue_pel&&window.EventTarget&&
window.EventTarget.prototype&&window.EventTarget.prototype.removeEventListener?window.EventTarget.prototype.removeEventListener.call(c,d,b,!!window.ue_clf):c.removeEventListener?c.removeEventListener(d,b,!!window.ue_clf):c.detachEvent&&c.detachEvent("on"+d,b)}function F(){function d(){a.onUl()}function b(a){return function(){c[a]||(c[a]=1,D(a))}}var c=a.ue.r,f,h;a.onLd=b("ld");a.onLdEnd=b("ld");a.onUl=b("ul");f={stop:b("os")};g.chrome?(s("beforeunload",d),ue.ulh.push(d)):f[N]=a.onUl;for(h in f)f.hasOwnProperty(h)&&
C(0,g,h,f[h]);a.ue_viz&&ue_viz();O&&s("readystatechange",P,u);s("load",a.onLd);t("ue")}function P(){"complete"===u.readyState&&(Q?setTimeout(G,0):G())}function G(){var d;if(!(d=ue.isl)&&(d=R))a:{d=u.images||[];for(var b=0;b<d.length;b++)if(!1===d[b].complete){d=!1;break a}d=!0}if(!d)a.onUl()}function M(d,b){a.ue_mbl&&a.ue_mbl.ajax&&a.ue_mbl.ajax(d,b);a.ue.tag("ajax-transition")}a.ueinit=(a.ueinit||0)+1;var h={t0:g.aPageStart||a.ue_t0,id:a.ue_id,url:a.ue_url,rid:a.ue_id,a:"",b:"",h:{},r:{ld:0,oe:0,
ul:0},s:1,t:{},sc:{},iel:[],ielf:[],fc_idx:{},viz:[],v:"0.202589.0",d:a.ue&&a.ue.d,log:a.ue&&a.ue.log,clog:a.ue&&a.ue.clog,onflush:a.ue&&a.ue.onflush,onunload:a.ue&&a.ue.onunload,stub:a.ue&&a.ue.stub,lr:a.ue&&a.ue.lr,exec:a.ue&&a.ue.exec,event:a.ue&&a.ue.event,onSushiUnload:a.ue&&a.ue.onSushiUnload,onSushiFlush:a.ue&&a.ue.onSushiFlush,ulh:[],cfa2:0,paused:!1},K=a.ue_fpf?1:0,O=1===a.ue_rsc||3===a.ue_rsc,Q=3===a.ue_rsc,R=1===a.ue_rsc,N="beforeunload",w;h.oid=x(h.id);h.lid=x(h.id);a.ue=h;a.ue._t0=a.ue.t0;
a.ue.tagC=function(){var a={};return function(b){b&&(a[b]=1);b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(c);return b}};a.ue.tag=a.ue.tagC();a.ue.ifr=g.top!==g.self||g.frameElement?1:0;ue.attach=s;ue.detach=E;if("000-0000000-8675309"===a.ue_sid){var H=y("cdn-rid"),I=y("session-id");H&&I&&A(H,I)}a.uei=F;a.ueh=C;a.ues=f;a.uet=t;a.uex=D;h.reset=A;h.pause=function(a){h.paused=a};F()})(ue_csm,window,ue_csm.document);


ue.stub(ue,"event");ue.stub(ue,"onSushiUnload");ue.stub(ue,"onSushiFlush");

ue.stub(ue,"log");ue.stub(ue,"onunload");ue.stub(ue,"onflush");
(function(c){var a=c.ue;a.cv={};a.cv.scopes={};a.count=function(d,c,b){var e={},f=a.cv,g=b&&0===b.c;e.counter=d;e.value=c;e.t=a.d();b&&b.scope&&(f=a.cv.scopes[b.scope]=a.cv.scopes[b.scope]||{},e.scope=b.scope);if(void 0===c)return f[d];f[d]=c;d=0;b&&b.bf&&(d=1);ue_csm.ue_sclog||!a.clog||0!==d||g?a.log&&a.log(e,"csmcount",{c:1,bf:d}):a.clog(e,"csmcount",{bf:d})};a.count("baselineCounter2",1);a&&a.event&&(a.event({requestId:c.ue_id||"rid",server:c.ue_sn||"sn",obfuscatedMarketplaceId:c.ue_mid||"mid"},
"csm","csm.CSMBaselineEvent.4"),a.count("nexusBaselineCounter",1,{bf:1}))})(ue_csm);



var ue_hoe = +new Date();
}
window.ueinit = window.ue_ihb;
</script>

<!-- 17ud --><!-- sp:feature:aui-assets -->
<link rel="stylesheet" href="https://images-eu.ssl-images-amazon.com/images/I/61XfmMOouxL._RC|01evdoiemkL.css,01K+Ps1DeEL.css,31bAdTWQ3tL.css,11fF1zzJODL.css,11UGC+GXOPL.css,21LK7jaicML.css,11L58Qpo0GL.css,21EuGTxgpoL.css,01Xl9KigtzL.css,01YhS3Cs-hL.css,21GwE3cR-yL.css,019SHZnt8RL.css,01gv-pABIRL.css,11vZhCgAHbL.css,21Mne54CsmL.css,11WgRxUdJRL.css,01dU8+SPlFL.css,11DGn6WmpTL.css,01SHjPML6tL.css,111-D2qRjiL.css,01QrWuRrZ-L.css,31ElCx173PL.css,114KWZGKCVL.css,01cbS3UK11L.css,21gqsBkZE0L.css,01L8Y-JFEhL.css_.css?AUIClients/AmazonUI#not-trident" />
<script>
(function(g,h,O,pa){function k(a){w&&w.tag&&w.tag(q(":","aui",a))}function v(a,b){w&&w.count&&w.count("aui:"+a,0===b?0:b||(w.count("aui:"+a)||0)+1)}function l(a){try{return a.test(navigator.userAgent)}catch(b){return!1}}function x(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)}function q(a,b,c,d){b=b&&c?b+a+c:b||c;return d?q(a,b,d):b}function F(a,b,c){try{Object.defineProperty(a,b,{value:c,writable:!1})}catch(d){a[b]=c}return c}function P(){return setTimeout(Y,
0)}function qa(a,b){var c=a.length,d=c,f=function(){d--||(Q.push(b),R||(P(),R=!0))};for(f();c--;)Z[a[c]]?f():(z[a[c]]=z[a[c]]||[]).push(f)}function ra(a,b,c,d,f){var e=h.createElement(a?"script":"link");x(e,"error",d);f&&x(e,"load",f);if(a){e.type="text/javascript";e.async=!0;if(a=c)a=-1!==b.indexOf("images/I")||/AUIClients/.test(b);a&&e.setAttribute("crossorigin","anonymous");e.src=b}else e.rel="stylesheet",e.href=b;h.getElementsByTagName("head")[0].appendChild(e)}function aa(a,b){function c(c,d){function f(){ra(b,
c,h,function(b){!G&&h?(h=!1,v("resource_retry"),f()):(v("resource_error"),a.log("Asset failed to load: "+c,G?"WARN":void 0));b&&b.stopPropagation?b.stopPropagation():g.event&&(g.event.cancelBubble=!0)},d)}if(ba[c])return!1;ba[c]=!0;v("resource_count");var h=!0;return!f()}if(b){var d=0,f=0;c.andConfirm=function(a,b){return c(a,function(){d++;b&&b.apply(this,arguments)})};c.confirm=function(){f++};c.getCsriCounters=function(){return{reqs:d,full:f}}}return c}function sa(a,b,c){for(var d={name:a,guard:function(c){return b.guardFatal(a,
c)},logError:function(c,d,f){b.logError(c,d,f,a)}},f=[],e=0;e<c.length;e++)H.hasOwnProperty(c[e])&&(f[e]=S.hasOwnProperty(c[e])?S[c[e]](H[c[e]],d):H[c[e]]);return f}function A(a,b,c,d,f){return function(e,h){function n(){var a=null;d?a=h:"function"===typeof h&&(p.start=B(),a=h.apply(g,sa(e,k,l)),p.end=B());if(b){H[e]=a;a=e;for(Z[a]=!0;(z[a]||[]).length;)z[a].shift()();delete z[a]}p.done=!0}var k=f||this;"function"===typeof e&&(h=e,e=void 0);b&&(e=e?e.replace(ca,""):"__NONAME__",T.hasOwnProperty(e)&&
k.error(q(", reregistered by ",q(" by ",e+" already registered",T[e]),k.attribution),e),T[e]=k.attribution);for(var l=[],m=0;m<a.length;m++)l[m]=a[m].replace(ca,"");var p=da[e||"anon"+ ++ta]={depend:l,registered:B(),namespace:k.namespace};c?n():qa(l,k.guardFatal(e,n));return{decorate:function(a){S[e]=k.guardFatal(e,a)}}}}function ea(a){return function(){var b=Array.prototype.slice.call(arguments);return{execute:A(b,!1,a,!1,this),register:A(b,!0,a,!1,this)}}}function U(a,b){return function(c,d){d||
(d=c,c=void 0);var f=this.attribution;return function(){y.push(b||{attribution:f,name:c,logLevel:a});var e=d.apply(this,arguments);y.pop();return e}}}function I(a,b){this.load={js:aa(this,!0),css:aa(this)};F(this,"namespace",b);F(this,"attribution",a)}function fa(){h.body?r.trigger("a-bodyBegin"):setTimeout(fa,20)}function C(a,b){if(b){for(var c=a.className.split(" "),d=c.length;d--;)if(c[d]===b)return;a.className+=" "+b}}function ga(a,b){for(var c=a.className.split(" "),d=[],f;void 0!==(f=c.pop());)f&&
f!==b&&d.push(f);a.className=d.join(" ")}function ha(a){try{return a()}catch(b){return!1}}function J(){if(K){var a=g.innerWidth?{w:g.innerWidth,h:g.innerHeight}:{w:m.clientWidth,h:m.clientHeight};5<Math.abs(a.w-V.w)||50<a.h-V.h?(V=a,L=4,(a=n.mobile||n.tablet?450<a.w&&a.w>a.h:1250<=a.w)?C(m,"a-ws"):ga(m,"a-ws")):0<L&&(L--,ia=setTimeout(J,16))}}function ua(a){(K=void 0===a?!K:!!a)&&J()}function va(){return K}function t(a,b){return"sw:"+(b||"")+":"+a+":"}function ja(a,b,c,d){if(c){b=l(/Chrome/i)&&!l(/Edge/i)&&
!l(/OPR/i)&&!a.capabilities.isAmazonApp;var f=t(d,"browser"),e=t(d,"prod_mshop"),g=t(d,"beta_mshop");!a.capabilities.isAmazonApp&&c.browser&&b&&(k(f+"supported"),c.browser.action(f,d));!b&&c.browser&&k(f+"unsupported");c.prodMshop&&k(e+"unsupported");c.betaMshop&&k(g+"unsupported")}}"use strict";var M=O.now=O.now||function(){return+new O},B=function(a){return a&&a.now?a.now.bind(a):M}(g.performance);pa=B();var u=g.AmazonUIPageJS||g.P;if(u&&u.when&&u.register)throw Error("A copy of P has already been loaded on this page.");
var w=g.ue;k();k("aui_build_date:3.18.16-2018-12-25");var Q=[],R=!1,Y;Y=function(){for(var a=P(),b=M();Q.length;)if(Q.shift()(),50<M()-b)return;clearTimeout(a);R=!1};l(/OS 6_[0-9]+ like Mac OS X/i)&&x(g,"scroll",P);var Z={},z={},ba={},G=!1;x(g,"beforeunload",function(){G=!0;setTimeout(function(){G=!1},1E4)});var ca=/^prv:/,T={},H={},S={},da={},ta=0,D,y=[],ka=g.onerror;g.onerror=function(a,b,c,d,f){f&&"object"===typeof f||(f=Error(a,b,c),f.columnNumber=d,f.stack=b||c||d?q(String.fromCharCode(92),f.message,
"at "+q(":",b,c,d)):void 0);var e=y.pop()||{};f.attribution=q(":",f.attribution||e.attribution,e.name);f.logLevel=e.logLevel;f.attribution&&console&&console.log&&console.log([f.logLevel||"ERROR",a,"thrown by",f.attribution].join(" "));y=[];ka&&(e=[].slice.call(arguments),e[4]=f,ka.apply(g,e))};I.prototype={logError:function(a,b,c,d){b={message:b,logLevel:c||"ERROR",attribution:q(":",this.attribution,d)};if(g.ueLogError)return g.ueLogError(a||b,a?b:null),!0;console&&console.error&&(console.log(b),
console.error(a));return!1},error:function(a,b,c,d){a=Error(q(":",d,a,c));a.attribution=q(":",this.attribution,b);throw a;},guardError:U(),guardFatal:U("FATAL"),guardCurrent:function(a){var b=y[y.length-1];return b?U(b.logLevel,b).call(this,a):a},log:function(a,b,c){return this.logError(null,a,b,c)},declare:A([],!0,!0,!0),register:A([],!0),execute:A([]),AUI_BUILD_DATE:"3.18.16-2018-12-25",when:ea(),now:ea(!0),trigger:function(a,b,c){var d=M();this.declare(a,{data:b,pageElapsedTime:d-(g.aPageStart||
NaN),triggerTime:d});c&&c.instrument&&D.when("prv:a-logTrigger").execute(function(b){b(a)})},handleTriggers:function(){this.log("handleTriggers deprecated")},attributeErrors:function(a){return new I(a)},_namespace:function(a,b){return new I(a,b)}};var r=F(g,"AmazonUIPageJS",new I);D=r._namespace("PageJS","AmazonUI");D.declare("prv:p-debug",da);r.declare("p-recorder-events",[]);r.declare("p-recorder-stop",function(){});F(g,"P",r);fa();if(h.addEventListener){var la;h.addEventListener("DOMContentLoaded",
la=function(){r.trigger("a-domready");h.removeEventListener("DOMContentLoaded",la,!1)},!1)}var m=h.documentElement,W=function(){var a=["O","ms","Moz","Webkit"],b=h.createElement("div");return{testGradients:function(){b.style.cssText="background-image:-webkit-gradient(linear,left top,right bottom,from(#9f9),to(white));background-image:-webkit-linear-gradient(left top,#9f9,white);background-image:linear-gradient(left top,#9f9,white);";return-1<b.style.backgroundImage.indexOf("gradient")},test:function(c){var d=
c.charAt(0).toUpperCase()+c.substr(1);c=(a.join(d+" ")+d+" "+c).split(" ");for(d=c.length;d--;)if(""===b.style[c[d]])return!0;return!1},testTransform3d:function(){var a=!1;g.matchMedia&&(a=g.matchMedia("(-webkit-transform-3d)").matches);return a}}}(),u=m.className,ma=/(^| )a-mobile( |$)/.test(u),na=/(^| )a-tablet( |$)/.test(u),n={audio:function(){return!!h.createElement("audio").canPlayType},video:function(){return!!h.createElement("video").canPlayType},canvas:function(){return!!h.createElement("canvas").getContext},
svg:function(){return!!h.createElementNS&&!!h.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect},offline:function(){return navigator.hasOwnProperty&&navigator.hasOwnProperty("onLine")&&navigator.onLine},dragDrop:function(){return"draggable"in h.createElement("span")},geolocation:function(){return!!navigator.geolocation},history:function(){return!(!g.history||!g.history.pushState)},webworker:function(){return!!g.Worker},autofocus:function(){return"autofocus"in h.createElement("input")},
inputPlaceholder:function(){return"placeholder"in h.createElement("input")},textareaPlaceholder:function(){return"placeholder"in h.createElement("textarea")},localStorage:function(){return"localStorage"in g&&null!==g.localStorage},orientation:function(){return"orientation"in g},touch:function(){return"ontouchend"in h},gradients:function(){return W.testGradients()},hires:function(){var a=g.devicePixelRatio&&1.5<=g.devicePixelRatio||g.matchMedia&&g.matchMedia("(min-resolution:144dpi)").matches;v("hiRes"+
(ma?"Mobile":na?"Tablet":"Desktop"),a?1:0);return a},transform3d:function(){return W.testTransform3d()},touchScrolling:function(){return l(/Windowshop|android.([3-9]|[L-Z])|OS ([5-9]|[1-9][0-9]+)(_[0-9]{1,2})+ like Mac OS X|Chrome|Silk|Firefox|Trident.+?; Touch/i)},ios:function(){return l(/OS [1-9][0-9]*(_[0-9]*)+ like Mac OS X/i)&&!l(/trident|Edge/i)},android:function(){return l(/android.([1-9]|[L-Z])/i)&&!l(/trident|Edge/i)},mobile:function(){return ma},tablet:function(){return na}},p;for(p in n)n.hasOwnProperty(p)&&
(n[p]=ha(n[p]));for(var X="textShadow textStroke boxShadow borderRadius borderImage opacity transform transition".split(" "),N=0;N<X.length;N++)n[X[N]]=ha(function(){return W.test(X[N])});var K=!0,ia=0,V={w:0,h:0},L=4;J();x(g,"resize",function(){clearTimeout(ia);L=4;J()});var oa={getItem:function(a){try{return g.localStorage.getItem(a)}catch(b){}},setItem:function(a,b){try{return g.localStorage.setItem(a,b)}catch(c){}}};ga(m,"a-no-js");C(m,"a-js");!l(/OS [1-8](_[0-9]*)+ like Mac OS X/i)||g.navigator.standalone||
l(/safari/i)||C(m,"a-ember");u=[];for(p in n)n.hasOwnProperty(p)&&n[p]&&u.push("a-"+p.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()}));C(m,u.join(" "));m.setAttribute("data-aui-build-date","3.18.16-2018-12-25");r.register("p-detect",function(){return{capabilities:n,localStorage:n.localStorage&&oa,toggleResponsiveGrid:ua,responsiveGridEnabled:va}});l(/UCBrowser/i)||n.localStorage&&C(m,oa.getItem("a-font-class"));r.declare("a-event-revised-handling",!1);var E=navigator.serviceWorker;E&&x(E,
"message",function(a){a&&a.data&&v(a.data.k,a.data.v)});p={reg:{},unreg:{}};p.unreg.browser={action:function(a,b){var c=E.getRegistrations();c&&c.then(function(c){c.forEach(function(c){c.unregister().then(function(){v(a+"success")}).catch(function(c){r.logError(c,"[AUI SW] Failed to "+b+" service worker: ");v(a+"failure")})})})}};(function(a){var b=a.reg,c=a.unreg;E&&E.getRegistrations?(D.when("A","a-util").execute(function(a,b){ja(a,b,c,"unregister")}),x(g,"load",function(){D.when("A","a-util").execute(function(a,
c){ja(a,c,b,"register")})})):(b&&(b.browser&&k(t("register","browser")+"unsupported"),b.prodMshop&&k(t("register","prod_mshop")+"unsupported"),b.betaMshop&&k(t("register","beta_mshop")+"unsupported")),c&&(c.browser&&k(t("unregister","browser")+"unsupported"),c.prodMshop&&k(t("unregister","prod_mshop")+"unsupported"),c.betaMshop&&k(t("unregister","beta_mshop")+"unsupported")))})(p);r.declare("a-fix-event-off",!1);v("pagejs:pkgExecTime",B()-NaN)})(window,document,Date);
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('sp.load.js').execute(function() {
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/61FluID2l-L._RC|11IYhapguOL.js,61VQRvc280L.js,21iSNz47xoL.js,012FVc3131L.js,119KAWlHU6L.js,31fv8bqHLoL.js,31ReKJl2X6L.js,51WivJzk7vL.js,11AHlQhPRjL.js,01NATrwbNUL.js,11aNYFFS5hL.js,116tgw9TSaL.js,21auxuI+dRL.js,01PoLXBDXWL.js,61GDyZ5kYqL.js,01mi-J86cyL.js,11BOgvnnntL.js,31SG6rlHlbL.js,01rpauTep4L.js,01iyxuSGj4L.js,01XI-Ief5sL.js_.js?AUIClients/AmazonUI#177619-T1.144375-T1');
});
</script>
<!-- sp:feature:nav-inline-css -->
<style>.nav-sprite-v1 .nav-sprite, .nav-sprite-v1 .nav-icon {
  background-image: url(https://images-eu.ssl-images-amazon.com/images/G/03/gno/sprites/nav-sprite-global_bluebeacon-V3-1x_optimized._CB516556968_.png);
  background-position: 0 1000px;
  background-repeat: repeat-x;
}
.nav-spinner {
  background-image: url(https://images-eu.ssl-images-amazon.com/images/G/03/javascripts/lib/popover/images/snake._CB192194539_.gif);
  background-position: center center;
  background-repeat: no-repeat;
}
</style><!--  -->
<link rel="stylesheet" href="https://images-eu.ssl-images-amazon.com/images/I/718lfkM5V-L._RC|11qlbytjBCL.css,31bOonmFB4L.css,21LkO384mjL.css,31Jg45b6O1L.css,11S8GiSgx9L.css,31sgPDgo3OL.css,01XHMOHpK1L.css_.css?AUIClients/AmazonNavigationDesktopMetaAsset#desktop.language-de.de" />
<!-- sp:feature:host-assets -->













  
  







    








 
 





























 
 











<!-- htmlBeginMarker -->

    














  
 








    
    
    
    



  











  





    























  
  


































  







        














    
    











    
    


    
    





































  


   
    
    


























<style>
.ap_popover_unsprited .ap_body .ap_left{background-image:url(https://images-na.ssl-images-amazon.com/images/G/01/javascripts/lib/popover/images/po_left_17._V1_.png)}.ap_popover_unsprited .ap_body .ap_right{background-image:url(https://images-na.ssl-images-amazon.com/images/G/01/javascripts/lib/popover/images/po_right_17._V1_.png)}.ap_popover_unsprited .ap_header .ap_left{background-image:url(https://images-na.ssl-images-amazon.com/images/G/01/javascripts/lib/popover/images/po_top_left._V1_.png)}.ap_popover_unsprited .ap_header .ap_right{background-image:url(https://images-na.ssl-images-amazon.com/images/G/01/javascripts/lib/popover/images/po_top_right._V1_.png)}.ap_popover_unsprited .ap_header .ap_middle{background-image:url(https://images-na.ssl-images-amazon.com/images/G/01/javascripts/lib/popover/images/po_top._V1_.png)}.ap_popover_unsprited .ap_footer .ap_left{background-image:url(https://images-na.ssl-images-amazon.com/images/G/01/javascripts/lib/popover/images/po_bottom_left._V1_.png)}.ap_popover_unsprited .ap_footer .ap_right{background-image:url(https://images-na.ssl-images-amazon.com/images/G/01/javascripts/lib/popover/images/po_bottom_right._V1_.png)}.ap_popover_unsprited .ap_footer .ap_middle{background-image:url(https://images-na.ssl-images-amazon.com/images/G/01/javascripts/lib/popover/images/po_bottom._V1_.png)}.ap_popover_sprited .ap_body .ap_left,.ap_popover_sprited .ap_body .ap_right{background-image:url(https://images-na.ssl-images-amazon.com/images/G/01/javascripts/lib/popover/images/light/sprite-v._V1_.png)}.ap_popover_sprited .ap_closebutton,.ap_popover_sprited .ap_footer .ap_left,.ap_popover_sprited .ap_footer .ap_middle,.ap_popover_sprited .ap_footer .ap_right,.ap_popover_sprited .ap_header .ap_left,.ap_popover_sprited .ap_header .ap_middle,.ap_popover_sprited .ap_header .ap_right{background-image:url(https://images-na.ssl-images-amazon.com/images/G/01/javascripts/lib/popover/images/light/sprite-h._V1_.png)}.ap_popover_sprited .ap_body .ap_left-arrow,.ap_popover_sprited .ap_body .ap_right-arrow{background-image:url(https://images-na.ssl-images-amazon.com/images/G/01/javascripts/lib/popover/images/light/sprite-arrow-v._V1_.png)}.ap_popover{position:absolute;outline:0}.ap_body{height:100%;min-height:36px;position:relative;background-color:#fff;margin:0 17px}.ap_body .ap_left,.ap_popover_sprited .ap_body .ap_left-arrow{width:17px;height:100%;position:absolute;top:0;left:-17px;background-attachment:scroll;background-repeat:repeat-y}.ap_popover_sprited .ap_body .ap_left{background-position:0 top}.ap_body .ap_right,.ap_popover_sprited .ap_body .ap_right-arrow{width:17px;height:100%;position:absolute;top:0;right:-17px;background-attachment:scroll;background-repeat:repeat-y}.ap_popover_sprited .ap_body .ap_right{background-position:-51px top}.ap_footer,.ap_header{position:relative;width:100%}.ap_footer *,.ap_header *{height:26px}.ap_header .ap_left{position:absolute;top:0;left:0;width:34px;background-attachment:scroll;background-repeat:no-repeat}.ap_popover_sprited .ap_header .ap_left{background-position:left -2px}.ap_header .ap_right{width:34px;position:absolute;top:0;right:0;background-attachment:scroll;background-repeat:no-repeat}.ap_popover_sprited .ap_header .ap_right{background-position:right -2px}.ap_header .ap_middle{margin:0 34px;background-attachment:scroll;background-repeat:repeat-x}.ap_popover_sprited .ap_header .ap_middle{background-position:0 -70px}.ap_footer .ap_left{position:absolute;top:0;left:0;width:34px;background-attachment:scroll;background-repeat:no-repeat}.ap_popover_sprited .ap_footer .ap_left{background-position:left -40px}.ap_footer .ap_right{width:34px;position:absolute;top:0;right:0;background-attachment:scroll;background-repeat:no-repeat}.ap_popover_sprited .ap_footer .ap_right{background-position:right -40px}.ap_footer .ap_middle{margin:0 34px;background-attachment:scroll;background-repeat:repeat-x}.ap_popover_sprited .ap_footer .ap_middle{background-position:0 -108px}.ap_popover .ap_titlebar{display:none;position:absolute;left:0;top:0;background-color:#EAF3FE;border-bottom:1px solid #C2DDF2;font-size:14px;font-weight:700;margin:8px 18px;white-space:nowrap;overflow:hidden}.ap_popover .ap_titlebar.multiline{white-space:normal;overflow:visible}.ap_popover .ap_titlebar .ap_title{padding:4px 0;margin-left:10px;overflow:hidden}#ap_overlay,#ap_overlay div{background-color:#3F4C58;width:100%;position:absolute;top:0;left:0;z-index:99}.ap_popover .ap_close{position:absolute;right:18px;top:13px}.ap_popover .ap_close a{padding:5px;text-decoration:none;outline:0}.ap_popover .ap_close .ap_closetext{display:none;margin-right:5px;line-height:1em}.ap_popover .ap_closebutton{display:-moz-inline-box;display:inline-block;width:15px;height:15px;background-repeat:no-repeat;background-position:0 -136px;position:relative;overflow:hidden;vertical-align:top}.ap_popover .ap_closebutton span{position:absolute;top:-9999px}.ap_popover .ap_close img{vertical-align:top}.ap_classic{border-top:1px solid #ccc;border-left:1px solid #ccc;border-bottom:1px solid #2F2F1D;border-right:1px solid #2F2F1D;background-color:#EFEDD4;padding:3px}.ap_classic .ap_titlebar{color:#86875D;font-size:12px;padding:0 0 3px 0;line-height:1em}.ap_classic .ap_close{float:right}.ap_classic .ap_content{clear:both;background-color:#fff;border:1px solid #ACA976;padding:8px;font-size:11px}
</style>
<link rel="stylesheet" href="https://images-eu.ssl-images-amazon.com/images/I/21nzMnop-gL._RC|01nX97hgmYL.css,01Z3lE5tzaL.css,01wmu5YmvrL.css,31F60G9jVRL.css,21nyg2QtcWL.css,61PjJ8BEqZL.css,21rTx+UpnSL.css,01GT2VH57dL.css,01ekIXTj5kL.css,31BMnmV4vQL.css,4140ENzg0ZL.css,11UGK4+GCNL.css,31e6R41SWLL.css,11X8K4AolpL.css,21PjfsP9YvL.css,21P0GvY6M5L.css,01rgQ3jqo7L.css,314gb2LkLML.css,01QwYm0bA4L.css,01TCV-xmeZL.css,01CCLEN08lL.css,016ZWeUMVEL.css,31X-Ol7PuGL.css,01wsp46SQTL.css,01RRH0yFa4L.css,01JOvs9kD8L.css,21fmybezPeL.css,019M+d36JfL.css,31Fo-RK+JML.css,21dhJHsCFVL.css,21c4cPN57WL.css_.css?AUIClients/AmazonDevicesDetailPageMetaAssets#desktop.de.not-trident.113788-C.114039-C.179455-T1.135295-T1.136850-T1.103061-T1.174137-T1.172402-T1.131900-T1.94145-T1" />


<script>
(function(d,b,m){function c(a){return"--private-amznjqshim-"+a}function e(a,l){var b=c(l);d.now(b).execute(c(a+"-"+b)+"-"+f++,function(a){void 0===a&&d.declare(b,!0)})}function h(a){e("markRequested","functionality-requested:"+a)}function g(a){e("completedStage","stage-"+a)}b.goN2Debug||(b.goN2Debug={info:function(){}});"use strict";var f=0,k=b.amznJQ=new function(){this.addLogical=this.addStyle=this.addStyles=this.PLNow=this.windowOnLoad=function(){};this.declareAvailable=function(a){e("declaring",
a)};this.available=function(a,b){a=c(a);h(a);d.when(a,c("jQuery")).execute(c("available-"+a)+"-"+f++,b)};this.onReady=function(a,b){a=c(a);h(a);d.when(a,"a-domready",c("jQuery")).execute(c("onReady-"+a)+"-"+f++,b)};this.onCompletion=function(a,b){var e=c("stage-"+a);d.when(e,c("jQuery")).execute(b)};this.completedStage=function(a){g(a)};this.addPL=function(a){d.when("a-preload").execute(c("Preloader")+"-"+f++,function(b){b.preload(a)})};this.strings={};this.chars={}};d.when("load").execute(c("fail-safe-stages"),
function(){g("amznJQ.theFold");g("amznJQ.criticalFeature")});d.when("jQuery").execute("define amznJQ jQuery",function(a){b.jQuery||(b.jQuery=a);k.jQuery||(k.jQuery=a);e("declaring","jQuery")})})(window.P||window.AmazonUIPageJS,window,document);
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('atf').execute(function(){
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/41o6JYGJZKL.js?AUIClients/AmazonPopoversAUIShim#de');
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/41%2BkT-XRLiL._RC|31Em1GiOl+L.js,41pycQpZjFL.js,01wFfxST+ZL.js,012hkuSHZOL.js,311LO24NECL.js,51PXPHLwGnL.js,51CysS8km3L.js,81PLIDzaAXL.js,11B9yJN+bnL.js,21DhhQMus3L.js,21Wa0ZZVAmL.js,41UXUgXh7tL.js,31gnJjWvxPL.js,11e9-8uUHQL.js,01s9HEfbt3L.js,11iHZuQapKL.js,015TRQC5i+L.js,01Lt7JYCo2L.js,31Ac-cQ+ZWL.js,01qXU4-2A0L.js,01JzE3-DfLL.js,0185ITV0M6L.js,41GKHkSvCpL.js,11ZdiaYG8gL.js,61e7xszHEhL.js,01GhKb2usNL.js,01OtvpwikQL.js,11MQqFPEK+L.js,01qPwv8D5hL.js,016QFWAAdML.js,21lFKGGVoFL.js,41KQdFQbaLL.js,41svsFj64ML.js,41hDaGHlxfL.js,51RugCNkeOL.js,21e71NrLt3L.js,11Ze1YhMgJL.js_.js?AUIClients/AmazonDevicesDetailPageMetaAssets#desktop.language-de.de.167162-T1.146883-T1.151985-T1.136850-T1.103061-T1.179499-T1.131900-T1.184660-C.162909-C.107686-T1.143147-T1.147957-T1.154031-T1.171818-T1');
});
</script>














    


 


    
    



      


    
    


        <script type="a-state" data-a-state="{&quot;key&quot;:&quot;metrics-schema&quot;}">{"widgetSchema":"dp:widget:","dimensionSchema":"dp:dims:"}</script>

    













  


















 
 
 













      










        








































































































































































































































































































    
    
      



    
    
    
    <!DOCTYPE html>






        
    
    












<style type="text/css">

  #cm_cr_dpwidget .a-size-micro {
    font-size: 9px;
  } 

  #cm_cr_dpwidget .c7yTopDownDashedStrike {
    border-top: 1px dashed #A9A9A9;
    border-bottom: 1px dashed #A9A9A9;
  }

  #cm_cr_dpwidget .c7yBadgeAUI {
    text-transform: uppercase;
    letter-spacing: 0.5px;
    padding: 2px;
    white-space: nowrap;
  }

</style>



<script language="Javascript1.1" type="text/javascript">
<!--
function amz_js_PopWin(url,name,options){
  var ContextWindow = window.open(url,name,options);
  ContextWindow.focus();
  return false;
}
//-->
</script>



<script type="text/javascript">

// =============================================================================
// Function Class: Show/Hide product promotions & special offers link
// =============================================================================

function showElement(id) {
  var elm = document.getElementById(id);
  if (elm) {
    elm.style.visibility = 'visible';
    if (elm.getAttribute('name') == 'heroQuickPromoDiv') {
      elm.style.display = 'block';
    }
  }
}
function hideElement(id) {
  var elm = document.getElementById(id);
  if (elm) {
    elm.style.visibility = 'hidden';
    if (elm.getAttribute('name') == 'heroQuickPromoDiv') {
      elm.style.display = 'none';
    }
  }
}
function showHideElement(h_id, div_id) {
  var hiddenTag = document.getElementById(h_id);
  if (hiddenTag) {
    showElement(div_id);
  } else {
    hideElement(div_id);
  }
}

    if(typeof P === 'object' && typeof P.when === 'function'){
    P.register("isLazyLoadWeblabEnabled", function(){
        var  isWeblabEnabled = 1;
        return isWeblabEnabled;
      });
    }

	window.isBowserFeatureCleanup = 0;
	
var touchDeviceDetected = false;


        P.when('atf').register('sp.load.js');


var CSMReqs={af:{c:2,p:'atf'},cf:{c:2,p:'cf'},x1:{c:1,p:'x1'},x2:{c:1,p:'x2'}};
function setCSMReq(a){
    a=a.toLowerCase();
    var b=CSMReqs[a];
    if(b&&--b.c==0){
        if(typeof uet=='function'){uet(a); (a == 'af') && (typeof replaceImg === 'function') && replaceImg();};
        if(typeof P != 'undefined'){
            P.register(b.p);
            if(a == 'af') {
                if(typeof uet === 'function') {
                    uet('bb', 'TwisterAUIWait', {wb: 1});
                }
            }
        };
    }
}
if(typeof P != 'undefined') {
    P.when('A').execute(function(A) {
        if(typeof uet === 'function') {
            uet('af', 'TwisterAUIWait', {wb: 1});
        }
    });
}

var addlongPoleTag = function(marker,customtag){
    marker=marker.toLowerCase();
    var b=CSMReqs[marker];
    if(b.c == 0){
        if(window.ue && typeof ue.tag === 'function') {
            ue.tag(customtag);
        }
    }
};

        window.isACRJumplLinkAnimated = 3;


var gbEnableTwisterJS  = 0;
var isTwisterPage = 0;
  isTwisterPage = 1;
</script>




        
        
    
    
        
            
            
        
        
        
            
        
        
        
            









<meta http-equiv="content-type" content="text/html; charset=iso-8859-15" />




<link rel="canonical" href="https://www.amazon.de/Echo-Input-Schwarz-Lautsprecher-5-mm-Audioeingang/dp/B07C76F3P2" />
<meta name="description" content="Echo Input (Schwarz) &ndash; Bringen Sie Alexa auf Ihren Lautsprecher &ndash; Externer Lautsprecher mit 3,5-mm-Audioeingang oder Bluetooth erforderlich: Amazon.de: Alle Produkte" />
<meta name="title" content="Echo Input (Schwarz) &ndash; Bringen Sie Alexa auf Ihren Lautsprecher &ndash; Externer Lautsprecher mit 3,5-mm-Audioeingang oder Bluetooth erforderlich: Amazon.de: Alle Produkte" />

<meta name="keywords" content="Echo Input (Schwarz) &ndash; Bringen Sie Alexa auf Ihren Lautsprecher &ndash; Externer Lautsprecher mit 3,5-mm-Audioeingang oder Bluetooth erforderlich,Amazon,C1125P" />
<title>Echo Input (Schwarz) &ndash; Bringen Sie Alexa auf Ihren Lautsprecher &ndash; Externer Lautsprecher mit 3,5-mm-Audioeingang oder Bluetooth erforderlich: Amazon.de: Alle Produkte</title>



<link rel="stylesheet" href="https://images-eu.ssl-images-amazon.com/images/I/61hZ-YG-XRL.css?AUIClients/AmazonDevicesDetailPageLegacyAssets" />





<style type="text/css">

/* Override for Native DropDown changes */
       #buybox_feature_div .a-native-dropdown, #buybox .a-native-dropdown { opacity: 1; filter: alpha(opacity=100); z-index: auto; position: static; display: inline; font-weight: normal;}
       #buybox_feature_div label.a-native-dropdown, #buybox label.a-native-dropdown {padding-right: 5px;}
       #buybox_feature_div .a-dropdown-container .a-button-dropdown, #buybox .a-dropdown-container .a-button-dropdown  { display: none !important;}
      #twister .a-native-dropdown { display: inline; opacity:1; filter: alpha(opacity=100); z-index: auto; position: static; } #twister .a-dropdown-container span.a-button-dropdown { display: none !important } 
     #buybox_feature_div #OneClickBox, #buybox #OneClickBox { text-align:center;}
     #buybox_feature_div #oneClickAvailable, #buybox #oneClickAvailable { text-align:center;}
     #defaultChildDropdown_feature_div .a-native-dropdown { display: inline;}
     #defaultChildDropdown_feature_div .a-dropdown-container .a-button-dropdown { display: none !important;}

</style>

<script type="text/javascript">


P.when("p-detect").execute(function() {
    var h = document.documentElement;
    h.className = h.className.replace(/(^|\\b)a-touch(\\b|$)/g,"");
});

window.weblabs = {};

</script>
<meta name="viewport" content="width=1236" />

  


    












<style type="text/css">

  #cm_cr_dpwidget .a-size-micro {
    font-size: 9px;
  } 

  #cm_cr_dpwidget .c7yTopDownDashedStrike {
    border-top: 1px dashed #A9A9A9;
    border-bottom: 1px dashed #A9A9A9;
  }

  #cm_cr_dpwidget .c7yBadgeAUI {
    text-transform: uppercase;
    letter-spacing: 0.5px;
    padding: 2px;
    white-space: nowrap;
  }

</style>



<style type="text/css">.nav-sprite-v1 .nav-sprite, .nav-sprite-v1 .nav-icon {
  background-image: url(https://images-eu.ssl-images-amazon.com/images/G/03/gno/sprites/nav-sprite-global_bluebeacon-V3-1x_optimized._CB516556968_.png);
  background-position: 0 1000px;
  background-repeat: repeat-x;
}
.nav-spinner {
  background-image: url(https://images-eu.ssl-images-amazon.com/images/G/03/javascripts/lib/popover/images/snake._CB192194539_.gif);
  background-position: center center;
  background-repeat: no-repeat;
}


  
    .tagEdit {
      padding-bottom:4px;
      padding-top:4px;
    }

    .edit-tag {
      width: 155px;
      margin-left: 10px;
    }

    .list-tags {
      white-space: nowrap;
      padding: 1px 0px 0px 0px;
    }

   #suggest-table {
      display: none;
      position: absolute;
      z-index: 2;
      background-color: #fff;
      border: 1px solid #9ac;
    }

    #suggest-table tr td{
      color: #333;
      font: 11px Verdana, sans-serif;
      padding: 2px;
    }

    #suggest-table tr.hovered {
      color: #efedd4;
      background-color: #9ac;
    }

  
  .see-popular {
    padding: 1.3em 0 0 0;
  }

  .tag-cols {
    border-collapse: collapse;
  }

  .tag-cols td {
    vertical-align: top;
    width: 250px;
    padding-right: 30px;
  }

  .tag-cols .tag-row {
    padding: 0 0 7px 0px;
  }

  .tag-cols .see-all {
    white-space: nowrap;
    padding-top: 5px;
  }

  .tags-piles-feedback {
    display: none;
    color: #000;
    font-size: 0.9em;
    font-weight: bold;
    margin: 0px 0 0 0;
   }

  .tag-cols i {
    display: none;
    cursor: pointer;
    cursor: hand;
    float: left;
    font-style: normal;
    font-size: 0px;
    vertical-align: bottom;
    width: 16px;
    height: 16px;
    margin-top: 1px;
    margin-right: 3px;
  }

  .tag-cols .snake {
    display: block;
    background: url('https://images-eu.ssl-images-amazon.com/images/G/03/x-locale/communities/tags/graysnake._CB192240190_.gif');
  }

  #tagContentHolder .tip {
    display: none;
    color: #999;
    font-size: 10px;
    padding-top: 0.25em;
  }

  #tagContentHolder .tip a {
    color: #999 !important;
    text-decoration: none !important;
    border-bottom: solid 1px #CCC;
  }

  .nowrap {
    white-space: nowrap;
  }

  #tgEnableVoting {
    display: none;
  }

  #tagContentHolder .count {
    color: #666;
    font-size: 10px;
    margin-left: 3px;
    white-space: nowrap;
  }

  .count.tgVoting {
    cursor: pointer;
  }

  .tgVoting .tgCounter {
    margin-right: 3px;
    border-bottom: 1px dashed #003399;
    color: #003399;
  }


.c2c-inline-sprite {
    display: -moz-inline-box;
    display: inline-block;
    margin: 0;padding: 0; 
    position: relative;
    overflow: hidden;
    vertical-align: middle;
    background-image: url(https://images-eu.ssl-images-amazon.com/images/G/03/electronics/click2call/click2call-sprite._CB153403599_.png);
    background-repeat: no-repeat;
}
.c2c-inline-sprite span {
    position:absolute;
    top:-9999px;
}

.dp-call-me-button {
    width:52px;
    height:22px;
    background-position:0px -57px; 
}


/* Different sprites/images used CSS Start */
.swSprite {background-image: url(https://images-eu.ssl-images-amazon.com/images/G/03/common/sprites/sprite-site-wide._CB146303775_.png); }
.dpSprite {background-image: url(https://images-eu.ssl-images-amazon.com/images/G/03/common/sprites/sprite-dp-2._CB380646105_.png); }
.wl-button-sprite {background-image: url(https://images-eu.ssl-images-amazon.com/images/G/03/x-locale/communities/wishlist/add-to-wl-button-sprite.gif); }
.cBoxTL, .cBoxTR, .cBoxBL, .cBoxBR { background-image:url(https://images-eu.ssl-images-amazon.com/images/G/03/common/sprites/sprite-site-wide-2._CB295586782_.png); }
.auiTestSprite { background: url(https://images-eu.ssl-images-amazon.com/images/G/03/nav2/images/sprite-carousel-btns-stars2.png) no-repeat scroll 0 0 transparent; }
span.amtchelp { background: url(https://images-eu.ssl-images-amazon.com/images/G/03/SellerForums/amz/images/help-16x16._CB339876337_.gif) no-repeat scroll right bottom transparent; }
.shuttleGradient { background: url(https://images-eu.ssl-images-amazon.com/images/G/03/x-locale/communities/customerimage/shuttle-gradient._CB192239028_.gif); }
.twisterPopoverArrow { background: url(https://images-eu.ssl-images-amazon.com/images/G/03/gateway/csw/tri-down._CB401957524_.png); }
#finderUpdateButton img, #finderShowMoreDevicesLink, #finderHideMoreDevicesLink {background-image: url(https://images-eu.ssl-images-amazon.com/images/G/03/nav2/finders/finder-fits-sprites._CB156429345_.png);}
.cmtySprite { background-image: url(https://images-eu.ssl-images-amazon.com/images/G/03/common/sprites/sprite-communities._CB388946692_.png); background-repeat: no-repeat; }

/* Different sprites/images used CSS End */



/* Best Seller Badging */


  .medSprite { background-image: url('https://images-eu.ssl-images-amazon.com/images/G/03/common/sprites/sprite-media-platform._CB246955114_.png'); background-repeat: no-repeat; }

</style>
















<!--&&&Portal&Delimiter&&&--><!-- sp:end-feature:host-assets -->
<script type='text/javascript'>
window.ue_ihe = (window.ue_ihe || 0) + 1;
if (window.ue_ihe === 1) {
(function(e,c){function h(b,a){f.push([b,a])}function g(b,a){if(b){var c=e.head||e.getElementsByTagName("head")[0]||e.documentElement,d=e.createElement("script");d.async="async";d.src=b;d.setAttribute("crossorigin","anonymous");a&&a.onerror&&(d.onerror=a.onerror);a&&a.onload&&(d.onload=a.onload);c.insertBefore(d,c.firstChild)}}function k(){ue.uels=g;for(var b=0;b<f.length;b++){var a=f[b];g(a[0],a[1])}ue.deffered=1}var f=[];c.ue&&(ue.uels=h,c.ue.attach&&c.ue.attach("load",k))})(document,window);
(function(k,l,g){function m(a){c||(c=b[a.type].id,"undefined"===typeof a.clientX?(e=a.pageX,f=a.pageY):(e=a.clientX,f=a.clientY),2!=c||h&&(h!=e||n!=f)?(r(),d.isl&&l.setTimeout(function(){p("at",d.id)},0)):(h=e,n=f,c=0))}function r(){for(var a in b)b.hasOwnProperty(a)&&d.detach(a,m,b[a].parent)}function s(){for(var a in b)b.hasOwnProperty(a)&&d.attach(a,m,b[a].parent)}function t(){var a="";!q&&c&&(q=1,a+="&ui="+c);return a}var d=k.ue,p=k.uex,q=0,c=0,h,n,e,f,b={click:{id:1,parent:g},mousemove:{id:2,
parent:g},scroll:{id:3,parent:l},keydown:{id:4,parent:g}};d&&p&&(s(),d._ui=t)})(ue_csm,window,document);



    if (window.ue && window.ue.uels) {
            var cel_widgets = [ { "c":"celwidget" },{ "c":"feature" } ];

                ue.uels("https://images-eu.ssl-images-amazon.com/images/G/01/AUIClients/ClientSideMetricsAUIJavascript@jserrorsForester.10f2559e93ec589d92509318a7e2acbac74c343a._V2_.js");
    }

(function(k,c){function l(a,b){return a.filter(function(a){return a.initiatorType==b})}function f(a,c){if(b.t[a]){var g=b.t[a]-b._t0,e=c.filter(function(a){return 0!==a.responseEnd&&m(a)<g}),f=l(e,"script"),h=l(e,"link"),k=l(e,"img"),n=e.map(function(a){return a.name.split("/")[2]}).filter(function(a,b,c){return a&&c.lastIndexOf(a)==b}),q=e.filter(function(a){return a.duration<p}),s=g-Math.max.apply(null,e.map(m))<r|0;"af"==a&&(b._afjs=f.length);return a+":"+[e[d],f[d],h[d],k[d],n[d],q[d],s].join("-")}}
function m(a){return a.responseEnd-(b._t0-c.timing.navigationStart)}function n(){var a=c[h]("resource"),d=f("cf",a),g=f("af",a),a=f("ld",a);delete b._rt;b._ld=b.t.ld-b._t0;b._art&&b._art();return[d,g,a].join("_")}var p=20,r=50,d="length",b=k.ue,h="getEntriesByType";b._rre=m;b._rt=c&&c.timing&&c[h]&&n})(ue_csm,window.performance);


(function(s,l){function m(b,e,c){c=c||new Date(+new Date+t);c="expires="+c.toUTCString();n.cookie=b+"="+e+";"+c+";path=/"}function p(b){b+="=";for(var e=n.cookie.split(";"),c=0;c<e.length;c++){for(var a=e[c];" "==a.charAt(0);)a=a.substring(1);if(0===a.indexOf(b))return decodeURIComponent(a.substring(b.length,a.length))}return""}function q(b,e,c){if(!e)return b;-1<b.indexOf("{")&&(b="");for(var a=b.split("&"),f,d=!1,h=!1,g=0;g<a.length;g++)f=a[g].split(":"),f[0]==e?(!c||d?a.splice(g,1):(f[1]=c,a[g]=
f.join(":")),h=d=!0):2>f.length&&(a.splice(g,1),h=!0);h&&(b=a.join("&"));!d&&c&&(0<b.length&&(b+="&"),b+=e+":"+c);return b}var k=s.ue||{},t=6048E7,n=ue_csm.document||l.document,r=null,d;a:{try{d=l.localStorage;break a}catch(u){}d=void 0}k.count&&k.count("csm.cookieSize",document.cookie.length);k.cookie={get:p,set:m,updateCsmHit:function(b,e,c){try{var a;if(!(a=r)){var f;a:{try{if(d&&d.getItem){f=d.getItem("csm-hit");break a}}catch(k){}f=void 0}a=f||p("csm-hit")||"{}"}a=q(a,b,e);r=a=q(a,"t",+new Date);
try{d&&d.setItem&&d.setItem("csm-hit",a)}catch(h){}m("csm-hit",a,c)}catch(g){"function"==typeof l.ueLogError&&ueLogError(Error("Cookie manager: "+g.message),{logLevel:"WARN"})}}}})(ue_csm,window);

(function(l,d){function c(b){b="";var c=a.isBFT?"b":"s",d=""+a.oid,f=""+a.lid,g=d;d!=f&&20==f.length&&(c+="a",g+="-"+f);a.tabid&&(b=a.tabid+"+");b+=c+"-"+g;b!=e&&100>b.length&&(e=b,a.cookie?a.cookie.updateCsmHit(m,b+("|"+ +new Date)):document.cookie="csm-hit="+b+("|"+ +new Date)+n+"; path=/")}function p(){e=0}function h(b){!0===d[a.pageViz.propHid]?e=0:!1===d[a.pageViz.propHid]&&c({type:"visible"})}var n="; expires="+(new Date(+new Date+6048E5)).toGMTString(),m="tb",e,a=l.ue||{},k=a.pageViz&&a.pageViz.event&&
a.pageViz.propHid;a.attach&&(a.attach("click",c),a.attach("keyup",c),k||(a.attach("focus",c),a.attach("blur",p)),k&&(a.attach(a.pageViz.event,h,d),h({})));a.aftb=1})(ue_csm,document);


ue_csm.ue.stub(ue,"impression");


(function(k,d,h){function f(a,c,b){a&&a.indexOf&&0===a.indexOf("http")&&0!==a.indexOf("https")&&l(s,c,a,b)}function g(a,c,b){a&&a.indexOf&&(location.href.split("#")[0]!=a&&null!==a&&"undefined"!==typeof a||l(t,c,a,b))}function l(a,c,b,e){m[b]||(e=u&&e?n(e):"N/A",d.ueLogError&&d.ueLogError({message:a+c+" : "+b,logLevel:v,stack:"N/A"},{attribution:e}),m[b]=1,p++)}function e(a,c){if(a&&c)for(var b=0;b<a.length;b++)try{c(a[b])}catch(d){}}function q(){return d.performance&&d.performance.getEntriesByType?
d.performance.getEntriesByType("resource"):[]}function n(a){if(a.id)return"//*[@id='"+a.id+"']";var c;c=1;var b;for(b=a.previousSibling;b;b=b.previousSibling)b.nodeName==a.nodeName&&(c+=1);b=a.nodeName;1!=c&&(b+="["+c+"]");a.parentNode&&(b=n(a.parentNode)+"/"+b);return b}function w(){var a=h.images;a&&a.length&&e(a,function(a){var b=a.getAttribute("src");f(b,"img",a);g(b,"img",a)})}function x(){var a=h.scripts;a&&a.length&&e(a,function(a){var b=a.getAttribute("src");f(b,"script",a);g(b,"script",a)})}
function y(){var a=h.styleSheets;a&&a.length&&e(a,function(a){if(a=a.ownerNode){var b=a.getAttribute("href");f(b,"style",a);g(b,"style",a)}})}function z(){if(A){var a=q();e(a,function(a){f(a.name,a.initiatorType)})}}function B(){e(q(),function(a){g(a.name,a.initiatorType)})}function r(){var a;a=d.location&&d.location.protocol?d.location.protocol:void 0;"https:"==a&&(z(),w(),x(),y(),B(),p<C&&setTimeout(r,D))}var s="[CSM] Insecure content detected ",t="[CSM] Ajax request to same page detected ",v="WARN",
m={},p=0,D=k.ue_nsip||1E3,C=5,A=1==k.ue_urt,u=!0;ue_csm.ue_disableNonSecure||(d.performance&&d.performance.setResourceTimingBufferSize&&d.performance.setResourceTimingBufferSize(300),r())})(ue_csm,window,document);

(function(d){d.ue_cel_stub||(d.ue_cel_stub=function(){var b={};return{registerModule:function(a,c){b[a]||(b[a]=c,b[a].on())},replayModule:function(a,c){b[a]&&(b[a].replay(c),b[a].off(),delete b[a])}}}())})(ue_csm);
(function(a,d,h){a.ue_mcm_stub||a.ue&&a.ue.isBF||(a.ue_mcm_stub=function(){function e(a){var b=c.d(),e=(d.body||{}).scrollWidth,k=(d.body||{}).scrollHeight,f;h&&"function"===typeof h.now&&a.timeStamp&&(f=h.now()-a.timeStamp,f=parseFloat(f.toFixed(2)));g.push({rawEvent:a,additionalData:{ots:b,ow:e,oh:k,odt:f}})}var c=a.ue,g=[];return{on:function(){c.attach&&c.attach("click",e,d)},off:function(){c.detach&&c.detach("click",e,d)},replay:function(a){for(var b=0;b<g.length;b++)a(g[b].rawEvent,g[b].additionalData)}}}(),
a.ue_cel_stub&&a.ue_cel_stub.registerModule("mcm",a.ue_mcm_stub))})(ue_csm,document,window.performance);



if(window.ue&&uet) { uet('bb'); }

}
</script><!-- sp:feature:head-close -->
<script>
window.P && P.register('bb');
if (typeof ues === 'function') {
  ues('t0', 'portal-bb', new Date());
  ues('ctb', 'portal-bb', 1);
}
</script>
</head><!-- sp:feature:start-body -->
<body class="a-m-de a-aui_149818-c a-aui_152852-c a-aui_157141-c a-aui_158613-c a-aui_160684-c a-aui_57326-c a-aui_72554-c a-aui_accessibility_49860-c a-aui_attr_validations_1_51371-c a-aui_bolt_62845-c a-aui_perf_130093-c a-aui_tnr_v2_180836-c a-aui_ux_113788-c a-aui_ux_114039-c a-aui_ux_138741-c a-aui_ux_145937-c a-aui_ux_60000-c"><div id="a-page"><script type="a-state" data-a-state="{&quot;key&quot;:&quot;a-wlab-states&quot;}">{"AUI_160684":"C","AUI_157141":"C","AUI_TNR_V2_180836":"C","AUI_UX_114039":"C","AUI_UX_113788":"C","AUI_UX_145937":"C","AUI_57326":"C","AUI_158613":"C","AUI_149818":"C","AUI_72554":"C","AUI_BOLT_62845":"C","AUI_UX_60000":"C","AUI_ATTR_VALIDATIONS_1_51371":"C","AUI_ACCESSIBILITY_49860":"C","AUI_152852":"C","AUI_PERF_130093":"C","AUI_UX_138741":"C"}</script><script>typeof uex === 'function' && uex('ld', 'portal-bb', {wb: 1})</script>
<!-- sp:feature:nav-inline-js -->
<!-- From remote config v3-->
<script type="text/javascript">
(function(d){document.createElement("header");function b(e){return[].slice.call(e)}function c(f,e){return{m:f,a:b(e)}}var a=function(f){var g={};g._sourceName=f;g._replay=[];g.getNow=function(i,h){return h};function e(i,h,j){i[j]=function(){g._replay.push(h.concat(c(j,arguments)))}}g.when=function(){var i=[c("when",arguments)];var h={};e(h,i,"run");e(h,i,"declare");e(h,i,"publish");e(h,i,"build");return h};e(g,[],"declare");e(g,[],"build");e(g,[],"publish");e(g,[],"importEvent");a._shims.push(g);return g};a._shims=[];if(!d.$Nav){d.$Nav=a("rcx-nav")}if(!d.$Nav.make){d.$Nav.make=a}}(window));
$Nav.importEvent('navbarJS-beaconbelt');
$Nav.declare('img.sprite', {
  'png8': 'https://images-eu.ssl-images-amazon.com/images/G/03/gno/sprites/global-sprite_bluebeacon-v1._CB308131311_.png',
  'png32': 'https://images-eu.ssl-images-amazon.com/images/G/03/gno/sprites/nav-sprite-global_bluebeacon-V3-1x_optimized._CB516556968_.png',
  'png32-2x': 'https://images-eu.ssl-images-amazon.com/images/G/03/gno/sprites/nav-sprite-global_bluebeacon-V3-2x_optimized._CB516556968_.png'
});
window._navbarSpriteUrl = 'https://images-eu.ssl-images-amazon.com/images/G/03/gno/sprites/nav-sprite-global_bluebeacon-V3-1x_optimized._CB516556968_.png';
$Nav.declare('img.pixel', 'https://images-eu.ssl-images-amazon.com/images/G/03/x-locale/common/transparent-pixel._CB386942701_.gif');
</script>
<img src="https://images-eu.ssl-images-amazon.com/images/G/03/gno/sprites/nav-sprite-global_bluebeacon-V3-1x_optimized._CB516556968_.png" style="display:none" alt=""/>
<!--[if IE 6]>
<style type="text/css"><!--
  #navbar.nav-sprite-v3 .nav-sprite {
    background-image: url(https://images-eu.ssl-images-amazon.com/images/G/03/gno/sprites/global-sprite_bluebeacon-v1._CB308131311_.png);
  }
--></style>
<![endif]-->
<!--  -->
<script>
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('navCF').execute(function(){
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/41hnizKJASL._RC|71SIAV5MN4L.js,61ybdwam-8L.js,41MSv8-3arL.js,113NkCQYmFL.js,01wBjiz9OvL.js,21YI5xZWAwL.js,31SFwv+1S1L.js,51+klsvwgqL.js,31Sch+N9NhL.js_.js?AUIClients/AmazonNavigationDesktopMetaAsset#desktop');
});
</script>

<!-- sp:feature:navbar -->
<!-- NAVYAAN -->







<!--Pilu -->

<!-- navmet initial definition -->


<script type='text/javascript'>
    if(window.navmet===undefined) {
      window.navmet=[];
      if (window.performance && window.performance.timing && window.ue_t0) {
        var t = window.performance.timing;
        var now = + new Date();
        window.navmet.basic = {
          'networkLatency': (t.responseStart - t.fetchStart),
          'navFirstPaint': (now - t.responseStart),
          'NavStart': (now - window.ue_t0)
        };
      }
    }
</script>




<script type='text/javascript'>window.navmet.tmp=+new Date();</script>
  <script type='text/javascript'>
    window.uet && uet('ns');
    window._navbar = (function (o) {
      o.componentLoaded = o.loading = function(){};
      o.browsepromos = {};
      o.issPromos = [];
      return o;
    }(window._navbar || {}));
    window._navbar.declareOnLoad = function () { window.$Nav && $Nav.declare('page.load'); };
    if (window.addEventListener) {
      window.addEventListener("load", window._navbar.declareOnLoad, false);
    } else if (window.attachEvent) {
      window.attachEvent("onload", window._navbar.declareOnLoad);
    } else if (window.$Nav) {
      $Nav.when('page.domReady').run("OnloadFallbackSetup", function () {
        window._navbar.declareOnLoad();
      });
    }
    window.$Nav && $Nav.declare('logEvent.enabled',
      'false');

    window.$Nav && $Nav.declare('config.lightningDeals', {"activeItems":[],"marketplaceID":"A1PA6795UKMFR9","customerID":"A96YKT37ODSSG"});
  </script>

    <style mark="aboveNavInjectionCSS" type="text/css">
      div#navSwmHoliday.nav-focus {border: none;margin: 0;}
    </style>
    <script mark="aboveNavInjectionJS" type="text/javascript">
      try {
        if(window.navmet===undefined)window.navmet=[]; window.$Nav && $Nav.when('$').run('defineIsArray', function(jQuery) { if(jQuery.isArray===undefined) { jQuery.isArray=function(param) { if(param.length===undefined) { return false; } return true; }; } }); window.$Nav && $Nav.when('$','$F','config','logEvent','panels','phoneHome','dataPanel','flyouts.renderPromo','flyouts.sloppyTrigger','flyouts.accessibility','util.mouseOut','util.onKey','debug.param').build('flyouts.buildSubPanels',function($,$F,config,logEvent,panels,phoneHome,dataPanel,renderPromo,createSloppyTrigger,a11yHandler,mouseOutUtility,onKey,debugParam){var flyoutDebug=debugParam('navFlyoutClick');return function(flyout,event){var linkKeys=[];$('.nav-item',flyout.elem()).each(function(){var $item=$(this);linkKeys.push({link:$item,panelKey:$item.attr('data-nav-panelkey')});});if(linkKeys.length===0){return;} var visible=false;var $parent=$('<div class=\\'nav-subcats\\'></div>').appendTo(flyout.elem());var panelGroup=flyout.getName()+'SubCats';var hideTimeout=null;var sloppyTrigger=createSloppyTrigger($parent);var showParent=function(){if(hideTimeout){clearTimeout(hideTimeout);hideTimeout=null;} if(visible){return;} var height=$('#nav-flyout-shopAll').height();$parent.css({'height': height});$parent.animate({width:'show'},{duration:200,complete:function(){$parent.css({overflow:'visible'});}});visible=true;};var hideParentNow=function(){$parent.stop().css({overflow:'hidden',display:'none',width:'auto',height:'auto'});panels.hideAll({group:panelGroup});visible=false;if(hideTimeout){clearTimeout(hideTimeout);hideTimeout=null;}};var hideParent=function(){if(!visible){return;} if(hideTimeout){clearTimeout(hideTimeout);hideTimeout=null;} hideTimeout=setTimeout(hideParentNow,10);};flyout.onHide(function(){sloppyTrigger.disable();hideParentNow();this.elem().hide();});var addPanel=function($link,panelKey){var panel=dataPanel({className:'nav-subcat',dataKey:panelKey,groups:[panelGroup],spinner:false,visible:false});if(!flyoutDebug){var mouseout=mouseOutUtility();mouseout.add(flyout.elem());mouseout.action(function(){panel.hide();});mouseout.enable();} var a11y=a11yHandler({link:$link,onEscape:function(){panel.hide();$link.focus();}});var logPanelInteraction=function(promoID,wlTriggers){var logNow=$F.once().on(function(){var panelEvent=$.extend({},event,{id:promoID});if(config.browsePromos&&!!config.browsePromos[promoID]){panelEvent.bp=1;} logEvent(panelEvent);phoneHome.trigger(wlTriggers);});if(panel.isVisible()&&panel.hasInteracted()){logNow();}else{panel.onInteract(logNow);}};panel.onData(function(data){renderPromo(data.promoID,panel.elem());logPanelInteraction(data.promoID,data.wlTriggers);});panel.onShow(function(){var columnCount=$('.nav-column',panel.elem()).length;panel.elem().addClass('nav-colcount-'+columnCount);showParent();var $subCatLinks=$('.nav-subcat-links > a',panel.elem());var length=$subCatLinks.length;if(length>0){var firstElementLeftPos=$subCatLinks.eq(0).offset().left;for(var i=1;i<length;i++){if(firstElementLeftPos===$subCatLinks.eq(i).offset().left){$subCatLinks.eq(i).addClass('nav_linestart');}} if($('span.nav-title.nav-item',panel.elem()).length===0){var catTitle=$.trim($link.html());catTitle=catTitle.replace(/ref=sa_menu_top/g,'ref=sa_menu');var $subPanelTitle=$('<span class=\\'nav-title nav-item\\'>'+ catTitle+'</span>');panel.elem().prepend($subPanelTitle);}} $link.addClass('nav-active');});panel.onHide(function(){$link.removeClass('nav-active');hideParent();a11y.disable();sloppyTrigger.disable();});panel.onShow(function(){a11y.elems($('a, area',panel.elem()));});sloppyTrigger.register($link,panel);if(flyoutDebug){$link.click(function(){if(panel.isVisible()){panel.hide();}else{panel.show();}});} var panelKeyHandler=onKey($link,function(){if(this.isEnter()||this.isSpace()){panel.show();}},'keydown',false);$link.focus(function(){panelKeyHandler.bind();}).blur(function(){panelKeyHandler.unbind();});panel.elem().appendTo($parent);};var hideParentAndResetTrigger=function(){hideParent();sloppyTrigger.disable();};for(var i=0;i<linkKeys.length;i++){var item=linkKeys[i];if(item.panelKey){addPanel(item.link,item.panelKey);}else{item.link.mouseover(hideParentAndResetTrigger);}}};}); window.$Nav && window.$Nav.when("$","subnav.initFlyouts","constants","nav.inline").build("subnav.builder",function(a,t,e){var n=a("#navbar");return function(s){var r=a("#nav-subnav");if(0===r.length&&(r=a("<div id='nav-subnav'></div>").appendTo("#navbar")),r.html(""),n.removeClass("nav-subnav"),s.categoryKey&&s.digest){r.attr("data-category",s.categoryKey).attr("data-digest",s.digest).attr("class",s.category.data.categoryStyle),s.style?r.attr("style",s.style):r.attr("style")&&r.removeAttr("style");var i=function(t){if(t&&t.href){var n="nav-a",s=t.text,i=t.dataKey;if(!s&&!t.image){if(!i||0!==i.indexOf(e.ADVANCED_PREFIX))return;s="",n+=" nav-aText"}var d=t.image?"<img src='"+t.image+"'class='nav-categ-image' ></a>":s,l=a("<a href='"+t.href+"' class='"+n+"'></a>"),v=a("<span class='nav-a-content'>"+d+"</span>");if("image"===t.type&&(v.html(""),l.addClass("nav-hasImage"),t.rightText=""),t.bold&&!t.image&&l.addClass("nav-b"),t.floatRight&&l.addClass("nav-right"),t.flyoutFullWidth&&"0"!==t.flyoutFullWidth&&l.attr("data-nav-flyout-full-width","1"),t.src){var g=["nav-image"];t["absolute-right"]&&g.push("nav-image-abs-right"),t["absolute-right"]&&g.push("nav-image-abs-right"),a("<img src='"+t.src+"' class='"+g.join(" ")+"' alt='"+(t.alt||"")+"' />").appendTo(v)}t.rightText&&v.append(t.rightText),v.appendTo(l),i&&(a("<span class='nav-arrow'></span>").appendTo(l),l.attr("data-nav-key",i).addClass("nav-hasArrow")),l.appendTo(r),r.append(document.createTextNode(" "))}};if(s.category&&s.category.data&&(s.category.data.bold=!0,i(s.category.data)),s.subnav&&"linkSequence"===s.subnav.type)for(var d=0;d<s.subnav.data.length;d++)i(s.subnav.data[d]);n.addClass("nav-subnav"),t()}}});
      } catch ( err ) {
        if ( window.$Nav ) {
          window.$Nav.when('metrics', 'logUeError').run(function(metrics, log) {
            metrics.increment('NavJS:AboveNavInjection:error');
            log(err.toString(), {
              'attribution': 'rcx-nav',
              'logLevel': 'FATAL'
            });
          });
        }
      }
    </script>

  <noscript>
    <style type="text/css"><!--
      #navbar #nav-shop .nav-a:hover {
        color: #ff9900;
        text-decoration: underline;
      }
      #navbar #nav-search .nav-search-facade,
      #navbar #nav-tools .nav-icon,
      #navbar #nav-shop .nav-icon,
      #navbar #nav-subnav .nav-hasArrow .nav-arrow {
        display: none;
      }
      #navbar #nav-search .nav-search-submit,
      #navbar #nav-search .nav-search-scope {
        display: block;
      }
      #nav-search .nav-search-scope {
        padding: 0 5px;
      }
      #navbar #nav-search .nav-search-dropdown {
        position: relative;
        top: 5px;
        height: 23px;
        font-size: 14px;
        opacity: 1;
        filter: alpha(opacity = 100);
      }
    --></style>
 </noscript>
<script type='text/javascript'>window.navmet.push({key:'PreNav',end:+new Date(),begin:window.navmet.tmp});</script>

<a id='nav-top'></a>







<script type='text/javascript'>window.navmet.tmp=+new Date();</script>

  <div id='nav-upnav' aria-hidden='true'  >
    <!-- unw1 failed -->
  </div>


<script type='text/javascript'>window.navmet.push({key:'UpNav',end:+new Date(),begin:window.navmet.tmp});</script>


<script type='text/javascript'>window.navmet.main=+new Date();</script>

<header class = "nav-opt-sprite nav-locale-de nav-lang-de nav-ssl nav-rec">
  <div id='navbar' cel_widget_id='Navigation-desktop-navbar' role='navigation' class='nav-sprite-v1 celwidget nav-bluebeacon nav-subnav nav-packard-glow'>
    
    
    <div id='nav-belt'>
      
      
      
      <div class='nav-left'>
        
        
        
        <script type='text/javascript'>window.navmet.tmp=+new Date();</script>
  <div id="nav-logo" class="nav-prime-1">
    <a href="/ref=nav_logo" class="nav-logo-link" aria-label="Amazon.de" tabindex="6">
      <span class="nav-sprite nav-logo-base"></span>
      <span class="nav-sprite nav-logo-ext"></span>
      <span class="nav-sprite nav-logo-locale"></span>
    </a>
  <a href="/ref=nav_logo_prime" aria-label="Prime" class="nav-sprite nav-logo-tagline" tabindex="7">
    
  </a>
  </div>
<script type='text/javascript'>window.navmet.push({key:'Logo',end:+new Date(),begin:window.navmet.tmp});</script>
      </div>
      <div class='nav-right'>
        
        
        <script type='text/javascript'>window.navmet.tmp=+new Date();</script>

  <div id='nav-swmslot'>
    <div id="navSwmHoliday" style="background-image: url(https://images-eu.ssl-images-amazon.com/images/G/03/digital/video/AIV/SWMTest/SWM_400x39_new_style_playbutton_ENG_2._CB487477782_.jpg); width: 400px; height: 39px; overflow: hidden;position: relative;"><img alt='AIV' src='https://images-eu.ssl-images-amazon.com/images/G/03/x-locale/common/transparent-pixel._CB386942701_.gif' border='0' width='400px' height='39px' usemap='#nav-swm-holiday-map' /></div><div style="display: none;"><map id="nav-swm-holiday-map" name="nav-swm-holiday-map"><area shape="rect" coords="1,2,400,39" href ="http://www.amazon.de/Prime-Video/b/ref=nav_swm_dvm_de_pv_en_t_011?_encoding=UTF8&node=3279204031&pf_rd_m=A3JWKAKR8XB7XF&pf_rd_s=nav-sitewide-msg&pf_rd_r=S7Y7MCSM8BQQZXDKY4RQ&pf_rd_r=S7Y7MCSM8BQQZXDKY4RQ&pf_rd_t=4201&pf_rd_p=b399842b-e383-4e6d-9303-3a5b2b3c7264&pf_rd_p=b399842b-e383-4e6d-9303-3a5b2b3c7264&pf_rd_i=navbar-4201" alt ="AIV" /></map></div>
  </div>
<script type='text/javascript'>window.navmet.push({key:'SWM',end:+new Date(),begin:window.navmet.tmp});</script>
        
      </div>
      <div class='nav-fill'>
        
        
        <script type='text/javascript'>window.navmet.tmp=+new Date();</script>
<div id="nav-search">
  <div id="nav-bar-left"></div>
  <form accept-charset='utf-8' action='/s/ref=nb_sb_noss' class='nav-searchbar' method='GET' name='site-search' role='search'>
    <input type="hidden" name="__mk_de_DE" value="ÅMÅŽÕÑ" />
    <div class="nav-left">
      <div class='nav-search-scope nav-sprite'>
<div class="nav-search-facade" data-value="search-alias=aps">
  <span class="nav-search-label">Amazon Geräte</span>
  <i class="nav-icon"></i>
</div>

  <span id='searchDropdownDescription' style='display:none'>Wählen Sie die Abteilung aus, in der Sie suchen möchten. </span>

<select aria-describedby='searchDropdownDescription' class='nav-search-dropdown searchSelect' data-nav-digest='g4oT5XcQjvTSIqhUq+rGqD1+PRk' data-nav-selected='3' id='searchDropdownBox' name='url' style='display:block' tabindex='8' title='Suchen in'>
<option value='search-alias=aps'>Alle Kategorien</option>
<option value='search-alias=alexa-skills'>Alexa Skills</option>
<option value='search-alias=amazonfresh'>Amazon Fresh</option>
<option selected='selected' value='search-alias=amazon-devices'>Amazon Geräte</option>
<option value='search-alias=amazon-global-store'>Amazon Global Store</option>
<option value='search-alias=pantry'>Amazon Pantry</option>
<option value='search-alias=warehouse-deals'>Amazon Warehouse Deals</option>
<option value='search-alias=mobile-apps'>Apps & Spiele</option>
<option value='search-alias=automotive'>Auto & Motorrad</option>
<option value='search-alias=baby'>Baby</option>
<option value='search-alias=diy'>Baumarkt</option>
<option value='search-alias=beauty'>Beauty</option>
<option value='search-alias=clothing'>Bekleidung</option>
<option value='search-alias=lighting'>Beleuchtung</option>
<option value='search-alias=stripbooks'>Bücher</option>
<option value='search-alias=english-books'>Bücher (Fremdsprachig)</option>
<option value='search-alias=office-products'>Bürobedarf & Schreibwaren</option>
<option value='search-alias=computers'>Computer & Zubehör</option>
<option value='search-alias=drugstore'>Drogerie & Körperpflege</option>
<option value='search-alias=dvd'>DVD & Blu-ray</option>
<option value='search-alias=appliances'>Elektro-Großgeräte</option>
<option value='search-alias=electronics'>Elektronik & Foto</option>
<option value='search-alias=fashion'>Fashion</option>
<option value='search-alias=videogames'>Games</option>
<option value='search-alias=outdoor'>Garten</option>
<option value='search-alias=gift-cards'>Geschenkgutscheine</option>
<option value='search-alias=industrial'>Gewerbe, Industrie & Wissenschaft</option>
<option value='search-alias=handmade'>Handmade</option>
<option value='search-alias=pets'>Haustier</option>
<option value='search-alias=photo'>Kamera &amp; Foto</option>
<option value='search-alias=digital-text'>Kindle-Shop</option>
<option value='search-alias=classical'>Klassik</option>
<option value='search-alias=luggage'>Koffer, Rucksäcke & Taschen </option>
<option value='search-alias=kitchen'>Küche, Haushalt & Wohnen</option>
<option value='search-alias=grocery'>Lebensmittel & Getränke</option>
<option value='search-alias=luxury-beauty'>Luxury Beauty</option>
<option value='search-alias=popular'>Musik-CDs & Vinyl</option>
<option value='search-alias=digital-music'>Musik-Downloads</option>
<option value='search-alias=mi'>Musikinstrumente & DJ-Equipment</option>
<option value='search-alias=instant-video'>Prime Video</option>
<option value='search-alias=jewelry'>Schmuck</option>
<option value='search-alias=shoes'>Schuhe & Handtaschen</option>
<option value='search-alias=software'>Software</option>
<option value='search-alias=toys'>Spielzeug</option>
<option value='search-alias=sports'>Sport & Freizeit</option>
<option value='search-alias=watches'>Uhren</option>
<option value='search-alias=magazines'>Zeitschriften</option>
</select>

</div>
    </div>
    <div class="nav-right">
      <div class="nav-search-submit nav-sprite">
        
<span id="nav-search-submit-text" class="nav-search-submit-text nav-sprite">Los</span>

        <input type="submit" class="nav-input" value="Los" tabindex="10"/>
      </div>
    </div>
    <div class="nav-fill">
      <div class="nav-search-field ">
        <!-- DO NOT REMOVE: the text in the label are for screen reader, and it is not visible in the web page -->
        <label id="nav-search-label" for="twotabsearchtextbox" class="aok-offscreen">
          Suche
        </label>
        <input type='text'
          id='twotabsearchtextbox'
          value=""
          name='field-keywords'
          autocomplete='off'
          placeholder=""
          class='nav-input'
          dir='auto'
          tabindex="9"
        >
      </div>
      <div id="nav-iss-attach"></div>
    </div>
  </form>
</div>
<script type='text/javascript'>window.navmet.push({key:'Search',end:+new Date(),begin:window.navmet.tmp});</script>
        
      </div>
    </div>
    <div id='nav-main' class='nav-sprite'>
      
      
      
      
      
      <div class='nav-left'>
        
        
        <div id='nav-global-location-slot'><span class='a-declarative' data-a-modal='{&quot;width&quot;:375,&quot;closeButton&quot;:&quot;false&quot;,&quot;popoverLabel&quot;:&quot;W&auml;hlen Sie Ihren Standort&quot;,&quot;name&quot;:&quot;glow-modal&quot;,&quot;url&quot;:&quot;/gp/glow/get-address-selections.html?selectedLocationType=ADDRESS_ID&amp;selectedLocationValue=V2RIRZZYNQ6HVXF6X4IUG13SSDO73TKY69A96YKT37ODSSGPXTQ2EQA2OXGXX65K&amp;deviceType=desktop&amp;pageType=Detail&amp;storeContext=amazon-home&quot;,&quot;footer&quot;:&quot;&lt;span class=\\&quot;a-declarative\\&quot; data-action=\\&quot;a-popover-close\\&quot; data-a-popover-close=\\&quot;{}\\&quot;&gt;&lt;span class=\\&quot;a-button a-button-primary\\&quot;&gt;&lt;span class=\\&quot;a-button-inner\\&quot;&gt;&lt;button name=\\&quot;glowDoneButton\\&quot; class=\\&quot;a-button-text\\&quot; type=\\&quot;button\\&quot;&gt;Fertig&lt;/button&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&quot;,&quot;header&quot;:&quot;W&auml;hlen Sie Ihren Standort&quot;}' data-action='a-modal'><a class='nav-a nav-a-2 a-popover-trigger a-declarative' tabindex='18'><div class='nav-sprite' id='nav-packard-glow-loc-icon'></div><div id='glow-ingress-block'><span class='nav-line-1' id='glow-ingress-line1'>Lieferung an Kim</span><span class='nav-line-2' id='glow-ingress-line2'>12159&zwnj; Berlin</span></div></a></span><input data-addnewaddress='add-new' id='unifiedLocation1ClickAddress' name='dropdown-selection' type='hidden' value='kkphpontplp'></input><input data-addnewaddress='add-new' id='ubbShipTo' name='dropdown-selection-ubb' type='hidden' value='kkphpontplp'></input></div>
        
        
        
        
        
        
        
      </div>
      <div class='nav-right'>
        <script type='text/javascript'>window.navmet.tmp=+new Date();</script>
        <div id='nav-tools'>
          
          
          
          
  <a href="/gp/customer-preferences/select-language/ref=topnav_lang?preferencesReturnUrl=%2F" id="icp-nav-flyout" class="nav-a nav-a-2 icp-link-style-2">
    <span class="icp-nav-link-inner">
      <span class="nav-line-1">
        <span class="icp-nav-globe-img-2"></span>
        <span class="icp-nav-language">DE</span>
      </span>
      <span class="nav-line-2">&nbsp;
        <span class="nav-icon nav-arrow"></span>
      </span>
    </span>
    <span class="icp-nav-link-border"></span>
  </a>

          
<a href="https://www.amazon.de/gp/css/homepage.html?ref=nav_youraccount_btn" class="nav-a nav-a-2 nav-truncate" data-nav-ref="nav_ya_signin" data-nav-role="signin" data-ux-jq-mouseenter="true" id="nav-link-yourAccount" tabindex="26">
  <span class="nav-line-1">Hallo, Kim</span>
  <span class="nav-line-2">Mein Konto<span class="nav-icon nav-arrow"></span>
  </span>
  <span class="nav-line-3">Kim</span>
  <span class="nav-line-4">Mein Konto</span>
</a>

<a href="/gp/flex/sign-out.html?path=%2Fgp%2Fyourstore%2Fhome&signIn=1&useRedirectOnSuccess=1&action=sign-out&ref=nav_signout" class="nav-hidden-aria" tabindex="27">
  Nicht Kim? Abmelden
</a>

          
          
<a href="/prime?ref=nav_prime_member_btn" class="nav-a nav-a-2" data-ux-jq-mouseenter="true" id="nav-link-prime" tabindex="29">
  <span class="nav-line-1">Mein</span>
  <span class="nav-line-2">Prime<span class="nav-icon nav-arrow"></span>
  </span>
</a>

          
<a href="/gp/registry/wishlist?ref=nav_wishlist_btn" class="nav-a nav-a-2" data-ux-jq-mouseenter="true" id="nav-link-wishlist" tabindex="30">
  <span class="nav-line-1">Meine</span>
  <span class="nav-line-2">Listen<span class="nav-icon nav-arrow"></span>
  </span>
</a>

          
  <a href="https://www.amazon.de/gp/cart/view.html?ref=nav_cart" aria-label="0 Artikel in Einkaufswagen" class="nav-a nav-a-2" id="nav-cart" tabindex="31">
    <span aria-hidden="true" class="nav-line-1">Einkaufs-</span>
    <span aria-hidden="true" class="nav-line-2">wagen<span class="nav-icon nav-arrow"></span>
    </span>
    <span class="nav-cart-icon nav-sprite"></span>
    <span id="nav-cart-count" aria-hidden="true" class="nav-cart-count nav-cart-0">0</span>
  </a>

        </div>
        <script type='text/javascript'>window.navmet.push({key:'Tools',end:+new Date(),begin:window.navmet.tmp});</script>
      </div>
      <div class='nav-fill'>
        
        
        
        
        
        
          
          
 <div id="nav-shop">
<a href="/gp/site-directory?ref=nav_shopall_btn" class="nav-a nav-a-2" data-ux-jq-mouseenter="true" id="nav-link-shopall" tabindex="19">
  <span class="nav-line-1">Alle </span>
  <span class="nav-line-2">Kategorien<span class="nav-icon nav-arrow"></span>
  </span>
</a>

 </div>
          <div id='nav-xshop-container' class=''>
            <div id='nav-xshop'>
              
              
              <script type='text/javascript'>window.navmet.tmp=+new Date();</script>
<a id="nav-your-amazon" href="/gp/yourstore/home?ref=nav_cs_ys" class="nav-a" tabindex="20"><span id="nav-your-amazon-text"><span class="nav-shortened-name">Kim</span>s Amazon</span></a>

<a href="/gp/angebote?ref=nav_cs_gb" class="nav-a" tabindex="21">Angebote</a>

<a href="/Geschenkgutscheine/b/?ie=UTF8&node=1571256031&ref=nav_cs_gc" class="nav-a" tabindex="22">Gutscheine</a>

<a href="/b/?node=2383621031&ld=AZDEGNOSellC&ref=nav_cs_sell" class="nav-a" tabindex="23">Verkaufen</a>

<a href="/gp/help/customer/display.html?nodeId=508510&ref=nav_cs_help" class="nav-a" tabindex="24">Hilfe</a>
<script type='text/javascript'>window.navmet.push({key:'CrossShop',end:+new Date(),begin:window.navmet.tmp});</script>
            </div>
            
            
            
            
          </div>
        
      </div>
    </div>

    <div id='nav-subnav-toaster'></div>

    
    
    
    <script type='text/javascript'>window.navmet.tmp=+new Date();</script>
<div id='nav-subnav' class="" data-category="amazon-home" data-digest="qR4NvCxEfnsIzx4OJzyHj06Q+HM=">
  <a href="/Amazon-Geraete-eBooks/b/?ie=UTF8&node=530883031&ref_=topnav_storetab_kinc" class="nav-a nav-b" >
    <span class="nav-a-content">
      Amazon-Geräte
      
    </span>
  </a>
  <a href="/gp/product/B06ZXQV6P8/?ie=UTF8&ref_=sv_kinc_1" class="nav-a" >
    <span class="nav-a-content">
      Echo & Alexa
      
    </span>
  </a>
  <a href="/gp/product/B079QHMFWC/?ie=UTF8&ref_=sv_kinc_2" class="nav-a" >
    <span class="nav-a-content">
      Fire TV
      
    </span>
  </a>
  <a href="/gp/product/B01J90P010/?ie=UTF8&ref_=sv_kinc_3" class="nav-a" >
    <span class="nav-a-content">
      Fire-Tablets
      
    </span>
  </a>
  <a href="/gp/product/B0186FESVC/?ie=UTF8&ref_=sv_kinc_4" class="nav-a" >
    <span class="nav-a-content">
      Kindle eReader
      
    </span>
  </a>
  <a href="/Amazon-Dash-Button/b/?ie=UTF8&node=10852572031&ref_=sv_kinc_5" class="nav-a" >
    <span class="nav-a-content">
      Dash Button
      
    </span>
  </a>
  <a href="/dp/B075RHX3WP/?_encoding=UTF8&ref_=sv_kinc_6" class="nav-a" >
    <span class="nav-a-content">
      Haussicherheit
      
    </span>
  </a>
  <a href="/Zubehoer-Amazon-Geraete-Kindle/b/?ie=UTF8&node=530884031&ref_=sv_kinc_7" class="nav-a" >
    <span class="nav-a-content">
      Zubehör
      
    </span>
  </a>
  <a href="/b/?ie=UTF8&node=3645098031&ref_=sv_kinc_8" class="nav-a" >
    <span class="nav-a-content">
      Zertifiziert und generalüberholt
      
    </span>
  </a>
  <a href="/gp/digital/fiona/manage/?ie=UTF8&ref_=sv_kinc_9" class="nav-a" >
    <span class="nav-a-content">
      Inhalte und Geräte
      
    </span>
  </a>
  <a href="/gp/help/customer/display.html/?ie=UTF8&nodeId=200127470&ref_=sv_kinc_10" class="nav-a" >
    <span class="nav-a-content">
      Hilfe für Amazon-Geräte
      
    </span>
  </a>

  <!-- nav-linktree-subnav - 'amazon-home' -->
</div>

<script type='text/javascript'>window.navmet.push({key:'Subnav',end:+new Date(),begin:window.navmet.tmp});</script>

    
    

    
    
    
  </div>

  
  

</header>
<script type='text/javascript'>window.navmet.push({key:'NavBar',end:+new Date(),begin:window.navmet.main});</script>



    <script type='text/javascript'>window.navmet.tmp=+new Date();</script><!-- nav promo cached -->


<map name="nav_imgmap_nav-sa-amazon-fresh" id="nav_imgmap_nav-sa-amazon-fresh">
<area shape="rect" coords="0,0,505,510" href="/b/ref=nav_shopall_nav_sap_fresh?_encoding=UTF8&node=6723195031&pf_rd_p=7459f62b-073b-442a-a66d-e21420f2262f&pf_rd_s=nav-sa-amazon-fresh&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=6XD7W3AETMCW0ZVSTNA0" alt="Jetzt einkaufen"/>
</map>



<map name="nav_imgmap_nav-sa-android" id="nav_imgmap_nav-sa-android">
<area shape="rect" coords="10,10,468,472" href="/gp/feature.html/ref=nav_shopall_mas_de_flyout_hollywood?ie=UTF8&docId=1000854623&pf_rd_p=24fb1d35-fab4-4f10-b1e6-a4455959cc6c&pf_rd_s=nav-sa-android&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=6XD7W3AETMCW0ZVSTNA0" alt=""/>
</map>



<map name="nav_imgmap_nav-sa-apparel-shoes-watches" id="nav_imgmap_nav-sa-apparel-shoes-watches">
<area shape="rect" coords="1,5,376,495" href="/b/ref=nav_shopall_AW18_Sale?_encoding=UTF8&node=2657021031&pf_rd_p=46499f1d-3d53-4c28-a7b2-81c74b600099&pf_rd_s=nav-sa-apparel-shoes-watches&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=6XD7W3AETMCW0ZVSTNA0" alt=""/>
</map>



<map name="nav_imgmap_nav-sa-auto-motorcycle-industrial" id="nav_imgmap_nav-sa-auto-motorcycle-industrial">
<area shape="rect" coords="1,1,487,456" href="/b/ref=nav_shopall_nav-sa-industrial?_encoding=UTF8&node=10527419031&pf_rd_p=9dc9cf39-6070-457f-bd34-f1142e0c6719&pf_rd_s=nav-sa-auto-motorcycle-industrial&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=6XD7W3AETMCW0ZVSTNA0" alt="Hier klicken"/>
</map>



<map name="nav_imgmap_nav-sa-baby-kids-toys" id="nav_imgmap_nav-sa-baby-kids-toys">
<area shape="rect" coords="0,0,460,439" href="/b/ref=nav_shopall_nav_sap_family?_encoding=UTF8&node=14335122031&pf_rd_p=75669395-bb91-4f24-bb25-66b2006100b5&pf_rd_s=nav-sa-baby-kids-toys&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=6XD7W3AETMCW0ZVSTNA0" alt="Jetzt informieren"/>
</map>



<map name="nav_imgmap_nav-sa-books" id="nav_imgmap_nav-sa-books">
<area shape="rect" coords="1,1,511,477" href="/b/ref=nav_shopall_nav_sa_books_4a0c1892-eeb3-41f5-a594-9a402e9a6774?_encoding=UTF8&node=5452736031&pf_rd_p=ab7f0d76-aff5-4403-9b2e-f6219e29eb84&pf_rd_s=nav-sa-books&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=6XD7W3AETMCW0ZVSTNA0" alt="Book Spring Store 2017"/>
</map>



<map name="nav_imgmap_nav-sa-cloud-drive" id="nav_imgmap_nav-sa-cloud-drive">
<area shape="rect" coords="1,1,442,426" href="/clouddrive/learnmore/ref=nav_shopall_CD_DE_NB_GNO_DT_EVRGRN?pf_rd_p=2a90723b-84ec-4bf9-99a3-e889bbf55a5f&pf_rd_s=nav-sa-cloud-drive&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=6XD7W3AETMCW0ZVSTNA0" alt="Cloud Drive Photos"/>
</map>



<map name="nav_imgmap_nav-sa-electronics-computers" id="nav_imgmap_nav-sa-electronics-computers">
<area shape="rect" coords="10,10,468,472" href="/s/ref=nav_shopall_nav-sa-ce_uhd?_encoding=UTF8&rh=i%3Aelectronics%2Cn%3A1197292%2Cp_n_feature_two_browse-bin%3A2711619031&pf_rd_p=1b3cce0c-950a-43be-b79d-7bf3bc3b4dc2&pf_rd_s=nav-sa-electronics-computers&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=6XD7W3AETMCW0ZVSTNA0" alt="UHD TVs"/>
</map>



<map name="nav_imgmap_nav-sa-fire-tv" id="nav_imgmap_nav-sa-fire-tv">
<area shape="rect" coords="0,0,499,474" href="/dp/B079QHMFWC/ref=nav_shopall_aftv_MN_eg?pf_rd_p=85c412a3-fc86-4326-bc0c-156de3db28d1&pf_rd_s=nav-sa-fire-tv&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=6XD7W3AETMCW0ZVSTNA0" alt="Learn More"/>
</map>



<map name="nav_imgmap_nav-sa-handmade-launchpad" id="nav_imgmap_nav-sa-handmade-launchpad">
<area shape="rect" coords="0,0,647,499" href="/b/ref=nav_shopall_lp_gno_generic_DE?_encoding=UTF8&node=9418395031&pf_rd_p=fbbf16a0-4b60-4af3-8f0f-d1d244eb16c9&pf_rd_s=nav-sa-handmade-launchpad&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=6XD7W3AETMCW0ZVSTNA0" alt="Hier klicken"/>
</map>



<map name="nav_imgmap_nav-sa-home-garden-tools" id="nav_imgmap_nav-sa-home-garden-tools">
<area shape="rect" coords="1,1,500,422" href="/b/ref=nav_shopall_nav_sap_hi_project?_encoding=UTF8&node=80084031&pf_rd_p=10983599-13d3-4ea2-9924-491575ea82f8&pf_rd_s=nav-sa-home-garden-tools&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=6XD7W3AETMCW0ZVSTNA0" alt="HI_PROJECT"/>
</map>



<map name="nav_imgmap_nav-sa-instant-video" id="nav_imgmap_nav-sa-instant-video">
<area shape="rect" coords="1,1,519,482" href="/b/ref=nav_shopall_?_encoding=UTF8&benefitId=eurosport&node=3010075031&pf_rd_p=18b6bf46-a690-4f7d-9064-ab4b5c3dff98&pf_rd_s=nav-sa-instant-video&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=6XD7W3AETMCW0ZVSTNA0" alt=""/>
</map>



<map name="nav_imgmap_nav-sa-kindle-amazon-echo" id="nav_imgmap_nav-sa-kindle-amazon-echo">
<area shape="rect" coords="0,0,499,474" href="/dp/B01J2BL01K/ref=nav_shopall_nav_flyout_aucc_rk_de?pf_rd_p=a10cbb37-617a-4342-8460-d763543156b2&pf_rd_s=nav-sa-kindle-amazon-echo&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=6XD7W3AETMCW0ZVSTNA0" alt="Mehr dazu"/>
</map>



<map name="nav_imgmap_nav-sa-kindle-fire-tablet" id="nav_imgmap_nav-sa-kindle-fire-tablet">
<area shape="rect" coords="0,0,499,474" href="/dp/B07G989P78/ref=nav_shopall_nav_flyout_Tabl_kk_eg?pf_rd_p=43d0e604-adae-4092-9b2e-edaa504ec418&pf_rd_s=nav-sa-kindle-fire-tablet&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=6XD7W3AETMCW0ZVSTNA0" alt="Mehr dazu"/>
</map>



<map name="nav_imgmap_nav-sa-kindle-reader" id="nav_imgmap_nav-sa-kindle-reader">
<area shape="rect" coords="0,0,499,474" href="/dp/B07747FR44/ref=nav_shopall_nav_flyout_Eink_Ms_MSLnc_DE?pf_rd_p=16f02924-7b6d-43da-9ffc-ce2ee55e3094&pf_rd_s=nav-sa-kindle-reader&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=6XD7W3AETMCW0ZVSTNA0" alt="Jetzt bestellen"/>
</map>



<map name="nav_imgmap_nav-sa-mp3" id="nav_imgmap_nav-sa-mp3">
<area shape="rect" coords="1,1,500,475" href="/gp/dmusic/promotions/AmazonMusicUnlimited/ref=nav_shopall_dmm_nav_fo_AM418_99_151118?pf_rd_p=4f887076-b902-4d44-a524-98b642e35417&pf_rd_s=nav-sa-mp3&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=6XD7W3AETMCW0ZVSTNA0" alt="AmazonMusicUnlimited"/>
</map>



<map name="nav_imgmap_nav-sa-music-games-film-tv" id="nav_imgmap_nav-sa-music-games-film-tv">
<area shape="rect" coords="1,1,500,471" href="/gp/dmusic/promotions/AmazonMusicUnlimited/ref=nav_shopall_dmm_nav_fo_hf_1114_v3?pf_rd_p=b3208b63-a74a-446a-a6a4-01e0b40341fb&pf_rd_s=nav-sa-music-games-film-tv&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=6XD7W3AETMCW0ZVSTNA0" alt="AmazonMusicUnlimited"/>
</map>



<map name="nav_imgmap_nav-sa-poldi" id="nav_imgmap_nav-sa-poldi">
<area shape="rect" coords="1,1,500,475" href="/gp/redirect.html/ref=nav_shopall_dmm_nav_fo_poldi1_240818?location=https://music.amazon.de/sports/competitions/BUND&token=74FFCF03D53B354FB6385B43FDA2FC97B04E829A&source=standards&pf_rd_p=7e58da98-aba0-4f5d-864e-cc3e94cb07ed&pf_rd_s=nav-sa-poldi&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=6XD7W3AETMCW0ZVSTNA0" alt="FußballLiveAmazonMusic"/>
</map>



<map name="nav_imgmap_nav-sa-sports-outdoors" id="nav_imgmap_nav-sa-sports-outdoors">
<area shape="rect" coords="1,1,503,487" href="/b/ref=nav_shopall_nav_sap_f7792a04-6e4f-4b82-9ec5-449882c0ed8d?_encoding=UTF8&node=16435051&pf_rd_p=7e2fd696-34f1-4445-bca4-39be952c3623&pf_rd_s=nav-sa-sports-outdoors&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=6XD7W3AETMCW0ZVSTNA0" alt="Sportartikel"/>
</map>



<script type="text/javascript"><!--

window.$Nav && $Nav.declare("config.navDeviceType", "desktop");

window.$Nav && $Nav.when("data").run(function(data) { data({"emptyWishlist":{"template":{"name":"flyoutError","data":{"error":{"button":{"text":"Mein Wunschzettel","url":"/gp/registry/wishlist/ref=nav_err_empty_wishlist"},"title":" ","paragraph":"Ihre Liste ist leer"}}}},"yourAccountContent":{"template":{"name":"flyoutError","data":{"error":{"button":{"text":"Mein Konto","url":"/gp/css/homepage.html/ref=nav_err_youraccount"},"title":" ","paragraph":"Leider können die Kategorien vorübergehend nicht aufgerufen werden."}}}},"errorWishlist":{"template":{"name":"flyoutError","data":{"error":{"button":{"text":"Mein Wunschzettel","url":"/gp/registry/wishlist/ref=nav_err_wishlist"},"title":" ","paragraph":"Leider können die Kategorien vorübergehend nicht aufgerufen werden."}}}},"ewcTimeout":{"template":{"name":"flyoutError","data":{"error":{"button":{"text":"Mein Einkaufswagen","url":"/gp/cart/view.html/ref=nav_err_ewc_timeout"},"title":" ","paragraph":"Es gibt ein Problem Abrufen Einkaufswagen jetzt"}}}},"cartTimeout":{"template":{"name":"flyoutError","data":{"error":{"button":{"text":"Mein Einkaufswagen","url":"/gp/cart/view.html/ref=nav_err_cart_timeout"},"title":" ","paragraph":"Es gibt ein Problem Abrufen Einkaufswagen jetzt"}}}},"kindleTimeout":{"template":{"name":"flyoutError","data":{"error":{"paragraph":"Leider können die Kategorien vorübergehend nicht aufgerufen werden."}}}},"shopAllTimeout":{"template":{"name":"flyoutError","data":{"error":{"paragraph":"Leider können die Kategorien vorübergehend nicht aufgerufen werden."}}}},"primeTimeout":{"template":{"name":"flyoutError","data":{"error":{"title":"<a href='/gp/prime'><img src='https://images-eu.ssl-images-amazon.com/images/G/03/prime/yourprime/yourprime-widget-piv-fallback._V309896279_.jpg' /></a>"}}}}}); });

  window.$Nav && $Nav.when("util.templates").run("FlyoutErrorTemplate", function (templates) {
    templates.add("flyoutError", "<# if(error.title) { #><span class='nav-title'><#=error.title #></span><# } #><# if(error.paragraph) { #><p class='nav-paragraph'><#=error.paragraph #></p><# } #><# if(error.button) { #><a href='<#=error.button.url #>' class='nav-action-button' ><span class='nav-action-inner'><#=error.button.text #></span></a><# } #>");
  });


  window.$Nav && $Nav.when("data").run(function(data) { data({}); });

window.$Nav && $Nav.declare('config.navDebugHighres', false);


window.$Nav && $Nav.declare('config.upnavHighResImgInfo',
  {"upnav2xImageHeight":"","upnav2xImagePath":""});

window.$Nav && $Nav.declare('config.upnav2xAiryPreloadImgInfo',
  {"preloadImgPath":"","preloadImgHeight":""});

window.$Nav && $Nav.declare('config.upnav2xAiryPostSlateImgInfo',
  {"postslateImgHeight":"","postslateImgPath":""});

window.$Nav && $Nav.declare('config.pageType', 'Detail');
window.$Nav && $Nav.declare('config.subPageType', '');

window.$Nav && $Nav.declare('config.dynamicMenuUrl', '/gp/navigation/ajax/dynamic-menu.html');

window.$Nav && $Nav.declare('config.dismissNotificationUrl',
  '/gp/navigation/ajax/dismissnotification.html');

window.$Nav && $Nav.declare('config.fixedSubBarBeacon',false);

window.$Nav && $Nav.declare('config.enableDynamicMenus', true);

window.$Nav && $Nav.declare('config.isInternal', false);

window.$Nav && $Nav.declare('config.isRecognized', true);

window.$Nav && $Nav.declare('config.transientFlyoutTrigger', '#nav-transient-flyout-trigger');

window.$Nav && $Nav.declare('config.subnavFlyoutUrl',
  '/gp/navigation/ajax/subnav-flyout');

window.$Nav && $Nav.declare('config.recordEvUrl',
  '/gp/navigation/ajax/recordevent.html');
window.$Nav && $Nav.declare('config.recordEvInterval', 15000);
window.$Nav && $Nav.declare('config.sessionId', '262-9898842-9713804');
window.$Nav && $Nav.declare('config.requestId', 'S7Y7MCSM8BQQZXDKY4RQ');


window.$Nav && $Nav.declare('config.alexaListEnabled', true);

window.$Nav && $Nav.declare('config.readyOnATF', false);

window.$Nav && $Nav.declare('config.dynamicMenuArgs',
  {"rid":"S7Y7MCSM8BQQZXDKY4RQ","isFullWidthPrime":0,"isPrime":1,"dynamicRequest":1,"weblabs":"","isFreshRegionAndCustomer":"","primeMenuWidth":450});

window.$Nav && $Nav.declare('config.customerName',
  "Kim");

window.$Nav && $Nav.declare('config.yourAccountPrimeURL',
  'https://www.amazon.de/gp/css/order-history/utils/first-order-for-customer.html/ref=ya_prefetch_beacon?ie=UTF8&s=262-9898842-9713804');

window.$Nav && $Nav.declare('config.yourAccountPrimeHover', true);

window.$Nav && $Nav.declare('config.searchBackState',
  {});














    if (typeof uet == 'function') {
      uet('bb', 'iss-init-pc', {wb: 1});
    }

    if (!window.$SearchJS && window.$Nav) {
      window.$SearchJS = $Nav.make('sx');
    }

  
  var opts = {
      host: "completion.amazon.co.uk/search/complete"
    , marketId: "4"
    , obfuscatedMarketId: "A1PA6795UKMFR9"
    , searchAliases: ["aps", "amazonfresh", "amazon-devices", "amazon-global-store", "stripbooks", "popular", "clothing", "dvd", "instant-video", "handmade", "handmade-jewelry", "handmade-home-and-kitchen", "prime-instant-video", "shop-instant-video", "electronics", "sports", "videogames", "toys", "jewelry", "watches", "drugstore", "baby", "software", "magazines", "vhs", "automotive", "english-books", "pantry", "photo", "computer", "kitchen", "luggage", "beauty", "outdoor", "diy", "classical", "shoes", "music-song", "mp3-downloads", "prime-digital-music", "digital-music", "digital-music-track", "digital-music-album", "digital-text", "lighting", "office-products", "outlet", "apparel-outlet", "shoes-outlet", "watches-outlet", "jewelry-outlet", "sports-outlet", "grocery", "computers", "pets", "mi", "videogames-tradein", "appliances", "gift-cards", "mobile-apps", "tradein-aps", "audiobooks", "warehouse-deals", "luxury-beauty", "banjo-apps", "industrial", "alcohol", "black-friday", "cyber-monday", "alexa-skills", "local-services", "fashion"]
    , filterAliases: []
    , pageType: "Detail"
    , requestId: "S7Y7MCSM8BQQZXDKY4RQ"
    , sessionId: "262-9898842-9713804"
    , language: "de_DE"
    , customerId: "A96YKT37ODSSG"
    , b2b: 0
    , fresh: 0
    , biaWidgetUrl: "/gp/yourstore?ie=UTF8&edit=1&p=5y9rZXXvXwEj7AeI72lCNpwAPAbR1ND91572Tbw%2F9GJOCSJnKKHxwQHrgsaFEGfIp3k6md5aWLpI00YQvNhCLw%2BghDNNaoER&ref=nb_sb_ss_bia_acct"
    , isDdInT3: 0
    , isDdInT1: 0
    , isJpOrCn: 0
    , isUseAuiIss: 1
  };

  var issOpts = {
      fallbackFlag: 1
    , isDigitalFeaturesEnabled: 0
    , isWayfindingEnabled: 0
    , dropdown: "select.searchSelect"
    , departmentText: "in {department}"
    , suggestionText: "Suchvorschläge"
    , recentSearchesTreatment: "C"
    , authorSuggestionText: "Entdecken Sie Bücher von XXAUTHXX"
    , recentSearchesText: "Letzte Suchen"
    , biaTitleText: "Nochmals kaufen"
    , biaPurchasedText: "Gekauft"
    , biaViewAllText: "Alles anzeigen"
    , biaViewAllManageText: "Alles anzeigen und verwalten"
    , biaAndText: ""
    , biaManageText: "Verwalten"
    , biaWeblabTreatment: ""
    , issNavConfig: {"weblabTreatments":{"SEARCH_ISS_174372":"C"}}
    , np: 0
    , issCorpus: []
    , cf: 1
    , useAmazonEmberFontFamily: ""
    , warmUpConnectionToCompletionSvc: "1"
    , removeDeepNodeISS: ""
    , trendingTreatment: "C"
    , useAPIV2: ""
    , opfSwitch: ""
  };

  

  if (opts.isUseAuiIss === 1 && window.$Nav) {
    window.$Nav.when('sx.iss').run('iss-mason-init', function(iss){
      var issInitObj = buildIssInitObject(opts, issOpts, true);

      new iss.IssParentCoordinator(issInitObj);

      $SearchJS.declare('canCreateAutocomplete', issInitObj);
    });
  } else if (window.$SearchJS) {
    
    var iss;

    // BEGIN Deprecated globals
    var issHost = opts.host
      , issMktid = opts.marketId
      , issSearchAliases = opts.searchAliases
      , updateISSCompletion = function() { iss.updateAutoCompletion(); };
    // END deprecated globals

    
    
    
    $SearchJS.when('jQuery', 'search-js-autocomplete-lib').run('autocomplete-init', initializeAutocomplete);
    $SearchJS.when('canCreateAutocomplete').run('createAutocomplete', createAutocomplete);

    
    if (opts.isDdInT3) {
      $SearchJS.when('search-js-autocomplete').run('autocomplete-dd-init', function(){ mergeBTFDropdown(); });
    }

    if (opts.isDdInT1) {
      $SearchJS.when('search-js-autocomplete').run('autocomplete-dd-init', function(){ searchDropdown(); });
    }

  } // END conditional for window.$SearchJS

  
  
  function initializeAutocomplete(jQuery) {
    
    var issInitObj = buildIssInitObject(opts, issOpts);
    $SearchJS.declare('canCreateAutocomplete', issInitObj);
  } // END initializeAutocomplete

  
  
  function initSearchCsl(searchCSL, issInitObject) {
    searchCSL.init(opts.pageType, (window.ue && window.ue.rid) || opts.requestId);

    $SearchJS.declare('canCreateAutocomplete', issInitObject);
  } // END initSearchCsl

  
  
  function createAutocomplete(issObject) {
    iss = new AutoComplete(issObject);

    $SearchJS.publish('search-js-autocomplete', iss);

    logMetrics();
  } // END createAutocomplete

  
  
  function buildIssInitObject(opts, issOpts, isNewIss) {
    var issInitObj = {
        src: opts.host
      , sessionId: opts.sessionId
      , requestId: opts.requestId
      , mkt: opts.marketId
      , obfMkt: opts.obfuscatedMarketId
      , pageType: opts.pageType
      , language: opts.language
      , customerId: opts.customerId
      , fresh: opts.fresh
      , b2b: opts.b2b
      , aliases: opts.searchAliases
      , fb: issOpts.fallbackFlag
      , isDigitalFeaturesEnabled: issOpts.isDigitalFeaturesEnabled
      , isWayfindingEnabled: issOpts.isWayfindingEnabled
      , issPrimeEligible: issOpts.issPrimeEligible
      , deptText: issOpts.departmentText
      , sugText: issOpts.suggestionText
      , filterAliases: opts.filterAliases
      , biaWidgetUrl: opts.biaWidgetUrl
      , recentSearchesTreatment: issOpts.recentSearchesTreatment
      , authorSuggestionText: issOpts.authorSuggestionText
      , recentSearchesText: issOpts.recentSearchesText
      , biaTitleText: issOpts.biaTitleText
      , biaPurchasedText: issOpts.biaPurchasedText
      , biaViewAllText: issOpts.biaViewAllText
      , biaViewAllManageText: issOpts.biaViewAllManageText
      , biaAndText: issOpts.biaAndText
      , biaManageText: issOpts.biaManageText
      , biaWeblabTreatment: issOpts.biaWeblabTreatment
      , issNavConfig: issOpts.issNavConfig
      , cf: issOpts.cf
      , ime: opts.isJpOrCn
      , mktid: opts.marketId
      , qs: opts.isJpOrCn
      , issCorpus: issOpts.issCorpus
      , deepNodeISS: {
          searchAliasAccessor: function($) {
            return (window.SearchPageAccess && window.SearchPageAccess.searchAlias()) ||
                   $('select.searchSelect').children().attr('data-root-alias');
          },
          searchAliasDisplayNameAccessor: function() {
            return (window.SearchPageAccess && window.SearchPageAccess.searchAliasDisplayName());
          }
        }
      , useAmazonEmberFontFamily: issOpts.useAmazonEmberFontFamily
      , warmUpConnectionToCompletionSvc: issOpts.warmUpConnectionToCompletionSvc
      , removeDeepNodeISS: issOpts.removeDeepNodeISS
      , trendingTreatment: issOpts.trendingTreatment
      , useAPIV2: issOpts.useAPIV2
      , opfSwitch: issOpts.opfSwitch
    };

    // If we aren't using the new ISS then we need to add these properties
    if (!isNewIss) {
      issInitObj.dd = issOpts.dropdown; // The element with id searchDropdownBox doesn't exist in C.
      issInitObj.imeSpacing = issOpts.imeSpacing;
      issInitObj.isNavInline = 1;
      issInitObj.triggerISSOnClick = 0;
      issInitObj.sc = 1;
      issInitObj.np = issOpts.np;
    }

    return issInitObj;
  } // END buildIssInitObject

  
  function logMetrics() {
    if (typeof uet == 'function' && typeof uex == 'function' ) {
      uet('be', 'iss-init-pc', {wb: 1});
      uex('ld', 'iss-init-pc', {wb: 1});
    }
  } // END logMetrics


    window.$Nav && $Nav.declare('nav.inline');

(function (i) {
i.onload = function() {window.uet && uet('ne')};
i.src = window._navbarSpriteUrl;
}(new Image()));

window.$Nav && $Nav.declare('config.autoFocus', false);


window.$Nav && $Nav.declare('config.responsiveTouchAgents', ["ieTouch"]);

window.$Nav && $Nav.declare('config.responsiveGW',false);

window.$Nav && $Nav.declare('config.pageHideEnabled',false);

window.$Nav && $Nav.declare('config.sslTriggerType','');
window.$Nav && $Nav.declare('config.sslTriggerRetry',0);

window.$Nav && $Nav.declare('config.doubleCart',false);


window.$Nav && $Nav.declare('config.fixedBarBeacon',false);

window.$Nav && $Nav.declare('config.signInOverride', false);

window.$Nav && $Nav.declare('config.signInTooltip',false);

window.$Nav && $Nav.declare('config.isPrimeMember',true);

window.$Nav && $Nav.declare('config.packardGlowTooltip', false);

window.$Nav && $Nav.declare('config.packardGlowFlyout', false);

window.$Nav && $Nav.declare('config.rightMarginAlignEnabled', true);

window.$Nav && $Nav.declare('config.flyoutAnimation', false);

window.$Nav && $Nav.declare('config.campusActivation', '');




    

    window.$Nav && $Nav.declare('config.primeTooltip',{url:'/gp/prime/digital-adoption/navigation-bar'});

window.$Nav && $Nav.declare('config.primeDay',false);

window.$Nav && $Nav.declare('config.disableBuyItAgain', false);



  

window.$Nav && $Nav.declare('config.pseudoPrimeFirstBrowse',false);

window.$Nav && $Nav.declare('config.sdaYourAccount',false);

window.$Nav && $Nav.declare('config.csYourAccount',false);

window.$Nav && $Nav.declare('config.cartFlyoutDisabled', true);


window.$Nav && $Nav.declare('config.navfresh', false);
window.$Nav && $Nav.declare('config.isFreshRegion', true);




if (window.ue && ue.tag) { ue.tag('navbar'); };

window.$Nav && $Nav.declare('config.blackbelt', true);
window.$Nav && $Nav.declare('config.beaconbelt', true);

window.$Nav && $Nav.declare('config.beaconbeltCover', false);

window.$Nav && $Nav.declare('config.accountList', false);

window.$Nav && $Nav.declare('config.pinnedNav',false);

window.$Nav && $Nav.declare('config.pinnedNavWithEWC',false);

window.$Nav && $Nav.declare('config.pinnedNavStart',700);

window.$Nav && $Nav.declare('config.pinnedNavMinWidth',1000);
window.$Nav && $Nav.declare('config.pinnedNavMinHeight',false);

window.$Nav && $Nav.declare('config.iPadTablet', false);


window.$Nav && $Nav.declare('config.searchapiEndpoint',false);

window.$Nav && $Nav.declare('config.timeline', false);

window.$Nav && $Nav.declare('config.timelineAsinPriceEnabled', false);

window.$Nav && $Nav.declare('config.timelineDeleteEnabled',false);


window.$Nav && $Nav.declare('config.searchTimeline', false);

window.$Nav && $Nav.declare('config.searchTopCategories', false);

    window._navbar = window._navbar || {};
    window._navbar.browsepromos = window._navbar.browsepromos || {};
    
 _navbar.browsepromos['nav-sa-amazon-fresh'] = {"width":"499","promoType":"wide","vertOffset":"-17","tabletAltText":null,"horizOffset":"-25","height":"502","altText":null,"image":"https://images-eu.ssl-images-amazon.com/images/G/03/Emma/Desktop/Flyout_524x517/DE-AmazonFresh-Flyou_flyout_r3._CB511198115_.png","tabletDestination":null,"tabletImage":null}; 
 _navbar.browsepromos['nav-sa-android'] = {"width":"519","promoType":"wide","vertOffset":"-10","tabletAltText":null,"horizOffset":"-20","height":"522","altText":null,"image":"https://images-eu.ssl-images-amazon.com/images/G/03/mas/retail/hollywood/DE_Flyout_v2._CB513608258_.png","tabletDestination":null,"tabletImage":null}; 
 _navbar.browsepromos['nav-sa-apparel-shoes-watches'] = {"width":"376","promoType":"wide","vertOffset":"-2","tabletAltText":null,"horizOffset":"0","height":"401","altText":null,"image":"https://images-eu.ssl-images-amazon.com/images/G/03/AMAZON-FASHION/2018/FASHION/PROMO/SALE/DE_FLYOUT_SALE._CB461125707_.png","tabletDestination":null,"tabletImage":null}; 
 _navbar.browsepromos['nav-sa-auto-motorcycle-industrial'] = {"width":"509","promoType":"wide","vertOffset":"-10","tabletAltText":null,"horizOffset":"-20","height":"467","altText":null,"image":"https://images-eu.ssl-images-amazon.com/images/G/03/BISS/IMAGES/FLYOUT/1050117_DE_BISS_FOR_BISS_FLYOUT_09-06-2017_flyout._CB508397715_.png","tabletDestination":null,"tabletImage":null}; 
 _navbar.browsepromos['nav-sa-baby-kids-toys'] = {"width":"540","promoType":"wide","vertOffset":"-39","tabletAltText":null,"horizOffset":"-40","height":"523","altText":null,"image":"https://images-eu.ssl-images-amazon.com/images/G/03/baby/amazonmom/520/1076711_de_family_101917_520graphics_lifestyle_flyout_540x523._CB494921615_.png","tabletDestination":null,"tabletImage":null}; 
 _navbar.browsepromos['nav-sa-books'] = {"width":"511","promoType":"wide","vertOffset":"-20","tabletAltText":null,"horizOffset":"-22","height":"519","altText":null,"image":"https://images-eu.ssl-images-amazon.com/images/G/03/books/flyout/DE_Books_childrensbooksID_1035721_flyout_v8._CB531929818_.png","tabletDestination":null,"tabletImage":null}; 
 _navbar.browsepromos['nav-sa-cloud-drive'] = {"width":"494","promoType":"wide","vertOffset":"0","tabletAltText":null,"horizOffset":"0","height":"462","altText":null,"image":"https://images-eu.ssl-images-amazon.com/images/G/03/digital/adrive/images/gno/deJanFlyout_2._CB488455631_.png","tabletDestination":null,"tabletImage":null}; 
 _navbar.browsepromos['nav-sa-electronics-computers'] = {"width":"511","promoType":"wide","vertOffset":"-21","tabletAltText":null,"horizOffset":"-22","height":"431","altText":null,"image":"https://images-eu.ssl-images-amazon.com/images/G/03/electronics/00_Flyout/DE_CE_Graphic-Adaption_8-9-2015_flyout._CB312258393_.png","tabletDestination":null,"tabletImage":null}; 
 _navbar.browsepromos['nav-sa-fire-tv'] = {"width":"540","promoType":"wide","vertOffset":"-40","tabletAltText":null,"horizOffset":"-40","height":"523","altText":null,"image":"https://images-eu.ssl-images-amazon.com/images/G/03/kindle/merch/2018/campaign/49346179/xsite/m-gno-d-de._CB482799505_.png","tabletDestination":null,"tabletImage":null}; 
 _navbar.browsepromos['nav-sa-handmade-launchpad'] = {"width":"509","promoType":"wide","vertOffset":"-10","tabletAltText":null,"horizOffset":"-20","height":"502","altText":null,"image":"https://images-eu.ssl-images-amazon.com/images/G/03/amazonlaunchpad/de/GNO/DE_Launchpad_Gateway_GNO-flyout_AUGUST17_1062161_flyout_de_r2._CB520090186_.png","tabletDestination":null,"tabletImage":null}; 
 _navbar.browsepromos['nav-sa-home-garden-tools'] = {"width":"499","promoType":"wide","vertOffset":"-20,5","tabletAltText":null,"horizOffset":"-19","height":"473","altText":null,"image":"https://images-eu.ssl-images-amazon.com/images/G/03/tools/flyout/DE_HI_24_11_14_Flyouts3._CB319219601_.png","tabletDestination":null,"tabletImage":null}; 
 _navbar.browsepromos['nav-sa-instant-video'] = {"width":"507","promoType":"wide","vertOffset":"-21","tabletAltText":null,"horizOffset":"-21","height":"510","altText":null,"image":"https://images-eu.ssl-images-amazon.com/images/G/03/digital/video/merch/subs/title/eurosport/bundesliga2018/aug12/GNO_ACEU-314-eurosport-bundesliga_507x510._CB471416882_.png","tabletDestination":null,"tabletImage":null}; 
 _navbar.browsepromos['nav-sa-kindle-amazon-echo'] = {"width":"519","promoType":"wide","vertOffset":"-5","tabletAltText":null,"horizOffset":"-23","height":"512","altText":null,"image":"https://images-eu.ssl-images-amazon.com/images/G/03/kindle/merch/2018/aucc/flyout/de-roo-2-flyout_519x512._CB460636306_.png","tabletDestination":null,"tabletImage":null}; 
 _navbar.browsepromos['nav-sa-kindle-fire-tablet'] = {"width":"540","promoType":"wide","vertOffset":"-30","tabletAltText":null,"horizOffset":"-10","height":"523","altText":null,"image":"https://images-eu.ssl-images-amazon.com/images/G/03/kindle/merch/2018/tablets/1964321/289313/289313-gno-de-d-540x523._CB484665369_.png","tabletDestination":null,"tabletImage":null}; 
 _navbar.browsepromos['nav-sa-kindle-reader'] = {"width":"538","promoType":"wide","vertOffset":"-40","tabletAltText":null,"horizOffset":"-40","height":"521","altText":null,"image":"https://images-eu.ssl-images-amazon.com/images/G/03/kindle/merch/2018/campaign/42938139/220486/xsite/m-gno-d-de._CB481602088_.png","tabletDestination":null,"tabletImage":null}; 
 _navbar.browsepromos['nav-sa-mp3'] = {"width":"519","promoType":"wide","vertOffset":"-10","tabletAltText":null,"horizOffset":"-20","height":"535","altText":"Amazon Music Unlimited","image":"https://images-eu.ssl-images-amazon.com/images/G/03/DE-digital-music/hawkfire/campaigns/Q4_2019/holiday/_GNO_Flyout._CB478476974_.png","tabletDestination":null,"tabletImage":null}; 
 _navbar.browsepromos['nav-sa-music-games-film-tv'] = {"width":"538","promoType":"wide","vertOffset":"-39,5","tabletAltText":null,"horizOffset":"-38,5","height":"509","altText":null,"image":"https://images-eu.ssl-images-amazon.com/images/G/03/DE-digital-music/hawkfire/Launch/Banner/Gateway/DE_DM_HawkfireMerchLaunch_GNO_Flyout_Selection_NEU._CB499000737_.png","tabletDestination":null,"tabletImage":null}; 
 _navbar.browsepromos['nav-sa-poldi'] = {"width":"538","promoType":"wide","vertOffset":"-40","tabletAltText":null,"horizOffset":"-39.5","height":"509","altText":"Fußball live bei Amazon Music","image":"https://images-eu.ssl-images-amazon.com/images/G/03/DE-digital-music/poldi/s2/1bl/launch/499._CB471469980_.png","tabletDestination":null,"tabletImage":null}; 
 _navbar.browsepromos['nav-sa-sports-outdoors'] = {"width":"519","promoType":"wide","vertOffset":"-10","tabletAltText":null,"horizOffset":"-20","height":"512","altText":null,"image":"https://images-eu.ssl-images-amazon.com/images/G/03/DE-hq/2018/img/Sports/XCM_Manual_1150453_Flyout_Winter_Seasonal_519x512_Sports_1150453_de_sports_flyout_winter_seasonal_de_flyout_519x512_1542724794_png._CB478629687_.png","tabletDestination":null,"tabletImage":null}; 


    window.$Nav && $Nav.declare('config.browsePromos', window._navbar.browsepromos);


window.$Nav && $Nav.declare('config.extendedFlyout', false);



window.$Nav && $Nav.declare('config.pssFlag', 0);



if (window.P && typeof window.P.declare === "function" && typeof window.P.now === "function") {
  window.P.now('packardGlowIngressJsEnabled').execute(function(glowEnabled) {
    if (!glowEnabled) {
      window.P.declare('packardGlowIngressJsEnabled', true);
    }
  });
  window.P.now('packardGlowStoreName').execute(function(storeName) {
    if (!storeName) {
      window.P.declare('packardGlowStoreName', 'amazon-home');
    }
  });
    window.P.declare('packardSpeedDesktopEnabled', true);
}


window.$Nav && $Nav.declare('configComplete');

--></script>

<script type='text/javascript'>window.navmet.push({key:'PostNav',end:+new Date(),begin:window.navmet.tmp});</script>







<a id='skippedLink'></a>

<script type='text/javascript'>window.navmet.MainEnd = new Date();</script><!-- sp:feature:host-atf -->

<div id='dp' class='amazon_home de_DE'>
         






<script type="text/javascript">

  if(typeof P !== "undefined" && typeof P.when === "function"){
    P.when('cf').execute(function() {
          P.when('navbarJS-jQuery').execute(function(){});
  P.when('finderFitsJS').execute(function(){});
  P.when('twister').execute(function(){});
  P.when('swfjs').execute(function(){});

    });
  }
</script>



<div id="turing/turing-js_div">


</div>
<div class="site-stripe-margin-control">

<div id="detail-ilm_div">









<div id="universal-detail-ilm" style="background-color: ;">
  <div class="a-section a-spacing-none uilm-section">
    <a class="a-link-normal" href="/b?node=15424335031&pf_rd_p=c5873ee6-caf3-4f0a-a39c-de58330d36a2&pf_rd_s=detail-ilm&pf_rd_t=201&pf_rd_i=B07C76F3P2&pf_rd_m=A3JWKAKR8XB7XF&pf_rd_r=S7Y7MCSM8BQQZXDKY4RQ&pf_rd_r=S7Y7MCSM8BQQZXDKY4RQ&pf_rd_p=c5873ee6-caf3-4f0a-a39c-de58330d36a2">
      <img alt="" src="https://images-eu.ssl-images-amazon.com/images/G/03/kindle/merch/accessories/2018/Promo/NewYear/holiday-acc_fam-ilm-de-650x45._CB459642740_.jpg" height="45" width="650" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/03/kindle/merch/accessories/2018/Promo/NewYear/holiday-acc_fam-ilm-de-1300x90._CB459642740_.jpg">
    </a>
  </div>
</div>
</div>


<div id="center-1_div">
</div>


<div id="center-2_div">

 





 
 

 






 

 



 
<div id="kfs-container" style="height: 138px; margin-top: 0px; margin-bottom: 0px;">
  <!--[if IE]>
  <div class="kfs-min-width-ie-fix"></div>
  <![endif]-->
  <div id="kfs-control-container">
    <div id="kfs-slide-control">



 
 
            <div class="kfs-bg-container" style="left: 0%;background-image: url('https://images-eu.ssl-images-amazon.com/images/G/03/kindle/test/kfs-background-stripe-1x138._CB321082432_.png');"> 
  


<div class="kfs-inner-container kfs-front-title-container " style="width: 210px; ">
    <table class="kfs-title kfs-front-title" style="background-image: url(https://images-eu.ssl-images-amazon.com/images/G/03/kindle/dp/2017/1951620/famnav/EA-echo-nav._CB515400404_.png); width: 100%; background-position: 15px 20px">
      <tr>
        <td class="kfs-title-text">
          <div style="margin-left: 10px; margin-right: 10px; text-align:left;">
            
          </div>
        </td>
      </tr>
    </table>


</div>






<div class="kfs-inner-container kfs-end-title-container " style="width: 280px; ">
    <table class="kfs-title kfs-end-title kfs-sliding-trigger" style="background-image: url(https://images-eu.ssl-images-amazon.com/images/G/03/kindle/dp/2018/ring/fs_show_all._CB480542787_.png); width: 100%; background-position: center left">
      <tr>
        <td class="kfs-title-text">
          <div style="margin-left: 10px; margin-right: 10px; text-align:right;">
            
          </div>
        </td>
      </tr>
    </table>


</div>

<div class="kfs-sliding-arrow-container" style="width: 280px;">
    <div class="kfs-sliding-trigger kfs-sliding-arrow" style="background-image: url(https://images-eu.ssl-images-amazon.com/images/G/03/kindle/stripe/sliding-arrow._CB391743916_.png); top: 38.5px;"></div>
</div>



    <!--[if IE]>
      <style type="text/css">
        #kfs-item-container0 {
            width: expression((this.offsetParent.clientWidth - 210 - 280) + "px");
        }
      </style>
    <![endif]-->
  
    <!--[if IE]>
      <div class="kfs-item-container" id="kfs-item-container0" style="left:210px; right: 280px;">
    <![endif]-->
    
    <!--[if !IE]> -->
        <div class="kfs-item-container" id="kfs-item-container0" style="left:210px; right: 280px;">
    <!-- <![endif]-->
  
<div id="kfs_family_17" class="kfs-family " style="min-width: 135px; width: 16.5441176470588%; " onClick="javascript:(function(){window.location='/dp/B0792HCFTG/ref=fs_dn';})()">
  <a class=" kfs-link" href=/dp/B0792HCFTG/ref=fs_dn>
        <img class="kfs-img" style="margin-top: 9px; max-height: 85px"  src="https://images-eu.ssl-images-amazon.com/images/G/03/kindle/dp/2018/22151220/famnav/fs-ed._CB483419623_.png"  />

      <span class="kfs-link-text">
        <span class="kfs-new">NEU</span> Echo Dot
      </span>
      <span class="kfs-price">
        &nbsp;<span class="kfs-price-strikethrough">EUR 59,99</span> EUR 59,98
      </span>
  </a>
     <div id="kfs_popover_content_17" class="kfs-popover-container" style="display:none;">Alexa für jeden Raum</div> 
</div>

    <div class="kfs-spacing" style="width: 0%;">&nbsp;</div>
   
 
 

<div id="kfs_family_16" class="kfs-family " style="min-width: 135px; width: 16.5441176470588%; " onClick="javascript:(function(){window.location='/dp/B06ZXQV6P8/ref=fs_rad';})()">
  <a class=" kfs-link" href=/dp/B06ZXQV6P8/ref=fs_rad>
        <img class="kfs-img" style="margin-top: 9px; max-height: 85px"  src="https://images-eu.ssl-images-amazon.com/images/G/03/kindle/dp/2018/22151220/famnav/fs-e._CB483419621_.png"  />

      <span class="kfs-link-text">
        Amazon Echo
      </span>
      <span class="kfs-price">
        &nbsp;EUR 99,99
      </span>
  </a>
     <div id="kfs_popover_content_16" class="kfs-popover-container" style="display:none;">Immer verfügbar und schnell. Einfach fragen.</div> 
</div>

    <div class="kfs-spacing" style="width: 0%;">&nbsp;</div>
   
 
 

<div id="kfs_family_3" class="kfs-family " style="min-width: 135px; width: 16.5441176470588%; " onClick="javascript:(function(){window.location='/dp/B07H2WSKVK/ref=fs_ld';})()">
  <a class=" kfs-link" href=/dp/B07H2WSKVK/ref=fs_ld>
        <img class="kfs-img" style="margin-top: 9px; max-height: 85px"  src="https://images-eu.ssl-images-amazon.com/images/G/03/kindle/dp/2018/22151220/famnav/fs-ep._CB483419621_.png"  />

      <span class="kfs-link-text">
        <span class="kfs-new">NEU</span> Echo Plus
      </span>
      <span class="kfs-price">
        &nbsp;EUR 149,99
      </span>
  </a>
     <div id="kfs_popover_content_3" class="kfs-popover-container" style="display:none;">Mit integriertem Smart Home-Hub</div> 
</div>

    <div class="kfs-divider" style="width: 0.367647058823529%; background-image: url('https://images-eu.ssl-images-amazon.com/images/G/03/kindle/dp/2013/famnav/newFS-pipe._CB336189824_.gif');">&nbsp;</div> 
   
 
 

<div id="kfs_family_19" class="kfs-family " style="min-width: 135px; width: 16.5441176470588%; " onClick="javascript:(function(){window.location='/dp/B01J2BL01K/ref=fs_roo';})()">
  <a class=" kfs-link" href=/dp/B01J2BL01K/ref=fs_roo>
        <img class="kfs-img" style="margin-top: 9px; max-height: 85px"  src="https://images-eu.ssl-images-amazon.com/images/G/03/kindle/dp/2018/22151220/famnav/fs-esr._CB483419621_.png"  />

      <span class="kfs-link-text">
        Echo Spot
      </span>
      <span class="kfs-price">
        &nbsp;EUR 129,99
      </span>
  </a>
     <div id="kfs_popover_content_19" class="kfs-popover-container" style="display:none;">Stylisches, kompaktes Echo mit Bildschirm</div> 
</div>

    <div class="kfs-spacing" style="width: 0%;">&nbsp;</div>
   
 
 

<div id="kfs_family_18" class="kfs-family " style="min-width: 135px; width: 16.5441176470588%; " onClick="javascript:(function(){window.location='/dp/B07H33PH9M/ref=fs_bs';})()">
  <a class=" kfs-link" href=/dp/B07H33PH9M/ref=fs_bs>
        <img class="kfs-img" style="margin-top: 9px; max-height: 85px"  src="https://images-eu.ssl-images-amazon.com/images/G/03/kindle/dp/2018/22151220/famnav/fs-es._CB483419621_.png"  />

      <span class="kfs-link-text">
        <span class="kfs-new">NEU</span> Echo Show
      </span>
      <span class="kfs-price">
        &nbsp;EUR 229,99
      </span>
  </a>
     <div id="kfs_popover_content_18" class="kfs-popover-container" style="display:none;">Jetzt zeigt Alexa richtig viele Dinge</div> 
</div>

    <div class="kfs-divider" style="width: 0.367647058823529%; background-image: url('https://images-eu.ssl-images-amazon.com/images/G/03/kindle/dp/2013/famnav/newFS-pipe._CB336189824_.gif');">&nbsp;</div> 
   
 
 

<div id="kfs_family_24" class="kfs-family kfs-selected" style="min-width: 135px; width: 16.5441176470588%; background-image:url(https://images-eu.ssl-images-amazon.com/images/G/03/kindle/stripe/kfs-selector-2._CB135515967_.gif);" onClick="javascript:(function(){})()">
  <a class="kfs-current kfs-link" >
        <img class="kfs-img" style="margin-top: 9px; max-height: 85px"  src="https://images-eu.ssl-images-amazon.com/images/G/03/kindle/dp/2018/22151220/famnav/fs-ei._CB483419564_.png"  />

      <span class="kfs-link-text">
        <span class="kfs-new">NEU</span> Echo Input
      </span>
      <span class="kfs-price">
        &nbsp;EUR 39,99
      </span>
  </a>
     <div id="kfs_popover_content_24" class="kfs-popover-container" style="display:none;">Bringen Sie Alexa auf Ihren Lautsprecher</div> 
</div>

    <div class="kfs-spacing" style="width: 0%;">&nbsp;</div>
   
 
 
</div> 
</div>







 
 
            <div id=kfs-overview-stripe class="kfs-bg-container" style="left: 250%;background-image: url('https://images-eu.ssl-images-amazon.com/images/G/03/kindle/test/kfs-background-stripe-1x138._CB321082432_.png');"> 
  


<div class="kfs-inner-container kfs-front-title-container " style="width: 200px; ">
    <table class="kfs-title kfs-front-title" style="background-image: url(https://images-eu.ssl-images-amazon.com/images/G/03/kindle/dp/2013/famnav/newFS-text-left-family._CB326608017_.gif); width: 100%; background-position: 15px 20px">
      <tr>
        <td class="kfs-title-text">
          <div style="margin-left: 10px; margin-right: 10px; text-align:left;">
            
          </div>
        </td>
      </tr>
    </table>


</div>




    <!--[if IE]>
      <style type="text/css">
        #kfs-item-container5 {
            width: expression((this.offsetParent.clientWidth - 200 - 1) + "px");
        }
      </style>
    <![endif]-->
  
    <!--[if IE]>
      <div class="kfs-item-container" id="kfs-item-container5" style="left:200px; right: 1px;">
    <![endif]-->
    
    <!--[if !IE]> -->
        <div class="kfs-item-container" id="kfs-item-container5" style="left:200px; right: 1px;">
    <!-- <![endif]-->
  
<div id="kfs_family_15" class="kfs-family kfs-selected" style="min-width: 135px; width: 20%; background-image:url(https://images-eu.ssl-images-amazon.com/images/G/03/kindle/stripe/kfs-selector-2._CB135515967_.gif);" onClick="javascript:(function(){window.location='/dp/B06ZXQV6P8/ref=fs_rad';})()">
  <a class="kfs-current kfs-link" >
        <div class="kfs-lazy-img" data-family-image-url="https://images-eu.ssl-images-amazon.com/images/G/03/kindle/dp/2018/22151220/famnav/22151220_de_family-stripe_155x100_v2._CB480934982_.png" data-family-image-margin-top="9px"></div>

      <span class="kfs-link-text">
          Echo & Alexa
      </span>
      <span class="kfs-price">
        
      </span>
  </a>
     <div id="kfs_popover_content_15" class="kfs-popover-container" style="display:none;">Immer verfügbar und schnell.</div> 
</div>

    <div class="kfs-spacing" style="width: 0%;">&nbsp;</div>
   
 
 

<div id="kfs_family_14" class="kfs-family " style="min-width: 135px; width: 20%; " onClick="javascript:(function(){window.location='/gp/product/B01J90P010/ref=fs_aus';})()">
  <a class=" kfs-link" href=/gp/product/B01J90P010/ref=fs_aus>
        <div class="kfs-lazy-img" data-family-image-url="https://images-eu.ssl-images-amazon.com/images/G/03/kindle/merch/2017/campaign/tekglasaus/xsite/fs-Fire7-FireHD8-Fire7KET-3P-125x85.-V510548024-._CB515335491_.png" data-family-image-margin-top="9px"></div>

      <span class="kfs-link-text">
        Fire-Tablets
      </span>
      <span class="kfs-price">
        
      </span>
  </a>
     <div id="kfs_popover_content_14" class="kfs-popover-container" style="display:none;">Die Kraftpakete unter den Tablets</div> 
</div>

    <div class="kfs-spacing" style="width: 0%;">&nbsp;</div>
   
 
 

<div id="kfs_family_12" class="kfs-family " style="min-width: 135px; width: 20%; " onClick="javascript:(function(){window.location='/dp/B01ETRIS3K/ref=fs_tan';})()">
  <a class=" kfs-link" href=/dp/B01ETRIS3K/ref=fs_tan>
        <div class="kfs-lazy-img" data-family-image-url="https://images-eu.ssl-images-amazon.com/images/G/03/kindle/dp/2017/1951620/145541/fs-cat2-smp._CB482797707_.png" data-family-image-margin-top="9px"></div>

      <span class="kfs-link-text">
        Amazon Fire TV
      </span>
      <span class="kfs-price">
        
      </span>
  </a>
     <div id="kfs_popover_content_12" class="kfs-popover-container" style="display:none;">Amazon Fire TV-Familie</div> 
</div>

    <div class="kfs-spacing" style="width: 0%;">&nbsp;</div>
   
 
 

<div id="kfs_family_13" class="kfs-family " style="min-width: 135px; width: 20%; " onClick="javascript:(function(){window.location='/gp/product/B0186FESVC/ref=fs_ean';})()">
  <a class=" kfs-link" href=/gp/product/B0186FESVC/ref=fs_ean>
        <div class="kfs-lazy-img" data-family-image-url="https://images-eu.ssl-images-amazon.com/images/G/03/kindle/dp/2013/famnav/newFS-icon-ereaders._CB481797244_.gif" data-family-image-margin-top="9px"></div>

      <span class="kfs-link-text">
        Kindle eReader
      </span>
      <span class="kfs-price">
        
      </span>
  </a>
     <div id="kfs_popover_content_13" class="kfs-popover-container" style="display:none;">Die meistverkauften eReader der Welt</div> 
</div>

    <div class="kfs-spacing" style="width: 0%;">&nbsp;</div>
   
 
 

<div id="kfs_family_20" class="kfs-family " style="min-width: 135px; width: 20%; " onClick="javascript:(function(){window.location='/dp/B0758975BR/ref=fs_rvd2';})()">
  <a class=" kfs-link" href=/dp/B0758975BR/ref=fs_rvd2>
        <div class="kfs-lazy-img" data-family-image-url="https://images-eu.ssl-images-amazon.com/images/G/03/kindle/dp/2018/ring/fs-vicc_fam._CB480932041_.png" data-family-image-margin-top="9px"></div>

      <span class="kfs-link-text">
        Haussicherheit von Amazon
      </span>
      <span class="kfs-price">
        
      </span>
  </a>
    
</div>

    <div class="kfs-spacing" style="width: 0%;">&nbsp;</div>
   
 
 
</div> 
</div>



    </div>
  </div>
</div>

<script type='text/javascript'>
    P.when('A', 'kindleFamilyStripeJS').execute(function(A) {
        var jQuery = A.$;
        
        KDS.common.FamilyStripe.setCurrentStripeIndex(0);
    });
</script>

</div>


<div id="center-3_div">
</div>


<div id="dpx-content-grid-top_div">

    




    

  



        
        
        
        
  









        






































       












<script type='text/javascript'>P.when('cf').execute(function() { ue.count('dp:widget:dpxSize:dpxBTFSize', 235);ue.count('dp:widget:dpxSize:dpxATFSize', 235);});</script>
         
        





































































































































































 
 
<div id="contentGrid_feature_div" class="feature" data-feature-name="contentGrid">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="atf-content-1_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="atfContent1_feature_div" class="feature" data-feature-name="atfContent1">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="atf-content-2_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="atfContent2_feature_div" class="feature" data-feature-name="atfContent2">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="atf-content-3_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="atfContent3_feature_div" class="feature" data-feature-name="atfContent3">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="atf-content-4_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="atfContent4_feature_div" class="feature" data-feature-name="atfContent4">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="atf-content-5_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="atfContent5_feature_div" class="feature" data-feature-name="atfContent5">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>
</div>
<script type="text/javascript"> 

(typeof setCSMReq === 'function') && setCSMReq("x1");

                if(typeof uet === 'function'){uet('bb', 'udpV3atfwait', {wb: 1});};
</script>

        <div id="dp-container" class="a-container" role="main">

            
<script type="text/javascript">
  if (typeof CSMReqs !== 'undefined') {
     if (CSMReqs.hasOwnProperty('af')) {
        CSMReqs.af.c = 1;
     }
     if (CSMReqs.hasOwnProperty('cf')) {
        CSMReqs.cf.c = 1;
     }
  }
</script>



<script type="text/javascript">    if(typeof uet === 'function'){uet('be', 'udpV3atfwait', {wb: 1});};
                if(typeof uex === 'function'){uex('ld', 'udpV3atfwait', {wb: 1});};
</script>



  





    

































       















































































































































































         
        


    
        


















 
    
    
        
            
            
        
        
      




<style type="text/css">
    #leftCol {
        width:45.0%;
    }

    .centerColAlign{
        margin-left:46.5%;
    }
</style>




    
     
     
    










    
    
     
         
         
             <div id="makoEmergencyFixAtf_feature_div" class="feature" data-feature-name="makoEmergencyFixAtf">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





    
    

    
     
     
    










    
    
     
         
         
             <div id="atfTop1_feature_div" class="feature" data-feature-name="atfTop1">
         
     




    

    
    
    
        
        
        
            
                
                    


    
    
    
    
    
    





    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
        
    
    
    
        
    
    
    
        
    

    

    <div id="" class="content-grid-row-wrapper" style="max-width: 100%;margin-top: 5px;margin-bottom: 15px;">
        <div class="a-row">
            
                
                
                
                

                
                    
                

                
                    
                     
                    
                    
                

                
                  
                  
                  
                  
                    <div class="a-column a-span12 block-content block-type-text textalign-center">
                        


    









    






<div class="content-grid-block" style="padding: 4px;background-color: #B6E1B6;"><p><strong>Dieses Produkt ist nur nach Deutschland oder Österreich lieferbar. Sie möchten in ein anderes Land liefern? Besuchen Sie <a href="https://www.amazon.de/dp/B07682HBXR">Amazon Echo</a>.</strong></p>
</div>

                    </div>
                  
                

            
        </div>
    </div>

    <script>
        P.when("ContentGridAccessibilityProcessor").execute(function (ContentGridA11yProcessor) {
            ContentGridA11yProcessor.getInstance().requestProcessMarkup();
        });
    </script>




                
                
            
        
        
        
        
        
    
    
    

    















    </div>





    
    

    
     
     
    










    
    
     
         
         
             <div id="atfTop2_feature_div" class="feature" data-feature-name="atfTop2">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





    
    

    
     
     
    










    
    
     
         
         
             <div id="instantOrderUpdate_feature_div" class="feature" data-feature-name="instantOrderUpdate">
         
     




    

    
    
    
        
            
                
	                
	                
	                	





 

	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





    
    

    
     
     
    










    
    
     
         
         
             <div id="atfTop3_feature_div" class="feature" data-feature-name="atfTop3">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





    
    

    
     
     
    










    
    
     
         
         
             <div id="atfTop4_feature_div" class="feature" data-feature-name="atfTop4">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





    
    

    
     
     
    










    
    
     
         
         
             <div id="companyCompliancePolicies_feature_div" class="feature" data-feature-name="companyCompliancePolicies">
         
     




    

    
    
    
        
            
                
	                
	                
	                	




    


	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





    
    
 

<div id="ppd">

<div id="rightCol" class="rightCol">
    
        
        
        
        










    
    
     
         
         
             <div id="atfRight1_feature_div" class="feature" data-feature-name="atfRight1">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="atfRight2_feature_div" class="feature" data-feature-name="atfRight2">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="tellAFriendBox_feature_div" class="feature" data-feature-name="tellAFriendBox">
         
     




    

    
    
    
        
            
                
	                
	                
	                	






    
        
        
        

        
            

        <div id="tell-a-friend" data-close="Schließen" data-dest data-title="Diese Artikel empfehlen" class="a-section a-text-center a-spacing-small">
            
            
            

            
                
                    
                    
                    




    <a id="swfMailTo" class="a-link-normal email" title="Per E-Mail teilen" href="mailto:?body=Ich%20m%C3%B6chte%20dieses%20Produkt%20bei%20Amazon.de%20empfehlen%0A%0AEcho%20Input%20(Schwarz)%20%E2%80%93%20Bringen%20Sie%20Alexa%20auf%20Ihren%20Lautsprecher%20%E2%80%93%20Externer%20Lautsprecher%20mit%203%2C5-mm-Audioeingang%20oder%20Bluetooth%20erforderlich%0Avon%20Amazon.de%0AErfahren%20Sie%20mehr%3A%20https%3A%2F%2Fwww.amazon.de%2Fdp%2FB07C76F3P2%2Fref%3Dcm_sw_em_r_mt_dp_U_S-8kCbSYMS8QZ&subject=Ich%20m%C3%B6chte%20dieses%20Produkt%20auf%20Amazon%20empfehlen">Teilen</a><span class="a-letter-space"></span>

<a id="swfImageMailTo" class="a-link-normal email" title="Per E-Mail teilen" href="mailto:?body=Ich%20m%C3%B6chte%20dieses%20Produkt%20bei%20Amazon.de%20empfehlen%0A%0AEcho%20Input%20(Schwarz)%20%E2%80%93%20Bringen%20Sie%20Alexa%20auf%20Ihren%20Lautsprecher%20%E2%80%93%20Externer%20Lautsprecher%20mit%203%2C5-mm-Audioeingang%20oder%20Bluetooth%20erforderlich%0Avon%20Amazon.de%0AErfahren%20Sie%20mehr%3A%20https%3A%2F%2Fwww.amazon.de%2Fdp%2FB07C76F3P2%2Fref%3Dcm_sw_em_r_mt_dp_U_S-8kCbSYMS8QZ&subject=Ich%20m%C3%B6chte%20dieses%20Produkt%20auf%20Amazon%20empfehlen"><i class="a-icon a-icon-share-email"></i></a><span class="a-letter-space"></span>

<script type="text/javascript">
P.when('A','ready').execute(function(A){
    var $ = A.$;
    function collectMetrics( placementId ) {
        A.ajax('/gp/aw/social/swf/metrics.html/ref=cm_sw_em_mt_dp_'+ placementId, {
            method: 'post',
            params: {
                id: 'mailtoDp',
                result: 'mailto share triggered'
            }
        });
    }
    $('#swfMailTo,#swfImage').click( function(){
            collectMetrics('dp_U_S-8kCbSYMS8QZ');
    });
});
</script>
                
                
            
            
            
                
                
                    
                    
                        
                        
                            
                            <a id="facebook" data-height="400" class="a-link-normal swf-social-site" target="_blank" rel="noopener" title="Facebook" href="/gp/redirect.html/ref=cm_sw_cl_fa_dp_U_S-8kCbSYMS8QZ?_encoding=UTF8&amp;location=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fshare%3F_encoding%3DUTF8%26display%3Dpopup%26href%3Dhttps%253A%252F%252Fwww.amazon.de%252Fdp%252FB07C76F3P2%252Fref%253Dcm_sw_r_fa_dp_U_S-8kCbSYMS8QZ%26redirect_uri%3Dhttps%253A%252F%252Fwww.amazon.de%252Fgp%252Fpdp%252Ftaf%252Ffb_post_redirect.html%252Fref%253Dcm_sw_s_fa_dp_U_S-8kCbSYMS8QZ%26app_id%3D164734381262%26hashtag%3D%2523Amazon&amp;token=E8BCBF9701BCAF3E3FE3E78CC9527DB7AA16C311"><i class="a-icon a-icon-share-facebook" aria-label="Facebook"><span class="a-icon-alt">Facebook</span></i></a><span class="a-letter-space"></span>
                        
                    
                
            
                
                
                    
                    
                        
                        
                            
                            <a id="twitter" data-height="400" class="a-link-normal swf-social-site" target="_blank" rel="noopener" title="Twitter" href="/gp/redirect.html/ref=cm_sw_cl_tw_dp_U_S-8kCbSYMS8QZ?_encoding=UTF8&amp;location=https%3A%2F%2Ftwitter.com%2Fintent%2Ftweet%3Foriginal_referer%3Dhttps%25253A%25252F%25252Fwww.amazon.de%25252Fgp%25252Fproduct%25252FB07C76F3P2%25252Fref%25253Dcm_sw_r_tw_dp_U_x_S-8kCbSYMS8QZ%26text%3DEcho%2520Input%2520(Schwarz)%2520%25E2%2580%2593%2520Bringen%2520Sie%2520Alexa%2520auf%2520Ihren%2520Lautsprecher%2520%25E2%2580%2593%2520Externer%2520La...%26related%3Damazondeals%252Camazonmp3%26url%3Dhttps%253A%252F%252Fwww.amazon.de%252Fdp%252FB07C76F3P2%252Fref%253Dcm_sw_r_tw_dp_U_x_S-8kCbSYMS8QZ%26via%3Damazon&amp;token=AAF0040B41E279CE255C050950FEBD7181375B83"><i class="a-icon a-icon-share-twitter" aria-label="Twitter"><span class="a-icon-alt">Twitter</span></i></a><span class="a-letter-space"></span>
                        
                    
                
            
                
                
                    
                    
                        
                        
                            
                            <a id="pinterest" data-height="570" class="a-link-normal swf-social-site" target="_blank" rel="noopener" title="Pinterest" href="/gp/redirect.html/ref=cm_sw_cl_pi_dp_U_S-8kCbSYMS8QZ?_encoding=UTF8&amp;location=https%3A%2F%2Fpinterest.com%2Fpin%2Fcreate%2Fbutton%3Furl%3Dhttps%253A%252F%252Fwww.amazon.de%252Fdp%252FB07C76F3P2%252Fref%253Dcm_sw_r_pi_dp_U_x_S-8kCbSYMS8QZ%26title%3DEcho%2520Input%2520(Schwarz)%2520%25E2%2580%2593%2520Bringen%2520Sie%2520Alexa%2520auf%2520Ihren%2520Lautsp...%26description%3DEcho%2520Input%2520(Schwarz)%2520%25E2%2580%2593%2520Bringen%2520Sie%2520Alexa%2520auf%2520Ihren%2520Lautsp...%2520https%253A%252F%252Fwww.amazon.de%252Fdp%252FB07C76F3P2%252Fref%253Dcm_sw_r_pi_dp_U_x_S-8kCbSYMS8QZ%26media%3Dhttps%253A%252F%252Fimages-na.ssl-images-amazon.com%252Fimages%252FI%252F31Alxl7qcaL.jpg&amp;token=6E588CEFB9E047071F179B776CEA7034D70648CB"><i class="a-icon a-icon-share-pinterest" aria-label="Pinterest"><span class="a-icon-alt">Pinterest</span></i></a><span class="a-letter-space"></span>
                        
                    
                
            

            

        </div>

        <script type="text/javascript">
            P.when("A","jQuery").execute(function(A,$) {
                var taf = $("#tell-a-friend");
                taf.children("[data-height]").click(function() {
                    var height = $(this).attr("data-height");
                    window.open(this.href, "_blank", "location=yes,width=700,height=" + height);
                    return false;
                });
                A.on.load(function () {
                    var hashValue = window.location.hash;
                    var hashIndex;
                    var swfHashValue = "_swftext_Swf";
                    hashIndex = hashValue.indexOf(swfHashValue);
                    if (hashValue != "" &&  hashIndex > -1 && typeof(window.swfPopUpShown) === 'undefined') {
                        $("#swfText").click();
                        window.swfPopUpShown = 1;
                    }
                });
            });
        </script>

        <style type="text/css">
            #tell-a-friend .swf-social-site {
                outline: none;
            }
        </style>

        
    
    


	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        







        
        
    
        
        
        
        







        
        
    
        
        
        
        







        
        
    
        
        
        
        







        
        
    
        
        
        
        







        
        
    
        
        
        
        










    
    
     
         
         
             <div id="REGULARBUYBOX" class="feature" data-feature-name="REGULARBUYBOX">
         
     




    

    
    
    
        
        
        
        
    	    
                


<div id="buybox_feature_div" class="a-section">
    























    
    
    
        
    


































<div id="buybox" data-isPartialSizeWeblab="false" class="a-section a-spacing-medium">
    
    
     

    
    

    
    

    
     

    
    

    
    

    

    
    

    
    

    

    
    

    
    
    
    

      <form method="post" id="addToCart" action="/gp/product/handle-buy-box/ref=dp_start-bbf_1_glance" class="a-content"> 
        <input type="hidden" id="session-id" name="session-id" value="262-9898842-9713804"> 
        <input type="hidden" id="ASIN" name="ASIN" value="B07C76F3P2"> 
        <input type="hidden" id="offerListingID" name="offerListingID" value="F7Yku4lzQIkKHRj3Tu0Srgs3Y3ca2m0s9s%2F%2BsHdPXa4%2FpfQF%2FrnZi44ATMJZYpysRzrFQAOzAd%2B%2BFY1TZbJHSVgzhFWJo8C5PFX9BGLHXWU%3D"> 
        <input type="hidden" id="isMerchantExclusive" name="isMerchantExclusive" value="0"> 
        <input type="hidden" id="merchantID" name="merchantID" value="A3JWKAKR8XB7XF"> 
        <input type="hidden" id="isAddon" name="isAddon" value="0">
        <input type="hidden" id="nodeID" name="nodeID" value="">
        <input type="hidden" id="sellingCustomerID" name="sellingCustomerID" value="A3JWKAKR8XB7XF">
        <input type="hidden" id="qid" name="qid" value="">
        <input type="hidden" id="sr" name="sr" value="">
        <input type="hidden" id="storeID" name="storeID" value="amazon-home">
        <input type="hidden" id="tagActionCode" name="tagActionCode" value="">
        <input type="hidden" id="viewID" name="viewID" value="glance">
        <input type="hidden" id="rebateId" name="rebateId" value="">
        




        
        
            
            






        

        
        

        
        

        
        <input type="hidden" id="rsid" name="rsid" value="262-9898842-9713804">
        <input type="hidden" id="sourceCustomerOrgListID" name="sourceCustomerOrgListID" value="">
        <input type="hidden" id="sourceCustomerOrgListItemID" name="sourceCustomerOrgListItemID" value="">
        <input type="hidden" name="wlPopCommand" value="">
        
        

        
        
        

        
        

        
            
            
            
            

            
            

                
            

            
            

            
            

            
            

            
            

            
            

            
            
                

                    
                    

                    

                    

                    
                    

                    
                    

                    
                    
                        
                        
                            
                            
                                    <div class="a-box"><div class="a-box-inner a-padding-base">
                                        










 














    


<div class="a-section a-spacing-none a-padding-none">

    
        



    

    

    
    
    
    








    
    
        
        




    
    
    
    
         

    
    
    
    
        





    

    
    

    
    
        
            





        
    

    
    

    
    



	

    
    




    

    
        
        








        
        

















<div class="a-row a-spacing-mini">
    <div class="a-column a-span12 a-text-left a-spacing-small">
        






    
    
    
    
    
    
    
    





        
    <div id="selectQuantity" class="a-section a-spacing-none a-padding-none">
        <span class="a-declarative" data-action="quantity-dropdown" data-quantity-dropdown="{}">
            <div class="a-row a-spacing-base">
                
                
                <div class="a-column a-span12 a-text-left">
                    <span class="a-dropdown-container"><label for="quantity" class="a-native-dropdown">Menge:</label><select name="quantity" autocomplete="off" id="quantity" tabIndex="-1" class="a-native-dropdown">
                        
                            
                                
                                
                                    <option value="1" selected>1
                                    </option>
                                
                            
                        
                            
                                
                                
                                    <option value="2">2
                                    </option>
                                
                            
                        
                            
                                
                                
                                    <option value="3">3
                                    </option>
                                
                            
                        
                            
                                
                                
                                    <option value="4">4
                                    </option>
                                
                            
                        
                            
                                
                                
                                    <option value="5">5
                                    </option>
                                
                            
                        
                            
                                
                                
                                    <option value="6">6
                                    </option>
                                
                            
                        
                        
                            
                            
                                
                            
                        
                    </select><span tabIndex="-1" class="a-button a-button-dropdown a-button-small"><span class="a-button-inner"><span class="a-button-text a-declarative" data-action="a-dropdown-button" role="button" tabIndex="0" aria-hidden="true"><span class="a-dropdown-label">Menge:</span><span class="a-dropdown-prompt">1</span></span><i class="a-icon a-icon-dropdown"></i></span></span></span>
                </div>
            </div>
            
        </span>
    </div>
    
    
    


    </div>
</div>




    

    
    




    
        
        
        
            
            
        
    

    
    















    
    
    










      
      
      
          <div class="a-button-stack">
              
              <span id="submit.add-to-cart" class="a-button a-spacing-small a-button-primary a-button-icon"><span class="a-button-inner"><i class="a-icon a-icon-cart"></i><input id="add-to-cart-button" name="submit.add-to-cart" title="In den Einkaufswagen" data-hover="Wählen Sie &lt;b&gt;__dims__&lt;/b&gt; auf der linken Seite&lt;br&gt; zum Hinzufügen zum Einkaufswagen" class="a-button-input" type="submit" value="In den Einkaufswagen" aria-labelledby="submit.add-to-cart-announce"><span id="submit.add-to-cart-announce" class="a-button-text" aria-hidden="true">In den Einkaufswagen</span></span></span>
          </div>
      






     
    
    

    
    








    
    






    
    
        








<div id="OneClickBox" class="a-button-stack">
    
        
        

        
        
            <div id="oneClickSignIn" class="a-section a-spacing-base a-text-center">
                






    <hr class="a-divider-normal">
    
        
        
            
                
                
                    
                
            

            <a class='oneClickSignInLink' href='/gp/product/utility/edit-one-click-pref.html/ref=dp_oc_signin?ie=UTF8&amp;query=&amp;returnPath=%2Fgp%2Fproduct%2FB07C76F3P2'>
                <span class="a-size-mini">1-Click-Bestellungen aktivieren</span>
            </a>
        
    


                
                    
                    
                
            </div>
        

        
        
    
</div>

    

    
        



<style>
    #gifting-option-container .a-icon{
        display: none;
    }
</style>






    
    
        
            <div id="gifting-option-container" class="a-section a-spacing-mini inline-popup-link">
                <hr class="a-divider-normal">
                <div data-a-input-name="gift-wrap" class="a-checkbox"><label for="gift-wrap"><input id="gift-wrap" type="checkbox" name="gift-wrap" value="yes"><i class="a-icon a-icon-checkbox"></i><span class="a-label a-checkbox-label">
                    Das ist ein Geschenk.
                </span></label></div>
                
                    <span class="a-declarative" data-action="gifting-popup-window" data-gifting-popup-window="{&quot;windowName&quot;:&quot;GiftingOption&quot;,&quot;windowOptions&quot;:&quot;width=800,height=600,scrollbars=yes&quot;}">
                        <span class="a-declarative" data-action="a-popover" data-a-popover="{&quot;name&quot;:&quot;giftingOptionPopoverContent&quot;,&quot;position&quot;:&quot;triggerBottom&quot;}">
                            <a href="javascript:void(0)" class="a-popover-trigger a-declarative">
                                <a class="a-link-normal gifting-option-popup-link" target="_blank" rel="noopener" href="/gp/help/customer/display.html?nodeId=201964260&pop-up=1">
                                    Warum ist das wichtig?
                                </a>
                            <i class="a-icon a-icon-popover"></i></a>
                        </span>
                        <div class="a-popover-preload" id="a-popover-giftingOptionPopoverContent">
                          <p>
                              Die Geräte sind auf Ihr Konto registriert.
                          </p>
                          <p>
                              Wenn Sie dieses Gerät als Geschenk kaufen, klicken Sie dieses Kästchen, damit das Gerät unregistriert versendet wird. Sie können auch eine kostenlose Geschenknachricht hinzufügen. 
                          </p>
                          <a class="a-link-normal gifting-option-popover-content-link" target="_blank" rel="noopener" href="https://www.amazon.de/gp/help/customer/display.html?nodeId=201964260&pop-up=1">
                              Mehr Informationen zu Geschenken
                          </a>
                        </div>
                    </span>
                
            </div>
        
    


    
    
    
    
        
            











 
    
    
    


        
    

    
    






    
    
        
            
            
                <hr class="a-divider-normal">
                






    <span class="a-declarative" data-action="dpContextualIngressPt" data-dpContextualIngressPt="{}">
        <a class="a-link-normal" href="#">
            <div class="a-row a-spacing-mini">
                <div class="a-column a-span12 a-text-left">
                    <div id="contextualIngressPt">
                        <div id="contextualIngressPtPin"></div>
                        <span id="contextualIngressPtLabel" class="a-size-small">
                            <div id="contextualIngressPtLabel_deliveryShortLine"><span>Liefern an Kim -&nbsp;</span><span>12159&zwnj; Berlin</span></div>
                        </span>
                    </div>
                </div>
            </div>
        </a>
    </span>


            
        
    



    
    

</div>

                                        
                                        
                                            































    












    









    <hr class="a-spacing-base a-divider-normal">














    
        
    




    
    

    
    <script type="a-state" data-a-state="{&quot;key&quot;:&quot;createInfo&quot;}">{"isHorizonte":true}</script>

    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    <script type="a-state" data-a-state="{&quot;key&quot;:&quot;wishlistDPState&quot;}">{"createHeader":"Liste anlegen","addHeader":"Auf die Liste","addWidth":"900","vendorId":"website.wishlist.detail.add","createHeight":"auto","streaming":"1","isFirstCreate":false,"createWidth":"650","addUrl":"/gp/registry/huc/add-item-ajax.html?ie=UTF8","addHeight":"700","action":"add","createUrl":"/hz/wishlist/create?ie=UTF8&isPopover=1&isCreateAndAdd=1","firstcreateHeader":"Zu Ihrer Liste hinzufügen"}</script>
    
    <div class="a-popover-preload" id="a-popover-reg-create">
        <div id="popover-spinner" class="a-section">
            <div class="a-section a-padding-large a-popover-loading"></div>
        </div>
        <div id="WLHUC_result" class="a-section a-hidden wlAddCreatePop"></div>
        <div id="WLNEW_main" class="a-section a-hidden wlAddCreatePop"></div>
    </div>
    <div class="a-popover-preload" id="a-popover-firstAddCreateToWishlist">
        <div id="popover-spinner" class="a-section">
            <div class="a-section a-padding-large a-popover-loading"></div>
        </div>
        <div id="WLHUC_result" class="a-section a-hidden wlAddCreatePop"></div>
        <div id="WLNEW_main" class="a-section a-hidden wlAddCreatePop"></div>
    </div>



  <div id="wishlistButtonStack" class="a-button-stack">
      
      
      
      
      
      
      
      

      
      
      
      <div id="add-to-wishlist-button-group" data-hover="&lt;!-- If PartialItemStateWeblab is true then, showing different Add-to-wish-list tool-tip message which is consistent with Add-to-Cart tool tip message.  --&gt;
    
        
        
            Auf die Liste? Bitte wählen Sie aus dem Sortiment links." class="a-button-group a-declarative a-spacing-none" data-action="a-button-group" role="radiogroup">
              <span id="wishListMainButton" class="a-button a-button-group-first a-spacing-none" role="radio" aria-labelledby="wishListMainButton-announce"><span class="a-button-inner"><input id="add-to-wishlist-button-submit" name="submit.add-to-registry.wishlist" title="Auf die Liste" data-action="atwl-splitbutton-main" data-hover="&lt;!-- If PartialItemStateWeblab is true then, showing different Add-to-wish-list tool-tip message which is consistent with Add-to-Cart tool tip message.  --&gt;
    
        
        
            Auf die Liste? Bitte wählen Sie aus dem Sortiment links." class="a-button-input a-declarative" type="submit" aria-labelledby="wishListMainButton-announce"><span id="wishListMainButton-announce" class="a-button-text a-text-left" aria-hidden="true">
                  Auf die Liste
                  
                      <span class="a-declarative" data-action="a-modal" data-a-modal="{&quot;padding&quot;:&quot;none&quot;,&quot;cache&quot;:&quot;false&quot;,&quot;name&quot;:&quot;reg-create&quot;,&quot;width&quot;:&quot;900&quot;,&quot;header&quot;:&quot;Auf die Liste&quot;}" id="add-wishlist-declarative"></span>
                  
              </span></span></span>
              
                  
                  
                  
                  <span id="wishListDropDown" class="a-button a-button-dropdown a-button-group-last a-spacing-none wishlist-dropdown-button" role="radio" aria-labelledby="wishListDropDown-announce"><span class="a-button-inner"><i class="a-icon a-icon-dropdown"></i><input id="add-to-wishlist-button" name="submit.add-to-registry.wishlist" data-action="atwl-splitbutton-arrow" data-type="wishlist" data-ux-click="" class="a-button-input a-declarative" type="submit" aria-labelledby="wishListDropDown-announce"><span id="wishListDropDown-announce" class="a-button-text a-text-left" aria-hidden="true">
                  </span></span></span>
                  
              
      </div>
      
      
       
      <div id="atwl-inline-spinner" class="a-section a-hidden">
        <div class="a-spinner-wrapper"><span class="a-spinner a-spinner-medium"></span></div>
      </div>
        
      
      <div id="atwl-inline" class="a-section a-spacing-none a-hidden">
        <div class="a-row a-text-ellipsis">
            <div id="atwl-inline-sucess-msg" class="a-box a-alert-inline a-alert-inline-success"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">
              <span class="a-size-base" role="alert">
                Hinzugefügt zu
              </span>
            </div></div></div>
            <a id="atwl-inline-link" class="a-link-normal" href="/gp/registry/wishlist/">
                <span id="atwl-inline-link-text" class="a-size-base" role="alert">
                </span>
            </a>
        </div>
      </div>

      
      <div id="atwl-inline-error" class="a-section a-hidden">
        <div class="a-box a-alert-inline a-alert-inline-error" aria-live="assertive" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">
          <span id="atwl-inline-error-msg" class="a-size-base" role="alert">
            Hinzufügen war nicht erfolgreich. Bitte versuchen Sie es erneut.
          </span>
        </div></div></div>
      </div>

      <div id="atwl-dd-spinner-holder" class="a-section a-hidden">
          <div class="a-row a-dropdown">
              <div class="a-section a-popover-wrapper">
                  <div class="a-section a-text-center a-popover-inner">
                      <div class="a-box a-popover-loading"><div class="a-box-inner">
                      </div></div>
                  </div>
              </div>
          </div>
      </div>
      <div id="atwl-dd-error-holder" class="a-section a-hidden">
          <div class="a-section a-dropdown">
              <div class="a-section a-popover-wrapper">
                  <div class="a-section a-spacing-base a-padding-base a-text-left a-popover-inner">
                      <h3 class="a-color-error">
                          
                      </h3>
                      <span>
                          
                      </span>
                  </div>
              </div>
          </div>
      </div>
      <div id="atwl-dd-unavail-holder" class="a-section a-hidden">
          <div class="a-section a-dropdown">
              <div class="a-section a-popover-wrapper">
                  <div class="a-section a-spacing-base a-padding-base a-text-left a-popover-inner">
                      <h3 class="a-color-error">
                          
                      </h3>
                      <span>
                          
                      </span>
                  </div>
              </div>
          </div>
      </div>
      <script type="a-state" data-a-state="{&quot;key&quot;:&quot;atwl&quot;}">{"showInlineLink":false,"hzPopover":true,"wishlistButtonId":"add-to-wishlist-button","dropDownHtml":"","inlineJsFix":false,"wishlistButtonSubmitId":"add-to-wishlist-button-submit","maxAjaxFailureCount":"3","asin":"B07C76F3P2"}</script>
      


















<script type="a-state" data-a-state="{&quot;key&quot;:&quot;atbrState&quot;}">{"showBabyRegSuccessModal":false,"addSuccessModalHeader":"Zu Ihrer Baby-Wunschliste hinzugefügt","vendorId":"website.huc.shoveler","sessionId":"262-9898842-9713804","hasBabyReg":false}</script>
<input type="hidden" name="" value="true" id="is-fully-selected-baby-reg">




  </div>












<script type="a-state" data-a-state="{&quot;key&quot;:&quot;popoverState&quot;}">{"formId":"addToCart","showWishListDropDown":true,"babyRegistryId":"add-to-registry-baby-button","showBabyRegDropdown":false,"wishlistPopoverWidth":206,"isAddToWishListDropDownAuiEnabled":true,"showPopover":true}</script>


<script type="text/javascript">(function(f) {f(window.P._namespace("list-CF-register-js"));}(function(P) {
    "use strict";

    window.P.now('atwl-cf').execute(function (module) {
        var isRegistered = (typeof module !== 'undefined');
        if (!isRegistered) {
            window.P.register('atwl-cf');
        }
    });
}));</script>

                                        
                                        
                                            














    
    
    
    

    
    

    
    

    
    
    
    
    
    
    
    
    <div id="digital-dash-create" class="a-section a-spacing-none">

        
        <div id="digital-dash-create-success-changeover" class="a-changeover" style="display: none"><div class="a-changeover-inner"><i class="a-icon a-icon-checkmark-inverse"></i><strong class="a-size-medium">Hinzugefügt.</strong></div></div>

        <div id="digital-dash-create-error-message" class="a-box a-alert a-alert-error aok-hidden" aria-live="assertive" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">
            Fehler beim Erstellen des Dash Buttons. Bitte versuchen Sie es später erneut.
        </div></div></div>

        
            
            
                
                







    
        



<div class="a-section a-spacing-none a-spacing-top-base a-text-center">
    
        
        
            <a id="digital-dash-create-success-message" class="a-size-small a-link-normal" href="/ddb/your-dash-buttons/ref=snk_ddb_ydb_dp_cw_lprm_ncdb">
                Dash Buttons anzeigen
            </a>
            <span class="a-declarative" data-action="digital-dash-create" data-digital-dash-create="{&quot;data&quot;:{&quot;asin&quot;:&quot;B07C76F3P2&quot;,&quot;source&quot;:&quot;dp&quot;,&quot;currencyCode&quot;:&quot;EUR&quot;,&quot;basePrice&quot;:&quot;39.99&quot;,&quot;token&quot;:&quot;gFHq9G4UoRQ3EC4QhiyDDcxN1b11vShGfowGIgoAAAAJAAAAAFwrz6xyYXcAAAAA&quot;},&quot;el&quot;:&quot;#digital-dash-create&quot;,&quot;href&quot;:&quot;/ddb/createButton?ref_=snk_ddb_cdbajx_dp_cw_lprm&quot;}">
                <a class="a-size-small a-link-normal digital-dash-create-button" href="#">
                    Zu Dash Buttons hinzufügen
                </a>
            </span>
        
    
</div>

    
    


            
        
    </div>


                                        
                                    </div></div>
                            
                        
                    
                
                
            
        
    </form>
    
    
</div>

</div>
    	    
        
        
        
        
    
    
    
        
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="buyBoxUpsell_feature_div" class="feature" data-feature-name="buyBoxUpsell">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="accessoryUpsell_feature_div" class="feature" data-feature-name="accessoryUpsell">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="tradeInButton_feature_div" class="feature" data-feature-name="tradeInButton">
         
     




    

    
    
    
        
            
                
	                
	                
	                	





	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="atfRight3_feature_div" class="feature" data-feature-name="atfRight3">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="atfRight4_feature_div" class="feature" data-feature-name="atfRight4">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="moreBuyingChoices_feature_div" class="feature" data-feature-name="moreBuyingChoices">
         
     




    

    
    
    
        
            
                
	                
	                
	                	




    































































    
    
    

<script type="text/javascript">
P.when('A','jQuery').execute(function(A,$)  {
    function toggleExpanderHeaderTextWeight(data) {
       $("[data-a-expander-name="+data.expander.expanderName+"] .a-mbc-expander-heading-text").toggleClass("a-mbc-expander-heading-text-bold");
    }

    var offerCount = 0;
    for(var i=1; i <= offerCount; i++){
        $(".mbcLi"+i).bind("click", function(){
            this.click();
        });
        $(".mbcLi"+i+" .a-button a").bind("click", function(){
            window.open(this.href,"_self");
        });
        A.on('a:expander:mbc_expander_'+i+':toggle:expand', toggleExpanderHeaderTextWeight);
        A.on('a:expander:mbc_expander_'+i+':toggle:collapse', toggleExpanderHeaderTextWeight);
    }

    if ($("#mbc-panel").length == 0) {
        $("#mbc-action-panel-wrapper").show();
    }
});
</script>


	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        







        
        
    
        
        
        
        










    
    
     
         
         
             <div id="product-ads-feedback_feature_div" class="feature" data-feature-name="productAdsFeedback">
         
     




    

    
    
    
        
            
                
	                
	                
	                	






	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        







        
        
    
        
        
        
        







        
        
    
        
        
        
        







        
        
    
        
        
        
        










    
    
     
         
         
             <div id="atfRight5_feature_div" class="feature" data-feature-name="atfRight5">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="atfRight6_feature_div" class="feature" data-feature-name="atfRight6">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
</div>
         
<div id="leftCol" class="leftCol">
    
        
        
        
        










    
    
     
         
         
             <div id="atfLeft1_feature_div" class="feature" data-feature-name="atfLeft1">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="atfLeft2_feature_div" class="feature" data-feature-name="atfLeft2">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="imageBlock_feature_div" class="feature" data-feature-name="imageBlock">
         
     




    

    
    
    
        
            
                
	                
	                
	                	





    
      





<div id="imageBlock" aria-hidden="true" class="a-section imageBlockRearch">
    <div class="a-fixed-left-grid"><div class="a-fixed-left-grid-inner" style="padding-left:58px">
        
            <div id="altImages" class="a-fixed-left-grid-col a-col-left" style="width:58px;margin-left:-58px;float:left;">
            















<ul class="a-unordered-list a-nostyle a-button-list a-vertical a-spacing-top-micro">

    
    

   
    
    
        
            
            
            












<li class="a-spacing-small item"><span class="a-list-item">
    <span class="a-declarative" data-action="thumb-action" data-thumb-action="{&quot;thumbnailIndex&quot;:&quot;0&quot;,&quot;variant&quot;:&quot;LEFT&quot;,&quot;index&quot;:&quot;0&quot;,&quot;type&quot;:&quot;image&quot;}">
        <span class="a-button a-button-selected a-button-thumbnail a-button-toggle a-button-focus"><span class="a-button-inner"><input class="a-button-input" type="submit"><span class="a-button-text" aria-hidden="true">
            <img alt="" src="https://images-na.ssl-images-amazon.com/images/I/516V8PF6PcL._SS40_.jpg">
        </span></span></span>
    </span>
</span></li>

                    
        
    
        
            
            
            












<li class="a-spacing-small item"><span class="a-list-item">
    <span class="a-declarative" data-action="thumb-action" data-thumb-action="{&quot;thumbnailIndex&quot;:&quot;1&quot;,&quot;variant&quot;:&quot;MAIN&quot;,&quot;index&quot;:&quot;1&quot;,&quot;type&quot;:&quot;image&quot;}">
        <span class="a-button a-button-thumbnail a-button-toggle"><span class="a-button-inner"><input class="a-button-input" type="submit"><span class="a-button-text" aria-hidden="true">
            <img alt="" src="https://images-na.ssl-images-amazon.com/images/I/31Alxl7qcaL._SS40_.jpg">
        </span></span></span>
    </span>
</span></li>

                    
        
    
        
            
            
            












<li class="a-spacing-small item"><span class="a-list-item">
    <span class="a-declarative" data-action="thumb-action" data-thumb-action="{&quot;thumbnailIndex&quot;:&quot;2&quot;,&quot;variant&quot;:&quot;PT01&quot;,&quot;index&quot;:&quot;2&quot;,&quot;type&quot;:&quot;image&quot;}">
        <span class="a-button a-button-thumbnail a-button-toggle"><span class="a-button-inner"><input class="a-button-input" type="submit"><span class="a-button-text" aria-hidden="true">
            <img alt="" src="https://images-na.ssl-images-amazon.com/images/I/51DROC84mWL._SS40_.jpg">
        </span></span></span>
    </span>
</span></li>

                    
        
    
        
            
            
            












<li class="a-spacing-small item"><span class="a-list-item">
    <span class="a-declarative" data-action="thumb-action" data-thumb-action="{&quot;thumbnailIndex&quot;:&quot;3&quot;,&quot;variant&quot;:&quot;PT02&quot;,&quot;index&quot;:&quot;3&quot;,&quot;type&quot;:&quot;image&quot;}">
        <span class="a-button a-button-thumbnail a-button-toggle"><span class="a-button-inner"><input class="a-button-input" type="submit"><span class="a-button-text" aria-hidden="true">
            <img alt="" src="https://images-na.ssl-images-amazon.com/images/I/51jlZH%2BcflL._SS40_.jpg">
        </span></span></span>
    </span>
</span></li>

                    
        
    
        
            
            
            












<li class="a-spacing-small item"><span class="a-list-item">
    <span class="a-declarative" data-action="thumb-action" data-thumb-action="{&quot;thumbnailIndex&quot;:&quot;4&quot;,&quot;variant&quot;:&quot;PT03&quot;,&quot;index&quot;:&quot;4&quot;,&quot;type&quot;:&quot;image&quot;}">
        <span class="a-button a-button-thumbnail a-button-toggle"><span class="a-button-inner"><input class="a-button-input" type="submit"><span class="a-button-text" aria-hidden="true">
            <img alt="" src="https://images-na.ssl-images-amazon.com/images/I/51FQyWOG-BL._SS40_.jpg">
        </span></span></span>
    </span>
</span></li>

                    
        
    
        
            
            
            












<li class="a-spacing-small item"><span class="a-list-item">
    <span class="a-declarative" data-action="thumb-action" data-thumb-action="{&quot;thumbnailIndex&quot;:&quot;5&quot;,&quot;variant&quot;:&quot;PT04&quot;,&quot;index&quot;:&quot;5&quot;,&quot;type&quot;:&quot;image&quot;}">
        <span class="a-button a-button-thumbnail a-button-toggle"><span class="a-button-inner"><input class="a-button-input" type="submit"><span class="a-button-text" aria-hidden="true">
            <img alt="" src="https://images-na.ssl-images-amazon.com/images/I/51xwX1lWNNL._SS40_.jpg">
        </span></span></span>
    </span>
</span></li>

                    
        
    
    
     
    

    
    
        
    

    <li class="a-spacing-small 360IngressTemplate aok-hidden"><span class="a-list-item">
        <span class="a-declarative" data-action="thumb-action" data-thumb-action="{}">
            <span class="a-button a-button-thumbnail a-button-toggle"><span class="a-button-inner"><input class="a-button-input" type="submit"><span class="a-button-text" aria-hidden="true">
                <img alt="" src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel._V192234675_.gif">
            </span></span></span>
        </span>
    </span></li>

    
    
        
            <li class="a-spacing-small template"><span class="a-list-item">
                <span class="a-button a-button-thumbnail a-button-toggle"><span class="a-button-inner"><input class="a-button-input" type="submit"><span class="a-button-text" aria-hidden="true">
                  <span class="placeHolder"></span>
                </span></span></span>
            </span></li>
        
        
    

    

    
    
 
    

</ul>

 <style type="text/css">
    #altIngressSpan {
        width: 40px;
        height: 40px;
    }
</style>


            </div>
        
        
        <div class="a-text-center a-fixed-left-grid-col a-col-right" style="padding-left:3.5%;float:left;">
            <div class="a-row a-spacing-none a-grid-vertical-align a-grid-center canvas ie7-width-96">
                <div id="main-image-container" class = "a-dynamic-image-container">
                    




    <div id="video-outer-container">
        <div id="main-video-container">
        </div>
        <div id="video-canvas-caption" class="a-row">
            <div class="a-column a-span12 a-text-center">
                <span id="videoCaption" class="a-color-secondary"></span>
            </div>
        </div>
    </div>

                    




<div class="a-hidden" id="auiImmersiveViewDiv"></div> 








    
    
      




<div class="variationUnavailable unavailableExp">
    <div class="inner">
        
        <div class="a-box a-alert a-alert-error" aria-live="assertive" role="alert"><div class="a-box-inner a-alert-container"><h4 class="a-alert-heading">Bild nicht verfügbar</h4><i class="a-icon a-icon-alert"></i><div class="a-alert-content">
            <span class="a-text-bold">
                Keine Abbildung vorhanden für <br/>Farbe:
                <span class="unvailableVariation"></span>
            </span>
        </div></div></div>
    </div>
</div>




<ul class="a-unordered-list a-nostyle a-horizontal list maintain-height">



	<li class="image item itemNo0 selected maintain-height"><span class="a-list-item">
	    <span class="a-declarative" data-action="main-image-click" data-main-image-click="{}">
	        <div id="imgTagWrapperId" class="imgTagWrapper">
	            <img alt="Echo Input (Schwarz) – Bringen Sie Alexa auf Ihren Lautsprecher – Externer Lautsprecher mit 3,5-mm-Audioeingang oder Bluetooth erforderlich" src="https://images-na.ssl-images-amazon.com/images/I/516V8PF6PcL._SY300_.jpg" data-old-hires="https://images-na.ssl-images-amazon.com/images/I/71sCCFhbaaL._SL1000_.jpg"  class="a-dynamic-image  a-stretch-vertical" id="landingImage" data-a-dynamic-image="{&quot;https://images-na.ssl-images-amazon.com/images/I/71sCCFhbaaL._SX569_.jpg&quot;:[569,569],&quot;https://images-na.ssl-images-amazon.com/images/I/71sCCFhbaaL._SX425_.jpg&quot;:[425,425],&quot;https://images-na.ssl-images-amazon.com/images/I/71sCCFhbaaL._SX522_.jpg&quot;:[522,522],&quot;https://images-na.ssl-images-amazon.com/images/I/71sCCFhbaaL._SX466_.jpg&quot;:[466,466],&quot;https://images-na.ssl-images-amazon.com/images/I/71sCCFhbaaL._SY450_.jpg&quot;:[450,450],&quot;https://images-na.ssl-images-amazon.com/images/I/71sCCFhbaaL._SX679_.jpg&quot;:[679,679],&quot;https://images-na.ssl-images-amazon.com/images/I/71sCCFhbaaL._SY355_.jpg&quot;:[355,355]}" style="max-width:679px;max-height:679px;">
	        </div>
	    </span>
	</span></li>




<li class="mainImageTemplate template"><span class="a-list-item">
    <span class="a-declarative" data-action="main-image-click" data-main-image-click="{}">
        <div class="imgTagWrapper">
            <span class="placeHolder"></span>
        </div>
    </span>
</span></li>


<li class="swatchHoverExp a-hidden maintain-height"><span class="a-list-item">
    <span class="a-declarative" data-action="main-image-click" data-main-image-click="{}">
        <div class="imgTagWrapper">
            <span class="placeHolder"></span>
        </div>
    </span>
</span></li>



<li id="noFlashContent" class="noFlash a-hidden"><span class="a-list-item">
    <hza:string id="softlines_dp_video_flash_player" />
    <a class="a-link-normal" target="_blank" rel="noopener" href="https://get.adobe.com/flashplayer">
        <hza:string id="softlines_dp_video_flash_player_text" />
        <span class="swSprite s_extLink"></span>
    </a>
</span></li>


</ul>







<script type="text/javascript">
    var mainImgContainer = document.getElementById("main-image-container");
    
    var containerWidth = mainImgContainer.offsetWidth;
    var holderRatio = 1.0;
    var shouldAutoPlay = false;
    var containerHeight = containerWidth/holderRatio;
    containerHeight = Math.min(containerHeight, 700);

    var dynamicImageMaxHeight = 679 ;
    var dynamicImageMaxWidth = 679 ;
    var aspectRatio = dynamicImageMaxWidth/dynamicImageMaxHeight;
    var landingImage = document.getElementById("landingImage");
    var imgWrapperDiv = document.getElementById("imgTagWrapperId");

    var imageMaxHeight = containerHeight;
    var imageMaxWidth = containerWidth;

    if(!shouldAutoPlay) {
        imageMaxHeight = Math.min(imageMaxHeight, dynamicImageMaxHeight);
        imageMaxWidth = Math.min(imageMaxWidth, dynamicImageMaxWidth);
    }

    
    var useImageBlockLeftColCentering = false;
    var rightMargin = 58;

    if(typeof useImageBlockLeftColCentering !== "undefined" && useImageBlockLeftColCentering){
        mainImgContainer.style.marginRight = rightMargin + "px";
    }
    mainImgContainer.style.height = containerHeight + "px";
    
    var imageMaxWidthBasedOnHeight = imageMaxHeight * aspectRatio;
    var imageMaxHeightBasedOnWidth = imageMaxWidth / aspectRatio;
    imageMaxHeight = Math.min(imageMaxHeight, imageMaxHeightBasedOnWidth);
    imageMaxWidth = Math.min(imageMaxWidth, imageMaxWidthBasedOnHeight);

    if(imgWrapperDiv){
        imgWrapperDiv.style.height = containerHeight + "px";
    }

    if(landingImage){
        landingImage.style.maxHeight = imageMaxHeight + "px";
        landingImage.style.maxWidth = imageMaxWidth + "px";
    }

    if(shouldAutoPlay){
        if(landingImage){
            landingImage.style.height = imageMaxHeight + "px";
            landingImage.style.width  = imageMaxWidth + "px";
        }
    }

</script>






                </div>
            </div>

            
                
                
                    <div id="image-canvas-caption" class="a-row">
                         <div class="a-column a-span12 a-text-center">
                             <span id="canvasCaption" class="a-color-secondary"></span>
                         </div>
                    </div>
                
            
            
            <div class="collections-collect-button"></div>
        </div>
    </div></div>
</div>











<script type="text/javascript">
P.when('A').register("ImageBlockATF", function(A){
    var data = {
                'colorImages': { 'initial': [{"hiRes":"https://images-na.ssl-images-amazon.com/images/I/71sCCFhbaaL._SL1000_.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/516V8PF6PcL._SS40_.jpg","large":"https://images-na.ssl-images-amazon.com/images/I/516V8PF6PcL.jpg","main":{"https://images-na.ssl-images-amazon.com/images/I/71sCCFhbaaL._SY355_.jpg":[355,355],"https://images-na.ssl-images-amazon.com/images/I/71sCCFhbaaL._SY450_.jpg":[450,450],"https://images-na.ssl-images-amazon.com/images/I/71sCCFhbaaL._SX425_.jpg":[425,425],"https://images-na.ssl-images-amazon.com/images/I/71sCCFhbaaL._SX466_.jpg":[466,466],"https://images-na.ssl-images-amazon.com/images/I/71sCCFhbaaL._SX522_.jpg":[522,522],"https://images-na.ssl-images-amazon.com/images/I/71sCCFhbaaL._SX569_.jpg":[569,569],"https://images-na.ssl-images-amazon.com/images/I/71sCCFhbaaL._SX679_.jpg":[679,679]},"variant":"LEFT","lowRes":null},{"hiRes":"https://images-na.ssl-images-amazon.com/images/I/51fF4BCu6qL._SL1000_.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/31Alxl7qcaL._SS40_.jpg","large":"https://images-na.ssl-images-amazon.com/images/I/31Alxl7qcaL.jpg","main":{"https://images-na.ssl-images-amazon.com/images/I/51fF4BCu6qL._SY355_.jpg":[355,355],"https://images-na.ssl-images-amazon.com/images/I/51fF4BCu6qL._SY450_.jpg":[450,450],"https://images-na.ssl-images-amazon.com/images/I/51fF4BCu6qL._SX425_.jpg":[425,425],"https://images-na.ssl-images-amazon.com/images/I/51fF4BCu6qL._SX466_.jpg":[466,466],"https://images-na.ssl-images-amazon.com/images/I/51fF4BCu6qL._SX522_.jpg":[522,522],"https://images-na.ssl-images-amazon.com/images/I/51fF4BCu6qL._SX569_.jpg":[569,569],"https://images-na.ssl-images-amazon.com/images/I/51fF4BCu6qL._SX679_.jpg":[679,679]},"variant":"MAIN","lowRes":null},{"hiRes":"https://images-na.ssl-images-amazon.com/images/I/71ttALrqHkL._SL1000_.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51DROC84mWL._SS40_.jpg","large":"https://images-na.ssl-images-amazon.com/images/I/51DROC84mWL.jpg","main":{"https://images-na.ssl-images-amazon.com/images/I/71ttALrqHkL._SY355_.jpg":[355,355],"https://images-na.ssl-images-amazon.com/images/I/71ttALrqHkL._SY450_.jpg":[450,450],"https://images-na.ssl-images-amazon.com/images/I/71ttALrqHkL._SX425_.jpg":[425,425],"https://images-na.ssl-images-amazon.com/images/I/71ttALrqHkL._SX466_.jpg":[466,466],"https://images-na.ssl-images-amazon.com/images/I/71ttALrqHkL._SX522_.jpg":[522,522],"https://images-na.ssl-images-amazon.com/images/I/71ttALrqHkL._SX569_.jpg":[569,569],"https://images-na.ssl-images-amazon.com/images/I/71ttALrqHkL._SX679_.jpg":[679,679]},"variant":"PT01","lowRes":null},{"hiRes":"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SL1000_.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51jlZH%2BcflL._SS40_.jpg","large":"https://images-na.ssl-images-amazon.com/images/I/51jlZH%2BcflL.jpg","main":{"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SY355_.jpg":[355,355],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SY450_.jpg":[450,450],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX425_.jpg":[425,425],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX466_.jpg":[466,466],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX522_.jpg":[522,522],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX569_.jpg":[569,569],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX679_.jpg":[679,679]},"variant":"PT02","lowRes":null},{"hiRes":"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SL1000_.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51FQyWOG-BL._SS40_.jpg","large":"https://images-na.ssl-images-amazon.com/images/I/51FQyWOG-BL.jpg","main":{"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SY355_.jpg":[355,355],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SY450_.jpg":[450,450],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX425_.jpg":[425,425],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX466_.jpg":[466,466],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX522_.jpg":[522,522],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX569_.jpg":[569,569],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX679_.jpg":[679,679]},"variant":"PT03","lowRes":null},{"hiRes":"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SL1000_.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51xwX1lWNNL._SS40_.jpg","large":"https://images-na.ssl-images-amazon.com/images/I/51xwX1lWNNL.jpg","main":{"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SY355_.jpg":[355,355],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SY450_.jpg":[450,450],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX425_.jpg":[425,425],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX466_.jpg":[466,466],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX522_.jpg":[522,522],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX569_.jpg":[569,569],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX679_.jpg":[679,679]},"variant":"PT04","lowRes":null}]},
                'colorToAsin': {'initial': {}},
                'holderRatio': 1.0,
                'holderMaxHeight': 700,
                'heroImage': {'initial': []},
                'heroVideo': {'initial': []},
                'spin360ColorData': {'initial': {}},
                'spin360ColorEnabled': {'initial': 0},
                'spin360ConfigEnabled': false,
                'spin360LazyLoadEnabled': false,
                'playVideoInImmersiveView':'false',
                'tabbedImmersiveViewTreatment':'C',
                'totalVideoCount':'0',
                'videoIngressATFSlateThumbURL':'',
                'mediaTypeCount':'0',
                'atfEnhancedHoverOverlay' : true,
                'winningAsin': 'B07C76F3P2',
                'weblabs' : {},
                'aibExp3Layout' : 1,
                'aibRuleName' : 'frank-powered',
                'acEnabled' : false
                };
    A.trigger('P.AboveTheFold'); // trigger ATF event.
    return data;
});
</script>



<div id="twister-main-image" class="a-hidden" customfunctionname="(function(id, state){ P.when('A').execute(function(A){ A.trigger('image-block-twister-swatch-hover', id, state); }); });"></div>

<div id="thumbs-image" class="a-hidden" customfunctionname="(function(id, state, onloadFunction){ P.when('A').execute(function(A){ A.trigger('image-block-twister-swatch-click', id, state, onloadFunction); }); });"></div>






    





    
 









	
	    
	    
	
	




    



<div class="a-popover-preload" id="a-popover-immersiveView">

    <div id="ivMain" class="legacyImmersiveView">
        <div id="ivThumbColumn">
            <div id="ivTitle"></div>
            <div id="ivVariationSelection"></div>
            <div id="ivMediaSelection">
                <select id="ivMediaSelect"></select>
            </div>
            <div id='ivThumbs'>
                <div class="ivRow placeholder"></div>
                <span class='ivThumbVideoPopover placeholder'>
                    <b class='ivVideoPopoverTitle'></b><br><span class='ivVideoPopoverDuration'></span>
                </span>
                <div class="ivThumb placeholder">
                    <div class="ivThumbImage"></div>
                </div>
            </div>
            <div id='ivVideoList'>
                <div class="ivThumbVideoListOuter placeholder">
                    <div class="ivThumbVideoList">
                        <div class="ivThumbImage"></div>
                    </div>
                    <div class="ivThumbText">
                        <b class="ivThumbTitle"></b>
                        <span class="ivThumbDuration"></span>
                        <div class="ivClearfix"></div>
                    </div>
                </div>
            </div>
        </div>
        <div id="ivStage">
            <div id="ivLargeImage"></div>
            <div id="ivLargeVideo"></div>
            <div id="ivLarge360"></div>
        </div>
        <div class="ivClearfix"></div>
    </div>

</div>





	                
                
            
        
        
        
        
        
        
        
    
    
    

    






    










    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="atfLeft3_feature_div" class="feature" data-feature-name="atfLeft3">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="atfLeft4_feature_div" class="feature" data-feature-name="atfLeft4">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="alexaInteractionCannedPpdLeft_feature_div" class="feature" data-feature-name="alexaInteractionCannedPpdLeft">
         
     




    

    
    
    
        
        
        
            
                
                    


    
    
    
    
    
    






    <div id="ai-atf-section" class="a-section a-text-center">
        
        
        
        
        
        
        
        
        
        
        <span class="a-declarative" data-action="a-modal" data-a-modal="{&quot;backButtonText&quot;:&quot;Zurück&quot;,&quot;padding&quot;:&quot;none&quot;,&quot;name&quot;:&quot;alexa-interaction-secview&quot;,&quot;width&quot;:&quot;800&quot;,&quot;header&quot;:&quot;Entdecken Sie, was Alexa alles kann&quot;,&quot;asin&quot;:&quot;B07C76F3P2&quot;,&quot;inlineContent&quot;:&quot;&lt;div id=\\&quot;alexa-interaction-secview-section\\&quot; class=\\&quot;a-section alexa-interaction-canned-secview\\&quot;&gt;\\n        &lt;div id=\\&quot;iwad-modal\\&quot;&gt;\\n            &lt;div id=\\&quot;iwad-left-wrapper\\&quot;&gt;\\n                &lt;div id=\\&quot;iwad-scroll-hint\\&quot;&gt;&lt;span&gt;Mehr&lt;\\/span&gt;&lt;\\/div&gt;\\n                \\n                    &lt;div class=\\&quot;a-section a-spacing-base\\&quot;&gt;\\n                        &lt;h3 class=\\&quot;iwad-prompts-section-header\\&quot;&gt;Zum Ausprobieren&lt;\\/h3&gt;\\n                        &lt;p class=\\&quot;iwad-prompts-section-description\\&quot;&gt;&lt;\\/p&gt;\\n                        \\n                            &lt;div class=\\&quot;iwad-prompts-question\\&quot; data-sectionResponseId=\\&quot;iwad-response-1-1\\&quot; id=\\&quot;iwad-prompt-1-1\\&quot;&gt;\\n                                &lt;span class=\\&quot;iwad-audio-playing-icon\\&quot;&gt;\\n                                    &lt;img id=\\&quot;audioPlaying11\\&quot; alt=\\&quot;audioIcon\\&quot; class=\\&quot;audio-playing-icon iwad-play-button\\&quot; src=\\&quot;https://images-na.ssl-images-amazon.com/images/G/03/kindle/mako/features/interact_with_alexa/assets/play_pause_desktop._CB476204450_.png\\&quot;/&gt;\\n                                &lt;\\/span&gt;\\n                                &lt;span class=\\&quot;iwad-left-utterance\\&quot;&gt;Alexa, spiel beliebte Popmusik.&lt;\\/span&gt;\\n                                &lt;audio src=\\&quot;https://m.media-amazon.com/images/G/03/kindle/mako/features/interact_with_alexa/audio/2017_10_20/DE1_music.mp3\\&quot;&gt;&lt;\\/audio&gt;\\n                            &lt;\\/div&gt;\\n                        \\n                            &lt;div class=\\&quot;iwad-prompts-question\\&quot; data-sectionResponseId=\\&quot;iwad-response-1-2\\&quot; id=\\&quot;iwad-prompt-1-2\\&quot;&gt;\\n                                &lt;span class=\\&quot;iwad-audio-playing-icon\\&quot;&gt;\\n                                    &lt;img id=\\&quot;audioPlaying12\\&quot; alt=\\&quot;audioIcon\\&quot; class=\\&quot;audio-playing-icon iwad-play-button\\&quot; src=\\&quot;https://images-na.ssl-images-amazon.com/images/G/03/kindle/mako/features/interact_with_alexa/assets/play_pause_desktop._CB476204450_.png\\&quot;/&gt;\\n                                &lt;\\/span&gt;\\n                                &lt;span class=\\&quot;iwad-left-utterance\\&quot;&gt;Alexa, stell einen Wecker für wochentags um 7:00 Uhr morgens.&lt;\\/span&gt;\\n                                &lt;audio src=\\&quot;https://m.media-amazon.com/images/G/03/kindle/mako/features/interact_with_alexa/audio/2017_10_20/DE2.mp3\\&quot;&gt;&lt;\\/audio&gt;\\n                            &lt;\\/div&gt;\\n                        \\n                            &lt;div class=\\&quot;iwad-prompts-question\\&quot; data-sectionResponseId=\\&quot;iwad-response-1-3\\&quot; id=\\&quot;iwad-prompt-1-3\\&quot;&gt;\\n                                &lt;span class=\\&quot;iwad-audio-playing-icon\\&quot;&gt;\\n                                    &lt;img id=\\&quot;audioPlaying13\\&quot; alt=\\&quot;audioIcon\\&quot; class=\\&quot;audio-playing-icon iwad-play-button\\&quot; src=\\&quot;https://images-na.ssl-images-amazon.com/images/G/03/kindle/mako/features/interact_with_alexa/assets/play_pause_desktop._CB476204450_.png\\&quot;/&gt;\\n                                &lt;\\/span&gt;\\n                                &lt;span class=\\&quot;iwad-left-utterance\\&quot;&gt;Alexa, wie ist das Wetter in Berlin?&lt;\\/span&gt;\\n                                &lt;audio src=\\&quot;https://m.media-amazon.com/images/G/03/kindle/mako/features/interact_with_alexa/audio/2017_10_20/DE3.mp3\\&quot;&gt;&lt;\\/audio&gt;\\n                            &lt;\\/div&gt;\\n                        \\n                            &lt;div class=\\&quot;iwad-prompts-question\\&quot; data-sectionResponseId=\\&quot;iwad-response-1-4\\&quot; id=\\&quot;iwad-prompt-1-4\\&quot;&gt;\\n                                &lt;span class=\\&quot;iwad-audio-playing-icon\\&quot;&gt;\\n                                    &lt;img id=\\&quot;audioPlaying14\\&quot; alt=\\&quot;audioIcon\\&quot; class=\\&quot;audio-playing-icon iwad-play-button\\&quot; src=\\&quot;https://images-na.ssl-images-amazon.com/images/G/03/kindle/mako/features/interact_with_alexa/assets/play_pause_desktop._CB476204450_.png\\&quot;/&gt;\\n                                &lt;\\/span&gt;\\n                                &lt;span class=\\&quot;iwad-left-utterance\\&quot;&gt;Alexa, erzähl mir einen Witz.&lt;\\/span&gt;\\n                                &lt;audio src=\\&quot;https://m.media-amazon.com/images/G/03/kindle/mako/features/interact_with_alexa/audio/2017_10_20/DE4.mp3\\&quot;&gt;&lt;\\/audio&gt;\\n                            &lt;\\/div&gt;\\n                        \\n                    &lt;\\/div&gt;\\n                \\n                    &lt;div class=\\&quot;a-section a-spacing-base\\&quot;&gt;\\n                        &lt;h3 class=\\&quot;iwad-prompts-section-header\\&quot;&gt;Musik und Unterhaltung&lt;\\/h3&gt;\\n                        &lt;p class=\\&quot;iwad-prompts-section-description\\&quot;&gt;&lt;\\/p&gt;\\n                        \\n                            &lt;div class=\\&quot;iwad-prompts-question\\&quot; data-sectionResponseId=\\&quot;iwad-response-2-1\\&quot; id=\\&quot;iwad-prompt-2-1\\&quot;&gt;\\n                                &lt;span class=\\&quot;iwad-audio-playing-icon\\&quot;&gt;\\n                                    &lt;img id=\\&quot;audioPlaying21\\&quot; alt=\\&quot;audioIcon\\&quot; class=\\&quot;audio-playing-icon iwad-play-button\\&quot; src=\\&quot;https://images-na.ssl-images-amazon.com/images/G/03/kindle/mako/features/interact_with_alexa/assets/play_pause_desktop._CB476204450_.png\\&quot;/&gt;\\n                                &lt;\\/span&gt;\\n                                &lt;span class=\\&quot;iwad-left-utterance\\&quot;&gt;Alexa, spiel das aktuelle Album von Sia.&lt;\\/span&gt;\\n                                &lt;audio src=\\&quot;https://m.media-amazon.com/images/G/03/kindle/mako/features/interact_with_alexa/audio/2017_10_20/DE5_music.mp3\\&quot;&gt;&lt;\\/audio&gt;\\n                            &lt;\\/div&gt;\\n                        \\n                            &lt;div class=\\&quot;iwad-prompts-question\\&quot; data-sectionResponseId=\\&quot;iwad-response-2-2\\&quot; id=\\&quot;iwad-prompt-2-2\\&quot;&gt;\\n                                &lt;span class=\\&quot;iwad-audio-playing-icon\\&quot;&gt;\\n                                    &lt;img id=\\&quot;audioPlaying22\\&quot; alt=\\&quot;audioIcon\\&quot; class=\\&quot;audio-playing-icon iwad-play-button\\&quot; src=\\&quot;https://images-na.ssl-images-amazon.com/images/G/03/kindle/mako/features/interact_with_alexa/assets/play_pause_desktop._CB476204450_.png\\&quot;/&gt;\\n                                &lt;\\/span&gt;\\n                                &lt;span class=\\&quot;iwad-left-utterance\\&quot;&gt;Alexa, spiel 1LIVE von TuneIn.&lt;\\/span&gt;\\n                                &lt;audio src=\\&quot;https://m.media-amazon.com/images/G/03/kindle/mako/features/interact_with_alexa/audio/2017_10_20/DE6.mp3\\&quot;&gt;&lt;\\/audio&gt;\\n                            &lt;\\/div&gt;\\n                        \\n                            &lt;div class=\\&quot;iwad-prompts-question\\&quot; data-sectionResponseId=\\&quot;iwad-response-2-3\\&quot; id=\\&quot;iwad-prompt-2-3\\&quot;&gt;\\n                                &lt;span class=\\&quot;iwad-audio-playing-icon\\&quot;&gt;\\n                                    &lt;img id=\\&quot;audioPlaying23\\&quot; alt=\\&quot;audioIcon\\&quot; class=\\&quot;audio-playing-icon iwad-play-button\\&quot; src=\\&quot;https://images-na.ssl-images-amazon.com/images/G/03/kindle/mako/features/interact_with_alexa/assets/play_pause_desktop._CB476204450_.png\\&quot;/&gt;\\n                                &lt;\\/span&gt;\\n                                &lt;span class=\\&quot;iwad-left-utterance\\&quot;&gt;Alexa, was läuft heute Abend im Fernsehen?&lt;\\/span&gt;\\n                                &lt;audio src=\\&quot;https://m.media-amazon.com/images/G/03/kindle/mako/features/interact_with_alexa/audio/2017_10_20/DE7.mp3\\&quot;&gt;&lt;\\/audio&gt;\\n                            &lt;\\/div&gt;\\n                        \\n                            &lt;div class=\\&quot;iwad-prompts-question\\&quot; data-sectionResponseId=\\&quot;iwad-response-2-4\\&quot; id=\\&quot;iwad-prompt-2-4\\&quot;&gt;\\n                                &lt;span class=\\&quot;iwad-audio-playing-icon\\&quot;&gt;\\n                                    &lt;img id=\\&quot;audioPlaying24\\&quot; alt=\\&quot;audioIcon\\&quot; class=\\&quot;audio-playing-icon iwad-play-button\\&quot; src=\\&quot;https://images-na.ssl-images-amazon.com/images/G/03/kindle/mako/features/interact_with_alexa/assets/play_pause_desktop._CB476204450_.png\\&quot;/&gt;\\n                                &lt;\\/span&gt;\\n                                &lt;span class=\\&quot;iwad-left-utterance\\&quot;&gt;Alexa, lass uns spielen.&lt;\\/span&gt;\\n                                &lt;audio src=\\&quot;https://m.media-amazon.com/images/G/03/kindle/mako/features/interact_with_alexa/audio/2017_10_20/DE8.mp3\\&quot;&gt;&lt;\\/audio&gt;\\n                            &lt;\\/div&gt;\\n                        \\n                            &lt;div class=\\&quot;iwad-prompts-question\\&quot; data-sectionResponseId=\\&quot;iwad-response-2-5\\&quot; id=\\&quot;iwad-prompt-2-5\\&quot;&gt;\\n                                &lt;span class=\\&quot;iwad-audio-playing-icon\\&quot;&gt;\\n                                    &lt;img id=\\&quot;audioPlaying25\\&quot; alt=\\&quot;audioIcon\\&quot; class=\\&quot;audio-playing-icon iwad-play-button\\&quot; src=\\&quot;https://images-na.ssl-images-amazon.com/images/G/03/kindle/mako/features/interact_with_alexa/assets/play_pause_desktop._CB476204450_.png\\&quot;/&gt;\\n                                &lt;\\/span&gt;\\n                                &lt;span class=\\&quot;iwad-left-utterance\\&quot;&gt;Alexa, starte Einschlafgeräusche.&lt;\\/span&gt;\\n                                &lt;audio src=\\&quot;https://m.media-amazon.com/images/G/01/kindle/mako/features/interact_with_alexa/audio/2017_08/thunderstorm_sounds.mp3\\&quot;&gt;&lt;\\/audio&gt;\\n                            &lt;\\/div&gt;\\n                        \\n                    &lt;\\/div&gt;\\n                \\n                    &lt;div class=\\&quot;a-section a-spacing-base\\&quot;&gt;\\n                        &lt;h3 class=\\&quot;iwad-prompts-section-header\\&quot;&gt;Nachrichten, Wetter, Sport und mehr&lt;\\/h3&gt;\\n                        &lt;p class=\\&quot;iwad-prompts-section-description\\&quot;&gt;&lt;\\/p&gt;\\n                        \\n                            &lt;div class=\\&quot;iwad-prompts-question\\&quot; data-sectionResponseId=\\&quot;iwad-response-3-1\\&quot; id=\\&quot;iwad-prompt-3-1\\&quot;&gt;\\n                                &lt;span class=\\&quot;iwad-audio-playing-icon\\&quot;&gt;\\n                                    &lt;img id=\\&quot;audioPlaying31\\&quot; alt=\\&quot;audioIcon\\&quot; class=\\&quot;audio-playing-icon iwad-play-button\\&quot; src=\\&quot;https://images-na.ssl-images-amazon.com/images/G/03/kindle/mako/features/interact_with_alexa/assets/play_pause_desktop._CB476204450_.png\\&quot;/&gt;\\n                                &lt;\\/span&gt;\\n                                &lt;span class=\\&quot;iwad-left-utterance\\&quot;&gt;Alexa, was sind die Nachrichten?&lt;\\/span&gt;\\n                                &lt;audio src=\\&quot;https://m.media-amazon.com/images/G/03/kindle/mako/features/interact_with_alexa/audio/2017_10_20/DE12.mp3\\&quot;&gt;&lt;\\/audio&gt;\\n                            &lt;\\/div&gt;\\n                        \\n                            &lt;div class=\\&quot;iwad-prompts-question\\&quot; data-sectionResponseId=\\&quot;iwad-response-3-2\\&quot; id=\\&quot;iwad-prompt-3-2\\&quot;&gt;\\n                                &lt;span class=\\&quot;iwad-audio-playing-icon\\&quot;&gt;\\n                                    &lt;img id=\\&quot;audioPlaying32\\&quot; alt=\\&quot;audioIcon\\&quot; class=\\&quot;audio-playing-icon iwad-play-button\\&quot; src=\\&quot;https://images-na.ssl-images-amazon.com/images/G/03/kindle/mako/features/interact_with_alexa/assets/play_pause_desktop._CB476204450_.png\\&quot;/&gt;\\n                                &lt;\\/span&gt;\\n                                &lt;span class=\\&quot;iwad-left-utterance\\&quot;&gt;Alexa, brauch ich heute einen Regenschirm?&lt;\\/span&gt;\\n                                &lt;audio src=\\&quot;https://m.media-amazon.com/images/G/03/kindle/mako/features/interact_with_alexa/audio/2017_10_20/DE13.mp3\\&quot;&gt;&lt;\\/audio&gt;\\n                            &lt;\\/div&gt;\\n                        \\n                            &lt;div class=\\&quot;iwad-prompts-question\\&quot; data-sectionResponseId=\\&quot;iwad-response-3-3\\&quot; id=\\&quot;iwad-prompt-3-3\\&quot;&gt;\\n                                &lt;span class=\\&quot;iwad-audio-playing-icon\\&quot;&gt;\\n                                    &lt;img id=\\&quot;audioPlaying33\\&quot; alt=\\&quot;audioIcon\\&quot; class=\\&quot;audio-playing-icon iwad-play-button\\&quot; src=\\&quot;https://images-na.ssl-images-amazon.com/images/G/03/kindle/mako/features/interact_with_alexa/assets/play_pause_desktop._CB476204450_.png\\&quot;/&gt;\\n                                &lt;\\/span&gt;\\n                                &lt;span class=\\&quot;iwad-left-utterance\\&quot;&gt;Alexa, wann spielt Bayern als nächstes?&lt;\\/span&gt;\\n                                &lt;audio src=\\&quot;https://m.media-amazon.com/images/G/03/kindle/mako/features/interact_with_alexa/audio/2017_10_20/DE14.mp3\\&quot;&gt;&lt;\\/audio&gt;\\n                            &lt;\\/div&gt;\\n                        \\n                            &lt;div class=\\&quot;iwad-prompts-question\\&quot; data-sectionResponseId=\\&quot;iwad-response-3-4\\&quot; id=\\&quot;iwad-prompt-3-4\\&quot;&gt;\\n                                &lt;span class=\\&quot;iwad-audio-playing-icon\\&quot;&gt;\\n                                    &lt;img id=\\&quot;audioPlaying34\\&quot; alt=\\&quot;audioIcon\\&quot; class=\\&quot;audio-playing-icon iwad-play-button\\&quot; src=\\&quot;https://images-na.ssl-images-amazon.com/images/G/03/kindle/mako/features/interact_with_alexa/assets/play_pause_desktop._CB476204450_.png\\&quot;/&gt;\\n                                &lt;\\/span&gt;\\n                                &lt;span class=\\&quot;iwad-left-utterance\\&quot;&gt;Alexa, was sind 68 Grad Fahrenheit in Celsius?&lt;\\/span&gt;\\n                                &lt;audio src=\\&quot;https://m.media-amazon.com/images/G/03/kindle/mako/features/interact_with_alexa/audio/2017_10_20/DE15.mp3\\&quot;&gt;&lt;\\/audio&gt;\\n                            &lt;\\/div&gt;\\n                        \\n                    &lt;\\/div&gt;\\n                \\n                    &lt;div class=\\&quot;a-section a-spacing-base\\&quot;&gt;\\n                        &lt;h3 class=\\&quot;iwad-prompts-section-header\\&quot;&gt;Unterstützung für zuhause&lt;\\/h3&gt;\\n                        &lt;p class=\\&quot;iwad-prompts-section-description\\&quot;&gt;&lt;\\/p&gt;\\n                        \\n                            &lt;div class=\\&quot;iwad-prompts-question\\&quot; data-sectionResponseId=\\&quot;iwad-response-4-1\\&quot; id=\\&quot;iwad-prompt-4-1\\&quot;&gt;\\n                                &lt;span class=\\&quot;iwad-audio-playing-icon\\&quot;&gt;\\n                                    &lt;img id=\\&quot;audioPlaying41\\&quot; alt=\\&quot;audioIcon\\&quot; class=\\&quot;audio-playing-icon iwad-play-button\\&quot; src=\\&quot;https://images-na.ssl-images-amazon.com/images/G/03/kindle/mako/features/interact_with_alexa/assets/play_pause_desktop._CB476204450_.png\\&quot;/&gt;\\n                                &lt;\\/span&gt;\\n                                &lt;span class=\\&quot;iwad-left-utterance\\&quot;&gt;Alexa, dimme das Licht.&lt;\\/span&gt;\\n                                &lt;audio src=\\&quot;https://m.media-amazon.com/images/G/03/kindle/mako/features/interact_with_alexa/audio/2017_10_20/DE16.mp3\\&quot;&gt;&lt;\\/audio&gt;\\n                            &lt;\\/div&gt;\\n                        \\n                            &lt;div class=\\&quot;iwad-prompts-question\\&quot; data-sectionResponseId=\\&quot;iwad-response-4-2\\&quot; id=\\&quot;iwad-prompt-4-2\\&quot;&gt;\\n                                &lt;span class=\\&quot;iwad-audio-playing-icon\\&quot;&gt;\\n                                    &lt;img id=\\&quot;audioPlaying42\\&quot; alt=\\&quot;audioIcon\\&quot; class=\\&quot;audio-playing-icon iwad-play-button\\&quot; src=\\&quot;https://images-na.ssl-images-amazon.com/images/G/03/kindle/mako/features/interact_with_alexa/assets/play_pause_desktop._CB476204450_.png\\&quot;/&gt;\\n                                &lt;\\/span&gt;\\n                                &lt;span class=\\&quot;iwad-left-utterance\\&quot;&gt;Alexa, bestell Katzenfutter.&lt;\\/span&gt;\\n                                &lt;audio src=\\&quot;https://m.media-amazon.com/images/G/03/kindle/mako/features/interact_with_alexa/audio/2017_10_20/DE17.mp3\\&quot;&gt;&lt;\\/audio&gt;\\n                            &lt;\\/div&gt;\\n                        \\n                            &lt;div class=\\&quot;iwad-prompts-question\\&quot; data-sectionResponseId=\\&quot;iwad-response-4-3\\&quot; id=\\&quot;iwad-prompt-4-3\\&quot;&gt;\\n                                &lt;span class=\\&quot;iwad-audio-playing-icon\\&quot;&gt;\\n                                    &lt;img id=\\&quot;audioPlaying43\\&quot; alt=\\&quot;audioIcon\\&quot; class=\\&quot;audio-playing-icon iwad-play-button\\&quot; src=\\&quot;https://images-na.ssl-images-amazon.com/images/G/03/kindle/mako/features/interact_with_alexa/assets/play_pause_desktop._CB476204450_.png\\&quot;/&gt;\\n                                &lt;\\/span&gt;\\n                                &lt;span class=\\&quot;iwad-left-utterance\\&quot;&gt;Alexa, füg \u201aMilch\u2018 zu meiner Einkaufsliste hinzu.&lt;\\/span&gt;\\n                                &lt;audio src=\\&quot;https://m.media-amazon.com/images/G/03/kindle/mako/features/interact_with_alexa/audio/2017_10_20/DE18.mp3\\&quot;&gt;&lt;\\/audio&gt;\\n                            &lt;\\/div&gt;\\n                        \\n                            &lt;div class=\\&quot;iwad-prompts-question\\&quot; data-sectionResponseId=\\&quot;iwad-response-4-4\\&quot; id=\\&quot;iwad-prompt-4-4\\&quot;&gt;\\n                                &lt;span class=\\&quot;iwad-audio-playing-icon\\&quot;&gt;\\n                                    &lt;img id=\\&quot;audioPlaying44\\&quot; alt=\\&quot;audioIcon\\&quot; class=\\&quot;audio-playing-icon iwad-play-button\\&quot; src=\\&quot;https://images-na.ssl-images-amazon.com/images/G/03/kindle/mako/features/interact_with_alexa/assets/play_pause_desktop._CB476204450_.png\\&quot;/&gt;\\n                                &lt;\\/span&gt;\\n                                &lt;span class=\\&quot;iwad-left-utterance\\&quot;&gt;Alexa, stell einen Timer für 5 Minuten.&lt;\\/span&gt;\\n                                &lt;audio src=\\&quot;https://m.media-amazon.com/images/G/03/kindle/mako/features/interact_with_alexa/audio/2017_10_20/DE19.mp3\\&quot;&gt;&lt;\\/audio&gt;\\n                            &lt;\\/div&gt;\\n                        \\n                            &lt;div class=\\&quot;iwad-prompts-question\\&quot; data-sectionResponseId=\\&quot;iwad-response-4-5\\&quot; id=\\&quot;iwad-prompt-4-5\\&quot;&gt;\\n                                &lt;span class=\\&quot;iwad-audio-playing-icon\\&quot;&gt;\\n                                    &lt;img id=\\&quot;audioPlaying45\\&quot; alt=\\&quot;audioIcon\\&quot; class=\\&quot;audio-playing-icon iwad-play-button\\&quot; src=\\&quot;https://images-na.ssl-images-amazon.com/images/G/03/kindle/mako/features/interact_with_alexa/assets/play_pause_desktop._CB476204450_.png\\&quot;/&gt;\\n                                &lt;\\/span&gt;\\n                                &lt;span class=\\&quot;iwad-left-utterance\\&quot;&gt;Alexa, erinnere mich daran, die Blumen um 18:00 Uhr zu gieβen.&lt;\\/span&gt;\\n                                &lt;audio src=\\&quot;https://m.media-amazon.com/images/G/03/kindle/mako/features/interact_with_alexa/audio/2017_10_20/DE20.mp3\\&quot;&gt;&lt;\\/audio&gt;\\n                            &lt;\\/div&gt;\\n                        \\n                    &lt;\\/div&gt;\\n                \\n            &lt;\\/div&gt;\\n\\n            &lt;div id=\\&quot;iwad-right-wrapper\\&quot;&gt;\\n                &lt;div class=\\&quot;gradient-overlay\\&quot;&gt;&lt;\\/div&gt;\\n                &lt;div id=\\&quot;iwad-right-default\\&quot; class=\\&quot;iwad-right-default\\&quot;&gt;\\n                    &lt;div class=\\&quot;iwad-page-description\\&quot;&gt;Tippen Sie auf eine Frage oder Ansage, um Beispielantworten von Alexa, dem Sprachassistenten hinter Amazon Echo, Echo Dot, Echo Plus, Echo Spot, Echo Show und weiteren, zu hören.&lt;\\/div&gt;\\n                    &lt;img class=\\&quot;iwad-right-response-image\\&quot; alt=\\&quot;Alexa\\&quot; src=\\&quot;https://images-na.ssl-images-amazon.com/images/I/51fF4BCu6qL.jpg\\&quot;/&gt;\\n                &lt;\\/div&gt;\\n                \\n                    \\n                        &lt;div class=\\&quot;iwad-response-section iwad-response-bottom aok-hidden\\&quot; id=\\&quot;iwad-response-1-1\\&quot;&gt;\\n                            &lt;div&gt;\\n                                &lt;div class=\\&quot;iwad-right-utterance\\&quot; id=\\&quot;iwad-right-utterance-1-1\\&quot;&gt; Alexa, spiel beliebte Popmusik. &lt;\\/div&gt;\\n                                &lt;div class=\\&quot;iwad-right-response\\&quot; id=\\&quot;iwad-right-response-1-1\\&quot;&gt; Passende Top-Songs werden abgespielt. &lt;\\/div&gt;\\n                                &lt;div class=\\&quot;iwad-device-image\\&quot;&gt;\\n                                \\n                                    \\n                                    \\n                                        &lt;img class=\\&quot;iwad-right-response-image\\&quot; alt=\\&quot;Alexa\\&quot; src=\\&quot;https://images-na.ssl-images-amazon.com/images/I/51fF4BCu6qL.jpg\\&quot;/&gt;\\n                                    \\n                                \\n                                &lt;\\/div&gt;\\n                            &lt;\\/div&gt;\\n                        &lt;\\/div&gt;\\n                    \\n                        &lt;div class=\\&quot;iwad-response-section iwad-response-bottom aok-hidden\\&quot; id=\\&quot;iwad-response-1-2\\&quot;&gt;\\n                            &lt;div&gt;\\n                                &lt;div class=\\&quot;iwad-right-utterance\\&quot; id=\\&quot;iwad-right-utterance-1-2\\&quot;&gt; Alexa, stell einen Wecker für wochentags um 7:00 Uhr morgens. &lt;\\/div&gt;\\n                                &lt;div class=\\&quot;iwad-right-response\\&quot; id=\\&quot;iwad-right-response-1-2\\&quot;&gt; Wecker gestellt für montags bis freitags um 7:00 Uhr früh. &lt;\\/div&gt;\\n                                &lt;div class=\\&quot;iwad-device-image\\&quot;&gt;\\n                                \\n                                    \\n                                    \\n                                        &lt;img class=\\&quot;iwad-right-response-image\\&quot; alt=\\&quot;Alexa\\&quot; src=\\&quot;https://images-na.ssl-images-amazon.com/images/I/51fF4BCu6qL.jpg\\&quot;/&gt;\\n                                    \\n                                \\n                                &lt;\\/div&gt;\\n                            &lt;\\/div&gt;\\n                        &lt;\\/div&gt;\\n                    \\n                        &lt;div class=\\&quot;iwad-response-section iwad-response-bottom aok-hidden\\&quot; id=\\&quot;iwad-response-1-3\\&quot;&gt;\\n                            &lt;div&gt;\\n                                &lt;div class=\\&quot;iwad-right-utterance\\&quot; id=\\&quot;iwad-right-utterance-1-3\\&quot;&gt; Alexa, wie ist das Wetter in Berlin? &lt;\\/div&gt;\\n                                &lt;div class=\\&quot;iwad-right-response\\&quot; id=\\&quot;iwad-right-response-1-3\\&quot;&gt; In Berlin beträgt die Temperatur aktuell 15 Grad bei bewölktem Himmel. Heute höchstwahrscheinlich Regenschauer mit einer Höchsttemperatur von 16 Grad und einer Tiefsttemperatur von 11 Grad. &lt;\\/div&gt;\\n                                &lt;div class=\\&quot;iwad-device-image\\&quot;&gt;\\n                                \\n                                    \\n                                    \\n                                        &lt;img class=\\&quot;iwad-right-response-image\\&quot; alt=\\&quot;Alexa\\&quot; src=\\&quot;https://images-na.ssl-images-amazon.com/images/I/51fF4BCu6qL.jpg\\&quot;/&gt;\\n                                    \\n                                \\n                                &lt;\\/div&gt;\\n                            &lt;\\/div&gt;\\n                        &lt;\\/div&gt;\\n                    \\n                        &lt;div class=\\&quot;iwad-response-section iwad-response-bottom aok-hidden\\&quot; id=\\&quot;iwad-response-1-4\\&quot;&gt;\\n                            &lt;div&gt;\\n                                &lt;div class=\\&quot;iwad-right-utterance\\&quot; id=\\&quot;iwad-right-utterance-1-4\\&quot;&gt; Alexa, erzähl mir einen Witz. &lt;\\/div&gt;\\n                                &lt;div class=\\&quot;iwad-right-response\\&quot; id=\\&quot;iwad-right-response-1-4\\&quot;&gt; Sagt die 0 zur 8: \u201aSchicker Gürtel.\u2018 &lt;\\/div&gt;\\n                                &lt;div class=\\&quot;iwad-device-image\\&quot;&gt;\\n                                \\n                                    \\n                                    \\n                                        &lt;img class=\\&quot;iwad-right-response-image\\&quot; alt=\\&quot;Alexa\\&quot; src=\\&quot;https://images-na.ssl-images-amazon.com/images/I/51fF4BCu6qL.jpg\\&quot;/&gt;\\n                                    \\n                                \\n                                &lt;\\/div&gt;\\n                            &lt;\\/div&gt;\\n                        &lt;\\/div&gt;\\n                    \\n                \\n                    \\n                        &lt;div class=\\&quot;iwad-response-section iwad-response-bottom aok-hidden\\&quot; id=\\&quot;iwad-response-2-1\\&quot;&gt;\\n                            &lt;div&gt;\\n                                &lt;div class=\\&quot;iwad-right-utterance\\&quot; id=\\&quot;iwad-right-utterance-2-1\\&quot;&gt; Alexa, spiel das aktuelle Album von Sia. &lt;\\/div&gt;\\n                                &lt;div class=\\&quot;iwad-right-response\\&quot; id=\\&quot;iwad-right-response-2-1\\&quot;&gt; Hier sind Hörproben aus dem neuesten Album von Sia. &lt;\\/div&gt;\\n                                &lt;div class=\\&quot;iwad-device-image\\&quot;&gt;\\n                                \\n                                    \\n                                    \\n                                        &lt;img class=\\&quot;iwad-right-response-image\\&quot; alt=\\&quot;Alexa\\&quot; src=\\&quot;https://images-na.ssl-images-amazon.com/images/I/51fF4BCu6qL.jpg\\&quot;/&gt;\\n                                    \\n                                \\n                                &lt;\\/div&gt;\\n                            &lt;\\/div&gt;\\n                        &lt;\\/div&gt;\\n                    \\n                        &lt;div class=\\&quot;iwad-response-section iwad-response-bottom aok-hidden\\&quot; id=\\&quot;iwad-response-2-2\\&quot;&gt;\\n                            &lt;div&gt;\\n                                &lt;div class=\\&quot;iwad-right-utterance\\&quot; id=\\&quot;iwad-right-utterance-2-2\\&quot;&gt; Alexa, spiel 1LIVE von TuneIn. &lt;\\/div&gt;\\n                                &lt;div class=\\&quot;iwad-right-response\\&quot; id=\\&quot;iwad-right-response-2-2\\&quot;&gt; 1LIVE, das junge Radio des WDR, von TuneIn. &lt;\\/div&gt;\\n                                &lt;div class=\\&quot;iwad-device-image\\&quot;&gt;\\n                                \\n                                    \\n                                    \\n                                        &lt;img class=\\&quot;iwad-right-response-image\\&quot; alt=\\&quot;Alexa\\&quot; src=\\&quot;https://images-na.ssl-images-amazon.com/images/I/51fF4BCu6qL.jpg\\&quot;/&gt;\\n                                    \\n                                \\n                                &lt;\\/div&gt;\\n                            &lt;\\/div&gt;\\n                        &lt;\\/div&gt;\\n                    \\n                        &lt;div class=\\&quot;iwad-response-section iwad-response-bottom aok-hidden\\&quot; id=\\&quot;iwad-response-2-3\\&quot;&gt;\\n                            &lt;div&gt;\\n                                &lt;div class=\\&quot;iwad-right-utterance\\&quot; id=\\&quot;iwad-right-utterance-2-3\\&quot;&gt; Alexa, was läuft heute Abend im Fernsehen? &lt;\\/div&gt;\\n                                &lt;div class=\\&quot;iwad-right-response\\&quot; id=\\&quot;iwad-right-response-2-3\\&quot;&gt; Auf Das Erste läuft heute Abend um 20:15 Uhr der Tagestipp der TV Digital-Redaktion \u2013 die Tragikomödie \u201aZuckersand\u2018. &lt;\\/div&gt;\\n                                &lt;div class=\\&quot;iwad-device-image\\&quot;&gt;\\n                                \\n                                    \\n                                    \\n                                        &lt;img class=\\&quot;iwad-right-response-image\\&quot; alt=\\&quot;Alexa\\&quot; src=\\&quot;https://images-na.ssl-images-amazon.com/images/I/51fF4BCu6qL.jpg\\&quot;/&gt;\\n                                    \\n                                \\n                                &lt;\\/div&gt;\\n                            &lt;\\/div&gt;\\n                        &lt;\\/div&gt;\\n                    \\n                        &lt;div class=\\&quot;iwad-response-section iwad-response-bottom aok-hidden\\&quot; id=\\&quot;iwad-response-2-4\\&quot;&gt;\\n                            &lt;div&gt;\\n                                &lt;div class=\\&quot;iwad-right-utterance\\&quot; id=\\&quot;iwad-right-utterance-2-4\\&quot;&gt; Alexa, lass uns spielen. &lt;\\/div&gt;\\n                                &lt;div class=\\&quot;iwad-right-response\\&quot; id=\\&quot;iwad-right-response-2-4\\&quot;&gt; Willkommen bei deinem Spiel \u201aMein Auftrag\u2018. Ich werde dich bei dem Spiel begleiten, stelle dir Fragen und gebe dir Hinweise. Wenn du Hilfe brauchst, sage \u201aHilfe\u2018. &lt;\\/div&gt;\\n                                &lt;div class=\\&quot;iwad-device-image\\&quot;&gt;\\n                                \\n                                    \\n                                    \\n                                        &lt;img class=\\&quot;iwad-right-response-image\\&quot; alt=\\&quot;Alexa\\&quot; src=\\&quot;https://images-na.ssl-images-amazon.com/images/I/51fF4BCu6qL.jpg\\&quot;/&gt;\\n                                    \\n                                \\n                                &lt;\\/div&gt;\\n                            &lt;\\/div&gt;\\n                        &lt;\\/div&gt;\\n                    \\n                        &lt;div class=\\&quot;iwad-response-section iwad-response-bottom aok-hidden\\&quot; id=\\&quot;iwad-response-2-5\\&quot;&gt;\\n                            &lt;div&gt;\\n                                &lt;div class=\\&quot;iwad-right-utterance\\&quot; id=\\&quot;iwad-right-utterance-2-5\\&quot;&gt; Alexa, starte Einschlafgeräusche. &lt;\\/div&gt;\\n                                &lt;div class=\\&quot;iwad-right-response\\&quot; id=\\&quot;iwad-right-response-2-5\\&quot;&gt; [Spielt Töne] &lt;\\/div&gt;\\n                                &lt;div class=\\&quot;iwad-device-image\\&quot;&gt;\\n                                \\n                                    \\n                                    \\n                                        &lt;img class=\\&quot;iwad-right-response-image\\&quot; alt=\\&quot;Alexa\\&quot; src=\\&quot;https://images-na.ssl-images-amazon.com/images/I/51fF4BCu6qL.jpg\\&quot;/&gt;\\n                                    \\n                                \\n                                &lt;\\/div&gt;\\n                            &lt;\\/div&gt;\\n                        &lt;\\/div&gt;\\n                    \\n                \\n                    \\n                        &lt;div class=\\&quot;iwad-response-section iwad-response-bottom aok-hidden\\&quot; id=\\&quot;iwad-response-3-1\\&quot;&gt;\\n                            &lt;div&gt;\\n                                &lt;div class=\\&quot;iwad-right-utterance\\&quot; id=\\&quot;iwad-right-utterance-3-1\\&quot;&gt; Alexa, was sind die Nachrichten? &lt;\\/div&gt;\\n                                &lt;div class=\\&quot;iwad-right-response\\&quot; id=\\&quot;iwad-right-response-3-1\\&quot;&gt; Hier ist deine tägliche Zusammenfassung. Von der Tagesschau: [Liest die Nachrichten vor] &lt;\\/div&gt;\\n                                &lt;div class=\\&quot;iwad-device-image\\&quot;&gt;\\n                                \\n                                    \\n                                    \\n                                        &lt;img class=\\&quot;iwad-right-response-image\\&quot; alt=\\&quot;Alexa\\&quot; src=\\&quot;https://images-na.ssl-images-amazon.com/images/I/51fF4BCu6qL.jpg\\&quot;/&gt;\\n                                    \\n                                \\n                                &lt;\\/div&gt;\\n                            &lt;\\/div&gt;\\n                        &lt;\\/div&gt;\\n                    \\n                        &lt;div class=\\&quot;iwad-response-section iwad-response-bottom aok-hidden\\&quot; id=\\&quot;iwad-response-3-2\\&quot;&gt;\\n                            &lt;div&gt;\\n                                &lt;div class=\\&quot;iwad-right-utterance\\&quot; id=\\&quot;iwad-right-utterance-3-2\\&quot;&gt; Alexa, brauch ich heute einen Regenschirm? &lt;\\/div&gt;\\n                                &lt;div class=\\&quot;iwad-right-response\\&quot; id=\\&quot;iwad-right-response-3-2\\&quot;&gt; Heute könnte es in Mitte regnen. Es besteht eine 60-prozentige Wahrscheinlichkeit. Du kannst mit ca. einem Millimeter rechnen.  &lt;\\/div&gt;\\n                                &lt;div class=\\&quot;iwad-device-image\\&quot;&gt;\\n                                \\n                                    \\n                                    \\n                                        &lt;img class=\\&quot;iwad-right-response-image\\&quot; alt=\\&quot;Alexa\\&quot; src=\\&quot;https://images-na.ssl-images-amazon.com/images/I/51fF4BCu6qL.jpg\\&quot;/&gt;\\n                                    \\n                                \\n                                &lt;\\/div&gt;\\n                            &lt;\\/div&gt;\\n                        &lt;\\/div&gt;\\n                    \\n                        &lt;div class=\\&quot;iwad-response-section iwad-response-bottom aok-hidden\\&quot; id=\\&quot;iwad-response-3-3\\&quot;&gt;\\n                            &lt;div&gt;\\n                                &lt;div class=\\&quot;iwad-right-utterance\\&quot; id=\\&quot;iwad-right-utterance-3-3\\&quot;&gt; Alexa, wann spielt Bayern als nächstes? &lt;\\/div&gt;\\n                                &lt;div class=\\&quot;iwad-right-response\\&quot; id=\\&quot;iwad-right-response-3-3\\&quot;&gt; Bayern München spielt in der ersten Bundesliga am 14. Oktober um 15:30 Uhr gegen FC Freiburg. &lt;\\/div&gt;\\n                                &lt;div class=\\&quot;iwad-device-image\\&quot;&gt;\\n                                \\n                                    \\n                                    \\n                                        &lt;img class=\\&quot;iwad-right-response-image\\&quot; alt=\\&quot;Alexa\\&quot; src=\\&quot;https://images-na.ssl-images-amazon.com/images/I/51fF4BCu6qL.jpg\\&quot;/&gt;\\n                                    \\n                                \\n                                &lt;\\/div&gt;\\n                            &lt;\\/div&gt;\\n                        &lt;\\/div&gt;\\n                    \\n                        &lt;div class=\\&quot;iwad-response-section iwad-response-bottom aok-hidden\\&quot; id=\\&quot;iwad-response-3-4\\&quot;&gt;\\n                            &lt;div&gt;\\n                                &lt;div class=\\&quot;iwad-right-utterance\\&quot; id=\\&quot;iwad-right-utterance-3-4\\&quot;&gt; Alexa, was sind 68 Grad Fahrenheit in Celsius? &lt;\\/div&gt;\\n                                &lt;div class=\\&quot;iwad-right-response\\&quot; id=\\&quot;iwad-right-response-3-4\\&quot;&gt; 68 Fahrenheit sind 20 Celsius. &lt;\\/div&gt;\\n                                &lt;div class=\\&quot;iwad-device-image\\&quot;&gt;\\n                                \\n                                    \\n                                    \\n                                        &lt;img class=\\&quot;iwad-right-response-image\\&quot; alt=\\&quot;Alexa\\&quot; src=\\&quot;https://images-na.ssl-images-amazon.com/images/I/51fF4BCu6qL.jpg\\&quot;/&gt;\\n                                    \\n                                \\n                                &lt;\\/div&gt;\\n                            &lt;\\/div&gt;\\n                        &lt;\\/div&gt;\\n                    \\n                \\n                    \\n                        &lt;div class=\\&quot;iwad-response-section iwad-response-bottom aok-hidden\\&quot; id=\\&quot;iwad-response-4-1\\&quot;&gt;\\n                            &lt;div&gt;\\n                                &lt;div class=\\&quot;iwad-right-utterance\\&quot; id=\\&quot;iwad-right-utterance-4-1\\&quot;&gt; Alexa, dimme das Licht. &lt;\\/div&gt;\\n                                &lt;div class=\\&quot;iwad-right-response\\&quot; id=\\&quot;iwad-right-response-4-1\\&quot;&gt; Okay. [Dimmt das Licht] &lt;\\/div&gt;\\n                                &lt;div class=\\&quot;iwad-device-image\\&quot;&gt;\\n                                \\n                                    \\n                                    \\n                                        &lt;img class=\\&quot;iwad-right-response-image\\&quot; alt=\\&quot;Alexa\\&quot; src=\\&quot;https://images-na.ssl-images-amazon.com/images/I/51fF4BCu6qL.jpg\\&quot;/&gt;\\n                                    \\n                                \\n                                &lt;\\/div&gt;\\n                            &lt;\\/div&gt;\\n                        &lt;\\/div&gt;\\n                    \\n                        &lt;div class=\\&quot;iwad-response-section iwad-response-bottom aok-hidden\\&quot; id=\\&quot;iwad-response-4-2\\&quot;&gt;\\n                            &lt;div&gt;\\n                                &lt;div class=\\&quot;iwad-right-utterance\\&quot; id=\\&quot;iwad-right-utterance-4-2\\&quot;&gt; Alexa, bestell Katzenfutter. &lt;\\/div&gt;\\n                                &lt;div class=\\&quot;iwad-right-response\\&quot; id=\\&quot;iwad-right-response-4-2\\&quot;&gt; Das Top-Suchergebnis für Katzenfutter ist: [Liest beliebtes Katzenfutter vor] &lt;\\/div&gt;\\n                                &lt;div class=\\&quot;iwad-device-image\\&quot;&gt;\\n                                \\n                                    \\n                                    \\n                                        &lt;img class=\\&quot;iwad-right-response-image\\&quot; alt=\\&quot;Alexa\\&quot; src=\\&quot;https://images-na.ssl-images-amazon.com/images/I/51fF4BCu6qL.jpg\\&quot;/&gt;\\n                                    \\n                                \\n                                &lt;\\/div&gt;\\n                            &lt;\\/div&gt;\\n                        &lt;\\/div&gt;\\n                    \\n                        &lt;div class=\\&quot;iwad-response-section iwad-response-bottom aok-hidden\\&quot; id=\\&quot;iwad-response-4-3\\&quot;&gt;\\n                            &lt;div&gt;\\n                                &lt;div class=\\&quot;iwad-right-utterance\\&quot; id=\\&quot;iwad-right-utterance-4-3\\&quot;&gt; Alexa, füg \u201aMilch\u2018 zu meiner Einkaufsliste hinzu. &lt;\\/div&gt;\\n                                &lt;div class=\\&quot;iwad-right-response\\&quot; id=\\&quot;iwad-right-response-4-3\\&quot;&gt; Ich habe \u201aMilch\u2018 auf deine Einkaufsliste gesetzt. &lt;\\/div&gt;\\n                                &lt;div class=\\&quot;iwad-device-image\\&quot;&gt;\\n                                \\n                                    \\n                                    \\n                                        &lt;img class=\\&quot;iwad-right-response-image\\&quot; alt=\\&quot;Alexa\\&quot; src=\\&quot;https://images-na.ssl-images-amazon.com/images/I/51fF4BCu6qL.jpg\\&quot;/&gt;\\n                                    \\n                                \\n                                &lt;\\/div&gt;\\n                            &lt;\\/div&gt;\\n                        &lt;\\/div&gt;\\n                    \\n                        &lt;div class=\\&quot;iwad-response-section iwad-response-bottom aok-hidden\\&quot; id=\\&quot;iwad-response-4-4\\&quot;&gt;\\n                            &lt;div&gt;\\n                                &lt;div class=\\&quot;iwad-right-utterance\\&quot; id=\\&quot;iwad-right-utterance-4-4\\&quot;&gt; Alexa, stell einen Timer für 5 Minuten. &lt;\\/div&gt;\\n                                &lt;div class=\\&quot;iwad-right-response\\&quot; id=\\&quot;iwad-right-response-4-4\\&quot;&gt; 5 Minuten ab jetzt. &lt;\\/div&gt;\\n                                &lt;div class=\\&quot;iwad-device-image\\&quot;&gt;\\n                                \\n                                    \\n                                    \\n                                        &lt;img class=\\&quot;iwad-right-response-image\\&quot; alt=\\&quot;Alexa\\&quot; src=\\&quot;https://images-na.ssl-images-amazon.com/images/I/51fF4BCu6qL.jpg\\&quot;/&gt;\\n                                    \\n                                \\n                                &lt;\\/div&gt;\\n                            &lt;\\/div&gt;\\n                        &lt;\\/div&gt;\\n                    \\n                        &lt;div class=\\&quot;iwad-response-section iwad-response-bottom aok-hidden\\&quot; id=\\&quot;iwad-response-4-5\\&quot;&gt;\\n                            &lt;div&gt;\\n                                &lt;div class=\\&quot;iwad-right-utterance\\&quot; id=\\&quot;iwad-right-utterance-4-5\\&quot;&gt; Alexa, erinnere mich daran, die Blumen um 18:00 Uhr zu gieβen. &lt;\\/div&gt;\\n                                &lt;div class=\\&quot;iwad-right-response\\&quot; id=\\&quot;iwad-right-response-4-5\\&quot;&gt; Okay, ich erinnere dich um 18:00 Uhr. &lt;\\/div&gt;\\n                                &lt;div class=\\&quot;iwad-device-image\\&quot;&gt;\\n                                \\n                                    \\n                                    \\n                                        &lt;img class=\\&quot;iwad-right-response-image\\&quot; alt=\\&quot;Alexa\\&quot; src=\\&quot;https://images-na.ssl-images-amazon.com/images/I/51fF4BCu6qL.jpg\\&quot;/&gt;\\n                                    \\n                                \\n                                &lt;\\/div&gt;\\n                            &lt;\\/div&gt;\\n                        &lt;\\/div&gt;\\n                    \\n                \\n            &lt;\\/div&gt;\\n        &lt;\\/div&gt;\\n    &lt;\\/div&gt;&quot;,&quot;height&quot;:&quot;550&quot;}" id="alexa-interaction-canned-popover">
            <span id="alexa-interaction-canned-btn" class="a-button alexa-interaction-btn"><span class="a-button-inner"><input class="a-button-input" type="submit" aria-labelledby="alexa-interaction-canned-btn-announce"><span id="alexa-interaction-canned-btn-announce" class="a-button-text a-text-left" aria-hidden="true">
                <img alt="Alexa" src="https://images-na.ssl-images-amazon.com/images/G/03/kindle/mako/features/interact_with_alexa/assets/interact_with_alexa_icon._CB513608174_.png" class="alexa-interaction-image">
                Entdecken Sie, was Alexa alles kann
            </span></span></span>
        </span>
    </div>




                
                
            
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
</div>
<div id="centerCol" class="centerColAlign">        
    
        
        
        
        










    
    
     
         
         
             <div id="atfCenter1_feature_div" class="feature" data-feature-name="atfCenter1">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="atfCenter2_feature_div" class="feature" data-feature-name="atfCenter2">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="title_feature_div" class="feature" data-feature-name="title">
         
     




    

    
    
    
        
            
                
	                
	                
	                	









    <div id="titleSection" class="a-section a-spacing-none">
        <h1 id="title" class="a-size-large a-spacing-none">
            <span id="productTitle" class="a-size-large">
                
                    
                    
                

                
                    
                    
                        Echo Input (Schwarz) &ndash; Bringen Sie Alexa auf Ihren Lautsprecher &ndash; Externer Lautsprecher mit 3,5-mm-Audioeingang oder Bluetooth erforderlich
                    
                

                
                    
                    
                
            </span>

            

            

            
            
            
        </h1>

        <div id="expandTitleToggle" class="a-section a-spacing-none expand aok-hidden"></div>
        
    </div>



    


	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="qpeTitleTag_feature_div" class="feature" data-feature-name="qpeTitleTag">
         
     




    

    
    
    
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="bylineInfo_feature_div" class="feature" data-feature-name="bylineInfo">
         
     




    

    
    
    
        
            
                
	                
	                
	                	





     






    
    
        <div class="a-section a-spacing-none">
            
                
                    von
                
                
            

            
                
                     
                     
                         
                             
                             
                                 <a id="bylineInfo" class="a-link-normal" href="/s/ref=bl_dp_s_web_0?ie=UTF8&amp;search-alias=aps&amp;field-keywords=Amazon">Amazon</a>
                             
                         
                     
                 
            
         </div>
    

    
    



	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="averageCustomerReviews_feature_div" class="feature" data-feature-name="averageCustomerReviews">
         
     




    

    
    
    
        
            
                
	                
	                
	                	




    




<style type="text/css">
    /* 
    * Fix for UDP-1061. Average customer reviews has a small extra line on hover 
    * https://omni-grok.amazon.com/xref/src/appgroup/websiteTemplates/retail/SoftlinesDetailPageAssets/udp-intl-lock/src/legacy.css?indexName=WebsiteTemplates#40
    */
    .noUnderline a:hover { 
        text-decoration: none; 
    }
</style>



    
    
    
    
        

        

        
        
        
        
		
		
		
		
		        
		
		
		
		
		
		
		
		        
        

        <div id="averageCustomerReviews" class="a-spacing-none" data-asin="B07C76F3P2" data-ref="dpx_acr_pop_" >
            
            
            
                
                
                    










        <span class="a-declarative" data-action="acrStarsLink-click-metrics" data-acrStarsLink-click-metrics="{}">
            





    <span id="acrPopover" class="reviewCountTextLinkedHistogram noUnderline" title="4.0 von 5 Sternen">
        <span class="a-declarative" data-action="a-popover" data-a-popover="{&quot;max-width&quot;:&quot;700&quot;,&quot;closeButton&quot;:&quot;false&quot;,&quot;position&quot;:&quot;triggerBottom&quot;,&quot;url&quot;:&quot;/gp/customer-reviews/widgets/average-customer-review/popover/ref=dpx_acr_pop_?contextId=dpx&amp;asin=B07C76F3P2&quot;}">
            <a href="javascript:void(0)" class="a-popover-trigger a-declarative">
                

<i class="a-icon a-icon-star a-star-4"><span class="a-icon-alt">4.0 von 5 Sternen</span></i>
                
            <i class="a-icon a-icon-popover"></i></a>
        </span>
        <span class="a-letter-space"></span>
    </span>


        </span>
        <span class="a-letter-space"></span>
        
        

        

        

        
        
        
        
        
        
        
            
            
                <span class="a-declarative" data-action="acrLink-click-metrics" data-acrLink-click-metrics="{}">
                    <a id="acrCustomerReviewLink" class="a-link-normal" href="#customerReviews">
                        <span id="acrCustomerReviewText" class="a-size-base">23 Kundenrezensionen</span>
                    </a>
                </span>
            
                <script type="text/javascript">
                    P.when('A', 'ready').execute(function(A) {
                        A.declarative('acrLink-click-metrics', 'click', { "allowLinkDefault" : true }, function(event){
                            if(window.ue) {
                                ue.count("acrLinkClickCount", (ue.count("acrLinkClickCount") || 0) + 1);
                            }
                        });
                    });
                </script>
            
            
            
            
        
        
        <script type="text/javascript">
            P.when('A', 'cf').execute(function(A) {
                A.declarative('acrStarsLink-click-metrics', 'click', { "allowLinkDefault" : true },  function(event){
                    if(window.ue) {
                        ue.count("acrStarsLinkWithPopoverClickCount", (ue.count("acrStarsLinkWithPopoverClickCount") || 0) + 1);
                    }
                });
            });
        </script>


                
            
        </div>
    



	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="ask_feature_div" class="feature" data-feature-name="ask">
         
     




    

    
    
    
        
            
                
	                
	                
	                	




  
    <span class="askPipe"> | </span>
  
  <span>
    <a id="askATFLink" class="a-link-normal askATFLink" href="/ask/questions/asin/B07C76F3P2/ref=ask_atf_aqp_dp">
      <span class="a-size-base">
        22 beantwortete Fragen
      </span>
    </a>
  </span>


	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="acBadge_feature_div" class="feature" data-feature-name="acBadge">
         
     




    

    
    
    
        
            
                
	                
	                
	                	



 
    
    
        
        
            <div class="ac-badge-wrapper" cssClass="aok-float-left">
                

                
                
                
                
                <div class="a-popover-preload" id="a-popover-amazons-choice-popover">
                    <span class="a-size-small">
                        Amazon’s Choice empfiehlt top bewertete, sofort lieferbare Produkte zu einem günstigen Preis.
                    </span>
                </div>

                
                <span class="a-declarative" data-action="a-popover" data-a-popover="{&quot;name&quot;:&quot;amazons-choice-popover&quot;,&quot;position&quot;:&quot;triggerTop&quot;}">
                    <span class="a-size-small aok-float-left ac-badge-rectangle">
                        <span class="ac-badge-text-primary">Amazon's </span>
                        <span class="ac-badge-text-secondary">Choice</span>
                    </span>
                    <span class="aok-float-left ac-badge-triangle"></span>
                </span>

                
                
                    <span class="ac-for-text">
                        <span>für "<span class="ac-keyword-link"><a href="/s/?keywords=echo%20input">echo input</a></span>"</span>
                    </span>
                
            </div>
        
    





    
    
    <script type="a-state" data-a-state="{&quot;key&quot;:&quot;acState&quot;}">{"acAsin":"B07C76F3P2"}</script>


	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="zeitgeistBadge_feature_div" class="feature" data-feature-name="zeitgeistBadge">
         
     




    

    
    
    
        
            
                
	                
	                
	                	






	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        













    

    
    
    
        
        
        
        
        
        	
        		
        		
					<hr/>
        		
        	
        
        
        
    
    
    

    



















        
        
    
        
        
        
        










    
    
     
         
         
             <div id="atfCenter3_feature_div" class="feature" data-feature-name="atfCenter3">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="atfCenter4_feature_div" class="feature" data-feature-name="atfCenter4">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="unifiedPrice_feature_div" class="feature" data-feature-name="unifiedPrice">
         
     




    

    
    
    
        
            
                
	                
	                
	                	








  
  
  
  
  
  
  
  
  
  
  
  

  
  

  
  
  
  
  
  
  
  
  
  
  
  

  
    
    
    
      
        
        
        
        
        
          










          <div id="price" class="a-section a-spacing-small">
          <table class="a-lineitem">
            

            
              
              

                
                
                  



                

                
                
                  
                  

                
                
                  
                    
                    
                    
                    
                    
                    

                    
                      












    
    
    
        
    














<tr id="priceblock_ourprice_row">
    <td id="priceblock_ourprice_lbl" class="a-color-secondary a-size-base a-text-right a-nowrap">Preis:</td>
    <td class="a-span12">
        
            
                <span id="priceblock_ourprice" class="a-size-medium a-color-price">EUR 39,99</span>

                    
                        



 
    






    
    




                    

                    
                    
            
            
        

        
            
                
                
                
                    
                        







                        














                        
                        






                        






                    
                
            

            








            





    
    
        






    

            
            









<span id="ourprice_shippingmessage">	
    












































    


	<span id="priceBadging_feature_div" class="feature" data-feature-name="priceBadging">
    	<span id="priceBadging_feature_div" class="feature" data-feature-name="priceBadging"> 
<!-- ms3: DETAIL_PAGE_Price_Prime_Shipping_Free_Returns -->
<i class="a-icon a-icon-prime"><span class="a-icon-alt">Kostenloser Versand für Prime-Mitglieder</span></i> 
<span class="a-size-base a-color-base"></span>
</span>


    </span>


    
        
        
    






</span>
            
             





        
        
    </td>
</tr>



                    

                    
                      
                      




                      
                      



                      
                      





                    
                  
                

                
                
                  
                  
                    
                  
                
                
                

                
                
                    







<tr id="priceblock_snsupsell_row" class="aok-hidden">
    <td colspan="2">
        <span class="a-size-base a-color-price">
            
                
                
            
        </span>
    </td>
</tr>
                

                
                









                
                




    
        
        
            







    


    


    
    
    
        
        
    



  
    
    
        
        
            <tr id="vatMessage">
                <td></td>
                <td>
                    
                        
                        
                            <span class="a-size-base">Alle Preisangaben inkl. deutscher USt. <a href='https://www.amazon.de/gp/help/customer/display.html/ref=hp_left_ust?ie=UTF8&nodeId=201895760' target='_blank'>Weitere Informationen.</a></span>
                        
                    
                </td>
            </tr>
        
    
  



        
    



                
                





                
                







                
                



    
        









    


                
                




    
    


                
                




  
  
    
  








                
                






                
                



              
            

            
            
            




            
                
                
                
            

            
            
              
              
                
              
            
          </table>
          </div>
        
        
      
    
  


	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="customPriceMessaging_feature_div" class="feature" data-feature-name="customPriceMessaging">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        







        
        
    
        
        
        
        







        
        
    
        
        
        
        










    
    
     
         
         
             <div id="pmpux_feature_div" class="feature" data-feature-name="pmpux">
         
     




    

    
    
    
        
            
                
	                
	                
	                	



	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        







        
        
    
        
        
        
        







        
        
    
        
        
        
        










    
    
     
         
         
             <div id="alternativeOfferEligibilityMessaging_feature_div" class="feature" data-feature-name="alternativeOfferEligibilityMessaging">
         
     




    

    
    
    
        
            
                
	                
	                
	                	




       
    
    
    
 	
 		
 		
 		
 		
 		
 		
 		
 		
 		
 		
 	
 	
 	
 		
 		
        
        
 		
 		
 		
 		
 		
		
		
		
        
        
 		
 		
 		
 		
 	

	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        







        
        
    
        
        
        
        










    
    
     
         
         
             <div id="promiseBasedBadge_feature_div" class="feature" data-feature-name="promiseBasedBadge">
         
     




    

    
    
    
        
            
                
	                
	                
	                	

























    
        









    
    
    
    
    



   
    
        
    


    
    
        
        
            
            
        
    
    
        
           
            
            
                



    
    
    
    
    
    
        
            
            
            
            
            
                
                    
                        











    <div id="dynamicDeliveryMessage" class="a-section a-spacing-mini a-spacing-top-mini">
        
            
            
            <div id="ddmDeliveryMessage" class="a-section a-spacing-mini">
                
                    
                        
                        
                            
                                
                                    
                                        GRATIS-Lieferung bis <b>Donnerstag</b>,
                                    
                                    
                                
                                
                                    
                                        
                                            <br>
                                            <span class="a-color-secondary">
                                                wenn Sie innerhalb von <span id="ddmFastestCountdown">12 Stunden und 36 Minuten</span> bestellen.
                                            </span>
                                        
                                        
                                    
                                
                                
                                
                                     <a href='/gp/help/customer/display.html/ref=ddm_ft_dp?ie=UTF8&nodeId=200281140&pop-up=1#' target='AmazonHelp' onclick="return amz_js_PopWin('/gp/help/customer/display.html/ref=ddm_ft_dp?ie=UTF8&nodeId=200281140&pop-up=1#','AmazonHelp','width=550,height=600,resizable=1,scrollbars=1,toolbar=1,status=1');">Siehe Details.</a>
                                
                            
                            
                        
                    
                    
                
            </div>

            
            

            
            
            

            
            
                
                    
                
                
                
            

            
            
            

            

            
            
                
                    
                    
                        
                        


<script type="text/javascript">
P.when("A","jQuery","cf").execute(function(A,$){
    window.registeredDDMCountdown || P.register("DDMCountdownComponent",function() {
        var countdonwHandler;
        return {
            init: function(ddmContext) {
                countdonwHandler || (countdonwHandler = new CountdownHandler(ddmContext));
            },
            start: function(fastSecondsLeftToOrder,cheapSecondsLeftToOrder) {
                countdonwHandler.start(fastSecondsLeftToOrder,cheapSecondsLeftToOrder);
            },
            stop: function() {
                countdonwHandler.stop();
            }
        };
    });
    window.registeredDDMCountdown = true;
    
    function CountdownHandler(ddmContext) {
        var strings = ddmContext.strings;
        var asin = ddmContext.asin;
        var shippingMessageSectionId = ddmContext.shippingMessageSectionId;
        var fastCountdownElementId = ddmContext.fastCountdownElementId;
        var cheapCountdownElementId = ddmContext.cheapCountdownElementId;
        var showAndInCountDown = ddmContext.showAndInCountDown;

        var fastCountdownTimer = null;
        var cheapCountdownTimer = null;

        this.start = function(fastSecondsLeftToOrder,cheapSecondsLeftToOrder) {
            this.stop();
            if (fastCountdownElementId && fastSecondsLeftToOrder > 0) {
                fastCountdownTimer = new CountdownTimer(strings,asin,shippingMessageSectionId,
                        fastCountdownElementId,fastSecondsLeftToOrder,showAndInCountDown);
                fastCountdownTimer.start();
            }
            if (cheapCountdownElementId && cheapSecondsLeftToOrder > 0) {
                cheapCountdownTimer = new CountdownTimer(strings,asin,shippingMessageSectionId,
                        cheapCountdownElementId,cheapSecondsLeftToOrder,showAndInCountDown);
                cheapCountdownTimer.start();
            }
        };
        this.stop = function() {
            if (fastCountdownTimer) {
                fastCountdownTimer.stop();
                fastCountdownTimer = null;
            }
            if (cheapCountdownTimer) {
                cheapCountdownTimer.stop();
                cheapCountdownTimer = null;
            }
        };
    };

    function CountdownTimer(strings, asin, shippingMessageSectionId, countdownElementId, secondsLeft,showAndInCountDown) {
        this.secondsLeft = secondsLeft;
        this.intervalHandle = null;

        this.start = function() {
            var thisObj = this;
            this.intervalHandle = A.interval(function(){
                if (thisObj) {
                    thisObj.updateCountdownText();
                }
            }, 1000);
        };

        this.stop = function() {
            if (this.intervalHandle) {
                window.clearInterval(this.intervalHandle);
            }
        };

        this.updateCountdownText = function() {
            this.secondsLeft --;
            if (this.secondsLeft > 0) {
                var remainMins = Math.floor(this.secondsLeft / 60);
                var minutes = remainMins % 60;
                var hours = Math.floor(remainMins / 60);
                var seconds = this.secondsLeft % 60;
                var hourString   = (hours > 1) ? strings.hours : strings.hour;
                var minuteString = (minutes > 1) ? strings.minutes : strings.minute;
                var secondString = (seconds > 1) ? strings.seconds : strings.second;
                var seperatorString = strings.timeSeperator;
                var andString = strings.and;
                var showTruncatedCountdown = "T2" == "T1";
                var truncatedCountdownInDays = Math.floor(hours / 24);
                var dayString = (truncatedCountdownInDays > 1) ? strings.days : strings.day;

                var countdownText;
                if (showTruncatedCountdown && truncatedCountdownInDays > 0) {
                    countdownText = truncatedCountdownInDays + seperatorString + dayString;
                }
                else if (hours > 0 && minutes > 0) {
                    if (showAndInCountDown) {
                        countdownText = hours + seperatorString + hourString + seperatorString + andString + seperatorString + minutes + seperatorString + minuteString;
                    } else {
                        countdownText = hours + seperatorString + hourString + seperatorString + minutes + seperatorString + minuteString;
                    }
                } else if ( hours > 0 && minutes == 0 ) {
                    countdownText = hours + seperatorString + hourString;
                } else if ( hours == 0 && minutes > 0 ) {
                    countdownText = minutes + seperatorString + minuteString;
                } else {
                    countdownText = seconds + seperatorString + secondString;
                }
                $(countdownElementId).html(countdownText);
            } else {
                this.stop();
                var refreshText = "<a href='/gp/product/"+asin+"'>"+strings.refreshTimeout+"</a>";
                $(shippingMessageSectionId).html(refreshText);
            }
        };
    };
});
</script>


                        <script type="text/javascript">
                            var context = {
                                strings: {
                                    day: "Tag",
                                    days: "Tage",
                                    hour: "Stunde",
                                    hours: "Stunden",
                                    minute: "Minute",
                                    minutes: "Minuten",
                                    second: "Sekunde",
                                    seconds: "Sekunden",
                                    refreshTimeout: "Klicken Sie hier, um das neue voraussichtliche Lieferdatum zu sehen.",
                                    timeSeperator: " ",
                                    and: "und",
                                    serverBusy: "Der Server ist leider gerade nicht verfügbar. Bitte versuchen Sie es später noch einmal."
                                },
                                fastCountdownElementId: "#ddmFastestCountdown",
                                cheapCountdownElementId: null,
                                shippingMessageSectionId: "#ddmDeliveryMessage",
                                asin: "B07C76F3P2",showAndInCountDown: true
                            };
                            P.when("A", "jQuery").execute(function (A, $) {
                                var showVhvFeature = function() {
                                    $("#veryHighValueMessage").removeClass("a-hidden");
                                };
                                var hideVhvFeature = function() {
                                    $("#veryHighValueMessage").addClass("a-hidden");
                                };
                                P.when("DDMCountdownComponent").execute(function (countDownComp) {
                                    countDownComp.init(context);
                                    countDownComp.start(45416, 0);
                                });

                                if (true) {
                                    showVhvFeature();
                                } else {
                                    hideVhvFeature();
                                }
                            });
                        </script>
                    
                
            
        
    </div>


                    
                    
                
            
        
    


            
        
    



    


    
    




	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="atfCenter5_feature_div" class="feature" data-feature-name="atfCenter5">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="atfCenter6_feature_div" class="feature" data-feature-name="atfCenter6">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="availability_feature_div" class="feature" data-feature-name="availability">
         
     




    

    
    
    
        
            
                
	                
	                
	                	

















    
    
    
    
    
        





































<div id="availability" class="a-section a-spacing-none">
    
    
    <span class="a-size-medium a-color-success">
        
            
            Auf Lager.
        
        
    </span>
    
    
    



    
    
    
</div>











  <div class="a-section a-spacing-none">
    

      
        
        
      

    
 </div>








  





    
        
    
    




    


	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="holidayDeliveryMessage_feature_div" class="feature" data-feature-name="holidayDeliveryMessage">
         
     




    

    
    
    
        
            
                
	                
	                
	                	










	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="dynamicDeliveryMessage_feature_div" class="feature" data-feature-name="dynamicDeliveryMessage">
         
     




    

    
    
    
        
            
                
	                
	                
	                	









    
    
        





















    
    


	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="shipsFromSoldBy_feature_div" class="feature" data-feature-name="shipsFromSoldBy">
         
     




    

    
    
    
        
            
                
	                
	                
	                	

























<div id="merchant-info" class="a-section a-spacing-mini">
    


    
    
        




    


    
        
        
    

    
    
    
    
    
    
    
        Verkauf und Versand durch Amazon EU Sarl.
    
    

        
        
        
        
        
        

        <span class="">
            Geschenkverpackung verfügbar.
        </span>

        







        



</div>






	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        







        
        
    
        
        
        
        










    
    
     
         
         
             <div id="amazonDeviceAdditionalAvailabilityMessaging_feature_div" class="feature" data-feature-name="amazonDeviceAdditionalAvailabilityMessaging">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="holidayAvailabilityMessage_feature_div" class="feature" data-feature-name="holidayAvailabilityMessage">
         
     




    

    
    
    
        
            
                
	                
	                
	                	




	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="smileEligibility_feature_div" class="feature" data-feature-name="smileEligibility">
         
     




    

    
    
    
        
            
                
	                
	                
	                	





	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        







        
        
    
        
        
        
        










    
    
     
         
         
             <div id="atfCenter7_feature_div" class="feature" data-feature-name="atfCenter7">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="atfCenter8_feature_div" class="feature" data-feature-name="atfCenter8">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="olp_feature_div" class="feature" data-feature-name="olp">
         
     




    

    
    
    
        
            
                
	                
	                
	                	




    











































    

    

    

    

    

    
        
            <div id="olp-sl-new" class="a-section a-spacing-small a-spacing-top-small">
                
                    <span class="olp-padding-right"><a href="/gp/offer-listing/B07C76F3P2/ref=dp_olp_new?ie=UTF8&amp;condition=new">1&nbsp;neu</a>&nbsp;ab&nbsp;<span class='a-color-price'>EUR 39,99</span></span>
                
				
                
				
                
				
                
            </div>
        
    





	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="twister_feature_div" class="feature" data-feature-name="twister">
         
     




    

    
    
    
        
            
                
	                
	                
	                	








    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
      
    
    
      
    
    
      
    
   
   
    <div id="twisterContainer" class="addTwisterMargin" style="max-width:none">
        
            









        
        <form id="twister" action="/gp/product/handle-buy-box/ref=dp_start-bbf_1_glance" method="post" class="a-section a-spacing-small   " >
            



<span id="twisterNonJsData">
    <input type="hidden" name="ASIN" value="B07H6BXFF5">
    <input type="hidden" name="twisterDimKeys" value="item_form,style_name,color_name">
    <input type="hidden" name="noOfDims" value="3">
    
    
    <input type="hidden" name="" id="dummySubmitButton">
</span>
            
            
            
                
                
                
                
                    
                    
                        
                            
                                
                                    
                                        
                                        
                                        
                                        
                                        
                                            







  
  
  

  <div id="variation_item_form" class="a-section a-spacing-small">
      <div class="a-row">
          
            
            


<label class="a-form-label">
      Geräteausstattung:
</label>
<span class="selection">
    
        Echo Input
    
</span>

          

          
      </div>

      
          





  
  <ul class="a-unordered-list a-nostyle a-button-list a-declarative a-button-toggle-group a-horizontal a-spacing-top-micro swatches swatchesSquare" role="radiogroup" data-action="a-button-group" data-a-button-group="{&quot;name&quot;:&quot;twister_item_form&quot;}">
    

      
      

      
        





  
  

  

  
  

  <li id="item_form_0" title="Wählen Sie Echo Input durch Klicken aus" data-defaultAsin="B07C76F3P2" data-dp-url class="swatchSelect"><span class="a-list-item">
    <div class = "tooltip">
      <span class="a-declarative" data-action="swatchthumb-action" data-swatchthumb-action="{&quot;dimIndex&quot;:0,&quot;dimValueIndex&quot;:0}">
        <span class="a-button a-button-selected a-button-thumbnail a-button-toggle"><span class="a-button-inner"><button class="a-button-text" type="button">

          
            
            
                  
                    





  
  
  <div class="">
    <div class="twisterTextDiv text">
      <span class="a-size-base">Echo Input</span>
    </div>
    
          






	

  
  
  
  
  <div class=" " style="">
  
      
      
          

          
          



      
    
  </div>



 
    
  </div>

                  
            
          

        </button></span></span>
      </span>
    </div>

    

  </span></li>


      
    

      
      

      
        





  
  

  

  
  

  <li id="item_form_1" title="Wählen Sie Echo Input + Sony SRS-XB31 durch Klicken aus" data-defaultAsin="" data-dp-url="/dp/B07L69F8SQ/ref=twister_B07H6BXFF5" class="swatchUnavailable"><span class="a-list-item">
    <div class = "tooltip">
      <span class="a-declarative" data-action="swatchthumb-action" data-swatchthumb-action="{&quot;dimIndex&quot;:0,&quot;dimValueIndex&quot;:1}">
        <span class="a-button a-button-thumbnail a-button-toggle a-button-unavailable"><span class="a-button-inner"><button class="a-button-text" type="button">

          
            
            
                  
                    





  
  
  <div class="">
    <div class="twisterTextDiv text">
      <span class="a-size-base">Echo Input + Sony SRS-XB31</span>
    </div>
    
          






	

  
  
  
  
  <div class=" " style="">
  
      
      
          

          
          



      
    
  </div>



 
    
  </div>

                  
            
          

        </button></span></span>
      </span>
    </div>

    
      <a href="/dp/B07L69F8SQ/ref=twister_B07H6BXFF5" style="height:100%; width:100%"></a>
    

  </span></li>


      
    

      
      

      
        





  
  

  

  
  

  <li id="item_form_2" title="Wählen Sie Echo Input + Ultimate Ears BOOM 3 durch Klicken aus" data-defaultAsin="" data-dp-url="/dp/B07JP437P3/ref=twister_B07H6BXFF5" class="swatchUnavailable"><span class="a-list-item">
    <div class = "tooltip">
      <span class="a-declarative" data-action="swatchthumb-action" data-swatchthumb-action="{&quot;dimIndex&quot;:0,&quot;dimValueIndex&quot;:2}">
        <span class="a-button a-button-thumbnail a-button-toggle a-button-unavailable"><span class="a-button-inner"><button class="a-button-text" type="button">

          
            
            
                  
                    





  
  
  <div class="">
    <div class="twisterTextDiv text">
      <span class="a-size-base">Echo Input + Ultimate Ears BOOM 3</span>
    </div>
    
          






	

  
  
  
  
  <div class=" " style="">
  
      
      
          

          
          



      
    
  </div>



 
    
  </div>

                  
            
          

        </button></span></span>
      </span>
    </div>

    
      <a href="/dp/B07JP437P3/ref=twister_B07H6BXFF5" style="height:100%; width:100%"></a>
    

  </span></li>


      
    

      
      

      
        





  
  

  

  
  

  <li id="item_form_3" title="Wählen Sie Echo Input + Ultimate Ears MEGABOOM 3 durch Klicken aus" data-defaultAsin="" data-dp-url="/dp/B07JQLY69Y/ref=twister_B07H6BXFF5" class="swatchUnavailable"><span class="a-list-item">
    <div class = "tooltip">
      <span class="a-declarative" data-action="swatchthumb-action" data-swatchthumb-action="{&quot;dimIndex&quot;:0,&quot;dimValueIndex&quot;:3}">
        <span class="a-button a-button-thumbnail a-button-toggle a-button-unavailable"><span class="a-button-inner"><button class="a-button-text" type="button">

          
            
            
                  
                    





  
  
  <div class="">
    <div class="twisterTextDiv text">
      <span class="a-size-base">Echo Input + Ultimate Ears MEGABOOM 3</span>
    </div>
    
          






	

  
  
  
  
  <div class=" " style="">
  
      
      
          

          
          



      
    
  </div>



 
    
  </div>

                  
            
          

        </button></span></span>
      </span>
    </div>

    
      <a href="/dp/B07JQLY69Y/ref=twister_B07H6BXFF5" style="height:100%; width:100%"></a>
    

  </span></li>


      
    
  </ul>

      
  </div>


  
  

  
  




                                        
                                        
                                    
                                    
                                
                            
                            
                        
                    
                    
                    
                    
                    
                    
                
            
                
                
                
                
                    
                    
                        
                            
                                
                                    
                                        
                                        
                                        
                                        
                                        
                                            







  
  
  

  <div id="variation_style_name" class="a-section a-spacing-small">
      <div class="a-row">
          
            
            


<label class="a-form-label">
      Stil:
</label>
<span class="selection">
    
        Schwarzes Echo Input
    
</span>

          

          
      </div>

      
          





  
  <ul class="a-unordered-list a-nostyle a-button-list a-declarative a-button-toggle-group a-horizontal a-spacing-top-micro swatches swatchesSquare" role="radiogroup" data-action="a-button-group" data-a-button-group="{&quot;name&quot;:&quot;twister_style_name&quot;}">
    

      
      

      
        





  
  

  

  
  

  <li id="style_name_0" title="Wählen Sie Schwarzes Echo Input durch Klicken aus" data-defaultAsin="B07C76F3P2" data-dp-url class="swatchSelect"><span class="a-list-item">
    <div class = "tooltip">
      <span class="a-declarative" data-action="swatchthumb-action" data-swatchthumb-action="{&quot;dimIndex&quot;:1,&quot;dimValueIndex&quot;:0}">
        <span class="a-button a-button-selected a-button-thumbnail a-button-toggle"><span class="a-button-inner"><button class="a-button-text" type="button">

          
            
            
                  
                    





  
  
  <div class="">
    <div class="twisterTextDiv text">
      <span class="a-size-base">Schwarzes Echo Input</span>
    </div>
    
          






	

  
  
  
  
  <div class=" " style="">
  
      
      
          

          
          



      
    
  </div>



 
    
  </div>

                  
            
          

        </button></span></span>
      </span>
    </div>

    

  </span></li>


      
    

      
      

      
        





  
  

  

  
  

  <li id="style_name_1" title="Wählen Sie Weißes Echo Input durch Klicken aus" data-defaultAsin="" data-dp-url="/dp/B07JY27KSR/ref=twister_B07H6BXFF5" class="swatchUnavailable"><span class="a-list-item">
    <div class = "tooltip">
      <span class="a-declarative" data-action="swatchthumb-action" data-swatchthumb-action="{&quot;dimIndex&quot;:1,&quot;dimValueIndex&quot;:1}">
        <span class="a-button a-button-thumbnail a-button-toggle a-button-unavailable"><span class="a-button-inner"><button class="a-button-text" type="button">

          
            
            
                  
                    





  
  
  <div class="">
    <div class="twisterTextDiv text">
      <span class="a-size-base">Weißes Echo Input</span>
    </div>
    
          






	

  
  
  
  
  <div class=" " style="">
  
      
      
          

          
          



      
    
  </div>



 
    
  </div>

                  
            
          

        </button></span></span>
      </span>
    </div>

    
      <a href="/dp/B07JY27KSR/ref=twister_B07H6BXFF5" style="height:100%; width:100%"></a>
    

  </span></li>


      
    
  </ul>

      
  </div>


  
  

  
  




                                        
                                        
                                    
                                    
                                
                            
                            
                        
                    
                    
                    
                    
                    
                    
                
            
                
                
                
                
                    
                    
                        
                            
                                
                                    
                                        
                                        
                                        
                                        
                                        
                                            







  
  
  

  <div id="variation_color_name" class="a-section a-spacing-small">
      <div class="a-row">
          
            
            


<label class="a-form-label">
      Farbe:
</label>
<span class="selection">
    
        Schwarzes Echo Input
    
</span>

          

          
      </div>

      
          





  
  <ul class="a-unordered-list a-nostyle a-button-list a-declarative a-button-toggle-group a-horizontal a-spacing-top-micro swatches swatchesSquare imageSwatches" role="radiogroup" data-action="a-button-group" data-a-button-group="{&quot;name&quot;:&quot;twister_color_name&quot;}">
    

      
      

      
        





  
  

  

  
  

  <li id="color_name_0" title="Wählen Sie Schwarzes Echo Input durch Klicken aus" data-defaultAsin="B07C76F3P2" data-dp-url class="swatchSelect"><span class="a-list-item">
    <div class = "tooltip">
      <span class="a-declarative" data-action="swatchthumb-action" data-swatchthumb-action="{&quot;dimIndex&quot;:2,&quot;dimValueIndex&quot;:0}">
        <span class="a-button a-button-selected a-button-thumbnail a-button-toggle"><span class="a-button-inner"><button class="a-button-text" type="button">

          
            
                  
                    





  
  
  <span class="xoverlay"></span>
  <div class="">
    <div class="">
      <img src="https://images-na.ssl-images-amazon.com/images/I/31Alxl7qcaL._SS36_.jpg"  alt="Schwarzes Echo Input" style="height:36px; width:36px" class="imgSwatch"/>
    </div>
    
          






	

  
  
  
  
  <div class=" " style="">
  
      
      
          

          
          



      
    
  </div>



 
    
  </div>


                  
            
            
          

        </button></span></span>
      </span>
    </div>

    

  </span></li>


      
    

      
      

      
        





  
  

  

  
  

  <li id="color_name_1" title="Wählen Sie Blau durch Klicken aus" data-defaultAsin="" data-dp-url="/dp/B07L69F8SQ/ref=twister_B07H6BXFF5" class="swatchUnavailable"><span class="a-list-item">
    <div class = "tooltip">
      <span class="a-declarative" data-action="swatchthumb-action" data-swatchthumb-action="{&quot;dimIndex&quot;:2,&quot;dimValueIndex&quot;:1}">
        <span class="a-button a-button-thumbnail a-button-toggle a-button-unavailable"><span class="a-button-inner"><button class="a-button-text" type="button">

          
            
                  
                    





  
  
  <span class="xoverlay"></span>
  <div class="">
    <div class="">
      <img src="https://images-na.ssl-images-amazon.com/images/I/413IEep9qKL._SS36_.jpg"  alt="Blau" style="height:36px; width:36px" class="imgSwatch"/>
    </div>
    
          






	

  
  
  
  
  <div class=" " style="">
  
      
      
          

          
          



      
    
  </div>



 
    
  </div>


                  
            
            
          

        </button></span></span>
      </span>
    </div>

    
      <a href="/dp/B07L69F8SQ/ref=twister_B07H6BXFF5" style="height:100%; width:100%"></a>
    

  </span></li>


      
    

      
      

      
        





  
  

  

  
  

  <li id="color_name_2" title="Wählen Sie Gelb durch Klicken aus" data-defaultAsin="" data-dp-url="/dp/B07L6B4W1P/ref=twister_B07H6BXFF5" class="swatchUnavailable"><span class="a-list-item">
    <div class = "tooltip">
      <span class="a-declarative" data-action="swatchthumb-action" data-swatchthumb-action="{&quot;dimIndex&quot;:2,&quot;dimValueIndex&quot;:2}">
        <span class="a-button a-button-thumbnail a-button-toggle a-button-unavailable"><span class="a-button-inner"><button class="a-button-text" type="button">

          
            
                  
                    





  
  
  <span class="xoverlay"></span>
  <div class="">
    <div class="">
      <img src="https://images-na.ssl-images-amazon.com/images/I/41z5zbHsXIL._SS36_.jpg"  alt="Gelb" style="height:36px; width:36px" class="imgSwatch"/>
    </div>
    
          






	

  
  
  
  
  <div class=" " style="">
  
      
      
          

          
          



      
    
  </div>



 
    
  </div>


                  
            
            
          

        </button></span></span>
      </span>
    </div>

    
      <a href="/dp/B07L6B4W1P/ref=twister_B07H6BXFF5" style="height:100%; width:100%"></a>
    

  </span></li>


      
    

      
      

      
        





  
  

  

  
  

  <li id="color_name_3" title="Wählen Sie Rot durch Klicken aus" data-defaultAsin="" data-dp-url="/dp/B07L6834S4/ref=twister_B07H6BXFF5" class="swatchUnavailable"><span class="a-list-item">
    <div class = "tooltip">
      <span class="a-declarative" data-action="swatchthumb-action" data-swatchthumb-action="{&quot;dimIndex&quot;:2,&quot;dimValueIndex&quot;:3}">
        <span class="a-button a-button-thumbnail a-button-toggle a-button-unavailable"><span class="a-button-inner"><button class="a-button-text" type="button">

          
            
                  
                    





  
  
  <span class="xoverlay"></span>
  <div class="">
    <div class="">
      <img src="https://images-na.ssl-images-amazon.com/images/I/41l1Gx2FKTL._SS36_.jpg"  alt="Rot" style="height:36px; width:36px" class="imgSwatch"/>
    </div>
    
          






	

  
  
  
  
  <div class=" " style="">
  
      
      
          

          
          



      
    
  </div>



 
    
  </div>


                  
            
            
          

        </button></span></span>
      </span>
    </div>

    
      <a href="/dp/B07L6834S4/ref=twister_B07H6BXFF5" style="height:100%; width:100%"></a>
    

  </span></li>


      
    

      
      

      
        





  
  

  

  
  

  <li id="color_name_4" title="Wählen Sie Weiß durch Klicken aus" data-defaultAsin="" data-dp-url="/dp/B07L687G35/ref=twister_B07H6BXFF5" class="swatchUnavailable"><span class="a-list-item">
    <div class = "tooltip">
      <span class="a-declarative" data-action="swatchthumb-action" data-swatchthumb-action="{&quot;dimIndex&quot;:2,&quot;dimValueIndex&quot;:4}">
        <span class="a-button a-button-thumbnail a-button-toggle a-button-unavailable"><span class="a-button-inner"><button class="a-button-text" type="button">

          
            
                  
                    





  
  
  <span class="xoverlay"></span>
  <div class="">
    <div class="">
      <img src="https://images-na.ssl-images-amazon.com/images/I/41fP91u8IXL._SS36_.jpg"  alt="Weiß" style="height:36px; width:36px" class="imgSwatch"/>
    </div>
    
          






	

  
  
  
  
  <div class=" " style="">
  
      
      
          

          
          



      
    
  </div>



 
    
  </div>


                  
            
            
          

        </button></span></span>
      </span>
    </div>

    
      <a href="/dp/B07L687G35/ref=twister_B07H6BXFF5" style="height:100%; width:100%"></a>
    

  </span></li>


      
    

      
      

      
        





  
  

  

  
  

  <li id="color_name_5" title="Wählen Sie Bengalrot durch Klicken aus" data-defaultAsin="" data-dp-url="/dp/B07JQLY69Y/ref=twister_B07H6BXFF5" class="swatchUnavailable"><span class="a-list-item">
    <div class = "tooltip">
      <span class="a-declarative" data-action="swatchthumb-action" data-swatchthumb-action="{&quot;dimIndex&quot;:2,&quot;dimValueIndex&quot;:5}">
        <span class="a-button a-button-thumbnail a-button-toggle a-button-unavailable"><span class="a-button-inner"><button class="a-button-text" type="button">

          
            
                  
                    





  
  
  <span class="xoverlay"></span>
  <div class="">
    <div class="">
      <img src="https://images-na.ssl-images-amazon.com/images/I/41m436k0IwL._SS36_.jpg"  alt="Bengalrot" style="height:36px; width:36px" class="imgSwatch"/>
    </div>
    
          






	

  
  
  
  
  <div class=" " style="">
  
      
      
          

          
          



      
    
  </div>



 
    
  </div>


                  
            
            
          

        </button></span></span>
      </span>
    </div>

    
      <a href="/dp/B07JQLY69Y/ref=twister_B07H6BXFF5" style="height:100%; width:100%"></a>
    

  </span></li>


      
    

      
      

      
        





  
  

  

  
  

  <li id="color_name_6" title="Wählen Sie Blaue Lagune durch Klicken aus" data-defaultAsin="" data-dp-url="/dp/B07JY27KSR/ref=twister_B07H6BXFF5" class="swatchUnavailable"><span class="a-list-item">
    <div class = "tooltip">
      <span class="a-declarative" data-action="swatchthumb-action" data-swatchthumb-action="{&quot;dimIndex&quot;:2,&quot;dimValueIndex&quot;:6}">
        <span class="a-button a-button-thumbnail a-button-toggle a-button-unavailable"><span class="a-button-inner"><button class="a-button-text" type="button">

          
            
                  
                    





  
  
  <span class="xoverlay"></span>
  <div class="">
    <div class="">
      <img src="https://images-na.ssl-images-amazon.com/images/I/41QH%2B7Zs5fL._SS36_.jpg"  alt="Blaue Lagune" style="height:36px; width:36px" class="imgSwatch"/>
    </div>
    
          






	

  
  
  
  
  <div class=" " style="">
  
      
      
          

          
          



      
    
  </div>



 
    
  </div>


                  
            
            
          

        </button></span></span>
      </span>
    </div>

    
      <a href="/dp/B07JY27KSR/ref=twister_B07H6BXFF5" style="height:100%; width:100%"></a>
    

  </span></li>


      
    

      
      

      
        





  
  

  

  
  

  <li id="color_name_7" title="Wählen Sie Dschungelgrün durch Klicken aus" data-defaultAsin="" data-dp-url="/dp/B07JQKJS1V/ref=twister_B07H6BXFF5" class="swatchUnavailable"><span class="a-list-item">
    <div class = "tooltip">
      <span class="a-declarative" data-action="swatchthumb-action" data-swatchthumb-action="{&quot;dimIndex&quot;:2,&quot;dimValueIndex&quot;:7}">
        <span class="a-button a-button-thumbnail a-button-toggle a-button-unavailable"><span class="a-button-inner"><button class="a-button-text" type="button">

          
            
                  
                    





  
  
  <span class="xoverlay"></span>
  <div class="">
    <div class="">
      <img src="https://images-na.ssl-images-amazon.com/images/I/41lijWvJ1AL._SS36_.jpg"  alt="Dschungelgrün" style="height:36px; width:36px" class="imgSwatch"/>
    </div>
    
          






	

  
  
  
  
  <div class=" " style="">
  
      
      
          

          
          



      
    
  </div>



 
    
  </div>


                  
            
            
          

        </button></span></span>
      </span>
    </div>

    
      <a href="/dp/B07JQKJS1V/ref=twister_B07H6BXFF5" style="height:100%; width:100%"></a>
    

  </span></li>


      
    

      
      

      
        





  
  

  

  
  

  <li id="color_name_8" title="Wählen Sie Mitternachtsschwarz durch Klicken aus" data-defaultAsin="" data-dp-url="/dp/B07HSY2RHC/ref=twister_B07H6BXFF5" class="swatchUnavailable"><span class="a-list-item">
    <div class = "tooltip">
      <span class="a-declarative" data-action="swatchthumb-action" data-swatchthumb-action="{&quot;dimIndex&quot;:2,&quot;dimValueIndex&quot;:8}">
        <span class="a-button a-button-thumbnail a-button-toggle a-button-unavailable"><span class="a-button-inner"><button class="a-button-text" type="button">

          
            
                  
                    





  
  
  <span class="xoverlay"></span>
  <div class="">
    <div class="">
      <img src="https://images-na.ssl-images-amazon.com/images/I/41q-w2BAElL._SS36_.jpg"  alt="Mitternachtsschwarz" style="height:36px; width:36px" class="imgSwatch"/>
    </div>
    
          






	

  
  
  
  
  <div class=" " style="">
  
      
      
          

          
          



      
    
  </div>



 
    
  </div>


                  
            
            
          

        </button></span></span>
      </span>
    </div>

    
      <a href="/dp/B07HSY2RHC/ref=twister_B07H6BXFF5" style="height:100%; width:100%"></a>
    

  </span></li>


      
    

      
      

      
        





  
  

  

  
  

  <li id="color_name_9" title="Wählen Sie Ultraviolett durch Klicken aus" data-defaultAsin="" data-dp-url="/dp/B07JP437P3/ref=twister_B07H6BXFF5" class="swatchUnavailable"><span class="a-list-item">
    <div class = "tooltip">
      <span class="a-declarative" data-action="swatchthumb-action" data-swatchthumb-action="{&quot;dimIndex&quot;:2,&quot;dimValueIndex&quot;:9}">
        <span class="a-button a-button-thumbnail a-button-toggle a-button-unavailable"><span class="a-button-inner"><button class="a-button-text" type="button">

          
            
                  
                    





  
  
  <span class="xoverlay"></span>
  <div class="">
    <div class="">
      <img src="https://images-na.ssl-images-amazon.com/images/I/41YsP-e--hL._SS36_.jpg"  alt="Ultraviolett" style="height:36px; width:36px" class="imgSwatch"/>
    </div>
    
          






	

  
  
  
  
  <div class=" " style="">
  
      
      
          

          
          



      
    
  </div>



 
    
  </div>


                  
            
            
          

        </button></span></span>
      </span>
    </div>

    
      <a href="/dp/B07JP437P3/ref=twister_B07H6BXFF5" style="height:100%; width:100%"></a>
    

  </span></li>


      
    

      
      

      
        





  
  

  

  
  

  <li id="color_name_10" title="Wählen Sie Weißes Echo Input durch Klicken aus" data-defaultAsin="" data-dp-url="/dp/B07C7JBTSD/ref=twister_B07H6BXFF5" class="swatchUnavailable"><span class="a-list-item">
    <div class = "tooltip">
      <span class="a-declarative" data-action="swatchthumb-action" data-swatchthumb-action="{&quot;dimIndex&quot;:2,&quot;dimValueIndex&quot;:10}">
        <span class="a-button a-button-thumbnail a-button-toggle a-button-unavailable"><span class="a-button-inner"><button class="a-button-text" type="button">

          
            
                  
                    





  
  
  <span class="xoverlay"></span>
  <div class="">
    <div class="">
      <img src="https://images-na.ssl-images-amazon.com/images/I/31IRaP5qY5L._SS36_.jpg"  alt="Weißes Echo Input" style="height:36px; width:36px" class="imgSwatch"/>
    </div>
    
          






	

  
  
  
  
  <div class=" " style="">
  
      
      
          

          
          



      
    
  </div>



 
    
  </div>


                  
            
            
          

        </button></span></span>
      </span>
    </div>

    
      <a href="/dp/B07C7JBTSD/ref=twister_B07H6BXFF5" style="height:100%; width:100%"></a>
    

  </span></li>


      
    
  </ul>

      
  </div>


  
  

  
  




                                        
                                        
                                    
                                    
                                
                            
                            
                        
                    
                    
                    
                    
                    
                    
                
            
            
            
        </form>
        
    </div>


	                
                
            
        
        
        
        
        
        
        
    
    
    

    






    










    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="alexaInteractionCannedAtfCenter_feature_div" class="feature" data-feature-name="alexaInteractionCannedAtfCenter">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        







        
        
    
        
        
        
        







        
        
    
        
        
        
        










    
    
     
         
         
             <div id="specialOffersInformation_feature_div" class="feature" data-feature-name="specialOffersInformation">
         
     




    

    
    
    
        
            
                
	                
	                
	                	







	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        







        
        
    
        
        
        
        







        
        
    
        
        
        
        










    
    
     
         
         
             <div id="clickToContact_feature_div" class="feature" data-feature-name="clickToContact">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="atfCenter9_feature_div" class="feature" data-feature-name="atfCenter9">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="atfCenter10_feature_div" class="feature" data-feature-name="atfCenter10">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="smartHomeWidget_feature_div" class="feature" data-feature-name="smartHomeWidget">
         
     




    

    
    
    
        
            
                
	                
	                
	                	








	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="featurebullets_feature_div" class="feature" data-feature-name="featurebullets">
         
     




    

    
    
    
        
            
                
	                
	                
	                	



<div id="feature-bullets" class="a-section a-spacing-medium a-spacing-top-small">








		
			
                               <ul class="a-unordered-list a-vertical a-spacing-none">
					
					
						<li><span class="a-list-item"> 
							Echo Input bringt Alexa auf einen externen Lautsprecher über eine Verbindung mit Bluetooth oder einem 3,5-mm-Audiokabel.
							
						</span></li>
					
						<li><span class="a-list-item"> 
							Mit den vier Mikrofonen des Geräts hört Echo Input Sie von der anderen Seite des Raums – sogar wenn Musik läuft.
							
						</span></li>
					
						<li><span class="a-list-item"> 
							Streamen Sie Musik von Amazon Music, Spotify, TuneIn und weiteren.
							
						</span></li>
					
						<li><span class="a-list-item"> 
							Bitten Sie Alexa einfach, einen Song zu spielen, die Nachrichten vorzulesen oder Information über das Wetter oder den Verkehr auf dem Weg zur Arbeit abzurufen.
							
						</span></li>
					
						<li><span class="a-list-item"> 
							Stellen Sie Wecker und Timer, fügen Sie Aufgaben zu Ihrer To-do-Liste hinzu und steuern Sie kompatible Smart Home-Geräte.
							
						</span></li>
					
						<li><span class="a-list-item"> 
							Alexa lernt ständig dazu und erhält neue Skills. Halten Sie Ihre Fitness-Ziele im Auge, spielen Sie Spiele und mehr.
							
						</span></li>
					
						<li><span class="a-list-item"> 
							Durch sein schlankes, kompaktes Design passt das Gerät überall hin.
							
						</span></li>
					
						<li><span class="a-list-item"> 
							Anrufe und Nachrichten über Bluetooth werden nicht unterstützt.
							
						</span></li>
					
				</ul>
				<!--  Loading EDP related metadata -->
                
                 	
               
               
			
			
		

		

		

	
</div>

	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="jumpLinks_feature_div" class="feature" data-feature-name="jumpLinks">
         
     




    

    
    
    
        
            
                
	                
	                
	                	



    <div id="jump-links" class="a-section">
        <span class="a-text-bold">Gehe zu:  </span>
        
            <span class="a-declarative" data-action="jump-links-click" data-jump-links-click="{}">
                <a id="ods-home-jump-link-1" class="a-link-normal" href="#compare">Ger&auml;te vergleichen</a>
            </span>
            
                <span class="jump-links-separator">|</span>
            
        
            <span class="a-declarative" data-action="jump-links-click" data-jump-links-click="{}">
                <a id="ods-home-jump-link-2" class="a-link-normal" href="#tech">Technische Details</a>
            </span>
            
        
    </div>


	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="atfCenter11_feature_div" class="feature" data-feature-name="atfCenter11">
         
     




    

    
    
    
        
        
        
            
                
                    


    
    
    
    
    
    


     
    <div style="color:#000000;font-size:16px;font-weight:bold;padding-top:15px;padding-bottom:8px;">
Lautsprecher erforderlich
</div>

<div style="font-size:16px;padding-left:0px;">

<div style="font-size:16px;padding-bottom:16px;">

Für die Verwendung von Echo Input ist ein externer Lautsprecher erforderlich, der über Bluetooth oder das mitgelieferte 3,5-mm-Audiokabel verbunden werden kann. Sonos-Lautsprecher werden derzeit nicht unterstützt. Eine Kopplung mit WLAN-Lautsprechern wird nicht unterstützt. Wir empfehlen eine Kopplung mit zertifizierten Bluetooth-Lautsprechern. <a target='_blank' href='https://www.amazon.de/l/15602505031'>Nach kompatiblen Lautsprechern suchen</a>.

 </div>
 </div>

<div style="color:#000000;font-size:16px;font-weight:bold;padding-top:15px;padding-bottom:8px;">
Lautsprecher mit Energiesparmodus 
</div>

<div style="font-size:16px;padding-left:0px;">

<div style="font-size:16px;padding-bottom:16px;">
 Lautsprecher, die über ein 3,5-mm-Audiokabel verbunden sind, könnten sich automatisch abschalten, wenn sie über einen längeren Zeitraum nicht verwendet werden. Wir empfehlen, den Energiesparmodus wenn möglich auszuschalten. Folgen Sie dazu den Anleitungen des Herstellers

 </div>
 </div>




                
                
            
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="atfCenter12_feature_div" class="feature" data-feature-name="atfCenter12">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="addOnItem_feature_div" class="feature" data-feature-name="addOnItem">
         
     




    

    
    
    
        
            
                
	                
	                
	                	




	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="atfCenter13_feature_div" class="feature" data-feature-name="atfCenter13">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="atfCenter14_feature_div" class="feature" data-feature-name="atfCenter14">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="andonCord_feature_div" class="feature" data-feature-name="andonCord">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="newerVersion_feature_div" class="feature" data-feature-name="newerVersion">
         
     




    

    
    
    
        
            
                
	                
	                
	                	





	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="whiteGloveMessage_feature_div" class="feature" data-feature-name="whiteGloveMessage">
         
     




    

    
    
    
        
            
                
	                
	                
	                	





	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="productAlert_feature_div" class="feature" data-feature-name="productAlert">
         
     




    

    
    
    
        
        
        
        
        
        

<div id="product-alert-grid_feature_div">


    <!--wlscci--><hr><div align="left"><table border="0" cellpadding="0" cellspacing="0"><tr><td><span class="tiny">M&ouml;chten Sie Ihr Elektro- und Elektronik-Ger&auml;t kostenlos recyceln? (<a href="/gp/help/customer/display.html/ref=amb_link_1?ie=UTF8&nodeId=201152810&pop-up=1&qid=1468857772&pf_rd_m=A3JWKAKR8XB7XF&pf_rd_s=product-alert&pf_rd_r=S7Y7MCSM8BQQZXDKY4RQ&pf_rd_r=S7Y7MCSM8BQQZXDKY4RQ&pf_rd_t=201&pf_rd_p=5edfb1c7-3e80-4266-897c-000245b83335&pf_rd_p=5edfb1c7-3e80-4266-897c-000245b83335&pf_rd_i=B07C76F3P2" onClick="window.open(this.href,null,'width=850,height=750,scrollbars=1'); return false;">Erfahren Sie mehr</a>.)
          <br clear="all"/><br clear="all"/></span></td></tr></table></div>


</div>

        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="productAlert_feature_div" class="feature" data-feature-name="productAlert">
         
     




    

    
    
    
        
            
                
	                
	                
	                	







    












    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="vendorPoweredCoupon_feature_div" class="feature" data-feature-name="vendorPoweredCoupon">
         
     




    

    
    
    
        
            
                
	                
	                
	                	

	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="atfCenter15_feature_div" class="feature" data-feature-name="atfCenter15">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="atfCenter16_feature_div" class="feature" data-feature-name="atfCenter16">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
</div>


</div>

<div id="hqpWrapper" class="centerColAlign">
    
</div>

<script type="text/javascript">
    setCSMReq('af');
    if(typeof addlongPoleTag === 'function'){ 
        addlongPoleTag('af','desktop-html-atf-marker');
    }
    if(window.ue) {
        ue.count("dp_aib_centerCol_height", document.getElementById('centerCol').clientHeight);
    }
</script>

<div id="hover-zoom-end" class="a-section a-spacing-small a-padding-mini"></div>

<div id="bottomRow">
    
        
        
        
        










    
    
     
         
         
             <div id="atfBottom1_feature_div" class="feature" data-feature-name="atfBottom1">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="atfBottom2_feature_div" class="feature" data-feature-name="atfBottom2">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="bundle_feature_div" class="feature" data-feature-name="bundle">
         
     




    

    
    
    
        
            
                
	                
	                
	                	





	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="twisterJsInitializer_feature_div" class="feature" data-feature-name="twisterJsInitializer">
         
     




    

    
    
    
        
            
                
	                
	                
	                	





    
    
    
    
    
    
    


<script type="text/javascript">
P.register('twister-js-init-dpx-data', function() {
    var dataToReturn = {
        "dimensionsDisplayType"  : [
            "swatch","swatch","swatch",
        ],
        "pwEnabledDimensionMap" : {
        	
            "item_form": false,
        
            "style_name": false,
        
            "color_name": false
        
        },
        "isPWBadgeEnabled" : false,
        "isImmersiveExperience" : false,
        "isTabletWeb" : false,
        
        "immersiveBannersPresent" : true,
        "immersivePartialStateMessage" : "Wählen Sie eine dimName, um Preise anzuzeigen.",
        "immersiveFullySelectedStateMessage" : "Die angegebenen Preise gelten für dimName",
        "multiDimensionWeblabEnabled" : false, 
        "dimensionSelectionData" : [{"isSelected":1,"isRequired":0},{"isSelected":1,"isRequired":0},{"isSelected":1,"isRequired":0}],
        "updateDivLists" : {
                "full"    : [{"updateOnHover":0,"divToUpdate":"makoEmergencyFixAtf_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfTop1_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfTop2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"instantOrderUpdate_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfTop3_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfTop4_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"companyCompliancePolicies_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfLeft1_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfLeft2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"thumbs-image","customClientFunction":1,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":1,"divToUpdate":"twister-main-image","customClientFunction":1,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfLeft3_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfLeft4_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"alexaInteractionCannedPpdLeft_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter1_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"title_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"bylineInfo_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"averageCustomerReviews_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ask_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"acBadge_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"zeitgeistBadge_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter3_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter4_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"unifiedPrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"customPriceMessaging_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pmpux_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"alternativeOfferEligibilityMessaging_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"promiseBasedBadge_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter5_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter6_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"availability_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"holidayDeliveryMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dynamicDeliveryMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shipsFromSoldBy_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"amazonDeviceAdditionalAvailabilityMessaging_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"holidayAvailabilityMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"smileEligibility_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter7_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter8_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"olp_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"alexaInteractionCannedAtfCenter_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"specialOffersInformation_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"clickToContact_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter9_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter10_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"smartHomeWidget_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"featurebullets_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":1},{"updateOnHover":0,"divToUpdate":"jumpLinks_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter11_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter12_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addOnItem_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter13_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter14_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"andonCord_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"newerVersion_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"whiteGloveMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"productAlert_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"vendorPoweredCoupon_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter15_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter16_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfRight1_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfRight2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tellAFriendBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"buybox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"buyBoxUpsell_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"accessoryUpsell_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tradeInButton_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfRight3_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfRight4_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"moreBuyingChoices_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":1},{"updateOnHover":0,"divToUpdate":"product-ads-feedback_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfRight5_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfRight6_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfBottom1_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfBottom2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"bundle_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfBottom3_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfBottom4_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"bundleV2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"legal_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"smartHomeBtfHub_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"aplus_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"aplus3p_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ajaxBlockComponents_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"contentGrid_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfContent1_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfContent2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfContent3_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfContent4_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfContent5_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent1_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent3_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent4_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent5_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent6_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent7_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent8_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent9_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent10_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent11_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent12_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent13_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent14_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent15_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent16_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent17_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent18_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent19_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent20_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent21_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent22_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent23_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent24_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent25_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent26_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent27_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent28_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent29_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent30_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent31_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent32_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent33_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent34_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent35_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent36_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent37_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent38_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent39_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent40_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent41_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent42_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent43_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent44_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent45_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent46_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent47_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent48_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent49_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent50_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent51_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent52_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent53_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent54_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent55_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent56_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent57_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent58_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent59_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent60_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent61_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent62_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent63_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent64_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent65_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"makoEmergencyFix_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0}],
                "partial" : [{"updateOnHover":0,"divToUpdate":"thumbs-image","customClientFunction":1,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":1,"divToUpdate":"twister-main-image","customClientFunction":1,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"specialOffersInformation_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tellAFriendBox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"legal_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ajaxBlockComponents_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0}],
                "parent"  : [{"updateOnHover":0,"divToUpdate":"makoEmergencyFixAtf_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfTop1_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfTop2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"instantOrderUpdate_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfTop3_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfTop4_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"companyCompliancePolicies_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfLeft1_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfLeft2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfLeft3_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfLeft4_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"alexaInteractionCannedPpdLeft_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter1_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"title_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"bylineInfo_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"averageCustomerReviews_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"ask_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"acBadge_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"zeitgeistBadge_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter3_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter4_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"unifiedPrice_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"customPriceMessaging_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"pmpux_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"alternativeOfferEligibilityMessaging_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"promiseBasedBadge_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter5_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter6_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"availability_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"holidayDeliveryMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"dynamicDeliveryMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"shipsFromSoldBy_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"amazonDeviceAdditionalAvailabilityMessaging_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"holidayAvailabilityMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"smileEligibility_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter7_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter8_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"olp_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"alexaInteractionCannedAtfCenter_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"clickToContact_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter9_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter10_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"smartHomeWidget_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"featurebullets_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":1},{"updateOnHover":0,"divToUpdate":"jumpLinks_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter11_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter12_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"addOnItem_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter13_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter14_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"andonCord_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"newerVersion_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"whiteGloveMessage_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"productAlert_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"vendorPoweredCoupon_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter15_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfCenter16_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfRight1_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfRight2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"buybox_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"buyBoxUpsell_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"accessoryUpsell_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"tradeInButton_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfRight3_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfRight4_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"moreBuyingChoices_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":1},{"updateOnHover":0,"divToUpdate":"product-ads-feedback_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfRight5_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfRight6_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfBottom1_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfBottom2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"bundle_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfBottom3_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfBottom4_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"bundleV2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"smartHomeBtfHub_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"aplus_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"aplus3p_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"contentGrid_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfContent1_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfContent2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfContent3_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfContent4_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"atfContent5_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent1_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent2_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent3_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent4_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent5_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent6_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent7_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent8_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent9_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent10_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent11_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent12_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent13_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent14_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent15_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent16_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent17_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent18_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent19_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent20_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent21_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent22_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent23_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent24_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent25_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent26_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent27_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent28_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent29_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent30_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent31_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent32_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent33_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent34_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent35_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent36_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent37_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent38_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent39_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent40_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent41_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent42_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent43_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent44_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent45_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent46_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent47_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent48_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent49_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent50_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent51_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent52_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent53_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent54_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent55_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent56_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent57_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent58_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent59_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent60_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent61_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent62_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent63_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent64_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"btfContent65_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0},{"updateOnHover":0,"divToUpdate":"makoEmergencyFix_feature_div","customClientFunction":0,"isPrefetchable":1,"loadingBar":0}],
                "master"  : []
        },
        "dpEnvironment" : "hardlines",   
        "ajaxUrlParams" : "&productTypeDefinition=DIGITAL_DEVICE_3&productGroupId=amazon_home_display_on_website&parentAsin=B07H6BXFF5&isPrime=1&isOneClickEnabled=0&originalHttpReferer=https%3A%2F%2Fwww.amazon.de%2F",
        "isImmersiveViewEnabled" : false,
        "isImmersiveViewEnabledOnDim" : [
                   false,false,false,
                   ],
        "isSlotsEnabled" : [
                            false,false,false,
                            ],
        "maxSwatchesForImmersiveView"  : [0,0,0,],
        "dimensionsDisplaySubType"  : ["TEXT","TEXT","IMAGE",],
        "singletonDimensionKeys" : [],
        "twisterUpdateURLAppend" : {
            
        },
        "displayTypeProperties"  : [
             
                 
                 
                 {},
             
                 
                 
                 {},
             
                 
                 
                 {}
             
             ],
            "shouldUseDPXTwisterData" : 1,
            "currentAsin" : "B07C76F3P2",
            "parentAsin" : "B07H6BXFF5",
            "dimensionToAsinMap" : {"0_0_0":"B07C76F3P2","1_1_4":"B07L6B6QHN","1_0_3":"B07L5YQTL4","1_1_2":"B07L68MWQD","1_1_3":"B07L6834S4","1_0_4":"B07L687G35","1_0_1":"B07L69F8SQ","1_0_2":"B07L6B4W1P","1_1_1":"B07L681HBZ","3_0_5":"B07JQLY69Y","3_0_6":"B07JP459WK","3_1_5":"B07JQNC71D","3_0_9":"B07JP45LBX","3_1_8":"B07HSP89NW","3_1_9":"B07JQNFYG6","3_0_7":"B07JY2MWHB","3_1_6":"B07JQNBZH7","3_0_8":"B07H84RCZ8","3_1_7":"B07JQM7BY5","0_1_10":"B07C7JBTSD","2_1_7":"B07JQKJS1V","2_0_8":"B07H84Y342","2_0_9":"B07JP437P3","2_1_8":"B07HSY2RHC","2_1_9":"B07JQKJS27","2_0_5":"B07JP45LC1","2_1_5":"B07JQLY6BC","2_0_6":"B07JQNBZG3","2_1_6":"B07JY27KSR","2_0_7":"B07JQKHP6W"},
            "variationValues" : {"item_form":["Echo Input","Echo Input + Sony SRS-XB31","Echo Input + Ultimate Ears BOOM 3","Echo Input + Ultimate Ears MEGABOOM 3"],"color_name":["Schwarzes Echo Input","Blau","Gelb","Rot","Weiß","Bengalrot","Blaue Lagune","Dschungelgrün","Mitternachtsschwarz","Ultraviolett","Weißes Echo Input"],"style_name":["Schwarzes Echo Input","Weißes Echo Input"]},
            "asinVariationValues" : {"B07C7JBTSD":{"ASIN":"B07C7JBTSD","item_form":"0","color_name":"10","style_name":"1"},"B07JY27KSR":{"ASIN":"B07JY27KSR","item_form":"2","color_name":"6","style_name":"1"},"B07JQKHP6W":{"ASIN":"B07JQKHP6W","item_form":"2","color_name":"7","style_name":"0"},"B07L5YQTL4":{"ASIN":"B07L5YQTL4","item_form":"1","color_name":"3","style_name":"0"},"B07JY2MWHB":{"ASIN":"B07JY2MWHB","item_form":"3","color_name":"7","style_name":"0"},"B07L6B4W1P":{"ASIN":"B07L6B4W1P","item_form":"1","color_name":"2","style_name":"0"},"B07HSP89NW":{"ASIN":"B07HSP89NW","item_form":"3","color_name":"8","style_name":"1"},"B07L6B6QHN":{"ASIN":"B07L6B6QHN","item_form":"1","color_name":"4","style_name":"1"},"B07L69F8SQ":{"ASIN":"B07L69F8SQ","item_form":"1","color_name":"1","style_name":"0"},"B07JQNC71D":{"ASIN":"B07JQNC71D","item_form":"3","color_name":"5","style_name":"1"},"B07JQNBZH7":{"ASIN":"B07JQNBZH7","item_form":"3","color_name":"6","style_name":"1"},"B07C76F3P2":{"ASIN":"B07C76F3P2","item_form":"0","color_name":"0","style_name":"0"},"B07JP459WK":{"ASIN":"B07JP459WK","item_form":"3","color_name":"6","style_name":"0"},"B07L6834S4":{"ASIN":"B07L6834S4","item_form":"1","color_name":"3","style_name":"1"},"B07H84RCZ8":{"ASIN":"B07H84RCZ8","item_form":"3","color_name":"8","style_name":"0"},"B07JP45LC1":{"ASIN":"B07JP45LC1","item_form":"2","color_name":"5","style_name":"0"},"B07L681HBZ":{"ASIN":"B07L681HBZ","item_form":"1","color_name":"1","style_name":"1"},"B07L687G35":{"ASIN":"B07L687G35","item_form":"1","color_name":"4","style_name":"0"},"B07HSY2RHC":{"ASIN":"B07HSY2RHC","item_form":"2","color_name":"8","style_name":"1"},"B07JQM7BY5":{"ASIN":"B07JQM7BY5","item_form":"3","color_name":"7","style_name":"1"},"B07JP437P3":{"ASIN":"B07JP437P3","item_form":"2","color_name":"9","style_name":"0"},"B07JQKJS1V":{"ASIN":"B07JQKJS1V","item_form":"2","color_name":"7","style_name":"1"},"B07JQKJS27":{"ASIN":"B07JQKJS27","item_form":"2","color_name":"9","style_name":"1"},"B07H84Y342":{"ASIN":"B07H84Y342","item_form":"2","color_name":"8","style_name":"0"},"B07JQNFYG6":{"ASIN":"B07JQNFYG6","item_form":"3","color_name":"9","style_name":"1"},"B07JQNBZG3":{"ASIN":"B07JQNBZG3","item_form":"2","color_name":"6","style_name":"0"},"B07JQLY6BC":{"ASIN":"B07JQLY6BC","item_form":"2","color_name":"5","style_name":"1"},"B07JP45LBX":{"ASIN":"B07JP45LBX","item_form":"3","color_name":"9","style_name":"0"},"B07JQLY69Y":{"ASIN":"B07JQLY69Y","item_form":"3","color_name":"5","style_name":"0"},"B07L68MWQD":{"ASIN":"B07L68MWQD","item_form":"1","color_name":"2","style_name":"1"}},
            "dimensionValuesData" : [["Echo Input","Echo Input + Sony SRS-XB31","Echo Input + Ultimate Ears BOOM 3","Echo Input + Ultimate Ears MEGABOOM 3"],["Schwarzes Echo Input","Weißes Echo Input"],["Schwarzes Echo Input","Blau","Gelb","Rot","Weiß","Bengalrot","Blaue Lagune","Dschungelgrün","Mitternachtsschwarz","Ultraviolett","Weißes Echo Input"]],
            "asinToDimensionIndexMap" : {"B07C7JBTSD":[0,1,10],"B07JY27KSR":[2,1,6],"B07JQKHP6W":[2,0,7],"B07L5YQTL4":[1,0,3],"B07JY2MWHB":[3,0,7],"B07L6B4W1P":[1,0,2],"B07HSP89NW":[3,1,8],"B07L6B6QHN":[1,1,4],"B07L69F8SQ":[1,0,1],"B07JQNC71D":[3,1,5],"B07JQNBZH7":[3,1,6],"B07C76F3P2":[0,0,0],"B07JP459WK":[3,0,6],"B07L6834S4":[1,1,3],"B07H84RCZ8":[3,0,8],"B07JP45LC1":[2,0,5],"B07L681HBZ":[1,1,1],"B07L687G35":[1,0,4],"B07HSY2RHC":[2,1,8],"B07JQM7BY5":[3,1,7],"B07JP437P3":[2,0,9],"B07JQKJS1V":[2,1,7],"B07JQKJS27":[2,1,9],"B07H84Y342":[2,0,8],"B07JQNFYG6":[3,1,9],"B07JQNBZG3":[2,0,6],"B07JQLY6BC":[2,1,5],"B07JP45LBX":[3,0,9],"B07JQLY69Y":[3,0,5],"B07L68MWQD":[1,1,2]},
            "selectedVariationValues" : {"item_form":0,"color_name":0,"style_name":0},
            "reactId" : "0_0_0",
            "currentDimensionCombinationId" : "0_0_0",                
            "deletedLandingAsinInfo" : {"dimValues":["Please Select","Please Select","Please Select"],"asin":"B07C76F3P2"},            
            "num_total_variations" : 30,
            "dimensions" : ["item_form","style_name","color_name"],
            "unselectedDimCount" : 0,
            "selected_variations" : {"item_form":"Echo Input","color_name":"Schwarzes Echo Input","style_name":"Schwarzes Echo Input"},
            "dimensionValuesDisplayData" : {"B07C7JBTSD":["Echo Input","Weißes Echo Input","Weißes Echo Input"],"B07JY27KSR":["Echo Input + Ultimate Ears BOOM 3","Weißes Echo Input","Blaue Lagune"],"B07JQKHP6W":["Echo Input + Ultimate Ears BOOM 3","Schwarzes Echo Input","Dschungelgrün"],"B07L5YQTL4":["Echo Input + Sony SRS-XB31","Schwarzes Echo Input","Rot"],"B07JY2MWHB":["Echo Input + Ultimate Ears MEGABOOM 3","Schwarzes Echo Input","Dschungelgrün"],"B07L6B4W1P":["Echo Input + Sony SRS-XB31","Schwarzes Echo Input","Gelb"],"B07HSP89NW":["Echo Input + Ultimate Ears MEGABOOM 3","Weißes Echo Input","Mitternachtsschwarz"],"B07L6B6QHN":["Echo Input + Sony SRS-XB31","Weißes Echo Input","Weiß"],"B07L69F8SQ":["Echo Input + Sony SRS-XB31","Schwarzes Echo Input","Blau"],"B07JQNC71D":["Echo Input + Ultimate Ears MEGABOOM 3","Weißes Echo Input","Bengalrot"],"B07JQNBZH7":["Echo Input + Ultimate Ears MEGABOOM 3","Weißes Echo Input","Blaue Lagune"],"B07C76F3P2":["Echo Input","Schwarzes Echo Input","Schwarzes Echo Input"],"B07JP459WK":["Echo Input + Ultimate Ears MEGABOOM 3","Schwarzes Echo Input","Blaue Lagune"],"B07L6834S4":["Echo Input + Sony SRS-XB31","Weißes Echo Input","Rot"],"B07H84RCZ8":["Echo Input + Ultimate Ears MEGABOOM 3","Schwarzes Echo Input","Mitternachtsschwarz"],"B07JP45LC1":["Echo Input + Ultimate Ears BOOM 3","Schwarzes Echo Input","Bengalrot"],"B07L681HBZ":["Echo Input + Sony SRS-XB31","Weißes Echo Input","Blau"],"B07L687G35":["Echo Input + Sony SRS-XB31","Schwarzes Echo Input","Weiß"],"B07HSY2RHC":["Echo Input + Ultimate Ears BOOM 3","Weißes Echo Input","Mitternachtsschwarz"],"B07JQM7BY5":["Echo Input + Ultimate Ears MEGABOOM 3","Weißes Echo Input","Dschungelgrün"],"B07JP437P3":["Echo Input + Ultimate Ears BOOM 3","Schwarzes Echo Input","Ultraviolett"],"B07JQKJS1V":["Echo Input + Ultimate Ears BOOM 3","Weißes Echo Input","Dschungelgrün"],"B07JQKJS27":["Echo Input + Ultimate Ears BOOM 3","Weißes Echo Input","Ultraviolett"],"B07H84Y342":["Echo Input + Ultimate Ears BOOM 3","Schwarzes Echo Input","Mitternachtsschwarz"],"B07JQNFYG6":["Echo Input + Ultimate Ears MEGABOOM 3","Weißes Echo Input","Ultraviolett"],"B07JQNBZG3":["Echo Input + Ultimate Ears BOOM 3","Schwarzes Echo Input","Blaue Lagune"],"B07JQLY6BC":["Echo Input + Ultimate Ears BOOM 3","Weißes Echo Input","Bengalrot"],"B07JP45LBX":["Echo Input + Ultimate Ears MEGABOOM 3","Schwarzes Echo Input","Ultraviolett"],"B07JQLY69Y":["Echo Input + Ultimate Ears MEGABOOM 3","Schwarzes Echo Input","Bengalrot"],"B07L68MWQD":["Echo Input + Sony SRS-XB31","Weißes Echo Input","Gelb"]},
            "prioritizeReqPrefetch" : 0,
            "num_variation_dimensions" : 3,  
            "num_total_variations" : 30,   
            "dimensionsDisplay" : ["Geräteausstattung","Stil","Farbe"], 
            "variationDisplayLabels" : {"item_form":"Geräteausstattung","color_name":"Farbe","style_name":"Stil"},  
            "dimensionHierarchyData" : [0,0,0], 
            "topHierarchicalDimensionIndex" : {}, 
            "hierarchicalPivoting" : false,
            "isIconPresentForDimensionValue" : [[0,0,0,0], [0,0], [0,0,0,0,0,0,0,0,0,0,0]]
    };
    return dataToReturn;
});
</script>


	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="atfBottom3_feature_div" class="feature" data-feature-name="atfBottom3">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="atfBottom4_feature_div" class="feature" data-feature-name="atfBottom4">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
</div>









<!-- MarkAF -->

    





        
        
    




 







  





    








        




















<script>
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/61-DYH-HbzL.js?AUIClients/AmazonDevicesDetailPageLegacyAssets');
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('atf').execute(function(){
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/31Sj9QMpkcL.js?AUIClients/TwisterCoreAsset');
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/21Lsm2N8W9L.js?AUIClients/DetailPageTwisterViewAsset');
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/71Iy7B9-NlL.js?AUIClients/DetailPageTwisterAssets');
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/316USUizNLL.js?AUIClients/PageRefreshAsset');
});
</script>


<script language="JavaScript">
    window.isTwisterAUI = 1;
    window.DetailPage ={};
    window.gIsNewTwister = true;
    window.DetailPage.useTwisterJsInitFromDPXPartially = 1;
    P.register('twister-js-init-mason-data', function() {
       var dataToReturn = {"printConsoleLogs":0,"hoverMS":0,"dimensions":[],"prioritizeReqPrefetch":0,"prefetchRelatedAttrs":"{\\"landingPrefetchState\\":\\"TRIGGER_ON_INTERACTION\\",\\"prefetchOtherReqDimensions\\":0,\\"performLandingAsinPrefetch\\":0,\\"performParentPrefetch\\":0,\\"performPrefetches\\":1,\\"performPartialPrefetch\\":0}","current_asin":"B07C76F3P2","prefetchCount":0,"newPrefetchWeblab":"","isProductizationEnabled":1,"productGroupID":"amazon_home_display_on_website","displayConfigStylesData":{"vodd":{"selected":"voddSelect","invalid":"voddUnavailable","available":"voddAvailable"},"etdd":{"selected":"selected","invalid":"invalid","available":"available"},"dropdown":{"hidden":"dropdownHidden","selected":"dropdownSelect","invalid":"dropdownUnavailable","available":"dropdownAvailable"},"swatch":{"selected":"swatchSelect","invalid":"swatchUnavailable","available":"swatchAvailable"},"singleton":{"selected":"singletonSelect","invalid":"singletonSelect","available":"singletonSelect"}},"isConsolesOrAccessories":0,"view":"glance","twisterAccessibilityCurrentSelection":"Your current selection is : ","isLoggingEnabled":0,"useMS":0,"dimToAsinMapData":{},"selected_variation_values":{},"unselectedDimCount":null,"loadingBarHtml2":"<table border=\\"0\\" width=\\"100%\\"> <tr>   <td align=\\"center\\" style=\\"font-family: Tahoma, Arial, Helvetica, sans-serif;font-size:12px;\\">Daten werden geladen...</td></tr> <tr> <td align=\\"center\\"><img src=\\"https://images-eu.ssl-images-amazon.com/images/G/03/x-locale/communities/tags/snake._CB192234769_.gif\\" style=\\"margin-left:-8px;\\" /></td>  </tr></table>","measurement":{"cf":{"longPollImageTag":null,"count":2,"marker":"twister-cf-marker_feature_div","longPollHtmlTag":null},"atf":{"count":2,"marker":"twister-atf-marker_feature_div"}},"selected_variations":{},"jqupgrade":0,"num_variation_dimensions":0,"ajaxTimeout":20000,"prefetchFixWeblab":1,"dimensionValuesDisplayData":{},"hidePopover":1,"disableJsInteractions":0,"parent_asin":"B07H6BXFF5","isViewProductizationEnabled":1,"rps":0,"variation_values":{},"deviceType":"web","keysToPopulateDetailPageStateController":["current_asin","parent_asin","productGroupID","storeID","unselectedDimCount","currentDimCombID","reactId","dimensionSelectionData","num_total_variations","num_variation_dimensions","rps","view","selected_variations","variation_values","selected_variation_values","asin_variation_values"],"num_total_variations":0,"showDimSecondUnavailablePopover":0,"twisterUpdateURLInfo":{"immutableURLPrefix":"/gp/twister/ajaxv2?sid=262-9898842-9713804&ptd=DIGITAL_DEVICE_3&sCac=1&twisterView=glance&pgid=amazon_home_display_on_website&rid=S7Y7MCSM8BQQZXDKY4RQ&isP=1&dStr=item_form%2Cstyle_name%2Ccolor_name&auiAjax=1&json=1&dpxAjaxFlag=1&isUDPFlag=1&ee=2&originalHttpReferer=https%3A%2F%2Fwww.amazon.de%2F&parentAsin=B07H6BXFF5&enPre=1&dcm=1&storeID=amazon-home","immutableParams":{"sid":"262-9898842-9713804","ptd":"DIGITAL_DEVICE_3","json":"1","dpxAjaxFlag":"1","sCac":"1","isUDPFlag":"1","twisterView":"glance","ee":"2","pgid":"amazon_home_display_on_website","rid":"S7Y7MCSM8BQQZXDKY4RQ","originalHttpReferer":"https%3A%2F%2Fwww.amazon.de%2F","parentAsin":"B07H6BXFF5","enPre":"1","isP":"1","dcm":"1","dStr":"item_form%2Cstyle_name%2Ccolor_name","storeID":"amazon-home","auiAjax":"1"},"mutableParams":{}},"variationDisplayLabels":{},"productTypeName":"DIGITAL_DEVICE_3","twisterInitPrefetchMode":0,"unavailablePopOverStringValue":"in der Auswahl nicht verfügbar","dimensionSelectionData":[],"dimensionsDisplayType":[],"dimensionsDisplay":[],"dimensionValuesData":[],"reactId":"","use-early-twister-init":1,"deletedLandingAsinInfo":{},"isTablet":0,"asin_variation_values":{},"contextMetaData":{"parent":{"mTypeSpecificURLParams":{},"elementList":[{"isPrefetchable":0,"divToUpdate":"twister-atf-marker_feature_div"},{"isPrefetchable":0,"divToUpdate":"twister-cf-marker_feature_div"},{"divToUpdate":"andon-cord-pulling_feature_div"},{"divToUpdate":"dvd-rental-badge_feature_div"},{"divToUpdate":"product-alert-grid_feature_div"},{"divToUpdate":"hero-quick-promo-grid_feature_div"},{"divToUpdate":"qpe-title-tag_feature_div"},{"divToUpdate":"btf-center-1_feature_div"},{"divToUpdate":"btf-center-2_feature_div"},{"divToUpdate":"btf-center-3_feature_div"},{"divToUpdate":"btf-center-4_feature_div"},{"divToUpdate":"btf-center-5_feature_div"},{"divToUpdate":"center-12_feature_div"},{"divToUpdate":"center-12-0_feature_div"},{"divToUpdate":"center-12-1_feature_div"},{"divToUpdate":"center-13_feature_div"},{"divToUpdate":"center-13-0_feature_div"},{"divToUpdate":"center-13-1_feature_div"},{"divToUpdate":"center-14_feature_div"},{"divToUpdate":"center-14-0_feature_div"},{"divToUpdate":"center-14-1_feature_div"},{"divToUpdate":"center-15_feature_div"},{"divToUpdate":"center-15-0_feature_div"},{"divToUpdate":"center-15-1_feature_div"},{"divToUpdate":"center-16_feature_div"},{"divToUpdate":"center-16-0_feature_div"},{"divToUpdate":"center-16-1_feature_div"},{"divToUpdate":"dpx-btf-bundle_feature_div"},{"divToUpdate":"btf-center-6_feature_div"},{"divToUpdate":"btf-center-7_feature_div"},{"divToUpdate":"btf-center-8_feature_div"},{"divToUpdate":"btf-center-9_feature_div"},{"divToUpdate":"btf-center-10_feature_div"},{"divToUpdate":"btf-content-1_feature_div"},{"divToUpdate":"btf-content-2_feature_div"},{"divToUpdate":"btf-content-3_feature_div"},{"divToUpdate":"btf-content-4_feature_div"},{"divToUpdate":"btf-content-5_feature_div"},{"divToUpdate":"btf-content-6_feature_div"},{"divToUpdate":"btf-content-7_feature_div"},{"divToUpdate":"btf-content-8_feature_div"},{"divToUpdate":"btf-content-9_feature_div"},{"divToUpdate":"btf-content-10_feature_div"},{"divToUpdate":"btf-content-11_feature_div"},{"divToUpdate":"btf-content-12_feature_div"},{"divToUpdate":"btf-content-13_feature_div"},{"divToUpdate":"btf-content-14_feature_div"},{"divToUpdate":"btf-content-15_feature_div"},{"divToUpdate":"btf-content-16_feature_div"},{"divToUpdate":"btf-content-17_feature_div"},{"divToUpdate":"btf-content-18_feature_div"},{"divToUpdate":"btf-content-19_feature_div"},{"divToUpdate":"btf-content-20_feature_div"},{"divToUpdate":"btf-content-21_feature_div"},{"divToUpdate":"btf-content-22_feature_div"},{"divToUpdate":"btf-content-23_feature_div"},{"divToUpdate":"btf-content-24_feature_div"},{"divToUpdate":"btf-content-25_feature_div"},{"divToUpdate":"btf-center-11_feature_div"},{"divToUpdate":"btf-center-12_feature_div"},{"divToUpdate":"btf-center-13_feature_div"},{"divToUpdate":"btf-center-14_feature_div"},{"divToUpdate":"btf-center-15_feature_div"},{"divToUpdate":"btf-content-26_feature_div"},{"divToUpdate":"btf-content-27_feature_div"},{"divToUpdate":"btf-content-28_feature_div"},{"divToUpdate":"btf-content-29_feature_div"},{"divToUpdate":"btf-content-30_feature_div"},{"divToUpdate":"btf-content-31_feature_div"},{"divToUpdate":"btf-content-32_feature_div"},{"divToUpdate":"btf-content-33_feature_div"},{"divToUpdate":"btf-content-34_feature_div"},{"divToUpdate":"btf-content-35_feature_div"},{"divToUpdate":"btf-content-36_feature_div"},{"divToUpdate":"btf-content-37_feature_div"},{"divToUpdate":"btf-content-38_feature_div"},{"divToUpdate":"btf-content-39_feature_div"},{"divToUpdate":"btf-content-40_feature_div"},{"divToUpdate":"btf-content-41_feature_div"},{"divToUpdate":"btf-content-42_feature_div"},{"divToUpdate":"btf-content-43_feature_div"},{"divToUpdate":"btf-content-44_feature_div"},{"divToUpdate":"btf-content-45_feature_div"},{"divToUpdate":"btf-content-46_feature_div"},{"divToUpdate":"btf-content-47_feature_div"},{"divToUpdate":"btf-content-48_feature_div"},{"divToUpdate":"btf-content-49_feature_div"},{"divToUpdate":"btf-content-50_feature_div"},{"divToUpdate":"btf-center-16_feature_div"},{"divToUpdate":"btf-center-17_feature_div"},{"divToUpdate":"btf-center-18_feature_div"},{"divToUpdate":"btf-center-19_feature_div"},{"divToUpdate":"btf-center-20_feature_div"},{"divToUpdate":"btf-center-21_feature_div"},{"divToUpdate":"btf-center-22_feature_div"},{"divToUpdate":"btf-center-23_feature_div"},{"divToUpdate":"btf-center-24_feature_div"},{"divToUpdate":"btf-center-25_feature_div"},{"divToUpdate":"btf-content-51_feature_div"},{"divToUpdate":"btf-content-52_feature_div"},{"divToUpdate":"btf-content-53_feature_div"},{"divToUpdate":"btf-content-54_feature_div"},{"divToUpdate":"btf-content-55_feature_div"},{"divToUpdate":"btf-content-56_feature_div"},{"divToUpdate":"btf-content-57_feature_div"},{"divToUpdate":"btf-content-58_feature_div"},{"divToUpdate":"btf-content-59_feature_div"},{"divToUpdate":"btf-content-60_feature_div"},{"divToUpdate":"btf-content-61_feature_div"},{"divToUpdate":"btf-content-62_feature_div"},{"divToUpdate":"btf-content-63_feature_div"},{"divToUpdate":"btf-content-64_feature_div"},{"divToUpdate":"btf-content-65_feature_div"},{"divToUpdate":"center-17_feature_div"},{"divToUpdate":"center-17-0_feature_div"},{"divToUpdate":"center-17-1_feature_div"},{"divToUpdate":"center-17-2_feature_div"},{"divToUpdate":"center-17-3_feature_div"},{"divToUpdate":"center-18_feature_div"},{"divToUpdate":"center-18-0_feature_div"},{"divToUpdate":"center-18-1_feature_div"},{"divToUpdate":"center-18-2_feature_div"},{"divToUpdate":"center-18-3_feature_div"},{"divToUpdate":"center-19_feature_div"},{"divToUpdate":"center-19-0_feature_div"},{"divToUpdate":"center-19-1_feature_div"},{"divToUpdate":"center-19-2_feature_div"},{"divToUpdate":"center-19-3_feature_div"},{"divToUpdate":"center-20_feature_div"},{"divToUpdate":"center-20-0_feature_div"},{"divToUpdate":"center-20-1_feature_div"},{"divToUpdate":"center-20-2_feature_div"},{"divToUpdate":"center-20-3_feature_div"},{"divToUpdate":"center-21_feature_div"},{"divToUpdate":"center-21-0_feature_div"},{"divToUpdate":"center-21-1_feature_div"},{"divToUpdate":"center-21-2_feature_div"},{"divToUpdate":"center-21-3_feature_div"},{"divToUpdate":"center-22_feature_div"},{"divToUpdate":"center-22-0_feature_div"},{"divToUpdate":"center-22-1_feature_div"},{"divToUpdate":"center-22-2_feature_div"},{"divToUpdate":"center-22-3_feature_div"},{"divToUpdate":"center-23_feature_div"},{"divToUpdate":"center-23-0_feature_div"},{"divToUpdate":"center-23-1_feature_div"},{"divToUpdate":"center-23-2_feature_div"},{"divToUpdate":"center-23-3_feature_div"},{"divToUpdate":"center-24_feature_div"},{"divToUpdate":"center-24-0_feature_div"},{"divToUpdate":"center-24-1_feature_div"},{"divToUpdate":"center-24-2_feature_div"},{"divToUpdate":"center-24-3_feature_div"},{"divToUpdate":"center-25_feature_div"},{"divToUpdate":"center-25-0_feature_div"},{"divToUpdate":"center-25-1_feature_div"},{"divToUpdate":"center-25-2_feature_div"},{"divToUpdate":"center-25-3_feature_div"},{"divToUpdate":"center-26_feature_div"},{"divToUpdate":"center-26-0_feature_div"},{"divToUpdate":"center-26-1_feature_div"},{"divToUpdate":"center-26-2_feature_div"},{"divToUpdate":"center-26-3_feature_div"},{"divToUpdate":"center-27-0_feature_div"},{"divToUpdate":"center-27-1_feature_div"},{"divToUpdate":"center-27-2_feature_div"},{"divToUpdate":"center-27-3_feature_div"},{"divToUpdate":"center-28-0_feature_div"},{"divToUpdate":"center-28-1_feature_div"},{"divToUpdate":"center-28-2_feature_div"},{"divToUpdate":"center-28-3_feature_div"},{"divToUpdate":"center-29_feature_div"},{"divToUpdate":"center-29-0_feature_div"},{"divToUpdate":"center-29-1_feature_div"},{"divToUpdate":"center-29-2_feature_div"},{"divToUpdate":"center-29-3_feature_div"},{"divToUpdate":"center-30_feature_div"},{"divToUpdate":"center-30-0_feature_div"},{"divToUpdate":"center-30-1_feature_div"},{"divToUpdate":"center-30-2_feature_div"},{"divToUpdate":"center-30-3_feature_div"},{"divToUpdate":"center-31_feature_div"},{"divToUpdate":"center-31-0_feature_div"},{"divToUpdate":"center-31-1_feature_div"},{"divToUpdate":"center-31-2_feature_div"},{"divToUpdate":"center-31-3_feature_div"},{"divToUpdate":"center-32_feature_div"},{"divToUpdate":"center-32-0_feature_div"},{"divToUpdate":"center-32-1_feature_div"},{"divToUpdate":"center-32-2_feature_div"},{"divToUpdate":"center-32-3_feature_div"},{"divToUpdate":"center-33_feature_div"},{"divToUpdate":"center-33-0_feature_div"},{"divToUpdate":"center-33-1_feature_div"},{"divToUpdate":"center-33-2_feature_div"},{"divToUpdate":"center-33-3_feature_div"},{"divToUpdate":"center-34_feature_div"},{"divToUpdate":"center-34-1_feature_div"},{"divToUpdate":"center-34-2_feature_div"},{"divToUpdate":"center-34-3_feature_div"},{"divToUpdate":"center-35_feature_div"},{"divToUpdate":"center-35-0_feature_div"},{"divToUpdate":"center-35-1_feature_div"},{"divToUpdate":"center-35-2_feature_div"},{"divToUpdate":"center-35-3_feature_div"},{"divToUpdate":"center-36_feature_div"},{"divToUpdate":"center-36-0_feature_div"},{"divToUpdate":"center-36-1_feature_div"},{"divToUpdate":"center-36-2_feature_div"},{"divToUpdate":"center-36-3_feature_div"},{"divToUpdate":"center-37_feature_div"},{"divToUpdate":"center-37-0_feature_div"},{"divToUpdate":"center-37-1_feature_div"},{"divToUpdate":"center-37-2_feature_div"},{"divToUpdate":"center-37-3_feature_div"},{"divToUpdate":"center-38_feature_div"},{"divToUpdate":"center-38-0_feature_div"},{"divToUpdate":"center-38-1_feature_div"},{"divToUpdate":"center-38-2_feature_div"},{"divToUpdate":"center-38-3_feature_div"},{"divToUpdate":"center-39_feature_div"},{"divToUpdate":"center-39-0_feature_div"},{"divToUpdate":"center-39-1_feature_div"},{"divToUpdate":"center-39-2_feature_div"},{"divToUpdate":"center-39-3_feature_div"},{"divToUpdate":"center-40_feature_div"},{"divToUpdate":"center-40-0_feature_div"},{"divToUpdate":"center-40-1_feature_div"},{"divToUpdate":"center-40-2_feature_div"},{"divToUpdate":"center-40-3_feature_div"},{"loadingBar":1,"divToUpdate":"center-41_feature_div"},{"divToUpdate":"center-41-0_feature_div"},{"divToUpdate":"center-41-1_feature_div"},{"divToUpdate":"center-41-2_feature_div"},{"divToUpdate":"center-41-3_feature_div"},{"divToUpdate":"center-42_feature_div"},{"divToUpdate":"center-42-0_feature_div"},{"divToUpdate":"center-42-1_feature_div"},{"divToUpdate":"center-42-2_feature_div"},{"divToUpdate":"center-42-3_feature_div"},{"divToUpdate":"center-43_feature_div"},{"divToUpdate":"center-43-0_feature_div"},{"divToUpdate":"center-43-1_feature_div"},{"divToUpdate":"center-43-2_feature_div"},{"divToUpdate":"center-43-3_feature_div"},{"loadingBar":1,"isPrefetchable":0,"divToUpdate":"ask-btf_feature_div"},{"divToUpdate":"center-80_feature_div"},{"divToUpdate":"center-81_feature_div"},{"divToUpdate":"center-82_feature_div"},{"divToUpdate":"center-83_feature_div"},{"divToUpdate":"center-84_feature_div"},{"divToUpdate":"center-85_feature_div"},{"divToUpdate":"center-86_feature_div"},{"divToUpdate":"center-87_feature_div"},{"loadingBar":1,"divToUpdate":"dpx-giveaway_feature_div"},{"divToUpdate":"mako-emergency-fix_feature_div"},{"divToUpdate":"center-88_feature_div"},{"divToUpdate":"center-89_feature_div"},{"divToUpdate":"center-90_feature_div"},{"divToUpdate":"center-91_feature_div"},{"divToUpdate":"center-92_feature_div"},{"divToUpdate":"center-93_feature_div"},{"divToUpdate":"center-94_feature_div"},{"divToUpdate":"center-95_feature_div"},{"divToUpdate":"center-96_feature_div"},{"divToUpdate":"center-97_feature_div"},{"divToUpdate":"center-98_feature_div"},{"divToUpdate":"center-99_feature_div"},{"divToUpdate":"center-100_feature_div"},{"divToUpdate":"accessory-popover-1_feature_div"},{"divToUpdate":"accessory-popover-2_feature_div"},{"divToUpdate":"accessory-popover-3_feature_div"},{"divToUpdate":"accessory-popover-4_feature_div"},{"divToUpdate":"accessory-popover-5_feature_div"},{"divToUpdate":"accessory-popover-6_feature_div"},{"divToUpdate":"accessory-popover-7_feature_div"},{"divToUpdate":"accessory-popover-8_feature_div"},{"divToUpdate":"accessory-popover-9_feature_div"},{"divToUpdate":"accessory-popover-10_feature_div"},{"loadingBar":1,"divToUpdate":"listmania-center_feature_div"},{"loadingBar":1,"divToUpdate":"sylt-center_feature_div"},{"isPrefetchable":0,"divToUpdate":"twister-log-metrics_feature_div"},{"isPrefetchable":0,"divToUpdate":"dp-fast-track-logger_feature_div"}]},"master":{"mTypeSpecificURLParams":{}},"partial":{"mTypeSpecificURLParams":{},"elementList":[{"divToUpdate":"center-27_feature_div"},{"divToUpdate":"center-28_feature_div"}]},"full":{"mTypeSpecificURLParams":{"psc":1},"elementList":[{"isPrefetchable":0,"divToUpdate":"twister-atf-marker_feature_div"},{"isPrefetchable":0,"divToUpdate":"twister-cf-marker_feature_div"},{"divToUpdate":"andon-cord-pulling_feature_div"},{"divToUpdate":"dvd-rental-badge_feature_div"},{"divToUpdate":"product-alert-grid_feature_div"},{"divToUpdate":"hero-quick-promo-grid_feature_div"},{"divToUpdate":"qpe-title-tag_feature_div"},{"divToUpdate":"btf-center-1_feature_div"},{"divToUpdate":"btf-center-2_feature_div"},{"divToUpdate":"btf-center-3_feature_div"},{"divToUpdate":"btf-center-4_feature_div"},{"divToUpdate":"btf-center-5_feature_div"},{"divToUpdate":"center-12_feature_div"},{"divToUpdate":"center-12-0_feature_div"},{"divToUpdate":"center-12-1_feature_div"},{"divToUpdate":"center-13_feature_div"},{"divToUpdate":"center-13-0_feature_div"},{"divToUpdate":"center-13-1_feature_div"},{"divToUpdate":"center-14_feature_div"},{"divToUpdate":"center-14-0_feature_div"},{"divToUpdate":"center-14-1_feature_div"},{"divToUpdate":"center-15_feature_div"},{"divToUpdate":"center-15-0_feature_div"},{"divToUpdate":"center-15-1_feature_div"},{"divToUpdate":"center-16_feature_div"},{"divToUpdate":"center-16-0_feature_div"},{"divToUpdate":"center-16-1_feature_div"},{"divToUpdate":"dpx-btf-bundle_feature_div"},{"divToUpdate":"btf-center-6_feature_div"},{"divToUpdate":"btf-center-7_feature_div"},{"divToUpdate":"btf-center-8_feature_div"},{"divToUpdate":"btf-center-9_feature_div"},{"divToUpdate":"btf-center-10_feature_div"},{"divToUpdate":"btf-content-1_feature_div"},{"divToUpdate":"btf-content-2_feature_div"},{"divToUpdate":"btf-content-3_feature_div"},{"divToUpdate":"btf-content-4_feature_div"},{"divToUpdate":"btf-content-5_feature_div"},{"divToUpdate":"btf-content-6_feature_div"},{"divToUpdate":"btf-content-7_feature_div"},{"divToUpdate":"btf-content-8_feature_div"},{"divToUpdate":"btf-content-9_feature_div"},{"divToUpdate":"btf-content-10_feature_div"},{"divToUpdate":"btf-content-11_feature_div"},{"divToUpdate":"btf-content-12_feature_div"},{"divToUpdate":"btf-content-13_feature_div"},{"divToUpdate":"btf-content-14_feature_div"},{"divToUpdate":"btf-content-15_feature_div"},{"divToUpdate":"btf-content-16_feature_div"},{"divToUpdate":"btf-content-17_feature_div"},{"divToUpdate":"btf-content-18_feature_div"},{"divToUpdate":"btf-content-19_feature_div"},{"divToUpdate":"btf-content-20_feature_div"},{"divToUpdate":"btf-content-21_feature_div"},{"divToUpdate":"btf-content-22_feature_div"},{"divToUpdate":"btf-content-23_feature_div"},{"divToUpdate":"btf-content-24_feature_div"},{"divToUpdate":"btf-content-25_feature_div"},{"divToUpdate":"btf-center-11_feature_div"},{"divToUpdate":"btf-center-12_feature_div"},{"divToUpdate":"btf-center-13_feature_div"},{"divToUpdate":"btf-center-14_feature_div"},{"divToUpdate":"btf-center-15_feature_div"},{"divToUpdate":"btf-content-26_feature_div"},{"divToUpdate":"btf-content-27_feature_div"},{"divToUpdate":"btf-content-28_feature_div"},{"divToUpdate":"btf-content-29_feature_div"},{"divToUpdate":"btf-content-30_feature_div"},{"divToUpdate":"btf-content-31_feature_div"},{"divToUpdate":"btf-content-32_feature_div"},{"divToUpdate":"btf-content-33_feature_div"},{"divToUpdate":"btf-content-34_feature_div"},{"divToUpdate":"btf-content-35_feature_div"},{"divToUpdate":"btf-content-36_feature_div"},{"divToUpdate":"btf-content-37_feature_div"},{"divToUpdate":"btf-content-38_feature_div"},{"divToUpdate":"btf-content-39_feature_div"},{"divToUpdate":"btf-content-40_feature_div"},{"divToUpdate":"btf-content-41_feature_div"},{"divToUpdate":"btf-content-42_feature_div"},{"divToUpdate":"btf-content-43_feature_div"},{"divToUpdate":"btf-content-44_feature_div"},{"divToUpdate":"btf-content-45_feature_div"},{"divToUpdate":"btf-content-46_feature_div"},{"divToUpdate":"btf-content-47_feature_div"},{"divToUpdate":"btf-content-48_feature_div"},{"divToUpdate":"btf-content-49_feature_div"},{"divToUpdate":"btf-content-50_feature_div"},{"divToUpdate":"btf-center-16_feature_div"},{"divToUpdate":"btf-center-17_feature_div"},{"divToUpdate":"btf-center-18_feature_div"},{"divToUpdate":"btf-center-19_feature_div"},{"divToUpdate":"btf-center-20_feature_div"},{"divToUpdate":"btf-center-21_feature_div"},{"divToUpdate":"btf-center-22_feature_div"},{"divToUpdate":"btf-center-23_feature_div"},{"divToUpdate":"btf-center-24_feature_div"},{"divToUpdate":"btf-center-25_feature_div"},{"divToUpdate":"btf-content-51_feature_div"},{"divToUpdate":"btf-content-52_feature_div"},{"divToUpdate":"btf-content-53_feature_div"},{"divToUpdate":"btf-content-54_feature_div"},{"divToUpdate":"btf-content-55_feature_div"},{"divToUpdate":"btf-content-56_feature_div"},{"divToUpdate":"btf-content-57_feature_div"},{"divToUpdate":"btf-content-58_feature_div"},{"divToUpdate":"btf-content-59_feature_div"},{"divToUpdate":"btf-content-60_feature_div"},{"divToUpdate":"btf-content-61_feature_div"},{"divToUpdate":"btf-content-62_feature_div"},{"divToUpdate":"btf-content-63_feature_div"},{"divToUpdate":"btf-content-64_feature_div"},{"divToUpdate":"btf-content-65_feature_div"},{"divToUpdate":"center-17_feature_div"},{"divToUpdate":"center-17-0_feature_div"},{"divToUpdate":"center-17-1_feature_div"},{"divToUpdate":"center-17-2_feature_div"},{"divToUpdate":"center-17-3_feature_div"},{"divToUpdate":"center-18_feature_div"},{"divToUpdate":"center-18-0_feature_div"},{"divToUpdate":"center-18-1_feature_div"},{"divToUpdate":"center-18-2_feature_div"},{"divToUpdate":"center-18-3_feature_div"},{"divToUpdate":"center-19_feature_div"},{"divToUpdate":"center-19-0_feature_div"},{"divToUpdate":"center-19-1_feature_div"},{"divToUpdate":"center-19-2_feature_div"},{"divToUpdate":"center-19-3_feature_div"},{"divToUpdate":"center-20_feature_div"},{"divToUpdate":"center-20-0_feature_div"},{"divToUpdate":"center-20-1_feature_div"},{"divToUpdate":"center-20-2_feature_div"},{"divToUpdate":"center-20-3_feature_div"},{"divToUpdate":"center-21_feature_div"},{"divToUpdate":"center-21-0_feature_div"},{"divToUpdate":"center-21-1_feature_div"},{"divToUpdate":"center-21-2_feature_div"},{"divToUpdate":"center-21-3_feature_div"},{"divToUpdate":"center-22_feature_div"},{"divToUpdate":"center-22-0_feature_div"},{"divToUpdate":"center-22-1_feature_div"},{"divToUpdate":"center-22-2_feature_div"},{"divToUpdate":"center-22-3_feature_div"},{"divToUpdate":"center-23_feature_div"},{"divToUpdate":"center-23-0_feature_div"},{"divToUpdate":"center-23-1_feature_div"},{"divToUpdate":"center-23-2_feature_div"},{"divToUpdate":"center-23-3_feature_div"},{"divToUpdate":"center-24_feature_div"},{"divToUpdate":"center-24-0_feature_div"},{"divToUpdate":"center-24-1_feature_div"},{"divToUpdate":"center-24-2_feature_div"},{"divToUpdate":"center-24-3_feature_div"},{"divToUpdate":"center-25_feature_div"},{"divToUpdate":"center-25-0_feature_div"},{"divToUpdate":"center-25-1_feature_div"},{"divToUpdate":"center-25-2_feature_div"},{"divToUpdate":"center-25-3_feature_div"},{"divToUpdate":"center-26_feature_div"},{"divToUpdate":"center-26-0_feature_div"},{"divToUpdate":"center-26-1_feature_div"},{"divToUpdate":"center-26-2_feature_div"},{"divToUpdate":"center-26-3_feature_div"},{"divToUpdate":"center-27_feature_div"},{"divToUpdate":"center-27-0_feature_div"},{"divToUpdate":"center-27-1_feature_div"},{"divToUpdate":"center-27-2_feature_div"},{"divToUpdate":"center-27-3_feature_div"},{"divToUpdate":"center-28_feature_div"},{"divToUpdate":"center-28-0_feature_div"},{"divToUpdate":"center-28-1_feature_div"},{"divToUpdate":"center-28-2_feature_div"},{"divToUpdate":"center-28-3_feature_div"},{"divToUpdate":"center-29_feature_div"},{"divToUpdate":"center-29-0_feature_div"},{"divToUpdate":"center-29-1_feature_div"},{"divToUpdate":"center-29-2_feature_div"},{"divToUpdate":"center-29-3_feature_div"},{"divToUpdate":"center-30_feature_div"},{"divToUpdate":"center-30-0_feature_div"},{"divToUpdate":"center-30-1_feature_div"},{"divToUpdate":"center-30-2_feature_div"},{"divToUpdate":"center-30-3_feature_div"},{"divToUpdate":"center-31_feature_div"},{"divToUpdate":"center-31-0_feature_div"},{"divToUpdate":"center-31-1_feature_div"},{"divToUpdate":"center-31-2_feature_div"},{"divToUpdate":"center-31-3_feature_div"},{"divToUpdate":"center-32_feature_div"},{"divToUpdate":"center-32-0_feature_div"},{"divToUpdate":"center-32-1_feature_div"},{"divToUpdate":"center-32-2_feature_div"},{"divToUpdate":"center-32-3_feature_div"},{"divToUpdate":"center-33_feature_div"},{"divToUpdate":"center-33-0_feature_div"},{"divToUpdate":"center-33-1_feature_div"},{"divToUpdate":"center-33-2_feature_div"},{"divToUpdate":"center-33-3_feature_div"},{"divToUpdate":"center-34_feature_div"},{"divToUpdate":"center-34-1_feature_div"},{"divToUpdate":"center-34-2_feature_div"},{"divToUpdate":"center-34-3_feature_div"},{"divToUpdate":"center-35_feature_div"},{"divToUpdate":"center-35-0_feature_div"},{"divToUpdate":"center-35-1_feature_div"},{"divToUpdate":"center-35-2_feature_div"},{"divToUpdate":"center-35-3_feature_div"},{"divToUpdate":"center-36_feature_div"},{"divToUpdate":"center-36-0_feature_div"},{"divToUpdate":"center-36-1_feature_div"},{"divToUpdate":"center-36-2_feature_div"},{"divToUpdate":"center-36-3_feature_div"},{"divToUpdate":"center-37_feature_div"},{"divToUpdate":"center-37-0_feature_div"},{"divToUpdate":"center-37-1_feature_div"},{"divToUpdate":"center-37-2_feature_div"},{"divToUpdate":"center-37-3_feature_div"},{"divToUpdate":"center-38_feature_div"},{"divToUpdate":"center-38-0_feature_div"},{"divToUpdate":"center-38-1_feature_div"},{"divToUpdate":"center-38-2_feature_div"},{"divToUpdate":"center-38-3_feature_div"},{"divToUpdate":"center-39_feature_div"},{"divToUpdate":"center-39-0_feature_div"},{"divToUpdate":"center-39-1_feature_div"},{"divToUpdate":"center-39-2_feature_div"},{"divToUpdate":"center-39-3_feature_div"},{"divToUpdate":"center-40_feature_div"},{"divToUpdate":"center-40-0_feature_div"},{"divToUpdate":"center-40-1_feature_div"},{"divToUpdate":"center-40-2_feature_div"},{"divToUpdate":"center-40-3_feature_div"},{"loadingBar":1,"divToUpdate":"center-41_feature_div"},{"divToUpdate":"center-41-0_feature_div"},{"divToUpdate":"center-41-1_feature_div"},{"divToUpdate":"center-41-2_feature_div"},{"divToUpdate":"center-41-3_feature_div"},{"divToUpdate":"center-42_feature_div"},{"divToUpdate":"center-42-0_feature_div"},{"divToUpdate":"center-42-1_feature_div"},{"divToUpdate":"center-42-2_feature_div"},{"divToUpdate":"center-42-3_feature_div"},{"divToUpdate":"center-43_feature_div"},{"divToUpdate":"center-43-0_feature_div"},{"divToUpdate":"center-43-1_feature_div"},{"divToUpdate":"center-43-2_feature_div"},{"divToUpdate":"center-43-3_feature_div"},{"loadingBar":1,"isPrefetchable":0,"divToUpdate":"ask-btf_feature_div"},{"divToUpdate":"center-80_feature_div"},{"divToUpdate":"center-81_feature_div"},{"divToUpdate":"center-82_feature_div"},{"divToUpdate":"center-83_feature_div"},{"divToUpdate":"center-84_feature_div"},{"divToUpdate":"center-85_feature_div"},{"divToUpdate":"center-86_feature_div"},{"divToUpdate":"center-87_feature_div"},{"loadingBar":1,"divToUpdate":"dpx-giveaway_feature_div"},{"divToUpdate":"mako-emergency-fix_feature_div"},{"divToUpdate":"center-88_feature_div"},{"divToUpdate":"center-89_feature_div"},{"divToUpdate":"center-90_feature_div"},{"divToUpdate":"center-91_feature_div"},{"divToUpdate":"center-92_feature_div"},{"divToUpdate":"center-93_feature_div"},{"divToUpdate":"center-94_feature_div"},{"divToUpdate":"center-95_feature_div"},{"divToUpdate":"center-96_feature_div"},{"divToUpdate":"center-97_feature_div"},{"divToUpdate":"center-98_feature_div"},{"divToUpdate":"center-99_feature_div"},{"divToUpdate":"center-100_feature_div"},{"divToUpdate":"accessory-popover-1_feature_div"},{"divToUpdate":"accessory-popover-2_feature_div"},{"divToUpdate":"accessory-popover-3_feature_div"},{"divToUpdate":"accessory-popover-4_feature_div"},{"divToUpdate":"accessory-popover-5_feature_div"},{"divToUpdate":"accessory-popover-6_feature_div"},{"divToUpdate":"accessory-popover-7_feature_div"},{"divToUpdate":"accessory-popover-8_feature_div"},{"divToUpdate":"accessory-popover-9_feature_div"},{"divToUpdate":"accessory-popover-10_feature_div"},{"loadingBar":1,"divToUpdate":"listmania-center_feature_div"},{"loadingBar":1,"divToUpdate":"sylt-center_feature_div"},{"isPrefetchable":0,"divToUpdate":"twister-log-metrics_feature_div"},{"isPrefetchable":0,"divToUpdate":"dp-fast-track-logger_feature_div"}]}},"useBeaconizedEVDD":1,"loadingBarHtml":"<div style=\\"display:inline;margin:10px;\\"><span style=\\"font-family: Tahoma,Arial,Helvetica,sans-serif;color:#000000;font-size: 12px; \\">Daten werden geladen...<img src=\\"https://images-eu.ssl-images-amazon.com/images/G/03/x-locale/communities/tags/snake._CB192234769_.gif\\" width=\\"16\\" height=\\"16\\" align=\\"absmiddle\\" style=\\"display: inline\\"></span></div>","currentDimCombID":"","pageRefreshRefactor":1,"useVariationsOverlay":0,"asinToDimIndexMapData":{},"twisterMarkImageLoad":1,"storeID":"amazon-home"}; //selectively not escaping this.
       return dataToReturn;
    });
</script>

<script type="a-state" data-a-state="{&quot;key&quot;:&quot;URL-Refresh-State&quot;}">{"landingAsin":"B07C76F3P2","isUrlRefreshEnable":"1"}</script>



















    
    








    
    


    
    




   
    







    


 


    
    

    
    
        <script type="a-state" data-a-state="{&quot;key&quot;:&quot;metrics-schema&quot;}">{"widgetSchema":"dp:widget:","dimensionSchema":"dp:dims:"}</script>

    




























 
 
 











      












  
  

        

    


    
    
    <!DOCTYPE html>






                    










<div id="btf-center-1_feature_div">
</div>


<div id="btf-center-2_feature_div">
</div>


<div id="btf-center-3_feature_div">
</div>


<div id="btf-center-4_feature_div">
</div>


<div id="btf-center-5_feature_div">
</div>


<div id="center-12_feature_div">
</div>


<div id="center-12-0_feature_div">
</div>


<div id="center-12-1_feature_div">
</div>


<div id="center-13_feature_div">
</div>


<div id="center-13-0_feature_div">
</div>


<div id="center-13-1_feature_div">
</div>


<div id="center-14_feature_div">
</div>


<div id="center-14-0_feature_div">
</div>


<div id="center-14-1_feature_div">
</div>


<div id="center-15_feature_div">
</div>


<div id="center-15-0_feature_div">
</div>


<div id="center-15-1_feature_div">
</div>


<div id="center-16_feature_div">
</div>


<div id="center-16-0_feature_div">
</div>


<div id="center-16-1_feature_div">
</div>


<div id="dpx-btf-bundle_feature_div">







  



        
        
        
        
  









        












<div id="bundleV2_feature_div" class="feature" data-feature-name="bundleV2">
         
     




    

    
    
    
        
            
                
	                
	                
	                	





  


<div class="a-row aok-inline-block">
    
        
        
    

    
</div>


	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-center-6_feature_div">
</div>


<div id="btf-center-7_feature_div">
</div>


<div id="btf-center-8_feature_div">
</div>


<div id="btf-center-9_feature_div">
</div>


<div id="btf-center-10_feature_div">
</div>


<div id="btf-content-1_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent1_feature_div" class="feature" data-feature-name="btfContent1">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-2_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent2_feature_div" class="feature" data-feature-name="btfContent2">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-3_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent3_feature_div" class="feature" data-feature-name="btfContent3">
         
     




    

    
    
    
        
        
        
            
                
                    


    
    
    
    
    
    





    
    
    
    
    

    
        
    
    
    
    
    
    
        
    
    
    
    
    
    
    
    
    
        
    
    
    
        
    
    
    
        
    

    

    <div id="" class="content-grid-row-wrapper" style="max-width: 1500px;background-image: url(https://m.media-amazon.com/images/G/03/kindle/dp/2018/22151220/32116311/32116311_DE_an.jpg);min-height: 986px;margin-top: 25px;margin-bottom: 0px;">
        <div class="a-row">
            
                
                
                
                

                

                
                    
                     
                    
                    
                

                
                  
                  
                  
                  
                    <div class="a-column a-span12 block-content block-type-banner textalign-left">
                        

















<div class="bannerblock-content-section" style="">
    <div class="bannerblock-active-area">

        

            
            
            
            
            
            
            
            
            
            
            
            
            
            

            
                
            
            
                
            
            
            
            
            
            
                
            
            
                
            
            
            
                
            
            
            
            
            

            

            <div class="banner-textblock block-align top center" style="padding-top: 230px;padding-right: 75px;padding-left: 75px;">

                

                <table class="a-normal">
                    <tr>
                        

                            <td class="bannerblock-textcol">
                                <div style=""><p><img src="https://m.media-amazon.com/images/G/03/kindle/dp/2018/22151220/32116311/32116311_DE_h_p1.png" alt="Wir stellen vor: Echo Input " /></p>
<p>Echo Input bringt Alexa über Bluetooth oder eine Verbindung via 3,5-mm-Audiokabel auf Ihren Lieblingslautsprecher. Alexa kann Musik wiedergeben, die Nachrichten und den Wetterbericht vorlesen, Wecker oder Timer stellen, Aufgaben zu Ihrer To-do-Liste hinzufügen, kompatible Smart Home-Geräte steuern und noch vieles mehr, alles per Sprachbefehl.</p>
</div>
                            </td>

                        
                    </tr>
                </table>

            </div>

        
    </div>
</div>


                    </div>
                  
                

            
        </div>
    </div>

    <script>
        P.when("ContentGridAccessibilityProcessor").execute(function (ContentGridA11yProcessor) {
            ContentGridA11yProcessor.getInstance().requestProcessMarkup();
        });
    </script>




                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-4_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent4_feature_div" class="feature" data-feature-name="btfContent4">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-5_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent5_feature_div" class="feature" data-feature-name="btfContent5">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-6_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent6_feature_div" class="feature" data-feature-name="btfContent6">
         
     




    

    
    
    
        
        
        
            
                
                    


    
    
    
    
    
    





    
    
    
    
    

    
    
    
    
    
    
        
    
    
    
    
    
    
    
    
    
        
    
    
    
        
    
    
    
        
    

    

    <div id="" class="content-grid-row-wrapper" style="max-width: 1500px;min-height: 640px;margin-top: 25px;margin-bottom: 0px;">
        <div class="a-row">
            
                
                
                
                

                

                
                    
                     
                    
                    
                

                
                  
                  
                    <div class="content-grid-col-wrapper override-column-spacing" style="width: 66.66666666666667%; margin-right: 0.0%;">
                      <div class="a-column a-span8 block-content block-type-image textalign-left">
                          




















    


    


<div class="content-grid-block" style="">

    
        
        
            <img alt="" src="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2018/22151220/32116311/32116311_DE_m._QL20_CB483419146_.jpg" height="640px" width="858px" data-a-hires="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2018/22151220/32116311/32116311_DE_m._CB483419146_.jpg">
        
    

    

</div>

<!-- Lazy-loading image script -->
<script>
    P.when("A", "ready").execute(function(A) {
        var $ = A.$;
        var $image = $('img[src="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2018/22151220/32116311/32116311_DE_m._QL20_CB483419146_.jpg"][data-a-hires="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2018/22151220/32116311/32116311_DE_m._CB483419146_.jpg"]');
        A.loadHiResImage($image);
    });
</script>

                      </div>
                    </div>
                  
                  
                  
                

            
                
                
                
                

                

                
                    
                    
                

                
                  
                  
                    <div class="content-grid-col-wrapper override-column-spacing" style="width: 25.0%; margin-right: 0.0%;">
                      <div class="a-column a-span3 block-content block-type-text textalign-left">
                          



    













<div class="content-grid-block" style="padding-top: 125px;"><p><img src="https://m.media-amazon.com/images/G/03/kindle/dp/2018/22151220/32116311/32116311_DE_h_p2._CB483512893_.png" alt="„Alexa, spiel beliebte Musik.“" /></p>
<p>Fragen Sie Alexa einfach nach einem Song, einem Interpreten oder einer Musikrichtung und spielen Sie Musik auf kompatiblen Echo-Geräten und verbundenen Lautsprechern (Multiroom Musik wird über Bluetooth nicht unterstützt). Außerdem können Sie Audible, Podcasts, Radiosender und vieles mehr hören.</p>
<p><img src="https://m.media-amazon.com/images/G/03/kindle/dp/2018/22151220/32116311/32116311_DE_u._CB483522076_.gif" alt="„Alexa, spiel Tophits.&quot;" /></p>
</div>

                      </div>
                    </div>
                  
                  
                  
                

            
                
                
                
                

                

                
                    
                    
                     
                     
                    
                

                
                  
                  
                    <div class="content-grid-col-wrapper override-column-spacing" style="width: 8.333333333333334%; margin-right: 0;">
                      <div class="a-column a-span1 block-content block-type-blank textalign-left a-span-last">
                          














                      </div>
                    </div>
                  
                  
                  
                

            
        </div>
    </div>

    <script>
        P.when("ContentGridAccessibilityProcessor").execute(function (ContentGridA11yProcessor) {
            ContentGridA11yProcessor.getInstance().requestProcessMarkup();
        });
    </script>




                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-7_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent7_feature_div" class="feature" data-feature-name="btfContent7">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-8_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent8_feature_div" class="feature" data-feature-name="btfContent8">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-9_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent9_feature_div" class="feature" data-feature-name="btfContent9">
         
     




    

    
    
    
        
        
        
            
                
                    


    
    
    
    
    
    





    
    
    
    
    

    
    
    
    
    
    
        
    
    
    
    
    
    
    
    
    
        
    
    
    
        
    
    
    
        
    

    

    <div id="P3" class="content-grid-row-wrapper" style="max-width: 1500px;min-height: 540px;margin-top: 50px;margin-bottom: 25px;">
        <div class="a-row">
            
                
                
                
                

                

                
                    
                     
                    
                    
                

                
                  
                  
                  
                  
                    <div class="a-column a-span1 block-content block-type-blank textalign-left">
                        














                    </div>
                  
                

            
                
                
                
                

                

                
                    
                    
                

                
                  
                  
                  
                  
                    <div class="a-column a-span4 block-content block-type-text textalign-left">
                        



    













<div class="content-grid-block" style="padding-top: 180px;"><p><img src="https://m.media-amazon.com/images/G/03/kindle/dp/2018/22151220/32116311/32116311_DE_h_p3._CB483449434_.png" alt="Stets bereit" /></p>
<p>Machen Sie sich das Leben zuhause leicht. Verwenden Sie Ihre Stimme, um Timer zu stellen, Listen zu führen oder Kalendereinträge und Erinnerungen zu erstellen. Hören Sie die Nachrichten, den Wetterbericht oder Verkehrsinformationen. Fragen Sie nach Sportergebnissen, dem Kinoprogramm, Öffnungszeiten von Restaurants und vielen weiteren Informationen.</p>
</div>

                    </div>
                  
                

            
                
                
                
                

                

                
                    
                    
                

                
                  
                  
                  
                  
                    <div class="a-column a-span6 block-content block-type-cinemagraph textalign-left">
                        

















    




<div class="content-grid-block" style="">
    <video id="ods-cg-cinemagraph-1" class="content-grid-cinemagraph" data-src="https://images-na.ssl-images-amazon.com/images/I/C1E5naT6pJS.mp4" poster="" loop autoplay muted>
        <img src="" class="content-grid-cinemagraph-placeholder" />
    </video>

    
</div>


<script>
    P.when("A", "ready").execute(function(A) {
        var $ = A.$;
        var $video = $('#ods-cg-cinemagraph-1');
        
        $video.attr("src", $video.data("src"));
    });
</script>



                    </div>
                  
                

            
                
                
                
                

                

                
                    
                    
                     
                     
                    
                

                
                  
                  
                  
                  
                    <div class="a-column a-span1 block-content block-type-blank textalign-left a-span-last">
                        














                    </div>
                  
                

            
        </div>
    </div>

    <script>
        P.when("ContentGridAccessibilityProcessor").execute(function (ContentGridA11yProcessor) {
            ContentGridA11yProcessor.getInstance().requestProcessMarkup();
        });
    </script>




                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-10_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent10_feature_div" class="feature" data-feature-name="btfContent10">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-11_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent11_feature_div" class="feature" data-feature-name="btfContent11">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-12_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent12_feature_div" class="feature" data-feature-name="btfContent12">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-13_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent13_feature_div" class="feature" data-feature-name="btfContent13">
         
     




    

    
    
    
        
        
        
            
                
                    


    
    
    
    
    
    





    
    
    
    
    

    
    
    
    
    
    
        
    
    
    
    
    
    
    
    
    
        
    
    
    
        
    
    
    
        
    

    

    <div id="P7" class="content-grid-row-wrapper" style="max-width: 1500px;min-height: 600px;margin-top: 50px;margin-bottom: 25px;">
        <div class="a-row">
            
                
                
                
                

                

                
                    
                     
                    
                    
                

                
                  
                  
                  
                  
                    <div class="a-column a-span6 block-content block-type-cinemagraph textalign-left">
                        




















<div class="content-grid-block" style="">
    <video id="ods-cg-cinemagraph-2" class="content-grid-cinemagraph" data-src="https://images-na.ssl-images-amazon.com/images/I/A1xEGekcyCS.mp4" poster="" loop autoplay muted>
        <img src="" class="content-grid-cinemagraph-placeholder" />
    </video>

    
</div>


<script>
    P.when("A", "ready").execute(function(A) {
        var $ = A.$;
        var $video = $('#ods-cg-cinemagraph-2');
        
        $video.attr("src", $video.data("src"));
    });
</script>



                    </div>
                  
                

            
                
                
                
                

                

                
                    
                    
                

                
                  
                  
                  
                  
                    <div class="a-column a-span1 block-content block-type-blank textalign-left">
                        














                    </div>
                  
                

            
                
                
                
                

                

                
                    
                    
                

                
                  
                  
                  
                  
                    <div class="a-column a-span3 block-content block-type-text textalign-left">
                        



    




    










<div class="content-grid-block" style="padding-top: 200px;padding-left: 20px;"><p><img src="https://m.media-amazon.com/images/G/03/kindle/dp/2018/22151220/32116311/32116311_DE_h_p4._CB483449434_.png" alt="Alexa hat Skills" /></p>
<p>Alexa hat Tausende Skills und erhält täglich neue hinzu. Skills sind wie Apps und helfen Ihnen bei alltäglichen Dingen. Spielen Sie Spiele, erkunden Sie das Fernsehprogramm auf TV DIGITAL, halten Sie Ihre Fitness-Ziele mit Fitbit im Auge und vieles mehr. Fragen Sie einfach: „Alexa, was sind Skills?“</p>
<p>Erstellen Sie Ihre eigenen, persönlichen Skills und Antworten mit <a target="_blank" href="https://blueprints.amazon.de/">Alexa Skill Blueprints</a>.</p>
<p>Täglich kommen neue Skills hinzu. Entdecken Sie Skills im Skill-Bereich der Alexa App oder besuchen Sie den <a target="_blank" href="https://www.amazon.de/alexa-skills/b?node=10068460031">Skills Store</a>.</p>
</div>

                    </div>
                  
                

            
                
                
                
                

                

                
                    
                    
                     
                     
                    
                

                
                  
                  
                  
                  
                    <div class="a-column a-span2 block-content block-type-blank textalign-left a-span-last">
                        














                    </div>
                  
                

            
        </div>
    </div>

    <script>
        P.when("ContentGridAccessibilityProcessor").execute(function (ContentGridA11yProcessor) {
            ContentGridA11yProcessor.getInstance().requestProcessMarkup();
        });
    </script>




                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-14_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent14_feature_div" class="feature" data-feature-name="btfContent14">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-15_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent15_feature_div" class="feature" data-feature-name="btfContent15">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-16_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent16_feature_div" class="feature" data-feature-name="btfContent16">
         
     




    

    
    
    
        
        
        
            
                
                    


    
    
    
    
    
    





    
    
    
    
    

    
    
    
    
    
    
        
    
    
    
    
    
    
    
    
    
        
    
    
    
        
    
    
    
        
    

    

    <div id="" class="content-grid-row-wrapper" style="max-width: 795px;min-height: 76px;margin-top: 60px;margin-bottom: 10px;">
        <div class="a-row">
            
                
                
                
                

                

                
                    
                     
                    
                    
                

                
                  
                  
                  
                  
                    <div class="a-column a-span12 block-content block-type-image textalign-left">
                        






















<div class="content-grid-block" style="">

    
        
        
            <img alt="" src="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2018/22151220/32116311/32116311_DE_h_setup._QL20_CB483449429_.png" height="100%" width="100%" data-a-hires="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2018/22151220/32116311/32116311_DE_h_setup._CB483449429_.png">
        
    

    

</div>

<!-- Lazy-loading image script -->
<script>
    P.when("A", "ready").execute(function(A) {
        var $ = A.$;
        var $image = $('img[src="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2018/22151220/32116311/32116311_DE_h_setup._QL20_CB483449429_.png"][data-a-hires="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2018/22151220/32116311/32116311_DE_h_setup._CB483449429_.png"]');
        A.loadHiResImage($image);
    });
</script>

                    </div>
                  
                

            
        </div>
    </div>

    <script>
        P.when("ContentGridAccessibilityProcessor").execute(function (ContentGridA11yProcessor) {
            ContentGridA11yProcessor.getInstance().requestProcessMarkup();
        });
    </script>




                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-17_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent17_feature_div" class="feature" data-feature-name="btfContent17">
         
     




    

    
    
    
        
        
        
            
                
                    


    
    
    
    
    
    





    
    
    
    
    

    
    
    
    
    
    
        
    
    
    
    
    
    
    
    
    
        
    
    
    
        
    
    
    
        
    

    

    <div id="P7" class="content-grid-row-wrapper" style="max-width: 1500px;min-height: 480px;margin-top: 50px;margin-bottom: 25px;">
        <div class="a-row">
            
                
                
                
                

                

                
                    
                     
                    
                    
                

                
                  
                  
                  
                  
                    <div class="a-column a-span12 block-content block-type-image textalign-left">
                        






















<div class="content-grid-block" style="">

    
        
        
            <img alt="" src="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2018/22151220/32116311/32116311_DE_su._QL20_CB483419143_.jpg" height="100%" width="100%" data-a-hires="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2018/22151220/32116311/32116311_DE_su._CB483419143_.jpg">
        
    

    

</div>

<!-- Lazy-loading image script -->
<script>
    P.when("A", "ready").execute(function(A) {
        var $ = A.$;
        var $image = $('img[src="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2018/22151220/32116311/32116311_DE_su._QL20_CB483419143_.jpg"][data-a-hires="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2018/22151220/32116311/32116311_DE_su._CB483419143_.jpg"]');
        A.loadHiResImage($image);
    });
</script>

                    </div>
                  
                

            
        </div>
    </div>

    <script>
        P.when("ContentGridAccessibilityProcessor").execute(function (ContentGridA11yProcessor) {
            ContentGridA11yProcessor.getInstance().requestProcessMarkup();
        });
    </script>




                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-18_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent18_feature_div" class="feature" data-feature-name="btfContent18">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-19_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent19_feature_div" class="feature" data-feature-name="btfContent19">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-20_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent20_feature_div" class="feature" data-feature-name="btfContent20">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-21_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent21_feature_div" class="feature" data-feature-name="btfContent21">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-22_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent22_feature_div" class="feature" data-feature-name="btfContent22">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-23_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent23_feature_div" class="feature" data-feature-name="btfContent23">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-24_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent24_feature_div" class="feature" data-feature-name="btfContent24">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-25_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent25_feature_div" class="feature" data-feature-name="btfContent25">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-center-11_feature_div">
</div>


<div id="btf-center-12_feature_div">
</div>


<div id="btf-center-13_feature_div">
</div>


<div id="btf-center-14_feature_div">
</div>


<div id="btf-center-15_feature_div">
</div>


<div id="btf-content-26_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent26_feature_div" class="feature" data-feature-name="btfContent26">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-27_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent27_feature_div" class="feature" data-feature-name="btfContent27">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-28_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent28_feature_div" class="feature" data-feature-name="btfContent28">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-29_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent29_feature_div" class="feature" data-feature-name="btfContent29">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-30_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent30_feature_div" class="feature" data-feature-name="btfContent30">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-31_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent31_feature_div" class="feature" data-feature-name="btfContent31">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-32_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent32_feature_div" class="feature" data-feature-name="btfContent32">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-33_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent33_feature_div" class="feature" data-feature-name="btfContent33">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-34_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent34_feature_div" class="feature" data-feature-name="btfContent34">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-35_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent35_feature_div" class="feature" data-feature-name="btfContent35">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-36_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent36_feature_div" class="feature" data-feature-name="btfContent36">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-37_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent37_feature_div" class="feature" data-feature-name="btfContent37">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-38_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent38_feature_div" class="feature" data-feature-name="btfContent38">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-39_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent39_feature_div" class="feature" data-feature-name="btfContent39">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-40_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent40_feature_div" class="feature" data-feature-name="btfContent40">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-41_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent41_feature_div" class="feature" data-feature-name="btfContent41">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-42_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent42_feature_div" class="feature" data-feature-name="btfContent42">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-43_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent43_feature_div" class="feature" data-feature-name="btfContent43">
         
     




    

    
    
    
        
        
        
            
                
                    


    
    
    
    
    
    




    
    <a id="compare"></a>
    
    <a id="swaComparePlans"></a>

    <div class="a-section a-spacing-double-large">
        <div class="a-section">
            <h1 class="a-text-center">
                Echo Geräte vergleichen
            </h1>
        </div>

        
        <div class="a-section a-spacing-large">
            
                
                
                    







<div id="comp-chart-container" class="a-section a-spacing-extra-large">
    <table class="a-keyvalue a-spacing-micro a-size-small">
        <tr>
            <td style="width:175px;"></td>
            

                
                    
                    
                        
                    
                

                <td class="ccc-heading-column col-width-5">
                    <img alt="Echo Dot" src="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2018/22151220/famnav/41514212_eu_family-stripe_250x170._CB484162691_.png" class="ccc-device-image">
                    <div class="ccc-device-title">
                        <a class="a-size-large a-link-normal" href="/dp/B0792HCFTG/ref=ods_mccc_dn">Echo Dot</a>
                    </div>
                    <!-- 
                    
                        
                            




<style type="text/css">
    /* 
    * Fix for UDP-1061. Average customer reviews has a small extra line on hover 
    * https://omni-grok.amazon.com/xref/src/appgroup/websiteTemplates/retail/SoftlinesDetailPageAssets/udp-intl-lock/src/legacy.css?indexName=WebsiteTemplates#40
    */
    .noUnderline a:hover { 
        text-decoration: none; 
    }
</style>



    
    
    
    
        

        

        
        
        
        
		
		
		
		
		        
		
		
		
		
		
		
		
		        
        

        <div id="averageCustomerReviews" class="a-spacing-none" data-asin="B0792HCFTG" data-ref="dpx_acr_pop_" >
            
            
            
                
                
                    










        <span class="a-declarative" data-action="acrStarsLink-click-metrics" data-acrStarsLink-click-metrics="{}">
            





    <span id="acrPopover" class="reviewCountTextLinkedHistogram noUnderline" title="4.5 von 5 Sternen">
        <span class="a-declarative" data-action="a-popover" data-a-popover="{&quot;max-width&quot;:&quot;700&quot;,&quot;closeButton&quot;:&quot;false&quot;,&quot;position&quot;:&quot;triggerBottom&quot;,&quot;url&quot;:&quot;/gp/customer-reviews/widgets/average-customer-review/popover/ref=dpx_acr_pop_?contextId=dpx&amp;asin=B0792HCFTG&quot;}">
            <a href="javascript:void(0)" class="a-popover-trigger a-declarative">
                

<i class="a-icon a-icon-star a-star-4-5"><span class="a-icon-alt">4.5 von 5 Sternen</span></i>
                
            <i class="a-icon a-icon-popover"></i></a>
        </span>
        <span class="a-letter-space"></span>
    </span>


        </span>
        <span class="a-letter-space"></span>
        
        

        

        

        
        
        
        
        
        
        
            
            
            
            
            
                <a id="acrCustomerReviewLink" class="a-link-normal" href="/Intelligenter-Lautsprecher-Alexa-Anthrazit-Stoff/product-reviews/B0792HCFTG/ref=dpx_acr_txt?showViewpoints=1">
                    <span id="acrCustomerReviewText" class="a-size-base">2,899 Kundenrezensionen</span>
                </a>
            
        
        
        <script type="text/javascript">
            P.when('A', 'cf').execute(function(A) {
                A.declarative('acrStarsLink-click-metrics', 'click', { "allowLinkDefault" : true },  function(event){
                    if(window.ue) {
                        ue.count("acrStarsLinkWithPopoverClickCount", (ue.count("acrStarsLinkWithPopoverClickCount") || 0) + 1);
                    }
                });
            });
        </script>


                
            
        </div>
    


                        
                        
                     -->
                </td>
            

                
                    
                    
                        
                    
                

                <td class="ccc-heading-column col-width-5">
                    <img alt="Echo" src="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2018/22151220/famnav/FS-181411-250x170._CB484131946_.png" class="ccc-device-image">
                    <div class="ccc-device-title">
                        <a class="a-size-large a-link-normal" href="/dp/B06ZXQV6P8/ref=ods_mccc_rd">Echo</a>
                    </div>
                    <!-- 
                    
                        
                            




<style type="text/css">
    /* 
    * Fix for UDP-1061. Average customer reviews has a small extra line on hover 
    * https://omni-grok.amazon.com/xref/src/appgroup/websiteTemplates/retail/SoftlinesDetailPageAssets/udp-intl-lock/src/legacy.css?indexName=WebsiteTemplates#40
    */
    .noUnderline a:hover { 
        text-decoration: none; 
    }
</style>



    
    
    
    
        

        

        
        
        
        
		
		
		
		
		        
		
		
		
		
		
		
		
		        
        

        <div id="averageCustomerReviews" class="a-spacing-none" data-asin="B06ZXQV6P8" data-ref="dpx_acr_pop_" >
            
            
            
                
                
                    










        <span class="a-declarative" data-action="acrStarsLink-click-metrics" data-acrStarsLink-click-metrics="{}">
            





    <span id="acrPopover" class="reviewCountTextLinkedHistogram noUnderline" title="4.4 von 5 Sternen">
        <span class="a-declarative" data-action="a-popover" data-a-popover="{&quot;max-width&quot;:&quot;700&quot;,&quot;closeButton&quot;:&quot;false&quot;,&quot;position&quot;:&quot;triggerBottom&quot;,&quot;url&quot;:&quot;/gp/customer-reviews/widgets/average-customer-review/popover/ref=dpx_acr_pop_?contextId=dpx&amp;asin=B06ZXQV6P8&quot;}">
            <a href="javascript:void(0)" class="a-popover-trigger a-declarative">
                

<i class="a-icon a-icon-star a-star-4-5"><span class="a-icon-alt">4.4 von 5 Sternen</span></i>
                
            <i class="a-icon a-icon-popover"></i></a>
        </span>
        <span class="a-letter-space"></span>
    </span>


        </span>
        <span class="a-letter-space"></span>
        
        

        

        

        
        
        
        
        
        
        
            
            
            
            
            
                <a id="acrCustomerReviewLink" class="a-link-normal" href="/Amazon-Intelligenter-Lautsprecher-Alexa-Anthrazit/product-reviews/B06ZXQV6P8/ref=dpx_acr_txt?showViewpoints=1">
                    <span id="acrCustomerReviewText" class="a-size-base">6,886 Kundenrezensionen</span>
                </a>
            
        
        
        <script type="text/javascript">
            P.when('A', 'cf').execute(function(A) {
                A.declarative('acrStarsLink-click-metrics', 'click', { "allowLinkDefault" : true },  function(event){
                    if(window.ue) {
                        ue.count("acrStarsLinkWithPopoverClickCount", (ue.count("acrStarsLinkWithPopoverClickCount") || 0) + 1);
                    }
                });
            });
        </script>


                
            
        </div>
    


                        
                        
                     -->
                </td>
            

                
                    
                    
                        
                    
                

                <td class="ccc-heading-column col-width-5">
                    <img alt="Echo Plus" src="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2018/22151220/famnav/1294118_eu_family-stripe_250x170._CB484162691_.png" class="ccc-device-image">
                    <div class="ccc-device-title">
                        <a class="a-size-large a-link-normal" href="/dp/B07H2WSKVK/ref=ods_mccc_ld">Echo Plus</a>
                    </div>
                    <!-- 
                    
                        
                            




<style type="text/css">
    /* 
    * Fix for UDP-1061. Average customer reviews has a small extra line on hover 
    * https://omni-grok.amazon.com/xref/src/appgroup/websiteTemplates/retail/SoftlinesDetailPageAssets/udp-intl-lock/src/legacy.css?indexName=WebsiteTemplates#40
    */
    .noUnderline a:hover { 
        text-decoration: none; 
    }
</style>



    
    
    
    
        

        

        
        
        
        
		
		
		
		
		        
		
		
		
		
		
		
		
		        
        

        <div id="averageCustomerReviews" class="a-spacing-none" data-asin="B07H2WSKVK" data-ref="dpx_acr_pop_" >
            
            
            
                
                
                    










        <span class="a-declarative" data-action="acrStarsLink-click-metrics" data-acrStarsLink-click-metrics="{}">
            





    <span id="acrPopover" class="reviewCountTextLinkedHistogram noUnderline" title="4.5 von 5 Sternen">
        <span class="a-declarative" data-action="a-popover" data-a-popover="{&quot;max-width&quot;:&quot;700&quot;,&quot;closeButton&quot;:&quot;false&quot;,&quot;position&quot;:&quot;triggerBottom&quot;,&quot;url&quot;:&quot;/gp/customer-reviews/widgets/average-customer-review/popover/ref=dpx_acr_pop_?contextId=dpx&amp;asin=B07H2WSKVK&quot;}">
            <a href="javascript:void(0)" class="a-popover-trigger a-declarative">
                

<i class="a-icon a-icon-star a-star-4-5"><span class="a-icon-alt">4.5 von 5 Sternen</span></i>
                
            <i class="a-icon a-icon-popover"></i></a>
        </span>
        <span class="a-letter-space"></span>
    </span>


        </span>
        <span class="a-letter-space"></span>
        
        

        

        

        
        
        
        
        
        
        
            
            
            
            
            
                <a id="acrCustomerReviewLink" class="a-link-normal" href="/Anthrazit-Stoff-Philips-White-Lampe/product-reviews/B07H2WSKVK/ref=dpx_acr_txt?showViewpoints=1">
                    <span id="acrCustomerReviewText" class="a-size-base">443 Kundenrezensionen</span>
                </a>
            
        
        
        <script type="text/javascript">
            P.when('A', 'cf').execute(function(A) {
                A.declarative('acrStarsLink-click-metrics', 'click', { "allowLinkDefault" : true },  function(event){
                    if(window.ue) {
                        ue.count("acrStarsLinkWithPopoverClickCount", (ue.count("acrStarsLinkWithPopoverClickCount") || 0) + 1);
                    }
                });
            });
        </script>


                
            
        </div>
    


                        
                        
                     -->
                </td>
            

                
                    
                    
                        
                    
                

                <td class="ccc-heading-column col-width-5">
                    <img alt="Echo Spot" src="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2018/22151220/famnav/181515-fs-de-250x170._CB483950028_.png" class="ccc-device-image">
                    <div class="ccc-device-title">
                        <a class="a-size-large a-link-normal" href="/dp/B01J2BL01K/ref=ods_mccc_Rk">Echo Spot</a>
                    </div>
                    <!-- 
                    
                        
                            




<style type="text/css">
    /* 
    * Fix for UDP-1061. Average customer reviews has a small extra line on hover 
    * https://omni-grok.amazon.com/xref/src/appgroup/websiteTemplates/retail/SoftlinesDetailPageAssets/udp-intl-lock/src/legacy.css?indexName=WebsiteTemplates#40
    */
    .noUnderline a:hover { 
        text-decoration: none; 
    }
</style>



    
    
    
    
        

        

        
        
        
        
		
		
		
		
		        
		
		
		
		
		
		
		
		        
        

        <div id="averageCustomerReviews" class="a-spacing-none" data-asin="B01J2BL01K" data-ref="dpx_acr_pop_" >
            
            
            
                
                
                    










        <span class="a-declarative" data-action="acrStarsLink-click-metrics" data-acrStarsLink-click-metrics="{}">
            





    <span id="acrPopover" class="reviewCountTextLinkedHistogram noUnderline" title="4.4 von 5 Sternen">
        <span class="a-declarative" data-action="a-popover" data-a-popover="{&quot;max-width&quot;:&quot;700&quot;,&quot;closeButton&quot;:&quot;false&quot;,&quot;position&quot;:&quot;triggerBottom&quot;,&quot;url&quot;:&quot;/gp/customer-reviews/widgets/average-customer-review/popover/ref=dpx_acr_pop_?contextId=dpx&amp;asin=B01J2BL01K&quot;}">
            <a href="javascript:void(0)" class="a-popover-trigger a-declarative">
                

<i class="a-icon a-icon-star a-star-4-5"><span class="a-icon-alt">4.4 von 5 Sternen</span></i>
                
            <i class="a-icon a-icon-popover"></i></a>
        </span>
        <span class="a-letter-space"></span>
    </span>


        </span>
        <span class="a-letter-space"></span>
        
        

        

        

        
        
        
        
        
        
        
            
            
            
            
            
                <a id="acrCustomerReviewLink" class="a-link-normal" href="/Amazon-Intelligenter-Lautsprecher-Bildschirm-Alexa/product-reviews/B01J2BL01K/ref=dpx_acr_txt?showViewpoints=1">
                    <span id="acrCustomerReviewText" class="a-size-base">973 Kundenrezensionen</span>
                </a>
            
        
        
        <script type="text/javascript">
            P.when('A', 'cf').execute(function(A) {
                A.declarative('acrStarsLink-click-metrics', 'click', { "allowLinkDefault" : true },  function(event){
                    if(window.ue) {
                        ue.count("acrStarsLinkWithPopoverClickCount", (ue.count("acrStarsLinkWithPopoverClickCount") || 0) + 1);
                    }
                });
            });
        </script>


                
            
        </div>
    


                        
                        
                     -->
                </td>
            

                
                    
                    
                        
                    
                

                <td class="ccc-heading-column col-width-5">
                    <img alt="Echo Show" src="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2018/22151220/famnav/29198151_eu_family-stripe_250x170._CB484162691_.png" class="ccc-device-image">
                    <div class="ccc-device-title">
                        <a class="a-size-large a-link-normal" href="/dp/B07H33PH9M/ref=ods_mccc_bs">Echo Show</a>
                    </div>
                    <!-- 
                    
                        
                            




<style type="text/css">
    /* 
    * Fix for UDP-1061. Average customer reviews has a small extra line on hover 
    * https://omni-grok.amazon.com/xref/src/appgroup/websiteTemplates/retail/SoftlinesDetailPageAssets/udp-intl-lock/src/legacy.css?indexName=WebsiteTemplates#40
    */
    .noUnderline a:hover { 
        text-decoration: none; 
    }
</style>



    
    
    
    
        

        

        
        
        
        
		
		
		
		
		        
		
		
		
		
		
		
		
		        
        

        <div id="averageCustomerReviews" class="a-spacing-none" data-asin="B07H33PH9M" data-ref="dpx_acr_pop_" >
            
            
            
                
                
                    










        <span class="a-declarative" data-action="acrStarsLink-click-metrics" data-acrStarsLink-click-metrics="{}">
            





    <span id="acrPopover" class="reviewCountTextLinkedHistogram noUnderline" title="4.2 von 5 Sternen">
        <span class="a-declarative" data-action="a-popover" data-a-popover="{&quot;max-width&quot;:&quot;700&quot;,&quot;closeButton&quot;:&quot;false&quot;,&quot;position&quot;:&quot;triggerBottom&quot;,&quot;url&quot;:&quot;/gp/customer-reviews/widgets/average-customer-review/popover/ref=dpx_acr_pop_?contextId=dpx&amp;asin=B07H33PH9M&quot;}">
            <a href="javascript:void(0)" class="a-popover-trigger a-declarative">
                

<i class="a-icon a-icon-star a-star-4"><span class="a-icon-alt">4.2 von 5 Sternen</span></i>
                
            <i class="a-icon a-icon-popover"></i></a>
        </span>
        <span class="a-letter-space"></span>
    </span>


        </span>
        <span class="a-letter-space"></span>
        
        

        

        

        
        
        
        
        
        
        
            
            
            
            
            
                <a id="acrCustomerReviewLink" class="a-link-normal" href="/neue-Echo-Schwarz-Philips-Lampe/product-reviews/B07H33PH9M/ref=dpx_acr_txt?showViewpoints=1">
                    <span id="acrCustomerReviewText" class="a-size-base">400 Kundenrezensionen</span>
                </a>
            
        
        
        <script type="text/javascript">
            P.when('A', 'cf').execute(function(A) {
                A.declarative('acrStarsLink-click-metrics', 'click', { "allowLinkDefault" : true },  function(event){
                    if(window.ue) {
                        ue.count("acrStarsLinkWithPopoverClickCount", (ue.count("acrStarsLinkWithPopoverClickCount") || 0) + 1);
                    }
                });
            });
        </script>


                
            
        </div>
    


                        
                        
                     -->
                </td>
            
        </tr>

        
            <tr class="ccc-table-row-background">
                <td class="ccc-line-divider">
                    <span class="a-size-base-plus a-text-bold">Preis</span>
                </td>
                

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                        
                            
                            
                                <span class="a-size-large a-color-price">EUR 59,99</span>
                            
                        
                    </td>
                

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                        
                            
                            
                                <span class="a-size-large a-color-price">EUR 99,99</span>
                            
                        
                    </td>
                

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                        
                            
                            
                                <span class="a-size-large a-color-price">EUR 149,99</span>
                            
                        
                    </td>
                

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            <span>ab</span>
                        
                        
                            
                            
                                <span class="a-size-large a-color-price">EUR 129,99</span>
                            
                        
                    </td>
                

                    
                    

                    <td>
                        
                        
                            
                            
                                <span class="a-size-large a-color-price">EUR 229,99</span>
                            
                        
                    </td>
                
            </tr>
        

        
            
                
                    
                
                
            
            <tr>
                <td class="ccc-line-divider">
                    <span class="a-size-base-plus a-text-bold">Übersicht</span>
                </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                            
                                <span class="a-size-base-plus">Echo Dot (3. Generation), Alexa für jeden Raum</span>
                            
                        
                    </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                            
                                <span class="a-size-base-plus">Echo (2. Generation), intelligenter Lautsprecher mit Alexa und raumfüllendem Klang</span>
                            
                        
                    </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                            
                                <span class="a-size-base-plus">Echo Plus (2. Generation), Premiumklang und integrierter Smart Home-Hub mit Alexa</span>
                            
                        
                    </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                            
                                <span class="a-size-base-plus">Echo Spot (1. Generation), stylisches und kompaktes Echo mit Bildschirm, ideal für Schlafzimmer oder Büro</span>
                            
                        
                    </td>
                
                    

                    
                    

                    <td>
                        
                            
                            
                                <span class="a-size-base-plus">Echo Show (2. Generation), Premiumklang und HD-Bildschirm, erkennbar von der anderen Seite des Raums, ideal für die Küche</span>
                            
                        
                    </td>
                
            </tr>
        
            
                
                
                    
                
            
            <tr class="ccc-table-row-background">
                <td class="ccc-line-divider">
                    <span class="a-size-base-plus a-text-bold">Lautsprechergröße</span>
                </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                            
                                <span class="a-size-base-plus">41-mm-Lautsprecher</span>
                            
                        
                    </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                            
                                <span class="a-size-base-plus">63-mm-Woofer und 16-mm-Hochtonlautsprecher</span>
                            
                        
                    </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                            
                                <span class="a-size-base-plus">76-mm-Woofer und 20-mm-Hochtonlautsprecher</span>
                            
                        
                    </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                            
                                <span class="a-size-base-plus">36-mm-Lautsprecher</span>
                            
                        
                    </td>
                
                    

                    
                    

                    <td>
                        
                            
                            
                                <span class="a-size-base-plus">Duale 50-mm-Stereotreiber und passiver Bassradiator</span>
                            
                        
                    </td>
                
            </tr>
        
            
                
                    
                
                
            
            <tr>
                <td class="ccc-line-divider">
                    <span class="a-size-base-plus a-text-bold">Displaygröße</span>
                </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                            
                                <span class="a-size-base-plus"></span>
                            
                        
                    </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                            
                                <span class="a-size-base-plus"></span>
                            
                        
                    </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                            
                                <span class="a-size-base-plus"></span>
                            
                        
                    </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                            
                                <span class="a-size-base-plus">63 mm</span>
                            
                        
                    </td>
                
                    

                    
                    

                    <td>
                        
                            
                            
                                <span class="a-size-base-plus">256 mm </span>
                            
                        
                    </td>
                
            </tr>
        
            
                
                
                    
                
            
            <tr class="ccc-table-row-background">
                <td class="ccc-line-divider">
                    <span class="a-size-base-plus a-text-bold">Steuerung kompatibler Smart Home-Geräte</span>
                </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                                <img alt="check mark" src="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2015/mobile/AUI-checkmark-2._CB312994923_.png" class="ccc-check-mark" height="20px">
                            
                            
                        
                    </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                                <img alt="check mark" src="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2015/mobile/AUI-checkmark-2._CB312994923_.png" class="ccc-check-mark" height="20px">
                            
                            
                        
                    </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                                <img alt="check mark" src="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2015/mobile/AUI-checkmark-2._CB312994923_.png" class="ccc-check-mark" height="20px">
                            
                            
                        
                    </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                                <img alt="check mark" src="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2015/mobile/AUI-checkmark-2._CB312994923_.png" class="ccc-check-mark" height="20px">
                            
                            
                        
                    </td>
                
                    

                    
                    

                    <td>
                        
                            
                                <img alt="check mark" src="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2015/mobile/AUI-checkmark-2._CB312994923_.png" class="ccc-check-mark" height="20px">
                            
                            
                        
                    </td>
                
            </tr>
        
            
                
                    
                
                
            
            <tr>
                <td class="ccc-line-divider">
                    <span class="a-size-base-plus a-text-bold">Integrierter Zigbee Smart Home-Hub</span>
                </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                            
                                <span class="a-size-base-plus"></span>
                            
                        
                    </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                            
                                <span class="a-size-base-plus"></span>
                            
                        
                    </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                                <img alt="check mark" src="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2015/mobile/AUI-checkmark-2._CB312994923_.png" class="ccc-check-mark" height="20px">
                            
                            
                        
                    </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                            
                                <span class="a-size-base-plus"></span>
                            
                        
                    </td>
                
                    

                    
                    

                    <td>
                        
                            
                                <img alt="check mark" src="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2015/mobile/AUI-checkmark-2._CB312994923_.png" class="ccc-check-mark" height="20px">
                            
                            
                        
                    </td>
                
            </tr>
        
            
                
                
                    
                
            
            <tr class="ccc-table-row-background">
                <td class="ccc-line-divider">
                    <span class="a-size-base-plus a-text-bold">Duale Lautsprecher mit Dolby-Sound</span>
                </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                            
                                <span class="a-size-base-plus"></span>
                            
                        
                    </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                                <img alt="check mark" src="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2015/mobile/AUI-checkmark-2._CB312994923_.png" class="ccc-check-mark" height="20px">
                            
                            
                        
                    </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                                <img alt="check mark" src="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2015/mobile/AUI-checkmark-2._CB312994923_.png" class="ccc-check-mark" height="20px">
                            
                            
                        
                    </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                            
                                <span class="a-size-base-plus"></span>
                            
                        
                    </td>
                
                    

                    
                    

                    <td>
                        
                            
                                <img alt="check mark" src="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2015/mobile/AUI-checkmark-2._CB312994923_.png" class="ccc-check-mark" height="20px">
                            
                            
                        
                    </td>
                
            </tr>
        
            
                
                    
                
                
            
            <tr>
                <td class="ccc-line-divider">
                    <span class="a-size-base-plus a-text-bold">Musikstreaming</span>
                </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                                <img alt="check mark" src="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2015/mobile/AUI-checkmark-2._CB312994923_.png" class="ccc-check-mark" height="20px">
                            
                            
                        
                    </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                                <img alt="check mark" src="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2015/mobile/AUI-checkmark-2._CB312994923_.png" class="ccc-check-mark" height="20px">
                            
                            
                        
                    </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                                <img alt="check mark" src="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2015/mobile/AUI-checkmark-2._CB312994923_.png" class="ccc-check-mark" height="20px">
                            
                            
                        
                    </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                                <img alt="check mark" src="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2015/mobile/AUI-checkmark-2._CB312994923_.png" class="ccc-check-mark" height="20px">
                            
                            
                        
                    </td>
                
                    

                    
                    

                    <td>
                        
                            
                                <img alt="check mark" src="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2015/mobile/AUI-checkmark-2._CB312994923_.png" class="ccc-check-mark" height="20px">
                            
                            
                        
                    </td>
                
            </tr>
        
            
                
                
                    
                
            
            <tr class="ccc-table-row-background">
                <td class="ccc-line-divider">
                    <span class="a-size-base-plus a-text-bold">Videos von Amazon Video und weiteren abspielen</span>
                </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                            
                                <span class="a-size-base-plus"></span>
                            
                        
                    </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                            
                                <span class="a-size-base-plus"></span>
                            
                        
                    </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                            
                                <span class="a-size-base-plus"></span>
                            
                        
                    </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                                <img alt="check mark" src="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2015/mobile/AUI-checkmark-2._CB312994923_.png" class="ccc-check-mark" height="20px">
                            
                            
                        
                    </td>
                
                    

                    
                    

                    <td>
                        
                            
                                <img alt="check mark" src="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2015/mobile/AUI-checkmark-2._CB312994923_.png" class="ccc-check-mark" height="20px">
                            
                            
                        
                    </td>
                
            </tr>
        
            
                
                    
                
                
            
            <tr>
                <td class="ccc-line-divider">
                    <span class="a-size-base-plus a-text-bold">3,5-mm-Audioausgang und Bluetooth</span>
                </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                                <img alt="check mark" src="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2015/mobile/AUI-checkmark-2._CB312994923_.png" class="ccc-check-mark" height="20px">
                            
                            
                        
                    </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                                <img alt="check mark" src="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2015/mobile/AUI-checkmark-2._CB312994923_.png" class="ccc-check-mark" height="20px">
                            
                            
                        
                    </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                            
                                <span class="a-size-base-plus">Audioeingang und -ausgang</span>
                            
                        
                    </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                                <img alt="check mark" src="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2015/mobile/AUI-checkmark-2._CB312994923_.png" class="ccc-check-mark" height="20px">
                            
                            
                        
                    </td>
                
                    

                    
                    

                    <td>
                        
                            
                            
                                <span class="a-size-base-plus">Nur Bluetooth</span>
                            
                        
                    </td>
                
            </tr>
        
            
                
                
                    
                
            
            <tr class="ccc-table-row-background">
                <td class="ccc-line-divider">
                    <span class="a-size-base-plus a-text-bold">Sprachanrufe zwischen Echo-Geräten und Alexa App</span>
                </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                                <img alt="check mark" src="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2015/mobile/AUI-checkmark-2._CB312994923_.png" class="ccc-check-mark" height="20px">
                            
                            
                        
                    </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                                <img alt="check mark" src="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2015/mobile/AUI-checkmark-2._CB312994923_.png" class="ccc-check-mark" height="20px">
                            
                            
                        
                    </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                                <img alt="check mark" src="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2015/mobile/AUI-checkmark-2._CB312994923_.png" class="ccc-check-mark" height="20px">
                            
                            
                        
                    </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                                <img alt="check mark" src="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2015/mobile/AUI-checkmark-2._CB312994923_.png" class="ccc-check-mark" height="20px">
                            
                            
                        
                    </td>
                
                    

                    
                    

                    <td>
                        
                            
                                <img alt="check mark" src="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2015/mobile/AUI-checkmark-2._CB312994923_.png" class="ccc-check-mark" height="20px">
                            
                            
                        
                    </td>
                
            </tr>
        
            
                
                    
                
                
            
            <tr>
                <td class="ccc-line-divider">
                    <span class="a-size-base-plus a-text-bold">Videoanrufe</span>
                </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                            
                                <span class="a-size-base-plus"></span>
                            
                        
                    </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                            
                                <span class="a-size-base-plus"></span>
                            
                        
                    </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                            
                                <span class="a-size-base-plus"></span>
                            
                        
                    </td>
                
                    

                    
                    
                        
                    

                    <td class="ccc-line-divider">
                        
                            
                                <img alt="check mark" src="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2015/mobile/AUI-checkmark-2._CB312994923_.png" class="ccc-check-mark" height="20px">
                            
                            
                        
                    </td>
                
                    

                    
                    

                    <td>
                        
                            
                                <img alt="check mark" src="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2015/mobile/AUI-checkmark-2._CB312994923_.png" class="ccc-check-mark" height="20px">
                            
                            
                        
                    </td>
                
            </tr>
        
    </table>
</div>

<div class="a-section a-text-center">
    <span id="ods-back-to-top-btn" class="a-button"><span class="a-button-inner"><button id="ods-back-to-top-btn-announce" class="a-button-text a-text-center" type="button">Zum Seitenanfang</button></span></span>
</div>

                
            
        </div>
    </div>




                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-44_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent44_feature_div" class="feature" data-feature-name="btfContent44">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-45_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent45_feature_div" class="feature" data-feature-name="btfContent45">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-46_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent46_feature_div" class="feature" data-feature-name="btfContent46">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-47_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent47_feature_div" class="feature" data-feature-name="btfContent47">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-48_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent48_feature_div" class="feature" data-feature-name="btfContent48">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-49_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent49_feature_div" class="feature" data-feature-name="btfContent49">
         
     




    

    
    
    
        
        
        
            
                
                    


    
    
    
    
    
    




    
    <a id="tech"></a>

    <div id="tech-specs-desktop" class="a-section a-spacing-double-large">

        
            <div class="a-section a-text-center">
                
                    
                        <div class="a-section a-spacing-base">
                            <div style="font-size: 36px; line-height: 1.3">
                                    <p>Technische Details</p>

                            </div>
                        </div>
                    
                    
                
            </div>
        

        

            
                <div class="a-section a-spacing-double-large tech-specs-section">
                    
                        <div class="a-section a-text-center">
                            <img alt="Tech Specs" src="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2018/22151220/32116311/32116311_DE_td._CB483419143_.jpg">
                        </div>
                    

                    

                    
                        <div class="a-section">
                            
                            
                            <div class="a-row">

                                <div class="a-column a-span6">
                                    <table id="tech-specs-table-left" class="a-bordered tech-spec-theme">
                                        
                                            <tr>
                                                <td class="a-text-bold"><p>Abmessungen</p>
</td>
                                                <td><p>14 x 80 x 80 mm</p>
</td>
                                            </tr>
                                        
                                            <tr>
                                                <td class="a-text-bold"><p>Gewicht</p>
</td>
                                                <td><p>79 g<br  />
<em>Die tatsächliche Größe und das Gewicht können abhängig vom Herstellungsprozess abweichen</em>.</p>
</td>
                                            </tr>
                                        
                                            <tr>
                                                <td class="a-text-bold"><p>WLAN-Verbindung</p>
</td>
                                                <td><p>Dualband-WLAN unterstützt Netzwerke mit den Standards 802.11a/b/g/n (2,4 und 5 GHz). Unterstützt keine Verbindungen zu ad-hoc- (oder Peer-to-Peer-) WLAN-Netzen.</p>
</td>
                                            </tr>
                                        
                                            <tr>
                                                <td class="a-text-bold"><p>Bluetooth-Verbindung</p>
</td>
                                                <td><p>Unterstützt Advanced Audio Distribution Profile (A2DP) für Audiostreaming von Ihrem Mobilgerät auf Echo Input oder von Echo Input auf Ihren Bluetooth-Lautsprecher. Audio/Video Remote Control Profile (AVRCP) zur Sprachsteuerung von verbundenen Mobilgeräten. Hands-free-Sprachsteuerung wird nicht auf Mac OS X-Geräten unterstützt. Bluetooth-Lautsprecher mit PIN-Eingabe werden nicht unterstützt. Anrufe und Nachrichten über Bluetooth werden nicht unterstützt. Multiroom Musik wird über Bluetooth nicht unterstützt.</p>
</td>
                                            </tr>
                                        
                                            <tr>
                                                <td class="a-text-bold"><p>Audio</p>
</td>
                                                <td><p>Das Gerät verfügt nicht über interne Lautsprecher. Für die Verwendung ist ein externer Lautsprecher mit 3,5-mm-Audioeingang oder Bluetooth erforderlich.</p>
</td>
                                            </tr>
                                        
                                    </table>
                                </div>

                                <div class="a-column a-span6 a-span-last">
                                    <table id="tech-specs-table-right" class="a-bordered tech-spec-theme">
                                        
                                            <tr>
                                                <td class="a-text-bold"><p>Systemanforderungen</p>
</td>
                                                <td><p>Echo Input wird bereit für die WLAN-Verbindung geliefert. Die Alexa App ist kompatibel mit Fire OS-, Android- und iOS-Geräten und zudem von Ihrem Webbrowser aus zugänglich. Bestimmte Skills und Dienstleistungen können jederzeit geändert oder entfernt werden, sind eventuell nicht in allen Regionen verfügbar und erfordern möglicherweise ein separates Abo oder andere Gebühren.</p>
</td>
                                            </tr>
                                        
                                            <tr>
                                                <td class="a-text-bold"><p>Garantie und Service</p>
</td>
                                                <td><p>Amazon Echo Input wird mit einer <a target="_blank" href="https://www.amazon.de/gp/help/customer/display.html?nodeId=201014520">beschränkten einjährigen Herstellergarantie</a> verkauft. Diese besteht zusätzlich zu allen jeweils anwendbaren <a target="_blank" href="https://www.amazon.de/gp/help/customer/display.html?nodeId=201310960">gesetzlichen Gewährleistungsansprüchen für Verbrauchsgüter</a>  und beeinträchtig diese in keiner Weise. Das bedeutet, dass Ihnen auch  nach Ablauf der beschränkten Herstellergarantie immer noch gesetzliche  Ansprüche zustehen können. Die Nutzung von Amazon Echo Input unterliegt den  folgenden <a target="_blank" href="https://www.amazon.de/gp/help/customer/display.html?nodeId=201566380">Bedingungen</a>.</p>
</td>
                                            </tr>
                                        
                                            <tr>
                                                <td class="a-text-bold"><p>Barrierefreiheit</p>
</td>
                                                <td><p>Die Alexa App und Alexa-fähige Produkte umfassen mehrere Funktionen zur Barrierefreiheit für Kunden mit eingeschränktem Seh-, Hör-, Bewegungs- oder Sprachvermögen. Erfahren Sie mehr zu <a target="_blank" href="https://www.amazon.de/gp/help/customer/display.html?nodeId=202158280">Alexa und Barrierefreiheit</a>.</p>
</td>
                                            </tr>
                                        
                                            <tr>
                                                <td class="a-text-bold"><p>Lieferumfang</p>
</td>
                                                <td><p>Echo Input, Netzteil (5 W), Micro-USB-Kabel, AUX-Kabel (1 m) und <a target="_blank" href="https://s3-us-west-2.amazonaws.com/customerdocumentation/Alexa+Devices/Echo+Input_QSG_DE.pdf">Kurzanleitung</a>.</p>
</td>
                                            </tr>
                                        
                                    </table>
                                </div>

                            </div>

                        </div>
                    
                </div>
            
        

    </div>





                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-50_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent50_feature_div" class="feature" data-feature-name="btfContent50">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-center-16_feature_div">
</div>


<div id="btf-center-17_feature_div">
</div>


<div id="btf-center-18_feature_div">
</div>


<div id="btf-center-19_feature_div">
</div>


<div id="btf-center-20_feature_div">
</div>


<div id="btf-center-21_feature_div">
</div>


<div id="btf-center-22_feature_div">
</div>


<div id="btf-center-23_feature_div">
</div>


<div id="btf-center-24_feature_div">
</div>


<div id="btf-center-25_feature_div">
</div>


<div id="btf-content-51_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent51_feature_div" class="feature" data-feature-name="btfContent51">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-52_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent52_feature_div" class="feature" data-feature-name="btfContent52">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-53_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent53_feature_div" class="feature" data-feature-name="btfContent53">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-54_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent54_feature_div" class="feature" data-feature-name="btfContent54">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-55_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent55_feature_div" class="feature" data-feature-name="btfContent55">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-56_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent56_feature_div" class="feature" data-feature-name="btfContent56">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-57_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent57_feature_div" class="feature" data-feature-name="btfContent57">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-58_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent58_feature_div" class="feature" data-feature-name="btfContent58">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-59_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent59_feature_div" class="feature" data-feature-name="btfContent59">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-60_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent60_feature_div" class="feature" data-feature-name="btfContent60">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-61_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent61_feature_div" class="feature" data-feature-name="btfContent61">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-62_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent62_feature_div" class="feature" data-feature-name="btfContent62">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-63_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent63_feature_div" class="feature" data-feature-name="btfContent63">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-64_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent64_feature_div" class="feature" data-feature-name="btfContent64">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="btf-content-65_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="btfContent65_feature_div" class="feature" data-feature-name="btfContent65">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="center-17_feature_div">
</div>


<div id="center-17-0_feature_div">
</div>


<div id="center-17-1_feature_div">
</div>


<div id="center-17-2_feature_div">
</div>


<div id="center-17-3_feature_div">
</div>


<div id="center-18_feature_div">
</div>


<div id="center-18-0_feature_div">
</div>


<div id="center-18-1_feature_div">
</div>


<div id="center-18-2_feature_div">
</div>


<div id="center-18-3_feature_div">
</div>


<div id="center-19_feature_div">
</div>


<div id="center-19-0_feature_div">
</div>


<div id="center-19-1_feature_div">
</div>


<div id="center-19-2_feature_div">
</div>


<div id="center-19-3_feature_div">
</div>


<div id="center-20_feature_div">
</div>


<div id="center-20-0_feature_div">
</div>


<div id="center-20-1_feature_div">
</div>


<div id="center-20-2_feature_div">
</div>


<div id="center-20-3_feature_div">
</div>


<div id="center-21_feature_div">
</div>


<div id="center-21-0_feature_div">
</div>


<div id="center-21-1_feature_div">
</div>


<div id="center-21-2_feature_div">
</div>


<div id="center-21-3_feature_div">
</div>


<div id="center-22_feature_div">
</div>


<div id="center-22-0_feature_div">
</div>


<div id="center-22-1_feature_div">
</div>


<div id="center-22-2_feature_div">
</div>


<div id="center-22-3_feature_div">
</div>


<div id="center-23_feature_div">
</div>


<div id="center-23-0_feature_div">
</div>


<div id="center-23-1_feature_div">
</div>


<div id="center-23-2_feature_div">
</div>


<div id="center-23-3_feature_div">
</div>


<div id="center-24_feature_div">
</div>


<div id="center-24-0_feature_div">
</div>


<div id="center-24-1_feature_div">
</div>


<div id="center-24-2_feature_div">
</div>


<div id="center-24-3_feature_div">
</div>


<div id="center-25_feature_div">
</div>


<div id="center-25-0_feature_div">
</div>


<div id="center-25-1_feature_div">
</div>


<div id="center-25-2_feature_div">
</div>


<div id="center-25-3_feature_div">
</div>


<div id="center-26_feature_div">
</div>


<div id="center-26-0_feature_div">
</div>


<div id="center-26-1_feature_div">
</div>


<div id="center-26-2_feature_div">
</div>


<div id="center-26-3_feature_div">
</div>


<div id="center-27_feature_div">
</div>


<div id="center-27-0_feature_div">
</div>


<div id="center-27-1_feature_div">
</div>


<div id="center-27-2_feature_div">
</div>


<div id="center-27-3_feature_div">
</div>


<div id="center-28_feature_div">
</div>


<div id="center-28-0_feature_div">
</div>


<div id="center-28-1_feature_div">
</div>


<div id="center-28-2_feature_div">
</div>


<div id="center-28-3_feature_div">
</div>


<div id="center-29_feature_div">
</div>


<div id="center-29-0_feature_div">
</div>


<div id="center-29-1_feature_div">
</div>


<div id="center-29-2_feature_div">
</div>


<div id="center-29-3_feature_div">
</div>


<div id="center-30_feature_div">
</div>


<div id="center-30-0_feature_div">
</div>


<div id="center-30-1_feature_div">
</div>


<div id="center-30-2_feature_div">
</div>


<div id="center-30-3_feature_div">
</div>


<div id="center-31_feature_div">
</div>


<div id="center-31-0_feature_div">
</div>


<div id="center-31-1_feature_div">
</div>


<div id="center-31-2_feature_div">
</div>


<div id="center-31-3_feature_div">
</div>


<div id="center-32_feature_div">
</div>


<div id="center-32-0_feature_div">
</div>


<div id="center-32-1_feature_div">
</div>


<div id="center-32-2_feature_div">
</div>


<div id="center-32-3_feature_div">
</div>


<div id="center-33_feature_div">
</div>


<div id="center-33-0_feature_div">
</div>


<div id="center-33-1_feature_div">
</div>


<div id="center-33-2_feature_div">
</div>


<div id="center-33-3_feature_div">
</div>


<div id="center-34_feature_div">
</div>


<div id="center-34-1_feature_div">
</div>


<div id="center-34-2_feature_div">
</div>


<div id="center-34-3_feature_div">
</div>


<div id="center-35_feature_div">
</div>


<div id="center-35-0_feature_div">
</div>


<div id="center-35-1_feature_div">
</div>


<div id="center-35-2_feature_div">
</div>


<div id="center-35-3_feature_div">
</div>


<div id="center-36_feature_div">
</div>


<div id="center-36-0_feature_div">
</div>


<div id="center-36-1_feature_div">
</div>


<div id="center-36-2_feature_div">
</div>


<div id="center-36-3_feature_div">
</div>


<div id="center-37_feature_div">
</div>


<div id="center-37-0_feature_div">
</div>


<div id="center-37-1_feature_div">
</div>


<div id="center-37-2_feature_div">
</div>


<div id="center-37-3_feature_div">
</div>


<div id="center-38_feature_div">
</div>


<div id="center-38-0_feature_div">
</div>


<div id="center-38-1_feature_div">
</div>


<div id="center-38-2_feature_div">
</div>


<div id="center-38-3_feature_div">
</div>


<div id="center-39_feature_div">
</div>


<div id="center-39-0_feature_div">
</div>


<div id="center-39-1_feature_div">
</div>


<div id="center-39-2_feature_div">
</div>


<div id="center-39-3_feature_div">
</div>


<div id="center-40_feature_div">
</div>


<div id="center-40-0_feature_div">
</div>


<div id="center-40-1_feature_div">
</div>


<div id="center-40-2_feature_div">
</div>


<div id="center-40-3_feature_div">
</div>


<div id="center-41_feature_div">
</div>


<div id="center-41-0_feature_div">
</div>


<div id="center-41-1_feature_div">
</div>


<div id="center-41-2_feature_div">
</div>


<div id="center-41-3_feature_div">
</div>


<div id="center-42_feature_div">
</div>


<div id="center-42-0_feature_div">
</div>


<div id="center-42-1_feature_div">
</div>


<div id="center-42-2_feature_div">
</div>


<div id="center-42-3_feature_div">
</div>


<div id="center-43_feature_div">
</div>


<div id="center-43-0_feature_div">
</div>


<div id="center-43-1_feature_div">
</div>


<div id="center-43-2_feature_div">
</div>


<div id="center-43-3_feature_div">
</div>


<div id="ask-btf_feature_div">





















<link rel="stylesheet" href="https://images-eu.ssl-images-amazon.com/images/I/01r8lpNJhRL.css?AUIClients/DetailPageTwisterViewAsset#tablet" />
<link rel="stylesheet" href="https://images-eu.ssl-images-amazon.com/images/I/31WE2nfP5dL.css?AUIClients/AskAuiAssets#155248-T1.170181-T1.153429-T1" />
<script>
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/51UouboIAtL.js?AUIClients/AskAuiAssets#155248-T1.170181-T1.153429-T1');
</script>

<script type="text/javascript">(function(f) {f(window.P._namespace("AskAuiAssets"));}(function(P) {
  window.P && P.when('jQuery', 'ready').execute(function($) {
    var btf = $('#ask-btf_feature_div');
    if ($('html').is('.a-lt-ie10')) {
      var assetsLink = btf.find('link').attr('href');
      document.styleSheets[document.styleSheets.length - 1].addImport(assetsLink);
    } else {
      btf.find('script, link').appendTo('head');
    }

    var atf = $('.askATFLink');
    atf.attr("href", "#Ask");
  });
}));</script>

<div id="cf-ask-cel" class="celwidget">
  <div id="Ask"></div>












<div id="ask_lazy_load_div">
    <hr class="bucketDivider" size="1" noshade="noshade">
    <div class="cdQuestionAnswerBucket" style='height: 120px;'>
        <div class="cdQuestionAnswerHeader">
            Kunden Fragen und Antworten
        </div>
        <div class="cdQuestionLazySeeAll">
            <a href="https://www.amazon.de/ask/questions/asin/B07C76F3P2/ref=cm_cd_dp_lla_ql_ll">Fragen und Antworten anzeigen</a>
        </div>
        <div class="loading_ind" style="display:none" width="100%">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/03/ui/loadIndicators/loadIndicator-large._CB192546224_.gif" aria-hidden="true" role="presentation" style="padding:8px 0px 0px 100px" />
        </div>
    </div>
    <script type="text/javascript">(function(f) {f(window.P._namespace("AskAuiAssets"));}(function(P) {
    (function(P){
        P.when("jQuery").execute(function($){
           "use strict";
            $('.cdQuestionAnswerBucket').height(432);
        });
    })(window.AmazonUIPageJS || window.P);
    }));</script>
</div>



    




<script>
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/11tcKZ6zJYL.js?AUIClients/DetailPageLazyLoadLibAssets');
</script>



<script type="text/JavaScript">

     P.when("jQuery", "lazyLoadLib","ready").execute(function ($) {
            $('#ask_lazy_load_div').lazyLoadContent({
             threshold : 800,
             url: "/gp/ask-widget/askWidget.html?asin=B07C76F3P2&askError=&askMessage=&wdg=amazon_home_display_on_website&askLanguage=&requestID=S7Y7MCSM8BQQZXDKY4RQ",
             metrics : true,
             name : 'ask_btf',
             cache : false
             });
     });
</script>
</div>





</div>







  



        
        
        
        
  









        








<div id="sponsoredProducts2_feature_div" class="feature" data-feature-name="sponsoredProducts2">
         
     




    

    
    
    
        
            
                
	                
	                
	                	
	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>




<a id="customerReviews" class="a-link-normal" href="#"></a><hr class="a-spacing-large a-divider-normal"><span class="cr-widget-PageState">
  <span id="cr-state-object" data-state='{"asin":"B07C76F3P2","customerId":"A96YKT37ODSSG","deviceType":"desktop","reviewCommentsAjaxUrl":"","reviewCommentSubmissionAjaxUrl":"","approvedAuthorAjaxUrl":"","reviewsAjaxUrl":"/hz/reviews-render/ajax/medley-filtered-reviews/get/","medleyReviewsAjaxUrl":"/hz/reviews-render/ajax/medley-reviews/get/","signinUrl":"https://www.amazon.de/Echo-Input-Schwarz-Lautsprecher-5-mm-Audioeingang/product-reviews/B07C76F3P2?ie\u003dUTF8","weblabTriggerUrl":"/hz/reviews-render/ajax/weblab-trigger","reftagTriggerUrl":"/hz/reviews-render/ajax/reftag-trigger","mobileImageGalleryUrl":"","getImagesAjaxUrl":"","productInfoUrl":"","disableScroll":false}'></span>
</span>
<link rel="stylesheet" href="https://images-eu.ssl-images-amazon.com/images/I/01r96ER8PHL._RC|01LsHoHLL0L.css,01LKsGfpclL.css,01x1K0jaQnL.css,01cdXa5nSoL.css_.css?AUIClients/DesktopMedleyFilteringMetaAsset" />
<script>
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/31EfOK3OA7L._RC|11zK+fpVdVL.js,01vTmKfX-gL.js,11xQMWsDHFL.js,21cvg-DIyQL.js_.js?AUIClients/DesktopMedleyFilteringMetaAsset');
</script>
<div id="reviewsMedley" data-hook="reviews-medley-widget" class="a-fixed-left-grid a-spacing-extra-large"><div class="a-fixed-left-grid-inner" style="padding-left:300px"><div class="a-fixed-left-grid-col a-col-left" style="width:300px;margin-left:-300px;float:left;"><a id="dp-summary-see-all-reviews" data-hook="see-all-reviews-link" class="a-link-normal a-color-base" href="/Echo-Input-Schwarz-Lautsprecher-5-mm-Audioeingang/product-reviews/B07C76F3P2/ref=cm_cr_dp_d_show_all_top?ie=UTF8&amp;reviewerType=all_reviews"><h2 data-hook="total-review-count">23 Kundenrezensionen</h2></a><div class="a-section a-spacing-none a-spacing-top-mini cr-widget-ACR"><div class="a-fixed-left-grid AverageCustomerReviews a-spacing-medium"><div class="a-fixed-left-grid-inner" style="padding-left:100px"><div class="a-fixed-left-grid-col a-col-left" style="width:105px;margin-left:-105px;float:left;"><i data-hook="average-star-rating" class="a-icon a-icon-star-medium a-star-medium-4 averageStarRating"><span class="a-icon-alt">4,0 von 5 Sternen</span></i></div><div class="a-fixed-left-grid-col a-col-right" style="padding-left:0%;float:left;"><div class="a-row"><span class="a-size-base"><span class="a-declarative" data-action="a-popover" data-a-popover="{&quot;inlineContent&quot;:&quot;Amazon berechnet die Sternbewertungen eines Produkts mithilfe eines maschinell gelernten Modells anstelle des Durchschnitts der Rohdaten. Das maschinell gelernte Modell berücksichtigt Faktoren wie das Alter einer Bewertung, die Beurteilung der Nützlichkeit durch Kunden und ob die Bewertungen aus geprüften Einkäufen stammen.&quot;}"><a href="javascript:void(0)" class="a-popover-trigger a-declarative"><span data-hook="rating-out-of-text" class="arp-rating-out-of-text a-color-base">4,0 von 5 Sternen</span><i class="a-icon a-icon-popover"></i></a></span></span></div></div></div></div></div><span class="cr-widget-Histogram">
      <div class="a-fixed-left-grid a-spacing-none"><div class="a-fixed-left-grid-inner" style="padding-left:280px"><div class="a-fixed-left-grid-col a-col-left" style="width:280px;margin-left:-280px;float:left;"><span class="a-declarative" data-action="reviews:filter-action:push-state" data-reviews:filter-action:push-state="{&quot;scrollToSelector&quot;:&quot;#reviews-filter-info&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;}"><table id="histogramTable" class="a-normal a-align-middle a-spacing-base" role="presentation"><tr data-reftag="cm_cr_dp_d_hist_5" data-reviews-state-param="{&quot;filterByStar&quot;:&quot;five_star&quot;,&quot;pageNumber&quot;:&quot;1&quot;}" class="a-histogram-row"><td class="aok-nowrap"><a aria-label="5 Sterne (57%)" class="a-size-base a-link-normal 5star" title="5 Sterne" href="/Echo-Input-Schwarz-Lautsprecher-5-mm-Audioeingang/product-reviews/B07C76F3P2/ref=cm_cr_dp_d_hist_5?ie=UTF8&amp;filterByStar=five_star&amp;reviewerType=all_reviews#reviews-filter-bar">5 Sterne</a><span class="a-letter-space"></span></td><td aria-hidden="true" class="a-span10"><a class="a-size-base a-link-normal" tabindex="-1" href="/Echo-Input-Schwarz-Lautsprecher-5-mm-Audioeingang/product-reviews/B07C76F3P2/ref=cm_cr_dp_d_hist_5?ie=UTF8&amp;filterByStar=five_star&amp;reviewerType=all_reviews#reviews-filter-bar"><div class="a-meter 5star" aria-label="57%"><div class="a-meter-bar" style="width: 57%;"></div></div></a></td><td aria-hidden="true" class="a-text-right aok-nowrap"><a class="a-size-base a-link-normal 5star histogram-review-count a-color-secondary" tabindex="-1" href="/Echo-Input-Schwarz-Lautsprecher-5-mm-Audioeingang/product-reviews/B07C76F3P2/ref=cm_cr_dp_d_hist_5?ie=UTF8&amp;filterByStar=five_star&amp;reviewerType=all_reviews#reviews-filter-bar">57%</a><span class="a-letter-space"></span></td></tr><tr data-reftag="cm_cr_dp_d_hist_4" data-reviews-state-param="{&quot;filterByStar&quot;:&quot;four_star&quot;,&quot;pageNumber&quot;:&quot;1&quot;}" class="a-histogram-row"><td class="aok-nowrap"><a aria-label="4 Sterne (17%)" class="a-size-base a-link-normal 4star" title="4 Sterne" href="/Echo-Input-Schwarz-Lautsprecher-5-mm-Audioeingang/product-reviews/B07C76F3P2/ref=cm_cr_dp_d_hist_4?ie=UTF8&amp;filterByStar=four_star&amp;reviewerType=all_reviews#reviews-filter-bar">4 Sterne</a><span class="a-letter-space"></span></td><td aria-hidden="true" class="a-span10"><a class="a-size-base a-link-normal" tabindex="-1" href="/Echo-Input-Schwarz-Lautsprecher-5-mm-Audioeingang/product-reviews/B07C76F3P2/ref=cm_cr_dp_d_hist_4?ie=UTF8&amp;filterByStar=four_star&amp;reviewerType=all_reviews#reviews-filter-bar"><div class="a-meter 4star" aria-label="17%"><div class="a-meter-bar" style="width: 17%;"></div></div></a></td><td aria-hidden="true" class="a-text-right aok-nowrap"><a class="a-size-base a-link-normal 4star histogram-review-count a-color-secondary" tabindex="-1" href="/Echo-Input-Schwarz-Lautsprecher-5-mm-Audioeingang/product-reviews/B07C76F3P2/ref=cm_cr_dp_d_hist_4?ie=UTF8&amp;filterByStar=four_star&amp;reviewerType=all_reviews#reviews-filter-bar">17%</a><span class="a-letter-space"></span></td></tr><tr data-reftag="cm_cr_dp_d_hist_3" data-reviews-state-param="{&quot;filterByStar&quot;:&quot;three_star&quot;,&quot;pageNumber&quot;:&quot;1&quot;}" class="a-histogram-row"><td class="aok-nowrap"><a aria-label="3 Sterne (9%)" class="a-size-base a-link-normal 3star" title="3 Sterne" href="/Echo-Input-Schwarz-Lautsprecher-5-mm-Audioeingang/product-reviews/B07C76F3P2/ref=cm_cr_dp_d_hist_3?ie=UTF8&amp;filterByStar=three_star&amp;reviewerType=all_reviews#reviews-filter-bar">3 Sterne</a><span class="a-letter-space"></span></td><td aria-hidden="true" class="a-span10"><a class="a-size-base a-link-normal" tabindex="-1" href="/Echo-Input-Schwarz-Lautsprecher-5-mm-Audioeingang/product-reviews/B07C76F3P2/ref=cm_cr_dp_d_hist_3?ie=UTF8&amp;filterByStar=three_star&amp;reviewerType=all_reviews#reviews-filter-bar"><div class="a-meter 3star" aria-label="9%"><div class="a-meter-bar" style="width: 9%;"></div></div></a></td><td aria-hidden="true" class="a-text-right aok-nowrap"><a class="a-size-base a-link-normal 3star histogram-review-count a-color-secondary" tabindex="-1" href="/Echo-Input-Schwarz-Lautsprecher-5-mm-Audioeingang/product-reviews/B07C76F3P2/ref=cm_cr_dp_d_hist_3?ie=UTF8&amp;filterByStar=three_star&amp;reviewerType=all_reviews#reviews-filter-bar">9%</a><span class="a-letter-space"></span></td></tr><tr class="a-histogram-row"><td class="aok-nowrap"><span aria-hidden="true" class="a-size-base">2 Sterne</span><span class="a-offscreen">2 Sterne (0%)</span><span class="a-letter-space"></span></td><td aria-hidden="true" class="a-span10"><div class="a-meter" aria-label="0%"><div class="a-meter-bar" style="width: 0%;"></div></div></td><td aria-hidden="true" class="a-text-right aok-nowrap"><span class="a-size-base">0%</span><span class="a-letter-space"></span></td></tr><tr data-reftag="cm_cr_dp_d_hist_1" data-reviews-state-param="{&quot;filterByStar&quot;:&quot;one_star&quot;,&quot;pageNumber&quot;:&quot;1&quot;}" class="a-histogram-row"><td class="aok-nowrap"><a aria-label="1 Stern (17%)" class="a-size-base a-link-normal 1star" title="1 Stern" href="/Echo-Input-Schwarz-Lautsprecher-5-mm-Audioeingang/product-reviews/B07C76F3P2/ref=cm_cr_dp_d_hist_1?ie=UTF8&amp;filterByStar=one_star&amp;reviewerType=all_reviews#reviews-filter-bar">1 Stern</a><span class="a-letter-space"></span></td><td aria-hidden="true" class="a-span10"><a class="a-size-base a-link-normal" tabindex="-1" href="/Echo-Input-Schwarz-Lautsprecher-5-mm-Audioeingang/product-reviews/B07C76F3P2/ref=cm_cr_dp_d_hist_1?ie=UTF8&amp;filterByStar=one_star&amp;reviewerType=all_reviews#reviews-filter-bar"><div class="a-meter 1star" aria-label="17%"><div class="a-meter-bar" style="width: 17%;"></div></div></a></td><td aria-hidden="true" class="a-text-right aok-nowrap"><a class="a-size-base a-link-normal 1star histogram-review-count a-color-secondary" tabindex="-1" href="/Echo-Input-Schwarz-Lautsprecher-5-mm-Audioeingang/product-reviews/B07C76F3P2/ref=cm_cr_dp_d_hist_1?ie=UTF8&amp;filterByStar=one_star&amp;reviewerType=all_reviews#reviews-filter-bar">17%</a><span class="a-letter-space"></span></td></tr></table></span></div></div></div></span>
    <hr class="a-spacing-large a-spacing-top-large a-divider-normal"><span class="cr-widget-SummaryAttribute" data-hook="cr-widget-SummaryAttribute"></span>
  <h3 data-hook="solicitation-title" class="a-spacing-micro">Dieses Produkt bewerten</h3><div data-hook="share-your-thoughts-text" id="dp-summary-share-your-thoughts" class="a-row a-spacing-medium">Sagen Sie Ihre Meinung zu diesem Artikel</div><div class="a-row"><span class="a-button a-button-base writeReviewButton cm-cr-button-wide"><span class="a-button-inner"><a href="/review/create-review/ref=cm_cr_dp_d_wr_but_top?ie=UTF8&amp;channel=glance-detail&amp;asin=B07C76F3P2" data-hook="write-review-button" class="a-button-text" role="button">Kundenrezension verfassen</a></span></span></div><hr class="a-spacing-extra-large a-spacing-top-extra-large a-divider-normal"></div><div class="a-fixed-left-grid-col a-col-right" style="padding-left:2.5%;float:left;"><div class="a-row cm_cr_grid_center_container"><div class="a-fixed-right-grid-col cm_cr_grid_center_left" style="float:left;"></div><div class="a-fixed-right-grid-col cm_cr_grid_center_right" style="float:left;"><span class="cr-widget-MedleyCustomerImages" data-hook="cr-widget-MedleyCustomerImages">
      <div class="a-popover-preload" id="a-popover-reviews-image-gallery"><div class="reviewLightboxPopoverContainer" data-hook="customer-images-modal">
      <div class="reviewsLightbox" id="reviews-image-gallery"></div>
    </div>
  </div><div id="reviews-image-gallery-container" data-asin="B07C76F3P2" data-hook="customer-images-widget" class="a-section a-spacing-medium reviews-customer-images"><div class="a-row"><h3>Kundenbilder</h3></div><div class="a-row a-spacing-small a-spacing-top-small"><div class="review-image-tile" data-hook="review-image-tile-gallery">
          <img alt="Kundenbild" src="https://images-na.ssl-images-amazon.com/images/I/51S3t7d8qNL._CR0,204,1224,1224_UX175.jpg" class="a-dynamic-image cr-customer-image-thumbnail" width="22.5%" data-a-dynamic-image="{&quot;https://images-na.ssl-images-amazon.com/images/I/51S3t7d8qNL._CR0,204,1224,1224_UX175.jpg&quot;:[175,175],&quot;https://images-na.ssl-images-amazon.com/images/I/51S3t7d8qNL._CR0,204,1224,1224_UX64.jpg&quot;:[64,64]}"></div>
      <div class="review-image-tile" data-hook="review-image-tile-gallery">
          <img alt="Kundenbild" src="https://images-na.ssl-images-amazon.com/images/I/61gFfqJ2G+L._CR0,204,1224,1224_UX175.jpg" class="a-dynamic-image cr-customer-image-thumbnail" width="22.5%" data-a-dynamic-image="{&quot;https://images-na.ssl-images-amazon.com/images/I/61gFfqJ2G+L._CR0,204,1224,1224_UX175.jpg&quot;:[175,175],&quot;https://images-na.ssl-images-amazon.com/images/I/61gFfqJ2G+L._CR0,204,1224,1224_UX64.jpg&quot;:[64,64]}"></div>
      <div class="review-image-tile" data-hook="review-image-tile-gallery">
          <img alt="Kundenbild" src="https://images-na.ssl-images-amazon.com/images/I/51jdIWHtPFL._CR204,0,1224,1224_UX175.jpg" class="a-dynamic-image cr-customer-image-thumbnail" width="22.5%" data-a-dynamic-image="{&quot;https://images-na.ssl-images-amazon.com/images/I/51jdIWHtPFL._CR204,0,1224,1224_UX64.jpg&quot;:[64,64],&quot;https://images-na.ssl-images-amazon.com/images/I/51jdIWHtPFL._CR204,0,1224,1224_UX175.jpg&quot;:[175,175]}"></div>
      <div class="review-image-tile" data-hook="review-image-tile-gallery">
          <img alt="Kundenbild" src="https://images-na.ssl-images-amazon.com/images/I/81Ns815amoL._CR0,412,1060,1060_UX175.jpg" class="a-dynamic-image cr-customer-image-thumbnail" width="22.5%" data-a-dynamic-image="{&quot;https://images-na.ssl-images-amazon.com/images/I/81Ns815amoL._CR0,412,1060,1060_UX175.jpg&quot;:[175,175],&quot;https://images-na.ssl-images-amazon.com/images/I/81Ns815amoL._CR0,412,1060,1060_UX64.jpg&quot;:[64,64]}"></div>
      </div><div class="a-row"><a data-hook="see-all-images-link" class="a-link-normal reviews-image-gallery-link" href="#CustomerImages">Alle Kundenbilder anzeigen</a></div><div style="display:none;">
        <span class="a-declarative" data-action="a-modal" data-a-modal="{&quot;name&quot;:&quot;reviews-image-gallery&quot;}"><a href="javascript:void(0)" class="a-popover-trigger a-declarative"><i class="a-icon a-icon-popover"></i></a></span></div>

  </div></span>
  <span class="cr-widget-Lighthut" data-hook="cr-widget-Lighthut">
      <div id="cr-dp-desktop-lighthut"
  class="cr-lighthut-boundary cr-lighthouse-anchor-buffer celwidget">
  <div id="cr-dp-lighthut" data-hook="lighthut-widget" class="a-section a-spacing-extra-large cr-asin-B07C76F3P2 celwidget">

<span data-cr-trigger-on-view='{"ajaxUrl":"/hz/reviews-render/ajax/lighthut/report/","ajaxParamsMap":{"lighthouseTerms":"echo input/echo dot/echo geräte/lautsprecher/gerät/box/verbindung/anlage/verbunden/großen/kopplung/multiroom/spotify/lieferumfang/mikrofone/music/netzteil/show/smart/verbinden/befehle/benötigt/einrichtung/feststellen/gehe"}}'></span>
<h3 data-hook="lighthut-title" class="a-spacing-base">Lesen Sie Rezensionen, die folgende Stichworte enthalten</h3><div class="a-row"><style>
  .cr-lighthouse-anchor-buffer {
    padding-top :  60px;
    margin-top  : -60px;
  }

  .cr-lighthouse-term {
    background-color : #D7E8EA;
    padding          : 0px 14px;
    line-height      : 29px;
    margin           : 0px 10px 14px 0px;
    border-bottom    : solid 1px #969696;
    display          : inline-block;
    font-size        : 13px;
    color            : #111111;
  }

  .cr-mobile-lighthouse-term {
    background-color : #D7E8EA;
    padding          : 0px 14px;
    line-height      : 40px;
    margin           : 0px 10px 13px 0px;
    border-bottom    : solid 1px #969696;
    display          : inline-block;
    font-size        : 16px;
    color            : #111111;
  }

  .cr-lighthouse-term.cr-lighthut-term-selected {
    background-color : #00464F;
    color : #FFFFFF;
  }

  .cr-mobile-lighthouse-term.selected {
    display : none;
  }

  .cr-lighthouse-terms {
    max-height : 118px; 
    overflow   : hidden;
  }

  .cr-mobile-lighthouse-terms {
    max-height: 324px; 
    overflow : hidden;
  }

  .cr-lighthut-boundary {
    width     : 582px;
  }

</style>
<div data-hook="lighthut-terms-list" id="cr-lighthut-1-" class="a-row cr-lighthut"><div class="cr-lighthouse-terms">
    <span class="a-declarative" data-action="reviews:filter-action:apply" data-reviews:filter-action:apply="{&quot;scrollToSelector&quot;:&quot;.cr-lighthouse-anchor-buffer&quot;,&quot;filterByKeyword&quot;:&quot;echo input&quot;,&quot;toggleFilters&quot;:&quot;true&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;}"><a data-reftag="cm_cr_dp_d_lh_0" data-reviews-state-param="" class="a-link-normal a-text-normal" href="/Echo-Input-Schwarz-Lautsprecher-5-mm-Audioeingang/product-reviews/B07C76F3P2/ref=cm_cr_dp_d_lh_0?ie=UTF8&amp;filterByKeyword=echo+input&amp;pageNumber=1&amp;reviewerType=all_reviews#reviews-filter-bar"><span id="cr-lighthouse-term-echo_input"
        class="cr-lighthouse-term "
        data-hook="lighthouse-term">
        echo input</span>
    </a></span><span class="a-declarative" data-action="reviews:filter-action:apply" data-reviews:filter-action:apply="{&quot;scrollToSelector&quot;:&quot;.cr-lighthouse-anchor-buffer&quot;,&quot;filterByKeyword&quot;:&quot;echo dot&quot;,&quot;toggleFilters&quot;:&quot;true&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;}"><a data-reftag="cm_cr_dp_d_lh_1" data-reviews-state-param="" class="a-link-normal a-text-normal" href="/Echo-Input-Schwarz-Lautsprecher-5-mm-Audioeingang/product-reviews/B07C76F3P2/ref=cm_cr_dp_d_lh_1?ie=UTF8&amp;filterByKeyword=echo+dot&amp;pageNumber=1&amp;reviewerType=all_reviews#reviews-filter-bar"><span id="cr-lighthouse-term-echo_dot"
        class="cr-lighthouse-term "
        data-hook="lighthouse-term">
        echo dot</span>
    </a></span><span class="a-declarative" data-action="reviews:filter-action:apply" data-reviews:filter-action:apply="{&quot;scrollToSelector&quot;:&quot;.cr-lighthouse-anchor-buffer&quot;,&quot;filterByKeyword&quot;:&quot;echo geräte&quot;,&quot;toggleFilters&quot;:&quot;true&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;}"><a data-reftag="cm_cr_dp_d_lh_2" data-reviews-state-param="" class="a-link-normal a-text-normal" href="/Echo-Input-Schwarz-Lautsprecher-5-mm-Audioeingang/product-reviews/B07C76F3P2/ref=cm_cr_dp_d_lh_2?ie=UTF8&amp;filterByKeyword=echo+ger%C3%A4te&amp;pageNumber=1&amp;reviewerType=all_reviews#reviews-filter-bar"><span id="cr-lighthouse-term-echo_geräte"
        class="cr-lighthouse-term "
        data-hook="lighthouse-term">
        echo geräte</span>
    </a></span><span class="a-declarative" data-action="reviews:filter-action:apply" data-reviews:filter-action:apply="{&quot;scrollToSelector&quot;:&quot;.cr-lighthouse-anchor-buffer&quot;,&quot;filterByKeyword&quot;:&quot;lautsprecher&quot;,&quot;toggleFilters&quot;:&quot;true&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;}"><a data-reftag="cm_cr_dp_d_lh_3" data-reviews-state-param="" class="a-link-normal a-text-normal" href="/Echo-Input-Schwarz-Lautsprecher-5-mm-Audioeingang/product-reviews/B07C76F3P2/ref=cm_cr_dp_d_lh_3?ie=UTF8&amp;filterByKeyword=lautsprecher&amp;pageNumber=1&amp;reviewerType=all_reviews#reviews-filter-bar"><span id="cr-lighthouse-term-lautsprecher"
        class="cr-lighthouse-term "
        data-hook="lighthouse-term">
        lautsprecher</span>
    </a></span><span class="a-declarative" data-action="reviews:filter-action:apply" data-reviews:filter-action:apply="{&quot;scrollToSelector&quot;:&quot;.cr-lighthouse-anchor-buffer&quot;,&quot;filterByKeyword&quot;:&quot;gerät&quot;,&quot;toggleFilters&quot;:&quot;true&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;}"><a data-reftag="cm_cr_dp_d_lh_4" data-reviews-state-param="" class="a-link-normal a-text-normal" href="/Echo-Input-Schwarz-Lautsprecher-5-mm-Audioeingang/product-reviews/B07C76F3P2/ref=cm_cr_dp_d_lh_4?ie=UTF8&amp;filterByKeyword=ger%C3%A4t&amp;pageNumber=1&amp;reviewerType=all_reviews#reviews-filter-bar"><span id="cr-lighthouse-term-gerät"
        class="cr-lighthouse-term "
        data-hook="lighthouse-term">
        gerät</span>
    </a></span><span class="a-declarative" data-action="reviews:filter-action:apply" data-reviews:filter-action:apply="{&quot;scrollToSelector&quot;:&quot;.cr-lighthouse-anchor-buffer&quot;,&quot;filterByKeyword&quot;:&quot;box&quot;,&quot;toggleFilters&quot;:&quot;true&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;}"><a data-reftag="cm_cr_dp_d_lh_5" data-reviews-state-param="" class="a-link-normal a-text-normal" href="/Echo-Input-Schwarz-Lautsprecher-5-mm-Audioeingang/product-reviews/B07C76F3P2/ref=cm_cr_dp_d_lh_5?ie=UTF8&amp;filterByKeyword=box&amp;pageNumber=1&amp;reviewerType=all_reviews#reviews-filter-bar"><span id="cr-lighthouse-term-box"
        class="cr-lighthouse-term "
        data-hook="lighthouse-term">
        box</span>
    </a></span><span class="a-declarative" data-action="reviews:filter-action:apply" data-reviews:filter-action:apply="{&quot;scrollToSelector&quot;:&quot;.cr-lighthouse-anchor-buffer&quot;,&quot;filterByKeyword&quot;:&quot;verbindung&quot;,&quot;toggleFilters&quot;:&quot;true&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;}"><a data-reftag="cm_cr_dp_d_lh_6" data-reviews-state-param="" class="a-link-normal a-text-normal" href="/Echo-Input-Schwarz-Lautsprecher-5-mm-Audioeingang/product-reviews/B07C76F3P2/ref=cm_cr_dp_d_lh_6?ie=UTF8&amp;filterByKeyword=verbindung&amp;pageNumber=1&amp;reviewerType=all_reviews#reviews-filter-bar"><span id="cr-lighthouse-term-verbindung"
        class="cr-lighthouse-term "
        data-hook="lighthouse-term">
        verbindung</span>
    </a></span><span class="a-declarative" data-action="reviews:filter-action:apply" data-reviews:filter-action:apply="{&quot;scrollToSelector&quot;:&quot;.cr-lighthouse-anchor-buffer&quot;,&quot;filterByKeyword&quot;:&quot;anlage&quot;,&quot;toggleFilters&quot;:&quot;true&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;}"><a data-reftag="cm_cr_dp_d_lh_7" data-reviews-state-param="" class="a-link-normal a-text-normal" href="/Echo-Input-Schwarz-Lautsprecher-5-mm-Audioeingang/product-reviews/B07C76F3P2/ref=cm_cr_dp_d_lh_7?ie=UTF8&amp;filterByKeyword=anlage&amp;pageNumber=1&amp;reviewerType=all_reviews#reviews-filter-bar"><span id="cr-lighthouse-term-anlage"
        class="cr-lighthouse-term "
        data-hook="lighthouse-term">
        anlage</span>
    </a></span><span class="a-declarative" data-action="reviews:filter-action:apply" data-reviews:filter-action:apply="{&quot;scrollToSelector&quot;:&quot;.cr-lighthouse-anchor-buffer&quot;,&quot;filterByKeyword&quot;:&quot;verbunden&quot;,&quot;toggleFilters&quot;:&quot;true&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;}"><a data-reftag="cm_cr_dp_d_lh_8" data-reviews-state-param="" class="a-link-normal a-text-normal" href="/Echo-Input-Schwarz-Lautsprecher-5-mm-Audioeingang/product-reviews/B07C76F3P2/ref=cm_cr_dp_d_lh_8?ie=UTF8&amp;filterByKeyword=verbunden&amp;pageNumber=1&amp;reviewerType=all_reviews#reviews-filter-bar"><span id="cr-lighthouse-term-verbunden"
        class="cr-lighthouse-term "
        data-hook="lighthouse-term">
        verbunden</span>
    </a></span><span class="a-declarative" data-action="reviews:filter-action:apply" data-reviews:filter-action:apply="{&quot;scrollToSelector&quot;:&quot;.cr-lighthouse-anchor-buffer&quot;,&quot;filterByKeyword&quot;:&quot;großen&quot;,&quot;toggleFilters&quot;:&quot;true&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;}"><a data-reftag="cm_cr_dp_d_lh_9" data-reviews-state-param="" class="a-link-normal a-text-normal" href="/Echo-Input-Schwarz-Lautsprecher-5-mm-Audioeingang/product-reviews/B07C76F3P2/ref=cm_cr_dp_d_lh_9?ie=UTF8&amp;filterByKeyword=gro%C3%9Fen&amp;pageNumber=1&amp;reviewerType=all_reviews#reviews-filter-bar"><span id="cr-lighthouse-term-großen"
        class="cr-lighthouse-term "
        data-hook="lighthouse-term">
        großen</span>
    </a></span><span class="a-declarative" data-action="reviews:filter-action:apply" data-reviews:filter-action:apply="{&quot;scrollToSelector&quot;:&quot;.cr-lighthouse-anchor-buffer&quot;,&quot;filterByKeyword&quot;:&quot;kopplung&quot;,&quot;toggleFilters&quot;:&quot;true&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;}"><a data-reftag="cm_cr_dp_d_lh_10" data-reviews-state-param="" class="a-link-normal a-text-normal" href="/Echo-Input-Schwarz-Lautsprecher-5-mm-Audioeingang/product-reviews/B07C76F3P2/ref=cm_cr_dp_d_lh_10?ie=UTF8&amp;filterByKeyword=kopplung&amp;pageNumber=1&amp;reviewerType=all_reviews#reviews-filter-bar"><span id="cr-lighthouse-term-kopplung"
        class="cr-lighthouse-term "
        data-hook="lighthouse-term">
        kopplung</span>
    </a></span><span class="a-declarative" data-action="reviews:filter-action:apply" data-reviews:filter-action:apply="{&quot;scrollToSelector&quot;:&quot;.cr-lighthouse-anchor-buffer&quot;,&quot;filterByKeyword&quot;:&quot;multiroom&quot;,&quot;toggleFilters&quot;:&quot;true&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;}"><a data-reftag="cm_cr_dp_d_lh_11" data-reviews-state-param="" class="a-link-normal a-text-normal" href="/Echo-Input-Schwarz-Lautsprecher-5-mm-Audioeingang/product-reviews/B07C76F3P2/ref=cm_cr_dp_d_lh_11?ie=UTF8&amp;filterByKeyword=multiroom&amp;pageNumber=1&amp;reviewerType=all_reviews#reviews-filter-bar"><span id="cr-lighthouse-term-multiroom"
        class="cr-lighthouse-term "
        data-hook="lighthouse-term">
        multiroom</span>
    </a></span><span class="a-declarative" data-action="reviews:filter-action:apply" data-reviews:filter-action:apply="{&quot;scrollToSelector&quot;:&quot;.cr-lighthouse-anchor-buffer&quot;,&quot;filterByKeyword&quot;:&quot;spotify&quot;,&quot;toggleFilters&quot;:&quot;true&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;}"><a data-reftag="cm_cr_dp_d_lh_12" data-reviews-state-param="" class="a-link-normal a-text-normal" href="/Echo-Input-Schwarz-Lautsprecher-5-mm-Audioeingang/product-reviews/B07C76F3P2/ref=cm_cr_dp_d_lh_12?ie=UTF8&amp;filterByKeyword=spotify&amp;pageNumber=1&amp;reviewerType=all_reviews#reviews-filter-bar"><span id="cr-lighthouse-term-spotify"
        class="cr-lighthouse-term "
        data-hook="lighthouse-term">
        spotify</span>
    </a></span><span class="a-declarative" data-action="reviews:filter-action:apply" data-reviews:filter-action:apply="{&quot;scrollToSelector&quot;:&quot;.cr-lighthouse-anchor-buffer&quot;,&quot;filterByKeyword&quot;:&quot;lieferumfang&quot;,&quot;toggleFilters&quot;:&quot;true&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;}"><a data-reftag="cm_cr_dp_d_lh_13" data-reviews-state-param="" class="a-link-normal a-text-normal" href="/Echo-Input-Schwarz-Lautsprecher-5-mm-Audioeingang/product-reviews/B07C76F3P2/ref=cm_cr_dp_d_lh_13?ie=UTF8&amp;filterByKeyword=lieferumfang&amp;pageNumber=1&amp;reviewerType=all_reviews#reviews-filter-bar"><span id="cr-lighthouse-term-lieferumfang"
        class="cr-lighthouse-term "
        data-hook="lighthouse-term">
        lieferumfang</span>
    </a></span><span class="a-declarative" data-action="reviews:filter-action:apply" data-reviews:filter-action:apply="{&quot;scrollToSelector&quot;:&quot;.cr-lighthouse-anchor-buffer&quot;,&quot;filterByKeyword&quot;:&quot;mikrofone&quot;,&quot;toggleFilters&quot;:&quot;true&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;}"><a data-reftag="cm_cr_dp_d_lh_14" data-reviews-state-param="" class="a-link-normal a-text-normal" href="/Echo-Input-Schwarz-Lautsprecher-5-mm-Audioeingang/product-reviews/B07C76F3P2/ref=cm_cr_dp_d_lh_14?ie=UTF8&amp;filterByKeyword=mikrofone&amp;pageNumber=1&amp;reviewerType=all_reviews#reviews-filter-bar"><span id="cr-lighthouse-term-mikrofone"
        class="cr-lighthouse-term "
        data-hook="lighthouse-term">
        mikrofone</span>
    </a></span><span class="a-declarative" data-action="reviews:filter-action:apply" data-reviews:filter-action:apply="{&quot;scrollToSelector&quot;:&quot;.cr-lighthouse-anchor-buffer&quot;,&quot;filterByKeyword&quot;:&quot;music&quot;,&quot;toggleFilters&quot;:&quot;true&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;}"><a data-reftag="cm_cr_dp_d_lh_15" data-reviews-state-param="" class="a-link-normal a-text-normal" href="/Echo-Input-Schwarz-Lautsprecher-5-mm-Audioeingang/product-reviews/B07C76F3P2/ref=cm_cr_dp_d_lh_15?ie=UTF8&amp;filterByKeyword=music&amp;pageNumber=1&amp;reviewerType=all_reviews#reviews-filter-bar"><span id="cr-lighthouse-term-music"
        class="cr-lighthouse-term "
        data-hook="lighthouse-term">
        music</span>
    </a></span><span class="a-declarative" data-action="reviews:filter-action:apply" data-reviews:filter-action:apply="{&quot;scrollToSelector&quot;:&quot;.cr-lighthouse-anchor-buffer&quot;,&quot;filterByKeyword&quot;:&quot;netzteil&quot;,&quot;toggleFilters&quot;:&quot;true&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;}"><a data-reftag="cm_cr_dp_d_lh_16" data-reviews-state-param="" class="a-link-normal a-text-normal" href="/Echo-Input-Schwarz-Lautsprecher-5-mm-Audioeingang/product-reviews/B07C76F3P2/ref=cm_cr_dp_d_lh_16?ie=UTF8&amp;filterByKeyword=netzteil&amp;pageNumber=1&amp;reviewerType=all_reviews#reviews-filter-bar"><span id="cr-lighthouse-term-netzteil"
        class="cr-lighthouse-term "
        data-hook="lighthouse-term">
        netzteil</span>
    </a></span><span class="a-declarative" data-action="reviews:filter-action:apply" data-reviews:filter-action:apply="{&quot;scrollToSelector&quot;:&quot;.cr-lighthouse-anchor-buffer&quot;,&quot;filterByKeyword&quot;:&quot;show&quot;,&quot;toggleFilters&quot;:&quot;true&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;}"><a data-reftag="cm_cr_dp_d_lh_17" data-reviews-state-param="" class="a-link-normal a-text-normal" href="/Echo-Input-Schwarz-Lautsprecher-5-mm-Audioeingang/product-reviews/B07C76F3P2/ref=cm_cr_dp_d_lh_17?ie=UTF8&amp;filterByKeyword=show&amp;pageNumber=1&amp;reviewerType=all_reviews#reviews-filter-bar"><span id="cr-lighthouse-term-show"
        class="cr-lighthouse-term "
        data-hook="lighthouse-term">
        show</span>
    </a></span><span class="a-declarative" data-action="reviews:filter-action:apply" data-reviews:filter-action:apply="{&quot;scrollToSelector&quot;:&quot;.cr-lighthouse-anchor-buffer&quot;,&quot;filterByKeyword&quot;:&quot;smart&quot;,&quot;toggleFilters&quot;:&quot;true&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;}"><a data-reftag="cm_cr_dp_d_lh_18" data-reviews-state-param="" class="a-link-normal a-text-normal" href="/Echo-Input-Schwarz-Lautsprecher-5-mm-Audioeingang/product-reviews/B07C76F3P2/ref=cm_cr_dp_d_lh_18?ie=UTF8&amp;filterByKeyword=smart&amp;pageNumber=1&amp;reviewerType=all_reviews#reviews-filter-bar"><span id="cr-lighthouse-term-smart"
        class="cr-lighthouse-term "
        data-hook="lighthouse-term">
        smart</span>
    </a></span><span class="a-declarative" data-action="reviews:filter-action:apply" data-reviews:filter-action:apply="{&quot;scrollToSelector&quot;:&quot;.cr-lighthouse-anchor-buffer&quot;,&quot;filterByKeyword&quot;:&quot;verbinden&quot;,&quot;toggleFilters&quot;:&quot;true&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;}"><a data-reftag="cm_cr_dp_d_lh_19" data-reviews-state-param="" class="a-link-normal a-text-normal" href="/Echo-Input-Schwarz-Lautsprecher-5-mm-Audioeingang/product-reviews/B07C76F3P2/ref=cm_cr_dp_d_lh_19?ie=UTF8&amp;filterByKeyword=verbinden&amp;pageNumber=1&amp;reviewerType=all_reviews#reviews-filter-bar"><span id="cr-lighthouse-term-verbinden"
        class="cr-lighthouse-term "
        data-hook="lighthouse-term">
        verbinden</span>
    </a></span></div>

</div></div></div></div></span>
  <span class="cr-widget-FocalReviews" data-hook="cr-widget-FocalReviews">
      <div class="a-section a-spacing-large"><div class="card-padding">
    <a id="customer-reviews-content" class="a-link-normal celwidget" href="#"></a><div id="cm-cr-dp-review-header" class="a-section a-spacing-small"><h3 class="a-spacing-small"><span data-hook="top-customer-reviews-title" class="a-size-base">1-6 von 23 Rezensionen werden angezeigt</span></h3></div><div id="cm-cr-dp-review-sort-type" data-reftag="cm_cr_dp_d_fltrs_srt" class="a-section a-spacing-small"><span class="a-declarative" data-action="reviews:filter-action:change" data-reviews:filter-action:change="{&quot;filterType&quot;:&quot;sortOrder&quot;}"><span class="a-dropdown-container"><select name="" autocomplete="off" id="cm-cr-sort-dropdown" tabIndex="-1" class="a-native-dropdown"><option value="helpful" data-a-css-class="cm-cr-sort-order-option" selected>Spitzenrezensionen</option><option value="recent" data-a-css-class="cm-cr-sort-order-option">Neueste zuerst</option></select><span tabIndex="-1" data-a-class="cm-cr-dp-filter-dropdown" class="a-button a-button-dropdown a-button-small cm-cr-dp-filter-dropdown"><span class="a-button-inner"><span class="a-button-text a-declarative" data-action="a-dropdown-button" role="button" tabIndex="0" aria-hidden="true"><span class="a-dropdown-prompt">Spitzenrezensionen</span></span><i class="a-icon a-icon-dropdown"></i></span></span></span></span></div><div class="a-row"><div class="a-section a-spacing-extra-large a-spacing-top-medium a-text-center review-load-error aok-hidden"><div class="a-box a-alert a-alert-error cr-error" aria-live="assertive" role="alert"><div class="a-box-inner a-alert-container"><h4 class="a-alert-heading">Derzeit tritt ein Problem beim Filtern der Rezensionen auf. Bitte versuchen Sie es später noch einmal.</h4><i class="a-icon a-icon-alert"></i><div class="a-alert-content"></div></div></div></div><div class="a-spinner-wrapper cr-reviews-loading aok-hidden"><span class="a-spinner a-spinner-medium"></span></div><div class="a-section reviews-content filterable-reviews-content celwidget"><div id="cm-cr-dp-review-list" data-hook="top-customer-reviews-widget" class="a-section review-views celwidget"><div id="R2QABBJPNLPK6N" data-hook="review" class="a-section review"><div id="customer_review-R2QABBJPNLPK6N" class="a-section celwidget"><div data-hook="genome-widget" class="a-row a-spacing-mini"><a href="/gp/profile/amzn1.account.AHHYIU77JQEXBTG5WKP2BFX5DE2Q/ref=cm_cr_dp_d_gw_tr?ie=UTF8" class="a-profile" data-a-size="small"><div aria-hidden="true" class="a-profile-avatar-wrapper"><div class="a-profile-avatar"><img src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif" class="a-lazy-loaded" data-src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png"><noscript><img src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png"></noscript></div></div><div class="a-profile-content"><span class="a-profile-name">Kraft</span></div></a></div><div class="a-row"><a class="a-link-normal" title="5,0 von 5 Sternen" href="/gp/customer-reviews/R2QABBJPNLPK6N/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&amp;ASIN=B07C76F3P2"><i data-hook="review-star-rating" class="a-icon a-icon-star a-star-5 review-rating"><span class="a-icon-alt">5,0 von 5 Sternen</span></i></a><span class="a-letter-space"></span><a data-hook="review-title" class="a-size-base a-link-normal review-title a-color-base a-text-bold" href="/gp/customer-reviews/R2QABBJPNLPK6N/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&amp;ASIN=B07C76F3P2">Willkommen im Auto @Alexa</a></div><span data-hook="review-date" class="a-size-base a-color-secondary review-date">18. Dezember 2018</span><div class="a-row a-spacing-mini review-data review-format-strip"><span data-hook="format-strip-linkless" class="a-color-secondary">Geräteausstattung: Echo Input<i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i>Stil: Schwarzes Echo Input<i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i>Farbe: Schwarzes Echo Input</span><i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i><span data-hook="avp-badge-linkless" class="a-size-mini a-color-state a-text-bold">Verifizierter Kauf</span></div><div class="a-row a-spacing-small review-data"><span data-hook="review-body" class="a-size-base review-text"><div aria-live="polite" data-a-expander-name="review_text_read_more" data-a-expander-collapsed-height="300" class="a-expander-collapsed-height a-row a-expander-container a-expander-partial-collapse-container" style="max-height:300px"><div data-hook="review-collapsed" aria-expanded="false" class="a-expander-content a-expander-partial-collapse-content">Wie der Titel schon sagt, hat mein Echo Input den Weg ins Auto gefunden.<br />Die Stromzufuhr erfolgt über den USB-Port im KFZ. Sollte an dieser Stelle die Leistung nicht ausreichen, so könnte man mit einem Adapter für den Zigarettenanzünder bessere Werte erzielen.<br />Per 3,5mm-Klinkenkabel (im Lieferumfang) die kleine Scheibe dann noch an den AUX-In gekoppelt.<br />Nun verbindet sich der Echo Input mit dem WLAN-Hotspot meines Handys. Nach Start des Fahrzeugs dauert es gefühlt ca. 30 Sekunden, bis Alexa einsatzbereit ist.<br /><br />Die Sprachsteuerung funktioniert wie gewohnt gut, nur bei zu lauter Musik kommen Befehle nicht an, aber das ist bei den großen Geschwistern der Echo-Familie ja nicht anders.<br /><br />Kurzum bin ich sehr zufrieden mit dem Echon Input im Auto und kann nun auf Amazon Music Unlimited zugreifen, ohne mein Handy mit Bluetooth ans Auto zu koppeln.<br /><br />Update: Passend zum Einsatzort lässt sich der Echo auch mit "Car-Lexa" aktivieren. :-D</div><div class="a-expander-header a-expander-partial-collapse-header"><div class="a-expander-content-fade"></div><a href="javascript:void(0)" data-hook="expand-collapse-read-more-less" data-action="a-expander-toggle" class="a-declarative" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;Lesen Sie weiter&quot;, &quot;collapse_prompt&quot;:&quot;Weniger lesen&quot;}"><i class="a-icon a-icon-extender-expand"></i><span class="a-expander-prompt">Lesen Sie weiter</span></a></div></div></span></div><div data-hook="review-comments" class="a-row review-comments"><span class="cr-vote" data-hook="review-voting-widget">

  <div class="a-row a-spacing-small"><span data-hook="helpful-vote-statement" class="a-size-base a-color-tertiary cr-vote-text">33 Personen fanden diese Informationen hilfreich</span></div><div class="cr-helpful-button cr-vote-component aok-float-left">
      <span class="a-declarative" data-action="reviews:vote-action" data-reviews:vote-action="{&quot;voteInstanceId&quot;:&quot;R2QABBJPNLPK6N&quot;,&quot;ajaxUrl&quot;:&quot;/hz/reviews-render/ajax/vote/submit/ref=cm_cr_dp_d_vote_lft&quot;,&quot;voteValue&quot;:&quot;1&quot;,&quot;cssSelectors&quot;:{&quot;onError&quot;:&quot;.cr-vote-error&quot;,&quot;inFlight&quot;:&quot;.cr-vote-feedback&quot;,&quot;hideVoteComponents&quot;:&quot;.cr-vote-component&quot;,&quot;onSuccess&quot;:&quot;.cr-vote-success&quot;},&quot;csrfT&quot;:&quot;gln20lOs4JyY1BNUOMLVt1E7ELBcJ0n+9muugvgAAAABAAAAAFwrz61yYXcAAAAA+4kUEk/7iMGR3xPcX6iU&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;,&quot;voteDimension&quot;:&quot;Helpful&quot;}"><span class="a-button a-button-base"><span class="a-button-inner"><input data-hook="vote-helpful-button" class="a-button-input" type="submit"><span class="a-button-text" aria-hidden="true"><div class="cr-helpful-text">
            Nützlich</div>
        </span></span></span></span></div>
  <span class="cr-vote-feedback cr-vote-component aok-hidden">Senden von Feedback...</span><span data-hook="vote-success-message" class="cr-vote-success cr-vote-component aok-hidden"><div class="a-box a-alert-inline a-alert-inline-success cr-vote-helpful-yes"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">Vielen Dank für Ihr Feedback.</div></div></div></span><span class="cr-vote-error cr-vote-component aok-hidden"><div class="a-box a-alert-inline a-alert-inline-error" aria-live="assertive" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">Wir konnten Ihre Stimmabgabe leider nicht speichern. Bitte versuchen Sie es später noch einmal.</div></div></div></span></span>

<i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i><a data-hook="review-comment" class="a-size-base a-link-normal a-color-secondary a-text-normal" href="/gp/customer-reviews/R2QABBJPNLPK6N/ref=cm_cr_dp_d_rvw_btm?ie=UTF8&amp;ASIN=B07C76F3P2#wasThisHelpful">Kommentar</a><span class="cr-footer-line-height">
    <span><i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i><span class="a-declarative" data-action="cr-popup" data-cr-popup="{&quot;width&quot;:&quot;580&quot;,&quot;title&quot;:&quot;ReportAbuse&quot;,&quot;url&quot;:&quot;/hz/reviews-render/report-abuse?ie=UTF8&amp;voteDomain=Reviews&amp;ref=cm_cr_dp_d_rvw_hlp&amp;csrfT=gln20lOs4JyY1BNUOMLVt1E7ELBcJ0n%2B9muugvgAAAABAAAAAFwrz61yYXcAAAAA%2B4kUEk%2F7iMGR3xPcX6iU&amp;entityId=R2QABBJPNLPK6N&amp;sessionId=262-9898842-9713804&quot;,&quot;height&quot;:&quot;380&quot;}"><a class="a-size-base a-link-normal a-color-secondary report-abuse-link a-text-normal" href="/hz/reviews-render/report-abuse?ie=UTF8&amp;voteDomain=Reviews&amp;ref=cm_cr_dp_d_rvw_hlp&amp;csrfT=gln20lOs4JyY1BNUOMLVt1E7ELBcJ0n%2B9muugvgAAAABAAAAAFwrz61yYXcAAAAA%2B4kUEk%2F7iMGR3xPcX6iU&amp;entityId=R2QABBJPNLPK6N&amp;sessionId=262-9898842-9713804">Missbrauch melden</a></span></span></span>

</div></div></div><div id="RK7M3H5TP7S0O" data-hook="review" class="a-section review"><div id="customer_review-RK7M3H5TP7S0O" class="a-section celwidget"><div data-hook="genome-widget" class="a-row a-spacing-mini"><a href="/gp/profile/amzn1.account.AE6MGCF7UORSUQFMVNENGY3YDU5Q/ref=cm_cr_dp_d_gw_tr?ie=UTF8" class="a-profile" data-a-size="small"><div aria-hidden="true" class="a-profile-avatar-wrapper"><div class="a-profile-avatar"><img src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif" class="a-lazy-loaded" data-src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png"><noscript><img src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png"></noscript></div></div><div class="a-profile-content"><span class="a-profile-name">Schlendrian</span></div></a></div><div class="a-row"><a class="a-link-normal" title="5,0 von 5 Sternen" href="/gp/customer-reviews/RK7M3H5TP7S0O/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&amp;ASIN=B07C76F3P2"><i data-hook="review-star-rating" class="a-icon a-icon-star a-star-5 review-rating"><span class="a-icon-alt">5,0 von 5 Sternen</span></i></a><span class="a-letter-space"></span><a data-hook="review-title" class="a-size-base a-link-normal review-title a-color-base a-text-bold" href="/gp/customer-reviews/RK7M3H5TP7S0O/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&amp;ASIN=B07C76F3P2">Der Echo Input passt in seine Niesche...</a></div><span data-hook="review-date" class="a-size-base a-color-secondary review-date">20. Dezember 2018</span><div class="a-row a-spacing-mini review-data review-format-strip"><span data-hook="format-strip-linkless" class="a-color-secondary">Geräteausstattung: Echo Input<i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i>Stil: Schwarzes Echo Input<i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i>Farbe: Schwarzes Echo Input</span><i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i><span data-hook="avp-badge-linkless" class="a-size-mini a-color-state a-text-bold">Verifizierter Kauf</span></div><div class="a-row a-spacing-small review-data"><span data-hook="review-body" class="a-size-base review-text"><div aria-live="polite" data-a-expander-name="review_text_read_more" data-a-expander-collapsed-height="300" class="a-expander-collapsed-height a-row a-expander-container a-expander-partial-collapse-container" style="max-height:300px"><div data-hook="review-collapsed" aria-expanded="false" class="a-expander-content a-expander-partial-collapse-content">Ich habe den Echo Input gekauft um die Möglichkeiten des Aufbaus eines Multiroom-Systems über Alexa und Echos zu testen. Einen EchoDot der 3. Generation hatte ich mir schon zugelegt und war eigentlich ganz zufrieden mit den Möglichkeiten, nur Multiroom konnte ich nicht testen mit einem Lautsprecher.<br /><br />Wie immer kam das Amazon Paket sehr schnell an und anders als beim EchoDot war die Installation (also das Bekanntmachen des WLANs) absolut problemlos und ging innerhalb von zwei Minuten mittles der Alexa App.<br /><br />Wie in anderen Rezensionen schon beschrieben kann man ihn per Klinke an einen Lautsprecher anschließen oder aber auch per Bluetooth.<br />Ist der Lautsprecher über Bluetooth verbunden, funktioniert der Input als Sender und kann somit kabellos die Box mit Musik befeuern. Leider ist es hier nicht möglich mehrere Lautsprecher mit dem Input zu verbinden, was natürlich grandios wäre. Ich gehe also davon aus, das noch kein Bluetooth 5 an Board ist. Auch am Klinkenanschluss war kein weiterer Lausprecher nutzbar oder in umgekehrtem Wege dem Gerät über das Kabel Musik zuspielbar.<br />Wenn der Input per Klinke mit dem Lautsprecher verbunden ist kann man den Input als Bluetooth Empfänger nutzen. Also einfach mit dem Telefon koppeln und los geht's. Natürlich ist in beiden Modi auch das abspielen über Alexa möglich.<br />Nun was soll ich noch zum Multiroom sagen, es ist einfach über die Alexa App einzurichten. die Geräte können beliebig auch mehreren Bereichen zugewiesen werden. Es ist also möglich drei Bereiche (Etage1, Etage2 und überall)  zu definieren und je nachdem was man sagt spielt Alexa die Musik in Etage1 oder 2 oder überall ab. Was ich allerdings nicht hinbekommen habe, ist das Bluetooth Signal zu restreamen - also die Musik vom über Bluetooth angeschlossenen Telefon auf weitere Echo Geräte als Multiroom abzuspielen. Mit den skills über alexa  geht das allerdings problemlos - z.B. "Spiele Weihnachtsmusik über Spotify überall ab".<br /><br />Da der Input wirklich klein und dünn ist und auch im Stromverbrauch sehr genügsam kann man ihn gut hinter einem andere gerät anbringen und die Stromversorgung auch über einen USB-Port realisieren. Auch das hat in einem Test hier mit einer günstigen portablen Box, die einen USB Anschluss zur Stromversorgung externer Geräte hat, tadellos funktioniert.<br /><br />Ich denke damit ist alles gesagt und ergänzend sind hier ja noch genügend andere gute Rezensionen die sich mit weiteren Aspekten des Echo Input beschäftigen.<br />ich habe eigentlich bekommen was ich auch erwartet habe. Die Sender und Empfänger Modi finde ich wirklich gut. Sachen wie Restreaming oder mehrere Lautsprecher an einem Input fände ich zwar toll, aber es muss ja noch verbesserungspotential für weitere Generationen geben. Daher gebe ich hier 5 Sterne, da er macht was er soll und durch die Funktion als BT-Sender, der USB-Stromzufuhr und aufgrund der Bauform durchaus seine Daseinsberechtigung hat.</div><div class="a-expander-header a-expander-partial-collapse-header"><div class="a-expander-content-fade"></div><a href="javascript:void(0)" data-hook="expand-collapse-read-more-less" data-action="a-expander-toggle" class="a-declarative" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;Lesen Sie weiter&quot;, &quot;collapse_prompt&quot;:&quot;Weniger lesen&quot;}"><i class="a-icon a-icon-extender-expand"></i><span class="a-expander-prompt">Lesen Sie weiter</span></a></div></div></span></div><div data-hook="review-comments" class="a-row review-comments"><span class="cr-vote" data-hook="review-voting-widget">

  <div class="a-row a-spacing-small"><span data-hook="helpful-vote-statement" class="a-size-base a-color-tertiary cr-vote-text">5 Personen fanden diese Informationen hilfreich</span></div><div class="cr-helpful-button cr-vote-component aok-float-left">
      <span class="a-declarative" data-action="reviews:vote-action" data-reviews:vote-action="{&quot;voteInstanceId&quot;:&quot;RK7M3H5TP7S0O&quot;,&quot;ajaxUrl&quot;:&quot;/hz/reviews-render/ajax/vote/submit/ref=cm_cr_dp_d_vote_lft&quot;,&quot;voteValue&quot;:&quot;1&quot;,&quot;cssSelectors&quot;:{&quot;onError&quot;:&quot;.cr-vote-error&quot;,&quot;inFlight&quot;:&quot;.cr-vote-feedback&quot;,&quot;hideVoteComponents&quot;:&quot;.cr-vote-component&quot;,&quot;onSuccess&quot;:&quot;.cr-vote-success&quot;},&quot;csrfT&quot;:&quot;gp0Td+srmENnmvqGrJRUFvjs5MQKA5Kppv5pf7kAAAABAAAAAFwrz61yYXcAAAAA+4kUEk/7iMGR3xPcX6iU&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;,&quot;voteDimension&quot;:&quot;Helpful&quot;}"><span class="a-button a-button-base"><span class="a-button-inner"><input data-hook="vote-helpful-button" class="a-button-input" type="submit"><span class="a-button-text" aria-hidden="true"><div class="cr-helpful-text">
            Nützlich</div>
        </span></span></span></span></div>
  <span class="cr-vote-feedback cr-vote-component aok-hidden">Senden von Feedback...</span><span data-hook="vote-success-message" class="cr-vote-success cr-vote-component aok-hidden"><div class="a-box a-alert-inline a-alert-inline-success cr-vote-helpful-yes"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">Vielen Dank für Ihr Feedback.</div></div></div></span><span class="cr-vote-error cr-vote-component aok-hidden"><div class="a-box a-alert-inline a-alert-inline-error" aria-live="assertive" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">Wir konnten Ihre Stimmabgabe leider nicht speichern. Bitte versuchen Sie es später noch einmal.</div></div></div></span></span>

<i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i><a data-hook="review-comment" class="a-size-base a-link-normal a-color-secondary a-text-normal" href="/gp/customer-reviews/RK7M3H5TP7S0O/ref=cm_cr_dp_d_rvw_btm?ie=UTF8&amp;ASIN=B07C76F3P2#wasThisHelpful">Kommentar</a><span class="cr-footer-line-height">
    <span><i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i><span class="a-declarative" data-action="cr-popup" data-cr-popup="{&quot;width&quot;:&quot;580&quot;,&quot;title&quot;:&quot;ReportAbuse&quot;,&quot;url&quot;:&quot;/hz/reviews-render/report-abuse?ie=UTF8&amp;voteDomain=Reviews&amp;ref=cm_cr_dp_d_rvw_hlp&amp;csrfT=gp0Td%2BsrmENnmvqGrJRUFvjs5MQKA5Kppv5pf7kAAAABAAAAAFwrz61yYXcAAAAA%2B4kUEk%2F7iMGR3xPcX6iU&amp;entityId=RK7M3H5TP7S0O&amp;sessionId=262-9898842-9713804&quot;,&quot;height&quot;:&quot;380&quot;}"><a class="a-size-base a-link-normal a-color-secondary report-abuse-link a-text-normal" href="/hz/reviews-render/report-abuse?ie=UTF8&amp;voteDomain=Reviews&amp;ref=cm_cr_dp_d_rvw_hlp&amp;csrfT=gp0Td%2BsrmENnmvqGrJRUFvjs5MQKA5Kppv5pf7kAAAABAAAAAFwrz61yYXcAAAAA%2B4kUEk%2F7iMGR3xPcX6iU&amp;entityId=RK7M3H5TP7S0O&amp;sessionId=262-9898842-9713804">Missbrauch melden</a></span></span></span>

</div></div></div><div id="R3SM9KQJHTI1MP" data-hook="review" class="a-section review"><div id="customer_review-R3SM9KQJHTI1MP" class="a-section celwidget"><div data-hook="genome-widget" class="a-row a-spacing-mini"><a href="/gp/profile/amzn1.account.AHD7HVVUEVYKFXKSX7ZX6TZ6Q6WQ/ref=cm_cr_dp_d_gw_tr?ie=UTF8" class="a-profile" data-a-size="small"><div aria-hidden="true" class="a-profile-avatar-wrapper"><div class="a-profile-avatar"><img src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif" class="a-lazy-loaded" data-src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png"><noscript><img src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png"></noscript></div></div><div class="a-profile-content"><span class="a-profile-name">Strambach Mathias</span></div></a></div><div class="a-row"><a class="a-link-normal" title="3,0 von 5 Sternen" href="/gp/customer-reviews/R3SM9KQJHTI1MP/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&amp;ASIN=B07C76F3P2"><i data-hook="review-star-rating" class="a-icon a-icon-star a-star-3 review-rating"><span class="a-icon-alt">3,0 von 5 Sternen</span></i></a><span class="a-letter-space"></span><a data-hook="review-title" class="a-size-base a-link-normal review-title a-color-base a-text-bold" href="/gp/customer-reviews/R3SM9KQJHTI1MP/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&amp;ASIN=B07C76F3P2">Tolles Gerät leider mit einer Schwäche.</a></div><span data-hook="review-date" class="a-size-base a-color-secondary review-date">18. Dezember 2018</span><div class="a-row a-spacing-mini review-data review-format-strip"><span data-hook="format-strip-linkless" class="a-color-secondary">Geräteausstattung: Echo Input<i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i>Stil: Schwarzes Echo Input<i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i>Farbe: Schwarzes Echo Input</span><i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i><span data-hook="avp-badge-linkless" class="a-size-mini a-color-state a-text-bold">Verifizierter Kauf</span></div><div class="a-row a-spacing-small review-data"><span data-hook="review-body" class="a-size-base review-text"><div aria-live="polite" data-a-expander-name="review_text_read_more" data-a-expander-collapsed-height="300" class="a-expander-collapsed-height a-row a-expander-container a-expander-partial-collapse-container" style="max-height:300px"><div data-hook="review-collapsed" aria-expanded="false" class="a-expander-content a-expander-partial-collapse-content">Der Echo Input ist super klein und dünn. Ich wollte ihn im Auto gegen den Echo Dot täuschen. Leider musste ich feststellen das man den Input nicht mit der Alexa Fernbedienung koppeln kann so wie den Echo Dot. Daher für mich uninteressant.<br />Sehr schade.</div><div class="a-expander-header a-expander-partial-collapse-header"><div class="a-expander-content-fade"></div><a href="javascript:void(0)" data-hook="expand-collapse-read-more-less" data-action="a-expander-toggle" class="a-declarative" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;Lesen Sie weiter&quot;, &quot;collapse_prompt&quot;:&quot;Weniger lesen&quot;}"><i class="a-icon a-icon-extender-expand"></i><span class="a-expander-prompt">Lesen Sie weiter</span></a></div></div></span></div><div data-hook="review-comments" class="a-row review-comments"><span class="cr-vote" data-hook="review-voting-widget">

  <div class="a-row a-spacing-small"><span data-hook="helpful-vote-statement" class="a-size-base a-color-tertiary cr-vote-text">7 Personen fanden diese Informationen hilfreich</span></div><div class="cr-helpful-button cr-vote-component aok-float-left">
      <span class="a-declarative" data-action="reviews:vote-action" data-reviews:vote-action="{&quot;voteInstanceId&quot;:&quot;R3SM9KQJHTI1MP&quot;,&quot;ajaxUrl&quot;:&quot;/hz/reviews-render/ajax/vote/submit/ref=cm_cr_dp_d_vote_lft&quot;,&quot;voteValue&quot;:&quot;1&quot;,&quot;cssSelectors&quot;:{&quot;onError&quot;:&quot;.cr-vote-error&quot;,&quot;inFlight&quot;:&quot;.cr-vote-feedback&quot;,&quot;hideVoteComponents&quot;:&quot;.cr-vote-component&quot;,&quot;onSuccess&quot;:&quot;.cr-vote-success&quot;},&quot;csrfT&quot;:&quot;ghr7/jJ7/ZljWEXJxcXQ9YMhGTIb9hsAn4zVUhIAAAABAAAAAFwrz61yYXcAAAAA+4kUEk/7iMGR3xPcX6iU&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;,&quot;voteDimension&quot;:&quot;Helpful&quot;}"><span class="a-button a-button-base"><span class="a-button-inner"><input data-hook="vote-helpful-button" class="a-button-input" type="submit"><span class="a-button-text" aria-hidden="true"><div class="cr-helpful-text">
            Nützlich</div>
        </span></span></span></span></div>
  <span class="cr-vote-feedback cr-vote-component aok-hidden">Senden von Feedback...</span><span data-hook="vote-success-message" class="cr-vote-success cr-vote-component aok-hidden"><div class="a-box a-alert-inline a-alert-inline-success cr-vote-helpful-yes"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">Vielen Dank für Ihr Feedback.</div></div></div></span><span class="cr-vote-error cr-vote-component aok-hidden"><div class="a-box a-alert-inline a-alert-inline-error" aria-live="assertive" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">Wir konnten Ihre Stimmabgabe leider nicht speichern. Bitte versuchen Sie es später noch einmal.</div></div></div></span></span>

<i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i><a data-hook="review-comment" class="a-size-base a-link-normal a-color-secondary a-text-normal" href="/gp/customer-reviews/R3SM9KQJHTI1MP/ref=cm_cr_dp_d_rvw_btm?ie=UTF8&amp;ASIN=B07C76F3P2#wasThisHelpful">Kommentar</a><span class="cr-footer-line-height">
    <span><i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i><span class="a-declarative" data-action="cr-popup" data-cr-popup="{&quot;width&quot;:&quot;580&quot;,&quot;title&quot;:&quot;ReportAbuse&quot;,&quot;url&quot;:&quot;/hz/reviews-render/report-abuse?ie=UTF8&amp;voteDomain=Reviews&amp;ref=cm_cr_dp_d_rvw_hlp&amp;csrfT=ghr7%2FjJ7%2FZljWEXJxcXQ9YMhGTIb9hsAn4zVUhIAAAABAAAAAFwrz61yYXcAAAAA%2B4kUEk%2F7iMGR3xPcX6iU&amp;entityId=R3SM9KQJHTI1MP&amp;sessionId=262-9898842-9713804&quot;,&quot;height&quot;:&quot;380&quot;}"><a class="a-size-base a-link-normal a-color-secondary report-abuse-link a-text-normal" href="/hz/reviews-render/report-abuse?ie=UTF8&amp;voteDomain=Reviews&amp;ref=cm_cr_dp_d_rvw_hlp&amp;csrfT=ghr7%2FjJ7%2FZljWEXJxcXQ9YMhGTIb9hsAn4zVUhIAAAABAAAAAFwrz61yYXcAAAAA%2B4kUEk%2F7iMGR3xPcX6iU&amp;entityId=R3SM9KQJHTI1MP&amp;sessionId=262-9898842-9713804">Missbrauch melden</a></span></span></span>

</div></div></div><div id="R8WC4RVZXM4MQ" data-hook="review" class="a-section review"><div id="customer_review-R8WC4RVZXM4MQ" class="a-section celwidget"><div data-hook="genome-widget" class="a-row a-spacing-mini"><a href="/gp/profile/amzn1.account.AEX4VNF7RSHICA3M7XA23JERXKTQ/ref=cm_cr_dp_d_gw_tr?ie=UTF8" class="a-profile" data-a-size="small"><div aria-hidden="true" class="a-profile-avatar-wrapper"><div class="a-profile-avatar"><img src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif" class="a-lazy-loaded" data-src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png"><noscript><img src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png"></noscript></div></div><div class="a-profile-content"><span class="a-profile-name">Ich-Ich-Ich</span></div></a></div><div class="a-row"><a class="a-link-normal" title="5,0 von 5 Sternen" href="/gp/customer-reviews/R8WC4RVZXM4MQ/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&amp;ASIN=B07C76F3P2"><i data-hook="review-star-rating" class="a-icon a-icon-star a-star-5 review-rating"><span class="a-icon-alt">5,0 von 5 Sternen</span></i></a><span class="a-letter-space"></span><a data-hook="review-title" class="a-size-base a-link-normal review-title a-color-base a-text-bold" href="/gp/customer-reviews/R8WC4RVZXM4MQ/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&amp;ASIN=B07C76F3P2">Perfekte Ergänzung</a></div><span data-hook="review-date" class="a-size-base a-color-secondary review-date">18. Dezember 2018</span><div class="a-row a-spacing-mini review-data review-format-strip"><span data-hook="format-strip-linkless" class="a-color-secondary">Geräteausstattung: Echo Input<i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i>Stil: Weißes Echo Input<i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i>Farbe: Weißes Echo Input</span><i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i><span data-hook="avp-badge-linkless" class="a-size-mini a-color-state a-text-bold">Verifizierter Kauf</span></div><div class="a-row a-spacing-small review-data"><span data-hook="review-body" class="a-size-base review-text"><div aria-live="polite" data-a-expander-name="review_text_read_more" data-a-expander-collapsed-height="300" class="a-expander-collapsed-height a-row a-expander-container a-expander-partial-collapse-container" style="max-height:300px"><div data-hook="review-collapsed" aria-expanded="false" class="a-expander-content a-expander-partial-collapse-content">Über die Echo-Geräte kann man denken, wie man will. Darauf gehe ich hier auch gar nicht ein.<br />Allerdings ist dieses Echo Input für mich die perfekt Ergänzung. Mein alter BeoPlay A9 wurde mittlerweile von Spotify Connect ausgeschlossen, somit konnte er nur noch als Netzwerklautsprecher genutzt werden, wenn das anweisende Gerät weiterhin aktiv mit ihm verbunden war.<br /><br />Dank des Echo-Input ist der BeoPlay jetzt sogar "smart" geworden. Und noch perfekter: über den integrierten USB-Anschluss wird das Echo-Input auch noch mit Strom versorgt. Für mich also die ideale Ergänzung meines Lautsprechers.</div><div class="a-expander-header a-expander-partial-collapse-header"><div class="a-expander-content-fade"></div><a href="javascript:void(0)" data-hook="expand-collapse-read-more-less" data-action="a-expander-toggle" class="a-declarative" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;Lesen Sie weiter&quot;, &quot;collapse_prompt&quot;:&quot;Weniger lesen&quot;}"><i class="a-icon a-icon-extender-expand"></i><span class="a-expander-prompt">Lesen Sie weiter</span></a></div></div></span></div><div data-hook="review-comments" class="a-row review-comments"><span class="cr-vote" data-hook="review-voting-widget">

  <div class="a-row a-spacing-small"><span data-hook="helpful-vote-statement" class="a-size-base a-color-tertiary cr-vote-text">5 Personen fanden diese Informationen hilfreich</span></div><div class="cr-helpful-button cr-vote-component aok-float-left">
      <span class="a-declarative" data-action="reviews:vote-action" data-reviews:vote-action="{&quot;voteInstanceId&quot;:&quot;R8WC4RVZXM4MQ&quot;,&quot;ajaxUrl&quot;:&quot;/hz/reviews-render/ajax/vote/submit/ref=cm_cr_dp_d_vote_lft&quot;,&quot;voteValue&quot;:&quot;1&quot;,&quot;cssSelectors&quot;:{&quot;onError&quot;:&quot;.cr-vote-error&quot;,&quot;inFlight&quot;:&quot;.cr-vote-feedback&quot;,&quot;hideVoteComponents&quot;:&quot;.cr-vote-component&quot;,&quot;onSuccess&quot;:&quot;.cr-vote-success&quot;},&quot;csrfT&quot;:&quot;golPWHARGzcwq0aWfiXiaVNFD/TyJT4DUuwRd64AAAABAAAAAFwrz61yYXcAAAAA+4kUEk/7iMGR3xPcX6iU&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;,&quot;voteDimension&quot;:&quot;Helpful&quot;}"><span class="a-button a-button-base"><span class="a-button-inner"><input data-hook="vote-helpful-button" class="a-button-input" type="submit"><span class="a-button-text" aria-hidden="true"><div class="cr-helpful-text">
            Nützlich</div>
        </span></span></span></span></div>
  <span class="cr-vote-feedback cr-vote-component aok-hidden">Senden von Feedback...</span><span data-hook="vote-success-message" class="cr-vote-success cr-vote-component aok-hidden"><div class="a-box a-alert-inline a-alert-inline-success cr-vote-helpful-yes"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">Vielen Dank für Ihr Feedback.</div></div></div></span><span class="cr-vote-error cr-vote-component aok-hidden"><div class="a-box a-alert-inline a-alert-inline-error" aria-live="assertive" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">Wir konnten Ihre Stimmabgabe leider nicht speichern. Bitte versuchen Sie es später noch einmal.</div></div></div></span></span>

<i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i><a data-hook="review-comment" class="a-size-base a-link-normal a-color-secondary a-text-normal" href="/gp/customer-reviews/R8WC4RVZXM4MQ/ref=cm_cr_dp_d_rvw_btm?ie=UTF8&amp;ASIN=B07C76F3P2#wasThisHelpful">Kommentar</a><span class="cr-footer-line-height">
    <span><i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i><span class="a-declarative" data-action="cr-popup" data-cr-popup="{&quot;width&quot;:&quot;580&quot;,&quot;title&quot;:&quot;ReportAbuse&quot;,&quot;url&quot;:&quot;/hz/reviews-render/report-abuse?ie=UTF8&amp;voteDomain=Reviews&amp;ref=cm_cr_dp_d_rvw_hlp&amp;csrfT=golPWHARGzcwq0aWfiXiaVNFD%2FTyJT4DUuwRd64AAAABAAAAAFwrz61yYXcAAAAA%2B4kUEk%2F7iMGR3xPcX6iU&amp;entityId=R8WC4RVZXM4MQ&amp;sessionId=262-9898842-9713804&quot;,&quot;height&quot;:&quot;380&quot;}"><a class="a-size-base a-link-normal a-color-secondary report-abuse-link a-text-normal" href="/hz/reviews-render/report-abuse?ie=UTF8&amp;voteDomain=Reviews&amp;ref=cm_cr_dp_d_rvw_hlp&amp;csrfT=golPWHARGzcwq0aWfiXiaVNFD%2FTyJT4DUuwRd64AAAABAAAAAFwrz61yYXcAAAAA%2B4kUEk%2F7iMGR3xPcX6iU&amp;entityId=R8WC4RVZXM4MQ&amp;sessionId=262-9898842-9713804">Missbrauch melden</a></span></span></span>

</div></div></div><div id="R3EH108367JAUP" data-hook="review" class="a-section review"><div id="customer_review-R3EH108367JAUP" class="a-section celwidget"><div data-hook="genome-widget" class="a-row a-spacing-mini"><a href="/gp/profile/amzn1.account.AH6VSYOI7JBOXYJOS324FP3FO73A/ref=cm_cr_dp_d_gw_tr?ie=UTF8" class="a-profile" data-a-size="small"><div aria-hidden="true" class="a-profile-avatar-wrapper"><div class="a-profile-avatar"><img src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif" class="a-lazy-loaded" data-src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/fffe1f0c-8382-42c1-b86c-9370be56758e._CR0,0,500,500_SX48_.jpg"><noscript><img src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/fffe1f0c-8382-42c1-b86c-9370be56758e._CR0,0,500,500_SX48_.jpg"></noscript></div></div><div class="a-profile-content"><span class="a-profile-name">Tom Gee</span></div></a></div><div class="a-row"><a class="a-link-normal" title="4,0 von 5 Sternen" href="/gp/customer-reviews/R3EH108367JAUP/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&amp;ASIN=B07C76F3P2"><i data-hook="review-star-rating" class="a-icon a-icon-star a-star-4 review-rating"><span class="a-icon-alt">4,0 von 5 Sternen</span></i></a><span class="a-letter-space"></span><a data-hook="review-title" class="a-size-base a-link-normal review-title a-color-base a-text-bold" href="/gp/customer-reviews/R3EH108367JAUP/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&amp;ASIN=B07C76F3P2">Audioqualität bei Aux Verbindungen...</a></div><span data-hook="review-date" class="a-size-base a-color-secondary review-date">23. Dezember 2018</span><div class="a-row a-spacing-mini review-data review-format-strip"><span data-hook="format-strip-linkless" class="a-color-secondary">Geräteausstattung: Echo Input<i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i>Stil: Schwarzes Echo Input<i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i>Farbe: Schwarzes Echo Input</span><i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i><span data-hook="avp-badge-linkless" class="a-size-mini a-color-state a-text-bold">Verifizierter Kauf</span></div><div class="a-row a-spacing-small review-data"><span data-hook="review-body" class="a-size-base review-text"><div aria-live="polite" data-a-expander-name="review_text_read_more" data-a-expander-collapsed-height="300" class="a-expander-collapsed-height a-row a-expander-container a-expander-partial-collapse-container" style="max-height:300px"><div data-hook="review-collapsed" aria-expanded="false" class="a-expander-content a-expander-partial-collapse-content">Hallo Echo Fan‘s....Haben die gesamte Echo Familie (bis auf die Show Variante) in mehrfacher Anzahl im Haus verteilt. Nun auch den „Input“! Lieferung, Verpackung, Installation wie immer Top! Über die „sinnhaftigkeit“ zum gegebenen Preis und Einsatz ist hier ja schon ausgiebig diskutiert worden...dem ist Nichts hinzufügen.<br />Die Kopplung via Bluetooth (zum Speaker System, Bose o. A.) kein Problem. Via Aux Kabel an Samsung High End SoundSystem (Fernseher) und Verbindung vom iPhone oder iPad via Bluetooth zum Input ist die Audioqualität jedoch mehr als dürftig, wenn KEIN Streamingdienst (Amazon Music, SpotiFy o.ä) gewählt wird sondern z.B. die Ausgabe von iTunes, Music vom iPhone gewünscht wird! Eine Equalizer Funktion hat der Input leider nicht....somit können nur die Pre-Set EQ‘s von iPhone / iPAD genutzt werden. Die Signalstärke des Aux Signal ist, zumindest bei uns, derart schwach dass wir die Samsung Anlage (600W Musikleistung) schon sehr weit „aufdrehen“ müssen um etwas Sound zu bekommen.....Liegts‘ am Apple oder Input...? Vielleicht hat hier ja jemand noch die gleiche Erfahrung oder einen Tipp?!<br /><br />.....Kleiner Nachtrag zum Weihnachtsfest....musste leider feststellen, dass der Fehler in einer defekten Aux Kabelverbindung (Winkelstecker) lag...also dann Frohe Weihnachten und 4,5 Sterne (Preis)!</div><div class="a-expander-header a-expander-partial-collapse-header"><div class="a-expander-content-fade"></div><a href="javascript:void(0)" data-hook="expand-collapse-read-more-less" data-action="a-expander-toggle" class="a-declarative" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;Lesen Sie weiter&quot;, &quot;collapse_prompt&quot;:&quot;Weniger lesen&quot;}"><i class="a-icon a-icon-extender-expand"></i><span class="a-expander-prompt">Lesen Sie weiter</span></a></div></div></span></div><div data-hook="review-comments" class="a-row review-comments"><span class="cr-vote" data-hook="review-voting-widget">

  <div class="a-row a-spacing-small"><span data-hook="helpful-vote-statement" class="a-size-base a-color-tertiary cr-vote-text">5 Personen fanden diese Informationen hilfreich</span></div><div class="cr-helpful-button cr-vote-component aok-float-left">
      <span class="a-declarative" data-action="reviews:vote-action" data-reviews:vote-action="{&quot;voteInstanceId&quot;:&quot;R3EH108367JAUP&quot;,&quot;ajaxUrl&quot;:&quot;/hz/reviews-render/ajax/vote/submit/ref=cm_cr_dp_d_vote_lft&quot;,&quot;voteValue&quot;:&quot;1&quot;,&quot;cssSelectors&quot;:{&quot;onError&quot;:&quot;.cr-vote-error&quot;,&quot;inFlight&quot;:&quot;.cr-vote-feedback&quot;,&quot;hideVoteComponents&quot;:&quot;.cr-vote-component&quot;,&quot;onSuccess&quot;:&quot;.cr-vote-success&quot;},&quot;csrfT&quot;:&quot;gicq4gJLkHpfVxrJj0sclx/O7Z1dZrZWvUr8YJMAAAABAAAAAFwrz61yYXcAAAAA+4kUEk/7iMGR3xPcX6iU&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;,&quot;voteDimension&quot;:&quot;Helpful&quot;}"><span class="a-button a-button-base"><span class="a-button-inner"><input data-hook="vote-helpful-button" class="a-button-input" type="submit"><span class="a-button-text" aria-hidden="true"><div class="cr-helpful-text">
            Nützlich</div>
        </span></span></span></span></div>
  <span class="cr-vote-feedback cr-vote-component aok-hidden">Senden von Feedback...</span><span data-hook="vote-success-message" class="cr-vote-success cr-vote-component aok-hidden"><div class="a-box a-alert-inline a-alert-inline-success cr-vote-helpful-yes"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">Vielen Dank für Ihr Feedback.</div></div></div></span><span class="cr-vote-error cr-vote-component aok-hidden"><div class="a-box a-alert-inline a-alert-inline-error" aria-live="assertive" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">Wir konnten Ihre Stimmabgabe leider nicht speichern. Bitte versuchen Sie es später noch einmal.</div></div></div></span></span>

<i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i><a data-hook="review-comment" class="a-size-base a-link-normal a-color-secondary a-text-normal" href="/gp/customer-reviews/R3EH108367JAUP/ref=cm_cr_dp_d_rvw_btm?ie=UTF8&amp;ASIN=B07C76F3P2#wasThisHelpful">Kommentar</a><span class="cr-footer-line-height">
    <span><i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i><span class="a-declarative" data-action="cr-popup" data-cr-popup="{&quot;width&quot;:&quot;580&quot;,&quot;title&quot;:&quot;ReportAbuse&quot;,&quot;url&quot;:&quot;/hz/reviews-render/report-abuse?ie=UTF8&amp;voteDomain=Reviews&amp;ref=cm_cr_dp_d_rvw_hlp&amp;csrfT=gicq4gJLkHpfVxrJj0sclx%2FO7Z1dZrZWvUr8YJMAAAABAAAAAFwrz61yYXcAAAAA%2B4kUEk%2F7iMGR3xPcX6iU&amp;entityId=R3EH108367JAUP&amp;sessionId=262-9898842-9713804&quot;,&quot;height&quot;:&quot;380&quot;}"><a class="a-size-base a-link-normal a-color-secondary report-abuse-link a-text-normal" href="/hz/reviews-render/report-abuse?ie=UTF8&amp;voteDomain=Reviews&amp;ref=cm_cr_dp_d_rvw_hlp&amp;csrfT=gicq4gJLkHpfVxrJj0sclx%2FO7Z1dZrZWvUr8YJMAAAABAAAAAFwrz61yYXcAAAAA%2B4kUEk%2F7iMGR3xPcX6iU&amp;entityId=R3EH108367JAUP&amp;sessionId=262-9898842-9713804">Missbrauch melden</a></span></span></span>

</div></div></div><div id="RTUO3ZEBFJSJ6" data-hook="review" class="a-section review"><div id="customer_review-RTUO3ZEBFJSJ6" class="a-section celwidget"><div data-hook="genome-widget" class="a-row a-spacing-mini"><a href="/gp/profile/amzn1.account.AFWZZGYIT45SWZDT2BROC2BNHV5A/ref=cm_cr_dp_d_gw_tr?ie=UTF8" class="a-profile" data-a-size="small"><div aria-hidden="true" class="a-profile-avatar-wrapper"><div class="a-profile-avatar"><img src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif" class="a-lazy-loaded" data-src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png"><noscript><img src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png"></noscript></div></div><div class="a-profile-content"><span class="a-profile-name">F.K.</span></div></a></div><div class="a-row"><a class="a-link-normal" title="4,0 von 5 Sternen" href="/gp/customer-reviews/RTUO3ZEBFJSJ6/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&amp;ASIN=B07C76F3P2"><i data-hook="review-star-rating" class="a-icon a-icon-star a-star-4 review-rating"><span class="a-icon-alt">4,0 von 5 Sternen</span></i></a><span class="a-letter-space"></span><a data-hook="review-title" class="a-size-base a-link-normal review-title a-color-base a-text-bold" href="/gp/customer-reviews/RTUO3ZEBFJSJ6/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&amp;ASIN=B07C76F3P2">Gute Ergänzung für analoge Stereoanlage - aber ...</a></div><span data-hook="review-date" class="a-size-base a-color-secondary review-date">19. Dezember 2018</span><div class="a-row a-spacing-mini review-data review-format-strip"><span data-hook="format-strip-linkless" class="a-color-secondary">Geräteausstattung: Echo Input<i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i>Stil: Schwarzes Echo Input<i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i>Farbe: Schwarzes Echo Input</span><i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i><span data-hook="avp-badge-linkless" class="a-size-mini a-color-state a-text-bold">Verifizierter Kauf</span></div><div class="a-row a-spacing-small review-data"><span data-hook="review-body" class="a-size-base review-text"><div aria-live="polite" data-a-expander-name="review_text_read_more" data-a-expander-collapsed-height="300" class="a-expander-collapsed-height a-row a-expander-container a-expander-partial-collapse-container" style="max-height:300px"><div data-hook="review-collapsed" aria-expanded="false" class="a-expander-content a-expander-partial-collapse-content">Genauso wie mit dem Echo Dot kann eine einfache Verbindung mit einer vorhandenen analogen Stereo-Anlage hergestellt werden. Soweit 5 Sterne.<br />Leider ist das Netzteil dafür sehr unglücklich designed. Beim Echo.dot ist es abgewinkelt und passt gut in die integrierten Steckdosen der Stereo-Anlage - beim Echo input leider nicht, so dass nicht genug Platz hinter der Anlage für das Netzteil bleibt. Musste wieder auf den Echo.dot zurückgreifen, da die Netzteile unterschiedliche Leistung haben. Und preislich macht es ja fast keinen Unterschied.<br />Schade - das kleine Teil hätte ansonsten gut gepasst.</div><div class="a-expander-header a-expander-partial-collapse-header"><div class="a-expander-content-fade"></div><a href="javascript:void(0)" data-hook="expand-collapse-read-more-less" data-action="a-expander-toggle" class="a-declarative" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;Lesen Sie weiter&quot;, &quot;collapse_prompt&quot;:&quot;Weniger lesen&quot;}"><i class="a-icon a-icon-extender-expand"></i><span class="a-expander-prompt">Lesen Sie weiter</span></a></div></div></span></div><div data-hook="review-comments" class="a-row review-comments"><span class="cr-vote" data-hook="review-voting-widget">

  <div class="a-row a-spacing-small"><span data-hook="helpful-vote-statement" class="a-size-base a-color-tertiary cr-vote-text">5 Personen fanden diese Informationen hilfreich</span></div><div class="cr-helpful-button cr-vote-component aok-float-left">
      <span class="a-declarative" data-action="reviews:vote-action" data-reviews:vote-action="{&quot;voteInstanceId&quot;:&quot;RTUO3ZEBFJSJ6&quot;,&quot;ajaxUrl&quot;:&quot;/hz/reviews-render/ajax/vote/submit/ref=cm_cr_dp_d_vote_lft&quot;,&quot;voteValue&quot;:&quot;1&quot;,&quot;cssSelectors&quot;:{&quot;onError&quot;:&quot;.cr-vote-error&quot;,&quot;inFlight&quot;:&quot;.cr-vote-feedback&quot;,&quot;hideVoteComponents&quot;:&quot;.cr-vote-component&quot;,&quot;onSuccess&quot;:&quot;.cr-vote-success&quot;},&quot;csrfT&quot;:&quot;gv29xXgijCsnLkBnrqgA65NHAWTtFGgiclNJwC8AAAABAAAAAFwrz61yYXcAAAAA+4kUEk/7iMGR3xPcX6iU&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;,&quot;voteDimension&quot;:&quot;Helpful&quot;}"><span class="a-button a-button-base"><span class="a-button-inner"><input data-hook="vote-helpful-button" class="a-button-input" type="submit"><span class="a-button-text" aria-hidden="true"><div class="cr-helpful-text">
            Nützlich</div>
        </span></span></span></span></div>
  <span class="cr-vote-feedback cr-vote-component aok-hidden">Senden von Feedback...</span><span data-hook="vote-success-message" class="cr-vote-success cr-vote-component aok-hidden"><div class="a-box a-alert-inline a-alert-inline-success cr-vote-helpful-yes"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">Vielen Dank für Ihr Feedback.</div></div></div></span><span class="cr-vote-error cr-vote-component aok-hidden"><div class="a-box a-alert-inline a-alert-inline-error" aria-live="assertive" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">Wir konnten Ihre Stimmabgabe leider nicht speichern. Bitte versuchen Sie es später noch einmal.</div></div></div></span></span>

<i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i><a data-hook="review-comment" class="a-size-base a-link-normal a-color-secondary a-text-normal" href="/gp/customer-reviews/RTUO3ZEBFJSJ6/ref=cm_cr_dp_d_rvw_btm?ie=UTF8&amp;ASIN=B07C76F3P2#wasThisHelpful">Kommentar</a><span class="cr-footer-line-height">
    <span><i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i><span class="a-declarative" data-action="cr-popup" data-cr-popup="{&quot;width&quot;:&quot;580&quot;,&quot;title&quot;:&quot;ReportAbuse&quot;,&quot;url&quot;:&quot;/hz/reviews-render/report-abuse?ie=UTF8&amp;voteDomain=Reviews&amp;ref=cm_cr_dp_d_rvw_hlp&amp;csrfT=gv29xXgijCsnLkBnrqgA65NHAWTtFGgiclNJwC8AAAABAAAAAFwrz61yYXcAAAAA%2B4kUEk%2F7iMGR3xPcX6iU&amp;entityId=RTUO3ZEBFJSJ6&amp;sessionId=262-9898842-9713804&quot;,&quot;height&quot;:&quot;380&quot;}"><a class="a-size-base a-link-normal a-color-secondary report-abuse-link a-text-normal" href="/hz/reviews-render/report-abuse?ie=UTF8&amp;voteDomain=Reviews&amp;ref=cm_cr_dp_d_rvw_hlp&amp;csrfT=gv29xXgijCsnLkBnrqgA65NHAWTtFGgiclNJwC8AAAABAAAAAFwrz61yYXcAAAAA%2B4kUEk%2F7iMGR3xPcX6iU&amp;entityId=RTUO3ZEBFJSJ6&amp;sessionId=262-9898842-9713804">Missbrauch melden</a></span></span></span>

</div></div></div></div></div><a id="end-reviews" class="a-link-normal" href="#"></a></div><div id="reviews-medley-footer" data-hook="reviews-medley-footer" class="a-section"><div class="a-row"></div><div class="a-row a-spacing-large"><a data-hook="see-all-reviews-link-foot" class="a-link-emphasis a-text-bold" href="/Echo-Input-Schwarz-Lautsprecher-5-mm-Audioeingang/product-reviews/B07C76F3P2/ref=cm_cr_dp_d_show_all_btm?ie=UTF8&amp;reviewerType=all_reviews">Alle 23 Rezensionen anzeigen</a></div><div class="a-row"><span class="a-button a-button-base writeReviewButton"><span class="a-button-inner"><a href="/review/create-review/ref=cm_cr_dp_d_wr_but_btm?ie=UTF8&amp;channel=glance-detail&amp;asin=B07C76F3P2" data-hook="write-review-button" class="a-button-text" role="button">Kundenrezension verfassen</a></span></span></div></div></div>
</div></span>
  <span class="cr-widget-CrossMarketplaceSharing" data-hook="cr-widget-CrossMarketplaceSharing"></span>
  </div></div></div></div></div><script type="text/javascript">
var isAUI = typeof P === 'object' && typeof P.when === 'function';
  if(typeof setCSMReq == 'function') {
        setCSMReq('cf');
  }else {
     if(typeof uet == 'function') {
        uet('cf');
     }
     if(isAUI){
     	   P.trigger("cf");
     	}else{
     		amznJQ.completedStage('amznJQ.criticalFeature');
     	}
  }
</script>
 






<script type="text/javascript">


(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('cf').execute(function(){
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/21TkWPg6NYL._RC|21zqbtNuulL.js,112YfhTGjqL.js_.js?AUIClients/HardlinesFeatureDetailPageMetaAsset');
});




  if(typeof P !== "undefined" && typeof P.when === "function"){
    P.when('cf').execute(function() {
          P.when('search-js-jq').execute(function(){});
  P.when('amazonShoveler').execute(function(){});
  P.when('simsJS').execute(function(){});
  P.when('cmuAnnotations').execute(function(){});
  P.when('externalJS.tagging').execute(function(){});
  P.when('amzn-ratings-bar').execute(function(){});
  P.when('accessoriesJS').execute(function(){});
  P.when('priceformatterJS').execute(function(){});
  P.when('CustomerPopover').execute(function(){});

    });
  }
</script>






 


 

<script type="text/javascript">
// This will fetch the resource in a low impact way from the experiment server.
// executeOnload will prevent fetching the resource until everything else on the page has loaded.
var cloudfrontImg = new Image();
var shouldExecuteOnload = ("1" == "1");
if (shouldExecuteOnload) {
    if (window.addEventListener) {
        window.addEventListener("load", function() {
            setTimeout(function(){ cloudfrontImg.src = "//cloudfront-labs.amazonaws.com/x.png"; }, 400);}, false);
    } else if (window.attachEvent) {
        window.attachEvent("onload", function() {
            setTimeout(function(){ cloudfrontImg.src = "//cloudfront-labs.amazonaws.com/x.png"; }, 400);});
    }
} else {
    setTimeout(function(){ cloudfrontImg.src = "//cloudfront-labs.amazonaws.com/x.png"; }, 400);
}
</script>
 

 
 




<div id="center-80_feature_div">
</div>


<div id="center-81_feature_div">
</div>


<div class="kindle-forum">
</div>


<div id="dpx-giveaway_feature_div">
</div>


<div id="mako-emergency-fix_feature_div">

    



    

  



        
        
        
        
  









        











 
 
<div id="makoEmergencyFix_feature_div" class="feature" data-feature-name="makoEmergencyFix">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>
</div>


<div id="center-88_feature_div">
</div>


<div id="center-89_feature_div">
</div>


<div id="center-90_feature_div">
</div>


<div id="center-91_feature_div">
</div>


<div id="center-92_feature_div">
</div>


<div id="center-93_feature_div">
</div>


<div id="center-94_feature_div">
</div>


<div id="center-95_feature_div">
</div>


<div id="center-96_feature_div">
</div>


<div id="center-97_feature_div">
</div>


<div id="center-98_feature_div">
</div>


<div id="center-99_feature_div">
</div>


<div id="center-100_feature_div">
</div>


<div id="accessory-popover-1_feature_div">
</div>


<div id="accessory-popover-2_feature_div">
</div>


<div id="accessory-popover-3_feature_div">
</div>


<div id="accessory-popover-4_feature_div">
</div>


<div id="accessory-popover-5_feature_div">
</div>


<div id="accessory-popover-6_feature_div">
</div>


<div id="accessory-popover-7_feature_div">
</div>


<div id="accessory-popover-8_feature_div">
</div>


<div id="accessory-popover-9_feature_div">
</div>


<div id="accessory-popover-10_feature_div">
</div>


<div id="listmania-center_feature_div">
</div>


<div id="sylt-center_feature_div">
</div>
<script type="text/javascript">
var isAUI = typeof P === 'object' && typeof P.when === 'function';
  if(typeof setCSMReq == 'function') {
        setCSMReq('cf');
  }else {
     if(typeof uet == 'function') {
        uet('cf');
     }
     if(isAUI){
     	   P.trigger("cf");
     	}else{
     		amznJQ.completedStage('amznJQ.criticalFeature');
     	}
  }
</script>









<script language="JavaScript">
    P.register('page-refresh-js-init-mason-data', function() {
        var dataToReturn = {"divToUpdateData":{"twister":{"center-37":{"divToUpdate":"center-37_feature_div"},"center-14":{"divToUpdate":"center-14_feature_div"},"center-37-3":{"divToUpdate":"center-37-3_feature_div"},"btf-content-27":{"divToUpdate":"btf-content-27_feature_div"},"center-92":{"divToUpdate":"center-92_feature_div"},"center-27-0":{"divToUpdate":"center-27-0_feature_div"},"btf-center-20":{"divToUpdate":"btf-center-20_feature_div"},"center-21-2":{"divToUpdate":"center-21-2_feature_div"},"btf-content-23":{"divToUpdate":"btf-content-23_feature_div"},"center-17":{"divToUpdate":"center-17_feature_div"},"btf-content-58":{"divToUpdate":"btf-content-58_feature_div"},"btf-content-2":{"divToUpdate":"btf-content-2_feature_div"},"center-26-3":{"divToUpdate":"center-26-3_feature_div"},"btf-center-6":{"divToUpdate":"btf-center-6_feature_div"},"center-29-3":{"divToUpdate":"center-29-3_feature_div"},"center-20-0":{"divToUpdate":"center-20-0_feature_div"},"center-13-1":{"divToUpdate":"center-13-1_feature_div"},"dpx-legal":{"divToUpdate":"dpx-legal_feature_div"},"ask-btf":{"divToUpdate":"ask-btf_feature_div"},"btf-content-22":{"divToUpdate":"btf-content-22_feature_div"},"center-39-2":{"divToUpdate":"center-39-2_feature_div"},"center-31-2":{"divToUpdate":"center-31-2_feature_div"},"btf-content-7":{"divToUpdate":"btf-content-7_feature_div"},"center-25":{"divToUpdate":"center-25_feature_div"},"center-26-2":{"divToUpdate":"center-26-2_feature_div"},"center-28-3":{"divToUpdate":"center-28-3_feature_div"},"center-20":{"divToUpdate":"center-20_feature_div"},"btf-content-45":{"divToUpdate":"btf-content-45_feature_div"},"center-24-3":{"divToUpdate":"center-24-3_feature_div"},"center-17-2":{"divToUpdate":"center-17-2_feature_div"},"center-18-3":{"divToUpdate":"center-18-3_feature_div"},"btf-content-38":{"divToUpdate":"btf-content-38_feature_div"},"btf-content-47":{"divToUpdate":"btf-content-47_feature_div"},"center-35-3":{"divToUpdate":"center-35-3_feature_div"},"center-29":{"divToUpdate":"center-29_feature_div"},"btf-content-33":{"divToUpdate":"btf-content-33_feature_div"},"accessory-popover-5":{"divToUpdate":"accessory-popover-5_feature_div"},"center-27-2":{"divToUpdate":"center-27-2_feature_div"},"btf-content-32":{"divToUpdate":"btf-content-32_feature_div"},"btf-content-44":{"divToUpdate":"btf-content-44_feature_div"},"btf-center-19":{"divToUpdate":"btf-center-19_feature_div"},"center-41-2":{"divToUpdate":"center-41-2_feature_div"},"center-22":{"divToUpdate":"center-22_feature_div"},"center-40-3":{"divToUpdate":"center-40-3_feature_div"},"dvd-rental-badge":{"divToUpdate":"dvd-rental-badge_feature_div"},"btf-content-40":{"divToUpdate":"btf-content-40_feature_div"},"andon-cord-pulling":{"divToUpdate":"andon-cord-pulling_feature_div"},"center-40-0":{"divToUpdate":"center-40-0_feature_div"},"center-43-0":{"divToUpdate":"center-43-0_feature_div"},"btf-center-3":{"divToUpdate":"btf-center-3_feature_div"},"center-32-2":{"divToUpdate":"center-32-2_feature_div"},"center-19-0":{"divToUpdate":"center-19-0_feature_div"},"center-90":{"divToUpdate":"center-90_feature_div"},"center-24-1":{"divToUpdate":"center-24-1_feature_div"},"btf-content-18":{"divToUpdate":"btf-content-18_feature_div"},"center-85":{"divToUpdate":"center-85_feature_div"},"center-30":{"divToUpdate":"center-30_feature_div"},"center-16-0":{"divToUpdate":"center-16-0_feature_div"},"btf-center-11":{"divToUpdate":"btf-center-11_feature_div"},"center-36-0":{"divToUpdate":"center-36-0_feature_div"},"center-89":{"divToUpdate":"center-89_feature_div"},"accessory-popover-1":{"divToUpdate":"accessory-popover-1_feature_div"},"center-22-3":{"divToUpdate":"center-22-3_feature_div"},"btf-content-13":{"divToUpdate":"btf-content-13_feature_div"},"center-33":{"divToUpdate":"center-33_feature_div"},"center-42-0":{"divToUpdate":"center-42-0_feature_div"},"btf-content-29":{"divToUpdate":"btf-content-29_feature_div"},"btf-content-60":{"divToUpdate":"btf-content-60_feature_div"},"twister-cf-marker":{"divToUpdate":"twister-cf-marker_feature_div"},"center-27-1":{"divToUpdate":"center-27-1_feature_div"},"center-36-2":{"divToUpdate":"center-36-2_feature_div"},"center-21-3":{"divToUpdate":"center-21-3_feature_div"},"btf-content-6":{"divToUpdate":"btf-content-6_feature_div"},"btf-content-14":{"divToUpdate":"btf-content-14_feature_div"},"btf-center-23":{"divToUpdate":"btf-center-23_feature_div"},"center-39-0":{"divToUpdate":"center-39-0_feature_div"},"center-22-2":{"divToUpdate":"center-22-2_feature_div"},"center-36-1":{"divToUpdate":"center-36-1_feature_div"},"center-34":{"divToUpdate":"center-34_feature_div"},"btf-center-7":{"divToUpdate":"btf-center-7_feature_div"},"accessory-popover-2":{"divToUpdate":"accessory-popover-2_feature_div"},"center-31-1":{"divToUpdate":"center-31-1_feature_div"},"center-37-2":{"divToUpdate":"center-37-2_feature_div"},"center-19-3":{"divToUpdate":"center-19-3_feature_div"},"center-31":{"divToUpdate":"center-31_feature_div"},"center-19":{"divToUpdate":"center-19_feature_div"},"listmania-center":{"divToUpdate":"listmania-center_feature_div"},"center-30-0":{"divToUpdate":"center-30-0_feature_div"},"btf-center-4":{"divToUpdate":"btf-center-4_feature_div"},"center-34-1":{"divToUpdate":"center-34-1_feature_div"},"btf-content-57":{"divToUpdate":"btf-content-57_feature_div"},"btf-content-46":{"divToUpdate":"btf-content-46_feature_div"},"qpe-title-tag":{"divToUpdate":"qpe-title-tag_feature_div"},"twister-atf-marker":{"divToUpdate":"twister-atf-marker_feature_div"},"hero-quick-promo-grid":{"divToUpdate":"hero-quick-promo-grid_feature_div"},"btf-content-61":{"divToUpdate":"btf-content-61_feature_div"},"center-29-2":{"divToUpdate":"center-29-2_feature_div"},"center-38-2":{"divToUpdate":"center-38-2_feature_div"},"center-15-0":{"divToUpdate":"center-15-0_feature_div"},"center-21":{"divToUpdate":"center-21_feature_div"},"center-17-0":{"divToUpdate":"center-17-0_feature_div"},"center-23-1":{"divToUpdate":"center-23-1_feature_div"},"center-28-2":{"divToUpdate":"center-28-2_feature_div"},"dpx-image-block-variations":{"divToUpdate":"dpx-image-block-variations_feature_div"},"center-25-0":{"divToUpdate":"center-25-0_feature_div"},"btf-content-41":{"divToUpdate":"btf-content-41_feature_div"},"center-41-3":{"divToUpdate":"center-41-3_feature_div"},"btf-center-22":{"divToUpdate":"btf-center-22_feature_div"},"center-17-3":{"divToUpdate":"center-17-3_feature_div"},"center-33-1":{"divToUpdate":"center-33-1_feature_div"},"center-40-2":{"divToUpdate":"center-40-2_feature_div"},"btf-content-34":{"divToUpdate":"btf-content-34_feature_div"},"btf-center-14":{"divToUpdate":"btf-center-14_feature_div"},"dp-fast-track-logger":{"divToUpdate":"dp-fast-track-logger_feature_div"},"center-19-2":{"divToUpdate":"center-19-2_feature_div"},"center-18-0":{"divToUpdate":"center-18-0_feature_div"},"btf-content-21":{"divToUpdate":"btf-content-21_feature_div"},"center-88":{"divToUpdate":"center-88_feature_div"},"center-25-1":{"divToUpdate":"center-25-1_feature_div"},"center-41":{"divToUpdate":"center-41_feature_div"},"center-39-3":{"divToUpdate":"center-39-3_feature_div"},"btf-content-56":{"divToUpdate":"btf-content-56_feature_div"},"btf-content-5":{"divToUpdate":"btf-content-5_feature_div"},"center-20-1":{"divToUpdate":"center-20-1_feature_div"},"center-43-1":{"divToUpdate":"center-43-1_feature_div"},"center-24-2":{"divToUpdate":"center-24-2_feature_div"},"btf-center-18":{"divToUpdate":"btf-center-18_feature_div"},"btf-content-1":{"divToUpdate":"btf-content-1_feature_div"},"btf-content-25":{"divToUpdate":"btf-content-25_feature_div"},"btf-center-9":{"divToUpdate":"btf-center-9_feature_div"},"accessory-popover-9":{"divToUpdate":"accessory-popover-9_feature_div"},"center-21-0":{"divToUpdate":"center-21-0_feature_div"},"center-32-1":{"divToUpdate":"center-32-1_feature_div"},"btf-content-52":{"divToUpdate":"btf-content-52_feature_div"},"center-93":{"divToUpdate":"center-93_feature_div"},"center-80":{"divToUpdate":"center-80_feature_div"},"twister-log-metrics":{"divToUpdate":"twister-log-metrics_feature_div"},"center-33-0":{"divToUpdate":"center-33-0_feature_div"},"center-30-3":{"divToUpdate":"center-30-3_feature_div"},"center-99":{"divToUpdate":"center-99_feature_div"},"btf-content-64":{"divToUpdate":"btf-content-64_feature_div"},"center-42-3":{"divToUpdate":"center-42-3_feature_div"},"btf-content-39":{"divToUpdate":"btf-content-39_feature_div"},"center-26-1":{"divToUpdate":"center-26-1_feature_div"},"center-28":{"divToUpdate":"center-28_feature_div"},"btf-content-48":{"divToUpdate":"btf-content-48_feature_div"},"center-13":{"divToUpdate":"center-13_feature_div"},"center-84":{"divToUpdate":"center-84_feature_div"},"center-37-0":{"divToUpdate":"center-37-0_feature_div"},"center-24-0":{"divToUpdate":"center-24-0_feature_div"},"center-100":{"divToUpdate":"center-100_feature_div"},"btf-content-54":{"divToUpdate":"btf-content-54_feature_div"},"btf-content-9":{"divToUpdate":"btf-content-9_feature_div"},"dpx-ajax-block-components":{"divToUpdate":"dpx-ajax-block-components_feature_div"},"center-23-2":{"divToUpdate":"center-23-2_feature_div"},"center-31-0":{"divToUpdate":"center-31-0_feature_div"},"center-20-2":{"divToUpdate":"center-20-2_feature_div"},"btf-center-16":{"divToUpdate":"btf-center-16_feature_div"},"center-35":{"divToUpdate":"center-35_feature_div"},"center-43-2":{"divToUpdate":"center-43-2_feature_div"},"btf-content-10":{"divToUpdate":"btf-content-10_feature_div"},"btf-content-62":{"divToUpdate":"btf-content-62_feature_div"},"btf-center-1":{"divToUpdate":"btf-center-1_feature_div"},"btf-center-13":{"divToUpdate":"btf-center-13_feature_div"},"center-41-0":{"divToUpdate":"center-41-0_feature_div"},"center-28-0":{"divToUpdate":"center-28-0_feature_div"},"btf-content-31":{"divToUpdate":"btf-content-31_feature_div"},"center-29-1":{"divToUpdate":"center-29-1_feature_div"},"btf-center-8":{"divToUpdate":"btf-center-8_feature_div"},"btf-center-12":{"divToUpdate":"btf-center-12_feature_div"},"center-87":{"divToUpdate":"center-87_feature_div"},"btf-content-50":{"divToUpdate":"btf-content-50_feature_div"},"center-35-2":{"divToUpdate":"center-35-2_feature_div"},"accessory-popover-7":{"divToUpdate":"accessory-popover-7_feature_div"},"btf-content-35":{"divToUpdate":"btf-content-35_feature_div"},"mako-emergency-fix":{"divToUpdate":"mako-emergency-fix_feature_div"},"accessory-popover-3":{"divToUpdate":"accessory-popover-3_feature_div"},"btf-content-43":{"divToUpdate":"btf-content-43_feature_div"},"center-33-2":{"divToUpdate":"center-33-2_feature_div"},"center-38-1":{"divToUpdate":"center-38-1_feature_div"},"btf-content-65":{"divToUpdate":"btf-content-65_feature_div"},"center-13-0":{"divToUpdate":"center-13-0_feature_div"},"center-39":{"divToUpdate":"center-39_feature_div"},"center-96":{"divToUpdate":"center-96_feature_div"},"btf-content-11":{"divToUpdate":"btf-content-11_feature_div"},"center-14-0":{"divToUpdate":"center-14-0_feature_div"},"btf-content-4":{"divToUpdate":"btf-content-4_feature_div"},"center-83":{"divToUpdate":"center-83_feature_div"},"center-16":{"divToUpdate":"center-16_feature_div"},"btf-content-42":{"divToUpdate":"btf-content-42_feature_div"},"center-36":{"divToUpdate":"center-36_feature_div"},"center-40":{"divToUpdate":"center-40_feature_div"},"center-42-2":{"divToUpdate":"center-42-2_feature_div"},"btf-content-15":{"divToUpdate":"btf-content-15_feature_div"},"center-12":{"divToUpdate":"center-12_feature_div"},"center-21-1":{"divToUpdate":"center-21-1_feature_div"},"center-12-0":{"divToUpdate":"center-12-0_feature_div"},"btf-content-55":{"divToUpdate":"btf-content-55_feature_div"},"center-94":{"divToUpdate":"center-94_feature_div"},"center-37-1":{"divToUpdate":"center-37-1_feature_div"},"btf-content-51":{"divToUpdate":"btf-content-51_feature_div"},"center-18-1":{"divToUpdate":"center-18-1_feature_div"},"dpx-giveaway":{"divToUpdate":"dpx-giveaway_feature_div"},"center-24":{"divToUpdate":"center-24_feature_div"},"center-34-2":{"divToUpdate":"center-34-2_feature_div"},"center-30-2":{"divToUpdate":"center-30-2_feature_div"},"dpx-btf-bundle":{"divToUpdate":"dpx-btf-bundle_feature_div"},"center-22-1":{"divToUpdate":"center-22-1_feature_div"},"btf-content-20":{"divToUpdate":"btf-content-20_feature_div"},"center-25-2":{"divToUpdate":"center-25-2_feature_div"},"center-43":{"divToUpdate":"center-43_feature_div"},"accessory-popover-8":{"divToUpdate":"accessory-popover-8_feature_div"},"center-27":{"divToUpdate":"center-27_feature_div"},"btf-content-49":{"divToUpdate":"btf-content-49_feature_div"},"sylt-center":{"divToUpdate":"sylt-center_feature_div"},"center-38-0":{"divToUpdate":"center-38-0_feature_div"},"btf-center-17":{"divToUpdate":"btf-center-17_feature_div"},"btf-center-21":{"divToUpdate":"btf-center-21_feature_div"},"center-12-1":{"divToUpdate":"center-12-1_feature_div"},"btf-content-53":{"divToUpdate":"btf-content-53_feature_div"},"center-95":{"divToUpdate":"center-95_feature_div"},"center-22-0":{"divToUpdate":"center-22-0_feature_div"},"center-43-3":{"divToUpdate":"center-43-3_feature_div"},"center-26":{"divToUpdate":"center-26_feature_div"},"center-31-3":{"divToUpdate":"center-31-3_feature_div"},"center-35-1":{"divToUpdate":"center-35-1_feature_div"},"btf-content-24":{"divToUpdate":"btf-content-24_feature_div"},"center-42-1":{"divToUpdate":"center-42-1_feature_div"},"center-27-3":{"divToUpdate":"center-27-3_feature_div"},"center-41-1":{"divToUpdate":"center-41-1_feature_div"},"accessory-popover-10":{"divToUpdate":"accessory-popover-10_feature_div"},"center-81":{"divToUpdate":"center-81_feature_div"},"center-39-1":{"divToUpdate":"center-39-1_feature_div"},"center-19-1":{"divToUpdate":"center-19-1_feature_div"},"btf-content-63":{"divToUpdate":"btf-content-63_feature_div"},"center-23-3":{"divToUpdate":"center-23-3_feature_div"},"center-18":{"divToUpdate":"center-18_feature_div"},"center-40-1":{"divToUpdate":"center-40-1_feature_div"},"btf-content-8":{"divToUpdate":"btf-content-8_feature_div"},"center-25-3":{"divToUpdate":"center-25-3_feature_div"},"center-32-0":{"divToUpdate":"center-32-0_feature_div"},"center-16-1":{"divToUpdate":"center-16-1_feature_div"},"btf-content-26":{"divToUpdate":"btf-content-26_feature_div"},"btf-content-36":{"divToUpdate":"btf-content-36_feature_div"},"center-32":{"divToUpdate":"center-32_feature_div"},"center-35-0":{"divToUpdate":"center-35-0_feature_div"},"btf-content-30":{"divToUpdate":"btf-content-30_feature_div"},"center-98":{"divToUpdate":"center-98_feature_div"},"center-38":{"divToUpdate":"center-38_feature_div"},"btf-content-28":{"divToUpdate":"btf-content-28_feature_div"},"btf-center-25":{"divToUpdate":"btf-center-25_feature_div"},"center-26-0":{"divToUpdate":"center-26-0_feature_div"},"accessory-popover-6":{"divToUpdate":"accessory-popover-6_feature_div"},"btf-center-5":{"divToUpdate":"btf-center-5_feature_div"},"center-20-3":{"divToUpdate":"center-20-3_feature_div"},"btf-center-2":{"divToUpdate":"btf-center-2_feature_div"},"btf-center-15":{"divToUpdate":"btf-center-15_feature_div"},"center-23":{"divToUpdate":"center-23_feature_div"},"center-15-1":{"divToUpdate":"center-15-1_feature_div"},"btf-content-12":{"divToUpdate":"btf-content-12_feature_div"},"center-18-2":{"divToUpdate":"center-18-2_feature_div"},"center-32-3":{"divToUpdate":"center-32-3_feature_div"},"center-33-3":{"divToUpdate":"center-33-3_feature_div"},"btf-content-59":{"divToUpdate":"btf-content-59_feature_div"},"center-28-1":{"divToUpdate":"center-28-1_feature_div"},"center-36-3":{"divToUpdate":"center-36-3_feature_div"},"btf-content-16":{"divToUpdate":"btf-content-16_feature_div"},"btf-center-24":{"divToUpdate":"btf-center-24_feature_div"},"center-91":{"divToUpdate":"center-91_feature_div"},"center-38-3":{"divToUpdate":"center-38-3_feature_div"},"accessory-popover-4":{"divToUpdate":"accessory-popover-4_feature_div"},"center-17-1":{"divToUpdate":"center-17-1_feature_div"},"center-15":{"divToUpdate":"center-15_feature_div"},"center-86":{"divToUpdate":"center-86_feature_div"},"center-29-0":{"divToUpdate":"center-29-0_feature_div"},"btf-content-19":{"divToUpdate":"btf-content-19_feature_div"},"center-97":{"divToUpdate":"center-97_feature_div"},"btf-content-17":{"divToUpdate":"btf-content-17_feature_div"},"btf-content-3":{"divToUpdate":"btf-content-3_feature_div"},"center-82":{"divToUpdate":"center-82_feature_div"},"btf-center-10":{"divToUpdate":"btf-center-10_feature_div"},"center-34-3":{"divToUpdate":"center-34-3_feature_div"},"center-30-1":{"divToUpdate":"center-30-1_feature_div"},"btf-content-37":{"divToUpdate":"btf-content-37_feature_div"},"center-14-1":{"divToUpdate":"center-14-1_feature_div"},"product-alert-grid":{"divToUpdate":"product-alert-grid_feature_div"},"center-23-0":{"divToUpdate":"center-23-0_feature_div"},"center-42":{"divToUpdate":"center-42_feature_div"}},"location":{},"rentbuybox":{},"newbuybox":{}}}; //selectively not escaping this.
        return dataToReturn;
    });
</script>

<script type="a-state" data-a-state="{&quot;key&quot;:&quot;page-refresh-data-mason&quot;}">{"pageRefreshUrlParams":{"sid":"262-9898842-9713804","ptd":"DIGITAL_DEVICE_3","json":"1","dpxAjaxFlag":"1","psc":"1","sCac":"1","isUDPFlag":"1","twisterView":"glance","ee":"2","pgid":"amazon_home_display_on_website","rid":"S7Y7MCSM8BQQZXDKY4RQ","originalHttpReferer":"https%3A%2F%2Fwww.amazon.de%2F","parentAsin":"B07H6BXFF5","enPre":"1","isP":"1","dcm":"1","asinList":"B07C76F3P2","dStr":"item_form%2Cstyle_name%2Ccolor_name","storeID":"amazon-home","auiAjax":"1"}}</script>














<div id="dpx-legal_feature_div">







  



        
        
        
        
  









        













<div id="legal_feature_div" class="feature" data-feature-name="legal">
         
     




    

    
    
    
        
            
                
	                
	                
	                	







	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div></div>


<div id="dpx-image-block-variations_feature_div">







  



        
        
        
        
  









        








<script>
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/61TwWbu0afL.js?AUIClients/DetailPageImageBlockAssets#153723-T1');
</script>





<div id="imageBlockVariations_feature_div" class="feature" data-feature-name="imageBlockVariations">
         
     




    

    
    
    
        
            
                
	                
	                
	                	




<script type="text/javascript">
P.when('A', 'jQuery', 'ImageBlockATF', 'cf').register('ImageBlockBTF', function(A, $, imageBlockATF, cf){
var data = {};
var obj = jQuery.parseJSON('{"dataInJson":null,"alwaysIncludeVideo":true,"autoplayVideo":false,"defaultColor":"initial","mainImageSizes":[["355","355"],["450","450"],["425","550"],["466","606"],["522","679"],["569","741"],["679","879"]],"maxAlts":7,"altsOnLeft":true,"productGroupID":"amazon_home_display_on_website","lazyLoadExperienceDisabled":true,"lazyLoadExperienceOnHoverDisabled":false,"useChromelessVideoPlayer":false,"colorToAsin":{"Schwarzes Echo Input Dschungelgrün":{"asin":"B07JY2MWHB"},"Schwarzes Echo Input Bengalrot":{"asin":"B07JQLY69Y"},"Weißes Echo Input Weiß":{"asin":"B07L6B6QHN"},"Weißes Echo Input Bengalrot":{"asin":"B07JQNC71D"},"Weißes Echo Input Rot":{"asin":"B07L6834S4"},"Schwarzes Echo Input Ultraviolett":{"asin":"B07JP45LBX"},"Schwarzes Echo Input Blau":{"asin":"B07L69F8SQ"},"Weißes Echo Input Gelb":{"asin":"B07L68MWQD"},"Schwarzes Echo Input Gelb":{"asin":"B07L6B4W1P"},"Weißes Echo Input Weißes Echo Input":{"asin":"B07C7JBTSD"},"Schwarzes Echo Input Blaue Lagune":{"asin":"B07JQNBZG3"},"Schwarzes Echo Input Mitternachtsschwarz":{"asin":"B07H84Y342"},"Schwarzes Echo Input Schwarzes Echo Input":{"asin":"B07C76F3P2"},"Schwarzes Echo Input Weiß":{"asin":"B07L687G35"},"Schwarzes Echo Input Rot":{"asin":"B07L5YQTL4"},"Weißes Echo Input Ultraviolett":{"asin":"B07JQNFYG6"},"Weißes Echo Input Blau":{"asin":"B07L681HBZ"},"Weißes Echo Input Mitternachtsschwarz":{"asin":"B07HSY2RHC"},"Weißes Echo Input Blaue Lagune":{"asin":"B07JQNBZH7"},"Weißes Echo Input Dschungelgrün":{"asin":"B07JQM7BY5"}},"refactorEnabled":true,"useIV":true,"views":["ImageBlockMagnifierView","ImageBlockAltImageView","ImageBlockVideoView","ImageBlockTwisterView","ImageBlockImmersiveView"],"enhancedHoverOverlay":false,"landingAsinColor":"Schwarzes Echo Input Schwarzes Echo Input","colorImages":{"Schwarzes Echo Input Dschungelgrün":[{"large":"https://images-na.ssl-images-amazon.com/images/I/41uSMvZAcEL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/41uSMvZAcEL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61cPDYFjJ%2BL._SL1000_.jpg","variant":"MAIN","main":{"https://images-na.ssl-images-amazon.com/images/I/61cPDYFjJ%2BL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61cPDYFjJ%2BL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/61cPDYFjJ%2BL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/61cPDYFjJ%2BL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61cPDYFjJ%2BL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61cPDYFjJ%2BL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61cPDYFjJ%2BL._SX466_.jpg":["466","466"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51jlZH%2BcflL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51jlZH%2BcflL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SL1000_.jpg","variant":"PT02","main":{"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX425_.jpg":["425","425"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51FQyWOG-BL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51FQyWOG-BL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SL1000_.jpg","variant":"PT03","main":{"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SY355_.jpg":["355","355"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51xwX1lWNNL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51xwX1lWNNL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SL1000_.jpg","variant":"PT04","main":{"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SY450_.jpg":["450","450"]}}],"Schwarzes Echo Input Bengalrot":[{"large":"https://images-na.ssl-images-amazon.com/images/I/41HbCP-R2uL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/41HbCP-R2uL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61hnzgYuU2L._SL1000_.jpg","variant":"MAIN","main":{"https://images-na.ssl-images-amazon.com/images/I/61hnzgYuU2L._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61hnzgYuU2L._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61hnzgYuU2L._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61hnzgYuU2L._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61hnzgYuU2L._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/61hnzgYuU2L._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61hnzgYuU2L._SY450_.jpg":["450","450"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51jlZH%2BcflL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51jlZH%2BcflL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SL1000_.jpg","variant":"PT02","main":{"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX425_.jpg":["425","425"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51FQyWOG-BL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51FQyWOG-BL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SL1000_.jpg","variant":"PT03","main":{"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SY355_.jpg":["355","355"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51xwX1lWNNL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51xwX1lWNNL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SL1000_.jpg","variant":"PT04","main":{"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SY450_.jpg":["450","450"]}}],"Weißes Echo Input Weiß":[{"large":"https://images-na.ssl-images-amazon.com/images/I/418z2H947qL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/418z2H947qL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61p1RHdgGIL._SL1000_.jpg","variant":"MAIN","main":{"https://images-na.ssl-images-amazon.com/images/I/61p1RHdgGIL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61p1RHdgGIL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61p1RHdgGIL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61p1RHdgGIL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61p1RHdgGIL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/61p1RHdgGIL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61p1RHdgGIL._SY355_.jpg":["355","355"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51jlZH%2BcflL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51jlZH%2BcflL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SL1000_.jpg","variant":"PT02","main":{"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX425_.jpg":["425","425"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51FQyWOG-BL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51FQyWOG-BL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SL1000_.jpg","variant":"PT03","main":{"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SY355_.jpg":["355","355"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51xwX1lWNNL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51xwX1lWNNL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SL1000_.jpg","variant":"PT04","main":{"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SY450_.jpg":["450","450"]}}],"Weißes Echo Input Bengalrot":[{"large":"https://images-na.ssl-images-amazon.com/images/I/41cWxnNwOmL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/41cWxnNwOmL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61A3htReoVL._SL1000_.jpg","variant":"MAIN","main":{"https://images-na.ssl-images-amazon.com/images/I/61A3htReoVL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/61A3htReoVL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61A3htReoVL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61A3htReoVL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61A3htReoVL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61A3htReoVL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61A3htReoVL._SY355_.jpg":["355","355"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51jlZH%2BcflL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51jlZH%2BcflL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SL1000_.jpg","variant":"PT02","main":{"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX425_.jpg":["425","425"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51FQyWOG-BL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51FQyWOG-BL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SL1000_.jpg","variant":"PT03","main":{"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SY355_.jpg":["355","355"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51xwX1lWNNL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51xwX1lWNNL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SL1000_.jpg","variant":"PT04","main":{"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SY450_.jpg":["450","450"]}}],"Weißes Echo Input Rot":[{"large":"https://images-na.ssl-images-amazon.com/images/I/417LpwKuEPL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/417LpwKuEPL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61W9e9S%2BlKL._SL1000_.jpg","variant":"MAIN","main":{"https://images-na.ssl-images-amazon.com/images/I/61W9e9S%2BlKL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/61W9e9S%2BlKL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61W9e9S%2BlKL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61W9e9S%2BlKL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/61W9e9S%2BlKL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61W9e9S%2BlKL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61W9e9S%2BlKL._SX466_.jpg":["466","466"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51jlZH%2BcflL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51jlZH%2BcflL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SL1000_.jpg","variant":"PT02","main":{"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX425_.jpg":["425","425"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51FQyWOG-BL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51FQyWOG-BL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SL1000_.jpg","variant":"PT03","main":{"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SY355_.jpg":["355","355"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51xwX1lWNNL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51xwX1lWNNL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SL1000_.jpg","variant":"PT04","main":{"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SY450_.jpg":["450","450"]}}],"Schwarzes Echo Input Ultraviolett":[{"large":"https://images-na.ssl-images-amazon.com/images/I/41QXMEUE8LL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/41QXMEUE8LL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61zPzCDhY9L._SL1000_.jpg","variant":"MAIN","main":{"https://images-na.ssl-images-amazon.com/images/I/61zPzCDhY9L._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61zPzCDhY9L._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/61zPzCDhY9L._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61zPzCDhY9L._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61zPzCDhY9L._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/61zPzCDhY9L._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61zPzCDhY9L._SX466_.jpg":["466","466"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51jlZH%2BcflL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51jlZH%2BcflL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SL1000_.jpg","variant":"PT02","main":{"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX425_.jpg":["425","425"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51FQyWOG-BL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51FQyWOG-BL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SL1000_.jpg","variant":"PT03","main":{"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SY355_.jpg":["355","355"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51xwX1lWNNL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51xwX1lWNNL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SL1000_.jpg","variant":"PT04","main":{"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SY450_.jpg":["450","450"]}}],"Schwarzes Echo Input Blau":[{"large":"https://images-na.ssl-images-amazon.com/images/I/41VHiiGEF2L.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/41VHiiGEF2L._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61PKKrZs%2BYL._SL1000_.jpg","variant":"MAIN","main":{"https://images-na.ssl-images-amazon.com/images/I/61PKKrZs%2BYL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61PKKrZs%2BYL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61PKKrZs%2BYL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/61PKKrZs%2BYL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61PKKrZs%2BYL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/61PKKrZs%2BYL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61PKKrZs%2BYL._SX569_.jpg":["569","569"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51jlZH%2BcflL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51jlZH%2BcflL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SL1000_.jpg","variant":"PT02","main":{"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX425_.jpg":["425","425"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51FQyWOG-BL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51FQyWOG-BL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SL1000_.jpg","variant":"PT03","main":{"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SY355_.jpg":["355","355"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51xwX1lWNNL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51xwX1lWNNL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SL1000_.jpg","variant":"PT04","main":{"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SY450_.jpg":["450","450"]}}],"Weißes Echo Input Gelb":[{"large":"https://images-na.ssl-images-amazon.com/images/I/41e4rX1jQ7L.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/41e4rX1jQ7L._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61jxMEujEKL._SL1000_.jpg","variant":"MAIN","main":{"https://images-na.ssl-images-amazon.com/images/I/61jxMEujEKL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61jxMEujEKL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61jxMEujEKL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61jxMEujEKL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61jxMEujEKL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61jxMEujEKL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/61jxMEujEKL._SY450_.jpg":["450","450"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51jlZH%2BcflL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51jlZH%2BcflL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SL1000_.jpg","variant":"PT02","main":{"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX425_.jpg":["425","425"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51FQyWOG-BL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51FQyWOG-BL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SL1000_.jpg","variant":"PT03","main":{"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SY355_.jpg":["355","355"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51xwX1lWNNL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51xwX1lWNNL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SL1000_.jpg","variant":"PT04","main":{"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SY450_.jpg":["450","450"]}}],"Schwarzes Echo Input Gelb":[{"large":"https://images-na.ssl-images-amazon.com/images/I/41DS2OuqHoL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/41DS2OuqHoL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61GMluCJBxL._SL1000_.jpg","variant":"MAIN","main":{"https://images-na.ssl-images-amazon.com/images/I/61GMluCJBxL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61GMluCJBxL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/61GMluCJBxL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61GMluCJBxL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/61GMluCJBxL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61GMluCJBxL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61GMluCJBxL._SX425_.jpg":["425","425"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51jlZH%2BcflL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51jlZH%2BcflL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SL1000_.jpg","variant":"PT02","main":{"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX425_.jpg":["425","425"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51FQyWOG-BL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51FQyWOG-BL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SL1000_.jpg","variant":"PT03","main":{"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SY355_.jpg":["355","355"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51xwX1lWNNL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51xwX1lWNNL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SL1000_.jpg","variant":"PT04","main":{"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SY450_.jpg":["450","450"]}}],"Weißes Echo Input Weißes Echo Input":[{"large":"https://images-na.ssl-images-amazon.com/images/I/51P7Gp%2BDChL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51P7Gp%2BDChL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/71kgw3qhgEL._SL1000_.jpg","variant":"LEFT","main":{"https://images-na.ssl-images-amazon.com/images/I/71kgw3qhgEL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/71kgw3qhgEL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/71kgw3qhgEL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/71kgw3qhgEL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/71kgw3qhgEL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/71kgw3qhgEL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/71kgw3qhgEL._SX466_.jpg":["466","466"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/31IRaP5qY5L.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/31IRaP5qY5L._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/41%2B3b2wmwfL._SL1000_.jpg","variant":"MAIN","main":{"https://images-na.ssl-images-amazon.com/images/I/41%2B3b2wmwfL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/41%2B3b2wmwfL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/41%2B3b2wmwfL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/41%2B3b2wmwfL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/41%2B3b2wmwfL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/41%2B3b2wmwfL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/41%2B3b2wmwfL._SX569_.jpg":["569","569"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51DROC84mWL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51DROC84mWL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/71ttALrqHkL._SL1000_.jpg","variant":"PT01","main":{"https://images-na.ssl-images-amazon.com/images/I/71ttALrqHkL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/71ttALrqHkL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/71ttALrqHkL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/71ttALrqHkL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/71ttALrqHkL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/71ttALrqHkL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/71ttALrqHkL._SX522_.jpg":["522","522"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51jlZH%2BcflL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51jlZH%2BcflL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SL1000_.jpg","variant":"PT02","main":{"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX425_.jpg":["425","425"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51FQyWOG-BL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51FQyWOG-BL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SL1000_.jpg","variant":"PT03","main":{"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SY355_.jpg":["355","355"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51xwX1lWNNL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51xwX1lWNNL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SL1000_.jpg","variant":"PT04","main":{"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SY450_.jpg":["450","450"]}}],"Schwarzes Echo Input Blaue Lagune":[{"large":"https://images-na.ssl-images-amazon.com/images/I/41Du93aF3qL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/41Du93aF3qL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61l2-BXDAHL._SL1000_.jpg","variant":"MAIN","main":{"https://images-na.ssl-images-amazon.com/images/I/61l2-BXDAHL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/61l2-BXDAHL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61l2-BXDAHL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/61l2-BXDAHL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61l2-BXDAHL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61l2-BXDAHL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61l2-BXDAHL._SX679_.jpg":["679","679"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51jlZH%2BcflL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51jlZH%2BcflL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SL1000_.jpg","variant":"PT02","main":{"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX425_.jpg":["425","425"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51FQyWOG-BL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51FQyWOG-BL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SL1000_.jpg","variant":"PT03","main":{"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SY355_.jpg":["355","355"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51xwX1lWNNL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51xwX1lWNNL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SL1000_.jpg","variant":"PT04","main":{"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SY450_.jpg":["450","450"]}}],"Schwarzes Echo Input Mitternachtsschwarz":[{"large":"https://images-na.ssl-images-amazon.com/images/I/41kh4ve5E8L.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/41kh4ve5E8L._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/613inUOSHmL._SL1000_.jpg","variant":"MAIN","main":{"https://images-na.ssl-images-amazon.com/images/I/613inUOSHmL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/613inUOSHmL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/613inUOSHmL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/613inUOSHmL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/613inUOSHmL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/613inUOSHmL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/613inUOSHmL._SX569_.jpg":["569","569"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51jlZH%2BcflL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51jlZH%2BcflL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SL1000_.jpg","variant":"PT02","main":{"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX425_.jpg":["425","425"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51FQyWOG-BL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51FQyWOG-BL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SL1000_.jpg","variant":"PT03","main":{"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SY355_.jpg":["355","355"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51xwX1lWNNL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51xwX1lWNNL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SL1000_.jpg","variant":"PT04","main":{"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SY450_.jpg":["450","450"]}}],"Schwarzes Echo Input Schwarzes Echo Input":[{"large":"https://images-na.ssl-images-amazon.com/images/I/516V8PF6PcL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/516V8PF6PcL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/71sCCFhbaaL._SL1000_.jpg","variant":"LEFT","main":{"https://images-na.ssl-images-amazon.com/images/I/71sCCFhbaaL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/71sCCFhbaaL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/71sCCFhbaaL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/71sCCFhbaaL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/71sCCFhbaaL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/71sCCFhbaaL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/71sCCFhbaaL._SY355_.jpg":["355","355"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/31Alxl7qcaL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/31Alxl7qcaL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/51fF4BCu6qL._SL1000_.jpg","variant":"MAIN","main":{"https://images-na.ssl-images-amazon.com/images/I/51fF4BCu6qL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/51fF4BCu6qL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/51fF4BCu6qL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/51fF4BCu6qL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/51fF4BCu6qL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/51fF4BCu6qL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/51fF4BCu6qL._SY450_.jpg":["450","450"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51DROC84mWL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51DROC84mWL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/71ttALrqHkL._SL1000_.jpg","variant":"PT01","main":{"https://images-na.ssl-images-amazon.com/images/I/71ttALrqHkL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/71ttALrqHkL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/71ttALrqHkL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/71ttALrqHkL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/71ttALrqHkL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/71ttALrqHkL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/71ttALrqHkL._SX522_.jpg":["522","522"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51jlZH%2BcflL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51jlZH%2BcflL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SL1000_.jpg","variant":"PT02","main":{"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX425_.jpg":["425","425"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51FQyWOG-BL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51FQyWOG-BL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SL1000_.jpg","variant":"PT03","main":{"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SY355_.jpg":["355","355"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51xwX1lWNNL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51xwX1lWNNL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SL1000_.jpg","variant":"PT04","main":{"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SY450_.jpg":["450","450"]}}],"Schwarzes Echo Input Weiß":[{"large":"https://images-na.ssl-images-amazon.com/images/I/41-QN3MF0XL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/41-QN3MF0XL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/619zeKkLvnL._SL1000_.jpg","variant":"MAIN","main":{"https://images-na.ssl-images-amazon.com/images/I/619zeKkLvnL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/619zeKkLvnL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/619zeKkLvnL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/619zeKkLvnL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/619zeKkLvnL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/619zeKkLvnL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/619zeKkLvnL._SX425_.jpg":["425","425"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51jlZH%2BcflL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51jlZH%2BcflL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SL1000_.jpg","variant":"PT02","main":{"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX425_.jpg":["425","425"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51FQyWOG-BL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51FQyWOG-BL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SL1000_.jpg","variant":"PT03","main":{"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SY355_.jpg":["355","355"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51xwX1lWNNL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51xwX1lWNNL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SL1000_.jpg","variant":"PT04","main":{"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SY450_.jpg":["450","450"]}}],"Schwarzes Echo Input Rot":[{"large":"https://images-na.ssl-images-amazon.com/images/I/41CuofrBq4L.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/41CuofrBq4L._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61AHMLn%2Bv5L._SL1000_.jpg","variant":"MAIN","main":{"https://images-na.ssl-images-amazon.com/images/I/61AHMLn%2Bv5L._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/61AHMLn%2Bv5L._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61AHMLn%2Bv5L._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61AHMLn%2Bv5L._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61AHMLn%2Bv5L._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61AHMLn%2Bv5L._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/61AHMLn%2Bv5L._SX569_.jpg":["569","569"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51jlZH%2BcflL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51jlZH%2BcflL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SL1000_.jpg","variant":"PT02","main":{"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX425_.jpg":["425","425"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51FQyWOG-BL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51FQyWOG-BL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SL1000_.jpg","variant":"PT03","main":{"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SY355_.jpg":["355","355"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51xwX1lWNNL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51xwX1lWNNL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SL1000_.jpg","variant":"PT04","main":{"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SY450_.jpg":["450","450"]}}],"Weißes Echo Input Ultraviolett":[{"large":"https://images-na.ssl-images-amazon.com/images/I/41xE0l0taUL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/41xE0l0taUL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/611lngTK02L._SL1000_.jpg","variant":"MAIN","main":{"https://images-na.ssl-images-amazon.com/images/I/611lngTK02L._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/611lngTK02L._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/611lngTK02L._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/611lngTK02L._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/611lngTK02L._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/611lngTK02L._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/611lngTK02L._SY355_.jpg":["355","355"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51jlZH%2BcflL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51jlZH%2BcflL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SL1000_.jpg","variant":"PT02","main":{"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX425_.jpg":["425","425"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51FQyWOG-BL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51FQyWOG-BL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SL1000_.jpg","variant":"PT03","main":{"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SY355_.jpg":["355","355"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51xwX1lWNNL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51xwX1lWNNL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SL1000_.jpg","variant":"PT04","main":{"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SY450_.jpg":["450","450"]}}],"Weißes Echo Input Blau":[{"large":"https://images-na.ssl-images-amazon.com/images/I/41%2B1NDIt4YL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/41%2B1NDIt4YL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61Un3tnrlAL._SL1000_.jpg","variant":"MAIN","main":{"https://images-na.ssl-images-amazon.com/images/I/61Un3tnrlAL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/61Un3tnrlAL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61Un3tnrlAL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/61Un3tnrlAL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61Un3tnrlAL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61Un3tnrlAL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61Un3tnrlAL._SX466_.jpg":["466","466"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51jlZH%2BcflL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51jlZH%2BcflL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SL1000_.jpg","variant":"PT02","main":{"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX425_.jpg":["425","425"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51FQyWOG-BL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51FQyWOG-BL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SL1000_.jpg","variant":"PT03","main":{"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SY355_.jpg":["355","355"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51xwX1lWNNL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51xwX1lWNNL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SL1000_.jpg","variant":"PT04","main":{"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SY450_.jpg":["450","450"]}}],"Weißes Echo Input Mitternachtsschwarz":[{"large":"https://images-na.ssl-images-amazon.com/images/I/41sd9b5A0VL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/41sd9b5A0VL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61vIFN1YesL._SL1000_.jpg","variant":"MAIN","main":{"https://images-na.ssl-images-amazon.com/images/I/61vIFN1YesL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/61vIFN1YesL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61vIFN1YesL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61vIFN1YesL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61vIFN1YesL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61vIFN1YesL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/61vIFN1YesL._SX679_.jpg":["679","679"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51jlZH%2BcflL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51jlZH%2BcflL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SL1000_.jpg","variant":"PT02","main":{"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX425_.jpg":["425","425"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51FQyWOG-BL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51FQyWOG-BL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SL1000_.jpg","variant":"PT03","main":{"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SY355_.jpg":["355","355"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51xwX1lWNNL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51xwX1lWNNL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SL1000_.jpg","variant":"PT04","main":{"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SY450_.jpg":["450","450"]}}],"Weißes Echo Input Blaue Lagune":[{"large":"https://images-na.ssl-images-amazon.com/images/I/41xclHbSUKL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/41xclHbSUKL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/618eyRr6f3L._SL1000_.jpg","variant":"MAIN","main":{"https://images-na.ssl-images-amazon.com/images/I/618eyRr6f3L._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/618eyRr6f3L._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/618eyRr6f3L._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/618eyRr6f3L._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/618eyRr6f3L._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/618eyRr6f3L._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/618eyRr6f3L._SX466_.jpg":["466","466"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51jlZH%2BcflL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51jlZH%2BcflL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SL1000_.jpg","variant":"PT02","main":{"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX425_.jpg":["425","425"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51FQyWOG-BL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51FQyWOG-BL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SL1000_.jpg","variant":"PT03","main":{"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SY355_.jpg":["355","355"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51xwX1lWNNL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51xwX1lWNNL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SL1000_.jpg","variant":"PT04","main":{"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SY450_.jpg":["450","450"]}}],"Weißes Echo Input Dschungelgrün":[{"large":"https://images-na.ssl-images-amazon.com/images/I/41h1O7b-7ZL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/41h1O7b-7ZL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61uZYaptOlL._SL1000_.jpg","variant":"MAIN","main":{"https://images-na.ssl-images-amazon.com/images/I/61uZYaptOlL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61uZYaptOlL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61uZYaptOlL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61uZYaptOlL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/61uZYaptOlL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/61uZYaptOlL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61uZYaptOlL._SX466_.jpg":["466","466"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51jlZH%2BcflL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51jlZH%2BcflL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SL1000_.jpg","variant":"PT02","main":{"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/71fygqDG-QL._SX425_.jpg":["425","425"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51FQyWOG-BL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51FQyWOG-BL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SL1000_.jpg","variant":"PT03","main":{"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SY450_.jpg":["450","450"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61cWWbRD3rL._SY355_.jpg":["355","355"]}},{"large":"https://images-na.ssl-images-amazon.com/images/I/51xwX1lWNNL.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/51xwX1lWNNL._SS40_.jpg","hiRes":"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SL1000_.jpg","variant":"PT04","main":{"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX569_.jpg":["569","569"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX425_.jpg":["425","425"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX466_.jpg":["466","466"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX679_.jpg":["679","679"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SX522_.jpg":["522","522"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SY355_.jpg":["355","355"],"https://images-na.ssl-images-amazon.com/images/I/61JdVdVcHPL._SY450_.jpg":["450","450"]}}]},"heroImages":{"Schwarzes Echo Input Dschungelgrün":[],"Schwarzes Echo Input Bengalrot":[],"Weißes Echo Input Weiß":[],"Weißes Echo Input Bengalrot":[],"Weißes Echo Input Rot":[],"Schwarzes Echo Input Ultraviolett":[],"Schwarzes Echo Input Blau":[],"Weißes Echo Input Gelb":[],"Schwarzes Echo Input Gelb":[],"Weißes Echo Input Weißes Echo Input":[],"Schwarzes Echo Input Blaue Lagune":[],"Schwarzes Echo Input Mitternachtsschwarz":[],"Schwarzes Echo Input Schwarzes Echo Input":[],"Schwarzes Echo Input Weiß":[],"Schwarzes Echo Input Rot":[],"Weißes Echo Input Ultraviolett":[],"Weißes Echo Input Blau":[],"Weißes Echo Input Mitternachtsschwarz":[],"Weißes Echo Input Blaue Lagune":[],"Weißes Echo Input Dschungelgrün":[]},"enable360Map":{"Schwarzes Echo Input Dschungelgrün":false,"Schwarzes Echo Input Bengalrot":false,"Weißes Echo Input Weiß":false,"Weißes Echo Input Bengalrot":false,"Weißes Echo Input Rot":false,"Schwarzes Echo Input Ultraviolett":false,"Schwarzes Echo Input Blau":false,"Weißes Echo Input Gelb":false,"Schwarzes Echo Input Gelb":false,"Weißes Echo Input Weißes Echo Input":false,"Schwarzes Echo Input Blaue Lagune":false,"Schwarzes Echo Input Mitternachtsschwarz":false,"Schwarzes Echo Input Schwarzes Echo Input":false,"Schwarzes Echo Input Weiß":false,"Schwarzes Echo Input Rot":false,"Weißes Echo Input Ultraviolett":false,"Weißes Echo Input Blau":false,"Weißes Echo Input Mitternachtsschwarz":false,"Weißes Echo Input Blaue Lagune":false,"Weißes Echo Input Dschungelgrün":false},"staticImages":{"hoverZoomIcon":null,"zoomLensBackground":"https://images-na.ssl-images-amazon.com/images/G/03/apparel/rcxgs/tile._CB483369910_.gif","zoomInCur":"https://images-na.ssl-images-amazon.com/images/G/03/detail-page/cursors/zoomIn._CB271897264_.cur","arrow":"https://images-na.ssl-images-amazon.com/images/G/03/javascripts/lib/popover/images/light/sprite-vertical-popover-arrow._CB186039208_.png","zoomIn":"https://images-na.ssl-images-amazon.com/images/G/03/detail-page/cursors/zoom-in._CB184888321_.bmp","zoomOut":"https://images-na.ssl-images-amazon.com/images/G/03/detail-page/cursors/zoom-out._CB184888341_.bmp","videoThumbIcon":"https://images-na.ssl-images-amazon.com/images/G/03/Quarterdeck/en_US/images/video._CB140033762_SS40_.jpg","spinnerNoLabel":"https://images-na.ssl-images-amazon.com/images/G/03/ui/loadIndicators/loading-large._CB192546226_.gif","zoomOutCur":"https://images-na.ssl-images-amazon.com/images/G/03/detail-page/cursors/zoomOut._CB271897247_.cur","videoSWFPath":"https://images-na.ssl-images-amazon.com/images/G/03/Quarterdeck/en_US/video/20110518115040892/Video._CB137425805_.swf","grabbing":"https://images-na.ssl-images-amazon.com/images/G/03/HomeCustomProduct/grabbingbox._CB498011280_.cur","icon360":"https://images-na.ssl-images-amazon.com/images/G/03/HomeCustomProduct/360_icon_73x73v2._CB498011280_SS40_.png","grab":"https://images-na.ssl-images-amazon.com/images/G/03/HomeCustomProduct/grabbox._CB498011280_.cur","spinner":"https://images-na.ssl-images-amazon.com/images/G/03/ui/loadIndicators/loading-large_labeled._CB186124316_.gif"},"staticStrings":{"images":"Bilder","watchMoreVideos":"Für mehr Videos klicken","allMedia":"Alle Medien","dragToSpin":"Zum Drehen ziehen","videos":"Videos","video":"Video","rollOverToZoom":"Für größere Ansicht Maus über das Bild ziehen","clickToExpand":"Für eine größere Ansicht klicken Sie auf das Bild","playVideo":"Zur Video-Wiedergabe klicken","touchToZoom":"Berühren Sie das Bild, um es zu vergrößern.","multipleVideos":"VIDEOS","singleVideo":"VIDEO","pleaseSelect":"Bitte wählen Sie","close":"Schließen","clickToZoom":"Klicken Sie auf das Bild, um es zu vergrößern"},"useChildVideos":true,"useClickZoom":false,"useHoverZoom":true,"useHoverZoomIpad":false,"visualDimensions":["style_name","color_name"],"mainImageHeightPartitions":null,"mainImageMaxSizes":null,"heroFocalPoint":null,"showMagnifierOnHover":false,"disableHoverOnAltImages":false,"overrideAltImageClickAction":false,"naturalMainImageSize":null,"imgTagWrapperClasses":null,"prioritizeVideos":false,"usePeekHover":false,"fadeMagnifier":false,"repositionHeroImage":false,"heroVideoVariant":null,"videos":[],"title":"Echo Input (Schwarz) \\\u2013 Bringen Sie Alexa auf Ihren Lautsprecher \\\u2013 Externer Lautsprecher mit 3,5-mm-Audioeingang oder Bluetooth erforderlich","airyConfig":{"jsUrl":"https://images-na.ssl-images-amazon.com/images/G/01/vap/video/airy2/prod/2.0.1460.0/js/airy.skin._CB513066589_.js","cssUrl":"https://images-na.ssl-images-amazon.com/images/G/01/vap/video/airy2/prod/2.0.1460.0/css/beacon._CB513066589_.css","swfUrl":"https://images-na.ssl-images-amazon.com/images/G/01/vap/video/airy2/prod/2.0.1460.0/flash/AiryBasicRenderer._CB513066589_.swf","foresterMetadataParams":{"marketplaceId":"A1PA6795UKMFR9","clientId":"Dpx","method":"AmazonHome.ImageBlock","requestId":"S7Y7MCSM8BQQZXDKY4RQ","session":"262-9898842-9713804"}},"productReelTreatment":"C","vseVideoDataSourceTreatment":"C","mediaAsin":"B07C76F3P2","largeSCLVideoThumbnail":false,"displayVideoBanner":false,"dpRequestId":null}');
data["alwaysIncludeVideo"] = obj.alwaysIncludeVideo ? 1 : 0;
data["autoplayVideo"] = obj.autoplayVideo ? 1 : 0;
data["defaultColor"] = obj.defaultColor;
data["maxAlts"] = obj.maxAlts;
data["altsOnLeft"] = obj.altsOnLeft;
data["newVideoMissing"] = obj.newVideoMissing;
data["lazyLoadExperienceDisabled"] = obj.lazyLoadExperienceDisabled;
data["lazyLoadExperienceOnHoverDisabled"] = obj.lazyLoadExperienceOnHoverDisabled;
data["useChromelessVideoPlayer"] = obj.useChromelessVideoPlayer ? 1 : 0;
data["colorToAsin"] = obj.colorToAsin;
data["ivRepresentativeAsin"] = obj.ivRepresentativeAsin;
data["ivImageSetKeys"] = obj.ivImageSetKeys;
data["useIV"] = obj.useIV ? 1 : 0;
data["views"] = obj.views;
data["enhancedHoverOverlay"] = obj.enhancedHoverOverlay;
data["landingAsinColor"] = obj.landingAsinColor;
data["colorImages"] = obj.colorImages;
data["heroImage"] = obj.heroImages;
data["spin360ColorEnabled"] = obj.enable360Map;
data["staticImages"] = obj.staticImages;
data["staticStrings"] = obj.staticStrings;
data["useChildVideos"] = obj.useChildVideos ? 1 : 0;
data["useClickZoom"] = obj.useClickZoom ? 1 : 0;
data["useHoverZoom"] = obj.useHoverZoom ? 1 : 0;
data["useHoverZoomIpad"] = obj.useHoverZoomIpad ? 1 : 0;
data["visualDimensions"] = obj.visualDimensions;
data["isLargeSCLVideoThumbnail"] = obj.largeSCLVideoThumbnail;
data["mainImageSizes"] = obj.mainImageSizes;
data["displayVideoBanner"] = obj.displayVideoBanner;
data["mainImageHeightPartitions"] = obj.mainImageHeightPartitions;
data["mainImageMaxSizes"] = obj.mainImageMaxSizes;
data["heroFocalPoint"] = obj.heroFocalPoint;
data["showMagnifierOnHover"] = obj.showMagnifierOnHover ? 1 : 0;
data["disableHoverOnAltImages"] = obj.disableHoverOnAltImages ? 1 : 0;
data["overrideAltImageClickAction"] = obj.overrideAltImageClickAction ? 1 : 0;
data["naturalMainImageSize"] = obj.naturalMainImageSize;
data["imgTagWrapperClasses"] = obj.imgTagWrapperClasses;
data["prioritizeVideos"] = obj.prioritizeVideos;
data["usePeekHover"] = obj.usePeekHover;
data["fadeMagnifier"] = obj.fadeMagnifier;
data["repositionHeroImage"] = obj.repositionHeroImage;
data["heroVideoVariant"] = obj.heroVideoVariant;
data["videos"] = obj.videos;
data["productGroupID"] = obj.productGroupID;
data["title"] = obj.title;
data["airyConfig"] = obj.airyConfig;
data["isDPXFeatureEnabled"] = true;
data["tabbedImmersiveViewTreatment"] = obj.productReelTreatment;
data["vseVideoDataSourceTreatment"] = obj.vseVideoDataSourceTreatment;
data["dpRequestId"] = obj.dpRequestId;
data["mediaAsin"] = obj.mediaAsin;

return data;
});
</script>

	                
                
            
        
        
        
        
        
        
        
    
    
    

    






    










    </div>

</div>


<div id="dpx-ajax-block-components_feature_div">







  



        
        
        
        
  









        













<div id="ajaxBlockComponents_feature_div" class="feature" data-feature-name="ajaxBlockComponents">
         
     




    

    
    
    
        
            
                
	                
	                
	                	



<script type="text/javascript">

P.when('A','jQuery').execute('triggerVideoAjax', function(A){
var obj = jQuery.parseJSON('{"dataInJson":null,"colorImages":{},"videos":[],"lazyLoadExperienceDisabled":true,"lazyLoadExperienceOnHoverDisabled":false,"refactorEnabled":false,"mainImageSizes":[["355","355"],["450","450"],["425","550"],["466","606"],["522","679"],["569","741"],["679","879"]]}');
A.trigger('triggerVideoAjax',obj.videos);
});
</script>

	                
                
            
        
        
        
        
        
        
        
    
    
    

    






    










    </div>
</div>

            
            




  <script type="text/javascript">
    // Only execute if performance object is defined in JS
    if(typeof performance!= "undefined" && typeof performance.getEntries != "undefined") {




        var metaAssetNames = [];
        metaAssetNames.push("AmazonDevicesDetailPageMetaAssets");
        if(metaAssetNames.length > 0)  {
            for(assetIndex = 0; assetIndex < metaAssetNames.length; assetIndex ++) {
	     var metaAssetName = metaAssetNames[assetIndex];
             var re = new RegExp("\\\\.css\\\\?AUIClients/" + metaAssetName); 
             for(i = 0; i < performance.getEntries().length; i++) {	   	
                var dpEntry = performance.getEntries()[i];
		var res = dpEntry.name.match(re);
                if(res && dpEntry.initiatorType  && dpEntry.initiatorType == "link") {
                    var dpmaDuration = dpEntry.duration;
                    ue.count(metaAssetName +".duration", dpmaDuration);
                    if(dpmaDuration < 50) {
                        ue.tag(metaAssetName + "Cached");
                    } else {
                        ue.tag(metaAssetName + "NotCached");
                    }
                    ue.count(metaAssetName + ".startTime", dpEntry.startTime);
                }
	      }
	    }
        }
        else {
                ue.count("DPMANoMetaAsset", 1);
        }

        for(i = 0 ; i < performance.getEntries().length ; i++) {
            var name = performance.getEntries()[i].name ;
            var res = name.match(/\\.css\\?AUIClients\\/AmazonUI/);
	    var initiatorType = performance.getEntries()[i].initiatorType;
            if(res && initiatorType && initiatorType == "link") {
                var duration = performance.getEntries()[i].duration ;
                ue.count("aui.duration", duration);
                ue.count("aui.startTime", performance.getEntries()[i].startTime);
                if(duration < 50) {
                    csmTag = "auiCached";
                }
                else {
                    csmTag = "auiNotCached";
                }

                if(window.ue && ue.tag) {
                    ue.tag(csmTag);
                }
                break;
            }
        }
    }
</script>


















<script>
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('A').execute(function(A){
  if(A.preload){
    A.preload('https://images-eu.ssl-images-amazon.com/images/I/61FluID2l-L._RC|11IYhapguOL.js,61VQRvc280L.js,21iSNz47xoL.js,012FVc3131L.js,119KAWlHU6L.js,31fv8bqHLoL.js,31ReKJl2X6L.js,51WivJzk7vL.js,11AHlQhPRjL.js,01NATrwbNUL.js,11aNYFFS5hL.js,116tgw9TSaL.js,21auxuI+dRL.js,01PoLXBDXWL.js,61GDyZ5kYqL.js,01mi-J86cyL.js,11BOgvnnntL.js,31SG6rlHlbL.js,01rpauTep4L.js,01iyxuSGj4L.js,01ChXuHDZsL.js_.js?AUIClients/AmazonUI#177619-T1.144375-T1');
    A.preload('https://images-eu.ssl-images-amazon.com/images/I/61deBWgm5iL._RC|01evdoiemkL.css,01K+Ps1DeEL.css,31bAdTWQ3tL.css,11fF1zzJODL.css,11UGC+GXOPL.css,21LK7jaicML.css,11L58Qpo0GL.css,21EuGTxgpoL.css,01Xl9KigtzL.css,01YhS3Cs-hL.css,21GwE3cR-yL.css,019SHZnt8RL.css,01gv-pABIRL.css,11vZhCgAHbL.css,21Mne54CsmL.css,11WgRxUdJRL.css,01dU8+SPlFL.css,11DGn6WmpTL.css,01SHjPML6tL.css,111-D2qRjiL.css,01QrWuRrZ-L.css,31ElCx173PL.css,114KWZGKCVL.css,01cbS3UK11L.css,21gqsBkZE0L.css,01L8Y-JFEhL.css_.css?AUIClients/AmazonUI#not-trident');
    A.preload('https://images-eu.ssl-images-amazon.com/images/I/311EquJBNjL._RC|31gnJjWvxPL.js,317N9f2eGzL.js,21u1PnPEsML.js,318rs4piGPL.js,11ISJZDdTuL.js,11ZdiaYG8gL.js,01jEqq6I0UL.js,013NxCyC-FL.js,61863AsnrmL.js,01X5C8pWB1L.js,01LHJt5PiyL.js,11B9yJN+bnL.js,21TkG9gShCL.js,0193uyIciNL.js,41D4kRuiy9L.js,31ad06VRAqL.js,11e9-8uUHQL.js,01s9HEfbt3L.js,11iHZuQapKL.js,015TRQC5i+L.js,01JzE3-DfLL.js,61iXRFOTloL.js,01I+ls4AqQL.js_.js?AUIClients/HardlinesDetailPageMetaAssetFixed#desktop.de.172469-T1.155915-T1.151985-T1.136850-T1.114779-T1.120067-T1.131900-T1.184660-C.162909-C.108310-T1');
    A.preload('https://images-eu.ssl-images-amazon.com/images/I/61PjJ8BEqZL._RC|21s3uGMg2HL.css,11UGK4+GCNL.css,21GzlFOlcvL.css,01N8OOpUZPL.css,11xRy3bSkOL.css,01QUs5FVXoL.css,016ZWeUMVEL.css,41vOQb1k0LL.css,01GT2VH57dL.css,01xHpyZh3cL.css,01rgQ3jqo7L.css,217iPYr7ivL.css,31e6R41SWLL.css,11X8K4AolpL.css,21PjfsP9YvL.css,21P0GvY6M5L.css,31+23kj581L.css_.css?AUIClients/HardlinesDetailPageMetaAssetFixed#desktop.de.179455-T1.135295-T1.136850-T1.172402-T1.131900-T1.94145-T1.108310-T1');
    A.preload('https://images-eu.ssl-images-amazon.com/images/I/21e71NrLt3L._RC|11Ze1YhMgJL.js,21Wa0ZZVAmL.js,21DhhQMus3L.js,51CysS8km3L.js,0185ITV0M6L.js,41GKHkSvCpL.js,01Gx8DhrplL.js,011qZnP-NfL.js,81PLIDzaAXL.js,41UXUgXh7tL.js,11nOzlnr6+L.js,31bQ6uPDcgL.js,312xLUEw6sL.js,31UjTApGOPL.js,31Ac-cQ+ZWL.js,21NDIsf0a1L.js,11WBo+4152L.js,11MQqFPEK+L.js,01jqyAujTwL.js,31+0pACITzL.js,61e7xszHEhL.js,11jf5oS-4FL.js,01RQtSMdG+L.js,01OtvpwikQL.js,21lFKGGVoFL.js,51PoAUrfVvL.js,21Ey4WmbBgL.js,41KQdFQbaLL.js,01qXU4-2A0L.js,31x4J+UDzzL.js,01lcH4zcTaL.js,01qPwv8D5hL.js,210mdW2-ZEL.js,21mymEONFtL.js,61+TkNaM7yL.js,515EXqsrGfL.js,21OJDARBhQL.js,41s+OBPxTPL.js,01IWUb29Q4L.js,01y-5aCXJyL.js,01rg6Ce9FhL.js,016QFWAAdML.js,41dzl0sSZuL.js,31Wep-ax8qL.js,11div+n5b+L.js,51ldtX6xp6L.js,21w43LSQ1-L.js,01t+VeQ6oSL.js_.js?AUIClients/HardlinesDetailPageMetaAssetVariable_TURBO_DESKTOP#desktop.language-de.de.164772-T1.141052-T1.159929-T1.167162-T1.111960-T1.146883-T1.173943-T1.103061-T1.153197-T1.131900-T1.184660-C.162909-C.179985-T1.87784-T1.107686-T1.143147-T1.147957-T1.154031-T1.171818-T1');
    A.preload('https://images-eu.ssl-images-amazon.com/images/I/21c4cPN57WL._RC|31BMnmV4vQL.css,01ekIXTj5kL.css,21rTx+UpnSL.css,01TCV-xmeZL.css,01CCLEN08lL.css,11-NICrYbjL.css,4140ENzg0ZL.css,01FlII1u-ZL.css,21kmtf4iiPL.css,21thLxrpr2L.css,31MkQHV3gaL.css,314gb2LkLML.css,319AZbleERL.css,014Z+MbaRaL.css,01RRH0yFa4L.css,01bkkYjxP7L.css,31X-Ol7PuGL.css,01f31VNCowL.css,01NW8VTUeVL.css,019M+d36JfL.css,01JOvs9kD8L.css,21m-8SmjJSL.css,31Fo-RK+JML.css,01QwYm0bA4L.css,11Z7S+lK47L.css,21fmybezPeL.css,01kwuiPOKIL.css,41zdtmMdfyL.css,01kymrLkG9L.css,11HpMnwXTxL.css,01TZ9fpDSSL.css,11ikU6MX1JL.css,01vF6gFybxL.css,01AVrRnt6XL.css_.css?AUIClients/HardlinesDetailPageMetaAssetVariable_TURBO_DESKTOP#desktop.de.not-trident.141052-T1.122952-T1.159929-T1.113788-C.114039-C.103061-T1.174137-T1');
    A.preload('https://images-eu.ssl-images-amazon.com/images/I/11aieEaBSpL._RC|21e71NrLt3L.js,11Ze1YhMgJL.js,21Wa0ZZVAmL.js,21DhhQMus3L.js,31gnJjWvxPL.js,51CysS8km3L.js,21u1PnPEsML.js,51ZMNp3DMIL.js,317N9f2eGzL.js,01AdYLY9rHL.js,01Gx8DhrplL.js,011qZnP-NfL.js,11ZdiaYG8gL.js,81PLIDzaAXL.js,0185ITV0M6L.js,41GKHkSvCpL.js,31UjTApGOPL.js,01X5C8pWB1L.js,01LHJt5PiyL.js,11B9yJN+bnL.js,31Ac-cQ+ZWL.js,21TkG9gShCL.js,01HmcbFsnFL.js,01JzE3-DfLL.js,31sG+M5QN5L.js,11WBo+4152L.js,11MQqFPEK+L.js,01I+ls4AqQL.js,01jqyAujTwL.js,31+0pACITzL.js,01OrQ5AXqsL.js,11gAPPElxuL.js,01OtvpwikQL.js,21lFKGGVoFL.js,01qXU4-2A0L.js,01S8y9NkxoL.js,01ZF+ovNflL.js,31RMOYNJSHL.js,01a6eHQ202L.js,01Z-Ip0c4YL.js,01qPwv8D5hL.js,210mdW2-ZEL.js,21mymEONFtL.js,61+TkNaM7yL.js,515EXqsrGfL.js,21OJDARBhQL.js,41s+OBPxTPL.js,01IWUb29Q4L.js,01y-5aCXJyL.js,016QFWAAdML.js,01rg6Ce9FhL.js,01bFPt5JahL.js,31Wep-ax8qL.js,51ldtX6xp6L.js,21w43LSQ1-L.js,01t+VeQ6oSL.js_.js?AUIClients/SoftlinesDetailPageMetaAsset_TURBO_DESKTOP#desktop.language-de.de.164772-T1.141052-T1.167162-T1.111960-T1.146883-T1.173943-T1.151985-T1.136850-T1.103061-T1.131900-T1.184660-C.162909-C.179985-T1.87784-T1.143147-T1.147957-T1.154031-T1.171818-T1');
    A.preload('https://images-eu.ssl-images-amazon.com/images/I/61QKRl7ow7L._RC|21c4cPN57WL.css,31BMnmV4vQL.css,01ekIXTj5kL.css,11UGK4+GCNL.css,21rTx+UpnSL.css,01N8OOpUZPL.css,41KsIXt8HtL.css,21GzlFOlcvL.css,11-NICrYbjL.css,016ZWeUMVEL.css,01TCV-xmeZL.css,01CCLEN08lL.css,31MkQHV3gaL.css,01GT2VH57dL.css,314gb2LkLML.css,01xHpyZh3cL.css,01QLwk8mu6L.css,014Z+MbaRaL.css,01RRH0yFa4L.css,01bkkYjxP7L.css,018mGORJ7tL.css,01NW8VTUeVL.css,019M+d36JfL.css,01JOvs9kD8L.css,01QwYm0bA4L.css,01MLzcotflL.css,01MsEDf87nL.css,21fmybezPeL.css,01kwuiPOKIL.css,41zdtmMdfyL.css,01kymrLkG9L.css,01vF6gFybxL.css,01AVrRnt6XL.css_.css?AUIClients/SoftlinesDetailPageMetaAsset_TURBO_DESKTOP#desktop.de.141052-T1.113788-C.114039-C.135295-T1.136850-T1.103061-T1.174137-T1.172402-T1.131900-T1.94145-T1');
    A.preload('https://images-eu.ssl-images-amazon.com/images/I/21Wa0ZZVAmL._RC|21DhhQMus3L.js,31gnJjWvxPL.js,51CysS8km3L.js,01bNPgr1YfL.js,219rMKdyN-L.js,316lu5vL96L.js,11ZdiaYG8gL.js,81PLIDzaAXL.js,0185ITV0M6L.js,41GKHkSvCpL.js,31UjTApGOPL.js,01X5C8pWB1L.js,01LHJt5PiyL.js,11B9yJN+bnL.js,31Ac-cQ+ZWL.js,21TkG9gShCL.js,01JzE3-DfLL.js,11MQqFPEK+L.js,01jqyAujTwL.js,31+0pACITzL.js,01OtvpwikQL.js,21lFKGGVoFL.js,11nOzlnr6+L.js,31bQ6uPDcgL.js,312xLUEw6sL.js,11e9-8uUHQL.js,11iHZuQapKL.js,01qXU4-2A0L.js,21e71NrLt3L.js,11Ze1YhMgJL.js,01a6eHQ202L.js,01qPwv8D5hL.js,210mdW2-ZEL.js,21mymEONFtL.js,61+TkNaM7yL.js,515EXqsrGfL.js,21OJDARBhQL.js,41s+OBPxTPL.js,01IWUb29Q4L.js,01rg6Ce9FhL.js,016QFWAAdML.js,31Wep-ax8qL.js,51ldtX6xp6L.js,21w43LSQ1-L.js,01t+VeQ6oSL.js_.js?AUIClients/MediaDetailPageMetaAsset_TURBO_DESKTOP#desktop.language-de.de.164772-T1.141052-T1.167162-T1.146883-T1.173943-T1.151985-T1.136850-T1.103061-T1.153197-T1.131900-T1.184660-C.162909-C.179985-T1.87784-T1.143147-T1.147957-T1.154031-T1.171818-T1');
    A.preload('https://images-eu.ssl-images-amazon.com/images/I/61Cab217xZL._RC|31BMnmV4vQL.css,01ekIXTj5kL.css,11UGK4+GCNL.css,21rTx+UpnSL.css,21LLdt69ldL.css,21jNhNxHFBL.css,016ZWeUMVEL.css,01TCV-xmeZL.css,01CCLEN08lL.css,31MkQHV3gaL.css,01GT2VH57dL.css,314gb2LkLML.css,01xHpyZh3cL.css,01RRH0yFa4L.css,01bkkYjxP7L.css,01NW8VTUeVL.css,019M+d36JfL.css,01JOvs9kD8L.css,01FlII1u-ZL.css,21kmtf4iiPL.css,21thLxrpr2L.css,31e6R41SWLL.css,21PjfsP9YvL.css,01QwYm0bA4L.css,21c4cPN57WL.css,01MsEDf87nL.css,21fmybezPeL.css,01kwuiPOKIL.css,41zdtmMdfyL.css,01kymrLkG9L.css,01vF6gFybxL.css,01AVrRnt6XL.css_.css?AUIClients/MediaDetailPageMetaAsset_TURBO_DESKTOP#desktop.de.141052-T1.122952-T1.113788-C.114039-C.135295-T1.136850-T1.103061-T1.174137-T1.131900-T1.94145-T1');
  }
});
</script>
















<script type="text/javascript">

function prefetchTYPAssets() {
    var imageAssets = new Array();
    var jsCssAssets = new Array();
      imageAssets.push("https://images-eu.ssl-images-amazon.com/images/G/03/x-locale/common/buy-buttons/review-1-click-order._CB192558581_.gif");
      imageAssets.push("https://images-eu.ssl-images-amazon.com/images/G/03/x-locale/common/buttons/continue-shopping._CB192558364_.gif");
      imageAssets.push("https://images-eu.ssl-images-amazon.com/images/G/03/x-locale/common/buy-buttons/thank-you-elbow._CB192558586_.gif");
      imageAssets.push("https://images-eu.ssl-images-amazon.com/images/G/03/x-locale/communities/social/snwicons_v2._CB402380168_.png");
      imageAssets.push("https://images-eu.ssl-images-amazon.com/images/G/03/checkout/assets/carrot._CB192188498_.gif");
      imageAssets.push("https://images-eu.ssl-images-amazon.com/images/G/03/checkout/thank-you-page/assets/yellow-rounded-corner-sprite._CB192563625_.gif");
      imageAssets.push("https://images-eu.ssl-images-amazon.com/images/G/03/checkout/thank-you-page/assets/white-rounded-corner-sprite._CB212531206_.gif");
      imageAssets.push("https://images-eu.ssl-images-amazon.com/images/G/03/gno/sprites/nav-sprite-global_bluebeacon-V3-1x_optimized._CB516556968_.png");
      imageAssets.push("https://images-eu.ssl-images-amazon.com/images/G/03/x-locale/common/transparent-pixel._CB386942701_.gif");

    // pre-fetching image assets
    for (var i=0; i<imageAssets.length; i++) {
       new Image().src = imageAssets[i];
    }
    // pre-fetching css and js assets based on different browser types
    var isIE = /*@cc_on!@*/0;
    var isFireFox = /Firefox/.test(navigator.userAgent);
    if (isIE) {
      for (var i=0; i<jsCssAssets.length; i++) {
        new Image().src = jsCssAssets[i];
      }
    }
    else if (isFireFox) {
      for (var i=0; i<jsCssAssets.length; i++) {
        var o =  document.createElement("object");
        o.data = jsCssAssets[i];
        o.width = o.height = 0;
        document.body.appendChild(o);
      }
    }
}

    var onload = function () {
        setTimeout(prefetchTYPAssets, 2000);
    };
    if (window.addEventListener) {
        window.addEventListener("load", onload);
    } else if (window.attachEvent) { /* for <= IE 8 */
        window.attachEvent("onload", onload);
    }
</script>

<input type="hidden" name="1click-tsdelta" id="1click-tsdelta">
<script type="text/javascript">
var ocInitTimestamp = 1546375085;
</script>







    

    










<script type="text/javascript">


if (!window.$SearchJS && window.$Nav) {
  window.$SearchJS = $Nav.make('sx');
}
if (window.$SearchJS) {


}


(function() {
  var precacheMaterials = ["https://images-eu.ssl-images-amazon.com/images/G/03/nav2/images/gui/searchSprite._CB272921379_.png"];
      if (window.amznJQ) {
        amznJQ.addPL(precacheMaterials);
      } else if (window.P) {
        P.when('A').execute(function(A){
          A.preload(precacheMaterials);
        });
      }
})();


</script>













            
            
      








<!--&&&Portal&Delimiter&&&--><!-- sp:end-feature:host-atf -->
<!-- sp:feature:nav-btf -->
<!-- btf pilu -->







<style>
  #nav-prime-tooltip{
    padding: 0 20px 2px 20px;
    background-color: white;
    font-family: arial,sans-serif;
  }
  .nav-npt-text-title{
    font-family: arial,sans-serif;
    font-size: 18px;
    font-weight: bold;
    line-height: 21px;
    color: #E47923;
  }
  .nav-npt-text-detail, a.nav-npt-a{
    font-family: arial,sans-serif;
    font-size: 12px;
    line-height: 14px;
    color: #333333;
    margin: 2px 0px;
  }
  a.nav-npt-a {
    text-decoration: underline;
  }
</style>


<div  style="display: none">
  <div id="nav-prime-tooltip">
    <div class="nav-npt-text-title"> Entdecken Sie jetzt alle Amazon Prime-Vorteile </div>
    <div class="nav-npt-text-detail"> Prime-Mitglieder genießen Zugang zu schnellem und kostenlosem Versand, tausenden Filmen und Serienepisoden mit Prime Video und vielen weiteren exklusiven Vorteilen.
 </div>
    <div class="nav-npt-text-detail">
      &gt;
      <a class="nav-npt-a" href="/prime/ref=nav_tooltip_redirect">Jetzt entdecken</a>
    </div>
  </div>
</div>










<style type="text/css">



#csr-hcb-wrapper {
  display: none;
}

.bia-item .bia-action-button {
  display: inline-block;
  height: 22px;
  margin-top: 3px;
  padding: 0px;
  overflow: hidden;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  color: #111;
  font-family: Arial,sans-serif;
  font-size: 11px;
  font-style: normal;
  font-weight: normal;
  line-height: 19px;
  cursor: pointer;
  outline: 0;
  border: 1px solid;
  -webkit-border-radius: 3px 3px 3px 3px;
  -moz-border-radius: 3px 3px 3px 3px;
  border-radius: 3px 3px 3px 3px;
  border-radius: 0\\9;
  border-color: #bcc1c8 #bababa #adb2bb;
  background: #eff0f3;
  background: -moz-linear-gradient(top, #f7f8fa, #e7e9ec);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #f7f8fa), color-stop(100%, #e7e9ec));
  background: -webkit-linear-gradient(top, #f7f8fa, #e7e9ec);
  background: -o-linear-gradient(top, #f7f8fa, #e7e9ec);
  background: -ms-linear-gradient(top, #f7f8fa, #e7e9ec);
  background: linear-gradient(top, #f7f8fa, #e7e9ec);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f7f8fa', endColorstr='#e7e9ec',GradientType=0);
  *zoom: 1;
  -webkit-box-shadow: inset 0 1px 0 0 #fff;
  -moz-box-shadow: inset 0 1px 0 0 #fff;
  box-shadow: inset 0 1px 0 0 #fff;
  box-sizing: border-box;
}

/*related to defect found in YSH page in www.amazon.fr
  font family was overriden causing button overflow on
  that particular page.
  Related SIM: https://issues.amazon.com/issues/P13N-CONSUMABLES-3104
*/
#bia-hcb-widget .a-button-text {
    font-family: Arial,sans-serif !important;
}

/*This class was added to remove star ratings from
   Shared Component's templates. Star ratings are
   currently not configurable. This will work as an
   immediate solution.
   : Work with shared components to make star
   ratings configurable in their Shared View Templates
*/
#bia_content .a-icon-row {
    display: none;
}

#bia-hcb-widget .a-icon-row {
      display: none;
}

#bia_content {
    width: 266px;
}

.nav-flyout-sidePanel {
    width: 266px !important;
}
.aui-atc-button {
    margin-top: 3px;
    overflow: hidden;
    color: #111;
    font-family: Arial,sans-serif;
    font-size: 11px;
    font-style: normal;
    font-weight: normal;
}
.bia-item .bia-action-button:hover {
  border-color: #aeb4bd #adadad #9fa5af;
  background: #e0e3e8;
  background: -moz-linear-gradient(top, #e7eaf0, #d9dce1);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #e7eaf0), color-stop(100%, #d9dce1));
  background: -webkit-linear-gradient(top, #e7eaf0, #d9dce1);
  background: -o-linear-gradient(top, #e7eaf0, #d9dce1);
  background: -ms-linear-gradient(top, #e7eaf0, #d9dce1);
  background: linear-gradient(top, #e7eaf0, #d9dce1);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e7eaf0', endColorstr='#d9dce1',GradientType=0);
  *zoom: 1;
  -webkit-box-shadow: 0 1px 3px rgba(255, 255, 255, 0.6) inset;
  -moz-box-shadow: 0 1px 3px rgba(255, 255, 255, 0.6) inset;
  box-shadow: 0 1px 3px rgba(255, 255, 255, 0.6) inset;
}

.bia-item .bia-action-button:active {
  background-color: #dcdfe3;
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2) inset;
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2) inset;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2) inset;
}

.bia-item .bia-action-button-disabled {
  background: #f7f8fa;
  color: #b7b7b7;
  border-color: #e0e0e0;
  box-shadow: none;
  cursor: default;
}

.bia-item .bia-action-button-disabled:hover {
  background: #f7f8fa;
  color: #b7b7b7;
  border-color: #e0e0e0;
  box-shadow: none;
  cursor: default;
}

.bia-action-button-inner {
  border-bottom-color: #111111;
  border-bottom-style: none;
  border-bottom-width: 0px;
  border-image-outset: 0px;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-width: 1;
  border-left-color: #111111;
  border-left-style: none;
  border-left-width: 0px;
  border-right-color: #111111;
  border-right-style: none;
  border-right-width: 0px;
  border-top-color: #111111;
  border-top-style: none;
  border-top-width: 0px;
  box-sizing: border-box;
  display: block;
  height: 20px;
  line-height: 19px;
  overflow: hidden;
  position: relative;
  padding: 0;
  vertical-align: baseline;
}

.bia-action-inner {
  border: 0;
  display: inline;
  font-size: 11px;
  height: auto;
  line-height: 19px;
  padding: 0px 4px 0px 4px;
  text-align: center;
  width: auto;
  white-space: nowrap;
}

.csr-content {
  font-family: Arial, Verdana, Helvetica, sans-serif;
  width: 220px;
  line-height: 19px;
}

.bia-header {
  font-size: 16px;
  color: #E47911;
  padding-bottom: 10px;
}

.bia-header-widget {
  white-space: nowrap;
  overflow: hidden;
}

.bia-space-right {
  padding-right: 18px;
  white-space: normal;
  float: left;
}

.b2b-see-more-link a {
  display: inline;
  float: left;
  margin-top: 3px;
  margin-left: 3px;
}

.hcb-see-more-link a {
  color: #333;
  font-size: 13px;
  text-decoration: none;
  font-family: Arial, Verdana, Helvetica, sans-serif;
}

.bia-hcb-body {
  overflow: hidden;
}

.bia-item {
  width: 220px;
  display: inline-block;
  margin-bottom: 20px;
}

.b2b-bia-item {
  width: 299px;
  display: inline-block;
  margin-right: 18px;
  margin-top: 18px;
  vertical-align: top;
}

.bia-item-image {
  float: left;
  margin-right: 15px;
  width: 75px;
  height: 75px;
}

.b2b-bia-item-image {
  float: left;
  width: 90px;
  height: 90px;
  text-align: center;
}

.bia-image {
  max-height: 75px;
  max-width: 75px;
  border: 0;
}

.b2b-bia-image {
  max-height: 90px;
  max-width: 90px;
  border: 0;
}

.bia-item-data {
  float: left;
  width: 130px;
}

.b2b-bia-item-data {
  float: left;
  margin-left: 22px;
  width: 187px;
}

.bia-title {
  line-height: 19px;
  font-size: 13px;
  max-height: 60px;
  overflow: hidden;
}

.bia-link:link {
  text-decoration: none;
  font-family: Arial, Verdana, Helvetica, sans-serif;
}

.bia-link:visited {
  text-decoration: none;
  color: #004B91;
}

.bia-price-nav {
  margin-top: -4px;
  color: #800;
  font-size: 12px;
  vertical-align: bottom;
}

.bia-price-yorr {
    margin-top: -8px;
    color: #800;
    font-size: 12px;
    vertical-align: bottom;
}

.bia-price {
  color: #800;
  font-size: 12px;
  vertical-align: bottom;
}

.b2b-bia-price {
  color: #800;
  font-size: 13px;
  vertical-align: bottom;
}

.bia-vpc-t1{
  color: #008a00;
  font-size: 12px;
  font-weight: bold;
}

.bia-vpc-t2{
  color: #008a00;
  font-size: 12px;
}

.bia-vpc-t3{
  font-size: 12px;
  line-height: 20px;
}

.bia-vpc-t3-badge{
  color: #ffffff;
  background-color: #e47911;
  font-weight: normal;

}

.bia-vpc-t3-badge::before{
  border-bottom: 10px solid #e47911;
}

.bia-vpc-t3-badge:after{
  border-top: 10px solid #e47911;
}

.bia-ppu {
  color: #800;
  font-size: 10px;
}

.bia-prime-badge {
  border: 0;
  vertical-align: middle;
}

.bia-cart-action {
  display: none;
}

.bia-cart-msg {
  display: block;
  font-family: Arial, Verdana, Helvetica, sans-serif;
  line-height: 19px;
}

.bia-cart-icon {
  background-image:
      url("https://images-eu.ssl-images-amazon.com/images/G/03/Recommendations/MissionExperience/BIA/bia-atc-confirm-icon._CB327024454_.png");
  display: inline-block;
  width: 14px;
  height: 13px;
  top: 3px;
  line-height: 19px;
  position: relative;
  vertical-align: top;
}

.bia-cart-success {
  color: #090!important;
  display: inline-block;
  margin: 0;
  font-size: 13px;
  font-style: normal;
  font-weight: bold;
  font-family: Arial, Verdana, Helvetica, sans-serif;
}

.bia-cart-title {
  margin-bottom: 3px;
}

.bia-cart-form {
  margin: 0px;
}

.b2b-bia-cart-form {
  margin: 3px;
}

.bia-inline-cart-form {
  margin: 0px;
}

.bia-cart-submit {
  cursor: inherit;
  left: 0;
  top: 0;
  line-height: 19px;
  height: 100%;
  width: 100%;
  padding: 1px 6px 1px 6px;
  position: absolute;
  opacity: 0.01;
  overflow: visible;
  filter: alpha(opacity=1);
  z-index: 20;
}

.bia-link-caret {
  color: #e47911;
}

</style>




<script type="text/javascript">
(function ($Nav) {
"use strict";

if (typeof $Nav === 'undefined' || $Nav === null || typeof $Nav.when !== 'function') {
    return;
}
$Nav.when('$', 'data', 'flyout.yourAccount', 'sidepanel.csYourAccount',
          'config')
    .run("BuyitAgain-YourAccount-SidePanel", 
    function ($, data, yaFlyout, csYourAccount, config) {
        if (config.disableBuyItAgain) {
          return;
        }
        var render = function (data) {
            if (data.status) {
                var widgetHtml = data.widgetBegin + 
                                 data.faceouts.join('') +
                                 data.widgetEnd;
                navbar.sidePanel({
                    flyoutName: 'yourAccount',
                    data: {html: widgetHtml}
                });
            }
        };

        var renderBuyItAgain = function (biaData) {
            if (csYourAccount) {
                csYourAccount.register(render, biaData);
            } else {
                render(biaData);
            }
        };

        yaFlyout.sidePanel.onData(function() {
            enableInlineAddToCart($); 
            enableImpressionLogging($);

            P.when('A','p13n-sc-static-list').execute(function(A, scList) {
                var navContainer = A.$("#bia-hcb-widget");
                var navList = navContainer.find('.p13n-sc-static-list');
                A.$(navList).bind('truncateList', function() {
                        scList(navList);
                });

                A.$(navList).trigger('truncateList');
            });

            if (window.P) {
                P.when('A', 'a-truncate').execute(function(A, truncate) {
                    var truncateElements = A.$('.a-truncate');
                    A.each(truncateElements, function(element) {
                        truncate.get(element).update();
                    });
                });
            }

        }); 
           
    yaFlyout.onRender(function() {
            $.ajax({
                url: '/gp/bia/external/bia-hcb-ajax-handler.html',
                data: 

   {"biaHcbRid":"S7Y7MCSM8BQQZXDKY4RQ"},
                dataType: 'json',
                timeout: 4*1000,
                success: renderBuyItAgain,
                error: function (jqXHR, textStatus, errorThrown) {
                }
            });
        });


    var updateNavCartQty = function(qty) {
        if (typeof window.navbar === 'object' && typeof window.navbar.setCartCount === 'function') {
            window.navbar.setCartCount(qty);
        }
    };

    var addToCart = function(params, callback) {
        $.ajax({
           url: '/gp/bia/external/bia-cart-ajax-handler.html',
           data: params,
           dataType: 'json', 
           timeout: 2000,
           success: function(response) { callback(response); },
           error: function() { callback({ok:0}); }
        });
    };

    var enableInlineAddToCart = function ($) {
        if ($(".bia-inline-cart-form").length === 0) {
            return;
        }

        var inlineAddToCartHandler = function(e) {
            e.preventDefault();

            var $target = $(e.target);
            var $item = $target.parents(".bia-item");
            var $submit = $item.find(".bia-cart-submit");
            var params = $target.attr('data-order');

            $submit.attr("disabled", true);
            $item.find(".bia-action-button").addClass("bia-action-button-disabled");

            addToCart(params, 
                function(response) {
                    if(response && response.ok && response.ok === '1') {
                        $item.find(".bia-faceout").hide();
                        $item.find(".bia-cart-action").show();
                        updateNavCartQty(response.numActiveItemsInCart); 
                        //: add metric
                    } else {
                        $target.unbind("submit", inlineAddToCartHandler);
                        $submit.attr("disabled", false);
                        $submit.click();
                        //: add metric
                    }
                }
            );
        };

        $(".bia-inline-cart-form").bind("submit", inlineAddToCartHandler);
    };

    var enableImpressionLogging = function ($) {

        var registerToLog = function (p13nLogger, callOnVisible) {
            var featureEl = $("#bia-hcb-widget");
            callOnVisible.register(featureEl, function () {
                p13nLogger.logAction({
                                action: 'view', 
                                featureElement: featureEl, 
                                replicateAsinImpressions: true
                              });
            });
        };
        
        AmazonUIPageJS.when('p13n-sc-logger', 'p13n-sc-call-on-visible')
            .execute(function(p13nLogger, callOnVisible) {
                    registerToLog(p13nLogger, callOnVisible);});
    };

    });

})(window.$Nav);
</script>








<div style="display: none">
  <div id="nav-prime-menu" class="nav-empty nav-flyout-content nav-ajax-prime-menu">
    <div class="nav_dynamic"></div>
    <div class="nav-ajax-message"></div>
    <div class="nav-ajax-error-msg">
      <p class="nav_p nav-bold">Momentanes Problem beim Laden dieses Menüs.</p>
      <p class="nav_p"><a href="/gp/prime/ref=nav_prime_ajax_err" class="nav_a">Weitere Informationen über Amazon Prime.</a></p>
    </div>
  </div>
</div>


  

















































































































































































































































































































































































































































































































































































































































































































<script type="text/javascript">
  window.$Nav && $Nav.when("data").run(function(data) { data({"shopAllContent":{"template":{"name":"itemList","data":{"items":[{"text":"Prime Video","panelKey":"InstantVideoPanel"},{"text":"Amazon Music","panelKey":"Mp3Panel"},{"text":"Fußball Live","panelKey":"PoldiPanel"},{"text":"Amazon Appstore","panelKey":"AndroidPanel"},{"text":"Amazon Photos","panelKey":"CloudDrivePanel"},{"text":"Echo & Alexa","panelKey":"KindleAmazonEchoPanel"},{"text":"Fire TV","panelKey":"FireTvPanel"},{"text":"Fire-Tablets","panelKey":"KindleFireTabletPanel"},{"text":"Kindle eReader & Bücher","panelKey":"KindleReaderPanel"},{"badgeText":"Neu","text":"AmazonFresh","dividerBefore":"1","panelKey":"AmazonFreshPanel"},{"text":"Bücher & Audible","dividerBefore":"1","panelKey":"BooksPanel"},{"text":"Filme, Serien, Musik & Games","panelKey":"MusicGamesFilmTvPanel"},{"text":"Elektronik & Computer","panelKey":"ElectronicsComputersPanel"},{"text":"Haushalt, Garten, Baumarkt","panelKey":"HomeGardenToolsPanel"},{"text":"Beauty, Drogerie & Lebensmittel","panelKey":"FoodBeveragesHealthBeautyPanel"},{"text":"Spielzeug & Baby","panelKey":"BabyKidsToysPanel"},{"text":"Kleidung, Schuhe & Uhren","panelKey":"ApparelShoesWatchesPanel"},{"text":"Sport & Freizeit","panelKey":"SportsOutdoorsPanel"},{"text":"Auto, Motorrad & Gewerbe","panelKey":"AutoMotorcycleIndustrialPanel"},{"text":"Handmade & Amazon Launchpad","panelKey":"HandmadeLaunchpadPanel"},{"text":"Amazon Storefronts","panelKey":"StorefrontsPanel"},{"text":"Alle Kategorien","decorate":"carat","url":"/gp/site-directory/ref=nav_shopall_fullstore","dividerBefore":"1"}]}}},"PoldiPanel":{"promoID":"nav-sa-poldi","template":{"name":"itemList","data":{"text":"Fußball Live","items":[{"text":"Fußball live streamen","items":[{"subtext":"Bundesliga und DFB-Pokal hören\\n","text":"Fußball live bei Amazon Music\\n","url":"/gp/dmusic/promotions/LiveSports/ref=nav_shopall_poldi_program"},{"subtext":"Wettbewerbe, Konferenz, Podcasts und mehr hören\\n","text":"Alle Spiele","url":"/fussballwebplayer/ref=nav_shopall_poldi_player"},{"subtext":"Musik und Fußball einfach überall genießen\\r\\n","text":"Amazon Music Apps\\r\\n","url":"/amazon-music-app/b/ref=nav_shopall_poldi_apps?ie=UTF8&node=1949586031"}]}]}}},"KindleReaderPanel":{"promoID":"nav-sa-kindle-reader","template":{"name":"itemList","data":{"text":"Kindle eReader & Bücher","items":[{"text":"Kindle eReader","items":[{"subtext":"100% Buch. Ohne Ablenkungen. Ohne Spiegeleffekte.","text":"Kindle","url":"/dp/B0186FESVC/ref=nav_shopall_k_keanab"},{"subtext":"Unser meistverkaufter Kindle - jetzt noch besser","text":"Der neue Kindle Paperwhite","url":"/dp/B07747FR44/ref=nav_shopall_k_k_ms"},{"subtext":"Großes 7 Zoll-Display. Wasserfest. Audible.","text":"Kindle Oasis","url":"/dp/B06XDK92KS/ref=nav_shopall_k_dpko"},{"subtext":"Hüllen, Ladegeräte, Sleeves und mehr","text":"Zubehör","url":"/Zubehoer-Amazon-Geraete-Kindle/b/ref=nav_shopall_k_kacceseink5?ie=UTF8&node=530884031"}]},{"text":"Kindle-Shop","dividerBefore":"1","items":[{"text":"Kindle eBooks","url":"/ebooks-kindle-buecher/b/ref=nav_shopall_kbo4?ie=UTF8&node=530886031"},{"text":"Englische eBooks","url":"/fremdsprachige-ebooks-kindle-buecher/b/ref=nav_shopall_kfb4?ie=UTF8&node=567135031"},{"subtext":"Grenzenloses Hör- & Lesevergnügen","text":"Kindle Unlimited","url":"/gp/kindle/ku/sign-up/ui/rw/about/ref=nav_shopall_kds"},{"text":"Prime Reading","url":"/kindle-dbs/hz/bookshelf/prime/ref=nav_shopall_ods_eink_con_pr"},{"text":"Newsstand","url":"/zeitschriften-ebooks-kindle/b/ref=nav_shopall_k_news?ie=UTF8&node=530887031"}]},{"text":"Inhalte und Verwaltung","columnBreak":"1","items":[{"subtext":"Für PC, iPad, iPhone, Android und mehr","text":"Gratis Kindle Lese-Apps","url":"/gp/digital/fiona/kcp-landing-page/ref=nav_shopall_krdg"},{"subtext":"Kindle eBooks im Browser lesen","text":"Kindle Cloud Reader","url":"https://www.amazon.de:443/gp/redirect.html/ref=nav_shopall_kcr?location=https://lesen.amazon.de/&token=C9D67D90DB4DC93EBDCE5242DA6920A68E297DF7&source=standards","extra":"target=\\"_blank\\""},{"text":"Meine Inhalte und Geräte","url":"/gp/digital/fiona/manage/ref=nav_shopall_myk4"}]}]}}},"signinContent":{"html":"<div id='nav-signin-tooltip'><a href='/gp/navigation/redirector.html/ref=sign-in-redirect?ie=UTF8&amp;associationHandle=deflex&amp;currentPageURL=https%3A%2F%2Fwww.amazon.de%2Fgp%2Fyourstore%2Fhome%3Fie%3DUTF8%26ref_%3Dnav_custrec_signin&amp;pageType=&amp;switchAccount=&amp;yshURL=https%3A%2F%2Fwww.amazon.de%2Fgp%2Fyourstore%2Fhome%3Fie%3DUTF8%26ref_%3Dnav_custrec_signin' class='nav-action-button' data-nav-role='signin' data-nav-ref='nav_custrec_signin'><span class='nav-action-inner'>Anmelden</span></a><div class='nav-signin-tooltip-footer'>Neuer Kunde? <a href='https://www.amazon.de/ap/register?_encoding=UTF8&amp;openid.assoc_handle=deflex&amp;openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;openid.mode=checkid_setup&amp;openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&amp;openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&amp;openid.pape.max_auth_age=0&amp;openid.return_to=https%3A%2F%2Fwww.amazon.de%2Fgp%2Fyourstore%2Fhome%3Fie%3DUTF8%26ref_%3Dnav_custrec_newcust' class='nav-a'>Starten Sie hier.</a></div></div>"},"ElectronicsComputersPanel":{"promoID":"nav-sa-electronics-computers","template":{"name":"itemList","data":{"text":"Elektronik & Computer","items":[{"text":"Elektronik & Foto","items":[{"text":"Kamera & Foto","url":"/Kamera-Foto-Digitalkameras-Spiegelreflexkameras-Camcorder/b/ref=nav_shopall_p?ie=UTF8&node=571860"},{"text":"Smartphones & Zubehör","url":"/Handys-Smartphones-Handyvertr%C3%A4ge/b/ref=nav_shopall_wi?ie=UTF8&node=571954"},{"text":"TV, Fernseher & Heimkino","url":"/Heimkino-TV-Fernseher/b/ref=nav_shopall_av?ie=UTF8&node=761254"},{"text":"Audio & HiFi","url":"/Audio-Hifi/b/ref=nav_shopall_ah?ie=UTF8&node=1966060031"},{"text":"Musikinstrumente & DJ-Equipment","url":"/Musikinstrumente-DJ-Equipment/b/ref=nav_shopall_mi?ie=UTF8&node=340849031"},{"text":"Navigation","url":"/Navigationssystems-Car-HiFi-Autoradios/b/ref=nav_shopall_gps?ie=UTF8&node=236861011"},{"text":"Elektronik-Zubehör","url":"/Elektronik-Zubeh%C3%B6r/b/ref=nav_shopall_ele_acc?ie=UTF8&node=569866"},{"text":"Konsolen & Games-Zubehör","url":"/Zubeh%C3%B6r-Hardware-Games/b/ref=nav_shopall_gd?ie=UTF8&node=700032"},{"text":"Küchen- & Haushaltsgeräte","url":"/Elektrische-K%C3%BCchenger%C3%A4te/b/ref=nav_shopall_es?ie=UTF8&node=3169321"},{"text":"Elektro-Großgeräte\\n","url":"/Haushaltsger%C3%A4te-Hausger%C3%A4te/b/ref=nav_shopall_la?ie=UTF8&node=908823031"},{"text":"Alle Produkte","url":"/Elektronik-Foto/b/ref=nav_shopall_el?ie=UTF8&node=562066"},{"text":"Schnäppchen","url":"/bbp/ref=nav_shopall_bbp_bb_a77114_in_sd_w_na_na_de_de?_encoding=UTF8&category=%2Felectronics"}]},{"text":"Computer & Büro","columnBreak":"1","items":[{"text":"Laptops","url":"/NoteBooks/b/ref=nav_shopall_desk?ie=UTF8&node=427957031"},{"text":"Tablets","url":"/Tablet-PCs/b/ref=nav_shopall_tablets?ie=UTF8&node=429874031"},{"text":"Computer-Zubehör","url":"/Computerzubehoer-Maeuse-Netzwerk-Festplatten-Ssds-Speicherkarten-Notebook-Taschen-Tablet-Huellen-Kab/b/ref=nav_shopall_compz?ie=UTF8&node=514839031"},{"text":"PC-Komponenten","url":"/PC-Komponenten/b/ref=nav_shopall_compc?ie=UTF8&node=427956031"},{"text":"Software","url":"/Software/b/ref=nav_shopall_soft?ie=UTF8&node=301927"},{"text":"PC- & Video-Games","url":"/computer-video-spiele-games-konsolen/b/ref=nav_shopall_compg?ie=UTF8&node=300992"},{"text":"Drucker & Tintenpatronen","url":"/Tintenstrahldrucker-Laserdrucker/b/ref=nav_shopall_prin?ie=UTF8&node=427955031"},{"text":"Bürobedarf & Schreibwaren","url":"/B%C3%BCro-B%C3%BCromaterial-Schreibwaren-B%C3%BCrobedarf-B%C3%BCroartikel/b/ref=nav_shopall_op?ie=UTF8&node=192416031"}]}]}}},"ApparelShoesWatchesPanel":{"promoID":"nav-sa-apparel-shoes-watches","template":{"name":"itemList","data":{"text":"Kleidung, Schuhe & Uhren","items":[{"text":"Bekleidung & Schuhe","items":[{"text":"Damen","url":"/Damen-Amazon-Fashion-Mode/b/ref=nav_shopall_sl_gender_wom?ie=UTF8&node=12419317031"},{"text":"Herren","url":"/Herren-Amazon-Fashion-Mode/b/ref=nav_shopall_sl_gender_men?ie=UTF8&node=12419318031"},{"text":"Mädchen","url":"/M%C3%83%C2%A4dchen-Amazon-Fashion-Mode/b/ref=nav_shopall_sl_gender_girls?ie=UTF8&node=12419319031"},{"text":"Jungen","url":"/Jungen-Amazon-Fashion-Mode/b/ref=nav_shopall_sl_gender_boys?ie=UTF8&node=12419320031"},{"text":"Baby","url":"/Babys-Amazon-Fashion-Mode/b/ref=nav_shopall_sl_gender_baby?ie=UTF8&node=12419321031"}]},{"text":"Accessoires","dividerBefore":"1","items":[{"text":"Schmuck","url":"/Schmuck-Charms-Ohrringe-Ketten/b/ref=nav_shopall_sl_de_jewelry?ie=UTF8&node=327472011"},{"text":"Uhren","url":"/Uhren/b/ref=nav_shopall_sl_de_watches?ie=UTF8&node=193707031"},{"text":"Handtaschen","url":"/Taschen-Damen-Herren/b/ref=nav_shopall_sl_de_hbags?ie=UTF8&node=1760236031"},{"text":"Koffer, Rucksäcke & Taschen","url":"/koffer-rucks%C3%A4cke-taschen/b/ref=nav_shopall_sl_de_luggage?ie=UTF8&node=2454118031"},{"text":"Sonnenbrillen","url":"/Sonnenbrillen-Shop/b/ref=nav_shopall_sl_de_sunglasses?ie=UTF8&node=6080655031"}]},{"dividerBefore":"1","items":[{"text":"Sale %","url":"/fashion-sale/b/ref=nav_shopall_sl_de_sale?ie=UTF8&node=245404031"},{"text":"Schnäppchen","url":"/bbp/ref=nav_shopall_bbp_bb_757550_in_sd_w_na_na_de_de"}]}]}}},"FireTvPanel":{"promoID":"nav-sa-fire-tv","template":{"name":"itemList","data":{"text":"Fire TV","items":[{"text":"Video- und Spielespaß","items":[{"subtext":"Der leistungsstärkste 4K Streaming-Stick mit der neuen Alexa Sprachsteuerung\\n","text":"Wir präsentieren: Fire TV Stick 4K\\n","url":"/dp/B079QHMFWC/ref=nav_shopall_k_smp_mn"},{"subtext":"Unser Bestseller, Fire TV Stick","text":"Fire TV Stick","url":"/dp/B01ETRIS3K/ref=nav_shopall_k_fire_tv_tank"},{"subtext":"Adapter, Schutzpläne &amp; mehr ","text":"Zubehör ","url":"/Zubehoer-Amazon-Geraete-Kindle/b/ref=nav_shopall_k_fire_acc?ie=UTF8&node=530884031"}]},{"text":"Filme, Serien und mehr","columnBreak":"1","items":[{"text":"Prime Video - Enthalten in Prime","url":"/Prime-Video/b/ref=nav_shopall_k_fire_tv_piv?ie=UTF8&node=3279204031"},{"text":"Prime Video - Alle Videos","url":"/Amazon-Video/b/ref=nav_shopall_k_fire_tv_aiv?ie=UTF8&node=3010075031"},{"text":"Apps & Spiele für Fire TV","url":"/b/ref=nav_shopall_k_fire_tv_apps_games?ie=UTF8&node=5862541031"},{"text":"Amazon Photos","url":"/clouddrive/ref=nav_shopall_k_fire_tv_cd"}]}]}}},"Mp3Panel":{"promoID":"nav-sa-mp3","template":{"name":"itemList","data":{"text":"Amazon Music","items":[{"text":"Musik streamen","items":[{"subtext":"50 Millionen Songs und Fußball streamen","text":"Amazon Music Unlimited","url":"/gp/dmusic/promotions/AmazonMusicUnlimited/ref=nav_shopall_dm_amu"},{"subtext":"2 Millionen Songs und Bundesliga streamen","text":"Prime Music","url":"/b/ref=nav_shopall_dm_prime?ie=UTF8&node=5686557031"},{"subtext":"music.amazon.com","text":"Meine Musikbibliothek","url":"/gp/dmusic/mp3/player/ref=nav_shopall_dm_library","dividerBefore":"1","extra":"target=\\"_blank\\""},{"text":"Amazon Music Apps","url":"/amazon-music-app/b/ref=nav_shopall_dm_apps?ie=UTF8&node=1949586031"},{"text":"Amazon Music und Alexa","url":"/b/ref=nav_shopall_dm_veronica?ie=UTF8&node=12807138031"},{"text":"Fußball live bei Amazon Music\\n","url":"/gp/dmusic/promotions/LiveSports/ref=nav_shopall_dm_poldi"}]},{"text":"Musik kaufen","columnBreak":"1","items":[{"subtext":"Musik zum Anfassen","text":"CDs & Vinyl","url":"/b/ref=nav_shopall_dm_cds_vinyl?ie=UTF8&node=255882"},{"subtext":"Songs und Alben zum Herunterladen","text":"Musik-Downloads","url":"/MP3-Musik-Downloads/b/ref=nav_shopall_dm_store?ie=UTF8&node=77195031"}]}]}}},"MusicGamesFilmTvPanel":{"promoID":"nav-sa-music-games-film-tv","template":{"name":"itemList","data":{"text":"Filme, Serien, Musik & Games","items":[{"text":"Filme, Serien, Musik & Games","items":[{"text":"Prime Video - Alle Videos","url":"/Amazon-Video/b/ref=nav_shopall_aiv?ie=UTF8&node=3010075031"},{"text":"Alle DVDs & Blu-rays","url":"/dvd-blu-ray-filme-3D-vhs-video/b/ref=nav_shopall_dvd_blu?ie=UTF8&node=284266"},{"text":"Serien auf DVD & Blu-ray","url":"/TV-Serien-Produktionen-DVD-Blu-ray/b/ref=nav_shopall_tv_shows?ie=UTF8&node=508214"},{"text":"Blu-ray-Shop","url":"/Blu-ray-Filme-Neuheiten-Angebote/b/ref=nav_shopall_blu_ray?ie=UTF8&node=514450"},{"text":"Musik-CDs & Vinyl","url":"/b/ref=nav_shopall_mu?ie=UTF8&node=255882","dividerBefore":"1"},{"text":"Klassische Musik","url":"/Klassik-Klassiche-Musik-CDs/b/ref=nav_shopall_cm?ie=UTF8&node=255966"},{"text":"Musik-Downloads","url":"/MP3-Musik-Downloads/b/ref=nav_shopall_dm?ie=UTF8&node=77195031"},{"text":"Musikinstrumente & DJ-Equipment","url":"/Musikinstrumente-DJ-Equipment/b/ref=nav_shopall_mi?ie=UTF8&node=340849031"},{"text":"Games","url":"/computer-video-spiele-games-konsolen/b/ref=nav_shopall_cvg?ie=UTF8&node=300992","dividerBefore":"1"},{}]}]}}},"CloudDrivePanel":{"promoID":"nav-sa-cloud-drive","template":{"name":"itemList","data":{"text":"Amazon Photos","items":[{"text":"Amazon Photos","items":[{"subtext":"Unbegrenzter Fotospeicherplatz mit Prime","text":"Amazon Photos","url":"/clouddrive/primephotos/ref=nav_shopall_acd_prime"},{"subtext":"Sicherer Speicher für Dateien, Videos und mehr","text":"Amazon Drive","url":"/clouddrive/home/ref=nav_shopall_acd_about"},{"subtext":"Laden Sie die App für Mobilgeräte und Desktops herunter, um von überall auf Ihre Inhalte zuzugreifen","text":"Laden Sie die kostenlosen Apps herunter","url":"/clouddrive/home/ref=nav_shopall_acd_freeapps#download-section"},{"subtext":"Ihr Konto verwalten","text":"Anmelden","url":"/clouddrive/ref=nav_shopall_acd_urc?_encoding=UTF8&sf=1","extra":"target=\\"_blank\\""}]}]}}},"KindleFireTabletPanel":{"promoID":"nav-sa-kindle-fire-tablet","template":{"name":"itemList","data":{"text":"Fire-Tablets","items":[{"text":"Fire-Tablets","items":[{"subtext":"Unser meistverkauftes Tablet - jetzt noch besser","text":"Fire 7\\n","url":"/dp/B01J90P010/ref=nav_shopall_k_aus"},{"subtext":"Bis zu 10 Stunden Akku-Laufzeit. Brillante Farbdarstellung. Starke Leistung","text":"Das neue Fire HD 8","url":"/dp/B0794TLHP4/ref=nav_shopall_k_kar"},{"subtext":"1080p Full HD. 32 GB Speicherplatz. Mit Alexa Hands-free.","text":"Fire HD 10","url":"/dp/B01M3015CT/ref=nav_shopall_k_hd10_sue"},{"subtext":"Sollte es kaputt gehen, ersetzen wir es. Versprochen.","text":"Fire 7 Kids Edition","url":"/dp/B01J90R8D8/ref=nav_shopall_k_aket"},{"subtext":"Bis zu 10 Stunden Akku-Laufzeit. 32 GB Speicherplatz. 8-Zoll-HD-Bildschirm.","text":"Das neue Fire HD 8 Kids Edition","url":"/dp/B0794SNF6C/ref=nav_shopall_k_kket"},{"subtext":"Unser größtes und schnellstes Tablet für Kinder","text":"Das neue Fire HD 10 Kids Edition","url":"/dp/B079Z4NVTS/ref=nav_shopall_k_sket"},{"subtext":"Hüllen, Ladegeräte, Sleeves und mehr","text":"Zubehör","url":"/Zubehoer-Amazon-Geraete-Kindle/b/ref=nav_shopall_k_acc?ie=UTF8&node=530884031"}]},{"text":"Inhalte und Verwaltung","columnBreak":"1","items":[{"text":"Prime Video","url":"/Amazon-Video/b/ref=nav_shopall_k_aiv?ie=UTF8&node=3010075031"},{"text":"Apps & Spiele","url":"/Apps-Spiele-Fire-Tablet/b/ref=nav_shopall_k_apps?ie=UTF8&node=2656915031"},{"text":"Musik-Downloads","url":"/MP3-Musik-Downloads/b/ref=nav_shopall_k_mp3?ie=UTF8&node=77195031"},{"text":"Kindle eBooks","url":"/ebooks-kindle-buecher/b/ref=nav_shopall_k_books?ie=UTF8&node=530886031"},{"text":"Newsstand","url":"/zeitschriften-ebooks-kindle/b/ref=nav_shopall_k_news?ie=UTF8&node=530887031"},{"text":"Alle Hörbuch-Downloads","url":"/audible-h%C3%B6rbuch-downloads/b/ref=nav_shopall_k_aud?ie=UTF8&node=251105031"},{"text":"FreeTime Unlimited","url":"/Freetime-Unlimited-eBooks/b/ref=nav_shopall_k_ftu?ie=UTF8&node=7385957031"},{"text":"Meine Inhalte und Geräte","url":"/gp/digital/fiona/manage/ref=nav_shopall_k_myk"}]}]}}},"HandmadeLaunchpadPanel":{"promoID":"nav-sa-handmade-launchpad","template":{"name":"itemList","data":{"text":"Handmade & Amazon Launchpad","items":[{"text":"Handmade","items":[{"subtext":"Individuelle, handgefertigte Artikel","text":"Alle Handmade-Produkte","url":"/Handmade-Produkte/b/ref=nav_shopall_HM_Home?ie=UTF8&node=9699311031"},{"text":"Geschenke","url":"/b/ref=nav_shopall_HM_gifts?ie=UTF8&node=14133638031"},{"text":"Schmuck","url":"/Handgefertigter-Schmuck/b/ref=nav_shopall_HM_Jewelry?ie=UTF8&node=10733080031"},{"text":"Küche, Haushalt & Wohnen","url":"/Handgefertigte-Wohnaccessoires-Deko/b/ref=nav_shopall_HM_homekitchen?ie=UTF8&node=10733079031"},{"text":"Hochzeit","url":"/b/ref=nav_shopall_HM_wedding?ie=UTF8&node=14774986031"},{"text":"Bekleidung, Schuhe & Accessoires","url":"/Handgefertigte-Handtaschen-Accessoires/b/ref=nav_shopall_HM_accessories?ie=UTF8&node=10733075031"},{"text":"Schreibwaren & Partybedarf","url":"/Handgefertigte-Schreibwaren-Partybedarf/b/ref=nav_shopall_HM_stationery?ie=UTF8&node=10733081031"},{"text":"Baby","url":"/Handgefertigte-Babygeschenke/b/ref=nav_shopall_HM_baby?ie=UTF8&node=10733073031"},{"text":"Spielzeug & Spiele","url":"/Handgefertigtes-Spielzeug-Spiele/b/ref=nav_shopall_HM_toysgames?ie=UTF8&node=10733082031"},{"text":"Made in Italy","url":"/b/ref=nav_shopall_HM_mii?ie=UTF8&node=12440604031"}]},{"text":"Kontaktieren Sie uns","dividerBefore":"1","items":[{"text":"Sie erstellen Produkte in Handarbeit?","url":"https://www.amazon.de:443/gp/redirect.html/ref=nav_shopall_HM_handmadeapply?location=https://services.amazon.de/handmade.html&token=96D7FEFC78E84CC78EC038EF30FD423C0291099E&source=standards"}]},{"text":"Amazon Launchpad","columnBreak":"1","items":[{"subtext":"Entdecken Sie innovative und einzigartige Start-up-Produkte","text":"Alle Produkte aus Amazon Launchpad ","url":"/Amazon-Launchpad/b/ref=nav_shopall_launch_all?ie=UTF8&node=9418395031"},{"text":"Elektronik & Gadgets","url":"/Elektronik/b/ref=nav_shopall_launch_gadgets?ie=UTF8&node=9418405031"},{"text":"Sport & Outdoor","url":"/Sport-Outdoor/b/ref=nav_shopall_launch_sports?ie=UTF8&node=9418413031"},{"text":"Körperpflege & Mode\\n","url":"/Koerperpflege/b/ref=nav_shopall_launch_body?ie=UTF8&node=9418396031"},{"text":"Essen & Trinken","url":"/Essen-Trinken/b/ref=nav_shopall_launch_food?ie=UTF8&node=9418401031"},{"text":"Haus & Garten","url":"/Haus/b/ref=nav_shopall_launch_house?ie=UTF8&node=9418415031"},{"text":"Spielzeug & Baby","url":"/b/ref=nav_shopall_launch_toys?ie=UTF8&node=13826914031"},{"text":"Start-ups aus Deutschland","url":"/Innovationen-aus-Deutschland/b/ref=nav_shopall_launch_germany?ie=UTF8&node=9418431031"},{"subtext":"Werden Sie Teil von Amazon Launchpad","text":"Sind Sie ein Start-up?","url":"/gp/launchpad/signup/ref=nav_shopall_nav_shopall_launch_signup"}]}]}}},"AutoMotorcycleIndustrialPanel":{"promoID":"nav-sa-auto-motorcycle-industrial","template":{"name":"itemList","data":{"text":"Auto, Motorrad & Gewerbe","items":[{"text":"Auto, Motorrad & Gewerbe","items":[{"text":"Alles in Gewerbe, Industrie & Wissenschaft","url":"/Gewerbe-Industrie-Wissenschaft/b/ref=nav_shopall_indus?ie=UTF8&node=5866098031"},{"text":"Labor","url":"/Labor-wissenschaftliche-Produkte/b/ref=nav_shopall_lab?ie=UTF8&node=6587769031"},{"text":"Reinigung","url":"/Sanitaerbedarfs-Gebaeudereinigungsmittel/b/ref=nav_shopall_jan?ie=UTF8&node=6588210031"},{"text":"Sicherheit","url":"/Produkte-Arbeitsmedizin-Sicherheit/b/ref=nav_shopall_safety?ie=UTF8&node=6588776031"}]},{"text":"Auto & Motorrad","dividerBefore":"1","items":[{"text":"Autoteile & -zubehör","url":"/auto-tuning-autoteile/b/ref=nav_shopall_am?ie=UTF8&node=78191031"},{"text":"Werkzeug & Wartung","url":"/Werkzeug-Wartung/b/ref=nav_shopall_toolseq?ie=UTF8&node=2611181031"},{"text":"Motorrad","url":"/Motorradreifen-Roller-Motorrad/b/ref=nav_shopall_mc?ie=UTF8&node=4606925031"},{"text":"Navigation & Car-Hi-Fi","url":"/Navigationssystems-Car-HiFi-Autoradios/b/ref=nav_shopall_hfn?ie=UTF8&node=236861011"}]}]}}},"AndroidPanel":{"promoID":"nav-sa-android","template":{"name":"itemList","data":{"text":"Amazon Appstore","items":[{"text":"Amazon Appstore","items":[{"subtext":"Für Kindle Fire und Android-Geräte","text":"Alle Apps und Spiele","url":"/mobile-apps/b/ref=nav_shopall_adr_app?ie=UTF8&node=1661648031"},{"text":"Spiele","url":"/Spiele-Apps-Adroid-Fire/b/ref=nav_shopall_adr_gam?ie=UTF8&node=1720689031"},{"subtext":"Weniger ausgeben, mehr spielen","text":"Amazon Coins","url":"/gp/feature.html/ref=nav_shopall_adr_coins?ie=UTF8&docId=1000749413"},{"subtext":"Kindle, mobiles Shopping, MP3 und mehr","text":"Amazon Apps","url":"/b/ref=nav_shopall_adr_amz?ie=UTF8&node=4951330031","dividerBefore":"1"},{"subtext":"Apps anzeigen und Abonnements verwalten","text":"Meine Apps und Abonnements","url":"/gp/mas/your-account/myapps/ref=nav_shopall_adr_yad3"}]}]}}},"wishlistContent":{"template":{"name":"itemList","data":{"items":[{"text":"Geschenke finden","url":"/gcx/Geschenkefinder/gfhz/ref=nav_wishlist_nav_wishlist_gf"},{"text":"Neue Liste anlegen\\n","url":"/gp/registry/wishlist/ref=nav_wishlist_gno_createwl?ie=UTF8&triggerElementID=createList"},{"text":"Liste finden","url":"/gp/registry/search.html/ref=nav_wishlist_gno_listpop_find?ie=UTF8&type=wishlist"},{"subtext":"Amazon Assistant installieren","text":"Artikel von überall speichern","url":"/gp/BIT/ref=nav_wishlist_bit_v2_a0021"},{"text":"Hochzeitsliste","url":"/gp/wedding/homepage/ref=nav_wishlist_gno_listpop_wr"},{"text":"Baby-Wunschliste","url":"/baby-reg/homepage/ref=nav_wishlist_gno_listpop_br"},{"text":"Amazon Scout | Stil-Berater","url":"/scout/ref=nav_wishlist_sbl"}]}}},"KindleAmazonEchoPanel":{"promoID":"nav-sa-kindle-amazon-echo","template":{"name":"itemList","data":{"text":"Echo & Alexa","items":[{"text":"Echo-Geräte","items":[{"subtext":"Alexa für jeden Raum","text":"Das neue Echo Dot","url":"/dp/B0792HCFTG/ref=nav_shopall_k_echo_dn"},{"subtext":"Immer verfügbar und schnell. Einfach fragen. ","text":"Amazon Echo","url":"/dp/B06ZXQV6P8/ref=nav_shopall_k_echo_rad"},{"subtext":"Mit Premiumklang und eingebautem Smart Home-Hub","text":"Das neue Echo Plus","url":"/dp/B07H2WSKVK/ref=nav_shopall_k_echo_ld"},{"subtext":"Stylisches, kompaktes Echo mit Bildschirm","text":"Echo Spot","url":"/dp/B01J2BL01K/ref=nav_shopall_k_echo_roo","dividerBefore":"1"},{"subtext":"Premiumlautsprecher mit brillantem 10-Zoll-HD-Display","text":"Das neue Echo Show","url":"/dp/B07H33PH9M/ref=nav_shopall_k_echo_bs"},{"subtext":"Geräte vergleichen, Informationen zu Alexa &amp; mehr ","text":"Alle Geräte mit Alexa anzeigen ","url":"/b/ref=nav_shopall_k_echo_catpg?ie=UTF8&node=14100226031","dividerBefore":"1"}]},{"text":"Mehr Inhalte","columnBreak":"1","items":[{"subtext":"Entdecken Sie, was Echo alles kann","text":"Alexa kennenlernen","url":"/b/ref=nav_shopall_k_echo_aug?ie=UTF8&node=12775495031"},{"subtext":"Für Fire OS, Android, iOS und Desktop Browser","text":"Alexa App","url":"/gp/help/customer/display.html/ref=nav_shopall_k_echo_app?ie=UTF8&nodeId=201549920"},{"subtext":"Alle Smart Home-Produkte und Geräte mit Sprachsteuerung","text":"Alexa & Smart Home","url":"/b/ref=nav_shopall_k_echo_smarthome?ie=UTF8&node=14536033031"},{"subtext":"Suchen Sie nach Skills in über 21 Kategorien","text":"Alexa Skills","url":"/alexa-skills/b/ref=nav_shopall_k_a2s_all?ie=UTF8&node=10068460031"},{"subtext":"40 Millionen Songs zum Streamen","text":"Amazon Music Unlimited","url":"/gp/dmusic/promotions/AmazonMusicUnlimited/ref=nav_shopall_k_echo_musicunlimited"},{"subtext":"Ihre Audible-Bibliothek einfach vorlesen lassen","text":"Audible-Hörbücher","url":"/audible-h%C3%B6rbuch-downloads/b/ref=nav_shopall_k_echo_audible?ie=UTF8&node=251105031"}]}]}}},"SportsOutdoorsPanel":{"promoID":"nav-sa-sports-outdoors","template":{"name":"itemList","data":{"text":"Sport & Freizeit","items":[{"text":"Sport & Freizeit","items":[{"text":"Alle Sport-Produkte","url":"/sport-freizeit-sportartikel/b/ref=nav_shopall_asf?ie=UTF8&node=16435051"},{"text":"Camping & Outdoor","url":"/Camping-Outdoor/b/ref=nav_shopall_camp?ie=UTF8&node=16435151"},{"text":"Fitness","url":"/Fitness/b/ref=nav_shopall_fit?ie=UTF8&node=16435171"},{"text":"Fußball","url":"/Fu%C3%9Fball/b/ref=nav_shopall_fball?ie=UTF8&node=16435181"},{"text":"Radsport","url":"/Radsport/b/ref=nav_shopall_rad?ie=UTF8&node=16435211"},{"text":"Running","url":"/Running/b/ref=nav_shopall_running?ie=UTF8&node=16435231"},{"text":"Sportelektronik","url":"/pulsuhren-gps-ger%C3%A4te/b/ref=nav_shopall_mongps?ie=UTF8&node=190534011"},{"text":"Sportbekleidung","url":"/Sportbekleidung/b/ref=nav_shopall_spw?ie=UTF8&node=3772226031"},{"text":"Sportschuhe","url":"/Sportschuhe-Laufschuhe-Fu%C3%9Fballschuhe/b/ref=nav_shopall_sportshoes?ie=UTF8&node=1948670031"},{"text":"Fußball live bei Amazon Music","url":"/gp/dmusic/promotions/LiveSports/ref=nav_shopall_dmm_sport_poldi"}]}]}}},"AmazonFreshPanel":{"promoID":"nav-sa-amazon-fresh","template":{"name":"itemList","data":{"badgeText":"Neu","text":"AmazonFresh","dividerBefore":"1","items":[{"text":"AmazonFresh","items":[{"text":"Alle AmazonFresh-Produkte","url":"/b/ref=nav_shopall_afs_aaf?_encoding=UTF8&node=6723195031"},{"text":"Frisches Obst","url":"/s/ref=nav_shopall_afs_ff?_encoding=UTF8&bbn=6723195031&node=7383624031"},{"text":"Frisches Gemüse","url":"/s/ref=nav_shopall_afs_fv?_encoding=UTF8&bbn=6723195031&node=7383623031"},{"text":"Brot & Backwaren","url":"/s/ref=nav_shopall_afs_bb?_encoding=UTF8&bbn=6723195031&node=358557031"},{"text":"Fleisch, Wurstwaren & Fisch","url":"/s/ref=nav_shopall_afs_ms?_encoding=UTF8&bbn=6723195031&node=7388515031"},{"text":"Milch- & Kühlprodukte","url":"/s/ref=nav_shopall_afs_dce?_encoding=UTF8&bbn=6723195031&node=358572031"},{"text":"Frische Fertiggerichte","url":"/s/ref=nav_shopall_afs_pm?_encoding=UTF8&bbn=6723195031&node=9732440031"},{"text":"Schokolade & Süßigkeiten","url":"/s/ref=nav_shopall_afs_ff?_encoding=UTF8&bbn=6723195031&node=358579031"},{"text":"Knabberartikel","url":"/s/ref=nav_shopall_afs_sb?_encoding=UTF8&bbn=6723195031&node=358568031"},{"text":"Tiefkühlprodukte","url":"/s/ref=nav_shopall_afs_ff?_encoding=UTF8&bbn=6723195031&node=7384443031"},{"text":"Getränke, Kaffee & Tee","url":"/s/ref=nav_shopall_afs_ctb?_encoding=UTF8&bbn=6723195031&node=358564031"},{"text":"Bier, Wein & Spirituosen","url":"/s/ref=nav_shopall_afs_cws?_encoding=UTF8&bbn=6723195031&node=358556031"},{"text":"Lieblingsläden","url":"/s/ref=nav_shopall_afs_nm?_encoding=UTF8&node=10550392031","dividerBefore":"1"},{"text":"Haushaltswaren","url":"/s/ref=nav_shopall_afs_hl?_encoding=UTF8&bbn=6723195031&node=64270031"},{"text":"Baby","url":"/s/ref=nav_shopall_afs_bc?_encoding=UTF8&bbn=6723195031&node=355007011"},{"text":"Beauty","url":"/s/ref=nav_shopall_afs_bty?_encoding=UTF8&bbn=6723195031&node=84230031"},{"text":"Haustiere","url":"/s/ref=nav_shopall_afs_pc?_encoding=UTF8&bbn=6723195031&node=340852031"},{"text":"Meine Produkte","url":"/afx/lists/pastpurchases/ref=nav_shopall_afs_pp","dividerBefore":"1"},{"text":"Meine Einkaufslisten","url":"/afx/lists/grocerylists/ref=nav_shopall_afs_gl"}]}]}}},"BabyKidsToysPanel":{"promoID":"nav-sa-baby-kids-toys","template":{"name":"itemList","data":{"text":"Spielzeug & Baby","items":[{"text":"Spielzeug & Baby","items":[{"text":"Spielzeug","url":"/spielzeug-brettspiele-baby-kleinkind/b/ref=nav_shopall_tg?ie=UTF8&node=12950651"},{"text":"Baby","url":"/baby-babyausstattung-babyartikel/b/ref=nav_shopall_ba?ie=UTF8&node=355007011"},{"text":"Babybekleidung & Babyschuhe","url":"/b/ref=nav_shopall_baby_clothing_shoes?ie=UTF8&node=12409931031"},{"text":"Brettspiele","url":"/Spiele-Brettspiele-Kinderspiele-Aktionsspiele-Haba-Monopoly/b/ref=nav_shopall_gbg?ie=UTF8&node=12956501"},{"text":"Baby-Wunschliste","url":"/baby-reg/homepage/ref=nav_shopall_babyreg"},{"subtext":"Bis zu 20% auf Windeln und Babynahrung für Prime-Mitglieder","text":"Amazon Family","url":"/gp/family/signup/welcome/ref=nav_shopall_amzn_family"}]}]}}},"HomeGardenToolsPanel":{"promoID":"nav-sa-home-garden-tools","template":{"name":"itemList","data":{"text":"Haushalt, Garten, Baumarkt","items":[{"text":"Küche, Haushalt & Wohnen","items":[{"text":"Küchen- & Haushaltsgeräte","url":"/Elektrische-K%C3%BCchenger%C3%A4te/b/ref=nav_shopall_es?ie=UTF8&node=3169321"},{"text":"Kaffee & Espresso","url":"/Espressomaschinen-Kaffeemaschine/b/ref=nav_shopall_coffee?ie=UTF8&node=3310781"},{"text":"Elektro-Großgeräte\\n","url":"/Haushaltsger%C3%A4te-Hausger%C3%A4te/b/ref=nav_shopall_la?ie=UTF8&node=908823031"},{"text":"Kochen & Essen","url":"/Kochen-Braten-Backen-K%C3%BCche-Haushalt/b/ref=nav_shopall_ki?ie=UTF8&node=257408011"},{"text":"Aufbewahren & Ordnen","url":"/aufbewahren-und-ordnen/b/ref=nav_shopall_storage?ie=UTF8&node=3437522031"},{"text":"Möbel & Wohnaccessoires","url":"/M%C3%B6bel-Dekoration/b/ref=nav_shopall_home_decor?ie=UTF8&node=3312261"},{"text":"Heimtextilien","url":"/Heimtextilien-Matratzen-Bettw%C3%A4sche/b/ref=nav_shopall_textiles?ie=UTF8&node=10176091"},{"text":"Beleuchtung","url":"/Beleuchtung/b/ref=nav_shopall_light?ie=UTF8&node=213083031"},{"text":"Alles in Küche, Haushalt & Wohnen","url":"/k%C3%83%C2%BCche-haushalt-wohnen/b/ref=nav_shopall_allkhprod?ie=UTF8&node=3167641"},{"text":"Schnäppchen","url":"/bbp/ref=nav_shopall_bbp_bb_01a411_in_sd_w_na_na_de_de?_encoding=UTF8&category=%2Fhome-decor"},{"text":"Amazon Scout | Stil-Berater","url":"/scout/ref=nav_shopall_sbl"}]},{"text":"Baumarkt, Garten & Tier","columnBreak":"1","items":[{"text":"Elektro- & Handwerkzeuge","url":"/elektrowerkzeuge-handwerkzeuge/b/ref=nav_shopall_paht?ie=UTF8&node=2076939031"},{"text":"Elektrisches Gartenwerkzeug","url":"/Elektrisches-Gartenwerkzeug-Gartenger%C3%A4te-Elektro-Handwerkzeuge-Produkte/b/ref=nav_shopall_lawn?ie=UTF8&node=120589031"},{"text":"Elektroinstallation","url":"/elektroinstallation-steckdosen-zeitschaltuhr/b/ref=nav_shopall_electric?ie=UTF8&node=2076361031"},{"text":"Heizen & Kühlen","url":"/heizen-k%C3%BChlen-luftbefeuchtung/b/ref=nav_shopall_heatfan?ie=UTF8&node=2076254031"},{"text":"Küchen- & Badinstallation","url":"/badinstallation-k%C3%BCcheninstallation/b/ref=nav_shopall_bathplumb?ie=UTF8&node=2076820031"},{"text":"Smart Home","url":"/Smart-Home-Automation/b/ref=nav_shopall_inth?ie=UTF8&node=4816541031"},{"text":"Werkzeuge für Profis","url":"/professionelle-werkzeuge-f%C3%BCr-handwerker/b/ref=nav_shopall_profst?ie=UTF8&node=5490374031"},{"text":"Alles in Baumarkt","url":"/baumarkt-werkzeug-heimwerken/b/ref=nav_shopall_diy?ie=UTF8&node=80084031"},{"text":"Alle Garten-Produkte","url":"/garten-shop/b/ref=nav_shopall_lg?ie=UTF8&node=10925031"},{"text":"Alles für Tiere","url":"/Tierbedarf-Tiernahrung/b/ref=nav_shopall_ps?ie=UTF8&node=340852031"}]}]}}},"yourAccountContent":{"template":{"name":"itemList","data":{"items":[{"text":"Mein Konto","url":"/gp/css/homepage.html/ref=nav_youraccount_ya"},{"text":"Meine Bestellungen","url":"/gp/css/order-history/ref=nav_youraccount_orders","id":"nav_prefetch_yourorders"},{"text":"Meine Dash Buttons","url":"/ddb/your-dash-buttons/ref=nav_youraccount_nav_youraccount_snk_ddb_ydb_d_nav_ya"},{"text":"Wunschzettel","url":"/gp/registry/wishlist/ref=nav_youraccount_wl?ie=UTF8&requiresSignIn=1"},{"text":"Empfehlungen","url":"/gp/yourstore/ref=nav_youraccount_recs"},{"text":"Spar-Abo verwalten","url":"/gp/subscribe-and-save/manager/viewsubscriptions/ref=nav_youraccount_sns"},{"text":"Ihre Mitgliedschaften und Abonnements","url":"/yourmembershipsandsubscriptions/ref=nav_youraccount_digital_subscriptions"},{"text":"Meine Prime-Mitgliedschaft","url":"/gp/subs/primeclub/account/homepage.html/ref=nav_youraccount_prime"},{"text":"Unternehmenskonto erstellen","url":"/b/ref=nav_youraccount_deb2b_reg?ie=UTF8&node=14154536031"},{"text":"Meine Inhalte und Geräte","url":"/gp/digital/fiona/manage/ref=nav_youraccount_myk","dividerBefore":"1"},{"text":"Mein Prime Music","url":"/b/ref=nav_youraccount_pmu?ie=UTF8&node=5686557031"},{"text":"Meine Musikbibliothek","url":"/gp/dmusic/mp3/player/ref=nav_youraccount_cldplyr"},{"text":"Mein Amazon Drive","url":"/clouddrive/ref=nav_youraccount_clddrv"},{"text":"Mein Prime Video","url":"/Prime-Video/b/ref=nav_youraccount_piv?ie=UTF8&node=3279204031"},{"text":"Mein Kindle Unlimited","url":"/gp/kindle/ku/ku_central/ref=nav_youraccount_ku"},{"text":"Meine Watchlist","url":"/gp/video/watchlist/ref=nav_youraccount_ywl"},{"text":"Meine Video-Bibliothek","url":"/gp/video/library/ref=nav_youraccount_yvl"},{"text":"Meine Games- & Software-Bibliothek","url":"/gp/swvgdtt/your-account/manage-downloads.html/ref=nav_youraccount_gsl"},{"text":"Meine Apps & Geräte","url":"/gp/mas/your-account/myapps/ref=nav_youraccount_aad"},{"dividerBefore":"1"},{"text":"Konten wechseln","url":"/gp/navigation/redirector.html/ref=sign-in-redirect?ie=UTF8&associationHandle=deflex&currentPageURL=https%3A%2F%2Fwww.amazon.de%2Fgp%2Fyourstore%2Fhome%3Fie%3DUTF8%26ref_%3Dnav_youraccount_switchacct&pageType=&switchAccount=picker&yshURL=https%3A%2F%2Fwww.amazon.de%2Fgp%2Fyourstore%2Fhome%3Fie%3DUTF8%26ref_%3Dnav_youraccount_switchacct","id":"nav-item-switch-account"},{"text":"Abmelden","url":"/gp/flex/sign-out.html/ref=nav_youraccount_signout?ie=UTF8&action=sign-out&path=%2Fgp%2Fyourstore%2Fhome&signIn=1&useRedirectOnSuccess=1","id":"nav-item-signout"}]}},"wlTriggers":"77689:98075:98076:85042"},"BooksPanel":{"promoID":"nav-sa-books","template":{"name":"itemList","data":{"text":"Bücher & Audible","dividerBefore":"1","items":[{"text":"Bücher","items":[{"text":"Alle Bücher","url":"/b%C3%BCcher-buch-lesen/b/ref=nav_shopall_bo?ie=UTF8&node=186606"},{"text":"Kindle eBooks","url":"/ebooks-kindle-buecher/b/ref=nav_shopall_kbo?ie=UTF8&node=530886031"},{"text":"Kindle Unlimited","url":"/gp/kindle/ku/sign-up/ref=nav_shopall_ods_books_con_ku"},{"text":"Prime Reading","url":"/kindle-dbs/hz/bookshelf/prime/ref=nav_shopall_ods_books_con_pr"},{"text":"Fremdsprachige Bücher","url":"/fremdsprachige-englische-b%C3%83%C2%BCcher-english-books/b/ref=nav_shopall_fbo?ie=UTF8&node=52044011"},{"text":"Fachbücher","url":"/fachb%C3%BCcher-fachbuch/b/ref=nav_shopall_probo?ie=UTF8&node=288100"},{"text":"Schulbücher & Lernhilfen","url":"/schule-lernen-b%C3%83%C2%BCcher/b/ref=nav_shopall_edubo?ie=UTF8&node=403432"},{"text":"Hörbücher","url":"/h%C3%83%C2%B6rb%C3%83%C2%BCcher-h%C3%83%C2%B6rbuch-h%C3%83%C2%B6rspiel-h%C3%83%C2%B6rspiele/b/ref=nav_shopall_abo?ie=UTF8&node=300259"}]},{"text":"Audible Hörbücher","dividerBefore":"1","items":[{"subtext":"30 Tage kostenlos testen","text":"Audible-Abo","url":"/dp/B00NTQ6K7E/ref=nav_shopall_aud_mem"},{"text":"Alle Hörbuch-Downloads","url":"/audible-h%C3%B6rbuch-downloads/b/ref=nav_shopall_aud_bks?ie=UTF8&node=251105031"},{"subtext":"Nahtlos zwischen Lesen und Hören wechseln","text":"Whispersync for Voice","url":"/Whispersync-For-Voice-eBooks/b/ref=nav_shopall_aud_wfv?ie=UTF8&node=4824719031"}]}]}}},"cartContent":{"html":"<div id='nav-cart-flyout' class='nav-empty nav-flyout-content' data-one='{count} Artikel' data-many='{count} Artikel'><div class='nav-dynamic-full'><div id='nav-cart-standard' class='nav-cart-content'><a href='/gp/cart/view.html/ref=nav_flyout_viewcart?ie=UTF8&amp;hasWorkingJavascript=1' class='nav-cart-title'>Artikel in Ihrem Einkaufswagen</a><div class='nav-cart-subtitle'></div><div class='nav-cart-items'></div></div><div id='nav-cart-pantry' class='nav-cart-content' data-box='{count} Karton' data-boxes='{count} Kartons' data-box-filled='{pct}% gefüllt' data-boxes-filled='{pct}% des aktuellen Kartons gefüllt'><a href='/gp/cart/view.html/ref=nav_flyout_viewcart?ie=UTF8&amp;hasWorkingJavascript=1' class='nav-cart-title'>Amazon Pantry Artikel</a><div class='nav-cart-subtitle'></div><div class='nav-cart-items'></div></div><div id='nav-cart-fresh' class='nav-cart-content'><a href='/gp/cart/view.html/ref=nav_flyout_viewcart?ie=UTF8&amp;hasWorkingJavascript=1' class='nav-cart-title'><img id='nav-cart-fresh-logo' src='https://images-eu.ssl-images-amazon.com/images/G/03/gno/ec-logo-fresh-color._CB533346845_.png'></a><div class='nav-cart-subtitle'></div><div class='nav-cart-items'></div></div></div><div class='nav-ajax-message'></div><div class='nav-dynamic-empty'><p class='nav_p nav-bold nav-cart-empty'> Ihr Einkaufswagen ist leer.</p><p class='nav_p '> Nutzen Sie ihn und befüllen Sie ihn mit Büchern, Filmen, Spielsachen, Elektronikartikeln und mehr.</p></div><div class='nav-ajax-error-msg'><p class='nav_p nav-bold'> Es gibt gegenwärtig ein Problem mit der Vorschau Ihres Einkaufswagen.</p><p class='nav_p '> Überprüfen Sie Ihre Internetverbindung und <a href='/gp/cart/view.html/ref=nav_flyout_viewcart?ie=UTF8&hasWorkingJavascript=1' class='nav_a'>gehen Sie zu Ihrem Einkaufswagen</a>, oder <a href='javascript:void(0);' class='nav_a nav-try-again'>versuchen Sie es erneut</a>.</p></div><div id='nav-cart-footer'><a href='/gp/cart/view.html/ref=nav_flyout_viewcart?ie=UTF8&amp;hasWorkingJavascript=1' id='nav-cart-menu-button' class='nav-action-button'><span class='nav-action-inner'>Einkaufswagen ansehen<span id='nav-cart-menu-button-count' ><span id='nav-cart-zero'>(<span class='nav-cart-count'>0</span> Artikel)</span><span id='nav-cart-one' style='display: none;'>(<span class='nav-cart-count'>0</span> Artikel)</span><span id='nav-cart-many' style='display: none;'>(<span class='nav-cart-count'>0</span> Artikel)</span></span></span></a></div></div>"},"InstantVideoPanel":{"promoID":"nav-sa-instant-video","template":{"name":"itemList","data":{"text":"Prime Video","items":[{"text":"Prime Video","items":[{"subtext":"Alle Filme und Serien, die Sie direkt ansehen können","text":"Alle Videos","url":"/Amazon-Video/b/ref=nav_shopall_aiv?ie=UTF8&node=3010075031"},{"subtext":"Unbegrenzter Film- und Seriengenuss","text":"Enthalten in Prime","url":"/Prime-Video/b/ref=nav_shopall_aiv_piv?ie=UTF8&node=3279204031"},{"subtext":"Buchen Sie Eurosport Player, Shudder, GEO und mehr","text":"Prime Video Channels","url":"/gp/video/storefront/ref=nav_shopall_nav_sa_aos?ie=UTF8&filterId=OFFER_FILTER%3DSUBSCRIPTIONS"},{"subtext":"Leihen oder Kaufen von Filmen und Serien","text":"Kaufen und leihen","url":"/filme-serien-kaufen-leihen-streamen-downloaden/b/ref=nav_shopall_aiv_vid?ie=UTF8&node=3279205031"},{"subtext":"Videos hinzufügen zum späteren Ansehen","text":"Meine Watchlist","url":"/gp/video/watchlist/ref=nav_shopall_aiv_wlst","dividerBefore":"1"},{"subtext":"Ihre ausgeliehenen und gekauften Videos","text":"Meine Video-Bibliothek","url":"/gp/video/library/ref=nav_shopall_aiv_yvl"},{"subtext":"Fire Tablets, iPad, Spielekonsolen, TV-Geräte und viele mehr","text":"Auf vielen Geräten verfügbar","url":"/b/ref=nav_shopall_aiv_wtv?ie=UTF8&node=5573494031"}]}]}}},"FoodBeveragesHealthBeautyPanel":{"promoID":"nav-sa-food-beverages-health-beauty","template":{"name":"itemList","data":{"text":"Beauty, Drogerie & Lebensmittel","items":[{"text":"Beauty & Drogerie","items":[{"text":"Beauty","url":"/Parf%C3%BCmerie-Kosmetik-Beauty/b/ref=nav_shopall_bty?ie=UTF8&node=84230031"},{"text":"Luxury Beauty","url":"/Premium-Beauty/b/ref=nav_shopall_lbty?ie=UTF8&node=3765352031"},{"text":"Männerpflege","url":"/m%C3%A4nnerpflege-rasiermesser-rasierer-m%C3%A4nnerparfum/b/ref=nav_shopall_men?ie=UTF8&node=4388424031"},{"text":"Drogerie, Körper- & Babypflege","url":"/Drogerie-K%C3%B6rperpflege/b/ref=nav_shopall_drog?ie=UTF8&node=64187031"},{"text":"Sanitätshaus","url":"/Medizinische-Geraete-Verbrauchsmaterialien/b/ref=nav_shopall_health?ie=UTF8&node=2860102031"}]},{"text":"Lebensmittel & Getränke","dividerBefore":"1","items":[{"text":"Lebensmittel & alkoholfreie Getränke","url":"/Lebensmittel-Getr%C3%A4nke/b/ref=nav_shopall_bev?ie=UTF8&node=340846031"},{"text":"Bier, Wein & Spirituosen","url":"/Bier-Wein-Spirituosen/b/ref=nav_shopall_wine?ie=UTF8&node=358556031"},{"subtext":"Bio, glutenfrei, laktosefrei, Fair Trade & vegan","text":"Bio & Clean Eating","url":"/Clean-Eating/b/ref=nav_shopall_bio?ie=UTF8&node=9501653031"},{"text":"AmazonFresh","url":"/b/ref=nav_shopall_grocery_fresh?_encoding=UTF8&node=6723195031"},{"text":"Sonderangebote","url":"/b/ref=nav_shopall_cons_deals?ie=UTF8&node=3599395031","dividerBefore":"1"},{"subtext":"Die Vorratskammer in der Box","text":"Amazon Pantry","url":"/amazon-pantry/b/ref=nav_shopall_prime_pantry?ie=UTF8&node=5787992031"},{"subtext":"Bis zu 15% sparen und kostenfreie Lieferung","text":"Spar-Abo","url":"/b/ref=nav_shopall_sns?ie=UTF8&node=365206031"}]}]}}},"StorefrontsPanel":{"promoID":"nav-sa-storefronts","template":{"name":"itemList","data":{"text":"Amazon Storefronts","items":[{"text":"Amazon Storefronts","items":[{"text":"Alle Storefronts-Produkte","url":"/b/ref=nav_shopall_storefronts_all?ie=UTF8&node=15428488031"},{"text":"Von Frauen geführte Unternehmen","url":"/b/ref=nav_shopall_storefronts_wom?ie=UTF8&node=15553097031"},{"text":"Familienunternehmen","url":"/b/ref=nav_shopall_storefronts_fam?ie=UTF8&node=15553098031"},{"text":"Produktinnovatoren","url":"/b/ref=nav_shopall_storefronts_inn?ie=UTF8&node=15553100031"},{"text":"Nachhaltige Unternehmen","url":"/b/ref=nav_shopall_storefronts_sus?ie=UTF8&node=15553099031"}]}]}}},"templates":{"asin-promo":"<a href='<#=destination #>' class='nav_asin_promo'>  <img src='<#=image #>' class='nav_asin_promo_img'/>  <span class='nav_asin_promo_headline'><#=headline #></span>  <span class='nav_asin_promo_info'>    <span class='nav_asin_promo_title'><#=productTitle #></span>    <span class='nav_asin_promo_title2'><#=productTitle2 #></span>    <span class='nav_asin_promo_price'><#=price #></span>  </span>  <span class='nav_asin_promo_button nav-sprite'><#=button #></span></a>","discoveryPanelList":"<# var renderItems = function(items) { #>    <span class='nav-dp-title nav-item'>    Deliveries at a glance    <div class='nav-divider-container'><div class='nav-divider'></div></div></span>    <# jQuery.each(items, function (i, item) { #>        <span class='nav-item'>            <a href='<#=item.order_link#>' class='nav-dp-link'>                <span class='nav-dp-left-column'>                    <img src='<#=item.image#>' class='nav-dp-image'/>                </span>                <span class='nav-dp-right-column'>                    <span class='nav-dp-text <#=item.status#>'>                        <#=item.status_text#>                        <br/>                    </span>                    <# if(item.secondary_status_text) { #>                        <span class='nav-dp-text-secondary <#=item.status#>'>                            <#=item.secondary_status_text#>                        </span>                    <# } #>                </span>            </a>            <div class='nav-divider-container'><div class='nav-divider'></div></div>        </span>  <# }); #>  <a href='/your-orders/ref=nav_dp_ayo' class='nav-dp-link-emphasis'>      View all orders  </a><# }; #><# renderItems(items); #>","itemList":"<# var hasColumns = (function () {  var checkColumns = function (_items) {    if (!_items) {      return false;    }    for (var i=0; i<_items.length; i++) {      if (_items[i].columnBreak || (_items[i].items && checkColumns(_items[i].items))) {        return true;      }    }    return false;  };  return checkColumns(items);}()); #><# if(hasColumns) { #>  <# if(items[0].image && items[0].image.src) { #>    <div class='nav-column nav-column-first nav-column-image'>  <# } else if (items[0].greeting) { #>    <div class='nav-column nav-column-first nav-column-greeting'>  <# } else { #>    <div class='nav-column nav-column-first'>  <# } #><# } #><# var renderItems = function(items) { #>  <# jQuery.each(items, function (i, item) { #>    <# if(hasColumns && item.columnBreak) { #>      <# if(item.image && item.image.src) { #>        </div><div class='nav-column nav-column-notfirst nav-column-break nav-column-image'>      <# } else if (item.greeting) { #>        </div><div class='nav-column nav-column-notfirst nav-column-break nav-column-greeting'>      <# } else { #>        </div><div class='nav-column nav-column-notfirst nav-column-break'>      <# } #>    <# } #>    <# if(item.dividerBefore) { #>      <div class='nav-divider'></div>    <# } #>    <# if(item.text || item.content) { #>      <# if(item.url) { #>        <a href='<#=item.url #>' class='nav-link      <# } else {#>        <span class='      <# } #>      <# if(item.panelKey) { #>        nav-hasPanel      <# } #>      <# if(item.items) { #>        nav-title      <# } #>      <# if(item.decorate == 'carat') { #>        nav-carat      <# } #>      <# if(item.decorate == 'nav-action-button') { #>        nav-action-button      <# } #>      nav-item'      <# if(item.extra) { #>        <#=item.extra #>      <# } #>      <# if(item.id) { #>        id='<#=item.id #>'      <# } #>      <# if(item.dataNavRole) { #>        data-nav-role='<#=item.dataNavRole #>'      <# } #>      <# if(item.dataNavRef) { #>        data-nav-ref='<#=item.dataNavRef #>'      <# } #>      <# if(item.panelKey) { #>        data-nav-panelkey='<#=item.panelKey #>'        role='navigation'        aria-label='<#=item.text#>'      <# } #>      <# if(item.subtextKey) { #>        data-nav-subtextkey='<#=item.subtextKey #>'      <# } #>      <# if(item.image && item.image.height > 16) { #>        style='line-height:<#=item.image.height #>px;'      <# } #>      >      <# if(item.decorate == 'carat') { #>        <i class='nav-icon'></i>      <# } #>      <# if(item.image && item.image.src) { #>        <img class='nav-image' src='<#=item.image.src #>' style='height:<#=item.image.height #>px; width:<#=item.image.width #>px;' />      <# } #>      <# if(item.text) { #>        <span class='nav-text<# if(item.classname) { #> <#=item.classname #><# } #>'><#=item.text#><# if(item.badgeText) { #>          <span class='nav-badge'><#=item.badgeText#></span>        <# } #></span>      <# } else if (item.content) { #>        <span class='nav-content'><# jQuery.each(item.content, function (j, cItem) { #><# if(cItem.url && cItem.text) { #><a href='<#=cItem.url #>' class='nav-a'><#=cItem.text #></a><# } else if (cItem.text) { #><#=cItem.text#><# } #><# }); #></span>      <# } #>      <# if(item.subtext) { #>        <span class='nav-subtext'><#=item.subtext #></span>      <# } #>      <# if(item.url) { #>        </a>      <# } else {#>        </span>      <# } #>    <# } #>    <# if(item.image && item.image.src) { #>      <# if(item.url) { #>        <a href='<#=item.url #>'>       <# } #>      <img class='nav-image'      <# if(item.id) { #>        id='<#=item.id #>'      <# } #>      src='<#=item.image.src #>' <# if (item.alt) { #> alt='<#= item.alt #>'<# } #>/>      <# if(item.url) { #>        </a>       <# } #>    <# } #>    <# if(item.items) { #>      <div class='nav-panel'> <# renderItems(item.items); #> </div>    <# } #>  <# }); #><# }; #><# renderItems(items); #><# if(hasColumns) { #>  </div><# } #>","notificationsList":"<div class='nav-item nav-title'>  Notifications</div><# jQuery.each(items || [], function (i, item) { #>  <div class='nav-item<# if (item.type) { #> nav-noti-list-<#= item.type #><# } #><# if (item.image && item.image.src) { #> nav-noti-list-with-image<# } #>'>    <# if (item.dismissId) { #>      <div class='nav-noti-list-x' data-noti-id='<#= item.dismissId #>'>&times;</div>    <# } #>    <# if (item.image && item.image.src) { #>      <div class='nav-noti-list-image'>        <img class='nav-noti-list-image-tag' src='<#= item.image.src #>' <# if (item.image.alt) { #> alt='<#= item.image.alt #>'<# } #> <# if (item.image.title) { #> title='<#= item.image.title #>'<# } #>/>      </div>    <# } #>    <# if (item.heading) { #>      <div class='nav-noti-list-heading'><#= item.heading #></div>    <# } #>    <# jQuery.each(item.content || [], function (j, itemContent) { #>      <# if (itemContent.url) { #>        <a href='<#= itemContent.url #>' class='nav-noti-list-content'>      <# } else { #>        <div class='nav-noti-list-content'>      <# } #>        <# if (itemContent.text) { #>          <span class='nav-noti-list-text'><#= itemContent.text #></span>        <# } #>        <# if (itemContent.subtext) { #>          <span class='nav-noti-list-subtext'><#= itemContent.subtext #></span>        <# } #>      <# if (itemContent.url) { #>        </a>      <# } else { #>        </div>      <# } #>    <# }); #>  </div><# }); #>","discoveryPanelSummary":"    <span class='nav-dp-title nav-item'>    Deliveries at a glance    <div class='nav-divider-container'><div class='nav-divider'></div></div></span>    <# jQuery.each(items || [], function (i, item) { #>        <span class='nav-item'>            <span class='nav-dp-left-column'>                <img src='<#=item.image.url#>' class='nav-dp-image' height='<#=item.image.height#>'/>            </span>            <span class='nav-dp-right-column'>                <#=item.status_text#>                <div class='nav-dp-secondary-row'>                    <a href='/your-orders/ref=nav_dp_ryo' class='nav-dp-link-emphasis'>                        Sign in to view orders                    </a>                </div>            </span>        </span>    <# }); #>","htmlList":"  <# jQuery.each(items, function (i, item) { #>    <div class='nav-item'>      <#=item #>    </div>  <# }); #>","subnav":"<# if (obj && obj.type === 'vertical') { #>  <# jQuery.each(obj.rows, function (i, row) { #>    <# if (row.flyoutElement === 'button') { #>      <div class='nav_sv_fo_v_button'        <# if (row.elementStyle) { #>          style='<#= row.elementStyle #>'        <# } #>      >        <a href='<#=row.url #>' class='nav-action-button nav-sprite'>          <#=row.text #>        </a>      </div>    <# } else if (row.flyoutElement === 'list' && row.list) { #>      <# jQuery.each(row.list, function (j, list) { #>        <div class='nav_sv_fo_v_column <#=(j === 0) ? 'nav_sv_fo_v_first' : '' #>'>          <ul class='<#=list.elementClass #>'>          <# jQuery.each(list.linkList, function (k, link) { #>            <# if (k === 0) { link.elementClass += ' nav_sv_fo_v_first'; } #>            <li class='<#=link.elementClass #>'>              <# if (link.url) { #>                <a href='<#=link.url #>' class='nav_a'><#=link.text #></a>              <# } else { #>                <span class='nav_sv_fo_v_span'><#=link.text #></span>              <# } #>            </li>          <# }); #>          </ul>        </div>      <# }); #>    <# } else if (row.flyoutElement === 'link') { #>      <# if (row.topSpacer) { #>        <div class='nav_sv_fo_v_clear'></div>      <# } #>      <div class='<#=row.elementClass #>'>        <a href='<#=row.url #>' class='nav_sv_fo_v_lmargin nav_a'>          <#=row.text #>        </a>      </div>    <# } #>  <# }); #><# } else if (obj) { #>  <div class='nav_sv_fo_scheduled'>    <#= obj #>  </div><# } #>","wishlist":"<# jQuery.each(wishlist, function (i, item) { #>  <li class='nav_pop_li'>    <a href='<#=item.url #>' class='nav_a'>      <#=item.name #>    </a>    <div class='nav_tag'>      <!--  this logic should now be in dynamic-wish-list.mi -->      <# if(typeof item.count !='undefined') { #>        <#=          (item.count == 1 ? '{count} Artikel' : '{count} Artikel')            .replace('{count}', item.count)        #>      <# } #>    </div>  </li><# }); #>","cart":"<# jQuery.each(items, function (i, item) { #>  <div class='nav-cart-item'>    <a href='<#=item.url #>' class='nav-cart-item-link'>      <img src='<#=item.img #>' class='nav-cart-item-image' />      <span class='nav-cart-item-title'><#=item.name #></span>      <# if (item.weight) { #>        <span class='nav-cart-item-weight' style='display:none;'>          <#= 'Versandgewicht: {value} {unit}'.replace('{value}', item.weight.value).replace('{unit}', item.weight.unit) #>        </span>      <# } #>      <# if (item.ourPrice) { #>        <span class='nav-cart-item-buyingPrice'><#=item.ourPrice #></span>      <# } #>      <# if (item.scarcityMessage) { #>        <span class='<#=item.scarcityClass #>'><#=item.scarcityMessage #></span>      <# } #>      <span class='nav-cart-item-quantity'>        <#= 'Menge: {count}'.replace('{count}', item.qty) #>      </span>    </a>  </div>  <# if (i%2==1) { #>    <div class='nav-cart-item-break'></div>  <# } #><# }); #><div class='nav-cart-item-break'></div>"}}); });
</script>

  <script type='text/javascript'>
      window.$Nav && $Nav.declare('config.prefetchUrls', ["https://images-eu.ssl-images-amazon.com/images/G/01/authportal/common/images/amznbtn-sprite03._CB395592492_.png","https://images-eu.ssl-images-amazon.com/images/G/03/authportal/common/images/amazon_logo_no-org_mid._CB143113074_.png","https://images-eu.ssl-images-amazon.com/images/G/03/authportal/flex/reduced-nav/ap-flex-reduced-nav-2.0._CB309248132_.js","https://images-eu.ssl-images-amazon.com/images/G/03/authportal/flex/reduced-nav/ap-flex-reduced-nav-2.1._CB343893857_.css","https://images-eu.ssl-images-amazon.com/images/G/03/gno/sprites/nav-sprite-global_bluebeacon-V3-1x_optimized._CB516556968_.png","https://images-eu.ssl-images-amazon.com/images/G/03/x-locale/common/buttons/sign-in-secure._CB192194049_.gif","https://images-eu.ssl-images-amazon.com/images/G/03/x-locale/common/login/fwcim._CB481732306_.js","https://images-eu.ssl-images-amazon.com/images/G/03/x-locale/common/transparent-pixel._CB386942701_.gif"]);
window.$Nav && $Nav.declare('config.prefetch',function() {
    var pUrls = window.$Nav.getNow('config.prefetchUrls');
    (window.AmazonUIPageJS ? AmazonUIPageJS : P).when('A').execute(function (A) { A.preload(pUrls); });
});

  /*  */
  
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('A').execute(function(A){
  if(A.preload){
    A.preload('https://images-eu.ssl-images-amazon.com/images/I/41hnizKJASL._RC|71SIAV5MN4L.js,61ybdwam-8L.js,41MSv8-3arL.js,113NkCQYmFL.js,01wBjiz9OvL.js,21YI5xZWAwL.js,31SFwv+1S1L.js,51+klsvwgqL.js,31Sch+N9NhL.js_.js?AUIClients/AmazonNavigationDesktopMetaAsset#desktop');
    A.preload('https://images-eu.ssl-images-amazon.com/images/I/718lfkM5V-L._RC|11qlbytjBCL.css,31bOonmFB4L.css,21LkO384mjL.css,31Jg45b6O1L.css,11S8GiSgx9L.css,31sgPDgo3OL.css,01XHMOHpK1L.css_.css?AUIClients/AmazonNavigationDesktopMetaAsset#desktop.language-de.de');
  }
});




    window.$Nav && $Nav.declare('config.flyoutURL', null);
    window.$Nav && $Nav.declare('btf.lite');
    window.$Nav && $Nav.declare('btf.full');
    window.$Nav && $Nav.declare('btf.exists');
    (window.AmazonUIPageJS ? AmazonUIPageJS : P).register('navCF');
  </script>

    
  







<script type="text/javascript">
  window.$Nav && window.$Nav.build('PldnLocalStorage', function() {
    var PldnLocalStorage = function() {};

    PldnLocalStorage.prototype.setItem = function(key, obj) {
      if (typeof obj !== 'string') {
        obj = window.JSON && window.JSON.stringify(obj);
      }

      try {
        window.localStorage && window.localStorage.setItem(key, obj);
        return true;
      } catch (exception) {
        return false;
      };
    };

    PldnLocalStorage.prototype.getItem = function(key) {
      try {
        return window.localStorage && window.localStorage.getItem(key);
      } catch(exception) {};
    };

    return new PldnLocalStorage();
  });

  window.$Nav && window.$Nav.when('PldnLocalStorage').run('PldnUcolCheck', function(storage) {
    if (!storage.getItem('amazonSmileCampaigns')) {
      storage.setItem('amazonSmileCampaigns', {
        "ucol": {
          "optOut": false,
          "hits": [
            {
              "date": new Date(),
              "redirect": false,
              "optOut": false
            }
          ]
        }
      });
    }
  });
</script>
<!-- btf tilu -->


<!-- sp:feature:host-btf -->


  </div>

  </div>

<!-- htmlEndMarker -->











<!-- sp:end-feature:host-btf -->
<!-- sp:feature:aui-preload -->
<!-- sp:feature:nav-footer -->
<!-- footer pilu -->
        






















<div id="rhf" class="copilot-secure-display" style="clear:both" role="complementary" aria-label="Ihre zuletzt angesehenen Artikel und besonderen Empfehlungen">

    <div class="rhf-frame" style="display:none">
        <br />
        <div id="rhf-container">






    <div class='rhf-loading-outer'>
        <table class='rhf-loading-middle'>
            <tr>
                <td class='rhf-loading-inner'>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/03/personalization/ybh/loading-4x-gray._CB317976236_.gif" />
                </td>
            </tr>
        </table>
    </div>








<div id="rhf-context">
    <script type='application/json'>
        {"rhfHandlerParams":{"rhfAsins":"","noP13NCache":"","weblabTriggers":"","auiDebug":"","keywords":"","k":"","rviAsins":"","url":"","parentSession":"262-9898842-9713804","rhfState":"","contextMetadataOverride":"","currentSubPageType":null,"field-keywords":"","relatedRequestId":"S7Y7MCSM8BQQZXDKY4RQ","recsAsins":"","excludeASIN":"QjA3Qzc2RjNQMg==","auditEnabled":"","customerId":"A96YKT37ODSSG","testRecsFailure":"","previewCampaigns":"","forceWidgets":"","currentPageType":"Detail","stringDebug":""},"subPageType":null,"requestId":"S7Y7MCSM8BQQZXDKY4RQ","sessionId":"262-9898842-9713804","customerId":"A96YKT37ODSSG","pageType":"Detail","ybhHandlerParams":{"relatedRequestId":"S7Y7MCSM8BQQZXDKY4RQ","currentPageType":"Detail","parentSession":"262-9898842-9713804"}}
    </script>
</div>

</div><noscript>

<div class="rhf-border">

        <div class="rhf-header">
        Ihre zuletzt angesehenen Artikel und besonderen Empfehlungen
    </div>

<div class="rhf-footer">
    <div class="rvi-container">

<div class="ybh-edit">
    <div class="ybh-edit-arrow"> &#8250; </div>
    <div class="ybh-edit-link"><a href="/gp/yourstore/pym/ref=pd_pyml_rhf">Browserverlauf anzeigen oder ändern</a></div>
</div>
        <span class="no-rvi-message">Nachdem Sie Produktseiten oder Suchergebnisse angesehen haben, finden Sie hier eine einfache Möglichkeit, diese Seiten wiederzufinden.</span>
    </div>
</div>
</div>
</noscript><div id="rhf-error" style="display:none;">

<div class="rhf-border">

        <div class="rhf-header">
        Ihre zuletzt angesehenen Artikel und besonderen Empfehlungen
    </div>

<div class="rhf-footer">
    <div class="rvi-container">

<div class="ybh-edit">
    <div class="ybh-edit-arrow"> &#8250; </div>
    <div class="ybh-edit-link"><a href="/gp/yourstore/pym/ref=pd_pyml_rhf">Browserverlauf anzeigen oder ändern</a></div>
</div>
        <span class="no-rvi-message">Nachdem Sie Produktseiten oder Suchergebnisse angesehen haben, finden Sie hier eine einfache Möglichkeit, diese Seiten wiederzufinden.</span>
    </div>
</div>
</div>
</div>
        <br />
    </div>
</div>

<div class='navLeftFooter nav-sprite-v1' id='navFooter'><a href="#nav-top" id="navBackToTop"><div class="navFooterBackToTop"><span class="navFooterBackToTopText">Zurück zum Seitenanfang</span></div></a>

<div class="navFooterVerticalColumn navAccessibility" role="presentation"><div class="navFooterVerticalRow navAccessibility" style="display: table-row;"><div class="navFooterLinkCol navAccessibility"><div class="navFooterColHead">Über Amazon</div><ul><li class='nav_first'><a href='/b/ref=footer_careers?ie=UTF8&amp;node=202588011' class='nav_a'>Karriere bei Amazon</a></li><li><a href='https://amazon-presse.de/' class='nav_a'>Pressemitteilungen</a></li><li><a href='https://www.aboutamazon.de/?utm_source=gateway&amp;utm_medium=footer' class='nav_a'>Über uns - von A bis Z</a></li><li><a href='http://www.amazon-logistikblog.de/' class='nav_a'>Amazon Logistikblog</a></li><li class='nav_last'><a href='/b/ref=footer_nav_legal?ie=UTF8&amp;node=505050' class='nav_a'>Impressum</a></li></ul></div><div class="navFooterColSpacerInner navAccessibility"></div><div class="navFooterLinkCol navAccessibility"><div class="navFooterColHead">Geld verdienen mit Amazon</div><ul><li class='nav_first'><a href='https://services.amazon.de/programme/online-verkaufen/so-funktionierts-pro?ld=AZDESOAFooter' class='nav_a'>Jetzt verkaufen</a></li><li><a href='https://services.amazon.de/programme/b2b-verkaufen/merkmale-und-vorteile.html?ld=AZDEB2BRetailFooter' class='nav_a'>Verkaufen bei Amazon Business</a></li><li><a href='https://services.amazon.de/handmade.htm?ld=AZDEHNDFooter' class='nav_a'>Verkaufen bei Amazon Handmade</a></li><li><a href='https://partnernet.amazon.de' class='nav_a'>Partnerprogramm</a></li><li><a href='https://services.amazon.de/programme/versand-durch-amazon/merkmale-und-vorteile/?ld=AZDEFBAFooter' class='nav_a'>Versand durch Amazon</a></li><li><a href='https://services.amazon.de/programme/primedurchverkaeufer/funktionen-und-vorteile.html/?ld=AZDESFPFooter' class='nav_a'>Prime durch Verkäufer</a></li><li><a href='https://advertising.amazon.de/products-self-serve?ref_=ext_amzn_ftr' class='nav_a'>Bewerben Sie Ihre Produkte</a></li><li><a href='https://kdp.amazon.com/?language=de_DE' class='nav_a'>Ihr Buch mit uns veröffentlichen</a></li><li><a href='https://pay.amazon.com/de?ld=AWREDEAPAFooter' class='nav_a'>Amazon Pay</a></li><li class='nav_last nav_a_carat'><span class="nav_a_carat">&rsaquo;</span><a href='/gp/seller-account/mm-landing.html/ref=footer_seeall?ie=UTF8&amp;topic=200330420' class='nav_a'>Alle anzeigen</a></li></ul></div><div class="navFooterColSpacerInner navAccessibility"></div><div class="navFooterLinkCol navAccessibility"><div class="navFooterColHead">Amazon-Zahlungsarten</div><ul><li class='nav_first'><a href='/dp/B00OSAGJTY/ref=footer_cbcc' class='nav_a'>Amazon.de VISA Karte</a></li><li><a href='/b/ref=footer_moneystore?ie=UTF8&amp;node=459632031' class='nav_a'>Kreditkarten</a></li><li><a href='/Geschenkgutscheine/b/ref=footer_giftcards?ie=UTF8&amp;node=1571256031' class='nav_a'>Gutscheine</a></li><li><a href='/gp/help/customer/display.html/ref=footer_rechnung?ie=UTF8&amp;nodeId=915628' class='nav_a'>Rechnung</a></li><li><a href='/gp/help/customer/display.html/ref=footer_bankeinzug?ie=UTF8&amp;nodeId=504928' class='nav_a'>Bankeinzug</a></li><li><a href='/gp/help/customer/display.html/ref=footer_tfx?ie=UTF8&amp;nodeId=200219670' class='nav_a'>Amazon Currency Converter</a></li><li class='nav_last'><a href='/gp/gc/create/ref=footer_topup_de' class='nav_a'>Mein Amazon-Konto aufladen</a></li></ul></div><div class="navFooterColSpacerInner navAccessibility"></div><div class="navFooterLinkCol navAccessibility"><div class="navFooterColHead">Wir helfen Ihnen</div><ul><li class='nav_first'><a href='/gp/css/order-history/ref=footer_hp_ss_comp_tmp' class='nav_a'>Lieferung verfolgen oder Bestellung anzeigen</a></li><li><a href='/gp/help/customer/display.html/ref=footer_shiprates?ie=UTF8&amp;nodeId=504938' class='nav_a'>Versand & Verfügbarkeit</a></li><li><a href='/gp/subs/primeclub/signup/main.html/ref=footer_prime' class='nav_a'>Amazon Prime</a></li><li><a href='/gp/css/returns/homepage.html/ref=footer_hy_f_4' class='nav_a'>Rückgabe & Ersatz</a></li><li><a href='/gp/help/customer/display.html/ref=footer_disposal?ie=UTF8&amp;nodeId=201819410' class='nav_a'>Entsorgung von Elektro- & Elektronikaltgeräten</a></li><li><a href='/gp/digital/fiona/manage/ref=footer_myk' class='nav_a'>Meine Inhalte und Geräte</a></li><li><a href='/b/ref=footer_mobapp?ie=UTF8&amp;node=4951330031' class='nav_a'>Amazon App</a></li><li><a href='/gp/BIT/ref=footer_bit_v2_e0002?bitCampaignCode=e0002' class='nav_a'>Amazon Assistant</a></li><li class='nav_last'><a href='/gp/help/customer/display.html/ref=footer_gw_m_b_he?ie=UTF8&amp;nodeId=504874' class='nav_a'>Hilfe</a></li></ul></div></div></div><div class="nav-footer-line"></div>
   
<div class="navFooterLine navFooterLinkLine navFooterPadItemLine"><span><div class="navFooterLine navFooterLogoLine"><a href="/ref=footer_logo"><div class="nav-logo-base nav-sprite"></div></a></div>
</span><ul></ul><span class="icp-container-desktop"><div class="navFooterLine">











  









<style type="text/css">
  #icp-touch-link-language { display: none; }
</style>

<a href="/gp/customer-preferences/select-language/ref=footer_lang?ie=UTF8&preferencesReturnUrl=%2F" class="icp-button" id="icp-touch-link-language">
  <div class="icp-nav-globe-img-2 icp-button-globe-2"></div
  ><span class="icp-color-base">Deutsch</span
  ><span class="nav-arrow icp-up-down-arrow"></span
  ><span class="aok-hidden" style="display:none">Wählen Sie eine Sprache für Ihren Einkauf. </span>
</a>











<style type="text/css">
#icp-touch-link-country { display: none; }
</style>

  

<a href="/gp/navigation-country/select-country/ref=?ie=UTF8&preferencesReturnUrl=%2F" class="icp-button" id="icp-touch-link-country">
  <span class="icp-flag-3 icp-flag-3-de"></span
  ><span class="icp-color-base">Deutschland</span
  ><span class="aok-hidden" style="display:none">Wählen Sie ein Land/eine Region für Ihren Einkauf. </span>
</a>


</div>
</span><ul></ul></div>

<div class="navFooterLine navFooterLinkLine navFooterDescLine"><table class="navFooterMoreOnAmazon" cellspacing="0"><tr>
<td class="navFooterDescItem"><a href='https://music.amazon.de?ref=dm_aff_amz_de' class='nav_a'>Amazon Music<br/> <span class="navFooterDescText"> Streamen Sie Millionen<br/> von Songs</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='http://www.abebooks.de' class='nav_a'>AbeBooks<br/> <span class="navFooterDescText">Bücher, Kunst<br/> & Sammelobjekte</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='http://aws.amazon.com/de/?sc_channel=el&amp;sc_campaign=deamazonfooter&amp;sc_publisher=de_amazon&amp;sc_medium=footer&amp;sc_content=&amp;sc_category=AWS_cloud_computing&amp;TRK=EL_de_amazon_footer' class='nav_a'>Amazon Web Services<br/> <span class="navFooterDescText">Cloud Computing Dienste<br/> von Amazon</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='http://www.audible.de' class='nav_a'>Audible<br/> <span class="navFooterDescText">Hörbücher<br/> herunterladen</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='http://www.bookdepository.com/' class='nav_a'>Book Depository<br/> <span class="navFooterDescText">Bücher mit kostenfreier<br/> Lieferung weltweit</span></a></td>
</tr>
<tr><td>&nbsp;</td></tr>
<tr>
<td class="navFooterDescItem"><a href='http://www.imdb.de/' class='nav_a'>IMDb<br/> <span class="navFooterDescText">Filme, TV<br/> & Stars</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='http://kdp.amazon.de' class='nav_a'>Kindle Direct Publishing<br/> <span class="navFooterDescText">Ihr E-Book<br/> veröffentlichen</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='https://www.amazon.de/primenow/?ref=HOUD12C322_0_GlobalFooter' class='nav_a'>Prime Now<br/> <span class="navFooterDescText">1-Stunden-Lieferung<br/> Tausender Produkte
</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='http://www.shopbop.com/de/welcome' class='nav_a'>Shopbop<br/> <span class="navFooterDescText">Designer<br/> Modemarken</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='/b/ref=footer_wrhsdls?ie=UTF8&amp;node=3581963031' class='nav_a'>Warehouse Deals<br/> <span class="navFooterDescText">Reduzierte B-Ware</span></a></td>
</tr>
<tr><td>&nbsp;</td></tr>
<tr>
<td class="navFooterDescItem"><a href='https://www.souq.com?ref=footer_souq' class='nav_a'>Souq.com<br/> <span class="navFooterDescText">Online einkaufen im Nahen Osten </span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='http://www.zvab.com/index.do?ref=amazon&amp;utm_medium=referral&amp;utm_source=amazon.de' class='nav_a'>ZVAB<br/> <span class="navFooterDescText">Zentrales Verzeichnis<br/> Antiquarischer Bücher und mehr</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='/b/ref=nav_footer_business?ie=UTF8&amp;node=14154536031' class='nav_a'>Amazon Business<br/> <span class="navFooterDescText">Kauf auf Rechnung. PO-Nummern.<br/> Für Unternehmen.</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem"><a href='/amazonsecondchance/ref=footer_asc' class='nav_a'>Amazon Second Chance<br/> <span class="navFooterDescText">Geben Sie es weiter, tauschen Sie es ein,<br/> geben Sie ihm ein zweites Leben</span></a></td>
<td class="navFooterDescSpacer" style="width: 4%"></td>
<td class="navFooterDescItem">&nbsp;</td>
</tr>
</table></div>
   
<div class="navFooterLine navFooterLinkLine navFooterPadItemLine navFooterCopyright"><ul><li class='nav_first'><a href='/gp/help/customer/display.html/ref=footer_cou?ie=UTF8&amp;nodeId=201909000' class='nav_a'>Unsere AGB</a></li><li><a href='/gp/help/customer/display.html/ref=footer_privacy?ie=UTF8&amp;nodeId=201909010' class='nav_a'>Datenschutzerklärung</a></li><li><a href='/gp/help/customer/display.html/ref=footer_impressum?ie=UTF8&amp;nodeId=202024860' class='nav_a'>Impressum</a></li><li><a href='/gp/help/customer/display.html/ref=footer_cookies_notice?ie=UTF8&amp;nodeId=201890250' class='nav_a'>Hinweise zu Cookies</a></li><li class='nav_last'><a href='/gp/help/customer/display.html/ref=footer_Interest_Based_Ads_Notice?ie=UTF8&amp;nodeId=201909150' class='nav_a'>Hinweise zu interessenbasierter Werbung</a></li></ul><span>© 1998-2018, Amazon.com, Inc. oder Tochtergesellschaften</span><ul></ul></div>
</div><!-- whfh-6d/59NVQ4/YIhzYtZA7CZUdSxwZXlV1YAhbiRstWibQxtTpeHzDZD8/Zht1qn965 rid-S7Y7MCSM8BQQZXDKY4RQ -->
<div id="sis_pixel_r2" aria-hidden="true" style="height:1px; position: absolute; left: -1000000px; top: -1000000px;"></div><script>(function(a,b){a.attachEvent?a.attachEvent("onload",b):a.addEventListener&&a.addEventListener("load",b,!1)})(window,function(){setTimeout(function(){var el=document.getElementById("sis_pixel_r2");el&&(el.innerHTML='<iframe id="DAsis" src="//aax-eu.amazon-adsystem.com/s/iu3?d=amazon.de&slot=navFooter&a1=01011de74c445534ec931a3b5d0b3c250da26d1888348ac1bcf2305442c6ea5d3355&a2=01013341dab34071d377d77171a3ecbe11fc9e6abfb37247d72724774692d89c8cc4&old_oo=0&ts=1546375084209&s=AT9s-kY34PABru9aTkHIEjN5SO7Xr6HXKYz8WbxW7okB&cb=1546375084209" width="1" height="1" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>')},300)});</script><!-- footer tilu -->


<!-- sp:feature:amazon-pay-iframe -->
<div id='apaypx' aria-hidden='true' style='height:1px; position: absolute; left: -1000000px; top: -1000000px;'></div><script>(function(w,t){w.attachEvent?w.attachEvent('onload',t):w.addEventListener('load',t, !1)})(window,function(){setTimeout(function(){document.getElementById('apaypx').innerHTML='<iframe id=\\'apaypxframe\\' src=\\'https://coin-eu.amazonpay.com/rb?a1=01014b7224a0888c05314eec850538fbda1c4bab0257993e6167b6ccccbe3afa10d5&a2=0101d5ab5a0340f466c8c4bd0f15bd2245f19338ef77eedfd16a9d176a47d04c46b7&d=www.amazon.de\\' frameborder=0 width=0 height=0>'},300)});</script><!-- sp:end-feature:amazon-pay-iframe -->
<div id='be' style="display:none;visibility:hidden;"><form name='ue_backdetect' action="get"><input type="hidden" name='ue_back' value='1' /></form>


<script type="text/javascript">
window.ue_ibe = (window.ue_ibe || 0) + 1;
if (window.ue_ibe === 1) {

var ue_mbl=ue_csm.ue.exec(function(e,a){function l(f){b=f||{};a.AMZNPerformance=b;b.transition=b.transition||{};b.timing=b.timing||{};e.ue.exec(m,"csm-android-check")()&&b.tags instanceof Array&&(f=-1!=b.tags.indexOf("usesAppStartTime")||b.transition.type?!b.transition.type&&-1<b.tags.indexOf("usesAppStartTime")?"warm-start":void 0:"view-transition",f&&(b.transition.type=f));"reload"===c._nt&&e.ue_orct||"intrapage-transition"===c._nt?a.performance&&performance.timing&&performance.timing.navigationStart?
b.timing.transitionStart=a.performance.timing.navigationStart:delete b.timing.transitionStart:"undefined"===typeof c._nt&&a.performance&&performance.timing&&performance.timing.navigationStart&&a.history&&"function"===typeof a.History&&"object"===typeof a.history&&history.length&&1!=history.length&&(b.timing.transitionStart=a.performance.timing.navigationStart);f=b.transition;var d;d=c._nt?c._nt:void 0;f.subType=d;a.ue&&a.ue.tag&&a.ue.tag("has-AMZNPerformance");c.isl&&a.uex&&uex("at","csm-timing");
n()}function p(b){a.ue&&a.ue.count&&a.ue.count("csm-cordova-plugin-failed",1)}function m(){return a.webclient&&"function"===typeof a.webclient.getRealClickTime?a.cordova&&a.cordova.platformId&&"ios"==a.cordova.platformId?!1:!0:!1}function n(){try{P.register("AMZNPerformance",function(){return b})}catch(a){}}function h(){if(!b)return"";ue_mbl.cnt=null;for(var a=b.timing,d=b.transition,a=["mts",k(a.transitionStart),"mps",k(a.processStart),"mtt",d.type,"mtst",d.subType,"mtlt",d.launchType],d="",c=0;c<
a.length;c+=2){var e=a[c],g=a[c+1];"undefined"!==typeof g&&(d+="&"+e+"="+g)}return d}function k(a){if("undefined"!==typeof a&&"undefined"!==typeof g)return a-g}function q(a,c){b&&(g=c,b.timing.transitionStart=a,b.transition.type="view-transition",b.transition.subType="ajax-transition",b.transition.launchType="normal",ue_mbl.cnt=h)}var c=e.ue||{},g=e.ue_t0,b;if(a.P&&a.P.when&&a.P.register)return a.P.when("CSMPlugin").execute(function(a){a.buildAMZNPerformance&&a.buildAMZNPerformance({successCallback:l,
failCallback:p})}),{cnt:h,ajax:q}},"mobile-timing")(ue_csm,window);

(function(d){d._uess=function(){var a="";screen&&screen.width&&screen.height&&(a+="&sw="+screen.width+"&sh="+screen.height);var b=function(a){var b=document.documentElement["client"+a];return"CSS1Compat"===document.compatMode&&b||document.body["client"+a]||b},c=b("Width"),b=b("Height");c&&b&&(a+="&vw="+c+"&vh="+b);return a}})(ue_csm);

(function(a){var b=document.ue_backdetect;b&&b.ue_back&&a.ue&&(a.ue.bfini=b.ue_back.value);a.uet&&a.uet("be");a.onLdEnd&&(window.addEventListener?window.addEventListener("load",a.onLdEnd,!1):window.attachEvent&&window.attachEvent("onload",a.onLdEnd));a.ueh&&a.ueh(0,window,"load",a.onLd,1);a.ue&&a.ue.tag&&(a.ue_furl&&a.ue_furl.split?(b=a.ue_furl.split("."))&&b[0]&&a.ue.tag(b[0]):a.ue.tag("nofls"))})(ue_csm);
(function(g,h){function d(a,d){var b={};if(!e||!f)try{var c=h.sessionStorage;c?a&&("undefined"!==typeof d?c.setItem(a,d):b.val=c.getItem(a)):f=1}catch(g){e=1}e&&(b.e=1);return b}var b=g.ue||{},a="",f,e,c,a=d("csmtid");f?a="NA":a.e?a="ET":(a=a.val,a||(a=b.oid||"NI",d("csmtid",a)),c=d(b.oid),c.e||(c.val=c.val||0,d(b.oid,c.val+1)),b.ssw=d);b.tabid=a})(ue_csm,window);
ue_csm.ue.exec(function(e,f){var a=e.ue||{},b=a._wlo,d;if(a.ssw){d=a.ssw("CSM_previousURL").val;var c=f.location,b=b?b:c&&c.href?c.href.split("#")[0]:void 0;c=(b||"")===a.ssw("CSM_previousURL").val;!c&&b&&a.ssw("CSM_previousURL",b);d=c?"reload":d?"intrapage-transition":"first-view"}else d="unknown";a._nt=d},"NavTypeModule")(ue_csm,window);
ue_csm.ue.exec(function(c,a){function g(a){a.run(function(e){d.tag("csm-feature-"+a.name+":"+e);d.isl&&c.uex("at")})}if(a.addEventListener)for(var d=c.ue||{},f=[{name:"touch-enabled",run:function(b){var e=function(){a.removeEventListener("touchstart",c,!0);a.removeEventListener("mousemove",d,!0)},c=function(){b("true");e()},d=function(){b("false");e()};a.addEventListener("touchstart",c,!0);a.addEventListener("mousemove",d,!0)}}],b=0;b<f.length;b++)g(f[b])},"csm-features")(ue_csm,window);


(function(b,c){var a=c.images;a&&a.length&&b.ue.count("totalImages",a.length)})(ue_csm,document);
(function(b){function c(){var d=[];a.log&&a.log.isStub&&a.log.replay(function(a){e(d,a)});a.clog&&a.clog.isStub&&a.clog.replay(function(a){e(d,a)});d.length&&(a._flhs+=1,n(d),p(d))}function g(){a.log&&a.log.isStub&&(a.onflush&&a.onflush.replay&&a.onflush.replay(function(a){a[0]()}),a.onunload&&a.onunload.replay&&a.onunload.replay(function(a){a[0]()}),c())}function e(d,b){var c=b[1],f=b[0],e={};a._lpn[c]=(a._lpn[c]||0)+1;e[c]=f;d.push(e)}function n(b){q&&(a._lpn.csm=(a._lpn.csm||0)+1,b.push({csm:{k:"chk",
f:a._flhs,l:a._lpn,s:"inln"}}))}function p(a){if(h)a=k(a),b.navigator.sendBeacon(l,a);else{a=k(a);var c=new b[f];c.open("POST",l,!0);c.setRequestHeader&&c.setRequestHeader("Content-type","text/plain");c.send(a)}}function k(a){return JSON.stringify({rid:b.ue_id,sid:b.ue_sid,mid:b.ue_mid,mkt:b.ue_mkt,sn:b.ue_sn,reqs:a})}var f="XMLHttpRequest",q=1===b.ue_ddq,a=b.ue,r=b[f]&&"withCredentials"in new b[f],h=b.navigator&&b.navigator.sendBeacon,l="//"+b.ue_furl+"/1/batch/1/OE/",m=b.ue_fci_ft||5E3;a&&(r||h)&&
(a._flhs=a._flhs||0,a._lpn=a._lpn||{},a.attach&&(a.attach("beforeunload",g),a.attach("pagehide",g)),m&&b.setTimeout(c,m),a._ffci=c)})(window);


ue_csm.ue._rtn = 1;
(function(e,f){function h(a){a=a.split("?")[0]||a;a=a.replace("http://","").replace("https://","").replace("resource://","").replace("res://","").replace("undefined://","").replace("chrome://","").replace(/\\*/g,"").replace(/!/g,"").replace(/~/g,"");var b=a.split("/");a=a.substr(a.lastIndexOf("/")+1);b.splice(-1);b=b.map(function(a){c[a]||(c[a]=(k++).toString(36));return c[a]});b.push(a);return b.join("!")}function l(){return f.getEntriesByType("resource").filter(function(a){return d._rre(a)<d._ld}).sort(function(a,
b){return a.responseEnd-b.responseEnd}).splice(0,m).map(function(a){var b=[],c;for(c in a)g[c]&&a[c]&&b.push(g[c]+Math.max(a[c]|0,-1).toString(36));b.push("i"+a.initiatorType);(1==d._rtn&&d._afjs>n||2==d._rtn)&&b.push("n"+h(a.name));return b.join("_")}).join("*")}function p(){var a="pm",b;for(b in c)c.hasOwnProperty(b)&&(a+="*"+c[b]+"_"+b);return a}function q(){d.log({k:"rtiming",value:l()+"~"+p()},"csm")}if(f&&f.getEntriesByType&&Array.prototype.map&&Array.prototype.filter&&e.ue&&e.ue.log){var g=
{connectStart:"c",connectEnd:"C",domainLookupStart:"d",domainLookupEnd:"D",duration:"z",encodedBodySize:"e",decodedBodySize:"E",fetchStart:"f",redirectStart:"r",redirectEnd:"R",requestStart:"q",responseStart:"s",responseEnd:"S",startTime:"a",transferSize:"t"},d=e.ue,c={},k=1,n=20,m=200;d&&d._rre&&(d._art=function(){d._ld&&window.setTimeout(q,0)})}})(ue_csm||{},window.performance);


(function(c,d){var b=c.ue,a=d.navigator;b&&b.tag&&a&&(a=a.connection||a.mozConnection||a.webkitConnection)&&a.type&&b.tag("netInfo:"+a.type)})(ue_csm,window);


(function(c,d){function h(a,b){for(var c=[],d=0;d<a.length;d++){var e=a[d],f=b.encode(e);if(e[k]){var g=b.metaSep,e=e[k],l=b.metaPairSep,h=[],m=void 0;for(m in e)e.hasOwnProperty(m)&&h.push(m+"="+e[m]);e=h.join(l);f+=g+e}c.push(f)}return c.join(b.resourceSep)}function s(a){var b=a[k]=a[k]||{};b[t]||(b[t]=c.ue_mid);b[u]||(b[u]=c.ue_sid);b[f]||(b[f]=c.ue_id);b.csm=1;a="//"+c.ue_furl+"/1/"+a[v]+"/1/OP/"+a[w]+"/"+a[x]+"/"+h([a],y);if(n)try{n.call(d[p],a)}catch(g){c.ue.sbf=1,(new Image).src=a}else(new Image).src=
a}function q(){g&&g.isStub&&g.replay(function(a,b,c){a=a[0];b=a[k]=a[k]||{};b[f]=b[f]||c;s(a)});l.impression=s;g=null}if(!(1<c.ueinit)){var k="metadata",x="impressionType",v="foresterChannel",w="programGroup",t="marketplaceId",u="session",f="requestId",p="navigator",l=c.ue||{},n=d[p]&&d[p].sendBeacon,r=function(a,b,c,d){return{encode:d,resourceSep:a,metaSep:b,metaPairSep:c}},y=r("","?","&",function(a){return h(a.impressionData,z)}),z=r("/",":",",",function(a){return a.featureName+":"+h(a.resources,
A)}),A=r(",","@","|",function(a){return a.id}),g=l.impression;n?q():(l.attach("load",q),l.attach("beforeunload",q));try{d.P&&d.P.register&&d.P.register("impression-client",function(){})}catch(B){c.ueLogError(B,{logLevel:"WARN"})}}})(ue_csm,window);



var ue_pty = "Detail";

var ue_spty = "Kindle_HW";

var ue_pti = "B07C76F3P2";


var ue_adb = 4;
var ue_adb_rtla = 1;
ue_csm.ue.exec(function(w,a){function q(){if(d&&f){var a;a:{try{a=d.getItem(g);break a}catch(c){}a=void 0}if(a)return b=a,!0}return!1}function r(){b=h;k();if(f)try{d.setItem(g,b)}catch(a){}}function s(){b=1===a.ue_adb_chk?l:h;k();if(f)try{d.setItem(g,b)}catch(c){}}function m(){a.ue_adb_rtla&&c&&0<c.ec&&!1===n&&(c.elh=null,ueLogError({m:"Hit Info",fromOnError:1},{logLevel:"INFO",adb:b}),n=!0)}function k(){e.tag(b);e.isl&&a.uex&&uex("at",b);p&&p.updateCsmHit("adb",b);c&&0<c.ec?m():a.ue_adb_rtla&&c&&
(c.elh=m)}function t(){return b}if(a.ue_adb){a.ue_fadb=a.ue_fadb||10;var e=a.ue,h="adblk_yes",l="adblk_no",b="adblk_unk",d;a:{try{d=a.localStorage;break a}catch(x){}d=void 0}var g="csm:adb",c=a.ue_err,p=e.cookie,f=void 0!==a.localStorage,u=Math.random()>1-1/a.ue_fadb,n=!1,v=q();u||!v?e.uels("https://m.media-amazon.com/images/G/01/csm/showads.v2.js",{onerror:r,onload:s}):k();a.ue_isAdb=t;a.ue_isAdb.unk="adblk_unk";a.ue_isAdb.no=l;a.ue_isAdb.yes=h}},"adb")(document,window);




(function(c,l,m){function h(a){if(a)try{if(a.id)return"//*[@id='"+a.id+"']";var b,d=1,e;for(e=a.previousSibling;e;e=e.previousSibling)e.nodeName===a.nodeName&&(d+=1);b=d;var c=a.nodeName;1!==b&&(c+="["+b+"]");a.parentNode&&(c=h(a.parentNode)+"/"+c);return c}catch(f){return"DETACHED"}}function f(a){if(a&&a.getAttribute)return a.getAttribute(k)?a.getAttribute(k):f(a.parentElement)}var k="data-cel-widget",g=!1,d=[];(c.ue||{}).isBF=function(){try{var a=JSON.parse(localStorage["csm-bf"]||"[]"),b=0<=a.indexOf(c.ue_id);
a.unshift(c.ue_id);a=a.slice(0,20);localStorage["csm-bf"]=JSON.stringify(a);return b}catch(d){return!1}}();c.ue_utils={getXPath:h,getFirstAscendingWidget:function(a,b){c.ue_cel&&c.ue_fem?!0===g?b(f(a)):d.push({element:a,callback:b}):b()},notifyWidgetsLabeled:function(){if(!1===g){g=!0;for(var a=f,b=0;b<d.length;b++)if(d[b].hasOwnProperty("callback")&&d[b].hasOwnProperty("element")){var c=d[b].callback,e=d[b].element;"function"===typeof c&&"function"===typeof a&&c(a(e))}d=null}},extractStringValue:function(a){if("string"===
typeof a)return a}}})(ue_csm,window,document);


(function(a,g){a.ue_cel||(a.ue_cel=function(){function h(a,b){b?b.r=z:b={r:z,c:1};!ue_csm.ue_sclog&&b.clog&&e.clog?e.clog(a,b.ns||l,b):b.glog&&e.glog?e.glog(a,b.ns||l,b):e.log(a,b.ns||l,b)}function m(){var a=b.length;if(0<a){for(var g=[],c=0;c<a;c++){var f=b[c].api;f.ready()?(f.on({ts:e.d,ns:l}),d.push(b[c]),h({k:"mso",n:b[c].name,t:e.d()})):g.push(b[c])}b=g}}function c(){if(!c.executed){for(var a=0;a<d.length;a++)d[a].api.off&&d[a].api.off({ts:e.d,ns:l});n();h({k:"eod",t0:e.t0,t:e.d()},{c:1,il:1});
c.executed=1;for(a=0;a<d.length;a++)b.push(d[a]);d=[];clearTimeout(k);clearTimeout(v)}}function n(a){h({k:"hrt",t:e.d()},{c:1,il:1,n:a});f=Math.min(p,u*f);x()}function x(){clearTimeout(v);v=setTimeout(function(){n(!0)},f)}function s(){c.executed||n()}var u=1.5,p=g.ue_cel_max_hrt||3E4,b=[],d=[],l=a.ue_cel_ns||"cel",k,v,e=a.ue,t=a.uet,y=a.uex,z=e.rid,f=g.ue_cel_hrt_int||3E3,r=g.requestAnimationFrame||function(a){a()};if(e.isBF)h({k:"bft",t:e.d()});else{"function"==typeof t&&t("bb","csmCELLSframework",
{wb:1});setTimeout(m,0);e.onunload(c);if(e.onflush)e.onflush(s);k=setTimeout(c,6E5);x();"function"==typeof y&&y("ld","csmCELLSframework",{wb:1});return{registerModule:function(a,c){b.push({name:a,api:c});h({k:"mrg",n:a,t:e.d()});m()},reset:function(a){h({k:"rst",t0:e.t0,t:e.d()});b=b.concat(d);d=[];for(var g=b.length,f=0;f<g;f++)b[f].api.off(),b[f].api.reset();z=a||e.rid;m();clearTimeout(k);k=setTimeout(c,6E5);c.executed=0},timeout:function(a,b){return g.setTimeout(function(){r(function(){c.executed||
a()})},b)},log:h,off:c}}}())})(ue_csm,window);
(function(a,g,h){a.ue_pdm||!a.ue_cel||ue.isBF||(a.ue_pdm=function(){function m(){try{var b=window.screen;if(b){var c={w:b.width,aw:b.availWidth,h:b.height,ah:b.availHeight,cd:b.colorDepth,pd:b.pixelDepth};e&&e.w===c.w&&e.h===c.h&&e.aw===c.aw&&e.ah===c.ah&&e.pd===c.pd&&e.cd===c.cd||(e=c,e.t=k(),e.k="sci",r(e))}var g=h.body||{},f=h.documentElement||{},d={w:Math.max(g.scrollWidth||0,g.offsetWidth||0,f.clientWidth||0,f.scrollWidth||0,f.offsetWidth||0),h:Math.max(g.scrollHeight||0,g.offsetHeight||0,f.clientHeight||
0,f.scrollHeight||0,f.offsetHeight||0)};t&&t.w===d.w&&t.h===d.h||(t=d,t.t=k(),t.k="doi",r(t));l=a.ue_cel.timeout(m,v);z+=1}catch(p){window.ueLogError&&ueLogError(p,{attribution:"csm-cel-page-module",logLevel:"WARN"})}}function c(){p("ebl","default",!1)}function n(){p("efo","default",!0)}function x(){p("ebl","app",!1)}function s(){p("efo","app",!0)}function u(){g.setTimeout(function(){h[D]?p("ebl","pageviz",!1):p("efo","pageviz",!0)},0)}function p(a,b,c){y!==c&&r({k:a,t:k(),s:b},{ff:!0===c?0:1});y=
c}function b(){f.attach&&(w&&f.attach(q,u,h),A&&P.when("mash").execute(function(a){a&&a.addEventListener&&(a.addEventListener("appPause",x),a.addEventListener("appResume",s))}),f.attach("blur",c,g),f.attach("focus",n,g))}function d(){f.detach&&(w&&f.detach(q,u,h),A&&P.when("mash").execute(function(a){a&&a.removeEventListener&&(a.removeEventListener("appPause",x),a.removeEventListener("appResume",s))}),f.detach("blur",c,g),f.detach("focus",n,g))}var l,k,v,e,t,y=null,z=0,f=a.ue,r=a.ue_cel.log,B=a.uet,
E=a.uex,w=!!f.pageViz,q=w&&f.pageViz.event,D=w&&f.pageViz.propHid,A=g.P&&g.P.when;"function"==typeof B&&B("bb","csmCELLSpdm",{wb:1});return{on:function(a){v=a.timespan||500;k=a.ts;b();a=g.location;r({k:"pmd",o:a.origin,p:a.pathname,t:k()});m();"function"==typeof E&&E("ld","csmCELLSpdm",{wb:1})},off:function(a){clearTimeout(l);d();f.count&&f.count("cel.PDM.TotalExecutions",z)},ready:function(){return h.body&&a.ue_cel&&a.ue_cel.log},reset:function(){e=t=null}}}(),a.ue_cel&&a.ue_cel.registerModule("page module",
a.ue_pdm))})(ue_csm,window,document);
(function(a,g){a.ue_vpm||!a.ue_cel||ue.isBF||(a.ue_vpm=function(){function h(){var a=s(),b={w:g.innerWidth,h:g.innerHeight,x:g.pageXOffset,y:g.pageYOffset};c&&c.w==b.w&&c.h==b.h&&c.x==b.x&&c.y==b.y||(b.t=a,b.k="vpi",c=b,d(c,{clog:1}));n=0;u=s()-a;p+=1}function m(){n||(n=a.ue_cel.timeout(h,x))}var c,n,x,s,u=0,p=0,b=a.ue,d=a.ue_cel.log,l=a.uet,k=a.uex,v=b.attach,e=b.detach;"function"==typeof l&&l("bb","csmCELLSvpm",{wb:1});return{on:function(a){s=a.ts;x=a.timespan||100;h();v&&(v("scroll",m),v("resize",
m));"function"==typeof k&&k("ld","csmCELLSvpm",{wb:1})},off:function(a){clearTimeout(n);e&&(e("scroll",m),e("resize",m));b.count&&(b.count("cel.VPI.TotalExecutions",p),b.count("cel.VPI.TotalExecutionTime",u),b.count("cel.VPI.AverageExecutionTime",u/p))},ready:function(){return a.ue_cel&&a.ue_cel.log},reset:function(){c=void 0},getVpi:function(){return c}}}(),a.ue_cel&&a.ue_cel.registerModule("viewport module",a.ue_vpm))})(ue_csm,window);
(function(a,g,h){if(!a.ue_fem&&a.ue_cel&&a.ue_utils){var m=a.ue||{};!m.isBF&&!a.ue_fem&&h.querySelector&&g.getComputedStyle&&[].forEach&&(a.ue_fem=function(){function c(a,b){return a>b?3>a-b:3>b-a}function n(a,b){var f=g.pageXOffset,e=g.pageYOffset,d;a:{try{if(a){var h=a.getBoundingClientRect(),l,m=0===a.offsetWidth&&0===a.offsetHeight;c:{for(var k=a.parentNode,p=h.left||0,q=h.top||0,r=h.width||0,t=h.height||0;k&&k!==document.body;){var n;d:{try{if(k){var C=k.getBoundingClientRect();n={x:C.left||
0,y:C.top||0,w:C.width||0,h:C.height||0}}else n=void 0;break d}catch(v){}n=void 0}var s=window.getComputedStyle(k),u="hidden"===s.overflow,x=u||"hidden"===s.overflowX,y=u||"hidden"===s.overflowY,M=q+t-1<n.y+1||q+1>n.y+n.h-1;if((p+r-1<n.x+1||p+1>n.x+n.w-1)&&x||M&&y){l=!0;break c}k=k.parentNode}l=!1}d={x:h.left+f||0,y:h.top+e||0,w:h.width||0,h:h.height||0,d:(m||l)|0}}else d=void 0;break a}catch(N){}d=void 0}if(d&&!a.cel_b)a.cel_b=d,w({n:a.getAttribute(z),w:a.cel_b.w,h:a.cel_b.h,d:a.cel_b.d,x:a.cel_b.x,
y:a.cel_b.y,t:b,k:"ewi",cl:a.className},{clog:1});else{if(f=d)f=a.cel_b,e=d,f=e.d===f.d&&1===e.d?!1:!(c(f.x,e.x)&&c(f.y,e.y)&&c(f.w,e.w)&&c(f.h,e.h)&&f.d===e.d);f&&(a.cel_b=d,w({n:a.getAttribute(z),w:a.cel_b.w,h:a.cel_b.h,d:a.cel_b.d,x:a.cel_b.x,y:a.cel_b.y,t:b,k:"ewi"},{clog:1}))}}function x(b,e){var c;c=b.c?h.getElementsByClassName(b.c):b.id?[h.getElementById(b.id)]:h.querySelectorAll(b.s);b.w=[];for(var g=0;g<c.length;g++){var d=c[g];if(d){if(!d.getAttribute(z)){var k=d.getAttribute("cel_widget_id")||
(b.id_gen||E)(d,g)||d.id;d.setAttribute(z,k)}b.w.push(d);p(Q,d,e)}}!1===B&&(r++,r===f.length&&(B=!0,a.ue_utils.notifyWidgetsLabeled()))}function s(a,b){q.contains(a)||w({n:a.getAttribute(z),t:b,k:"ewd"},{clog:1})}function u(a){I.length&&ue_cel.timeout(function(){if(t){for(var b=R(),c=!1;R()-b<e&&!c;){for(c=S;0<c--&&0<I.length;){var f=I.shift();T[f.type](f.elem,f.time)}c=0===I.length}U++;u(a)}},0)}function p(a,b,c){I.push({type:a,elem:b,time:c})}function b(a,b){for(var c=0;c<f.length;c++)for(var e=
f[c].w||[],d=0;d<e.length;d++)p(a,e[d],b)}function d(){J||(J=a.ue_cel.timeout(function(){J=null;var c=y();b(W,c);for(var e=0;e<f.length;e++)p(X,f[e],c);0===f.length&&!1===B&&(B=!0,a.ue_utils.notifyWidgetsLabeled());u(c)},v))}function l(){J||O||(O=a.ue_cel.timeout(function(){O=null;var a=y();b(Q,a);u(a)},v))}function k(){return A&&F&&q&&q.contains&&q.getBoundingClientRect&&y}var v=50,e=4.5,t=!1,y,z="data-cel-widget",f=[],r=0,B=!1,E=function(){},w=a.ue_cel.log,q,D,A,F,G=g.MutationObserver||g.WebKitMutationObserver||
g.MozMutationObserver,M=!!G,H,C,N="DOMAttrModified",K="DOMNodeInserted",L="DOMNodeRemoved",O,J,I=[],U=0,S=null,W="removedWidget",X="updateWidgets",Q="processWidget",T,V=g.performance||{},R=V.now&&function(){return V.now()}||function(){return Date.now()};"function"==typeof uet&&uet("bb","csmCELLSfem",{wb:1});return{on:function(b){function c(){if(k()){T={removedWidget:s,updateWidgets:x,processWidget:n};if(M){var a={attributes:!0,subtree:!0};H=new G(l);C=new G(d);H.observe(q,a);C.observe(q,{childList:!0,
subtree:!0});C.observe(D,a)}else A.call(q,N,l),A.call(q,K,d),A.call(q,L,d),A.call(D,K,l),A.call(D,L,l);d()}}q=h.body;D=h.head;A=q.addEventListener;F=q.removeEventListener;y=b.ts;f=a.cel_widgets||[];S=b.bs||5;m.deffered?c():m.attach&&m.attach("load",c);"function"==typeof uex&&uex("ld","csmCELLSfem",{wb:1});t=!0},off:function(){k()&&(C&&(C.disconnect(),C=null),H&&(H.disconnect(),H=null),F.call(q,N,l),F.call(q,K,d),F.call(q,L,d),F.call(D,K,l),F.call(D,L,l));m.count&&m.count("cel.widgets.batchesProcessed",
U);t=!1},ready:function(){return a.ue_cel&&a.ue_cel.log},reset:function(){f=a.cel_widgets||[]}}}(),a.ue_cel&&a.ue_fem&&a.ue_cel.registerModule("features module",a.ue_fem))}})(ue_csm,window,document);
(function(a,g,h){!a.ue_mcm&&a.ue_cel&&a.ue_utils&&!a.ue.isBF&&(a.ue_mcm=function(){function m(a,c){var l=a.srcElement||a.target||{},k={k:n,w:(c||{}).ow||(g.body||{}).scrollWidth,h:(c||{}).oh||(g.body||{}).scrollHeight,t:(c||{}).ots||x(),x:a.pageX,y:a.pageY,p:p.getXPath(l),n:l.nodeName};h&&"function"===typeof h.now&&a.timeStamp&&(k.dt=(c||{}).odt||h.now()-a.timeStamp,k.dt=parseFloat(k.dt.toFixed(2)));a.button&&(k.b=a.button);l.href&&(k.r=p.extractStringValue(l.href));l.id&&(k.i=l.id);l.className&&
l.className.split&&(k.c=l.className.split(/\\s+/));u(k,{c:1})}function c(){switch(a.ue_mcimp){case 1:return"click";case 3:return"mousedown"}}var n="mcm",x,s=a.ue,u=a.ue_cel.log,p=a.ue_utils;return{on:function(b){x=b.ts;a.ue_cel_stub&&a.ue_cel_stub.replayModule(n,m);(event=c())?window.addEventListener&&window.addEventListener(event,m,!0):s.attach&&s.attach("click",m,g)},off:function(a){(event=c())?window.removeEventListener&&window.removeEventListener(event,m,!0):s.detach&&s.detach("click",m,g)},ready:function(){return a.ue_cel&&
a.ue_cel.log},reset:function(){}}}(),a.ue_cel&&a.ue_cel.registerModule("mouse click module",a.ue_mcm))})(ue_csm,document,window.performance);
(function(a,g){a.ue_mmm||!a.ue_cel||a.ue.isBF||(a.ue_mmm=function(h){function m(a,b){var c={x:a.pageX||a.x||0,y:a.pageY||a.y||0,t:p()};!b&&w&&(c.t-w.t<x||c.x==w.x&&c.y==w.y)||(w=c,r.push(c))}function c(){if(r.length){z=G.now();for(var a=0;a<r.length;a++){var b=r[a],c=a;q=r[E];D=b;var d=void 0;if(!(d=2>c)){d=void 0;a:if(r[c].t-r[c-1].t>n)d=0;else{for(d=E+1;d<c;d++){var g=q,h=D,k=r[d];A=(h.x-g.x)*(g.y-k.y)-(g.x-k.x)*(h.y-g.y);if(A*A/((h.x-g.x)*(h.x-g.x)+(h.y-g.y)*(h.y-g.y))>s){d=0;break a}}d=1}d=!d}(F=
d)?E=c-1:B.pop();B.push(b)}f=G.now()-z;v=Math.min(v,f);e=Math.max(e,f);t=(t*y+f)/(y+1);y+=1;l({k:u,e:B,min:Math.floor(1E3*v),max:Math.floor(1E3*e),avg:Math.floor(1E3*t)},{c:1});r=[];B=[];E=0}}var n=100,x=20,s=25,u="mmm1",p,b,d=a.ue,l=a.ue_cel.log,k,v=1E3,e=0,t=0,y=0,z,f,r=[],B=[],E=0,w,q,D,A,F,G=h&&h.now&&h||Date.now&&Date||{now:function(){return(new Date).getTime()}};return{on:function(a){p=a.ts;b=a.ns;d.attach&&d.attach("mousemove",m,g);k=setInterval(c,3E3)},off:function(a){b&&(w&&m(w,!0),c());
clearInterval(k);d.detach&&d.detach("mousemove",m,g)},ready:function(){return a.ue_cel&&a.ue_cel.log},reset:function(){r=[];B=[];E=0;w=null}}}(window.performance),a.ue_cel&&a.ue_cel.registerModule("mouse move module",a.ue_mmm))})(ue_csm,document);



ue_csm.ue.exec(function(b,c){var e=function(){},f=function(){return{send:function(b,d){if(d&&b){var a;if(c.XDomainRequest)a=new XDomainRequest,a.onerror=e,a.ontimeout=e,a.onprogress=e,a.onload=e,a.timeout=0;else if(c.XMLHttpRequest){if(a=new XMLHttpRequest,!("withCredentials"in a))throw"";}else a=void 0;if(!a)throw"";a.open("POST",b,!0);a.setRequestHeader&&a.setRequestHeader("Content-type","text/plain");a.send(d)}},isSupported:!0}}(),g=function(){return{send:function(c,d){if(c&&d)if(navigator.sendBeacon(c,
d))b.ue_sbuimp&&b.ue&&b.ue.ssw&&b.ue.ssw("eelsts","scs");else throw"";},isSupported:!!navigator.sendBeacon&&!(c.cordova&&c.cordova.platformId&&"ios"==c.cordova.platformId)}}();b.ue._ajx=f;b.ue._sBcn=g},"Transportation-clients")(ue_csm,window);
ue_csm.ue.exec(function(b,k){function A(){for(var a=0;a<arguments.length;a++){var d=arguments[a];try{var b;if(d.isSupported){var e=u.buildPayload(l,f);b=d.send(L,e)}else throw dummyException;return b}catch(c){}}B({m:"All supported clients failed",attribution:"CSMSushiClient_TRANSPORTATION_FAIL",f:"sushi-client.js",logLevel:"ERROR"},k.ue_err_chan||"jserr")}function m(){if(f.length){for(var a=0;a<n.length;a++)n[a]();A(c._sBcn||{},c._ajx||{});f=[];h={};l={};v=w=r=s=0}}function M(){var a=new Date,d=function(a){return 10>
a?"0"+a:a};return Date.prototype.toISOString?a.toISOString():a.getUTCFullYear()+"-"+d(a.getUTCMonth()+1)+"-"+d(a.getUTCDate())+"T"+d(a.getUTCHours())+":"+d(a.getUTCMinutes())+":"+d(a.getUTCSeconds())+"."+String((a.getUTCMilliseconds()/1E3).toFixed(3)).slice(2,5)+"Z"}function x(a){try{return JSON.stringify(a)}catch(d){}return null}function C(a,d,c,e){var q=!1;e=e||{};p++;p==D&&B({m:"Max number of Sushi Logs exceeded",f:"sushi-client.js",logLevel:"ERROR",attribution:"CSMSushiClient_MAX_CALLS"},k.ue_err_chan||
"jserr");var g;if(g=!(p>=D))(g=a&&-1<a.constructor.toString().indexOf("Object")&&d&&-1<d.constructor.toString().indexOf("String")&&c&&-1<c.constructor.toString().indexOf("String"))||N++;g&&(a.producerId=a.producerId||d,a.schemaId=a.schemaId||c,a.timestamp=M(),d=Date.now?Date.now():+new Date,a.messageId=b.ue_id+"-"+d+"-"+p,e&&!e.ssd&&(a.sessionId=a.sessionId||b.ue_sid,a.requestId=a.requestId||b.ue_id,a.obfuscatedMarketplaceId=a.obfuscatedMarketplaceId||b.ue_mid),(d=x(a))?(d=d.length,(f.length==O||
r+d>P)&&m(),r+=d,a={data:u.compressEvent(a)},f.push(a),(e||{}).n?0===E?m():v||(v=k.setTimeout(m,E)):w||(w=k.setTimeout(m,Q)),q=!0):q=!1);!q&&b.ue_int&&console.error("Invalid JS Nexus API call");return q}function F(){if(!G){for(var a=0;a<y.length;a++)y[a]();for(a=0;a<n.length;a++)n[a]();f.length&&(b.ue_sbuimp&&b.ue&&b.ue.ssw&&(a=x({dct:l,evt:f}),b.ue.ssw("eeldata",a),b.ue.ssw("eelsts","unk")),A(c._sBcn||{}));G=!0}}function H(a){y.push(a)}function I(a){n.push(a)}var D=1E3,O=499,P=524288,t=function(){},
c=b.ue||{},B=c.log||t,R=b.uex||t;(b.uet||t)("bb","ue_sushi_v1",{wb:1});var L=b.ue_surl||"https://unagi-na.amazon.com/1/events/com.amazon.csm.nexusclient.gamma",S=["messageId","timestamp"],f=[],h={},l={},r=0,s=0,N=0,p=0,z=0,J=1,K=2,y=[],n=[],G=!1,v,w,E=void 0===b.ue_hpsi?1E3:b.ue_hpsi,Q=void 0===b.ue_lpsi?1E4:b.ue_lpsi,u=function(){function a(a){h[a]="#"+s++;l[h[a]]=a;return h[a]}function d(a){if(a)switch(typeof a){case "number":return!(isNaN(a)||Infinity===a)&&a.toString().length>("#"+s).length;case "boolean":break;
case "string":return a.length>("#"+s).length;default:return!0}return!1}function b(e){if(d(e)){var c=z;e instanceof Array?c=K:e instanceof Function?c=z:e instanceof Object&&(c=J);switch(c){case z:e=h[e]?h[e]:a(e);break;case K:var g=e;e=[];for(var c=g.length,f=0;f<c;f++)e[f]=b(g[f]);break;case J:c={};for(g in e)e.hasOwnProperty(g)&&(c[h[g]?h[g]:a(g)]=-1==S.indexOf(g)?b(e[g]):e[g]);e=c}}return e}return{compressEvent:b,buildPayload:function(){return x({cs:{dct:l},events:f})}}}();(function(){if(c.event&&
c.event.isStub){if(b.ue_sbuimp&&b.ue&&b.ue.ssw){var a=b.ue.ssw("eelsts").val;if(a&&"unk"===a&&(a=b.ue.ssw("eeldata").val)){var d;a:{try{d=JSON.parse(a);break a}catch(h){}d=null}d&&d.evt instanceof Array&&d.dct instanceof Object&&(f=d.evt,l=d.dct,f&&l&&(m(),b.ue.ssw("eeldata","{}"),b.ue.ssw("eelsts","scs")))}}c.event.replay(function(a){a[3]=a[3]||{};a[3].n=1;C.apply(this,a)});c.onSushiUnload.replay(function(a){H(a[0])});c.onSushiFlush.replay(function(a){I(a[0])})}})();c.attach("beforeunload",F);c.attach("pagehide",
F);c._cmps=u;c.event=C;c.event.reset=function(){p=0};c.onSushiUnload=H;c.onSushiFlush=I;try{k.P&&k.P.register&&k.P.register("sushi-client",t)}catch(T){b.ueLogError(T,{logLevel:"WARN"})}R("ld","ue_sushi_v1",{wb:1})},"Nxs-JS-Client")(ue_csm,window);


ue_csm.ue_unrt = 750;
(function(d,b,t){function u(a,b){var c=a.srcElement||a.target||{},e={k:w,t:b.t,dt:b.dt,x:a.pageX,y:a.pageY,p:f.getXPath(c),n:c.nodeName};a.button&&(e.b=a.button);c.type&&(e.ty=c.type);c.href&&(e.r=f.extractStringValue(c.href));c.id&&(e.i=c.id);c.className&&c.className.split&&(e.c=c.className.split(/\\s+/));g+=1;f.getFirstAscendingWidget(c,function(a){e.wd=a;d.ue.log(e,r)})}function x(a){if(!y(a.srcElement||a.target)){k+=1;n=!0;var v=h=d.ue.d(),c;p&&"function"===typeof p.now&&a.timeStamp&&(c=p.now()-
a.timeStamp,c=parseFloat(c.toFixed(2)));s=b.setTimeout(function(){u(a,{t:v,dt:c})},z)}}function A(a){if(a){var b=a.filter(B);a.length!==b.length&&(q=!0,l=d.ue.d(),n&&q&&(l&&h&&d.ue.log({k:C,t:h,m:Math.abs(l-h)},r),m(),q=!1,l=0))}}function B(a){if(!a)return!1;var b="characterData"===a.type?a.target.parentElement:a.target;if(!b||!b.hasAttributes||!b.attributes)return!1;var c={"class":["gw-clock","gw-clock-aria","s-item-container-height-auto","feed-carousel"],id:["dealClock","deal_expiry_timer","timer"],
role:["timer"]},e=!1;Object.keys(c).forEach(function(a){var d=b.attributes[a]?b.attributes[a].value:"";(c[a]||"").forEach(function(a){-1!==d.indexOf(a)&&(e=!0)})});return e}function y(a){if(!a)return!1;var b=(f.extractStringValue(a.nodeName)||"").toLowerCase(),c=(f.extractStringValue(a.type)||"").toLowerCase(),d=(f.extractStringValue(a.href)||"").toLowerCase();a=(f.extractStringValue(a.id)||"").toLowerCase();var g="checkbox color date datetime-local email file month number password radio range reset search tel text time url week".split(" ");
if(-1!==["select","textarea","html"].indexOf(b)||"input"===b&&-1!==g.indexOf(c)||"a"===b&&-1!==d.indexOf("http")||-1!==["sitbreaderrightpageturner","sitbreaderleftpageturner","sitbreaderpagecontainer"].indexOf(a))return!0}function m(){n=!1;h=0;b.clearTimeout(s)}function D(){b.ue.onSushiUnload(function(){ue.event({violationType:"unresponsive-clicks",violationCount:g,totalScanned:k},"csm","csm.ArmoredCXGuardrailsViolation.3")});b.ue.onunload(function(){ue.count("armored-cxguardrails.unresponsive-clicks.violations",
g);ue.count("armored-cxguardrails.unresponsive-clicks.violationRate",g/k*100||0)})}if(b.MutationObserver&&b.addEventListener&&Object.keys&&d&&d.ue&&d.ue.log&&d.ue_unrt&&d.ue_utils){var z=d.ue_unrt,r="cel",w="unr_mcm",C="res_mcm",p=b.performance,f=d.ue_utils,n=!1,h=0,s=0,q=!1,l=0,g=0,k=0;b.addEventListener&&(b.addEventListener("mousedown",x,!0),b.addEventListener("beforeunload",m,!0),b.addEventListener("visibilitychange",m,!0),b.addEventListener("pagehide",m,!0));b.ue&&b.ue.event&&b.ue.onSushiUnload&&
b.ue.onunload&&D();(new MutationObserver(A)).observe(t,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}})(ue_csm,window,document);


ue_csm.ue.exec(function(g,e){if(e.ue_err){var f="";e.ue_err.errorHandlers||(e.ue_err.errorHandlers=[]);e.ue_err.errorHandlers.push({name:"fctx",handler:function(a){if(!a.logLevel||"FATAL"===a.logLevel)if(f=g.getElementsByTagName("html")[0].innerHTML){var b=f.indexOf("var ue_t0=ue_t0||+new Date();");if(-1!=b){var b=f.substr(0,b).split("\\n"),d=Math.max(b.length-5-1,0),b=b.slice(d,b.length-1);a.fcsmln=b.length+1;a.cinfo=a.cinfo||{};for(var c=0;c<b.length;c++)a.cinfo[d+c+1+""]=b[c]}b=f.split("\\n");a.cinfo=
a.cinfo||{};if(!(a.f||void 0===a.l||a.l in a.cinfo))for(c=+a.l-1,d=Math.max(c-2,0),c=Math.min(c+2,b.length-1);d<=c;d++)a.cinfo[d+1+""]=b[d]}}})}},"fatals-context")(document,window);


ue_csm.ue_dst = 3;
(function(s,b){function n(b){return-1===b.indexOf("amazon.com")&&-1===b.indexOf("amazon-adsystem.com")&&-1===b.indexOf("cloudfront-labs.amazonaws.com")}function h(t){function h(a){if(b.unescape){a=btoa(unescape(encodeURIComponent(a)));for(var d="",f=0;f<a.length;f++)d="+"===a[f]?d+"-":"/"===a[f]?d+".":"="===a[f]?d+"_":d+a[f];return d}}function k(a){a&&"string"===typeof a&&(a=(a=a.match(/^(?:https?:)?\\/\\/(.*?)(\\/|$)/i))&&1<a.length?a[1]:null,a&&a&&("number"===typeof e[a]?e[a]++:(e[a]=1,p&&b.ue&&b.ue.tag&&
b.btoa&&n(a)&&(ue.tag("EXT_"+h(a)),q=!0))))}function c(a){var d=10,f=+new Date;a&&a.timeRemaining?d=a.timeRemaining():a={timeRemaining:function(){return Math.max(0,d-(+new Date-f))}};for(var c=b.performance.getEntries(),e=d;g<c.length&&e>u;)c[g].name&&k(c[g].name),g++,e=a.timeRemaining();g>=c.length?l(!0):r()}function l(a){if(!a){a=s.scripts;var d;if(a)for(var c=0;c<a.length;c++)(d=a[c].getAttribute("src"))&&"undefined"!==d&&k(d)}0<Object.keys(e).length&&(p?q&&b.uex&&b.ue&&b.ue.isl&&uex("at"):ue_csm.ue.log({k:"domainscanner",
value:e},"csm"),b.ue_ext=e)}function r(){!0===t?c():b.requestIdleCallback?b.requestIdleCallback(c):b.requestAnimationFrame?b.requestAnimationFrame(c):b.setTimeout(c,100)}function m(){if(b.performance&&b.performance.getEntries){var a=b.performance.getEntries();!a||0>=a.length?l(!1):r()}else l(!1)}var p=3<=b.ue_dst,q=!1,e=b.ue_ext||{};b.ue_ext||m();return e}var m=4===b.ue_dst,u=1,g=0;b.ue_err&&m&&(b.ue_err.errorHandlers||(b.ue_err.errorHandlers=[]),b.ue_err.errorHandlers.push({name:"ext",handler:function(b){if(!b.logLevel||
"FATAL"===b.logLevel){var g=h(!0),k=[],c;for(c in g)n(c)&&k.push(c);b.ext=k}}}));b.ue&&b.ue.isl?h():b.ue&&ue.attach&&ue.attach("load",h)})(document,window);





}
/* ◬ */
</script>

</div>

<noscript>
    <img height="1" width="1" style='display:none;visibility:hidden;' src='//fls-eu.amazon.de/1/batch/1/OP/A1PA6795UKMFR9:262-9898842-9713804:S7Y7MCSM8BQQZXDKY4RQ$uedata=s:%2Fgp%2Fuedata%3Fnoscript%26id%3DS7Y7MCSM8BQQZXDKY4RQ:0' alt=""/>
</noscript>
</div></body></html>
<!--       _
       .__(.)< (MEOW)
        \\___)   
 ~~~~~~~~~~~~~~~~~~-->
<!-- sp:eh:EGELj0SVib5if9yj9JCBMG0QebpseGnKpEFwBQyuU45V4vftpMDJSPpMY52c0Na2+V/WGJ6WDRnwWkKfbzpBU39kfgZdHzAjkvKOeZZwR+8oTukc -->
`,
};
