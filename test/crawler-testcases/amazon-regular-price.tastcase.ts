/* eslint-disable */

import { AmazonCrawler } from '../../src/crawler/crawlers/amazon.crawler';

export const amazonRegularPriceTaseCase = {
  crawlerType: AmazonCrawler,
  sizes: [
    { id: 'ONESIZE', isAvailable: true, name: 'ONESIZE' },
  ],

  sizeChecks: [
    { size: 'ONESIZE', isAvailable: true, isLowInStock: false },
  ],

  name: 'WINOMO Kleiderhaken Klappbar Wand-Kleiderständer',

  priceChecks: [
    { size: 'ONESIZE', price: 14.99 },
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


var ue_id = 'VBWKFM73Q96291SQHAHK',
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
    ue_fpf = '//fls-eu.amazon.de/1/batch/1/OP/A1PA6795UKMFR9:262-9898842-9713804:VBWKFM73Q96291SQHAHK$uedata=s:',
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

<!-- 2tlbk4gdsxhvm --><!-- sp:feature:aui-assets -->
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
<link rel="stylesheet" href="https://images-eu.ssl-images-amazon.com/images/I/61PjJ8BEqZL._RC|21s3uGMg2HL.css,11UGK4+GCNL.css,21GzlFOlcvL.css,01N8OOpUZPL.css,11xRy3bSkOL.css,01QUs5FVXoL.css,016ZWeUMVEL.css,41vOQb1k0LL.css,01GT2VH57dL.css,01xHpyZh3cL.css,01rgQ3jqo7L.css,217iPYr7ivL.css,31e6R41SWLL.css,11X8K4AolpL.css,21PjfsP9YvL.css,21P0GvY6M5L.css,31+23kj581L.css_.css?AUIClients/HardlinesDetailPageMetaAssetFixed#desktop.de.179455-T1.135295-T1.136850-T1.172402-T1.131900-T1.94145-T1.108310-T1" />
<link rel="stylesheet" href="https://images-eu.ssl-images-amazon.com/images/I/21c4cPN57WL._RC|31BMnmV4vQL.css,01ekIXTj5kL.css,21rTx+UpnSL.css,01TCV-xmeZL.css,01CCLEN08lL.css,11-NICrYbjL.css,4140ENzg0ZL.css,01FlII1u-ZL.css,21kmtf4iiPL.css,21thLxrpr2L.css,31MkQHV3gaL.css,314gb2LkLML.css,319AZbleERL.css,014Z+MbaRaL.css,01RRH0yFa4L.css,01bkkYjxP7L.css,31X-Ol7PuGL.css,01f31VNCowL.css,01NW8VTUeVL.css,019M+d36JfL.css,01JOvs9kD8L.css,21m-8SmjJSL.css,31Fo-RK+JML.css,01QwYm0bA4L.css,11Z7S+lK47L.css,21fmybezPeL.css,01kwuiPOKIL.css,41zdtmMdfyL.css,01kymrLkG9L.css,11HpMnwXTxL.css,01TZ9fpDSSL.css,11ikU6MX1JL.css,01vF6gFybxL.css,01AVrRnt6XL.css_.css?AUIClients/HardlinesDetailPageMetaAssetVariable_TURBO_DESKTOP#desktop.de.not-trident.141052-T1.122952-T1.159929-T1.113788-C.114039-C.103061-T1.174137-T1" />


<script>
(function(d,b,m){function c(a){return"--private-amznjqshim-"+a}function e(a,l){var b=c(l);d.now(b).execute(c(a+"-"+b)+"-"+f++,function(a){void 0===a&&d.declare(b,!0)})}function h(a){e("markRequested","functionality-requested:"+a)}function g(a){e("completedStage","stage-"+a)}b.goN2Debug||(b.goN2Debug={info:function(){}});"use strict";var f=0,k=b.amznJQ=new function(){this.addLogical=this.addStyle=this.addStyles=this.PLNow=this.windowOnLoad=function(){};this.declareAvailable=function(a){e("declaring",
a)};this.available=function(a,b){a=c(a);h(a);d.when(a,c("jQuery")).execute(c("available-"+a)+"-"+f++,b)};this.onReady=function(a,b){a=c(a);h(a);d.when(a,"a-domready",c("jQuery")).execute(c("onReady-"+a)+"-"+f++,b)};this.onCompletion=function(a,b){var e=c("stage-"+a);d.when(e,c("jQuery")).execute(b)};this.completedStage=function(a){g(a)};this.addPL=function(a){d.when("a-preload").execute(c("Preloader")+"-"+f++,function(b){b.preload(a)})};this.strings={};this.chars={}};d.when("load").execute(c("fail-safe-stages"),
function(){g("amznJQ.theFold");g("amznJQ.criticalFeature")});d.when("jQuery").execute("define amznJQ jQuery",function(a){b.jQuery||(b.jQuery=a);k.jQuery||(k.jQuery=a);e("declaring","jQuery")})})(window.P||window.AmazonUIPageJS,window,document);
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('atf').execute(function(){
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/41o6JYGJZKL.js?AUIClients/AmazonPopoversAUIShim#de');
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/311EquJBNjL._RC|31gnJjWvxPL.js,317N9f2eGzL.js,21u1PnPEsML.js,318rs4piGPL.js,11ISJZDdTuL.js,11ZdiaYG8gL.js,01jEqq6I0UL.js,013NxCyC-FL.js,61863AsnrmL.js,01X5C8pWB1L.js,01LHJt5PiyL.js,11B9yJN+bnL.js,21TkG9gShCL.js,0193uyIciNL.js,41D4kRuiy9L.js,31ad06VRAqL.js,11e9-8uUHQL.js,01s9HEfbt3L.js,11iHZuQapKL.js,015TRQC5i+L.js,01JzE3-DfLL.js,61iXRFOTloL.js,01I+ls4AqQL.js_.js?AUIClients/HardlinesDetailPageMetaAssetFixed#desktop.de.172469-T1.155915-T1.151985-T1.136850-T1.114779-T1.120067-T1.131900-T1.184660-C.162909-C.108310-T1');
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/21e71NrLt3L._RC|11Ze1YhMgJL.js,21Wa0ZZVAmL.js,21DhhQMus3L.js,51CysS8km3L.js,0185ITV0M6L.js,41GKHkSvCpL.js,01Gx8DhrplL.js,011qZnP-NfL.js,81PLIDzaAXL.js,41UXUgXh7tL.js,11nOzlnr6+L.js,31bQ6uPDcgL.js,312xLUEw6sL.js,31UjTApGOPL.js,31Ac-cQ+ZWL.js,21NDIsf0a1L.js,11WBo+4152L.js,11MQqFPEK+L.js,01jqyAujTwL.js,31+0pACITzL.js,61e7xszHEhL.js,11jf5oS-4FL.js,01RQtSMdG+L.js,01OtvpwikQL.js,21lFKGGVoFL.js,51PoAUrfVvL.js,21Ey4WmbBgL.js,41KQdFQbaLL.js,01qXU4-2A0L.js,31x4J+UDzzL.js,01lcH4zcTaL.js,01qPwv8D5hL.js,210mdW2-ZEL.js,21mymEONFtL.js,61+TkNaM7yL.js,515EXqsrGfL.js,21OJDARBhQL.js,41s+OBPxTPL.js,01IWUb29Q4L.js,01y-5aCXJyL.js,01rg6Ce9FhL.js,016QFWAAdML.js,41dzl0sSZuL.js,31Wep-ax8qL.js,11div+n5b+L.js,51ldtX6xp6L.js,21w43LSQ1-L.js,01t+VeQ6oSL.js_.js?AUIClients/HardlinesDetailPageMetaAssetVariable_TURBO_DESKTOP#desktop.language-de.de.164772-T1.141052-T1.159929-T1.167162-T1.111960-T1.146883-T1.173943-T1.103061-T1.153197-T1.131900-T1.184660-C.162909-C.179985-T1.87784-T1.107686-T1.143147-T1.147957-T1.154031-T1.171818-T1');
});
</script>















 




        <script type="a-state" data-a-state="{&quot;key&quot;:&quot;metrics-schema&quot;}">{"widgetSchema":"dp:widget:","dimensionSchema":"dp:dims:"}</script>

    








  


















 
 
 













      









        


































    
    
    
    





        

  


    












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

#dp-c2c-phone-icon {
  background-image:url(https://images-eu.ssl-images-amazon.com/images/G/03/electronics/click2call/sprite-click2call._CB135147448_.png);
  background-repeat:no-repeat;
  background-position: 0px 0px;
  width:36px;
  height:35px;
  float:left;
  margin-right:0.5em;
}   
#detailpage-click2call-table {
  padding: 5px 0;
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
</script>





<script language="Javascript1.1" type="text/javascript">
<!--
function amz_js_PopWin(url,name,options){
  var ContextWindow = window.open(url,name,options);
  ContextWindow.focus();
  return false;
}
//-->
</script>


        
        
    
    
        
            
            
        
        
        
            
        









<meta http-equiv="content-type" content="text/html; charset=iso-8859-15" />




<link rel="canonical" href="https://www.amazon.de/WINOMO-Kleiderhaken-Klappbar-Wand-Kleiderst%C3%A4nder/dp/B01DQDZVCO" />
<meta name="description" content="Amazon.de: Küchen- und Haushaltsartikel online - WINOMO Kleiderhaken Klappbar Wand-Kleiderständer. &lt;br&gt; &lt;br&gt; Jeder Haushalt braucht mehr Platz, um Kleidung von Zeit zu Zeit zu hängen.." />
<meta name="title" content="WINOMO Kleiderhaken Klappbar Wand-Kleiderst&auml;nder: Amazon.de: K&uuml;che &amp; Haushalt" />

<meta name="keywords" content="kleiderhaken" />
<title>WINOMO Kleiderhaken Klappbar Wand-Kleiderst&auml;nder: Amazon.de: K&uuml;che &amp; Haushalt</title>







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
    <div id="navSwmHoliday" style="background-image: url(https://images-eu.ssl-images-amazon.com/images/G/03/digital/video/AIV/SWMTest/SWM_400x39_new_style_playbutton_ENG_2._CB487477782_.jpg); width: 400px; height: 39px; overflow: hidden;position: relative;"><img alt='AIV' src='https://images-eu.ssl-images-amazon.com/images/G/03/x-locale/common/transparent-pixel._CB386942701_.gif' border='0' width='400px' height='39px' usemap='#nav-swm-holiday-map' /></div><div style="display: none;"><map id="nav-swm-holiday-map" name="nav-swm-holiday-map"><area shape="rect" coords="1,2,400,39" href ="/Prime-Video/b/ref=nav_swm_dvm_de_pv_en_t_011?ie=UTF8&node=3279204031&pf_rd_p=b399842b-e383-4e6d-9303-3a5b2b3c7264&pf_rd_s=nav-sitewide-msg&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A3JWKAKR8XB7XF&pf_rd_r=VBWKFM73Q96291SQHAHK&pf_rd_r=VBWKFM73Q96291SQHAHK&pf_rd_p=b399842b-e383-4e6d-9303-3a5b2b3c7264" alt ="AIV" /></map></div>
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
  <span class="nav-search-label">Küche, Haushalt & Wohnen</span>
  <i class="nav-icon"></i>
</div>

  <span id='searchDropdownDescription' style='display:none'>Wählen Sie die Abteilung aus, in der Sie suchen möchten. </span>

<select aria-describedby='searchDropdownDescription' class='nav-search-dropdown searchSelect' data-nav-digest='g4oT5XcQjvTSIqhUq+rGqD1+PRk' data-nav-selected='33' id='searchDropdownBox' name='url' style='display:block' tabindex='8' title='Suchen in'>
<option value='search-alias=aps'>Alle Kategorien</option>
<option value='search-alias=alexa-skills'>Alexa Skills</option>
<option value='search-alias=amazonfresh'>Amazon Fresh</option>
<option value='search-alias=amazon-devices'>Amazon Geräte</option>
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
<option current='parent' selected='selected' value='search-alias=kitchen'>Küche, Haushalt & Wohnen</option>
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
          value="kleiderhaken"
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
        
        
        <div id='nav-global-location-slot'><span class='a-declarative' data-a-modal='{&quot;width&quot;:375,&quot;closeButton&quot;:&quot;false&quot;,&quot;popoverLabel&quot;:&quot;W&auml;hlen Sie Ihren Standort&quot;,&quot;name&quot;:&quot;glow-modal&quot;,&quot;url&quot;:&quot;/gp/glow/get-address-selections.html?selectedLocationType=ADDRESS_ID&amp;selectedLocationValue=V2RIRZZYNQ6HVXF6X4IUG13SSDO73TKY69A96YKT37ODSSGPXTQ2EQA2OXGXX65K&amp;deviceType=desktop&amp;pageType=Detail&amp;storeContext=kitchen&quot;,&quot;footer&quot;:&quot;&lt;span class=\\&quot;a-declarative\\&quot; data-action=\\&quot;a-popover-close\\&quot; data-a-popover-close=\\&quot;{}\\&quot;&gt;&lt;span class=\\&quot;a-button a-button-primary\\&quot;&gt;&lt;span class=\\&quot;a-button-inner\\&quot;&gt;&lt;button name=\\&quot;glowDoneButton\\&quot; class=\\&quot;a-button-text\\&quot; type=\\&quot;button\\&quot;&gt;Fertig&lt;/button&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&quot;,&quot;header&quot;:&quot;W&auml;hlen Sie Ihren Standort&quot;}' data-action='a-modal'><a class='nav-a nav-a-2 a-popover-trigger a-declarative' tabindex='18'><div class='nav-sprite' id='nav-packard-glow-loc-icon'></div><div id='glow-ingress-block'><span class='nav-line-1' id='glow-ingress-line1'>Lieferung an Kim</span><span class='nav-line-2' id='glow-ingress-line2'>12159&zwnj; Berlin</span></div></a></span><input data-addnewaddress='add-new' id='unifiedLocation1ClickAddress' name='dropdown-selection' type='hidden' value='kkphpontplp'></input><input data-addnewaddress='add-new' id='ubbShipTo' name='dropdown-selection-ubb' type='hidden' value='kkphpontplp'></input></div>
        
        
        
        
        
        
        
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
<div id='nav-subnav' class="" data-category="kitchen" data-digest="grFMVLiTr4/QeM6Nc5pthtt//bg=">
  <a href="/k%C3%BCche-haushalt-wohnen/b/?ie=UTF8&node=3167641&ref_=topnav_storetab_h_k" class="nav-a nav-b" >
    <span class="nav-a-content">
      Küche, Haushalt & Wohnen
      
    </span>
  </a>
  <a href="/Restposten-K%C3%BCche/b/?ie=UTF8&node=677821011&ref_=sv_h_k_1" class="nav-a" >
    <span class="nav-a-content">
      Angebote
      
    </span>
  </a>
  <a href="/Espressomaschinen-Kaffeemaschine/b/?ie=UTF8&node=3310781&ref_=sv_h_k_2" class="nav-a nav-hasArrow" data-nav-flyout-full-width="1" data-nav-key="ab:home-subnav-flyout-content-1,home-subnav-flyout-promo-1:generic-subnav-flyout" data-handler="generic-subnav-flyout" data-slots="home-subnav-flyout-content-1,home-subnav-flyout-promo-1">
    <span class="nav-a-content">
      Kaffee & Espresso
      
    </span>
    <span class="nav-arrow"></span>
  </a>
  <a href="/Staubsauger-Fussbodenpflege/b/?ie=UTF8&node=3597086031&ref_=sv_h_k_3" class="nav-a nav-hasArrow" data-nav-flyout-full-width="1" data-nav-key="ab:home-subnav-flyout-content-2,home-subnav-flyout-promo-2:generic-subnav-flyout" data-handler="generic-subnav-flyout" data-slots="home-subnav-flyout-content-2,home-subnav-flyout-promo-2">
    <span class="nav-a-content">
      Staubsaugen
      
    </span>
    <span class="nav-arrow"></span>
  </a>
  <a href="/Haushaltsger%C3%A4te-Hausger%C3%A4te/b/?ie=UTF8&node=908823031&ref_=sv_h_k_4" class="nav-a nav-hasArrow" data-nav-flyout-full-width="1" data-nav-key="ab:home-subnav-flyout-content-4,home-subnav-flyout-promo-4:generic-subnav-flyout" data-handler="generic-subnav-flyout" data-slots="home-subnav-flyout-content-4,home-subnav-flyout-promo-4">
    <span class="nav-a-content">
      Großgeräte

      
    </span>
    <span class="nav-arrow"></span>
  </a>
  <a href="/Elektrische-Kuechengeraete/b/?ie=UTF8&node=3169321&ref_=sv_h_k_5" class="nav-a nav-hasArrow" data-nav-flyout-full-width="1" data-nav-key="ab:home-subnav-flyout-content-5,home-subnav-flyout-promo-5:generic-subnav-flyout" data-handler="generic-subnav-flyout" data-slots="home-subnav-flyout-content-5,home-subnav-flyout-promo-5">
    <span class="nav-a-content">
      Küchengeräte
      
    </span>
    <span class="nav-arrow"></span>
  </a>
  <a href="/Kochen-Braten-Backen-K%C3%BCche-Haushalt/b/?ie=UTF8&node=257408011&ref_=sv_h_k_6" class="nav-a nav-hasArrow" data-nav-flyout-full-width="1" data-nav-key="ab:home-subnav-flyout-content-6,home-subnav-flyout-promo-6:generic-subnav-flyout" data-handler="generic-subnav-flyout" data-slots="home-subnav-flyout-content-6,home-subnav-flyout-promo-6">
    <span class="nav-a-content">
      Kochen & Essen
      
    </span>
    <span class="nav-arrow"></span>
  </a>
  <a href="/M%C3%B6bel-Dekoration/b/?ie=UTF8&node=3312261&ref_=sv_h_k_7" class="nav-a nav-hasArrow" data-nav-flyout-full-width="1" data-nav-key="ab:home-subnav-flyout-content-7,home-subnav-flyout-promo-7:generic-subnav-flyout" data-handler="generic-subnav-flyout" data-slots="home-subnav-flyout-content-7,home-subnav-flyout-promo-7">
    <span class="nav-a-content">
      Möbel & Deko
      
    </span>
    <span class="nav-arrow"></span>
  </a>
  <a href="/Heimtextilien-Matratzen-Bettw%C3%A4sche/b/?ie=UTF8&node=10176091&ref_=sv_h_k_8" class="nav-a nav-hasArrow" data-nav-flyout-full-width="1" data-nav-key="ab:home-subnav-flyout-content-8,home-subnav-flyout-promo-8:generic-subnav-flyout" data-handler="generic-subnav-flyout" data-slots="home-subnav-flyout-content-8,home-subnav-flyout-promo-8">
    <span class="nav-a-content">
      Heimtextilien
      
    </span>
    <span class="nav-arrow"></span>
  </a>
  <a href="/Beleuchtung/b/?ie=UTF8&node=213083031&ref_=sv_h_k_9" class="nav-a nav-hasArrow" data-nav-flyout-full-width="1" data-nav-key="ab:home-subnav-flyout-content-3,home-subnav-flyout-promo-3:generic-subnav-flyout" data-handler="generic-subnav-flyout" data-slots="home-subnav-flyout-content-3,home-subnav-flyout-promo-3">
    <span class="nav-a-content">
      Beleuchtung
      
    </span>
    <span class="nav-arrow"></span>
  </a>
  <a href="/gp/bestsellers/kitchen/?ie=UTF8&ref_=sv_h_k_10" class="nav-a" >
    <span class="nav-a-content">
      Bestseller
      
    </span>
  </a>
  <a href="/Produktfinder-Vergleich-Beratung/b/?ie=UTF8&node=10671794031&ref_=sv_h_k_11" class="nav-a" >
    <span class="nav-a-content">
      Produktfinder
      
    </span>
  </a>

  <!-- nav-linktree-subnav - 'kitchen' -->
</div>

<script type='text/javascript'>window.navmet.push({key:'Subnav',end:+new Date(),begin:window.navmet.tmp});</script>

    
    

    
    
    <div id="nav-flyout-ewc" aria-hidden="true" tabindex="-1" class="nav-ewc-lazy-align nav-ewc-hide-head">
  <div class="nav-flyout-head nav-tools nav-sprite">
    <a href='/gp/cart/view.html/ref=nav_crt_ewc_hd' aria-hidden='true' class='nav-a nav-cart nav-a-2' tabindex='-1'><span class='nav-line-1'>Einkaufs-</span><span class='nav-line-2'>wagen<span class='nav-icon nav-arrow'></span></span><span class='nav-cart-icon nav-sprite'></span><span id='nav-ewc-cart-count' aria-hidden='true' class='nav-cart-count nav-cart-0'>0</span></a>
  </div>
  <div class="nav-flyout-body ewc-beacon">
    <div class="nav-ewc-content"></div>
  </div>

  <div class="nav-flyout-tail"></div>

  <div class="nav-ewc-pin-tail">
    <a href="javascript:void(0);" class="nav-ewc-pin-button" aria-hidden="true" tabIndex="-1">
       <span class="nav-ewc-pin-arrow"></span>
    </a>
    <div class="nav-ewc-pin-tt">
      <div class="nav-ewc-pin-ttc">
        <div class="nav-ewc-pin-ttc-open">Open Cart</div>
        <div class="nav-ewc-pin-ttc-close">Close Cart</div>
      </div>
      <div class="nav-ewc-pin-tt-arrow"></div>
    </div>
  </div>
</div>

<script type="text/javascript">




(function() {


   var viewportQualifyForPersistent = function() {
      var viewportWidth = window.innerWidth ||
        document.documentElement.clientWidth || document.body.clientWidth;
      return viewportWidth >= 1400;
   };


if (typeof uet === 'function') {
  uet('x1', 'ewc', {wb: 1});
}

window.$Nav && $Nav.declare('config.ewc', (function() {
  var config = {"viewportWidthForPersistent":1400,"EWCStateReason":"fixed","cartCount":0,"isEWCLogging":1,"isEWCStateExpanded":true,"enablePersistent":true,"url":"/gp/navcart/sidebar?ie=UTF8&hostPageRID=VBWKFM73Q96291SQHAHK&hostPageType=Detail"};
  var lazyAlign = true;
  config.errorContent = {"html":"<div class=\\"nav-ewc-error\\"><span class='nav-title'></span><p class='nav-paragraph'>\\n    Es gibt ein Problem Abrufen Einkaufswagen jetzt\\n  </p><a href='/gp/cart/view.html/ref=nav_err_ewc_timeout' class='nav-action-button' ><span class='nav-action-inner'>Mein Einkaufswagen</span></a></div>"};

  var hasAui = window.P && window.P.AUI_BUILD_DATE;

  config.pinnable = config.pinnable && hasAui;

  config.flyout = (function() {
    var navbelt = document.getElementById('nav-belt');
    var navCart = document.getElementById('nav-cart');
    var ewcFlyout = document.getElementById('nav-flyout-ewc');

    var persistentClassOnBody = 'nav-ewc-persistent-hover';

    var flyout = {};

    var getDocumentScrollTop = function() {
      return (document.documentElement && document.documentElement.scrollTop) ||
        document.body.scrollTop;
    };

    var isWindow = function( obj ) {
      return obj != null && obj === obj.window;
    };

    var getWindow = function(elem) {
      return isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
    };

    var getOffset = function(elem) {
      var unsupportedVal = { top: 0, left: 0 };
      if ( elem.getClientRects && !elem.getClientRects().length ) {
        return unsupportedVal;
      }
      var rect = elem.getBoundingClientRect ? elem.getBoundingClientRect() : unsupportedVal;
      if ( rect.width || rect.height ) {
        var doc = elem.ownerDocument;
        var win = getWindow(doc);
        var docElem = doc.documentElement;
        return {
          top: rect.top + win.pageYOffset - docElem.clientTop,
          left: rect.left + win.pageXOffset - docElem.clientLeft
        };
      }
      return rect;
    };

    flyout.align = function() {
      var newTop = getOffset(navbelt).top - getDocumentScrollTop();
      ewcFlyout.style.top = (newTop > 0 ? newTop + 'px' : 0);
    };

    flyout.show = function() {
      if(!lazyAlign) {
        flyout.align();
      }

      ewcFlyout.style.right = 0;
    };

    flyout.hide = function() {
      ewcFlyout.style.right = '';
    };

    flyout.hasQualifiedViewportForPersistent = viewportQualifyForPersistent;

    var checkForPersistent = function() {
      if (!hasAui) {
        return { result: false, reason: 'noAui' };
      }

      if (!config.enablePersistent) {
        return { result: false, reason: 'config' };
      }

      if (!viewportQualifyForPersistent()) {
        return { result: false, reason: 'viewport' };
      }

      if (!config.persistWhenEmpty && !config.cartCount > 0) {
        return { result: false, reason: 'emptycart' };
      }

      if (config.pinnable) {
        if (config.enablePersistentByCust !== undefined) {
          return { result: config.enablePersistentByCust, reason: 'preference' };
        }
        if (config.isEWCStateExpanded !== undefined && config.EWCStateReason !== undefined) {
          return { result: config.isEWCStateExpanded, reason: config.EWCStateReason };
        }
      }

      return { result: true };
    };

    flyout.ableToPersist = function() {
      return checkForPersistent().result;
    };

    flyout.applyPageLayoutForPersistent = function() {
      if (!document.documentElement.className.match(
        new RegExp('(?:^|\\\\s)' + persistentClassOnBody + '(?!\\\\S)')
      )) {
        document.documentElement.className += ' ' + persistentClassOnBody;
      }
    };

    flyout.unapplyPageLayoutForPersistent = function() {
      document.documentElement.className = document.documentElement.className.replace(
        new RegExp('(?:^|\\\\s)' + persistentClassOnBody + '(?!\\\\S)', 'g'), ''
      );
    };

    flyout.persist = function() {
      flyout.applyPageLayoutForPersistent();
      flyout.show();
    };

    flyout.unpersist = function() {
      flyout.unapplyPageLayoutForPersistent();
      flyout.hide();
    };

    var resizeCallback = function() {
      if (flyout.ableToPersist()) {
        flyout.persist();
      } else {
        flyout.unpersist();
      }
    };

    var scrollCallback = function() {
      if(!lazyAlign) {
        flyout.align();
      }
    };

    flyout.bindEvents = function() {
      if (window.addEventListener) {
        window.addEventListener('resize', resizeCallback, false);
        window.addEventListener('scroll', scrollCallback, false);
      }
    };

    flyout.unbindEvents = function() {
      if (window.removeEventListener) {
        window.removeEventListener('resize', resizeCallback, false);
        window.removeEventListener('scroll', scrollCallback, false);
      }
    };

    var persistentCheck = checkForPersistent();
    if (persistentCheck.result) {
      flyout.persist();
      if (window.ue && ue.tag)  { ue.tag('ewc:persist'); }
    } else {
      if (window.ue && ue.tag)  {
        ue.tag('ewc:unpersist');
        if (persistentCheck.reason === 'noAui') { ue.tag('ewc:unpersist:noAui'); }
        if (persistentCheck.reason === 'viewport') { ue.tag('ewc:unpersist:viewport'); }
        if (persistentCheck.reason === 'preference') { ue.tag('ewc:unpersist:preference'); }
        if (persistentCheck.reason === 'emptycart') { ue.tag('ewc:unpersist:emptycart'); }
        if (persistentCheck.reason === 'prediction') { ue.tag('ewc:unpersist:prediction'); }
        if (persistentCheck.reason === 'defaultAsCollaped') { ue.tag('ewc:unpersist:defaultAsCollaped'); }
      }
    }

    if (window.ue && ue.tag)  {
      if (flyout.hasQualifiedViewportForPersistent()) {
        ue.tag('ewc:bview');
      } else {
        ue.tag('ewc:sview');
      }
    }

    flyout.bindEvents();

    return flyout;
  }());

  return config;
}()));

if (typeof uet === 'function') {
  uet('x2', 'ewc', {wb: 1});
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).when('navCF').execute(function() {
    uet('bb', 'ewc', {wb: 1});
  });
  (function() {
    var recordedJqueryReadyTime = false;
    var recordJqueryReadyTime = function() {
      if (recordedJqueryReadyTime) { return; }
      uet('x6', 'ewc', {wb: 1});
      ue.count('ewc:latency:jquery', new Date()-ue.t0);
      recordedJqueryReadyTime = true;
    };
    (window.AmazonUIPageJS ? AmazonUIPageJS : P).when('jQuery').execute(function() {
      recordJqueryReadyTime();
    });
    if (window.$Nav) {
        window.$Nav.when('$').run(function() {
            recordJqueryReadyTime();
        });
    }
  }());
}
if (window.ue && ue.tag) {ue.tag('ewc');ue.tag('ewc:prime');ue.tag('ewc:cartsize:0');if ( window.P && window.P.AUI_BUILD_DATE ) { ue.tag('ewc:aui'); }else { ue.tag('ewc:noAui'); }}}());
</script>
  </div>

  
  

</header>
<script type='text/javascript'>window.navmet.push({key:'NavBar',end:+new Date(),begin:window.navmet.main});</script>



    <script type='text/javascript'>window.navmet.tmp=+new Date();</script><!-- nav promo cached -->


<map name="nav_imgmap_nav-sa-amazon-fresh" id="nav_imgmap_nav-sa-amazon-fresh">
<area shape="rect" coords="0,0,505,510" href="/b/ref=nav_shopall_nav_sap_fresh?_encoding=UTF8&node=6723195031&pf_rd_p=7459f62b-073b-442a-a66d-e21420f2262f&pf_rd_s=nav-sa-amazon-fresh&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=9G1W0Y98SW2F5HEXSS51" alt="Jetzt einkaufen"/>
</map>



<map name="nav_imgmap_nav-sa-android" id="nav_imgmap_nav-sa-android">
<area shape="rect" coords="10,10,468,472" href="/gp/feature.html/ref=nav_shopall_mas_de_flyout_hollywood?ie=UTF8&docId=1000854623&pf_rd_p=24fb1d35-fab4-4f10-b1e6-a4455959cc6c&pf_rd_s=nav-sa-android&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=9G1W0Y98SW2F5HEXSS51" alt=""/>
</map>



<map name="nav_imgmap_nav-sa-apparel-shoes-watches" id="nav_imgmap_nav-sa-apparel-shoes-watches">
<area shape="rect" coords="1,5,376,495" href="/b/ref=nav_shopall_AW18_Sale?_encoding=UTF8&node=2657021031&pf_rd_p=46499f1d-3d53-4c28-a7b2-81c74b600099&pf_rd_s=nav-sa-apparel-shoes-watches&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=9G1W0Y98SW2F5HEXSS51" alt=""/>
</map>



<map name="nav_imgmap_nav-sa-auto-motorcycle-industrial" id="nav_imgmap_nav-sa-auto-motorcycle-industrial">
<area shape="rect" coords="16,142,503,487" href="/Batteriewerkzeuge/b/ref=nav_shopall_nav-sa-auto-bike?ie=UTF8&node=5142230031&pf_rd_p=dfbd0282-84a8-43e2-93ad-fd83534586a2&pf_rd_s=nav-sa-auto-motorcycle-industrial&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=9G1W0Y98SW2F5HEXSS51" alt="Hier klicken"/>
</map>



<map name="nav_imgmap_nav-sa-baby-kids-toys" id="nav_imgmap_nav-sa-baby-kids-toys">
<area shape="rect" coords="0,0,460,439" href="/b/ref=nav_shopall_nav_sap_family?_encoding=UTF8&node=14335122031&pf_rd_p=75669395-bb91-4f24-bb25-66b2006100b5&pf_rd_s=nav-sa-baby-kids-toys&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=9G1W0Y98SW2F5HEXSS51" alt="Jetzt informieren"/>
</map>





<map name="nav_imgmap_nav-sa-cloud-drive" id="nav_imgmap_nav-sa-cloud-drive">
<area shape="rect" coords="1,1,442,426" href="/clouddrive/learnmore/ref=nav_shopall_CD_DE_NB_GNO_DT_EVRGRN?pf_rd_p=2a90723b-84ec-4bf9-99a3-e889bbf55a5f&pf_rd_s=nav-sa-cloud-drive&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=9G1W0Y98SW2F5HEXSS51" alt="Cloud Drive Photos"/>
</map>



<map name="nav_imgmap_nav-sa-electronics-computers" id="nav_imgmap_nav-sa-electronics-computers">
<area shape="rect" coords="10,10,468,472" href="/s/ref=nav_shopall_nav-sa-ce_uhd?_encoding=UTF8&rh=i%3Aelectronics%2Cn%3A1197292%2Cp_n_feature_two_browse-bin%3A2711619031&pf_rd_p=1b3cce0c-950a-43be-b79d-7bf3bc3b4dc2&pf_rd_s=nav-sa-electronics-computers&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=9G1W0Y98SW2F5HEXSS51" alt="UHD TVs"/>
</map>



<map name="nav_imgmap_nav-sa-fire-tv" id="nav_imgmap_nav-sa-fire-tv">
<area shape="rect" coords="0,0,499,474" href="/dp/B079QHMFWC/ref=nav_shopall_aftv_MN_eg?pf_rd_p=85c412a3-fc86-4326-bc0c-156de3db28d1&pf_rd_s=nav-sa-fire-tv&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=9G1W0Y98SW2F5HEXSS51" alt="Learn More"/>
</map>



<map name="nav_imgmap_nav-sa-handmade" id="nav_imgmap_nav-sa-handmade">
<area shape="poly" coords="1,458,139,252,346,12,499,11,499,4605" href="/b/ref=nav_shopall_?_encoding=UTF8&node=9699312031&pf_rd_p=084f7a1f-edba-40a6-b42c-e2ea7a508aa3&pf_rd_s=nav-sa-handmade-launchpad&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=9G1W0Y98SW2F5HEXSS51" alt=""/>
</map>



<map name="nav_imgmap_nav-sa-home-garden-tools" id="nav_imgmap_nav-sa-home-garden-tools">
<area shape="rect" coords="1,1,500,422" href="/b/ref=nav_shopall_nav_sap_hi_project?_encoding=UTF8&node=80084031&pf_rd_p=10983599-13d3-4ea2-9924-491575ea82f8&pf_rd_s=nav-sa-home-garden-tools&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=9G1W0Y98SW2F5HEXSS51" alt="HI_PROJECT"/>
</map>



<map name="nav_imgmap_nav-sa-instant-video" id="nav_imgmap_nav-sa-instant-video">
<area shape="rect" coords="1,1,519,483" href="/gp/redirect.html/ref=nav_shopall_?ie=UTF8&location=https%3A%2F%2Fwww.amazon.de%2Fgp%2Fvideo%2Fstorefront%2F%3Famp%253Bnode%3D2676882011rh%253Di%253Aprime-instant-video%252Cn%253A2676882011%26amp%253Bref%3Ddvm_de_xs_oth_e_en_all_054&source=standards&token=8682C098D8CAB56C189A93287D194EC200D2FD63&pf_rd_p=dd99106d-dad3-454b-b71c-f30c3df593a8&pf_rd_s=nav-sa-instant-video&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=9G1W0Y98SW2F5HEXSS51" alt=""/>
</map>



<map name="nav_imgmap_nav-sa-kindle-amazon-echo" id="nav_imgmap_nav-sa-kindle-amazon-echo">
<area shape="rect" coords="0,0,499,474" href="/dp/B01J2BL01K/ref=nav_shopall_nav_flyout_aucc_rk_de?pf_rd_p=a10cbb37-617a-4342-8460-d763543156b2&pf_rd_s=nav-sa-kindle-amazon-echo&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=9G1W0Y98SW2F5HEXSS51" alt="Mehr dazu"/>
</map>



<map name="nav_imgmap_nav-sa-kindle-fire-tablet" id="nav_imgmap_nav-sa-kindle-fire-tablet">
<area shape="rect" coords="0,0,499,474" href="/dp/B07G989P78/ref=nav_shopall_nav_flyout_Tabl_kk_eg?pf_rd_p=43d0e604-adae-4092-9b2e-edaa504ec418&pf_rd_s=nav-sa-kindle-fire-tablet&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=9G1W0Y98SW2F5HEXSS51" alt="Mehr dazu"/>
</map>



<map name="nav_imgmap_nav-sa-kindle-reader" id="nav_imgmap_nav-sa-kindle-reader">
<area shape="rect" coords="0,0,499,474" href="/dp/B07747FR44/ref=nav_shopall_nav_flyout_Eink_Ms_MSLnc_DE?pf_rd_p=16f02924-7b6d-43da-9ffc-ce2ee55e3094&pf_rd_s=nav-sa-kindle-reader&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=9G1W0Y98SW2F5HEXSS51" alt="Jetzt bestellen"/>
</map>



<map name="nav_imgmap_nav-sa-mp3" id="nav_imgmap_nav-sa-mp3">
<area shape="rect" coords="1,1,500,475" href="/boty18/ref=nav_shopall_dmm_nav_fo_amu_boty_141218?pf_rd_p=38d2bf1b-3850-464a-adbf-fa4964ee8e30&pf_rd_s=nav-sa-mp3&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=9G1W0Y98SW2F5HEXSS51" alt="AmazonMusicUnlimited"/>
</map>



<map name="nav_imgmap_nav-sa-music-games-film-tv" id="nav_imgmap_nav-sa-music-games-film-tv">
<area shape="rect" coords="1,1,500,471" href="/gp/dmusic/promotions/AmazonMusicUnlimited/ref=nav_shopall_dmm_nav_fo_hf_1114_v3?pf_rd_p=b3208b63-a74a-446a-a6a4-01e0b40341fb&pf_rd_s=nav-sa-music-games-film-tv&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=9G1W0Y98SW2F5HEXSS51" alt="AmazonMusicUnlimited"/>
</map>



<map name="nav_imgmap_nav-sa-poldi" id="nav_imgmap_nav-sa-poldi">
<area shape="rect" coords="1,1,500,475" href="/gp/redirect.html/ref=nav_shopall_dmm_nav_fo_poldi1_240818?location=https://music.amazon.de/sports/competitions/BUND&token=74FFCF03D53B354FB6385B43FDA2FC97B04E829A&source=standards&pf_rd_p=7e58da98-aba0-4f5d-864e-cc3e94cb07ed&pf_rd_s=nav-sa-poldi&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=9G1W0Y98SW2F5HEXSS51" alt="FußballLiveAmazonMusic"/>
</map>



<map name="nav_imgmap_nav-sa-sports-outdoors" id="nav_imgmap_nav-sa-sports-outdoors">
<area shape="rect" coords="1,1,503,487" href="/b/ref=nav_shopall_nav_sap_f7792a04-6e4f-4b82-9ec5-449882c0ed8d?_encoding=UTF8&node=16435051&pf_rd_p=7e2fd696-34f1-4445-bca4-39be952c3623&pf_rd_s=nav-sa-sports-outdoors&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=9G1W0Y98SW2F5HEXSS51" alt="Sportartikel"/>
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
window.$Nav && $Nav.declare('config.requestId', 'VBWKFM73Q96291SQHAHK');


window.$Nav && $Nav.declare('config.alexaListEnabled', true);

window.$Nav && $Nav.declare('config.readyOnATF', false);

window.$Nav && $Nav.declare('config.dynamicMenuArgs',
  {"rid":"VBWKFM73Q96291SQHAHK","isFullWidthPrime":0,"isPrime":1,"dynamicRequest":1,"weblabs":"","isFreshRegionAndCustomer":"","primeMenuWidth":450});

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
    , requestId: "VBWKFM73Q96291SQHAHK"
    , sessionId: "262-9898842-9713804"
    , language: "de_DE"
    , customerId: "A96YKT37ODSSG"
    , b2b: 0
    , fresh: 0
    , biaWidgetUrl: "/gp/yourstore?ie=UTF8&edit=1&p=x9cXmedFmy%2FVYr4mWHkDLNK%2BMELk751lpyA7CDvbECZ%2Fmy4t4UJinuxtDjPGdn8ro7e8y5d4DTDP2S7Nogxz0ZQCVyZGIxEP&ref=nb_sb_ss_bia_acct"
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
 _navbar.browsepromos['nav-sa-auto-motorcycle-industrial'] = {"width":"540","promoType":"wide","vertOffset":"-43","tabletAltText":null,"horizOffset":"-37","height":"546","altText":null,"image":"https://images-eu.ssl-images-amazon.com/images/G/03/Automotive/Fly-outs/1005146_de_auto_29-08-2016_flyoutsept_flyout._CB280481660_.png","tabletDestination":null,"tabletImage":null}; 
 _navbar.browsepromos['nav-sa-baby-kids-toys'] = {"width":"540","promoType":"wide","vertOffset":"-39","tabletAltText":null,"horizOffset":"-40","height":"523","altText":null,"image":"https://images-eu.ssl-images-amazon.com/images/G/03/baby/amazonmom/520/1076711_de_family_101917_520graphics_lifestyle_flyout_540x523._CB494921615_.png","tabletDestination":null,"tabletImage":null}; 
 _navbar.browsepromos['nav-sa-books'] = {"width":null,"promoType":"wide","vertOffset":"0","tabletAltText":null,"horizOffset":"0","height":null,"altText":null,"image":null,"tabletDestination":null,"tabletImage":null}; 
 _navbar.browsepromos['nav-sa-cloud-drive'] = {"width":"494","promoType":"wide","vertOffset":"0","tabletAltText":null,"horizOffset":"0","height":"462","altText":null,"image":"https://images-eu.ssl-images-amazon.com/images/G/03/digital/adrive/images/gno/deJanFlyout_2._CB488455631_.png","tabletDestination":null,"tabletImage":null}; 
 _navbar.browsepromos['nav-sa-electronics-computers'] = {"width":"511","promoType":"wide","vertOffset":"-21","tabletAltText":null,"horizOffset":"-22","height":"431","altText":null,"image":"https://images-eu.ssl-images-amazon.com/images/G/03/electronics/00_Flyout/DE_CE_Graphic-Adaption_8-9-2015_flyout._CB312258393_.png","tabletDestination":null,"tabletImage":null}; 
 _navbar.browsepromos['nav-sa-fire-tv'] = {"width":"540","promoType":"wide","vertOffset":"-40","tabletAltText":null,"horizOffset":"-40","height":"523","altText":null,"image":"https://images-eu.ssl-images-amazon.com/images/G/03/kindle/merch/2018/campaign/49346179/xsite/m-gno-d-de._CB482799505_.png","tabletDestination":null,"tabletImage":null}; 
 _navbar.browsepromos['nav-sa-handmade'] = {"width":"499","promoType":"wide","vertOffset":"-10","tabletAltText":null,"horizOffset":"-20","height":"508","altText":null,"image":"https://images-eu.ssl-images-amazon.com/images/G/03/handmade/2017/flyout/DE-FR-IT--Handmade-flyouts-evergreen-ID_1039893_flyout_DE._CB529969706_.png","tabletDestination":null,"tabletImage":null}; 
 _navbar.browsepromos['nav-sa-home-garden-tools'] = {"width":"499","promoType":"wide","vertOffset":"-20,5","tabletAltText":null,"horizOffset":"-19","height":"473","altText":null,"image":"https://images-eu.ssl-images-amazon.com/images/G/03/tools/flyout/DE_HI_24_11_14_Flyouts3._CB319219601_.png","tabletDestination":null,"tabletImage":null}; 
 _navbar.browsepromos['nav-sa-instant-video'] = {"width":"525","promoType":"wide","vertOffset":"-20","tabletAltText":null,"horizOffset":"-21","height":"510","altText":null,"image":"https://images-eu.ssl-images-amazon.com/images/G/03/digital/video/placement/Gateway/Nav_Flyout/DE_Merch_FlyOut_GNO_ENG_APV._CB479769627_.png","tabletDestination":null,"tabletImage":null}; 
 _navbar.browsepromos['nav-sa-kindle-amazon-echo'] = {"width":"519","promoType":"wide","vertOffset":"-5","tabletAltText":null,"horizOffset":"-23","height":"512","altText":null,"image":"https://images-eu.ssl-images-amazon.com/images/G/03/kindle/merch/2018/aucc/flyout/de-roo-2-flyout_519x512._CB460636306_.png","tabletDestination":null,"tabletImage":null}; 
 _navbar.browsepromos['nav-sa-kindle-fire-tablet'] = {"width":"540","promoType":"wide","vertOffset":"-30","tabletAltText":null,"horizOffset":"-10","height":"523","altText":null,"image":"https://images-eu.ssl-images-amazon.com/images/G/03/kindle/merch/2018/tablets/1964321/289313/289313-gno-de-d-540x523._CB484665369_.png","tabletDestination":null,"tabletImage":null}; 
 _navbar.browsepromos['nav-sa-kindle-reader'] = {"width":"538","promoType":"wide","vertOffset":"-40","tabletAltText":null,"horizOffset":"-40","height":"521","altText":null,"image":"https://images-eu.ssl-images-amazon.com/images/G/03/kindle/merch/2018/campaign/42938139/220486/xsite/m-gno-d-de._CB481602088_.png","tabletDestination":null,"tabletImage":null}; 
 _navbar.browsepromos['nav-sa-mp3'] = {"width":"519","promoType":"wide","vertOffset":"-10","tabletAltText":null,"horizOffset":"-20","height":"535","altText":"Amazon Music Unlimited","image":"https://images-eu.ssl-images-amazon.com/images/G/03/DE-digital-music/hawkfire/campaigns/BOTY18/final/GW3/DE_DM_X_BOTY_EG_2018_GNO_Flyout._CB460472336_.png","tabletDestination":null,"tabletImage":null}; 
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
      window.P.declare('packardGlowStoreName', 'kitchen');
    }
  });
    window.P.declare('packardSpeedDesktopEnabled', true);
}


window.$Nav && $Nav.declare('configComplete');

--></script>

<script type='text/javascript'>window.navmet.push({key:'PostNav',end:+new Date(),begin:window.navmet.tmp});</script>







<a id='skippedLink'></a>

<script type='text/javascript'>window.navmet.MainEnd = new Date();</script><!-- sp:feature:host-atf -->

<div id='dp' class='home de_DE'>
         






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



    






<div id="wayfinding-breadcrumbs_container" class="a-section a-spacing-none a-padding-medium">
<div id="wayfinding-breadcrumbs_feature_div" class="a-subheader a-breadcrumb feature" data-feature-name="wayfinding-breadcrumbs">
    <ul class="a-unordered-list a-horizontal a-size-small">
        <li class="a-breadcrumb-divider"><span class="a-list-item a-color-tertiary">
            &lsaquo; 
        </span></li>
        <li><span class="a-list-item"> 
            <a id="breadcrumb-back-link" class="a-link-normal a-color-tertiary" href="https://www.amazon.de/s/ref=nb_sb_noss_2?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&url=search-alias%3Daps&field-keywords=kleiderhaken" onclick="if(history.length > 1) { history.back(); return false; }">
                Zurück zu den Suchergebnissen für "kleiderhaken"
            </a>
        </span></li>
    </ul>
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
        width:32.5%;
    }

    .centerColAlign{
        margin-left:34.0%;
    }
</style>




    
     
     
    










    
    
     
         
         
             <div id="instantOrderUpdate_feature_div" class="feature" data-feature-name="instantOrderUpdate">
         
     




    

    
    
    
        
            
                
	                
	                
	                	





 

	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





    
    

    
     
     
    










    
    
     
         
         
             <div id="companyCompliancePolicies_feature_div" class="feature" data-feature-name="companyCompliancePolicies">
         
     




    

    
    
    
        
            
                
	                
	                
	                	




    


	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





    
    

    
     
     
    










    
    
     
         
         
             <div id="cerberus_feature_div" class="feature" data-feature-name="cerberus">
         
     




    

    
    
    
        
            
                
	                
	                
	                	




    <input type="hidden" name="" value="/gp/cerberus/log/gv/mid/A1PA6795UKMFR9/asin/B01DQDZVCO/rc/9/subs/-/dev/WEB" id="cerberus-metrics">

    
    <div id="cerberus-data-metrics" style="display: none;" data-asin="B01DQDZVCO" data-asin-price="14.99" data-asin-shipping="0" data-asin-currency-code="EUR" data-substitute-count="-1" data-device-type="WEB" data-display-code="Asin is not eligible because it is price competitive" ></div>

    


	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





    
    
 

<div id="ppd">

<div id="rightCol" class="rightCol">
    
        
        
        
        










    
    
     
         
         
             <div id="tellAFriendBox_feature_div" class="feature" data-feature-name="tellAFriendBox">
         
     




    

    
    
    
        
            
                
	                
	                
	                	






    
        
        
        

        
            

        <div id="tell-a-friend" data-close="Schließen" data-dest data-title="Diese Artikel empfehlen" class="a-section a-text-center a-spacing-small">
            
            
            

            
                
                    
                    
                    




    <a id="swfMailTo" class="a-link-normal email" title="Per E-Mail teilen" href="mailto:?body=Ich%20m%C3%B6chte%20dieses%20Produkt%20bei%20Amazon.de%20empfehlen%0A%0AWINOMO%20Kleiderhaken%20Klappbar%20Wand-Kleiderst%C3%A4nder%0Avon%20Benchra%0AErfahren%20Sie%20mehr%3A%20https%3A%2F%2Fwww.amazon.de%2Fdp%2FB01DQDZVCO%2Fref%3Dcm_sw_em_r_mt_dp_U_rf9kCbVWF7Q69&subject=Ich%20m%C3%B6chte%20dieses%20Produkt%20auf%20Amazon%20empfehlen">Teilen</a><span class="a-letter-space"></span>

<a id="swfImageMailTo" class="a-link-normal email" title="Per E-Mail teilen" href="mailto:?body=Ich%20m%C3%B6chte%20dieses%20Produkt%20bei%20Amazon.de%20empfehlen%0A%0AWINOMO%20Kleiderhaken%20Klappbar%20Wand-Kleiderst%C3%A4nder%0Avon%20Benchra%0AErfahren%20Sie%20mehr%3A%20https%3A%2F%2Fwww.amazon.de%2Fdp%2FB01DQDZVCO%2Fref%3Dcm_sw_em_r_mt_dp_U_rf9kCbVWF7Q69&subject=Ich%20m%C3%B6chte%20dieses%20Produkt%20auf%20Amazon%20empfehlen"><i class="a-icon a-icon-share-email"></i></a><span class="a-letter-space"></span>

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
            collectMetrics('dp_U_rf9kCbVWF7Q69');
    });
});
</script>
                
                
            
            
            
                
                
                    
                    
                        
                        
                            
                            <a id="facebook" data-height="400" class="a-link-normal swf-social-site" target="_blank" rel="noopener" title="Facebook" href="/gp/redirect.html/ref=cm_sw_cl_fa_dp_U_rf9kCbVWF7Q69?_encoding=UTF8&amp;location=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fshare%3F_encoding%3DUTF8%26display%3Dpopup%26href%3Dhttps%253A%252F%252Fwww.amazon.de%252Fdp%252FB01DQDZVCO%252Fref%253Dcm_sw_r_fa_dp_U_rf9kCbVWF7Q69%26redirect_uri%3Dhttps%253A%252F%252Fwww.amazon.de%252Fgp%252Fpdp%252Ftaf%252Ffb_post_redirect.html%252Fref%253Dcm_sw_s_fa_dp_U_rf9kCbVWF7Q69%26app_id%3D164734381262%26hashtag%3D%2523Amazon&amp;token=788E1DBAB88E616C2D45BA0184492518334CAC76"><i class="a-icon a-icon-share-facebook" aria-label="Facebook"><span class="a-icon-alt">Facebook</span></i></a><span class="a-letter-space"></span>
                        
                    
                
            
                
                
                    
                    
                        
                        
                            
                            <a id="twitter" data-height="400" class="a-link-normal swf-social-site" target="_blank" rel="noopener" title="Twitter" href="/gp/redirect.html/ref=cm_sw_cl_tw_dp_U_rf9kCbVWF7Q69?_encoding=UTF8&amp;location=https%3A%2F%2Ftwitter.com%2Fintent%2Ftweet%3Foriginal_referer%3Dhttps%25253A%25252F%25252Fwww.amazon.de%25252Fgp%25252Fproduct%25252FB01DQDZVCO%25252Fref%25253Dcm_sw_r_tw_dp_U_x_rf9kCbVWF7Q69%26text%3DWINOMO%2520Kleiderhaken%2520Klappbar%2520Wand-Kleiderst%25C3%25A4nder%2520WINOMO%26related%3Damazondeals%252Camazonmp3%26url%3Dhttps%253A%252F%252Fwww.amazon.de%252Fdp%252FB01DQDZVCO%252Fref%253Dcm_sw_r_tw_dp_U_x_rf9kCbVWF7Q69%26via%3Damazon&amp;token=D186C373C72CCE03CB6F7928AD03E3490B1DD9F4"><i class="a-icon a-icon-share-twitter" aria-label="Twitter"><span class="a-icon-alt">Twitter</span></i></a><span class="a-letter-space"></span>
                        
                    
                
            
                
                
                    
                    
                        
                        
                            
                            <a id="pinterest" data-height="570" class="a-link-normal swf-social-site" target="_blank" rel="noopener" title="Pinterest" href="/gp/redirect.html/ref=cm_sw_cl_pi_dp_U_rf9kCbVWF7Q69?_encoding=UTF8&amp;location=https%3A%2F%2Fpinterest.com%2Fpin%2Fcreate%2Fbutton%3Furl%3Dhttps%253A%252F%252Fwww.amazon.de%252Fdp%252FB01DQDZVCO%252Fref%253Dcm_sw_r_pi_dp_U_x_rf9kCbVWF7Q69%26title%3DWINOMO%2520Kleiderhaken%2520Klappbar%2520Wand-Kleiderst%25C3%25A4nder%2520WINOMO%26description%3DWINOMO%2520Kleiderhaken%2520Klappbar%2520Wand-Kleiderst%25C3%25A4nder%2520WINOMO%2520https%253A%252F%252Fwww.amazon.de%252Fdp%252FB01DQDZVCO%252Fref%253Dcm_sw_r_pi_dp_U_x_rf9kCbVWF7Q69%26media%3Dhttps%253A%252F%252Fimages-na.ssl-images-amazon.com%252Fimages%252FI%252F41cMneCIIgL.jpg&amp;token=F747E3069E469112B86D49AD36E127FD5BC52342"><i class="a-icon a-icon-share-pinterest" aria-label="Pinterest"><span class="a-icon-alt">Pinterest</span></i></a><span class="a-letter-space"></span>
                        
                    
                
            

            

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





        
        
    
        
        
        
        







        
        
    
        
        
        
        







        
        
    
        
        
        
        







        
        
    
        
        
        
        







        
        
    
        
        
        
        







        
        
    
        
        
        
        







        
        
    
        
        
        
        










    
    
     
         
         
             <div id="desktop_buybox" class="feature" data-feature-name="desktop_buybox">
         
     




    

    
    
    
        
        
        
        
    	    
                

 <div id="buybox">
    











    
        
        

        
        

        
        
            
            

            
                
                    










    
    
     
         
         
             <div id="desktop_accordion" class="feature" data-feature-name="desktop_accordion">
         
     




    

    
    
    
        
        
        
        
    	    
                




















    
        
        
        
            
            
    
        
           
           
           <div id="accordionRows_feature_div" data-feature-name="accordionRows" data-template-name="accordionRows" class="a-section a-spacing-none">
                 
                 










    
    
     
         
         
             <div id="accordionRows" class="feature" data-feature-name="accordionRows">
         
     




    

    
    
    
        
        
        
        
    	    
                














    
        
        
        
    

    
        
        
        
    

    
        
        
        
    

    
        
        
        
    

    
        
        
        
    

    
        
        
        
    


































    
        
        
        
            
            

    
    
    

    
    
        
            
            
            
            
            
            

            

        
    
        
            
            
            
            
            
            

            

        
    
        
            
            
            
            
                
                
            
            
            

            

        
    
        
            
            
            
            
            
            

            

        
    
        
            
            
            
            
            
            

            

        
    
        
            
            
            
            
            
            

            

        
    

    
    

    
    

    
    <script type="text/javascript">
P.when("A", "a-expander", "ready").execute(function(A, expander) {
    A.on("a:accordion:buybox-accordion:select", function(data) {
        // Change active accordion header price color to red
        A.$("#buyBoxAccordion").find(".accordion-header span.header-price").
            removeClass("a-color-price").addClass("a-color-secondary");
        A.$(data.selectedRow.$row).find(".accordion-header span.header-price").
            removeClass("a-color-secondary").addClass("a-color-price");

        // Change active accordion header prime logo to opaque
        A.$("#buyBoxAccordion").find(".accordion-header i.header-prime-logo").
            addClass("opacity-50");
        A.$(data.selectedRow.$row).find(".accordion-header i.header-prime-logo").
            removeClass("opacity-50");

        //initialize accordion expander
        expander.initializeExpanders();
    });

    // Record metrics for clicking usedAccordionRow
    A.on("a:accordion:buybox-accordion:usedAccordionRow:select", function(data) {
        var ue = window.ue;
        if (ue && typeof ue.count === 'function') {
            ue.count('dpOffers:buybox:mobile:usedAccordionOpen', (ue.count('dpOffers:buybox:mobile:usedAccordionOpen') || 0) + 1);
        }
    });
});
</script>

    
	

    <div id="buyBoxAccordion" data-a-accordion-name="buybox-accordion" class="a-box-group a-accordion a-spacing-large" role="">

        
            
            












    
    

    






            

            
            

        
            
            












    
    

    






            

            
            

        
            
            












    
    

    

        
        
        
        

        <div id="newAccordionRow" class="a-box a-accordion-active" data-a-accordion-row-name="newAccordionRow"><div class="a-box-inner a-accordion-row-container">

            <div class="a-accordion-row-a11y" role="radio" aria-checked="true" aria-expanded="true"><a aria="" data-action="a-accordion" class="a-accordion-row a-declarative accordion-header" href="#" aria-label=""><i class="a-icon a-accordion-radio a-icon-radio-active"></i><h5>
                









    








    
    
        
            
                
                
                
                    
                    
                    
                        
                    
                
            
            
            
        
    







    
    
    
    
    
    
             <div id="buyNew_cbb">
             
















    
    
        
        
            
            
                
            
        
    
    




<div class="a-row">
   <div class="a-column a-span12">Neu kaufen</div>
   
        
              <div class="a-column a-span12 a-text-left">
              <span id="newBuyBoxPrice" class="a-size-base a-color-price header-price a-text-normal">EUR 14,99</span>
              </div>
              
        
        
   
</div>

             </div>
             








    
    



            </h5></a></div>

            <div class="a-accordion-inner accordion-row-content">
                











 
     
     
     
         
     
 


 <div class="a-section">
     <form method="post" id="addToCart" action="/gp/product/handle-buy-box/ref=dp_start-bbf_1_glance" class="a-content">
              <input type="hidden" id="session-id" name="session-id" value="262-9898842-9713804">
              <input type="hidden" id="ASIN" name="ASIN" value="B01DQDZVCO">
              <input type="hidden" id="offerListingID" name="offerListingID" value="xWiVgsy%2Fi06FM%2FmFBVX8V544M5jpBJTDE5QWDozxDPkfg9Y8A59UZZ6WF6MmfQYrMyc%2Bu4Bgck5aNDQcuf1nfRa96cQmxWVZ%2B%2FmlgtDmEtDLa77vGQfAXQ%2Fx%2F%2FsbwgwTXLUF0YRxepzYXrNvgeerkhXxsRfKXsDc">
              <input type="hidden" id="isMerchantExclusive" name="isMerchantExclusive" value="0">
              <input type="hidden" id="merchantID" name="merchantID" value="A2KTBS1FE89V3M">
              <input type="hidden" id="isAddon" name="isAddon" value="0">
              <input type="hidden" id="nodeID" name="nodeID" value="3167641">
              <input type="hidden" id="sellingCustomerID" name="sellingCustomerID" value="A2KTBS1FE89V3M">
              <input type="hidden" id="qid" name="qid" value="1546375481">
              <input type="hidden" id="sr" name="sr" value="8-8">
              <input type="hidden" id="storeID" name="storeID" value="kitchen">
              <input type="hidden" id="tagActionCode" name="tagActionCode" value="3167641">
              <input type="hidden" id="viewID" name="viewID" value="glance">
              <input type="hidden" id="rebateId" name="rebateId" value="">
              




    
            
                
                






            

            
            

            
            

            
            <input type="hidden" id="rsid" name="rsid" value="262-9898842-9713804">
            <input type="hidden" id="sourceCustomerOrgListID" name="sourceCustomerOrgListID" value="">
            <input type="hidden" id="sourceCustomerOrgListItemID" name="sourceCustomerOrgListItemID" value="">
            <input type="hidden" name="wlPopCommand" value="">
            
            

     
    

    
    










    
    
     
         
         
             <div id="desktop_qualifiedBuyBox" class="feature" data-feature-name="desktop_qualifiedBuyBox">
         
     




    

    
    
    
        
        
        
        
    	    
                















    
        
        
        
            
                
            
            

    <div class="a-section a-spacing-none a-padding-none">
    
        





    
    
        
            










    
    
     
         
         
             <div id="invitePlatform_feature_div" class="feature" data-feature-name="invitePlatform">
         
     




    

    
    
    
        
            
                
	                
	                
	                	



	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
    

    
    
        
            










    
    
     
         
         
             <div id="pointsInsideBuyBox_feature_div" class="feature" data-feature-name="pointsInsideBuyBox">
         
     




    

    
    
    
        
            
                
	                
	                
	                	































	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
    

    
    
        
            










    
    
     
         
         
             <div id="agsShippingIfdInsideBuyBox_feature_div" class="feature" data-feature-name="agsShippingIfdInsideBuyBox">
         
     




    

    
    
    
        
            
                
	                
	                
	                	
















<div class="a-section">
<div class="a-row">
    <div class="a-column a-span12 a-text-left">
        







    </div>
</div>
</div>


	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
    

    
    
        
            










    
    
     
         
         
             <div id="shippingMessageInsideBuyBox_feature_div" class="feature" data-feature-name="shippingMessageInsideBuyBox">
         
     




    

    
    
    
        
            
                
	                
	                
	                	




























<div class="a-section">
<div class="a-row">
    <div class="a-column a-span12 a-text-left a-spacing-top-micro">
        












































    


	<span id="priceBadging_feature_div" class="feature" data-feature-name="priceBadging">
    	<span id="priceBadging_feature_div" class="feature" data-feature-name="priceBadging"> 
<!-- ms3: DETAIL_PAGE_Price_Prime_Shipping_Free_Returns -->
<i class="a-icon a-icon-prime"><span class="a-icon-alt">Kostenloser Versand für Prime-Mitglieder</span></i> 
<span class="a-size-base a-color-base"></span>
</span>


    </span>


    
        
        
    






    </div>
</div>
</div>


	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
    

    
    
        
            










    
    
     
         
         
             <div id="deliveryPromiseInsideBuyBox_feature_div" class="feature" data-feature-name="deliveryPromiseInsideBuyBox">
         
     




    

    
    
    
        
            
                
	                
	                
	                	
























<div class="a-section a-spacing-mini a-spacing-top-micro">
<div class="a-row">
    <div class="a-column a-span12 a-text-left">
        





















    </div>
</div>
</div>


	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
    

    
    
        
            










    
    
     
         
         
             <div id="promiseBasedBadgeInsideBuyBox_feature_div" class="feature" data-feature-name="promiseBasedBadgeInsideBuyBox">
         
     




    

    
    
    
        
            
                
	                
	                
	                	



























<div class="a-section a-spacing-mini">
<div class="a-row">
    <div class="a-column a-span12 a-text-left">
        

























    
        









    
    
    
    
    



   
        
   
    


    
    
        
        
            
            
        
    
    
        
           
            
            
                



    
    
    
    
    
    
        
            
            
            
            
            
                
                    
                        











    <div id="dynamicDeliveryMessage" class="a-section a-spacing-mini a-spacing-top-mini">
        
            
            
            <div id="ddmDeliveryMessage" class="a-section a-spacing-mini">
                
                    
                        
                        
                            
                                
                                    
                                        GRATIS-Lieferung bis <b>Donnerstag</b>,
                                    
                                    
                                
                                
                                    
                                        
                                            <br>
                                            <span class="a-color-secondary">
                                                wenn Sie innerhalb von <span id="ddmFastestCountdown">22 Stunden und 44 Minuten</span> bestellen.
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
                                asin: "B01DQDZVCO",showAndInCountDown: true
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
                                    countDownComp.start(81895, 0);
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
</div>
</div>


	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
    

    
    
        
            










    
    
     
         
         
             <div id="addOnMessage_feature_div" class="feature" data-feature-name="addOnMessage">
         
     




    

    
    
    
        
            
                
	                
	                
	                	



	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
    

    
    
        
            










    
    
     
         
         
             <div id="availabilityInsideBuyBox_feature_div" class="feature" data-feature-name="availabilityInsideBuyBox">
         
     




    

    
    
    
        
            
                
	                
	                
	                	



























<div class="a-section a-spacing-top-micro">
    





































<div id="availability" class="a-section a-spacing-none">
    
    
    <span class="a-size-medium a-color-success">
        
            
            Auf Lager.
        
        
    </span>
    
    
    



    
    
    
</div>











  <div class="a-section a-spacing-none">
    

      
        
        
      

    
 </div>








  





    
        
    
    




</div>


	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
    

    
    
        
            










    
    
     
         
         
             <div id="shipsFromSoldByInsideBuyBox_feature_div" class="feature" data-feature-name="shipsFromSoldByInsideBuyBox">
         
     




    

    
    
    
        
            
                
	                
	                
	                	


























<div class="a-section a-spacing-medium">
    

























<div id="merchant-info" class="a-section a-spacing-mini">
    


    
    
        




    


    
        
        
    

    
    
    
    
    
    
    
        Verkauf durch <a href='/gp/help/seller/at-a-glance.html/ref=dp_merchant_link?ie=UTF8&amp;seller=A2KTBS1FE89V3M&amp;isAmazonFulfilled=1'>Benchra</a> und <a href='/gp/help/customer/display.html?ie=UTF8&amp;ref=dp_fulfillment&amp;nodeId=200131620' id='SSOFpopoverLink'>Versand durch Amazon</a>. Für weitere Informationen, Impressum, AGB und Widerrufsrecht klicken Sie bitte auf den Verkäufernamen.
    
    

        
        
        
        
        
        

        <span class="">
            Geschenkverpackung verfügbar.
        </span>

        







        



    

</div>



    




    
    
    
    







  
  
  
    
  







<div class="a-popover-preload" id="a-popover-SSOFpopoverLink-content">
  <p>Beim Versand durch Amazon nutzen Verkaufspartner die Logistik der Amazon-Versandzentren: Amazon verpackt und verschickt die Artikel und übernimmt den Kundenservice. <b>Ihre Vorteile:</b> <em>(1) Lieferung  ab 29 EUR Bestellwert (Bücher, Bekleidung und Schuhe generell versandkostenfrei, auch zusammen mit Media-Produkten). (2) Kombinieren und sparen - bestellen Sie bei Amazon.de oder Verkaufspartnern, die den Versand durch Amazon nutzen, wird Ihre Bestellung zu einer Lieferung zusammengefasst. (3) Alle Artikel sind mit Amazon Prime für noch schnellere Lieferung bestellbar.</em></p>
  <p>Wenn Sie Verkäufer sind, könnten Sie Ihre Verkäufe deutlich erhöhen, wenn Sie Versand durch Amazon (Fulfillment by Amazon) nutzen. Wir laden Sie ein, <a class="a-link-normal" target="_blank" rel="noopener" href="/gp/seller/fba/fulfillment-by-amazon.html?ie=UTF8&ld=AZFBADP&ref=dp_fba_pop">
    mehr über das Programm
  </a> zu erfahren.</p>
</div>

<script type="text/javascript">
  P.when("A", "jQuery", "a-popover", "ready").execute(function(A, $, popover) {
      "use strict";

      var title = "Was bedeutet Versand durch Amazon?";
      var triggerId = "#SSOFpopoverLink";
      var contentId = "SSOFpopoverLink-content";

      var options = {
        "header": title,
        "name": contentId,
        "activate": "onclick",
        "width": 430,
        "position": "triggerBottom"
      };

      var $trigger = $(triggerId);
      var instance = popover.create($trigger, options);
  });
</script>






</div>


	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
    

    
    
        
            










    
    
     
         
         
             <div id="originalPackagingMessageInsideBuyBox_feature_div" class="feature" data-feature-name="originalPackagingMessageInsideBuyBox">
         
     




    

    
    
    
        
            
                
	                
	                
	                	




	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
    

    
    
        
            










    
    
     
         
         
             <div id="quantityLayoutHigh_feature_div" class="feature" data-feature-name="quantityLayoutHigh">
         
     




    

    
    
    
        
            
                
	                
	                
	                	








	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
    

    
    
        
            










    
    
     
         
         
             <div id="bbop_feature_div" class="feature" data-feature-name="bbop">
         
     




    

    
    
    
        
            
                
	                
	                
	                	






     
     





	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
    

    
    
        
            










    
    
     
         
         
             <div id="businessPricing_feature_div" class="feature" data-feature-name="businessPricing">
         
     




    

    
    
    
        
            
                
	                
	                
	                	




     






	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
    

    
    
        
            










    
    
     
         
         
             <div id="soldByThirdParty_feature_div" class="feature" data-feature-name="soldByThirdParty">
         
     




    

    
    
    
        
            
                
	                
	                
	                	



















	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
    

    
    
        
            










    
    
     
         
         
             <div id="scheduledDelivery_feature_div" class="feature" data-feature-name="scheduledDelivery">
         
     




    

    
    
    
        
            
                
	                
	                
	                	





     
        





     

	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
    

    
    
        
            










    
    
     
         
         
             <div id="mbb_feature_div" class="feature" data-feature-name="mbb">
         
     




    

    
    
    
        
            
                
	                
	                
	                	





	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
    

    
    
        
            










    
    
     
         
         
             <div id="desktop_productInsurance_feature_div" class="feature" data-feature-name="desktop_productInsurance">
         
     




    

    
    
    
        
            
                
	                
	                
	                	





	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
    

    
    
        
            










    
    
     
         
         
             <div id="quantityLayoutLow_feature_div" class="feature" data-feature-name="quantityLayoutLow">
         
     




    

    
    
    
        
            
                
	                
	                
	                	








    
    

















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
                                
                            
                        
                            
                                
                                
                                    <option value="7">7
                                    </option>
                                
                            
                        
                            
                                
                                
                                    <option value="8">8
                                    </option>
                                
                            
                        
                            
                                
                                
                                    <option value="9">9
                                    </option>
                                
                            
                        
                            
                                
                                
                                    <option value="10">10
                                    </option>
                                
                            
                        
                            
                                
                                
                                    <option value="11">11
                                    </option>
                                
                            
                        
                            
                                
                                
                                    <option value="12">12
                                    </option>
                                
                            
                        
                            
                                
                                
                                    <option value="13">13
                                    </option>
                                
                            
                        
                            
                                
                                
                                    <option value="14">14
                                    </option>
                                
                            
                        
                            
                                
                                
                                    <option value="15">15
                                    </option>
                                
                            
                        
                            
                                
                                
                                    <option value="16">16
                                    </option>
                                
                            
                        
                            
                                
                                
                                    <option value="17">17
                                    </option>
                                
                            
                        
                            
                                
                                
                                    <option value="18">18
                                    </option>
                                
                            
                        
                            
                                
                                
                                    <option value="19">19
                                    </option>
                                
                            
                        
                            
                                
                                
                                    <option value="20">20
                                    </option>
                                
                            
                        
                            
                                
                                
                                    <option value="21">21
                                    </option>
                                
                            
                        
                            
                                
                                
                                    <option value="22">22
                                    </option>
                                
                            
                        
                            
                                
                                
                                    <option value="23">23
                                    </option>
                                
                            
                        
                            
                                
                                
                                    <option value="24">24
                                    </option>
                                
                            
                        
                            
                                
                                
                                    <option value="25">25
                                    </option>
                                
                            
                        
                            
                                
                                
                                    <option value="26">26
                                    </option>
                                
                            
                        
                            
                                
                                
                                    <option value="27">27
                                    </option>
                                
                            
                        
                            
                                
                                
                                    <option value="28">28
                                    </option>
                                
                            
                        
                            
                                
                                
                                    <option value="29">29
                                    </option>
                                
                            
                        
                            
                                
                                
                                    <option value="30">30
                                    </option>
                                
                            
                        
                        
                            
                            
                                
                            
                        
                    </select><span tabIndex="-1" class="a-button a-button-dropdown a-button-small"><span class="a-button-inner"><span class="a-button-text a-declarative" data-action="a-dropdown-button" role="button" tabIndex="0" aria-hidden="true"><span class="a-dropdown-label">Menge:</span><span class="a-dropdown-prompt">1</span></span><i class="a-icon a-icon-dropdown"></i></span></span></span>
                </div>
            </div>
            
        </span>
    </div>
    
    
    


    </div>
</div>





	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
    

    
    
        
            










    
    
     
         
         
             <div id="simpleBundleEU_feature_div" class="feature" data-feature-name="simpleBundleEU">
         
     




    

    
    
    
        
            
                
	                
	                
	                	

    








	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
    

    
    
        
            










    
    
     
         
         
             <div id="asg_feature_div" class="feature" data-feature-name="asg">
         
     




    

    
    
    
        
            
                
	                
	                
	                	








    
    
    
        
        
    


	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
    

    
    
        
            










    
    
     
         
         
             <div id="addToCart_feature_div" class="feature" data-feature-name="addToCart">
         
     




    

    
    
    
        
            
                
	                
	                
	                	















    
    
    










      
      
      
          <div class="a-button-stack">
              
              <span id="submit.add-to-cart" class="a-button a-spacing-small a-button-primary a-button-icon"><span class="a-button-inner"><i class="a-icon a-icon-cart"></i><input id="add-to-cart-button" name="submit.add-to-cart" title="In den Einkaufswagen" data-hover="Wählen Sie &lt;b&gt;__dims__&lt;/b&gt; auf der linken Seite&lt;br&gt; zum Hinzufügen zum Einkaufswagen" class="a-button-input" type="submit" value="In den Einkaufswagen" aria-labelledby="submit.add-to-cart-announce"><span id="submit.add-to-cart-announce" class="a-button-text" aria-hidden="true">In den Einkaufswagen</span></span></span>
          </div>
      






	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
    

    
    
        
            










    
    
     
         
         
             <div id="buyNow_feature_div" class="feature" data-feature-name="buyNow">
         
     




    

    
    
    
        
            
                
	                
	                
	                	












	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
    

    
    
        
            










    
    
     
         
         
             <div id="highValueMessaging_feature_div" class="feature" data-feature-name="highValueMessaging">
         
     




    

    
    
    
        
            
                
	                
	                
	                	




    






	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
    

    
    
        
            










    
    
     
         
         
             <div id="oneClick_feature_div" class="feature" data-feature-name="oneClick">
         
     




    

    
    
    
        
            
                
	                
	                
	                	






      








<div id="OneClickBox" class="a-button-stack">
    
        
        

        
        
            <div id="oneClickSignIn" class="a-section a-spacing-base a-text-center">
                






    <hr class="a-divider-normal">
    
        
        
            
                
                
                    
                
            

            <a class='oneClickSignInLink' href='/gp/product/utility/edit-one-click-pref.html/ref=dp_oc_signin?ie=UTF8&amp;query=&amp;returnPath=%2Fgp%2Fproduct%2FB01DQDZVCO'>
                <span class="a-size-mini">1-Click-Bestellungen aktivieren</span>
            </a>
        
    


                
                    
                    
                
            </div>
        

        
        
    
</div>



	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
    

    
    
        
            










    
    
     
         
         
             <div id="glowContextualIngressPt_feature_div" class="feature" data-feature-name="glowContextualIngressPt">
         
     




    

    
    
    
        
            
                
	                
	                
	                	




    
        
        
            
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





        
        
    
    

    
    
        
            










    
    
     
         
         
             <div id="unifiedLocation_feature_div" class="feature" data-feature-name="unifiedLocation">
         
     




    

    
    
    
        
            
                
	                
	                
	                	





	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
    


    </div>


        
    




    	    
        
        
        
        
    
    
    

    















    </div>






    </form>
 </div>
            </div>

        </div></div>

        
        
        

        
        

    






            

            
            

        
            
            












    
    

    






            

            
            

        
            
            












    
    

    

        
        
        
        

        <div id="usedAccordionRow" class="a-box" data-a-accordion-row-name="usedAccordionRow"><div class="a-box-inner a-accordion-row-container">

            <div class="a-accordion-row-a11y" role="radio" aria-checked="false" aria-expanded="false"><a aria="" data-action="a-accordion" class="a-accordion-row a-declarative accordion-header" href="#" aria-label=""><i class="a-icon a-accordion-radio a-icon-radio-inactive"></i><h5>
                


























    

    
    
          
    


    
        
        
                
                






    
        
        

        
    
        
        

        
            
            
            
        
    

               
















    
    
        
        
            
            
                
            
        
    
    




<div class="a-row">
   <div class="a-column a-span12">Gebraucht</div>
   
        
              <div class="a-column a-span12 a-text-left">
              <span id="usedPrice" class="a-size-base a-color-secondary header-price a-text-normal">EUR 13,42</span>
              </div>
              
        
        
   
</div>

        
    

            </h5></a></div>

            <div class="a-accordion-inner accordion-row-content">
                











 
     
     
     
         
     
 


 <div class="a-section">
     <form method="post" id="addToCart" action="/gp/product/handle-buy-box/ref=dp_start-bbf_1_glance" class="a-content">
              <input type="hidden" id="session-id" name="session-id" value="262-9898842-9713804">
              <input type="hidden" id="ASIN" name="ASIN" value="B01DQDZVCO">
              <input type="hidden" id="offerListingID" name="offerListingID" value="xWiVgsy%2Fi06FM%2FmFBVX8V544M5jpBJTDE5QWDozxDPkfg9Y8A59UZZ6WF6MmfQYrMyc%2Bu4Bgck5aNDQcuf1nfRa96cQmxWVZ%2B%2FmlgtDmEtDLa77vGQfAXQ%2Fx%2F%2FsbwgwTXLUF0YRxepzYXrNvgeerkhXxsRfKXsDc">
              <input type="hidden" id="isMerchantExclusive" name="isMerchantExclusive" value="0">
              <input type="hidden" id="merchantID" name="merchantID" value="A2KTBS1FE89V3M">
              <input type="hidden" id="isAddon" name="isAddon" value="0">
              <input type="hidden" id="nodeID" name="nodeID" value="3167641">
              <input type="hidden" id="sellingCustomerID" name="sellingCustomerID" value="A2KTBS1FE89V3M">
              <input type="hidden" id="qid" name="qid" value="1546375481">
              <input type="hidden" id="sr" name="sr" value="8-8">
              <input type="hidden" id="storeID" name="storeID" value="kitchen">
              <input type="hidden" id="tagActionCode" name="tagActionCode" value="3167641">
              <input type="hidden" id="viewID" name="viewID" value="glance">
              <input type="hidden" id="rebateId" name="rebateId" value="">
              




    
            
                
                






            

            
            

            
            

            
            <input type="hidden" id="rsid" name="rsid" value="262-9898842-9713804">
            <input type="hidden" id="sourceCustomerOrgListID" name="sourceCustomerOrgListID" value="">
            <input type="hidden" id="sourceCustomerOrgListItemID" name="sourceCustomerOrgListItemID" value="">
            <input type="hidden" name="wlPopCommand" value="">
            
            

     
     
     <input type="hidden" id="usedMerchantID" name="usedMerchantID" value="A8KICS1PHF7ZO"/>
     <input type="hidden" id="usedOfferListingID" name="usedOfferListingID" value="GAKpB5g8QGA3g970DY5YFBJvQo4QtkUrc0J6ICcszNFkbATjfyE0GuCxP5yYRqiNAsxcIH0edN1j5XifzoG5kZaMSiR%2B6gNTRCqfWpG9ryiY4ZPNBtM5VvxLiVvlEEJlBfmlo196puid%2B%2F3jYKuWow%3D%3D"/>
     <input type="hidden" id="usedSellingCustomerID" name="usedSellingCustomerID" value="A8KICS1PHF7ZO"/>

    
    
        
        










    
    
     
         
         
             <div id="usedBuyBoxShippingMessage_feature_div" class="feature" data-feature-name="usedBuyBoxShippingMessage">
         
     




    

    
    
    
        
            
                
	                
	                
	                	






  
  



	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
    
        
        










    
    
     
         
         
             <div id="usedBuyBoxCondition_feature_div" class="feature" data-feature-name="usedBuyBoxCondition">
         
     




    

    
    
    
        
            
                
	                
	                
	                	




  
  
  
  
    
  
  
  
  



  
  
  
  
  

<div class="a-section a-spacing-base">
  <div class="a-row">
    <strong>
      Gebraucht: Sehr gut
    </strong>
    <span class="a-size-base">
      <span class="a-color-tertiary"> | </span><a id="usedItemConditionInfoLink" class="a-link-normal" href="#">Details</a>
    </span>
  </div>
  <div class="a-row">
    Verkauft von
    
      
      
        <a class="a-link-normal" href="/gp/help/seller/at-a-glance.html?ie=UTF8&amp;seller=A8KICS1PHF7ZO&amp;isAmazonFulfilled=1">Warehouse Deals</a>
      
    
  </div>

  
    <div class="a-row">
      
      <a id="SSOFpopoverLink_ubb" class="a-link-normal" href="/gp/help/customer/display.html?ie=UTF8&amp;ref=dp_ubb_fulfillment&amp;nodeId=106096011">Versand durch Amazon</a>
    </div>
  
</div>


<div class="a-popover-preload" id="a-popover-usedItemConditionDetailsPopover">
  <div class="a-section a-spacing-micro">
    <span class="a-size-mini">
      <strong>Zustand:</strong>
      Gebraucht: Sehr gut
    </span>
  </div>
  
    <div class="a-section a-spacing-micro">
      <span class="a-size-mini">
        <strong>Kommentar:</strong> Geringfügiger Schönheitsfehler an der Ober- oder Vorderseite oder an den Seiten des Artikels. Der Artikel wird in der Originalverpackung zugestellt Die Verpackung wird beschädigt sein.
      </span>
    </div>
  
</div>



    
    
    
    
    










  
  
  
    
  







<div class="a-popover-preload" id="a-popover-SSOFpopoverLink_ubb-content">
  <p>Beim Versand durch Amazon nutzen Verkaufspartner die Logistik der Amazon-Versandzentren: Amazon verpackt und verschickt die Artikel und übernimmt den Kundenservice. <b>Ihre Vorteile:</b> <em>(1) Lieferung  ab 29 EUR Bestellwert (Bücher, Bekleidung und Schuhe generell versandkostenfrei, auch zusammen mit Media-Produkten). (2) Kombinieren und sparen - bestellen Sie bei Amazon.de oder Verkaufspartnern, die den Versand durch Amazon nutzen, wird Ihre Bestellung zu einer Lieferung zusammengefasst. (3) Alle Artikel sind mit Amazon Prime für noch schnellere Lieferung bestellbar.</em></p>
  <p>Wenn Sie Verkäufer sind, könnten Sie Ihre Verkäufe deutlich erhöhen, wenn Sie Versand durch Amazon (Fulfillment by Amazon) nutzen. Wir laden Sie ein, <a class="a-link-normal" target="_blank" rel="noopener" href="/gp/seller/fba/fulfillment-by-amazon.html?ie=UTF8&ld=AZFBADP&ref=dp_fba_pop">
    mehr über das Programm
  </a> zu erfahren.</p>
</div>

<script type="text/javascript">
  P.when("A", "jQuery", "a-popover", "ready").execute(function(A, $, popover) {
      "use strict";

      var title = "Was bedeutet Versand durch Amazon?";
      var triggerId = "#SSOFpopoverLink_ubb";
      var contentId = "SSOFpopoverLink_ubb-content";

      var options = {
        "header": title,
        "name": contentId,
        "activate": "onclick",
        "width": 430,
        "position": "triggerBottom"
      };

      var $trigger = $(triggerId);
      var instance = popover.create($trigger, options);
  });
</script>




	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
    
        
        










    
    
     
         
         
             <div id="usedBuyBoxSoldBy_feature_div" class="feature" data-feature-name="usedBuyBoxSoldBy">
         
     




    

    
    
    
        
            
                
	                
	                
	                	




 
	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
    
        
        










    
    
     
         
         
             <div id="glowContextualIngressPt_feature_div" class="feature" data-feature-name="glowContextualIngressPt">
         
     




    

    
    
    
        
            
                
	                
	                
	                	


    
        






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





        
    
        
        










    
    
     
         
         
             <div id="usedBuyBoxAddToCart_feature_div" class="feature" data-feature-name="usedBuyBoxAddToCart">
         
     




    

    
    
    
        
            
                
	                
	                
	                	



















    
    
    










      
      
      
          <div class="a-button-stack">
              
              <span id="submit.add-to-cart-ubb" class="a-button a-spacing-small a-button-primary a-button-icon"><span class="a-button-inner"><i class="a-icon a-icon-cart"></i><input id="add-to-cart-button-ubb" name="submit.add-to-cart-ubb" title="In den Einkaufswagen" data-hover="Wählen Sie &lt;b&gt;__dims__&lt;/b&gt; auf der linken Seite&lt;br&gt; zum Hinzufügen zum Einkaufswagen" class="a-button-input" type="submit" value="In den Einkaufswagen" aria-labelledby="submit.add-to-cart-ubb-announce"><span id="submit.add-to-cart-ubb-announce" class="a-button-text" aria-hidden="true">In den Einkaufswagen</span></span></span>
          </div>
      







	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
    
        
        










    
    
     
         
         
             <div id="usedBuyBoxBuyNow_feature_div" class="feature" data-feature-name="usedBuyBoxBuyNow">
         
     




    

    
    
    
        
            
                
	                
	                
	                	









	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
    
        
        










    
    
     
         
         
             <div id="usedBuyBoxOneClick_feature_div" class="feature" data-feature-name="usedBuyBoxOneClick">
         
     




    

    
    
    
        
            
                
	                
	                
	                	









<div class="a-section a-spacing-none a-text-center">
     <div class="a-row">
         













<div class="a-button-stack">
    
        
        

        
        
            <div id="oneClickSignIn" class="a-section a-spacing-base">
                






    <hr class="a-divider-normal">
    
        
        
            
                
                
                    
                
            

            <a class='oneClickSignInLink' href='/gp/product/utility/edit-one-click-pref.html/ref=dp_oc_signin?ie=UTF8&amp;query=&amp;returnPath=%2Fgp%2Fproduct%2FB01DQDZVCO'>
                <span class="a-size-mini">1-Click-Bestellungen aktivieren</span>
            </a>
        
    


            </div>
        

        
        
    
</div>

     </div>

     
</div>
	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
    

    </form>
 </div>
            </div>

        </div></div>

        
        
        

        
        

    






            

            
            

        
            
            












    
    

    






            

            
            

        

    </div>
    




        
    





    	    
        
        
        
        
    
    
    

    















    </div>





                 
                 
           </div>
        
    
        
           
           
           <div id="digitalDashHighProminenceAccordion_feature_div" data-feature-name="digitalDashHighProminenceAccordion" data-template-name="digitalDashHighProminenceAccordion" class="a-section a-spacing-none">
                 
                 










    
    
     
         
         
             <div id="digitalDashHighProminenceAccordion_feature_div" class="feature" data-feature-name="digitalDashHighProminenceAccordion">
         
     




    

    
    
    
        
            
                
	                
	                
	                	






    <div class="a-section">
        














    
    
    
    

    
    

    
    

    
    
    
    
    
    
    
    
    <div id="digital-dash-create" class="a-section a-spacing-none">

        
        <div id="digital-dash-create-success-changeover" class="a-changeover" style="display: none"><div class="a-changeover-inner"><i class="a-icon a-icon-checkmark-inverse"></i><strong class="a-size-medium">Hinzugefügt.</strong></div></div>

        <div id="digital-dash-create-error-message" class="a-box a-alert a-alert-error aok-hidden" aria-live="assertive" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">
            Fehler beim Erstellen des Dash Buttons. Bitte versuchen Sie es später erneut.
        </div></div></div>

        
            
                
                







    
        








<div id="digital-dash-create-high-prominence" class="a-section a-spacing-none">
    
        
        
            <span id="digital-dash-create-success-message" class="a-button a-button-span12"><span class="a-button-inner"><a id="digital-dash-create-success-message-announce" href="/ddb/your-dash-buttons/ref=snk_ddb_ydb_dp_cw_hprm_ncdb" class="a-button-text a-text-left" role="button">
                Dash Buttons anzeigen
            </a></span></span>

            <span class="a-declarative" data-action="digital-dash-create" data-digital-dash-create="{&quot;data&quot;:{&quot;asin&quot;:&quot;B01DQDZVCO&quot;,&quot;source&quot;:&quot;dp&quot;,&quot;currencyCode&quot;:&quot;EUR&quot;,&quot;basePrice&quot;:&quot;14.99&quot;,&quot;token&quot;:&quot;gOvmwYCHd+Jt7raVtQRinfQOEHgrjYeNdlXBMncAAAAJAAAAAFwr0VFyYXcAAAAA&quot;},&quot;el&quot;:&quot;#digital-dash-create&quot;,&quot;href&quot;:&quot;/ddb/createButton?ref_=snk_ddb_cdbajx_dp_cw_hprm&quot;}">
                <span class="a-button a-button-span12 digital-dash-create-button"><span class="a-button-inner"><button class="a-button-text a-text-left" type="button">
                    Zu Dash Buttons hinzufügen
                </button></span></span>
            </span>
        
    
    
        <div class="a-section a-spacing-none a-spacing-top-small a-text-center">
            <span class="a-declarative" data-action="a-modal" data-a-modal="{&quot;name&quot;:&quot;dd-create-learn-more&quot;,&quot;url&quot;:&quot;/ddb/dp-learn-more?ref_=snk_ddb_lm_dp_cw&quot;}">
                <a class="a-link-normal" href="#"> Weitere Informationen zu Dash Buttons </a>
            </span>
        </div>
    
</div>

    
    


            
            
        
    </div>


    </div>

	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





                 
                 
           </div>
        
    
        
           
           
           <div id="addToWishlistAccordion_feature_div" data-feature-name="addToWishlistAccordion" data-template-name="addToWishlistAccordion" class="a-section a-spacing-none">
                 
                 










    
    
     
         
         
             <div id="addToWishlistAccordion_feature_div" class="feature" data-feature-name="addToWishlistAccordion">
         
     




    

    
    
    
        
            
                
	                
	                
	                	




      































    












    









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
      <script type="a-state" data-a-state="{&quot;key&quot;:&quot;atwl&quot;}">{"showInlineLink":false,"hzPopover":true,"wishlistButtonId":"add-to-wishlist-button","dropDownHtml":"","inlineJsFix":false,"wishlistButtonSubmitId":"add-to-wishlist-button-submit","maxAjaxFailureCount":"3","asin":"B01DQDZVCO"}</script>
      


















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



	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





                 
                 
           </div>
        
    
        
           
           
           <div id="digitalDashLowProminenceAccordion_feature_div" data-feature-name="digitalDashLowProminenceAccordion" data-template-name="digitalDashLowProminenceAccordion" class="a-section a-spacing-none">
                 
                 










    
    
     
         
         
             <div id="digitalDashLowProminenceAccordion_feature_div" class="feature" data-feature-name="digitalDashLowProminenceAccordion">
         
     




    

    
    
    
        
            
                
	                
	                
	                	






	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





                 
                 
           </div>
        
    

        
    




    	    
        
        
        
        
    
    
    

    















    </div>





                
                
            
            
        
    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    

    



</div>

    	    
        
        
        
        
    
    
    
        
    

    















    </div>





        
        
    
        
        
        
        







        
        
    
        
        
        
        










    
    
     
         
         
             <div id="glowContextualIngressPt_feature_div" class="feature" data-feature-name="glowContextualIngressPt">
         
     




    

    
    
    
        
            
                
	                
	                
	                	
	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="universalFreshATC_feature_div" class="feature" data-feature-name="universalFreshATC">
         
     




    

    
    
    
        
            
                
	                
	                
	                	




	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        







        
        
    
        
        
        
        










    
    
     
         
         
             <div id="moreBuyingChoices_feature_div" class="feature" data-feature-name="moreBuyingChoices">
         
     




    

    
    
    
        
            
                
	                
	                
	                	































































    
    
    
      <div class="a-section a-spacing-medium a-spacing-top-base">
        <div id="mbc-action-panel-wrapper" style="">
            
            
            
            
            
                <div id="mbc" data-asin="B01DQDZVCO" data-brand="WINOMO" data-product-group="home_display_on_website" data-timeout="Leider ist ein Problem aufgetreten." class="a-box-group">
                
                    
                    
                        <style type="text/css"> .olp-prime-badge {vertical-align: text-top !important} </style>
                        <div class="a-box a-text-center"><div class="a-box-inner a-padding-small">
                            
                                
                            
                                
                                <h5>
                                    <span id="mbc-title">Andere Verkäufer auf Amazon</span>
                                </h5>
                        </div></div>
                    
                
                
                
                    
                        <script type="text/javascript">
                            var MBCFeatureScope = "mbcUI";
                            if (typeof uet == 'function') {
                                uet('bb', MBCFeatureScope, {wb: 1});  //timestamp body-begin
                            }
                        </script>
                        
                        
                        <script type="text/javascript">
                            if (typeof uet == 'function') {
                                uet('be', MBCFeatureScope, {wb: 1});  //timestamp body-end
                            }
                            if (typeof uex == 'function') {
                                uex('ld', MBCFeatureScope, {wb: 1});  //send metrics
                            }
                        </script>
                    
                    
                    
                
                
                  <div class="a-box"><div class="a-box-inner a-padding-base">
                    
                        
                        
                            <span id="mbc-olp-link" class="a-size-small a-center"><a href="/gp/offer-listing/B01DQDZVCO/ref=dp_olp_all_mbc?ie=UTF8&amp;condition=all">3 Angebote</a> ab <span class='a-color-price'>EUR 13,42</span></span>
                        
                    
                  </div></div>
                
                </div>
            
        </div>
        
        








    <div class="a-section a-padding-base">
        <span class="a-size-small sdpText">Möchten Sie verkaufen?</span>
        <span class="a-button a-button-small a-float-right"><span class="a-button-inner"><a href="https://catalog-retail.amazon.de/abis/syh/DisplayCondition/ref=dp_sdp_sell?_encoding=UTF8&amp;ld=AMZDP&amp;coliid=&amp;asin=B01DQDZVCO&amp;colid=&amp;qid=1546375481&amp;sr=8-8" class="a-button-text" role="button">
            Bei Amazon verkaufen
        </a></span></span>
    </div>


      </div>
    

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





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="amsDetailRight_feature_div" class="feature" data-feature-name="amsDetailRight">
         
     




    

    
    
    
        
        
        
            
                
                    


    
    
    
    
    
    

    <div id="amsDetailRightV2" data-detailPageAsin="B01DQDZVCO">
        <script>if (typeof uet === 'function' && typeof ues === 'function') {var scope = 'Detail_ams-detail-right-v2_desktop';var placementId = '';ues('wb', 'adplacements:' + scope.replace(/\\_/g, ':'), {wb:1}); uet('bb', 'adplacements:' + scope.replace(/\\_/g, ':'), {wb:1}); if (placementId) {ues('wb', 'adplacements:' + placementId, {wb:1});uet('bb', 'adplacements:' + placementId, {wb:1});}}</script><div id="ape_Detail_ams-detail-right-v2_desktop_placement" class="copilot-secure-display celwidget  text/x-dacx-safeframe" data-campaign="9040" style="display: block; margin:auto; line-height:0; margin-top:10px;" cel_widget_id="Detail_ams-detail-right-v2_desktop" data-ad-details='{"slot" :"Detail_ams-detail-right-v2_desktop","slotName" :"ams-detail-right-v2","src" : "https://aax-eu.amazon-adsystem.com/e/xsp/getAd?src=506&slot=ams-detail-right-v2&rid=01012e449a5812b988e8c56ff22caadafc60529b4f2d65308570956be88902107edd","adServer" :"cs","campaignId" :  "9040","arid" :"c39c2bf053fc4da0ae3af208f5075b28","size" :{"width": "100%","height" : "250px"},"allowedSizes" :[],"allowedDomains" :  ["g-ecx.images-amazon.com"],"aanParams" :   "site%3Damazon.de%3Bpt%3DDetail%3Bslot%3Dams-detail-right-v2%3Bpid%3DB01DQDZVCO%3Bq%3Dkleiderhaken%3Bbn%3D3167641%3Barid%3Dc39c2bf053fc4da0ae3af208f5075b28","loadAfter" :   "immediate","extraDelay" :  0,"iframeExtraStyle": "","iframeClass":  "","iframeSandbox":"","adPixels": [],"adPixelDelay": "0","aaxInstrPixelUrl": "","usePrefetchRoute": false,"serverSideFetchAd": "false","enableAdBlockerDetector": false,"disableResizeFunc": true,"fallbackStaticAdImgUrl": "","fallbackStaticAdClickUrl": "","fallbackStaticAdExtraStyle": "","adFeedbackInfo": {"endPoint": "/gp/aq-feedback/lazyLoad/handler/af-link-handler.html","boolFeedback": true,"slugText": "Anzeige"},"adPlacementMetaData": {"searchTerms": "a2xlaWRlcmhha2Vu","pageUrl": "aHR0cHM6Ly93d3cuYW1hem9uLmRlL2dwL3Byb2R1Y3QvQjAxRFFEWlZDTz9yZWYlNUY9c3IlNUYxJTVGOCZxaWQ9MTU0NjM3NTQ4MSZzcj04LTgma2V5d29yZHM9a2xlaWRlcmhha2Vu","adElementId": "ape_Detail_ams-detail-right-v2_desktop_placement","pageType": "Detail","slotName": "ams-detail-right-v2"},"adCreativeMetaData": {"adNetwork": "cs"},"advertisementStyle": {"position": "absolute","top": "2px","right": "0px","display": "inline-block","font": "normal 11px Arial","color": "grey"},"feedbackDivStyle": {"position": "relative","height": "14px","top": "2px"},"viewabilityStandards": [{"p": 0, "t": 0, "def": "amzn"}, {"p": 50, "t": 1, "def": "iab"}, {"p": 100, "t": 0, "def": "groupm"}],"ajaxWeblabTriggerId": "","abpStatus": "1","abpAcceptable": "true","DAsfUrl":"https://images-eu.ssl-images-amazon.com/images/G/03/ape/sf/desktop/DAsf-1.50.917d6c3._V459327015_.js"}' aria-hidden="true"></div><script>(function(){function a(d,e){if(window.addEventListener){window.addEventListener(d,e,false);}else{if(window.attachEvent){window.attachEvent("on"+d,e);}}}function c(d,e){if(window.removeEventListener){window.removeEventListener(d,e,false);}else{if(window.detachEvent){window.detachEvent("on"+d,e);}}}var b=function(){(function(){(function(j,n){j.sfLogErrors=j.sfLogErrors||false;var o=o||function(s,r){r=r||new Error(s);if(j.ue&&typeof ue.count=="function"){ue.count("adplacements:safeFrameError",1);}if(!j.sfLogErrors){return;}if(j.ueLogError){j.ueLogError(r,{logLevel:"ERROR",attribution:"APE-safeframe",message:s+" "});}else{if(typeof console!=="undefined"&&console.error){console.error(s,r);}}};j.aanParams=j.aanParams||{};j.aanParams["ams-detail-right-v2"]="site=amazon.de;pt=Detail;slot=ams-detail-right-v2;pid=B01DQDZVCO;q=kleiderhaken;bn=3167641;arid=c39c2bf053fc4da0ae3af208f5075b28";j["ams-detail-right-v2"]={};j["ams-detail-right-v2"].adStartTime=(new Date()).getTime();function d(){return j.innerHeight||n.documentElement.clientHeight;}function g(){return j.innerWidth||n.documentElement.clientWidth;}function e(t,r,s){if(t>0){return(s>t);}else{return(r>0);}}var f=function(){return(Date.now?Date.now():new Date().getTime());};throttle=function(s,u,y){var r,w,z;var x=null;var v=0;if(!y){y={};}var t=function(){v=y.leading===false?0:f();x=null;z=s.apply(r,w);if(!x){r=w=null;}};return function(){var B=f();if(!v&&y.leading===false){v=B;}var A=u-(B-v);r=this;w=arguments;if(A<=0||A>u){if(x){clearTimeout(x);x=null;}v=B;z=s.apply(r,w);if(!x){r=w=null;}}else{if(!x&&y.trailing!==false){x=setTimeout(t,A);}}return z;};};function l(u,w,v,r){try{var t=n.getElementById(u).getBoundingClientRect();if(e(t.top,t.bottom,d())&&e(t.left,t.right,g())){if(typeof uet=="function"){uet("bb","adplacements:viewablelatency:"+w,{wb:1});if(v){uet("bb","adplacements:viewablelatency:"+v,{wb:1});}}if(typeof uex=="function"&&j.ue&&typeof ue.count=="function"){if(j.apeViewableLatencyTrackers[r].loaded){uex("ld","adplacements:viewablelatency:"+w,{wb:1});if(v){uex("ld","adplacements:viewablelatency:"+v,{wb:1});}ue.count("adplacements:htmlviewed:loaded:"+w,1);if(v){ue.count("adplacements:htmlviewed:loaded:"+v,1);}}ue.count("adplacements:htmlviewed:"+w,1);if(v){ue.count("adplacements:htmlviewed:"+v,1);}}j.apeViewableLatencyTrackers[r].viewed=true;if(j.apeViewableLatencyTrackers[r].tracker){c("scroll",j.apeViewableLatencyTrackers[r].tracker);c("resize",j.apeViewableLatencyTrackers[r].tracker);}}}catch(s){j.apeViewableLatencyTrackers[r].valid=false;}}try{j.apeViewableLatencyTrackers=j.apeViewableLatencyTrackers||{};var q="ape_Detail_ams-detail-right-v2_desktop_placement";var p="Detail_ams-detail-right-v2_desktop".replace(/\\_/g,":");var h="";var i="c39c2bf053fc4da0ae3af208f5075b28";j.apeViewableLatencyTrackers[i]=j.apeViewableLatencyTrackers[i]||{};j.apeViewableLatencyTrackers[i].valid=true;l(q,p,h,i);if(j.apeViewableLatencyTrackers[i].valid&&!j.apeViewableLatencyTrackers[i].viewed){j.apeViewableLatencyTrackers[i].tracker=throttle(function(){l(q,p,h,i);},20);a("scroll",j.apeViewableLatencyTrackers[i].tracker);a("resize",j.apeViewableLatencyTrackers[i].tracker);}}catch(k){if(j.apeViewableLatencyTrackers&&j.apeViewableLatencyTrackers.c39c2bf053fc4da0ae3af208f5075b28){j.apeViewableLatencyTrackers.c39c2bf053fc4da0ae3af208f5075b28.valid=false;}o("Error initializing viewable latency instrumentation",k);}try{if(j.DAsf){j.DAsf.loadAds();}else{var m=n.createElement("script");m.type="text/javascript";m.async=true;m.setAttribute("crossorigin","anonymous");m.charset="utf-8";m.src="https://images-eu.ssl-images-amazon.com/images/G/03/ape/sf/desktop/DAsf-1.50.917d6c3._V459327015_.js?csm_attribution=APE-SafeFrame";m.onerror=function(){o("Error loading SafeFrame library");};(n.getElementsByTagName("head")[0]||n.getElementsByTagName("body")[0]).appendChild(m);}}catch(k){o("Error appending DAsf library",k);}}(window,document));})();};b();})();</script>
    </div>



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="servicesInterstitial_feature_div" class="feature" data-feature-name="servicesInterstitial">
         
     




    

    
    
    
        
            
                
	                
	                
	                	










	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        







        
        
    
        
        
        
        







        
        
    
        
        
        
        







        
        
    
</div>
         
<div id="leftCol" class="leftCol">
    
        
        
        
        










    
    
     
         
         
             <div id="imageBlock_feature_div" class="feature" data-feature-name="imageBlock">
         
     




    

    
    
    
        
            
                
	                
	                
	                	





    
      





<div id="imageBlock" aria-hidden="true" class="a-section imageBlockRearch">
    <div class="a-fixed-left-grid"><div class="a-fixed-left-grid-inner" style="padding-left:32px">
        
            <div id="altImages" class="a-fixed-left-grid-col a-col-left" style="width:40px;margin-left:-40px;float:left;">
            















<ul class="a-unordered-list a-nostyle a-button-list a-vertical a-spacing-top-micro">

    
    

   
    
    
        
            
            
            












<li class="a-spacing-small item"><span class="a-list-item">
    <span class="a-declarative" data-action="thumb-action" data-thumb-action="{&quot;thumbnailIndex&quot;:&quot;0&quot;,&quot;variant&quot;:&quot;MAIN&quot;,&quot;index&quot;:&quot;0&quot;,&quot;type&quot;:&quot;image&quot;}">
        <span class="a-button a-button-selected a-button-thumbnail a-button-toggle a-button-focus"><span class="a-button-inner"><input class="a-button-input" type="submit"><span class="a-button-text" aria-hidden="true">
            <img alt="" src="https://images-na.ssl-images-amazon.com/images/I/41cMneCIIgL._SS40_.jpg">
        </span></span></span>
    </span>
</span></li>

                    
        
    
        
            
            
            












<li class="a-spacing-small item"><span class="a-list-item">
    <span class="a-declarative" data-action="thumb-action" data-thumb-action="{&quot;thumbnailIndex&quot;:&quot;1&quot;,&quot;variant&quot;:&quot;PT01&quot;,&quot;index&quot;:&quot;1&quot;,&quot;type&quot;:&quot;image&quot;}">
        <span class="a-button a-button-thumbnail a-button-toggle"><span class="a-button-inner"><input class="a-button-input" type="submit"><span class="a-button-text" aria-hidden="true">
            <img alt="" src="https://images-na.ssl-images-amazon.com/images/I/41hD0KW2jFL._SS40_.jpg">
        </span></span></span>
    </span>
</span></li>

                    
        
    
        
            
            
            












<li class="a-spacing-small item"><span class="a-list-item">
    <span class="a-declarative" data-action="thumb-action" data-thumb-action="{&quot;thumbnailIndex&quot;:&quot;2&quot;,&quot;variant&quot;:&quot;PT02&quot;,&quot;index&quot;:&quot;2&quot;,&quot;type&quot;:&quot;image&quot;}">
        <span class="a-button a-button-thumbnail a-button-toggle"><span class="a-button-inner"><input class="a-button-input" type="submit"><span class="a-button-text" aria-hidden="true">
            <img alt="" src="https://images-na.ssl-images-amazon.com/images/I/41g%2BZTSqZIL._SS40_.jpg">
        </span></span></span>
    </span>
</span></li>

                    
        
    
        
            
            
            












<li class="a-spacing-small item"><span class="a-list-item">
    <span class="a-declarative" data-action="thumb-action" data-thumb-action="{&quot;thumbnailIndex&quot;:&quot;3&quot;,&quot;variant&quot;:&quot;PT03&quot;,&quot;index&quot;:&quot;3&quot;,&quot;type&quot;:&quot;image&quot;}">
        <span class="a-button a-button-thumbnail a-button-toggle"><span class="a-button-inner"><input class="a-button-input" type="submit"><span class="a-button-text" aria-hidden="true">
            <img alt="" src="https://images-na.ssl-images-amazon.com/images/I/31cnyCN%2B7HL._SS40_.jpg">
        </span></span></span>
    </span>
</span></li>

                    
        
    
        
            
            
            












<li class="a-spacing-small item"><span class="a-list-item">
    <span class="a-declarative" data-action="thumb-action" data-thumb-action="{&quot;thumbnailIndex&quot;:&quot;4&quot;,&quot;variant&quot;:&quot;PT04&quot;,&quot;index&quot;:&quot;4&quot;,&quot;type&quot;:&quot;image&quot;}">
        <span class="a-button a-button-thumbnail a-button-toggle"><span class="a-button-inner"><input class="a-button-input" type="submit"><span class="a-button-text" aria-hidden="true">
            <img alt="" src="https://images-na.ssl-images-amazon.com/images/I/41n1RPY-YsL._SS40_.jpg">
        </span></span></span>
    </span>
</span></li>

                    
        
    
        
            
            
            












<li class="a-spacing-small item"><span class="a-list-item">
    <span class="a-declarative" data-action="thumb-action" data-thumb-action="{&quot;thumbnailIndex&quot;:&quot;5&quot;,&quot;variant&quot;:&quot;PT05&quot;,&quot;index&quot;:&quot;5&quot;,&quot;type&quot;:&quot;image&quot;}">
        <span class="a-button a-button-thumbnail a-button-toggle"><span class="a-button-inner"><input class="a-button-input" type="submit"><span class="a-button-text" aria-hidden="true">
            <img alt="" src="https://images-na.ssl-images-amazon.com/images/I/4194Chik2fL._SS40_.jpg">
        </span></span></span>
    </span>
</span></li>

                    
        
    
        
            
            
            












<li class="a-spacing-small item"><span class="a-list-item">
    <span class="a-declarative" data-action="thumb-action" data-thumb-action="{&quot;thumbnailIndex&quot;:&quot;6&quot;,&quot;variant&quot;:&quot;PT06&quot;,&quot;index&quot;:&quot;6&quot;,&quot;type&quot;:&quot;image&quot;}">
        <span class="a-button a-button-thumbnail a-button-toggle"><span class="a-button-inner"><input class="a-button-input" type="submit"><span class="a-button-text" aria-hidden="true">
            <img alt="" src="https://images-na.ssl-images-amazon.com/images/I/31Gxko1B4CL._SS40_.jpg">
        </span></span></span>
    </span>
</span></li>

                    
        
    
    
     
    
        
        <li class="a-spacing-small videoCountTemplate aok-hidden"><span class="a-list-item">
            <span id="videoCount_template" class="a-size-mini a-color-secondary video-count a-text-bold a-nowrap"> <hza:string id="" /></span>
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
        
        
        <div class="a-text-center a-fixed-left-grid-col a-col-right" style="padding-left:1%;float:left;">
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

        <span id="imageBlockEDPOverlay"></span>



	<li class="image item itemNo0 selected maintain-height"><span class="a-list-item">
	    <span class="a-declarative" data-action="main-image-click" data-main-image-click="{}">
	        <div id="imgTagWrapperId" class="imgTagWrapper">
	            <img alt="WINOMO Kleiderhaken Klappbar Wand-Kleiderständer" src="
data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAEsASwDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD2aiiigAooooAKKKzdR1R7eZbGxhF1qEo3LEWwsa/35G52r+pPAHXABcubu3soGnup44Il6vIwUD86oLrclzzp+l3lyn/PV1EKf+PkMfqFIpbPRI47hb3UJTf3y8rNIuFi/wCuachB9OT3Jq9d3AtbZ5ypYL2HegCp9p1jGf7Mt/p9r5/9AxUba41rzqOmXdqn/PVVEyfmhJA9yAKp6h4paxsnu/sJkSMjcok5IJA449627S6jvbSG6iz5cyB13DBwaAFtrq3vIFntpo5om6PGwYH8RUtZV3oaG4e90yX7BetyzouY5j/00TgP9eGHYipNN1U3Ur2d5D9l1CEbpIN24Mv99G43L79jwcGgDRooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigCjqt+9lAiW8Ylu7hvLt4ieGfHU+igck+g9cCl0zTU0+F90hmuZm33Fww+aV/X2A6AdAABVbSh/aF3LrLglHBisweghzy4/3yAfoErWoAKp6r/yDpfw/mKuVT1X/AJB0v4fzFAHJaxg6NcBuhA/mK6rQv+QFY46eQv8AKuU1gbtHnH0/mK6vQv8AkBWP/XBP5UAX6o6ppo1CJGil8i7gO+3uAMmNvcd1I4I7j3wReooApaXfm/tmMkfk3MLmK4hzny5AASM9wQQQe4INXaydSH9nX8WrrxGwWC8A/uZOx/8AgLNz/ss3oK1qACiiigAooooAKKKKACiiigAooooAKKKrHUrESNGbyAOpwymQAg+lAFmioY7q3mbbFcRO3XCuCamoAKKKKACiiigAooooAKKKKACiiigAooooAKztad2tEs4WKzXsggUjgqpyXP1CBiPfFaNZw/0jxAe62luMf70hOfxAQf8AfVAF+ONIYlijUIiAKqgYAA6CnUUUAFUtXONMmP0/mKu1R1n/AJBc34fzFAHIawx/sef/AID/ADFddoX/ACArH/rgn8q5DVCDpUwPPT+Yrr9C/wCQFY/9cE/lQBfooooAZNDHcQSQyqHjkUq6noQRgiqWjSSmx+zzsXntHMEjN1fb91j7su1vxrQrOT/RvEDr/BewBwB2eM4Yn6h0/wC+DQBo0UUUAFFFFABRRRQAUUUUAFFFZ+r6ommW2QA88nEaep9T7CgCp4g1g2kf2O1b/SZByw/5Zr6/X0/OuT8hSVjRC7scKByWJqZ2Ys8szl5HOXY9Sagv7ptOjMERxezp8zDrBGR+jMD+A9zVCK15L5UostM3tNEfMnuIMkll5wCP4F7nueewrtvCusS6vphe5YNPGxV2UYB7jj6V5uUUBMAbUOcHoa7fwAMafcn1l/pSYHWUUUUhhRRRQAUUUUAFFFFABRRRQAUUUUAFUNLG43s//Pa6c/8AfIEf/slX6paPzpcDf3wX/wC+iT/WgC7RRRQAVn64caTN/wAB/mK0Kztd/wCQRN/wH+YoA4/UjnS5QPb+YrstC/5ANj/1wT+VcZfDNjIv0/mK7LQv+QDYf9e6fyFAGhRRRQAVR1H5J7Gf+5cBT9GBX+ZFXqo6uMWG89IpYpD9FdSf0FAF6iiigAooooAKKKKACiimySJFG0kjBUUZJPagCG9vIrG1eeU8L0A6sewFcbczy3dy91OfnfsOijsBVrUb5tSufMIKxJxEh/mfc1TkeKGB7q5J8iM4wDgyN2Qe/wDIU0IhuLldPgFywDTv/wAe0TDIJ/vn/ZH6n6GsE7mZndi8jsWd26sT1JqW4uJby4e5uCDI/GBwqKOigdgKI7Z5YzLjCZwD60wISMnnjFdv4CH/ABLJz6y/0rjrkYuph6MRXZeA/wDkFTf9daTA6miiikMKKKKACiiigAooooAKKKKACiiigAqlo/8AyB7P/riv8qu1S0f/AJBFsv8AcTafw4/pQBdooooAKzdfONImPuv8xWlWZ4h/5A0v1X+YoA5OfD28g9h/MV1+hf8AIBsP+vdP5VxwG5XXtt/qK7HQf+QDYf8AXun8hQBoUUUUAFU9Y/5A16fSBz/46auVS1g50ySP/nqyRf8AfbBf60AXaKKKACiiigAooooAK5nWNSN7IbeFv9HQ/MR/Gf8AAVb1rUjzZW7c/wDLVh2Hp9axlQuwjjXJPAFADMA7mdxHFGu6SQ9EUdT/APWrn76/OoXAZVKW8XEER/hHcn3PU/l2qbVtQS6Is7Zs2sTZZx/y3cd/90dvrmqlpZ3OpX0dhZKDNJyWP3Y17sfYVQibTrCTU5ZNuVtrfBnk9M9FHuf061sSRqVVUUKijaqjsK6KbS7bR/DTWVsCEXaWY/edsjLH3NYe3kUgOevB/p1x/wBdG/nXZeBBjSZv+uprj7wf6fc/9dW/nXY+BhjSJP8ArqaGB01FFFIYUUUUAFFFFABRRRQAUUUUAFFFFABVHSjiK4h7w3Mi49MncP0YVerPg/ca7cxdEuYlnHu6/I5/Ly6ANCiiigArJ8SnGiTH3X+YrWrI8UHGhTf7y/zFAHKWzZLj/Y/qK7LQf+QDYf8AXun8hXF2h+eT/rn/AFFdpoH/ACL+n/8AXun/AKCKANCiiigAqjqfzm0h/wCelyh/75y//stXqz3Pn6/FGD8tpAZHH+05wmPwST8xQBoUUUUAFFFFABWfquofZI/KiOZ5Bx/sj1qe+vEsrcyNyx4RfU1zUjvJI0srbnfkmgCIjA6kk8knqTWZrV8Yg+m27fvGGLmRT9wf88wfX+9+XrVvVNROmxKsRH22YZj/AOmS/wB8+/p+dc1lIYyxPA6k9TVIQbHZ44IIzJLIwWNF6sTXo/hvQI9DscOVku5vmnlA6n+6PYf/AF6oeEfDxsk/tO9TF3Mv7tD/AMsUP/sx7+nT1rqKTGZ+t/8AILk+o/nXNAfMK6XW/wDkFv8A7y/zrmx94UAc5dj/AE+5/wCurfzrs/A//IHk/wCuprjrsZvrn/rq3867PwSMaM3/AF1NDEdFRRRSGFFFFABRRRQAUUUUAFFFFABRRRQAVmawTbfZtSHS0l/ej1ib5W/AZDf8ArTpksaTRPFIodHUqynoQeooAfRWZossiRSabcOWuLEhNzHmSM/6tz9QME/3latOgArG8VcaDL/vL/MVs1jeK/8AkAyf76fzoA5Ky5eT/rn/AFFdtoH/ACL+n/8AXtH/AOgiuKsh88v/AFz/AKiu10D/AJF/T/8Ar2j/APQRTYGhRRRSAQnAyelZ2in7RBNqJH/H7KZIz6xD5Yz+KgN/wKm6zI84i0qBiJb0kOw/5Zwj77fiPlHuw9K0kRY0VEUKqjAAGABQA6iiigAqOeeO2haWVsKv609mCKWYgADJJ7Vzt9eG9lyMiFD8g9fc0AQ3E8l3OZ5eD0Vf7o9KqXt5Hp1r9plAd2JWCI/8tG9/9kd//r1NNLFbQPc3LFIY/vEdSeyj1JrlLu7l1C6a6mG0kYjjByIl7KP8e5yaYEckryyyXFw5eWU7nc9zXR+EfD/22VNWvEIgjObeMj75/vn2Hb359KzvD2hNr16TKpFhAf3rdPMb+4P6/wD169JRFjRURQqqMKoGAB6UNgOooopAZ+t/8gx/95f51zgHzCuj1oE6awHdl/nXJWWq22oanf6dAHE+mOizlgArbwSNvr0IOaYGTcj/AEy4/wCurfzrsvBf/IFb/rqa424/4+7j/ro3867PwYMaKf8Arq1DEdBRRRSGFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAZmrW06yRanZJvurUENEDjz4jyyfXjK57jsCauWV5BqFpHdWz74pBlT+hB9CDkEdiKmrHu7O7027k1HSo/OWU7rqy3AeacY3oTwr8DOeG74PNAGzWN4q50OT/AH1/nV/T9StNTgM1pLvCna6spV42/usp5U+xFVfENtcXekvFbRGWQsp2ggcA+9AHH2gw0v8A1z/qK7TQf+Rf0/8A69o//QRXJx6bqWWjFlOrsBt+XAPI79K7HS7aSz0q0tpceZDCqNt6ZAwaALdV769g06zkurliscY5wMknoAB3JPAHcmmajqdrpkIkuXOXO2ONAWeVv7qqOSfpVK0sbq/vI9S1aMRtESbWzDBhBxjcxHDSYJGRwASBnkkAm0m0nVpdQvlC3t1jcmc+TGPuxg98ZJJ7kntitGlooAKKKzNTvtoNtCfnP32H8I9PrQBX1O9+0ObeI/u1PzkfxH0+lUdoOcsqKoLMzHAUDqTSqpJVEGSeABWBreoi6Y2Fs4NvG376Qf8ALVh2H+yP1P4UwKmp6idUuF2BltIT+5QjBY93b3P6D8abp2nXGsagtjbHbn5pZCOI07n6+gqKOGa4uI7W2j8yeU7UQfz+gHNejaFo0OiWCwJh5n+aaXHLt/gOwoAt2Njb6dZR2dqmyKIYA7+5PuasUUUgCiiigChrH/IPP+8v86858Nf8j14u93tv5NXo2s/8g9v95f51514a/wCR78W/71v/ACamA+cf6XP/ANdG/nXZ+DxjRf8Ato1cdMP9Jn/66N/Ouz8Ij/iSj/ro1DA3KKKKQBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQBn3ujWt5cC6UyW14o2i5t22SY9D2YezAj2qIDXrQYzZ6ivYsTbuPrgMGP/AHzWrRQBm/btUx/yBjn/AK+Ux/n8KYV1674L2mnJ3MebiQ/QkKqn8GrVooAoWOjWljM1yPMuLtxhrm4bfIR6A/wj/ZXA9qv0UUAFFFQXVylrCXbk9FX1NAEWoXv2WMKmDK/3R6e9YnPJJJJPJPenO7Su0khy7HmqWqakNMt1KYa7lH7lD0Ud3PsO3qfxoAq65qZtVbT7ZsXEi/vnB5iU/wAP+8f0H14wMrEgCqfRVA5J9AKPu7nkcszEs7seWJ6k11XhHQjIy6xeJx/y7Rt2/wBsj+X5+lMRo+F/D/8AZcBu7pQb2Yc8f6pf7o/r/wDWroKKKQwooooAKKKKAKGs/wDIOf8A3l/mK868Nf8AI9eLP962/k1ejax/yDX/AN5f5ivOvDX/ACPHiw/7Vt/JqYE0o/0mb/ro3867LwkMaIv/AF0b+dcfIM3Ev/XRv512PhT/AJAif77fzpAbVFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRSEgAknAHUmgBssqQxNJIcKvU1gXFw91N5r8Doq+gqW9vDdy4UnyVPyj+8fWqrvHFG887iOGJdzsew/qT2HegCO6u4bC2N1OCyg7UjBwZG7KP6nsK5WaWa6ne5uWDTSHLEcADsB6AVJfX0mpXX2iRTHGo2wxZz5a/4nqTUulaXNrV+LWLKRJgzygfcHp9T/8AXpiLfhvQjrN19ouFP2GBun/PZh2+g7/l616ABgYAwBUdtbQ2dtHbW8YjijXaqjsKlpDCiiigAooooAKKKKAKOsf8g1/95f8A0IV514a/5Hbxb/v238nr0XWP+Qa/1X/0IV534bH/ABWniz/rpbfyemBZcfv5P98/zrsfCwxoif77fzrkXH7+T/fP866/wx/yBY/95v50gNeiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigArI1K981jbxH5AfnYfxH0qbUr3ywbeI/vGHzH+6P8aylXGFUc9AKAHKpdgox9TwAK5rVtSGozCKAn7HCcr281v759vSrWu6juD6Zbtlc4uZB3P9we3r+VY/OVRFZnYhUQDliegFAh8FtPeXUdnaqGnlPGeijuT7CvRtJ0q30exW1g5/idz1du5NU/DmhDSLUyTBWvJhmVuu0f3R7fzNbVAwooooAKKKKACiiigAooooAo6v8A8g2T6r/6EK878Nc+M/Fn/XW2/k9eiax/yDZPqv8A6EK868Mf8jp4tHpNbfyemBoMP3r/AO+f511vhkY0WL/eb+dcof8AWv8A7x/nXWeG/wDkCxfU/wA6QGrRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABVS/vBax4XBlf7o/rUt1cpawmR+ewA6k1gySPLI0spy7fp7UANySSWJLE5JPc1Q1fUzYRfZ7d/9MlHLA8wIe/+8e35+lT398mm2omZQ80mVgjP8Tep/wBkd/yrmCXd3llcvJISzuerGgBgVIo+BhVrrvCegmMLqt4n71x+4jYf6tT/ABH3P6fjWf4Y0P8AtO4W+uVzZwt8iH/lqw7/AEH6n8a7qgAooooAKKKKACiiigAooooAKKKKAKWr86bJ9V/9CFec+GDnxr4v/wCu1t/J69G1f/kHP9V/9CFeceFQf+E08Yk9PtNsB/3y/wDjTA1SMyN/vH+ddX4c/wCQLD+P865bHzt/vGuq8O/8gSD6H+dIDTooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACmSyJDG0khwqjJNOJABJOAOpNYV9eG7lwp/coeP9o+tADLi4e6m8xhgDhF/uj/Gq808NrbvdXBIij7Dq57KPc/8A16f8uGd3CRoCzux4UDua5rUL9tTuA4Upbx8Qxn/0I+5/+tQBFcXE19dNdXGPMbhVHRF7KKs6PpMmt3vkAsttHzPIP/QR7moLSzn1G8SztlzI/wB5uyL3Y16Jp2nwaZZJa264VeST1Y9yfegCeKKOCJIokCRoAqqBwBT6KKACiiigAooooAKKKjlnhgXdNKkYPd2A/nQBJRTVZXUMjBlPIIOQar3upWWnxlrq6hiOMhXkClvYAnk0AWqK4y48c2kaE3N7Lp8xPyRTQKrY9kZg7geq9ewqW68T635EDafo/wBtWZQVuIFLj6tExQpn3bI9DQB0OrAnT3x/eX+Yrzfwu2PGXjBfS6t//QX/AMK3LlfHV/blrqWz0uA4yI/3rnnjjjb+ZrB8KwGPxHrsTbjNDJAtxMXLG4clzuOeR6UAboHzt9TXUeH/APkC2/0/rXM/8tG+prp9AH/Eltv92gDRooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKztTvjCPIhb96fvEfwj/GgCDU73zWNtEfkB/eN6n0qiql2CKMk8ACmgBQAPwrN1m/MStp8DfvXGLhx/Ap/gHue/p0oAraxqIu3+x27ZtY2y7j/ls4/wDZR29Tz6VnhXeRIokLyyHaiDuaQlYkyeFFdl4Y0I2Uf268TF1IMIp/5ZL6fU9/y9aALug6LHo9nhiHuZcGaQdz6D2FatJkDAJ60tABRUNxd21qAbi4ihB6GRwufzrA1rxnpthbultcJJdEfIrMI1I7kO+F6e5+hoA6WiuAg8VSag8a2VlqssufnktGdtv/AH9VY2/DPtWhdL41vLspZ3VikI4Mu0qn0Mf38+4cfSgDor3VLezmjt2dDPLyqNIq8epyf5ZNVE8R2yrI86YijJUz27iePcP4fl+YN7FRXNweDNR1O8n/ALY1VyEwA0IUh+vA3hnUD/e71uWfhLTtI8y6tnuJLsxeWZ7idpG2ZB28npx0oAzpviVpDsU02OS+cfxx/NH+JQMw/wC+azLXVPFGrzyXemWTyxSsQGuFhjjUZ6K43sce4HuK7m3hgS03w28cW5eQiAU+w2/Y49m0LzwvTrQByiaDqsmnCK+u0026kckSWBzHjjloz8hY9zjHPSmyfDzTYLNmlvbyW5PWZnwD/wBs1wn6V1l3FJKIggBAcFsntg0t7G0lqyo20+vp70AU9N8OaNpkaiz063jOBlxGMk+tWMqup7U4JjG4fjx/I0+xuTc2wZwFlX5ZFHZh1qwVBIYgZHQ0AUtY/wCQe3+8v8xXAeGcN4p8UAHkXEAI9P8AWV3+r/8AIPb/AHl/mK4DwuB/wlXinHX7VBn8noA1R94/Wuo0PjRrb/drmP4j9a6jRBjR7b/coAv0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUVBeXSWds07gkL0A7mgCLUL4WkWFwZX+6PT3NYeSSWYlmY5JPUmiSV55GllOXb8h7VDc3UVjbG5mXdztjjz/AKxvT6eppARajfnToRsIN3KMxKf+Wa/3z/T/AOtXPqMZySxJySeST3NDyyzzPPO++aQ5Zun5e3b8K0NH0ObXfNxK1vbJ8pmAyxb0Xtx6/SgCfQo9NhnF9qdzEHTJgtPvyHB+/wCWMsfbj39Kv3fxF0RGaGzka6uMEBIxuIPugy4/75q1J4W0uVLaw1KE6jFEAUe6be+7tk9TxnrV240bS7fT3t4tOt1ibgoIxg0wONh1TXNRUhPDovmY8yT2mFf3LuwZP++DitefSNevrSG3h1OXSJSNz27TtMEXPRZQVY9vvZ9McV10SLHEiKgRVUAKBwB6VXmSRr6IhPkA5f8APigDmbb4d24Ja+1e+uGb74if7OH/AN7y8b/q2avJ4S0Gwmt1tNNjhKyKxaL5S5/2sfeHHINdHVLUYZXiEkLFZEIZfqOg+h6fjQBbVVRdqqFA7AYqra5+1T/IyDd3GM+/6VNa3C3VukycbhyD1B7ipaAKNvKE1KaF1KmQZRj/ABY6j9QfoauSxLNE0bglWGDg4qrqFuZFEsRxLGQyn37fn0qxbTrc26yqCM9QeoPcUAOEaiLy+q4xzVC2zY3zQt/qpzuU9g/f8+v1rSqreWyzRYAOSwOQeQfWgC1SUiZ2Lu+9jn60kkiRIXdgqjqaAKRRrTUFdB+7mwrj/wBBP9K0K5W/8RXsl0V0qwt7loz9ye4MZfHOFIUgH68e9WPDfjTT/EU81iI5bHU7b/X2NyAJF9x2Zeeo9vUUrplOLRq6v/yD2/3l/nXn3hNXHi3xazjCNdwbPcYeu+1uQQ6XJIwbarLnaM4GRz9K4jwyVbxF4gdGDK9xCQwPUfPVEmgDyfrXU6N/yCLX/rmK5UAljj1rq9H/AOQRa/8AXMUgLtFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFIQGBUgEHgg96WigDC1DTPsivcRb2gUFnRRuZR/sjv9K427vG1G4+0P8qAbYoweEX0+vr716dWLqHhPTdQuDcfvLeRjlzCQA3uQR196AON02wuNUuBbRF/LjGZZCc7F7AZ7nsB3JPrXoempbJp0CWa7YFQBBjnHv7+vvTdP0qz0y0NtaxbUbliTlmPqTUVvusr1oW/1U5LKewfv+fWgC29uHuUn3n5Rjb2+v60XMIuIGjYZBHT19qmooAo6ZM3ltaysTJBgBj1dP4T+XWr1Yer6tpulXiSTXipOnJhjUySFT1yignHcHHWqdl8SPCd9ffYl1VYJ8423MbQ8+mWAGfai6HZs6ikIDAgjIPBorC8Q3xNvJZxNyykNg9fak3YErskXVdLsNSkgl1WziMmS0Uk6hgwwPXuK2FZXUMrBlIyCDkGvOTpWk6jpc0V7ptpMCPlUxAMvuCOR+FYVvDrfg2Q3Xhi6lubJOZdLuGLjHcp/9bnjv0qOdGvsmeu3UjLC6xpvYjHXAH1Nc1qGo+LdOcy2FhpmowH5jEJGik/M5B/Kp9A8Wab4p0tL63kEUke0T2rsN0bnoP8AaBPQ9/rxUk0hj3A5PPIochRjbdFHTviNpd+5srmKbTNSxxbXS4yf9luh/SsDXNuoXxkv4/NXHCOx4/HPH4VJ4u0aDVrUEqFuIxlHA5+lUPC9nqniW3dLhhClk2wXcoz5rf3fcjAyfespOUnY3goRXMzPW+1zw7c+b4fv7j7OoybS7Jlh+gBOQPcEV1mneK4/GEAmiY27264uLMnLBj/ED/EtcXq1zc2d1c2M6vb3KfLIpbHHYj1BHeuajv5tFvUv7S4MMsRyJFH5gjuD0IpKT2LlTT1R6xA+zUpEThnyKwte02a/Ed5YyNBq1i2+znT72f7h9QfetJpb6B9H1C7097VdQj3uOoic4wpPY45wf6Gnw2Vxf6g1jC+1gS0kuM+WM9fr6VVneyJVnqdH4M8X23ivR47gAR3ifJcwqpwjgdj6HqOfbsa0b3RYrjbJav8AZJkJYGNQFcnH3h36VBY2Njpdotlp8C28KsWwo5Zj1Y+pPrWtDJ5kYPfofrXS4uKVzlkuqMCLwhHKM6hf3FxnrHFiKM/gOf1roURY0VEAVVGAB2p1FIgKKKKACiiigAooooAKKKKACiiigAooooAKKKKACikqvfTmKArG4WVxhSRnb/tY9BQBVu9XZLlrLT7Vr27XG8BtscOenmPzjjsAW6cY5qjqVl4murItaahp1veDDLGbdnjyOQCxOevfH4VsW1tFY26wQghV5JJyWJ5JJ7knkmobqYBcbiPcdRSuM4DT/ire6Rq76N410xbSeM4Nza5KY7MVPO33BP0r0Uyi8tY3tJ1MUyhlmjIIKnnK+ua4PxVo1r4kJtr0lJBkw3Cj5omxwfce1ct4A8S6r4W8Qp4YvoJLi3uJtn2eMbmhcjIeP/YPUjtyfXKuVY9N1i2S0jiNnGYgCS5Tq3Tknqx471R1rRdJ8WaaLXU7ZTKV/dXSACWJuxB9Pboa09YulRDgjdGfnXP3SemfzrJa82RqQQSxyPQVL3KS0TRxugeK9V+H2sPoHiKZ7rT4xlZV+YxL2dM8lfVe3b0PXrHKsTXkriWK5O+OYHhg3IP0OayTYWXirW7d9QiV4NLcS5xyzfwoT3U9SPb3rrpSt2rpMAySDBHtTjFyQTmovY5i2k8m+2N9xsrUMwEcsqBsbOM1R8W6hFoWoWOnFZXu5ZA8ZRcgx4Iya0Nq6rFay2kiSG4YRybTnae+R245rFp7HQnfUseEPDFpDq9z4meMCSXKW0eMKh/jf8Tj6YPrXTX9u7oZ4hmRRyv94U9Ejt4I4Y+I4kCr9AKWGUrJ1q7aWJab1OV1SVrlY47f/WykIPZjW3ZtbWlrDYQk7IRtyert3b6k5NVtQ0hrbWF1eGQfYwh3w45SQ8bh/s4PTsaWJ4vMV1wSDkYrSnG2rMajvZIreMfCEXirT1EDrb6tbj/RrgnAYf3H9VP5j8wfN/A/h2fXPGTQatatDBo5Et5DIOsgPyJ9CefQge9etgs8hkD/ADGrEzIsyAKvnyDLuBgsAOrevpVOCbuQqkkuXoOnl89ZI5lEkcnDIw4IqvZW0NjG6w5zIxZmbkn059hxSlsjd2PQ0mNynnHYf5/Wqi7O4lKxNuJYc1ftZMN7N/OseR2jYDr71btrlQrOxwqjJPpW7XMtDV6o2aKhguFmQHoSM4qWuZqxiLRRRSAKKKKYBRRRQAUUUUAFFFFABRRRQAUUVFNN5W0BSzN0Hb8aAI76+isLczS5PZVUZLH0rIvxJa3cWpkmXcNjheeOu1fYj/x5V9anhkbUkube6ISdDj5eic8Ffowz9MetR6eftVlLp8/yNH8oweV54I/3WHHttPerSsIuTXHlRLhgyEfKwOQR2rJu7snODU1g5ubSbT5sLJFwAOijOOPowP4bfWueubwxvJEf9bGSr5OFU+5qJRd7FJ6F2eIkFyfm2HB9qk0LTLO2ZvEt1ArXvk+RAx6iPPAHuWOPp9ax7TVDdTw2TGIXEh8tEjlVtxPfHXAFdJfqJLq00qP5U4Y47Lgj+Qf8SKcYO+oOWmg5bOObS5rm6f8Ae3PKN0zk/Lj2JOfYY9K4W71sRfaNNkRrW/t+TBMdrMvZkP8AECOeK726cX2qRWIGIohukA6EYGR+RUf8DNZnivwxZeNLqO1kAhubEhkuVHOO6H1B4HthvxJQ5hwnymbon+iaVErDa837516YJ6fpity1uQwwTgVg3MzLcSRSgLLGSrKDnBFPtbsZABrXlsrGLld3ZqeItATxFpyxKVS/tiXtJj2J6oT6N/MA9q57wHprR317qFxG8Utv/o/lsMFZD97PuBgfjXTjUorTT5ru4J8uCMuffHQfiePxqXaUbDbRO43zFejOep/QD8KxnC+p00qtlyPYsGXJxTfOCNioQfm5pJBu6VkdRowzKw2tghuCD3rLk0vy/PNk24E48tuo+h702e7+w2VzeAbvs8TSBfUgcD88VRtdQuJ9GS8WTEhG449aak0Q6XMrli18xJwsrMuOzdQaS21Iajc6g0PMljL9nYepABI/U1Y0rU49QtI/tiK8yHBJGCTWdpvhSTQ9SvLzSr9riK8lM01vcYDByckhhwevfH1rVTXU55UmiS51RtJtIrhk823ZgrDPK571oo9pexIYpdvIdGXqprP1a2ikiaGRGjEoy0bdAe+K5gT3ukXUYRi0WcA9R9DV7kWO/MTSBVwr4HLqf6dq57WLiZNb03TUZkTLSTdvMP8ACPcAZ/E+1Nh1id8mBsOOdrdDTp7q31yJIbgm2vIG3QS/3G9/Y1pTkovXYqD5XqWItWeLWxCJS0GDuGeh/pXVW18r4WQjno3+NeYvNNFqTeaNk6PiRPX3H6V0sOqRBfkkCsn3lNaTppluNztaWsaw1QMi87lI6en0rXjkWRdyHIrklFxMmrDqKKKkQUUUUwCiiigAooooAKq3eoW9kAJGJduFRBljVbUbuaIyqjbQke7jqTWXZfMrzt80hcpluwBxxTS0uIv3OpyQ25uLk+TH0Eacux9M9M/y9ayzdSxCPWbmQKEcADPymMjk89sdM/X0xURzqmoGK6+aMBzs7YVgMfQ9T6/Tio/E0ry6ba2pbCTTLuI6/KRj/PtVpWEbmoSi0vYNRU5if5ZT2246j/gPP/AFqHUX+watDfg4jm+SVvXgAj8gG/7Z1DCxk8MyK/It0bZk5+5yuSevQD6Ur4uvDyiYb9uBz3Abbz9RkH6mqQEl8fsGsw3fSOb5ZB6nADH8th+kZql4ktGEgkQcSjBwB94fXirMpN54bglnJeQLE2/vkkKfzBIP1NLcObnw3FPN87+TG5J7nA/xo8wMfwnp0v8Aak9zKJVSFdqJIFC7m7jAHQZ/OtjTJFllvNVlOIuQpPpgEn/vkIPqDTLRFXw4dihPOYq+3jq20/pTbqQxeFoWQAGZUZ+OpY7j/n0o3FsSabM0Fpd6nKP3srE7fcE/KP8AgR2/gKltrr+zdEkvXcCSUlgzdMk4B/m34mqeqZh0i3hjJVeBkdeEJB+uQDS64okW3siP3J7DjGCAMfgT+dG4ERsrVrGFL2NpInJC3CH95Ec9z3/Hr9etG58PX1iBc2cq31qfmV04cL6kd/wqz4acy6Dc2koDxRzPEAR/CcHH61ZsZ5bS9NnG5MO8qA3OOM5+tF2mwaRxvi7WGtdHsLU5Rrm/R5QRjMcfzEH/AIEU/Kt6XX087zs/KwwSK2tT0bTNXaKz1CyiuYZegccxnjlGHK/ga4bVLFNG1G60y3llkhgI2NK25vxOBQrMTVjsLHV7e8wgcFh2PWrpU9UOfY154JXhninjO1yBkius0+9mljQs2SetTKCZcakobGi9ul5Z3FrKxj87CD6jn/CuahM2n20+lXS48vJjdeeP8K6mNvNA3gNjkZ7Vk+I4EMIl53r0bvXPOPLqehQrc65TK0+8a3uQsnKN0I9a3xqEeMpNhl6r3FcWZXTDg/dOcdjW6qK0QuNoDsOcfSkaNK50lvqiXEG2VFkQ9QwyKjfSrK53G1l8ot1ik+ZPw7j9ayrGRvKC9qkaZ1kwDimm1sZSgmULixutLvN1zavHEPuzIdyY+o/rVeSW3kuRHIwSVxlGH8VdRY387DY7BlPBDDINUvEfh/TobBtRgiMMoO7YhwmfXHb8MVrGdznlT5TBvIHuijP8tzGMI+eHHoff0qODUBIpEygSg48wDH4N6H36U6zuJLh54pSGVACp781CI1GoTvjJbqD0PFdNOT2ZMWdFBdr5XyjaycEVqafrGGALbW7E9/Y1yscrxyPCDlY8bSeTg9s1bVjJFuPB9q0cU0WehQXCXC5HDdxUtcToOo3MkhjZ87D8p7iuzgcyQI7YyygnFck4crMpRsSUUUVBIUUUUAFFFFAH/9k=







" data-old-hires="https://images-na.ssl-images-amazon.com/images/I/61PbuwxxQ-L._SL1200_.jpg"  class="a-dynamic-image  a-stretch-vertical" id="landingImage" data-a-dynamic-image="{&quot;https://images-na.ssl-images-amazon.com/images/I/61PbuwxxQ-L._SY450_.jpg&quot;:[450,450],&quot;https://images-na.ssl-images-amazon.com/images/I/61PbuwxxQ-L._SX679_.jpg&quot;:[679,679],&quot;https://images-na.ssl-images-amazon.com/images/I/61PbuwxxQ-L._SX425_.jpg&quot;:[425,425],&quot;https://images-na.ssl-images-amazon.com/images/I/61PbuwxxQ-L._SX466_.jpg&quot;:[466,466],&quot;https://images-na.ssl-images-amazon.com/images/I/61PbuwxxQ-L._SX569_.jpg&quot;:[569,569],&quot;https://images-na.ssl-images-amazon.com/images/I/61PbuwxxQ-L._SX522_.jpg&quot;:[522,522],&quot;https://images-na.ssl-images-amazon.com/images/I/61PbuwxxQ-L._SY355_.jpg&quot;:[355,355]}" style="max-width:679px;max-height:679px;">
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
    var rightMargin = 32;

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
                'colorImages': { 'initial': [{"hiRes":"https://images-na.ssl-images-amazon.com/images/I/61PbuwxxQ-L._SL1200_.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/41cMneCIIgL._SS40_.jpg","large":"https://images-na.ssl-images-amazon.com/images/I/41cMneCIIgL.jpg","main":{"https://images-na.ssl-images-amazon.com/images/I/61PbuwxxQ-L._SY355_.jpg":[355,355],"https://images-na.ssl-images-amazon.com/images/I/61PbuwxxQ-L._SY450_.jpg":[450,450],"https://images-na.ssl-images-amazon.com/images/I/61PbuwxxQ-L._SX425_.jpg":[425,425],"https://images-na.ssl-images-amazon.com/images/I/61PbuwxxQ-L._SX466_.jpg":[466,466],"https://images-na.ssl-images-amazon.com/images/I/61PbuwxxQ-L._SX522_.jpg":[522,522],"https://images-na.ssl-images-amazon.com/images/I/61PbuwxxQ-L._SX569_.jpg":[569,569],"https://images-na.ssl-images-amazon.com/images/I/61PbuwxxQ-L._SX679_.jpg":[679,679]},"variant":"MAIN","lowRes":null},{"hiRes":"https://images-na.ssl-images-amazon.com/images/I/61Xemd49HhL._SL1200_.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/41hD0KW2jFL._SS40_.jpg","large":"https://images-na.ssl-images-amazon.com/images/I/41hD0KW2jFL.jpg","main":{"https://images-na.ssl-images-amazon.com/images/I/61Xemd49HhL._SY355_.jpg":[355,355],"https://images-na.ssl-images-amazon.com/images/I/61Xemd49HhL._SY450_.jpg":[450,450],"https://images-na.ssl-images-amazon.com/images/I/61Xemd49HhL._SX425_.jpg":[425,425],"https://images-na.ssl-images-amazon.com/images/I/61Xemd49HhL._SX466_.jpg":[466,466],"https://images-na.ssl-images-amazon.com/images/I/61Xemd49HhL._SX522_.jpg":[522,522],"https://images-na.ssl-images-amazon.com/images/I/61Xemd49HhL._SX569_.jpg":[569,569],"https://images-na.ssl-images-amazon.com/images/I/61Xemd49HhL._SX679_.jpg":[679,679]},"variant":"PT01","lowRes":null},{"hiRes":"https://images-na.ssl-images-amazon.com/images/I/61N8PzZFGXL._SL1200_.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/41g%2BZTSqZIL._SS40_.jpg","large":"https://images-na.ssl-images-amazon.com/images/I/41g%2BZTSqZIL.jpg","main":{"https://images-na.ssl-images-amazon.com/images/I/61N8PzZFGXL._SY355_.jpg":[355,355],"https://images-na.ssl-images-amazon.com/images/I/61N8PzZFGXL._SY450_.jpg":[450,450],"https://images-na.ssl-images-amazon.com/images/I/61N8PzZFGXL._SX425_.jpg":[425,425],"https://images-na.ssl-images-amazon.com/images/I/61N8PzZFGXL._SX466_.jpg":[466,466],"https://images-na.ssl-images-amazon.com/images/I/61N8PzZFGXL._SX522_.jpg":[522,522],"https://images-na.ssl-images-amazon.com/images/I/61N8PzZFGXL._SX569_.jpg":[569,569],"https://images-na.ssl-images-amazon.com/images/I/61N8PzZFGXL._SX679_.jpg":[679,679]},"variant":"PT02","lowRes":null},{"hiRes":"https://images-na.ssl-images-amazon.com/images/I/511vs9nINhL._SL1200_.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/31cnyCN%2B7HL._SS40_.jpg","large":"https://images-na.ssl-images-amazon.com/images/I/31cnyCN%2B7HL.jpg","main":{"https://images-na.ssl-images-amazon.com/images/I/511vs9nINhL._SY355_.jpg":[355,355],"https://images-na.ssl-images-amazon.com/images/I/511vs9nINhL._SY450_.jpg":[450,450],"https://images-na.ssl-images-amazon.com/images/I/511vs9nINhL._SX425_.jpg":[425,425],"https://images-na.ssl-images-amazon.com/images/I/511vs9nINhL._SX466_.jpg":[466,466],"https://images-na.ssl-images-amazon.com/images/I/511vs9nINhL._SX522_.jpg":[522,522],"https://images-na.ssl-images-amazon.com/images/I/511vs9nINhL._SX569_.jpg":[569,569],"https://images-na.ssl-images-amazon.com/images/I/511vs9nINhL._SX679_.jpg":[679,679]},"variant":"PT03","lowRes":null},{"hiRes":"https://images-na.ssl-images-amazon.com/images/I/5198hFzOhRL._SL1200_.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/41n1RPY-YsL._SS40_.jpg","large":"https://images-na.ssl-images-amazon.com/images/I/41n1RPY-YsL.jpg","main":{"https://images-na.ssl-images-amazon.com/images/I/5198hFzOhRL._SY355_.jpg":[355,355],"https://images-na.ssl-images-amazon.com/images/I/5198hFzOhRL._SY450_.jpg":[450,450],"https://images-na.ssl-images-amazon.com/images/I/5198hFzOhRL._SX425_.jpg":[425,425],"https://images-na.ssl-images-amazon.com/images/I/5198hFzOhRL._SX466_.jpg":[466,466],"https://images-na.ssl-images-amazon.com/images/I/5198hFzOhRL._SX522_.jpg":[522,522],"https://images-na.ssl-images-amazon.com/images/I/5198hFzOhRL._SX569_.jpg":[569,569],"https://images-na.ssl-images-amazon.com/images/I/5198hFzOhRL._SX679_.jpg":[679,679]},"variant":"PT04","lowRes":null},{"hiRes":"https://images-na.ssl-images-amazon.com/images/I/61oITctxASL._SL1200_.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/4194Chik2fL._SS40_.jpg","large":"https://images-na.ssl-images-amazon.com/images/I/4194Chik2fL.jpg","main":{"https://images-na.ssl-images-amazon.com/images/I/61oITctxASL._SY355_.jpg":[355,355],"https://images-na.ssl-images-amazon.com/images/I/61oITctxASL._SY450_.jpg":[450,450],"https://images-na.ssl-images-amazon.com/images/I/61oITctxASL._SX425_.jpg":[425,425],"https://images-na.ssl-images-amazon.com/images/I/61oITctxASL._SX466_.jpg":[466,466],"https://images-na.ssl-images-amazon.com/images/I/61oITctxASL._SX522_.jpg":[522,522],"https://images-na.ssl-images-amazon.com/images/I/61oITctxASL._SX569_.jpg":[569,569],"https://images-na.ssl-images-amazon.com/images/I/61oITctxASL._SX679_.jpg":[679,679]},"variant":"PT05","lowRes":null},{"hiRes":"https://images-na.ssl-images-amazon.com/images/I/51ui6sBTqYL._SL1200_.jpg","thumb":"https://images-na.ssl-images-amazon.com/images/I/31Gxko1B4CL._SS40_.jpg","large":"https://images-na.ssl-images-amazon.com/images/I/31Gxko1B4CL.jpg","main":{"https://images-na.ssl-images-amazon.com/images/I/51ui6sBTqYL._SY355_.jpg":[355,355],"https://images-na.ssl-images-amazon.com/images/I/51ui6sBTqYL._SY450_.jpg":[450,450],"https://images-na.ssl-images-amazon.com/images/I/51ui6sBTqYL._SX425_.jpg":[425,425],"https://images-na.ssl-images-amazon.com/images/I/51ui6sBTqYL._SX466_.jpg":[466,466],"https://images-na.ssl-images-amazon.com/images/I/51ui6sBTqYL._SX522_.jpg":[522,522],"https://images-na.ssl-images-amazon.com/images/I/51ui6sBTqYL._SX569_.jpg":[569,569],"https://images-na.ssl-images-amazon.com/images/I/51ui6sBTqYL._SX679_.jpg":[679,679]},"variant":"PT06","lowRes":null}]},
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
                'tabbedImmersiveViewTreatment':'T2',
                'totalVideoCount':'0',
                'videoIngressATFSlateThumbURL':'',
                'mediaTypeCount':'0',
                'atfEnhancedHoverOverlay' : true,
                'winningAsin': 'B01DQDZVCO',
                'weblabs' : {},
                'aibExp3Layout' : 0,
                'aibRuleName' : 'frank-powered',
                'acEnabled' : false
                };
    A.trigger('P.AboveTheFold'); // trigger ATF event.
    return data;
});
</script>



<div id="twister-main-image" class="a-hidden" customfunctionname="(function(id, state){ P.when('A').execute(function(A){ A.trigger('image-block-twister-swatch-hover', id, state); }); });"></div>

<div id="thumbs-image" class="a-hidden" customfunctionname="(function(id, state, onloadFunction){ P.when('A').execute(function(A){ A.trigger('image-block-twister-swatch-click', id, state, onloadFunction); }); });"></div>






    
        
        <span class = "edp-feature-declaration" data-edp-feature-name="imageBlock" data-edp-asin="B01DQDZVCO" data-data-hash="" data-defects="[{&quot;id&quot;:&quot;defect-different-product&quot;,&quot;value&quot;:&quot;Das Bild zeigt nicht das Produkt&quot;},{&quot;id&quot;:&quot;defect-image-offensive&quot;,&quot;value&quot;:&quot;Anst&ouml;&szlig;iger Inhalt&quot;},{&quot;id&quot;:&quot;defect-image-extra-items&quot;,&quot;value&quot;:&quot;Das Bild zeigt zus&auml;tzliche Artikel&quot;},{&quot;id&quot;:&quot;defect-image-not-clear&quot;,&quot;value&quot;:&quot;Das Bild ist von schlechter Qualit&auml;t&quot;},{&quot;id&quot;:&quot;defect-other-image-issue&quot;,&quot;value&quot;:&quot;Anderes Problem mit dem Bild&quot;}]" data-metadata="IMAGE" data-feature-container-id="imageBlockEDPOverlay" data-custom-event-handler="imageBlockEDPCustomEventHandler" data-display-name="Bilder" data-edit-data-state="imageBlockEDPEditData" data-position="0" data-resolver="CQResolver"></span>
    





    
 









	
	    
	    
	
	



    



<div class="a-popover-preload" id="a-popover-immersiveView">

    <div id="iv-tab-view-container">

        <ul class="iv-tab-views a-declarative">
            <li id="ivVideosTabHeading" class="iv-tab-heading">
                <a href="#" data-iv-tab-view="ivVideosTab">
                    ÄHNLICHE VIDEOS
                </a>
            </li>
            <li id="iv360TabHeading" class="iv-tab-heading">
                <a href="#" data-iv-tab-view="iv360Tab">
                    360°-ANSICHT
                </a>
            </li>
            <li id="ivImagesTabHeading" class="iv-tab-heading">
                <a href="#" data-iv-tab-view="ivImagesTab">
                    BILDER
                </a>
            </li>
        </ul>

        <div id="ivVideosTab" class="iv-box iv-box-tab iv-tab-content">
            <div class="iv-box-inner">
                <div id="ivVideoBlock">
                    <div id="ivVideoBlockSpinner" class="a-spinner-wrapper"><span class="a-spinner a-spinner-medium"></span></div>
                </div>
            </div>
        </div>

        <div id="iv360Tab" class="iv-box iv-box-tab iv-tab-content">
            <div class="iv-box-inner">
                <div id="ivMain360">
                    <div id="ivStage360">
                        <div id="ivLarge360"></div>
                    </div>
                    <div id="ivThumbColumn360">
                        <div id="ivTitle360"></div>
                        <div id="ivVariationSelection360"></div>
                        <div id="ivThumbs360">
                            <div class="ivRow placeholder"></div>
                            <div class="ivThumb placeholder">
                                <div class="ivThumbImage"></div>
                            </div>
                        </div>
                    </div>
                    <div class="ivClearfix"></div>
                </div>
            </div>
        </div>

        <div id="ivImagesTab" class="iv-box iv-box-tab iv-tab-content">
            <div class="iv-box-inner">
                <div id="ivMain">
                    <div id="ivStage">
                        <div id="ivLargeImage"></div>
                    </div>
                    <div id="ivThumbColumn">
                        <div id="ivTitle"></div>
                        <div id="ivVariationSelection"></div>
                        <div id="ivThumbs">
                            <div class="ivRow placeholder"></div>
                            <div class="ivThumb placeholder">
                                <div class="ivThumbImage"></div>
                            </div>
                        </div>
                    </div>
                    <div class="ivClearfix"></div>
                </div>
            </div>
        </div>

    </div>

</div>






	                
                
            
        
        
        
        
        
        
        
    
    
    

    






    










    </div>





        
        
    
</div>
<div id="centerCol" class="centerColAlign">        
    
        
        
        
        










    
    
     
         
         
             <div id="title_feature_div" class="feature" data-feature-name="title">
         
     




    

    
    
    
        
            
                
	                
	                
	                	









    <div id="titleSection" class="a-section a-spacing-none">
        <h1 id="title" class="a-size-large a-spacing-none">
            <span id="productTitle" class="a-size-large">
                
                    
                    
                

                
                    
                    
                        WINOMO Kleiderhaken Klappbar Wand-Kleiderst&auml;nder
                    
                

                
                    
                    
                
            </span>

            

            

            
            
                <span  id="titleEDPPlaceHolder" ></span>
            
            
        </h1>

        <div id="expandTitleToggle" class="a-section a-spacing-none expand aok-hidden"></div>
        
    </div>



    
        





    
    
        
    

<span class = "edp-feature-declaration" data-edp-feature-name="title" data-edp-asin="B01DQDZVCO" data-data-hash="1389549210" data-defects="[{&quot;id&quot;:&quot;defect-mismatch-info&quot;,&quot;value&quot;:&quot;Abweichend vom Produkt&quot;},{&quot;id&quot;:&quot;defect-missing-information&quot;,&quot;value&quot;:&quot;Fehlende Informationen&quot;},{&quot;id&quot;:&quot;defect-unessential-info&quot;,&quot;value&quot;:&quot;Irrelevante Informationen vorhanden&quot;},{&quot;id&quot;:&quot;defect-incorrect-information&quot;,&quot;value&quot;:&quot;Falsche Informationen&quot;},{&quot;id&quot;:&quot;defect-other-productinfo-issue&quot;,&quot;value&quot;:&quot;Anderes Problem mit der Produktinformation&quot;}]" data-metadata="CATALOG" data-feature-container-id="productTitle" data-custom-event-handler="productTitleEDPCustomEventHandler" data-display-name="Produktname" data-edit-data-state="productTitleEDPEditData" data-position="1" data-resolver="CQResolver"></span>

    


	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="qpeTitleTag_feature_div" class="feature" data-feature-name="qpeTitleTag">
         
     




    

    
    
    
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="bylineInfo_feature_div" class="feature" data-feature-name="bylineInfo">
         
     




    

    
    
    
        
            
                
	                
	                
	                	





     






    
    
        <div class="a-section a-spacing-none">
            
                
                    von
                
                
            

            
                
                     
                     
                         
                             
                             
                                 <a id="bylineInfo" class="a-link-normal" href="/WINOMO/b/ref=bl_dp_s_web_7046050031?ie=UTF8&amp;node=7046050031&amp;field-lbr_brands_browse-bin=WINOMO">WINOMO</a>
                             
                         
                     
                 
            
         </div>
    

    
    



	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="cmrsSummary_feature_div" class="feature" data-feature-name="cmrsSummary">
         
     




    

    
    
    
        
            
                
	                
	                
	                	







	                
                
            
        
        
        
        
        
        
        
    
    
    

    















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



    
    
    
    
        

        

        
        
        
        
		
		
		
		
		        
		
		
		
		
		
		
		
		        
        

        <div id="averageCustomerReviews" class="a-spacing-none" data-asin="B01DQDZVCO" data-ref="dpx_acr_pop_" >
            
            
            
                
                
                    










        <span class="a-declarative" data-action="acrStarsLink-click-metrics" data-acrStarsLink-click-metrics="{}">
            





    <span id="acrPopover" class="reviewCountTextLinkedHistogram noUnderline" title="4.7 von 5 Sternen">
        <span class="a-declarative" data-action="a-popover" data-a-popover="{&quot;max-width&quot;:&quot;700&quot;,&quot;closeButton&quot;:&quot;false&quot;,&quot;position&quot;:&quot;triggerBottom&quot;,&quot;url&quot;:&quot;/gp/customer-reviews/widgets/average-customer-review/popover/ref=dpx_acr_pop_?contextId=dpx&amp;asin=B01DQDZVCO&quot;}">
            <a href="javascript:void(0)" class="a-popover-trigger a-declarative">
                

<i class="a-icon a-icon-star a-star-4-5"><span class="a-icon-alt">4.7 von 5 Sternen</span></i>
                
            <i class="a-icon a-icon-popover"></i></a>
        </span>
        <span class="a-letter-space"></span>
    </span>


        </span>
        <span class="a-letter-space"></span>
        
        

        

        

        
        
        
        
        
        
        
            
            
                <span class="a-declarative" data-action="acrLink-click-metrics" data-acrLink-click-metrics="{}">
                    <a id="acrCustomerReviewLink" class="a-link-normal" href="#customerReviews">
                        <span id="acrCustomerReviewText" class="a-size-base">110 Kundenrezensionen</span>
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
    <a id="askATFLink" class="a-link-normal askATFLink" href="/ask/questions/asin/B01DQDZVCO/ref=ask_atf_aqp_dp">
      <span class="a-size-base">
        19 beantwortete Fragen
      </span>
    </a>
  </span>


	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="acBadge_feature_div" class="feature" data-feature-name="acBadge">
         
     




    

    
    
    
        
            
                
	                
	                
	                	








    
    
    <script type="a-state" data-a-state="{&quot;key&quot;:&quot;acState&quot;}">{"acAsin":"B01DQDZVCO"}</script>


	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="zeitgeistBadge_feature_div" class="feature" data-feature-name="zeitgeistBadge">
         
     




    

    
    
    
        
            
                
	                
	                
	                	






	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        













    

    
    
    
        
        
        
        
        
        	
        		
        		
					<hr/>
        		
        	
        
        
        
    
    
    

    



















        
        
    
        
        
        
        










    
    
     
         
         
             <div id="desktop_unifiedPrice" class="feature" data-feature-name="desktop_unifiedPrice">
         
     




    

    
    
    
        
        
        
        
    	    
                






    
    










    
    
     
         
         
             <div id="unifiedPrice_feature_div" class="feature" data-feature-name="unifiedPrice">
         
     




    

    
    
    
        
            
                
	                
	                
	                	








  
  
  
  
  
  
  
  
  
  
  
  

  
  

  
  
  
  
  
  
  
  
  
  
  
  

  
    
    
    
      
        
        
        
        
        
          










          <div id="price" class="a-section a-spacing-small">
          <table class="a-lineitem">
            

            
              
              

                
                
                  



                

                
                
                  
                  

                
                
                  
                    
                    
                    
                    
                    
                    

                    
                      












    
    
    
        
    














<tr id="priceblock_ourprice_row">
    <td id="priceblock_ourprice_lbl" class="a-color-secondary a-size-base a-text-right a-nowrap">Preis:</td>
    <td class="a-span12">
        
            
                <span id="priceblock_ourprice" class="a-size-medium a-color-price">EUR 14,99</span>

                    
                        



 
    






    
    




                    

                    
                    
            
            
        

        
            
                
                
                
                    
                        







                        














                        
                        






                        




    

    



                    
                
            

            








            





    
    
        






    

            
            









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






    	    
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="pmpux_feature_div" class="feature" data-feature-name="pmpux">
         
     




    

    
    
    
        
            
                
	                
	                
	                	



	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="issuancePriceblockAmabot_feature_div" class="feature" data-feature-name="issuancePriceblockAmabot">
         
     




    

    
    
    
        
        
        
            
                
                    


    
    
    
    
    
    





    <div>
        
    </div>



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        







        
        
    
        
        
        
        







        
        
    
        
        
        
        







        
        
    
        
        
        
        










    
    
     
         
         
             <div id="alternativeOfferEligibilityMessaging_feature_div" class="feature" data-feature-name="alternativeOfferEligibilityMessaging">
         
     




    

    
    
    
        
            
                
	                
	                
	                	




       
    
    
    
 	
 		
 		
 		
 		
 		
 		
 		
 		
 		
 		
 	
 	
 	
 		
 		
        
        
 		
 		
 		
 		
 		
		
		
		
        
        
 		
 		
 		
 		
 	

	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        







        
        
    
        
        
        
        










    
    
     
         
         
             <div id="promiseBasedBadge_feature_div" class="feature" data-feature-name="promiseBasedBadge">
         
     




    

    
    
    
        
            
                
	                
	                
	                	


















	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="applicablePromotionList_feature_div" class="feature" data-feature-name="applicablePromotionList">
         
     




    

    
    
    
        
            
                
	                
	                
	                	






	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="availability_feature_div" class="feature" data-feature-name="availability">
         
     




    

    
    
    
        
            
                
	                
	                
	                	






































	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="globalStoreBadgePopover_feature_div" class="feature" data-feature-name="globalStoreBadgePopover">
         
     




    

    
    
    
        
            
                
	                
	                
	                	





  

	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="holidayDeliveryMessage_feature_div" class="feature" data-feature-name="holidayDeliveryMessage">
         
     




    

    
    
    
        
            
                
	                
	                
	                	










	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="dynamicDeliveryMessage_feature_div" class="feature" data-feature-name="dynamicDeliveryMessage">
         
     




    

    
    
    
        
            
                
	                
	                
	                	





















	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="shipsFromSoldBy_feature_div" class="feature" data-feature-name="shipsFromSoldBy">
         
     




    

    
    
    
        
            
                
	                
	                
	                	


















	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="smileEligibility_feature_div" class="feature" data-feature-name="smileEligibility">
         
     




    

    
    
    
        
            
                
	                
	                
	                	





	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        







        
        
    
        
        
        
        










    
    
     
         
         
             <div id="holidayAvailabilityMessage_feature_div" class="feature" data-feature-name="holidayAvailabilityMessage">
         
     




    

    
    
    
        
            
                
	                
	                
	                	




	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        







        
        
    
        
        
        
        










    
    
     
         
         
             <div id="olp_feature_div" class="feature" data-feature-name="olp">
         
     




    

    
    
    
        
            
                
	                
	                
	                	











































    

    

    

    

    

    
        
            <div id="olp-sl-new-used" class="a-section a-spacing-small a-spacing-top-small">
                
                    <span class="olp-padding-right"><a href="/gp/offer-listing/B01DQDZVCO/ref=dp_olp_new?ie=UTF8&amp;condition=new">1&nbsp;neu</a>&nbsp;ab&nbsp;<span class='a-color-price'>EUR 14,99</span></span>
                
				
                
                    <span class="olp-padding-right"><a href="/gp/offer-listing/B01DQDZVCO/ref=dp_olp_used?ie=UTF8&amp;condition=used">2&nbsp;gebraucht</a>&nbsp;ab&nbsp;<span class='a-color-price'>EUR 13,42</span></span>
                
				
                
				
                
            </div>
        
    




	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="twister_feature_div" class="feature" data-feature-name="twister">
         
     




    

    
    
    
        
            
                
	                
	                
	                	









	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        







        
        
    
        
        
        
        







        
        
    
        
        
        
        







        
        
    
        
        
        
        







        
        
    
        
        
        
        










    
    
     
         
         
             <div id="addServices_feature_div" class="feature" data-feature-name="addServices">
         
     




    

    
    
    
        
            
                
	                
	                
	                	<script type="text/javascript">(function(f) {f(window.P._namespace("VAS_DSC"));}(function(P) {
    if (typeof uet === 'function') {
        uet('bb',"LocalServicesWidget", {wb: 1});  //timestamp body-begin
    }
}));</script><input type="hidden" id="vas-zipCodeValidationRegexString" name="vas-zipCodeValidationRegexString" value="" >
<script type="a-state" data-a-state="{&quot;key&quot;:&quot;smartShelfVASInfo&quot;}">{"hideSmartShelf":false}</script><!-- if warranty SI is eligible to be shown https://w.amazon.com/bin/view/VAS/Discovery/ServiceInterstitialDisplayLogic-->
<script type="a-state" data-a-state="{&quot;key&quot;:&quot;vas-common-vm&quot;}">{"isProductAvailable":true,"zipCode":"","attachToLdbb":false,"showEnhancedUpsellBundle":"false","multiQuantityPurchaseEnabled":false,"hijackMBCATC":false,"productAsin":"B01DQDZVCO","serviceAsin":"","sessionId":"","showSIATC":false,"productPTD":"HOME","showUnifiedGuruExperience":false,"doRedirect":false,"showSTSServiceInterstitial":false,"hijackATC":false,"productWDG":"home_display_on_website","isCBM":false,"defaultServiceAsinToOffer":"","buyboxPrice":"EUR 14,99","isWarrantyPresent":false,"shouldSuppressWidget":false,"offerListingID":"","isVariationalParent":false}</script><script type="text/javascript">(function(f) {f(window.P._namespace("VAS_DSC"));}(function(P) {
    if (typeof uex === 'function') {
        uex('ld',"LocalServicesWidget", {wb: 1});  //send the metrics to the server
    }
}));</script>
	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="clickToContact_feature_div" class="feature" data-feature-name="clickToContact">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="renewedProgramDescriptionAtf_feature_div" class="feature" data-feature-name="renewedProgramDescriptionAtf">
         
     




    

    
    
    
        
            
                
	                
	                
	                	






	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="featurebullets_feature_div" class="feature" data-feature-name="featurebullets">
         
     




    

    
    
    
        
            
                
	                
	                
	                	



<div id="feature-bullets" class="a-section a-spacing-medium a-spacing-top-small">








		
			
                               <ul class="a-unordered-list a-vertical a-spacing-none">
					
					
						<li><span class="a-list-item"> 
							Ein robuster Kleiderständer gibt Ihnen 10 Zoll Raum für das Kleiderhängen, wenn Sie es brauchen, und knifft im Handumdrehen, wenn Sie es nicht brauchen!
							
						</span></li>
					
						<li><span class="a-list-item"> 
							Ein Superplatzsparendes Gerät! Er öffnet kurzzeitig und gibt Ihnen ein zusätzliches Rack, damit Sie während Partys Ihre Gast-Mäntel hängen können, Und es kann Ihnen auch beim Sortieren der Kleidung helfen, wenn die Jahreszeiten wechseln; oder jedezeit, wo Sie zusätzlichen Hängerraum benötigen.
							
						</span></li>
					
						<li><span class="a-list-item"> 
							Gibt Ihnen einen "Instanter Kleiderschrank"; ideal für kleine Räume, Ecken, Bäder, auf einer Veranda oder Terrasse u.s.w..
							
						</span></li>
					
						<li><span class="a-list-item"> 
							Einfache Installation und stark, nicht korrodierendes Aluminium und Edelstahl-Konstruktion; unterstützt bis zu 60 Pfund. Offene Größe: 14.7 "hoch x 1,2" breit x 10.5 "tief; Geschlossene Größe: 14.7" hoch x 1,2 "breit x 1" tief.
							
						</span></li>
					
						<li><span class="a-list-item"> 
							Ein-Jahr bedingungslose Geld-Zurück-Garantie. Wenn Sie mit dem Artikel aus irgendeinem Grund unzufrieden sind, werden wir den Kaufpreis sofort erstatten.
							
						</span></li>
					
				</ul>
				<!--  Loading EDP related metadata -->
                
                 	
	                  

    




<span class = "edp-feature-declaration" data-edp-feature-name="featurebullets" data-edp-asin="B01DQDZVCO" data-data-hash="723183471" data-defects="[{&quot;id&quot;:&quot;defect-mismatch-info&quot;,&quot;value&quot;:&quot;Abweichend vom Produkt&quot;},{&quot;id&quot;:&quot;defect-missing-information&quot;,&quot;value&quot;:&quot;Fehlende Informationen&quot;},{&quot;id&quot;:&quot;defect-unessential-info&quot;,&quot;value&quot;:&quot;Irrelevante Informationen vorhanden&quot;},{&quot;id&quot;:&quot;defect-other-productinfo-issue&quot;,&quot;value&quot;:&quot;Anderes Problem mit der Produktinformation&quot;}]" data-metadata="CATALOG" data-feature-container-id="" data-custom-event-handler="" data-display-name="Produktmerkmale" data-edit-data-state="featureBulletsEDPEditData" data-position="" data-resolver="CQResolver"></span>
	               
               
               
			
			
		

		

		

	
</div>

	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="globalStoreInfoBullets_feature_div" class="feature" data-feature-name="globalStoreInfoBullets">
         
     




    

    
    
    
        
            
                
	                
	                
	                	










	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="addOnItem_feature_div" class="feature" data-feature-name="addOnItem">
         
     




    

    
    
    
        
            
                
	                
	                
	                	




	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="recommendations_feature_div" class="feature" data-feature-name="recommendations">
         
     




    

    
    
    
        
            
                
	                
	                
	                	






	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        







        
        
    
        
        
        
        







        
        
    
        
        
        
        













    

    
    
    
        
        
        
        
        
        	
        		
        			<div id="HLCXComparisonJumplink_feature_div"></div>
        		
        		
        	
        
        
        
    
    
    

    



















        
        
    
        
        
        
        










    
    
     
         
         
             <div id="edpIngress_feature_div" class="feature" data-feature-name="edpIngress">
         
     




    

    
    
    
        
            
                
	                
	                
	                	







<span id="edpIngressContainer">



<span class="edpIngressIcon"></span>

 <a id="edpIngress" class="a-link-normal" href="javascript://"> 
 <span class="edpIngressText">Falsche Produktinformationen melden</span></a>

 </span>

<div class="a-section a-spacing-none a-spacing-top-mini"></div>


	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="cpsiaProductSafetyWarningIntlATF_feature_div" class="feature" data-feature-name="cpsiaProductSafetyWarningIntlATF">
         
     




    

    
    
    
        
            
                
	                
	                
	                	




	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="andonCord_feature_div" class="feature" data-feature-name="andonCord">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="newerVersion_feature_div" class="feature" data-feature-name="newerVersion">
         
     




    

    
    
    
        
            
                
	                
	                
	                	





	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="certifiedRefurbishedVersion_feature_div" class="feature" data-feature-name="certifiedRefurbishedVersion">
         
     




    

    
    
    
        
            
                
	                
	                
	                	





	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="whiteGloveMessage_feature_div" class="feature" data-feature-name="whiteGloveMessage">
         
     




    

    
    
    
        
            
                
	                
	                
	                	





	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="productAlert_feature_div" class="feature" data-feature-name="productAlert">
         
     




    

    
    
    
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="vendorPoweredCoupon_feature_div" class="feature" data-feature-name="vendorPoweredCoupon">
         
     




    

    
    
    
        
            
                
	                
	                
	                	

	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        







        
        
    
</div>


</div>

<div id="hqpWrapper" class="centerColAlign">
    
        
        
        
        










    
    
     
         
         
             <div id="heroQuickPromo_feature_div" class="feature" data-feature-name="heroQuickPromo">
         
     




    

    
    
    
        
        
        
        
        
        
    <div id="hero-quick-promo" class="a-row a-spacing-medium">
        
            <hr class="a-spacing-medium a-divider-normal">
        

















        






















        




































<script>if (typeof uet === 'function' && typeof ues === 'function') {var scope = 'Detail_hero-quick-promo_Desktop';var placementId = '';ues('wb', 'adplacements:' + scope.replace(/\\_/g, ':'), {wb:1}); uet('bb', 'adplacements:' + scope.replace(/\\_/g, ':'), {wb:1}); if (placementId) {ues('wb', 'adplacements:' + placementId, {wb:1});uet('bb', 'adplacements:' + placementId, {wb:1});}}</script><div id="ape_Detail_hero-quick-promo_Desktop_placement" class="copilot-secure-display celwidget  text/x-dacx-safeframe" data-campaign="8580" style="max-width: 650px;margin: auto;margin-left:0px;" cel_widget_id="Detail_hero-quick-promo_Desktop" data-ad-details='{"slot" :"Detail_hero-quick-promo_Desktop","slotName" :"hero-quick-promo","src" : "prefetchEnabled","adServer" :"cs","campaignId" :  "8580","arid" :"2138cc69ca5a4a379a0b3cf358699f36","size" :{"width": "100%","height" : "130px"},"allowedSizes" :[],"allowedDomains" :  ["g-ecx.images-amazon.com", "images-na.ssl-images-amazon.com"],"aanParams" :   "site%3Damazon.de%3Bpt%3DDetail%3Bslot%3Dhero-quick-promo%3Bpid%3DB01DQDZVCO%3Bq%3Dkleiderhaken%3Bbn%3D3167641%3Barid%3D2138cc69ca5a4a379a0b3cf358699f36","loadAfter" :   "criticalFeature","extraDelay" :  0,"iframeExtraStyle": "","iframeClass":  "","iframeSandbox":"","adPixels": [],"adPixelDelay": "0","aaxImpPixelUrl":  "https://aax-eu.amazon-adsystem.com/e/xsp/imp?b=QtJ_zZmYfp5ADkamgDvxAnIAAAFoCymm-QMAAAH6Aeuhj4Y","aaxInstrPixelUrl": "https://aax-eu.amazon-adsystem.com/x/px/QtJ_zZmYfp5ADkamgDvxAnIAAAFoCymm-QMAAAH6Aeuhj4Y/","usePrefetchRoute": false,"htmlContentEncoded": "PHNjcmlwdD4oZnVuY3Rpb24oZyxoLEssbGEpe2Z1bmN0aW9uIFYoYSl7dCYmdC50YWcmJnQudGFnKHEoIjoiLCJhdWkiLGEpKX1mdW5jdGlvbiB2KGEsYil7dCYmdC5jb3VudCYmdC5jb3VudCgiYXVpOiIrYSwwPT09Yj8wOmJ8fCh0LmNvdW50KCJhdWk6IithKXx8MCkrMSl9ZnVuY3Rpb24gbShhKXt0cnl7cmV0dXJuIGEudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KX1jYXRjaChiKXtyZXR1cm4hMX19ZnVuY3Rpb24gdyhhLGIsYyl7YS5hZGRFdmVudExpc3RlbmVyP2EuYWRkRXZlbnRMaXN0ZW5lcihiLGMsITEpOmEuYXR0YWNoRXZlbnQmJmEuYXR0YWNoRXZlbnQoIm9uIitiLGMpfWZ1bmN0aW9uIHEoYSxiLGMsZSl7Yj1iJiZjP2IrYStjOmJ8fGM7cmV0dXJuIGU/cShhLGIsZSk6Yn1mdW5jdGlvbiBCKGEsYixjKXt0cnl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsYix7dmFsdWU6Yyx3cml0YWJsZTohMX0pfWNhdGNoKGUpe2FbYl09Y31yZXR1cm4gY31mdW5jdGlvbiBMKCl7cmV0dXJuIHNldFRpbWVvdXQoVywwKX1mdW5jdGlvbiBtYShhLGIpe3ZhciBjPWEubGVuZ3RoLGU9YyxmPWZ1bmN0aW9uKCl7ZS0tfHwoTS5wdXNoKGIpLE58fChMKCksTj0hMCkpfTtmb3IoZigpO2MtLTspWFthW2NdXT9mKCk6KHhbYVtjXV09eFthW2NdXXx8W10pLnB1c2goZil9ZnVuY3Rpb24gbmEoYSxiLGMsZSxmKXt2YXIgZD1oLmNyZWF0ZUVsZW1lbnQoYT8ic2NyaXB0IjoibGluayIpO3coZCwiZXJyb3IiLGUpO2YmJncoZCwibG9hZCIsZik7aWYoYSl7ZC50eXBlPSJ0ZXh0L2phdmFzY3JpcHQiO2QuYXN5bmM9ITA7aWYoYT1jKWE9LTEhPT1iLmluZGV4T2YoImltYWdlcy9JIil8fC9BVUlDbGllbnRzLy50ZXN0KGIpO2EmJmQuc2V0QXR0cmlidXRlKCJjcm9zc29yaWdpbiIsImFub255bW91cyIpO2Quc3JjPWJ9ZWxzZSBkLnJlbD0ic3R5bGVzaGVldCIsZC5ocmVmPWI7aC5nZXRFbGVtZW50c0J5VGFnTmFtZSgiaGVhZCIpWzBdLmFwcGVuZENoaWxkKGQpfWZ1bmN0aW9uIFkoYSxiKXtmdW5jdGlvbiBjKGMsZSl7ZnVuY3Rpb24gZigpe25hKGIsYyxoLGZ1bmN0aW9uKGIpeyFDJiZoPyhoPSExLHYoInJlc291cmNlX3JldHJ5IiksZigpKToodigicmVzb3VyY2VfZXJyb3IiKSxhLmxvZygiQXNzZXQgZmFpbGVkIHRvIGxvYWQ6ICIrYyxDPyJXQVJOIjp2b2lkIDApKTtiJiZiLnN0b3BQcm9wYWdhdGlvbj9iLnN0b3BQcm9wYWdhdGlvbigpOmcuZXZlbnQmJihnLmV2ZW50LmNhbmNlbEJ1YmJsZT0hMCl9LGUpfWlmKFpbY10pcmV0dXJuITE7WltjXT0hMDt2KCJyZXNvdXJjZV9jb3VudCIpO3ZhciBoPSEwO3JldHVybiFmKCl9aWYoYil7dmFyIGU9MCxmPTA7Yy5hbmRDb25maXJtPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGMoYSxmdW5jdGlvbigpe2UrKztiJiZiLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0pfTtjLmNvbmZpcm09ZnVuY3Rpb24oKXtmKyt9O2MuZ2V0Q3NyaUNvdW50ZXJzPWZ1bmN0aW9uKCl7cmV0dXJue3JlcXM6ZSxmdWxsOmZ9fX1yZXR1cm4gY31mdW5jdGlvbiBvYShhLGIsYyl7Zm9yKHZhciBlPXtuYW1lOmEsZ3VhcmQ6ZnVuY3Rpb24oYyl7cmV0dXJuIGIuZ3VhcmRGYXRhbChhLGMpfSxsb2dFcnJvcjpmdW5jdGlvbihjLGQsZSl7Yi5sb2dFcnJvcihjLGQsZSxhKX19LGY9W10sZD0wO2Q8Yy5sZW5ndGg7ZCsrKUQuaGFzT3duUHJvcGVydHkoY1tkXSkmJihmW2RdPU8uaGFzT3duUHJvcGVydHkoY1tkXSk/T1tjW2RdXShEW2NbZF1dLGUpOkRbY1tkXV0pO3JldHVybiBmfWZ1bmN0aW9uIHkoYSxiLGMsZSxmKXtyZXR1cm4gZnVuY3Rpb24oZCxoKXtmdW5jdGlvbiBsKCl7dmFyIGE9bnVsbDtlP2E9aDoiZnVuY3Rpb24iPT09dHlwZW9mIGgmJihwLnN0YXJ0PXooKSxhPWguYXBwbHkoZyxvYShkLGssbSkpLHAuZW5kPXooKSk7aWYoYil7RFtkXT1hO2E9ZDtmb3IoWFthXT0hMDsoeFthXXx8W10pLmxlbmd0aDspeFthXS5zaGlmdCgpKCk7ZGVsZXRlIHhbYV19cC5kb25lPSEwfXZhciBrPWZ8fHRoaXM7ImZ1bmN0aW9uIj09PXR5cGVvZiBkJiYoaD1kLGQ9dm9pZCAwKTtiJiYoZD0oZHx8Il9fTk9OQU1FX18iKS5yZXBsYWNlKC9ecHJ2Oi8sIiIpLFAuaGFzT3duUHJvcGVydHkoZCkmJmsuZXJyb3IocSgiLCByZXJlZ2lzdGVyZWQgYnkgIixxKCIgYnkgIixkKyIgYWxyZWFkeSByZWdpc3RlcmVkIixQW2RdKSxrLmF0dHJpYnV0aW9uKSxkKSxQW2RdPWsuYXR0cmlidXRpb24pO2Zvcih2YXIgbT1bXSxuPTA7bjxhLmxlbmd0aDtuKyspbVtuXT1hW25dLnJlcGxhY2UoL15wcnY6LywiIik7dmFyIHA9YWFbZHx8ImFub24iKyArK3BhXT17ZGVwZW5kOm0scmVnaXN0ZXJlZDp6KCksbmFtZXNwYWNlOmsubmFtZXNwYWNlfTtjP2woKTptYShtLGsuZ3VhcmRGYXRhbChkLGwpKTtyZXR1cm57ZGVjb3JhdGU6ZnVuY3Rpb24oYSl7T1tkXT1rLmd1YXJkRmF0YWwoZCxhKX19fX1mdW5jdGlvbiBiYShhKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYj1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO3JldHVybntleGVjdXRlOnkoYiwhMSxhLCExLHRoaXMpLHJlZ2lzdGVyOnkoYiwhMCxhLCExLHRoaXMpfX19ZnVuY3Rpb24gUShhLGIpe3JldHVybiBmdW5jdGlvbihjLGUpe2V8fChlPWMsYz12b2lkIDApO3ZhciBmPXRoaXMuYXR0cmlidXRpb247cmV0dXJuIGZ1bmN0aW9uKCl7dS5wdXNoKGJ8fHthdHRyaWJ1dGlvbjpmLG5hbWU6Yyxsb2dMZXZlbDphfSk7dmFyIGQ9ZS5hcHBseSh0aGlzLGFyZ3VtZW50cyk7dS5wb3AoKTtyZXR1cm4gZH19fWZ1bmN0aW9uIEUoYSxiKXt0aGlzLmxvYWQ9e2pzOlkodGhpcywhMCksY3NzOlkodGhpcyl9O0IodGhpcywibmFtZXNwYWNlIixiKTtCKHRoaXMsImF0dHJpYnV0aW9uIixhKX1mdW5jdGlvbiBjYSgpe2guYm9keT9uLnRyaWdnZXIoImEtYm9keUJlZ2luIik6c2V0VGltZW91dChjYSwyMCl9ZnVuY3Rpb24gQShhLGIpe2lmKGIpe2Zvcih2YXIgYz1hLmNsYXNzTmFtZS5zcGxpdCgiICIpLGU9Yy5sZW5ndGg7ZS0tOylpZihjW2VdPT09YilyZXR1cm47YS5jbGFzc05hbWUrPSIgIitifX1mdW5jdGlvbiBkYShhLGIpe2Zvcih2YXIgYz1hLmNsYXNzTmFtZS5zcGxpdCgiICIpLGU9W10sZjt2b2lkIDAhPT0oZj1jLnBvcCgpKTspZiYmZiE9PWImJmUucHVzaChmKTthLmNsYXNzTmFtZT1lLmpvaW4oIiAiKX1mdW5jdGlvbiBlYShhKXt0cnl7cmV0dXJuIGEoKX1jYXRjaChiKXtyZXR1cm4hMX19ZnVuY3Rpb24gRigpe2lmKEcpe3ZhciBhPWcuaW5uZXJXaWR0aD97dzpnLmlubmVyV2lkdGgsaDpnLmlubmVySGVpZ2h0fTp7dzprLmNsaWVudFdpZHRoLGg6ay5jbGllbnRIZWlnaHR9OzU8TWF0aC5hYnMoYS53LVIudyl8fDUwPGEuaC1SLmg/KFI9YSxIPTQsKGE9bC5tb2JpbGV8fGwudGFibGV0PzQ1MDxhLncmJmEudz5hLmg6MTI1MDw9YS53KT9BKGssImEtd3MiKTpkYShrLCJhLXdzIikpOjA8SCYmKEgtLSxmYT1zZXRUaW1lb3V0KEYsMTYpKX19ZnVuY3Rpb24gcWEoYSl7KEc9dm9pZCAwPT09YT8hRzohIWEpJiZGKCl9ZnVuY3Rpb24gcmEoKXtyZXR1cm4gR30idXNlIHN0cmljdCI7dmFyIEk9Sy5ub3c9Sy5ub3d8fGZ1bmN0aW9uKCl7cmV0dXJuK25ldyBLfSx6PWZ1bmN0aW9uKGEpe3JldHVybiBhJiZhLm5vdz9hLm5vdy5iaW5kKGEpOkl9KGcucGVyZm9ybWFuY2UpO2xhPXooKTt2YXIgcD1nLkFtYXpvblVJUGFnZUpTfHxnLlA7aWYocCYmcC53aGVuJiZwLnJlZ2lzdGVyKXRocm93IEVycm9yKCJBIGNvcHkgb2YgUCBoYXMgYWxyZWFkeSBiZWVuIGxvYWRlZCBvbiB0aGlzIHBhZ2UuIik7dmFyIHQ9Zy51ZTtWKCk7VigiYXVpX2J1aWxkX2RhdGU6My4xOC4xMi0yMDE4LTA4LTI0Iik7dmFyIE09W10sTj0hMSxXO1c9ZnVuY3Rpb24oKXtmb3IodmFyIGE9TCgpLGI9SSgpO00ubGVuZ3RoOylpZihNLnNoaWZ0KCkoKSw1MDxJKCktYilyZXR1cm47Y2xlYXJUaW1lb3V0KGEpO049ITF9O20oL09TIDZfWzAtOV0rIGxpa2UgTWFjIE9TIFgvaSkmJncoZywic2Nyb2xsIixMKTt2YXIgWD17fSx4PXt9LFo9e30sQz0hMTt3KGcsImJlZm9yZXVubG9hZCIsZnVuY3Rpb24oKXtDPSEwO3NldFRpbWVvdXQoZnVuY3Rpb24oKXtDPSExfSwxRTQpfSk7dmFyIFA9e30sRD17fSxPPXt9LGFhPXt9LHBhPTAsUyx1PVtdLGdhPWcub25lcnJvcjtnLm9uZXJyb3I9ZnVuY3Rpb24oYSxiLGMsZSxmKXtmJiYib2JqZWN0Ij09PXR5cGVvZiBmfHwoZj1FcnJvcihhLGIsYyksZi5jb2x1bW5OdW1iZXI9ZSxmLnN0YWNrPWJ8fGN8fGU/cShTdHJpbmcuZnJvbUNoYXJDb2RlKDkyKSxmLm1lc3NhZ2UsImF0ICIrcSgiOiIsYixjLGUpKTp2b2lkIDApO3ZhciBkPXUucG9wKCl8fHt9O2YuYXR0cmlidXRpb249cSgiOiIsZi5hdHRyaWJ1dGlvbnx8ZC5hdHRyaWJ1dGlvbixkLm5hbWUpO2YubG9nTGV2ZWw9ZC5sb2dMZXZlbDtmLmF0dHJpYnV0aW9uJiZjb25zb2xlJiZjb25zb2xlLmxvZyYmY29uc29sZS5sb2coW2YubG9nTGV2ZWx8fCJFUlJPUiIsYSwidGhyb3duIGJ5IixmLmF0dHJpYnV0aW9uXS5qb2luKCIgIikpO3U9W107Z2EmJihkPVtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSxkWzRdPWYsZ2EuYXBwbHkoZyxkKSl9O0UucHJvdG90eXBlPXtsb2dFcnJvcjpmdW5jdGlvbihhLGIsYyxlKXtiPXttZXNzYWdlOmIsbG9nTGV2ZWw6Y3x8IkVSUk9SIixhdHRyaWJ1dGlvbjpxKCI6Iix0aGlzLmF0dHJpYnV0aW9uLGUpfTtpZihnLnVlTG9nRXJyb3IpcmV0dXJuIGcudWVMb2dFcnJvcihhfHxiLGE/YjpudWxsKSwhMDtjb25zb2xlJiZjb25zb2xlLmVycm9yJiYoY29uc29sZS5sb2coYiksY29uc29sZS5lcnJvcihhKSk7cmV0dXJuITF9LGVycm9yOmZ1bmN0aW9uKGEsYixjLGUpe2E9RXJyb3IocSgiOiIsZSxhLGMpKTthLmF0dHJpYnV0aW9uPXEoIjoiLHRoaXMuYXR0cmlidXRpb24sYik7dGhyb3cgYTt9LGd1YXJkRXJyb3I6USgpLGd1YXJkRmF0YWw6USgiRkFUQUwiKSxndWFyZEN1cnJlbnQ6ZnVuY3Rpb24oYSl7dmFyIGI9dVt1Lmxlbmd0aC0xXTtyZXR1cm4gYj9RKGIubG9nTGV2ZWwsYikuY2FsbCh0aGlzLGEpOmF9LGxvZzpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHRoaXMubG9nRXJyb3IobnVsbCxhLGIsYyl9LGRlY2xhcmU6eShbXSwhMCwhMCwhMCkscmVnaXN0ZXI6eShbXSwhMCksZXhlY3V0ZTp5KFtdKSxBVUlfQlVJTERfREFURToiMy4xOC4xMi0yMDE4LTA4LTI0Iix3aGVuOmJhKCksbm93OmJhKCEwKSx0cmlnZ2VyOmZ1bmN0aW9uKGEsYixjKXt2YXIgZT1JKCk7dGhpcy5kZWNsYXJlKGEse2RhdGE6YixwYWdlRWxhcHNlZFRpbWU6ZS0oZy5hUGFnZVN0YXJ0fHxOYU4pLHRyaWdnZXJUaW1lOmV9KTtjJiZjLmluc3RydW1lbnQmJlMud2hlbigicHJ2OmEtbG9nVHJpZ2dlciIpLmV4ZWN1dGUoZnVuY3Rpb24oYil7YihhKX0pfSxoYW5kbGVUcmlnZ2VyczpmdW5jdGlvbigpe3RoaXMubG9nKCJoYW5kbGVUcmlnZ2VycyBkZXByZWNhdGVkIil9LGF0dHJpYnV0ZUVycm9yczpmdW5jdGlvbihhKXtyZXR1cm4gbmV3IEUoYSl9LF9uYW1lc3BhY2U6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IEUoYSxiKX19O3ZhciBuPUIoZywiQW1hem9uVUlQYWdlSlMiLG5ldyBFKTtTPW4uX25hbWVzcGFjZSgiUGFnZUpTIiwiQW1hem9uVUkiKTtTLmRlY2xhcmUoInBydjpwLWRlYnVnIixhYSk7bi5kZWNsYXJlKCJwLXJlY29yZGVyLWV2ZW50cyIsW10pO24uZGVjbGFyZSgicC1yZWNvcmRlci1zdG9wIixmdW5jdGlvbigpe30pO0IoZywiUCIsbik7Y2EoKTtpZihoLmFkZEV2ZW50TGlzdGVuZXIpe3ZhciBoYTtoLmFkZEV2ZW50TGlzdGVuZXIoIkRPTUNvbnRlbnRMb2FkZWQiLGhhPWZ1bmN0aW9uKCl7bi50cmlnZ2VyKCJhLWRvbXJlYWR5Iik7aC5yZW1vdmVFdmVudExpc3RlbmVyKCJET01Db250ZW50TG9hZGVkIixoYSwhMSl9LCExKX12YXIgaz1oLmRvY3VtZW50RWxlbWVudCxUPWZ1bmN0aW9uKCl7dmFyIGE9WyJPIiwibXMiLCJNb3oiLCJXZWJraXQiXSxiPWguY3JlYXRlRWxlbWVudCgiZGl2Iik7cmV0dXJue3Rlc3RHcmFkaWVudHM6ZnVuY3Rpb24oKXtiLnN0eWxlLmNzc1RleHQ9ImJhY2tncm91bmQtaW1hZ2U6LXdlYmtpdC1ncmFkaWVudChsaW5lYXIsbGVmdCB0b3AscmlnaHQgYm90dG9tLGZyb20oIzlmOSksdG8od2hpdGUpKTtiYWNrZ3JvdW5kLWltYWdlOi13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQgdG9wLCM5Zjksd2hpdGUpO2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KGxlZnQgdG9wLCM5Zjksd2hpdGUpOyI7cmV0dXJuLTE8Yi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UuaW5kZXhPZigiZ3JhZGllbnQiKX0sdGVzdDpmdW5jdGlvbihjKXt2YXIgZT1jLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Muc3Vic3RyKDEpO2M9KGEuam9pbihlKyIgIikrZSsiICIrYykuc3BsaXQoIiAiKTtmb3IoZT1jLmxlbmd0aDtlLS07KWlmKCIiPT09Yi5zdHlsZVtjW2VdXSlyZXR1cm4hMDtyZXR1cm4hMX0sdGVzdFRyYW5zZm9ybTNkOmZ1bmN0aW9uKCl7dmFyIGE9ITE7Zy5tYXRjaE1lZGlhJiYoYT1nLm1hdGNoTWVkaWEoIigtd2Via2l0LXRyYW5zZm9ybS0zZCkiKS5tYXRjaGVzKTtyZXR1cm4gYX19fSgpLHA9ay5jbGFzc05hbWUsaWE9LyhefCApYS1tb2JpbGUoIHwkKS8udGVzdChwKSxqYT0vKF58IClhLXRhYmxldCggfCQpLy50ZXN0KHApLGw9e2F1ZGlvOmZ1bmN0aW9uKCl7cmV0dXJuISFoLmNyZWF0ZUVsZW1lbnQoImF1ZGlvIikuY2FuUGxheVR5cGV9LHZpZGVvOmZ1bmN0aW9uKCl7cmV0dXJuISFoLmNyZWF0ZUVsZW1lbnQoInZpZGVvIikuY2FuUGxheVR5cGV9LGNhbnZhczpmdW5jdGlvbigpe3JldHVybiEhaC5jcmVhdGVFbGVtZW50KCJjYW52YXMiKS5nZXRDb250ZXh0fSxzdmc6ZnVuY3Rpb24oKXtyZXR1cm4hIWguY3JlYXRlRWxlbWVudE5TJiYhIWguY3JlYXRlRWxlbWVudE5TKCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIsInN2ZyIpLmNyZWF0ZVNWR1JlY3R9LG9mZmxpbmU6ZnVuY3Rpb24oKXtyZXR1cm4gbmF2aWdhdG9yLmhhc093blByb3BlcnR5JiZuYXZpZ2F0b3IuaGFzT3duUHJvcGVydHkoIm9uTGluZSIpJiZuYXZpZ2F0b3Iub25MaW5lfSxkcmFnRHJvcDpmdW5jdGlvbigpe3JldHVybiJkcmFnZ2FibGUiaW4gaC5jcmVhdGVFbGVtZW50KCJzcGFuIil9LGdlb2xvY2F0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuISFuYXZpZ2F0b3IuZ2VvbG9jYXRpb259LGhpc3Rvcnk6ZnVuY3Rpb24oKXtyZXR1cm4hKCFnLmhpc3Rvcnl8fCFnLmhpc3RvcnkucHVzaFN0YXRlKX0sd2Vid29ya2VyOmZ1bmN0aW9uKCl7cmV0dXJuISFnLldvcmtlcn0sYXV0b2ZvY3VzOmZ1bmN0aW9uKCl7cmV0dXJuImF1dG9mb2N1cyJpbiBoLmNyZWF0ZUVsZW1lbnQoImlucHV0Iil9LGlucHV0UGxhY2Vob2xkZXI6ZnVuY3Rpb24oKXtyZXR1cm4icGxhY2Vob2xkZXIiaW4gaC5jcmVhdGVFbGVtZW50KCJpbnB1dCIpfSx0ZXh0YXJlYVBsYWNlaG9sZGVyOmZ1bmN0aW9uKCl7cmV0dXJuInBsYWNlaG9sZGVyImluIGguY3JlYXRlRWxlbWVudCgidGV4dGFyZWEiKX0sbG9jYWxTdG9yYWdlOmZ1bmN0aW9uKCl7cmV0dXJuImxvY2FsU3RvcmFnZSJpbiBnJiZudWxsIT09Zy5sb2NhbFN0b3JhZ2V9LG9yaWVudGF0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuIm9yaWVudGF0aW9uImluIGd9LHRvdWNoOmZ1bmN0aW9uKCl7cmV0dXJuIm9udG91Y2hlbmQiaW4gaH0sZ3JhZGllbnRzOmZ1bmN0aW9uKCl7cmV0dXJuIFQudGVzdEdyYWRpZW50cygpfSxoaXJlczpmdW5jdGlvbigpe3ZhciBhPWcuZGV2aWNlUGl4ZWxSYXRpbyYmMS41PD1nLmRldmljZVBpeGVsUmF0aW98fGcubWF0Y2hNZWRpYSYmZy5tYXRjaE1lZGlhKCIobWluLXJlc29sdXRpb246MTQ0ZHBpKSIpLm1hdGNoZXM7digiaGlSZXMiKyhpYT8iTW9iaWxlIjpqYT8iVGFibGV0IjoiRGVza3RvcCIpLGE/MTowKTtyZXR1cm4gYX0sdHJhbnNmb3JtM2Q6ZnVuY3Rpb24oKXtyZXR1cm4gVC50ZXN0VHJhbnNmb3JtM2QoKX0sdG91Y2hTY3JvbGxpbmc6ZnVuY3Rpb24oKXtyZXR1cm4gbSgvV2luZG93c2hvcHxhbmRyb2lkLihbMy05XXxbTC1aXSl8T1MgKFs1LTldfFsxLTldWzAtOV0rKShfWzAtOV17MSwyfSkrIGxpa2UgTWFjIE9TIFh8Q2hyb21lfFNpbGt8RmlyZWZveHxUcmlkZW50Lis/OyBUb3VjaC9pKX0saW9zOmZ1bmN0aW9uKCl7cmV0dXJuIG0oL09TIFsxLTldWzAtOV0qKF9bMC05XSopKyBsaWtlIE1hYyBPUyBYL2kpJiYhbSgvdHJpZGVudHxFZGdlL2kpfSxhbmRyb2lkOmZ1bmN0aW9uKCl7cmV0dXJuIG0oL2FuZHJvaWQuKFsxLTldfFtMLVpdKS9pKSYmIW0oL3RyaWRlbnR8RWRnZS9pKX0sbW9iaWxlOmZ1bmN0aW9uKCl7cmV0dXJuIGlhfSx0YWJsZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gamF9fSxyO2ZvcihyIGluIGwpbC5oYXNPd25Qcm9wZXJ0eShyKSYmKGxbcl09ZWEobFtyXSkpO2Zvcih2YXIgVT0idGV4dFNoYWRvdyB0ZXh0U3Ryb2tlIGJveFNoYWRvdyBib3JkZXJSYWRpdXMgYm9yZGVySW1hZ2Ugb3BhY2l0eSB0cmFuc2Zvcm0gdHJhbnNpdGlvbiIuc3BsaXQoIiAiKSxKPTA7SjxVLmxlbmd0aDtKKyspbFtVW0pdXT1lYShmdW5jdGlvbigpe3JldHVybiBULnRlc3QoVVtKXSl9KTt2YXIgRz0hMCxmYT0wLFI9e3c6MCxoOjB9LEg9NDtGKCk7dyhnLCJyZXNpemUiLGZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KGZhKTtIPTQ7RigpfSk7dmFyIGthPXtnZXRJdGVtOmZ1bmN0aW9uKGEpe3RyeXtyZXR1cm4gZy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShhKX1jYXRjaChiKXt9fSxzZXRJdGVtOmZ1bmN0aW9uKGEsYil7dHJ5e3JldHVybiBnLmxvY2FsU3RvcmFnZS5zZXRJdGVtKGEsYil9Y2F0Y2goYyl7fX19O2RhKGssImEtbm8tanMiKTtBKGssImEtanMiKTshbSgvT1MgWzEtOF0oX1swLTldKikrIGxpa2UgTWFjIE9TIFgvaSl8fGcubmF2aWdhdG9yLnN0YW5kYWxvbmV8fG0oL3NhZmFyaS9pKXx8QShrLCJhLWVtYmVyIik7cD1bXTtmb3IociBpbiBsKWwuaGFzT3duUHJvcGVydHkocikmJmxbcl0mJnAucHVzaCgiYS0iK3IucmVwbGFjZSgvKFtBLVpdKS9nLGZ1bmN0aW9uKGEpe3JldHVybiItIithLnRvTG93ZXJDYXNlKCl9KSk7QShrLHAuam9pbigiICIpKTtrLnNldEF0dHJpYnV0ZSgiZGF0YS1hdWktYnVpbGQtZGF0ZSIsIjMuMTguMTItMjAxOC0wOC0yNCIpO24ucmVnaXN0ZXIoInAtZGV0ZWN0IixmdW5jdGlvbigpe3JldHVybntjYXBhYmlsaXRpZXM6bCxsb2NhbFN0b3JhZ2U6bC5sb2NhbFN0b3JhZ2UmJmthLHRvZ2dsZVJlc3BvbnNpdmVHcmlkOnFhLHJlc3BvbnNpdmVHcmlkRW5hYmxlZDpyYX19KTttKC9VQ0Jyb3dzZXIvaSl8fGwubG9jYWxTdG9yYWdlJiZBKGssa2EuZ2V0SXRlbSgiYS1mb250LWNsYXNzIikpO24uZGVjbGFyZSgiYS1ldmVudC1yZXZpc2VkLWhhbmRsaW5nIiwhMSk7bi5kZWNsYXJlKCJhLWZpeC1ldmVudC1vZmYiLCExKTt2KCJwYWdlanM6cGtnRXhlY1RpbWUiLHooKS1OYU4pfSkod2luZG93LGRvY3VtZW50LERhdGUpOyAgKHdpbmRvdy5BbWF6b25VSVBhZ2VKUyA/IEFtYXpvblVJUGFnZUpTIDogUCkubG9hZC5qcygnaHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9JLzYxZWE0eTd5UGRMLl9SQ3wxMUlZaGFwZ3VPTC5qcyw2MVRHNEJXcUZlTC5qcywyMWlTTno0N3hvTC5qcywwMTJGVmMzMTMxTC5qcywxMVM1V0J0QnNsTC5qcywzMUtFN2JvWUtFTC5qcywzMXlSYUVqLUV0TC5qcyw1MU1KZ2ZpMzAtTC5qcywxMUFIbFFoUFJqTC5qcywwMXhNc1dXRlVRTC5qcywxMWFOWUZGUzVoTC5qcywxMTZ0Z3c5VFNhTC5qcywyMWF1eHVJK2RSTC5qcywwMVBvTFhCRFhXTC5qcyw2MXJiZmdCaE1NTC5qcywwMW1pLUo4NmN5TC5qcywxMTBIWm5lSGNaTC5qcywzMVNIRFdrajh2TC5qcywwMXJwYXVUZXA0TC5qcywwMWl5eHVTR2o0TC5qcywwMUFwbnBGSWc3TC5qc18uanM/QVVJQ2xpZW50cy9BbWF6b25VSScpOzwvc2NyaXB0PjxsaW5rIHJlbD0ic3R5bGVzaGVldCIgaHJlZj0iaHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9JLzYxcHhGa2xlRlJMLl9SQ3wwMVE0OEtYdnFDTC5jc3MsMDFLK1BzMURlRUwuY3NzLDQxSUoyYUNLZFBMLmNzcywxMVB1UVFsQ2FTTC5jc3MsMTFJbnhzYVRxNEwuY3NzLDIxZWZsRTd2cDlMLmNzcywxMUlYZU1meXl3TC5jc3MsMjFaVGI4TU5wU0wuY3NzLDAxSjhoZmplYm5MLmNzcywwMVloUzNDcy1oTC5jc3MsMjFZVTRhS0JOS0wuY3NzLDExcmZ3ZlE4RGtMLmNzcywwMU5YaDViSnhZTC5jc3MsMTFFd2MycnAzd0wuY3NzLDIxVExoNHNTbjZMLmNzcywxMVgxN2tDUFpOTC5jc3MsMDFkVTgrU1BsRkwuY3NzLDExREduNldtcFRMLmNzcywxMUJ6WXUyeDZwTC5jc3MsMTFUdHRhMjZOT0wuY3NzLDAxWVZZN2pQWEVMLmNzcywzMTJlRjhaQS1NTC5jc3MsMTFrQmFZU2JNLUwuY3NzLDAxY2JTM1VLMTFMLmNzcywyMXk2c2tZc0dqTC5jc3MsMDFPRFp0RU82TkwuY3NzLDAxTklJeHFDc2xMLmNzc18uY3NzP0FVSUNsaWVudHMvQW1hem9uVUkiIC8+PG1ldGEgaHR0cC1lcXVpdj0iQ29udGVudC1UeXBlIiBjb250ZW50PSJ0ZXh0L2h0bWw7Y2hhcnNldD1BTlNJIj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHlsZT4gICAgLnNwX2hxcF9zaGFyZWRfcHJvZHVjdF9pbWFnZSB7ICAgICAgICB3aWR0aDogMTQwcHg7ICAgICAgICBoZWlnaHQ6IDExMHB4OyAgICAgICAgbWFyZ2luOiAxMHB4IDIwcHggMTBweCAyMHB4OyAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyAgICB9ICAgIC5zcF9ocXBfc2hhcmVkX3Jlc3BvbnNpdmVfYm94IHsgICAgICAgIHdpZHRoOiAxMDAlOyAgICAgICAgbWluLXdpZHRoOiAzNDBweDsgICAgICAgIG1heC13aWR0aDogNjUwcHg7ICAgICAgICBoZWlnaHQ6MTMwcHg7ICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTsgICAgICAgIG1hcmdpbi1sZWZ0Oi05OTk5OTlweDsgICAgfSAgICAuc3BfaHFwX3NoYXJlZF9idXlfYm94IHsgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4OyAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDsgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4OyAgICAgICAgcGFkZGluZy1sZWZ0OiAxODBweDsgICAgICAgIGhlaWdodDogMTMwcHg7ICAgICAgICBkaXNwbGF5OiBmbGV4OyAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyOyAgICAgICAgZmxleC13cmFwOiB3cmFwOyAgICB9ICAgIC5zcF9ocXBfc2hhcmVkX3Byb2R1Y3RfdGl0bGUgeyAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgICAgICAgIGZvbnQtc2l6ZTogMTRweDsgICAgICAgIGxpbmUtaGVpZ2h0OiAxOXB4OyAgICAgICAgY29sb3I6ICMxMTExMTE7ICAgIH0gICAgLnNwX2hxcF9zaGFyZWRfcmF0aW5nIHsgICAgICAgZm9udC1zaXplOiAxMnB4OyAgICAgICBjb2xvcjogIzc2NzY3NjsgICAgfSAgICAuc3BfaHFwX3NoYXJlZF9kaXZpZGVyIHsgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgICAgICAgIHRvcDogLTFweDsgICAgICAgIGZvbnQtc2l6ZTogMTZweDsgICAgICAgIGNvbG9yOiAjOTk5OTk5OyAgICAgICAgb3BhY2l0eTogMC4zOyAgICB9ICAgIC5zcF9ocXBfc2hhcmVkX2FkTGluayB7ICAgICAgICB3aWR0aDogMTAwJTsgICAgICAgIGhlaWdodDogMTAwJTsgICAgICAgIHotaW5kZXg6IDE1MDsgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICAgICAgIHRvcDogMHB4OyAgICAgICAgcmlnaHQ6IDBweDsgICAgfSAgICAuc3BfaHFwX3NoYXJlZF9wcmljZSB7ICAgICAgICBmb250LXNpemU6IDE0cHg7ICAgICAgICBjb2xvcjogIzc2NzY3NjsgICAgfSAgICAuc3BfaHFwX3NoYXJlZF9wcmltZV9pY29uIHsgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7ICAgIH0gICAgLnNwX2hxcF9zaGFyZWRfc2hvcE5vdyB7ICAgICAgICBmb250LXNpemU6IDEycHg7ICAgICAgICBjb2xvcjogIzAwNjZDMDsgICAgfSAgICAuc3BfaHFwX3NoYXJlZF9iYWNrZ3JvdW5kIHsgICAgICAgIHRvcDogMDsgICAgICAgIGxlZnQ6IDA7ICAgICAgICBib3R0b206IDA7ICAgICAgICByaWdodDogMDsgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICAgICAgIHotaW5kZXg6IDEwMDsgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7ICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDQ3MyksIHJnYmEoMCwgMCwgMCwgMC4wNDczKSk7ICAgICAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA0NzMpLCByZ2JhKDAsIDAsIDAsIDAuMDQ3MykpOyAgICAgICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA0NzMpLCByZ2JhKDAsIDAsIDAsIDAuMDQ3MykpOyAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNDczKSwgcmdiYSgwLCAwLCAwLCAwLjA0NzMpKTsgICAgfSAgICBkaXYuYS1ib3guc3BfaHFwX3NoYXJlZF9iYWNrZ3JvdW5kID4gZGl2IHsgICAgICAgIGhlaWdodDogMTAwJTsgICAgfSAgICAuc3BfaHFwX3NoYXJlZF9maXJzdFJvdyB7ICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyAgICB9ICAgIC5zcF9ocXBfc2hhcmVkX3RoaXJkUm93IHsgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7ICAgIH08L3N0eWxlPiAgICA8ZGl2IGlkPSJzcF9ocXBfc2hhcmVkIiBjbGFzcz0iYS1ib3ggc3BfaHFwX3NoYXJlZF9yZXNwb25zaXZlX2JveCI+PGRpdiBjbGFzcz0iYS1ib3gtaW5uZXIgYS1wYWRkaW5nLW5vbmUiPiAgICAgICAgPGRpdiBpZD0ic3BfaHFwX3NoYXJlZF9pbm5lciIgY2xhc3M9ImEtYm94IHNwX2hxcF9zaGFyZWRfYmFja2dyb3VuZCBzcF9ocXBfc2hhcmVkX3Jlc3BvbnNpdmVfYm94J30iPjxkaXYgY2xhc3M9ImEtYm94LWlubmVyIGEtcGFkZGluZy1ub25lIj4gICAgICAgICAgICA8YSBjbGFzcz0iYS1saW5rLW5vcm1hbCBzcF9ocXBfc2hhcmVkX2FkTGluayBhLXRleHQtbm9ybWFsIiB0YXJnZXQ9Il90b3AiIHJlbD0ibm9vcGVuZXIiIHRpdGxlPSJYWSBMaWZlIEtsZWlkZXJoYWtlbiBLbGFwcGJhciBBdXNzZW5iZXJlaWNoIEtsYXBwaGFrZW4ga2xlaWRlcndhbmRoYWtlbiBXw6RzY2hlbMO8ZnRlciBXYW5kIGhha2VuIEtsZWlkZXJzdMOkbmRlciBXYW5kaGFrZW4gS2xlaWRlcmzDvGZ0ZXIgR2FyZGVyb2Jlbmhha2VuIGbDvHIgRWNrZW4sIEJhbGtvbiwgV8Okc2NoZXRyb2NrbmVyLCBCw6RkZXIsIFNpbGJlciIgaHJlZj0iaHR0cHM6Ly9hYXgtZXUuYW1hem9uLWFkc3lzdGVtLmNvbS94L2MvUXRKX3pabVlmcDVBRGthbWdEdnhBbklBQUFGb0N5bW0tUU1BQUFINkFldWhqNFkvaHR0cHM6Ly93d3cuYW1hem9uLmRlL2dwL3NscmVkaXJlY3QvcGljYXNzb1JlZGlyZWN0Lmh0bWwvcmVmPXNzcGFfZGtfaHFwX2RldGFpbF9hYXhfMD9pZT1VVEY4JmFkSWQ9QTA1NzI2MzVQMVQxQzIxM1VGTDMmcXVhbGlmaWVyPTE1NDYzNzU1MDUmaWQ9MTQ0NTQ4MDQyNTIyNzU2MCZ3aWRnZXROYW1lPXNwX2hxcF9zaGFyZWQmdXJsPSUyRmRwJTJGQjA3MjdYM05YQyUyRnJlZiUzRHNzcGFfZGtfaHFwX2RldGFpbF9hYXhfMCUzRnBzYyUzRDEiPjwvYT4gICAgICAgIDwvZGl2PjwvZGl2PiAgICAgICA8aW1nIGFsdD0iWFkgTGlmZSBLbGVpZGVyaGFrZW4gS2xhcHBiYXIgQXVzc2VuYmVyZWljaCBLbGFwcGhha2VuIGtsZWlkZXJ3YW5kaGFrZW4gV8Okc2NoZWzDvGZ0ZXIgV2FuZCBoYWtlbiBLbGVpZGVyc3TDpG5kZXIgV2FuZGhha2VuIEtsZWlkZXJsw7xmdGVyIEdhcmRlcm9iZW5oYWtlbiBmw7xyIEVja2VuLCBCYWxrb24sIFfDpHNjaGV0cm9ja25lciwgQsOkZGVyLCBTaWxiZXIiIHNyYz0iaHR0cHM6Ly9pbWFnZXMtZXUuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9JLzQxZm8reWxMVG9MLl9BQ19TUjE0MCwxMTBfLmpwZyIgY2xhc3M9ImEtZHluYW1pYy1pbWFnZSBzcF9ocXBfc2hhcmVkX3Byb2R1Y3RfaW1hZ2UiIGhlaWdodD0iMTEwcHgiIHdpZHRoPSIxNDBweCIgZGF0YS1hLWR5bmFtaWMtaW1hZ2U9InsmcXVvdDtodHRwczovL2ltYWdlcy1ldS5zc2wtaW1hZ2VzLWFtYXpvbi5jb20vaW1hZ2VzL0kvNDFmbyt5bExUb0wuX0FDX1NSMTQwLDExMF8uanBnJnF1b3Q7OlsxNDAsMTEwXSwmcXVvdDtodHRwczovL2ltYWdlcy1ldS5zc2wtaW1hZ2VzLWFtYXpvbi5jb20vaW1hZ2VzL0kvNDFmbyt5bExUb0wuX0FDX1NSNDIwLDMzMF8uanBnJnF1b3Q7Ols0MjAsMzMwXSwmcXVvdDtodHRwczovL2ltYWdlcy1ldS5zc2wtaW1hZ2VzLWFtYXpvbi5jb20vaW1hZ2VzL0kvNDFmbyt5bExUb0wuX0FDX1NSMjgwLDIyMF8uanBnJnF1b3Q7OlsyODAsMjIwXX0iPiAgICAgICAgPGRpdiBjbGFzcz0iYS1yb3cgc3BfaHFwX3NoYXJlZF9idXlfYm94Ij4gICAgICAgICAgICA8ZGl2IGNsYXNzPSJhLXJvdyBzcF9ocXBfc2hhcmVkX2ZpcnN0Um93Ij4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9InNwX2hxcF9zaGFyZWRfZGlzcGxheV90aXRsZSIgY2xhc3M9InNwX2hxcF9zaGFyZWRfcHJvZHVjdF90aXRsZSI+WFkgTGlmZSBLbGVpZGVyaGFrZW4gS2xhcHBiYXIgQXVzc2VuYmVyZWljaCBLbGFwcGhha2VuIGtsZWlkZXJ3YW5kaGFrZW4gV8Okc2NoZWzDvGZ0ZXIgV2FuZCBoYWtlbiBLbGVpZGVyc3TDpG5kZXIgV2FuZGhha2VuIEtsZWlkZXJsw7xmdGVyIEdhcmRlcm9iZW5oYWtlbiBmw7xyIEVja2VuLCBCYWxrb24sIFfDpHNjaGV0cm9ja25lciwgQsOkZGVyLCBTaWxiZXI8L3NwYW4+ICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgPGRpdiBjbGFzcz0iYS1yb3cgc3BfaHFwX3NoYXJlZF9zZWNvbmRSb3ciPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPSJhLWljb24gYS1pY29uLXN0YXIgYS1zdGFyLTQtNSI+PC9pPiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9InNwX2hxcF9zaGFyZWRfcmF0aW5nIj44OTwvc3Bhbj4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPSJzcF9waXBlX2RpdmlkZXIiIGNsYXNzPSJhLWNvbG9yLXRlcnRpYXJ5IHNwX2hxcF9zaGFyZWRfZGl2aWRlciI+ICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9ImEtbGV0dGVyLXNwYWNlIj48L3NwYW4+PHNwYW4gY2xhc3M9ImEtbGV0dGVyLXNwYWNlIj48L3NwYW4+IHwgPHNwYW4gY2xhc3M9ImEtbGV0dGVyLXNwYWNlIj48L3NwYW4+PHNwYW4gY2xhc3M9ImEtbGV0dGVyLXNwYWNlIj48L3NwYW4+ICAgICAgICAgICAgICAgICAgICA8L3NwYW4+ICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPSJzcF9saW5lX2JyZWFrX2RpdmlkZXIiIGNsYXNzPSJhLXJvdyI+PC9kaXY+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0ic3BfaHFwX3NoYXJlZF9wcmljZSI+RVVSIDEwLDk5PC9zcGFuPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPSJhLWljb24gYS1pY29uLXByaW1lIGEtaWNvbi1zbWFsbCBzcF9ocXBfc2hhcmVkX3ByaW1lX2ljb24iIHJvbGU9ImltZyI+PC9pPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgIDxkaXYgaWQ9InNwX3Nob3Bfbm93IiBjbGFzcz0iYS1yb3cgc3BfaHFwX3NoYXJlZF90aGlyZFJvdyI+ICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSJzcF9ocXBfc2hhcmVkX3Nob3BOb3ciPkpldHp0IGVpbmthdWZlbiAmIzgyNTA7PC9zcGFuPiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgPC9kaXY+ICAgIDwvZGl2PjwvZGl2PjxzY3JpcHQgdHlwZT0idGV4dC9qYXZhc2NyaXB0Ij4oZnVuY3Rpb24oZikge2Yod2luZG93LlAuX25hbWVzcGFjZSgiRmlyZWJpcmRTcFJlbmRlcmluZyIpKTt9KGZ1bmN0aW9uKFApIHsgICAgUC53aGVuKCdBJywgJ2pRdWVyeScpLmV4ZWN1dGUoZnVuY3Rpb24oQSwgalF1ZXJ5KSB7ICAgICAgICAvKiAqICBqUXVlcnkgZG90ZG90ZG90IDEuNi43ICogKiAgQ29weXJpZ2h0IChjKSAyMDEzIEZyZWQgSGV1c3NjaGVuICogIHd3dy5mcmVic2l0ZS5ubCAqICogIFBsdWdpbiB3ZWJzaXRlOiAqICBkb3Rkb3Rkb3QuZnJlYnNpdGUubmwgKiAqICBEdWFsIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgYW5kIEdQTCBsaWNlbnNlcy4gKiAgaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9NSVRfTGljZW5zZSAqICBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0dOVV9HZW5lcmFsX1B1YmxpY19MaWNlbnNlICogKiAgVGhpcyBzb2Z0d2FyZSBpcyB1c2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS4gKi8oZnVuY3Rpb24oICQsIHVuZGVmICl7ICAgIGlmICggJC5mbi5kb3Rkb3Rkb3QgKSAgICB7ICAgICAgICByZXR1cm47ICAgIH0gICAgJC5mbi5kb3Rkb3Rkb3QgPSBmdW5jdGlvbiggbyApICAgIHsgICAgICAgIGlmICggdGhpcy5sZW5ndGggPT0gMCApICAgICAgICB7ICAgICAgICAgICAgaWYgKCAhbyB8fCBvLmRlYnVnICE9PSBmYWxzZSApICAgICAgICAgICAgeyAgICAgICAgICAgICAgICBkZWJ1ZyggdHJ1ZSwgJ05vIGVsZW1lbnQgZm91bmQgZm9yICInICsgdGhpcy5zZWxlY3RvciArICciLicgKTsgICAgICAgICAgICB9ICAgICAgICAgICAgcmV0dXJuIHRoaXM7ICAgICAgICB9ICAgICAgICBpZiAoIHRoaXMubGVuZ3RoID4gMSApICAgICAgICB7ICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaCggICAgICAgICAgICAgICAgZnVuY3Rpb24oKSAgICAgICAgICAgICAgICB7ICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmRvdGRvdGRvdCggbyApOyAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgKTsgICAgICAgIH0gICAgICAgIHZhciAkZG90ID0gdGhpczsgICAgICAgIGlmICggJGRvdC5kYXRhKCAnZG90ZG90ZG90JyApICkgICAgICAgIHsgICAgICAgICAgICAkZG90LnRyaWdnZXIoICdkZXN0cm95LmRvdCcgKTsgICAgICAgIH0gICAgICAgICRkb3QuZGF0YSggJ2RvdGRvdGRvdC1zdHlsZScsICRkb3QuYXR0ciggJ3N0eWxlJyApIHx8ICcnICk7ICAgICAgICAkZG90LmNzcyggJ3dvcmQtd3JhcCcsICdicmVhay13b3JkJyApOyAgICAgICAgaWYgKCRkb3QuY3NzKCAnd2hpdGUtc3BhY2UnICkgPT09ICdub3dyYXAnKSAgICAgICAgeyAgICAgICAgICAgICRkb3QuY3NzKCAnd2hpdGUtc3BhY2UnLCAnbm9ybWFsJyApOyAgICAgICAgfSAgICAgICAgJGRvdC5iaW5kX2V2ZW50cyA9IGZ1bmN0aW9uKCkgICAgICAgIHsgICAgICAgICAgICAkZG90LmJpbmQoICAgICAgICAgICAgICAgICd1cGRhdGUuZG90JywgICAgICAgICAgICAgICAgZnVuY3Rpb24oIGUsIGMgKSAgICAgICAgICAgICAgICB7ICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7ICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpOyAgICAgICAgICAgICAgICAgICAgb3B0cy5tYXhIZWlnaHQgPSAoIHR5cGVvZiBvcHRzLmhlaWdodCA9PSAnbnVtYmVyJyApICAgICAgICAgICAgICAgICAgICAgICAgPyBvcHRzLmhlaWdodCAgICAgICAgICAgICAgICAgICAgICAgIDogZ2V0VHJ1ZUlubmVySGVpZ2h0KCAkZG90ICk7ICAgICAgICAgICAgICAgICAgICBvcHRzLm1heEhlaWdodCArPSBvcHRzLnRvbGVyYW5jZTsgICAgICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIGMgIT0gJ3VuZGVmaW5lZCcgKSAgICAgICAgICAgICAgICAgICAgeyAgICAgICAgICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIGMgPT0gJ3N0cmluZycgfHwgYyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICkgICAgICAgICAgICAgICAgICAgICAgICB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMgPSAkKCc8ZGl2IC8+JykuYXBwZW5kKCBjICkuY29udGVudHMoKTsgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBjIGluc3RhbmNlb2YgJCApICAgICAgICAgICAgICAgICAgICAgICAgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmdDb250ZW50ID0gYzsgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAkaW5yID0gJGRvdC53cmFwSW5uZXIoICc8ZGl2IGNsYXNzPSJkb3Rkb3Rkb3QiIC8+JyApLmNoaWxkcmVuKCk7ICAgICAgICAgICAgICAgICAgICAkaW5yLmVtcHR5KCkgICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKCBvcmdDb250ZW50LmNsb25lKCB0cnVlICkgKSAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKCAnYnInICkucmVwbGFjZVdpdGgoICcgIDxiciAvPiAgJyApLmVuZCgpICAgICAgICAgICAgICAgICAgICAgICAgLmNzcyh7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICdoZWlnaHQnICAgIDogJ2F1dG8nLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAnd2lkdGgnICAgICA6ICdhdXRvJywgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JvcmRlcicgICAgOiAnbm9uZScsICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwYWRkaW5nJyAgIDogMCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21hcmdpbicgICAgOiAwICAgICAgICAgICAgICAgICAgICAgICAgfSk7ICAgICAgICAgICAgICAgICAgICB2YXIgYWZ0ZXIgPSBmYWxzZSwgICAgICAgICAgICAgICAgICAgICAgICB0cnVuYyA9IGZhbHNlOyAgICAgICAgICAgICAgICAgICAgaWYgKCBjb25mLmFmdGVyRWxlbWVudCApICAgICAgICAgICAgICAgICAgICB7ICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXIgPSBjb25mLmFmdGVyRWxlbWVudC5jbG9uZSggdHJ1ZSApOyAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyLnNob3coKTsgICAgICAgICAgICAgICAgICAgICAgICBjb25mLmFmdGVyRWxlbWVudC5yZW1vdmUoKTsgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgIGlmICggdGVzdCggJGluciwgb3B0cyApICkgICAgICAgICAgICAgICAgICAgIHsgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIG9wdHMud3JhcCA9PSAnY2hpbGRyZW4nICkgICAgICAgICAgICAgICAgICAgICAgICB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydW5jID0gY2hpbGRyZW4oICRpbnIsIG9wdHMsIGFmdGVyICk7ICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgICAgICAgICAgICAgICAgICAgICAgICB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydW5jID0gZWxsaXBzaXMoICRpbnIsICRkb3QsICRpbnIsIG9wdHMsIGFmdGVyICk7ICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgJGluci5yZXBsYWNlV2l0aCggJGluci5jb250ZW50cygpICk7ICAgICAgICAgICAgICAgICAgICAkaW5yID0gbnVsbDsgICAgICAgICAgICAgICAgICAgIGlmICggJC5pc0Z1bmN0aW9uKCBvcHRzLmNhbGxiYWNrICkgKSAgICAgICAgICAgICAgICAgICAgeyAgICAgICAgICAgICAgICAgICAgICAgIG9wdHMuY2FsbGJhY2suY2FsbCggJGRvdFsgMCBdLCB0cnVuYywgb3JnQ29udGVudCApOyAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgY29uZi5pc1RydW5jYXRlZCA9IHRydW5jOyAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydW5jOyAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgKS5iaW5kKCAgICAgICAgICAgICAgICAnaXNUcnVuY2F0ZWQuZG90JywgICAgICAgICAgICAgICAgZnVuY3Rpb24oIGUsIGZuICkgICAgICAgICAgICAgICAgeyAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTsgICAgICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIGZuID09ICdmdW5jdGlvbicgKSAgICAgICAgICAgICAgICAgICAgeyAgICAgICAgICAgICAgICAgICAgICAgIGZuLmNhbGwoICRkb3RbIDAgXSwgY29uZi5pc1RydW5jYXRlZCApOyAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbmYuaXNUcnVuY2F0ZWQ7ICAgICAgICAgICAgICAgIH0gICAgICAgICAgICApLmJpbmQoICAgICAgICAgICAgICAgICdvcmlnaW5hbENvbnRlbnQuZG90JywgICAgICAgICAgICAgICAgZnVuY3Rpb24oIGUsIGZuICkgICAgICAgICAgICAgICAgeyAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTsgICAgICAgICAgICAgICAgICAgIGlmICggdHlwZW9mIGZuID09ICdmdW5jdGlvbicgKSAgICAgICAgICAgICAgICAgICAgeyAgICAgICAgICAgICAgICAgICAgICAgIGZuLmNhbGwoICRkb3RbIDAgXSwgb3JnQ29udGVudCApOyAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9yZ0NvbnRlbnQ7ICAgICAgICAgICAgICAgIH0gICAgICAgICAgICApLmJpbmQoICAgICAgICAgICAgICAgICdkZXN0cm95LmRvdCcsICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCBlICkgICAgICAgICAgICAgICAgeyAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTsgICAgICAgICAgICAgICAgICAgICRkb3QudW53YXRjaCgpICAgICAgICAgICAgICAgICAgICAgICAgLnVuYmluZF9ldmVudHMoKSAgICAgICAgICAgICAgICAgICAgICAgIC5lbXB0eSgpICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCggb3JnQ29udGVudCApICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoICdzdHlsZScsICRkb3QuZGF0YSggJ2RvdGRvdGRvdC1zdHlsZScgKSB8fCAnJyApICAgICAgICAgICAgICAgICAgICAgICAgLmRhdGEoICdkb3Rkb3Rkb3QnLCBmYWxzZSApOyAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgKTsgICAgICAgICAgICByZXR1cm4gJGRvdDsgICAgICAgIH07ICAgICAgICAkZG90LnVuYmluZF9ldmVudHMgPSBmdW5jdGlvbigpICAgICAgICB7ICAgICAgICAgICAgJGRvdC51bmJpbmQoJy5kb3QnKTsgICAgICAgICAgICByZXR1cm4gJGRvdDsgICAgICAgIH07ICAgICAgICAkZG90LndhdGNoID0gZnVuY3Rpb24oKSAgICAgICAgeyAgICAgICAgICAgICRkb3QudW53YXRjaCgpOyAgICAgICAgICAgIGlmICggb3B0cy53YXRjaCA9PSAnd2luZG93JyApICAgICAgICAgICAgeyAgICAgICAgICAgICAgICB2YXIgJHdpbmRvdyA9ICQod2luZG93KSwgICAgICAgICAgICAgICAgICAgIF93V2lkdGggPSAkd2luZG93LndpZHRoKCksICAgICAgICAgICAgICAgICAgICBfd0hlaWdodCA9ICR3aW5kb3cuaGVpZ2h0KCk7ICAgICAgICAgICAgICAgICR3aW5kb3cuYmluZCggICAgICAgICAgICAgICAgICAgICdyZXNpemUuZG90JyArIGNvbmYuZG90SWQsICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigpICAgICAgICAgICAgICAgICAgICB7ICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCBfd1dpZHRoICE9ICR3aW5kb3cud2lkdGgoKSB8fCBfd0hlaWdodCAhPSAkd2luZG93LmhlaWdodCgpIHx8ICFvcHRzLndpbmRvd1Jlc2l6ZUZpeCApICAgICAgICAgICAgICAgICAgICAgICAgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICBfd1dpZHRoID0gJHdpbmRvdy53aWR0aCgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICBfd0hlaWdodCA9ICR3aW5kb3cuaGVpZ2h0KCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICggd2F0Y2hJbnQgKSAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKCB3YXRjaEludCApOyAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhdGNoSW50ID0gc2V0VGltZW91dCggICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZG90LnRyaWdnZXIoICd1cGRhdGUuZG90JyApOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTsgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICk7ICAgICAgICAgICAgfSAgICAgICAgICAgIGVsc2UgICAgICAgICAgICB7ICAgICAgICAgICAgICAgIHdhdGNoT3JnID0gZ2V0U2l6ZXMoICRkb3QgKTsgICAgICAgICAgICAgICAgd2F0Y2hJbnQgPSBzZXRJbnRlcnZhbCggICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkgICAgICAgICAgICAgICAgICAgIHsgICAgICAgICAgICAgICAgICAgICAgICB2YXIgd2F0Y2hOZXcgPSBnZXRTaXplcyggJGRvdCApOyAgICAgICAgICAgICAgICAgICAgICAgIGlmICggd2F0Y2hPcmcud2lkdGggICE9IHdhdGNoTmV3LndpZHRoIHx8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YXRjaE9yZy5oZWlnaHQgIT0gd2F0Y2hOZXcuaGVpZ2h0ICkgICAgICAgICAgICAgICAgICAgICAgICB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICRkb3QudHJpZ2dlciggJ3VwZGF0ZS5kb3QnICk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhdGNoT3JnID0gZ2V0U2l6ZXMoICRkb3QgKTsgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICB9LCAxMDAgICAgICAgICAgICAgICAgKTsgICAgICAgICAgICB9ICAgICAgICAgICAgcmV0dXJuICRkb3Q7ICAgICAgICB9OyAgICAgICAgJGRvdC51bndhdGNoID0gZnVuY3Rpb24oKSAgICAgICAgeyAgICAgICAgICAgICQod2luZG93KS51bmJpbmQoICdyZXNpemUuZG90JyArIGNvbmYuZG90SWQgKTsgICAgICAgICAgICBpZiAoIHdhdGNoSW50ICkgICAgICAgICAgICB7ICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoIHdhdGNoSW50ICk7ICAgICAgICAgICAgfSAgICAgICAgICAgIHJldHVybiAkZG90OyAgICAgICAgfTsgICAgICAgIHZhciBvcmdDb250ZW50ICA9ICRkb3QuY29udGVudHMoKSwgICAgICAgICAgICBvcHRzICAgICAgICA9ICQuZXh0ZW5kKCB0cnVlLCB7fSwgJC5mbi5kb3Rkb3Rkb3QuZGVmYXVsdHMsIG8gKSwgICAgICAgICAgICBjb25mICAgICAgICA9IHt9LCAgICAgICAgICAgIHdhdGNoT3JnICAgID0ge30sICAgICAgICAgICAgd2F0Y2hJbnQgICAgPSBudWxsLCAgICAgICAgICAgICRpbnIgICAgICAgID0gbnVsbDsgICAgICAgIGlmICggISggb3B0cy5sYXN0Q2hhcmFjdGVyLnJlbW92ZSBpbnN0YW5jZW9mIEFycmF5ICkgKSAgICAgICAgeyAgICAgICAgICAgIG9wdHMubGFzdENoYXJhY3Rlci5yZW1vdmUgPSAkLmZuLmRvdGRvdGRvdC5kZWZhdWx0QXJyYXlzLmxhc3RDaGFyYWN0ZXIucmVtb3ZlOyAgICAgICAgfSAgICAgICAgaWYgKCAhKCBvcHRzLmxhc3RDaGFyYWN0ZXIubm9FbGxpcHNpcyBpbnN0YW5jZW9mIEFycmF5ICkgKSAgICAgICAgeyAgICAgICAgICAgIG9wdHMubGFzdENoYXJhY3Rlci5ub0VsbGlwc2lzID0gJC5mbi5kb3Rkb3Rkb3QuZGVmYXVsdEFycmF5cy5sYXN0Q2hhcmFjdGVyLm5vRWxsaXBzaXM7ICAgICAgICB9ICAgICAgICBjb25mLmFmdGVyRWxlbWVudCAgID0gZ2V0RWxlbWVudCggb3B0cy5hZnRlciwgJGRvdCApOyAgICAgICAgY29uZi5pc1RydW5jYXRlZCAgICA9IGZhbHNlOyAgICAgICAgY29uZi5kb3RJZCAgICAgICAgICA9IGRvdElkKys7ICAgICAgICAkZG90LmRhdGEoICdkb3Rkb3Rkb3QnLCB0cnVlICkgICAgICAgICAgICAuYmluZF9ldmVudHMoKSAgICAgICAgICAgIC50cmlnZ2VyKCAndXBkYXRlLmRvdCcgKTsgICAgICAgIGlmICggb3B0cy53YXRjaCApICAgICAgICB7ICAgICAgICAgICAgJGRvdC53YXRjaCgpOyAgICAgICAgfSAgICAgICAgcmV0dXJuICRkb3Q7ICAgIH07ICAgICQuZm4uZG90ZG90ZG90LmRlZmF1bHRzID0geyAgICAgICAgJ2VsbGlwc2lzJyAgICAgICAgICA6ICcuLi4gJywgICAgICAgICd3cmFwJyAgICAgICAgICAgICAgOiAnd29yZCcsICAgICAgICAnZmFsbGJhY2tUb0xldHRlcicgIDogdHJ1ZSwgICAgICAgICdsYXN0Q2hhcmFjdGVyJyAgICAgOiB7fSwgICAgICAgICd0b2xlcmFuY2UnICAgICAgICAgOiAwLCAgICAgICAgJ2NhbGxiYWNrJyAgICAgICAgICA6IG51bGwsICAgICAgICAnYWZ0ZXInICAgICAgICAgICAgIDogbnVsbCwgICAgICAgICdoZWlnaHQnICAgICAgICAgICAgOiBudWxsLCAgICAgICAgJ3dhdGNoJyAgICAgICAgICAgICA6IGZhbHNlLCAgICAgICAgJ3dpbmRvd1Jlc2l6ZUZpeCcgICA6IHRydWUsICAgICAgICAnZGVidWcnICAgICAgICAgICAgIDogZmFsc2UgICAgfTsgICAgJC5mbi5kb3Rkb3Rkb3QuZGVmYXVsdEFycmF5cyA9IHsgICAgICAgICdsYXN0Q2hhcmFjdGVyJyAgICAgOiB7ICAgICAgICAgICAgJ3JlbW92ZScgICAgICAgICAgICA6IFsgJyAnLCAnXHUzMDAwJywgJywnLCAnOycsICcuJywgJyEnLCAnPycgXSwgICAgICAgICAgICAnbm9FbGxpcHNpcycgICAgICAgIDogW10gICAgICAgIH0gICAgfTsgICAgdmFyIGRvdElkID0gMTsgICAgZnVuY3Rpb24gY2hpbGRyZW4oICRlbGVtLCBvLCBhZnRlciApICAgIHsgICAgICAgIHZhciAkZWxlbWVudHMgICA9ICRlbGVtLmNoaWxkcmVuKCksICAgICAgICAgICAgaXNUcnVuY2F0ZWQgPSBmYWxzZTsgICAgICAgICRlbGVtLmVtcHR5KCk7ICAgICAgICBmb3IgKCB2YXIgYSA9IDAsIGwgPSAkZWxlbWVudHMubGVuZ3RoOyBhIDwgbDsgYSsrICkgICAgICAgIHsgICAgICAgICAgICB2YXIgJGUgPSAkZWxlbWVudHMuZXEoIGEgKTsgICAgICAgICAgICAkZWxlbS5hcHBlbmQoICRlICk7ICAgICAgICAgICAgaWYgKCBhZnRlciApICAgICAgICAgICAgeyAgICAgICAgICAgICAgICAkZWxlbS5hcHBlbmQoIGFmdGVyICk7ICAgICAgICAgICAgfSAgICAgICAgICAgIGlmICggdGVzdCggJGVsZW0sIG8gKSApICAgICAgICAgICAgeyAgICAgICAgICAgICAgICAkZS5yZW1vdmUoKTsgICAgICAgICAgICAgICAgaXNUcnVuY2F0ZWQgPSB0cnVlOyAgICAgICAgICAgICAgICBicmVhazsgICAgICAgICAgICB9ICAgICAgICAgICAgZWxzZSAgICAgICAgICAgIHsgICAgICAgICAgICAgICAgaWYgKCBhZnRlciApICAgICAgICAgICAgICAgIHsgICAgICAgICAgICAgICAgICAgIGFmdGVyLmRldGFjaCgpOyAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgfSAgICAgICAgfSAgICAgICAgcmV0dXJuIGlzVHJ1bmNhdGVkOyAgICB9ICAgIGZ1bmN0aW9uIGVsbGlwc2lzKCAkZWxlbSwgJGQsICRpLCBvLCBhZnRlciApICAgIHsgICAgICAgIHZhciAkZWxlbWVudHMgICA9ICRlbGVtLmNvbnRlbnRzKCksICAgICAgICAgICAgaXNUcnVuY2F0ZWQgPSBmYWxzZTsgICAgICAgICRlbGVtLmVtcHR5KCk7ICAgICAgICB2YXIgbm90eCA9ICd0YWJsZSwgdGhlYWQsIHRib2R5LCB0Zm9vdCwgdHIsIGNvbCwgY29sZ3JvdXAsIG9iamVjdCwgZW1iZWQsIHBhcmFtLCBvbCwgdWwsIGRsLCBibG9ja3F1b3RlLCBzZWxlY3QsIG9wdGdyb3VwLCBvcHRpb24sIHRleHRhcmVhLCBzY3JpcHQsIHN0eWxlJzsgICAgICAgIGZvciAoIHZhciBhID0gMCwgbCA9ICRlbGVtZW50cy5sZW5ndGg7IGEgPCBsOyBhKysgKSAgICAgICAgeyAgICAgICAgICAgIGlmICggaXNUcnVuY2F0ZWQgKSAgICAgICAgICAgIHsgICAgICAgICAgICAgICAgYnJlYWs7ICAgICAgICAgICAgfSAgICAgICAgICAgIHZhciBlICAgPSAkZWxlbWVudHNbIGEgXSwgICAgICAgICAgICAgICAgJGUgID0gJChlKTsgICAgICAgICAgICBpZiAoIHR5cGVvZiBlID09ICd1bmRlZmluZWQnIHx8ICggZS5ub2RlVHlwZSA9PSAzICYmICQudHJpbSggZS5kYXRhICkubGVuZ3RoID09IDAgKSApICAgICAgICAgICAgeyAgICAgICAgICAgICAgICBjb250aW51ZTsgICAgICAgICAgICB9ICAgICAgICAgICAgJGVsZW0uYXBwZW5kKCAkZSApOyAgICAgICAgICAgIGlmICggYWZ0ZXIgKSAgICAgICAgICAgIHsgICAgICAgICAgICAgICAgJGVsZW1bICRlbGVtLmlzKCBub3R4ICkgPyAnYWZ0ZXInIDogJ2FwcGVuZCcgXSggYWZ0ZXIgKTsgICAgICAgICAgICB9ICAgICAgICAgICAgaWYgKCB0ZXN0KCAkaSwgbyApICkgICAgICAgICAgICB7ICAgICAgICAgICAgICAgIGlmICggZS5ub2RlVHlwZSA9PSAzICkgICAgICAgICAgICAgICAgeyAgICAgICAgICAgICAgICAgICAgaXNUcnVuY2F0ZWQgPSBlbGxpcHNpc0VsZW1lbnQoICRlLCAkZCwgJGksIG8sIGFmdGVyICk7ICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgZWxzZSAgICAgICAgICAgICAgICB7ICAgICAgICAgICAgICAgICAgICBpc1RydW5jYXRlZCA9IGVsbGlwc2lzKCAkZSwgJGQsICRpLCBvLCBhZnRlciApOyAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIGlmICggIWlzVHJ1bmNhdGVkICkgICAgICAgICAgICAgICAgeyAgICAgICAgICAgICAgICAgICAgJGUucmVtb3ZlKCk7ICAgICAgICAgICAgICAgICAgICBpc1RydW5jYXRlZCA9IHRydWU7ICAgICAgICAgICAgICAgIH0gICAgICAgICAgICB9ICAgICAgICAgICAgaWYgKCAhaXNUcnVuY2F0ZWQgKSAgICAgICAgICAgIHsgICAgICAgICAgICAgICAgaWYgKCBhZnRlciApICAgICAgICAgICAgICAgIHsgICAgICAgICAgICAgICAgICAgIGFmdGVyLmRldGFjaCgpOyAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgfSAgICAgICAgfSAgICAgICAgcmV0dXJuIGlzVHJ1bmNhdGVkOyAgICB9ICAgIGZ1bmN0aW9uIGVsbGlwc2lzRWxlbWVudCggJGUsICRkLCAkaSwgbywgYWZ0ZXIgKSAgICB7ICAgICAgICB2YXIgZSA9ICRlWyAwIF07ICAgICAgICBpZiAoICFlICkgICAgICAgIHsgICAgICAgICAgICByZXR1cm4gZmFsc2U7ICAgICAgICB9ICAgICAgICB2YXIgdHh0ICAgICAgICAgPSBnZXRUZXh0Q29udGVudCggZSApLCAgICAgICAgICAgIHNwYWNlICAgICAgID0gKCB0eHQuaW5kZXhPZignICcpICE9PSAtMSApID8gJyAnIDogJ1x1MzAwMCcsICAgICAgICAgICAgc2VwYXJhdG9yICAgPSAoIG8ud3JhcCA9PSAnbGV0dGVyJyApID8gJycgOiBzcGFjZSwgICAgICAgICAgICB0ZXh0QXJyICAgICA9IHR4dC5zcGxpdCggc2VwYXJhdG9yICksICAgICAgICAgICAgcG9zaXRpb24gICAgPSAtMSwgICAgICAgICAgICBtaWRQb3MgICAgICA9IC0xLCAgICAgICAgICAgIHN0YXJ0UG9zICAgID0gMCwgICAgICAgICAgICBlbmRQb3MgICAgICA9IHRleHRBcnIubGVuZ3RoIC0gMTsgICAgICAgIGlmICggby5mYWxsYmFja1RvTGV0dGVyICYmIGVuZFBvcyA9PSAwICYmIGVuZFBvcyA9PSBzdGFydFBvcyApICAgICAgICB7ICAgICAgICAgICAgc2VwYXJhdG9yICAgPSAnJzsgICAgICAgICAgICB0ZXh0QXJyICAgICA9IHR4dC5zcGxpdCggc2VwYXJhdG9yICk7ICAgICAgICAgICAgZW5kUG9zICAgICAgPSB0ZXh0QXJyLmxlbmd0aCAtIDE7ICAgICAgICB9ICAgICAgICB3aGlsZSAoIHN0YXJ0UG9zIDw9IGVuZFBvcyAmJiAhKCBzdGFydFBvcyA9PSAwICYmIGVuZFBvcyA9PSAwICkgKSAgICAgICAgeyAgICAgICAgICAgIHZhciBtID0gTWF0aC5mbG9vciggKCBzdGFydFBvcyArIGVuZFBvcyApIC8gMiApOyAgICAgICAgICAgIGlmICggbSA9PSBtaWRQb3MgKSAgICAgICAgICAgIHsgICAgICAgICAgICAgICAgYnJlYWs7ICAgICAgICAgICAgfSAgICAgICAgICAgIG1pZFBvcyA9IG07ICAgICAgICAgICAgc2V0VGV4dENvbnRlbnQoIGUsIHRleHRBcnIuc2xpY2UoIDAsIG1pZFBvcyArIDEgKS5qb2luKCBzZXBhcmF0b3IgKSArIG8uZWxsaXBzaXMgKTsgICAgICAgICAgICBpZiAoICF0ZXN0KCAkaSwgbyApICkgICAgICAgICAgICB7ICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gbWlkUG9zOyAgICAgICAgICAgICAgICBzdGFydFBvcyA9IG1pZFBvczsgICAgICAgICAgICB9ICAgICAgICAgICAgZWxzZSAgICAgICAgICAgIHsgICAgICAgICAgICAgICAgZW5kUG9zID0gbWlkUG9zOyAgICAgICAgICAgIH0gICAgICAgIH0gICAgICAgIGlmICggcG9zaXRpb24gIT0gLTEgJiYgISggdGV4dEFyci5sZW5ndGggPT0gMSAmJiB0ZXh0QXJyWyAwIF0ubGVuZ3RoID09IDAgKSApICAgICAgICB7ICAgICAgICAgICAgdHh0ID0gYWRkRWxsaXBzaXMoIHRleHRBcnIuc2xpY2UoIDAsIHBvc2l0aW9uICsgMSApLmpvaW4oIHNlcGFyYXRvciApLCBvICk7ICAgICAgICAgICAgc2V0VGV4dENvbnRlbnQoIGUsIHR4dCApOyAgICAgICAgfSAgICAgICAgZWxzZSAgICAgICAgeyAgICAgICAgICAgIHZhciAkdyA9ICRlLnBhcmVudCgpOyAgICAgICAgICAgICRlLnJlbW92ZSgpOyAgICAgICAgICAgIHZhciBhZnRlckxlbmd0aCA9ICggYWZ0ZXIgJiYgYWZ0ZXIuY2xvc2VzdCgkdykubGVuZ3RoICkgPyBhZnRlci5sZW5ndGggOiAwOyAgICAgICAgICAgIGlmICggJHcuY29udGVudHMoKS5sZW5ndGggPiBhZnRlckxlbmd0aCApICAgICAgICAgICAgeyAgICAgICAgICAgICAgICBlID0gZmluZExhc3RUZXh0Tm9kZSggJHcuY29udGVudHMoKS5lcSggLTEgLSBhZnRlckxlbmd0aCApLCAkZCApOyAgICAgICAgICAgIH0gICAgICAgICAgICBlbHNlICAgICAgICAgICAgeyAgICAgICAgICAgICAgICBlID0gZmluZExhc3RUZXh0Tm9kZSggJHcsICRkLCB0cnVlICk7ICAgICAgICAgICAgICAgIGlmICggIWFmdGVyTGVuZ3RoICkgICAgICAgICAgICAgICAgeyAgICAgICAgICAgICAgICAgICAgJHcucmVtb3ZlKCk7ICAgICAgICAgICAgICAgIH0gICAgICAgICAgICB9ICAgICAgICAgICAgaWYgKCBlICkgICAgICAgICAgICB7ICAgICAgICAgICAgICAgIHR4dCA9IGFkZEVsbGlwc2lzKCBnZXRUZXh0Q29udGVudCggZSApLCBvICk7ICAgICAgICAgICAgICAgIHNldFRleHRDb250ZW50KCBlLCB0eHQgKTsgICAgICAgICAgICAgICAgaWYgKCBhZnRlckxlbmd0aCAmJiBhZnRlciApICAgICAgICAgICAgICAgIHsgICAgICAgICAgICAgICAgICAgICQoZSkucGFyZW50KCkuYXBwZW5kKCBhZnRlciApOyAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgfSAgICAgICAgfSAgICAgICAgcmV0dXJuIHRydWU7ICAgIH0gICAgZnVuY3Rpb24gdGVzdCggJGksIG8gKSAgICB7ICAgICAgICByZXR1cm4gJGkuaW5uZXJIZWlnaHQoKSA+IG8ubWF4SGVpZ2h0OyAgICB9ICAgIGZ1bmN0aW9uIGFkZEVsbGlwc2lzKCB0eHQsIG8gKSAgICB7ICAgICAgICB3aGlsZSggJC5pbkFycmF5KCB0eHQuc2xpY2UoIC0xICksIG8ubGFzdENoYXJhY3Rlci5yZW1vdmUgKSA+IC0xICkgICAgICAgIHsgICAgICAgICAgICB0eHQgPSB0eHQuc2xpY2UoIDAsIC0xICk7ICAgICAgICB9ICAgICAgICBpZiAoICQuaW5BcnJheSggdHh0LnNsaWNlKCAtMSApLCBvLmxhc3RDaGFyYWN0ZXIubm9FbGxpcHNpcyApIDwgMCApICAgICAgICB7ICAgICAgICAgICAgdHh0ICs9IG8uZWxsaXBzaXM7ICAgICAgICB9ICAgICAgICByZXR1cm4gdHh0OyAgICB9ICAgIGZ1bmN0aW9uIGdldFNpemVzKCAkZCApICAgIHsgICAgICAgIHJldHVybiB7ICAgICAgICAgICAgJ3dpZHRoJyA6ICRkLmlubmVyV2lkdGgoKSwgICAgICAgICAgICAnaGVpZ2h0JzogJGQuaW5uZXJIZWlnaHQoKSAgICAgICAgfTsgICAgfSAgICBmdW5jdGlvbiBzZXRUZXh0Q29udGVudCggZSwgY29udGVudCApICAgIHsgICAgICAgIGlmICggZS5pbm5lclRleHQgKSAgICAgICAgeyAgICAgICAgICAgIGUuaW5uZXJUZXh0ID0gY29udGVudDsgICAgICAgIH0gICAgICAgIGVsc2UgaWYgKCBlLm5vZGVWYWx1ZSApICAgICAgICB7ICAgICAgICAgICAgZS5ub2RlVmFsdWUgPSBjb250ZW50OyAgICAgICAgfSAgICAgICAgZWxzZSBpZiAoZS50ZXh0Q29udGVudCkgICAgICAgIHsgICAgICAgICAgICBlLnRleHRDb250ZW50ID0gY29udGVudDsgICAgICAgIH0gICAgfSAgICBmdW5jdGlvbiBnZXRUZXh0Q29udGVudCggZSApICAgIHsgICAgICAgIGlmICggZS5pbm5lclRleHQgKSAgICAgICAgeyAgICAgICAgICAgIHJldHVybiBlLmlubmVyVGV4dDsgICAgICAgIH0gICAgICAgIGVsc2UgaWYgKCBlLm5vZGVWYWx1ZSApICAgICAgICB7ICAgICAgICAgICAgcmV0dXJuIGUubm9kZVZhbHVlOyAgICAgICAgfSAgICAgICAgZWxzZSBpZiAoIGUudGV4dENvbnRlbnQgKSAgICAgICAgeyAgICAgICAgICAgIHJldHVybiBlLnRleHRDb250ZW50OyAgICAgICAgfSAgICAgICAgZWxzZSAgICAgICAgeyAgICAgICAgICAgIHJldHVybiAiIjsgICAgICAgIH0gICAgfSAgICBmdW5jdGlvbiBnZXRQcmV2Tm9kZSggbiApICAgIHsgICAgICAgIGRvICAgICAgICB7ICAgICAgICAgICAgbiA9IG4ucHJldmlvdXNTaWJsaW5nOyAgICAgICAgfSAgICAgICAgd2hpbGUgKCBuICYmIG4ubm9kZVR5cGUgIT09IDEgJiYgbi5ub2RlVHlwZSAhPT0gMyApOyAgICAgICAgcmV0dXJuIG47ICAgIH0gICAgZnVuY3Rpb24gZmluZExhc3RUZXh0Tm9kZSggJGVsLCAkdG9wLCBleGNsdWRlQ3VycmVudCApICAgIHsgICAgICAgIHZhciBlID0gJGVsICYmICRlbFsgMCBdLCBwOyAgICAgICAgaWYgKCBlICkgICAgICAgIHsgICAgICAgICAgICBpZiAoICFleGNsdWRlQ3VycmVudCApICAgICAgICAgICAgeyAgICAgICAgICAgICAgICBpZiAoIGUubm9kZVR5cGUgPT09IDMgKSAgICAgICAgICAgICAgICB7ICAgICAgICAgICAgICAgICAgICByZXR1cm4gZTsgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBpZiAoICQudHJpbSggJGVsLnRleHQoKSApICkgICAgICAgICAgICAgICAgeyAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpbmRMYXN0VGV4dE5vZGUoICRlbC5jb250ZW50cygpLmxhc3QoKSwgJHRvcCApOyAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgfSAgICAgICAgICAgIHAgPSBnZXRQcmV2Tm9kZSggZSApOyAgICAgICAgICAgIHdoaWxlICggIXAgKSAgICAgICAgICAgIHsgICAgICAgICAgICAgICAgJGVsID0gJGVsLnBhcmVudCgpOyAgICAgICAgICAgICAgICBpZiAoICRlbC5pcyggJHRvcCApIHx8ICEkZWwubGVuZ3RoICkgICAgICAgICAgICAgICAgeyAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIHAgPSBnZXRQcmV2Tm9kZSggJGVsWzBdICk7ICAgICAgICAgICAgfSAgICAgICAgICAgIGlmICggcCApICAgICAgICAgICAgeyAgICAgICAgICAgICAgICByZXR1cm4gZmluZExhc3RUZXh0Tm9kZSggJChwKSwgJHRvcCApOyAgICAgICAgICAgIH0gICAgICAgIH0gICAgICAgIHJldHVybiBmYWxzZTsgICAgfSAgICBmdW5jdGlvbiBnZXRFbGVtZW50KCBlLCAkaSApICAgIHsgICAgICAgIGlmICggIWUgKSAgICAgICAgeyAgICAgICAgICAgIHJldHVybiBmYWxzZTsgICAgICAgIH0gICAgICAgIGlmICggdHlwZW9mIGUgPT09ICdzdHJpbmcnICkgICAgICAgIHsgICAgICAgICAgICBlID0gJChlLCAkaSk7ICAgICAgICAgICAgcmV0dXJuICggZS5sZW5ndGggKSAgICAgICAgICAgICAgICA/IGUgICAgICAgICAgICAgICAgOiBmYWxzZTsgICAgICAgIH0gICAgICAgIHJldHVybiAhZS5qcXVlcnkgICAgICAgICAgICA/IGZhbHNlICAgICAgICAgICAgOiBlOyAgICB9ICAgIGZ1bmN0aW9uIGdldFRydWVJbm5lckhlaWdodCggJGVsICkgICAgeyAgICAgICAgdmFyIGggPSAkZWwuaW5uZXJIZWlnaHQoKSwgICAgICAgICAgICBhID0gWyAncGFkZGluZ1RvcCcsICdwYWRkaW5nQm90dG9tJyBdOyAgICAgICAgZm9yICggdmFyIHogPSAwLCBsID0gYS5sZW5ndGg7IHogPCBsOyB6KysgKSAgICAgICAgeyAgICAgICAgICAgIHZhciBtID0gcGFyc2VJbnQoICRlbC5jc3MoIGFbIHogXSApLCAxMCApOyAgICAgICAgICAgIGlmICggaXNOYU4oIG0gKSApICAgICAgICAgICAgeyAgICAgICAgICAgICAgICBtID0gMDsgICAgICAgICAgICB9ICAgICAgICAgICAgaCAtPSBtOyAgICAgICAgfSAgICAgICAgcmV0dXJuIGg7ICAgIH0gICAgZnVuY3Rpb24gZGVidWcoIGQsIG0gKSAgICB7ICAgICAgICBpZiAoICFkICkgICAgICAgIHsgICAgICAgICAgICByZXR1cm4gZmFsc2U7ICAgICAgICB9ICAgICAgICBpZiAoIHR5cGVvZiBtID09ICdzdHJpbmcnICkgICAgICAgIHsgICAgICAgICAgICBtID0gJ2RvdGRvdGRvdDogJyArIG07ICAgICAgICB9ICAgICAgICBlbHNlICAgICAgICB7ICAgICAgICAgICAgbSA9IFsgJ2RvdGRvdGRvdDonLCBtIF07ICAgICAgICB9ICAgICAgICBpZiAoIHR5cGVvZiB3aW5kb3cuY29uc29sZSAhPSAndW5kZWZpbmVkJyApICAgICAgICB7ICAgICAgICAgICAgaWYgKCB0eXBlb2Ygd2luZG93LmNvbnNvbGUubG9nICE9ICd1bmRlZmluZWQnICkgICAgICAgICAgICB7ICAgICAgICAgICAgICAgIHdpbmRvdy5jb25zb2xlLmxvZyggbSApOyAgICAgICAgICAgIH0gICAgICAgIH0gICAgICAgIHJldHVybiBmYWxzZTsgICAgfSAgICB2YXIgX29yZ0h0bWwgPSAkLmZuLmh0bWw7ICAgICQuZm4uaHRtbCA9IGZ1bmN0aW9uKCBzdHIgKSAgICB7ICAgICAgICBpZiAoIHN0ciAhPSB1bmRlZiAmJiAhJC5pc0Z1bmN0aW9uKCBzdHIgKSAmJiB0aGlzLmRhdGEoICdkb3Rkb3Rkb3QnICkgKSAgICAgICAgeyAgICAgICAgICAgIHJldHVybiB0aGlzLnRyaWdnZXIoICd1cGRhdGUnLCBbIHN0ciBdICk7ICAgICAgICB9ICAgICAgICByZXR1cm4gX29yZ0h0bWwuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApOyAgICB9OyAgICB2YXIgX29yZ1RleHQgPSAkLmZuLnRleHQ7ICAgICQuZm4udGV4dCA9IGZ1bmN0aW9uKCBzdHIgKSAgICB7ICAgICAgICBpZiAoIHN0ciAhPSB1bmRlZiAmJiAhJC5pc0Z1bmN0aW9uKCBzdHIgKSAmJiB0aGlzLmRhdGEoICdkb3Rkb3Rkb3QnICkgKSAgICAgICAgeyAgICAgICAgICAgIHN0ciA9ICQoICc8ZGl2IC8+JyApLnRleHQoIHN0ciApLmh0bWwoKTsgICAgICAgICAgICByZXR1cm4gdGhpcy50cmlnZ2VyKCAndXBkYXRlJywgWyBzdHIgXSApOyAgICAgICAgfSAgICAgICAgcmV0dXJuIF9vcmdUZXh0LmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTsgICAgfTt9KSggalF1ZXJ5ICk7KGZ1bmN0aW9uKCQpIHsgICAgaWYoICQuZm4uZG90ZG90ZG90X2Ftem4gKSByZXR1cm47ICAgICQuZm4uZG90ZG90ZG90X2Ftem4gPSBmdW5jdGlvbigpIHsgICAgICAgIGlmKCB0aGlzLmxlbmd0aCA+IDEgKSB7ICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7ICAgICAgICAgICAgICAgICQodGhpcykuZG90ZG90ZG90X2Ftem4oKTsgICAgICAgICAgICB9KTsgICAgICAgIH0gZWxzZSBpZiAodGhpcy5sZW5ndGggPT0gMCApIHsgICAgICAgICAgICByZXR1cm47ICAgICAgICB9ICAgICAgICB2YXIgZWwgPSB0aGlzOyAgICAgICAgaWYoZWwuaGFzQ2xhc3MoJ3RydW5jYXRlZCcpKSByZXR1cm47ICAgICAgICB2YXIgb3JpZ2luYWxDb250ZW50ID0gZWwuY2xvbmUodHJ1ZSk7ICAgICAgICBlbC5kb3Rkb3Rkb3QoeyAgICAgICAgICAgIGhlaWdodDogcGFyc2VJbnQoZWwuZGF0YSgnc2hvcnRlbicpKSwgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oIGlzVHJ1bmNhdGVkLCBvcmdDb250ZW50ICkgeyAgICAgICAgICAgICAgICBpZighaXNUcnVuY2F0ZWQpIHJldHVybjsgICAgICAgICAgICAgICAgZWwuYWRkQ2xhc3MoJ3RydW5jYXRlZCcpOyAgICAgICAgICAgICAgICBpZighZWwuZGF0YSgndHJhbnNpdGlvbnNlbGVjdG9yJykgICAgICAgICAgICAgICAgICAgICYmICFlbFswXS5oYXNBdHRyaWJ1dGUoJ2RhdGEtc2hvcnRlbi1rZWVwLW9yaWdpbmFsJykpIHJldHVybjsgICAgICAgICAgICAgICAgb3JpZ2luYWxDb250ZW50LmFkZENsYXNzKCdvcmlnaW5hbCcpOyAgICAgICAgICAgICAgICBvcmlnaW5hbENvbnRlbnQuYWRkQ2xhc3MoJ2NvbGxhcHNlZCcpOyAgICAgICAgICAgICAgICBkZWxldGUgb3JpZ2luYWxDb250ZW50WzBdLmRhdGFzZXQuc2hvcnRlbjsgICAgICAgICAgICAgICAgaWYob3JpZ2luYWxDb250ZW50LmlkKSB7ICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbENvbnRlbnQuaWQgKz0gIi1vcmlnaW5hbCI7ICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgZWwucGFyZW50KCkuYXBwZW5kKG9yaWdpbmFsQ29udGVudCk7ICAgICAgICAgICAgfSwgICAgICAgICAgICB3YXRjaDp0cnVlLCAgICAgICAgICAgIGRlYnVnOmZhbHNlICAgICAgICB9KTsgICAgfX0pKCBqUXVlcnkgKTtqUXVlcnkod2luZG93KS5sb2FkKGZ1bmN0aW9uKCkgeyAgICBqUXVlcnkoIltkYXRhLXNob3J0ZW5dIikuZG90ZG90ZG90X2Ftem4oKTt9KTsgICAgICAgIHVwZGF0ZVVJKCk7ICAgICAgICBBLm9uLnJlc2l6ZShmdW5jdGlvbigpeyAgICAgICAgICAgIHVwZGF0ZVVJKCk7ICAgICAgICB9KTsgICAgICAgIEEub24ub3JpZW50YXRpb25jaGFuZ2UoZnVuY3Rpb24oKXsgICAgICAgICAgICB1cGRhdGVVSSgpOyAgICAgICAgfSk7ICAgICAgICBmdW5jdGlvbiB1cGRhdGVVSSgpIHsgICAgICAgICAgICBpZiAoQS4kKCIjc3BfaHFwX3NoYXJlZCIpLndpZHRoKCkgPCA1MDApIHsgICAgICAgICAgICAgICAgQS4kKCIjc3Bfc2hvcF9ub3ciKS5oaWRlKCk7ICAgICAgICAgICAgICAgIEEuJCgiI3NwX3BpcGVfZGl2aWRlciIpLmhpZGUoKTsgICAgICAgICAgICAgICAgQS4kKCIjc3BfbGluZV9icmVha19kaXZpZGVyIikuc2hvdygpOyAgICAgICAgICAgICAgICBBLiQoIiNzcF9ocXBfc2hhcmVkX2Rpc3BsYXlfdGl0bGUiKS5kb3Rkb3Rkb3QoeyAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1NywgICAgICAgICAgICAgICAgICAgIHdhdGNoOiAid2luZG93IiAgICAgICAgICAgICAgICB9KTsgICAgICAgICAgICB9IGVsc2UgeyAgICAgICAgICAgICAgICBBLiQoIiNzcF9zaG9wX25vdyIpLnNob3coKTsgICAgICAgICAgICAgICAgQS4kKCIjc3BfcGlwZV9kaXZpZGVyIikuc2hvdygpOyAgICAgICAgICAgICAgICBBLiQoIiNzcF9saW5lX2JyZWFrX2RpdmlkZXIiKS5oaWRlKCk7ICAgICAgICAgICAgICAgIEEuJCgiI3NwX2hxcF9zaGFyZWRfZGlzcGxheV90aXRsZSIpLmRvdGRvdGRvdCh7ICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM4LCAgICAgICAgICAgICAgICAgICAgd2F0Y2g6ICJ3aW5kb3ciICAgICAgICAgICAgICAgIH0pOyAgICAgICAgICAgIH0gICAgICAgIH0gICAgICAgIEEuJCgiLnNwX2hxcF9zaGFyZWRfcmVzcG9uc2l2ZV9ib3giKS5jc3MoIm1hcmdpbi1sZWZ0IiwgIjBweCIpOyAgICB9KTt9KSk7PC9zY3JpcHQ+ICAgICAgICA8c2NyaXB0IHR5cGU9InRleHQvamF2YXNjcmlwdCI+aWYgKCh0eXBlb2YgU0ZDbGllbnQgIT0gInVuZGVmaW5lZCIpICYmIFNGQ2xpZW50LnNlbmRBZEluZm8pIHsgICAgdmFyIGZlZWRiYWNrSnNvbiA9IFsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAiYXNpbiIgOiAiQjA3MjdYM05YQyIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJ0aXRsZSIgOiAiWFkgTGlmZSBLbGVpZGVyaGFrZW4gS2xhcHBiYXIgQXVzc2VuYmVyZWljaCBLbGFwcGhha2VuIGtsZWlkZXJ3YW5kaGFrZW4gV8Okc2NoZWzDvGZ0ZXIgV2FuZCBoYWtlbiBLbGVpZGVyc3TDpG5kZXIgV2FuZGhha2VuIEtsZWlkZXJsw7xmdGVyIEdhcmRlcm9iZW5oYWtlbiBmw7xyIEVja2VuLCBCYWxrb24sIFfDpHNjaGV0cm9ja25lciwgQsOkZGVyLCBTaWxiZXIiLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgInByaWNlIiA6ICJFVVIgMTAsOTkiLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibWVyY2hhbnROYW1lIiA6ICJUb3AgTGVpc3R1bmciLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAibWVyY2hhbnRDdXN0b21lcklEIiA6ICJBM0ZaNkNXNjVWUjUzRSIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJza3UiIDogImhvb2stMSIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJhZElkIiA6ICJBMDU3MjYzNVAxVDFDMjEzVUZMMyIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICJjYW1wYWlnbklkIiA6ICJBMDUyMDI1NjI2RFRWR0dQVzcyRDYiICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBdOyAgICBTRkNsaWVudC5zZW5kQWRJbmZvKGZlZWRiYWNrSnNvbik7fTwvc2NyaXB0Pg==","serverSideFetchAd": "true","enableAdBlockerDetector": false,"disableResizeFunc": true,"fallbackStaticAdImgUrl": "","fallbackStaticAdClickUrl": "","fallbackStaticAdExtraStyle": "","adFeedbackInfo": {"adProgramId": "1024", "endPoint": "/gp/aq-feedback/lazyLoad/handler/af-link-handler.html","boolFeedback": true,"slugText": "Anzeige"},"adPlacementMetaData": {"searchTerms": "a2xlaWRlcmhha2Vu","pageUrl": "aHR0cHM6Ly93d3cuYW1hem9uLmRlL2dwL3Byb2R1Y3QvQjAxRFFEWlZDTz9yZWYlNUY9c3IlNUYxJTVGOCZxaWQ9MTU0NjM3NTQ4MSZzcj04LTgma2V5d29yZHM9a2xlaWRlcmhha2Vu","adElementId": "ape_Detail_hero-quick-promo_Desktop_placement","pageType": "Detail","slotName": "hero-quick-promo"},"adCreativeMetaData": {"adProgramId": "1024","adImpressionId": "https://aax-eu.amazon-adsystem.com/e/xsp/imp?b=QtJ_zZmYfp5ADkamgDvxAnIAAAFoCymm-QMAAAH6Aeuhj4Y","adCreativeId": "1892602066","adId": "20017195246405","adNetwork": "cs"},"advertisementStyle": {"position": "absolute","top": "2px","right": "0px","display": "inline-block","font": "normal 11px Arial","color": "grey"},"feedbackDivStyle": { "position": "relative", "height": "20px", "top": "2px", "width":"104px"},"viewabilityStandards": [{"p": 0, "t": 0, "def": "amzn"}, {"p": 50, "t": 1, "def": "iab"}, {"p": 100, "t": 0, "def": "groupm"}],"ajaxWeblabTriggerId": "","abpStatus": "1","abpAcceptable": "true","DAsfUrl":"https://images-eu.ssl-images-amazon.com/images/G/03/ape/sf/desktop/DAsf-1.50.917d6c3._V459327015_.js"}' aria-hidden="true"></div><script>(function(){function a(d,e){if(window.addEventListener){window.addEventListener(d,e,false);}else{if(window.attachEvent){window.attachEvent("on"+d,e);}}}function c(d,e){if(window.removeEventListener){window.removeEventListener(d,e,false);}else{if(window.detachEvent){window.detachEvent("on"+d,e);}}}var b=function(){(function(){(function(j,n){j.sfLogErrors=j.sfLogErrors||false;var o=o||function(s,r){r=r||new Error(s);if(j.ue&&typeof ue.count=="function"){ue.count("adplacements:safeFrameError",1);}if(!j.sfLogErrors){return;}if(j.ueLogError){j.ueLogError(r,{logLevel:"ERROR",attribution:"APE-safeframe",message:s+" "});}else{if(typeof console!=="undefined"&&console.error){console.error(s,r);}}};j.aanParams=j.aanParams||{};j.aanParams["hero-quick-promo"]="site=amazon.de;pt=Detail;slot=hero-quick-promo;pid=B01DQDZVCO;q=kleiderhaken;bn=3167641;arid=2138cc69ca5a4a379a0b3cf358699f36";j["hero-quick-promo"]={};j["hero-quick-promo"].adStartTime=(new Date()).getTime();function d(){return j.innerHeight||n.documentElement.clientHeight;}function g(){return j.innerWidth||n.documentElement.clientWidth;}function e(t,r,s){if(t>0){return(s>t);}else{return(r>0);}}var f=function(){return(Date.now?Date.now():new Date().getTime());};throttle=function(s,u,y){var r,w,z;var x=null;var v=0;if(!y){y={};}var t=function(){v=y.leading===false?0:f();x=null;z=s.apply(r,w);if(!x){r=w=null;}};return function(){var B=f();if(!v&&y.leading===false){v=B;}var A=u-(B-v);r=this;w=arguments;if(A<=0||A>u){if(x){clearTimeout(x);x=null;}v=B;z=s.apply(r,w);if(!x){r=w=null;}}else{if(!x&&y.trailing!==false){x=setTimeout(t,A);}}return z;};};function l(u,w,v,r){try{var t=n.getElementById(u).getBoundingClientRect();if(e(t.top,t.bottom,d())&&e(t.left,t.right,g())){if(typeof uet=="function"){uet("bb","adplacements:viewablelatency:"+w,{wb:1});if(v){uet("bb","adplacements:viewablelatency:"+v,{wb:1});}}if(typeof uex=="function"&&j.ue&&typeof ue.count=="function"){if(j.apeViewableLatencyTrackers[r].loaded){uex("ld","adplacements:viewablelatency:"+w,{wb:1});if(v){uex("ld","adplacements:viewablelatency:"+v,{wb:1});}ue.count("adplacements:htmlviewed:loaded:"+w,1);if(v){ue.count("adplacements:htmlviewed:loaded:"+v,1);}}ue.count("adplacements:htmlviewed:"+w,1);if(v){ue.count("adplacements:htmlviewed:"+v,1);}}j.apeViewableLatencyTrackers[r].viewed=true;if(j.apeViewableLatencyTrackers[r].tracker){c("scroll",j.apeViewableLatencyTrackers[r].tracker);c("resize",j.apeViewableLatencyTrackers[r].tracker);}}}catch(s){j.apeViewableLatencyTrackers[r].valid=false;}}try{j.apeViewableLatencyTrackers=j.apeViewableLatencyTrackers||{};var q="ape_Detail_hero-quick-promo_Desktop_placement";var p="Detail_hero-quick-promo_Desktop".replace(/\\_/g,":");var h="";var i="2138cc69ca5a4a379a0b3cf358699f36";j.apeViewableLatencyTrackers[i]=j.apeViewableLatencyTrackers[i]||{};j.apeViewableLatencyTrackers[i].valid=true;l(q,p,h,i);if(j.apeViewableLatencyTrackers[i].valid&&!j.apeViewableLatencyTrackers[i].viewed){j.apeViewableLatencyTrackers[i].tracker=throttle(function(){l(q,p,h,i);},20);a("scroll",j.apeViewableLatencyTrackers[i].tracker);a("resize",j.apeViewableLatencyTrackers[i].tracker);}}catch(k){if(j.apeViewableLatencyTrackers&&j.apeViewableLatencyTrackers["2138cc69ca5a4a379a0b3cf358699f36"]){j.apeViewableLatencyTrackers["2138cc69ca5a4a379a0b3cf358699f36"].valid=false;}o("Error initializing viewable latency instrumentation",k);}try{if(j.DAsf){j.DAsf.loadAds();}else{var m=n.createElement("script");m.type="text/javascript";m.async=true;m.setAttribute("crossorigin","anonymous");m.charset="utf-8";m.src="https://images-eu.ssl-images-amazon.com/images/G/03/ape/sf/desktop/DAsf-1.50.917d6c3._V459327015_.js?csm_attribution=APE-SafeFrame";m.onerror=function(){o("Error loading SafeFrame library");};(n.getElementsByTagName("head")[0]||n.getElementsByTagName("body")[0]).appendChild(m);}}catch(k){o("Error appending DAsf library",k);}}(window,document));})();};b();})();</script>








  
    </div>
    <div style="clear:left; margin-bottom:5px"></div>


        
    
    
    

    















    </div>





        
        
    
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
    
        
        
        
        










    
    
     
         
         
             <div id="bundle_feature_div" class="feature" data-feature-name="bundle">
         
     




    

    
    
    
        
            
                
	                
	                
	                	





	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
        
        
        
        










    
    
     
         
         
             <div id="twisterJsInitializer_feature_div" class="feature" data-feature-name="twisterJsInitializer">
         
     




    

    
    
    
        
            
                
	                
	                
	                	




	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





        
        
    
</div>









<!-- MarkAF -->

    





        
        
    




 







    
    








    
    


    
    



   
    








 


        <script type="a-state" data-a-state="{&quot;key&quot;:&quot;metrics-schema&quot;}">{"widgetSchema":"dp:widget:","dimensionSchema":"dp:dims:"}</script>

    

























 
 
 











      












  
  
        


    
    
    





                    













    
    




  



        
        
        
        
  









        






































       















<script type='text/javascript'>P.when('cf').execute(function() { ue.count('dp:widget:dpxSize:dpxBTFSize', 98);ue.count('dp:widget:dpxSize:dpxATFSize', 160);});</script>
         
        
































<div id="bundleV2_feature_div" class="feature" data-feature-name="bundleV2">
         
     




    

    
    
    
        
            
                
	                
	                
	                	





  


<div class="a-row aok-inline-block">
    
        
        
    

    
</div>


	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>



  
  
    
    
    









 





<div id="quickPromoDivId">
<div class="buying quickPromo">
  <ul><li><div class="amabot_widget">



Wir haben f&uuml;r Sie eine Liste mit
			 <a href="/Hersteller-Kontaktinformationen/b/ref=amb_link_1?ie=UTF8&node=5224534031&pf_rd_m=A3JWKAKR8XB7XF&pf_rd_s=special-product-offers-3&pf_rd_r=VBWKFM73Q96291SQHAHK&pf_rd_r=VBWKFM73Q96291SQHAHK&pf_rd_t=201&pf_rd_p=72019c99-562a-4665-9352-df4ff40f3698&pf_rd_p=72019c99-562a-4665-9352-df4ff40f3698&pf_rd_i=B01DQDZVCO">Hersteller-Service-Informationen</a> zusammengestellt, f&uuml;r den Fall, dass Probleme bei einem Produkt auftreten sollten, oder Sie weitere technische Informationen ben&ouml;tigen. </div><br></li></ul>
</div>


<div class="buying quickPromo">
  <ul><li><div class="amabot_widget"><h2></h2>
Entdecken Sie 
<a href="/k%C3%83%C2%BCche-haushalt-wohnen/b/ref=amb_link_1?ie=UTF8&node=3167641&pf_rd_m=A3JWKAKR8XB7XF&pf_rd_s=special-node-offers-1&pf_rd_r=VBWKFM73Q96291SQHAHK&pf_rd_r=VBWKFM73Q96291SQHAHK&pf_rd_t=201&pf_rd_p=bf69323b-84e1-4ea0-9c70-b429965cffa6&pf_rd_p=bf69323b-84e1-4ea0-9c70-b429965cffa6&pf_rd_i=B01DQDZVCO">alles f&uuml;r K&uuml;che und Haushalt</a>. 
St&ouml;bern Sie in unseren 
<a href="/Restposten-K%C3%BCche/b/ref=amb_link_2?ie=UTF8&node=677821011&pf_rd_m=A3JWKAKR8XB7XF&pf_rd_s=special-node-offers-1&pf_rd_r=VBWKFM73Q96291SQHAHK&pf_rd_r=VBWKFM73Q96291SQHAHK&pf_rd_t=201&pf_rd_p=bf69323b-84e1-4ea0-9c70-b429965cffa6&pf_rd_p=bf69323b-84e1-4ea0-9c70-b429965cffa6&pf_rd_i=B01DQDZVCO">aktuellen Angeboten</a> 
sowie in den exklusiven Marken 
<a href="/Levivo/pages/10663765031/ref=amb_link_3?pf_rd_m=A3JWKAKR8XB7XF&pf_rd_s=special-node-offers-1&pf_rd_r=VBWKFM73Q96291SQHAHK&pf_rd_r=VBWKFM73Q96291SQHAHK&pf_rd_t=201&pf_rd_p=bf69323b-84e1-4ea0-9c70-b429965cffa6&pf_rd_p=bf69323b-84e1-4ea0-9c70-b429965cffa6&pf_rd_i=B01DQDZVCO">Levivo</a>,
<a href="/Dream-Art/pages/4701479031/ref=amb_link_4?pf_rd_m=A3JWKAKR8XB7XF&pf_rd_s=special-node-offers-1&pf_rd_r=VBWKFM73Q96291SQHAHK&pf_rd_r=VBWKFM73Q96291SQHAHK&pf_rd_t=201&pf_rd_p=bf69323b-84e1-4ea0-9c70-b429965cffa6&pf_rd_p=bf69323b-84e1-4ea0-9c70-b429965cffa6&pf_rd_i=B01DQDZVCO">Dream Art</a>,
<a href="/Trends4u/pages/11836030031/ref=amb_link_5?pf_rd_m=A3JWKAKR8XB7XF&pf_rd_s=special-node-offers-1&pf_rd_r=VBWKFM73Q96291SQHAHK&pf_rd_r=VBWKFM73Q96291SQHAHK&pf_rd_t=201&pf_rd_p=bf69323b-84e1-4ea0-9c70-b429965cffa6&pf_rd_p=bf69323b-84e1-4ea0-9c70-b429965cffa6&pf_rd_i=B01DQDZVCO">Trends4u</a>,
<a href="/Deco-Company/pages/11976082031/ref=amb_link_6?pf_rd_m=A3JWKAKR8XB7XF&pf_rd_s=special-node-offers-1&pf_rd_r=VBWKFM73Q96291SQHAHK&pf_rd_r=VBWKFM73Q96291SQHAHK&pf_rd_t=201&pf_rd_p=bf69323b-84e1-4ea0-9c70-b429965cffa6&pf_rd_p=bf69323b-84e1-4ea0-9c70-b429965cffa6&pf_rd_i=B01DQDZVCO">Deco Company</a>
und 
<a href="/s/ref=amb_link_7?ie=UTF8&rh=i%3Akitchen%2Cn%3A3167641&srs=3318550031&pf_rd_m=A3JWKAKR8XB7XF&pf_rd_s=special-node-offers-1&pf_rd_r=VBWKFM73Q96291SQHAHK&pf_rd_r=VBWKFM73Q96291SQHAHK&pf_rd_t=201&pf_rd_p=bf69323b-84e1-4ea0-9c70-b429965cffa6&pf_rd_p=bf69323b-84e1-4ea0-9c70-b429965cffa6&pf_rd_i=B01DQDZVCO">Amazon Basics</a>. 
 

   </div><br></li></ul>
</div>

</div>




































<script type="text/javascript">(function(f) {f(window.P._namespace("AskAuiAssets"));}(function(P) {
  if (typeof P !== 'undefined') {
    P.when('askDesktopDetailPageSearchWidget').execute(function(desktopDetailPageSearchWidget) {
      desktopDetailPageSearchWidget.setup();
    });

    P.when('askDesktopDetailPageSearchAutocompleteWidget').execute(function(desktopDetailPageSearchAutocompleteWidget) {
      desktopDetailPageSearchAutocompleteWidget.setup();
    });
  }
}));</script>






















<noscript>
  <style>
    .askDetailPageSearchWidgetSection { display:none; }
  </style>
</noscript>

<div cel_widget_id="ask-swdp-desktop" class="celwidget">
  <div class="a-section askDetailPageSearchWidgetSection">
    <hr class="a-spacing-extra-large a-divider-normal">

    <div class="a-section a-spacing-extra-large">
      <h2 class="a-spacing-micro">
        Haben Sie eine Frage?
      </h2>
      <p class="a-spacing-small a-size-small a-color-secondary">
        Antworten finden Sie in Produktinformationen, Fragen und Antworten und Rezensionen.
      </p>

      

      <div class="a-section askDPSearchViewContent">
        
        <form method="post" action="/ask/questions/asin/B01DQDZVCO/create" class="askDPSearchForm">
          <input type="hidden" name="askQuestionSource" value="DESKTOP_DP_SEARCH">
          <input type="hidden" name="askErrorUrl" value="/ask/questions/asin/B01DQDZVCO/#Ask">
          <input type="hidden" name="askAsin" value="B01DQDZVCO" class="askAsin">
          <input type="hidden" name="askQuestionSourcePage" value="ALL_QUESTIONS_PAGE">
          <input type="hidden" name="liveSearchSessionId" class="askLiveSearchSessionId">
          <input type="hidden" name="liveSearchPageLoadId" class="askLiveSearchPageLoadId">
          <input type="hidden" name="searchSource" value="DETAIL_PAGE_SEARCH_SOURCE">
          <input type="hidden" name="originalSearchSource" value="DETAIL_PAGE_SEARCH_SOURCE">
          <input type="hidden" name="followupSearchSource" value="FOLLOWUP_QUESTION_SEARCH_SOURCE">
          <input type='hidden' name='__token_' value='dJFikoMvIWxCwEhdPUhpYjrr344j3D' />
          
          
          <span class="a-declarative" data-action="ask-dpsearch-desktop-input-click" data-ask-dpsearch-desktop-input-click="{&quot;searchButton&quot;:false}">
            <span class="a-declarative" data-action="ask-dpsearch-desktop-input-focusin" data-ask-dpsearch-desktop-input-focusin="{&quot;searchButton&quot;:false}">
              <span class="a-declarative" data-action="ask-dpsearch-desktop-input-change" data-ask-dpsearch-desktop-input-change="{&quot;searchButton&quot;:false}">
                <span class="a-declarative" data-action="ask-dpsearch-desktop-input-keyup" data-ask-dpsearch-desktop-input-keyup="{&quot;searchButton&quot;:false}">
                  <span class="a-declarative" data-action="ask-detail-page-search-prefetch-click" data-ask-detail-page-search-prefetch-click="{&quot;asin&quot;:&quot;B01DQDZVCO&quot;,&quot;language&quot;:&quot;de_DE&quot;}">
                    <span class="a-declarative" data-action="ask-prevent-enter-key" data-ask-prevent-enter-key="{}">
                      
                      
                      <div data-autocomplete-search-results-brief="Suchergebnisse für ##query##" class="a-section a-spacing-base askAutocomplete">
                        <span class="askSwdpSearchInput">
                          
                            
                            
                              
                                
                                
                                  <div class="a-search a-span12"><i class="a-icon a-icon-search"></i><input type="search" maxlength="150" autocomplete="off" name="askQuestionText" class="a-input-text a-span12 askDPSearchTextInput askDPSearchPostTextInput"></div>
                                
                              
                            
                          
                        </span>
                      </div>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
          
            
             
               <input type="hidden" name="askLanguage" value="de_DE">
             
          
        <div class="a-section a-text-center askDPSearchSearchIndicator aok-hidden">
          <span class="a-spinner a-spinner-medium"></span>
        </div>
        <div class="a-section askDPSearchResultsViewableContent aok-hidden">
          
            <div class="a-section askDPSearchQuestionErrorContainer">
              <p class="a-spacing-base a-spacing-top-base a-color-error askError askBadQuestionError">
                Bitte stellen Sie sicher, dass Sie eine korrekte Frage eingegeben haben. Sie können Ihre Frage bearbeiten oder sie trotzdem veröffentlichen.
              </p>
            </div>
            <div class="a-section a-text-left askPostQuestionPromptContainer">
              <span class="a-size-base a-color-tertiary a-text-bold">
                Werden nicht die gewünschten Informationen angezeigt?
              </span>
              <span class="a-declarative" data-action="ask-dpsearch-desktop-post-question" data-ask-dpsearch-desktop-post-question="{}">
                <span class="a-button a-button-base askDetailPageSearchSubmitQuestionButton"><span class="a-button-inner"><button class="a-button-text" type="button" value="Frage an die Community">
                  Frage an die Community
                </button></span></span>
              </span>
            </div>
          
          <div class="a-section askDPSearchFailureMessage">
            Bei Ihrer Anfrage ist ein Problem aufgetreten. Wiederholen Sie Ihre Suche später noch einmal.
          </div>
          <div class="a-section a-spacing-base askSearchTabHeaders">
            <span class="a-declarative" data-action="ask-dpsearch-desktop-go-to-tab" data-ask-dpsearch-desktop-go-to-tab="{&quot;index&quot;:0}">
              <span class="a-declarative" data-action="ask-log-click-csm" data-ask-log-click-csm="{&quot;metricName&quot;:&quot;ask-detailpage-search-desktop-allresults-tab-click&quot;}">
                <span class="askSearchResultsHeader askSearchResultsHeaderActive">
                  Alle
                </span>
              </span>
            </span>
            <span class="a-declarative" data-action="ask-dpsearch-desktop-go-to-tab" data-ask-dpsearch-desktop-go-to-tab="{&quot;index&quot;:1}">
              <span class="a-declarative" data-action="ask-log-click-csm" data-ask-log-click-csm="{&quot;metricName&quot;:&quot;ask-detailpage-search-desktop-productinfo-tab-click&quot;}">
                <span class="askSearchResultsHeader">
                  Produktinformationen
                </span>
              </span>
            </span>
            <span class="a-declarative" data-action="ask-dpsearch-desktop-go-to-tab" data-ask-dpsearch-desktop-go-to-tab="{&quot;index&quot;:2}">
              <span class="a-declarative" data-action="ask-log-click-csm" data-ask-log-click-csm="{&quot;metricName&quot;:&quot;ask-detailpage-search-desktop-qnas-tab-click&quot;}">
                <span class="askSearchResultsHeader">
                  Kundenfragen und Antworten
                </span>
              </span>
            </span>
            <span class="a-declarative" data-action="ask-dpsearch-desktop-go-to-tab" data-ask-dpsearch-desktop-go-to-tab="{&quot;index&quot;:3}">
              <span class="a-declarative" data-action="ask-log-click-csm" data-ask-log-click-csm="{&quot;metricName&quot;:&quot;ask-detailpage-search-desktop-reviews-tab-click&quot;}">
                <span class="askSearchResultsHeader">
                  Kundenrezensionen
                </span>
              </span>
            </span>
            <hr class="a-divider-normal">
          </div>
          <div class="a-section a-spacing-none askSearchResultsContainer"></div>
          
        </div>
        </form>
      </div>
    </div>
  </div>
</div>











<!--rbd-->







  


 
 














    <div id='sims-fbt' class='similarities-widget bucket'>
        <hr class="a-divider-normal bucketDivider"><h2>Wird oft zusammen gekauft</h2>
        <div id="sims-fbt-container" data-p13n-feature-metadata="{&quot;baseAsin&quot;:&quot;B01DQDZVCO&quot;,&quot;has_diff_avail&quot;:&quot;0&quot;,&quot;has_seller_difference&quot;:&quot;0&quot;,&quot;pd_rd_wg&quot;:&quot;KlAC1&quot;,&quot;pd_rd_r&quot;:&quot;1ed1331c-0e06-11e9-ab4f-0333a0e7098d&quot;,&quot;pf_rd_r&quot;:&quot;VBWKFM73Q96291SQHAHK&quot;,&quot;pf_rd_p&quot;:&quot;c63cca93-7a15-40dd-b68a-47167d2b2080&quot;,&quot;pd_rd_w&quot;:&quot;tfn2C&quot;}" data-p13n-feature-name="pd_bxgy_201" data-p13n-global="{&quot;customerId&quot;:&quot;A96YKT37ODSSG&quot;,&quot;marketplace&quot;:&quot;DE&quot;,&quot;requestId&quot;:&quot;VBWKFM73Q96291SQHAHK&quot;,&quot;marketplaceId&quot;:&quot;A1PA6795UKMFR9&quot;,&quot;session&quot;:&quot;262-9898842-9713804&quot;}" class="a-container">
            <div id='sims-fbt-content'>
                <form id="sims-fbt-form" name="BuyXGetYhandleBuy" method="post" action="/gp/item-dispatch/ref=pd_bxgy_201_button_crt?ie=UTF8&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=tfn2C&pd_rd_wg=KlAC1&pf_rd_p=c63cca93-7a15-40dd-b68a-47167d2b2080&pf_rd_r=VBWKFM73Q96291SQHAHK&refRID=VBWKFM73Q96291SQHAHK" autocomplete="off">
                <input type="hidden" name="session-id" value="262-9898842-9713804"><input type="hidden" name="discoveredAsins.1" value="B01DUZM3PG">
                <div>
                    <ul class="a-unordered-list a-nostyle a-horizontal a-spacing-base a-spacing-top-base sims-fbt-image-box">
        <li class="a-align-center sims-fbt-image-1"><span class="a-list-item"><div class="a-section"><img alt="WINOMO Kleiderhaken Klappbar Wand-Kleiderständer" src="https://images-na.ssl-images-amazon.com/images/I/61PbuwxxQ-L._AC_UL115_.jpg" class="sims-fbt-image"></div></span></li><li class="a-align-center sims-fbt-plus-2"><span class="a-list-item a-size-large a-color-tertiary">+</span></li><li class="a-align-center sims-fbt-image-2"><span class="a-list-item"><a class="a-link-normal" href="/Gedotec-Wand-Klapphaken-Garderobenhaken-Kleiderl%C3%BCfter-Kleiderhaken/dp/B01DUZM3PG/ref=pd_bxgy_201_img_2?_encoding=UTF8&pd_rd_i=B01DUZM3PG&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=tfn2C&pd_rd_wg=KlAC1&pf_rd_p=c63cca93-7a15-40dd-b68a-47167d2b2080&pf_rd_r=VBWKFM73Q96291SQHAHK&psc=1&refRID=VBWKFM73Q96291SQHAHK"><div class="a-section"><img alt="Gedotec Wand-Klapphaken Garderobenhaken Kleiderlüfter Kleiderhaken klappbar MITAL zum Einlassen | 140 x 16/128 mm | Chrom matt | 1 Stück - Wandgarderobe klappbar" src="https://images-na.ssl-images-amazon.com/images/I/71jbOLCupjL._AC_UL115_.jpg" class="sims-fbt-image"></div></a></span></li>
        </ul>
                    <div class='sims-fbt-price-box'>
                        <div class='sims-fbt-total-price'><span class="a-size-base a-color-secondary sims-fbt-total-price-text">Gesamtpreis: </span><span class="a-size-medium a-color-price sims-fbt-total-price-value"><span class='p13n-sc-price'>EUR 24,49</span></span></div>
                        <div class='sims-fbt-buttons'><div class="a-button-stack a-spacing-mini">
                            <span class="a-button a-button-primary a-button-small sims-fbt-add-to-cart"><span class="a-button-inner"><input name="submit.addToCart" class="a-button-input" type="submit"><span class="a-button-text" aria-hidden="true">Beides in den Einkaufswagen</span></span></span>
                            
                        </div></div>
                        <script type="a-state" data-a-state="{&quot;key&quot;:&quot;sims-fbt&quot;}">{"addToCartText":{"1":"In den Einkaufswagen","3":"Alle drei in den Einkaufswagen","2":"Beides in den Einkaufswagen"},"allOfferListingIDs":["9XBVWWp1QMRea579SNOfvsi9IWocdevWuw1yw2u6P52hzwvPgucLarCZbeNHXww7m%2B%2FCWvMCljTW71FmZYox%2FdBwb%2Fo%2FedNOAugnnT1fYQUWG2ei%2B%2BpLPu2L3rUL5NqLEMJ%2F7EwMcTm7RND2GzpyqRW1O8mVosmR","sTHe2LN%2B1jqzLJdaa57ZcY2IQd%2B2XTRXDP3iIigjwsBrXzrqms9krHsk1KOau%2BFXaprLOr9TwpZpQT4vAQHHX1kiW5KkdSc47w95DPqNqSKRUj3rHvVSBDn8gnNEzoubVUKSiAX%2BzV9YytzYC1RGXA%3D%3D"],"currencySymbol":"<span class='p13n-sc-price'>EUR <span class=\\"sims-fbt-price-value\\"></span></span>","currencyCode":"EUR","shouldTruncateCents":0,"MAPText":"Um unseren Preis zu sehen, legen Sie diese Artikel in Ihren Einkaufswagen. <a class=\\"a-link-normal sims-fbt-map-details-link\\" target=\\"AmazonHelp\\" rel=\\"noopener\\" href=\\"#\\">Warum zeigen wir den Preis nicht an?</a>","shippingDetails":{"12":"seller"},"itemDetails":{"9XBVWWp1QMRea579SNOfvsi9IWocdevWuw1yw2u6P52hzwvPgucLarCZbeNHXww7m%2B%2FCWvMCljTW71FmZYox%2FdBwb%2Fo%2FedNOAugnnT1fYQUWG2ei%2B%2BpLPu2L3rUL5NqLEMJ%2F7EwMcTm7RND2GzpyqRW1O8mVosmR":{"asin":"B01DQDZVCO","isPreorder":0,"price":14.99,"doesMAPPolicyApply":0},"sTHe2LN%2B1jqzLJdaa57ZcY2IQd%2B2XTRXDP3iIigjwsBrXzrqms9krHsk1KOau%2BFXaprLOr9TwpZpQT4vAQHHX1kiW5KkdSc47w95DPqNqSKRUj3rHvVSBDn8gnNEzoubVUKSiAX%2BzV9YytzYC1RGXA%3D%3D":{"asin":"B01DUZM3PG","isPreorder":0,"price":9.5,"doesMAPPolicyApply":0}},"addToWishListText":{"1":"Zum Wunschzettel hinzufügen","3":"Alle drei zum Wunschzettel hinzufügen","2":"Beide zum Wunschzettel hinzufügen"},"preOrderText":null,"fbtStrings":{"showDetails":"Details anzeigen","showDetailsLong":"Verfügbarkeit und Versanddetails anzeigen","differentSellers":"Diese Artikel werden von verschiedenen Verkäufern verkauft und versendet.","noDetails":"Wählen Sie Artikel, die gemeinsam gekauft werden sollen.","hideDetailsLong":"Verfügbarkeit und Versanddetails verbergen","hideDetails":"Details ausblenden"}}</script>
                    </div>
                </div>
                <div class='sims-fbt-details-link'><div class="a-box a-alert-inline a-alert-inline-info"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content"><span class="a-size-mini sims-fbt-shipping-details-text">Diese Artikel werden von verschiedenen Verkäufern verkauft und versendet.</span> <a class="a-size-mini a-link-normal" href="javascript:void(0)">Details anzeigen</a></div></div></div></div>
                <div class='sims-fbt-rows'><fieldset class="forScreenreaders"><legend><span>Die ausgewählten Artikel zusammen kaufen</span></legend><ul class="a-unordered-list a-nostyle a-vertical"><li data-p13n-asin-metadata="{&quot;ref&quot;:&quot;pd_bxgy_201_1_1&quot;,&quot;price&quot;:14.99,&quot;asin&quot;:&quot;B01DQDZVCO&quot;}" class="a-spacing-mini p13n-asin"><span class="a-list-item"><span class="a-declarative" data-action="fbt-checkbox-click" data-fbt-checkbox-click="{&quot;itemNum&quot;:&quot;1&quot;,&quot;offerListingID&quot;:&quot;9XBVWWp1QMRea579SNOfvsi9IWocdevWuw1yw2u6P52hzwvPgucLarCZbeNHXww7m%2B%2FCWvMCljTW71FmZYox%2FdBwb%2Fo%2FedNOAugnnT1fYQUWG2ei%2B%2BpLPu2L3rUL5NqLEMJ%2F7EwMcTm7RND2GzpyqRW1O8mVosmR&quot;,&quot;asin&quot;:&quot;B01DQDZVCO&quot;}"><div data-a-input-name="offeringID.1" class="a-checkbox sims-fbt-checkbox"><label><input type="checkbox" name="offeringID.1" value="9XBVWWp1QMRea579SNOfvsi9IWocdevWuw1yw2u6P52hzwvPgucLarCZbeNHXww7m%2B%2FCWvMCljTW71FmZYox%2FdBwb%2Fo%2FedNOAugnnT1fYQUWG2ei%2B%2BpLPu2L3rUL5NqLEMJ%2F7EwMcTm7RND2GzpyqRW1O8mVosmR" checked><i class="a-icon a-icon-checkbox"></i><span class="a-label a-checkbox-label"><div class = 'sims-fbt-checkbox-label'><span class="sims-fbt-this-item a-text-bold">Dieser Artikel:</span><span>WINOMO Kleiderhaken Klappbar Wand-Kleiderst&auml;nder</span> <span class="a-color-price"><span class='p13n-sc-price'>EUR 14,99</span></span> <div class="a-row a-spacing-micro a-spacing-top-micro a-size-small a-color-secondary sims-fbt-seller-info"><div class="a-row"><span class="a-size-base a-color-success">Auf Lager.</span></div><div class="a-row"><span class="a-size-base a-color-secondary a-text-normal">Verkauf durch , Lieferung durch Amazon Fulfillment.</span></div><div class="a-row"><span class="a-size-base a-color-secondary a-text-normal">KOSTENFREIE Lieferung in zwei Tagen mit Amazon Prime <a class="a-link-normal sims-fbt-details-help-link" target="AmazonHelp" rel="noopener" href="/gp/help/customer/display.html/ref=pd_bxgy_201_1_sdc_sdc_1?ie=UTF8&nodeId=201910250&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=tfn2C&pd_rd_wg=KlAC1&pf_rd_p=c63cca93-7a15-40dd-b68a-47167d2b2080&pf_rd_r=VBWKFM73Q96291SQHAHK&pop-up=1&refRID=VBWKFM73Q96291SQHAHK">Details</a></span></div></div></div></span></label></div></span></span></li><li data-p13n-asin-metadata="{&quot;ref&quot;:&quot;pd_bxgy_201_2_2&quot;,&quot;price&quot;:9.5,&quot;asin&quot;:&quot;B01DUZM3PG&quot;}" class="a-spacing-mini p13n-asin"><span class="a-list-item"><span class="a-declarative" data-action="fbt-checkbox-click" data-fbt-checkbox-click="{&quot;itemNum&quot;:&quot;2&quot;,&quot;offerListingID&quot;:&quot;sTHe2LN%2B1jqzLJdaa57ZcY2IQd%2B2XTRXDP3iIigjwsBrXzrqms9krHsk1KOau%2BFXaprLOr9TwpZpQT4vAQHHX1kiW5KkdSc47w95DPqNqSKRUj3rHvVSBDn8gnNEzoubVUKSiAX%2BzV9YytzYC1RGXA%3D%3D&quot;,&quot;asin&quot;:&quot;B01DUZM3PG&quot;}"><div data-a-input-name="offeringID.2" class="a-checkbox sims-fbt-checkbox"><label><input type="checkbox" name="offeringID.2" value="sTHe2LN%2B1jqzLJdaa57ZcY2IQd%2B2XTRXDP3iIigjwsBrXzrqms9krHsk1KOau%2BFXaprLOr9TwpZpQT4vAQHHX1kiW5KkdSc47w95DPqNqSKRUj3rHvVSBDn8gnNEzoubVUKSiAX%2BzV9YytzYC1RGXA%3D%3D" checked><i class="a-icon a-icon-checkbox"></i><span class="a-label a-checkbox-label"><div class = 'sims-fbt-checkbox-label'><a class="a-size-base a-link-normal" href="/Gedotec-Wand-Klapphaken-Garderobenhaken-Kleiderl%C3%BCfter-Kleiderhaken/dp/B01DUZM3PG/ref=pd_bxgy_201_2?_encoding=UTF8&pd_rd_i=B01DUZM3PG&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=tfn2C&pd_rd_wg=KlAC1&pf_rd_p=c63cca93-7a15-40dd-b68a-47167d2b2080&pf_rd_r=VBWKFM73Q96291SQHAHK&psc=1&refRID=VBWKFM73Q96291SQHAHK">Gedotec Wand-Klapphaken Garderobenhaken Kleiderl&uuml;fter Kleiderhaken klappbar MITAL zum Einlassen&hellip;</a> <span class="a-color-price"><span class='p13n-sc-price'>EUR 9,50</span></span> <div class="a-row a-spacing-micro a-spacing-top-micro a-size-small a-color-secondary sims-fbt-seller-info"><div class="a-row"><span class="a-size-base a-color-success">Auf Lager.</span></div><div class="a-row"><span class="a-size-base a-color-secondary a-text-normal">Versandt und verkauft von heimwerkertools.</span></div><div class="a-row"><span class="a-size-base a-color-secondary a-text-normal"><span class='p13n-sc-price'>EUR 3,90</span> Versand </span></div></div></div></span></label></div></span></span></li></ul></fieldset></div>
                </form>
            </div>
        </div>
    </div>
    














    
    



  



        
        
        
        
  









        
















<!--rbd-->









 
 














        
        <div id='p13n-m-desktop-dp-sims_session-similarities-esp-SIMS-CP-INFLUENCED-DESKTOP-SIMS-166502-sims-feature-2' class='celwidget' cel_widget_id='desktop-dp-sims_session-similarities-esp-SIMS-CP-INFLUENCED-DESKTOP-SIMS-166502-sims-feature-2'>
    
            <div data-similarity-type="desktop-dp-sims_session-similarities-esp-SIMS-CP-INFLUENCED-DESKTOP-SIMS-166502" class="a-section similarities-widget sims-carousel-holder">
                <hr class="a-divider-normal sims-carousel-heading bucketDivider">
                <div id="desktop-dp-sims_session-similarities-esp-SIMS-CP-INFLUENCED-DESKTOP-SIMS-166502-sims-feature" class="a-section a-spacing-large bucket">
                    
        <div data-a-carousel-options="{&quot;ajax&quot;:{&quot;params&quot;:{&quot;asinMetadataKeys&quot;:&quot;adId&quot;,&quot;featureId&quot;:&quot;SimilaritiesCarousel&quot;,&quot;reftagPrefix&quot;:&quot;pd_sbs_201&quot;,&quot;widgetTemplateClass&quot;:&quot;PI::Similarities::ViewTemplates::Carousel::Desktop&quot;,&quot;imageHeight&quot;:160,&quot;linkGetParameters&quot;:&quot;{\\&quot;pd_rd_wg\\&quot;:\\&quot;KlAC1\\&quot;,\\&quot;pd_rd_r\\&quot;:\\&quot;1ed1331c-0e06-11e9-ab4f-0333a0e7098d\\&quot;,\\&quot;pf_rd_r\\&quot;:\\&quot;VBWKFM73Q96291SQHAHK\\&quot;,\\&quot;pf_rd_p\\&quot;:\\&quot;823c2db5-0a4d-474e-99ed-5858cc6a4d7b\\&quot;,\\&quot;pd_rd_w\\&quot;:\\&quot;u2uPF\\&quot;}&quot;,&quot;faceoutTemplateClass&quot;:&quot;PI::P13N::ViewTemplates::Product::Desktop::CarouselFaceout&quot;,&quot;auiDeviceType&quot;:&quot;desktop&quot;,&quot;imageWidth&quot;:160,&quot;schemaVersion&quot;:2,&quot;productDetailsTemplateClass&quot;:&quot;PI::P13N::ViewTemplates::ProductDetails::Desktop::Base&quot;,&quot;forceFreshWin&quot;:0,&quot;productDataFlavor&quot;:&quot;Faceout&quot;,&quot;relatedRequestID&quot;:&quot;VBWKFM73Q96291SQHAHK&quot;,&quot;maxLineCount&quot;:6},&quot;id_list&quot;:[&quot;B0727X3NXC:&quot;,&quot;B075JBPXN1:&quot;,&quot;B06WWJLRTP:&quot;,&quot;B00GVAPS4Q:&quot;,&quot;B074C4HWSB:&quot;,&quot;B01DUZM3PG:&quot;,&quot;B000QB6M6O:&quot;,&quot;B074FRN2KG:&quot;,&quot;B01C57XM14:&quot;,&quot;B0002AE414:&quot;,&quot;B003F3QR7O:&quot;,&quot;B078Y6J973:&quot;,&quot;B01MTE88FH:&quot;,&quot;B0782QXK21:&quot;,&quot;B077TKX7RN:&quot;,&quot;B06XG11R7Z:&quot;,&quot;B01ATF4L7I:&quot;,&quot;B0086UDO22:&quot;,&quot;B008EKSW3U:&quot;,&quot;B075FS67W7:&quot;,&quot;B07BNNJNS7:&quot;,&quot;B01AS5G7J4:&quot;,&quot;B077ZTV1V8:&quot;,&quot;B0771LYCW5:&quot;,&quot;B004GL0AWM:&quot;,&quot;B06XQFYS3H:&quot;,&quot;B07BDFS8WQ:&quot;,&quot;B071FJ3MPC:&quot;,&quot;B07121XXDJ:&quot;,&quot;B076GXRH2J:&quot;,&quot;B075D4SM2V:&quot;,&quot;B072BNNM4M:&quot;,&quot;B07K3VJXJN:&quot;,&quot;B000GWBMUY:&quot;,&quot;B009CKD8EE:&quot;,&quot;B07585578V:&quot;,&quot;B00PDI8R7W:&quot;,&quot;B01IT3AKQI:&quot;,&quot;B00ZZQAQVW:&quot;,&quot;B07G8YT28F:&quot;,&quot;B004DNR4Q8:&quot;,&quot;B00P1AP0YU:&quot;,&quot;B079BNFBWC:&quot;,&quot;B00LISLV4C:&quot;,&quot;B07DX6CY48:&quot;,&quot;B076LRTSYW:&quot;,&quot;B00I97AQ5U:&quot;,&quot;B00GMM8AXE:&quot;,&quot;B018457T4W:&quot;,&quot;B01IPRPI1U:&quot;,&quot;B007XF04ZG:&quot;,&quot;B00G369V0K:&quot;,&quot;B075FS86WR:&quot;,&quot;B079Q81RXW:&quot;],&quot;url&quot;:&quot;/gp/p13n-shared/faceout-partial&quot;,&quot;id_param_name&quot;:&quot;asins&quot;},&quot;baseAsin&quot;:&quot;B01DQDZVCO&quot;,&quot;name&quot;:&quot;desktop-dp-sims_session-similarities-esp-SIMS-CP-INFLUENCED-DESKTOP-SIMS-166502&quot;,&quot;set_size&quot;:54}" data-p13n-feature-metadata="{&quot;baseAsin&quot;:&quot;B01DQDZVCO&quot;,&quot;pd_rd_wg&quot;:&quot;KlAC1&quot;,&quot;pd_rd_r&quot;:&quot;1ed1331c-0e06-11e9-ab4f-0333a0e7098d&quot;,&quot;pf_rd_r&quot;:&quot;VBWKFM73Q96291SQHAHK&quot;,&quot;pf_rd_p&quot;:&quot;823c2db5-0a4d-474e-99ed-5858cc6a4d7b&quot;,&quot;pd_rd_w&quot;:&quot;u2uPF&quot;}" data-p13n-feature-name="pd_sbs_201" data-p13n-global="{&quot;auiDeviceType&quot;:&quot;desktop&quot;,&quot;marketplaceId&quot;:&quot;A1PA6795UKMFR9&quot;,&quot;requestId&quot;:&quot;VBWKFM73Q96291SQHAHK&quot;,&quot;marketplace&quot;:&quot;DE&quot;,&quot;customerId&quot;:&quot;A96YKT37ODSSG&quot;,&quot;session&quot;:&quot;262-9898842-9713804&quot;}" data-a-display-strategy="swap" data-a-transition-strategy="swap" data-a-class="desktop" class="a-begin a-carousel-container a-carousel-static a-carousel-display-swap a-carousel-transition-swap similarities-aui-carousel p13n-sc-carousel"><input autocomplete="on" type="hidden" class="a-carousel-firstvisibleitem">
            <div class="a-row a-carousel-header-row a-size-large"><div class="a-column a-span8"><h2 class="a-carousel-heading">Kunden, die diesen Artikel angesehen haben, haben auch angesehen</h2></div><div class="a-column a-span4 a-span-last a-text-right"><span class="a-carousel-pagination a-size-base"><span class="a-carousel-page-count">Seite <span class="a-carousel-page-current">1</span> von <span class="a-carousel-page-max">1</span>  </span><span class="a-carousel-restart-container"><span class="a-text-separator"></span><a class="a-carousel-restart" href="#">Zum Anfang</a></span><span class="a-carousel-accessibility-page-info a-offscreen" aria-live="polite">Seite 1 von 1  </span></span></div></div>
            <span class="aok-offscreen p13n-sc-offscreen">Diese Einkaufsfunktion wird weiterhin Artikel laden. Um aus diesem Karussell zu navigieren, benutzen Sie bitte Ihre Überschrift-Tastenkombination, um zur nächsten oder vorherigen Überschrift zu navigieren.</span>
            
            <div class="a-row a-carousel-controls a-carousel-row a-carousel-has-buttons"><div class="a-carousel-row-inner"><div class="a-carousel-col a-carousel-left"><a class="a-button a-button-image a-carousel-button a-carousel-goto-prevpage" tabindex="0" href="#"><span class="a-button-inner"><i class="a-icon a-icon-previous"><span class="a-icon-alt">Zurück</span></i></span></a></div><div class="a-carousel-col a-carousel-center"><div class="a-carousel-viewport"><ol class="a-carousel" role="list">
                <li class="a-carousel-card a-float-left" role="listitem">
        <div data-p13n-asin-metadata="{&quot;ref&quot;:&quot;pd_sbs_201_1&quot;,&quot;asin&quot;:&quot;B0727X3NXC&quot;}" class="a-section a-spacing-none p13n-asin">
            <a class="a-link-normal" href="/Aussenbereich-kleiderwandhaken-Kleiderst%C3%A4nder-Garderobenhaken-W%C3%A4schetrockner/dp/B0727X3NXC/ref=pd_sbs_201_1?_encoding=UTF8&pd_rd_i=B0727X3NXC&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=u2uPF&pd_rd_wg=KlAC1&pf_rd_p=823c2db5-0a4d-474e-99ed-5858cc6a4d7b&pf_rd_r=VBWKFM73Q96291SQHAHK&psc=1&refRID=VBWKFM73Q96291SQHAHK"><div class="a-section a-spacing-mini"><img alt="XY Life Kleiderhaken Klappbar Aussenbereich Klapphaken kleiderwandhaken Wäschelüfter Wand haken Kleiderständer Wandhaken Kleiderlüfter Garderobenhaken für Ecken, Balkon, Wäschetrockner, Bäder, Silber" src="https://images-na.ssl-images-amazon.com/images/I/614rN5nvzEL._AC_UL160_SR160,160_.jpg" class="a-dynamic-image p13n-sc-dynamic-image" height="160" width="160" data-a-dynamic-image="{&quot;https://images-na.ssl-images-amazon.com/images/I/614rN5nvzEL._AC_UL320_SR320,320_.jpg&quot;:[320,320],&quot;https://images-na.ssl-images-amazon.com/images/I/614rN5nvzEL._AC_UL480_SR480,480_.jpg&quot;:[480,480],&quot;https://images-na.ssl-images-amazon.com/images/I/614rN5nvzEL._AC_UL160_SR160,160_.jpg&quot;:[160,160]}"></div>
        <div class="p13n-sc-truncate p13n-sc-line-clamp-4" aria-hidden="true" data-rows="4">
            XY Life Kleiderhaken Klappbar Aussenbereich Klapphaken kleiderwandhaken W&auml;schel&uuml;fter Wand haken Kleiderst&auml;nder Wandhaken Kleiderl&uuml;fter Garderobenhaken f&uuml;r Ecken, Balkon, W&auml;schetrockner, B&auml;der, Silber
        </div>
    </a>
            
        <div class="a-icon-row a-spacing-none">
            <a class="a-link-normal" title="4,4 von 5 Sternen" href="/product-reviews/B0727X3NXC/ref=pd_sbs_201_cr_1?ie=UTF8&pd_rd_i=B0727X3NXC&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=u2uPF&pd_rd_wg=KlAC1&pf_rd_p=823c2db5-0a4d-474e-99ed-5858cc6a4d7b&pf_rd_r=VBWKFM73Q96291SQHAHK&refRID=VBWKFM73Q96291SQHAHK">
                <i class="a-icon a-icon-star a-star-4-5"><span class="a-icon-alt">4,4 von 5 Sternen</span></i>
            </a>
            <a class="a-size-small a-link-normal" href="/product-reviews/B0727X3NXC/ref=pd_sbs_201_cr_1?ie=UTF8&pd_rd_i=B0727X3NXC&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=u2uPF&pd_rd_wg=KlAC1&pf_rd_p=823c2db5-0a4d-474e-99ed-5858cc6a4d7b&pf_rd_r=VBWKFM73Q96291SQHAHK&refRID=VBWKFM73Q96291SQHAHK">89</a>
        </div>
    <div class="a-row"><a class="a-link-normal a-text-normal" href="/Aussenbereich-kleiderwandhaken-Kleiderst%C3%A4nder-Garderobenhaken-W%C3%A4schetrockner/dp/B0727X3NXC/ref=pd_sbs_201_1?_encoding=UTF8&pd_rd_i=B0727X3NXC&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=u2uPF&pd_rd_wg=KlAC1&pf_rd_p=823c2db5-0a4d-474e-99ed-5858cc6a4d7b&pf_rd_r=VBWKFM73Q96291SQHAHK&psc=1&refRID=VBWKFM73Q96291SQHAHK"><span class="a-size-base a-color-price"><span class='p13n-sc-price'>EUR 10,99</span></span></a>   <span style="position: relative; top: 2px;"><i class="a-icon a-icon-prime a-icon-small" role="img" aria-label="Prime"></i></span></div>
        </div>
    </li><li class="a-carousel-card a-float-left" role="listitem">
        <div data-p13n-asin-metadata="{&quot;ref&quot;:&quot;pd_sbs_201_2&quot;,&quot;asin&quot;:&quot;B075JBPXN1&quot;}" class="a-section a-spacing-none p13n-asin">
            <a class="a-link-normal" href="/WINOMO-Kleiderhaken-Klappbar-Wand-Kleiderst%C3%A4nder-2/dp/B075JBPXN1/ref=pd_sbs_201_2?_encoding=UTF8&pd_rd_i=B075JBPXN1&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=u2uPF&pd_rd_wg=KlAC1&pf_rd_p=823c2db5-0a4d-474e-99ed-5858cc6a4d7b&pf_rd_r=VBWKFM73Q96291SQHAHK&psc=1&refRID=VBWKFM73Q96291SQHAHK"><div class="a-section a-spacing-mini"><img alt="WINOMO Kleiderhaken Klappbar Wand-Kleiderständer (2)" src="https://images-na.ssl-images-amazon.com/images/I/61Vj4cLPwKL._AC_UL160_SR160,160_.jpg" class="a-dynamic-image p13n-sc-dynamic-image" height="160" width="160" data-a-dynamic-image="{&quot;https://images-na.ssl-images-amazon.com/images/I/61Vj4cLPwKL._AC_UL480_SR480,480_.jpg&quot;:[480,480],&quot;https://images-na.ssl-images-amazon.com/images/I/61Vj4cLPwKL._AC_UL160_SR160,160_.jpg&quot;:[160,160],&quot;https://images-na.ssl-images-amazon.com/images/I/61Vj4cLPwKL._AC_UL320_SR320,320_.jpg&quot;:[320,320]}"></div>
        <div class="p13n-sc-truncate p13n-sc-line-clamp-4" aria-hidden="true" data-rows="4">
            WINOMO Kleiderhaken Klappbar Wand-Kleiderst&auml;nder (2)
        </div>
    </a>
            
        <div class="a-icon-row a-spacing-none">
            <a class="a-link-normal" title="4,6 von 5 Sternen" href="/product-reviews/B075JBPXN1/ref=pd_sbs_201_cr_2?ie=UTF8&pd_rd_i=B075JBPXN1&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=u2uPF&pd_rd_wg=KlAC1&pf_rd_p=823c2db5-0a4d-474e-99ed-5858cc6a4d7b&pf_rd_r=VBWKFM73Q96291SQHAHK&refRID=VBWKFM73Q96291SQHAHK">
                <i class="a-icon a-icon-star a-star-4-5"><span class="a-icon-alt">4,6 von 5 Sternen</span></i>
            </a>
            <a class="a-size-small a-link-normal" href="/product-reviews/B075JBPXN1/ref=pd_sbs_201_cr_2?ie=UTF8&pd_rd_i=B075JBPXN1&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=u2uPF&pd_rd_wg=KlAC1&pf_rd_p=823c2db5-0a4d-474e-99ed-5858cc6a4d7b&pf_rd_r=VBWKFM73Q96291SQHAHK&refRID=VBWKFM73Q96291SQHAHK">14</a>
        </div>
    <div class="a-row"><a class="a-link-normal a-text-normal" href="/WINOMO-Kleiderhaken-Klappbar-Wand-Kleiderst%C3%A4nder-2/dp/B075JBPXN1/ref=pd_sbs_201_2?_encoding=UTF8&pd_rd_i=B075JBPXN1&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=u2uPF&pd_rd_wg=KlAC1&pf_rd_p=823c2db5-0a4d-474e-99ed-5858cc6a4d7b&pf_rd_r=VBWKFM73Q96291SQHAHK&psc=1&refRID=VBWKFM73Q96291SQHAHK"><span class="a-size-base a-color-price"><span class='p13n-sc-price'>EUR 22,99</span></span></a>   <span style="position: relative; top: 2px;"><i class="a-icon a-icon-prime a-icon-small" role="img" aria-label="Prime"></i></span></div>
        </div>
    </li><li class="a-carousel-card a-float-left" role="listitem">
        <div data-p13n-asin-metadata="{&quot;ref&quot;:&quot;pd_sbs_201_3&quot;,&quot;asin&quot;:&quot;B06WWJLRTP&quot;}" class="a-section a-spacing-none p13n-asin">
            <a class="a-link-normal" href="/Mture-Wand-Kleiderst%C3%A4nder-Garderobenhaken-Kleiderl%C3%BCfter-Wandgarderobe/dp/B06WWJLRTP/ref=pd_sbs_201_3?_encoding=UTF8&pd_rd_i=B06WWJLRTP&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=u2uPF&pd_rd_wg=KlAC1&pf_rd_p=823c2db5-0a4d-474e-99ed-5858cc6a4d7b&pf_rd_r=VBWKFM73Q96291SQHAHK&psc=1&refRID=VBWKFM73Q96291SQHAHK"><div class="a-section a-spacing-mini"><img alt="Mture Klappbar Wand-Kleiderständer, Kleiderhaken Garderobenhaken Kleiderlüfter Wandgarderobe Geeignet für Wohnzimmer, Bad, Schlafzimmer, Büro, Silber 40 x 33 x 30CM (2 pcs)" src="https://images-na.ssl-images-amazon.com/images/I/71dFpkYA-qL._AC_UL160_SR160,160_.jpg" class="a-dynamic-image p13n-sc-dynamic-image" height="160" width="160" data-a-dynamic-image="{&quot;https://images-na.ssl-images-amazon.com/images/I/71dFpkYA-qL._AC_UL320_SR320,320_.jpg&quot;:[320,320],&quot;https://images-na.ssl-images-amazon.com/images/I/71dFpkYA-qL._AC_UL160_SR160,160_.jpg&quot;:[160,160],&quot;https://images-na.ssl-images-amazon.com/images/I/71dFpkYA-qL._AC_UL480_SR480,480_.jpg&quot;:[480,480]}"></div>
        <div class="p13n-sc-truncate p13n-sc-line-clamp-4" aria-hidden="true" data-rows="4">
            Mture Klappbar Wand-Kleiderst&auml;nder, Kleiderhaken Garderobenhaken Kleiderl&uuml;fter Wandgarderobe Geeignet f&uuml;r Wohnzimmer, Bad, Schlafzimmer, B&uuml;ro, Silber 40 x 33 x 30CM (2 pcs)
        </div>
    </a>
            
        <div class="a-icon-row a-spacing-none">
            <a class="a-link-normal" title="3,9 von 5 Sternen" href="/product-reviews/B06WWJLRTP/ref=pd_sbs_201_cr_3?ie=UTF8&pd_rd_i=B06WWJLRTP&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=u2uPF&pd_rd_wg=KlAC1&pf_rd_p=823c2db5-0a4d-474e-99ed-5858cc6a4d7b&pf_rd_r=VBWKFM73Q96291SQHAHK&refRID=VBWKFM73Q96291SQHAHK">
                <i class="a-icon a-icon-star a-star-4"><span class="a-icon-alt">3,9 von 5 Sternen</span></i>
            </a>
            <a class="a-size-small a-link-normal" href="/product-reviews/B06WWJLRTP/ref=pd_sbs_201_cr_3?ie=UTF8&pd_rd_i=B06WWJLRTP&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=u2uPF&pd_rd_wg=KlAC1&pf_rd_p=823c2db5-0a4d-474e-99ed-5858cc6a4d7b&pf_rd_r=VBWKFM73Q96291SQHAHK&refRID=VBWKFM73Q96291SQHAHK">42</a>
        </div>
    <div class="a-row"><a class="a-link-normal a-text-normal" href="/Mture-Wand-Kleiderst%C3%A4nder-Garderobenhaken-Kleiderl%C3%BCfter-Wandgarderobe/dp/B06WWJLRTP/ref=pd_sbs_201_3?_encoding=UTF8&pd_rd_i=B06WWJLRTP&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=u2uPF&pd_rd_wg=KlAC1&pf_rd_p=823c2db5-0a4d-474e-99ed-5858cc6a4d7b&pf_rd_r=VBWKFM73Q96291SQHAHK&psc=1&refRID=VBWKFM73Q96291SQHAHK"><span class="a-size-base a-color-price"><span class='p13n-sc-price'>EUR 18,99</span></span></a> <a class="a-link-normal a-text-normal" href="/Mture-Wand-Kleiderst%C3%A4nder-Garderobenhaken-Kleiderl%C3%BCfter-Wandgarderobe/dp/B06WWJLRTP/ref=pd_sbs_201_3?_encoding=UTF8&pd_rd_i=B06WWJLRTP&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=u2uPF&pd_rd_wg=KlAC1&pf_rd_p=823c2db5-0a4d-474e-99ed-5858cc6a4d7b&pf_rd_r=VBWKFM73Q96291SQHAHK&psc=1&refRID=VBWKFM73Q96291SQHAHK"><span class="a-size-mini a-color-price aok-nowrap"><span class='p13n-sc-price'>(EUR 9,50 / Stück)</span></span></a>  <span style="position: relative; top: 2px;"><i class="a-icon a-icon-prime a-icon-small" role="img" aria-label="Prime"></i></span></div>
        </div>
    </li><li class="a-carousel-card a-float-left" role="listitem">
        <div data-p13n-asin-metadata="{&quot;ref&quot;:&quot;pd_sbs_201_4&quot;,&quot;asin&quot;:&quot;B00GVAPS4Q&quot;}" class="a-section a-spacing-none p13n-asin">
            <a class="a-link-normal" href="/Element-System-Kleiderl%C3%BCfter-Kleiderstange-11202-00003/dp/B00GVAPS4Q/ref=pd_sbs_201_4?_encoding=UTF8&pd_rd_i=B00GVAPS4Q&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=u2uPF&pd_rd_wg=KlAC1&pf_rd_p=823c2db5-0a4d-474e-99ed-5858cc6a4d7b&pf_rd_r=VBWKFM73Q96291SQHAHK&psc=1&refRID=VBWKFM73Q96291SQHAHK"><div class="a-section a-spacing-mini"><img alt="Element System Kleiderlüfter Laura für Wand, Kleiderstange zur Wandmontage klappbar, inklusive Schrauben und Dübel, Kleiderhaken weiß, 11202-00003" src="https://images-na.ssl-images-amazon.com/images/I/71-DLTjxwpL._AC_UL160_SR160,160_.jpg" class="a-dynamic-image p13n-sc-dynamic-image" height="160" width="160" data-a-dynamic-image="{&quot;https://images-na.ssl-images-amazon.com/images/I/71-DLTjxwpL._AC_UL320_SR320,320_.jpg&quot;:[320,320],&quot;https://images-na.ssl-images-amazon.com/images/I/71-DLTjxwpL._AC_UL480_SR480,480_.jpg&quot;:[480,480],&quot;https://images-na.ssl-images-amazon.com/images/I/71-DLTjxwpL._AC_UL160_SR160,160_.jpg&quot;:[160,160]}"></div>
        <div class="p13n-sc-truncate p13n-sc-line-clamp-4" aria-hidden="true" data-rows="4">
            Element System Kleiderl&uuml;fter Laura f&uuml;r Wand, Kleiderstange zur Wandmontage klappbar, inklusive Schrauben und D&uuml;bel, Kleiderhaken wei&szlig;, 11202-00003
        </div>
    </a>
            
        <div class="a-icon-row a-spacing-none">
            <a class="a-link-normal" title="4,3 von 5 Sternen" href="/product-reviews/B00GVAPS4Q/ref=pd_sbs_201_cr_4?ie=UTF8&pd_rd_i=B00GVAPS4Q&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=u2uPF&pd_rd_wg=KlAC1&pf_rd_p=823c2db5-0a4d-474e-99ed-5858cc6a4d7b&pf_rd_r=VBWKFM73Q96291SQHAHK&refRID=VBWKFM73Q96291SQHAHK">
                <i class="a-icon a-icon-star a-star-4-5"><span class="a-icon-alt">4,3 von 5 Sternen</span></i>
            </a>
            <a class="a-size-small a-link-normal" href="/product-reviews/B00GVAPS4Q/ref=pd_sbs_201_cr_4?ie=UTF8&pd_rd_i=B00GVAPS4Q&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=u2uPF&pd_rd_wg=KlAC1&pf_rd_p=823c2db5-0a4d-474e-99ed-5858cc6a4d7b&pf_rd_r=VBWKFM73Q96291SQHAHK&refRID=VBWKFM73Q96291SQHAHK">92</a>
        </div>
    <div class="a-row"><a class="a-link-normal a-text-normal" href="/Element-System-Kleiderl%C3%BCfter-Kleiderstange-11202-00003/dp/B00GVAPS4Q/ref=pd_sbs_201_4?_encoding=UTF8&pd_rd_i=B00GVAPS4Q&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=u2uPF&pd_rd_wg=KlAC1&pf_rd_p=823c2db5-0a4d-474e-99ed-5858cc6a4d7b&pf_rd_r=VBWKFM73Q96291SQHAHK&psc=1&refRID=VBWKFM73Q96291SQHAHK"><span class="a-size-base a-color-price"><span class='p13n-sc-price'>EUR 6,30</span></span></a>   </div>
        </div>
    </li><li class="a-carousel-card a-float-left" role="listitem">
        <div data-p13n-asin-metadata="{&quot;ref&quot;:&quot;pd_sbs_201_5&quot;,&quot;asin&quot;:&quot;B074C4HWSB&quot;}" class="a-section a-spacing-none p13n-asin">
            <a class="a-link-normal" href="/hblife-Wand-Kleiderst%C3%A4nder-Kleiderl%C3%BCfter-Wandgarderobe-Garderobenhaken/dp/B074C4HWSB/ref=pd_sbs_201_5?_encoding=UTF8&pd_rd_i=B074C4HWSB&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=u2uPF&pd_rd_wg=KlAC1&pf_rd_p=823c2db5-0a4d-474e-99ed-5858cc6a4d7b&pf_rd_r=VBWKFM73Q96291SQHAHK&psc=1&refRID=VBWKFM73Q96291SQHAHK"><div class="a-section a-spacing-mini"><img alt="hblife Kleiderhaken Klappbar Wand-Kleiderständer Kleiderlüfter Wandgarderobe Garderobenhaken Aluminium für Wohnzimmer, Bad, Schlafzimmer, Büro, Silber Edelstahl Tube faltende" src="https://images-na.ssl-images-amazon.com/images/I/71-O2%2BhcvuL._AC_UL160_SR160,160_.jpg" class="a-dynamic-image p13n-sc-dynamic-image" height="160" width="160" data-a-dynamic-image="{&quot;https://images-na.ssl-images-amazon.com/images/I/71-O2%2BhcvuL._AC_UL480_SR480,480_.jpg&quot;:[480,480],&quot;https://images-na.ssl-images-amazon.com/images/I/71-O2%2BhcvuL._AC_UL320_SR320,320_.jpg&quot;:[320,320],&quot;https://images-na.ssl-images-amazon.com/images/I/71-O2%2BhcvuL._AC_UL160_SR160,160_.jpg&quot;:[160,160]}"></div>
        <div class="p13n-sc-truncate p13n-sc-line-clamp-4" aria-hidden="true" data-rows="4">
            hblife Kleiderhaken Klappbar Wand-Kleiderst&auml;nder Kleiderl&uuml;fter Wandgarderobe Garderobenhaken Aluminium f&uuml;r Wohnzimmer, Bad, Schlafzimmer, B&uuml;ro, Silber Edelstahl Tube faltende
        </div>
    </a>
            
        <div class="a-icon-row a-spacing-none">
            <a class="a-link-normal" title="4,2 von 5 Sternen" href="/product-reviews/B074C4HWSB/ref=pd_sbs_201_cr_5?ie=UTF8&pd_rd_i=B074C4HWSB&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=u2uPF&pd_rd_wg=KlAC1&pf_rd_p=823c2db5-0a4d-474e-99ed-5858cc6a4d7b&pf_rd_r=VBWKFM73Q96291SQHAHK&refRID=VBWKFM73Q96291SQHAHK">
                <i class="a-icon a-icon-star a-star-4"><span class="a-icon-alt">4,2 von 5 Sternen</span></i>
            </a>
            <a class="a-size-small a-link-normal" href="/product-reviews/B074C4HWSB/ref=pd_sbs_201_cr_5?ie=UTF8&pd_rd_i=B074C4HWSB&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=u2uPF&pd_rd_wg=KlAC1&pf_rd_p=823c2db5-0a4d-474e-99ed-5858cc6a4d7b&pf_rd_r=VBWKFM73Q96291SQHAHK&refRID=VBWKFM73Q96291SQHAHK">6</a>
        </div>
    <div class="a-row"><a class="a-link-normal a-text-normal" href="/hblife-Wand-Kleiderst%C3%A4nder-Kleiderl%C3%BCfter-Wandgarderobe-Garderobenhaken/dp/B074C4HWSB/ref=pd_sbs_201_5?_encoding=UTF8&pd_rd_i=B074C4HWSB&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=u2uPF&pd_rd_wg=KlAC1&pf_rd_p=823c2db5-0a4d-474e-99ed-5858cc6a4d7b&pf_rd_r=VBWKFM73Q96291SQHAHK&psc=1&refRID=VBWKFM73Q96291SQHAHK"><span class="a-size-base a-color-price"><span class='p13n-sc-price'>EUR 17,99</span></span></a>   <span style="position: relative; top: 2px;"><i class="a-icon a-icon-prime a-icon-small" role="img" aria-label="Prime"></i></span></div>
        </div>
    </li><li class="a-carousel-card a-float-left" role="listitem">
        <div data-p13n-asin-metadata="{&quot;ref&quot;:&quot;pd_sbs_201_6&quot;,&quot;asin&quot;:&quot;B01DUZM3PG&quot;}" class="a-section a-spacing-none p13n-asin">
            <a class="a-link-normal" href="/Gedotec-Wand-Klapphaken-Garderobenhaken-Kleiderl%C3%BCfter-Kleiderhaken/dp/B01DUZM3PG/ref=pd_sbs_201_6?_encoding=UTF8&pd_rd_i=B01DUZM3PG&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=u2uPF&pd_rd_wg=KlAC1&pf_rd_p=823c2db5-0a4d-474e-99ed-5858cc6a4d7b&pf_rd_r=VBWKFM73Q96291SQHAHK&psc=1&refRID=VBWKFM73Q96291SQHAHK"><div class="a-section a-spacing-mini"><img alt="Gedotec Wand-Klapphaken Garderobenhaken Kleiderlüfter Kleiderhaken klappbar MITAL zum Einlassen | 140 x 16/128 mm | Chrom matt | 1 Stück - Wandgarderobe klappbar" src="https://images-na.ssl-images-amazon.com/images/I/71jbOLCupjL._AC_UL160_SR160,160_.jpg" class="a-dynamic-image p13n-sc-dynamic-image" height="160" width="160" data-a-dynamic-image="{&quot;https://images-na.ssl-images-amazon.com/images/I/71jbOLCupjL._AC_UL480_SR480,480_.jpg&quot;:[480,480],&quot;https://images-na.ssl-images-amazon.com/images/I/71jbOLCupjL._AC_UL160_SR160,160_.jpg&quot;:[160,160],&quot;https://images-na.ssl-images-amazon.com/images/I/71jbOLCupjL._AC_UL320_SR320,320_.jpg&quot;:[320,320]}"></div>
        <div class="p13n-sc-truncate p13n-sc-line-clamp-4" aria-hidden="true" data-rows="4">
            Gedotec Wand-Klapphaken Garderobenhaken Kleiderl&uuml;fter Kleiderhaken klappbar MITAL zum Einlassen | 140 x 16/128 mm | Chrom matt | 1 St&uuml;ck - Wandgarderobe klappbar
        </div>
    </a>
            
        <div class="a-icon-row a-spacing-none">
            <a class="a-link-normal" title="4,4 von 5 Sternen" href="/product-reviews/B01DUZM3PG/ref=pd_sbs_201_cr_6?ie=UTF8&pd_rd_i=B01DUZM3PG&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=u2uPF&pd_rd_wg=KlAC1&pf_rd_p=823c2db5-0a4d-474e-99ed-5858cc6a4d7b&pf_rd_r=VBWKFM73Q96291SQHAHK&refRID=VBWKFM73Q96291SQHAHK">
                <i class="a-icon a-icon-star a-star-4-5"><span class="a-icon-alt">4,4 von 5 Sternen</span></i>
            </a>
            <a class="a-size-small a-link-normal" href="/product-reviews/B01DUZM3PG/ref=pd_sbs_201_cr_6?ie=UTF8&pd_rd_i=B01DUZM3PG&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=u2uPF&pd_rd_wg=KlAC1&pf_rd_p=823c2db5-0a4d-474e-99ed-5858cc6a4d7b&pf_rd_r=VBWKFM73Q96291SQHAHK&refRID=VBWKFM73Q96291SQHAHK">63</a>
        </div>
    <div class="a-row"><a class="a-link-normal a-text-normal" href="/Gedotec-Wand-Klapphaken-Garderobenhaken-Kleiderl%C3%BCfter-Kleiderhaken/dp/B01DUZM3PG/ref=pd_sbs_201_6?_encoding=UTF8&pd_rd_i=B01DUZM3PG&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=u2uPF&pd_rd_wg=KlAC1&pf_rd_p=823c2db5-0a4d-474e-99ed-5858cc6a4d7b&pf_rd_r=VBWKFM73Q96291SQHAHK&psc=1&refRID=VBWKFM73Q96291SQHAHK"><span class="a-size-base a-color-price"><span class='p13n-sc-price'>EUR 9,50</span></span></a>   </div>
        </div>
    </li>
            </ol></div></div><div class="a-carousel-col a-carousel-right"><a class="a-button a-button-image a-carousel-button a-carousel-goto-nextpage" tabindex="0" href="#"><span class="a-button-inner"><i class="a-icon a-icon-next"><span class="a-icon-alt">Weiter</span></i></span></a></div></div></div>
            
        <span class="a-end aok-hidden"></span></div>
    
                </div>
                
                
                
            </div>
        
        </div>
    
    














    
    



  



        
        
        
        
  









        












<div id="HLCXComparisonWidget_feature_div" class="feature" data-feature-name="HLCXComparisonWidget">
         
     




    

    
    
    
        
            
                
	                
	                
	                	







  






    
        

            
                



 
 
 

 
 





        
            <hr class="a-divider-normal">
            <h2 id="comparison_table_title" class="a-color-state a-text-left a-text-bold">
            Mit &auml;hnlichen Produkten vergleichen</h2>
            <br>
        


        <table id="HLCXComparisonTable" class="a-bordered a-horizontal-stripes  a-spacing-extra-large a-size-base comparison_table">



            
            
            
            
            
            <tr class="comparison_table_image_row">
                <td class="comparison_table_first_col"></td>


                <th class="comparison_image_title_cell" role="columnheader">
                    <div class="a-row a-spacing-top-micro">
                        <center>
                             <img alt="WINOMO Kleiderhaken Klappbar Wand-Kleiderständer" src="https://images-eu.ssl-images-amazon.com/images/I/61PbuwxxQ-L._AC_SS350_.jpg" id="comparison_image">
                        </center>
                    </div>
                    <div class="a-row a-spacing-top-small">
                        <div id="comparison_title" class="a-section a-spacing-none">
                            <span aria-hidden="true" class="a-size-base a-color-base a-text-bold">
                                Dieser Artikel
                            </span>
                            <span aria-hidden="true" class="a-size-base a-color-base">WINOMO Kleiderhaken Klappbar Wand-Kleiderständer</span>
                        </div>
                        
                        
                    </div>
                </th>


                
                    <th class="comparison_image_title_cell comparable_item0" role="columnheader">
                        <a class="a-link-normal" target="_self" rel="noopener" href="/dp/B075JBPXN1/ref=psdc_3437567031_t1_B01DQDZVCO">
                          <div class="a-row a-spacing-top-micro">
                            <center>
                                <img alt="" src="https://images-eu.ssl-images-amazon.com/images/I/61Vj4cLPwKL._AC_SS350_.jpg" aria-hidden="true" id="comparison_image0">
                            </center>
                          </div>
                          <div id="comparison_title0" class="a-row a-spacing-top-small">
                            <span class="a-size-base">WINOMO Kleiderhaken Klappbar Wand-Kleiderständer (2)</span>
                          </div>
                        </a>
                        
                        
                    </th>
                
                    <th class="comparison_image_title_cell comparable_item1" role="columnheader">
                        <a class="a-link-normal" target="_self" rel="noopener" href="/dp/B074FRN2KG/ref=psdc_3437567031_t2_B01DQDZVCO">
                          <div class="a-row a-spacing-top-micro">
                            <center>
                                <img alt="" src="https://images-eu.ssl-images-amazon.com/images/I/61+wdVC4fKL._AC_SS350_.jpg" aria-hidden="true" id="comparison_image1">
                            </center>
                          </div>
                          <div id="comparison_title1" class="a-row a-spacing-top-small">
                            <span class="a-size-base">eBasic Wand Kleiderständer Kleiderhaken Klappbar Garderobenhaken Wandgarderobe Kleiderlüfter Raumsparend für Wohnzimmer Bad Schlafzimmer Büro Balkon Garderobe</span>
                          </div>
                        </a>
                        
                        
                    </th>
                
                    <th class="comparison_image_title_cell comparable_item2" role="columnheader">
                        <a class="a-link-normal" target="_self" rel="noopener" href="/dp/B077ZTV1V8/ref=psdc_3437567031_t3_B01DQDZVCO">
                          <div class="a-row a-spacing-top-micro">
                            <center>
                                <img alt="" src="https://images-eu.ssl-images-amazon.com/images/I/318LA2G6EZL._AC_SS350_.jpg" aria-hidden="true" id="comparison_image2">
                            </center>
                          </div>
                          <div id="comparison_title2" class="a-row a-spacing-top-small">
                            <span class="a-size-base">Nopea Klappbarer Kleiderhaken Klapphaken Kleiderständer Haken Wandhaken Kleiderlüfter Garderobenhaken für kleine Räume Ecken Bäder Silber</span>
                          </div>
                        </a>
                        
                        
                    </th>
                
            </tr>


            <tr></tr>


            
            
            <tr>
                <td class="comparison_table_first_col"></td>


                <td class="comparison_add_to_cart_button">
                    
                        
                        
                        
                            <span id="comparison_add_to_cart_button" class="a-button a-spacing-small a-button-primary"><span class="a-button-inner"><a id="comparison_add_to_cart_button-announce" href="/gp/item-dispatch/ref=psdc_3437567031_a0_B01DQDZVCO?ie=UTF8&amp;itemCount=1&amp;nodeID=&amp;offeringID.1=qH0bB2sXK5bk7PYYaeU%252FVEAbGHhU7UhwNxIjVgkTLML4KAhNknVE29xmgyLe36Z0C27WB8l7AX6wXiywMDUvgiP2oJY%252BSMJlVk6ZU7jWWTjS14gdrF7Ob8zSVKgG96aApcah108dc%252Bf7Y8CZl1baTfglggyew1To&amp;session-id=262-9898842-9713804&amp;submit.addToCart=addToCart&amp;signInToHUC=0" class="a-button-text" role="button">In den Einkaufswagen</a></span></span>
                        
                    
                </td>


                
                    <td class="a-text-left comparison_add_to_cart_button comparable_item0">
                        
                            
                            
                                <span id="comparison_add_to_cart_button0" class="a-button a-spacing-small a-button-primary"><span class="a-button-inner"><a id="comparison_add_to_cart_button0-announce" href="/gp/item-dispatch/ref=psdc_3437567031_a1_B01DQDZVCO?ie=UTF8&amp;itemCount=1&amp;nodeID=&amp;offeringID.1=bKUY75CZ2AfS2y16LbAZi%252BrHGoWIEslSzykH07L2FhkLybGMGv6FwU9GK2Vziq1soKMXo%252BemgP8toxUQLJE0bStDtYxC8Uu3yZxBEG5LVIDk3I%252Fsrlumb7wguRcCHaTtaATQGv8oJlBIaWezCShAHV1QWRIOV3vn&amp;session-id=262-9898842-9713804&amp;submit.addToCart=addToCart&amp;signInToHUC=0" class="a-button-text" role="button">In den Einkaufswagen</a></span></span>
                            
                        
                    </td>
                
                    <td class="a-text-left comparison_add_to_cart_button comparable_item1">
                        
                            
                            
                                <span id="comparison_add_to_cart_button1" class="a-button a-spacing-small a-button-primary"><span class="a-button-inner"><a id="comparison_add_to_cart_button1-announce" href="/gp/item-dispatch/ref=psdc_3437567031_a2_B01DQDZVCO?ie=UTF8&amp;itemCount=1&amp;nodeID=&amp;offeringID.1=GNitM8bO9yqstq74jm95vMoCwEgNv9hRl1IieM4TM344TFHDNodqtDxg%252BY7e1HUeI6AAsxzrjST3Xr%252F2cPHQ4c27T7ELedvCPZ3CMBv0FD27xmNhrHw7fFzpXEFv4Ld5RqmGAACGPYzvY1ZhD1hmLvht7m8lP0wI&amp;session-id=262-9898842-9713804&amp;submit.addToCart=addToCart&amp;signInToHUC=0" class="a-button-text" role="button">In den Einkaufswagen</a></span></span>
                            
                        
                    </td>
                
                    <td class="a-text-left comparison_add_to_cart_button comparable_item2">
                        
                            
                            
                                <span id="comparison_add_to_cart_button2" class="a-button a-spacing-small a-button-primary"><span class="a-button-inner"><a id="comparison_add_to_cart_button2-announce" href="/gp/item-dispatch/ref=psdc_3437567031_a3_B01DQDZVCO?ie=UTF8&amp;itemCount=1&amp;nodeID=&amp;offeringID.1=%252B5RaqSCADng9RsWplEcuHkitHhAPyuXMDsIXfLviHQiUMrxQmPGOML%252BS3OdYLDUDp%252BvxrgFjEQbM%252Bva37E2uahn20sMaXPaHWtyFZy%252F5nozDsxIUD%252FxMYIDjs15wk%252BpUTnp3wxJcFBjAg%252BSr%252ByKuU6F15zhIogU3&amp;session-id=262-9898842-9713804&amp;submit.addToCart=addToCart&amp;signInToHUC=0" class="a-button-text" role="button">In den Einkaufswagen</a></span></span>
                            
                        
                    </td>
                
            </tr>


            <tr id="comparison_custormer_rating_row">
                
                
                
                

                <th class="comparison_attribute_name_column comparison_table_first_col" role="rowheader">
                    <span class="a-size-base a-color-base">Kundenbewertung</span>
                </th>


                <td class="comparison_baseitem_column">
                    
                    
                    
                    <span>
                        <span class="a-declarative" data-action="a-popover" data-a-popover="{&quot;max-width&quot;:&quot;700&quot;,&quot;closeButton&quot;:&quot;false&quot;,&quot;position&quot;:&quot;triggerBottom&quot;,&quot;url&quot;:&quot; /gp/customer-reviews/widgets/average-customer-review/popover/ref=acr_dpComparsion__popover?contextId=dpComparsion&amp;asin=B01DQDZVCO &quot;,&quot;restoreFocusOnHide&quot;:&quot;false&quot;}">
                            <i class="a-icon a-icon-star a-star-4-5 a-spacing-none"><span class="a-icon-alt">4 von 5 Sternen</span></i>
                        </span>
                        <a class="a-link-normal" target="_self" rel="noopener" href="/product-reviews/B01DQDZVCO/ref=psdc_3437567031_r0_B01DQDZVCO?_encoding=UTF8&amp;showViewpoints=1">(110)</a>
                        <span class="a-letter-space"></span>
                    </span>
                </td>


                
                    <td class="comparison_sim_items_column comparable_item0">
                        
                        
                        
                        <span>
                            <span class="a-declarative" data-action="a-popover" data-a-popover="{&quot;max-width&quot;:&quot;700&quot;,&quot;closeButton&quot;:&quot;false&quot;,&quot;position&quot;:&quot;triggerBottom&quot;,&quot;url&quot;:&quot; /gp/customer-reviews/widgets/average-customer-review/popover/ref=acr_dpComparsion__popover?contextId=dpComparsion&amp;asin=B075JBPXN1 &quot;,&quot;restoreFocusOnHide&quot;:&quot;false&quot;}">
                                <i class="a-icon a-icon-star a-star-4-5 a-spacing-none"><span class="a-icon-alt">4 von 5 Sternen</span></i>
                            </span>
                            <a class="a-link-normal" target="_self" rel="noopener" href="/product-reviews/B075JBPXN1/ref=psdc_3437567031_r1_B01DQDZVCO?_encoding=UTF8&amp;showViewpoints=1">(14)</a>
                            <span class="a-letter-space"></span>
                        </span>
                    </td>
                
                    <td class="comparison_sim_items_column comparable_item1">
                        
                        
                        
                        <span>
                            <span class="a-declarative" data-action="a-popover" data-a-popover="{&quot;max-width&quot;:&quot;700&quot;,&quot;closeButton&quot;:&quot;false&quot;,&quot;position&quot;:&quot;triggerBottom&quot;,&quot;url&quot;:&quot; /gp/customer-reviews/widgets/average-customer-review/popover/ref=acr_dpComparsion__popover?contextId=dpComparsion&amp;asin=B074FRN2KG &quot;,&quot;restoreFocusOnHide&quot;:&quot;false&quot;}">
                                <i class="a-icon a-icon-star a-star-5 a-spacing-none"><span class="a-icon-alt">5 von 5 Sternen</span></i>
                            </span>
                            <a class="a-link-normal" target="_self" rel="noopener" href="/product-reviews/B074FRN2KG/ref=psdc_3437567031_r2_B01DQDZVCO?_encoding=UTF8&amp;showViewpoints=1">(3)</a>
                            <span class="a-letter-space"></span>
                        </span>
                    </td>
                
                    <td class="comparison_sim_items_column comparable_item2">
                        
                        
                        
                        <span>
                            <span class="a-declarative" data-action="a-popover" data-a-popover="{&quot;max-width&quot;:&quot;700&quot;,&quot;closeButton&quot;:&quot;false&quot;,&quot;position&quot;:&quot;triggerBottom&quot;,&quot;url&quot;:&quot; /gp/customer-reviews/widgets/average-customer-review/popover/ref=acr_dpComparsion__popover?contextId=dpComparsion&amp;asin=B077ZTV1V8 &quot;,&quot;restoreFocusOnHide&quot;:&quot;false&quot;}">
                                <i class="a-icon a-icon-star a-star-0 a-spacing-none"><span class="a-icon-alt">0 von 5 Sternen</span></i>
                            </span>
                            <a class="a-link-normal" target="_self" rel="noopener" href="/product-reviews/B077ZTV1V8/ref=psdc_3437567031_r3_B01DQDZVCO?_encoding=UTF8&amp;showViewpoints=1">(0)</a>
                            <span class="a-letter-space"></span>
                        </span>
                    </td>
                
            </tr>


            <tr id="comparison_price_row">
                <th class="comparison_attribute_name_column comparison_table_first_col" role="rowheader">
                    <span class="a-size-base a-color-base">Preis</span>
                </th>


                <td class="comparison_baseitem_column">
                    
                        
                        
                        
                        
                            
                                
                                
                                    <span class="a-color-price a-text-bold">EUR 14,99</span>
                                
                            
                        
                    
                </td>


                
                    <td class="comparison_sim_items_column comparable_item0">
                    
                        
                        
                        
                            
                                
                                
                                    <span class="a-color-price a-text-bold">EUR 22,99</span>
                                
                            
                        
                    
                    </td>
                
                    <td class="comparison_sim_items_column comparable_item1">
                    
                        
                        
                        
                            
                                
                                
                                    <span class="a-color-price a-text-bold">EUR 10,99</span>
                                
                            
                        
                    
                    </td>
                
                    <td class="comparison_sim_items_column comparable_item2">
                    
                        
                        
                        
                            
                                
                                
                                    <span class="a-color-price a-text-bold">EUR 8,60</span>
                                
                            
                        
                    
                    </td>
                
            </tr>


    
                <tr id="comparison_shipping_info_row">
                    <th class="comparison_attribute_name_column comparison_table_first_col" role="rowheader">
                        <span class="a-size-base a-color-base">Versand</span>
                    </th>

    
                    <td class="comparison_baseitem_column">
                        
                            
                            
                                <i class="a-icon a-icon-prime" aria-label="Prime Logo"><span class="a-icon-alt">Prime Logo</span></i>
                            
                            
                            
                            
                            
                            
                        
                    </td>

    
                    
                        <td class="comparison_sim_items_column comparable_item0">
                            
                                
                                    <i class="a-icon a-icon-prime" aria-label="Prime Logo"><span class="a-icon-alt">Prime Logo</span></i>
                                
                                
                                
                                
                                
                                
                            
                        </td>
                    
                        <td class="comparison_sim_items_column comparable_item1">
                            
                                
                                
                                    <span class="a-size-base a-color-base">KOSTENLOSE Lieferung</span>
                                
                                
                                
                                
                                
                            
                        </td>
                    
                        <td class="comparison_sim_items_column comparable_item2">
                            
                                
                                
                                    <span class="a-size-base a-color-base">KOSTENLOSE Lieferung</span>
                                
                                
                                
                                
                                
                            
                        </td>
                    
                </tr>



            <tr id="comparison_sold_by_row">
                <th class="comparison_attribute_name_column comparison_table_first_col" role="rowheader">
                    <span class="a-size-base a-color-base">Verkauft von</span>
                </th>

  
                <td class="comparison_baseitem_column">
                    
                        
                        
                        
                            <a class="a-spacing-top-small a-link-normal" target="_self" rel="noopener" href="/gp/help/seller/at-a-glance.html/ref=psdc_3437567031_s0_B01DQDZVCO?ie=UTF8&amp;seller=A2KTBS1FE89V3M">Benchra</a>
                        
                     
                </td>


                
                    <td class="comparison_sim_items_column comparable_item0">
                         
                            
                         
                             <a class="a-spacing-top-small a-link-normal" target="_self" rel="noopener" href="/gp/help/seller/at-a-glance.html/ref=psdc_3437567031_s1_B01DQDZVCO?ie=UTF8&amp;seller=A2KTBS1FE89V3M">Benchra</a>
                         
                         
                     </td>
                
                    <td class="comparison_sim_items_column comparable_item1">
                         
                            
                         
                             <a class="a-spacing-top-small a-link-normal" target="_self" rel="noopener" href="/gp/help/seller/at-a-glance.html/ref=psdc_3437567031_s2_B01DQDZVCO?ie=UTF8&amp;seller=A30JZ0SRZBIKL">Samine</a>
                         
                         
                     </td>
                
                    <td class="comparison_sim_items_column comparable_item2">
                         
                            
                         
                             <a class="a-spacing-top-small a-link-normal" target="_self" rel="noopener" href="/gp/help/seller/at-a-glance.html/ref=psdc_3437567031_s3_B01DQDZVCO?ie=UTF8&amp;seller=A30A3D38T7Y2HK">little sporter</a>
                         
                         
                     </td>
                
             </tr>


            
       </table>



<div class="a-section a-spacing-small a-spacing-top-small HLCXComparisonJumplinkContent aok-hidden">
    <span class="a-declarative" data-action="hlcx-send-reftag" data-hlcx-send-reftag="{&quot;refTag&quot;:&quot;psdc_3437567031_c_B01DQDZVCO&quot;,&quot;allowLinkDefault&quot;:&quot;true&quot;}">
        <a class="a-link-normal HLCXComparisonJumplinkLink" href="#HLCXComparisonWidget_feature_div">
            
                
                
                    <span>Mit &auml;hnlichen Artikeln vergleichen</span>
                
            
        </a>
    </span>
</div>

            
            
            
        
    

	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>









    
    




    

































    












	
	

















<hr noshade="noshade" size="1" class="bucketDivider"/>

<div style="overflow:hidden;">
<div id="prodDetails">
<a id="productDetails" name="productDetails" aria-hidden="true"></a>
<noscript><style type='text/css'>
#prodDetails .attrG .pdTab{display:block}
#need-help-deciding{display:none}
#prodDetails .pdSprite{display:none}
#prodDetails .pdSectionSummary{display:none}
#prodDetails #wnsRM{display:none}
#prodDetails #wnsPostData{display:inline}
#prodDetails .expandFeature{display:none}
#prodDetails .collapseFeature{display:none}
</style></noscript>
<h2>Produktinformationen</h2>

<div class="wrapper DElocale">
  <div class="column col1 ">

      <div class="section techD">
         <div class="secHeader">
           <span>Technische Details</span>
         </div>
         <div class="content pdClearfix">
     <div class="attrG" style='border:none' >
     <div class="pdTab" style='display:block;'>
     <table cellspacing="0" cellpadding="0" border="0">
     <tbody>
         <tr class="size-weight"><td class="label">Größe und/oder Gewicht</td><td class="value">37,5 x 31,7 x 28 cm ; 236 g</td></tr>
         <tr><td class="label">Produktgewicht</td><td class="value">236 Gramm</td></tr>
         <tr><td class="label">Batterien erforderlich</td><td class="value">Nein</td></tr>
<tr><td class="lAttr">&nbsp;</td><td class="lAttr">&nbsp;</td></tr>
     </tbody>
     </table>
     </div>
     </div>
</div>
      </div>

</div>
  <div class="column col2 ">

      <div class="section techD">
         <div class="secHeader">
           <span>Zusätzliche Produktinformationen</span>
         </div>
         <div class="content pdClearfix">
     <div class="attrG" style='border:none' >
     <div class="pdTab" style='display:block;'>
     <table cellspacing="0" cellpadding="0" border="0">
     <tbody>
         <tr><td class='label'>ASIN</td><td class='value'>B01DQDZVCO</td></tr>







<tr class="shipping-weight"><td class="label">Produktgewicht inkl. Verpackung</td><td class="value">240 g</td></tr>




















<tr class="date-first-available"><td class="label">Im Angebot von Amazon.de seit</td><td class="value">2. April 2016</td></tr>





<tr class="average_customer_reviews">  <td class="label">Durchschnittliche Kundenbewertung</td>  <td class="value"><span class="dpProductDetailB01DQDZVCO">
  <span class="a-declarative" data-action="a-popover" data-a-popover="{&quot;closeButton&quot;:&quot;false&quot;,&quot;max-width&quot;:&quot;700&quot;,&quot;position&quot;:&quot;triggerBottom&quot;,&quot;url&quot;:&quot;/review/widgets/average-customer-review/popover/ref=acr_dpproductdetail_popover?ie=UTF8&amp;asin=B01DQDZVCO&amp;contextId=dpProductDetail&amp;ref=acr_dpproductdetail_popover&quot;}">
    <a href="javascript:void(0)" class="a-popover-trigger a-declarative">
      <a class="a-link-normal a-text-normal" href="https://www.amazon.de/product-reviews/B01DQDZVCO/ref=acr_dpproductdetail_text?ie=UTF8&showViewpoints=1">
        <i class="a-icon a-icon-star a-star-4-5"><span class="a-icon-alt">4.7 von 5 Sternen</span></i>
      </a>
    <i class="a-icon a-icon-popover"></i></a>
  </span>
  <span class="a-letter-space"></span>
  <span class="a-size-small">
    <a class="a-link-normal" href="https://www.amazon.de/product-reviews/B01DQDZVCO/ref=acr_dpproductdetail_text?ie=UTF8&showViewpoints=1">
      110 Kundenrezensionen
    </a>
  </span>
</span></td></tr>




























<tr id="SalesRank"><td class="label">Amazon Bestseller-Rang</td><td class="value">


















Nr. 3.098 in Küche, Haushalt & Wohnen (<a href="https://www.amazon.de/gp/bestsellers/kitchen/ref=pd_dp_ts_kitchen_1">Siehe Top 100</a>)
 






















<ul class="zg_hrsr">
    <li class="zg_hrsr_item">
    <span class="zg_hrsr_rank">Nr. 2</span>
    <span class="zg_hrsr_ladder">in&nbsp;<a href="https://www.amazon.de/gp/bestsellers/kitchen/ref=pd_zg_hrsr_kitchen_1_1">Küche, Haushalt & Wohnen</a> &gt; <a href="https://www.amazon.de/gp/bestsellers/kitchen/3437522031/ref=pd_zg_hrsr_kitchen_1_2">Aufbewahrung & Ordnungssysteme</a> &gt; <a href="https://www.amazon.de/gp/bestsellers/kitchen/3437565031/ref=pd_zg_hrsr_kitchen_1_3">Wandhaken</a> &gt; <a href="https://www.amazon.de/gp/bestsellers/kitchen/3437567031/ref=pd_zg_hrsr_kitchen_1_4_last">Huthaken</a></span>
    </li>
</ul>
</td></tr>
<tr><td class="lAttr">&nbsp;</td><td class="lAttr">&nbsp;</td></tr>
     </tbody>
     </table>
     </div>
     </div>
</div>
      </div>


      <div class="section techD">
         <div class="secHeader">
           <span>Feedback</span>
         </div>
         <div class="content pdClearfix">
		
	
		
	
		
	
			
			
			
     	    
            
            
            
            
            
                <script>
    P.now("A","tellMeMoreLinkData").execute(function(A,tellMeMoreLinkData){
        if(typeof tellMeMoreLinkData !== 'undefined'){
            A.state('lowerPricePopoverData',{"trigger":"ns_ZR3HKMRX8ECYCSD03JCH_7544_1_hmd_pricing_feedback_trigger_product-details","destination":"/gp/pdp/pf/pricingFeedbackForm.html/ref=sr_1_8?ie=UTF8&ASIN=B01DQDZVCO&PREFIX=ns_ZR3HKMRX8ECYCSD03JCH_7544_2_&WDG=home_display_on_website&dpRequestId=ZR3HKMRX8ECYCSD03JCH&from=product-details&keywords=kleiderhaken&qid=1546373046&sr=8-8&storeID=kitchenencodeURI('&originalURI=' + window.location.pathname)","url":"/gp/pdp/pf/pricingFeedbackForm.html/ref=sr_1_8?ie=UTF8&ASIN=B01DQDZVCO&PREFIX=ns_ZR3HKMRX8ECYCSD03JCH_7544_2_&WDG=home_display_on_website&dpRequestId=ZR3HKMRX8ECYCSD03JCH&from=product-details&keywords=kleiderhaken&qid=1546373046&sr=8-8&storeID=kitchen","nsPrefix":"ns_ZR3HKMRX8ECYCSD03JCH_7544_2_","path":"encodeURI('&originalURI=' + window.location.pathname)","title":"Informieren Sie uns über einen günstigeren Preis"});
            return {
                   key:"pricing-fbW",
                   method: function(){
                                     return {"trigger":"ns_ZR3HKMRX8ECYCSD03JCH_7544_1_hmd_pricing_feedback_trigger_product-details","destination":"/gp/pdp/pf/pricingFeedbackForm.html/ref=sr_1_8?ie=UTF8&ASIN=B01DQDZVCO&PREFIX=ns_ZR3HKMRX8ECYCSD03JCH_7544_2_&WDG=home_display_on_website&dpRequestId=ZR3HKMRX8ECYCSD03JCH&from=product-details&keywords=kleiderhaken&qid=1546373046&sr=8-8&storeID=kitchenencodeURI('&originalURI=' + window.location.pathname)","url":"/gp/pdp/pf/pricingFeedbackForm.html/ref=sr_1_8?ie=UTF8&ASIN=B01DQDZVCO&PREFIX=ns_ZR3HKMRX8ECYCSD03JCH_7544_2_&WDG=home_display_on_website&dpRequestId=ZR3HKMRX8ECYCSD03JCH&from=product-details&keywords=kleiderhaken&qid=1546373046&sr=8-8&storeID=kitchen","nsPrefix":"ns_ZR3HKMRX8ECYCSD03JCH_7544_2_","path":"encodeURI('&originalURI=' + window.location.pathname)","title":"Informieren Sie uns über einen günstigeren Preis"};
                                     }
                   }
        }
        else{
                P.when("A").register("tellMeMoreLinkData",function(A){
                    A.state('lowerPricePopoverData',{"trigger":"ns_ZR3HKMRX8ECYCSD03JCH_7544_1_hmd_pricing_feedback_trigger_product-details","destination":"/gp/pdp/pf/pricingFeedbackForm.html/ref=sr_1_8?ie=UTF8&ASIN=B01DQDZVCO&PREFIX=ns_ZR3HKMRX8ECYCSD03JCH_7544_2_&WDG=home_display_on_website&dpRequestId=ZR3HKMRX8ECYCSD03JCH&from=product-details&keywords=kleiderhaken&qid=1546373046&sr=8-8&storeID=kitchenencodeURI('&originalURI=' + window.location.pathname)","url":"/gp/pdp/pf/pricingFeedbackForm.html/ref=sr_1_8?ie=UTF8&ASIN=B01DQDZVCO&PREFIX=ns_ZR3HKMRX8ECYCSD03JCH_7544_2_&WDG=home_display_on_website&dpRequestId=ZR3HKMRX8ECYCSD03JCH&from=product-details&keywords=kleiderhaken&qid=1546373046&sr=8-8&storeID=kitchen","nsPrefix":"ns_ZR3HKMRX8ECYCSD03JCH_7544_2_","path":"encodeURI('&originalURI=' + window.location.pathname)","title":"Informieren Sie uns über einen günstigeren Preis"});
                    return {
                           key:"pricing-fbW",
                           method: function(){
                                             return {"trigger":"ns_ZR3HKMRX8ECYCSD03JCH_7544_1_hmd_pricing_feedback_trigger_product-details","destination":"/gp/pdp/pf/pricingFeedbackForm.html/ref=sr_1_8?ie=UTF8&ASIN=B01DQDZVCO&PREFIX=ns_ZR3HKMRX8ECYCSD03JCH_7544_2_&WDG=home_display_on_website&dpRequestId=ZR3HKMRX8ECYCSD03JCH&from=product-details&keywords=kleiderhaken&qid=1546373046&sr=8-8&storeID=kitchenencodeURI('&originalURI=' + window.location.pathname)","url":"/gp/pdp/pf/pricingFeedbackForm.html/ref=sr_1_8?ie=UTF8&ASIN=B01DQDZVCO&PREFIX=ns_ZR3HKMRX8ECYCSD03JCH_7544_2_&WDG=home_display_on_website&dpRequestId=ZR3HKMRX8ECYCSD03JCH&from=product-details&keywords=kleiderhaken&qid=1546373046&sr=8-8&storeID=kitchen","nsPrefix":"ns_ZR3HKMRX8ECYCSD03JCH_7544_2_","path":"encodeURI('&originalURI=' + window.location.pathname)","title":"Informieren Sie uns über einen günstigeren Preis"};
                                             }
                           }
			    });
            }
    });
    </script>
Möchten Sie uns <b><a href="#" id="ns_ZR3HKMRX8ECYCSD03JCH_7544_1_hmd_pricing_feedback_trigger_product-details">über einen günstigeren Preis informieren</a></b>?
</div>
      </div>



</div>
<div style="height:0;clear:left;">&nbsp;</div>
</div>
<script type="text/javascript">
function pdTreeSH(a){
      P.when("jQuery", "ready").execute(function($){
        var $l=$(a).parent().parent();
        $l.parent().children().filter(".pdTab").toggle();
        $l.find(".pdSectionSummary").toggle();
        $l.find(".pdSprite").toggleClass("pdSpritePlus").toggleClass("pdSpriteMinus");
      });
}

function pdToggleSections(a, expand){
      P.when("jQuery", "ready").execute(function($){
       var $l = $(a).parent();
       $l.children().filter(".expandFeature,.collapseFeature").toggle();
       if(expand == 1){
          $l.parent().children().children().children().filter(".pdTab").show();
          $l.parent().children().children().children().children().children().filter(".pdSprite").removeClass("pdSpritePlus").addClass("pdSpriteMinus");
          $l.parent().children().children().children().children().children().children().filter(".pdSectionSummary").hide();
        } else {
          $l.parent().children().children().children().filter(".pdTab").hide();
          $l.parent().children().children().children().children().children().filter(".pdSprite").addClass("pdSpritePlus").removeClass("pdSpriteMinus");
          $l.parent().children().children().children().children().children().children().filter(".pdSectionSummary").show();
        }
     });
}

    P.when("jQuery", "a-popover", "ready").execute(function ($, popover) {
        $("#prodDetails .help").each(function(){
          var $selectedTechAttribute = $(this); 
          var $keyLookUp = $selectedTechAttribute.attr('href');
          var $title = $selectedTechAttribute.html();
          popover.create($selectedTechAttribute, {
            "position": "triggerRight",
            "header": $title,
            "url": $keyLookUp,
            "ajaxFailMsg": 'No help associated with this attribute'
          });
       });
    });

</script>
</div>
</div>






















    
    



  



        
        
        
        
  









        

















    
    



  



        
        
        
        
  









        













<div id="legal_feature_div" class="feature" data-feature-name="legal">
         
     




    

    
    
    
        
            
                
	                
	                
	                	







	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>


     






<div id="cpsia-product-safety-warning_feature_div">
</div>







    
    

    


  



        
        
        
        
  









        









  
  









<hr noshade="true" size="1" class="bucketDivider"/>

<div id="pd-available"></div>






<script type="text/javascript">
var ProductDescriptionIframeResize = {};
(function () {
  var d = document;
  var obj = this;
  var nTries = 1;
  var hasCustomWidth = 0;
  var MAX_TRIES = 20;
  obj.iframeId = 'product-description-iframe';
  obj.appendTo = 'iframe-wrapper';
  function getDocHeight (doc) {
    var contentDiv = doc.getElementById("pdIframeContent");
    var docHeight = 0;
    if(contentDiv){
      docHeight = Math.max(
        contentDiv.scrollHeight,
        contentDiv.offsetHeight,
        contentDiv.clientHeight
      );
    }
    return docHeight;
  }  
  function isElementOnRight(pdRef, el) {
    var ret=0;
    try {
      if(pdRef, el) {
        if((el.offsetTop < pdRef.offsetTop) && (el.offsetTop + el.offsetHeight > pdRef.offsetTop)) {
          ret = 1;
        }
      }
    } catch (e) {}
    return ret;
  }
  function setWidth(iframeRef, el) {
    var elLeft, w, minW = 450;
    try {
      elLeft = el.offsetLeft;
      w = elLeft - 50;
      if(w > minW) {
        iframeRef.style.width = w + 'px';
        hasCustomWidth = 1;
      }
    } catch (e) {}
  }
  function setIframeWidth(ifrmId) {
    var iframeRef = d.getElementById(ifrmId),
        pdRef = d.getElementById("pd-available"),
        rightCol = d.getElementById("rightCol"),
        rightRail = d.getElementById("rightRail");
    if(isElementOnRight(pdRef, rightRail)) {
      setWidth(iframeRef, rightRail); 
    } else if (isElementOnRight(pdRef, rightCol)) {
      setWidth(iframeRef, rightCol);
    }
  }
  function setIframeHeight (ifrmId) {
    var iframeDoc, iframeRef = d.getElementById(ifrmId);
    try {
      iframeDoc = iframeRef.contentWindow.document;
    } catch (e) {
      try {
        iframeDoc = iframeRef.contentDocument;
      } catch (ex) {}
    }
    if (iframeDoc) {
      var h = getDocHeight(iframeDoc);
      if (h && h != 0) {
        iframeRef.style.height = h + 'px';
      } else { 
        if (nTries < MAX_TRIES) {
          nTries++;
          setTimeout(function () {
            setIframeHeight(ifrmId);
          }, 50); 
        }
      }
    }
  }
  obj.iframeload = function () {
    var iframe = d.getElementById(obj.iframeId);
    iframe.style.display = '';
    iframe.style.height = "1px";
    setTimeout(function () {
      if(obj.needWidthAdjust) {
        setIframeWidth(obj.iframeId);
      }
      setIframeHeight(obj.iframeId);
      var onloadCallback = obj.onloadCallback;
      if(typeof onloadCallback === "function") {
        onloadCallback();
      }
    }, 50); 

  }
  obj.createIframe = function ( iframeId, onloadFn ) {
    var iframe = d.createElement('iframe');
    iframe.id = iframeId;
    iframe.className = "ap_never_hide";
    iframe.width = "100%";
    iframe.scrolling="no";
    iframe.frameBorder="0";
    if ( iframe.addEventListener )
      iframe.addEventListener("load", onloadFn, false);
    else if ( iframe.attachEvent )
      iframe.attachEvent("onload", onloadFn);
    else iframe.onload = onloadFn;
    return iframe; 
  }
  obj.initialize = function (onloadCallback, needWidthAdjust) {
    var iframeContent = "%0A%20%20%0A%0A%0A%0A%0A%3Chtml%20dir%3D%22ltr%22%3E%0A%20%20%3Chead%3E%0A%20%20%20%20%3Cstyle%20type%3D%27text%2Fcss%27%3E%0A%0A%0A%20h2%20%7B%0A%20%20%20%20color%3A%20%23CC6600%3B%0A%20%20%20%20font-size%3A%20medium%3B%0A%20%20%20%20margin%3A%200%200%200.25em%3B%0A%20%20%20%20%2F%2A%20for%20IE%20Quirks%20mode%20%2A%2F%2A%20font-size%3A%20small%3B%0A%20%20%7D%0A%20%20%20%20%0Abody%20%7B%0A%20%20background-color%3A%20%23FFFFFF%3B%0A%20%20margin%3A%200px%3B%0A%20%20height%3A%20100%25%3B%0A%20%20width%3A%20100%25%3B%0A%20%20color%3A%20%23333333%3B%0A%20%20word-wrap%3A%20break-word%3B%20%0A%20%20font-family%3A%20verdana%2Carial%2Chelvetica%2Csans-serif%3B%0A%20%20font-size%3A%20small%3B%0A%7D%0A%0Atd%2C%20th%20%7B%0A%20%20font-family%3A%20verdana%2Carial%2Chelvetica%2Csans-serif%3B%0A%20%20font-size%3A%20small%3B%0A%7D%0A%0Ahr%20%7B%0A%20%20border-top%3A%201px%20dashed%20%23999999%3B%0A%20%20height%3A%201px%3B%0A%20%20color%3A%20%23FFFFFF%3B%0A%20%20margin%3A%203px%200px%3B%0A%20%20border-style%3A%20dashed%20none%20none%20none%3B%0A%20%20background-color%3A%20white%0A%7D%0Aul%20%7B%20%0A%20%20list-style-type%3A%20none%3B%0A%20%20margin%3A%200px%3B%20%0A%20%20padding%3A%200px%3B%20%0A%7D%0Aul%20li%20%7B%0A%20%20margin%3A%200.5em%200em%3B%0A%7D%0Aul%20li%20ul%20%7B%0A%20%20list-style-type%3A%20none%3B%0A%20%20margin-left%3A%2025px%3B%0A%7D%0Aul%20li%20ul%20li%20%7B%0A%20%20margin%3A%200em%3B%0A%7D%0Adiv.bucket%20%7B%20padding%3A%205px%200em%3B%20%7D%0Adiv.bucket%20div.content%20%7B%20margin%3A%200.5em%200px%200em%2025px%3B%20%7D%0Ahr%20%7B%20margin-left%3A%200px%3B%20%7D%0A.bucket%20h3%20%7B%0A%20%20color%3A%20%23000%3B%0A%20%20font-size%3A%201em%3B%0A%20%20font-weight%3A%20bold%3B%0A%20%20margin%3A%200px%200px%200.25em%200px%3B%0A%7D%0Ahr.bucketDivider%20%7B%20clear%3A%20left%3B%20%7D%0Adiv.bucket%20%7B%20padding%3A%205px%200em%3B%20%7D%0A.disclaim%20%7B%0A%20%20margin-top%3A%203px%3B%0A%20%20font-size%3A%2010px%3B%0A%20%20color%3A%20%23888%3B%0A%7D%0Abody%20hr%20%7B%0A%20%20border-top%3A%201px%20solid%20%23CCCCCC%3B%0A%7D%0Aa%3Alink%20%7B%0A%20%20color%3A%20%23003399%3B%0A%20%20text-decoration%3A%20underline%3B%0A%7D%0Aa%3Ahover%20%7B%0A%20%20color%3A%20%23CC6600%3B%0A%20%20text-decoration%3A%20none%3B%0A%7D%0Aa%3Aactive%20%7B%0A%20%20color%3A%20%23FF9933%3B%0A%7D%0Aa%3Avisited%20%7B%0A%20%20color%3A%20%23996633%3B%0A%7D%0A%0A%0A%0A%23productDescription%20h2.productDescriptionHeader%20%7B%0A%20%20%20%20margin-bottom%3A%200em%3B%09%0A%7D%0A%0A%23productDescription%20.emptyClear%20%7B%0A%20%20%20%20clear%3Aleft%3B%0A%20%20%20%20height%3A0px%3B%0A%20%20%20%20font-size%3A0px%3B%0A%7D%0A%0A%23productDescription%20div.productDescriptionWrapper%20%7B%0A%20%20%20%20margin%3A%200%200%201em%200%3B%09%09%0A%7D%0A%0A%23productDescription%20h3.productDescriptionSource%20%7B%0A%20%20%20%20font-weight%3Anormal%3B%0A%20%20%20%20color%3A%23333333%3B%0A%20%20%20%20font-size%3A1.23em%3B%0A%20%20%20%20margin%3A%20.75em%200%20.375em%20-15px%3B%0A%20%20%20%20clear%3Aleft%3B%0A%7D%0A%0A%23productDescription%20.seeAll%20%7B%0A%09margin-top%3A%201.25em%3B%20%0A%09margin-left%3A%20-15px%3B%20%0A%7D%0A%0A%23productDescription%20ul%2C%20%23technicalProductFeatures%20ul%20%7B%20%0A%20%20list-style-type%3A%20disc%3B%20%0A%20%20margin%3A%201.12em%200%3B%20%0A%20%20margin-left%3A%2020px%3B%20%0A%7D%0A%0A%23productDescription%20ul%20li%20%7B%20%0A%20%20margin%3A%200%200%200%2020px%3B%20%0A%7D%0A%0A%23productDescription%20ul%20li%20ul%20%7B%20%0A%20%20list-style-type%3A%20disc%3B%20%0A%20%20margin-left%3A%2020px%3B%20%0A%7D%0A%0A%23productDescription%20ul%20li%20ul%20li%20%7B%20%0A%20%20margin%3A%200%200%200%2020px%3B%20%0A%7D%0A%0A%23productDescription%20.aplus%20h4%2C%20%23productDescription%20.aplus%20h5%20%7B%0A%20%20%20%20margin%3A%200%200%20.75em%200%3B%0A%20%20%20%20font-size%3A%201em%3B%0A%7D%0A%0A%23productDescription%20.aplus%20h4%20%7B%0A%20%20%20%20color%3A%20%23CC6600%3B%0A%7D%0A%0A%23productDescription%20.aplus%20p%20%7B%0A%20%20%20%20margin%3A%200%200%201em%200%3B%0A%7D%0A%0A%23productDescription%20.aplus%20.break%20%7B%0A%20%20%20%20clear%3Aboth%3B%0A%20%20%20%20height%3A0px%3B%0A%20%20%20%20font-size%3A0px%3B%0A%7D%0A%0A%23productDescription%20.aplus%20.spacer%20%7B%0A%20%20%20%20margin-bottom%3A%2013px%3B%0A%7D%0A%0A%23productDescription%20.aplus%20img%20%7B%0A%20%20%20%20border%3Anone%3B%0A%7D%0A%0A%23productDescription%20.aplus%20.leftImage%2C%20%23productDescription%20.aplus%20.rightImage%2C%20%23productDescription%20.aplus%20.centerImage%20%7B%0A%20%20%20%20margin-bottom%3A%201em%3B%0A%20%20%20%20margin-top%3A%200%3B%0A%20%20%20%20text-align%3Acenter%3B%0A%20%20%20%20vertical-align%3Atop%3B%0A%7D%0A%0A%0A%23productDescription%20.aplus%20.leftImage%20%7B%0A%20%20%20%20margin-right%3A%2015px%3B%0A%20%20%20%20float%3Aleft%3B%0A%20%20%20%20clear%3Aleft%3B%0A%7D%0A%0A%23productDescription%20.aplus%20.rightImage%20%7B%0A%20%20%20%20margin-left%3A%2015px%3B%0A%20%20%20%20float%3Aright%3B%0A%20%20%20%20clear%3Aright%3B%0A%7D%0A%0A%23productDescription%20.aplus%20.imageCaption%20%7B%0A%20%20%20%20clear%3Aboth%3B%0A%20%20%20%20padding%3A%20.5em%20.5em%200%20.5em%3B%0A%20%20%20%20font-size%3A%20.846em%3B%0A%20%20%20%20display%3A%20block%3B%0A%7D%0A%0A%23productDescription%20.aplus%20table.data%20%7B%20%0A%09border-collapse%3A%20collapse%3B%20%0A%09margin-bottom%3A%201.25em%3B%0A%7D%0A%0A%23productDescription%20.aplus%20table.data%20th%20%7B%20%0A%09font-weight%3A%20bold%3B%20%0A%09background%3A%20%23F7F7F7%3B%20%0A%09border-style%3Asolid%3B%20%0A%09border-color%3A%20%23CCCCCC%3B%20%0A%09border-width%3A0%200%201px%201px%3B%20%0A%7D%0A%0A%23productDescription%20.aplus%20table.data%20td%20%7B%20%0A%09border-left%3A%201px%20solid%20%23CCC%3B%20%0A%09border-bottom%3A%201px%20dotted%20%23CCC%0A%7D%0A%0A%23productDescription%20.aplus%20table.data%20th%2C%20%23productDescription%20.aplus%20table.data%20td%0A%7B%20%0A%09padding%3A3px%2010px%3B%20%0A%09text-align%3Aleft%0A%7D%0A%0A%23productDescription%20.aplus%20table.data%20tfoot%20%7B%20%0A%09font-style%3A%20italic%3B%20%0A%7D%0A%0A%23productDescription%20.aplus%20table.data%20caption%20%7B%0A%09background%3A%20%23eee%3B%20%0A%09font-size%3A%20.8125em%3B%0A%7D%0A%0A%23productDescription%20.aplus%20table.data%20tr%20td%3Afirst-child%2C%20%23productDescription%20.aplus%20table.data%20tr%20th%3Afirst-child%20%7B%0A%09border-left-width%3A0px%3B%0A%7D%0A%0A%23productDescription%20.aplus%20ul%20%7B%0A%09margin%3A0%200%201em%200%3B%0A%7D%0A%0A%0A%23productDescription%20.aplus%20.center%20%7B%0A%09text-align%3A%20center%3B%0A%7D%0A%0A%23productDescription%20.aplus%20.right%20%7B%0A%09text-align%3A%20right%3B%0A%7D%0A%0A%23productDescription%20.aplus%20%20.sixth-col%2C%0A%23productDescription%20.aplus%20.fourth-col%2C%0A%23productDescription%20.aplus%20.third-col%2C%0A%23productDescription%20.aplus%20.half-col%2C%0A%23productDescription%20.aplus%20.two-third-col%2C%0A%23productDescription%20.aplus%20.three-fourth-col%2C%0A%23productDescription%20.aplus%20.one-col%20%7B%0A%20%20%20%20float%3Aleft%3B%0A%20%20%20%20margin-right%3A%201.6760%25%3B%0A%20%20%20%20overflow%3A%20hidden%3B%0A%7D%0A%0A%23productDescription%20.aplus%20.last%20%7B%0A%20%20%20%20margin-right%3A0px%3B%0A%7D%0A%0A%23productDescription%20.aplus%20.sixth-col%20%7B%0A%20%20%20%20width%3A%2015.080%25%3B%0A%7D%0A%23productDescription%20.aplus%20.fourth-col%20%7B%0A%20%20%20%20width%3A%2023.4637%25%3B%0A%7D%0A%0A%23productDescription%20.aplus%20.third-col%20%7B%0A%20%20%20%20width%3A%2031.8436%25%3B%0A%7D%0A%0A%23productDescription%20.aplus%20.half-col%20%7B%0A%20%20%20%20width%3A%2048.6034%25%3B%0A%7D%0A%0A%23productDescription%20.aplus%20.two-third-col%20%7B%0A%20%20%20%20width%3A%2065.3631%25%3B%0A%7D%0A%0A%23productDescription%20.aplus%20.three-fourth-col%20%7B%0A%20%20%20%20width%3A%2073.7430%25%3B%0A%7D%0A%0A%23productDescription%20.aplus%20.one-col%20%7B%0A%20%20%20%20width%3A%2098.8827%25%3B%0A%20%20%20%20margin-right%3A0%3B%0A%7D%0A%0A%23productDescription%20.aplus%20.last%20%7B%0A%20%20%20%20margin-right%3A0%3B%0A%7D%0A%0A%23productDescription%20.aplus%20%7B%0A%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20min-width%3A%20895px%3B%0A%7D%0A%0A%2A%20html%20%23productDescription%20.aplus%20%7B%0A%20%20%20%20width%3A%20expression%28%28document.body.clientWidth%20%3C%20936%29%20%3F%20%22895px%22%20%3A%20%22100%25%22%20%29%3B%0A%7D%0A%0A%20%20%20%20%3C%2Fstyle%3E%0A%20%20%20%20%3Cbase%20target%3D%27_top%27%20%2F%3E%0A%20%20%3C%2Fhead%3E%0A%20%20%3Cbody%3E%0A%20%20%3Cdiv%20id%3D%22pdIframeContent%22%3E%0A%0A%0A%0A%0A%0A%20%0A%0A%0A%0A%0A%3Cdiv%20id%3D%22biss-product-description-and-details%22%3E%3C%2Fdiv%3E%0A%0A%3Cdiv%20class%3D%22bucket%22%20id%3D%22productDescription%22%3E%0A%20%20%3Ch2%3EProduktbeschreibungen%3C%2Fh2%3E%0A%0A%3Cdiv%20class%3D%22content%22%3E%0A%0A%0A%20%20%20%20%0A%20%20%20%20%20%20%20%3Ch3%20class%3D%22productDescriptionSource%22%3E%3C%2Fh3%3E%0A%20%20%20%20%20%20%20%3Cdiv%20class%3D%22productDescriptionWrapper%22%20dir%3D%22auto%22%20%3E%0A%20%20%20%20%20%20%20%3Cbr%3E%20%3Cbr%3E%20Jeder%20Haushalt%20braucht%20mehr%20Platz%2C%20um%20Kleidung%20von%20Zeit%20zu%20Zeit%20zu%20h%C3%A4ngen.%20Bei%20Betriebsbesichtigungen%2C%20w%C3%A4re%20es%20nicht%20sch%C3%B6n%2C%20Ihre%20G%C3%A4ste%20einen%20Platz%20zu%20geben%2C%20damit%20sie%20ihre%20M%C3%A4ntel%20h%C3%A4ngen%20k%C3%B6nnen%2C%20statt%20der%20Tradition%20%22nur%20Ihre%20M%C3%A4ntel%20auf%20dem%20Bett%20werfen%22%3F%20Oder%20vielleicht%20m%C3%B6chten%20Sie%20eine%20Halterung%2C%20wo%20die%20Familie%20ihre%20Winterm%C3%A4ntel%20w%C3%A4hrend%20des%20kalten%20Wetters%20h%C3%A4ngen%20kann%2C%20wird%20aber%20schnell%20zusammenklappen%20und%20im%20Sommer%20verschwinden%2C%20wenn%20M%C3%A4ntel%20weggepackt%20sind.%3Cbr%3E%20%3Cbr%3E%20Der%20WINOMO%20Kleiderst%C3%A4nder%20bietet%20Ihnen%20auch%20den%20zus%C3%A4tzlichen%20Stauraum.%20Ein%20robuster%20Kleiderb%C3%BCgel%2C%20%C3%B6ffnet%20kurzzeitig%20und%20gibt%20Ihnen%2010%20Zoll%20Raum%20f%C3%BCr%20das%20Kleiderh%C3%A4ngen%2C%20und%20dann%20knifft%20wieder%2C%20wenn%20Sie%20es%20nicht%20brauchen.%20Solange%20Sie%20einen%20%22manchmal%2C%20aber%20nicht%20immer%22%20Platz%20f%C3%BCr%20das%20Kleiderh%C3%A4ngen%20m%C3%B6chten%2C%20ist%20der%20WINOMO%20Kleiderst%C3%A4nder%20die%20beste%20Wahl%20f%C3%BCr%20Sie.%3Cbr%3E%20%3Cbr%3E%20Die%20Installation%20ist%20einfach%20und%20erfordert%20nur%20zwei%20Schrauben.%20Und%20weil%20es%20ein%20robustes%20Gestell%20ist%2C%20kann%20es%20bis%20zu%2060%20Pfund%20unterst%C3%BCtzen.%20Schauen%20Sie%20sich%20um%20Ihr%20Haus%20und%20Sie%20werden%20wahrscheinlich%20den%20Platz%20f%C3%BCr%20dieses%20Gestell%20sehen%20-%20sogar%20zwei%20oder%20drei%20oder%20vier.%20Es%20ist%20ideal%20f%C3%BCr%20kleine%20R%C3%A4ume%2C%20Ecken%2C%20B%C3%A4der%2C%20neben%20einem%20Pool%20u.s.w..%3Cbr%3E%20%3Cbr%3E%20Dieses%20WINOMO%20Produkt%20ist%20unterst%C3%BCtzt%20von%20einer%20Ein-Jahr-Bedingungslose%20Geld-Zur%C3%BCck-Garantie.%20Wenn%20Sie%20mit%20Ihrem%20Kauf%20aus%20irgendeinem%20Grund%20unzufrieden%20sind%2C%20kontaktieren%20Sie%20uns%20einfach%20f%C3%BCr%20eine%20100%25%20R%C3%BCckerstattung.%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22emptyClear%22%3E%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Cscript%3E%0A%20%20%20%20if%28typeof%20P%20%21%3D%3D%20%27undefined%27%20%26%26%20typeof%20P.when%20%21%3D%3D%20%27undefined%27%29%20%7B%0A%20%20%20%20%20%20%20%20P.when%28%27product-description-fix%27%29.execute%28function%28productDescription%29%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20productDescription.fixTableIssue%28%29%3B%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7D%29%3B%0A%20%20%20%20%7D%0A%20%20%20%20%3C%2Fscript%3E%0A%3C%2Fdiv%3E%0A%0A%0A%0A%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fbody%3E%0A%3C%2Fhtml%3E%0A";
    obj.onloadCallback = onloadCallback;
    obj.needWidthAdjust = needWidthAdjust;
    var iframe = obj.createIframe (obj.iframeId, obj.iframeload);
    var wrapper = d.getElementById(obj.appendTo);
    wrapper.innerHTML = '';

    var anchor = d.createElement('div');
    anchor.id = 'biss-product-description-and-details';
    wrapper.appendChild(anchor);

    iframe = wrapper.appendChild(iframe);
    var doc;
    try {
      doc = iframe.contentWindow.document;
    } catch (e) {
      try {
        doc = iframe.contentDocument;
      } catch (ex) {}
    }
    if (doc && doc.open) {
      obj.doc = doc;
      var docOpen = doc.open();
      if (docOpen) {
	docOpen.write(decodeURIComponent(iframeContent));
        doc.close();
      }
    }
  }
  obj.resizeIframe = function() {
    if(hasCustomWidth) {
      setIframeWidth(obj.iframeId);
    }
    nTries = 1;
    setIframeHeight(obj.iframeId);
  }
}).apply(ProductDescriptionIframeResize);

     if(typeof P !== "undefined"){  
      P.when('cf').execute(function(){
        P.when('jQuery').execute(function(jQuery) {
          setTimeout(function() {
                var iframeLoadFn = function() {
                    var $ = jQuery;
                    $("#pd-available").trigger("pdAvailable");
                    $(window).resize(ProductDescriptionIframeResize.resizeIframe);
                };
                    ProductDescriptionIframeResize.initialize(iframeLoadFn, 1);
           },50);
          });
        });
     }
</script>



<div id="iframe-wrapper"></div>



    


    
    

    

  



        
        
        
        
  









        













<div id="renewedProgramDescriptionBtf_feature_div" class="feature" data-feature-name="renewedProgramDescriptionBtf">
         
     




    

    
    
    
        
            
                
	                
	                
	                	






	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>


    
    




  



        
        
        
        
  









        




















    
    




  



        
        
        
        
  









        



















    
  









<!--rbd-->









 
 














        
        <div id='p13n-m-desktop-dp-sims_purchase-similarities-esp-SIMS-CP-INFLUENCED-DESKTOP-SIMS-166502-sims-feature-3' class='celwidget' cel_widget_id='desktop-dp-sims_purchase-similarities-esp-SIMS-CP-INFLUENCED-DESKTOP-SIMS-166502-sims-feature-3'>
    
            <div data-similarity-type="desktop-dp-sims_purchase-similarities-esp-SIMS-CP-INFLUENCED-DESKTOP-SIMS-166502" class="a-section similarities-widget sims-carousel-holder">
                <hr class="a-divider-normal sims-carousel-heading bucketDivider">
                <div id="desktop-dp-sims_purchase-similarities-esp-SIMS-CP-INFLUENCED-DESKTOP-SIMS-166502-sims-feature" class="a-section a-spacing-large bucket">
                    
        <div data-a-carousel-options="{&quot;ajax&quot;:{&quot;params&quot;:{&quot;asinMetadataKeys&quot;:&quot;adId&quot;,&quot;featureId&quot;:&quot;SimilaritiesCarousel&quot;,&quot;reftagPrefix&quot;:&quot;pd_sim_201&quot;,&quot;widgetTemplateClass&quot;:&quot;PI::Similarities::ViewTemplates::Carousel::Desktop&quot;,&quot;imageHeight&quot;:160,&quot;linkGetParameters&quot;:&quot;{\\&quot;pd_rd_wg\\&quot;:\\&quot;KlAC1\\&quot;,\\&quot;pd_rd_r\\&quot;:\\&quot;1ed1331c-0e06-11e9-ab4f-0333a0e7098d\\&quot;,\\&quot;pf_rd_r\\&quot;:\\&quot;VBWKFM73Q96291SQHAHK\\&quot;,\\&quot;pf_rd_p\\&quot;:\\&quot;3371dd0f-762d-4d8e-8f21-43659c1afaac\\&quot;,\\&quot;pd_rd_w\\&quot;:\\&quot;6Kg4Z\\&quot;}&quot;,&quot;faceoutTemplateClass&quot;:&quot;PI::P13N::ViewTemplates::Product::Desktop::CarouselFaceout&quot;,&quot;auiDeviceType&quot;:&quot;desktop&quot;,&quot;imageWidth&quot;:160,&quot;schemaVersion&quot;:2,&quot;productDetailsTemplateClass&quot;:&quot;PI::P13N::ViewTemplates::ProductDetails::Desktop::Base&quot;,&quot;forceFreshWin&quot;:0,&quot;productDataFlavor&quot;:&quot;Faceout&quot;,&quot;relatedRequestID&quot;:&quot;VBWKFM73Q96291SQHAHK&quot;,&quot;maxLineCount&quot;:6},&quot;id_list&quot;:[&quot;B074C4HWSB:&quot;,&quot;B01DUZM3PG:&quot;,&quot;B06WWJLRTP:&quot;,&quot;B00I97AQ5U:&quot;,&quot;B01MTE88FH:&quot;,&quot;B0727X3NXC:&quot;,&quot;B000JG1KP4:&quot;,&quot;B000QB6M6O:&quot;,&quot;B00GVAPS4Q:&quot;,&quot;B001GTZ5B8:&quot;,&quot;B07CKVS7FN:&quot;,&quot;B06WNZM9T5:&quot;,&quot;B00B2M69G4:&quot;,&quot;B00MYWUJEO:&quot;,&quot;B075JBPXN1:&quot;,&quot;B01NAT1V9U:&quot;,&quot;B000I49RDE:&quot;,&quot;B01N1311IJ:&quot;,&quot;B007E7ZLEW:&quot;,&quot;B01NBMVIMI:&quot;,&quot;B01GFP0U8A:&quot;,&quot;B07CQ2GM7Y:&quot;,&quot;B075FMJKLL:&quot;,&quot;B01LYRFE9O:&quot;,&quot;B0002AE414:&quot;,&quot;3864974526:&quot;,&quot;B07CNMGXGP:&quot;,&quot;B002MXT2GG:&quot;,&quot;B01BRDU22O:&quot;,&quot;B004NDP78A:&quot;,&quot;B006BSCOTK:&quot;,&quot;B014TBCVV6:&quot;,&quot;B0042RK5SO:&quot;,&quot;B007UNT150:&quot;,&quot;B000JG1KPY:&quot;,&quot;B07CGLFGT2:&quot;,&quot;B01LYFCNXO:&quot;,&quot;B016BA053O:&quot;,&quot;B075W96PRL:&quot;,&quot;B0199P0I6M:&quot;,&quot;B07F67FTKT:&quot;,&quot;B0152WXDJ0:&quot;,&quot;B01N4KIJYF:&quot;,&quot;B0002HOUDE:&quot;,&quot;B07B47YBWW:&quot;,&quot;399011042X:&quot;,&quot;B07BPD9KM1:&quot;,&quot;B001QPM12S:&quot;,&quot;B074PV72BP:&quot;,&quot;B0776ZWL1M:&quot;,&quot;B000MQC8CK:&quot;,&quot;B01415MUXE:&quot;,&quot;B074TGY3YS:&quot;,&quot;B075LH24LT:&quot;,&quot;B07CPSS2HB:&quot;,&quot;B075JJT9P6:&quot;,&quot;B0077LSMEQ:&quot;,&quot;B07G42CJJY:&quot;,&quot;B00HJUD7VS:&quot;,&quot;B073W52CS8:&quot;,&quot;B005YY96IO:&quot;,&quot;B01M0ISVTQ:&quot;,&quot;B078KHLG17:&quot;,&quot;B071YC8DNG:&quot;,&quot;B000XFZK7K:&quot;,&quot;B00GC3OSPC:&quot;,&quot;B01M71YDQI:&quot;,&quot;B074T41X9F:&quot;,&quot;B01LX1K6X7:&quot;,&quot;B07HQJ1MMC:&quot;,&quot;B072JRW5DV:&quot;,&quot;B07856RMWG:&quot;,&quot;B07DS7Y2KY:&quot;,&quot;B073V94HQ7:&quot;,&quot;B079XT3ZYB:&quot;,&quot;B0769YCSST:&quot;,&quot;B01N9TYTWB:&quot;,&quot;B00TQQ4MCQ:&quot;,&quot;B078YJF1QB:&quot;,&quot;B005QJE7Q8:&quot;,&quot;B075CNPXQW:&quot;,&quot;B005C9Q5IA:&quot;,&quot;B01GTNHPAE:&quot;,&quot;B01DD7M42S:&quot;,&quot;B07FXVRTB2:&quot;,&quot;B077N1C7F3:&quot;,&quot;B079V6CCZ8:&quot;,&quot;B000SIYSG6:&quot;,&quot;3867152454:&quot;],&quot;url&quot;:&quot;/gp/p13n-shared/faceout-partial&quot;,&quot;id_param_name&quot;:&quot;asins&quot;},&quot;baseAsin&quot;:&quot;B01DQDZVCO&quot;,&quot;name&quot;:&quot;desktop-dp-sims_purchase-similarities-esp-SIMS-CP-INFLUENCED-DESKTOP-SIMS-166502&quot;,&quot;set_size&quot;:89}" data-p13n-feature-metadata="{&quot;baseAsin&quot;:&quot;B01DQDZVCO&quot;,&quot;pd_rd_wg&quot;:&quot;KlAC1&quot;,&quot;pd_rd_r&quot;:&quot;1ed1331c-0e06-11e9-ab4f-0333a0e7098d&quot;,&quot;pf_rd_r&quot;:&quot;VBWKFM73Q96291SQHAHK&quot;,&quot;pf_rd_p&quot;:&quot;3371dd0f-762d-4d8e-8f21-43659c1afaac&quot;,&quot;pd_rd_w&quot;:&quot;6Kg4Z&quot;}" data-p13n-feature-name="pd_sim_201" data-p13n-global="{&quot;auiDeviceType&quot;:&quot;desktop&quot;,&quot;marketplaceId&quot;:&quot;A1PA6795UKMFR9&quot;,&quot;requestId&quot;:&quot;VBWKFM73Q96291SQHAHK&quot;,&quot;marketplace&quot;:&quot;DE&quot;,&quot;customerId&quot;:&quot;A96YKT37ODSSG&quot;,&quot;session&quot;:&quot;262-9898842-9713804&quot;}" data-a-display-strategy="swap" data-a-transition-strategy="swap" data-a-class="desktop" class="a-begin a-carousel-container a-carousel-static a-carousel-display-swap a-carousel-transition-swap similarities-aui-carousel p13n-sc-carousel"><input autocomplete="on" type="hidden" class="a-carousel-firstvisibleitem">
            <div class="a-row a-carousel-header-row a-size-large"><div class="a-column a-span8"><h2 class="a-carousel-heading">Kunden, die diesen Artikel gekauft haben, kauften auch</h2></div><div class="a-column a-span4 a-span-last a-text-right"><span class="a-carousel-pagination a-size-base"><span class="a-carousel-page-count">Seite <span class="a-carousel-page-current">1</span> von <span class="a-carousel-page-max">1</span>  </span><span class="a-carousel-restart-container"><span class="a-text-separator"></span><a class="a-carousel-restart" href="#">Zum Anfang</a></span><span class="a-carousel-accessibility-page-info a-offscreen" aria-live="polite">Seite 1 von 1  </span></span></div></div>
            <span class="aok-offscreen p13n-sc-offscreen">Diese Einkaufsfunktion wird weiterhin Artikel laden. Um aus diesem Karussell zu navigieren, benutzen Sie bitte Ihre Überschrift-Tastenkombination, um zur nächsten oder vorherigen Überschrift zu navigieren.</span>
            
            <div class="a-row a-carousel-controls a-carousel-row a-carousel-has-buttons"><div class="a-carousel-row-inner"><div class="a-carousel-col a-carousel-left"><a class="a-button a-button-image a-carousel-button a-carousel-goto-prevpage" tabindex="0" href="#"><span class="a-button-inner"><i class="a-icon a-icon-previous"><span class="a-icon-alt">Zurück</span></i></span></a></div><div class="a-carousel-col a-carousel-center"><div class="a-carousel-viewport"><ol class="a-carousel" role="list">
                <li class="a-carousel-card a-float-left" role="listitem">
        <div data-p13n-asin-metadata="{&quot;ref&quot;:&quot;pd_sim_201_1&quot;,&quot;asin&quot;:&quot;B074C4HWSB&quot;}" class="a-section a-spacing-none p13n-asin">
            <a class="a-link-normal" href="/hblife-Wand-Kleiderst%C3%A4nder-Kleiderl%C3%BCfter-Wandgarderobe-Garderobenhaken/dp/B074C4HWSB/ref=pd_sim_201_1?_encoding=UTF8&pd_rd_i=B074C4HWSB&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=6Kg4Z&pd_rd_wg=KlAC1&pf_rd_p=3371dd0f-762d-4d8e-8f21-43659c1afaac&pf_rd_r=VBWKFM73Q96291SQHAHK&psc=1&refRID=VBWKFM73Q96291SQHAHK"><div class="a-section a-spacing-mini"><img alt="hblife Kleiderhaken Klappbar Wand-Kleiderständer Kleiderlüfter Wandgarderobe Garderobenhaken Aluminium für Wohnzimmer, Bad, Schlafzimmer, Büro, Silber Edelstahl Tube faltende" src="https://images-na.ssl-images-amazon.com/images/I/71-O2%2BhcvuL._AC_UL160_SR160,160_.jpg" class="a-dynamic-image p13n-sc-dynamic-image" height="160" width="160" data-a-dynamic-image="{&quot;https://images-na.ssl-images-amazon.com/images/I/71-O2%2BhcvuL._AC_UL480_SR480,480_.jpg&quot;:[480,480],&quot;https://images-na.ssl-images-amazon.com/images/I/71-O2%2BhcvuL._AC_UL320_SR320,320_.jpg&quot;:[320,320],&quot;https://images-na.ssl-images-amazon.com/images/I/71-O2%2BhcvuL._AC_UL160_SR160,160_.jpg&quot;:[160,160]}"></div>
        <div class="p13n-sc-truncate p13n-sc-line-clamp-4" aria-hidden="true" data-rows="4">
            hblife Kleiderhaken Klappbar Wand-Kleiderst&auml;nder Kleiderl&uuml;fter Wandgarderobe Garderobenhaken Aluminium f&uuml;r Wohnzimmer, Bad, Schlafzimmer, B&uuml;ro, Silber Edelstahl Tube faltende
        </div>
    </a>
            
        <div class="a-icon-row a-spacing-none">
            <a class="a-link-normal" title="4,2 von 5 Sternen" href="/product-reviews/B074C4HWSB/ref=pd_sim_201_cr_1?ie=UTF8&pd_rd_i=B074C4HWSB&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=6Kg4Z&pd_rd_wg=KlAC1&pf_rd_p=3371dd0f-762d-4d8e-8f21-43659c1afaac&pf_rd_r=VBWKFM73Q96291SQHAHK&refRID=VBWKFM73Q96291SQHAHK">
                <i class="a-icon a-icon-star a-star-4"><span class="a-icon-alt">4,2 von 5 Sternen</span></i>
            </a>
            <a class="a-size-small a-link-normal" href="/product-reviews/B074C4HWSB/ref=pd_sim_201_cr_1?ie=UTF8&pd_rd_i=B074C4HWSB&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=6Kg4Z&pd_rd_wg=KlAC1&pf_rd_p=3371dd0f-762d-4d8e-8f21-43659c1afaac&pf_rd_r=VBWKFM73Q96291SQHAHK&refRID=VBWKFM73Q96291SQHAHK">6</a>
        </div>
    <div class="a-row"><a class="a-link-normal a-text-normal" href="/hblife-Wand-Kleiderst%C3%A4nder-Kleiderl%C3%BCfter-Wandgarderobe-Garderobenhaken/dp/B074C4HWSB/ref=pd_sim_201_1?_encoding=UTF8&pd_rd_i=B074C4HWSB&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=6Kg4Z&pd_rd_wg=KlAC1&pf_rd_p=3371dd0f-762d-4d8e-8f21-43659c1afaac&pf_rd_r=VBWKFM73Q96291SQHAHK&psc=1&refRID=VBWKFM73Q96291SQHAHK"><span class="a-size-base a-color-price"><span class='p13n-sc-price'>EUR 17,99</span></span></a>   <span style="position: relative; top: 2px;"><i class="a-icon a-icon-prime a-icon-small" role="img" aria-label="Prime"></i></span></div>
        </div>
    </li><li class="a-carousel-card a-float-left" role="listitem">
        <div data-p13n-asin-metadata="{&quot;ref&quot;:&quot;pd_sim_201_2&quot;,&quot;asin&quot;:&quot;B01DUZM3PG&quot;}" class="a-section a-spacing-none p13n-asin">
            <a class="a-link-normal" href="/Gedotec-Wand-Klapphaken-Garderobenhaken-Kleiderl%C3%BCfter-Kleiderhaken/dp/B01DUZM3PG/ref=pd_sim_201_2?_encoding=UTF8&pd_rd_i=B01DUZM3PG&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=6Kg4Z&pd_rd_wg=KlAC1&pf_rd_p=3371dd0f-762d-4d8e-8f21-43659c1afaac&pf_rd_r=VBWKFM73Q96291SQHAHK&psc=1&refRID=VBWKFM73Q96291SQHAHK"><div class="a-section a-spacing-mini"><img alt="Gedotec Wand-Klapphaken Garderobenhaken Kleiderlüfter Kleiderhaken klappbar MITAL zum Einlassen | 140 x 16/128 mm | Chrom matt | 1 Stück - Wandgarderobe klappbar" src="https://images-na.ssl-images-amazon.com/images/I/71jbOLCupjL._AC_UL160_SR160,160_.jpg" class="a-dynamic-image p13n-sc-dynamic-image" height="160" width="160" data-a-dynamic-image="{&quot;https://images-na.ssl-images-amazon.com/images/I/71jbOLCupjL._AC_UL480_SR480,480_.jpg&quot;:[480,480],&quot;https://images-na.ssl-images-amazon.com/images/I/71jbOLCupjL._AC_UL160_SR160,160_.jpg&quot;:[160,160],&quot;https://images-na.ssl-images-amazon.com/images/I/71jbOLCupjL._AC_UL320_SR320,320_.jpg&quot;:[320,320]}"></div>
        <div class="p13n-sc-truncate p13n-sc-line-clamp-4" aria-hidden="true" data-rows="4">
            Gedotec Wand-Klapphaken Garderobenhaken Kleiderl&uuml;fter Kleiderhaken klappbar MITAL zum Einlassen | 140 x 16/128 mm | Chrom matt | 1 St&uuml;ck - Wandgarderobe klappbar
        </div>
    </a>
            
        <div class="a-icon-row a-spacing-none">
            <a class="a-link-normal" title="4,4 von 5 Sternen" href="/product-reviews/B01DUZM3PG/ref=pd_sim_201_cr_2?ie=UTF8&pd_rd_i=B01DUZM3PG&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=6Kg4Z&pd_rd_wg=KlAC1&pf_rd_p=3371dd0f-762d-4d8e-8f21-43659c1afaac&pf_rd_r=VBWKFM73Q96291SQHAHK&refRID=VBWKFM73Q96291SQHAHK">
                <i class="a-icon a-icon-star a-star-4-5"><span class="a-icon-alt">4,4 von 5 Sternen</span></i>
            </a>
            <a class="a-size-small a-link-normal" href="/product-reviews/B01DUZM3PG/ref=pd_sim_201_cr_2?ie=UTF8&pd_rd_i=B01DUZM3PG&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=6Kg4Z&pd_rd_wg=KlAC1&pf_rd_p=3371dd0f-762d-4d8e-8f21-43659c1afaac&pf_rd_r=VBWKFM73Q96291SQHAHK&refRID=VBWKFM73Q96291SQHAHK">63</a>
        </div>
    <div class="a-row"><a class="a-link-normal a-text-normal" href="/Gedotec-Wand-Klapphaken-Garderobenhaken-Kleiderl%C3%BCfter-Kleiderhaken/dp/B01DUZM3PG/ref=pd_sim_201_2?_encoding=UTF8&pd_rd_i=B01DUZM3PG&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=6Kg4Z&pd_rd_wg=KlAC1&pf_rd_p=3371dd0f-762d-4d8e-8f21-43659c1afaac&pf_rd_r=VBWKFM73Q96291SQHAHK&psc=1&refRID=VBWKFM73Q96291SQHAHK"><span class="a-size-base a-color-price"><span class='p13n-sc-price'>EUR 9,50</span></span></a>   </div>
        </div>
    </li><li class="a-carousel-card a-float-left" role="listitem">
        <div data-p13n-asin-metadata="{&quot;ref&quot;:&quot;pd_sim_201_3&quot;,&quot;asin&quot;:&quot;B06WWJLRTP&quot;}" class="a-section a-spacing-none p13n-asin">
            <a class="a-link-normal" href="/Mture-Wand-Kleiderst%C3%A4nder-Garderobenhaken-Kleiderl%C3%BCfter-Wandgarderobe/dp/B06WWJLRTP/ref=pd_sim_201_3?_encoding=UTF8&pd_rd_i=B06WWJLRTP&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=6Kg4Z&pd_rd_wg=KlAC1&pf_rd_p=3371dd0f-762d-4d8e-8f21-43659c1afaac&pf_rd_r=VBWKFM73Q96291SQHAHK&psc=1&refRID=VBWKFM73Q96291SQHAHK"><div class="a-section a-spacing-mini"><img alt="Mture Klappbar Wand-Kleiderständer, Kleiderhaken Garderobenhaken Kleiderlüfter Wandgarderobe Geeignet für Wohnzimmer, Bad, Schlafzimmer, Büro, Silber 40 x 33 x 30CM (2 pcs)" src="https://images-na.ssl-images-amazon.com/images/I/71dFpkYA-qL._AC_UL160_SR160,160_.jpg" class="a-dynamic-image p13n-sc-dynamic-image" height="160" width="160" data-a-dynamic-image="{&quot;https://images-na.ssl-images-amazon.com/images/I/71dFpkYA-qL._AC_UL320_SR320,320_.jpg&quot;:[320,320],&quot;https://images-na.ssl-images-amazon.com/images/I/71dFpkYA-qL._AC_UL160_SR160,160_.jpg&quot;:[160,160],&quot;https://images-na.ssl-images-amazon.com/images/I/71dFpkYA-qL._AC_UL480_SR480,480_.jpg&quot;:[480,480]}"></div>
        <div class="p13n-sc-truncate p13n-sc-line-clamp-4" aria-hidden="true" data-rows="4">
            Mture Klappbar Wand-Kleiderst&auml;nder, Kleiderhaken Garderobenhaken Kleiderl&uuml;fter Wandgarderobe Geeignet f&uuml;r Wohnzimmer, Bad, Schlafzimmer, B&uuml;ro, Silber 40 x 33 x 30CM (2 pcs)
        </div>
    </a>
            
        <div class="a-icon-row a-spacing-none">
            <a class="a-link-normal" title="3,9 von 5 Sternen" href="/product-reviews/B06WWJLRTP/ref=pd_sim_201_cr_3?ie=UTF8&pd_rd_i=B06WWJLRTP&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=6Kg4Z&pd_rd_wg=KlAC1&pf_rd_p=3371dd0f-762d-4d8e-8f21-43659c1afaac&pf_rd_r=VBWKFM73Q96291SQHAHK&refRID=VBWKFM73Q96291SQHAHK">
                <i class="a-icon a-icon-star a-star-4"><span class="a-icon-alt">3,9 von 5 Sternen</span></i>
            </a>
            <a class="a-size-small a-link-normal" href="/product-reviews/B06WWJLRTP/ref=pd_sim_201_cr_3?ie=UTF8&pd_rd_i=B06WWJLRTP&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=6Kg4Z&pd_rd_wg=KlAC1&pf_rd_p=3371dd0f-762d-4d8e-8f21-43659c1afaac&pf_rd_r=VBWKFM73Q96291SQHAHK&refRID=VBWKFM73Q96291SQHAHK">42</a>
        </div>
    <div class="a-row"><a class="a-link-normal a-text-normal" href="/Mture-Wand-Kleiderst%C3%A4nder-Garderobenhaken-Kleiderl%C3%BCfter-Wandgarderobe/dp/B06WWJLRTP/ref=pd_sim_201_3?_encoding=UTF8&pd_rd_i=B06WWJLRTP&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=6Kg4Z&pd_rd_wg=KlAC1&pf_rd_p=3371dd0f-762d-4d8e-8f21-43659c1afaac&pf_rd_r=VBWKFM73Q96291SQHAHK&psc=1&refRID=VBWKFM73Q96291SQHAHK"><span class="a-size-base a-color-price"><span class='p13n-sc-price'>EUR 18,99</span></span></a> <a class="a-link-normal a-text-normal" href="/Mture-Wand-Kleiderst%C3%A4nder-Garderobenhaken-Kleiderl%C3%BCfter-Wandgarderobe/dp/B06WWJLRTP/ref=pd_sim_201_3?_encoding=UTF8&pd_rd_i=B06WWJLRTP&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=6Kg4Z&pd_rd_wg=KlAC1&pf_rd_p=3371dd0f-762d-4d8e-8f21-43659c1afaac&pf_rd_r=VBWKFM73Q96291SQHAHK&psc=1&refRID=VBWKFM73Q96291SQHAHK"><span class="a-size-mini a-color-price aok-nowrap"><span class='p13n-sc-price'>(EUR 9,50 / Stück)</span></span></a>  <span style="position: relative; top: 2px;"><i class="a-icon a-icon-prime a-icon-small" role="img" aria-label="Prime"></i></span></div>
        </div>
    </li><li class="a-carousel-card a-float-left" role="listitem">
        <div data-p13n-asin-metadata="{&quot;ref&quot;:&quot;pd_sim_201_4&quot;,&quot;asin&quot;:&quot;B00I97AQ5U&quot;}" class="a-section a-spacing-none p13n-asin">
            <a class="a-link-normal" href="/DPS-Shopfitting-Rundrohr-Kleiderstange-Bodenbefestigung-Verchromt/dp/B00I97AQ5U/ref=pd_sim_201_4?_encoding=UTF8&pd_rd_i=B00I97AQ5U&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=6Kg4Z&pd_rd_wg=KlAC1&pf_rd_p=3371dd0f-762d-4d8e-8f21-43659c1afaac&pf_rd_r=VBWKFM73Q96291SQHAHK&psc=1&refRID=VBWKFM73Q96291SQHAHK"><div class="a-section a-spacing-mini"><img alt="DPS Shopfitting Ø25mm Rundrohr-Kleiderstange zur Decken-und Bodenbefestigung 100cm, Stahl, Verchromt" src="https://images-na.ssl-images-amazon.com/images/I/41AuNTzJddL._AC_UL160_SR160,160_.jpg" class="a-dynamic-image p13n-sc-dynamic-image" height="160" width="160" data-a-dynamic-image="{&quot;https://images-na.ssl-images-amazon.com/images/I/41AuNTzJddL._AC_UL480_SR480,480_.jpg&quot;:[480,480],&quot;https://images-na.ssl-images-amazon.com/images/I/41AuNTzJddL._AC_UL320_SR320,320_.jpg&quot;:[320,320],&quot;https://images-na.ssl-images-amazon.com/images/I/41AuNTzJddL._AC_UL160_SR160,160_.jpg&quot;:[160,160]}"></div>
        <div class="p13n-sc-truncate p13n-sc-line-clamp-4" aria-hidden="true" data-rows="4">
            DPS Shopfitting &Oslash;25mm Rundrohr-Kleiderstange zur Decken-und Bodenbefestigung 100cm, Stahl, Verchromt
        </div>
    </a>
            
        <div class="a-icon-row a-spacing-none">
            <a class="a-link-normal" title="4,8 von 5 Sternen" href="/product-reviews/B00I97AQ5U/ref=pd_sim_201_cr_4?ie=UTF8&pd_rd_i=B00I97AQ5U&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=6Kg4Z&pd_rd_wg=KlAC1&pf_rd_p=3371dd0f-762d-4d8e-8f21-43659c1afaac&pf_rd_r=VBWKFM73Q96291SQHAHK&refRID=VBWKFM73Q96291SQHAHK">
                <i class="a-icon a-icon-star a-star-5"><span class="a-icon-alt">4,8 von 5 Sternen</span></i>
            </a>
            <a class="a-size-small a-link-normal" href="/product-reviews/B00I97AQ5U/ref=pd_sim_201_cr_4?ie=UTF8&pd_rd_i=B00I97AQ5U&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=6Kg4Z&pd_rd_wg=KlAC1&pf_rd_p=3371dd0f-762d-4d8e-8f21-43659c1afaac&pf_rd_r=VBWKFM73Q96291SQHAHK&refRID=VBWKFM73Q96291SQHAHK">14</a>
        </div>
    <div class="a-row"><a class="a-link-normal a-text-normal" href="/DPS-Shopfitting-Rundrohr-Kleiderstange-Bodenbefestigung-Verchromt/dp/B00I97AQ5U/ref=pd_sim_201_4?_encoding=UTF8&pd_rd_i=B00I97AQ5U&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=6Kg4Z&pd_rd_wg=KlAC1&pf_rd_p=3371dd0f-762d-4d8e-8f21-43659c1afaac&pf_rd_r=VBWKFM73Q96291SQHAHK&psc=1&refRID=VBWKFM73Q96291SQHAHK"><span class="a-size-base a-color-price"><span class='p13n-sc-price'>EUR 11,95</span></span></a>   </div>
        </div>
    </li><li class="a-carousel-card a-float-left" role="listitem">
        <div data-p13n-asin-metadata="{&quot;ref&quot;:&quot;pd_sim_201_5&quot;,&quot;asin&quot;:&quot;B01MTE88FH&quot;}" class="a-section a-spacing-none p13n-asin">
            <a class="a-link-normal" href="/Kleiderhaken-Kleiderl%C3%BCfter-geschliffen-Kleiderb%C3%BCgel-M%C3%B6belbeschl%C3%A4ge/dp/B01MTE88FH/ref=pd_sim_201_5?_encoding=UTF8&pd_rd_i=B01MTE88FH&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=6Kg4Z&pd_rd_wg=KlAC1&pf_rd_p=3371dd0f-762d-4d8e-8f21-43659c1afaac&pf_rd_r=VBWKFM73Q96291SQHAHK&psc=1&refRID=VBWKFM73Q96291SQHAHK"><div class="a-section a-spacing-mini"><img alt="Aufbau Kleiderhaken Garderobe Kleiderlüfter klappbar ALISA Länge 330 mm | Alu grau geschliffen | Klapphaken für Kleiderbügel uvm. | Möbelbeschläge von GedoTec®" src="https://images-na.ssl-images-amazon.com/images/I/61xB7311fuL._AC_UL160_SR160,160_.jpg" class="a-dynamic-image p13n-sc-dynamic-image" height="160" width="160" data-a-dynamic-image="{&quot;https://images-na.ssl-images-amazon.com/images/I/61xB7311fuL._AC_UL480_SR480,480_.jpg&quot;:[480,480],&quot;https://images-na.ssl-images-amazon.com/images/I/61xB7311fuL._AC_UL320_SR320,320_.jpg&quot;:[320,320],&quot;https://images-na.ssl-images-amazon.com/images/I/61xB7311fuL._AC_UL160_SR160,160_.jpg&quot;:[160,160]}"></div>
        <div class="p13n-sc-truncate p13n-sc-line-clamp-4" aria-hidden="true" data-rows="4">
            Aufbau Kleiderhaken Garderobe Kleiderl&uuml;fter klappbar ALISA L&auml;nge 330 mm | Alu grau geschliffen | Klapphaken f&uuml;r Kleiderb&uuml;gel uvm. | M&ouml;belbeschl&auml;ge von GedoTec&reg;
        </div>
    </a>
            
        <div class="a-icon-row a-spacing-none">
            <a class="a-link-normal" title="4,3 von 5 Sternen" href="/product-reviews/B01MTE88FH/ref=pd_sim_201_cr_5?ie=UTF8&pd_rd_i=B01MTE88FH&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=6Kg4Z&pd_rd_wg=KlAC1&pf_rd_p=3371dd0f-762d-4d8e-8f21-43659c1afaac&pf_rd_r=VBWKFM73Q96291SQHAHK&refRID=VBWKFM73Q96291SQHAHK">
                <i class="a-icon a-icon-star a-star-4-5"><span class="a-icon-alt">4,3 von 5 Sternen</span></i>
            </a>
            <a class="a-size-small a-link-normal" href="/product-reviews/B01MTE88FH/ref=pd_sim_201_cr_5?ie=UTF8&pd_rd_i=B01MTE88FH&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=6Kg4Z&pd_rd_wg=KlAC1&pf_rd_p=3371dd0f-762d-4d8e-8f21-43659c1afaac&pf_rd_r=VBWKFM73Q96291SQHAHK&refRID=VBWKFM73Q96291SQHAHK">36</a>
        </div>
    <div class="a-row"><a class="a-link-normal a-text-normal" href="/Kleiderhaken-Kleiderl%C3%BCfter-geschliffen-Kleiderb%C3%BCgel-M%C3%B6belbeschl%C3%A4ge/dp/B01MTE88FH/ref=pd_sim_201_5?_encoding=UTF8&pd_rd_i=B01MTE88FH&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=6Kg4Z&pd_rd_wg=KlAC1&pf_rd_p=3371dd0f-762d-4d8e-8f21-43659c1afaac&pf_rd_r=VBWKFM73Q96291SQHAHK&psc=1&refRID=VBWKFM73Q96291SQHAHK"><span class="a-size-base a-color-price"><span class='p13n-sc-price'>EUR 6,50</span></span></a>   </div>
        </div>
    </li><li class="a-carousel-card a-float-left" role="listitem">
        <div data-p13n-asin-metadata="{&quot;ref&quot;:&quot;pd_sim_201_6&quot;,&quot;asin&quot;:&quot;B0727X3NXC&quot;}" class="a-section a-spacing-none p13n-asin">
            <a class="a-link-normal" href="/Aussenbereich-kleiderwandhaken-Kleiderst%C3%A4nder-Garderobenhaken-W%C3%A4schetrockner/dp/B0727X3NXC/ref=pd_sim_201_6?_encoding=UTF8&pd_rd_i=B0727X3NXC&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=6Kg4Z&pd_rd_wg=KlAC1&pf_rd_p=3371dd0f-762d-4d8e-8f21-43659c1afaac&pf_rd_r=VBWKFM73Q96291SQHAHK&psc=1&refRID=VBWKFM73Q96291SQHAHK"><div class="a-section a-spacing-mini"><img alt="XY Life Kleiderhaken Klappbar Aussenbereich Klapphaken kleiderwandhaken Wäschelüfter Wand haken Kleiderständer Wandhaken Kleiderlüfter Garderobenhaken für Ecken, Balkon, Wäschetrockner, Bäder, Silber" src="https://images-na.ssl-images-amazon.com/images/I/614rN5nvzEL._AC_UL160_SR160,160_.jpg" class="a-dynamic-image p13n-sc-dynamic-image" height="160" width="160" data-a-dynamic-image="{&quot;https://images-na.ssl-images-amazon.com/images/I/614rN5nvzEL._AC_UL320_SR320,320_.jpg&quot;:[320,320],&quot;https://images-na.ssl-images-amazon.com/images/I/614rN5nvzEL._AC_UL480_SR480,480_.jpg&quot;:[480,480],&quot;https://images-na.ssl-images-amazon.com/images/I/614rN5nvzEL._AC_UL160_SR160,160_.jpg&quot;:[160,160]}"></div>
        <div class="p13n-sc-truncate p13n-sc-line-clamp-4" aria-hidden="true" data-rows="4">
            XY Life Kleiderhaken Klappbar Aussenbereich Klapphaken kleiderwandhaken W&auml;schel&uuml;fter Wand haken Kleiderst&auml;nder Wandhaken Kleiderl&uuml;fter Garderobenhaken f&uuml;r Ecken, Balkon, W&auml;schetrockner, B&auml;der, Silber
        </div>
    </a>
            
        <div class="a-icon-row a-spacing-none">
            <a class="a-link-normal" title="4,4 von 5 Sternen" href="/product-reviews/B0727X3NXC/ref=pd_sim_201_cr_6?ie=UTF8&pd_rd_i=B0727X3NXC&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=6Kg4Z&pd_rd_wg=KlAC1&pf_rd_p=3371dd0f-762d-4d8e-8f21-43659c1afaac&pf_rd_r=VBWKFM73Q96291SQHAHK&refRID=VBWKFM73Q96291SQHAHK">
                <i class="a-icon a-icon-star a-star-4-5"><span class="a-icon-alt">4,4 von 5 Sternen</span></i>
            </a>
            <a class="a-size-small a-link-normal" href="/product-reviews/B0727X3NXC/ref=pd_sim_201_cr_6?ie=UTF8&pd_rd_i=B0727X3NXC&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=6Kg4Z&pd_rd_wg=KlAC1&pf_rd_p=3371dd0f-762d-4d8e-8f21-43659c1afaac&pf_rd_r=VBWKFM73Q96291SQHAHK&refRID=VBWKFM73Q96291SQHAHK">89</a>
        </div>
    <div class="a-row"><a class="a-link-normal a-text-normal" href="/Aussenbereich-kleiderwandhaken-Kleiderst%C3%A4nder-Garderobenhaken-W%C3%A4schetrockner/dp/B0727X3NXC/ref=pd_sim_201_6?_encoding=UTF8&pd_rd_i=B0727X3NXC&pd_rd_r=1ed1331c-0e06-11e9-ab4f-0333a0e7098d&pd_rd_w=6Kg4Z&pd_rd_wg=KlAC1&pf_rd_p=3371dd0f-762d-4d8e-8f21-43659c1afaac&pf_rd_r=VBWKFM73Q96291SQHAHK&psc=1&refRID=VBWKFM73Q96291SQHAHK"><span class="a-size-base a-color-price"><span class='p13n-sc-price'>EUR 10,99</span></span></a>   <span style="position: relative; top: 2px;"><i class="a-icon a-icon-prime a-icon-small" role="img" aria-label="Prime"></i></span></div>
        </div>
    </li>
            </ol></div></div><div class="a-carousel-col a-carousel-right"><a class="a-button a-button-image a-carousel-button a-carousel-goto-nextpage" tabindex="0" href="#"><span class="a-button-inner"><i class="a-icon a-icon-next"><span class="a-icon-alt">Weiter</span></i></span></a></div></div></div>
            
        <span class="a-end aok-hidden"></span></div>
    
                </div>
                
                
                
            </div>
        
        </div>
    
    




























        




































<script>if (typeof uet === 'function' && typeof ues === 'function') {var scope = 'Detail_dp-ads-center-promo_Desktop';var placementId = '739555b1-a421-49ff-9856-85ee45e58663';ues('wb', 'adplacements:' + scope.replace(/\\_/g, ':'), {wb:1}); uet('bb', 'adplacements:' + scope.replace(/\\_/g, ':'), {wb:1}); if (placementId) {ues('wb', 'adplacements:' + placementId, {wb:1});uet('bb', 'adplacements:' + placementId, {wb:1});}}</script><hr size="1" noshade="noshade" class="a-divider-normal" width="100%"><div id="ape_Detail_dp-ads-center-promo_Desktop_placement" class="copilot-secure-display celwidget  text/x-dacx-safeframe" data-campaign="4799" style="display: block; margin:auto; line-height:0; width:970px;" cel_widget_id="Detail_dp-ads-center-promo_Desktop" data-ad-details='{"slot" :"Detail_dp-ads-center-promo_Desktop","slotName" :"dp-ads-center-promo","src" : "https://aax-eu.amazon-adsystem.com/e/xsp/getAd?src=506&slot=dp-ads-center-promo&rid=01012e449a5812b988e8c56ff22caadafc60529b4f2d65308570956be88902107edd","adServer" :"cs","campaignId" :  "4799","arid" :"545242cec98b448cba49a093bc83860c","placementId": "739555b1-a421-49ff-9856-85ee45e58663","size" :{"width": "970px","height" : "250px"},"allowedSizes" :[],"allowedDomains" :  ["g-ecx.images-amazon.com"],"aanParams" :   "site%3Damazon.de%3Bpt%3DDetail%3Bslot%3Ddp-ads-center-promo%3Bpid%3DB01DQDZVCO%3Bq%3Dkleiderhaken%3Bbn%3D3167641%3Barid%3D545242cec98b448cba49a093bc83860c","loadAfter" :   "criticalFeature","extraDelay" :  0,"iframeExtraStyle": "","iframeClass":  "","iframeSandbox":"","adPixels": [],"adPixelDelay": "0","aaxInstrPixelUrl": "","usePrefetchRoute": false,"serverSideFetchAd": "false","enableAdBlockerDetector": false,"disableResizeFunc": true,"fallbackStaticAdImgUrl": "","fallbackStaticAdClickUrl": "","fallbackStaticAdExtraStyle": "","adFeedbackInfo": {"endPoint": "/gp/aq-feedback/lazyLoad/handler/af-link-handler.html","boolFeedback": true,"slugText": "Anzeige"},"adPlacementMetaData": {"searchTerms": "a2xlaWRlcmhha2Vu","pageUrl": "aHR0cHM6Ly93d3cuYW1hem9uLmRlL2dwL3Byb2R1Y3QvQjAxRFFEWlZDTz9yZWYlNUY9c3IlNUYxJTVGOCZxaWQ9MTU0NjM3NTQ4MSZzcj04LTgma2V5d29yZHM9a2xlaWRlcmhha2Vu","adElementId": "ape_Detail_dp-ads-center-promo_Desktop_placement","pageType": "Detail","slotName": "dp-ads-center-promo"},"adCreativeMetaData": {"adNetwork": "cs"},"advertisementStyle": {"position": "absolute","top": "2px","right": "0px","display": "inline-block","font": "normal 11px Arial","color": "grey"},"feedbackDivStyle": {"position": "relative","height": "14px","top": "2px"},"viewabilityStandards": [{"p": 0, "t": 0, "def": "amzn"}, {"p": 30, "t": 1, "def": "iab"}, {"p": 100, "t": 0, "def": "groupm"}],"ajaxWeblabTriggerId": "","abpStatus": "1","abpAcceptable": "true","DAsfUrl":"https://images-eu.ssl-images-amazon.com/images/G/03/ape/sf/desktop/DAsf-1.50.917d6c3._V459327015_.js"}' aria-hidden="true"></div><script>(function(){function a(d,e){if(window.addEventListener){window.addEventListener(d,e,false);}else{if(window.attachEvent){window.attachEvent("on"+d,e);}}}function c(d,e){if(window.removeEventListener){window.removeEventListener(d,e,false);}else{if(window.detachEvent){window.detachEvent("on"+d,e);}}}var b=function(){(function(){(function(j,n){j.sfLogErrors=j.sfLogErrors||false;var o=o||function(s,r){r=r||new Error(s);if(j.ue&&typeof ue.count=="function"){ue.count("adplacements:safeFrameError",1);}if(!j.sfLogErrors){return;}if(j.ueLogError){j.ueLogError(r,{logLevel:"ERROR",attribution:"APE-safeframe",message:s+" "});}else{if(typeof console!=="undefined"&&console.error){console.error(s,r);}}};j.aanParams=j.aanParams||{};j.aanParams["dp-ads-center-promo"]="site=amazon.de;pt=Detail;slot=dp-ads-center-promo;pid=B01DQDZVCO;q=kleiderhaken;bn=3167641;arid=545242cec98b448cba49a093bc83860c";j["dp-ads-center-promo"]={};j["dp-ads-center-promo"].adStartTime=(new Date()).getTime();function d(){return j.innerHeight||n.documentElement.clientHeight;}function g(){return j.innerWidth||n.documentElement.clientWidth;}function e(t,r,s){if(t>0){return(s>t);}else{return(r>0);}}var f=function(){return(Date.now?Date.now():new Date().getTime());};throttle=function(s,u,y){var r,w,z;var x=null;var v=0;if(!y){y={};}var t=function(){v=y.leading===false?0:f();x=null;z=s.apply(r,w);if(!x){r=w=null;}};return function(){var B=f();if(!v&&y.leading===false){v=B;}var A=u-(B-v);r=this;w=arguments;if(A<=0||A>u){if(x){clearTimeout(x);x=null;}v=B;z=s.apply(r,w);if(!x){r=w=null;}}else{if(!x&&y.trailing!==false){x=setTimeout(t,A);}}return z;};};function l(u,w,v,r){try{var t=n.getElementById(u).getBoundingClientRect();if(e(t.top,t.bottom,d())&&e(t.left,t.right,g())){if(typeof uet=="function"){uet("bb","adplacements:viewablelatency:"+w,{wb:1});if(v){uet("bb","adplacements:viewablelatency:"+v,{wb:1});}}if(typeof uex=="function"&&j.ue&&typeof ue.count=="function"){if(j.apeViewableLatencyTrackers[r].loaded){uex("ld","adplacements:viewablelatency:"+w,{wb:1});if(v){uex("ld","adplacements:viewablelatency:"+v,{wb:1});}ue.count("adplacements:htmlviewed:loaded:"+w,1);if(v){ue.count("adplacements:htmlviewed:loaded:"+v,1);}}ue.count("adplacements:htmlviewed:"+w,1);if(v){ue.count("adplacements:htmlviewed:"+v,1);}}j.apeViewableLatencyTrackers[r].viewed=true;if(j.apeViewableLatencyTrackers[r].tracker){c("scroll",j.apeViewableLatencyTrackers[r].tracker);c("resize",j.apeViewableLatencyTrackers[r].tracker);}}}catch(s){j.apeViewableLatencyTrackers[r].valid=false;}}try{j.apeViewableLatencyTrackers=j.apeViewableLatencyTrackers||{};var q="ape_Detail_dp-ads-center-promo_Desktop_placement";var p="Detail_dp-ads-center-promo_Desktop".replace(/\\_/g,":");var h="739555b1-a421-49ff-9856-85ee45e58663";var i="545242cec98b448cba49a093bc83860c";j.apeViewableLatencyTrackers[i]=j.apeViewableLatencyTrackers[i]||{};j.apeViewableLatencyTrackers[i].valid=true;l(q,p,h,i);if(j.apeViewableLatencyTrackers[i].valid&&!j.apeViewableLatencyTrackers[i].viewed){j.apeViewableLatencyTrackers[i].tracker=throttle(function(){l(q,p,h,i);},20);a("scroll",j.apeViewableLatencyTrackers[i].tracker);a("resize",j.apeViewableLatencyTrackers[i].tracker);}}catch(k){if(j.apeViewableLatencyTrackers&&j.apeViewableLatencyTrackers["545242cec98b448cba49a093bc83860c"]){j.apeViewableLatencyTrackers["545242cec98b448cba49a093bc83860c"].valid=false;}o("Error initializing viewable latency instrumentation",k);}try{if(j.DAsf){j.DAsf.loadAds();}else{var m=n.createElement("script");m.type="text/javascript";m.async=true;m.setAttribute("crossorigin","anonymous");m.charset="utf-8";m.src="https://images-eu.ssl-images-amazon.com/images/G/03/ape/sf/desktop/DAsf-1.50.917d6c3._V459327015_.js?csm_attribution=APE-SafeFrame";m.onerror=function(){o("Error loading SafeFrame library");};(n.getElementsByTagName("head")[0]||n.getElementsByTagName("body")[0]).appendChild(m);}}catch(k){o("Error appending DAsf library",k);}}(window,document));})();};b();})();</script><div style="margin-bottom:10px;"></div>





























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
            <a href="https://www.amazon.de/ask/questions/asin/B01DQDZVCO/ref=cm_cd_dp_lla_ql_ll">Fragen und Antworten anzeigen</a>
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
             url: "/gp/ask-widget/askWidget.html?asin=B01DQDZVCO&askError=&askMessage=&wdg=home_display_on_website&askLanguage=&requestID=VBWKFM73Q96291SQHAHK",
             metrics : true,
             name : 'ask_btf',
             cache : false
             });
     });
</script>
</div>





<a id="customerReviews" class="a-link-normal" href="#"></a><hr class="a-spacing-large a-divider-normal"><span class="cr-widget-PageState">
  <span id="cr-state-object" data-state='{"asin":"B01DQDZVCO","customerId":"A96YKT37ODSSG","deviceType":"desktop","reviewCommentsAjaxUrl":"","reviewCommentSubmissionAjaxUrl":"","approvedAuthorAjaxUrl":"","reviewsAjaxUrl":"/hz/reviews-render/ajax/medley-filtered-reviews/get/","medleyReviewsAjaxUrl":"/hz/reviews-render/ajax/medley-reviews/get/","signinUrl":"https://www.amazon.de/WINOMO-Kleiderhaken-Klappbar-Wand-Kleiderständer/product-reviews/B01DQDZVCO?ie\u003dUTF8","weblabTriggerUrl":"/hz/reviews-render/ajax/weblab-trigger","reftagTriggerUrl":"/hz/reviews-render/ajax/reftag-trigger","mobileImageGalleryUrl":"","getImagesAjaxUrl":"","productInfoUrl":"","disableScroll":false}'></span>
</span>
<link rel="stylesheet" href="https://images-eu.ssl-images-amazon.com/images/I/01r96ER8PHL._RC|01LsHoHLL0L.css,01LKsGfpclL.css,01x1K0jaQnL.css,01cdXa5nSoL.css_.css?AUIClients/DesktopMedleyFilteringMetaAsset" />
<script>
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/31EfOK3OA7L._RC|11zK+fpVdVL.js,01vTmKfX-gL.js,11xQMWsDHFL.js,21cvg-DIyQL.js_.js?AUIClients/DesktopMedleyFilteringMetaAsset');
</script>
<div id="reviewsMedley" data-hook="reviews-medley-widget" class="a-fixed-left-grid a-spacing-extra-large"><div class="a-fixed-left-grid-inner" style="padding-left:300px"><div class="a-fixed-left-grid-col a-col-left" style="width:300px;margin-left:-300px;float:left;"><a id="dp-summary-see-all-reviews" data-hook="see-all-reviews-link" class="a-link-normal a-color-base" href="/WINOMO-Kleiderhaken-Klappbar-Wand-Kleiderständer/product-reviews/B01DQDZVCO/ref=cm_cr_dp_d_show_all_top?ie=UTF8&amp;reviewerType=all_reviews"><h2 data-hook="total-review-count">110 Kundenrezensionen</h2></a><div class="a-section a-spacing-none a-spacing-top-mini cr-widget-ACR"><div class="a-fixed-left-grid AverageCustomerReviews a-spacing-medium"><div class="a-fixed-left-grid-inner" style="padding-left:100px"><div class="a-fixed-left-grid-col a-col-left" style="width:105px;margin-left:-105px;float:left;"><i data-hook="average-star-rating" class="a-icon a-icon-star-medium a-star-medium-4-5 averageStarRating"><span class="a-icon-alt">4,7 von 5 Sternen</span></i></div><div class="a-fixed-left-grid-col a-col-right" style="padding-left:0%;float:left;"><div class="a-row"><span class="a-size-base"><span class="a-declarative" data-action="a-popover" data-a-popover="{&quot;inlineContent&quot;:&quot;Amazon berechnet die Sternbewertungen eines Produkts mithilfe eines maschinell gelernten Modells anstelle des Durchschnitts der Rohdaten. Das maschinell gelernte Modell berücksichtigt Faktoren wie das Alter einer Bewertung, die Beurteilung der Nützlichkeit durch Kunden und ob die Bewertungen aus geprüften Einkäufen stammen.&quot;}"><a href="javascript:void(0)" class="a-popover-trigger a-declarative"><span data-hook="rating-out-of-text" class="arp-rating-out-of-text a-color-base">4,7 von 5 Sternen</span><i class="a-icon a-icon-popover"></i></a></span></span></div></div></div></div></div><span class="cr-widget-Histogram">
      <div class="a-fixed-left-grid a-spacing-none"><div class="a-fixed-left-grid-inner" style="padding-left:280px"><div class="a-fixed-left-grid-col a-col-left" style="width:280px;margin-left:-280px;float:left;"><span class="a-declarative" data-action="reviews:filter-action:push-state" data-reviews:filter-action:push-state="{&quot;scrollToSelector&quot;:&quot;#reviews-filter-info&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;}"><table id="histogramTable" class="a-normal a-align-middle a-spacing-base" role="presentation"><tr data-reftag="cm_cr_dp_d_hist_5" data-reviews-state-param="{&quot;filterByStar&quot;:&quot;five_star&quot;,&quot;pageNumber&quot;:&quot;1&quot;}" class="a-histogram-row"><td class="aok-nowrap"><a aria-label="5 Sterne (85%)" class="a-size-base a-link-normal 5star" title="5 Sterne" href="/WINOMO-Kleiderhaken-Klappbar-Wand-Kleiderständer/product-reviews/B01DQDZVCO/ref=cm_cr_dp_d_hist_5?ie=UTF8&amp;filterByStar=five_star&amp;reviewerType=all_reviews#reviews-filter-bar">5 Sterne</a><span class="a-letter-space"></span></td><td aria-hidden="true" class="a-span10"><a class="a-size-base a-link-normal" tabindex="-1" href="/WINOMO-Kleiderhaken-Klappbar-Wand-Kleiderständer/product-reviews/B01DQDZVCO/ref=cm_cr_dp_d_hist_5?ie=UTF8&amp;filterByStar=five_star&amp;reviewerType=all_reviews#reviews-filter-bar"><div class="a-meter 5star" aria-label="85%"><div class="a-meter-bar" style="width: 85%;"></div></div></a></td><td aria-hidden="true" class="a-text-right aok-nowrap"><a class="a-size-base a-link-normal 5star histogram-review-count a-color-secondary" tabindex="-1" href="/WINOMO-Kleiderhaken-Klappbar-Wand-Kleiderständer/product-reviews/B01DQDZVCO/ref=cm_cr_dp_d_hist_5?ie=UTF8&amp;filterByStar=five_star&amp;reviewerType=all_reviews#reviews-filter-bar">85%</a><span class="a-letter-space"></span></td></tr><tr data-reftag="cm_cr_dp_d_hist_4" data-reviews-state-param="{&quot;filterByStar&quot;:&quot;four_star&quot;,&quot;pageNumber&quot;:&quot;1&quot;}" class="a-histogram-row"><td class="aok-nowrap"><a aria-label="4 Sterne (9%)" class="a-size-base a-link-normal 4star" title="4 Sterne" href="/WINOMO-Kleiderhaken-Klappbar-Wand-Kleiderständer/product-reviews/B01DQDZVCO/ref=cm_cr_dp_d_hist_4?ie=UTF8&amp;filterByStar=four_star&amp;reviewerType=all_reviews#reviews-filter-bar">4 Sterne</a><span class="a-letter-space"></span></td><td aria-hidden="true" class="a-span10"><a class="a-size-base a-link-normal" tabindex="-1" href="/WINOMO-Kleiderhaken-Klappbar-Wand-Kleiderständer/product-reviews/B01DQDZVCO/ref=cm_cr_dp_d_hist_4?ie=UTF8&amp;filterByStar=four_star&amp;reviewerType=all_reviews#reviews-filter-bar"><div class="a-meter 4star" aria-label="9%"><div class="a-meter-bar" style="width: 9%;"></div></div></a></td><td aria-hidden="true" class="a-text-right aok-nowrap"><a class="a-size-base a-link-normal 4star histogram-review-count a-color-secondary" tabindex="-1" href="/WINOMO-Kleiderhaken-Klappbar-Wand-Kleiderständer/product-reviews/B01DQDZVCO/ref=cm_cr_dp_d_hist_4?ie=UTF8&amp;filterByStar=four_star&amp;reviewerType=all_reviews#reviews-filter-bar">9%</a><span class="a-letter-space"></span></td></tr><tr data-reftag="cm_cr_dp_d_hist_3" data-reviews-state-param="{&quot;filterByStar&quot;:&quot;three_star&quot;,&quot;pageNumber&quot;:&quot;1&quot;}" class="a-histogram-row"><td class="aok-nowrap"><a aria-label="3 Sterne (4%)" class="a-size-base a-link-normal 3star" title="3 Sterne" href="/WINOMO-Kleiderhaken-Klappbar-Wand-Kleiderständer/product-reviews/B01DQDZVCO/ref=cm_cr_dp_d_hist_3?ie=UTF8&amp;filterByStar=three_star&amp;reviewerType=all_reviews#reviews-filter-bar">3 Sterne</a><span class="a-letter-space"></span></td><td aria-hidden="true" class="a-span10"><a class="a-size-base a-link-normal" tabindex="-1" href="/WINOMO-Kleiderhaken-Klappbar-Wand-Kleiderständer/product-reviews/B01DQDZVCO/ref=cm_cr_dp_d_hist_3?ie=UTF8&amp;filterByStar=three_star&amp;reviewerType=all_reviews#reviews-filter-bar"><div class="a-meter 3star" aria-label="4%"><div class="a-meter-bar" style="width: 4%;"></div></div></a></td><td aria-hidden="true" class="a-text-right aok-nowrap"><a class="a-size-base a-link-normal 3star histogram-review-count a-color-secondary" tabindex="-1" href="/WINOMO-Kleiderhaken-Klappbar-Wand-Kleiderständer/product-reviews/B01DQDZVCO/ref=cm_cr_dp_d_hist_3?ie=UTF8&amp;filterByStar=three_star&amp;reviewerType=all_reviews#reviews-filter-bar">4%</a><span class="a-letter-space"></span></td></tr><tr data-reftag="cm_cr_dp_d_hist_2" data-reviews-state-param="{&quot;filterByStar&quot;:&quot;two_star&quot;,&quot;pageNumber&quot;:&quot;1&quot;}" class="a-histogram-row"><td class="aok-nowrap"><a aria-label="2 Sterne (1%)" class="a-size-base a-link-normal 2star" title="2 Sterne" href="/WINOMO-Kleiderhaken-Klappbar-Wand-Kleiderständer/product-reviews/B01DQDZVCO/ref=cm_cr_dp_d_hist_2?ie=UTF8&amp;filterByStar=two_star&amp;reviewerType=all_reviews#reviews-filter-bar">2 Sterne</a><span class="a-letter-space"></span></td><td aria-hidden="true" class="a-span10"><a class="a-size-base a-link-normal" tabindex="-1" href="/WINOMO-Kleiderhaken-Klappbar-Wand-Kleiderständer/product-reviews/B01DQDZVCO/ref=cm_cr_dp_d_hist_2?ie=UTF8&amp;filterByStar=two_star&amp;reviewerType=all_reviews#reviews-filter-bar"><div class="a-meter 2star" aria-label="1%"><div class="a-meter-bar" style="width: 1%;"></div></div></a></td><td aria-hidden="true" class="a-text-right aok-nowrap"><a class="a-size-base a-link-normal 2star histogram-review-count a-color-secondary" tabindex="-1" href="/WINOMO-Kleiderhaken-Klappbar-Wand-Kleiderständer/product-reviews/B01DQDZVCO/ref=cm_cr_dp_d_hist_2?ie=UTF8&amp;filterByStar=two_star&amp;reviewerType=all_reviews#reviews-filter-bar">1%</a><span class="a-letter-space"></span></td></tr><tr data-reftag="cm_cr_dp_d_hist_1" data-reviews-state-param="{&quot;filterByStar&quot;:&quot;one_star&quot;,&quot;pageNumber&quot;:&quot;1&quot;}" class="a-histogram-row"><td class="aok-nowrap"><a aria-label="1 Stern (1%)" class="a-size-base a-link-normal 1star" title="1 Stern" href="/WINOMO-Kleiderhaken-Klappbar-Wand-Kleiderständer/product-reviews/B01DQDZVCO/ref=cm_cr_dp_d_hist_1?ie=UTF8&amp;filterByStar=one_star&amp;reviewerType=all_reviews#reviews-filter-bar">1 Stern</a><span class="a-letter-space"></span></td><td aria-hidden="true" class="a-span10"><a class="a-size-base a-link-normal" tabindex="-1" href="/WINOMO-Kleiderhaken-Klappbar-Wand-Kleiderständer/product-reviews/B01DQDZVCO/ref=cm_cr_dp_d_hist_1?ie=UTF8&amp;filterByStar=one_star&amp;reviewerType=all_reviews#reviews-filter-bar"><div class="a-meter 1star" aria-label="1%"><div class="a-meter-bar" style="width: 1%;"></div></div></a></td><td aria-hidden="true" class="a-text-right aok-nowrap"><a class="a-size-base a-link-normal 1star histogram-review-count a-color-secondary" tabindex="-1" href="/WINOMO-Kleiderhaken-Klappbar-Wand-Kleiderständer/product-reviews/B01DQDZVCO/ref=cm_cr_dp_d_hist_1?ie=UTF8&amp;filterByStar=one_star&amp;reviewerType=all_reviews#reviews-filter-bar">1%</a><span class="a-letter-space"></span></td></tr></table></span></div></div></div></span>
    <hr class="a-spacing-large a-spacing-top-large a-divider-normal"><span class="cr-widget-SummaryAttribute" data-hook="cr-widget-SummaryAttribute"></span>
  <h3 data-hook="solicitation-title" class="a-spacing-micro">Dieses Produkt bewerten</h3><div data-hook="share-your-thoughts-text" id="dp-summary-share-your-thoughts" class="a-row a-spacing-medium">Sagen Sie Ihre Meinung zu diesem Artikel</div><div class="a-row"><span class="a-button a-button-base writeReviewButton cm-cr-button-wide"><span class="a-button-inner"><a href="/review/create-review/ref=cm_cr_dp_d_wr_but_top?ie=UTF8&amp;channel=glance-detail&amp;asin=B01DQDZVCO" data-hook="write-review-button" class="a-button-text" role="button">Kundenrezension verfassen</a></span></span></div><hr class="a-spacing-extra-large a-spacing-top-extra-large a-divider-normal"><div id="ADPlaceholder" class="a-section reviews-display-ad">


















        






















        




































<script>if (typeof uet === 'function' && typeof ues === 'function') {var scope = 'Detail_customer-reviews-top_Glance';var placementId = 'a95e5659-4675-40b1-824d-2af40af7e0bf';ues('wb', 'adplacements:' + scope.replace(/\\_/g, ':'), {wb:1}); uet('bb', 'adplacements:' + scope.replace(/\\_/g, ':'), {wb:1}); if (placementId) {ues('wb', 'adplacements:' + placementId, {wb:1});uet('bb', 'adplacements:' + placementId, {wb:1});}}</script><div id="ape_Detail_customer-reviews-top_Glance_placement" class="copilot-secure-display celwidget  text/x-dacx-safeframe" data-campaign="3361" style="width: 300px; overflow:hidden; height: 280px;" cel_widget_id="Detail_customer-reviews-top_Glance" data-ad-details='{"slot" :"Detail_customer-reviews-top_Glance","slotName" :"customer-reviews-top","src" : "https://aax-eu.amazon-adsystem.com/e/xsp/getAd?src=506&slot=customer-reviews-top&rid=01012e449a5812b988e8c56ff22caadafc60529b4f2d65308570956be88902107edd","adServer" :"cs","campaignId" :  "3361","arid" :"8790f0f53367480ca6a417a37c70a0ea","placementId": "a95e5659-4675-40b1-824d-2af40af7e0bf","size" :{"width": "300px","height" : "250px"},"allowedSizes" :[],"allowedDomains" :  ["g-ecx.images-amazon.com"],"aanParams" :   "site%3Damazon.de%3Bpt%3DDetail%3Bslot%3Dcustomer-reviews-top%3Bpid%3DB01DQDZVCO%3Bq%3Dkleiderhaken%3Bbn%3D3167641%3Barid%3D8790f0f53367480ca6a417a37c70a0ea","loadAfter" :   "criticalFeature","extraDelay" :  0,"iframeExtraStyle": "","iframeClass":  "","iframeSandbox":"","adPixels": [],"adPixelDelay": "0","aaxInstrPixelUrl": "","usePrefetchRoute": false,"serverSideFetchAd": "false","enableAdBlockerDetector": false,"disableResizeFunc": true,"fallbackStaticAdImgUrl": "","fallbackStaticAdClickUrl": "","fallbackStaticAdExtraStyle": "","adFeedbackInfo": {"endPoint": "/gp/aq-feedback/lazyLoad/handler/af-link-handler.html","boolFeedback": true,"slugText": "Anzeige"},"adPlacementMetaData": {"searchTerms": "a2xlaWRlcmhha2Vu","pageUrl": "aHR0cHM6Ly93d3cuYW1hem9uLmRlL1dFQi1JTkYvdmlld3MvbWVkbGV5UkFXUGFnZVZpZXcuanNwP3JlZiU1Rj1zciU1RjElNUY4JnFpZD0xNTQ2Mzc1NDgxJnNyPTgtOCZrZXl3b3Jkcz1rbGVpZGVyaGFrZW4=","adElementId": "ape_Detail_customer-reviews-top_Glance_placement","pageType": "Detail","slotName": "customer-reviews-top"},"adCreativeMetaData": {"adNetwork": "cs"},"advertisementStyle": {"position": "absolute","top": "2px","right": "0px","display": "inline-block","font": "normal 11px Arial","color": "grey"},"feedbackDivStyle": {"position": "relative","height": "14px","top": "2px"},"viewabilityStandards": [{"p": 0, "t": 0, "def": "amzn"}, {"p": 50, "t": 1, "def": "iab"}, {"p": 100, "t": 0, "def": "groupm"}],"ajaxWeblabTriggerId": "","abpStatus": "1","abpAcceptable": "true","DAsfUrl":"https://images-eu.ssl-images-amazon.com/images/G/03/ape/sf/desktop/DAsf-1.50.917d6c3._V459327015_.js"}' aria-hidden="true"></div><script>(function(){function a(d,e){if(window.addEventListener){window.addEventListener(d,e,false);}else{if(window.attachEvent){window.attachEvent("on"+d,e);}}}function c(d,e){if(window.removeEventListener){window.removeEventListener(d,e,false);}else{if(window.detachEvent){window.detachEvent("on"+d,e);}}}var b=function(){(function(){(function(j,n){j.sfLogErrors=j.sfLogErrors||false;var o=o||function(s,r){r=r||new Error(s);if(j.ue&&typeof ue.count=="function"){ue.count("adplacements:safeFrameError",1);}if(!j.sfLogErrors){return;}if(j.ueLogError){j.ueLogError(r,{logLevel:"ERROR",attribution:"APE-safeframe",message:s+" "});}else{if(typeof console!=="undefined"&&console.error){console.error(s,r);}}};j.aanParams=j.aanParams||{};j.aanParams["customer-reviews-top"]="site=amazon.de;pt=Detail;slot=customer-reviews-top;pid=B01DQDZVCO;q=kleiderhaken;bn=3167641;arid=8790f0f53367480ca6a417a37c70a0ea";j["customer-reviews-top"]={};j["customer-reviews-top"].adStartTime=(new Date()).getTime();function d(){return j.innerHeight||n.documentElement.clientHeight;}function g(){return j.innerWidth||n.documentElement.clientWidth;}function e(t,r,s){if(t>0){return(s>t);}else{return(r>0);}}var f=function(){return(Date.now?Date.now():new Date().getTime());};throttle=function(s,u,y){var r,w,z;var x=null;var v=0;if(!y){y={};}var t=function(){v=y.leading===false?0:f();x=null;z=s.apply(r,w);if(!x){r=w=null;}};return function(){var B=f();if(!v&&y.leading===false){v=B;}var A=u-(B-v);r=this;w=arguments;if(A<=0||A>u){if(x){clearTimeout(x);x=null;}v=B;z=s.apply(r,w);if(!x){r=w=null;}}else{if(!x&&y.trailing!==false){x=setTimeout(t,A);}}return z;};};function l(u,w,v,r){try{var t=n.getElementById(u).getBoundingClientRect();if(e(t.top,t.bottom,d())&&e(t.left,t.right,g())){if(typeof uet=="function"){uet("bb","adplacements:viewablelatency:"+w,{wb:1});if(v){uet("bb","adplacements:viewablelatency:"+v,{wb:1});}}if(typeof uex=="function"&&j.ue&&typeof ue.count=="function"){if(j.apeViewableLatencyTrackers[r].loaded){uex("ld","adplacements:viewablelatency:"+w,{wb:1});if(v){uex("ld","adplacements:viewablelatency:"+v,{wb:1});}ue.count("adplacements:htmlviewed:loaded:"+w,1);if(v){ue.count("adplacements:htmlviewed:loaded:"+v,1);}}ue.count("adplacements:htmlviewed:"+w,1);if(v){ue.count("adplacements:htmlviewed:"+v,1);}}j.apeViewableLatencyTrackers[r].viewed=true;if(j.apeViewableLatencyTrackers[r].tracker){c("scroll",j.apeViewableLatencyTrackers[r].tracker);c("resize",j.apeViewableLatencyTrackers[r].tracker);}}}catch(s){j.apeViewableLatencyTrackers[r].valid=false;}}try{j.apeViewableLatencyTrackers=j.apeViewableLatencyTrackers||{};var q="ape_Detail_customer-reviews-top_Glance_placement";var p="Detail_customer-reviews-top_Glance".replace(/\\_/g,":");var h="a95e5659-4675-40b1-824d-2af40af7e0bf";var i="8790f0f53367480ca6a417a37c70a0ea";j.apeViewableLatencyTrackers[i]=j.apeViewableLatencyTrackers[i]||{};j.apeViewableLatencyTrackers[i].valid=true;l(q,p,h,i);if(j.apeViewableLatencyTrackers[i].valid&&!j.apeViewableLatencyTrackers[i].viewed){j.apeViewableLatencyTrackers[i].tracker=throttle(function(){l(q,p,h,i);},20);a("scroll",j.apeViewableLatencyTrackers[i].tracker);a("resize",j.apeViewableLatencyTrackers[i].tracker);}}catch(k){if(j.apeViewableLatencyTrackers&&j.apeViewableLatencyTrackers["8790f0f53367480ca6a417a37c70a0ea"]){j.apeViewableLatencyTrackers["8790f0f53367480ca6a417a37c70a0ea"].valid=false;}o("Error initializing viewable latency instrumentation",k);}try{if(j.DAsf){j.DAsf.loadAds();}else{var m=n.createElement("script");m.type="text/javascript";m.async=true;m.setAttribute("crossorigin","anonymous");m.charset="utf-8";m.src="https://images-eu.ssl-images-amazon.com/images/G/03/ape/sf/desktop/DAsf-1.50.917d6c3._V459327015_.js?csm_attribution=APE-SafeFrame";m.onerror=function(){o("Error loading SafeFrame library");};(n.getElementsByTagName("head")[0]||n.getElementsByTagName("body")[0]).appendChild(m);}}catch(k){o("Error appending DAsf library",k);}}(window,document));})();};b();})();</script>










</div></div><div class="a-fixed-left-grid-col a-col-right" style="padding-left:2.5%;float:left;"><div class="a-row cm_cr_grid_center_container"><div class="a-fixed-right-grid-col cm_cr_grid_center_left" style="float:left;"></div><div class="a-fixed-right-grid-col cm_cr_grid_center_right" style="float:left;"><span class="cr-widget-MedleyCustomerImages" data-hook="cr-widget-MedleyCustomerImages">
      <div class="a-popover-preload" id="a-popover-reviews-image-gallery"><div class="reviewLightboxPopoverContainer" data-hook="customer-images-modal">
      <div class="reviewsLightbox" id="reviews-image-gallery"></div>
    </div>
  </div><div id="reviews-image-gallery-container" data-asin="B01DQDZVCO" data-hook="customer-images-widget" class="a-section a-spacing-medium reviews-customer-images"><div class="a-row"><h3>Kundenbilder</h3></div><div class="a-row a-spacing-small a-spacing-top-small"><div class="review-image-tile" data-hook="review-image-tile-gallery">
          <img alt="Kundenbild" src="https://images-na.ssl-images-amazon.com/images/I/71PVTkt3i8L._CR51,0,1363,1363_UX175.jpg" class="a-dynamic-image cr-customer-image-thumbnail" width="22.5%" data-a-dynamic-image="{&quot;https://images-na.ssl-images-amazon.com/images/I/71PVTkt3i8L._CR51,0,1363,1363_UX175.jpg&quot;:[175,175],&quot;https://images-na.ssl-images-amazon.com/images/I/71PVTkt3i8L._CR51,0,1363,1363_UX64.jpg&quot;:[64,64]}"></div>
      <div class="review-image-tile" data-hook="review-image-tile-gallery">
          <img alt="Kundenbild" src="https://images-na.ssl-images-amazon.com/images/I/71sxCmiV3rL._CR0,587,716,716_UX175.jpg" class="a-dynamic-image cr-customer-image-thumbnail" width="22.5%" data-a-dynamic-image="{&quot;https://images-na.ssl-images-amazon.com/images/I/71sxCmiV3rL._CR0,587,716,716_UX175.jpg&quot;:[175,175],&quot;https://images-na.ssl-images-amazon.com/images/I/71sxCmiV3rL._CR0,587,716,716_UX64.jpg&quot;:[64,64]}"></div>
      <div class="review-image-tile" data-hook="review-image-tile-gallery">
          <img alt="Kundenbild" src="https://images-na.ssl-images-amazon.com/images/I/712hpYjRwGL._CR0,730,715,715_UX175.jpg" class="a-dynamic-image cr-customer-image-thumbnail" width="22.5%" data-a-dynamic-image="{&quot;https://images-na.ssl-images-amazon.com/images/I/712hpYjRwGL._CR0,730,715,715_UX175.jpg&quot;:[175,175],&quot;https://images-na.ssl-images-amazon.com/images/I/712hpYjRwGL._CR0,730,715,715_UX64.jpg&quot;:[64,64]}"></div>
      <div class="review-image-tile" data-hook="review-image-tile-gallery">
          <img alt="Kundenbild" src="https://images-na.ssl-images-amazon.com/images/I/71BMdxQpvdL._CR0,204,1224,1224_UX175.jpg" class="a-dynamic-image cr-customer-image-thumbnail" width="22.5%" data-a-dynamic-image="{&quot;https://images-na.ssl-images-amazon.com/images/I/71BMdxQpvdL._CR0,204,1224,1224_UX175.jpg&quot;:[175,175],&quot;https://images-na.ssl-images-amazon.com/images/I/71BMdxQpvdL._CR0,204,1224,1224_UX64.jpg&quot;:[64,64]}"></div>
      </div><div class="a-row"><a data-hook="see-all-images-link" class="a-link-normal reviews-image-gallery-link" href="#CustomerImages">Alle Kundenbilder anzeigen</a></div><div style="display:none;">
        <span class="a-declarative" data-action="a-modal" data-a-modal="{&quot;name&quot;:&quot;reviews-image-gallery&quot;}"><a href="javascript:void(0)" class="a-popover-trigger a-declarative"><i class="a-icon a-icon-popover"></i></a></span></div>

  </div></span>
  <span class="cr-widget-Lighthut" data-hook="cr-widget-Lighthut">
      <div id="cr-dp-desktop-lighthut"
  class="cr-lighthut-boundary cr-lighthouse-anchor-buffer celwidget">
  <div id="cr-dp-lighthut" data-hook="lighthut-widget" class="a-section a-spacing-extra-large cr-asin-B01DQDZVCO celwidget">

<span data-cr-trigger-on-view='{"ajaxUrl":"/hz/reviews-render/ajax/lighthut/report/","ajaxParamsMap":{"lighthouseTerms":"einfache montage/schrauben und dübel/flur und wenn gäste/kleiderhaken bestellt/erfüllt seinen zweck/jederzeit wieder kaufen/dübel und schrauben/eingeklappt fällt/kleiderhaken klappbar/kleidungsstücke aufhängen/klappbare kleiderhaken/kleiderhaken sieht sehr schön/winomo kleiderhaken/jacken hängen/wand/haken/hemden/schrank/stange/garderobe/hängt/lösung/platzsparend/angebracht/montiert"}}'></span>
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
    <span class="a-declarative" data-action="reviews:filter-action:apply" data-reviews:filter-action:apply="{&quot;scrollToSelector&quot;:&quot;.cr-lighthouse-anchor-buffer&quot;,&quot;filterByKeyword&quot;:&quot;einfache montage&quot;,&quot;toggleFilters&quot;:&quot;true&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;}"><a data-reftag="cm_cr_dp_d_lh_0" data-reviews-state-param="" class="a-link-normal a-text-normal" href="/WINOMO-Kleiderhaken-Klappbar-Wand-Kleiderständer/product-reviews/B01DQDZVCO/ref=cm_cr_dp_d_lh_0?ie=UTF8&amp;filterByKeyword=einfache+montage&amp;pageNumber=1&amp;reviewerType=all_reviews#reviews-filter-bar"><span id="cr-lighthouse-term-einfache_montage"
        class="cr-lighthouse-term "
        data-hook="lighthouse-term">
        einfache montage</span>
    </a></span><span class="a-declarative" data-action="reviews:filter-action:apply" data-reviews:filter-action:apply="{&quot;scrollToSelector&quot;:&quot;.cr-lighthouse-anchor-buffer&quot;,&quot;filterByKeyword&quot;:&quot;schrauben und dübel&quot;,&quot;toggleFilters&quot;:&quot;true&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;}"><a data-reftag="cm_cr_dp_d_lh_1" data-reviews-state-param="" class="a-link-normal a-text-normal" href="/WINOMO-Kleiderhaken-Klappbar-Wand-Kleiderständer/product-reviews/B01DQDZVCO/ref=cm_cr_dp_d_lh_1?ie=UTF8&amp;filterByKeyword=schrauben+und+d%C3%BCbel&amp;pageNumber=1&amp;reviewerType=all_reviews#reviews-filter-bar"><span id="cr-lighthouse-term-schrauben_und_dübel"
        class="cr-lighthouse-term "
        data-hook="lighthouse-term">
        schrauben und dübel</span>
    </a></span><span class="a-declarative" data-action="reviews:filter-action:apply" data-reviews:filter-action:apply="{&quot;scrollToSelector&quot;:&quot;.cr-lighthouse-anchor-buffer&quot;,&quot;filterByKeyword&quot;:&quot;flur und wenn gäste&quot;,&quot;toggleFilters&quot;:&quot;true&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;}"><a data-reftag="cm_cr_dp_d_lh_2" data-reviews-state-param="" class="a-link-normal a-text-normal" href="/WINOMO-Kleiderhaken-Klappbar-Wand-Kleiderständer/product-reviews/B01DQDZVCO/ref=cm_cr_dp_d_lh_2?ie=UTF8&amp;filterByKeyword=flur+und+wenn+g%C3%A4ste&amp;pageNumber=1&amp;reviewerType=all_reviews#reviews-filter-bar"><span id="cr-lighthouse-term-flur_und_wenn_gäste"
        class="cr-lighthouse-term "
        data-hook="lighthouse-term">
        flur und wenn gäste</span>
    </a></span><span class="a-declarative" data-action="reviews:filter-action:apply" data-reviews:filter-action:apply="{&quot;scrollToSelector&quot;:&quot;.cr-lighthouse-anchor-buffer&quot;,&quot;filterByKeyword&quot;:&quot;kleiderhaken bestellt&quot;,&quot;toggleFilters&quot;:&quot;true&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;}"><a data-reftag="cm_cr_dp_d_lh_3" data-reviews-state-param="" class="a-link-normal a-text-normal" href="/WINOMO-Kleiderhaken-Klappbar-Wand-Kleiderständer/product-reviews/B01DQDZVCO/ref=cm_cr_dp_d_lh_3?ie=UTF8&amp;filterByKeyword=kleiderhaken+bestellt&amp;pageNumber=1&amp;reviewerType=all_reviews#reviews-filter-bar"><span id="cr-lighthouse-term-kleiderhaken_bestellt"
        class="cr-lighthouse-term "
        data-hook="lighthouse-term">
        kleiderhaken bestellt</span>
    </a></span><span class="a-declarative" data-action="reviews:filter-action:apply" data-reviews:filter-action:apply="{&quot;scrollToSelector&quot;:&quot;.cr-lighthouse-anchor-buffer&quot;,&quot;filterByKeyword&quot;:&quot;erfüllt seinen zweck&quot;,&quot;toggleFilters&quot;:&quot;true&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;}"><a data-reftag="cm_cr_dp_d_lh_4" data-reviews-state-param="" class="a-link-normal a-text-normal" href="/WINOMO-Kleiderhaken-Klappbar-Wand-Kleiderständer/product-reviews/B01DQDZVCO/ref=cm_cr_dp_d_lh_4?ie=UTF8&amp;filterByKeyword=erf%C3%BCllt+seinen+zweck&amp;pageNumber=1&amp;reviewerType=all_reviews#reviews-filter-bar"><span id="cr-lighthouse-term-erfüllt_seinen_zweck"
        class="cr-lighthouse-term "
        data-hook="lighthouse-term">
        erfüllt seinen zweck</span>
    </a></span><span class="a-declarative" data-action="reviews:filter-action:apply" data-reviews:filter-action:apply="{&quot;scrollToSelector&quot;:&quot;.cr-lighthouse-anchor-buffer&quot;,&quot;filterByKeyword&quot;:&quot;jederzeit wieder kaufen&quot;,&quot;toggleFilters&quot;:&quot;true&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;}"><a data-reftag="cm_cr_dp_d_lh_5" data-reviews-state-param="" class="a-link-normal a-text-normal" href="/WINOMO-Kleiderhaken-Klappbar-Wand-Kleiderständer/product-reviews/B01DQDZVCO/ref=cm_cr_dp_d_lh_5?ie=UTF8&amp;filterByKeyword=jederzeit+wieder+kaufen&amp;pageNumber=1&amp;reviewerType=all_reviews#reviews-filter-bar"><span id="cr-lighthouse-term-jederzeit_wieder_kaufen"
        class="cr-lighthouse-term "
        data-hook="lighthouse-term">
        jederzeit wieder kaufen</span>
    </a></span><span class="a-declarative" data-action="reviews:filter-action:apply" data-reviews:filter-action:apply="{&quot;scrollToSelector&quot;:&quot;.cr-lighthouse-anchor-buffer&quot;,&quot;filterByKeyword&quot;:&quot;dübel und schrauben&quot;,&quot;toggleFilters&quot;:&quot;true&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;}"><a data-reftag="cm_cr_dp_d_lh_6" data-reviews-state-param="" class="a-link-normal a-text-normal" href="/WINOMO-Kleiderhaken-Klappbar-Wand-Kleiderständer/product-reviews/B01DQDZVCO/ref=cm_cr_dp_d_lh_6?ie=UTF8&amp;filterByKeyword=d%C3%BCbel+und+schrauben&amp;pageNumber=1&amp;reviewerType=all_reviews#reviews-filter-bar"><span id="cr-lighthouse-term-dübel_und_schrauben"
        class="cr-lighthouse-term "
        data-hook="lighthouse-term">
        dübel und schrauben</span>
    </a></span><span class="a-declarative" data-action="reviews:filter-action:apply" data-reviews:filter-action:apply="{&quot;scrollToSelector&quot;:&quot;.cr-lighthouse-anchor-buffer&quot;,&quot;filterByKeyword&quot;:&quot;eingeklappt fällt&quot;,&quot;toggleFilters&quot;:&quot;true&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;}"><a data-reftag="cm_cr_dp_d_lh_7" data-reviews-state-param="" class="a-link-normal a-text-normal" href="/WINOMO-Kleiderhaken-Klappbar-Wand-Kleiderständer/product-reviews/B01DQDZVCO/ref=cm_cr_dp_d_lh_7?ie=UTF8&amp;filterByKeyword=eingeklappt+f%C3%A4llt&amp;pageNumber=1&amp;reviewerType=all_reviews#reviews-filter-bar"><span id="cr-lighthouse-term-eingeklappt_fällt"
        class="cr-lighthouse-term "
        data-hook="lighthouse-term">
        eingeklappt fällt</span>
    </a></span><span class="a-declarative" data-action="reviews:filter-action:apply" data-reviews:filter-action:apply="{&quot;scrollToSelector&quot;:&quot;.cr-lighthouse-anchor-buffer&quot;,&quot;filterByKeyword&quot;:&quot;kleiderhaken klappbar&quot;,&quot;toggleFilters&quot;:&quot;true&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;}"><a data-reftag="cm_cr_dp_d_lh_8" data-reviews-state-param="" class="a-link-normal a-text-normal" href="/WINOMO-Kleiderhaken-Klappbar-Wand-Kleiderständer/product-reviews/B01DQDZVCO/ref=cm_cr_dp_d_lh_8?ie=UTF8&amp;filterByKeyword=kleiderhaken+klappbar&amp;pageNumber=1&amp;reviewerType=all_reviews#reviews-filter-bar"><span id="cr-lighthouse-term-kleiderhaken_klappbar"
        class="cr-lighthouse-term "
        data-hook="lighthouse-term">
        kleiderhaken klappbar</span>
    </a></span><span class="a-declarative" data-action="reviews:filter-action:apply" data-reviews:filter-action:apply="{&quot;scrollToSelector&quot;:&quot;.cr-lighthouse-anchor-buffer&quot;,&quot;filterByKeyword&quot;:&quot;kleidungsstücke aufhängen&quot;,&quot;toggleFilters&quot;:&quot;true&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;}"><a data-reftag="cm_cr_dp_d_lh_9" data-reviews-state-param="" class="a-link-normal a-text-normal" href="/WINOMO-Kleiderhaken-Klappbar-Wand-Kleiderständer/product-reviews/B01DQDZVCO/ref=cm_cr_dp_d_lh_9?ie=UTF8&amp;filterByKeyword=kleidungsst%C3%BCcke+aufh%C3%A4ngen&amp;pageNumber=1&amp;reviewerType=all_reviews#reviews-filter-bar"><span id="cr-lighthouse-term-kleidungsstücke_aufhängen"
        class="cr-lighthouse-term "
        data-hook="lighthouse-term">
        kleidungsstücke aufhängen</span>
    </a></span><span class="a-declarative" data-action="reviews:filter-action:apply" data-reviews:filter-action:apply="{&quot;scrollToSelector&quot;:&quot;.cr-lighthouse-anchor-buffer&quot;,&quot;filterByKeyword&quot;:&quot;klappbare kleiderhaken&quot;,&quot;toggleFilters&quot;:&quot;true&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;}"><a data-reftag="cm_cr_dp_d_lh_10" data-reviews-state-param="" class="a-link-normal a-text-normal" href="/WINOMO-Kleiderhaken-Klappbar-Wand-Kleiderständer/product-reviews/B01DQDZVCO/ref=cm_cr_dp_d_lh_10?ie=UTF8&amp;filterByKeyword=klappbare+kleiderhaken&amp;pageNumber=1&amp;reviewerType=all_reviews#reviews-filter-bar"><span id="cr-lighthouse-term-klappbare_kleiderhaken"
        class="cr-lighthouse-term "
        data-hook="lighthouse-term">
        klappbare kleiderhaken</span>
    </a></span><span class="a-declarative" data-action="reviews:filter-action:apply" data-reviews:filter-action:apply="{&quot;scrollToSelector&quot;:&quot;.cr-lighthouse-anchor-buffer&quot;,&quot;filterByKeyword&quot;:&quot;kleiderhaken sieht sehr schön&quot;,&quot;toggleFilters&quot;:&quot;true&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;}"><a data-reftag="cm_cr_dp_d_lh_11" data-reviews-state-param="" class="a-link-normal a-text-normal" href="/WINOMO-Kleiderhaken-Klappbar-Wand-Kleiderständer/product-reviews/B01DQDZVCO/ref=cm_cr_dp_d_lh_11?ie=UTF8&amp;filterByKeyword=kleiderhaken+sieht+sehr+sch%C3%B6n&amp;pageNumber=1&amp;reviewerType=all_reviews#reviews-filter-bar"><span id="cr-lighthouse-term-kleiderhaken_sieht_sehr_schön"
        class="cr-lighthouse-term "
        data-hook="lighthouse-term">
        kleiderhaken sieht sehr schön</span>
    </a></span><span class="a-declarative" data-action="reviews:filter-action:apply" data-reviews:filter-action:apply="{&quot;scrollToSelector&quot;:&quot;.cr-lighthouse-anchor-buffer&quot;,&quot;filterByKeyword&quot;:&quot;winomo kleiderhaken&quot;,&quot;toggleFilters&quot;:&quot;true&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;}"><a data-reftag="cm_cr_dp_d_lh_12" data-reviews-state-param="" class="a-link-normal a-text-normal" href="/WINOMO-Kleiderhaken-Klappbar-Wand-Kleiderständer/product-reviews/B01DQDZVCO/ref=cm_cr_dp_d_lh_12?ie=UTF8&amp;filterByKeyword=winomo+kleiderhaken&amp;pageNumber=1&amp;reviewerType=all_reviews#reviews-filter-bar"><span id="cr-lighthouse-term-winomo_kleiderhaken"
        class="cr-lighthouse-term "
        data-hook="lighthouse-term">
        winomo kleiderhaken</span>
    </a></span><span class="a-declarative" data-action="reviews:filter-action:apply" data-reviews:filter-action:apply="{&quot;scrollToSelector&quot;:&quot;.cr-lighthouse-anchor-buffer&quot;,&quot;filterByKeyword&quot;:&quot;jacken hängen&quot;,&quot;toggleFilters&quot;:&quot;true&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;}"><a data-reftag="cm_cr_dp_d_lh_13" data-reviews-state-param="" class="a-link-normal a-text-normal" href="/WINOMO-Kleiderhaken-Klappbar-Wand-Kleiderständer/product-reviews/B01DQDZVCO/ref=cm_cr_dp_d_lh_13?ie=UTF8&amp;filterByKeyword=jacken+h%C3%A4ngen&amp;pageNumber=1&amp;reviewerType=all_reviews#reviews-filter-bar"><span id="cr-lighthouse-term-jacken_hängen"
        class="cr-lighthouse-term "
        data-hook="lighthouse-term">
        jacken hängen</span>
    </a></span><span class="a-declarative" data-action="reviews:filter-action:apply" data-reviews:filter-action:apply="{&quot;scrollToSelector&quot;:&quot;.cr-lighthouse-anchor-buffer&quot;,&quot;filterByKeyword&quot;:&quot;wand&quot;,&quot;toggleFilters&quot;:&quot;true&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;}"><a data-reftag="cm_cr_dp_d_lh_14" data-reviews-state-param="" class="a-link-normal a-text-normal" href="/WINOMO-Kleiderhaken-Klappbar-Wand-Kleiderständer/product-reviews/B01DQDZVCO/ref=cm_cr_dp_d_lh_14?ie=UTF8&amp;filterByKeyword=wand&amp;pageNumber=1&amp;reviewerType=all_reviews#reviews-filter-bar"><span id="cr-lighthouse-term-wand"
        class="cr-lighthouse-term "
        data-hook="lighthouse-term">
        wand</span>
    </a></span><span class="a-declarative" data-action="reviews:filter-action:apply" data-reviews:filter-action:apply="{&quot;scrollToSelector&quot;:&quot;.cr-lighthouse-anchor-buffer&quot;,&quot;filterByKeyword&quot;:&quot;haken&quot;,&quot;toggleFilters&quot;:&quot;true&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;}"><a data-reftag="cm_cr_dp_d_lh_15" data-reviews-state-param="" class="a-link-normal a-text-normal" href="/WINOMO-Kleiderhaken-Klappbar-Wand-Kleiderständer/product-reviews/B01DQDZVCO/ref=cm_cr_dp_d_lh_15?ie=UTF8&amp;filterByKeyword=haken&amp;pageNumber=1&amp;reviewerType=all_reviews#reviews-filter-bar"><span id="cr-lighthouse-term-haken"
        class="cr-lighthouse-term "
        data-hook="lighthouse-term">
        haken</span>
    </a></span><span class="a-declarative" data-action="reviews:filter-action:apply" data-reviews:filter-action:apply="{&quot;scrollToSelector&quot;:&quot;.cr-lighthouse-anchor-buffer&quot;,&quot;filterByKeyword&quot;:&quot;hemden&quot;,&quot;toggleFilters&quot;:&quot;true&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;}"><a data-reftag="cm_cr_dp_d_lh_16" data-reviews-state-param="" class="a-link-normal a-text-normal" href="/WINOMO-Kleiderhaken-Klappbar-Wand-Kleiderständer/product-reviews/B01DQDZVCO/ref=cm_cr_dp_d_lh_16?ie=UTF8&amp;filterByKeyword=hemden&amp;pageNumber=1&amp;reviewerType=all_reviews#reviews-filter-bar"><span id="cr-lighthouse-term-hemden"
        class="cr-lighthouse-term "
        data-hook="lighthouse-term">
        hemden</span>
    </a></span><span class="a-declarative" data-action="reviews:filter-action:apply" data-reviews:filter-action:apply="{&quot;scrollToSelector&quot;:&quot;.cr-lighthouse-anchor-buffer&quot;,&quot;filterByKeyword&quot;:&quot;schrank&quot;,&quot;toggleFilters&quot;:&quot;true&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;}"><a data-reftag="cm_cr_dp_d_lh_17" data-reviews-state-param="" class="a-link-normal a-text-normal" href="/WINOMO-Kleiderhaken-Klappbar-Wand-Kleiderständer/product-reviews/B01DQDZVCO/ref=cm_cr_dp_d_lh_17?ie=UTF8&amp;filterByKeyword=schrank&amp;pageNumber=1&amp;reviewerType=all_reviews#reviews-filter-bar"><span id="cr-lighthouse-term-schrank"
        class="cr-lighthouse-term "
        data-hook="lighthouse-term">
        schrank</span>
    </a></span><span class="a-declarative" data-action="reviews:filter-action:apply" data-reviews:filter-action:apply="{&quot;scrollToSelector&quot;:&quot;.cr-lighthouse-anchor-buffer&quot;,&quot;filterByKeyword&quot;:&quot;stange&quot;,&quot;toggleFilters&quot;:&quot;true&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;}"><a data-reftag="cm_cr_dp_d_lh_18" data-reviews-state-param="" class="a-link-normal a-text-normal" href="/WINOMO-Kleiderhaken-Klappbar-Wand-Kleiderständer/product-reviews/B01DQDZVCO/ref=cm_cr_dp_d_lh_18?ie=UTF8&amp;filterByKeyword=stange&amp;pageNumber=1&amp;reviewerType=all_reviews#reviews-filter-bar"><span id="cr-lighthouse-term-stange"
        class="cr-lighthouse-term "
        data-hook="lighthouse-term">
        stange</span>
    </a></span><span class="a-declarative" data-action="reviews:filter-action:apply" data-reviews:filter-action:apply="{&quot;scrollToSelector&quot;:&quot;.cr-lighthouse-anchor-buffer&quot;,&quot;filterByKeyword&quot;:&quot;garderobe&quot;,&quot;toggleFilters&quot;:&quot;true&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;}"><a data-reftag="cm_cr_dp_d_lh_19" data-reviews-state-param="" class="a-link-normal a-text-normal" href="/WINOMO-Kleiderhaken-Klappbar-Wand-Kleiderständer/product-reviews/B01DQDZVCO/ref=cm_cr_dp_d_lh_19?ie=UTF8&amp;filterByKeyword=garderobe&amp;pageNumber=1&amp;reviewerType=all_reviews#reviews-filter-bar"><span id="cr-lighthouse-term-garderobe"
        class="cr-lighthouse-term "
        data-hook="lighthouse-term">
        garderobe</span>
    </a></span></div>

</div></div></div></div></span>
  <span class="cr-widget-FocalReviews" data-hook="cr-widget-FocalReviews">
      <div class="a-section a-spacing-large"><div class="card-padding">
    <a id="customer-reviews-content" class="a-link-normal celwidget" href="#"></a><div id="cm-cr-dp-review-header" class="a-section a-spacing-small"><h3 class="a-spacing-small"><span data-hook="top-customer-reviews-title" class="a-size-base">1-8 von 110 Rezensionen werden angezeigt</span></h3></div><div id="cm-cr-dp-review-sort-type" data-reftag="cm_cr_dp_d_fltrs_srt" class="a-section a-spacing-small"><span class="a-declarative" data-action="reviews:filter-action:change" data-reviews:filter-action:change="{&quot;filterType&quot;:&quot;sortOrder&quot;}"><span class="a-dropdown-container"><select name="" autocomplete="off" id="cm-cr-sort-dropdown" tabIndex="-1" class="a-native-dropdown"><option value="helpful" data-a-css-class="cm-cr-sort-order-option" selected>Spitzenrezensionen</option><option value="recent" data-a-css-class="cm-cr-sort-order-option">Neueste zuerst</option></select><span tabIndex="-1" data-a-class="cm-cr-dp-filter-dropdown" class="a-button a-button-dropdown a-button-small cm-cr-dp-filter-dropdown"><span class="a-button-inner"><span class="a-button-text a-declarative" data-action="a-dropdown-button" role="button" tabIndex="0" aria-hidden="true"><span class="a-dropdown-prompt">Spitzenrezensionen</span></span><i class="a-icon a-icon-dropdown"></i></span></span></span></span></div><div class="a-row"><div class="a-section a-spacing-extra-large a-spacing-top-medium a-text-center review-load-error aok-hidden"><div class="a-box a-alert a-alert-error cr-error" aria-live="assertive" role="alert"><div class="a-box-inner a-alert-container"><h4 class="a-alert-heading">Derzeit tritt ein Problem beim Filtern der Rezensionen auf. Bitte versuchen Sie es später noch einmal.</h4><i class="a-icon a-icon-alert"></i><div class="a-alert-content"></div></div></div></div><div class="a-spinner-wrapper cr-reviews-loading aok-hidden"><span class="a-spinner a-spinner-medium"></span></div><div class="a-section reviews-content filterable-reviews-content celwidget"><div id="cm-cr-dp-review-list" data-hook="top-customer-reviews-widget" class="a-section review-views celwidget"><div id="R2FHC51FRYWTYL" data-hook="review" class="a-section review"><div id="customer_review-R2FHC51FRYWTYL" class="a-section celwidget"><div data-hook="genome-widget" class="a-row a-spacing-mini"><a href="/gp/profile/amzn1.account.AHXREY4N63DR7H6FH6MVBHLJ4E7A/ref=cm_cr_dp_d_gw_tr?ie=UTF8" class="a-profile" data-a-size="small"><div aria-hidden="true" class="a-profile-avatar-wrapper"><div class="a-profile-avatar"><img src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif" class="a-lazy-loaded" data-src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png"><noscript><img src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png"></noscript></div></div><div class="a-profile-content"><span class="a-profile-name">Fabioni</span></div></a></div><div class="a-row"><a class="a-link-normal" title="5,0 von 5 Sternen" href="/gp/customer-reviews/R2FHC51FRYWTYL/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&amp;ASIN=B01DQDZVCO"><i data-hook="review-star-rating" class="a-icon a-icon-star a-star-5 review-rating"><span class="a-icon-alt">5,0 von 5 Sternen</span></i></a><span class="a-letter-space"></span><a data-hook="review-title" class="a-size-base a-link-normal review-title a-color-base a-text-bold" href="/gp/customer-reviews/R2FHC51FRYWTYL/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&amp;ASIN=B01DQDZVCO">Sitzt</a></div><span data-hook="review-date" class="a-size-base a-color-secondary review-date">14. April 2017</span><div class="a-row a-spacing-mini review-data review-format-strip"><span data-hook="avp-badge-linkless" class="a-size-mini a-color-state a-text-bold">Verifizierter Kauf</span></div><div class="a-row a-spacing-small review-data"><span data-hook="review-body" class="a-size-base review-text"><div aria-live="polite" data-a-expander-name="review_text_read_more" data-a-expander-collapsed-height="300" class="a-expander-collapsed-height a-row a-expander-container a-expander-partial-collapse-container" style="max-height:300px"><div data-hook="review-collapsed" aria-expanded="false" class="a-expander-content a-expander-partial-collapse-content">Ich hatte noch eine Nische frei, in die ich ein paar Jacken hängen wollte, daher habe ich diesen Kleiderhaken bestellt.<br />Der Kleiderhaken war sehr leicht anzubringen.<br />Nun hängen dort 5 Jacken, aber für mehr ist auch nicht wirklich Platz.<br />Fazit: Der Gedanke des Einklappens, wenn es mal nichts aufzuhängen gibt, gefällt mir.<br />Der Kleiderhaken ist sehr platzsparend. Allerdings sollte man bedenken, dass der Kleiderhaken nur Platz für wenige, ausgewählte Sachen bietet.</div><div class="a-expander-header a-expander-partial-collapse-header"><div class="a-expander-content-fade"></div><a href="javascript:void(0)" data-hook="expand-collapse-read-more-less" data-action="a-expander-toggle" class="a-declarative" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;Lesen Sie weiter&quot;, &quot;collapse_prompt&quot;:&quot;Weniger lesen&quot;}"><i class="a-icon a-icon-extender-expand"></i><span class="a-expander-prompt">Lesen Sie weiter</span></a></div></div></span></div><div data-hook="review-comments" class="a-row review-comments"><span class="cr-vote" data-hook="review-voting-widget">

  <div class="a-row a-spacing-small"><span data-hook="helpful-vote-statement" class="a-size-base a-color-tertiary cr-vote-text">7 Personen fanden diese Informationen hilfreich</span></div><div class="cr-helpful-button cr-vote-component aok-float-left">
      <span class="a-declarative" data-action="reviews:vote-action" data-reviews:vote-action="{&quot;voteInstanceId&quot;:&quot;R2FHC51FRYWTYL&quot;,&quot;ajaxUrl&quot;:&quot;/hz/reviews-render/ajax/vote/submit/ref=cm_cr_dp_d_vote_lft&quot;,&quot;voteValue&quot;:&quot;1&quot;,&quot;cssSelectors&quot;:{&quot;onError&quot;:&quot;.cr-vote-error&quot;,&quot;inFlight&quot;:&quot;.cr-vote-feedback&quot;,&quot;hideVoteComponents&quot;:&quot;.cr-vote-component&quot;,&quot;onSuccess&quot;:&quot;.cr-vote-success&quot;},&quot;csrfT&quot;:&quot;gqgzUkdTQ84fpgu4r0I6UPUUZ1+uZDZHneweF/4AAAABAAAAAFwr0VJyYXcAAAAA+4kUEk/7iMGR3xPcX6iU&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;,&quot;voteDimension&quot;:&quot;Helpful&quot;}"><span class="a-button a-button-base"><span class="a-button-inner"><input data-hook="vote-helpful-button" class="a-button-input" type="submit"><span class="a-button-text" aria-hidden="true"><div class="cr-helpful-text">
            Nützlich</div>
        </span></span></span></span></div>
  <span class="cr-vote-feedback cr-vote-component aok-hidden">Senden von Feedback...</span><span data-hook="vote-success-message" class="cr-vote-success cr-vote-component aok-hidden"><div class="a-box a-alert-inline a-alert-inline-success cr-vote-helpful-yes"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">Vielen Dank für Ihr Feedback.</div></div></div></span><span class="cr-vote-error cr-vote-component aok-hidden"><div class="a-box a-alert-inline a-alert-inline-error" aria-live="assertive" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">Wir konnten Ihre Stimmabgabe leider nicht speichern. Bitte versuchen Sie es später noch einmal.</div></div></div></span></span>

<i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i><a data-hook="review-comment" class="a-size-base a-link-normal a-color-secondary a-text-normal" href="/gp/customer-reviews/R2FHC51FRYWTYL/ref=cm_cr_dp_d_rvw_btm?ie=UTF8&amp;ASIN=B01DQDZVCO#wasThisHelpful">Kommentar</a><span class="cr-footer-line-height">
    <span><i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i><span class="a-declarative" data-action="cr-popup" data-cr-popup="{&quot;width&quot;:&quot;580&quot;,&quot;title&quot;:&quot;ReportAbuse&quot;,&quot;url&quot;:&quot;/hz/reviews-render/report-abuse?ie=UTF8&amp;voteDomain=Reviews&amp;ref=cm_cr_dp_d_rvw_hlp&amp;csrfT=gqgzUkdTQ84fpgu4r0I6UPUUZ1%2BuZDZHneweF%2F4AAAABAAAAAFwr0VJyYXcAAAAA%2B4kUEk%2F7iMGR3xPcX6iU&amp;entityId=R2FHC51FRYWTYL&amp;sessionId=262-9898842-9713804&quot;,&quot;height&quot;:&quot;380&quot;}"><a class="a-size-base a-link-normal a-color-secondary report-abuse-link a-text-normal" href="/hz/reviews-render/report-abuse?ie=UTF8&amp;voteDomain=Reviews&amp;ref=cm_cr_dp_d_rvw_hlp&amp;csrfT=gqgzUkdTQ84fpgu4r0I6UPUUZ1%2BuZDZHneweF%2F4AAAABAAAAAFwr0VJyYXcAAAAA%2B4kUEk%2F7iMGR3xPcX6iU&amp;entityId=R2FHC51FRYWTYL&amp;sessionId=262-9898842-9713804">Missbrauch melden</a></span></span></span>

</div></div></div><div id="R3GEI2NI0Y4876" data-hook="review" class="a-section review"><div id="customer_review-R3GEI2NI0Y4876" class="a-section celwidget"><div data-hook="genome-widget" class="a-row a-spacing-mini"><a href="/gp/profile/amzn1.account.AEXK3WK2RC3LOYISJYI52PSEJ3KQ/ref=cm_cr_dp_d_gw_tr?ie=UTF8" class="a-profile" data-a-size="small"><div aria-hidden="true" class="a-profile-avatar-wrapper"><div class="a-profile-avatar"><img src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif" class="a-lazy-loaded" data-src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png"><noscript><img src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png"></noscript></div></div><div class="a-profile-content"><span class="a-profile-name">Daniel</span></div></a></div><div class="a-row"><a class="a-link-normal" title="5,0 von 5 Sternen" href="/gp/customer-reviews/R3GEI2NI0Y4876/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&amp;ASIN=B01DQDZVCO"><i data-hook="review-star-rating" class="a-icon a-icon-star a-star-5 review-rating"><span class="a-icon-alt">5,0 von 5 Sternen</span></i></a><span class="a-letter-space"></span><a data-hook="review-title" class="a-size-base a-link-normal review-title a-color-base a-text-bold" href="/gp/customer-reviews/R3GEI2NI0Y4876/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&amp;ASIN=B01DQDZVCO">Eine super Erfindung</a></div><span data-hook="review-date" class="a-size-base a-color-secondary review-date">1. Juli 2017</span><div class="a-row a-spacing-mini review-data review-format-strip"><span data-hook="avp-badge-linkless" class="a-size-mini a-color-state a-text-bold">Verifizierter Kauf</span></div><div class="a-row a-spacing-small review-data"><span data-hook="review-body" class="a-size-base review-text"><div aria-live="polite" data-a-expander-name="review_text_read_more" data-a-expander-collapsed-height="300" class="a-expander-collapsed-height a-row a-expander-container a-expander-partial-collapse-container" style="max-height:300px"><div data-hook="review-collapsed" aria-expanded="false" class="a-expander-content a-expander-partial-collapse-content">Ich habe oft das Problem im Sommer, dass mein Schrank voll ist und ich nicht weiß wohin mit all meinen Hemden. Ich habe dann Langarm- und Kurzarmhemden und mein Kleiderschrank quillt praktisch über. Da unser Schlafzimmer keinen weiteren Platz für einen weiteren Schrank bietet habe ich mich für diese Lösung entschieden<br /><br />Die Montage ist mit ein wenig handwerklichem Geschick ohne Probleme möglich. Löcher bohren, Dübel rein und in die Wand schrauben - fertig.<br /><br />Diese Lösung ist einfach genial. Ich habe nun Platz für alle Hemden die nicht in den Schrank passen. Wenn ich den zusätzlichen Platz nun nicht mehr benötige, so kann ich den Kleiderhaken einfach wieder einklappen. Perfekt!<br /><br />Ich habe mir gleich mehrere Kleiderhaken bestellt und bin sehr zufrieden. Eine klare Weiterempfehlung von mir.</div><div class="a-expander-header a-expander-partial-collapse-header"><div class="a-expander-content-fade"></div><a href="javascript:void(0)" data-hook="expand-collapse-read-more-less" data-action="a-expander-toggle" class="a-declarative" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;Lesen Sie weiter&quot;, &quot;collapse_prompt&quot;:&quot;Weniger lesen&quot;}"><i class="a-icon a-icon-extender-expand"></i><span class="a-expander-prompt">Lesen Sie weiter</span></a></div></div></span></div><div data-hook="review-comments" class="a-row review-comments"><span class="cr-vote" data-hook="review-voting-widget">

  <div class="a-row a-spacing-small"><span data-hook="helpful-vote-statement" class="a-size-base a-color-tertiary cr-vote-text">4 Personen fanden diese Informationen hilfreich</span></div><div class="cr-helpful-button cr-vote-component aok-float-left">
      <span class="a-declarative" data-action="reviews:vote-action" data-reviews:vote-action="{&quot;voteInstanceId&quot;:&quot;R3GEI2NI0Y4876&quot;,&quot;ajaxUrl&quot;:&quot;/hz/reviews-render/ajax/vote/submit/ref=cm_cr_dp_d_vote_lft&quot;,&quot;voteValue&quot;:&quot;1&quot;,&quot;cssSelectors&quot;:{&quot;onError&quot;:&quot;.cr-vote-error&quot;,&quot;inFlight&quot;:&quot;.cr-vote-feedback&quot;,&quot;hideVoteComponents&quot;:&quot;.cr-vote-component&quot;,&quot;onSuccess&quot;:&quot;.cr-vote-success&quot;},&quot;csrfT&quot;:&quot;gt8mhC4ztbDhFLAryit37Iz73ckmj4YLoE50GYkAAAABAAAAAFwr0VJyYXcAAAAA+4kUEk/7iMGR3xPcX6iU&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;,&quot;voteDimension&quot;:&quot;Helpful&quot;}"><span class="a-button a-button-base"><span class="a-button-inner"><input data-hook="vote-helpful-button" class="a-button-input" type="submit"><span class="a-button-text" aria-hidden="true"><div class="cr-helpful-text">
            Nützlich</div>
        </span></span></span></span></div>
  <span class="cr-vote-feedback cr-vote-component aok-hidden">Senden von Feedback...</span><span data-hook="vote-success-message" class="cr-vote-success cr-vote-component aok-hidden"><div class="a-box a-alert-inline a-alert-inline-success cr-vote-helpful-yes"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">Vielen Dank für Ihr Feedback.</div></div></div></span><span class="cr-vote-error cr-vote-component aok-hidden"><div class="a-box a-alert-inline a-alert-inline-error" aria-live="assertive" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">Wir konnten Ihre Stimmabgabe leider nicht speichern. Bitte versuchen Sie es später noch einmal.</div></div></div></span></span>

<i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i><a data-hook="review-comment" class="a-size-base a-link-normal a-color-secondary a-text-normal" href="/gp/customer-reviews/R3GEI2NI0Y4876/ref=cm_cr_dp_d_rvw_btm?ie=UTF8&amp;ASIN=B01DQDZVCO#wasThisHelpful">Kommentar</a><span class="cr-footer-line-height">
    <span><i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i><span class="a-declarative" data-action="cr-popup" data-cr-popup="{&quot;width&quot;:&quot;580&quot;,&quot;title&quot;:&quot;ReportAbuse&quot;,&quot;url&quot;:&quot;/hz/reviews-render/report-abuse?ie=UTF8&amp;voteDomain=Reviews&amp;ref=cm_cr_dp_d_rvw_hlp&amp;csrfT=gt8mhC4ztbDhFLAryit37Iz73ckmj4YLoE50GYkAAAABAAAAAFwr0VJyYXcAAAAA%2B4kUEk%2F7iMGR3xPcX6iU&amp;entityId=R3GEI2NI0Y4876&amp;sessionId=262-9898842-9713804&quot;,&quot;height&quot;:&quot;380&quot;}"><a class="a-size-base a-link-normal a-color-secondary report-abuse-link a-text-normal" href="/hz/reviews-render/report-abuse?ie=UTF8&amp;voteDomain=Reviews&amp;ref=cm_cr_dp_d_rvw_hlp&amp;csrfT=gt8mhC4ztbDhFLAryit37Iz73ckmj4YLoE50GYkAAAABAAAAAFwr0VJyYXcAAAAA%2B4kUEk%2F7iMGR3xPcX6iU&amp;entityId=R3GEI2NI0Y4876&amp;sessionId=262-9898842-9713804">Missbrauch melden</a></span></span></span>

</div></div></div><div id="R2Z247CE8MBZY5" data-hook="review" class="a-section review"><div id="customer_review-R2Z247CE8MBZY5" class="a-section celwidget"><div class="genome-widget-row">
      <div class="profile-widget-with-avatar">
        <div data-hook="genome-widget" class="a-row a-spacing-mini"><a href="/gp/profile/amzn1.account.AFIJDX63P6JIN4CNUT56DMTTCTQA/ref=cm_cr_dp_d_gw_tr?ie=UTF8" class="a-profile" data-a-size="small"><div aria-hidden="true" class="a-profile-avatar-wrapper"><div class="a-profile-avatar"><img src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif" class="a-lazy-loaded" data-src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/0c4bf933-22dc-4fa2-a0ea-04ae535b83e2._CR0,0.0,426,426_SX48_.jpg"><noscript><img src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/0c4bf933-22dc-4fa2-a0ea-04ae535b83e2._CR0,0.0,426,426_SX48_.jpg"></noscript></div></div><div class="a-profile-content"><span class="a-profile-name">Betty</span></div></a></div></div>
      <div class="badges-genome-widget">
        <div class="a-row a-spacing-mini"><span class="a-letter-space"></span><span class="a-size-mini a-color-link c7yBadgeAUI c7yTopDownDashedStrike c7y-badge-text a-text-bold">TOP 1000 REZENSENT</span></div></div>
    </div>
  <div class="a-row"><a class="a-link-normal" title="5,0 von 5 Sternen" href="/gp/customer-reviews/R2Z247CE8MBZY5/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&amp;ASIN=B01DQDZVCO"><i data-hook="review-star-rating" class="a-icon a-icon-star a-star-5 review-rating"><span class="a-icon-alt">5,0 von 5 Sternen</span></i></a><span class="a-letter-space"></span><a data-hook="review-title" class="a-size-base a-link-normal review-title a-color-base a-text-bold" href="/gp/customer-reviews/R2Z247CE8MBZY5/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&amp;ASIN=B01DQDZVCO">Klein und praktisch!</a></div><span data-hook="review-date" class="a-size-base a-color-secondary review-date">10. Mai 2018</span><div class="a-row a-spacing-mini review-data review-format-strip"><span data-hook="avp-badge-linkless" class="a-size-mini a-color-state a-text-bold">Verifizierter Kauf</span></div><div class="a-row a-spacing-small review-data"><span data-hook="review-body" class="a-size-base review-text"><div aria-live="polite" data-a-expander-name="review_text_read_more" data-a-expander-collapsed-height="300" class="a-expander-collapsed-height a-row a-expander-container a-expander-partial-collapse-container" style="max-height:300px"><div data-hook="review-collapsed" aria-expanded="false" class="a-expander-content a-expander-partial-collapse-content">Ich habe diesen Kleiderhaken bestellt, um Kleider trocknen zu können, die nicht in den Trockner sollten. Der Kleiderhaken ist sehr gut verarbeitet, ist leicht zu befestigen und bietet Platz für fünf bis 6 Kleidungsstücke. Dadurch, dass er einklappbar ist, ist er recht dezent und fügt sich in jeden Raum ein. Ein perfekter kleiner Helfer!</div><div class="a-expander-header a-expander-partial-collapse-header"><div class="a-expander-content-fade"></div><a href="javascript:void(0)" data-hook="expand-collapse-read-more-less" data-action="a-expander-toggle" class="a-declarative" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;Lesen Sie weiter&quot;, &quot;collapse_prompt&quot;:&quot;Weniger lesen&quot;}"><i class="a-icon a-icon-extender-expand"></i><span class="a-expander-prompt">Lesen Sie weiter</span></a></div></div></span></div><div class="a-popover-preload" id="a-popover-R2Z247CE8MBZY5_gallerySection_main"><div class="reviewLightboxPopoverContainer">
    <div class="reviewsLightbox" id="R2Z247CE8MBZY5_gallerySection_main"></div>
  </div>
</div><div id="R2Z247CE8MBZY5_imageSection_main" class="a-section a-spacing-medium review-image-container"><div class="review-image-tile-section " data-reviewid="R2Z247CE8MBZY5">
        <img alt="review image" src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif" data-hook="review-image-tile" class="review-image-tile a-lazy-loaded" height="88" width="100%" data-src="https://images-na.ssl-images-amazon.com/images/I/712hpYjRwGL._SY88.jpg"><noscript><img alt="review image" src="https://images-na.ssl-images-amazon.com/images/I/712hpYjRwGL._SY88.jpg" height="88" width="100%"></noscript><img alt="review image" src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif" data-hook="review-image-tile" class="review-image-tile a-lazy-loaded" height="88" width="100%" data-src="https://images-na.ssl-images-amazon.com/images/I/71sxCmiV3rL._SY88.jpg"><noscript><img alt="review image" src="https://images-na.ssl-images-amazon.com/images/I/71sxCmiV3rL._SY88.jpg" height="88" width="100%"></noscript><img alt="review image" src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif" data-hook="review-image-tile" class="review-image-tile a-lazy-loaded" height="88" width="100%" data-src="https://images-na.ssl-images-amazon.com/images/I/71PVTkt3i8L._SY88.jpg"><noscript><img alt="review image" src="https://images-na.ssl-images-amazon.com/images/I/71PVTkt3i8L._SY88.jpg" height="88" width="100%"></noscript></div>
    
    <div style="display:none;">
        <span class="a-declarative" data-action="a-modal" data-a-modal="{&quot;name&quot;:&quot;R2Z247CE8MBZY5_gallerySection_main&quot;}"><a href="javascript:void(0)" class="a-popover-trigger a-declarative"><i class="a-icon a-icon-popover"></i></a></span></div>
</div><script>
        P.when('review-image-binder', 'reviewsLightbox-js').execute(function(reviewImageBinder) {
            reviewImageBinder.bindReview("R2Z247CE8MBZY5",
                "R2Z247CE8MBZY5_imageSection_main",
                "R2Z247CE8MBZY5_gallerySection_main");
        });
    </script>
<div data-hook="review-comments" class="a-row review-comments"><span class="cr-vote" data-hook="review-voting-widget">

  <div class="a-row a-spacing-small"><span data-hook="helpful-vote-statement" class="a-size-base a-color-tertiary cr-vote-text">4 Personen fanden diese Informationen hilfreich</span></div><div class="cr-helpful-button cr-vote-component aok-float-left">
      <span class="a-declarative" data-action="reviews:vote-action" data-reviews:vote-action="{&quot;voteInstanceId&quot;:&quot;R2Z247CE8MBZY5&quot;,&quot;ajaxUrl&quot;:&quot;/hz/reviews-render/ajax/vote/submit/ref=cm_cr_dp_d_vote_lft&quot;,&quot;voteValue&quot;:&quot;1&quot;,&quot;cssSelectors&quot;:{&quot;onError&quot;:&quot;.cr-vote-error&quot;,&quot;inFlight&quot;:&quot;.cr-vote-feedback&quot;,&quot;hideVoteComponents&quot;:&quot;.cr-vote-component&quot;,&quot;onSuccess&quot;:&quot;.cr-vote-success&quot;},&quot;csrfT&quot;:&quot;glP41ACzUS7ylv8K5Syp0sU1ba8Qf2M3PGN6zM4AAAABAAAAAFwr0VJyYXcAAAAA+4kUEk/7iMGR3xPcX6iU&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;,&quot;voteDimension&quot;:&quot;Helpful&quot;}"><span class="a-button a-button-base"><span class="a-button-inner"><input data-hook="vote-helpful-button" class="a-button-input" type="submit"><span class="a-button-text" aria-hidden="true"><div class="cr-helpful-text">
            Nützlich</div>
        </span></span></span></span></div>
  <span class="cr-vote-feedback cr-vote-component aok-hidden">Senden von Feedback...</span><span data-hook="vote-success-message" class="cr-vote-success cr-vote-component aok-hidden"><div class="a-box a-alert-inline a-alert-inline-success cr-vote-helpful-yes"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">Vielen Dank für Ihr Feedback.</div></div></div></span><span class="cr-vote-error cr-vote-component aok-hidden"><div class="a-box a-alert-inline a-alert-inline-error" aria-live="assertive" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">Wir konnten Ihre Stimmabgabe leider nicht speichern. Bitte versuchen Sie es später noch einmal.</div></div></div></span></span>

<i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i><a data-hook="review-comment" class="a-size-base a-link-normal a-color-secondary a-text-normal" href="/gp/customer-reviews/R2Z247CE8MBZY5/ref=cm_cr_dp_d_rvw_btm?ie=UTF8&amp;ASIN=B01DQDZVCO#wasThisHelpful">Kommentar</a><span class="cr-footer-line-height">
    <span><i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i><span class="a-declarative" data-action="cr-popup" data-cr-popup="{&quot;width&quot;:&quot;580&quot;,&quot;title&quot;:&quot;ReportAbuse&quot;,&quot;url&quot;:&quot;/hz/reviews-render/report-abuse?ie=UTF8&amp;voteDomain=Reviews&amp;ref=cm_cr_dp_d_rvw_hlp&amp;csrfT=glP41ACzUS7ylv8K5Syp0sU1ba8Qf2M3PGN6zM4AAAABAAAAAFwr0VJyYXcAAAAA%2B4kUEk%2F7iMGR3xPcX6iU&amp;entityId=R2Z247CE8MBZY5&amp;sessionId=262-9898842-9713804&quot;,&quot;height&quot;:&quot;380&quot;}"><a class="a-size-base a-link-normal a-color-secondary report-abuse-link a-text-normal" href="/hz/reviews-render/report-abuse?ie=UTF8&amp;voteDomain=Reviews&amp;ref=cm_cr_dp_d_rvw_hlp&amp;csrfT=glP41ACzUS7ylv8K5Syp0sU1ba8Qf2M3PGN6zM4AAAABAAAAAFwr0VJyYXcAAAAA%2B4kUEk%2F7iMGR3xPcX6iU&amp;entityId=R2Z247CE8MBZY5&amp;sessionId=262-9898842-9713804">Missbrauch melden</a></span></span></span>

</div></div></div><div id="R1A8FHPNHFTB0P" data-hook="review" class="a-section review"><div id="customer_review-R1A8FHPNHFTB0P" class="a-section celwidget"><div data-hook="genome-widget" class="a-row a-spacing-mini"><a href="/gp/profile/amzn1.account.AGZ24YINTV36T3LY7ZTDW3Y5QYSQ/ref=cm_cr_dp_d_gw_tr?ie=UTF8" class="a-profile" data-a-size="small"><div aria-hidden="true" class="a-profile-avatar-wrapper"><div class="a-profile-avatar"><img src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif" class="a-lazy-loaded" data-src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png"><noscript><img src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png"></noscript></div></div><div class="a-profile-content"><span class="a-profile-name">Sabine W.</span></div></a></div><div class="a-row"><a class="a-link-normal" title="5,0 von 5 Sternen" href="/gp/customer-reviews/R1A8FHPNHFTB0P/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&amp;ASIN=B01DQDZVCO"><i data-hook="review-star-rating" class="a-icon a-icon-star a-star-5 review-rating"><span class="a-icon-alt">5,0 von 5 Sternen</span></i></a><span class="a-letter-space"></span><a data-hook="review-title" class="a-size-base a-link-normal review-title a-color-base a-text-bold" href="/gp/customer-reviews/R1A8FHPNHFTB0P/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&amp;ASIN=B01DQDZVCO">Tolles Teil!</a></div><span data-hook="review-date" class="a-size-base a-color-secondary review-date">12. November 2016</span><div class="a-row a-spacing-mini review-data review-format-strip"><span data-hook="avp-badge-linkless" class="a-size-mini a-color-state a-text-bold">Verifizierter Kauf</span></div><div class="a-row a-spacing-small review-data"><span data-hook="review-body" class="a-size-base review-text"><div aria-live="polite" data-a-expander-name="review_text_read_more" data-a-expander-collapsed-height="300" class="a-expander-collapsed-height a-row a-expander-container a-expander-partial-collapse-container" style="max-height:300px"><div data-hook="review-collapsed" aria-expanded="false" class="a-expander-content a-expander-partial-collapse-content">Tolles, schlichtes Teil.<br /><br />Ich habe für diesen günstigen Preis eigentlich nicht viel erwartet... Das Teil ist aber wirklich gut und top verarbeitet und das bei diesem günstigen Preis!<br /><br />Top!!</div><div class="a-expander-header a-expander-partial-collapse-header"><div class="a-expander-content-fade"></div><a href="javascript:void(0)" data-hook="expand-collapse-read-more-less" data-action="a-expander-toggle" class="a-declarative" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;Lesen Sie weiter&quot;, &quot;collapse_prompt&quot;:&quot;Weniger lesen&quot;}"><i class="a-icon a-icon-extender-expand"></i><span class="a-expander-prompt">Lesen Sie weiter</span></a></div></div></span></div><div data-hook="review-comments" class="a-row review-comments"><span class="cr-vote" data-hook="review-voting-widget">

  <div class="a-row a-spacing-small"><span data-hook="helpful-vote-statement" class="a-size-base a-color-tertiary cr-vote-text">6 Personen fanden diese Informationen hilfreich</span></div><div class="cr-helpful-button cr-vote-component aok-float-left">
      <span class="a-declarative" data-action="reviews:vote-action" data-reviews:vote-action="{&quot;voteInstanceId&quot;:&quot;R1A8FHPNHFTB0P&quot;,&quot;ajaxUrl&quot;:&quot;/hz/reviews-render/ajax/vote/submit/ref=cm_cr_dp_d_vote_lft&quot;,&quot;voteValue&quot;:&quot;1&quot;,&quot;cssSelectors&quot;:{&quot;onError&quot;:&quot;.cr-vote-error&quot;,&quot;inFlight&quot;:&quot;.cr-vote-feedback&quot;,&quot;hideVoteComponents&quot;:&quot;.cr-vote-component&quot;,&quot;onSuccess&quot;:&quot;.cr-vote-success&quot;},&quot;csrfT&quot;:&quot;gh3yKyLsVWZiemiIY4LePISzYaPMcJjMUISPGLMAAAABAAAAAFwr0VJyYXcAAAAA+4kUEk/7iMGR3xPcX6iU&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;,&quot;voteDimension&quot;:&quot;Helpful&quot;}"><span class="a-button a-button-base"><span class="a-button-inner"><input data-hook="vote-helpful-button" class="a-button-input" type="submit"><span class="a-button-text" aria-hidden="true"><div class="cr-helpful-text">
            Nützlich</div>
        </span></span></span></span></div>
  <span class="cr-vote-feedback cr-vote-component aok-hidden">Senden von Feedback...</span><span data-hook="vote-success-message" class="cr-vote-success cr-vote-component aok-hidden"><div class="a-box a-alert-inline a-alert-inline-success cr-vote-helpful-yes"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">Vielen Dank für Ihr Feedback.</div></div></div></span><span class="cr-vote-error cr-vote-component aok-hidden"><div class="a-box a-alert-inline a-alert-inline-error" aria-live="assertive" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">Wir konnten Ihre Stimmabgabe leider nicht speichern. Bitte versuchen Sie es später noch einmal.</div></div></div></span></span>

<i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i><a data-hook="review-comment" class="a-size-base a-link-normal a-color-secondary a-text-normal" href="/gp/customer-reviews/R1A8FHPNHFTB0P/ref=cm_cr_dp_d_rvw_btm?ie=UTF8&amp;ASIN=B01DQDZVCO#wasThisHelpful">Kommentar</a><span class="cr-footer-line-height">
    <span><i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i><span class="a-declarative" data-action="cr-popup" data-cr-popup="{&quot;width&quot;:&quot;580&quot;,&quot;title&quot;:&quot;ReportAbuse&quot;,&quot;url&quot;:&quot;/hz/reviews-render/report-abuse?ie=UTF8&amp;voteDomain=Reviews&amp;ref=cm_cr_dp_d_rvw_hlp&amp;csrfT=gh3yKyLsVWZiemiIY4LePISzYaPMcJjMUISPGLMAAAABAAAAAFwr0VJyYXcAAAAA%2B4kUEk%2F7iMGR3xPcX6iU&amp;entityId=R1A8FHPNHFTB0P&amp;sessionId=262-9898842-9713804&quot;,&quot;height&quot;:&quot;380&quot;}"><a class="a-size-base a-link-normal a-color-secondary report-abuse-link a-text-normal" href="/hz/reviews-render/report-abuse?ie=UTF8&amp;voteDomain=Reviews&amp;ref=cm_cr_dp_d_rvw_hlp&amp;csrfT=gh3yKyLsVWZiemiIY4LePISzYaPMcJjMUISPGLMAAAABAAAAAFwr0VJyYXcAAAAA%2B4kUEk%2F7iMGR3xPcX6iU&amp;entityId=R1A8FHPNHFTB0P&amp;sessionId=262-9898842-9713804">Missbrauch melden</a></span></span></span>

</div></div></div><div id="R3HCK4HE1KD85Q" data-hook="review" class="a-section review"><div id="customer_review-R3HCK4HE1KD85Q" class="a-section celwidget"><div data-hook="genome-widget" class="a-row a-spacing-mini"><a href="/gp/profile/amzn1.account.AG66MRIZVELEZYCXFKXGU22AMRSA/ref=cm_cr_dp_d_gw_tr?ie=UTF8" class="a-profile" data-a-size="small"><div aria-hidden="true" class="a-profile-avatar-wrapper"><div class="a-profile-avatar"><img src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif" class="a-lazy-loaded" data-src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png"><noscript><img src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png"></noscript></div></div><div class="a-profile-content"><span class="a-profile-name">Dieter Tremel</span></div></a></div><div class="a-row"><a class="a-link-normal" title="5,0 von 5 Sternen" href="/gp/customer-reviews/R3HCK4HE1KD85Q/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&amp;ASIN=B01DQDZVCO"><i data-hook="review-star-rating" class="a-icon a-icon-star a-star-5 review-rating"><span class="a-icon-alt">5,0 von 5 Sternen</span></i></a><span class="a-letter-space"></span><a data-hook="review-title" class="a-size-base a-link-normal review-title a-color-base a-text-bold" href="/gp/customer-reviews/R3HCK4HE1KD85Q/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&amp;ASIN=B01DQDZVCO">Schnell geliefert, sieht gut aus und ist praktisch</a></div><span data-hook="review-date" class="a-size-base a-color-secondary review-date">9. Februar 2017</span><div class="a-row a-spacing-mini review-data review-format-strip"><span data-hook="avp-badge-linkless" class="a-size-mini a-color-state a-text-bold">Verifizierter Kauf</span></div><div class="a-row a-spacing-small review-data"><span data-hook="review-body" class="a-size-base review-text"><div aria-live="polite" data-a-expander-name="review_text_read_more" data-a-expander-collapsed-height="300" class="a-expander-collapsed-height a-row a-expander-container a-expander-partial-collapse-container" style="max-height:300px"><div data-hook="review-collapsed" aria-expanded="false" class="a-expander-content a-expander-partial-collapse-content">Um im Schlafzimmer auch einmal schnell etwas außerplanmäßig aufhängen zu können habe ich den WINOMO Kleiderhaken bestellt. Er wurde schnell geliefert, Dübel und Schrauben waren in der Packung. Ich habe die zwei Löcher gebohrt und den Haken aufgehängt. Er sieht im ein- und ausgeklappten Zustand gut aus und tut was er soll. Gut, 5 Wintermäntel würde ich jetzt nicht gerade an die Stange hängen, aber 2 Jacken 1 Hemd und eine Hose hängen schon dran, ohne dass man Angst haben muss. Ich überlege schon, ob ich mir nicht noch einen zweiten Haken kaufen, wenn ja, dann diesen.</div><div class="a-expander-header a-expander-partial-collapse-header"><div class="a-expander-content-fade"></div><a href="javascript:void(0)" data-hook="expand-collapse-read-more-less" data-action="a-expander-toggle" class="a-declarative" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;Lesen Sie weiter&quot;, &quot;collapse_prompt&quot;:&quot;Weniger lesen&quot;}"><i class="a-icon a-icon-extender-expand"></i><span class="a-expander-prompt">Lesen Sie weiter</span></a></div></div></span></div><div data-hook="review-comments" class="a-row review-comments"><span class="cr-vote" data-hook="review-voting-widget">

  <div class="a-row a-spacing-small"><span data-hook="helpful-vote-statement" class="a-size-base a-color-tertiary cr-vote-text">2 Personen fanden diese Informationen hilfreich</span></div><div class="cr-helpful-button cr-vote-component aok-float-left">
      <span class="a-declarative" data-action="reviews:vote-action" data-reviews:vote-action="{&quot;voteInstanceId&quot;:&quot;R3HCK4HE1KD85Q&quot;,&quot;ajaxUrl&quot;:&quot;/hz/reviews-render/ajax/vote/submit/ref=cm_cr_dp_d_vote_lft&quot;,&quot;voteValue&quot;:&quot;1&quot;,&quot;cssSelectors&quot;:{&quot;onError&quot;:&quot;.cr-vote-error&quot;,&quot;inFlight&quot;:&quot;.cr-vote-feedback&quot;,&quot;hideVoteComponents&quot;:&quot;.cr-vote-component&quot;,&quot;onSuccess&quot;:&quot;.cr-vote-success&quot;},&quot;csrfT&quot;:&quot;gmqyZ1kTxjhQ0qA9bEcV/ZluUBqrLSKKAC8REZ0AAAABAAAAAFwr0VJyYXcAAAAA+4kUEk/7iMGR3xPcX6iU&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;,&quot;voteDimension&quot;:&quot;Helpful&quot;}"><span class="a-button a-button-base"><span class="a-button-inner"><input data-hook="vote-helpful-button" class="a-button-input" type="submit"><span class="a-button-text" aria-hidden="true"><div class="cr-helpful-text">
            Nützlich</div>
        </span></span></span></span></div>
  <span class="cr-vote-feedback cr-vote-component aok-hidden">Senden von Feedback...</span><span data-hook="vote-success-message" class="cr-vote-success cr-vote-component aok-hidden"><div class="a-box a-alert-inline a-alert-inline-success cr-vote-helpful-yes"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">Vielen Dank für Ihr Feedback.</div></div></div></span><span class="cr-vote-error cr-vote-component aok-hidden"><div class="a-box a-alert-inline a-alert-inline-error" aria-live="assertive" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">Wir konnten Ihre Stimmabgabe leider nicht speichern. Bitte versuchen Sie es später noch einmal.</div></div></div></span></span>

<i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i><a data-hook="review-comment" class="a-size-base a-link-normal a-color-secondary a-text-normal" href="/gp/customer-reviews/R3HCK4HE1KD85Q/ref=cm_cr_dp_d_rvw_btm?ie=UTF8&amp;ASIN=B01DQDZVCO#wasThisHelpful">Kommentar</a><span class="cr-footer-line-height">
    <span><i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i><span class="a-declarative" data-action="cr-popup" data-cr-popup="{&quot;width&quot;:&quot;580&quot;,&quot;title&quot;:&quot;ReportAbuse&quot;,&quot;url&quot;:&quot;/hz/reviews-render/report-abuse?ie=UTF8&amp;voteDomain=Reviews&amp;ref=cm_cr_dp_d_rvw_hlp&amp;csrfT=gmqyZ1kTxjhQ0qA9bEcV%2FZluUBqrLSKKAC8REZ0AAAABAAAAAFwr0VJyYXcAAAAA%2B4kUEk%2F7iMGR3xPcX6iU&amp;entityId=R3HCK4HE1KD85Q&amp;sessionId=262-9898842-9713804&quot;,&quot;height&quot;:&quot;380&quot;}"><a class="a-size-base a-link-normal a-color-secondary report-abuse-link a-text-normal" href="/hz/reviews-render/report-abuse?ie=UTF8&amp;voteDomain=Reviews&amp;ref=cm_cr_dp_d_rvw_hlp&amp;csrfT=gmqyZ1kTxjhQ0qA9bEcV%2FZluUBqrLSKKAC8REZ0AAAABAAAAAFwr0VJyYXcAAAAA%2B4kUEk%2F7iMGR3xPcX6iU&amp;entityId=R3HCK4HE1KD85Q&amp;sessionId=262-9898842-9713804">Missbrauch melden</a></span></span></span>

</div></div></div><div id="R133EG9SN536OF" data-hook="review" class="a-section review"><div id="customer_review-R133EG9SN536OF" class="a-section celwidget"><div data-hook="genome-widget" class="a-row a-spacing-mini"><a href="/gp/profile/amzn1.account.AFDD2OTIX6DHALLYSSBDWGVCQDEQ/ref=cm_cr_dp_d_gw_tr?ie=UTF8" class="a-profile" data-a-size="small"><div aria-hidden="true" class="a-profile-avatar-wrapper"><div class="a-profile-avatar"><img src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif" class="a-lazy-loaded" data-src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars/default._CR0,0,1024,1024_SX48_.png"><noscript><img src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars/default._CR0,0,1024,1024_SX48_.png"></noscript></div></div><div class="a-profile-content"><span class="a-profile-name">Sophie</span></div></a></div><div class="a-row"><a class="a-link-normal" title="5,0 von 5 Sternen" href="/gp/customer-reviews/R133EG9SN536OF/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&amp;ASIN=B01DQDZVCO"><i data-hook="review-star-rating" class="a-icon a-icon-star a-star-5 review-rating"><span class="a-icon-alt">5,0 von 5 Sternen</span></i></a><span class="a-letter-space"></span><a data-hook="review-title" class="a-size-base a-link-normal review-title a-color-base a-text-bold" href="/gp/customer-reviews/R133EG9SN536OF/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&amp;ASIN=B01DQDZVCO">Ein Traum für jeden Kleiderschrank</a></div><span data-hook="review-date" class="a-size-base a-color-secondary review-date">18. April 2018</span><div class="a-row a-spacing-mini review-data review-format-strip"><span data-hook="avp-badge-linkless" class="a-size-mini a-color-state a-text-bold">Verifizierter Kauf</span></div><div class="a-row a-spacing-small review-data"><span data-hook="review-body" class="a-size-base review-text"><div aria-live="polite" data-a-expander-name="review_text_read_more" data-a-expander-collapsed-height="300" class="a-expander-collapsed-height a-row a-expander-container a-expander-partial-collapse-container" style="max-height:300px"><div data-hook="review-collapsed" aria-expanded="false" class="a-expander-content a-expander-partial-collapse-content">Ich bin total begeistert. Ich hab nach einer Lösung gesucht um mehr Kleiderstücke aufzuhängen. Da sich mein offener Kleiderschrank unter meinem Hochbett befindet ist mein Plaz begrenzt.<br />Die Montage is kinderleicht und wirkt sehr stabil! Klare Kaufempfehlung</div><div class="a-expander-header a-expander-partial-collapse-header"><div class="a-expander-content-fade"></div><a href="javascript:void(0)" data-hook="expand-collapse-read-more-less" data-action="a-expander-toggle" class="a-declarative" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;Lesen Sie weiter&quot;, &quot;collapse_prompt&quot;:&quot;Weniger lesen&quot;}"><i class="a-icon a-icon-extender-expand"></i><span class="a-expander-prompt">Lesen Sie weiter</span></a></div></div></span></div><div class="a-popover-preload" id="a-popover-R133EG9SN536OF_gallerySection_main"><div class="reviewLightboxPopoverContainer">
    <div class="reviewsLightbox" id="R133EG9SN536OF_gallerySection_main"></div>
  </div>
</div><div id="R133EG9SN536OF_imageSection_main" class="a-section a-spacing-medium review-image-container"><div class="review-image-tile-section " data-reviewid="R133EG9SN536OF">
        <img alt="review image" src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif" data-hook="review-image-tile" class="review-image-tile a-lazy-loaded" height="88" width="100%" data-src="https://images-na.ssl-images-amazon.com/images/I/7171sJvEwKL._SY88.jpg"><noscript><img alt="review image" src="https://images-na.ssl-images-amazon.com/images/I/7171sJvEwKL._SY88.jpg" height="88" width="100%"></noscript><img alt="review image" src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif" data-hook="review-image-tile" class="review-image-tile a-lazy-loaded" height="88" width="100%" data-src="https://images-na.ssl-images-amazon.com/images/I/71BMdxQpvdL._SY88.jpg"><noscript><img alt="review image" src="https://images-na.ssl-images-amazon.com/images/I/71BMdxQpvdL._SY88.jpg" height="88" width="100%"></noscript></div>
    
    <div style="display:none;">
        <span class="a-declarative" data-action="a-modal" data-a-modal="{&quot;name&quot;:&quot;R133EG9SN536OF_gallerySection_main&quot;}"><a href="javascript:void(0)" class="a-popover-trigger a-declarative"><i class="a-icon a-icon-popover"></i></a></span></div>
</div><script>
        P.when('review-image-binder', 'reviewsLightbox-js').execute(function(reviewImageBinder) {
            reviewImageBinder.bindReview("R133EG9SN536OF",
                "R133EG9SN536OF_imageSection_main",
                "R133EG9SN536OF_gallerySection_main");
        });
    </script>
<div data-hook="review-comments" class="a-row review-comments"><span class="cr-vote" data-hook="review-voting-widget">

  <div class="a-row a-spacing-small"><span data-hook="helpful-vote-statement" class="a-size-base a-color-tertiary cr-vote-text">3 Personen fanden diese Informationen hilfreich</span></div><div class="cr-helpful-button cr-vote-component aok-float-left">
      <span class="a-declarative" data-action="reviews:vote-action" data-reviews:vote-action="{&quot;voteInstanceId&quot;:&quot;R133EG9SN536OF&quot;,&quot;ajaxUrl&quot;:&quot;/hz/reviews-render/ajax/vote/submit/ref=cm_cr_dp_d_vote_lft&quot;,&quot;voteValue&quot;:&quot;1&quot;,&quot;cssSelectors&quot;:{&quot;onError&quot;:&quot;.cr-vote-error&quot;,&quot;inFlight&quot;:&quot;.cr-vote-feedback&quot;,&quot;hideVoteComponents&quot;:&quot;.cr-vote-component&quot;,&quot;onSuccess&quot;:&quot;.cr-vote-success&quot;},&quot;csrfT&quot;:&quot;gkzMOYEPo6qqUAy6F3DsbxjV2DkkjK6OF4g2uCgAAAABAAAAAFwr0VJyYXcAAAAA+4kUEk/7iMGR3xPcX6iU&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;,&quot;voteDimension&quot;:&quot;Helpful&quot;}"><span class="a-button a-button-base"><span class="a-button-inner"><input data-hook="vote-helpful-button" class="a-button-input" type="submit"><span class="a-button-text" aria-hidden="true"><div class="cr-helpful-text">
            Nützlich</div>
        </span></span></span></span></div>
  <span class="cr-vote-feedback cr-vote-component aok-hidden">Senden von Feedback...</span><span data-hook="vote-success-message" class="cr-vote-success cr-vote-component aok-hidden"><div class="a-box a-alert-inline a-alert-inline-success cr-vote-helpful-yes"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">Vielen Dank für Ihr Feedback.</div></div></div></span><span class="cr-vote-error cr-vote-component aok-hidden"><div class="a-box a-alert-inline a-alert-inline-error" aria-live="assertive" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">Wir konnten Ihre Stimmabgabe leider nicht speichern. Bitte versuchen Sie es später noch einmal.</div></div></div></span></span>

<i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i><a data-hook="review-comment" class="a-size-base a-link-normal a-color-secondary a-text-normal" href="/gp/customer-reviews/R133EG9SN536OF/ref=cm_cr_dp_d_rvw_btm?ie=UTF8&amp;ASIN=B01DQDZVCO#wasThisHelpful">Kommentar</a><span class="cr-footer-line-height">
    <span><i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i><span class="a-declarative" data-action="cr-popup" data-cr-popup="{&quot;width&quot;:&quot;580&quot;,&quot;title&quot;:&quot;ReportAbuse&quot;,&quot;url&quot;:&quot;/hz/reviews-render/report-abuse?ie=UTF8&amp;voteDomain=Reviews&amp;ref=cm_cr_dp_d_rvw_hlp&amp;csrfT=gkzMOYEPo6qqUAy6F3DsbxjV2DkkjK6OF4g2uCgAAAABAAAAAFwr0VJyYXcAAAAA%2B4kUEk%2F7iMGR3xPcX6iU&amp;entityId=R133EG9SN536OF&amp;sessionId=262-9898842-9713804&quot;,&quot;height&quot;:&quot;380&quot;}"><a class="a-size-base a-link-normal a-color-secondary report-abuse-link a-text-normal" href="/hz/reviews-render/report-abuse?ie=UTF8&amp;voteDomain=Reviews&amp;ref=cm_cr_dp_d_rvw_hlp&amp;csrfT=gkzMOYEPo6qqUAy6F3DsbxjV2DkkjK6OF4g2uCgAAAABAAAAAFwr0VJyYXcAAAAA%2B4kUEk%2F7iMGR3xPcX6iU&amp;entityId=R133EG9SN536OF&amp;sessionId=262-9898842-9713804">Missbrauch melden</a></span></span></span>

</div></div></div><div id="R2E4NN75MTP9XO" data-hook="review" class="a-section review"><div id="customer_review-R2E4NN75MTP9XO" class="a-section celwidget"><div data-hook="genome-widget" class="a-row a-spacing-mini"><a href="/gp/profile/amzn1.account.AFQGJ42HEQZMEYF45OR4QUA2YFEQ/ref=cm_cr_dp_d_gw_tr?ie=UTF8" class="a-profile" data-a-size="small"><div aria-hidden="true" class="a-profile-avatar-wrapper"><div class="a-profile-avatar"><img src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif" class="a-lazy-loaded" data-src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png"><noscript><img src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png"></noscript></div></div><div class="a-profile-content"><span class="a-profile-name">Hanta</span></div></a></div><div class="a-row"><a class="a-link-normal" title="5,0 von 5 Sternen" href="/gp/customer-reviews/R2E4NN75MTP9XO/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&amp;ASIN=B01DQDZVCO"><i data-hook="review-star-rating" class="a-icon a-icon-star a-star-5 review-rating"><span class="a-icon-alt">5,0 von 5 Sternen</span></i></a><span class="a-letter-space"></span><a data-hook="review-title" class="a-size-base a-link-normal review-title a-color-base a-text-bold" href="/gp/customer-reviews/R2E4NN75MTP9XO/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&amp;ASIN=B01DQDZVCO">Schön und praktisch</a></div><span data-hook="review-date" class="a-size-base a-color-secondary review-date">8. Juli 2017</span><div class="a-row a-spacing-mini review-data review-format-strip"><span data-hook="avp-badge-linkless" class="a-size-mini a-color-state a-text-bold">Verifizierter Kauf</span></div><div class="a-row a-spacing-small review-data"><span data-hook="review-body" class="a-size-base review-text"><div aria-live="polite" data-a-expander-name="review_text_read_more" data-a-expander-collapsed-height="300" class="a-expander-collapsed-height a-row a-expander-container a-expander-partial-collapse-container" style="max-height:300px"><div data-hook="review-collapsed" aria-expanded="false" class="a-expander-content a-expander-partial-collapse-content">Genau sowas habe ich gesucht. Bisher musste ich die gebügelten Hemden immer umständlich an der Tür oder irgendeinen Schrank hängen. Die Montage mit zwei im Lieferumfang enthaltenen Schrauben war einfach, hat keine Minute gedauert; Schiene draufgeschoben,leichtes aufziehen und fertig.Nun habe ich die klappbare Gadrobe an eine Tür montiert, sammelt die Hemden dort beim bügeln und räume sie anschließend in den Kleiderschrank,ohne lästiges Kleiderhaken zurückgedrehe, dann klappe ich die Schiene einfach ein und sie stört weder platztechnisch noch optisch. Für alle die eine einfache, praktische und schicke Lösung suchen.</div><div class="a-expander-header a-expander-partial-collapse-header"><div class="a-expander-content-fade"></div><a href="javascript:void(0)" data-hook="expand-collapse-read-more-less" data-action="a-expander-toggle" class="a-declarative" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;Lesen Sie weiter&quot;, &quot;collapse_prompt&quot;:&quot;Weniger lesen&quot;}"><i class="a-icon a-icon-extender-expand"></i><span class="a-expander-prompt">Lesen Sie weiter</span></a></div></div></span></div><div data-hook="review-comments" class="a-row review-comments"><span class="cr-vote" data-hook="review-voting-widget">

  <div class="a-row a-spacing-small"><span data-hook="helpful-vote-statement" class="a-size-base a-color-tertiary cr-vote-text">Eine Person fand diese Informationen hilfreich</span></div><div class="cr-helpful-button cr-vote-component aok-float-left">
      <span class="a-declarative" data-action="reviews:vote-action" data-reviews:vote-action="{&quot;voteInstanceId&quot;:&quot;R2E4NN75MTP9XO&quot;,&quot;ajaxUrl&quot;:&quot;/hz/reviews-render/ajax/vote/submit/ref=cm_cr_dp_d_vote_lft&quot;,&quot;voteValue&quot;:&quot;1&quot;,&quot;cssSelectors&quot;:{&quot;onError&quot;:&quot;.cr-vote-error&quot;,&quot;inFlight&quot;:&quot;.cr-vote-feedback&quot;,&quot;hideVoteComponents&quot;:&quot;.cr-vote-component&quot;,&quot;onSuccess&quot;:&quot;.cr-vote-success&quot;},&quot;csrfT&quot;:&quot;gmb8vMGk46eU+3gAQFfe+q1ctAnDZY4qbXDhBR0AAAABAAAAAFwr0VJyYXcAAAAA+4kUEk/7iMGR3xPcX6iU&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;,&quot;voteDimension&quot;:&quot;Helpful&quot;}"><span class="a-button a-button-base"><span class="a-button-inner"><input data-hook="vote-helpful-button" class="a-button-input" type="submit"><span class="a-button-text" aria-hidden="true"><div class="cr-helpful-text">
            Nützlich</div>
        </span></span></span></span></div>
  <span class="cr-vote-feedback cr-vote-component aok-hidden">Senden von Feedback...</span><span data-hook="vote-success-message" class="cr-vote-success cr-vote-component aok-hidden"><div class="a-box a-alert-inline a-alert-inline-success cr-vote-helpful-yes"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">Vielen Dank für Ihr Feedback.</div></div></div></span><span class="cr-vote-error cr-vote-component aok-hidden"><div class="a-box a-alert-inline a-alert-inline-error" aria-live="assertive" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">Wir konnten Ihre Stimmabgabe leider nicht speichern. Bitte versuchen Sie es später noch einmal.</div></div></div></span></span>

<i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i><a data-hook="review-comment" class="a-size-base a-link-normal a-color-secondary a-text-normal" href="/gp/customer-reviews/R2E4NN75MTP9XO/ref=cm_cr_dp_d_rvw_btm?ie=UTF8&amp;ASIN=B01DQDZVCO#wasThisHelpful">Kommentar</a><span class="cr-footer-line-height">
    <span><i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i><span class="a-declarative" data-action="cr-popup" data-cr-popup="{&quot;width&quot;:&quot;580&quot;,&quot;title&quot;:&quot;ReportAbuse&quot;,&quot;url&quot;:&quot;/hz/reviews-render/report-abuse?ie=UTF8&amp;voteDomain=Reviews&amp;ref=cm_cr_dp_d_rvw_hlp&amp;csrfT=gmb8vMGk46eU%2B3gAQFfe%2Bq1ctAnDZY4qbXDhBR0AAAABAAAAAFwr0VJyYXcAAAAA%2B4kUEk%2F7iMGR3xPcX6iU&amp;entityId=R2E4NN75MTP9XO&amp;sessionId=262-9898842-9713804&quot;,&quot;height&quot;:&quot;380&quot;}"><a class="a-size-base a-link-normal a-color-secondary report-abuse-link a-text-normal" href="/hz/reviews-render/report-abuse?ie=UTF8&amp;voteDomain=Reviews&amp;ref=cm_cr_dp_d_rvw_hlp&amp;csrfT=gmb8vMGk46eU%2B3gAQFfe%2Bq1ctAnDZY4qbXDhBR0AAAABAAAAAFwr0VJyYXcAAAAA%2B4kUEk%2F7iMGR3xPcX6iU&amp;entityId=R2E4NN75MTP9XO&amp;sessionId=262-9898842-9713804">Missbrauch melden</a></span></span></span>

</div></div></div><div id="R3SOQ57R77YV4D" data-hook="review" class="a-section review"><div id="customer_review-R3SOQ57R77YV4D" class="a-section celwidget"><div data-hook="genome-widget" class="a-row a-spacing-mini"><a href="/gp/profile/amzn1.account.AEN7XVRF6ZQHOC3Q27RHQ5CJUZEA/ref=cm_cr_dp_d_gw_tr?ie=UTF8" class="a-profile" data-a-size="small"><div aria-hidden="true" class="a-profile-avatar-wrapper"><div class="a-profile-avatar"><img src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif" class="a-lazy-loaded" data-src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png"><noscript><img src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png"></noscript></div></div><div class="a-profile-content"><span class="a-profile-name">Die drei Könige aus dem Fankenland</span></div></a></div><div class="a-row"><a class="a-link-normal" title="4,0 von 5 Sternen" href="/gp/customer-reviews/R3SOQ57R77YV4D/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&amp;ASIN=B01DQDZVCO"><i data-hook="review-star-rating" class="a-icon a-icon-star a-star-4 review-rating"><span class="a-icon-alt">4,0 von 5 Sternen</span></i></a><span class="a-letter-space"></span><a data-hook="review-title" class="a-size-base a-link-normal review-title a-color-base a-text-bold" href="/gp/customer-reviews/R3SOQ57R77YV4D/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&amp;ASIN=B01DQDZVCO">Stabil, etwas hakelig.</a></div><span data-hook="review-date" class="a-size-base a-color-secondary review-date">31. Mai 2017</span><div class="a-row a-spacing-mini review-data review-format-strip"><span data-hook="avp-badge-linkless" class="a-size-mini a-color-state a-text-bold">Verifizierter Kauf</span></div><div class="a-row a-spacing-small review-data"><span data-hook="review-body" class="a-size-base review-text"><div aria-live="polite" data-a-expander-name="review_text_read_more" data-a-expander-collapsed-height="300" class="a-expander-collapsed-height a-row a-expander-container a-expander-partial-collapse-container" style="max-height:300px"><div data-hook="review-collapsed" aria-expanded="false" class="a-expander-content a-expander-partial-collapse-content">Gute Ware, sehr stabil. teilweise hängen bis zu 6 Blusen oder Hemden. Lochsystem zur Befestigung hätte ausgereifter sein können. Mitgeliefertes Schrauben/Dübeltütchen schmeißt man besser weg (außer man möchte das es bei Belastung herunterfällt) und ersetzt es durch Qualität. Deswegen Punktabzug. Beim Zusammenklappen manchmal &#34;hakelig&#34; - Preis - Leistung passt.</div><div class="a-expander-header a-expander-partial-collapse-header"><div class="a-expander-content-fade"></div><a href="javascript:void(0)" data-hook="expand-collapse-read-more-less" data-action="a-expander-toggle" class="a-declarative" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;Lesen Sie weiter&quot;, &quot;collapse_prompt&quot;:&quot;Weniger lesen&quot;}"><i class="a-icon a-icon-extender-expand"></i><span class="a-expander-prompt">Lesen Sie weiter</span></a></div></div></span></div><div data-hook="review-comments" class="a-row review-comments"><span class="cr-vote" data-hook="review-voting-widget">

  <div class="a-row a-spacing-small"><span data-hook="helpful-vote-statement" class="a-size-base a-color-tertiary cr-vote-text">2 Personen fanden diese Informationen hilfreich</span></div><div class="cr-helpful-button cr-vote-component aok-float-left">
      <span class="a-declarative" data-action="reviews:vote-action" data-reviews:vote-action="{&quot;voteInstanceId&quot;:&quot;R3SOQ57R77YV4D&quot;,&quot;ajaxUrl&quot;:&quot;/hz/reviews-render/ajax/vote/submit/ref=cm_cr_dp_d_vote_lft&quot;,&quot;voteValue&quot;:&quot;1&quot;,&quot;cssSelectors&quot;:{&quot;onError&quot;:&quot;.cr-vote-error&quot;,&quot;inFlight&quot;:&quot;.cr-vote-feedback&quot;,&quot;hideVoteComponents&quot;:&quot;.cr-vote-component&quot;,&quot;onSuccess&quot;:&quot;.cr-vote-success&quot;},&quot;csrfT&quot;:&quot;grXu9fjKLtDsQxKyQ0rLwrtU/c+gm4YLlBYsSggAAAABAAAAAFwr0VJyYXcAAAAA+4kUEk/7iMGR3xPcX6iU&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;,&quot;voteDimension&quot;:&quot;Helpful&quot;}"><span class="a-button a-button-base"><span class="a-button-inner"><input data-hook="vote-helpful-button" class="a-button-input" type="submit"><span class="a-button-text" aria-hidden="true"><div class="cr-helpful-text">
            Nützlich</div>
        </span></span></span></span></div>
  <span class="cr-vote-feedback cr-vote-component aok-hidden">Senden von Feedback...</span><span data-hook="vote-success-message" class="cr-vote-success cr-vote-component aok-hidden"><div class="a-box a-alert-inline a-alert-inline-success cr-vote-helpful-yes"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">Vielen Dank für Ihr Feedback.</div></div></div></span><span class="cr-vote-error cr-vote-component aok-hidden"><div class="a-box a-alert-inline a-alert-inline-error" aria-live="assertive" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">Wir konnten Ihre Stimmabgabe leider nicht speichern. Bitte versuchen Sie es später noch einmal.</div></div></div></span></span>

<i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i><a data-hook="review-comment" class="a-size-base a-link-normal a-color-secondary a-text-normal" href="/gp/customer-reviews/R3SOQ57R77YV4D/ref=cm_cr_dp_d_rvw_btm?ie=UTF8&amp;ASIN=B01DQDZVCO#wasThisHelpful">Kommentar</a><span class="cr-footer-line-height">
    <span><i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i><span class="a-declarative" data-action="cr-popup" data-cr-popup="{&quot;width&quot;:&quot;580&quot;,&quot;title&quot;:&quot;ReportAbuse&quot;,&quot;url&quot;:&quot;/hz/reviews-render/report-abuse?ie=UTF8&amp;voteDomain=Reviews&amp;ref=cm_cr_dp_d_rvw_hlp&amp;csrfT=grXu9fjKLtDsQxKyQ0rLwrtU%2Fc%2Bgm4YLlBYsSggAAAABAAAAAFwr0VJyYXcAAAAA%2B4kUEk%2F7iMGR3xPcX6iU&amp;entityId=R3SOQ57R77YV4D&amp;sessionId=262-9898842-9713804&quot;,&quot;height&quot;:&quot;380&quot;}"><a class="a-size-base a-link-normal a-color-secondary report-abuse-link a-text-normal" href="/hz/reviews-render/report-abuse?ie=UTF8&amp;voteDomain=Reviews&amp;ref=cm_cr_dp_d_rvw_hlp&amp;csrfT=grXu9fjKLtDsQxKyQ0rLwrtU%2Fc%2Bgm4YLlBYsSggAAAABAAAAAFwr0VJyYXcAAAAA%2B4kUEk%2F7iMGR3xPcX6iU&amp;entityId=R3SOQ57R77YV4D&amp;sessionId=262-9898842-9713804">Missbrauch melden</a></span></span></span>

</div></div></div></div></div><a id="end-reviews" class="a-link-normal" href="#"></a></div><div id="reviews-medley-footer" data-hook="reviews-medley-footer" class="a-section"><div class="a-row"></div><div class="a-row a-spacing-large"><a data-hook="see-all-reviews-link-foot" class="a-link-emphasis a-text-bold" href="/WINOMO-Kleiderhaken-Klappbar-Wand-Kleiderständer/product-reviews/B01DQDZVCO/ref=cm_cr_dp_d_show_all_btm?ie=UTF8&amp;reviewerType=all_reviews">Alle 110 Rezensionen anzeigen</a></div><div class="a-row"><span class="a-button a-button-base writeReviewButton"><span class="a-button-inner"><a href="/review/create-review/ref=cm_cr_dp_d_wr_but_btm?ie=UTF8&amp;channel=glance-detail&amp;asin=B01DQDZVCO" data-hook="write-review-button" class="a-button-text" role="button">Kundenrezension verfassen</a></span></span></div></div></div>
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
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/21TkWPg6NYL._RC|21zqbtNuulL.js,112YfhTGjqL.js,01GhKb2usNL.js_.js?AUIClients/HardlinesFeatureDetailPageMetaAsset');
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




    
    



  



        
        
        
        
  









        








<script>
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/61TwWbu0afL.js?AUIClients/DetailPageImageBlockAssets#153723-T1');
</script>





<div id="imageBlockVariations_feature_div" class="feature" data-feature-name="imageBlockVariations">
         
     




    

    
    
    
        
            
                
	                
	                
	                	




<script type="text/javascript">
P.when('A', 'jQuery', 'ImageBlockATF', 'cf').register('ImageBlockBTF', function(A, $, imageBlockATF, cf){
var data = {};
var obj = jQuery.parseJSON('{"dataInJson":null,"alwaysIncludeVideo":true,"autoplayVideo":false,"defaultColor":"initial","mainImageSizes":[["355","355"],["450","450"],["425","550"],["466","606"],["522","679"],["569","741"],["679","879"]],"maxAlts":7,"altsOnLeft":true,"productGroupID":"home_display_on_website","lazyLoadExperienceDisabled":true,"lazyLoadExperienceOnHoverDisabled":false,"useChromelessVideoPlayer":false,"colorToAsin":{},"refactorEnabled":true,"useIV":true,"views":["ImageBlockMagnifierView","ImageBlockAltImageView","ImageBlockVideoView","ImageBlockTwisterView","ImageBlockImmersiveViewImages","ImageBlockImmersiveViewVideos","ImageBlockImmersiveView360","ImageBlockTabbedImmersiveView"],"enhancedHoverOverlay":true,"landingAsinColor":"initial","colorImages":{},"heroImages":{},"enable360Map":{},"staticImages":{"hoverZoomIcon":null,"zoomLensBackground":"https://images-na.ssl-images-amazon.com/images/G/03/apparel/rcxgs/tile._CB483369910_.gif","zoomInCur":"https://images-na.ssl-images-amazon.com/images/G/03/detail-page/cursors/zoomIn._CB271897264_.cur","arrow":"https://images-na.ssl-images-amazon.com/images/G/03/javascripts/lib/popover/images/light/sprite-vertical-popover-arrow._CB186039208_.png","zoomIn":"https://images-na.ssl-images-amazon.com/images/G/03/detail-page/cursors/zoom-in._CB184888321_.bmp","zoomOut":"https://images-na.ssl-images-amazon.com/images/G/03/detail-page/cursors/zoom-out._CB184888341_.bmp","videoThumbIcon":"https://images-na.ssl-images-amazon.com/images/G/03/Quarterdeck/en_US/images/video._CB140033762_SS40_.jpg","spinnerNoLabel":"https://images-na.ssl-images-amazon.com/images/G/03/ui/loadIndicators/loading-large._CB192546226_.gif","zoomOutCur":"https://images-na.ssl-images-amazon.com/images/G/03/detail-page/cursors/zoomOut._CB271897247_.cur","videoSWFPath":"https://images-na.ssl-images-amazon.com/images/G/03/Quarterdeck/en_US/video/20110518115040892/Video._CB137425805_.swf","grabbing":"https://images-na.ssl-images-amazon.com/images/G/03/HomeCustomProduct/grabbingbox._CB498011280_.cur","icon360":"https://images-na.ssl-images-amazon.com/images/G/03/HomeCustomProduct/360_icon_73x73v2._CB498011280_SS40_.png","grab":"https://images-na.ssl-images-amazon.com/images/G/03/HomeCustomProduct/grabbox._CB498011280_.cur","spinner":"https://images-na.ssl-images-amazon.com/images/G/03/ui/loadIndicators/loading-large_labeled._CB186124316_.gif"},"staticStrings":{"images":"Bilder","watchMoreVideos":"Für mehr Videos klicken","allMedia":"Alle Medien","dragToSpin":"Zum Drehen ziehen","videos":"Videos","video":"Video","rollOverToZoom":"Für größere Ansicht Maus über das Bild ziehen","clickToExpand":"Für eine größere Ansicht klicken Sie auf das Bild","playVideo":"Zur Video-Wiedergabe klicken","touchToZoom":"Berühren Sie das Bild, um es zu vergrößern.","multipleVideos":"VIDEOS","singleVideo":"VIDEO","pleaseSelect":"Bitte wählen Sie","close":"Schließen","clickToZoom":"Klicken Sie auf das Bild, um es zu vergrößern"},"useChildVideos":true,"useClickZoom":false,"useHoverZoom":true,"useHoverZoomIpad":false,"visualDimensions":[],"mainImageHeightPartitions":null,"mainImageMaxSizes":null,"heroFocalPoint":null,"showMagnifierOnHover":false,"disableHoverOnAltImages":false,"overrideAltImageClickAction":false,"naturalMainImageSize":null,"imgTagWrapperClasses":null,"prioritizeVideos":false,"usePeekHover":false,"fadeMagnifier":false,"repositionHeroImage":false,"heroVideoVariant":null,"videos":[],"title":"WINOMO Kleiderhaken Klappbar Wand-Kleiderständer","airyConfig":{"jsUrl":"https://images-na.ssl-images-amazon.com/images/G/01/vap/video/airy2/prod/2.0.1460.0/js/airy.skin._CB513066589_.js","cssUrl":"https://images-na.ssl-images-amazon.com/images/G/01/vap/video/airy2/prod/2.0.1460.0/css/beacon._CB513066589_.css","swfUrl":"https://images-na.ssl-images-amazon.com/images/G/01/vap/video/airy2/prod/2.0.1460.0/flash/AiryBasicRenderer._CB513066589_.swf","foresterMetadataParams":{"marketplaceId":"A1PA6795UKMFR9","clientId":"Dpx","method":"Home.ImageBlock","requestId":"VBWKFM73Q96291SQHAHK","session":"262-9898842-9713804"}},"productReelTreatment":"T2","vseVideoDataSourceTreatment":"C","mediaAsin":"B01DQDZVCO","largeSCLVideoThumbnail":false,"displayVideoBanner":false,"dpRequestId":"VBWKFM73Q96291SQHAHK"}');
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





    
    



  



        
        
        
        
  









        













<div id="ajaxBlockComponents_feature_div" class="feature" data-feature-name="ajaxBlockComponents">
         
     




    

    
    
    
        
            
                
	                
	                
	                	



<script type="text/javascript">

P.when('A','jQuery').execute('triggerVideoAjax', function(A){
var obj = jQuery.parseJSON('{"dataInJson":null,"colorImages":{},"videos":[],"lazyLoadExperienceDisabled":true,"lazyLoadExperienceOnHoverDisabled":false,"refactorEnabled":false,"mainImageSizes":[["355","355"],["450","450"],["425","550"],["466","606"],["522","679"],["569","741"],["679","879"]]}');
A.trigger('triggerVideoAjax',obj.videos);
});
</script>

	                
                
            
        
        
        
        
        
        
        
    
    
    

    






    










    </div>

































        




































<script>if (typeof uet === 'function' && typeof ues === 'function') {var scope = 'Detail_ad-endcap-1_Glance';var placementId = '47d301a6-3423-4a24-afe1-4f7ef8426084';ues('wb', 'adplacements:' + scope.replace(/\\_/g, ':'), {wb:1}); uet('bb', 'adplacements:' + scope.replace(/\\_/g, ':'), {wb:1}); if (placementId) {ues('wb', 'adplacements:' + placementId, {wb:1});uet('bb', 'adplacements:' + placementId, {wb:1});}}</script><div id="ape_Detail_ad-endcap-1_Glance_placement" class="copilot-secure-display celwidget  text/x-dacx-safeframe" data-campaign="5276" style="display: block; margin:auto; line-height:0; width:728px; height: 120px;" cel_widget_id="Detail_ad-endcap-1_Glance" data-ad-details='{"slot" :"Detail_ad-endcap-1_Glance","slotName" :"ad-endcap-1","src" : "https://aax-eu.amazon-adsystem.com/e/xsp/getAd?src=506&slot=ad-endcap-1&rid=01012e449a5812b988e8c56ff22caadafc60529b4f2d65308570956be88902107edd","adServer" :"cs","campaignId" :  "5276","arid" :"e42f54bb06b54cdcafe8d78d02d134e8","placementId": "47d301a6-3423-4a24-afe1-4f7ef8426084","size" :{"width": "100%","height" : "90px"},"allowedSizes" :[{"width":"728px","height":"90px"}],"allowedDomains" :  ["g-ecx.images-amazon.com"],"aanParams" :   "site%3Damazon.de%3Bpt%3DDetail%3Bslot%3Dad-endcap-1%3Bpid%3DB01DQDZVCO%3Bq%3Dkleiderhaken%3Bbn%3D3167641%3Barid%3De42f54bb06b54cdcafe8d78d02d134e8","loadAfter" :   "windowOnLoad","extraDelay" :  0,"iframeExtraStyle": "min-width: 728px;","iframeClass":  "","iframeSandbox":"","adPixels": [],"adPixelDelay": "0","aaxInstrPixelUrl": "","usePrefetchRoute": false,"serverSideFetchAd": "false","enableAdBlockerDetector": false,"disableResizeFunc": true,"fallbackStaticAdImgUrl": "","fallbackStaticAdClickUrl": "","fallbackStaticAdExtraStyle": "","adFeedbackInfo": {"endPoint": "/gp/aq-feedback/lazyLoad/handler/af-link-handler.html","boolFeedback": true,"slugText": "Anzeige"},"adPlacementMetaData": {"searchTerms": "a2xlaWRlcmhha2Vu","pageUrl": "aHR0cHM6Ly93d3cuYW1hem9uLmRlL2dwL3Byb2R1Y3QvQjAxRFFEWlZDTz9yZWYlNUY9c3IlNUYxJTVGOCZxaWQ9MTU0NjM3NTQ4MSZzcj04LTgma2V5d29yZHM9a2xlaWRlcmhha2Vu","adElementId": "ape_Detail_ad-endcap-1_Glance_placement","pageType": "Detail","slotName": "ad-endcap-1"},"adCreativeMetaData": {"adNetwork": "cs"},"advertisementStyle": {"position": "absolute","top": "2px","right": "0px","display": "inline-block","font": "normal 11px Arial","color": "grey"},"feedbackDivStyle": {"position": "relative","height": "14px","top": "2px"},"viewabilityStandards": [{"p": 0, "t": 0, "def": "amzn"}, {"p": 50, "t": 1, "def": "iab"}, {"p": 100, "t": 0, "def": "groupm"}],"ajaxWeblabTriggerId": "","abpStatus": "1","abpAcceptable": "true","DAsfUrl":"https://images-eu.ssl-images-amazon.com/images/G/03/ape/sf/desktop/DAsf-1.50.917d6c3._V459327015_.js"}' aria-hidden="true"></div><script>(function(){function a(d,e){if(window.addEventListener){window.addEventListener(d,e,false);}else{if(window.attachEvent){window.attachEvent("on"+d,e);}}}function c(d,e){if(window.removeEventListener){window.removeEventListener(d,e,false);}else{if(window.detachEvent){window.detachEvent("on"+d,e);}}}var b=function(){(function(){(function(j,n){j.sfLogErrors=j.sfLogErrors||false;var o=o||function(s,r){r=r||new Error(s);if(j.ue&&typeof ue.count=="function"){ue.count("adplacements:safeFrameError",1);}if(!j.sfLogErrors){return;}if(j.ueLogError){j.ueLogError(r,{logLevel:"ERROR",attribution:"APE-safeframe",message:s+" "});}else{if(typeof console!=="undefined"&&console.error){console.error(s,r);}}};j.aanParams=j.aanParams||{};j.aanParams["ad-endcap-1"]="site=amazon.de;pt=Detail;slot=ad-endcap-1;pid=B01DQDZVCO;q=kleiderhaken;bn=3167641;arid=e42f54bb06b54cdcafe8d78d02d134e8";j["ad-endcap-1"]={};j["ad-endcap-1"].adStartTime=(new Date()).getTime();function d(){return j.innerHeight||n.documentElement.clientHeight;}function g(){return j.innerWidth||n.documentElement.clientWidth;}function e(t,r,s){if(t>0){return(s>t);}else{return(r>0);}}var f=function(){return(Date.now?Date.now():new Date().getTime());};throttle=function(s,u,y){var r,w,z;var x=null;var v=0;if(!y){y={};}var t=function(){v=y.leading===false?0:f();x=null;z=s.apply(r,w);if(!x){r=w=null;}};return function(){var B=f();if(!v&&y.leading===false){v=B;}var A=u-(B-v);r=this;w=arguments;if(A<=0||A>u){if(x){clearTimeout(x);x=null;}v=B;z=s.apply(r,w);if(!x){r=w=null;}}else{if(!x&&y.trailing!==false){x=setTimeout(t,A);}}return z;};};function l(u,w,v,r){try{var t=n.getElementById(u).getBoundingClientRect();if(e(t.top,t.bottom,d())&&e(t.left,t.right,g())){if(typeof uet=="function"){uet("bb","adplacements:viewablelatency:"+w,{wb:1});if(v){uet("bb","adplacements:viewablelatency:"+v,{wb:1});}}if(typeof uex=="function"&&j.ue&&typeof ue.count=="function"){if(j.apeViewableLatencyTrackers[r].loaded){uex("ld","adplacements:viewablelatency:"+w,{wb:1});if(v){uex("ld","adplacements:viewablelatency:"+v,{wb:1});}ue.count("adplacements:htmlviewed:loaded:"+w,1);if(v){ue.count("adplacements:htmlviewed:loaded:"+v,1);}}ue.count("adplacements:htmlviewed:"+w,1);if(v){ue.count("adplacements:htmlviewed:"+v,1);}}j.apeViewableLatencyTrackers[r].viewed=true;if(j.apeViewableLatencyTrackers[r].tracker){c("scroll",j.apeViewableLatencyTrackers[r].tracker);c("resize",j.apeViewableLatencyTrackers[r].tracker);}}}catch(s){j.apeViewableLatencyTrackers[r].valid=false;}}try{j.apeViewableLatencyTrackers=j.apeViewableLatencyTrackers||{};var q="ape_Detail_ad-endcap-1_Glance_placement";var p="Detail_ad-endcap-1_Glance".replace(/\\_/g,":");var h="47d301a6-3423-4a24-afe1-4f7ef8426084";var i="e42f54bb06b54cdcafe8d78d02d134e8";j.apeViewableLatencyTrackers[i]=j.apeViewableLatencyTrackers[i]||{};j.apeViewableLatencyTrackers[i].valid=true;l(q,p,h,i);if(j.apeViewableLatencyTrackers[i].valid&&!j.apeViewableLatencyTrackers[i].viewed){j.apeViewableLatencyTrackers[i].tracker=throttle(function(){l(q,p,h,i);},20);a("scroll",j.apeViewableLatencyTrackers[i].tracker);a("resize",j.apeViewableLatencyTrackers[i].tracker);}}catch(k){if(j.apeViewableLatencyTrackers&&j.apeViewableLatencyTrackers.e42f54bb06b54cdcafe8d78d02d134e8){j.apeViewableLatencyTrackers.e42f54bb06b54cdcafe8d78d02d134e8.valid=false;}o("Error initializing viewable latency instrumentation",k);}try{if(j.DAsf){j.DAsf.loadAds();}else{var m=n.createElement("script");m.type="text/javascript";m.async=true;m.setAttribute("crossorigin","anonymous");m.charset="utf-8";m.src="https://images-eu.ssl-images-amazon.com/images/G/03/ape/sf/desktop/DAsf-1.50.917d6c3._V459327015_.js?csm_attribution=APE-SafeFrame";m.onerror=function(){o("Error loading SafeFrame library");};(n.getElementsByTagName("head")[0]||n.getElementsByTagName("body")[0]).appendChild(m);}}catch(k){o("Error appending DAsf library",k);}}(window,document));})();};b();})();</script>









 

    












            
            
    









  <script type="text/javascript">
    // Only execute if performance object is defined in JS
    if(typeof performance!= "undefined" && typeof performance.getEntries != "undefined") {




        var metaAssetNames = [];
        metaAssetNames.push("HardlinesDetailPageMetaAssetFixed");
        metaAssetNames.push("HardlinesDetailPageMetaAssetVariable_TURBO_DESKTOP");
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
var ocInitTimestamp = 1546375506;
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











<script type="a-state" data-a-state="{&quot;key&quot;:&quot;edp-params&quot;}">{"uniqueTokenIdentifier":"gNmrwnbxlvQyuUvRY9SbN0QgNUf7f1ZmHNSEX1QAAAAJAAAAAFwr0VJyYXcAAAAA","edpEndPoint":{"endPoint":"/gp/product/edp/ajax"}}</script>

<script>
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('atf').execute(function(){
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/41wwqwBzvLL.js?AUIClients/EDPAsset');
});
</script>

<link rel="stylesheet" href="https://images-eu.ssl-images-amazon.com/images/I/01wsp46SQTL.css?AUIClients/HardlinesFeatureDetailPageMetaAsset" />
<link rel="stylesheet" href="https://images-eu.ssl-images-amazon.com/images/I/213MoiL8XJL.css?AUIClients/EDPAsset" />
<script type="a-state" data-a-state="{&quot;key&quot;:&quot;edp-item-param&quot;}">{"nodeID":"3167641","productID":"201"}</script>





    
    



  



        
        
        
        
  









        














<div id="edpPopoverContent_feature_div" class="feature" data-feature-name="edpPopoverContent">
         
     




    

    
    
    
        
            
                
	                
	                
	                	




<div class="a-popover-preload" id="a-popover-edpIngressModal">
<span class="edpIngressContainer">
<span class="edpFeedbackPage edpPage">
<span class="edpPageFirstHalf">
  <div class="a-section a-spacing-none edpModalTitle">
  <span>Bitte beschreiben Sie uns das Problem.</span>
  </div>
  
  <span class="a-dropdown-container"><select name="edpFeature" autocomplete="off" tabIndex="-1" class="a-native-dropdown a-button-span12 a-spacing-micro a-spacing-top-micro"><option class="a-prompt" value="">Welcher Bereich ist betroffen?</option>
  </select><span tabIndex="-1" aria-label="Welcher Bereich ist betroffen?" class="a-button a-button-dropdown a-spacing-micro a-spacing-top-micro a-button-span12"><span class="a-button-inner"><span class="a-button-text a-declarative" data-action="a-dropdown-button" role="button" tabIndex="0" aria-hidden="true"><span class="a-dropdown-prompt">Welcher Bereich ist betroffen?</span></span><i class="a-icon a-icon-dropdown"></i></span></span></span>
  
  <span class="edpDefectSection">
  
  <span class="a-dropdown-container"><select name="edpDefect" autocomplete="off" tabIndex="-1" class="a-native-dropdown a-button-span12 a-spacing-top-micro"><option class="a-prompt" value="">Was ist das Problem?</option>
  </select><span tabIndex="-1" aria-label="Was ist das Problem?" class="a-button a-button-dropdown a-spacing-top-micro a-button-span12"><span class="a-button-inner"><span class="a-button-text a-declarative" data-action="a-dropdown-button" role="button" tabIndex="0" aria-hidden="true"><span class="a-dropdown-prompt">Was ist das Problem?</span></span><i class="a-icon a-icon-dropdown"></i></span></span></span>
  </span>
  
  <div class="a-section a-spacing-none a-spacing-top-small">
     <span> Kommentare (optional) </span>
  </div>
    
  
   <div aria-label="Kommentare (optional)" class="a-input-text-wrapper a-span12 a-spacing-top-micro edpComments"><textarea maxlength="300" rows="3" name="edpComment"></textarea></div>
   </span>
  
    <div>
      <div class="a-section a-spacing-top-mini">
        <div id="edp_personal_info_alert" class="a-box a-alert-inline a-alert-inline-info"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">
          Bitte geben Sie keine persönlichen Daten an. Wenn Sie Fragen zu einer Bestellung haben, gehen Sie auf "Mein Konto".
        </div></div></div>
      </div>
    </div>
    <div>
      <div class="a-section a-spacing-none">
       <span style="float:right;">
            <span id="edpSubmitButton" class="a-button a-spacing-mini a-spacing-top-medium a-button-primary"><span class="a-button-inner"><button id="edpSubmitButton-announce" class="a-button-text" type="button">Senden
            </button></span></span>
       </span>
      </div>
    </div>
  
 </span>  
 <span class="edpThankYouPage edpPage">
 <span class="edpPageFirstHalf">

 <span class="a-size-large edpThankyouHeader">Vielen Dank!</span>
 <br>
 <span class="a-size-base edpThankyouMessageFirst"> </span>
  <br>
    <span class="a-size-base edpThankyouMessageSecond">Ihr Feedback hilft uns, den Einkauf bei Amazon für alle Kunden zu verbessern.</span>
      </span>
    <span style="float:right;" class="edpPageCompo">
        <span id="edpSuccessCloseButton" class="a-button a-spacing-mini a-spacing-top-medium a-button-primary a-button-width-normal"><span class="a-button-inner"><button id="edpSuccessCloseButton-announce" class="a-button-text" type="button">
        Erledigt
        </button></span></span>
   </span>
 </span>
 </span>
</div>




<script type="a-state" data-a-state="{&quot;key&quot;:&quot;edp-ingress-params&quot;}">{"featurePrompt":"Welcher Bereich ist betroffen?","defectPrompt":"Was ist das Problem?","dataStrategy":"preload","name":"edpIngressModal","width":"334","header":"Problem melden","height":"327"}</script>



    
    <span class = "edp-feature-declaration" data-edp-feature-name="Others" data-edp-asin="B01DQDZVCO" data-data-hash="" data-defects="[{&quot;id&quot;:&quot;defect-price-issue&quot;,&quot;value&quot;:&quot;Preis&quot;},{&quot;id&quot;:&quot;defect-missing-information&quot;,&quot;value&quot;:&quot;Fehlende Informationen&quot;},{&quot;id&quot;:&quot;defect-shipping-issue&quot;,&quot;value&quot;:&quot;Problem mit Versand/Verf&uuml;gbarkeit&quot;},{&quot;id&quot;:&quot;defect-size-chart-issue&quot;,&quot;value&quot;:&quot;Problem mit Gr&ouml;&szlig;entabelle&quot;},{&quot;id&quot;:&quot;defect-conflicting-information&quot;,&quot;value&quot;:&quot;Widerspr&uuml;chliche Informationen&quot;},{&quot;id&quot;:&quot;defect-product-quality-issue&quot;,&quot;value&quot;:&quot;Problem mit Produktqualit&auml;t&quot;},{&quot;id&quot;:&quot;defect-incorrect-information&quot;,&quot;value&quot;:&quot;Falsche Informationen&quot;}]" data-metadata="Others" data-feature-container-id="" data-custom-event-handler="" data-display-name="Andere Produktdetails" data-edit-data-state="" data-position="" data-resolver="DefaultResolver"></span>
    




	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>


            
            
      
      








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

   {"biaHcbRid":"VBWKFM73Q96291SQHAHK"},
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
        {"rhfHandlerParams":{"rhfAsins":"","noP13NCache":"","weblabTriggers":"","auiDebug":"","keywords":"kleiderhaken","k":"","rviAsins":"","url":"","parentSession":"262-9898842-9713804","rhfState":"","contextMetadataOverride":"","currentSubPageType":null,"field-keywords":"","relatedRequestId":"VBWKFM73Q96291SQHAHK","recsAsins":"","excludeASIN":"QjAxRFFEWlZDTw==","auditEnabled":"","customerId":"A96YKT37ODSSG","testRecsFailure":"","previewCampaigns":"","forceWidgets":"","currentPageType":"Detail","stringDebug":""},"subPageType":null,"requestId":"VBWKFM73Q96291SQHAHK","sessionId":"262-9898842-9713804","customerId":"A96YKT37ODSSG","pageType":"Detail","ybhHandlerParams":{"relatedRequestId":"VBWKFM73Q96291SQHAHK","currentPageType":"Detail","parentSession":"262-9898842-9713804"}}
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
</div><!-- whfh-dSznLyYYAfb+0r0P2bum+ClCiwUqVzQHqeqo065bFXKdeltsvlr9Lqbk/5qI99Fm rid-VBWKFM73Q96291SQHAHK -->
<div id="sis_pixel_r2" aria-hidden="true" style="height:1px; position: absolute; left: -1000000px; top: -1000000px;"></div><script>(function(a,b){a.attachEvent?a.attachEvent("onload",b):a.addEventListener&&a.addEventListener("load",b,!1)})(window,function(){setTimeout(function(){var el=document.getElementById("sis_pixel_r2");el&&(el.innerHTML='<iframe id="DAsis" src="//aax-eu.amazon-adsystem.com/s/iu3?d=amazon.de&slot=navFooter&a1=01011de74c445534ec931a3b5d0b3c250da26d1888348ac1bcf2305442c6ea5d3355&a2=01013341dab34071d377d77171a3ecbe11fc9e6abfb37247d72724774692d89c8cc4&old_oo=0&ts=1546375505563&s=Ae84h3pdUgCY2K5bk_97bz8BVWtg7DKeXVqVc_-TnloC&cb=1546375505563" width="1" height="1" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>')},300)});</script><!-- footer tilu -->


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

var ue_spty = "Glance";

var ue_pti = "B01DQDZVCO";


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
    <img height="1" width="1" style='display:none;visibility:hidden;' src='//fls-eu.amazon.de/1/batch/1/OP/A1PA6795UKMFR9:262-9898842-9713804:VBWKFM73Q96291SQHAHK$uedata=s:%2Fgp%2Fuedata%3Fnoscript%26id%3DVBWKFM73Q96291SQHAHK:0' alt=""/>
</noscript>
</div></body></html>
<!--       _
       .__(.)< (MEOW)
        \\___)   
 ~~~~~~~~~~~~~~~~~~-->
<!-- sp:eh:NWZ+QFd2lkiBpDKZQc4l91SjoZiCVjhh2mmegsadFLJ1cdENltSXx0tAaf/+SBGI3I0Kz6Oh9xS1oLBWoXBPHJt3PpbHhxPx4Oioe8zRQLOglYnY -->
`,
};
