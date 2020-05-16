/* eslint-disable */
import { AmazonCrawler } from '../../src/crawler/crawlers/amazon.crawler';

export const amazonKindleTaseCase = {
  crawlerType: AmazonCrawler,
  sizes: [{ id: 'ONESIZE', isAvailable: true, name: 'ONESIZE' }],

  sizeChecks: [
    { size: 'ONESIZE', isAvailable: true, isLowInStock: false },
    { size: 'any', isAvailable: true, isLowInStock: false },
  ],

  name: 'Die Argonauten',

  priceChecks: [
    { size: 'ONESIZE', price: 15.99 },
    { size: '', price: 15.99 },
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


var ue_id = '7KW51GR72GBHGNNYKK1P',
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
    ue_fpf = '//fls-eu.amazon.de/1/batch/1/OP/A1PA6795UKMFR9:262-9898842-9713804:7KW51GR72GBHGNNYKK1P$uedata=s:',
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

<!-- qhicuehp61kfud7cjgf172d047toikleta5bq3ud43uzb --><!-- sp:feature:aui-assets -->
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
<link rel="stylesheet" href="https://images-eu.ssl-images-amazon.com/images/I/61Cab217xZL._RC|31BMnmV4vQL.css,01ekIXTj5kL.css,11UGK4+GCNL.css,21rTx+UpnSL.css,21LLdt69ldL.css,21jNhNxHFBL.css,016ZWeUMVEL.css,01TCV-xmeZL.css,01CCLEN08lL.css,31MkQHV3gaL.css,01GT2VH57dL.css,314gb2LkLML.css,01xHpyZh3cL.css,01RRH0yFa4L.css,01bkkYjxP7L.css,01NW8VTUeVL.css,019M+d36JfL.css,01JOvs9kD8L.css,01FlII1u-ZL.css,21kmtf4iiPL.css,21thLxrpr2L.css,31e6R41SWLL.css,21PjfsP9YvL.css,01QwYm0bA4L.css,21c4cPN57WL.css,01MsEDf87nL.css,21fmybezPeL.css,01kwuiPOKIL.css,41zdtmMdfyL.css,01kymrLkG9L.css,01vF6gFybxL.css,01AVrRnt6XL.css_.css?AUIClients/MediaDetailPageMetaAsset_TURBO_DESKTOP#desktop.de.141052-T1.122952-T1.113788-C.114039-C.135295-T1.136850-T1.103061-T1.174137-T1.131900-T1.94145-T1" />
<link rel="stylesheet" href="https://images-eu.ssl-images-amazon.com/images/I/01ZN23eDxwL.css?AUIClients/AuthorFollowAssets" />
<link rel="stylesheet" href="https://images-eu.ssl-images-amazon.com/images/I/01kAPZjFM3L.css?AUIClients/DetailPageDigitalBulkAssets" />
<link rel="stylesheet" href="https://images-eu.ssl-images-amazon.com/images/I/11xqfyHx1TL._RC|11RY4AfpaTL.css_.css?AUIClients/AmazonUICalendar#not-trident" />


<script>
(function(d,b,m){function c(a){return"--private-amznjqshim-"+a}function e(a,l){var b=c(l);d.now(b).execute(c(a+"-"+b)+"-"+f++,function(a){void 0===a&&d.declare(b,!0)})}function h(a){e("markRequested","functionality-requested:"+a)}function g(a){e("completedStage","stage-"+a)}b.goN2Debug||(b.goN2Debug={info:function(){}});"use strict";var f=0,k=b.amznJQ=new function(){this.addLogical=this.addStyle=this.addStyles=this.PLNow=this.windowOnLoad=function(){};this.declareAvailable=function(a){e("declaring",
a)};this.available=function(a,b){a=c(a);h(a);d.when(a,c("jQuery")).execute(c("available-"+a)+"-"+f++,b)};this.onReady=function(a,b){a=c(a);h(a);d.when(a,"a-domready",c("jQuery")).execute(c("onReady-"+a)+"-"+f++,b)};this.onCompletion=function(a,b){var e=c("stage-"+a);d.when(e,c("jQuery")).execute(b)};this.completedStage=function(a){g(a)};this.addPL=function(a){d.when("a-preload").execute(c("Preloader")+"-"+f++,function(b){b.preload(a)})};this.strings={};this.chars={}};d.when("load").execute(c("fail-safe-stages"),
function(){g("amznJQ.theFold");g("amznJQ.criticalFeature")});d.when("jQuery").execute("define amznJQ jQuery",function(a){b.jQuery||(b.jQuery=a);k.jQuery||(k.jQuery=a);e("declaring","jQuery")})})(window.P||window.AmazonUIPageJS,window,document);
(window.AmazonUIPageJS ? AmazonUIPageJS : P).when('atf').execute(function(){
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/41o6JYGJZKL.js?AUIClients/AmazonPopoversAUIShim#de');
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/21Wa0ZZVAmL._RC|21DhhQMus3L.js,31gnJjWvxPL.js,51CysS8km3L.js,01bNPgr1YfL.js,219rMKdyN-L.js,316lu5vL96L.js,11ZdiaYG8gL.js,81PLIDzaAXL.js,0185ITV0M6L.js,41GKHkSvCpL.js,31UjTApGOPL.js,01X5C8pWB1L.js,01LHJt5PiyL.js,11B9yJN+bnL.js,31Ac-cQ+ZWL.js,21TkG9gShCL.js,01JzE3-DfLL.js,11MQqFPEK+L.js,01jqyAujTwL.js,31+0pACITzL.js,01OtvpwikQL.js,21lFKGGVoFL.js,11nOzlnr6+L.js,31bQ6uPDcgL.js,312xLUEw6sL.js,11e9-8uUHQL.js,11iHZuQapKL.js,01qXU4-2A0L.js,21e71NrLt3L.js,11Ze1YhMgJL.js,01a6eHQ202L.js,01qPwv8D5hL.js,210mdW2-ZEL.js,21mymEONFtL.js,61+TkNaM7yL.js,515EXqsrGfL.js,21OJDARBhQL.js,41s+OBPxTPL.js,01IWUb29Q4L.js,01rg6Ce9FhL.js,016QFWAAdML.js,31Wep-ax8qL.js,51ldtX6xp6L.js,21w43LSQ1-L.js,01t+VeQ6oSL.js_.js?AUIClients/MediaDetailPageMetaAsset_TURBO_DESKTOP#desktop.language-de.de.164772-T1.141052-T1.167162-T1.146883-T1.173943-T1.151985-T1.136850-T1.103061-T1.153197-T1.131900-T1.184660-C.162909-C.179985-T1.87784-T1.143147-T1.147957-T1.154031-T1.171818-T1');
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/213uR5aJiIL.js?AUIClients/AuthorFollowAssets');
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/11TC4jPfTIL.js?AUIClients/DetailPageDigitalBulkAssets');
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/31xCSJIY%2BCL.js?AUIClients/AmazonUICalendar');
});
</script>
















 




        <script type="a-state" data-a-state="{&quot;key&quot;:&quot;metrics-schema&quot;}">{"widgetSchema":"dp:widget:","dimensionSchema":"dp:dims:"}</script>

    

























  


















 
 
 











      









        



























    
    
    
    





        




<meta name="age-de-meta-label" content="age=0 info=www.amazon.de/age-de.xml v=1.0 protocol=https">


  
      
      
      
    





  




    












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

#sitb-pop {
	z-index:1999; 
	display: none;
}

#sitb-pop table.sitb-pop-contentsTable {
 	width:100%;
 	border:0;
 	cellpadding:1;
 	cellspacing:0;
}

#sitb-pop .sitb-pop-bookmarks {
	line-height:21px;
	color:#DDDAC0;
	font-size:11px;
	width: 302px;
}

#sitb-pop .sitb-pop-bookmarks a {
	font-family:Verdana;
	font-weight:bold;
	white-space:nowrap;
	color:#004B91;
	font-size:11px;
        text-decoration:none;
}

#sitb-pop .sitb-pop-bookmarks a:Hover { color:#004B91; text-decoration:none; border-bottom:1px dashed; }
#sitb-pop .sitb-pop-bookmarks a:Active { color:#F93; text-decoration:none; border-bottom:1px dashed; }
#sitb-pop .sitb-pop-bookmarks a:Visited { color:#963; }

#sitb-pop .sitb-pop-search {
	font-family: Verdana;
	font-size:11px;
	margin-top: 5px;
	width: 302px;
}

#sitb-pop .sitb-pop-inputbox {
	width: 126px;
}
.tinypopup {
	font-family: Verdana, Arial, Helvetica, sans-serif;
	font-size: 11px;
	color: #333333;
}

#sitb-body-gobutton {
    position: absolute;
    padding-left: 5px;
}

.bortfont {
  font-size: 0.85em;
}

td.bortArrowCell {
  width: 25px;
  padding-top: 50px;
  vertical-align: top;
  text-align: center;
}

.bortImgDiv,
td.bortImgCell {
  height: 135px;
  vertical-align: bottom;
  text-align: center;
}

td.bortTitleCell {
  margin: 0;
  padding: 10px 5px 0px 5px;
  vertical-align: top;
}

.bortTitleDiv {
  margin: 0;
  padding: 10px 5px 0px 5px;
}

.bortInfoDiv,
td.bortInfoCell {
  padding: 6px 5px 0px 5px;
  vertical-align: top;
}

.bortInfoDiv ul,
td.bortInfoCell ul {
  padding: 0;
  margin: 0 0 0 1.5em;
}

.bortInfoDiv li,
td.bortInfoCell li {
  margin: 0;
  padding: 0;
}

td.bortInfoCell,
td.bortTitleCell,
td.bortImgCell {
  width: 210px;
}

#bortShvl {
  table-layout: fixed;
  margin-bottom: 2em;
}

.browsemenu A:link { color: #00008B; outline:none; }
.browsemenu A:visited { color: #00008B; }
.browsemenu A:hover { color: #FFA500; }
.browsemenu A:active { color: #FFA500; outline:none; }
.browsemenu { text-indent: -2em; margin-left: 2em; }
.browsemenu LI { padding-bottom:3px; }

.concordance { background-color: #F6F6F6;
                       border: 1px solid #CCCCCC;
                     }
.concordance a {text-decoration: none;
                        font-family : arial, helvetica, sans-serif} 
.concordance a:hover {text-decoration: underline} 
.concordance a:link { font-family: arial,helvetica,sans-serif; 
                              color: #003399; }
.concordance a:visited { font-family: arial,helvetica,sans-serif; 
                                 color: #996633; }
.concordance a:active { font-family: arial,helvetica,sans-serif; 
                                color: #FF9933; }

.sitbWarningMessage {
    background-color: #ffffcc;
    border: 1px solid #fcb81b;
    font-family: verdana;
    padding-top: 0;
    padding-bottom: 0;
    margin: 0;
    text-align: center;
}
.sitbWarningMessageTable {
    margin-right: auto;
    margin-left: auto;
}
.sitbWarningMessageIcon {
    width: 17px;
    height: 17px;
    margin-right: 1px;
    background-position: 0 -34px;
    background-image: url('https://images-na.ssl-images-amazon.com/images/S/sitbweb/sitb-reader/201812152151/de/error-sprite-mini.gif');
    background-repeat: no-repeat;
}

#vellumShade {
    background-color: #3f4c58;
    z-index: 90000;
    filter: alpha(opacity=60);
    opacity: 0.6;
    display: none;
    position: absolute;
    width: 200%;
    height: 200%;
    top: 0px;
    left: 0px;
}
#vellumMsg {
    display: none;
    z-index: 200000;
    width: 420px;
    position: absolute;
    border: 1px solid #E69C00;
    opacity: 1;
    text-align: left;
    padding-top: 2px;
    padding-right: 10px;
    background-color:#FFFFDD;
}
#vellumMsgIco {
    left: 5px;
    top: 5px;
    width: 25px;
    height: 25px;
    position: absolute;
    background-position: 0 -237px;
    background-color:#FFFFDD;
}
#vellumMsgTxt {
    padding-left: 40px;
    padding-top: 5px;
    padding-bottom: 10px;
    font-family: Verdana;
    font-size: small;
    .font-size: x-small; /* IE specific */
}
#vellumMsgHdr {
    padding-top: 10px;
    padding-left: 40px;
    font-family: Verdana;
    font-size: small;
    .font-size: x-small; /* IE specific */
    font-weight: bold;
}
#vellumMsgCls {
    position: absolute;
    right: 3px;
    top: 3px;
    width: 13px;
    height: 11px;
    background-position: 0 -981px;
    font-size: 10px;
    cursor: pointer;
}
#vellumMsgIco, #vellumMsgCls {
    background-image: url('https://images-na.ssl-images-amazon.com/images/S/sitbweb/sitb-reader/201812152151/de/sitbreader-sprites.png');
    background-repeat: no-repeat;
}
#vellumLdgIco {
    background-image: url('https://images-na.ssl-images-amazon.com/images/S/sitbweb/sitb-reader/201812152151/de/loading-pre-lightbox.gif');
    background-repeat: no-repeat;
    background-position: center center;
}


.tmmAjaxLoading { 
   background: url('https://images-eu.ssl-images-amazon.com/images/G/03/x-locale/twister/tiny-snake._CB209967517_.gif') no-repeat scroll 0px 0px;
   display: inline-block;
   margin-left: 5px;
   min-width: 14px;
   height: 14px;
   vertical-align: middle;        
 }

.tmmErrorClass {
    margin-left: 10px;
}

#igInner.zoomable.zoomed-out #igImage{
  cursor: url('https://images-eu.ssl-images-amazon.com/images/G/03/detail-page/cursors/zoom-in._CB184888321_.bmp'),pointer;
}

#igInner.zoomable.zoomed-in #igImage{
  cursor: url(https://images-eu.ssl-images-amazon.com/images/G/03/detail-page/cursors/zoom-out._CB184888341_.bmp),pointer;
}


#rhf .cBoxTL, #rhf .cBoxTR, #rhf .cBoxBL, #rhf .cBoxBR { background-image:url(https://images-eu.ssl-images-amazon.com/images/G/03/common/sprites/sprite-site-wide-2._CB295586782_.png); }
.swSprite { display: -moz-inline-box; display: inline-block; margin: 0;padding: 0; position: relative; overflow: hidden; vertical-align: middle; background-image: url(https://images-eu.ssl-images-amazon.com/images/G/03/common/sprites/sprite-site-wide._CB146303775_.png); background-repeat: no-repeat; }
.swSprite span { position: absolute; left: -9999px; }
    
.rhfWrapper .shoveler .back-button a .bg-image, .rhfWrapper .shoveler .next-button a .bg-image, .rhfWrapper .shoveler div.disabled-button { background-image: url(https://images-eu.ssl-images-amazon.com/images/G/03/common/sprites/sprite-site-wide._CB146303775_.png); }
.rhfWrapper .shoveler .next-button a .bg-image {  background-position: -60px -80px;background-color: white;}
.rhfWrapper .shoveler .back-button a .bg-image { background-position: -30px -80px; background-color: white;}
    
#twister .swatches li.swatchSelect .arrow { background:url(https://images-eu.ssl-images-amazon.com/images/G/03/twister/images/down-arrow-shadow-v2._CB266697453_.png) no-repeat center top; }
#twister .swatches li.swatchUnavailableHover .xoverlay  { background: url(https://images-eu.ssl-images-amazon.com/images/G/03/twister/images/swatches.png) repeat -54px -64px; }
#twisterPopover .twisterPopoverArrow { background:url(https://images-eu.ssl-images-amazon.com/images/G/03/gateway/csw/tri-down._CB401957524_.png)no-repeat 11px 0; }
#wishlist-dropdown-content .s_plus { background:url(https://images-eu.ssl-images-amazon.com/images/G/03/common/sprites/sprite-dp-2._CB380646105_.png) no-repeat scroll -140px -540px transparent; }
#fg_sizing_tabs { background:transparent url(https://images-eu.ssl-images-amazon.com/images/G/03/apparel/rcxgs/tabs/tab-border._CB210832000_.gif) repeat-x scroll left bottom; }
#fg_sizing_tabs li { background:transparent url(https://images-eu.ssl-images-amazon.com/images/G/03/apparel/rcxgs/tabs/tab-unselected-left._CB210832354_.gif) no-repeat scroll left top; }
#fg_sizing_tabs li div { background:transparent url(https://images-eu.ssl-images-amazon.com/images/G/03/apparel/rcxgs/tabs/tab-unselected-right._CB210832380_.gif) no-repeat scroll right top; }
#fg_sizing_tabs li div.last { background-image:url(https://images-eu.ssl-images-amazon.com/images/G/03/apparel/rcxgs/tabs/tab-unselected-right-last._CB210832383_.gif); }
#fg_sizing_tabs li.fg_highlight { background-image:url(https://images-eu.ssl-images-amazon.com/images/G/03/apparel/rcxgs/tabs/tab-selected-left._CB210832002_.gif); }
#fg_sizing_tabs li.fg_highlight div { background-image:url(https://images-eu.ssl-images-amazon.com/images/G/03/apparel/rcxgs/tabs/tab-selected-right._CB210832352_.gif); }
#fg_sizing_tabs li.fg_highlight div.last { background-image:url(https://images-eu.ssl-images-amazon.com/images/G/03/apparel/rcxgs/tabs/tab-selected-right-last._CB210843306_.gif); }
    
.dpSprite { background-image: url('https://images-eu.ssl-images-amazon.com/images/G/03/common/sprites/sprite-dp-2._CB380646105_.png'); background-repeat: no-repeat; }
.udpSprite { background: url('https://images-eu.ssl-images-amazon.com/images/G/03/common/sprites/udp-sprite-dp-2._CB311785524_.png') no-repeat; vertical-align: middle; display: inline-block;}
    
#detailpage-click2call .c2c-phone-icon { background-image:url(https://images-eu.ssl-images-amazon.com/images/G/03/electronics/click2call/click2call-sprite._CB153403599_.png); background-repeat:no-repeat; background-position: 0px 0px; width:57px; height:57px; margin-right:6px; }
.cmtySprite { background-image: url(https://images-eu.ssl-images-amazon.com/images/G/03/common/sprites/sprite-communities._CB388946692_.png); background-repeat: no-repeat; }

div.fionaPublish {
  background-image: url('https://images-eu.ssl-images-amazon.com/images/G/03/kindle/merch/global/kindle-widget-photo._CB388868153_.jpg');
  background-repeat: no-repeat;
  min-height: 8em;
  height: auto  !important;
  height: 8em;
}

div.fionaPublish div {
  margin: 0 5px 0 69px;
  font-size: 11px;
}

div.fionaRentalPublish {
  background-image: url('https://images-eu.ssl-images-amazon.com/images/G/03/kindle/rentals/rent-book-promo-image._CB152239255_.png');
  background-repeat: no-repeat;
  min-height: 6em;
  height: auto  !important;
  height: 6em;
}

div.fionaRentalPublish div {
  margin: 0 5px 0 110px;
  font-size: 11px;
}

div.fionaPublishBox {
  padding-top: 10px;
  text-align: left;
}

table.gftRdm .gftRdmTop td,
table.gftRdm .gftRdmBottom td {
  background-repeat:repeat-x;
  height:12px;
}

table.gftRdm .gftRdmLeft,
table.gftRdm .gftRdmRight {
  background-repeat:repeat-y;
  width:12px;
}

table.gftRdm .gftRdmTop .gftRdmLeft {
  background-image:url("https://images-eu.ssl-images-amazon.com/images/G/03/kindle/gifting/box-top-left._CB193651641_.jpg");
}

table.gftRdm .gftRdmTop .gftRdmCenter {
  background-image:url("https://images-eu.ssl-images-amazon.com/images/G/03/kindle/gifting/box-top._CB193651619_.jpg");
}

table.gftRdm .gftRdmTop .gftRdmRight {
  background-image:url("https://images-eu.ssl-images-amazon.com/images/G/03/kindle/gifting/box-top-right._CB193651645_.jpg");
}

table.gftRdm .gftRdmCenter .gftRdmLeft {
  background-image:url("https://images-eu.ssl-images-amazon.com/images/G/03/kindle/gifting/box-left._CB193651635_.jpg");
}

table.gftRdm .gftRdmCenter .gftRdmRight {
  background-image:url("https://images-eu.ssl-images-amazon.com/images/G/03/kindle/gifting/box-right._CB193651632_.jpg");
}

table.gftRdm .gftRdmBottom .gftRdmLeft {
  background-image:url("https://images-eu.ssl-images-amazon.com/images/G/03/kindle/gifting/box-bottom-left._CB193651617_.jpg");
}

table.gftRdm .gftRdmBottom .gftRdmCenter {
  background-image:url("https://images-eu.ssl-images-amazon.com/images/G/03/kindle/gifting/box-bottom._CB193651625_.jpg");
}

table.gftRdm .gftRdmBottom .gftRdmRight {
  background-image:url("https://images-eu.ssl-images-amazon.com/images/G/03/kindle/gifting/box-bottom-right._CB193651620_.jpg");
}

.giftRedemptionWrapper {
  padding:12px;
}
.buyBox.giftBox td {
  font-size:0.7em;
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


.bxgy-priceblock .button-sprite, 
#bxgy_price_button_block .button-sprite,
#fbt_price_block .button-sprite {
        background-image: url( https://images-eu.ssl-images-amazon.com/images/G/03/x-locale/personalization/bxgy/fbt-cart-preorder-sprite._CB192558321_.gif);
}
#bxgy_price_button_block .wl-button-sprite,
#fbt_price_block .wl-button-sprite {
        background-image: url( https://images-eu.ssl-images-amazon.com/images/G/03/x-locale/communities/wishlist/add-to-wl-button-sprite.gif);
}
.bxgySellerLoading {
    background: url('https://images-eu.ssl-images-amazon.com/images/G/03/x-locale/common/loading/loading-small._CB192196212_.gif') no-repeat 50px 20px;
    height: 50px;
    margin: 0;
    padding: 0;
}






.shoveler li.shoveler-progress {
    background: no-repeat center 45px url('https://images-eu.ssl-images-amazon.com/images/G/03/ui/loadIndicators/loading-small._CB186605266_.gif');
}

.simsWrapper .shoveler li {
    width: 160px;
    margin: 0 10px;
    padding: 0;
    overflow: hidden;
}


.auiTestSprite {
    background: url("https://images-eu.ssl-images-amazon.com/images/G/03/p13n/shared-components/noaui-shoveler-sprite._CB320280216_.png") no-repeat scroll 0 0 transparent;
}

.p13n-sc-nonAUI-sprite {
    background: url("https://images-eu.ssl-images-amazon.com/images/G/03/p13n/shared-components/noaui-shoveler-sprite._CB320280216_.png") no-repeat scroll 0 0 transparent;
}

.simsWrapper.auiTestWrapper .byline,
.simsWrapper.auiTestWrapper .byline a,
.simsWrapper.auiTestWrapper .rating-stars,
.simsWrapper.auiTestWrapper .rating-price,
.simsWrapper.auiTestWrapper .binding-platform,
.simsWrapper.auiTestWrapper .price-small,
.simsWrapper.auiTestWrapper .maplink,
.simsWrapper.auiTestWrapper .price .unit {
    font-size: 12px;
    line-height: 1.5;
}


.simsWrapper .shoveler ul {
    height: 256px;
}


</style>








<link rel="stylesheet" href="https://images-eu.ssl-images-amazon.com/images/I/41sar9DZABL.css?AUIClients/DetailPageEbooksAssets#desktop" />








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




<link rel="canonical" href="https://www.amazon.de/Die-Argonauten-Maggie-Nelson-ebook/dp/B071FCV5KW" />
<meta name="description" content="Die Argonauten eBook: Maggie Nelson, Jan Wilm: Amazon.de: Kindle-Shop" />
<meta name="title" content="Die Argonauten eBook: Maggie Nelson, Jan Wilm: Amazon.de: Kindle-Shop" />

<meta name="keywords" content="ebook,Maggie Nelson, Jan Wilm,Die Argonauten,Hanser Berlin,Belletristik / Biographien, Erinnerungen,FICTION / Biographical,21. Jahrhundert,21. Jahrhundert; Erziehung; Familie; Gesellschaft; Liebe; Philosophie; Soziologie,Belletristik / Romanhafte Biografien,Belletristik in Übersetzung,Biografien und Sachliteratur,Biografischer Roman,Erziehung,Familie,Familie / Psychologie,Familienpsychologie,Gesellschaft,Liebe,Moderne und zeitgenössische Belletristik,Philosophie,Psychologie / Familie, Ehe, Liebe, Partnerschaft, Freundschaft,Soziologie" />
<title>Die Argonauten eBook: Maggie Nelson, Jan Wilm: Amazon.de: Kindle-Shop</title>







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
  window.weblabs['booksUDP'] = 1;

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
    <div id="navSwmHoliday" style="background-image: url(https://images-eu.ssl-images-amazon.com/images/G/03/digital/video/AIV/SWMTest/SWM_400x39_new_style_playbutton_ENG_2._CB487477782_.jpg); width: 400px; height: 39px; overflow: hidden;position: relative;"><img alt='AIV' src='https://images-eu.ssl-images-amazon.com/images/G/03/x-locale/common/transparent-pixel._CB386942701_.gif' border='0' width='400px' height='39px' usemap='#nav-swm-holiday-map' /></div><div style="display: none;"><map id="nav-swm-holiday-map" name="nav-swm-holiday-map"><area shape="rect" coords="1,2,400,39" href ="/Prime-Video/b/ref=nav_swm_dvm_de_pv_en_t_011?ie=UTF8&node=3279204031&pf_rd_p=b399842b-e383-4e6d-9303-3a5b2b3c7264&pf_rd_s=nav-sitewide-msg&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A3JWKAKR8XB7XF&pf_rd_r=7KW51GR72GBHGNNYKK1P&pf_rd_r=7KW51GR72GBHGNNYKK1P&pf_rd_p=b399842b-e383-4e6d-9303-3a5b2b3c7264" alt ="AIV" /></map></div>
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
  <span class="nav-search-label">Kindle-Shop</span>
  <i class="nav-icon"></i>
</div>

  <span id='searchDropdownDescription' style='display:none'>Wählen Sie die Abteilung aus, in der Sie suchen möchten. </span>

<select aria-describedby='searchDropdownDescription' class='nav-search-dropdown searchSelect' data-nav-digest='g4oT5XcQjvTSIqhUq+rGqD1+PRk' data-nav-selected='30' id='searchDropdownBox' name='url' style='display:block' tabindex='8' title='Suchen in'>
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
<option current='parent' selected='selected' value='search-alias=digital-text'>Kindle-Shop</option>
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
        
        
        <div id='nav-global-location-slot'><span class='a-declarative' data-a-modal='{&quot;width&quot;:375,&quot;closeButton&quot;:&quot;false&quot;,&quot;popoverLabel&quot;:&quot;W&auml;hlen Sie Ihren Standort&quot;,&quot;name&quot;:&quot;glow-modal&quot;,&quot;url&quot;:&quot;/gp/glow/get-address-selections.html?selectedLocationType=ADDRESS_ID&amp;selectedLocationValue=V2RIRZZYNQ6HVXF6X4IUG13SSDO73TKY69A96YKT37ODSSGPXTQ2EQA2OXGXX65K&amp;deviceType=desktop&amp;pageType=Detail&amp;storeContext=digital-text&quot;,&quot;footer&quot;:&quot;&lt;span class=\\&quot;a-declarative\\&quot; data-action=\\&quot;a-popover-close\\&quot; data-a-popover-close=\\&quot;{}\\&quot;&gt;&lt;span class=\\&quot;a-button a-button-primary\\&quot;&gt;&lt;span class=\\&quot;a-button-inner\\&quot;&gt;&lt;button name=\\&quot;glowDoneButton\\&quot; class=\\&quot;a-button-text\\&quot; type=\\&quot;button\\&quot;&gt;Fertig&lt;/button&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;&quot;,&quot;header&quot;:&quot;W&auml;hlen Sie Ihren Standort&quot;}' data-action='a-modal'><a class='nav-a nav-a-2 a-popover-trigger a-declarative' tabindex='18'><div class='nav-sprite' id='nav-packard-glow-loc-icon'></div><div id='glow-ingress-block'><span class='nav-line-1' id='glow-ingress-line1'>Lieferung an Kim</span><span class='nav-line-2' id='glow-ingress-line2'>12159&zwnj; Berlin</span></div></a></span><input data-addnewaddress='add-new' id='unifiedLocation1ClickAddress' name='dropdown-selection' type='hidden' value='kkphpontplp'></input><input data-addnewaddress='add-new' id='ubbShipTo' name='dropdown-selection-ubb' type='hidden' value='kkphpontplp'></input></div>
        
        
        
        
        
        
        
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
<div id='nav-subnav' class="" data-category="digital-text" data-digest="s1tMoXwCFMwfORBnPBnvgge47lI=">
  <a href="/kindle-shop-ebooks-zeitungen-zubeh%C3%B6r/b/?ie=UTF8&node=530484031&ref_=topnav_storetab_ref" class="nav-a nav-b" >
    <span class="nav-a-content">
      Kindle-Shop
      
    </span>
  </a>
  <a href="/gp/product/B0186FESVC/?ie=UTF8&ref_=sv_ref_1" class="nav-a" >
    <span class="nav-a-content">
      Kindle kaufen
      
    </span>
  </a>
  <a href="/ebooks-kindle-buecher/b/?ie=UTF8&node=530886031&ref_=sv_ref_2" class="nav-a" >
    <span class="nav-a-content">
      Kindle eBooks
      
    </span>
  </a>
  <a href="/fremdsprachige-ebooks-kindle-buecher/b/?ie=UTF8&node=567135031&ref_=sv_ref_3" class="nav-a" >
    <span class="nav-a-content">
      Englische eBooks
      
    </span>
  </a>
  <a href="/gp/kindle/ku/sign-up/?ie=UTF8&ref_=sv_ref_4" class="nav-a" >
    <span class="nav-a-content">
      Kindle Unlimited
      
    </span>
  </a>
  <a href="/kindle-dbs/hz/bookshelf/prime/?_encoding=UTF8&ref_=sv_ref_5" class="nav-a" >
    <span class="nav-a-content">
      Prime Reading
      
    </span>
  </a>
  <a href="/Kindle-eBook-Deals/b/?ie=UTF8&node=5382722031&ref_=sv_ref_6" class="nav-a" >
    <span class="nav-a-content">
      eBook Deals
      
    </span>
  </a>
  <a href="/kindle-singles-ebooks-buecherb/b/?ie=UTF8&node=2844597031&ref_=sv_ref_7" class="nav-a" >
    <span class="nav-a-content">
      Kindle Singles
      
    </span>
  </a>
  <a href="/gp/digital/fiona/kcp-landing-page/?ie=UTF8&ref_=sv_ref_8" class="nav-a" >
    <span class="nav-a-content">
      Kostenlose Kindle Lese-Apps
      
    </span>
  </a>
  <a href="/zeitschriften-ebooks-kindle/b/?ie=UTF8&node=530887031&ref_=sv_ref_9" class="nav-a" >
    <span class="nav-a-content">
      Newsstand
      
    </span>
  </a>
  <a href="/Zubehoer-Amazon-Geraete-Kindle/b/?ie=UTF8&node=530884031&ref_=sv_ref_10" class="nav-a" >
    <span class="nav-a-content">
      Zubehör
      
    </span>
  </a>
  <a href="/b/?ie=UTF8&node=3645098031&ref_=sv_ref_11" class="nav-a" >
    <span class="nav-a-content">
      Zertifiziert und generalüberholt
      
    </span>
  </a>
  <a href="https://de.amazonforum.com/?_encoding=UTF8&ref_=sv_ref_12" class="nav-a" >
    <span class="nav-a-content">
      Hilfeforum
      
    </span>
  </a>
  <a href="/gp/digital/fiona/manage/?ie=UTF8&ref_=sv_ref_13" class="nav-a" >
    <span class="nav-a-content">
      Inhalte und Geräte
      
    </span>
  </a>
  <a href="/gp/help/customer/display.html/?ie=UTF8&nodeId=200127470&ref_=sv_ref_14" class="nav-a" >
    <span class="nav-a-content">
      Hilfe für Amazon-Geräte
      
    </span>
  </a>

  <!-- nav-linktree-subnav - 'digital-text' -->
</div>

<script type='text/javascript'>window.navmet.push({key:'Subnav',end:+new Date(),begin:window.navmet.tmp});</script>

    
    

    
    
    
  </div>

  
  

</header>
<script type='text/javascript'>window.navmet.push({key:'NavBar',end:+new Date(),begin:window.navmet.main});</script>



    <script type='text/javascript'>window.navmet.tmp=+new Date();</script><!-- nav promo cached -->


<map name="nav_imgmap_nav-sa-amazon-fresh" id="nav_imgmap_nav-sa-amazon-fresh">
<area shape="rect" coords="0,0,505,510" href="/b/ref=nav_shopall_nav_sap_fresh?_encoding=UTF8&node=6723195031&pf_rd_p=7459f62b-073b-442a-a66d-e21420f2262f&pf_rd_s=nav-sa-amazon-fresh&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=TKGKMDV8NTR8Y923TB2R" alt="Jetzt einkaufen"/>
</map>



<map name="nav_imgmap_nav-sa-android" id="nav_imgmap_nav-sa-android">
<area shape="rect" coords="10,10,468,472" href="/gp/feature.html/ref=nav_shopall_mas_de_flyout_hollywood?ie=UTF8&docId=1000854623&pf_rd_p=24fb1d35-fab4-4f10-b1e6-a4455959cc6c&pf_rd_s=nav-sa-android&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=TKGKMDV8NTR8Y923TB2R" alt=""/>
</map>



<map name="nav_imgmap_nav-sa-apparel-shoes-watches" id="nav_imgmap_nav-sa-apparel-shoes-watches">
<area shape="rect" coords="1,5,376,495" href="/b/ref=nav_shopall_AW18_Sale?_encoding=UTF8&node=2657021031&pf_rd_p=46499f1d-3d53-4c28-a7b2-81c74b600099&pf_rd_s=nav-sa-apparel-shoes-watches&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=TKGKMDV8NTR8Y923TB2R" alt=""/>
</map>



<map name="nav_imgmap_nav-sa-auto-bike" id="nav_imgmap_nav-sa-auto-bike">
<area shape="rect" coords="16,142,503,487" href="/Car-Care-Essentials/b/ref=nav_shopall_nav-sa-auto-bike?ie=UTF8&node=10292649031&pf_rd_p=2d0a8129-3cf0-4a19-a386-9d53a4333c5d&pf_rd_s=nav-sa-auto-motorcycle-industrial&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=TKGKMDV8NTR8Y923TB2R" alt="Hier klicken"/>
</map>



<map name="nav_imgmap_nav-sa-baby-kids-toys" id="nav_imgmap_nav-sa-baby-kids-toys">
<area shape="rect" coords="0,0,460,439" href="/b/ref=nav_shopall_nav_sap_family?_encoding=UTF8&node=14335122031&pf_rd_p=75669395-bb91-4f24-bb25-66b2006100b5&pf_rd_s=nav-sa-baby-kids-toys&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=TKGKMDV8NTR8Y923TB2R" alt="Jetzt informieren"/>
</map>





<map name="nav_imgmap_nav-sa-cloud-drive" id="nav_imgmap_nav-sa-cloud-drive">
<area shape="rect" coords="1,1,442,426" href="/clouddrive/learnmore/ref=nav_shopall_CD_DE_NB_GNO_DT_EVRGRN?pf_rd_p=2a90723b-84ec-4bf9-99a3-e889bbf55a5f&pf_rd_s=nav-sa-cloud-drive&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=TKGKMDV8NTR8Y923TB2R" alt="Cloud Drive Photos"/>
</map>



<map name="nav_imgmap_nav-sa-electronics-computers" id="nav_imgmap_nav-sa-electronics-computers">
<area shape="rect" coords="10,10,468,472" href="/s/ref=nav_shopall_nav-sa-ce_uhd?_encoding=UTF8&rh=i%3Aelectronics%2Cn%3A1197292%2Cp_n_feature_two_browse-bin%3A2711619031&pf_rd_p=1b3cce0c-950a-43be-b79d-7bf3bc3b4dc2&pf_rd_s=nav-sa-electronics-computers&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=TKGKMDV8NTR8Y923TB2R" alt="UHD TVs"/>
</map>



<map name="nav_imgmap_nav-sa-fire-tv" id="nav_imgmap_nav-sa-fire-tv">
<area shape="rect" coords="0,0,499,474" href="/dp/B079QHMFWC/ref=nav_shopall_aftv_MN_eg?pf_rd_p=85c412a3-fc86-4326-bc0c-156de3db28d1&pf_rd_s=nav-sa-fire-tv&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=TKGKMDV8NTR8Y923TB2R" alt="Learn More"/>
</map>



<map name="nav_imgmap_nav-sa-handmade" id="nav_imgmap_nav-sa-handmade">
<area shape="poly" coords="1,458,139,252,346,12,499,11,499,4605" href="/b/ref=nav_shopall_?_encoding=UTF8&node=9699312031&pf_rd_p=084f7a1f-edba-40a6-b42c-e2ea7a508aa3&pf_rd_s=nav-sa-handmade-launchpad&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=TKGKMDV8NTR8Y923TB2R" alt=""/>
</map>



<map name="nav_imgmap_nav-sa-home-garden-tools" id="nav_imgmap_nav-sa-home-garden-tools">
<area shape="rect" coords="1,1,500,422" href="/b/ref=nav_shopall_nav_sap_hi_project?_encoding=UTF8&node=80084031&pf_rd_p=10983599-13d3-4ea2-9924-491575ea82f8&pf_rd_s=nav-sa-home-garden-tools&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=TKGKMDV8NTR8Y923TB2R" alt="HI_PROJECT"/>
</map>



<map name="nav_imgmap_nav-sa-instant-video" id="nav_imgmap_nav-sa-instant-video">
<area shape="rect" coords="1,1,519,483" href="/gp/redirect.html/ref=nav_shopall_?ie=UTF8&location=https%3A%2F%2Fwww.amazon.de%2Fgp%2Fvideo%2Fstorefront%2F%3Famp%253Bnode%3D2676882011rh%253Di%253Aprime-instant-video%252Cn%253A2676882011%26amp%253Bref%3Ddvm_de_xs_oth_e_en_all_054&source=standards&token=8682C098D8CAB56C189A93287D194EC200D2FD63&pf_rd_p=dd99106d-dad3-454b-b71c-f30c3df593a8&pf_rd_s=nav-sa-instant-video&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=TKGKMDV8NTR8Y923TB2R" alt=""/>
</map>



<map name="nav_imgmap_nav-sa-kindle-amazon-echo" id="nav_imgmap_nav-sa-kindle-amazon-echo">
<area shape="rect" coords="0,0,499,474" href="/dp/B01J2BL01K/ref=nav_shopall_nav_flyout_aucc_rk_de?pf_rd_p=a10cbb37-617a-4342-8460-d763543156b2&pf_rd_s=nav-sa-kindle-amazon-echo&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=TKGKMDV8NTR8Y923TB2R" alt="Mehr dazu"/>
</map>



<map name="nav_imgmap_nav-sa-kindle-fire-tablet" id="nav_imgmap_nav-sa-kindle-fire-tablet">
<area shape="rect" coords="0,0,499,474" href="/dp/B07G989P78/ref=nav_shopall_nav_flyout_Tabl_kk_eg?pf_rd_p=43d0e604-adae-4092-9b2e-edaa504ec418&pf_rd_s=nav-sa-kindle-fire-tablet&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=TKGKMDV8NTR8Y923TB2R" alt="Mehr dazu"/>
</map>



<map name="nav_imgmap_nav-sa-kindle-reader" id="nav_imgmap_nav-sa-kindle-reader">
<area shape="rect" coords="0,0,499,474" href="/dp/B07747FR44/ref=nav_shopall_nav_flyout_Eink_Ms_MSLnc_DE?pf_rd_p=16f02924-7b6d-43da-9ffc-ce2ee55e3094&pf_rd_s=nav-sa-kindle-reader&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=TKGKMDV8NTR8Y923TB2R" alt="Jetzt bestellen"/>
</map>



<map name="nav_imgmap_nav-sa-mp3" id="nav_imgmap_nav-sa-mp3">
<area shape="rect" coords="1,1,500,475" href="/gp/dmusic/promotions/AmazonMusicUnlimited/ref=nav_shopall_dmm_nav_fo_AM418_99_151118?pf_rd_p=4f887076-b902-4d44-a524-98b642e35417&pf_rd_s=nav-sa-mp3&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=TKGKMDV8NTR8Y923TB2R" alt="AmazonMusicUnlimited"/>
</map>



<map name="nav_imgmap_nav-sa-music-games-film-tv" id="nav_imgmap_nav-sa-music-games-film-tv">
<area shape="rect" coords="1,1,500,471" href="/gp/dmusic/promotions/AmazonMusicUnlimited/ref=nav_shopall_dmm_nav_fo_hf_1114_v3?pf_rd_p=b3208b63-a74a-446a-a6a4-01e0b40341fb&pf_rd_s=nav-sa-music-games-film-tv&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=TKGKMDV8NTR8Y923TB2R" alt="AmazonMusicUnlimited"/>
</map>



<map name="nav_imgmap_nav-sa-poldi" id="nav_imgmap_nav-sa-poldi">
<area shape="rect" coords="1,1,500,475" href="/gp/redirect.html/ref=nav_shopall_dmm_nav_fo_poldi1_240818?location=https://music.amazon.de/sports/competitions/BUND&token=74FFCF03D53B354FB6385B43FDA2FC97B04E829A&source=standards&pf_rd_p=7e58da98-aba0-4f5d-864e-cc3e94cb07ed&pf_rd_s=nav-sa-poldi&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=TKGKMDV8NTR8Y923TB2R" alt="FußballLiveAmazonMusic"/>
</map>



<map name="nav_imgmap_nav-sa-sports-outdoors" id="nav_imgmap_nav-sa-sports-outdoors">
<area shape="rect" coords="1,1,503,487" href="/b/ref=nav_shopall_nav_sap_f7792a04-6e4f-4b82-9ec5-449882c0ed8d?_encoding=UTF8&node=16435051&pf_rd_p=7e2fd696-34f1-4445-bca4-39be952c3623&pf_rd_s=nav-sa-sports-outdoors&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A1PA6795UKMFR9&pf_rd_r=TKGKMDV8NTR8Y923TB2R" alt="Sportartikel"/>
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
window.$Nav && $Nav.declare('config.requestId', '7KW51GR72GBHGNNYKK1P');


window.$Nav && $Nav.declare('config.alexaListEnabled', true);

window.$Nav && $Nav.declare('config.readyOnATF', false);

window.$Nav && $Nav.declare('config.dynamicMenuArgs',
  {"rid":"7KW51GR72GBHGNNYKK1P","isFullWidthPrime":0,"isPrime":1,"dynamicRequest":1,"weblabs":"","isFreshRegionAndCustomer":"","primeMenuWidth":450});

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
    , requestId: "7KW51GR72GBHGNNYKK1P"
    , sessionId: "262-9898842-9713804"
    , language: "de_DE"
    , customerId: "A96YKT37ODSSG"
    , b2b: 0
    , fresh: 0
    , biaWidgetUrl: "/gp/yourstore?ie=UTF8&edit=1&p=hwdmrJRJ5%2B%2FNstQSZvWLyS1WlZB5LBOMmqM5b5cGgAzL8tRNWtUS8W1dHBeFmSIeYpfwBZOwTCRKryp8290k8JwuLArjjoD%2F&ref=nb_sb_ss_bia_acct"
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
 _navbar.browsepromos['nav-sa-auto-bike'] = {"width":"540","promoType":"wide","vertOffset":"-42","tabletAltText":null,"horizOffset":"-36","height":"560","altText":null,"image":"https://images-eu.ssl-images-amazon.com/images/G/03/Automotive/Fly-outs/995289_de_auto_04-07-2016_auto-flyout._CB269034442_.png","tabletDestination":null,"tabletImage":null}; 
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
      window.P.declare('packardGlowStoreName', 'digital-text');
    }
  });
    window.P.declare('packardSpeedDesktopEnabled', true);
}


window.$Nav && $Nav.declare('configComplete');

--></script>

<script type='text/javascript'>window.navmet.push({key:'PostNav',end:+new Date(),begin:window.navmet.tmp});</script>







<a id='skippedLink'></a>

<script type='text/javascript'>window.navmet.MainEnd = new Date();</script><!-- sp:feature:host-atf -->

<div id='dp' class='ebooks de_DE'>
         






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



<div>
</div>


    












<div id="wayfinding-breadcrumbs_container" class="a-section a-spacing-none a-padding-medium">
<div id="wayfinding-breadcrumbs_feature_div" class="a-subheader a-breadcrumb feature" data-feature-name="wayfinding-breadcrumbs">
    <ul class="a-unordered-list a-horizontal a-size-small">
         <li><span class="a-list-item">
            <a class="a-link-normal a-color-tertiary" href="/kindle-shop-ebooks-zeitungen-zubeh%C3%B6r/b/ref=dp_bc_1?ie=UTF8&node=530484031">
                Kindle-Shop
            </a>
         </span></li>
         <li class="a-breadcrumb-divider"><span class="a-list-item a-color-tertiary">
             &rsaquo;
         </span></li>
         <li><span class="a-list-item">
            <a class="a-link-normal a-color-tertiary" href="/ebooks-kindle-buecher/b/ref=dp_bc_2?ie=UTF8&node=530886031">
                Kindle eBooks
            </a>
         </span></li>
         <li class="a-breadcrumb-divider"><span class="a-list-item a-color-tertiary">
             &rsaquo;
         </span></li>
         <li><span class="a-list-item">
             <a class="a-link-normal a-color-tertiary" href="/roman-belletristik-literatur-ebooks-kindle-buecher/b/ref=dp_bc_3?ie=UTF8&node=567111031">
                 Belletristik
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







  





    































       




















































         
        















        
        
    




<div id="ebooksInstantOrderUpdate_feature_div" class="feature" data-feature-name="ebooksInstantOrderUpdate">
         
     




    

    
    
    
        
            
                
	                
	                
	                	






	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>






    

    
    

    










    
    
     
         
         
             <div id="ebooksImportantMessage_feature_div" class="feature" data-feature-name="ebooksImportantMessage">
         
     




    

    
    
    
        
            
                
	                
	                
	                	




	
	
		
		

		
		

		
		
	

	
	


	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>






    

    
    

    










    
    
     
         
         
             <div id="promotionsBanner_feature_div" class="feature" data-feature-name="promotionsBanner">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>






    

    
    

    










    
    
     
         
         
             <div id="dbsPromo_feature_div" class="feature" data-feature-name="dbsPromo">
         
     




    

    
    
    
        
            
                
	                
	                
	                	



    
        
        
    

	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>






    

    
    

    










    
    
     
         
         
             <div id="companyCompliancePolicies_feature_div" class="feature" data-feature-name="companyCompliancePolicies">
         
     




    

    
    
    
        
            
                
	                
	                
	                	




    


	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>






    




<div id="rightCol">
    
        
        

        










    
    
     
         
         
             <div id="CombinedBuybox" class="feature" data-feature-name="CombinedBuybox">
         
     




    

    
    
    
        
        
        
        
    	    
                









    
    

    
    

    
    

    
    

    
    

    
    

    
    

    
    

    
    

    

    
        
        
    

    

    

    

    
        
        
            
                
                
                    
                    
                    
                        
                            <span class="a-offscreen">
                                <h2>Kaufoptionen</h2>
                            </span>
                            <div id="combinedBuyBox" class="a-section a-spacing-medium">
                                <div id="buybox" class="a-box a-spacing-micro"><div class="a-box-inner a-padding-base">
                                    <table class="a-lineitem a-spacing-micro">
                
                
                    
                
                
                
                

                
                
                
                
                

                
                

                
                

                

                
                
                    
                    


<style>
    .youPay-bottom {
        padding-bottom: .5em !important;
    }

    .yourCredits-mobile-bottom {
        vertical-align: top !important;
        padding-bottom: .5em !important;
    }

    .youPay-mobile-bottom {
        padding-bottom: 2em !important;
    }

    .youPay-verticalAlign {
        vertical-align: top !important;
    }

    .youPay-top {
        padding-top: .5em !important;
    }

    .youPay-border {
        border-bottom: 1px solid;
        border-color: rgba(151, 151, 151, .4)
    }

    .youPay-bigAlignment {
        padding-left: 7px !important;
    }

    .youPay-bigAlignment-mobile {
        padding-left: 4px !important;
    }

    .youPay-smallAlignment {
        padding-left: 8px !important;
    }

    .youPay-smallAlignment-mobile {
        padding-left: 5px !important;
    }

    .youPay-lineheight {
        line-height: 10px !important;
    }

    
    .kcpAppBaseBox_ {
        padding: 0px !important;
    }
</style>










    


    




<tr class="kindle-price">
    
    
    <td class="a-span1 a-color-secondary a-text-left a-align-center a-nowrap">
        Kindle-Preis:
    </td>
    
    
    
    
    




    <td class="a-color-price a-size-medium a-align-bottom">
        EUR 15,99 
        
        
    </td>
</tr>

                    
                    
                
                
                
                    
                
               
                
                    
                    
                        
                        
                            
                            
                            <tr class="vat-delivery-message">
                                <td>
                                </td>
                                <td class="a-color-base a-size-mini">
                                    inkl. MwSt.
                                </td>
                            </tr>
                        
                     
                

                
                

                
                

                
                

                
                

                
                

                



    <style>
    .youPay-bottom {
        padding-bottom: .5em !important;
    }

    .yourCredits-mobile-bottom {
        vertical-align: top !important;
        padding-bottom: .5em !important;
    }

    .youPay-mobile-bottom {
        padding-bottom: 2em !important;
    }

    .youPay-verticalAlign {
        vertical-align: top !important;
    }

    .youPay-top {
        padding-top: .5em !important;
    }

    .youPay-border {
        border-bottom: 1px solid;
        border-color: rgba(151, 151, 151, .4)
    }

    .youPay-bigAlignment {
        padding-left: 7px !important;
    }

    .youPay-bigAlignment-mobile {
        padding-left: 4px !important;
    }

    .youPay-smallAlignment {
        padding-left: 8px !important;
    }

    .youPay-smallAlignment-mobile {
        padding-left: 5px !important;
    }

    .youPay-lineheight {
        line-height: 10px !important;
    }

    
    .kcpAppBaseBox_ {
        padding: 0px !important;
    }
</style>

    

    

    
    
    

    
    
        
    
    
        
    

    



                
                
                    











    
        
    
    
        
    

    <tr class="print-sold-by">
        <td class="a-span1 a-color-secondary a-text-left a-nowrap">
            
        </td>
        <td>
            
            
            
                <span class="a-size-small a-color-tertiary a-text-italic">
                    Der Verkaufspreis wurde vom Verlag festgesetzt.
                </span>
            
        </td>
    </tr>

                

                
                
            </table>
        
    
    


            
        
        
    

 








    
    
        <form method="post" id="buyOneClick" action="https://www.amazon.de/gp/digital/fiona/buy.html/ref=dbs_p_ebk_r00_pbcb_cv1c00" spacing="none">
            
            






    
    
    
        
    



    
    
        
    






    
    <input type="hidden" name="ASIN.0" value="B071FCV5KW">
    
    <input type="hidden" name="addNarration" value="0" id="addNarration">
    <input type="hidden" name="audibleAsin" id="audibleAsin">
    <input type="hidden" name="audibleOurPrice" id="audibleOurPrice">
    <input type="hidden" name="addAyceBenefit" value="0" id="addAyceBenefit">
    
    <input type="hidden" name="offerListingID.0" value="lwgR3392psO0UtpREOVDyLg2%2FIWUKeWxamY6eBD5ODTgjCumpEUAiGmID%2FZ9aOJV85yWNVd8razr%2FoJ%2BOA8fQXNR4CFJPUvT0t5bPlXdyau5sjb9zqj94Mlq%2FW2DyZd1cSvD4%2FwCA0F3ABQGI0pVPA%3D%3D">
    <input type="hidden" name="t" value="fiona">
    <input type="hidden" name="itemCount" value="1">
    
    <input type="hidden" name="emailSubscriptionIdList" id="emailSubscriptionId">
    
    
    
        <input type="hidden" name="buyActionIdentifier" value="arn:action:pa:1:QjA3MUZDVjVLVzpBMVBBNjc5NVVLTUZSOTpCdXk6bnVsbDoxNS45OTpFVVI6bnVsbA==" id="buyActionIdentifier">
    
    
        <input type="hidden" name="cor.0" value="DE">
    
    
        
        
            
                
                
                    <input type="hidden" name="displayedPrice" value="15.99">
                
            
        
    

    
        
        
        
            <input type="hidden" name="displayedPriceCurrencyCode" value="EUR">
            <input type="hidden" name="displayedPriceCurrency" value="EUR">
        
    

    

    
    
    
    <input type="hidden" name="transactionMode" value="one-click" id="transactionMode">
    <input type="hidden" name="isPreorder" value="0">
    <input type="hidden" name="subtype.0" value="STANDARD" id="subtype0">
    
    


            












    
        
        
        
        
        
            
        
    

<div class="a-button-stack">
    
        
        
    
    
        
        
            
            
            
                
                    











    








    
        
    
    
    































    






    
    
    
    
    
        
        
            <div class="a-button-stack">
                <span id="checkoutButtonId" class="a-button a-button-normal a-spacing-none a-button-oneclick a-button-icon"><span class="a-button-inner"><i class="a-icon a-icon-1click"></i><input id="one-click-button" name="submit.one-click-order.x" class="a-button-input" type="submit" value="Jetzt kaufen mit 1-Click
        
            &lt;sup&gt;&amp;reg&lt;/sup&gt;" aria-labelledby="checkoutButtonId-announce"><span id="checkoutButtonId-announce" class="a-button-text a-text-center" aria-hidden="true">
                    Jetzt kaufen mit 1-Click
        
            <sup>&reg</sup>
                    
                </span></span></span>
            </div>
        
    

    
    





        
    


<script type="text/javascript">
    // Send csm counter on 'Buy' button click as well preferred payment method buy button click.
    P.when('A','jQuery', 'accordionInstrumentation', 'ready').execute(function(A,$,instrumentation){
        $('#checkoutButtonId').click(function(){
            var counter = instrumentation.counter();
            if (counter) {
                counter.buttonClick("buyButton");
                var preferredPaymentMethodbuyButtonText = '';
                if(preferredPaymentMethodbuyButtonText) {
                    counter.buttonClick(preferredPaymentMethodbuyButtonText);
                }

            }
        });
    });
</script>






    <style>
        .buyBoxORDivider > h5 {
            font-weight: bold!important;
            color: #333333!important;
        }
    </style>




    <script type="text/javascript">   
  P.when('A', 'jQuery').execute(function (A, $) {
    $.fn.preventMultiSubmission = function() {
      $(this).submit(function(e) {
        if ($(this).data('submitted') === true) {
          e.preventDefault();
        } else {
          $(this).data('submitted', true);
        }
      });
    };
    
    $("#buyOneClick").preventMultiSubmission();
 
    A.on.ready(function() {
        $("#sendSample").preventMultiSubmission();
    });
  });
 </script>



















    <script type="text/javascript">
        P.when('A', 'jQuery').execute(function (A, $) {
            /*
              Claimed Applicable Promotions

              Expose a jQuery event trigger here that will show a message about
              what promotions will be applied to this purchase. Since the "You Save"
              message and price is calculated pre-promotion, we'll hide that message
              to avoid confusion.
            */
            A.on('kindle_price_block_show_promotions', function(promotionText,numberOfPromotions){
                //Show list of promotions
                $('#kindle_applied_promotions').html(promotionText).children().css('textDecoration','none');

                //Show promotion stackable message if there is more than one promotion
                if(numberOfPromotions > 1) {
                    $('#kindle_promo_multiple_promo_message').show();
                }

                //Hide the amount saved and show the popover
                $('.kindle-price .ebooks-price-savings').hide();
                $('#kindle_promo_message').show();
            });
        });
    </script>



<span class="a-declarative" data-action="a-popover" data-a-popover="{&quot;closeButtonLabel&quot;:&quot;Schließen&quot;,&quot;name&quot;:&quot;promo-in-price-block&quot;,&quot;position&quot;:&quot;triggerBottom&quot;,&quot;popoverLabel&quot;:&quot;Aktionen werden beim Kauf angewendet&quot;}">
    <p id="kindle_promo_message" class="a-spacing-small a-spacing-top-small a-text-center a-size-small a-color-link">
        <a id="kindle_promo_message_popover" href="javascript:void(0)" class="a-popover-trigger a-declarative">
           Aktionen werden beim Kauf angewendet
        <i class="a-icon a-icon-popover"></i></a>
    </p>
</span>

<div class="a-popover-preload" id="a-popover-promo-in-price-block">
    <p class="a-spacing-small a-spacing-top-small">
        Diese Aktionen werden auf diesen Artikel angewendet:
    </p>
    <p id="kindle_applied_promotions">
    </p>
    <p id="kindle_promo_multiple_promo_message" class="a-spacing-small a-color-tertiary">
        Einige Angebote können miteinander kombiniert werden, andere nicht. Für mehr Details lesen Sie bitte die Nutzungsbedingungen der jeweiligen Promotion.
    </p>
</div>


    <style type="text/css">
        #kindle_promo_message, #kindle_promo_multiple_promo_message {
            display: none;
        }
        #kindle_promo_message_popover {
            text-decoration: none;
        }
    </style>



                    
                        



    
    
    


                    
                    
                
            
        
        
    
</div>


    
        
        
            
        
    








    





    
    
        
    


















    <div id="deliverTo" class="a-section a-spacing-micro a-spacing-top-mini a-text-center">
    <div id="commonDeliverToDropdown" class="a-section a-spacing-none a-spacing-top-micro celwidget">
    </div>
        
            
                
                <p class="a-spacing-micro a-text-center">Senden an:</p>
                <span class="a-dropdown-container"><select name="target-fiona.0" autocomplete="off" id="deliverTo" tabIndex="-1" class="a-native-dropdown">
                    
                        
                            
                                <option value="AG1WIWGZMLE3J" data-a-css-class="deviceEnabled" data-a-id="AG1WIWGZMLE3J" selected>
                                    Kim's Kindle
                                </option>
                            
                            
                        
                    
                        
                            
                            
                                <option value="AR2BU5GVOPKBB" data-a-css-class="deviceEnabled" data-a-id="AR2BU5GVOPKBB">
                                    Kim's 6th Android Device
                                </option>
                            
                        
                    
                        
                            
                            
                                <option value="A1TDZ1FOKC7F2G" data-a-css-class="deviceEnabled" data-a-id="A1TDZ1FOKC7F2G">
                                    Kim's Kindle Cloud Reader
                                </option>
                            
                        
                    
                        
                            
                            
                                <option value="A2SWTK8JWGN0SJ" data-a-css-class="deviceEnabled" data-a-id="A2SWTK8JWGN0SJ">
                                    Kims iPad
                                </option>
                            
                        
                    
                    
                        <option value="" data-a-css-class="deviceDisabled">
                            ----
                        </option>
                        <option value="transfer-via-computer" data-a-css-class="deviceEnabled" data-a-id="transfer-via-computer">
                            Übertragung per Computer
                        </option>
                    
                </select><span tabIndex="-1" class="a-button a-button-dropdown"><span class="a-button-inner"><span class="a-button-text a-declarative" data-action="a-dropdown-button" role="button" tabIndex="0" aria-hidden="true"><span class="a-dropdown-prompt">Kim's Kindle</span></span><i class="a-icon a-icon-dropdown"></i></span></span></span>
            
            
        
    </div>






<script type="a-state" data-a-state="{&quot;key&quot;:&quot;deliverToState&quot;}">{"metricName":"deliverToSelectionCount","deliverToDropdownName":"a:dropdown:selected:target-fiona.0"}</script>





    <style type="text/css">
        .deviceDisabled .a-dropdown-link {
            color: #aaa!important;
            pointer-events: none;
        }

        .deviceDisabled {
            cursor: not-allowed;
        }
    </style>





        </form>

        
        <form id="addToCart" action=""></form>
    







    <style type="text/css">
        #buybox #buyOneClick {
            margin-bottom: 0 !important;
        }

        form#addToCart {
            margin-bottom: 0 !important;
        }
    </style>


                
            
        
    

    
    



    <style type="text/css">
        #buybox .a-dropdown-container .a-button-dropdown {
            width: 100%;
            display: inline-block !important;
        }

        #buybox .a-native-dropdown {
            display: none;
        }
    </style>
                                </div></div>
                            </div>
                        
                    
                
            
        
    



    <style type="text/css">
        #ebookAccordion {
            border-radius: 4px;
            box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.1);
        }

        #ebookAccordion .a-dropdown-container .a-button-dropdown {
            width: 100%;
            display: inline-block !important;
        }
    </style>
    <script type="text/javascript">
    P.when('A', 'jQuery').execute(function(A) {
        var $ = A.$;
        A.on('a:accordion:ebookAccordion:select', function(data) {
            $('#ebookAccordion span.a-color-price').removeClass('a-color-price').addClass('a-color-secondary').removeClass('a-size-medium');
            $(data.selectedRow.$row).find('div.a-span-last span').removeClass('a-color-secondary').addClass('a-color-price').addClass('a-size-medium');
        });
    });
</script>

    <script type="text/javascript">
        P.when('A', 'jQuery', 'accordionInstrumentation').execute(function(A, $, instrumentation) {
            // Getting counter for csm metrics
            var counter = instrumentation.counter();
            if (counter) {
                counter.setAccordionCounterId('ebookAccordion');
                counter.addRowsToCounterId('[BUY]');
            }

            A.on('a:accordion:ebookAccordion:select', function(data) {
                // Increment count and send Client Side Metric counter
                if (counter) {
                    counter.accordionSwitch();
                }
            });
        });
    </script>


    	    
        
        
        
        
    
    
    

    















    </div>






        
    
        
        

        










    
    
     
         
         
             <div id="consumerDigitalBulkBuyBox_feature_div" class="feature" data-feature-name="consumerDigitalBulkBuyBox">
         
     




    

    
    
    
        
            
                
	                
	                
	                	





<script type="text/javascript">
    
    var giveawayGiftingShareVar = true;
</script>
	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>






        
    
        
        

        










    
    
     
         
         
             <div id="SendSample" class="feature" data-feature-name="SendSample">
         
     




    

    
    
    
        
        
        
        
    	    
                










    <div id="sendSampleBox" class="a-box a-spacing-medium"><div class="a-box-inner">
        
        
            <div id="sendSample" class="a-section a-text-center">
                <form id="sendSample" method="post" action="https://www.amazon.de/gp/digital/fiona/buy.html/ref=dbs_p_ebk_w0m_pmss_spds00" class="a-spacing-micro">
                
                    




<input type="hidden" name="ASIN.0" value="B071FCV5KW">
<input type="hidden" name="offerListingID.0" value="lwgR3392psO0UtpREOVDyLg2%2FIWUKeWxamY6eBD5ODTgjCumpEUAiGmID%2FZ9aOJV85yWNVd8razr%2FoJ%2BOA8fQXNR4CFJPUvT0t5bPlXdyau5sjb9zqj94Mlq%2FW2DyZd1cSvD4%2FwCA0F3ABQGI0pVPA%3D%3D">
<input type="hidden" name="t" value="fiona">
<input type="hidden" name="subtype.0" value="FREE_CHAPTER" id="subtype0">
<input type="hidden" name="itemCount" value="1">

    <input type="hidden" name="cor.0" value="DE">


                    
                    <span id="sendSampleButton" class="a-button a-spacing-none full-width"><span class="a-button-inner"><input class="a-button-input" type="submit" value="Kostenlose Leseprobe senden" aria-labelledby="sendSampleButton-announce"><span id="sendSampleButton-announce" class="a-button-text" aria-hidden="true">
                        Kostenlose Leseprobe senden
                    </span></span></span>
                    <div id="sendSampleDeliverTo">
                        





    
    
        
    


















    <div id="deliverTo" class="a-section a-spacing-micro a-spacing-top-mini a-text-center">
    <div id="commonDeliverToDropdown" class="a-section a-spacing-none a-spacing-top-micro celwidget">
    </div>
        
            
                
                <p class="a-spacing-micro a-text-center">Senden an:</p>
                <span class="a-dropdown-container"><select name="target-fiona.0" autocomplete="off" id="deliverTo" tabIndex="-1" class="a-native-dropdown">
                    
                        
                            
                                <option value="AG1WIWGZMLE3J" data-a-css-class="deviceEnabled" data-a-id="AG1WIWGZMLE3J" selected>
                                    Kim's Kindle
                                </option>
                            
                            
                        
                    
                        
                            
                            
                                <option value="AR2BU5GVOPKBB" data-a-css-class="deviceEnabled" data-a-id="AR2BU5GVOPKBB">
                                    Kim's 6th Android Device
                                </option>
                            
                        
                    
                        
                            
                            
                                <option value="A1TDZ1FOKC7F2G" data-a-css-class="deviceEnabled" data-a-id="A1TDZ1FOKC7F2G">
                                    Kim's Kindle Cloud Reader
                                </option>
                            
                        
                    
                        
                            
                            
                                <option value="A2SWTK8JWGN0SJ" data-a-css-class="deviceEnabled" data-a-id="A2SWTK8JWGN0SJ">
                                    Kims iPad
                                </option>
                            
                        
                    
                    
                        <option value="" data-a-css-class="deviceDisabled">
                            ----
                        </option>
                        <option value="transfer-via-computer" data-a-css-class="deviceEnabled" data-a-id="transfer-via-computer">
                            Übertragung per Computer
                        </option>
                    
                </select><span tabIndex="-1" class="a-button a-button-dropdown"><span class="a-button-inner"><span class="a-button-text a-declarative" data-action="a-dropdown-button" role="button" tabIndex="0" aria-hidden="true"><span class="a-dropdown-prompt">Kim's Kindle</span></span><i class="a-icon a-icon-dropdown"></i></span></span></span>
            
            
        
    </div>






<script type="a-state" data-a-state="{&quot;key&quot;:&quot;deliverToState&quot;}">{"metricName":"deliverToSelectionCount","deliverToDropdownName":"a:dropdown:selected:target-fiona.0"}</script>





    <style type="text/css">
        .deviceDisabled .a-dropdown-link {
            color: #aaa!important;
            pointer-events: none;
        }

        .deviceDisabled {
            cursor: not-allowed;
        }
    </style>

                    </div>
                </form>
            </div>
        
    </div></div>







    <style type="text/css">
        #sendSampleBox {
            border-radius: 4px;
            box-shadow: 0 0 0 4px rgba(0,0,0,0.1);
        }

        .full-width {
            width : 100%;
        }

        #sendSampleDeliverTo .a-button-dropdown {
            width : 100%;
        }
    </style>

    	    
        
        
        
        
    
    
    

    















    </div>






        
    
        
        

        










    
    
     
         
         
             <div id="ebooksBuyboxWishlist_feature_div" class="feature" data-feature-name="ebooksBuyboxWishlist">
         
     




    

    
    
    
        
            
                
	                
	                
	                	





    <div id="addToWishlist" class="a-section">
        <form method="post" id="ebooksWishlist" name="addToWishlist" action="https://www.amazon.de/gp/digital/fiona/add-to-wish-list.html/ref=dbs_p_ebk_r00_plwl_wlal00">
            <input type="hidden" name="ASIN.0" value="B071FCV5KW">
            <input type="hidden" name="itemCount" value="1">
            <input type="hidden" name="wlPopCommand">
            <input type="hidden" name="store" value="digital-text">
            <input type="hidden" name="session-id" value="262-9898842-9713804">
            <input type="hidden" name="rsid" value="262-9898842-9713804">
            




  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  






















    




    
    

    
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
      <script type="a-state" data-a-state="{&quot;key&quot;:&quot;atwl&quot;}">{"showInlineLink":false,"wishlistButtonId":"add-to-wishlist-button","dropDownHtml":"","inlineJsFix":false,"wishlistButtonSubmitId":"add-to-wishlist-button-submit","maxAjaxFailureCount":"3","asin":"B071FCV5KW"}</script>
      


















<script type="a-state" data-a-state="{&quot;key&quot;:&quot;atbrState&quot;}">{"addSuccessModalHeader":"Zu Ihrer Baby-Wunschliste hinzugefügt","vendorId":"website.huc.shoveler","sessionId":"262-9898842-9713804"}</script>
<input type="hidden" name="" id="is-fully-selected-baby-reg">




  </div>












<script type="a-state" data-a-state="{&quot;key&quot;:&quot;popoverState&quot;}">{"formId":"ebooksWishlist","showWishListDropDown":true,"babyRegistryId":"add-to-registry-baby-button","showBabyRegDropdown":false,"wishlistPopoverWidth":"206","isAddToWishListDropDownAuiEnabled":true,"showPopover":true}</script>

 

        </form>
    </div>




	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>






        
    
        
        

        










    
    
     
         
         
             <div id="redeemCode_feature_div" class="feature" data-feature-name="redeemCode">
         
     




    

    
    
    
        
            
                
	                
	                
	                	




















    





    
        





<script type="text/javascript">
    P.when('A', 'jQuery', 'accordionInstrumentation').execute(function (A, $, instrumentation) {

        /*
        redemptionResultStatusToMessageBody : Messages handling the different results from the redeem code end point
        redemptionResultStatusToMessageType : Message type pointing to the type of the alert that is to be shown to the user
        */

        
            
                var redemptionResultStatusToMessageBody = {"promo":{"expired":"Der Gutschein-Code den Sie eingegeben haben, ist ungültig oder abgelaufen. Bitte prüfen Sie den Code und probieren Sie es noch einmal.","applied":"Der Gutschein wurde Ihrem Kundenkonto gutgeschrieben.","applied-eligible":"Der Gutschein %promo wurde Ihrem Kundenkonto hinzugefügt .<br/><br/>Der Gutschein wird automatisch angewendet, wenn Sie dieses Produkt kaufen.","applied-not-eligible":"Der Gutschein %promo wurde Ihrem Kundenkonto hinzugefügt,  allerdings ist die Kindle Edition von Die Argonauten nicht für diesen Gutschein zulässig.<br/><br/> Der Gutschein wird in Ihrem Kundenkonto gespeichert und angewendet, sobald Sie ein dafür gültiges Produkt kaufen.","failure":"Es ist ein unerwarteter Fehler aufgetreten. Bitte versuchen Sie es noch einmal.","not-logged-in":"Bitte melden Sie sich zuerst in Ihrem Kundenkonto an, um den Code einzulösen.","already-applied":"Der Gutschein-Code den Sie eingegeben haben, wurde bereits eingelöst.","invalid":"Der Code den Sie eingegeben haben ist ungültig.","invalid-or-redeemed":"Der Gutscheincode den Sie eingegeben haben, ist ungültig oder wurde bereits verwendet."},"gc":{"already-applied-no-bal":"Die Geschenkkarte die Sie eingegeben haben, wurde Ihrem Konto bereits hinzugefügt.","already-claimed":"Die Geschenkkarte die Sie eingegeben haben, wurde bereits eingelöst.","expired":"Die Geschenkkarte, die Sie eingegeben haben, ist abgelaufen.","applied":"Die Geschenkkarte die Sie eingegeben haben, wurde Ihrem Konto bereits hinzugefügt. Ihr neues Guthaben beträgt %gcBal. Das Guthaben wird auf Ihre zukünftigen Bestellungen angewendet.","applied-no-bal":"Ihre Geschenkkarte wurde eingelöst.","failure":"Es ist ein unerwarteter Fehler aufgetreten. Bitte versuchen Sie es noch einmal.","not-logged-in":"Bitte melden Sie sich zuerst in Ihrem Kundenkonto an, um den Code einzulösen.","already-applied":"Die Geschenkkarte die Sie eingegeben haben, wurde Ihrem Konto bereits hinzugefügt. Ihr neues Guthaben beträgt %gcBal.","invalid":"Der Code den Sie eingegeben haben ist ungültig."}};
            
            
        

        /*
        For IN redeem code link is shown in two places based on T1 or T2 treatment i.e:
        1) Inside BuyBox below Deliver to link.
        2) Below Send Sample.
        'redeemCodePosition' gives the position for redeem code link.
        Need 'redeemCodePosition' to send CSM based on position.
        */
        var redeemCodePosition;
        
            redeemCodePosition = 'default'; 
        

        var counter = instrumentation.counter();

        var redemptionResultStatusToMessageType = {
                'applied'                : 'success',
                'applied-no-bal'         : 'success',
                'applied-eligible'       : 'success',
                'applied-not-eligible'   : 'info',
                'already-applied'        : 'info',
                'already-applied-no-bal' : 'info',
                'already-claimed'        : 'info',
                'invalid'                : 'info',
                'invalid-or-redeemed'    : 'info',
                'expired'                : 'info',
                'not-logged-in'          : 'info',
                'failure'                : 'error',
            };

        /*
        clickPromoLink

        This function consists of an ajax call that logs the promo link being
        clicked and a function call that determines and renders any eligible promotions.
        */
        var clickPromoLink = function(shouldShowPopover) {
            A.ajax("/gp/digital/fiona/detail/digital-promo/ajax/log-link-click",{
                method:"post",
                params: {sid: $("#sid").val()}
            });

            // Clear any previously rendered success or info messages and code input
            $('#kindle_redeem_promo_message').hide();
            $("#kindle_redeem_promo_input").val("");

            // Send csm counter on 'Promo Link' click
            if (counter && redeemCodePosition) {
                counter.buttonClick(redeemCodePosition + "RedeemCodePromoLinkClick");
            }

            checkForPromosAndRender(shouldShowPopover);
        };

        /*
        ELIGIBLE PROMOTION CHECKS

        checkForPromosAndRender
        This is a series of 2 nested ajax calls. The first does a relatively quick lookup to
        see if there are any eligible promotions for this ASIN or for this customer. If there are, we'll
        make the subsequent call to see what promotions will be applied if the customer makes a purchase.
        */
        var checkForPromosAndRender = function(shouldShowPopover) {

            var $promoDetailsHolder  = $('#kindle_promo_details_holder'),
                inputData = $("#redeemCodeForm").serializeArray();

            //Check to see if we've already made this call, and don't do it again.
            if ($promoDetailsHolder.data('has_data')) { return; }

            A.ajax("/gp/digital/fiona/detail/digital-promo/ajax/check-promos",{
                method : 'post',
                params : inputData,
                success : function(hasPromoData, textStatus, jqXHR) {
                    $promoDetailsHolder.data('has_data', true);
                    if (hasPromoData['asin_has_promo'] === 'true' || hasPromoData['customer_has_promo'] === 'true') {
                        renderPromoDetails(shouldShowPopover);
                    }
                }
            });
        };

        /*
        renderPromoDetails

        This is a function for checking which promotions will be applied to a purchase
        and render those details in the popover.
        */
        var renderPromoDetails = function(shouldShowPopover) {

            var $promoDetailsHolder  = $('#kindle_promo_details_holder'),
                inputData = $("#redeemCodeForm").serializeArray();

            A.ajax("/gp/digital/fiona/detail/digital-promo/ajax/promo-details",{
                method : 'post',
                params : inputData,
                success : function(promoData, textStatus, jqXHR) {
                    if (promoData && promoData.promotions && promoData.promotions.length) {
                        showPromosInPopover(promoData.promotions);
                        showPromosInPriceBlock(promoData.promotions, shouldShowPopover);
                    } else {
                        $('#kindle_promo_details_holder').hide();
                    }
                }
            });
        };

        /*
        CLAIM CODE REDEMPTION

        Promotion/GC redemption click handler. This will perform an ajax call to redeem a promotion or
        gift card and display an informative message upon return.
        */

        A.declarative('redeemPromoCode', 'click', function(event) {

            //Disable the apply button
            $('#kindle_redeem_promo_button').attr('disabled','disabled');

            var inputData = $("#redeemCodeForm").serializeArray(),
                $claimCodeNode = $("#kindle_redeem_promo_input"),
                claimCode = $claimCodeNode.val(),
                $redeemPromoMsg = $('#kindle_redeem_promo_message'),
                $loadingIndicator = $('#kindle_promo_loading_image_block');

            //pushing the claim code into the parameter list passed to the ajax call
            inputData.push({name: 'code',value:claimCode});

            //show loading indicator and clear the existing redeemPromoMsg block
            $loadingIndicator.show();
            $redeemPromoMsg.hide();

            //  Send csm counter on 'Apply' button click.
            if (counter && redeemCodePosition) {
                counter.buttonClick(redeemCodePosition + "RedeemCodeApplyButton");
            }

            A.ajax("/gp/digital/fiona/detail/digital-promo/ajax/redeem",{
                method: "post",
                params: inputData,
                success: function(redeemPromoResult, textStatus, jqXHR) {
                    var status                = redeemPromoResult['resultStatus'];
                    var gcBalance             = redeemPromoResult['gcBalance'];
                    var isEligible            = redeemPromoResult['isEligible'];
                    var allEligiblePromotions = redeemPromoResult['allEligiblePromotions'];
                    var promoDescription      = redeemPromoResult['promoDescription'];
                    var promoID               = redeemPromoResult['redeemedPromoID'];
                    var claimCodeType         = redeemPromoResult['claimCodeType'];
                    var wasCodeApplied        = status === 'applied';
                    var shouldLinkPromo       = true;

                    //Update the status to be a special variant of 'applied' in two cases

                    /*
                    1. The code was a promotion, it was successfully applied to the account, and
                         we asked for eligibility.
                    */
                    if (claimCodeType === 'promo' && isEligible === 'false') {
                        status += '-not-eligible';
                        shouldLinkPromo = false;
                    }

                    //  Send csm counter on 'eligible promo code successfully applied'.
                    if (counter && redeemCodePosition && claimCodeType === 'promo' && isEligible === 'true') {
                        counter.buttonClick(redeemCodePosition + "RedeemCodePromoApplied");
                    }
                    /*
                    2. The code was a gift card, it was successfully applied to the account, and
                        we don't have an updated GC balance to add to the message.
                    */
                    if (claimCodeType === 'gc' && wasCodeApplied && !gcBalance) {
                         status += '-no-bal';
                    }

                    //  Send csm counter on 'RedeemCode successfully applied for GC'.
                    if (counter && redeemCodePosition && claimCodeType === 'gc' && wasCodeApplied) {
                        counter.buttonClick(redeemCodePosition + "RedeemCodeGcApplied");
                    }

                    var messageType = redemptionResultStatusToMessageType[status];
                    var messageBody = "";
                    if (redemptionResultStatusToMessageBody && redemptionResultStatusToMessageBody[claimCodeType]) {
                        messageBody = redemptionResultStatusToMessageBody[claimCodeType][status];
                    }

                    // Render the message for the customer
                    if (messageType && messageBody) {
                        // Replace String variables with data that came back from the remote call.
                        var promoName = shouldLinkPromo ? getPromoLink(promoID, promoDescription) : promoDescription;
                        if (!promoName) {
                            promoName = "Spezialangebot"
                        }
                        messageBody = messageBody.replace("%promo",promoName);

                        if(promoID) {
                            /*
                            The string should include the closing </a> tag so that the words that are linked can
                            be determined on a language-by-language basis. So we just pass in the beginning of the
                            <a href="..."> tag with the variable info.
                            */
                            messageBody = messageBody.replace('%url', '<a href="/gp/promotion/' + escapeHtml(promoID) + '">');
                        }

                        if(gcBalance) {
                            messageBody = messageBody.replace('%gcBal', gcBalance);
                        }

                        showMessage($redeemPromoMsg, messageType, messageBody);

                        if(claimCodeType === 'promo' && isEligible === 'true') {
                            showPromosInPopover(allEligiblePromotions);
                            showPromosInPriceBlock(allEligiblePromotions, shouldShowPopover);
                        }

                        if(wasCodeApplied) {
                            $claimCodeNode.val('');
                        }
                    } else {
                        // When a success code is returned but the status/claimCode is unknown
                        showMessage($redeemPromoMsg, 'info', "Der eingegebene Code ist ungültig." );
                    }
                },
                error: function(redeemPromoResult, textStatus, jqXHR) {
                    showMessage($redeemPromoMsg, 'error', "Es ist ein unerwarteter Fehler aufgetreten. Bitte versuchen Sie es noch einmal." );
                }
            });
            $loadingIndicator.hide();
            $('#kindle_redeem_promo_button').removeAttr('disabled');
        });

        /*
        UTILITY FUNCTIONS

        showPromosInPopover
        Render a list if promotions that will be applied to this purchase in the popover
        below the input box for redeeming a claim code.
        */
        var showPromosInPopover = function(promotions) {
            if (promotions) {
                var promoDetailsHolder   = $('#kindle_promo_details_holder');
                var promoDetailsTemplate = promoDetailsHolder.find('.kindle_promo_details_text.template');

                //Getting all the promotions
                var promoLinks = getPromoLinks(promotions);

                //Remove any existing text in the promo details section
                promoDetailsHolder.find('.kindle_promo_details_text').each(function() {
                    var $oldDetails = $(this);
                    if (!$oldDetails.hasClass('template')) {
                        $oldDetails.remove();
                    }
                });

                //Clone the template for displaying an applicable promotion for each promo we found
                if (promoLinks.length) {
                    var promoDetails = promoDetailsTemplate.clone().removeClass('template');
                    var linkDiv = promoDetails.find('.kindle_promo_details_promo_name').clone();
                    promoDetails.appendTo(promoDetailsHolder);
                    promoDetails.show();
                    for (var i = 0; i < promoLinks.length; i++) {
                        var tmplinkDiv = linkDiv.clone().html(promoLinks[i]);
                        tmplinkDiv.appendTo(promoDetails);
                    }

                    /* The trial calculation will sometimes return multiple promotions that are eligible, though
                    only a subset will be applied on pruchase. We need to show some legal fine print whenever
                    there are multiple promotions to show here.
                    */

                    var $footer = $('#kindle_promo_multiple_promo_footer');
                    if (promoLinks.length > 1) {
                        $footer.show();
                    } else {
                        $footer.hide();
                    }

                    promoDetailsHolder.slideDown();
                }
            }
        };

        /*
        showPromosInPriceBlock

        Render a list of eligible promotions in the price block. There's a jQuery event
        registered in the price block code to take promotion text and display it. This
        function constructs the text and triggers that event.
        */
        var showPromosInPriceBlock = function(promotions, shouldShowPopover) {
            if(!promotions || !shouldShowPopover) {
                return;
            }

            var promotionLinks = getPromoLinks(promotions);
            var promotionText = "";
            if(promotionLinks.length) {
                for (var i = 0; i < promotionLinks.length; i++) {
                    promotionText += promotionLinks[i] + "<br>";
                }
            }

            A.trigger('kindle_price_block_show_promotions',promotionText,promotionLinks.length);
        }

        /*
          The trial calculation will sometimes return multiple promotions that are eligible, though
          only a subset will be applied on pruchase. We need to show some legal fine print whenever
          there are multiple promotions to show here.
        */
        var getPromoLinks = function(promotions) {

            if (promotions && promotions.length) {

                var promoLinks = [];
                for (var i = 0; i < promotions.length; i++) {
                    var promo = promotions[i];
                    var link = getPromoLink(promo['id'], promo['description']);
                    if (link) {
                        promoLinks.push(link);
                    }
                }
            return promoLinks;
            }
        };

        /*
          getPromoLink - Given a promotion id and description , return a link to the promotion landing page
        */
        var getPromoLink = function(promoID, promoDescription) {

            if(!promoID) {
                return null;
            }

            if(!promoDescription) {
               promoDescription = "Spezialangebot";
            }

            return '<a href="/gp/promotion/' + escapeHtml(promoID) + '">' + escapeHtml(promoDescription) + '</a>';
        };

        var escapeHtmlMap = {
           "&": "&amp;",
           "<": "&lt;",
           ">": "&gt;",
           '"': '&quot;',
           "'": '&#39;',
           "/": '&#x2F;'
        };

        // Used for escaping text returned from ajax calls to avoid XSS attacks.
        var escapeHtml = function(string) {
            return String(string).replace(/[&<>"'\\/]/g, function (s) {
                return escapeHtmlMap[s];
            });
        };

        /*
        showMessage

        Utility function for displaying a standard Amazon success/info/warn/error message.
        */
        var showMessage = function(container, type, body) {
            var $successAlert = $('#kindle_redeem_promo_message_content_success'),
                $successAlertContent = $('#kindle_redeem_promo_message_content_success .a-alert-content'),
                $errorAlert = $('#kindle_redeem_promo_message_content_error'),
                $errorAlertContent = $('#kindle_redeem_promo_message_content_error .a-alert-content'),
                $infoAlert = $('#kindle_redeem_promo_message_content_info'),
                $infoAlertContent = $('#kindle_redeem_promo_message_content_info .a-alert-content');

            $successAlert.hide();
            $errorAlert.hide();
            $infoAlert.hide();

            if(type === "success") {
                $successAlertContent.html(body)
                $successAlert.show();
            } else if(type === "info") {
                $infoAlertContent.html(body);
                $infoAlert.show();
            } else if(type === "error") {
                $errorAlertContent.html(body);
                $errorAlert.show();
            }
            container.show();
        };

        // Find if there are any promo links attached to the given asin when the promo link is clicked
        P.when('A').execute(function(A){
            A.on("a:popover:show:redeem-promo", function(data){
                var shouldShowPopover = false;
                
                    shouldShowPopover = true;
                

                var popover = data.popover;
                clickPromoLink(shouldShowPopover);

                if ($("#narration-checkbox").is(':checked')) {
                    $('#narration-disclaimer').show();
                } else {
                    $('#narration-disclaimer').hide();
                }
            });
         });
    });
</script>
    

    <div id="redeemCode" class="a-section a-spacing-small a-text-center">
        
        

        

        

        
        
        
        

        

        


        
        
            
            
                
                    <span class="a-declarative" data-action="a-modal" data-a-modal="{&quot;footer&quot;:&quot;&lt;a class=\\&quot;a-link-normal\\&quot; href=\\&quot;/gp/help/customer/display.html?ie=UTF8&amp;nodeId=201381110\\&quot;&gt;\\n                 Hilfe\\n            &lt;\\/a&gt;&quot;,&quot;closeButtonLabel&quot;:&quot;Schließen&quot;,&quot;width&quot;:550,&quot;name&quot;:&quot;redeem-promo&quot;,&quot;header&quot;:&quot;&lt;span id=\\&quot;kindle_redeem_popover_title\\&quot;&gt;\\n                Gutschein- oder Geschenkkarten-Code eingeben\\n            &lt;\\/span&gt;&quot;,&quot;popoverLabel&quot;:&quot;Gutschein- oder Geschenkkarten-Code eingeben&quot;,&quot;inlineContent&quot;:&quot;&lt;div id=\\&quot;kindle_redeem_popover_content\\&quot; class=\\&quot;a-section\\&quot;&gt;\\n                \\n\\n\\n\\n\\n&lt;div id=\\&quot;narration-disclaimer\\&quot; class=\\&quot;a-box a-alert a-alert-info a-spacing-base\\&quot;&gt;&lt;div class=\\&quot;a-box-inner a-alert-container\\&quot;&gt;&lt;i class=\\&quot;a-icon a-icon-alert\\&quot;&gt;&lt;\\/i&gt;&lt;div class=\\&quot;a-alert-content\\&quot;&gt;\\n    Dieser Gutschein-Code kann nur zu diesem Zeitpunkt auf Ihren Kindle eBook-Kauf angewendet werden.\\n&lt;\\/div&gt;&lt;\\/div&gt;&lt;\\/div&gt;\\n\\n\\n&lt;form id=\\&quot;redeemCodeForm\\&quot; method=\\&quot;post\\&quot; action=\\&quot;javascript:void(0);\\&quot;&gt;\\n    &lt;input type=\\&quot;hidden\\&quot; name=\\&quot;ASIN\\&quot; value=\\&quot;B071FCV5KW\\&quot;&gt;\\n    &lt;input type=\\&quot;hidden\\&quot; name=\\&quot;offerListingID\\&quot; value=\\&quot;lwgR3392psO0UtpREOVDyLg2%2FIWUKeWxamY6eBD5ODTgjCumpEUAiGmID%2FZ9aOJV85yWNVd8razr%2FoJ%2BOA8fQXNR4CFJPUvT0t5bPlXdyau5sjb9zqj94Mlq%2FW2DyZd1cSvD4%2FwCA0F3ABQGI0pVPA%3D%3D\\&quot;&gt;\\n    &lt;input type=\\&quot;hidden\\&quot; name=\\&quot;sid\\&quot; value=\\&quot;262-9898842-9713804\\&quot; id=\\&quot;sid\\&quot;&gt;\\n    &lt;input type=\\&quot;hidden\\&quot; name=\\&quot;merchantID\\&quot; value=\\&quot;A2X9BIRDIKC20I\\&quot;&gt;\\n    &lt;input type=\\&quot;hidden\\&quot; name=\\&quot;price\\&quot; value=\\&quot;15.99\\&quot;&gt;\\n    &lt;input type=\\&quot;hidden\\&quot; name=\\&quot;currency\\&quot; value=\\&quot;EUR\\&quot;&gt;\\n    &lt;input type=\\&quot;hidden\\&quot; name=\\&quot;checkForEligibility\\&quot; value=\\&quot;1\\&quot;&gt;\\n\\n    &lt;p class=\\&quot;a-spacing-micro\\&quot;&gt;\\n        Neuen Code eingeben\\n    &lt;\\/p&gt;\\n\\n    &lt;input type=\\&quot;text\\&quot; id=\\&quot;kindle_redeem_promo_input\\&quot; class=\\&quot;a-input-text a-form-normal a-width-extra-large\\&quot;&gt;\\n\\n    &lt;span class=\\&quot;a-declarative\\&quot; data-action=\\&quot;redeemPromoCode\\&quot; data-redeemPromoCode=\\&quot;{}\\&quot;&gt;\\n        &lt;span class=\\&quot;a-button a-button-primary\\&quot;&gt;&lt;span class=\\&quot;a-button-inner\\&quot;&gt;&lt;input id=\\&quot;kindle_redeem_promo_button\\&quot; class=\\&quot;a-button-input\\&quot; type=\\&quot;submit\\&quot; value=\\&quot;Anwenden\\&quot;&gt;&lt;span class=\\&quot;a-button-text\\&quot; aria-hidden=\\&quot;true\\&quot;&gt;\\n            Anwenden\\n        &lt;\\/span&gt;&lt;\\/span&gt;&lt;\\/span&gt;\\n    &lt;\\/span&gt;\\n&lt;\\/form&gt;\\n\\n\\n&lt;p id=\\&quot;kindle_promo_loading_image_block\\&quot; class=\\&quot;a-spacing-none a-spacing-top-micro a-text-center\\&quot;&gt;\\n    &lt;img alt=\\&quot;\\&quot; src=\\&quot;https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel._V192234675_.gif\\&quot; id=\\&quot;spinnerImage\\&quot;&gt;\\n&lt;\\/p&gt;\\n\\n\\n&lt;div id=\\&quot;kindle_redeem_promo_message\\&quot; class=\\&quot;a-section\\&quot;&gt;\\n    &lt;div id=\\&quot;kindle_redeem_promo_message_content_success\\&quot; class=\\&quot;a-box a-alert a-alert-success a-spacing-mini a-spacing-top-mini\\&quot;&gt;&lt;div class=\\&quot;a-box-inner a-alert-container\\&quot;&gt;&lt;i class=\\&quot;a-icon a-icon-alert\\&quot;&gt;&lt;\\/i&gt;&lt;div class=\\&quot;a-alert-content\\&quot;&gt;\\n    &lt;\\/div&gt;&lt;\\/div&gt;&lt;\\/div&gt;\\n    &lt;div id=\\&quot;kindle_redeem_promo_message_content_error\\&quot; class=\\&quot;a-box a-alert a-alert-error a-spacing-mini a-spacing-top-mini\\&quot; aria-live=\\&quot;assertive\\&quot; role=\\&quot;alert\\&quot;&gt;&lt;div class=\\&quot;a-box-inner a-alert-container\\&quot;&gt;&lt;i class=\\&quot;a-icon a-icon-alert\\&quot;&gt;&lt;\\/i&gt;&lt;div class=\\&quot;a-alert-content\\&quot;&gt;\\n    &lt;\\/div&gt;&lt;\\/div&gt;&lt;\\/div&gt;\\n    &lt;div id=\\&quot;kindle_redeem_promo_message_content_info\\&quot; class=\\&quot;a-box a-alert a-alert-info a-spacing-mini a-spacing-top-mini\\&quot;&gt;&lt;div class=\\&quot;a-box-inner a-alert-container\\&quot;&gt;&lt;i class=\\&quot;a-icon a-icon-alert\\&quot;&gt;&lt;\\/i&gt;&lt;div class=\\&quot;a-alert-content\\&quot;&gt;\\n    &lt;\\/div&gt;&lt;\\/div&gt;&lt;\\/div&gt;\\n&lt;\\/div&gt;\\n\\n\\n&lt;div id=\\&quot;kindle_promo_details_holder\\&quot; class=\\&quot;a-section\\&quot;&gt;\\n    &lt;div class=\\&quot;a-section kindle_promo_details_text template hidden\\&quot;&gt;\\n        &lt;p class=\\&quot;a-spacing-none a-spacing-top-micro\\&quot;&gt;\\n            Dieses Produkt ist im Rahmen dieser Promotion erhältlich: \\n        &lt;\\/p&gt;\\n        &lt;p class=\\&quot;a-spacing-none a-spacing-top-micro kindle_promo_details_promo_name\\&quot;&gt;\\n        &lt;\\/p&gt;\\n    &lt;\\/div&gt;\\n&lt;\\/div&gt;\\n\\n\\n&lt;p id=\\&quot;kindle_promo_multiple_promo_footer\\&quot;&gt;\\n    Einige Angebote können miteinander kombiniert werden, andere nicht. Für mehr Details lesen Sie bitte die Nutzungsbedingungen der jeweiligen Promotion.\\n&lt;\\/p&gt;\\n            &lt;\\/div&gt;&quot;}">
                    
                        
	                    
	                        <p class="a-text-center a-size-small">
	                            <a class="a-link-normal" href="#">
	                                Geben Sie einen Promotionscode oder einen Geschenkgutschein ein
	                            </a>
	                        </p>
	                    
                    
                    </span>
                
                
            
        
    </div>


	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>






        
    
        
        

        










    
    
     
         
         
             <div id="tellAFriendBylineBox_feature_div" class="feature" data-feature-name="tellAFriendBylineBox">
         
     




    

    
    
    
        
            
                
	                
	                
	                	






    
        
        
        
        
        
        
        

        

        <div id="tell-a-friend-byline" data-close="Schließen" data-dest data-title="Diese Artikel empfehlen" class="a-section a-text-center a-spacing-small">
            
            
            
            
                
                    
                    
                    




    <a id="swfMailTo" class="a-link-normal email" title="Per E-Mail teilen" href="mailto:?body=Ich%20m%C3%B6chte%20dieses%20Produkt%20bei%20Amazon.de%20empfehlen%0A%0ADie%20Argonauten%0Avon%20Amazon%20Media%20EU%20%20S.%C3%A0%20r.l.%0AErfahren%20Sie%20mehr%3A%20https%3A%2F%2Fwww.amazon.de%2Fdp%2FB071FCV5KW%2Fref%3Dcm_sw_em_r_mt_dp_U_7q6kCb7W1R2BG&subject=Ich%20m%C3%B6chte%20dieses%20Produkt%20auf%20Amazon%20empfehlen">Teilen</a><span class="a-letter-space"></span>

<a id="swfImageMailTo" class="a-link-normal email" title="Per E-Mail teilen" href="mailto:?body=Ich%20m%C3%B6chte%20dieses%20Produkt%20bei%20Amazon.de%20empfehlen%0A%0ADie%20Argonauten%0Avon%20Amazon%20Media%20EU%20%20S.%C3%A0%20r.l.%0AErfahren%20Sie%20mehr%3A%20https%3A%2F%2Fwww.amazon.de%2Fdp%2FB071FCV5KW%2Fref%3Dcm_sw_em_r_mt_dp_U_7q6kCb7W1R2BG&subject=Ich%20m%C3%B6chte%20dieses%20Produkt%20auf%20Amazon%20empfehlen"><i class="a-icon a-icon-share-email"></i></a><span class="a-letter-space"></span>

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
            collectMetrics('dp_U_7q6kCb7W1R2BG');
    });
});
</script>
                
                
            

            
                
                
                    
                    
                        
                        
                            
                            <a data-height="400" class="a-link-normal swf-social-site" target="_blank" rel="noopener" title="Facebook" href="/gp/redirect.html/ref=cm_sw_cl_fa_dp_U_7q6kCb7W1R2BG?_encoding=UTF8&amp;location=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fshare%3F_encoding%3DUTF8%26display%3Dpopup%26href%3Dhttps%253A%252F%252Fwww.amazon.de%252Fdp%252FB071FCV5KW%252Fref%253Dcm_sw_r_fa_dp_U_7q6kCb7W1R2BG%26redirect_uri%3Dhttps%253A%252F%252Fwww.amazon.de%252Fgp%252Fpdp%252Ftaf%252Ffb_post_redirect.html%252Fref%253Dcm_sw_s_fa_dp_U_7q6kCb7W1R2BG%26app_id%3D164734381262%26hashtag%3D%2523Amazon&amp;token=1C9B9E4F8D8DB8B03C93DE398A4F0B019DC7FBF9"><i class="a-icon a-icon-share-facebook" aria-label="Facebook"><span class="a-icon-alt">Facebook</span></i></a><span class="a-letter-space"></span>
                        
                    
                
            
                
                
                    
                    
                        
                        
                            
                            <a data-height="400" class="a-link-normal swf-social-site" target="_blank" rel="noopener" title="Twitter" href="/gp/redirect.html/ref=cm_sw_cl_tw_dp_U_7q6kCb7W1R2BG?_encoding=UTF8&amp;location=https%3A%2F%2Ftwitter.com%2Fintent%2Ftweet%3Foriginal_referer%3Dhttps%25253A%25252F%25252Fwww.amazon.de%25252Fgp%25252Fproduct%25252FB071FCV5KW%25252Fref%25253Dcm_sw_r_tw_dp_U_x_7q6kCb7W1R2BG%26text%3DDie%2520Argonauten%2520von%2520Maggie%2520Nelson%26related%3Damazondeals%252Camazonmp3%26url%3Dhttps%253A%252F%252Fwww.amazon.de%252Fdp%252FB071FCV5KW%252Fref%253Dcm_sw_r_tw_dp_U_x_7q6kCb7W1R2BG%26via%3Damazon&amp;token=38B8E51B9D9FCB984BFEF574BA1885A53F444E3A"><i class="a-icon a-icon-share-twitter" aria-label="Twitter"><span class="a-icon-alt">Twitter</span></i></a><span class="a-letter-space"></span>
                        
                    
                
            
                
                
                    
                    
                        
                        
                            
                            <a data-height="570" class="a-link-normal swf-social-site" target="_blank" rel="noopener" title="Pinterest" href="/gp/redirect.html/ref=cm_sw_cl_pi_dp_U_7q6kCb7W1R2BG?_encoding=UTF8&amp;location=https%3A%2F%2Fpinterest.com%2Fpin%2Fcreate%2Fbutton%3Furl%3Dhttps%253A%252F%252Fwww.amazon.de%252Fdp%252FB071FCV5KW%252Fref%253Dcm_sw_r_pi_dp_U_x_7q6kCb7W1R2BG%26title%3DDie%2520Argonauten%2520von%2520Maggie%2520Nelson%26description%3DDie%2520Argonauten%2520von%2520Maggie%2520Nelson%2520https%253A%252F%252Fwww.amazon.de%252Fdp%252FB071FCV5KW%252Fref%253Dcm_sw_r_pi_dp_U_x_7q6kCb7W1R2BG%26media%3Dhttps%253A%252F%252Fimages-na.ssl-images-amazon.com%252Fimages%252FI%252F514U2LyjJHL.jpg&amp;token=6F18773FE7227F68D71CB5DC969E6ADE1FB3345F"><i class="a-icon a-icon-share-pinterest" aria-label="Pinterest"><span class="a-icon-alt">Pinterest</span></i></a><span class="a-letter-space"></span>
                        
                    
                
            

            
                <span class="a-declarative" data-action="a-modal" data-a-modal="{&quot;padding&quot;:&quot;none&quot;,&quot;cache&quot;:&quot;false&quot;,&quot;width&quot;:&quot;832&quot;,&quot;name&quot;:&quot;kpModal&quot;,&quot;header&quot;:&quot;Empfehlen Sie eine kostenlose Kindle-Buchvorschau oder binden Sie diese ein&quot;,&quot;popoverLabel&quot;:&quot;Empfehlen Sie eine kostenlose Kindle-Buchvorschau oder binden Sie diese ein&quot;,&quot;url&quot;:&quot;https://lesen.amazon.de/kp/taf/modal?asin=B071FCV5KW&amp;websiteDisplayGroup=ebooks_display_on_website&amp;placementId=7q6kCb7W1R2BG&amp;language=de_DE&quot;,&quot;height&quot;:&quot;664&quot;}">
                    <a class="a-link-normal" title="Eine Vorschau dieses Buches einbetten" href="#">&lt;Einbetten&gt;</a>
                </span>
            

            
        </div>

        <script type="text/javascript">
            P.when("A","jQuery", "a-modal").execute(function(A,$,modal) {
                var taf = $("#tell-a-friend-byline");
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
                    if (hashValue != "" &&  hashIndex > -1) {
                        $("#swfText").click();
                        window.location.hash = window.location.hash.replace(swfHashValue, "");
                    }
                });

                A.ajax("/gp/pdp/taf/ajax/updateEmailHeader.html", {
                    method: 'get',
                    params: {
                        asin: 'B071FCV5KW'
                    },
                    success: function(kindlePreviewData) {
                        if (kindlePreviewData.isReadable) {
                            var popover = modal.get(A.$("#swf-dp"));
                            if (popover) {
                                popover.update({
                                    "header": ""
                                });
                            }
                        }
                    }
                });

            });
        </script>

        <style type="text/css">
            #tell-a-friend-byline .swf-social-site {
                outline: none;
            }
        </style>

        
    
    


	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>






        
    
        
        

        










    
    
     
         
         
             <div id="kcpApp_feature_div" class="feature" data-feature-name="kcpApp">
         
     




    

    
    
    
        
            
                
	                
	                
	                	



    
    
    
    
    
        
        
            <div id="udpkcpAppAd" class="a-section">
                <span class="kcpAppBaseBox_">
                    <span class="kcpAppsPopOver">
                        <div>
                            <img alt="Anzeige für Kindle-App" src="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2015/UDP_KCP_Ad_w_border._CB273392912_.png" id="udpKcpAppAdImage" data-a-hires="https://images-na.ssl-images-amazon.com/images/G/03/kindle/dp/2015/UDP_KCP_Ad_w_border_2x._CB273393127_.png" data-a-manual-replacement="true">
                        </div>
                    </span>
                </span>
            </div>
        
    

    
        
        <style type="text/css">
            #udpComiXologyAd_box {
                text-align: center;
            }
        </style>

        <script type="text/javascript">
            P.when('A', 'jQuery').execute(function (A, $) {
                A.ajax('/gp/digital/fiona/ajax/reftagCall.html/ref=kcpapp_udp_T2load', {
                    method: 'get',
                    cache: false,
                });
            });
        </script>
    



	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>






        
    
        
        

        










    
    
     
         
         
             <div id="amsDetailRightEBook_feature_div" class="feature" data-feature-name="amsDetailRightEBook">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>






        
    
</div>

<div id="leftCol">
    
        
        

        










    
    
     
         
         
             <div id="imageBlockNew_feature_div" class="feature" data-feature-name="imageBlockNew">
         
     




    

    
    
    
        
            
                
	                
	                
	                	




    
    
    
    
    
    

    
    

    <div id="ebooksImageBlockOuter" class="a-row">

        
        
            





    <div id="ebooksSitbLogo" style="width: 117px; height:19px;">
        
            
            
                
                    <img alt="Einen Blick in das Buch werfen." src="https://images-na.ssl-images-amazon.com/images/G/03/digital/sitb/sticker/sitb-sticker-v3-xsmall._CB338481004_.png" class="a-hidden litb-on-click" id="ebooksSitbLogoImg">
                
            
        
    </div>


        

        
        

        
        <div id="ebooksImageBlock" class="a-row">
            






    
        
        
        
            
                
                
                    
                
            
        
    
    
    <div id="ebooksImageBlockContainer" class="a-row a-grid-vertical-align a-grid-center maintain-height">
        <div id="ebooks-main-image-container" class="a-column a-span12 a-text-center maintain-height a-span-last">
            <div id="ebooks-img-wrapper" class="a-section maintain-height">
                <div id="ebooks-img-canvas" class="a-section">
                    
                    
                        
                        
                        
                            <img alt="Die Argonauten von [Nelson, Maggie]" src="https://images-eu.ssl-images-amazon.com/images/I/514U2LyjJHL._SY346_.jpg" onload="this.onload='';setCSMReq('af');" data-a-image-name="ebooksImageBlockFront" class="a-dynamic-image frontImage" id="ebooksImgBlkFront" width="212px" data-a-dynamic-image="{&quot;https://images-eu.ssl-images-amazon.com/images/I/514U2LyjJHL.jpg&quot;:[306,500],&quot;https://images-eu.ssl-images-amazon.com/images/I/514U2LyjJHL._SY346_.jpg&quot;:[212,346]}" data-a-manual-replacement="true">
                        
                    
                </div>
            </div>
        </div>
    </div>

        </div>
        


<script type="text/javascript">
    (function(){
        var insertCenterColStyle = function(width) {
            var totalWidth = width + 40,
                style = document.createElement('style'),
                head = document.getElementsByTagName('head')[0],
                css = '#centerCol.centerColumn{margin-left:' + totalWidth + 'px !important;}';

            style.type = 'text/css';
            if(style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }
            head.appendChild(style);
        };

        var maintainWidth = function() {
            var w = window.innerWidth || document.body.offsetWidth;
            if(w < 1150) {
                var containerWidth = 200,
                    containerHeight = containerWidth / 0.75,
                    leftCol = document.getElementById("leftCol"),
                    imageBlockId = "ebooksImageBlock",
                    imageBlock = document.getElementById(imageBlockId),
                    imageBlockContainer = document.getElementById("ebooksImageBlockContainer"),
                    frontImage = document.getElementById("ebooksImgBlkFront"),
                    imageCanvas = document.getElementById("ebooks-img-canvas");

                leftCol.style.width = containerWidth + "px";
                imageBlock.style.width = containerWidth + "px";
                imageBlock.style.height = containerHeight + 15 + "px";
                imageBlockContainer.style.height = containerHeight + "px";
                imageCanvas.style.height = containerHeight + "px";
                imageCanvas.style.width = containerWidth + "px";
                frontImage.style.height = containerHeight + "px";
                frontImage.style.width = containerWidth + "px";
                frontImage.style.overflow = "hidden";
            }
            insertCenterColStyle(containerWidth);
        };
        maintainWidth();
    })();

    P.when('A', 'atf').register("ebooksImageBlockATF", function(A) {
        var data = {
            'litbData' : {
                'hasLitb' : true,
                'litbReftag' : "dbs_P_R_litb_stkr",
                'litbReaderUrl' : ""
            },
            'windowWidthThreshold' : 1150,
            'configWidths' : [200, 260],
            'holderRatio' : 0.75,
            'containerMargin' : 15,
            'frontImageWidth' : 212,
            'frontImageHeight' : 346,
            'frontImageAspectRatio' : 0.6127167630057804,
            'centerColMargin' : 40,
            'hasAnimatedCoverImage' : false,
            'hasCoverImageInlineVideo' : false,
            
        };
        return data;
    });
</script>


        
        




        
        
        
    </div>


	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>






        
    
        
        

        










    
    
     
         
         
             <div id="AudibleSamplePlayer" class="feature" data-feature-name="AudibleSamplePlayer">
         
     




    

    
    
    
        
        
        
        
    	    
                







    	    
        
        
        
        
    
    
    

    















    </div>






        
    
        
        

        










    
    
     
         
         
             <div id="authorFollow_feature_div" class="feature" data-feature-name="authorFollow">
         
     




    

    
    
    
        
            
                
	                
	                
	                	





    <hr class="a-divider-normal">
    
    
        <h1 id="authorFollowHeading" class="a-size-base a-spacing-small a-text-bold">
            Dem Autor folgen
        </h1>
    
    
    
    
    
        
            
            <div class="a-row a-spacing-top-small">
                <div class="a-column a-span3">
                    <div class="a-section smallAuthorImageContainer">
                        <a class="a-link-normal a-text-normal" href="/Maggie-Nelson/e/B001JOTRXW?ref=dbs_p_ebk_r00_abau_000000">
                            <img alt="" src="https://images-na.ssl-images-amazon.com/images/I/51Dh3sDrnGL._SY600_.jpg" class="smallAuthorImage">
                        </a>
                    </div>
                </div>
                <div class="a-column a-span4 authorNameColumn">
                    <a class="a-size-small a-link-normal authorNameLink a-text-normal" href="/Maggie-Nelson/e/B001JOTRXW?ref=dbs_p_ebk_r00_abau_000000">
                        Maggie Nelson
                    </a>
                </div>
                <div class="a-column a-span5 a-span-last">
                    
                    
                    
                    <span class="a-declarative" data-action="a-tooltip" data-a-tooltip="{&quot;content&quot;:&quot;Erhalten Sie Updates zu Neuerscheinungen und verbesserte Empfehlungen&quot;}" id="authorBylineFollowHover">
                        <a href="javascript:void(0)" class="a-popover-trigger a-declarative">
                            <span class="a-button a-button-normal a-button-group-last a-button-width-normal author-follow-button hide below-the-cover-follow"><span class="a-button-inner"><button data-action="follow" data-authorAsin="B001JOTRXW" data-followRef="dbs_p_ebk_r00_abau_00fa00" data-followingText="✓ Folgend" data-followtext="+ Folgen" data-isSignedIn="true" data-similarAuthorsPopoverContentName="similarAuthorsPopoverContent_0" data-similarAuthorsPopoverId="similarAuthorsPopover_0" data-unfollowRef="dbs_p_ebk_r00_abau_00ua00" class="a-button-text a-text-center a-declarative" type="button">
                                + Folgen
                            </button></span></span>
                        <i class="a-icon a-icon-popover"></i></a>
                    </span>
                    
                    <div class="a-popover-preload" id="a-popover-similarAuthorsPopoverContent_0">
                        
                        
                            <h1 class="a-size-medium a-spacing-small a-text-bold">
                                Ähnliche Autoren zum Folgen
                            </h1>
                        
                        
                        
                            <div id="similarAuthorRow_0" class="a-row a-spacing-none">
                                <div class="a-column a-span2 authorImageColumn">
                                    <div class="a-section smallAuthorImageContainer">
                                        <a class="a-link-normal authorImageLink a-text-normal" href="#">
                                            <img alt="" src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel._V192234675_.gif" class="smallAuthorImage">
                                        </a>
                                    </div>
                                </div>
                                <div class="a-column a-span8 similarAuthorNameColumn">
                                    <a class="a-size-small a-link-normal similarAuthorNameLink a-text-normal" href="#">
                                    </a>
                                    <div class="a-section inlineBibliography">
                                    </div>
                                </div>
                                <div class="a-column a-span2 authorFollowColumn a-span-last">
                                    <span class="a-button a-button-normal a-button-group-last a-button-width-normal author-follow-button similarAuthorsFollow"><span class="a-button-inner"><button data-action="follow" data-followtext="+" data-isSignedIn="true" class="a-button-text a-text-center a-declarative" type="button"> +
                                    </button></span></span>
                                </div>
                            </div>
                            <hr class="a-divider-normal">
                        
                            <div id="similarAuthorRow_1" class="a-row a-spacing-none">
                                <div class="a-column a-span2 authorImageColumn">
                                    <div class="a-section smallAuthorImageContainer">
                                        <a class="a-link-normal authorImageLink a-text-normal" href="#">
                                            <img alt="" src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel._V192234675_.gif" class="smallAuthorImage">
                                        </a>
                                    </div>
                                </div>
                                <div class="a-column a-span8 similarAuthorNameColumn">
                                    <a class="a-size-small a-link-normal similarAuthorNameLink a-text-normal" href="#">
                                    </a>
                                    <div class="a-section inlineBibliography">
                                    </div>
                                </div>
                                <div class="a-column a-span2 authorFollowColumn a-span-last">
                                    <span class="a-button a-button-normal a-button-group-last a-button-width-normal author-follow-button similarAuthorsFollow"><span class="a-button-inner"><button data-action="follow" data-followtext="+" data-isSignedIn="true" class="a-button-text a-text-center a-declarative" type="button"> +
                                    </button></span></span>
                                </div>
                            </div>
                            <hr class="a-divider-normal">
                        
                            <div id="similarAuthorRow_2" class="a-row a-spacing-none">
                                <div class="a-column a-span2 authorImageColumn">
                                    <div class="a-section smallAuthorImageContainer">
                                        <a class="a-link-normal authorImageLink a-text-normal" href="#">
                                            <img alt="" src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel._V192234675_.gif" class="smallAuthorImage">
                                        </a>
                                    </div>
                                </div>
                                <div class="a-column a-span8 similarAuthorNameColumn">
                                    <a class="a-size-small a-link-normal similarAuthorNameLink a-text-normal" href="#">
                                    </a>
                                    <div class="a-section inlineBibliography">
                                    </div>
                                </div>
                                <div class="a-column a-span2 authorFollowColumn a-span-last">
                                    <span class="a-button a-button-normal a-button-group-last a-button-width-normal author-follow-button similarAuthorsFollow"><span class="a-button-inner"><button data-action="follow" data-followtext="+" data-isSignedIn="true" class="a-button-text a-text-center a-declarative" type="button"> +
                                    </button></span></span>
                                </div>
                            </div>
                            <hr class="a-divider-normal">
                        
                        
                        
                            <a class="a-link-emphasis seeMoreRecsLink" href="/gp/profile/follow/recommendations/?ref=dbs_p_ebk_r00_abau_000000">
                                Weitere Empfehlungen
                            </a>
                        
                    </div>
                    
                    
                    
                    
                    
                    
                    <span class="a-declarative" data-action="a-popover" data-a-popover="{&quot;activate&quot;:&quot;onclick&quot;,&quot;name&quot;:&quot;similarAuthorsPopoverContent_0&quot;,&quot;width&quot;:&quot;343&quot;,&quot;position&quot;:&quot;triggerRight&quot;,&quot;height&quot;:&quot;330&quot;}" id="similarAuthorsPopover_0">
                    </span>
                </div>
            </div>
        
    
        
    

    <script type="text/javascript">(function(f) {f(window.P._namespace("desktopAuthorFollow"));}(function(P) {
        P.when("followButtonJS").execute(function (result) {
            if (typeof result !== 'undefined' && typeof result.enableFollowButtons !== 'undefined') {
                result.enableFollowButtons();
            }
        });
    }));</script>

    
    <input type="hidden" name="followErrorPopoverTrigger" id="followErrorPopoverTrigger">
    <div class="a-popover-preload" id="a-popover-followErrorPopover">
        <span>Etwas ist schiefgegangen. Wiederholen Sie die Anforderung später noch einmal.</span>
        <p class="a-text-center">
            <span id="followErrorClose" class="a-button"><span class="a-button-inner"><input data-action="closeErrorDialog" class="a-button-input a-declarative" type="submit" aria-labelledby="followErrorClose-announce"><span id="followErrorClose-announce" class="a-button-text" aria-hidden="true">
                OK
            </span></span></span>
        </p>
    </div>
    <br>


	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>






        
    
</div>
<div id="centerCol" class="centerColumn">
    
        
        

        










    
    
     
         
         
             <div id="booksTitle" class="feature" data-feature-name="booksTitle">
         
     




    

    
    
    
        
        
        
        
    	    
                












    <div class="a-section a-spacing-none">
        <h1 id="title" class="a-size-large a-spacing-none">
            <span id="ebooksProductTitle" class="a-size-extra-large">Die Argonauten</span>

            
            

            

            

            

            

            <span class="a-size-large a-color-secondary a-text-normal">
                                    Kindle Edition
                                </span>

            
            
        </h1>
    </div>

    
        
            




    
        <div id="bylineInfo" class="a-section a-spacing-micro bylineHidden feature">
            
            
            
                
                
                    
                    
                    von
	
    
    
        
        
        
        
        	
        	
    	

		
		
			<span class="author notFaded" data-width="">
		

		
		
			
			
				
				
				
				

				
				
				
				
			        
				
				
				
				
				<div class="a-popover-preload" id="a-popover-contributor-info-B001JOTRXW">
				<div class="a-section">
					<table class="a-normal">
						<tr>
							<td id="contributorImageContainerB001JOTRXW"></td>
							
							
							
							<script type="a-state" data-a-state="{&quot;key&quot;:&quot;popoverImage-state&quot;}">{"isAjaxInProgress_B001JOTRXW":"0","isAjaxComplete_B001JOTRXW":"0"}</script>
							
							
							
							<td class="a-size-base">
								<div class="a-row">
									<span class="a-size-medium">Maggie Nelson
									 
									<span class="a-color-secondary">(Autor)</span>
									
									</span>
								</div>
								<div class="a-row">
									<span class="a-text-bold">&#8250; </span><a class="a-link-normal" href="/Maggie-Nelson/e/B001JOTRXW/ref=dp_byline_cont_pop_ebooks_1">Entdecken Sie Maggie Nelson bei Amazon</a>
								</div>
								<div class="a-row a-spacing-base">
                                                                    Finden Sie alle Bücher, Informationen zum Autor<br/> und mehr.
								</div>
								<div class="a-row">
									<span class="a-size-small">Siehe <a class="a-link-normal" href="/s/ref=dp_byline_sr_pop_ebooks_1?ie=UTF8&amp;field-author=Maggie+Nelson&amp;search-alias=digital-text&amp;text=Maggie+Nelson&amp;sort=relevancerank">Suchergebnisse</a> für diesen Autor</span>
								</div>
								
									<div class="a-row">
										<span class="a-size-small">
                                                                                    Sind Sie ein Autor?
											<a class="a-link-normal" href="https://authorcentral.amazon.de/ref=ntt_atc_dp_pel_1">Erfahren Sie mehr über Author Central</a>
										</span>
									</div>
								
							</td>
						</tr>
					</table>
				</div>
				</div>
				<span class="a-declarative" data-action="a-popover" data-a-popover="{&quot;closeButtonLabel&quot;:&quot;Autor-Dialog Popover schließen&quot;,&quot;name&quot;:&quot;contributor-info-B001JOTRXW&quot;,&quot;position&quot;:&quot;triggerBottom&quot;,&quot;popoverLabel&quot;:&quot;Autor-Dialog Popover&quot;,&quot;allowLinkDefault&quot;:&quot;true&quot;}">
					<a data-asin="B001JOTRXW" class="a-link-normal contributorNameID" href="/Maggie-Nelson/e/B001JOTRXW/ref=dp_byline_cont_ebooks_1">Maggie Nelson</a>
					<a href="javascript:void(0)" class="a-popover-trigger a-declarative"><i class="a-icon a-icon-popover"></i></a>
				</span>
			
			
			
		
		
		
       	 
       		<span class="contribution" spacing="none">
       			<span class="a-color-secondary">(Autor), </span>
       		</span>
       	
    	</span>
	
        
        
        
            
        
        
        	
        	
    	

		
		
			<span class="author notFaded" data-width="">
		

		
		
			
			
			
				<a class="a-link-normal" href="/s/ref=dp_byline_sr_ebooks_2?ie=UTF8&amp;field-author=Jan+Wilm&amp;search-alias=digital-text&amp;text=Jan+Wilm&amp;sort=relevancerank">Jan Wilm</a> 
			
			
		
		
		
       	 
       		<span class="contribution" spacing="none">
       			<span class="a-color-secondary">(Übersetzer)</span>
       		</span>
       	
    	</span>
                    
                
            
                
                
            
        </div>
    


        
        
    




    <style type="text/css">
        #a-page h2 {
            font-weight: normal;
        }

        .xrayBullet {
            float: left;
        }

        .xrayInfo {
            margin-left: 8px;
        }
    </style>


    	    
        
        
        
        
    
    
    

    















    </div>






        
    
        
        

        










    
    
     
         
         
             <div id="cmrsSummary_feature_div" class="feature" data-feature-name="cmrsSummary">
         
     




    

    
    
    
        
            
                
	                
	                
	                	







	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>






        
    
        
        

        










    
    
     
         
         
             <div id="reviewFeatureGroup" class="feature" data-feature-name="reviewFeatureGroup">
         
     




    

    
    
    
        
        
        
        
    	    
                


<table class="a-normal a-spacing-mini">
    <tr>
        
        <td class="a-span4">
            




<style type="text/css">
    /* 
    * Fix for UDP-1061. Average customer reviews has a small extra line on hover 
    * https://omni-grok.amazon.com/xref/src/appgroup/websiteTemplates/retail/SoftlinesDetailPageAssets/udp-intl-lock/src/legacy.css?indexName=WebsiteTemplates#40
    */
    .noUnderline a:hover { 
        text-decoration: none; 
    }
</style>



    
    
    
    
        

        

        
        
        
        
		
		
		
		
		        
		
		
		
		
		
		
		
		        
        

        <div id="averageCustomerReviews" class="a-spacing-none" data-asin="B071FCV5KW" data-ref="dpx_acr_pop_" >
            
            
            
                
                
                    










        <span class="a-declarative" data-action="acrStarsLink-click-metrics" data-acrStarsLink-click-metrics="{}">
            





    <span id="acrPopover" class="reviewCountTextLinkedHistogram noUnderline" title="3.0 von 5 Sternen">
        <span class="a-declarative" data-action="a-popover" data-a-popover="{&quot;max-width&quot;:&quot;700&quot;,&quot;closeButton&quot;:&quot;false&quot;,&quot;position&quot;:&quot;triggerBottom&quot;,&quot;url&quot;:&quot;/gp/customer-reviews/widgets/average-customer-review/popover/ref=dpx_acr_pop_?contextId=dpx&amp;asin=B071FCV5KW&quot;}">
            <a href="javascript:void(0)" class="a-popover-trigger a-declarative">
                

<i class="a-icon a-icon-star a-star-3"><span class="a-icon-alt">3.0 von 5 Sternen</span></i>
                
            <i class="a-icon a-icon-popover"></i></a>
        </span>
        <span class="a-letter-space"></span>
    </span>


        </span>
        <span class="a-letter-space"></span>
        
        

        

        

        
        
        
        
        
        
        
            
            
                <span class="a-declarative" data-action="acrLink-click-metrics" data-acrLink-click-metrics="{}">
                    <a id="acrCustomerReviewLink" class="a-link-normal" href="#customerReviews">
                        <span id="acrCustomerReviewText" class="a-size-base">1 Kundenrezension</span>
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
    


        </td>

        
        <td class="a-span4">
            




        </td>
    </tr>
</table>


    	    
        
        
        
        
    
    
    

    















    </div>






        
    
        
        

        










    
    
     
         
         
             <div id="zeitgeistBadge_feature_div" class="feature" data-feature-name="zeitgeistBadge">
         
     




    

    
    
    
        
            
                
	                
	                
	                	






	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>






        
    
        
        

        













    

    
    
    
        
        
        
        
        
        	
        		
        		
					<hr/>
        		
        	
        
        
        
    
    
    

    




















        
    
        
        

        










    
    
     
         
         
             <div id="pottermore_feature_div" class="feature" data-feature-name="pottermore">
         
     




    

    
    
    
        
            
                
	                
	                
	                	




	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>






        
    
        
        

        










    
    
     
         
         
             <div id="MediaMatrix" class="feature" data-feature-name="MediaMatrix">
         
     




    

    
    
    
        
        
        
        
    	    
                



   
      
      
      
         
            
               
                  
               
         
      
   

	 
      <div id="formats" class="a-section a-spacing-large responsive"><a class="a-link-expander a-spacing-top-micro a-spacing-small a-size-small">
    
    
        
            <i id="formatsIcon" class="a-icon a-icon-arrow"></i>
        
        
    
    <span id="showMoreFormatsPrompt" class="tmmShowPrompt" >Alle 2 Formate und Ausgaben anzeigen</span>
    <span id="hideMoreFormatsPrompt" class="tmmHidePrompt">Andere Formate und Ausgaben ausblenden</span>
</a>








    
    


    
        

    
        







<div id="twister" class="a-section a-spacing-base a-spacing-top-small a-size-mini">    

  
    



<!-- 
    This file is just a replica of table-aiv present in mediaMatrixtemplate package.
    This has just been picked up and moved and there has not been addition/modification/removal
    of any logic here .
 -->
 




  

  


    

  
  












    
    <table class="a-normal a-spacing-none title">
      <tr>
        <td class="dp-title-col">
            
        </td>

            
        
        <td class="a-color-secondary a-text-right dp-price-col">
       		 <div class="a-fixed-right-grid"><div class="a-fixed-right-grid-inner" style="padding-right:50px">
                <div class="a-fixed-right-grid-col a-col-left" style="padding-right:2.5%;float:left;">
                     Preis
                </div>
                <div class="a-fixed-right-grid-col a-col-right" style="width:50px;margin-right:-50px;float:left;"></div>
            </div></div>
        </td>
        
            <td class="a-color-secondary a-text-right dp-new-col">
              Neu ab
            </td>
        
        
            <td class="a-color-secondary a-text-right dp-used-col">
              Gebraucht ab
            </td>
        
        
      </tr>
    </table>
    

    
    
      
          
          
      
      
          
          
          
          
                 
          
          
            
              
              














    
      
    
    






  
    
	  
	  
	  
     
  
  


<div class="hr selected-row"></div>
<div class="top-level selected-row">
<span class="a-declarative" data-action="tmm-see-more-editions-click" data-tmm-see-more-editions-click="{&quot;metabindingPlaceHolder&quot;:1,&quot;metabindingPlaceHolderState&quot;:&quot;0&quot;,&quot;metabindingUrl&quot;:&quot;#&quot;}" id="declarative_1">
<table class="a-normal a-spacing-none">
    <tr>
        <td class="dp-title-col">
        
        <!-- Do not show expander when DVD_redesign weblab is in treatment -->
        
            
            
            
                <a class="empty-expander title-expander" style="vertical-align:middle;">
                    <span class="metabinding-expander"></span>
                </a>
            
            
          
            
                
                    
                        <span class="title-text">
                            <span class="a-size-small a-color-base">Kindle</span>
                            <span id="tmmSpinnerDiv_1" style="display: none" class="tmmAjaxLoading"></span>
                            
                        </span>
                    
                    
                
            
            <span id="tmmErrorDiv_1" class="tmmErrorClass displayNone">
                <div class="a-box a-alert-inline a-alert-inline-error" aria-live="assertive" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">
                    <span>"Bitte wiederholen"</span>
                </div></div></div>
            </span>
        </td>


         
        
        
        
	        
	        
	        
	        
        

        
        <td class="a-text-right dp-price-col">
            <div class="a-fixed-right-grid"><div class="a-fixed-right-grid-inner" style="padding-right:50px">
                <div class="a-fixed-right-grid-col a-col-left" style="padding-right:2.5%;float:left;">
                     
                         
                         
                             
                                 
                                     
                                     
                                     <span class="a-size-small a-color-price">EUR 15,99 </span>
                                 
                                 
                             
                         
                         
                         
                          
                </div>
                <div class="a-fixed-right-grid-col a-col-right" style="width:50px;margin-right:-50px;float:left;">
                    
                         
                        
                    
                </div>
            </div></div>
        </td>

        
          
          
          
                
                    
                    
                        <td class="a-color-tertiary a-text-right dp-new-col">
                            &mdash;
                        </td>
                    
                
            
            
                
                    
                    
                        <td class="a-color-tertiary a-text-right dp-used-col">
                            &mdash;
                        </td>
                    
                
            
            
          
        
    </tr>

    
</table>
</span>
</div>


              <div id="metabinding_row_top_1" class="second-level"></div>
              <div id="metabinding_row_bottom_1" class="second-level"></div>
            
            
          
        
      
          
          
      
      
          
          
          
          
                 
          
          
            
            
              
              














    
    
      
    






  
     
  
  


<div class="hr unselected-row"></div>
<div class="top-level unselected-row">
<span class="a-declarative" data-action="tmm-see-more-editions-click" data-tmm-see-more-editions-click="{&quot;metabindingPlaceHolder&quot;:2,&quot;metabindingPlaceHolderState&quot;:&quot;0&quot;,&quot;metabindingUrl&quot;:&quot;/Die-Argonauten-Maggie-Nelson/dp/3446257071/ref=tmm_hrd_title_0?_encoding=UTF8&amp;amp;qid=&amp;amp;sr=&quot;}" id="declarative_2">
<table class="a-normal a-spacing-none">
    <tr>
        <td class="dp-title-col">
        
        <!-- Do not show expander when DVD_redesign weblab is in treatment -->
        
            
            
            
                <a class="empty-expander title-expander" style="vertical-align:middle;">
                    <span class="metabinding-expander"></span>
                </a>
            
            
          
            
                
                    
                    
                        <a href="/Die-Argonauten-Maggie-Nelson/dp/3446257071/ref=tmm_hrd_title_0?_encoding=UTF8&amp;qid=&amp;sr=" class="title-text">
                            <span class="a-size-small a-color-base">Gebundenes Buch</span>
                            <span id="tmmSpinnerDiv_2" style="display: none" class="tmmAjaxLoading"></span>
                            
                            
                        </a>
                        
                   
                
            
            <span id="tmmErrorDiv_2" class="tmmErrorClass displayNone">
                <div class="a-box a-alert-inline a-alert-inline-error" aria-live="assertive" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">
                    <span>"Bitte wiederholen"</span>
                </div></div></div>
            </span>
        </td>


         
        
        
        
	        
	        
	        
	        
        

        
        <td class="a-text-right dp-price-col">
            <div class="a-fixed-right-grid"><div class="a-fixed-right-grid-inner" style="padding-right:50px">
                <div class="a-fixed-right-grid-col a-col-left" style="padding-right:2.5%;float:left;">
                     
                         
                         
                             
                                 
                                 
                                     <a class="a-link-normal" href="/Die-Argonauten-Maggie-Nelson/dp/3446257071/ref=tmm_hrd_title_0?_encoding=UTF8&amp;qid=&amp;sr=">
                                         
                                         
                                         





                                         <span class="a-size-small a-color-price">EUR 20,00 </span>
                                     </a>
                                 
                             
                         
                         
                         
                          
                </div>
                <div class="a-fixed-right-grid-col a-col-right" style="width:50px;margin-right:-50px;float:left;">
                    
                         
                        
                            <i class="a-icon a-icon-prime a-icon-small"></i>
                        
                    
                </div>
            </div></div>
        </td>

        
          
          
          
                
                    
                        <td class="a-text-right dp-new-col">
                          <a class="a-link-normal" href="/gp/offer-listing/3446257071/ref=tmm_hrd_new_olp_0?ie=UTF8&amp;condition=new&amp;qid=&amp;sr=">
                              <span>EUR 20,00</span>
                          </a>
                        </td>
                    
                    
                
            
            
                
                    
                        <td class="a-text-right dp-used-col">
                           <a class="a-link-normal" href="/gp/offer-listing/3446257071/ref=tmm_hrd_used_olp_0?ie=UTF8&amp;condition=used&amp;qid=&amp;sr=">
                               <span>EUR 15,30</span>
                           </a>
                        </td>
                    
                    
                
            
            
          
        
    </tr>

    
</table>
</span>
</div>


              <div id="metabinding_row_top_2" class="second-level"></div>
              
              <div id="metabinding_row_bottom_2" class="second-level"></div>
            
          
        
      
      <script type="a-state" data-a-state="{&quot;key&quot;:&quot;mediamatrix-state&quot;}">{"url_2":"/gp/media-matrix/fetch-DPX-expansion-data.html/ref=tmm_hrd_metabinding_expansion_0?ie=UTF8&amp;tagActionCode=&amp;bindingCount=1&amp;websiteDisplayGroup=ebooks_display_on_website&amp;cor=DE&amp;storeID=&amp;qid=&amp;productTypeDefinition=ABIS_EBOOKS&amp;viewID=glance&amp;landingAsin=B071FCV5KW&amp;customerID=A96YKT37ODSSG&amp;tasParentAsin=B071P4Y46H&amp;asin=3446257071&amp;metabinding=hardcover_meta_binding&amp;metabindingIndex=2&amp;isPrime=1&amp;nodeID=&amp;sr=","isAjaxInProgress_1":"0","url_1":"/gp/media-matrix/fetch-DPX-expansion-data.html/ref=tmm_kin_metabinding_expansion_sr?ie=UTF8&amp;tagActionCode=&amp;bindingCount=1&amp;websiteDisplayGroup=ebooks_display_on_website&amp;cor=DE&amp;storeID=&amp;qid=&amp;productTypeDefinition=ABIS_EBOOKS&amp;viewID=glance&amp;landingAsin=B071FCV5KW&amp;customerID=A96YKT37ODSSG&amp;tasParentAsin=B071P4Y46H&amp;asin=B071FCV5KW&amp;metabinding=kindle_meta_binding&amp;metabindingIndex=1&amp;isPrime=1&amp;nodeID=&amp;sr=","isAjaxInProgress_2":"0","isAjaxComplete_1":"0","isAjaxComplete_2":"0"}</script>
    
    
    
    

</div>

<div id="tmmSwatches" class="a-row nonJSFormats">

  
    



<!-- This file is a replica of swatches.jsp
     The only difference we have introduced here is to use absolute paths 
     and dynamic includes
-->
<ul class="a-unordered-list a-nostyle a-button-list a-horizontal">
  
  
  
  
    
          
        
	      
            
	        
	          
	            
	            
                
	            
	              <li class="swatchElement selected"><span class="a-list-item">
	                






     







<span class="a-button a-button-selected a-spacing-mini a-button-toggle format"><span class="a-button-inner"><a href="javascript:void(0)" class="a-button-text" role="button">
  
  
    
        
      


 
<span>Kindle</span> <br>
    
    
    <span class="a-color-base">
    
      
          
        







  
    
    
    <span class="a-size-base a-color-price a-color-price">
      EUR 15,99
    </span>
    
  
  
  
    
      
      
      
        



    
      
    </span>
    
    
  
</a></span></span>






	                
	                  













<span class="tmm-olp-links">
        
</span>


	                  






















    
        
          
          
          
          
          
          
          
            
          
          
            
          
          
          
          
          
          
          
            
        
    
    


<!--
    Dispaly logic: https://w.amazon.com/bin/view/DBS/Midas/UDP_Migration/ExternalFeatures/Comixology/
-->


    <!-- Include Nfcx Message -->
    
        
        
        
            



<!-- To show the NFCX message based on bullsEyeTargetingCriteria -->


    


        
    

    
        
        
        
        
        
            <span class="a-size-mini a-color-secondary tmm-olp-links">
                
                


                <a id="kcpAppsPopOver" class="a-size-mini a-link-normal kcpAppsPopOver" href="javascript:void(0);">
                    <span class="kcpAppBaseBox_">
                        <span class="kcpAppsPopOver">
                            Lesen Sie mit unserer 
                            <span class="a-color-price a-text-bold">
                                kostenfreien App
                            </span>
                        </span>
                    </span>
                </a>
            </span>
        
    


	                  





	<span class="tmm-olp-links">
		
      		
                
                  
                    
                        
                            
                          



 



  
  
  

    
                        
                      
                    
                    
                  
                
                
		
 	</span>
 
	                  




    



	                
	              </span></li>
	            
	            
	            
                
	          
	          
	        
	      
	    
	      
            
	        
	          
	          
	            
	            
                
	            
	              <li class="swatchElement unselected"><span class="a-list-item">
	                






     







<span class="a-button a-spacing-mini a-button-toggle format"><span class="a-button-inner"><a href="/Die-Argonauten-Maggie-Nelson/dp/3446257071/ref=tmm_hrd_swatch_0?_encoding=UTF8&amp;qid=&amp;sr=" class="a-button-text" role="button">
  
  
    
        
      


 
<span>Gebundenes Buch</span> <br>
    
    
    <span class="a-color-secondary">
    
      
          
        







  
    
    
    <span class="a-size-base a-color-secondary">
      EUR 20,00
    </span>
    
  
  
  
    
      
      
      
        



    
      
    </span>
    
    
      



 
 
    <i class="a-icon a-icon-prime a-icon-small"></i>
     
    
  
</a></span></span>






	                
	                  











<span class="tmm-olp-links">
        
</span>


	                  






















    
        
    
    


<!--
    Dispaly logic: https://w.amazon.com/bin/view/DBS/Midas/UDP_Migration/ExternalFeatures/Comixology/
-->



                      





	<span class="tmm-olp-links">
		
      		
                
                  
                    
                        
                            
                          



 



  
    <span class="olp-used olp-link">
      <a class="a-size-mini a-link-normal" href="/gp/offer-listing/3446257071/ref=tmm_hrd_used_olp_0?ie=UTF8&amp;condition=used&amp;qid=&amp;sr=">
        
          2 gebraucht <span class="olp-from">ab</span> EUR 15,30
        
      </a>        
    </span>
  
  
    <span class="olp-new olp-link">
      <a class="a-size-mini a-link-normal" href="/gp/offer-listing/3446257071/ref=tmm_hrd_new_olp_0?ie=UTF8&amp;condition=new&amp;qid=&amp;sr=">
        
          34 neu <span class="olp-from">ab</span> EUR 20,00
        
      </a>        
    </span>
  
  

    
                        
                      
                    
                    
                  
                
                
		
 	</span>
 
                      




    



                    
	              </span></li>
	            
	            
	            
                
	          
	        
	      
	     
      
      
    
  
</ul>

  



</div></div>
   


    	    
        
        
        
        
    
    
    

    















    </div>






        
    
        
        

        










    
    
     
         
         
             <div id="dynamicIframe_feature_div" class="feature" data-feature-name="dynamicIframe">
         
     




    

    
    
    
        
            
                
	                
	                
	                	<script id="dynamic_iframe_CSS" type="text/undefined">
html {
    font-size: 100%;
}
a:focus {
    outline: thin dotted #333333;
    outline-offset: -2px;
}
a:hover, a:active {
    outline: 0 none;
}
body { 
    background-color: #FFFFFF;
    margin:0;
    
    /* from AUI */
    color: #333333;
    font-family: Arial,sans-serif;
    font-size: 13px;
    line-height: 19px;
}
h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
}
h1, h2, h3, h4 {
    font-family: Arial,sans-serif;
    text-rendering: optimizelegibility;
    padding-bottom: 4px;
}
h1:last-child, h2:last-child, h3:last-child, h4:last-child {
    padding-bottom: 0;
}
h1 {
    font-size: 28px;
    font-weight: normal;
    line-height: 1.2;
}
h2 {
    font-size: 21px;
    font-weight: normal;
    line-height: 1.3;
}
h3 {
    font-size: 17px;
    font-weight: normal;
    line-height: 1.24;
}
p {
  margin: 0 0 14px;
  padding: 0;
}
p:last-child {
    margin-bottom: 0;
}
p + p {
    margin-top: -4px;
}
b, strong {
    font-weight: bold;
}
i, em {
    font-style: italic;
}
blockquote {
    margin: 13px;
}
small {
    font-size: 12px;
}
img {
    border: 0 none;
    max-width: 100%;
    vertical-align: top;
}
td {
    float: none;
    margin-right: 0;
}
td, th {
    padding: 3px;
    vertical-align: top;
}
td:first-child, th:first-child {
    padding-left: 0;
}
td:last-child, th:last-child {
    padding-right: 0;
}
th {
    text-align: left;
}
tr:last-child td, tr:last-child th {
    padding-bottom: 0;
}
tr:first-child td, tr:first-child th {
    padding-top: 0;
}
a, a:visited, a:active, a:link {
    color: #007EB9;
    text-decoration: none;
}
a:hover {
    color: #E47911;
    cursor: pointer;
    text-decoration: underline;
}
p a {
    text-decoration: underline;
}
ul {
    /*color: #AAAAAA; Overriding this style as the color is out of sync with the rest of book description*/
    list-style-type: disc;
}
ol {
    color: #888888;
}
ul, ol {
    margin: 0 0 18px 22px;
    padding: 0;
}
ul li, ol li {
    margin: 0;
    word-wrap: break-word;
}
ul:last-child, ol:last-child {
    margin-bottom: 0 !important;
}

#iframeContent {
overflow: hidden;
}


h2.productDescriptionHeader {
    margin-bottom: 0em;
}

.emptyClear {
    clear:left;
    height:0px;
    font-size:0px;
}

div.productDescriptionWrapper {
    margin: 0 0 1em 0;
}

h3.productDescriptionSource {
    font-weight:normal;
    color:#333333;
    font-size:1.23em;
    margin: .75em 0 .375em 0;
    clear:left;
}

.seeAll {
      margin-top: 1.25em;
      margin-left: -15px;
}

#technicalProductFeatures ul {
  list-style-type: disc;
  margin: 1.12em 0;
  margin-left: 20px;
}

#iframeContent ul {
  list-style-type: disc;
  margin-left: 20px;
}

ul li {
  margin: 0 0 0 20px;
}

ul li ul {
  list-style-type: disc;
  margin-left: 20px;
}

ul li ul li {
  margin: 0 0 0 20px;
}

.aplus h4, .aplus h5 {
    margin: 0 0 .75em 0;
    font-size: 1em;
}

.aplus h4 {
    color: #CC6600;
}

.aplus p {
    margin: 0 0 1em 0;
}

.aplus .break {
    clear:both;
    height:0px;
    font-size:0px;
}

.aplus .spacer {
    margin-bottom: 13px;
}

.aplus img {
    border:none;
}

.aplus .leftImage, .aplus .rightImage, .aplus .centerImage {
    margin-bottom: 1em;
    margin-top: 0;
    text-align:center;
    vertical-align:top;
}


.aplus .leftImage {
    margin-right: 15px;
    float:left;
    clear:left;
}

.aplus .rightImage {
    margin-left: 15px;
    float:right;
    clear:right;
}

.aplus .imageCaption {
    clear:both;
    padding: .5em .5em 0 .5em;
    font-size: .846em;
    display: block;
}

.aplus table.data {
      border-collapse: collapse;
      margin-bottom: 1.25em;
}

.aplus table.data th {
      font-weight: bold;
      background: #F7F7F7;
      border-style:solid;
      border-color: #CCCCCC;
      border-width:0 0 1px 1px;
}

.aplus table.data td {
      border-left: 1px solid #CCC;
      border-bottom: 1px dotted #CCC
}

.aplus table.data th, .aplus table.data td
{
      padding:3px 10px;
      text-align:left
}

.aplus table.data tfoot {
      font-style: italic;
}

.aplus table.data caption {
      background: #eee;
      font-size: .8125em;
}

.aplus table.data tr td:first-child, .aplus table.data tr th:first-child {
      border-left-width:0px;
}

.aplus ul {
      margin:0 0 1em 0;
}


.aplus .center {
      text-align: center;
}

.aplus .right {
      text-align: right;
}

.aplus  .sixth-col,
.aplus .fourth-col,
.aplus .third-col,
.aplus .half-col,
.aplus .two-third-col,
.aplus .three-fourth-col,
.aplus .one-col {
    float:left;
    margin-right: 1.6760%;
    overflow: hidden;
}

.aplus .last {
    margin-right:0px;
}

.aplus .sixth-col {
    width: 15.080%;
}
.aplus .fourth-col {
    width: 23.4637%;
}

.aplus .third-col {
    width: 31.8436%;
}

.aplus .half-col {
    width: 48.6034%;
}

.aplus .two-third-col {
    width: 65.3631%;
}

.aplus .three-fourth-col {
    width: 73.7430%;
}

.aplus .one-col {
    width: 98.8827%;
    margin-right:0;
}

.aplus .last {
    margin-right:0;
}

.aplus {
    width: 100%;
    min-width: 895px;
}

</script>



<script type="text/javascript">
P.register("DynamicIframe", function(){

function DynamicIframe(options) {
  
  var nTries = 0,
      MAX_TRIES = 20,
      iframeId = options.iframeId,
      encodedIframeContent = options.encodedIframeContent,
      iframeWrapperId = options.iframeWrapperId,
      initialResizeCallback = options.initialResizeCallback,
      iframeCSSId = "dynamic_iframe_CSS";
      iframeOverriddenCSSId = options.overriddenCSSId;
    
  this.createIframe = function() {
    var iframe = document.createElement('iframe');
    iframe.id = iframeId;
    iframe.className = "ap_never_hide";
    iframe.width = "100%";
    iframe.scrolling = "no";
    iframe.frameBorder = "0";
    onloadFn = this.iframeload;
    
    if ( iframe.addEventListener )
      iframe.addEventListener("load", onloadFn, false);
    else if ( iframe.attachEvent )
      iframe.attachEvent("onload", onloadFn);
    else iframe.onload = onloadFn;
    
    var wrapper = document.getElementById(iframeWrapperId);
    wrapper.innerHTML = '';
    iframe = wrapper.appendChild(iframe);
    
    var overriddenCSS = "";
    if (document.getElementById(iframeOverriddenCSSId)) {
    	overriddenCSS = document.getElementById(iframeOverriddenCSSId).innerHTML;
    }
    
    var doc = ((iframe.contentWindow && iframe.contentWindow.document) || iframe.contentDocument);
    if (doc && doc.open) {
      doc.open();

      doc.writeln('<html><head><base target="_top" /></' + 'head><body><style class="text/css">' + document.getElementById(iframeCSSId).innerHTML + overriddenCSS + '</style><div id="iframeContent" dir="auto">' + 
              '' + decodeURIComponent(encodedIframeContent) + '</'+'div>'+'</'+'body></html>');
      doc.close();
    }
  }
  
  this.iframeload = function () {
    var iframe = document.getElementById(iframeId);
    iframe.style.display = '';
    setTimeout(function () {
      setIframeHeight(initialResizeCallback);
    }, 20); 
  }
  
  function getDocHeight(doc) {
    var contentDiv = doc.getElementById("iframeContent");
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
  
  function setIframeHeight(resizeCallback) {
    var iframeDoc, iframe = document.getElementById(iframeId);
    iframeDoc = ((iframe.contentWindow && iframe.contentWindow.document) || iframe.contentDocument);
    if (iframeDoc) {
      var h = getDocHeight(iframeDoc);
      if (h && h != 0) {
        iframe.style.height = parseInt(h) + 'px';
        if(typeof resizeCallback == "function") {
          resizeCallback(iframeId);	
        }
      } else if (nTries < MAX_TRIES) {
        nTries++;
        setTimeout(function () {
            setIframeHeight(resizeCallback);
        }, 50);
      }
    }
  }
  
  this.resizeIframe = function(resizeCallback) {
    nTries = 0;
	setIframeHeight(resizeCallback);
  }
}

return DynamicIframe;
});
</script>

	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>






        
    
        
        

        










    
    
     
         
         
             <div id="ebooksMXLegalInfo_feature_div" class="feature" data-feature-name="ebooksMXLegalInfo">
         
     




    

    
    
    
        
            
                
	                
	                
	                	




	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>






        
    
        
        

        










    
    
     
         
         
             <div id="kindleIllustratedBanner_feature_div" class="feature" data-feature-name="kindleIllustratedBanner">
         
     




    

    
    
    
        
            
                
	                
	                
	                	



	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>






        
    
        
        

        










    
    
     
         
         
             <div id="bookDescription_feature_div" class="feature" data-feature-name="bookDescription">
         
     




    

    
    
    
        
            
                
	                
	                
	                	



<script id="bookDesc_override_CSS" type="text/undefined">
body { 
    font-size: 14px;
    line-height: 1.6em;
}

.aplus {
	min-width: inherit;
}
</script>


    
    
        
    



 <noscript>
 	<div> Es ist die Geschichte einer Liebe: Maggie Nelson verliebt sich in Harry Dodge, einen K&#xfc;nstler &#x2013; oder eine K&#xfc;nstlerin? &#x2013; mit fluider Genderidentit&#xe4;t. Harry hat bereits ein Kind, Maggie wird schwanger, zu viert bauen sie ein gemeinsames Leben. &#x22;Die Argonauten&#x22; ist eine ergreifende Geschichte queeren Familienlebens, zugleich erfindet Maggie Nelson eine ganz eigene Form der philosophischen Erkundung. Memoir, Theorie, Poesie: Es ist ein Buch, das sich nicht einordnen l&#xe4;sst und das unsere Einordnungen herausfordert mit seinem radikal offenen Denken. Im Geiste von Susan Sontag und Roland Barthes verbindet Maggie Nelson theoretische und pers&#xf6;nliche Erkenntnissuche, um zu einer neuen Erz&#xe4;hlung des Wesens von Liebe und Familie zu gelangen.</div>
 	<em></em>
 </noscript>
  <div id="outer_postBodyPS" style="overflow: hidden; z-index: 1; height: 0px; display: block;">
	<div id="postBodyPS" style="overflow: hidden;">
      <div id="bookDesc_iframe_wrapper" class="maxReadableWidth"></div>
      
    </div>
  </div>
  <div id="psPlaceHolder" style="height: 20px; display: none;">
  	<div style="z-index: 3;">
		
   		  
   		<a class="a-link-expander h2-expander">
	   		<i id="bdExpanderIcon" class="a-icon a-icon-expand"></i>
	   		<span id="bdSeeAllPrompt" >Mehr lesen</span>
	   		<span id="bdSeeLessPrompt" style="display: none;">Weniger lesen</span>
   		</a>
  	</div>
 </div>

<script type="text/javascript">
 
P.when('DynamicIframe').execute(function(DynamicIframe){
	var BookDescriptionIframe = null,
	    bookDescEncodedData = "Es%20ist%20die%20Geschichte%20einer%20Liebe%3A%20Maggie%20Nelson%20verliebt%20sich%20in%20Harry%20Dodge%2C%20einen%20K%26%23xfc%3Bnstler%20%26%23x2013%3B%20oder%20eine%20K%26%23xfc%3Bnstlerin%3F%20%26%23x2013%3B%20mit%20fluider%20Genderidentit%26%23xe4%3Bt.%20Harry%20hat%20bereits%20ein%20Kind%2C%20Maggie%20wird%20schwanger%2C%20zu%20viert%20bauen%20sie%20ein%20gemeinsames%20Leben.%20%26%23x22%3BDie%20Argonauten%26%23x22%3B%20ist%20eine%20ergreifende%20Geschichte%20queeren%20Familienlebens%2C%20zugleich%20erfindet%20Maggie%20Nelson%20eine%20ganz%20eigene%20Form%20der%20philosophischen%20Erkundung.%20Memoir%2C%20Theorie%2C%20Poesie%3A%20Es%20ist%20ein%20Buch%2C%20das%20sich%20nicht%20einordnen%20l%26%23xe4%3Bsst%20und%20das%20unsere%20Einordnungen%20herausfordert%20mit%20seinem%20radikal%20offenen%20Denken.%20Im%20Geiste%20von%20Susan%20Sontag%20und%20Roland%20Barthes%20verbindet%20Maggie%20Nelson%20theoretische%20und%20pers%26%23xf6%3Bnliche%20Erkenntnissuche%2C%20um%20zu%20einer%20neuen%20Erz%26%23xe4%3Bhlung%20des%20Wesens%20von%20Liebe%20und%20Familie%20zu%20gelangen.",
	    bookDescriptionAvailableHeight,
	    minBookDescriptionInitialHeight = 112,
	    options = {},
	    iframeId = "bookDesc_iframe";
 
    function resizeCallback() {
        P.guardFatal("bookDescription", function() {
            // Get the line-height of the iframe
            var iframe = document.getElementById(iframeId);
            var iframeDocument = iframe.contentDocument;

            if (true && iframeDocument && iframeDocument.defaultView) {
                // Set the height to the number of lines specified
                var numLines = parseInt(5, 10);
 
                // Get the line-height of the iframe
                var iframeContent = iframeDocument.getElementById("iframeContent");
 
                // Compute the line height
                var lineHeight = iframeDocument.defaultView.getComputedStyle(iframeContent, null).getPropertyValue("line-height");

                // Parse the line height
                lineHeight = parseFloat(lineHeight);
                bookDescriptionAvailableHeight = Math.round(lineHeight * numLines);
            } else {
                var bdOffsetTop = document.getElementById("bookDescription_feature_div").offsetTop;
                var imageBlockOffsetTop = document.getElementById("booksImageBlock_feature_div").offsetTop;
                var imageBlockHeight = document.getElementById("booksImageBlock_feature_div").offsetHeight;
                bookDescriptionAvailableHeight = imageBlockOffsetTop + imageBlockHeight -bdOffsetTop - 30;
                if(bookDescriptionAvailableHeight < minBookDescriptionInitialHeight) {
                    bookDescriptionAvailableHeight = minBookDescriptionInitialHeight;
                }
            }
    		
            var psTotalHeight = document.getElementById("postBodyPS").offsetHeight;
 
            if(psTotalHeight > bookDescriptionAvailableHeight + 30){
                if(document.getElementById("bdSeeLessPrompt").style.display == "none"){
                    document.getElementById("outer_postBodyPS").style.height = bookDescriptionAvailableHeight + 'px';
                    document.getElementById("psPlaceHolder").style.display ="block";
                    document.getElementById("bdSeeAllPrompt").style.display ="block";
                }
                else{
                    document.getElementById("outer_postBodyPS").style.height = psTotalHeight + 'px';
                }
            }
            else{
                document.getElementById("outer_postBodyPS").style.height = psTotalHeight + 'px';
                document.getElementById("psPlaceHolder").style.display ="none";
                document.getElementById("bdSeeAllPrompt").style.display ="block";
                document.getElementById("bdSeeLessPrompt").style.display ="none";
                document.getElementById("bdExpanderIcon").className = document.getElementById("bdExpanderIcon").className.replace("rotate","");
            }
        })();
    }

    options.iframeId = iframeId;
    options.iframeWrapperId = "bookDesc_iframe_wrapper";
	options.overriddenCSSId = "bookDesc_override_CSS";
	options.encodedIframeContent = bookDescEncodedData;
	options.initialResizeCallback = resizeCallback;
	
	BookDescriptionIframe = new DynamicIframe(options);
	P.guardFatal("bookDescription", function() {
	    BookDescriptionIframe.createIframe();
	}) ();
	    
	if ((typeof BookDescriptionIframe != 'undefined') && (BookDescriptionIframe instanceof DynamicIframe)) {
	  P.when('jQuery').execute(function($) {
	    $(window).resize(function() {
	        P.guardFatal("bookDescription", function() {
	            BookDescriptionIframe.resizeIframe(resizeCallback);
	        }) ();
	    });

	    $(window).bind('imageResize', function() {
	        P.guardFatal("bookDescription", function() {
	            BookDescriptionIframe.resizeIframe(resizeCallback);
	        }) ();
	    });
	  });
	}
});
</script>


	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>






        
    
        
        

        










    
    
     
         
         
             <div id="hushpuppyUpsell_feature_div" class="feature" data-feature-name="hushpuppyUpsell">
         
     




    

    
    
    
        
            
                
	                
	                
	                	


	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>






        
    
        
        

        










    
    
     
         
         
             <div id="aboutEbooks_feature_div" class="feature" data-feature-name="aboutEbooks">
         
     




    

    
    
    
        
            
                
	                
	                
	                	



    


















    
        <div id="aboutEbooksSection" class="a-section a-spacing-small">

            <hr class="a-spacing-small a-divider-normal">

            
            







    



    <table class="a-normal a-spacing-none">
        
            <tr>
                
                    <td class="a-span4 a-size-mini a-align-center">
                        
                        
                        
                            
                            
                                
                                    

Länge:
<span class="a-declarative" data-action="a-popover" data-a-popover="{&quot;closeButtonLabel&quot;:&quot;Schließen&quot;,&quot;position&quot;:&quot;triggerBottom&quot;,&quot;inlineContent&quot;:&quot;Basiert auf der Druckausgabe (ISBN 9783446257078).&quot;,&quot;popoverLabel&quot;:&quot;Länge:&quot;}">
    <a href="javascript:void(0)" class="a-popover-trigger a-declarative">
         192 Seiten
    <i class="a-icon a-icon-popover"></i></a>
</span>

                                
                            
                        
                    </td>
                
                    <td class="a-span4 a-size-mini a-align-center">
                        
                        
                        
                            
                            
                                
                                    

Verbesserter Schriftsatz: 
<span class="a-declarative" data-action="a-popover" data-a-popover="{&quot;closeButtonLabel&quot;:&quot;Schließen&quot;,&quot;position&quot;:&quot;triggerBottom&quot;,&quot;inlineContent&quot;:&quot;Deutliche Schriftsatzverbesserungen bieten schnelleres Lesen mit weniger Augenbelastung und attraktiven Seiten-Layouts, auch bei größeren Schriftgrößen. &lt;a href='/b?_encoding=UTF8&amp;amp;node=6750786031'&gt;&gt;Weitere Informationen&lt;\\/a&gt;&quot;,&quot;popoverLabel&quot;:&quot;Verbesserter Schriftsatz&quot;}">
    <a href="javascript:void(0)" class="a-popover-trigger a-declarative">
        Aktiviert
    <i class="a-icon a-icon-popover"></i></a>
</span>

                                
                            
                        
                    </td>
                
                    <td class="a-span4 a-size-mini a-align-center">
                        
                        
                        
                            
                            
                                
                                    



    PageFlip: 
    <span class="a-declarative" data-action="a-popover" data-a-popover="{&quot;closeButtonLabel&quot;:&quot;Schließen&quot;,&quot;position&quot;:&quot;triggerBottom&quot;,&quot;inlineContent&quot;:&quot;PageFlip ist eine neue Möglichkeit, wie Sie Ihre Bücher erforschen können, ohne Ihre aktuelle Leseposition zu verlieren. &lt;a href=\\&quot;https://www.amazon.de/pageflip\\&quot;&gt;Weitere Informationen&lt;\\/a&gt;&quot;,&quot;popoverLabel&quot;:&quot;PageFlip&quot;}">
        <a href="javascript:void(0)" class="a-popover-trigger a-declarative">
            <span>
                Aktiviert
            </span>
        <i class="a-icon a-icon-popover"></i></a>
    </span>

                                
                            
                        
                    </td>
                
            </tr>
        
    </table>


            
            <ul class="a-unordered-list a-nostyle a-vertical">
                
    

















            </ul>
        </div>
    



    <style type="text/css">
        #aboutEbooksSection .a-popover-trigger {
            display: inline-block;
        }

        /*http://stackoverflow.com/a/25329017/3935041*/
        #aboutEbooksSection tr {
            height: 20px;
        }

        #aboutEbooksSection li {
            min-height: 20px;
        }

        #aboutEbooksSection td {
            padding: 0;
        }
    </style>


	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>






        
    
        
        

        










    
    
     
         
         
             <div id="extraProductInfoFeatureGroup" class="feature" data-feature-name="extraProductInfoFeatureGroup">
         
     




    

    
    
    
        
        
        
        
    	    
                






    
        









    

    
        








	
    
    










    
    
     
         
         
             <div id="newerVersion_feature_div" class="feature" data-feature-name="newerVersion">
         
     




    

    
    
    
        
            
                
	                
	                
	                	





	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>





    





    



    	    
        
        
        
        
    
    
    

    















    </div>






        
    
        
        

        










    
    
     
         
         
             <div id="andonCord_feature_div" class="feature" data-feature-name="andonCord">
         
     




    

    
    
    
        
        
        
            
                
                    



                
                
            
        
        
        
        
        
    
    
    

    















    </div>






        
    
        
        

        










    
    
     
         
         
             <div id="heroQuickPromo_feature_div" class="feature" data-feature-name="heroQuickPromo">
         
     




    

    
    
    
        
        
        
        
        
        
    <div id="hero-quick-promo" class="a-row a-spacing-medium">
        
            <hr class="a-spacing-medium a-divider-normal">
        <!--wlhqp-->
		
<div class="qpImage">
   <a href="/gp/product/B07G74PKD2/ref=amb_link_1?pf_rd_m=A3JWKAKR8XB7XF&pf_rd_s=hero-quick-promo&pf_rd_r=7KW51GR72GBHGNNYKK1P&pf_rd_r=7KW51GR72GBHGNNYKK1P&pf_rd_t=201&pf_rd_p=da204a79-af1f-4cf2-9c61-52120aaf7048&pf_rd_p=da204a79-af1f-4cf2-9c61-52120aaf7048&pf_rd_i=B071FCV5KW">
       <img src="https://images-eu.ssl-images-amazon.com/images/G/03/kindle/content/apub/VIB/1218_DE-NR-VIB2_JOHANNING_75x75._SS60_CB459339661_.jpg" width="60" align="left" alt="Roman-Neuerscheinung" height="60" border="0" />
     </a>
 </div>
  
<span class="qpHeadline">Roman-Neuerscheinung:</span><br>

<a href="/gp/product/B07G74PKD2/ref=amb_link_3?pf_rd_m=A3JWKAKR8XB7XF&pf_rd_s=hero-quick-promo&pf_rd_r=7KW51GR72GBHGNNYKK1P&pf_rd_r=7KW51GR72GBHGNNYKK1P&pf_rd_t=201&pf_rd_p=da204a79-af1f-4cf2-9c61-52120aaf7048&pf_rd_p=da204a79-af1f-4cf2-9c61-52120aaf7048&pf_rd_i=B071FCV5KW">"Die verborgenen Schwestern"</a> von <b>Bestsellerautorin Marion Johanning</b>.




<a href="/Exklusive-Neuheiten-eBooks/b/ref=amb_link_4?ie=UTF8&node=7240628031&pf_rd_m=A3JWKAKR8XB7XF&pf_rd_s=hero-quick-promo&pf_rd_r=7KW51GR72GBHGNNYKK1P&pf_rd_r=7KW51GR72GBHGNNYKK1P&pf_rd_t=201&pf_rd_p=da204a79-af1f-4cf2-9c61-52120aaf7048&pf_rd_p=da204a79-af1f-4cf2-9c61-52120aaf7048&pf_rd_i=B071FCV5KW">Nicht verpassen: Exklusive Amazon-Neuerscheinungen. Jeden Dienstag neue Titel.</a>


  
    </div>
    <div style="clear:left; margin-bottom:5px"></div>


        
    
    
    

    















    </div>






        
    
</div>

<script type="text/javascript">setCSMReq('af');if(typeof addlongPoleTag === 'function'){ addlongPoleTag('af','desktop-html-atf-marker');};</script>






<!-- MarkAF -->






 







    
    








    
    


    
    



   
    









 


        <script type="a-state" data-a-state="{&quot;key&quot;:&quot;metrics-schema&quot;}">{"widgetSchema":"dp:widget:","dimensionSchema":"dp:dims:"}</script>

    





























 
 
 









      












  
  
        

    
    
    





                    







  
  
    
    
    









 



  
    




<!--rbd-->







  


 
 














        <hr class="a-divider-normal sims-vtp-heading">
        <div data-similarity-type="desktop-dp-sims_vtp" class="a-section similarities-widget">
            <div id="view_to_purchase-sims-feature" class="a-section bucket">
                
        <h2 class="a-size-large a-spacing-base">Welche anderen Artikel kaufen Kunden, nachdem sie diesen Artikel angesehen haben?</h2>
        <div data-p13n-feature-metadata="{&quot;baseAsin&quot;:&quot;B071FCV5KW&quot;,&quot;pd_rd_wg&quot;:&quot;EjrqG&quot;,&quot;pd_rd_r&quot;:&quot;3eed376e-0deb-11e9-aa85-d35187ec82ab&quot;,&quot;pf_rd_r&quot;:&quot;7KW51GR72GBHGNNYKK1P&quot;,&quot;pf_rd_p&quot;:&quot;1ebb6c3f-03f1-455d-81b6-c58f09592dc4&quot;,&quot;pd_rd_w&quot;:&quot;M6IcZ&quot;}" data-p13n-feature-name="pd_cp_351" data-p13n-global="{&quot;auiDeviceType&quot;:&quot;desktop&quot;,&quot;marketplaceId&quot;:&quot;A1PA6795UKMFR9&quot;,&quot;requestId&quot;:&quot;7KW51GR72GBHGNNYKK1P&quot;,&quot;marketplace&quot;:&quot;DE&quot;,&quot;customerId&quot;:&quot;A96YKT37ODSSG&quot;,&quot;session&quot;:&quot;262-9898842-9713804&quot;}" class="a-section a-spacing-micro vtp-container">
            
        <div class="a-section p13n-sc-list-cells-container">
            <ul class="a-unordered-list a-nostyle a-vertical p13n-sc-list-cells">
                <li data-fling-container="true" class="a-spacing-medium p13n-sc-list-item"><span class="a-list-item">
        <div data-p13n-asin-metadata="{&quot;ref&quot;:&quot;pd_cp_351_1&quot;,&quot;asin&quot;:&quot;B01LFHO1SI&quot;}" class="a-fixed-left-grid p13n-asin"><div class="a-fixed-left-grid-inner" style="padding-left:82px">
            <div class="a-fixed-left-grid-col a-col-left" style="width:82px;margin-left:-82px;float:left;"><a class="a-link-normal" href="/Bluets-English-Maggie-Nelson-ebook/dp/B01LFHO1SI/ref=pd_cp_351_1?_encoding=UTF8&pd_rd_i=B01LFHO1SI&pd_rd_r=3eed376e-0deb-11e9-aa85-d35187ec82ab&pd_rd_w=M6IcZ&pd_rd_wg=EjrqG&pf_rd_p=1ebb6c3f-03f1-455d-81b6-c58f09592dc4&pf_rd_r=7KW51GR72GBHGNNYKK1P&psc=1&refRID=7KW51GR72GBHGNNYKK1P">
                    <img alt="Bluets (English Edition)" src="https://images-na.ssl-images-amazon.com/images/I/91cUW-3Eb9L.__BG0,0,0,0_FMpng_AC_UL70_SR70,70_.jpg" class="a-dynamic-image p13n-sc-dynamic-image" height="70" width="70" data-a-dynamic-image="{&quot;https://images-na.ssl-images-amazon.com/images/I/91cUW-3Eb9L.__BG0,0,0,0_FMpng_AC_UL70_SR70,70_.jpg&quot;:[70,70],&quot;https://images-na.ssl-images-amazon.com/images/I/91cUW-3Eb9L.__BG0,0,0,0_FMpng_AC_UL140_SR140,140_.jpg&quot;:[140,140],&quot;https://images-na.ssl-images-amazon.com/images/I/91cUW-3Eb9L.__BG0,0,0,0_FMpng_AC_UL210_SR210,210_.jpg&quot;:[210,210]}">
            </a></div>
            <div class="a-fixed-left-grid-col a-col-right" style="padding-left:0%;float:left;">
                
        <div class="a-row">
            <a class="a-link-normal" href="/Bluets-English-Maggie-Nelson-ebook/dp/B01LFHO1SI/ref=pd_cp_351_1?_encoding=UTF8&pd_rd_i=B01LFHO1SI&pd_rd_r=3eed376e-0deb-11e9-aa85-d35187ec82ab&pd_rd_w=M6IcZ&pd_rd_wg=EjrqG&pf_rd_p=1ebb6c3f-03f1-455d-81b6-c58f09592dc4&pf_rd_r=7KW51GR72GBHGNNYKK1P&psc=1&refRID=7KW51GR72GBHGNNYKK1P">
        <div class="p13n-sc-truncate p13n-sc-line-clamp-1" aria-hidden="true" data-rows="1">
            Bluets (English Edition)
        </div>
    </a>
            <span class="a-size-small a-color-secondary p13n-sc-vtp-binding">Kindle Edition</span>
            
        </div>
        <div class="a-row a-size-small"><a class="a-size-small a-link-child" href="/Maggie-Nelson/e/B001JOTRXW/ref=pd_cp_351_bl_1?_encoding=UTF8&pd_rd_i=B01LFHO1SI&pd_rd_r=3eed376e-0deb-11e9-aa85-d35187ec82ab&pd_rd_w=M6IcZ&pd_rd_wg=EjrqG&pf_rd_p=1ebb6c3f-03f1-455d-81b6-c58f09592dc4&pf_rd_r=7KW51GR72GBHGNNYKK1P&refRID=7KW51GR72GBHGNNYKK1P">Maggie Nelson</a></div>
        
        <div class="a-row"><a class="a-link-normal a-text-normal" href="/Bluets-English-Maggie-Nelson-ebook/dp/B01LFHO1SI/ref=pd_cp_351_1?_encoding=UTF8&pd_rd_i=B01LFHO1SI&pd_rd_r=3eed376e-0deb-11e9-aa85-d35187ec82ab&pd_rd_w=M6IcZ&pd_rd_wg=EjrqG&pf_rd_p=1ebb6c3f-03f1-455d-81b6-c58f09592dc4&pf_rd_r=7KW51GR72GBHGNNYKK1P&psc=1&refRID=7KW51GR72GBHGNNYKK1P"><span class="a-size-base a-color-price"><span class='p13n-sc-price'>EUR 9,49</span></span></a>   </div>
    
            </div>
        </div></div>
        </span></li><li data-fling-container="true" class="a-spacing-medium p13n-sc-list-item"><span class="a-list-item">
        <div data-p13n-asin-metadata="{&quot;ref&quot;:&quot;pd_cp_351_2&quot;,&quot;asin&quot;:&quot;B0725978SG&quot;}" class="a-fixed-left-grid p13n-asin"><div class="a-fixed-left-grid-inner" style="padding-left:82px">
            <div class="a-fixed-left-grid-col a-col-left" style="width:82px;margin-left:-82px;float:left;"><a class="a-link-normal" href="/Tyll-Daniel-Kehlmann-ebook/dp/B0725978SG/ref=pd_cp_351_2?_encoding=UTF8&pd_rd_i=B0725978SG&pd_rd_r=3eed376e-0deb-11e9-aa85-d35187ec82ab&pd_rd_w=M6IcZ&pd_rd_wg=EjrqG&pf_rd_p=1ebb6c3f-03f1-455d-81b6-c58f09592dc4&pf_rd_r=7KW51GR72GBHGNNYKK1P&psc=1&refRID=7KW51GR72GBHGNNYKK1P">
                    <img alt="Tyll" src="https://images-na.ssl-images-amazon.com/images/I/912yj6m59YL.__BG0,0,0,0_FMpng_AC_UL70_SR70,70_.jpg" class="a-dynamic-image p13n-sc-dynamic-image" height="70" width="70" data-a-dynamic-image="{&quot;https://images-na.ssl-images-amazon.com/images/I/912yj6m59YL.__BG0,0,0,0_FMpng_AC_UL140_SR140,140_.jpg&quot;:[140,140],&quot;https://images-na.ssl-images-amazon.com/images/I/912yj6m59YL.__BG0,0,0,0_FMpng_AC_UL210_SR210,210_.jpg&quot;:[210,210],&quot;https://images-na.ssl-images-amazon.com/images/I/912yj6m59YL.__BG0,0,0,0_FMpng_AC_UL70_SR70,70_.jpg&quot;:[70,70]}">
            </a></div>
            <div class="a-fixed-left-grid-col a-col-right" style="padding-left:0%;float:left;">
                
        <div class="a-row">
            <a class="a-link-normal" href="/Tyll-Daniel-Kehlmann-ebook/dp/B0725978SG/ref=pd_cp_351_2?_encoding=UTF8&pd_rd_i=B0725978SG&pd_rd_r=3eed376e-0deb-11e9-aa85-d35187ec82ab&pd_rd_w=M6IcZ&pd_rd_wg=EjrqG&pf_rd_p=1ebb6c3f-03f1-455d-81b6-c58f09592dc4&pf_rd_r=7KW51GR72GBHGNNYKK1P&psc=1&refRID=7KW51GR72GBHGNNYKK1P">
        <div class="p13n-sc-truncate p13n-sc-line-clamp-1" aria-hidden="true" data-rows="1">
            Tyll
        </div>
    </a>
            <span class="a-size-small a-color-secondary p13n-sc-vtp-binding">Kindle Edition</span>
            
        </div>
        <div class="a-row a-size-small"><a class="a-size-small a-link-child" href="/Daniel-Kehlmann/e/B001IR1K1M/ref=pd_cp_351_bl_2?_encoding=UTF8&pd_rd_i=B0725978SG&pd_rd_r=3eed376e-0deb-11e9-aa85-d35187ec82ab&pd_rd_w=M6IcZ&pd_rd_wg=EjrqG&pf_rd_p=1ebb6c3f-03f1-455d-81b6-c58f09592dc4&pf_rd_r=7KW51GR72GBHGNNYKK1P&refRID=7KW51GR72GBHGNNYKK1P">Daniel Kehlmann</a></div>
        
        <div class="a-icon-row a-spacing-none">
            <a class="a-link-normal" title="3,6 von 5 Sternen" href="/product-reviews/B0725978SG/ref=pd_cp_351_cr_2?ie=UTF8&pd_rd_i=B0725978SG&pd_rd_r=3eed376e-0deb-11e9-aa85-d35187ec82ab&pd_rd_w=M6IcZ&pd_rd_wg=EjrqG&pf_rd_p=1ebb6c3f-03f1-455d-81b6-c58f09592dc4&pf_rd_r=7KW51GR72GBHGNNYKK1P&refRID=7KW51GR72GBHGNNYKK1P">
                <i class="a-icon a-icon-star a-star-3-5"><span class="a-icon-alt">3,6 von 5 Sternen</span></i>
            </a>
            <a class="a-size-small a-link-normal" href="/product-reviews/B0725978SG/ref=pd_cp_351_cr_2?ie=UTF8&pd_rd_i=B0725978SG&pd_rd_r=3eed376e-0deb-11e9-aa85-d35187ec82ab&pd_rd_w=M6IcZ&pd_rd_wg=EjrqG&pf_rd_p=1ebb6c3f-03f1-455d-81b6-c58f09592dc4&pf_rd_r=7KW51GR72GBHGNNYKK1P&refRID=7KW51GR72GBHGNNYKK1P">250</a>
        </div>
    
        <div class="a-row"><a class="a-link-normal a-text-normal" href="/Tyll-Daniel-Kehlmann-ebook/dp/B0725978SG/ref=pd_cp_351_2?_encoding=UTF8&pd_rd_i=B0725978SG&pd_rd_r=3eed376e-0deb-11e9-aa85-d35187ec82ab&pd_rd_w=M6IcZ&pd_rd_wg=EjrqG&pf_rd_p=1ebb6c3f-03f1-455d-81b6-c58f09592dc4&pf_rd_r=7KW51GR72GBHGNNYKK1P&psc=1&refRID=7KW51GR72GBHGNNYKK1P"><span class="a-size-base a-color-price"><span class='p13n-sc-price'>EUR 19,99</span></span></a>   </div>
    
            </div>
        </div></div>
        </span></li><li data-fling-container="true" class="a-spacing-medium p13n-sc-list-item"><span class="a-list-item">
        <div data-p13n-asin-metadata="{&quot;ref&quot;:&quot;pd_cp_351_3&quot;,&quot;asin&quot;:&quot;B00S8AMTOE&quot;}" class="a-fixed-left-grid p13n-asin"><div class="a-fixed-left-grid-inner" style="padding-left:82px">
            <div class="a-fixed-left-grid-col a-col-left" style="width:82px;margin-left:-82px;float:left;"><a class="a-link-normal" href="/Schwarz-Wei%C3%9F-Irene-Dische-ebook/dp/B00S8AMTOE/ref=pd_cp_351_3?_encoding=UTF8&pd_rd_i=B00S8AMTOE&pd_rd_r=3eed376e-0deb-11e9-aa85-d35187ec82ab&pd_rd_w=M6IcZ&pd_rd_wg=EjrqG&pf_rd_p=1ebb6c3f-03f1-455d-81b6-c58f09592dc4&pf_rd_r=7KW51GR72GBHGNNYKK1P&psc=1&refRID=7KW51GR72GBHGNNYKK1P">
                    <img alt="Schwarz und Weiß" src="https://images-na.ssl-images-amazon.com/images/I/81zrN9G34YL.__BG0,0,0,0_FMpng_AC_UL70_SR70,70_.jpg" class="a-dynamic-image p13n-sc-dynamic-image" height="70" width="70" data-a-dynamic-image="{&quot;https://images-na.ssl-images-amazon.com/images/I/81zrN9G34YL.__BG0,0,0,0_FMpng_AC_UL210_SR210,210_.jpg&quot;:[210,210],&quot;https://images-na.ssl-images-amazon.com/images/I/81zrN9G34YL.__BG0,0,0,0_FMpng_AC_UL140_SR140,140_.jpg&quot;:[140,140],&quot;https://images-na.ssl-images-amazon.com/images/I/81zrN9G34YL.__BG0,0,0,0_FMpng_AC_UL70_SR70,70_.jpg&quot;:[70,70]}">
            </a></div>
            <div class="a-fixed-left-grid-col a-col-right" style="padding-left:0%;float:left;">
                
        <div class="a-row">
            <a class="a-link-normal" href="/Schwarz-Wei%C3%9F-Irene-Dische-ebook/dp/B00S8AMTOE/ref=pd_cp_351_3?_encoding=UTF8&pd_rd_i=B00S8AMTOE&pd_rd_r=3eed376e-0deb-11e9-aa85-d35187ec82ab&pd_rd_w=M6IcZ&pd_rd_wg=EjrqG&pf_rd_p=1ebb6c3f-03f1-455d-81b6-c58f09592dc4&pf_rd_r=7KW51GR72GBHGNNYKK1P&psc=1&refRID=7KW51GR72GBHGNNYKK1P">
        <div class="p13n-sc-truncate p13n-sc-line-clamp-1" aria-hidden="true" data-rows="1">
            Schwarz und Wei&szlig;
        </div>
    </a>
            <span class="a-size-small a-color-secondary p13n-sc-vtp-binding">Kindle Edition</span>
            
        </div>
        <div class="a-row a-size-small"><a class="a-size-small a-link-child" href="/Irene-Dische/e/B00456Q1TE/ref=pd_cp_351_bl_3?_encoding=UTF8&pd_rd_i=B00S8AMTOE&pd_rd_r=3eed376e-0deb-11e9-aa85-d35187ec82ab&pd_rd_w=M6IcZ&pd_rd_wg=EjrqG&pf_rd_p=1ebb6c3f-03f1-455d-81b6-c58f09592dc4&pf_rd_r=7KW51GR72GBHGNNYKK1P&refRID=7KW51GR72GBHGNNYKK1P">Irene Dische</a></div>
        
        <div class="a-icon-row a-spacing-none">
            <a class="a-link-normal" title="3,4 von 5 Sternen" href="/product-reviews/B00S8AMTOE/ref=pd_cp_351_cr_3?ie=UTF8&pd_rd_i=B00S8AMTOE&pd_rd_r=3eed376e-0deb-11e9-aa85-d35187ec82ab&pd_rd_w=M6IcZ&pd_rd_wg=EjrqG&pf_rd_p=1ebb6c3f-03f1-455d-81b6-c58f09592dc4&pf_rd_r=7KW51GR72GBHGNNYKK1P&refRID=7KW51GR72GBHGNNYKK1P">
                <i class="a-icon a-icon-star a-star-3-5"><span class="a-icon-alt">3,4 von 5 Sternen</span></i>
            </a>
            <a class="a-size-small a-link-normal" href="/product-reviews/B00S8AMTOE/ref=pd_cp_351_cr_3?ie=UTF8&pd_rd_i=B00S8AMTOE&pd_rd_r=3eed376e-0deb-11e9-aa85-d35187ec82ab&pd_rd_w=M6IcZ&pd_rd_wg=EjrqG&pf_rd_p=1ebb6c3f-03f1-455d-81b6-c58f09592dc4&pf_rd_r=7KW51GR72GBHGNNYKK1P&refRID=7KW51GR72GBHGNNYKK1P">11</a>
        </div>
    
        <div class="a-row"><a class="a-link-normal a-text-normal" href="/Schwarz-Wei%C3%9F-Irene-Dische-ebook/dp/B00S8AMTOE/ref=pd_cp_351_3?_encoding=UTF8&pd_rd_i=B00S8AMTOE&pd_rd_r=3eed376e-0deb-11e9-aa85-d35187ec82ab&pd_rd_w=M6IcZ&pd_rd_wg=EjrqG&pf_rd_p=1ebb6c3f-03f1-455d-81b6-c58f09592dc4&pf_rd_r=7KW51GR72GBHGNNYKK1P&psc=1&refRID=7KW51GR72GBHGNNYKK1P"><span class="a-size-base a-color-price"><span class='p13n-sc-price'>EUR 19,99</span></span></a>   </div>
    
            </div>
        </div></div>
        </span></li><li data-fling-container="true" class="a-spacing-medium p13n-sc-list-item"><span class="a-list-item">
        <div data-p13n-asin-metadata="{&quot;ref&quot;:&quot;pd_cp_351_4&quot;,&quot;asin&quot;:&quot;B071KT7VRR&quot;}" class="a-fixed-left-grid p13n-asin"><div class="a-fixed-left-grid-inner" style="padding-left:82px">
            <div class="a-fixed-left-grid-col a-col-left" style="width:82px;margin-left:-82px;float:left;"><a class="a-link-normal" href="/Im-Herzen-Gewalt-%C3%89douard-Louis-ebook/dp/B071KT7VRR/ref=pd_cp_351_4?_encoding=UTF8&pd_rd_i=B071KT7VRR&pd_rd_r=3eed376e-0deb-11e9-aa85-d35187ec82ab&pd_rd_w=M6IcZ&pd_rd_wg=EjrqG&pf_rd_p=1ebb6c3f-03f1-455d-81b6-c58f09592dc4&pf_rd_r=7KW51GR72GBHGNNYKK1P&psc=1&refRID=7KW51GR72GBHGNNYKK1P">
                    <img alt="Im Herzen der Gewalt: Roman" src="https://images-na.ssl-images-amazon.com/images/I/91GATDPLusL.__BG0,0,0,0_FMpng_AC_UL70_SR70,70_.jpg" class="a-dynamic-image p13n-sc-dynamic-image" height="70" width="70" data-a-dynamic-image="{&quot;https://images-na.ssl-images-amazon.com/images/I/91GATDPLusL.__BG0,0,0,0_FMpng_AC_UL140_SR140,140_.jpg&quot;:[140,140],&quot;https://images-na.ssl-images-amazon.com/images/I/91GATDPLusL.__BG0,0,0,0_FMpng_AC_UL70_SR70,70_.jpg&quot;:[70,70],&quot;https://images-na.ssl-images-amazon.com/images/I/91GATDPLusL.__BG0,0,0,0_FMpng_AC_UL210_SR210,210_.jpg&quot;:[210,210]}">
            </a></div>
            <div class="a-fixed-left-grid-col a-col-right" style="padding-left:0%;float:left;">
                
        <div class="a-row">
            <a class="a-link-normal" href="/Im-Herzen-Gewalt-%C3%89douard-Louis-ebook/dp/B071KT7VRR/ref=pd_cp_351_4?_encoding=UTF8&pd_rd_i=B071KT7VRR&pd_rd_r=3eed376e-0deb-11e9-aa85-d35187ec82ab&pd_rd_w=M6IcZ&pd_rd_wg=EjrqG&pf_rd_p=1ebb6c3f-03f1-455d-81b6-c58f09592dc4&pf_rd_r=7KW51GR72GBHGNNYKK1P&psc=1&refRID=7KW51GR72GBHGNNYKK1P">
        <div class="p13n-sc-truncate p13n-sc-line-clamp-1" aria-hidden="true" data-rows="1">
            Im Herzen der Gewalt: Roman
        </div>
    </a>
            <span class="a-size-small a-color-secondary p13n-sc-vtp-binding">Kindle Edition</span>
            
        </div>
        <div class="a-row a-size-small"><a class="a-size-small a-link-child" href="/%C3%89douard-Louis/e/B00ORB35DC/ref=pd_cp_351_bl_4?_encoding=UTF8&pd_rd_i=B071KT7VRR&pd_rd_r=3eed376e-0deb-11e9-aa85-d35187ec82ab&pd_rd_w=M6IcZ&pd_rd_wg=EjrqG&pf_rd_p=1ebb6c3f-03f1-455d-81b6-c58f09592dc4&pf_rd_r=7KW51GR72GBHGNNYKK1P&refRID=7KW51GR72GBHGNNYKK1P">Édouard Louis</a></div>
        
        <div class="a-icon-row a-spacing-none">
            <a class="a-link-normal" title="4,0 von 5 Sternen" href="/product-reviews/B071KT7VRR/ref=pd_cp_351_cr_4?ie=UTF8&pd_rd_i=B071KT7VRR&pd_rd_r=3eed376e-0deb-11e9-aa85-d35187ec82ab&pd_rd_w=M6IcZ&pd_rd_wg=EjrqG&pf_rd_p=1ebb6c3f-03f1-455d-81b6-c58f09592dc4&pf_rd_r=7KW51GR72GBHGNNYKK1P&refRID=7KW51GR72GBHGNNYKK1P">
                <i class="a-icon a-icon-star a-star-4"><span class="a-icon-alt">4,0 von 5 Sternen</span></i>
            </a>
            <a class="a-size-small a-link-normal" href="/product-reviews/B071KT7VRR/ref=pd_cp_351_cr_4?ie=UTF8&pd_rd_i=B071KT7VRR&pd_rd_r=3eed376e-0deb-11e9-aa85-d35187ec82ab&pd_rd_w=M6IcZ&pd_rd_wg=EjrqG&pf_rd_p=1ebb6c3f-03f1-455d-81b6-c58f09592dc4&pf_rd_r=7KW51GR72GBHGNNYKK1P&refRID=7KW51GR72GBHGNNYKK1P">23</a>
        </div>
    
        <div class="a-row"><a class="a-link-normal a-text-normal" href="/Im-Herzen-Gewalt-%C3%89douard-Louis-ebook/dp/B071KT7VRR/ref=pd_cp_351_4?_encoding=UTF8&pd_rd_i=B071KT7VRR&pd_rd_r=3eed376e-0deb-11e9-aa85-d35187ec82ab&pd_rd_w=M6IcZ&pd_rd_wg=EjrqG&pf_rd_p=1ebb6c3f-03f1-455d-81b6-c58f09592dc4&pf_rd_r=7KW51GR72GBHGNNYKK1P&psc=1&refRID=7KW51GR72GBHGNNYKK1P"><span class="a-size-base a-color-price"><span class='p13n-sc-price'>EUR 8,99</span></span></a>   </div>
    
            </div>
        </div></div>
        </span></li>
            </ul>
        </div>
    
        </div>
    
            </div>
            
            
        </div>
        <div class="a-section vtp-footer"></div>
    















    
    




  



        
        
        
        



  















        







































       



























<script type='text/javascript'>P.when('cf').execute(function() { ue.count('dp:widget:dpxSize:dpxBTFSize', 63);ue.count('dp:widget:dpxSize:dpxATFSize', 140);});</script>
         
        






















<div id="sponsoredProducts_feature_div" class="feature" data-feature-name="sponsoredProducts">
         
     




    

    
    
    
        
            
                
	                
	                
	                	<style>.sp_large_format_widgetTitle_asinImage_spacing {    margin-bottom: 40px;}.sp_large_format_asinImage_productDescription_spacing {    margin-bottom: 30px;}.sp_large_format_carousel {    height: 461px;}.sp_large_format_offerVertical {    height: 375px;}.sp_book_carousel_header {    margin-bottom: 10px;}.sp_badge_spacing_above_image {    margin-top: 0px;    margin-bottom: 4px;}.sp_badge_spacing_below_image {    margin-top: 6px;    margin-bottom: 6px;}.sp_invisible_badge {    visibility: hidden;}.sp_prime_wardrobe_badge {    position: relative;    top: 2px;}</style><style>.sp_amazon_certified_text {    font-size: 13px;    color: #C45500;}.sp_works_with_alexa {    font-size: 13px;    color: #111111;}</style>                                                                        <script type="a-state" data-a-state="{&quot;key&quot;:&quot;SpViewabilityConfigState&quot;}">{"eelEndpoint":"https://unagi-eu.amazon.com/1/events/com.amazon.eel.SponsoredProductsEventTracking.prod"}</script>                                                    <hr class="a-divider-normal bucketDivider">                <div id="sp_detail" data-a-carousel-options="{&quot;initialSeenAsins&quot;:[&quot;B07LFSM8QQ&quot;,&quot;B07LFPP7D5&quot;,&quot;B07LFRX6Q8&quot;,&quot;B07M92YKDB&quot;,&quot;B07M8T7CLD&quot;,&quot;B07LFTJN79&quot;,&quot;B07M5GZSMD&quot;],&quot;set_size&quot;:162,&quot;name&quot;:&quot;sp_detail_carousel&quot;,&quot;auto_adjust_height&quot;:&quot;true&quot;,&quot;circular&quot;:false,&quot;ajax&quot;:{&quot;params&quot;:{&quot;cc&quot;:7,&quot;wName&quot;:&quot;sp_detail&quot;,&quot;referringSearchEngine&quot;:&quot;Amazon&quot;,&quot;start&quot;:7,&quot;ASIN&quot;:&quot;B071FCV5KW&quot;,&quot;pRID&quot;:&quot;7KW51GR72GBHGNNYKK1P&quot;,&quot;isFresh&quot;:0},&quot;url&quot;:&quot;/gp/nemo/spd/handlers/spd-shov.html&quot;}}" data-a-display-strategy="swap" data-a-transition-strategy="swap" data-a-ajax-strategy="clicksCustomAjax" class="a-begin a-carousel-container a-carousel-static a-carousel-display-swap a-carousel-transition-swap"><input autocomplete="on" type="hidden" class="a-carousel-firstvisibleitem">            <div class="a-row a-carousel-header-row a-size-large pa_componentTitleTest"><div class="a-column a-span8"><h2 class="a-carousel-heading">Gesponserte Produkte zu diesem Artikel</h2></div><div class="a-column a-span4 a-span-last a-text-right"><span class="a-carousel-pagination a-size-base"><span class="a-carousel-page-count">Seite <span class="a-carousel-page-current">1</span> von <span class="a-carousel-page-max">1</span></span><span class="a-carousel-restart-container"><span class="a-text-separator"></span><a class="a-carousel-restart" href="#">Zum Anfang</a></span><span class="a-carousel-accessibility-page-info a-offscreen" aria-live="polite">Seite 1 von 1</span></span></div></div>            <div class="a-row a-carousel-controls a-carousel-row a-carousel-has-buttons"><div class="a-carousel-row-inner"><div class="a-carousel-col a-carousel-left"><a class="a-button a-button-image a-carousel-button a-carousel-goto-prevpage" tabindex="0" href="#"><span class="a-button-inner"><i class="a-icon a-icon-previous"><span class="a-icon-alt">Vorherige Seite verwandter Gesponserter Produkte</span></i></span></a></div><div class="a-carousel-col a-carousel-center"><div class="a-carousel-viewport"><ol class="a-carousel" role="list">                                            <li class="a-carousel-card" style="width:160px;" role="listitem">                    <div id="sp_detail_B07LFSM8QQ" data-asin="B07LFSM8QQ" data-p13n-asin-metadata="{&quot;ref&quot;:&quot;sspa_dk_detail_0&quot;,&quot;asin&quot;:&quot;B07LFSM8QQ&quot;}" data-viewpixelurl="/gp/sponsored-products/logging/log-action.html?qualifier=1546363963&amp;id=7621085598910798&amp;widgetName=sp_detail&amp;adId=20019877400004&amp;adIndex=0" class="a-section sp_offerVertical">    <noscript>        <img alt="" src="/gp/sponsored-products/logging/log-action.html?qualifier=1546363963&id=7621085598910798&widgetName=sp_detail&adId=20019877400004&eventType=2&adIndex=0">    </noscript>    <script type="text/javascript">(function(f) {f(window.P._namespace("FirebirdSpRendering"));}(function(P) {        P.when('SponsoredProductsViewability').execute(function(SV) {            SV.loadImagePixel("/gp/sponsored-products/logging/log-action.html?qualifier=1546363963&id=7621085598910798&widgetName=sp_detail&adId=20019877400004&eventType=2&adIndex=0");        });    }));</script><script type="text/javascript">(function(f) {f(window.P._namespace("FirebirdSpRendering"));}(function(P) {    P.when('A', 'SponsoredProductsViewability').execute(function(A, SV) {        SV.registerViewTrackingElement(A.$("#sp_detail_B07LFSM8QQ"), "sp_detail");    });}));</script><div class="pa_feedbackForm_container_sp_detail" style="display:none;">    <div class="sp_adID">        <span class="a-declarative" data-action="a-modal" data-a-modal="{&quot;footer&quot;:&quot;&lt;div id='sponsored-products-feedback-footer'&gt;&quot;,&quot;closeButton&quot;:&quot;false&quot;,&quot;name&quot;:&quot;sponsored-products-feedback-modal-sp_detail&quot;,&quot;width&quot;:&quot;350&quot;,&quot;header&quot;:&quot;Feedback mitteilen&quot;,&quot;url&quot;:&quot;/gp/sponsored-products/lazyLoad/handler/sp-feedback-handler.html?pl=FRp4%2FxMkxshB48B0FfpdJh6U30P5D%2BRJzF8HULq6S6X5I%2FvknMNjDSQwdvsd2VreNRTjR3XZo5iX%0A1Fs3SzwE273v6pIyT4tFw%2Fy%2FEGjjxjr91jHnd3weFgH0qb92DrE3xHbNMg7nqQj51AjpjPHAsGxS%0AZCQpj8qFtHZXXj4Hqp5xEMyUCsMwoyDW0RMFQq54zeC9sc0xxVS9XFIn8bMklIkbrUK%2FTgujnAuX%0ALjNF5hn8EeWg55HAcddD2XTwiaRSHZYMxEs7UtxeerWKj6J3TKcGMTZIbymznEo0aRN7wDBxKpKD%0ACCrkuEcVSbk%2Fo9UrPUOrBmmnBH%2BJUdWKjC8DMsiRE6MhXvQ5yNAqqRTb%2F5oTCC7oqdVoCSjlP3zV%0AgHZksAfjQeW3hPo3nFfTW8OolbjgDoff4mRHIq0VOeq7c8Y6TXCJn4o0UyfTI3tACRHIFMmkHwfe%0Ata6tS3PE2S9MEVB%2F7dp7HNS7pSjoereRiJooBwwgKFCdvGVWX0QdzC0QzhLaQIeGGMRYT53jrfXC%0A%2Fvm%2F7d90x8fyAshvLZyHLgmPq%2BZPH6Zi2x%2Bw7ma1pNS9nu%2BCDlPSo1sIqxozQIF1sfqGhU7zkds2%0AvdzgAE9y9gYXuBvCh2g4sHMCZl75SwM9q9Qz4A4lPGgN18Ed8w6ifg%3D%3D&quot;}">            <a href="javascript:void(0)" class="a-popover-trigger a-declarative">Feedback<i class="a-icon a-icon-popover"></i></a>        </span>    </div></div><a class="a-link-normal" target="_top" rel="noopener" title="AUDBURN Damen Schultertasche Handtasche Groß Nylon Umhägetasche vintage Casual Shopper" href="https://www.amazon.de/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A10286607J1B9SQYQRJM&amp;qualifier=1546363963&amp;id=7621085598910798&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07LFSM8QQ%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1">                                        <img alt="AUDBURN Damen Schultertasche Handtasche Groß Nylon Umhägetasche vintage Casual Shopper" src="https://images-eu.ssl-images-amazon.com/images/I/413IzZEzsGL._AC_SR160,160_.jpg" class="a-dynamic-image" height="160" width="160" data-a-dynamic-image="{&quot;https://images-eu.ssl-images-amazon.com/images/I/413IzZEzsGL._AC_SR320,320_.jpg&quot;:[320,320],&quot;https://images-eu.ssl-images-amazon.com/images/I/413IzZEzsGL._AC_SR160,160_.jpg&quot;:[160,160],&quot;https://images-eu.ssl-images-amazon.com/images/I/413IzZEzsGL._AC_SR480,480_.jpg&quot;:[480,480]}">                <div data-rows="4" aria-hidden="true" class="sponsored-products-truncator-truncate sponsored-products-truncator-line-clamp-4">AUDBURN Damen Schultertasche Handtasche Groß Nylon Umhägetasche vintage Casual Shopper</div></a>                <style>    #sp_detail_B07LFSM8QQ_badge_text {        font-size: 12px;        line-height: 24px;        font-weight: 400;        color:#FFFFFF;        max-width: 136px;        letter-spacing: 0px;        white-space: nowrap;    }    #sp_detail_B07LFSM8QQ_badge {        background-color: #555555;        text-align: center;        min-width: 100px;        max-width: 153px;        border-radius: 0px 0px 0px 0px;        padding: 0px 6px 0px 10px;        background-image: none!important;        font-style: normal;        position: relative;        background-size: 400px 900px;        background-repeat: no-repeat;        display: inline-block;        vertical-align: top;        float: left;    }</style><div class="a-row sp_badge_spacing_below_image">                        <a class="a-link-normal" href="https://www.amazon.de/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_0?ie=UTF8&amp;adId=A10286607J1B9SQYQRJM&amp;qualifier=1546363963&amp;id=7621085598910798&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07LFSM8QQ%2Fref%3Dsspa_dk_detail_0%3Fpsc%3D1">                <i id="sp_detail_B07LFSM8QQ_badge"><span id="sp_detail_B07LFSM8QQ_badge_text">Neuerscheinung</span></i>                <img id="sp_detail_B07LFSM8QQ_badge_image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAYCAYAAADDLGwtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEMzNBOTI4OEM5NzExMUU4OTdBODk3QUFEMDQ0M0VBMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEMzNBOTI4OUM5NzExMUU4OTdBODk3QUFEMDQ0M0VBMiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQzM0E5Mjg2Qzk3MTExRTg5N0E4OTdBQUQwNDQzRUEyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQzM0E5Mjg3Qzk3MTExRTg5N0E4OTdBQUQwNDQzRUEyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+yIDtcAAAAJNJREFUeNqM000KgCAQBeCaM3o1XbR0mwuPUIeoI9QBaldQYxD0MzpvQBH5GNGHtTHmqPQaqcLKIXDl4RHoQwgLAl2aNNhztwGB9l6U4MwjIrDhYzcN7gk+N3IwcrcJgfa7IcGRu3UIdNIRJOWKwCtXBLrco5KUqwZtKXSSci3BV645+MtVLP6FLfK7SLvEXacAAwAhei+kpM2jpAAAAABJRU5ErkJggg=="/>            </a>                    </div><script type="text/javascript">(function(f) {f(window.P._namespace("FirebirdSpRendering"));}(function(P) {    P.when('A').execute(function (A) {        var space = 0.0;        var desired_width = 136;        var badgeText = A.$("#sp_detail_B07LFSM8QQ_badge_text");        while(badgeText.width() > desired_width) {            space = space - 0.1;            badgeText.css("letter-spacing", space + "px");        }    });}));</script>    <div class="a-row a-color-price">                                        <span class="a-color-price">EUR 28,88</span>                                                                </div></div>                </li>                                            <li class="a-carousel-card" style="width:160px;" role="listitem">                    <div id="sp_detail_B07LFPP7D5" data-asin="B07LFPP7D5" data-p13n-asin-metadata="{&quot;ref&quot;:&quot;sspa_dk_detail_1&quot;,&quot;asin&quot;:&quot;B07LFPP7D5&quot;}" data-viewpixelurl="/gp/sponsored-products/logging/log-action.html?qualifier=1546363963&amp;id=7621085598910798&amp;widgetName=sp_detail&amp;adId=20019877399404&amp;adIndex=1" class="a-section sp_offerVertical">    <noscript>        <img alt="" src="/gp/sponsored-products/logging/log-action.html?qualifier=1546363963&id=7621085598910798&widgetName=sp_detail&adId=20019877399404&eventType=2&adIndex=1">    </noscript>    <script type="text/javascript">(function(f) {f(window.P._namespace("FirebirdSpRendering"));}(function(P) {        P.when('SponsoredProductsViewability').execute(function(SV) {            SV.loadImagePixel("/gp/sponsored-products/logging/log-action.html?qualifier=1546363963&id=7621085598910798&widgetName=sp_detail&adId=20019877399404&eventType=2&adIndex=1");        });    }));</script><script type="text/javascript">(function(f) {f(window.P._namespace("FirebirdSpRendering"));}(function(P) {    P.when('A', 'SponsoredProductsViewability').execute(function(A, SV) {        SV.registerViewTrackingElement(A.$("#sp_detail_B07LFPP7D5"), "sp_detail");    });}));</script><div class="pa_feedbackForm_container_sp_detail" style="display:none;">    <div class="sp_adID">        <span class="a-declarative" data-action="a-modal" data-a-modal="{&quot;footer&quot;:&quot;&lt;div id='sponsored-products-feedback-footer'&gt;&quot;,&quot;closeButton&quot;:&quot;false&quot;,&quot;name&quot;:&quot;sponsored-products-feedback-modal-sp_detail&quot;,&quot;width&quot;:&quot;350&quot;,&quot;header&quot;:&quot;Feedback mitteilen&quot;,&quot;url&quot;:&quot;/gp/sponsored-products/lazyLoad/handler/sp-feedback-handler.html?pl=H8qn8WaYwWABV9d6HKqR7vyVNAvgsNL7PhWnf1qKpW9Sia2x5VIAxTsEf%2FtVah3EEroQT0Zctj%2F%2F%0AytYSIv7Uza%2FDonjkqLKxAvZLRKADvg7eeluJa2W7YbyWJ80BolXl0WFrXuf9USvLLtSO2PN9sb%2Fa%0AQcNAWxKjxfRyuXJRZ9b%2F%2FRFFoxVwXhyQosY%2B%2FNtMJ9nooaik27qhWAFC9bo3MbDFqDYLmTLt6Z7i%0AubVOQOdS070QHyPGPsV4lrSH8v3a5p4tYw2OFfK7R8floUiswE4XWpeN0KSAktanlTF8XJsjFNcN%0Ap7jKL%2BStg1DU4Sjgryv8yOVnhtwz17GRZxMUsdcjwqnduPK2Bx8SDk8WRTTe3Px4AyY2L4Ssya1T%0AHP5bj%2FsS95%2FPJTM%2BUPOEQt%2FRa670mB8StkQnw97qej5AEJ0UM4qF5S3IhQigIouvfq5GTAzCM3I7%0AiB8OOto6rBV3xj%2B0NwxXfNiy6HpWqESAEKkrvirIKzW4hX%2Bw0vs89%2FQANASjmrxZlGtI8qZkSXBh%0Aq8uGukeDY%2Bjv8AW7bQXOCceK9Ha1%2FEvhjEmr0vwSimXRWBqcpw2%2BcT%2FVhbIDUJKskGuJsWWSRwlK%0Akn9sbw5WG3Wfvdmx%2F3O2cXP%2Fj%2BuzrY5P3dA%2F4xn0qD3iuuDH8pPm0A%3D%3D&quot;}">            <a href="javascript:void(0)" class="a-popover-trigger a-declarative">Feedback<i class="a-icon a-icon-popover"></i></a>        </span>    </div></div><a class="a-link-normal" target="_top" rel="noopener" title="AUDBURN Damen Schultertasche Handtasche Groß Nylon Umhägetasche vintage Casual Shopper" href="https://www.amazon.de/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&amp;adId=A102934021G3SZDK1DO5X&amp;qualifier=1546363963&amp;id=7621085598910798&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07LFPP7D5%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1">                                        <img alt="AUDBURN Damen Schultertasche Handtasche Groß Nylon Umhägetasche vintage Casual Shopper" src="https://images-eu.ssl-images-amazon.com/images/I/31L7-1zMOAL._AC_SR160,160_.jpg" class="a-dynamic-image" height="160" width="160" data-a-dynamic-image="{&quot;https://images-eu.ssl-images-amazon.com/images/I/31L7-1zMOAL._AC_SR320,320_.jpg&quot;:[320,320],&quot;https://images-eu.ssl-images-amazon.com/images/I/31L7-1zMOAL._AC_SR480,480_.jpg&quot;:[480,480],&quot;https://images-eu.ssl-images-amazon.com/images/I/31L7-1zMOAL._AC_SR160,160_.jpg&quot;:[160,160]}">                <div data-rows="4" aria-hidden="true" class="sponsored-products-truncator-truncate sponsored-products-truncator-line-clamp-4">AUDBURN Damen Schultertasche Handtasche Groß Nylon Umhägetasche vintage Casual Shopper</div></a>                <style>    #sp_detail_B07LFPP7D5_badge_text {        font-size: 12px;        line-height: 24px;        font-weight: 400;        color:#FFFFFF;        max-width: 136px;        letter-spacing: 0px;        white-space: nowrap;    }    #sp_detail_B07LFPP7D5_badge {        background-color: #555555;        text-align: center;        min-width: 100px;        max-width: 153px;        border-radius: 0px 0px 0px 0px;        padding: 0px 6px 0px 10px;        background-image: none!important;        font-style: normal;        position: relative;        background-size: 400px 900px;        background-repeat: no-repeat;        display: inline-block;        vertical-align: top;        float: left;    }</style><div class="a-row sp_badge_spacing_below_image">                        <a class="a-link-normal" href="https://www.amazon.de/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_1?ie=UTF8&amp;adId=A102934021G3SZDK1DO5X&amp;qualifier=1546363963&amp;id=7621085598910798&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07LFPP7D5%2Fref%3Dsspa_dk_detail_1%3Fpsc%3D1">                <i id="sp_detail_B07LFPP7D5_badge"><span id="sp_detail_B07LFPP7D5_badge_text">Neuerscheinung</span></i>                <img id="sp_detail_B07LFPP7D5_badge_image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAYCAYAAADDLGwtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEMzNBOTI4OEM5NzExMUU4OTdBODk3QUFEMDQ0M0VBMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEMzNBOTI4OUM5NzExMUU4OTdBODk3QUFEMDQ0M0VBMiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQzM0E5Mjg2Qzk3MTExRTg5N0E4OTdBQUQwNDQzRUEyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQzM0E5Mjg3Qzk3MTExRTg5N0E4OTdBQUQwNDQzRUEyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+yIDtcAAAAJNJREFUeNqM000KgCAQBeCaM3o1XbR0mwuPUIeoI9QBaldQYxD0MzpvQBH5GNGHtTHmqPQaqcLKIXDl4RHoQwgLAl2aNNhztwGB9l6U4MwjIrDhYzcN7gk+N3IwcrcJgfa7IcGRu3UIdNIRJOWKwCtXBLrco5KUqwZtKXSSci3BV645+MtVLP6FLfK7SLvEXacAAwAhei+kpM2jpAAAAABJRU5ErkJggg=="/>            </a>                    </div><script type="text/javascript">(function(f) {f(window.P._namespace("FirebirdSpRendering"));}(function(P) {    P.when('A').execute(function (A) {        var space = 0.0;        var desired_width = 136;        var badgeText = A.$("#sp_detail_B07LFPP7D5_badge_text");        while(badgeText.width() > desired_width) {            space = space - 0.1;            badgeText.css("letter-spacing", space + "px");        }    });}));</script>    <div class="a-row a-color-price">                                        <span class="a-color-price">EUR 28,88</span>                                                                </div></div>                </li>                                            <li class="a-carousel-card" style="width:160px;" role="listitem">                    <div id="sp_detail_B07LFRX6Q8" data-asin="B07LFRX6Q8" data-p13n-asin-metadata="{&quot;ref&quot;:&quot;sspa_dk_detail_2&quot;,&quot;asin&quot;:&quot;B07LFRX6Q8&quot;}" data-viewpixelurl="/gp/sponsored-products/logging/log-action.html?qualifier=1546363963&amp;id=7621085598910798&amp;widgetName=sp_detail&amp;adId=20019880849804&amp;adIndex=2" class="a-section sp_offerVertical">    <noscript>        <img alt="" src="/gp/sponsored-products/logging/log-action.html?qualifier=1546363963&id=7621085598910798&widgetName=sp_detail&adId=20019880849804&eventType=2&adIndex=2">    </noscript>    <script type="text/javascript">(function(f) {f(window.P._namespace("FirebirdSpRendering"));}(function(P) {        P.when('SponsoredProductsViewability').execute(function(SV) {            SV.loadImagePixel("/gp/sponsored-products/logging/log-action.html?qualifier=1546363963&id=7621085598910798&widgetName=sp_detail&adId=20019880849804&eventType=2&adIndex=2");        });    }));</script><script type="text/javascript">(function(f) {f(window.P._namespace("FirebirdSpRendering"));}(function(P) {    P.when('A', 'SponsoredProductsViewability').execute(function(A, SV) {        SV.registerViewTrackingElement(A.$("#sp_detail_B07LFRX6Q8"), "sp_detail");    });}));</script><div class="pa_feedbackForm_container_sp_detail" style="display:none;">    <div class="sp_adID">        <span class="a-declarative" data-action="a-modal" data-a-modal="{&quot;footer&quot;:&quot;&lt;div id='sponsored-products-feedback-footer'&gt;&quot;,&quot;closeButton&quot;:&quot;false&quot;,&quot;name&quot;:&quot;sponsored-products-feedback-modal-sp_detail&quot;,&quot;width&quot;:&quot;350&quot;,&quot;header&quot;:&quot;Feedback mitteilen&quot;,&quot;url&quot;:&quot;/gp/sponsored-products/lazyLoad/handler/sp-feedback-handler.html?pl=YXNst%2Ba8LS8RvOmHCUxlo%2BG%2F7B%2BI37okaeIPFe5NR1rZBHrndgIv1aeMU%2FcrtYhhLY3rDjusViWq%0ALpHV8NDgeOWpTo3KFm2PHOnbUvEMmYPOkVu9Hxd1W2CbSUz3iQWz%2BdnT1%2FObIUklTfskDm%2F9Hk8X%0Af5jIUUssbjgSybbN95VBU5ILoRNxOJ77M7TiZs8vubTz9kqk%2BREyU6QVWNpdXxm2aBQEZBjg8ZQX%0Ao1Y5j7caD87q0%2BxuZMvT%2Bt8MSqqzvAWm0%2B2X7xwPSViej4nQGCsISMADEe0MpvzUF%2FEQTflztZ0d%0AvJQx3CReagpnf9SbJ3GMP7w74lC3ErCX3zJ42HtJNFe3nXIA5OkTmdWab%2Bv6Ddx4j7boIdtghaBk%0Ab%2F7YWpOLAluwiODrDhNUTO6MKRL%2BZ0FNeCnPHWyazRPRB3UpM1X78ZNxHb3LZbvbIUJS0d9OxGVF%0AS8h28am1NNrSy%2BSXCqmQjINPA8F2mcM1TT%2F730YoZDKHOncyqWv3T8PgeeIF7F5vEKvYvnxo78%2Bs%0Aa8CLrTrW6Ajw9lG3cWzFOVcGAKaHWj%2Be5LFuXHRzg%2Fra0rMxl6Sr83yVqcYFnYXO3GVrXyeoClrE%0AqrMxu%2Bm0Th8RzntBECP7xglkJERvwA%2FSxuwhgJmnh%2BA%3D&quot;}">            <a href="javascript:void(0)" class="a-popover-trigger a-declarative">Feedback<i class="a-icon a-icon-popover"></i></a>        </span>    </div></div><a class="a-link-normal" target="_top" rel="noopener" title="AUDBURN Damen Schultertasche Handtasche Groß Nylon Umhägetasche vintage Casual Shopper" href="https://www.amazon.de/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_2?ie=UTF8&amp;adId=A02903521WDYW6R9ZECIN&amp;qualifier=1546363963&amp;id=7621085598910798&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07LFRX6Q8%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1">                                        <img alt="AUDBURN Damen Schultertasche Handtasche Groß Nylon Umhägetasche vintage Casual Shopper" src="https://images-eu.ssl-images-amazon.com/images/I/41MikKtulaL._AC_SR160,160_.jpg" class="a-dynamic-image" height="160" width="160" data-a-dynamic-image="{&quot;https://images-eu.ssl-images-amazon.com/images/I/41MikKtulaL._AC_SR160,160_.jpg&quot;:[160,160],&quot;https://images-eu.ssl-images-amazon.com/images/I/41MikKtulaL._AC_SR320,320_.jpg&quot;:[320,320],&quot;https://images-eu.ssl-images-amazon.com/images/I/41MikKtulaL._AC_SR480,480_.jpg&quot;:[480,480]}">                <div data-rows="4" aria-hidden="true" class="sponsored-products-truncator-truncate sponsored-products-truncator-line-clamp-4">AUDBURN Damen Schultertasche Handtasche Groß Nylon Umhägetasche vintage Casual Shopper</div></a>                <style>    #sp_detail_B07LFRX6Q8_badge_text {        font-size: 12px;        line-height: 24px;        font-weight: 400;        color:#FFFFFF;        max-width: 136px;        letter-spacing: 0px;        white-space: nowrap;    }    #sp_detail_B07LFRX6Q8_badge {        background-color: #555555;        text-align: center;        min-width: 100px;        max-width: 153px;        border-radius: 0px 0px 0px 0px;        padding: 0px 6px 0px 10px;        background-image: none!important;        font-style: normal;        position: relative;        background-size: 400px 900px;        background-repeat: no-repeat;        display: inline-block;        vertical-align: top;        float: left;    }</style><div class="a-row sp_badge_spacing_below_image">                        <a class="a-link-normal" href="https://www.amazon.de/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_2?ie=UTF8&amp;adId=A02903521WDYW6R9ZECIN&amp;qualifier=1546363963&amp;id=7621085598910798&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07LFRX6Q8%2Fref%3Dsspa_dk_detail_2%3Fpsc%3D1">                <i id="sp_detail_B07LFRX6Q8_badge"><span id="sp_detail_B07LFRX6Q8_badge_text">Neuerscheinung</span></i>                <img id="sp_detail_B07LFRX6Q8_badge_image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAYCAYAAADDLGwtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEMzNBOTI4OEM5NzExMUU4OTdBODk3QUFEMDQ0M0VBMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEMzNBOTI4OUM5NzExMUU4OTdBODk3QUFEMDQ0M0VBMiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQzM0E5Mjg2Qzk3MTExRTg5N0E4OTdBQUQwNDQzRUEyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQzM0E5Mjg3Qzk3MTExRTg5N0E4OTdBQUQwNDQzRUEyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+yIDtcAAAAJNJREFUeNqM000KgCAQBeCaM3o1XbR0mwuPUIeoI9QBaldQYxD0MzpvQBH5GNGHtTHmqPQaqcLKIXDl4RHoQwgLAl2aNNhztwGB9l6U4MwjIrDhYzcN7gk+N3IwcrcJgfa7IcGRu3UIdNIRJOWKwCtXBLrco5KUqwZtKXSSci3BV645+MtVLP6FLfK7SLvEXacAAwAhei+kpM2jpAAAAABJRU5ErkJggg=="/>            </a>                    </div><script type="text/javascript">(function(f) {f(window.P._namespace("FirebirdSpRendering"));}(function(P) {    P.when('A').execute(function (A) {        var space = 0.0;        var desired_width = 136;        var badgeText = A.$("#sp_detail_B07LFRX6Q8_badge_text");        while(badgeText.width() > desired_width) {            space = space - 0.1;            badgeText.css("letter-spacing", space + "px");        }    });}));</script>    <div class="a-row a-color-price">                                        <span class="a-color-price">EUR 28,88</span>                                                                </div></div>                </li>                                            <li class="a-carousel-card" style="width:160px;" role="listitem">                    <div id="sp_detail_B07M92YKDB" data-asin="B07M92YKDB" data-p13n-asin-metadata="{&quot;ref&quot;:&quot;sspa_dk_detail_3&quot;,&quot;asin&quot;:&quot;B07M92YKDB&quot;}" data-viewpixelurl="/gp/sponsored-products/logging/log-action.html?qualifier=1546363963&amp;id=7621085598910798&amp;widgetName=sp_detail&amp;adId=20019914791304&amp;adIndex=3" class="a-section sp_offerVertical">    <noscript>        <img alt="" src="/gp/sponsored-products/logging/log-action.html?qualifier=1546363963&id=7621085598910798&widgetName=sp_detail&adId=20019914791304&eventType=2&adIndex=3">    </noscript>    <script type="text/javascript">(function(f) {f(window.P._namespace("FirebirdSpRendering"));}(function(P) {        P.when('SponsoredProductsViewability').execute(function(SV) {            SV.loadImagePixel("/gp/sponsored-products/logging/log-action.html?qualifier=1546363963&id=7621085598910798&widgetName=sp_detail&adId=20019914791304&eventType=2&adIndex=3");        });    }));</script><script type="text/javascript">(function(f) {f(window.P._namespace("FirebirdSpRendering"));}(function(P) {    P.when('A', 'SponsoredProductsViewability').execute(function(A, SV) {        SV.registerViewTrackingElement(A.$("#sp_detail_B07M92YKDB"), "sp_detail");    });}));</script><div class="pa_feedbackForm_container_sp_detail" style="display:none;">    <div class="sp_adID">        <span class="a-declarative" data-action="a-modal" data-a-modal="{&quot;footer&quot;:&quot;&lt;div id='sponsored-products-feedback-footer'&gt;&quot;,&quot;closeButton&quot;:&quot;false&quot;,&quot;name&quot;:&quot;sponsored-products-feedback-modal-sp_detail&quot;,&quot;width&quot;:&quot;350&quot;,&quot;header&quot;:&quot;Feedback mitteilen&quot;,&quot;url&quot;:&quot;/gp/sponsored-products/lazyLoad/handler/sp-feedback-handler.html?pl=Ue9G2Fccucz%2Bgb%2BLMv8d9tScGKstXGRY9O43bJRX4mUnlwt%2BbPjoUt1Ln73HOR8Jzmt%2BAA56SGcu%0AEpe0uIBXrmeMxqChgqDEmhDfnl9c8ciAf3LcMCA1%2FP3UwSRNVomu3Nkn5RclBrjXTWSk39jjvvGi%0AmIQMCZ6CmbiKEmDh7PPIVTDA%2Bgl59Z6AL83TintO0dLb%2FgPorSl0aWZluCtoh6U%2BH4PfPlzqkZzw%0Ax4UTd92oCdjJUQI42Kg7yEo0XMnlc6QpJHTws%2FcDSa0b3bd7VTfTBKB%2BxevMbiaY%2Bj%2B9NMaPVt%2Fp%0AB5UDHxqqGoJqs3e6DxQ72%2FsWPozG3Er63c0svtRWdM4cOQ%2FmvdQu1Ingp3t9VrpBkrnNIVVj19%2Bd%0AW8iVpQioiwj5YY4TH5qK2QbiSi1JlU8%2Fq2MASBTcBpTfrP2MbascZx%2BKipi9fkr48MVJ%2FggBaSrK%0AQP9zHBQMmgTMp5QOVAYkLPqQkFil9x0ZUcN2eIVWgUelclsdC2HUjVMGsI6xCmqMgo7NnJcrySTZ%0AdtKtDco%2F9SNnBOcz18QlADqichJQyt3o1ExfhjhZfNF%2B8%2FvW7gpDUKaVDLcIqUbIAqTma8tdCxI%2F%0AzQ56HkNOt7%2FqVfGDvSeYq5gTx9h7Y930CD7KabvskCyic8qOGQKh3Ngi4YGJCb42&quot;}">            <a href="javascript:void(0)" class="a-popover-trigger a-declarative">Feedback<i class="a-icon a-icon-popover"></i></a>        </span>    </div></div><a class="a-link-normal" target="_top" rel="noopener" title="AUDBURN Damen Schultertasche Handtasche Groß Nylon Umhägetasche vintage Casual Shopper" href="https://www.amazon.de/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_3?ie=UTF8&amp;adId=A0132150FX47ZR2NY4UQ&amp;qualifier=1546363963&amp;id=7621085598910798&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07M92YKDB%2Fref%3Dsspa_dk_detail_3%3Fpsc%3D1">                                        <img alt="AUDBURN Damen Schultertasche Handtasche Groß Nylon Umhägetasche vintage Casual Shopper" src="https://images-eu.ssl-images-amazon.com/images/I/51WOGrR69+L._AC_SR160,160_.jpg" class="a-dynamic-image" height="160" width="160" data-a-dynamic-image="{&quot;https://images-eu.ssl-images-amazon.com/images/I/51WOGrR69+L._AC_SR480,480_.jpg&quot;:[480,480],&quot;https://images-eu.ssl-images-amazon.com/images/I/51WOGrR69+L._AC_SR320,320_.jpg&quot;:[320,320],&quot;https://images-eu.ssl-images-amazon.com/images/I/51WOGrR69+L._AC_SR160,160_.jpg&quot;:[160,160]}">                <div data-rows="4" aria-hidden="true" class="sponsored-products-truncator-truncate sponsored-products-truncator-line-clamp-4">AUDBURN Damen Schultertasche Handtasche Groß Nylon Umhägetasche vintage Casual Shopper</div></a>                <style>    #sp_detail_B07M92YKDB_badge_text {        font-size: 12px;        line-height: 24px;        font-weight: 400;        color:#FFFFFF;        max-width: 136px;        letter-spacing: 0px;        white-space: nowrap;    }    #sp_detail_B07M92YKDB_badge {        background-color: #555555;        text-align: center;        min-width: 100px;        max-width: 153px;        border-radius: 0px 0px 0px 0px;        padding: 0px 6px 0px 10px;        background-image: none!important;        font-style: normal;        position: relative;        background-size: 400px 900px;        background-repeat: no-repeat;        display: inline-block;        vertical-align: top;        float: left;    }</style><div class="a-row sp_badge_spacing_below_image">                        <a class="a-link-normal" href="https://www.amazon.de/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_3?ie=UTF8&amp;adId=A0132150FX47ZR2NY4UQ&amp;qualifier=1546363963&amp;id=7621085598910798&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07M92YKDB%2Fref%3Dsspa_dk_detail_3%3Fpsc%3D1">                <i id="sp_detail_B07M92YKDB_badge"><span id="sp_detail_B07M92YKDB_badge_text">Neuerscheinung</span></i>                <img id="sp_detail_B07M92YKDB_badge_image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAYCAYAAADDLGwtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEMzNBOTI4OEM5NzExMUU4OTdBODk3QUFEMDQ0M0VBMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEMzNBOTI4OUM5NzExMUU4OTdBODk3QUFEMDQ0M0VBMiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQzM0E5Mjg2Qzk3MTExRTg5N0E4OTdBQUQwNDQzRUEyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQzM0E5Mjg3Qzk3MTExRTg5N0E4OTdBQUQwNDQzRUEyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+yIDtcAAAAJNJREFUeNqM000KgCAQBeCaM3o1XbR0mwuPUIeoI9QBaldQYxD0MzpvQBH5GNGHtTHmqPQaqcLKIXDl4RHoQwgLAl2aNNhztwGB9l6U4MwjIrDhYzcN7gk+N3IwcrcJgfa7IcGRu3UIdNIRJOWKwCtXBLrco5KUqwZtKXSSci3BV645+MtVLP6FLfK7SLvEXacAAwAhei+kpM2jpAAAAABJRU5ErkJggg=="/>            </a>                    </div><script type="text/javascript">(function(f) {f(window.P._namespace("FirebirdSpRendering"));}(function(P) {    P.when('A').execute(function (A) {        var space = 0.0;        var desired_width = 136;        var badgeText = A.$("#sp_detail_B07M92YKDB_badge_text");        while(badgeText.width() > desired_width) {            space = space - 0.1;            badgeText.css("letter-spacing", space + "px");        }    });}));</script>    <div class="a-row a-color-price">                                        <span class="a-color-price">EUR 24,88</span>                                                                </div></div>                </li>                                            <li class="a-carousel-card" style="width:160px;" role="listitem">                    <div id="sp_detail_B07M8T7CLD" data-asin="B07M8T7CLD" data-p13n-asin-metadata="{&quot;ref&quot;:&quot;sspa_dk_detail_4&quot;,&quot;asin&quot;:&quot;B07M8T7CLD&quot;}" data-viewpixelurl="/gp/sponsored-products/logging/log-action.html?qualifier=1546363963&amp;id=7621085598910798&amp;widgetName=sp_detail&amp;adId=20019897015804&amp;adIndex=4" class="a-section sp_offerVertical">    <noscript>        <img alt="" src="/gp/sponsored-products/logging/log-action.html?qualifier=1546363963&id=7621085598910798&widgetName=sp_detail&adId=20019897015804&eventType=2&adIndex=4">    </noscript>    <script type="text/javascript">(function(f) {f(window.P._namespace("FirebirdSpRendering"));}(function(P) {        P.when('SponsoredProductsViewability').execute(function(SV) {            SV.loadImagePixel("/gp/sponsored-products/logging/log-action.html?qualifier=1546363963&id=7621085598910798&widgetName=sp_detail&adId=20019897015804&eventType=2&adIndex=4");        });    }));</script><script type="text/javascript">(function(f) {f(window.P._namespace("FirebirdSpRendering"));}(function(P) {    P.when('A', 'SponsoredProductsViewability').execute(function(A, SV) {        SV.registerViewTrackingElement(A.$("#sp_detail_B07M8T7CLD"), "sp_detail");    });}));</script><div class="pa_feedbackForm_container_sp_detail" style="display:none;">    <div class="sp_adID">        <span class="a-declarative" data-action="a-modal" data-a-modal="{&quot;footer&quot;:&quot;&lt;div id='sponsored-products-feedback-footer'&gt;&quot;,&quot;closeButton&quot;:&quot;false&quot;,&quot;name&quot;:&quot;sponsored-products-feedback-modal-sp_detail&quot;,&quot;width&quot;:&quot;350&quot;,&quot;header&quot;:&quot;Feedback mitteilen&quot;,&quot;url&quot;:&quot;/gp/sponsored-products/lazyLoad/handler/sp-feedback-handler.html?pl=i8KsrJlLCA%2BDvCOkNZIsa7ERoNy%2F1V8JGdtpNCPi4%2Foppj6AwLJRn1SNFRBA44uQVeUd4%2F22980d%0A2a9llvBbH6p5mRiSspV%2BMJnIhiaKGTAuQje1MQWZzPmaG9YIMIikGK2rn91SDtruw%2FPfXl7%2FDW2Z%0AFta3tHsTasTGUpsfQHdyEk9bQr4amqEx13CfZRNjCTz%2BrIWa9al15rS8lovg0AtIR%2FsiGcLeuGJ5%0Adt5kTSeTgSxu0tg1o0iF2qImeWbtvljJUKURf3uzpOG3PvLxib%2F8PbySn%2F0e1VEd4tLe0%2F0dl%2Fo8%0Arvzv716eIGoabYnZjdGIGvd%2FH8Gp%2FJOIteqiPPKZRiHemsf%2Bw5yJilLrZkv2f7w5hxHWxuQ9R3Ej%0AVhxJ%2F3OxqvDA%2BTGuMCXqMLC7suCU1JMSVjfP2wr2Ft6DV57RmFEcDSJ6w3A9J2HkC5dZSPHllG%2Bu%0ABvEQhUzN6PAqO3ChD9d%2FoMiR6fAxqyCkcOJ6P%2BSmgaD1tlzRiisOSkir%2FvxKA0b2Ac%2F%2FODdUBSdo%0A3Y0w863Dc6LoEhY3KJitZaMmWj0ZyUZG7XEd%2BfkIBJSooMqBs5LyzP7IXbV9B6hEmbGWMko%2BTlhY%0ALrxjOD%2BWeJzgkmhUhADVOvWmN9xRK4%2BxkD1jNuSV0SH3qMUiaxD%2B3g%3D%3D&quot;}">            <a href="javascript:void(0)" class="a-popover-trigger a-declarative">Feedback<i class="a-icon a-icon-popover"></i></a>        </span>    </div></div><a class="a-link-normal" target="_top" rel="noopener" title="AUDBURN Damen Schultertasche Handtasche Groß Nylon Umhägetasche vintage Casual Shopper" href="https://www.amazon.de/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_4?ie=UTF8&amp;adId=A01803773NSCAH3NW2FJA&amp;qualifier=1546363963&amp;id=7621085598910798&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07M8T7CLD%2Fref%3Dsspa_dk_detail_4%3Fpsc%3D1">                                        <img alt="AUDBURN Damen Schultertasche Handtasche Groß Nylon Umhägetasche vintage Casual Shopper" src="https://images-eu.ssl-images-amazon.com/images/I/51frbd9EhnL._AC_SR160,160_.jpg" class="a-dynamic-image" height="160" width="160" data-a-dynamic-image="{&quot;https://images-eu.ssl-images-amazon.com/images/I/51frbd9EhnL._AC_SR160,160_.jpg&quot;:[160,160],&quot;https://images-eu.ssl-images-amazon.com/images/I/51frbd9EhnL._AC_SR480,480_.jpg&quot;:[480,480],&quot;https://images-eu.ssl-images-amazon.com/images/I/51frbd9EhnL._AC_SR320,320_.jpg&quot;:[320,320]}">                <div data-rows="4" aria-hidden="true" class="sponsored-products-truncator-truncate sponsored-products-truncator-line-clamp-4">AUDBURN Damen Schultertasche Handtasche Groß Nylon Umhägetasche vintage Casual Shopper</div></a>                <style>    #sp_detail_B07M8T7CLD_badge_text {        font-size: 12px;        line-height: 24px;        font-weight: 400;        color:#FFFFFF;        max-width: 136px;        letter-spacing: 0px;        white-space: nowrap;    }    #sp_detail_B07M8T7CLD_badge {        background-color: #555555;        text-align: center;        min-width: 100px;        max-width: 153px;        border-radius: 0px 0px 0px 0px;        padding: 0px 6px 0px 10px;        background-image: none!important;        font-style: normal;        position: relative;        background-size: 400px 900px;        background-repeat: no-repeat;        display: inline-block;        vertical-align: top;        float: left;    }</style><div class="a-row sp_badge_spacing_below_image">                        <a class="a-link-normal" href="https://www.amazon.de/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_4?ie=UTF8&amp;adId=A01803773NSCAH3NW2FJA&amp;qualifier=1546363963&amp;id=7621085598910798&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07M8T7CLD%2Fref%3Dsspa_dk_detail_4%3Fpsc%3D1">                <i id="sp_detail_B07M8T7CLD_badge"><span id="sp_detail_B07M8T7CLD_badge_text">Neuerscheinung</span></i>                <img id="sp_detail_B07M8T7CLD_badge_image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAYCAYAAADDLGwtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEMzNBOTI4OEM5NzExMUU4OTdBODk3QUFEMDQ0M0VBMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEMzNBOTI4OUM5NzExMUU4OTdBODk3QUFEMDQ0M0VBMiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQzM0E5Mjg2Qzk3MTExRTg5N0E4OTdBQUQwNDQzRUEyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQzM0E5Mjg3Qzk3MTExRTg5N0E4OTdBQUQwNDQzRUEyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+yIDtcAAAAJNJREFUeNqM000KgCAQBeCaM3o1XbR0mwuPUIeoI9QBaldQYxD0MzpvQBH5GNGHtTHmqPQaqcLKIXDl4RHoQwgLAl2aNNhztwGB9l6U4MwjIrDhYzcN7gk+N3IwcrcJgfa7IcGRu3UIdNIRJOWKwCtXBLrco5KUqwZtKXSSci3BV645+MtVLP6FLfK7SLvEXacAAwAhei+kpM2jpAAAAABJRU5ErkJggg=="/>            </a>                    </div><script type="text/javascript">(function(f) {f(window.P._namespace("FirebirdSpRendering"));}(function(P) {    P.when('A').execute(function (A) {        var space = 0.0;        var desired_width = 136;        var badgeText = A.$("#sp_detail_B07M8T7CLD_badge_text");        while(badgeText.width() > desired_width) {            space = space - 0.1;            badgeText.css("letter-spacing", space + "px");        }    });}));</script>    <div class="a-row a-color-price">                                        <span class="a-color-price">EUR 24,88</span>                                                                </div></div>                </li>                                            <li class="a-carousel-card" style="width:160px;" role="listitem">                    <div id="sp_detail_B07LFTJN79" data-asin="B07LFTJN79" data-p13n-asin-metadata="{&quot;ref&quot;:&quot;sspa_dk_detail_5&quot;,&quot;asin&quot;:&quot;B07LFTJN79&quot;}" data-viewpixelurl="/gp/sponsored-products/logging/log-action.html?qualifier=1546363963&amp;id=7621085598910798&amp;widgetName=sp_detail&amp;adId=20019880847504&amp;adIndex=5" class="a-section sp_offerVertical">    <noscript>        <img alt="" src="/gp/sponsored-products/logging/log-action.html?qualifier=1546363963&id=7621085598910798&widgetName=sp_detail&adId=20019880847504&eventType=2&adIndex=5">    </noscript>    <script type="text/javascript">(function(f) {f(window.P._namespace("FirebirdSpRendering"));}(function(P) {        P.when('SponsoredProductsViewability').execute(function(SV) {            SV.loadImagePixel("/gp/sponsored-products/logging/log-action.html?qualifier=1546363963&id=7621085598910798&widgetName=sp_detail&adId=20019880847504&eventType=2&adIndex=5");        });    }));</script><script type="text/javascript">(function(f) {f(window.P._namespace("FirebirdSpRendering"));}(function(P) {    P.when('A', 'SponsoredProductsViewability').execute(function(A, SV) {        SV.registerViewTrackingElement(A.$("#sp_detail_B07LFTJN79"), "sp_detail");    });}));</script><div class="pa_feedbackForm_container_sp_detail" style="display:none;">    <div class="sp_adID">        <span class="a-declarative" data-action="a-modal" data-a-modal="{&quot;footer&quot;:&quot;&lt;div id='sponsored-products-feedback-footer'&gt;&quot;,&quot;closeButton&quot;:&quot;false&quot;,&quot;name&quot;:&quot;sponsored-products-feedback-modal-sp_detail&quot;,&quot;width&quot;:&quot;350&quot;,&quot;header&quot;:&quot;Feedback mitteilen&quot;,&quot;url&quot;:&quot;/gp/sponsored-products/lazyLoad/handler/sp-feedback-handler.html?pl=IHXbVP1Wkl83jhnX0%2FUQWDVL07zhlrWAIzgnqCUHECk0iri07HmshqezytQoeJIA3D9l8ThoCF3z%0A82IUk3%2FVjZqyiUmsTVJZbmPM3lEdJuyVCiryQPfXiwEslgk%2FZBMSa6TjgsSi2cMfgzvBOqq3QVfr%0Ael0RouNknwibC0pboDQKOVzS%2FK0yyL7Tjk%2FN%2FhqVipekDh4QlO8nEZyB5dqaA8CVOvAZV7ZwijoS%0AZhmpbS%2BelAUZhOnTq3%2BFN%2FLPid6ozB3YbupS510a8FWrN%2B%2FH%2FUfv%2BVsLMGIAFv8DKzo3qTNC4M49%0AJyptxO0GrUpfEs%2FJb5YqQLaIHyB6hSBh2mreGOgg7xRMamAMKzvreF7tCO6JWyKfHjDO3SxXh3nd%0A7t7LD03g1Z0SVu3Kl4%2FKCpNxtplFCdfRAGrug2i6Br9YSl740TtbzRo092%2BE4WNPASxms4qBI3iJ%0AF3drEkCTT0oJPUS%2FKBtQCLWL41MXzrRfjUlDB29%2FnTbwby9MLbAtxLjAmGBMyAj6KNUN6PpoRBZH%0Acyg5CnHkkr23ejeBDsxvx7ahD%2BwsJ4o0RALOBj3z6K8En47lGanVN9BAbJuJjUKNo%2FVkDxXLKTB%2F%0AbL1yDK1urN60tLDv529SA%2BqCrnvGikizXTHdNLF1doibiUkaqNRhjFJKdAkAK1Aw&quot;}">            <a href="javascript:void(0)" class="a-popover-trigger a-declarative">Feedback<i class="a-icon a-icon-popover"></i></a>        </span>    </div></div><a class="a-link-normal" target="_top" rel="noopener" title="AUDBURN Damen Schultertasche Handtasche Groß Nylon Umhägetasche vintage Casual Shopper" href="https://www.amazon.de/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_5?ie=UTF8&amp;adId=A02680841U2LXWMAZQN17&amp;qualifier=1546363963&amp;id=7621085598910798&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07LFTJN79%2Fref%3Dsspa_dk_detail_5%3Fpsc%3D1">                                        <img alt="AUDBURN Damen Schultertasche Handtasche Groß Nylon Umhägetasche vintage Casual Shopper" src="https://images-eu.ssl-images-amazon.com/images/I/41OwI4HJnpL._AC_SR160,160_.jpg" class="a-dynamic-image" height="160" width="160" data-a-dynamic-image="{&quot;https://images-eu.ssl-images-amazon.com/images/I/41OwI4HJnpL._AC_SR480,480_.jpg&quot;:[480,480],&quot;https://images-eu.ssl-images-amazon.com/images/I/41OwI4HJnpL._AC_SR320,320_.jpg&quot;:[320,320],&quot;https://images-eu.ssl-images-amazon.com/images/I/41OwI4HJnpL._AC_SR160,160_.jpg&quot;:[160,160]}">                <div data-rows="4" aria-hidden="true" class="sponsored-products-truncator-truncate sponsored-products-truncator-line-clamp-4">AUDBURN Damen Schultertasche Handtasche Groß Nylon Umhägetasche vintage Casual Shopper</div></a>                <style>    #sp_detail_B07LFTJN79_badge_text {        font-size: 12px;        line-height: 24px;        font-weight: 400;        color:#FFFFFF;        max-width: 136px;        letter-spacing: 0px;        white-space: nowrap;    }    #sp_detail_B07LFTJN79_badge {        background-color: #555555;        text-align: center;        min-width: 100px;        max-width: 153px;        border-radius: 0px 0px 0px 0px;        padding: 0px 6px 0px 10px;        background-image: none!important;        font-style: normal;        position: relative;        background-size: 400px 900px;        background-repeat: no-repeat;        display: inline-block;        vertical-align: top;        float: left;    }</style><div class="a-row sp_badge_spacing_below_image">                        <a class="a-link-normal" href="https://www.amazon.de/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_5?ie=UTF8&amp;adId=A02680841U2LXWMAZQN17&amp;qualifier=1546363963&amp;id=7621085598910798&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07LFTJN79%2Fref%3Dsspa_dk_detail_5%3Fpsc%3D1">                <i id="sp_detail_B07LFTJN79_badge"><span id="sp_detail_B07LFTJN79_badge_text">Neuerscheinung</span></i>                <img id="sp_detail_B07LFTJN79_badge_image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAYCAYAAADDLGwtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEMzNBOTI4OEM5NzExMUU4OTdBODk3QUFEMDQ0M0VBMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEMzNBOTI4OUM5NzExMUU4OTdBODk3QUFEMDQ0M0VBMiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQzM0E5Mjg2Qzk3MTExRTg5N0E4OTdBQUQwNDQzRUEyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQzM0E5Mjg3Qzk3MTExRTg5N0E4OTdBQUQwNDQzRUEyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+yIDtcAAAAJNJREFUeNqM000KgCAQBeCaM3o1XbR0mwuPUIeoI9QBaldQYxD0MzpvQBH5GNGHtTHmqPQaqcLKIXDl4RHoQwgLAl2aNNhztwGB9l6U4MwjIrDhYzcN7gk+N3IwcrcJgfa7IcGRu3UIdNIRJOWKwCtXBLrco5KUqwZtKXSSci3BV645+MtVLP6FLfK7SLvEXacAAwAhei+kpM2jpAAAAABJRU5ErkJggg=="/>            </a>                    </div><script type="text/javascript">(function(f) {f(window.P._namespace("FirebirdSpRendering"));}(function(P) {    P.when('A').execute(function (A) {        var space = 0.0;        var desired_width = 136;        var badgeText = A.$("#sp_detail_B07LFTJN79_badge_text");        while(badgeText.width() > desired_width) {            space = space - 0.1;            badgeText.css("letter-spacing", space + "px");        }    });}));</script>    <div class="a-row a-color-price">                                        <span class="a-color-price">EUR 28,88</span>                                                                </div></div>                </li>                                            <li class="a-carousel-card" style="width:160px;" role="listitem">                    <div id="sp_detail_B07M5GZSMD" data-asin="B07M5GZSMD" data-p13n-asin-metadata="{&quot;ref&quot;:&quot;sspa_dk_detail_6&quot;,&quot;asin&quot;:&quot;B07M5GZSMD&quot;}" data-viewpixelurl="/gp/sponsored-products/logging/log-action.html?qualifier=1546363963&amp;id=7621085598910798&amp;widgetName=sp_detail&amp;adId=20019914786604&amp;adIndex=6" class="a-section sp_offerVertical">    <noscript>        <img alt="" src="/gp/sponsored-products/logging/log-action.html?qualifier=1546363963&id=7621085598910798&widgetName=sp_detail&adId=20019914786604&eventType=2&adIndex=6">    </noscript>    <script type="text/javascript">(function(f) {f(window.P._namespace("FirebirdSpRendering"));}(function(P) {        P.when('SponsoredProductsViewability').execute(function(SV) {            SV.loadImagePixel("/gp/sponsored-products/logging/log-action.html?qualifier=1546363963&id=7621085598910798&widgetName=sp_detail&adId=20019914786604&eventType=2&adIndex=6");        });    }));</script><script type="text/javascript">(function(f) {f(window.P._namespace("FirebirdSpRendering"));}(function(P) {    P.when('A', 'SponsoredProductsViewability').execute(function(A, SV) {        SV.registerViewTrackingElement(A.$("#sp_detail_B07M5GZSMD"), "sp_detail");    });}));</script><div class="pa_feedbackForm_container_sp_detail" style="display:none;">    <div class="sp_adID">        <span class="a-declarative" data-action="a-modal" data-a-modal="{&quot;footer&quot;:&quot;&lt;div id='sponsored-products-feedback-footer'&gt;&quot;,&quot;closeButton&quot;:&quot;false&quot;,&quot;name&quot;:&quot;sponsored-products-feedback-modal-sp_detail&quot;,&quot;width&quot;:&quot;350&quot;,&quot;header&quot;:&quot;Feedback mitteilen&quot;,&quot;url&quot;:&quot;/gp/sponsored-products/lazyLoad/handler/sp-feedback-handler.html?pl=kqkBPk%2ByPDt%2FJKr%2Fgh%2BQkwTWaJ6KUnT0vZ9L4dwtR9TYCNfxWy1BeQ%2FKPazEOALQHUX49sREFYa%2B%0AdHBXJ9DIiXHf2mr4y5Ma52ggqax42%2B%2FWRc2vdo6XPA5cmfCoohtJQlXcmjas4z2p5Bc%2FZ3cXLcOf%0A464hzvIvvYx8gjHs6bAT3kOj6e1iqVxXQRyJI6ERWU364T17GaLApPosj0z7zEJpEcLc6p7OtAJT%0Axup6FzH9yAp2aBK8jP6j9yMvEHUuOrpobVtdY2oEGdQNlJqriZf%2BVPOMMmnSqDYqA1GGGJ69jASF%0A%2FtUU6iBKu4XJN7JjjF2Oh9V63c4cu7e0RywsRfehmmn1S1mvH06yuKrr1i8FXxNOidOmbdiomfBT%0A4Va%2BMvEv%2BYUZoL7oGgE9hwWH08AQxytXWnQBRjUPIlru0lBb2qZ9KWVHXCuI5CDom6uHD0mYkWpm%0AKO%2FXm1SlZYRxFvMi%2FDYRyH%2BDwY6STM7XK9lQ3bI4TUroOLc6fNwkUOfqOfSKsgSyNpagvNnlQMTZ%0AjZzC0MhMLJSt4WaFHe8dwjPTVWtHCKsMOrgy6tIOzepl8UgJ7Zrw4502Aa%2BhgqlwoxtcEJSjcf0z%0AAjpXC8cQd%2FZWrf2ym7ZAth5PXT4mNAMTHtByFLB8VW2Rnow6tp1viZryzf7wxrpZ&quot;}">            <a href="javascript:void(0)" class="a-popover-trigger a-declarative">Feedback<i class="a-icon a-icon-popover"></i></a>        </span>    </div></div><a class="a-link-normal" target="_top" rel="noopener" title="AUDBURN Damen Schultertasche Handtasche Groß Nylon Umhägetasche vintage Casual Shopper" href="https://www.amazon.de/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_6?ie=UTF8&amp;adId=A01451141STR6NG5ALO8T&amp;qualifier=1546363963&amp;id=7621085598910798&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07M5GZSMD%2Fref%3Dsspa_dk_detail_6%3Fpsc%3D1">                                        <img alt="AUDBURN Damen Schultertasche Handtasche Groß Nylon Umhägetasche vintage Casual Shopper" src="https://images-eu.ssl-images-amazon.com/images/I/41z3UWTzxAL._AC_SR160,160_.jpg" class="a-dynamic-image" height="160" width="160" data-a-dynamic-image="{&quot;https://images-eu.ssl-images-amazon.com/images/I/41z3UWTzxAL._AC_SR160,160_.jpg&quot;:[160,160],&quot;https://images-eu.ssl-images-amazon.com/images/I/41z3UWTzxAL._AC_SR320,320_.jpg&quot;:[320,320],&quot;https://images-eu.ssl-images-amazon.com/images/I/41z3UWTzxAL._AC_SR480,480_.jpg&quot;:[480,480]}">                <div data-rows="4" aria-hidden="true" class="sponsored-products-truncator-truncate sponsored-products-truncator-line-clamp-4">AUDBURN Damen Schultertasche Handtasche Groß Nylon Umhägetasche vintage Casual Shopper</div></a>                <style>    #sp_detail_B07M5GZSMD_badge_text {        font-size: 12px;        line-height: 24px;        font-weight: 400;        color:#FFFFFF;        max-width: 136px;        letter-spacing: 0px;        white-space: nowrap;    }    #sp_detail_B07M5GZSMD_badge {        background-color: #555555;        text-align: center;        min-width: 100px;        max-width: 153px;        border-radius: 0px 0px 0px 0px;        padding: 0px 6px 0px 10px;        background-image: none!important;        font-style: normal;        position: relative;        background-size: 400px 900px;        background-repeat: no-repeat;        display: inline-block;        vertical-align: top;        float: left;    }</style><div class="a-row sp_badge_spacing_below_image">                        <a class="a-link-normal" href="https://www.amazon.de/gp/slredirect/picassoRedirect.html/ref=sspa_dk_detail_6?ie=UTF8&amp;adId=A01451141STR6NG5ALO8T&amp;qualifier=1546363963&amp;id=7621085598910798&amp;widgetName=sp_detail&amp;url=%2Fdp%2FB07M5GZSMD%2Fref%3Dsspa_dk_detail_6%3Fpsc%3D1">                <i id="sp_detail_B07M5GZSMD_badge"><span id="sp_detail_B07M5GZSMD_badge_text">Neuerscheinung</span></i>                <img id="sp_detail_B07M5GZSMD_badge_image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAYCAYAAADDLGwtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEMzNBOTI4OEM5NzExMUU4OTdBODk3QUFEMDQ0M0VBMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEMzNBOTI4OUM5NzExMUU4OTdBODk3QUFEMDQ0M0VBMiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQzM0E5Mjg2Qzk3MTExRTg5N0E4OTdBQUQwNDQzRUEyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQzM0E5Mjg3Qzk3MTExRTg5N0E4OTdBQUQwNDQzRUEyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+yIDtcAAAAJNJREFUeNqM000KgCAQBeCaM3o1XbR0mwuPUIeoI9QBaldQYxD0MzpvQBH5GNGHtTHmqPQaqcLKIXDl4RHoQwgLAl2aNNhztwGB9l6U4MwjIrDhYzcN7gk+N3IwcrcJgfa7IcGRu3UIdNIRJOWKwCtXBLrco5KUqwZtKXSSci3BV645+MtVLP6FLfK7SLvEXacAAwAhei+kpM2jpAAAAABJRU5ErkJggg=="/>            </a>                    </div><script type="text/javascript">(function(f) {f(window.P._namespace("FirebirdSpRendering"));}(function(P) {    P.when('A').execute(function (A) {        var space = 0.0;        var desired_width = 136;        var badgeText = A.$("#sp_detail_B07M5GZSMD_badge_text");        while(badgeText.width() > desired_width) {            space = space - 0.1;            badgeText.css("letter-spacing", space + "px");        }    });}));</script>    <div class="a-row a-color-price">                                        <span class="a-color-price">EUR 24,88</span>                                                                </div></div>                </li>                        </ol></div></div><div class="a-carousel-col a-carousel-right"><a class="a-button a-button-image a-carousel-button a-carousel-goto-nextpage" tabindex="0" href="#"><span class="a-button-inner"><i class="a-icon a-icon-next"><span class="a-icon-alt">Nächste Seite verwandter Gesponserter Produkte</span></i></span></a></div></div></div>            <div class="SP-Ad-Feedback">                 <a id="sp_detail_feedbackMessage" class="a-link-normal dynamicSPFL" href="#sp_detail_feedbackForm">                 Anzeige-Feedback                 </a>            </div>        <span class="a-end aok-hidden"></span></div>    <script type="text/javascript">(function(f) {f(window.P._namespace("FirebirdSpRendering"));}(function(P) {   P.when('A', 'a-carousel-framework', 'AmazonClicks').execute(function (A, CF, AC) {     CF.getCarousel(document.getElementById("sp_detail"));     AC.registerFeedbackEvents("sp_detail_carousel", "sp_detail_feedbackMessage", "Anzeige-Feedback", "Feedback ausblenden", "pa_feedbackForm_container_sp_detail");   });   P.when('A', 'SPHAT').execute(function(A, SPHAT) {     var containerSelector = "#sp_detail div";     var elementsAllowedToBeHidden = ['script', 'div.sp_adID', 'div.pa_feedbackForm_container_sp_detail', 'span.a-declarative', 'span.aok-hidden', 'input[type=hidden]', 'noscript'];     var csmCounterMetricName = 'sp_detail.adb';     var hadImpact = SPHAT.checkForHiddenElements(containerSelector, elementsAllowedToBeHidden, csmCounterMetricName);     A.state("sp_detail", { adBlockerHadImpact: hadImpact});   });   P.when('SponsoredProductsViewability').execute(function(SV) {     SV.registerAuiEvents(['ready', 'scroll', 'resize', 'orientationchange']);   });}));</script>
	                
                
            
        
        
        
        
        
        
        
    
    
    

    















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
    var iframeContent = "%0A%20%20%0A%0A%0A%0A%0A%3Chtml%20dir%3D%22ltr%22%3E%0A%20%20%3Chead%3E%0A%20%20%20%20%3Cstyle%20type%3D%27text%2Fcss%27%3E%0A%0A%0A%20h2%20%7B%0A%20%20%20%20%20%20color%3A%23333%20%21important%3B%0A%20%20%20%20%20%20font-size%3A21px%20%21important%3B%0A%20%20%20%20%20%20line-height%3A%201.3%3B%0A%20%20%20%20%20%20padding-bottom%3A%204px%3B%0A%20%20%20%20%20%20font-weight%3A%20normal%3B%0A%20%20%20%20%20%20font-family%3AArial%2C%20sans-serif%3B%0A%20%20%20%20%20%20margin%3A%200px%3B%0A%20%7D%0A%20%20%20%20%0Abody%20%7B%0A%20%20background-color%3A%20%23FFFFFF%3B%0A%20%20margin%3A%200px%3B%0A%20%20height%3A%20100%25%3B%0A%20%20width%3A%20100%25%3B%0A%20%20color%3A%20%23333333%3B%0A%20%20word-wrap%3A%20break-word%3B%20%0A%20%20font-family%3A%20verdana%2Carial%2Chelvetica%2Csans-serif%3B%0A%20%20font-size%3A%20small%3B%0A%7D%0A%0Atd%2C%20th%20%7B%0A%20%20font-family%3A%20verdana%2Carial%2Chelvetica%2Csans-serif%3B%0A%20%20font-size%3A%20small%3B%0A%7D%0A%0Ahr%20%7B%0A%20%20border-top%3A%201px%20dashed%20%23999999%3B%0A%20%20height%3A%201px%3B%0A%20%20color%3A%20%23FFFFFF%3B%0A%20%20margin%3A%203px%200px%3B%0A%20%20border-style%3A%20dashed%20none%20none%20none%3B%0A%20%20background-color%3A%20white%0A%7D%0Aul%20%7B%20%0A%20%20list-style-type%3A%20none%3B%0A%20%20margin%3A%200px%3B%20%0A%20%20padding%3A%200px%3B%20%0A%7D%0Aul%20li%20%7B%0A%20%20margin%3A%200.5em%200em%3B%0A%7D%0Aul%20li%20ul%20%7B%0A%20%20list-style-type%3A%20none%3B%0A%20%20margin-left%3A%2025px%3B%0A%7D%0Aul%20li%20ul%20li%20%7B%0A%20%20margin%3A%200em%3B%0A%7D%0Adiv.bucket%20%7B%20padding%3A%205px%200em%3B%20%7D%0Adiv.bucket%20div.content%20%7B%20margin%3A%200.5em%200px%200em%2025px%3B%20%7D%0Ahr%20%7B%20margin-left%3A%200px%3B%20%7D%0A.bucket%20h3%20%7B%0A%20%20color%3A%20%23000%3B%0A%20%20font-size%3A%201em%3B%0A%20%20font-weight%3A%20bold%3B%0A%20%20margin%3A%200px%200px%200.25em%200px%3B%0A%7D%0Ahr.bucketDivider%20%7B%20clear%3A%20left%3B%20%7D%0Adiv.bucket%20%7B%20padding%3A%205px%200em%3B%20%7D%0A.disclaim%20%7B%0A%20%20margin-top%3A%203px%3B%0A%20%20font-size%3A%2010px%3B%0A%20%20color%3A%20%23888%3B%0A%7D%0Abody%20hr%20%7B%0A%20%20border-top%3A%201px%20solid%20%23CCCCCC%3B%0A%7D%0Aa%3Alink%20%7B%0A%20%20color%3A%20%23003399%3B%0A%20%20text-decoration%3A%20underline%3B%0A%7D%0Aa%3Ahover%20%7B%0A%20%20color%3A%20%23CC6600%3B%0A%20%20text-decoration%3A%20none%3B%0A%7D%0Aa%3Aactive%20%7B%0A%20%20color%3A%20%23FF9933%3B%0A%7D%0Aa%3Avisited%20%7B%0A%20%20color%3A%20%23996633%3B%0A%7D%0A%0A%0A%0A%23productDescription%20h2.productDescriptionHeader%20%7B%0A%20%20%20%20margin-bottom%3A%200em%3B%09%0A%7D%0A%0A%23productDescription%20.emptyClear%20%7B%0A%20%20%20%20clear%3Aleft%3B%0A%20%20%20%20height%3A0px%3B%0A%20%20%20%20font-size%3A0px%3B%0A%7D%0A%0A%23productDescription%20div.productDescriptionWrapper%20%7B%0A%20%20%20%20margin%3A%200%200%201em%200%3B%09%09%0A%7D%0A%0A%23productDescription%20h3.productDescriptionSource%20%7B%0A%20%20%20%20font-weight%3Anormal%3B%0A%20%20%20%20color%3A%23333333%3B%0A%20%20%20%20font-size%3A1.23em%3B%0A%20%20%20%20margin%3A%20.75em%200%20.375em%20-15px%3B%0A%20%20%20%20clear%3Aleft%3B%0A%7D%0A%0A%23productDescription%20.seeAll%20%7B%0A%09margin-top%3A%201.25em%3B%20%0A%09margin-left%3A%20-15px%3B%20%0A%7D%0A%0A%23productDescription%20ul%2C%20%23technicalProductFeatures%20ul%20%7B%20%0A%20%20list-style-type%3A%20disc%3B%20%0A%20%20margin%3A%201.12em%200%3B%20%0A%20%20margin-left%3A%2020px%3B%20%0A%7D%0A%0A%23productDescription%20ul%20li%20%7B%20%0A%20%20margin%3A%200%200%200%2020px%3B%20%0A%7D%0A%0A%23productDescription%20ul%20li%20ul%20%7B%20%0A%20%20list-style-type%3A%20disc%3B%20%0A%20%20margin-left%3A%2020px%3B%20%0A%7D%0A%0A%23productDescription%20ul%20li%20ul%20li%20%7B%20%0A%20%20margin%3A%200%200%200%2020px%3B%20%0A%7D%0A%0A%23productDescription%20.aplus%20h4%2C%20%23productDescription%20.aplus%20h5%20%7B%0A%20%20%20%20margin%3A%200%200%20.75em%200%3B%0A%20%20%20%20font-size%3A%201em%3B%0A%7D%0A%0A%23productDescription%20.aplus%20h4%20%7B%0A%20%20%20%20color%3A%20%23CC6600%3B%0A%7D%0A%0A%23productDescription%20.aplus%20p%20%7B%0A%20%20%20%20margin%3A%200%200%201em%200%3B%0A%7D%0A%0A%23productDescription%20.aplus%20.break%20%7B%0A%20%20%20%20clear%3Aboth%3B%0A%20%20%20%20height%3A0px%3B%0A%20%20%20%20font-size%3A0px%3B%0A%7D%0A%0A%23productDescription%20.aplus%20.spacer%20%7B%0A%20%20%20%20margin-bottom%3A%2013px%3B%0A%7D%0A%0A%23productDescription%20.aplus%20img%20%7B%0A%20%20%20%20border%3Anone%3B%0A%7D%0A%0A%23productDescription%20.aplus%20.leftImage%2C%20%23productDescription%20.aplus%20.rightImage%2C%20%23productDescription%20.aplus%20.centerImage%20%7B%0A%20%20%20%20margin-bottom%3A%201em%3B%0A%20%20%20%20margin-top%3A%200%3B%0A%20%20%20%20text-align%3Acenter%3B%0A%20%20%20%20vertical-align%3Atop%3B%0A%7D%0A%0A%0A%23productDescription%20.aplus%20.leftImage%20%7B%0A%20%20%20%20margin-right%3A%2015px%3B%0A%20%20%20%20float%3Aleft%3B%0A%20%20%20%20clear%3Aleft%3B%0A%7D%0A%0A%23productDescription%20.aplus%20.rightImage%20%7B%0A%20%20%20%20margin-left%3A%2015px%3B%0A%20%20%20%20float%3Aright%3B%0A%20%20%20%20clear%3Aright%3B%0A%7D%0A%0A%23productDescription%20.aplus%20.imageCaption%20%7B%0A%20%20%20%20clear%3Aboth%3B%0A%20%20%20%20padding%3A%20.5em%20.5em%200%20.5em%3B%0A%20%20%20%20font-size%3A%20.846em%3B%0A%20%20%20%20display%3A%20block%3B%0A%7D%0A%0A%23productDescription%20.aplus%20table.data%20%7B%20%0A%09border-collapse%3A%20collapse%3B%20%0A%09margin-bottom%3A%201.25em%3B%0A%7D%0A%0A%23productDescription%20.aplus%20table.data%20th%20%7B%20%0A%09font-weight%3A%20bold%3B%20%0A%09background%3A%20%23F7F7F7%3B%20%0A%09border-style%3Asolid%3B%20%0A%09border-color%3A%20%23CCCCCC%3B%20%0A%09border-width%3A0%200%201px%201px%3B%20%0A%7D%0A%0A%23productDescription%20.aplus%20table.data%20td%20%7B%20%0A%09border-left%3A%201px%20solid%20%23CCC%3B%20%0A%09border-bottom%3A%201px%20dotted%20%23CCC%0A%7D%0A%0A%23productDescription%20.aplus%20table.data%20th%2C%20%23productDescription%20.aplus%20table.data%20td%0A%7B%20%0A%09padding%3A3px%2010px%3B%20%0A%09text-align%3Aleft%0A%7D%0A%0A%23productDescription%20.aplus%20table.data%20tfoot%20%7B%20%0A%09font-style%3A%20italic%3B%20%0A%7D%0A%0A%23productDescription%20.aplus%20table.data%20caption%20%7B%0A%09background%3A%20%23eee%3B%20%0A%09font-size%3A%20.8125em%3B%0A%7D%0A%0A%23productDescription%20.aplus%20table.data%20tr%20td%3Afirst-child%2C%20%23productDescription%20.aplus%20table.data%20tr%20th%3Afirst-child%20%7B%0A%09border-left-width%3A0px%3B%0A%7D%0A%0A%23productDescription%20.aplus%20ul%20%7B%0A%09margin%3A0%200%201em%200%3B%0A%7D%0A%0A%0A%23productDescription%20.aplus%20.center%20%7B%0A%09text-align%3A%20center%3B%0A%7D%0A%0A%23productDescription%20.aplus%20.right%20%7B%0A%09text-align%3A%20right%3B%0A%7D%0A%0A%23productDescription%20.aplus%20%20.sixth-col%2C%0A%23productDescription%20.aplus%20.fourth-col%2C%0A%23productDescription%20.aplus%20.third-col%2C%0A%23productDescription%20.aplus%20.half-col%2C%0A%23productDescription%20.aplus%20.two-third-col%2C%0A%23productDescription%20.aplus%20.three-fourth-col%2C%0A%23productDescription%20.aplus%20.one-col%20%7B%0A%20%20%20%20float%3Aleft%3B%0A%20%20%20%20margin-right%3A%201.6760%25%3B%0A%20%20%20%20overflow%3A%20hidden%3B%0A%7D%0A%0A%23productDescription%20.aplus%20.last%20%7B%0A%20%20%20%20margin-right%3A0px%3B%0A%7D%0A%0A%23productDescription%20.aplus%20.sixth-col%20%7B%0A%20%20%20%20width%3A%2015.080%25%3B%0A%7D%0A%23productDescription%20.aplus%20.fourth-col%20%7B%0A%20%20%20%20width%3A%2023.4637%25%3B%0A%7D%0A%0A%23productDescription%20.aplus%20.third-col%20%7B%0A%20%20%20%20width%3A%2031.8436%25%3B%0A%7D%0A%0A%23productDescription%20.aplus%20.half-col%20%7B%0A%20%20%20%20width%3A%2048.6034%25%3B%0A%7D%0A%0A%23productDescription%20.aplus%20.two-third-col%20%7B%0A%20%20%20%20width%3A%2065.3631%25%3B%0A%7D%0A%0A%23productDescription%20.aplus%20.three-fourth-col%20%7B%0A%20%20%20%20width%3A%2073.7430%25%3B%0A%7D%0A%0A%23productDescription%20.aplus%20.one-col%20%7B%0A%20%20%20%20width%3A%2098.8827%25%3B%0A%20%20%20%20margin-right%3A0%3B%0A%7D%0A%0A%23productDescription%20.aplus%20.last%20%7B%0A%20%20%20%20margin-right%3A0%3B%0A%7D%0A%0A%23productDescription%20.aplus%20%7B%0A%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20min-width%3A%20895px%3B%0A%7D%0A%0A%2A%20html%20%23productDescription%20.aplus%20%7B%0A%20%20%20%20width%3A%20expression%28%28document.body.clientWidth%20%3C%20936%29%20%3F%20%22895px%22%20%3A%20%22100%25%22%20%29%3B%0A%7D%0A%0A%20%20%20%20%3C%2Fstyle%3E%0A%20%20%20%20%3Cbase%20target%3D%27_top%27%20%2F%3E%0A%20%20%3C%2Fhead%3E%0A%20%20%3Cbody%3E%0A%20%20%3Cdiv%20id%3D%22pdIframeContent%22%3E%0A%0A%0A%0A%0A%0A%20%0A%0A%0A%0A%0A%3Cdiv%20id%3D%22biss-product-description-and-details%22%3E%3C%2Fdiv%3E%0A%0A%3Cdiv%20class%3D%22bucket%22%20id%3D%22productDescription%22%3E%0A%20%20%3Ch2%3EProduktbeschreibungen%3C%2Fh2%3E%0A%0A%3Cdiv%20class%3D%22content%22%3E%0A%0A%0A%20%20%20%20%0A%20%20%20%20%20%20%20%3Ch3%20class%3D%22productDescriptionSource%22%3EPressestimmen%3C%2Fh3%3E%0A%20%20%20%20%20%20%20%3Cdiv%20class%3D%22productDescriptionWrapper%22%20dir%3D%22auto%22%20%3E%0A%20%20%20%20%20%20%20%26%23x22%3BMaggie%20Nelson%20zeigt%2C%20dass%20es%20m%26%23xf6%3Bglich%20ist%2C%20Philosophie%20und%20radikale%20Kritik%20als%20romantische%20Orgie%20auf%20den%20Tr%26%23xfc%3Bmmern%20alter%20Gewohnheiten%20zu%20feiern%20%26%23x2013%3B%20um%20am%20Ende%20zu%20ahnen%2C%20was%20es%20hei%26%23xdf%3Bt%2C%20frei%20zu%20sein.%26%23x22%3B%20Margarete%20Stokowski%3Cbr%20%2F%3E%3Cbr%20%2F%3E%26%23x22%3BMit%20wilder%20Intelligenz%2C%20die%20letztlich%20der%20Liebe%20verpflichtet%20ist%2C%20schneidet%20Maggie%20Nelson%20durch%20die%20vorgefertigten%20Gedanken-%20und%20Gefu%3Fhlsstrukturen%20unserer%20Zeit.%26%23x22%3B%20Ben%20Lerner%3Cbr%20%2F%3E%3Cbr%20%2F%3E%26%23x22%3BAltern.%20Wachsen.%20Schwanger%20sein.%20Mann%20werden.%20K%26%23xf6%3Brper%20ver%26%23xe4%3Bndern%20sich%2C%20ihr%20Zustand%20wechselt%2C%20und%20daf%26%23xfc%3Br%20versucht%20Maggie%20Nelson%20eine%20eigene%20Sprache%20zu%20finden.%20%5B%26%23x2026%3B%5D%20Die%20Sch%26%23xf6%3Bnheit%20dieses%20ganz%20ungew%26%23xf6%3Bhnlichen%20Buchs%20macht%20aber%20nicht%20nur%20seine%20Leichtigkeit%20aus.%20Sondern%20eine%20Haltung%2C%20die%20sich%20mit%20einem%20Wort%20beschreiben%20l%26%23xe4%3Bsst%3A%20Respekt.%26%23x22%3B%20Julia%20Voss%2C%20Frankfurter%20Allgemeine%20Sonntagszeitung%2C%2024.09.2017%3Cbr%20%2F%3E%3Cbr%20%2F%3E%26%23x22%3B%26%23x201a%3BDie%20Argonauten%26%23x2018%3B%20ist%20nicht%20nur%20deshalb%20ein%20scharfsinniges%20Buch%2C%20weil%20es%2C%20durchsetzt%20von%20unz%26%23xe4%3Bhligen%20kursivierten%2C%20am%20Rand%20auf%20den%20jeweiligen%20Urheber%20verweisenden%20Zitaten%2C%20eine%20kompakte%2C%20stilistisch%20unverblasene%20Einf%26%23xfc%3Bhrung%20in%20den%20intellektuellen%20Kosmos%20der%20Gender%20Studies%20bietet%20%5B%26%23x2026%3B%5D.%20In%20einer%20Mischung%20aus%20Erz%26%23xe4%3Bhlen%20und%20Reflektieren%20%26%23xfc%3Bberpr%26%23xfc%3Bft%20Nelson%20jede%20vermeintliche%20Gewissheit%20r%26%23xfc%3Bcksichtslos%20am%20eigenen%20Leib.%20%5B%26%23x2026%3B%5D%20Zugleich%20gelingt%20ihr%20ein%20warmherziges%2C%20einf%26%23xfc%3Bhlsames%20St%26%23xfc%3Bck%20Literatur%2C%20das%20sich%20in%20seiner%20aus%20Fragmenten%20komponierten%2C%20an%20der%20Chronologie%20r%26%23xfc%3Bttelnden%2C%20immer%20wieder%20neu%20ansetzenden%2C%20abschweifenden%20und%20ausschweifenden%20Form%20st%26%23xe4%3Bndig%20selbst%20umbaut%2C%20dabei%20jedoch%20auf%20eine%20dramaturgische%20Klimax%20zusteuert%20%5B%26%23x2026%3B%5D.%26%23x22%3B%20Gregor%20Dotzauer%2C%20Der%20Tagesspiegel%2C%2025.09.2017%3Cbr%20%2F%3E%3Cbr%20%2F%3E%26%23x22%3BDer%20Widerspruch%2C%20jemanden%20in%20Worte%20fassen%20zu%20wollen%2C%20der%20sich%20nicht%20festlegen%20lassen%20will%2C%20sorgt%20f%26%23xfc%3Br%20die%20Reibung%2C%20die%20dieses%20Buch%20so%20elektrisierend%20macht.%20Es%20ist%20der%20Versuch%2C%20den%20Begriff%20%26%23x201a%3Bqueer%26%23x2018%3B%2C%20der%2C%20wie%20Nelson%20sagt%2C%20%26%23x201a%3Bumfasst%2C%20was%20zerschmilzt%20oder%20sich%20verschiebt%26%23x2018%3B%2C%20in%20einen%20Text%20zu%20verwandeln.%26%23x22%3B%20Xaver%20von%20Cranach%2C%20Der%20Spiegel%2C%2030.09.2017%3Cbr%20%2F%3E%3Cbr%20%2F%3E%26%23x22%3B%5BMaggie%20Nelson%5D%20findet%20zu%20einer%20ekstatischen%20Art%20des%20Schreibens%20%26%23xfc%3Bber%20die%20Liebe.%26%23x22%3B%20Hannah%20Pilarczyk%2C%20SPIEGEL%20ONLINE%2C%2002.10.2017%3Cbr%20%2F%3E%3Cbr%20%2F%3E%26%23x22%3BDas%20Bestechende%20an%20Nelsons%20Denken%20ist%20ihr%20Einsatz%20f%26%23xfc%3Br%20eine%20Offenheit%2C%20f%26%23xfc%3Br%20eine%20Anerkennung%20von%20Erfahrungen%2C%20die%20nicht%20identisch%20mit%20den%20eigenen%20sind%20%26%23x2013%3B%20ohne%20falsche%20Vereinnahmung.%20Damit%20verbunden%20ist%20ihr%20Ringen%20um%20gr%26%23xf6%3B%26%23xdf%3Btm%26%23xf6%3Bgliche%20Freiheit%3A%20des%20Geschlechts%2C%20des%20Begehrens%2C%20der%20gelebten%20Sexualit%26%23xe4%3Bt%2C%20der%20Vielfalt%20von%20Familie.%20%5B%26%23x2026%3B%5D%20Ihr%20Buch%20ist%20mithin%20auch%20ein%20Pl%26%23xe4%3Bdoyer%20gegen%20all%20jene%20r%26%23xfc%3Bckw%26%23xe4%3Brtsgewandten%20Stimmen%2C%20die%20heute%20europaweit%20und%20nat%26%23xfc%3Brlich%20auch%20in%20Trumps%20Amerika%20immer%20lauter%20werden.%26%23x22%3B%20Carola%20Ebeling%2C%20Missy%20Magazin%2C%20Oktober%2F%20September%202017%3Cbr%20%2F%3E%3Cbr%20%2F%3E%26%23x201e%3BSie%20verwirft%20fixe%20Kategorien%2C%20Normen%20und%20Identit%26%23xe4%3Bten%20und%20sucht%20stattdessen%20nach%20existenziellen%20Einsichten%2C%20einer%20lustvollen%20Mutterschaft%20und%20einer%20Liebesbeziehung%20jenseits%20aller%20Konventionen.%26%23x201c%3B%20Paula%20Lochte%2C%20L.MAG%2C%2003%2F04%202018%3Cbr%20%2F%3E%3Cbr%20%2F%3E%26%23x201e%3B%27Die%20Argonauten%27%20von%20Maggie%20Nelson%20fordern%20mich%20heraus.%20Das%20Buch%20bietet%20eine%20Einf%26%23xfc%3Bhrung%20in%20den%20intellektuellen%20Kosmos%20der%20Genderstudies%2C%20schneidet%20durch%20vorgefertigte%20Gedanken-%20und%20Gef%26%23xfc%3Bhlsstrukturen%20und%20ist%20die%20ergreifende%20Erz%26%23xe4%3Bhlung%20des%20Wesens%20von%20Liebe%20und%20Familie.%26%23x201c%3B%20Veronika%20Steinb%26%23xf6%3Bck%2C%20Die%20Presse%2C%2017.03.2018%3Cbr%20%2F%3E%3Cbr%20%2F%3E%26%23x22%3BEin%20hochspannendes%20Buch%20%26%23xfc%3Bber%20Freiheit%20und%20Identit%26%23xe4%3Bt%26%23x22%3B%20Bernadette%20Conrad%2C%20SRF2%20Kultur%2C%2014.11.2017%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22emptyClear%22%3E%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%3C%2Fdiv%3E%0A%0A%20%20%20%20%0A%20%20%20%20%20%20%20%3Ch3%20class%3D%22productDescriptionSource%22%3EWerbetext%3C%2Fh3%3E%0A%20%20%20%20%20%20%20%3Cdiv%20class%3D%22productDescriptionWrapper%22%20dir%3D%22auto%22%20%3E%0A%20%20%20%20%20%20%20Maggie%20Nelson%20fordert%20uns%20heraus%3A%20ein%20Buch%20%26%23xfc%3Bber%20queere%20Liebe%2C%20Familie%20und%20das%20Leben%20als%20freie%20%26%23x2013%3B%20und%20befreiende%20%26%23x2013%3B%20Improvisation.%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22emptyClear%22%3E%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%3C%2Fdiv%3E%0A%3Cdiv%20class%3D%22seeAll%22%3E%0A%0A%0A%0A%0A%3Ca%20href%3D%22https%3A%2F%2Fwww.amazon.de%2Fdp%2Fproduct-description%2FB071FCV5KW%2Fref%3Ddp_proddesc_0%3F_encoding%3DUTF8%26isInIframe%3D1%26n%3D530484031%26s%3Ddigital-text%22%3EAlle%20Produktbeschreibungen%3C%2Fa%3E%3C%2Fdiv%3E%20%20%3C%2Fdiv%3E%0A%3C%2Fdiv%3E%0A%0A%0A%0A%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fbody%3E%0A%3C%2Fhtml%3E%0A";
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





    
    




  



        
        
        
        



  















        




















    
    




  



        
        
        
        



  















        



















  
    



















































    












    
	
	
    
  
  
    

















    
<div id="detail_bullets_id">




<a name="productDetails" id="productDetails" aria-hidden="true"></a>
<hr noshade="noshade" size="1" class="bucketDivider" />
<table cellpadding="0" cellspacing="0" border="0" id="productDetailsTable">
  <tr>
    <td class="bucket">

<h2>Produktinformation</h2>
  <div class="content">







<ul>

















<li><b>Format:</b> Kindle Edition</li>






<li><b>Dateigröße:</b> 1170 KB</li>







<li><b>Seitenzahl der Print-Ausgabe:</b> 192 Seiten</li>











<li><b>Verlag:</b> Hanser Berlin (25. September 2017)</li>

   

















<li id="sold-by-merchant">
  <b>Verkauf durch:</b>&nbsp;Amazon Media EU  S.à r.l.
</li>






<li><b>Sprache:</b> Deutsch</li>









<li><b>ASIN:</b> B071FCV5KW</li>









<li><b>Text-to-Speech (Vorlesemodus): </b>
<a href='#' id='ttsPop' class='kicsPopover'>
  <span>Aktiviert</span>
  <img src="https://images-eu.ssl-images-amazon.com/images/G/03/x-locale/common/carrot._CB192193304_.gif"/>
</a>
</li>

<script type="text/javascript">
P.when("jQuery", "a-popover", "ready").execute(function ($, popover) { 
 var $ttsPopover = $('#ttsPop');
 popover.create($ttsPopover, {
    "closeButton": "false",
    "position": "triggerBottom",
    "width": "256",
    "popoverLabel": "Text-zu-Sprache Popover",
    "closeButtonLabel": "Text-zu-Sprache Popover schließen", 
    "content": '<div class="kicsPopover">' + "Die Sprachausgabe ist für den Kindle Fire HDX, Kindle Fire HD, Kindle Fire, Amazon Echo, Amazon Tap und Echo Dot verfügbar." + '</div>'
    });
});
</script>

   









<li style="overflow:hidden;">
  <div class='xrayBullet'>
    <b>X-Ray:</b>
  </div>
  <div class='xrayBullet xrayInfo'>
    <div>
      <a href='#' id='xrayPop_3F09DBDE0DEB11E9A91CAB7C71C55DC8' class='kicsPopover'>
        <span>Nicht aktiviert</span>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/03/x-locale/common/carrot._CB192193304_.gif"/>
      </a>
    </div>
  </div>
</li>

  <script type="text/javascript">
P.when("jQuery", "a-popover", "ready").execute(function ($, popover) { 
 var $xrayPopover = $('#xrayPop_3F09DBDE0DEB11E9A91CAB7C71C55DC8');
 popover.create($xrayPopover, {
    "closeButton": "false",
    "position": "triggerBottom",
    "width": "256",
    "popoverLabel": "X-Ray Popover ",
    "closeButtonLabel": "X-Ray Popover schließen",
    "content": '<div class="kicsPopover">' + "X-Ray ist auf allen Kindle Touch-, Kindle Paperwhite-, Kindle Fire HD-Geräten sowie auf der neuesten Generation von Kindle Fire verfügbar." + '</div>',
    });
});
</script>






      









<li><b>Word Wise:</b> Nicht aktiviert</li>


  













  <li style="overflow:hidden;">
    <b>Screenreader: </b>
    <a href='#' id='screenReaderPopover' class='kicsPopover'>
      <span>Unterstützt</span>
      <img src="https://images-eu.ssl-images-amazon.com/images/G/03/x-locale/common/carrot._CB192193304_.gif"/>
    </a>
  </li>

  <script type="text/javascript">
    P.when("jQuery", "a-popover", "ready").execute(function ($, popover) {
      var $screenReaderPopover = $('#screenReaderPopover');
      popover.create($screenReaderPopover, {
        "position": "triggerBottom",
        "width": "500",
        "content": '<div class="kicsPopover">' + "Der Text dieses e-Books kann auf allen gängigen Readern gelesen werden. Beschreibungen von Bildern (auch bekannt als “ALT-Text”) können Sie mit der Kindle für PC-App lesen, sofern der Verlag sie bereitstellt. Sollte dieses Buch anderen Arten von nicht textbasierten Inhalten enthalten (wie Tabellen oder mathematische Gleichungen), können diese derzeit nicht von Readern gelesen werden. " + '</div>',
        "popoverLabel": "Der Text dieses e-Books kann auf allen gängigen Readern gelesen werden. Beschreibungen von Bildern (auch bekannt als “ALT-Text”) können Sie mit der Kindle für PC-App lesen, sofern der Verlag sie bereitstellt. Sollte dieses Buch anderen Arten von nicht textbasierten Inhalten enthalten (wie Tabellen oder mathematische Gleichungen), können diese derzeit nicht von Readern gelesen werden.",
        "closeButtonLabel": "Screenreader Popover schließen"
      });
    });
  </script>

  









    <li style="overflow:hidden;">
      <b>Verbesserter Schriftsatz:</b>
      <a href='#' id='typesettingPopover' class='kicsPopover'>
        <span>Aktiviert</span>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/03/x-locale/common/carrot._CB192193304_.gif"/>
      </a>
    </li>

      <script type="text/javascript">
        P.when("jQuery", "a-popover", "ready").execute(function ($, popover) {
          var $typesettingPopover = $('#typesettingPopover');
          popover.create($typesettingPopover, {
            "position": "triggerBottom",
            "width": "256",
            "content": '<div class="kicsPopover">' + "Deutliche Schriftsatzverbesserungen bieten schnelleres Lesen mit weniger Augenbelastung und attraktiven Seiten-Layouts, auch bei größeren Schriftgrößen. <a href=\\"/b?ie=UTF8&amp;node=6750786031\\">>Weitere Informationen</a>" + '</div>',
            "popoverLabel": "Popover für verbesserten Schriftsatz",
            "closeButtonLabel": "Popover für verbesserten Schriftsatz schließen"
          });
        });
      </script>







  




































  
  





























<li><b>Durchschnittliche Kundenbewertung:</b> 




<span class="dpProductDetailB071FCV5KW">
  <span class="a-declarative" data-action="a-popover" data-a-popover="{&quot;closeButton&quot;:&quot;false&quot;,&quot;max-width&quot;:&quot;700&quot;,&quot;position&quot;:&quot;triggerBottom&quot;,&quot;url&quot;:&quot;/review/widgets/average-customer-review/popover/ref=acr_dpproductdetail_popover?ie=UTF8&amp;asin=B071FCV5KW&amp;contextId=dpProductDetail&amp;ref=acr_dpproductdetail_popover&quot;}">
    <a href="javascript:void(0)" class="a-popover-trigger a-declarative">
      <a class="a-link-normal a-text-normal" href="https://www.amazon.de/product-reviews/B071FCV5KW/ref=acr_dpproductdetail_text?ie=UTF8&showViewpoints=1">
        <i class="a-icon a-icon-star a-star-3"><span class="a-icon-alt">3.0 von 5 Sternen</span></i>
      </a>
    <i class="a-icon a-icon-popover"></i></a>
  </span>
  <span class="a-letter-space"></span>
  <span class="a-size-small">
    <a class="a-link-normal" href="https://www.amazon.de/product-reviews/B071FCV5KW/ref=acr_dpproductdetail_text?ie=UTF8&showViewpoints=1">
      1 Kundenrezension
    </a>
  </span>
</span>










</li>





























<li id="SalesRank">
<b>Amazon Bestseller-Rang:</b> 


















#125.284 Bezahlt in Kindle-Shop (<a href="https://www.amazon.de/gp/bestsellers/digital-text/ref=pd_dp_ts_digital-text_1">Siehe Top 100 Bezahlt in Kindle-Shop</a>)
 





















































<style type="text/css">
.zg_hrsr { margin: 0; padding: 0; list-style-type: none; }
.zg_hrsr_item { margin: 0 0 0 10px; }
.zg_hrsr_rank { display: inline-block; width: 80px; text-align: right; }
</style>

<ul class="zg_hrsr">
    <li class="zg_hrsr_item">
    <span class="zg_hrsr_rank">Nr. 692</span>
    <span class="zg_hrsr_ladder">in&nbsp;<a href="https://www.amazon.de/gp/bestsellers/digital-text/ref=pd_zg_hrsr_digital-text_1_1">Kindle-Shop</a> &gt; <a href="https://www.amazon.de/gp/bestsellers/digital-text/530886031/ref=pd_zg_hrsr_digital-text_1_2">eBooks</a> &gt; <a href="https://www.amazon.de/gp/bestsellers/digital-text/567111031/ref=pd_zg_hrsr_digital-text_1_3">Belletristik</a> &gt; <a href="https://www.amazon.de/gp/bestsellers/digital-text/6692063031/ref=pd_zg_hrsr_digital-text_1_4">Populäre Belletristik</a> &gt; <b><a href="https://www.amazon.de/gp/bestsellers/digital-text/610662031/ref=pd_zg_hrsr_digital-text_1_5_last">Romanhafte Biografien</a></b></span>
    </li>
    <li class="zg_hrsr_item">
    <span class="zg_hrsr_rank">Nr. 2350</span>
    <span class="zg_hrsr_ladder">in&nbsp;<a href="https://www.amazon.de/gp/bestsellers/books/ref=pd_zg_hrsr_books_2_1">Bücher</a> &gt; <a href="https://www.amazon.de/gp/bestsellers/books/117/ref=pd_zg_hrsr_books_2_2">Literatur & Fiktion</a> &gt; <a href="https://www.amazon.de/gp/bestsellers/books/14166873031/ref=pd_zg_hrsr_books_2_3">Unterhaltungsliteratur</a> &gt; <b><a href="https://www.amazon.de/gp/bestsellers/books/420047031/ref=pd_zg_hrsr_books_2_4_last">Biografische Romane</a></b></span>
    </li>
    <li class="zg_hrsr_item">
    <span class="zg_hrsr_rank">Nr. 10964</span>
    <span class="zg_hrsr_ladder">in&nbsp;<a href="https://www.amazon.de/gp/bestsellers/digital-text/ref=pd_zg_hrsr_digital-text_3_1">Kindle-Shop</a> &gt; <a href="https://www.amazon.de/gp/bestsellers/digital-text/530886031/ref=pd_zg_hrsr_digital-text_3_2">eBooks</a> &gt; <b><a href="https://www.amazon.de/gp/bestsellers/digital-text/567112031/ref=pd_zg_hrsr_digital-text_3_3_last">Biografien & Erinnerungen</a></b></span>
    </li>
</ul>

</li>






		
	
		
	
		
	
			
			
			
     	    
            
            
            
            <P><div class="bucket"></div></P>




	


	

   <li> <br/>&nbsp;<b><a href='https://www.amazon.de/gp/feature.html?ie=UTF8&docId=1000601883'>Ist der Verkauf dieses Produkts für Sie nicht akzeptabel</a></b>? </li>




</ul>

<span class="tiny">
<ul class="noteBullets">









</ul>
</span>

  </div>
    </td>
  </tr>
</table>
</div>












    
    



  



        
        
        
        



  















        














<div id="kindleIllustratedLearnMore_feature_div" class="feature" data-feature-name="kindleIllustratedLearnMore">
         
     




    

    
    
    
        
            
                
	                
	                
	                	



	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>

 




    
    



  



        
        
        
        



  















        














<div id="ebooksBackgroundImage_feature_div" class="feature" data-feature-name="ebooksBackgroundImage">
         
     




    

    
    
    
        
            
                
	                
	                
	                	

    

    
        
        
    

	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>

 


    
    
        
            
               
    




  
<script>
          P.when("A").execute("books-entity-teaser", function (A) { 
              var elem = A.$("#books-entity-teaser");
              function scrollObserver() {
                  if (A.onScreen(elem, 400)) {
                      A.off("scroll", scrollObserver);
                      A.get("/gp/product/features/entity-teaser/books-entity-teaser-ajax.html?ASIN=B071FCV5KW&PRODUCT_GROUP=ebooks_display_on_website", {
                          cache: true,
                          success: function(data) {
                              elem.html(data); 
                          }
                      }); 
                   }
               }
               A.on("scroll", scrollObserver); 
          });

</script>
<div id="books-entity-teaser">
</div>














  





    
    



  



        
        
        
        



  















        








<div id="sponsoredProducts2_feature_div" class="feature" data-feature-name="sponsoredProducts2">
         
     




    

    
    
    
        
            
                
	                
	                
	                	
	                
                
            
        
        
        
        
        
        
        
    
    
    

    















    </div>




<script>
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/3186WSOg8XL.js?AUIClients/DetailPageEbooksAssets#desktop');
</script>



<a id="customerReviews" class="a-link-normal" href="#"></a><hr class="a-spacing-large a-divider-normal"><span class="cr-widget-PageState">
  <span id="cr-state-object" data-state='{"asin":"B071FCV5KW","customerId":"A96YKT37ODSSG","deviceType":"desktop","reviewCommentsAjaxUrl":"","reviewCommentSubmissionAjaxUrl":"","approvedAuthorAjaxUrl":"","reviewsAjaxUrl":"/hz/reviews-render/ajax/medley-filtered-reviews/get/","medleyReviewsAjaxUrl":"/hz/reviews-render/ajax/medley-reviews/get/","signinUrl":"https://www.amazon.de/Die-Argonauten-Maggie-Nelson-ebook/product-reviews/B071FCV5KW?ie\u003dUTF8","weblabTriggerUrl":"/hz/reviews-render/ajax/weblab-trigger","reftagTriggerUrl":"/hz/reviews-render/ajax/reftag-trigger","mobileImageGalleryUrl":"","getImagesAjaxUrl":"","productInfoUrl":"","disableScroll":false}'></span>
</span>
<link rel="stylesheet" href="https://images-eu.ssl-images-amazon.com/images/I/01r96ER8PHL._RC|01LsHoHLL0L.css,01LKsGfpclL.css,01x1K0jaQnL.css,01cdXa5nSoL.css_.css?AUIClients/DesktopMedleyFilteringMetaAsset" />
<script>
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/31EfOK3OA7L._RC|11zK+fpVdVL.js,01vTmKfX-gL.js,11xQMWsDHFL.js,21cvg-DIyQL.js_.js?AUIClients/DesktopMedleyFilteringMetaAsset');
</script>
<div id="reviewsMedley" data-hook="reviews-medley-widget" class="a-fixed-left-grid a-spacing-extra-large"><div class="a-fixed-left-grid-inner" style="padding-left:300px"><div class="a-fixed-left-grid-col a-col-left" style="width:300px;margin-left:-300px;float:left;"><a id="dp-summary-see-all-reviews" data-hook="see-all-reviews-link" class="a-link-normal a-color-base" href="/Die-Argonauten-Maggie-Nelson-ebook/product-reviews/B071FCV5KW/ref=cm_cr_dp_d_show_all_top?ie=UTF8&amp;reviewerType=all_reviews"><h2 data-hook="total-review-count">1 Kundenrezension</h2></a><div class="a-section a-spacing-none a-spacing-top-mini cr-widget-ACR"><div class="a-fixed-left-grid AverageCustomerReviews a-spacing-medium"><div class="a-fixed-left-grid-inner" style="padding-left:100px"><div class="a-fixed-left-grid-col a-col-left" style="width:105px;margin-left:-105px;float:left;"><i data-hook="average-star-rating" class="a-icon a-icon-star-medium a-star-medium-3 averageStarRating"><span class="a-icon-alt">3,0 von 5 Sternen</span></i></div><div class="a-fixed-left-grid-col a-col-right" style="padding-left:0%;float:left;"><div class="a-row"><span class="a-size-base"><span class="a-declarative" data-action="a-popover" data-a-popover="{&quot;inlineContent&quot;:&quot;Amazon berechnet die Sternbewertungen eines Produkts mithilfe eines maschinell gelernten Modells anstelle des Durchschnitts der Rohdaten. Das maschinell gelernte Modell berücksichtigt Faktoren wie das Alter einer Bewertung, die Beurteilung der Nützlichkeit durch Kunden und ob die Bewertungen aus geprüften Einkäufen stammen.&quot;}"><a href="javascript:void(0)" class="a-popover-trigger a-declarative"><span data-hook="rating-out-of-text" class="arp-rating-out-of-text a-color-base">3,0 von 5 Sternen</span><i class="a-icon a-icon-popover"></i></a></span></span></div></div></div></div></div><span class="cr-widget-Histogram">
      <div class="a-fixed-left-grid a-spacing-none"><div class="a-fixed-left-grid-inner" style="padding-left:280px"><div class="a-fixed-left-grid-col a-col-left" style="width:280px;margin-left:-280px;float:left;"><span class="a-declarative" data-action="reviews:filter-action:push-state" data-reviews:filter-action:push-state="{&quot;scrollToSelector&quot;:&quot;#reviews-filter-info&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;}"><table id="histogramTable" class="a-normal a-align-middle a-spacing-base" role="presentation"><tr class="a-histogram-row"><td class="aok-nowrap"><span aria-hidden="true" class="a-size-base">5 Sterne</span><span class="a-offscreen">5 Sterne (0%)</span><span class="a-letter-space"></span></td><td aria-hidden="true" class="a-span10"><div class="a-meter" aria-label="0%"><div class="a-meter-bar" style="width: 0%;"></div></div></td><td aria-hidden="true" class="a-text-right aok-nowrap"><span class="a-size-base">0%</span><span class="a-letter-space"></span></td></tr><tr class="a-histogram-row"><td class="aok-nowrap"><span aria-hidden="true" class="a-size-base">4 Sterne</span><span class="a-offscreen">4 Sterne (0%)</span><span class="a-letter-space"></span></td><td aria-hidden="true" class="a-span10"><div class="a-meter" aria-label="0%"><div class="a-meter-bar" style="width: 0%;"></div></div></td><td aria-hidden="true" class="a-text-right aok-nowrap"><span class="a-size-base">0%</span><span class="a-letter-space"></span></td></tr><tr data-reftag="cm_cr_dp_d_hist_3" data-reviews-state-param="{&quot;filterByStar&quot;:&quot;three_star&quot;,&quot;pageNumber&quot;:&quot;1&quot;}" class="a-histogram-row"><td class="aok-nowrap"><a aria-label="3 Sterne (100%)" class="a-size-base a-link-normal 3star" title="3 Sterne" href="/Die-Argonauten-Maggie-Nelson-ebook/product-reviews/B071FCV5KW/ref=cm_cr_dp_d_hist_3?ie=UTF8&amp;filterByStar=three_star&amp;reviewerType=all_reviews#reviews-filter-bar">3 Sterne</a><span class="a-letter-space"></span></td><td aria-hidden="true" class="a-span10"><a class="a-size-base a-link-normal" tabindex="-1" href="/Die-Argonauten-Maggie-Nelson-ebook/product-reviews/B071FCV5KW/ref=cm_cr_dp_d_hist_3?ie=UTF8&amp;filterByStar=three_star&amp;reviewerType=all_reviews#reviews-filter-bar"><div class="a-meter 3star" aria-label="100%"><div class="a-meter-bar" style="width: 100%;"></div></div></a></td><td aria-hidden="true" class="a-text-right aok-nowrap"><a class="a-size-base a-link-normal 3star histogram-review-count a-color-secondary" tabindex="-1" href="/Die-Argonauten-Maggie-Nelson-ebook/product-reviews/B071FCV5KW/ref=cm_cr_dp_d_hist_3?ie=UTF8&amp;filterByStar=three_star&amp;reviewerType=all_reviews#reviews-filter-bar">100%</a><span class="a-letter-space"></span></td></tr><tr class="a-histogram-row"><td class="aok-nowrap"><span aria-hidden="true" class="a-size-base">2 Sterne</span><span class="a-offscreen">2 Sterne (0%)</span><span class="a-letter-space"></span></td><td aria-hidden="true" class="a-span10"><div class="a-meter" aria-label="0%"><div class="a-meter-bar" style="width: 0%;"></div></div></td><td aria-hidden="true" class="a-text-right aok-nowrap"><span class="a-size-base">0%</span><span class="a-letter-space"></span></td></tr><tr class="a-histogram-row"><td class="aok-nowrap"><span aria-hidden="true" class="a-size-base">1 Stern</span><span class="a-offscreen">1 Stern (0%)</span><span class="a-letter-space"></span></td><td aria-hidden="true" class="a-span10"><div class="a-meter" aria-label="0%"><div class="a-meter-bar" style="width: 0%;"></div></div></td><td aria-hidden="true" class="a-text-right aok-nowrap"><span class="a-size-base">0%</span><span class="a-letter-space"></span></td></tr></table></span></div></div></div></span>
    <hr class="a-spacing-large a-spacing-top-large a-divider-normal"><span class="cr-widget-SummaryAttribute" data-hook="cr-widget-SummaryAttribute"></span>
  <h3 data-hook="solicitation-title" class="a-spacing-micro">Dieses Produkt bewerten</h3><div data-hook="share-your-thoughts-text" id="dp-summary-share-your-thoughts" class="a-row a-spacing-medium">Sagen Sie Ihre Meinung zu diesem Artikel</div><div class="a-row"><span class="a-button a-button-base writeReviewButton cm-cr-button-wide"><span class="a-button-inner"><a href="/review/create-review/ref=cm_cr_dp_d_wr_but_top?ie=UTF8&amp;channel=glance-detail&amp;asin=B071FCV5KW" data-hook="write-review-button" class="a-button-text" role="button">Kundenrezension verfassen</a></span></span></div><hr class="a-spacing-extra-large a-spacing-top-extra-large a-divider-normal"><div id="ADPlaceholder" class="a-section reviews-display-ad">


















        






















        




































<script>if (typeof uet === 'function' && typeof ues === 'function') {var scope = 'Detail_customer-reviews-top_Glance';var placementId = 'a95e5659-4675-40b1-824d-2af40af7e0bf';ues('wb', 'adplacements:' + scope.replace(/\\_/g, ':'), {wb:1}); uet('bb', 'adplacements:' + scope.replace(/\\_/g, ':'), {wb:1}); if (placementId) {ues('wb', 'adplacements:' + placementId, {wb:1});uet('bb', 'adplacements:' + placementId, {wb:1});}}</script><div id="ape_Detail_customer-reviews-top_Glance_placement" class="copilot-secure-display celwidget  text/x-dacx-safeframe" data-campaign="3361" style="width: 300px; overflow:hidden; height: 280px;" cel_widget_id="Detail_customer-reviews-top_Glance" data-ad-details='{"slot" :"Detail_customer-reviews-top_Glance","slotName" :"customer-reviews-top","src" : "https://aax-eu.amazon-adsystem.com/e/xsp/getAd?src=506&slot=customer-reviews-top&rid=0101c7a9947de50e0f011bf5ee08a4392e7db564bc7c6e598ae211b6621b5e825a28","adServer" :"cs","campaignId" :  "3361","arid" :"ff613d8aa19947919ece0c0035cdf00c","placementId": "a95e5659-4675-40b1-824d-2af40af7e0bf","size" :{"width": "300px","height" : "250px"},"allowedSizes" :[],"allowedDomains" :  ["g-ecx.images-amazon.com"],"aanParams" :   "site%3Damazon.de%3Bpt%3DDetail%3Bslot%3Dcustomer-reviews-top%3Bpid%3DB071FCV5KW%3Bbn%3D530484031%3Barid%3Dff613d8aa19947919ece0c0035cdf00c","loadAfter" :   "criticalFeature","extraDelay" :  0,"iframeExtraStyle": "","iframeClass":  "","iframeSandbox":"","adPixels": [],"adPixelDelay": "0","aaxInstrPixelUrl": "","usePrefetchRoute": false,"serverSideFetchAd": "false","enableAdBlockerDetector": false,"disableResizeFunc": true,"fallbackStaticAdImgUrl": "","fallbackStaticAdClickUrl": "","fallbackStaticAdExtraStyle": "","adFeedbackInfo": {"endPoint": "/gp/aq-feedback/lazyLoad/handler/af-link-handler.html","boolFeedback": true,"slugText": "Anzeige"},"adPlacementMetaData": {"pageUrl": "aHR0cHM6Ly93d3cuYW1hem9uLmRlL1dFQi1JTkYvdmlld3MvbWVkbGV5UkFXUGFnZVZpZXcuanNwP3JlZiU1Rj10bW0lNUZraW4lNUZzd2F0Y2glNUYwJnFpZD0mc3I9","adElementId": "ape_Detail_customer-reviews-top_Glance_placement","pageType": "Detail","slotName": "customer-reviews-top"},"adCreativeMetaData": {"adNetwork": "cs"},"advertisementStyle": {"position": "absolute","top": "2px","right": "0px","display": "inline-block","font": "normal 11px Arial","color": "grey"},"feedbackDivStyle": {"position": "relative","height": "14px","top": "2px"},"viewabilityStandards": [{"p": 0, "t": 0, "def": "amzn"}, {"p": 50, "t": 1, "def": "iab"}, {"p": 100, "t": 0, "def": "groupm"}],"ajaxWeblabTriggerId": "","abpStatus": "1","abpAcceptable": "true","DAsfUrl":"https://images-eu.ssl-images-amazon.com/images/G/03/ape/sf/desktop/DAsf-1.50.917d6c3._V459327015_.js"}' aria-hidden="true"></div><script>(function(){function a(d,e){if(window.addEventListener){window.addEventListener(d,e,false);}else{if(window.attachEvent){window.attachEvent("on"+d,e);}}}function c(d,e){if(window.removeEventListener){window.removeEventListener(d,e,false);}else{if(window.detachEvent){window.detachEvent("on"+d,e);}}}var b=function(){(function(){(function(j,n){j.sfLogErrors=j.sfLogErrors||false;var o=o||function(s,r){r=r||new Error(s);if(j.ue&&typeof ue.count=="function"){ue.count("adplacements:safeFrameError",1);}if(!j.sfLogErrors){return;}if(j.ueLogError){j.ueLogError(r,{logLevel:"ERROR",attribution:"APE-safeframe",message:s+" "});}else{if(typeof console!=="undefined"&&console.error){console.error(s,r);}}};j.aanParams=j.aanParams||{};j.aanParams["customer-reviews-top"]="site=amazon.de;pt=Detail;slot=customer-reviews-top;pid=B071FCV5KW;bn=530484031;arid=ff613d8aa19947919ece0c0035cdf00c";j["customer-reviews-top"]={};j["customer-reviews-top"].adStartTime=(new Date()).getTime();function d(){return j.innerHeight||n.documentElement.clientHeight;}function g(){return j.innerWidth||n.documentElement.clientWidth;}function e(t,r,s){if(t>0){return(s>t);}else{return(r>0);}}var f=function(){return(Date.now?Date.now():new Date().getTime());};throttle=function(s,u,y){var r,w,z;var x=null;var v=0;if(!y){y={};}var t=function(){v=y.leading===false?0:f();x=null;z=s.apply(r,w);if(!x){r=w=null;}};return function(){var B=f();if(!v&&y.leading===false){v=B;}var A=u-(B-v);r=this;w=arguments;if(A<=0||A>u){if(x){clearTimeout(x);x=null;}v=B;z=s.apply(r,w);if(!x){r=w=null;}}else{if(!x&&y.trailing!==false){x=setTimeout(t,A);}}return z;};};function l(u,w,v,r){try{var t=n.getElementById(u).getBoundingClientRect();if(e(t.top,t.bottom,d())&&e(t.left,t.right,g())){if(typeof uet=="function"){uet("bb","adplacements:viewablelatency:"+w,{wb:1});if(v){uet("bb","adplacements:viewablelatency:"+v,{wb:1});}}if(typeof uex=="function"&&j.ue&&typeof ue.count=="function"){if(j.apeViewableLatencyTrackers[r].loaded){uex("ld","adplacements:viewablelatency:"+w,{wb:1});if(v){uex("ld","adplacements:viewablelatency:"+v,{wb:1});}ue.count("adplacements:htmlviewed:loaded:"+w,1);if(v){ue.count("adplacements:htmlviewed:loaded:"+v,1);}}ue.count("adplacements:htmlviewed:"+w,1);if(v){ue.count("adplacements:htmlviewed:"+v,1);}}j.apeViewableLatencyTrackers[r].viewed=true;if(j.apeViewableLatencyTrackers[r].tracker){c("scroll",j.apeViewableLatencyTrackers[r].tracker);c("resize",j.apeViewableLatencyTrackers[r].tracker);}}}catch(s){j.apeViewableLatencyTrackers[r].valid=false;}}try{j.apeViewableLatencyTrackers=j.apeViewableLatencyTrackers||{};var q="ape_Detail_customer-reviews-top_Glance_placement";var p="Detail_customer-reviews-top_Glance".replace(/\\_/g,":");var h="a95e5659-4675-40b1-824d-2af40af7e0bf";var i="ff613d8aa19947919ece0c0035cdf00c";j.apeViewableLatencyTrackers[i]=j.apeViewableLatencyTrackers[i]||{};j.apeViewableLatencyTrackers[i].valid=true;l(q,p,h,i);if(j.apeViewableLatencyTrackers[i].valid&&!j.apeViewableLatencyTrackers[i].viewed){j.apeViewableLatencyTrackers[i].tracker=throttle(function(){l(q,p,h,i);},20);a("scroll",j.apeViewableLatencyTrackers[i].tracker);a("resize",j.apeViewableLatencyTrackers[i].tracker);}}catch(k){if(j.apeViewableLatencyTrackers&&j.apeViewableLatencyTrackers.ff613d8aa19947919ece0c0035cdf00c){j.apeViewableLatencyTrackers.ff613d8aa19947919ece0c0035cdf00c.valid=false;}o("Error initializing viewable latency instrumentation",k);}try{if(j.DAsf){j.DAsf.loadAds();}else{var m=n.createElement("script");m.type="text/javascript";m.async=true;m.setAttribute("crossorigin","anonymous");m.charset="utf-8";m.src="https://images-eu.ssl-images-amazon.com/images/G/03/ape/sf/desktop/DAsf-1.50.917d6c3._V459327015_.js?csm_attribution=APE-SafeFrame";m.onerror=function(){o("Error loading SafeFrame library");};(n.getElementsByTagName("head")[0]||n.getElementsByTagName("body")[0]).appendChild(m);}}catch(k){o("Error appending DAsf library",k);}}(window,document));})();};b();})();</script>










</div></div><div class="a-fixed-left-grid-col a-col-right" style="padding-left:2.5%;float:left;"><div class="a-row cm_cr_grid_center_container"><div class="a-fixed-right-grid-col cm_cr_grid_center_left" style="float:left;"></div><div class="a-fixed-right-grid-col cm_cr_grid_center_right" style="float:left;"><span class="cr-widget-MedleyCustomerImages" data-hook="cr-widget-MedleyCustomerImages"></span>
  <span class="cr-widget-Lighthut" data-hook="cr-widget-Lighthut"></span>
  <span class="cr-widget-FocalReviews" data-hook="cr-widget-FocalReviews">
      <div class="a-section a-spacing-large"><div class="card-padding">
    <a id="customer-reviews-content" class="a-link-normal celwidget" href="#"></a><div id="cm-cr-dp-review-header" class="a-section a-spacing-small"><h3 class="a-spacing-small"><span data-hook="top-customer-reviews-title" class="a-size-base">1-1 von 1 Rezensionen werden angezeigt</span></h3></div><div id="cm-cr-dp-review-sort-type" data-reftag="cm_cr_dp_d_fltrs_srt" class="a-section a-spacing-small"><span class="a-declarative" data-action="reviews:filter-action:change" data-reviews:filter-action:change="{&quot;filterType&quot;:&quot;sortOrder&quot;}"><span class="a-dropdown-container"><select name="" autocomplete="off" id="cm-cr-sort-dropdown" tabIndex="-1" class="a-native-dropdown"><option value="helpful" data-a-css-class="cm-cr-sort-order-option" selected>Spitzenrezensionen</option><option value="recent" data-a-css-class="cm-cr-sort-order-option">Neueste zuerst</option></select><span tabIndex="-1" data-a-class="cm-cr-dp-filter-dropdown" class="a-button a-button-dropdown a-button-small cm-cr-dp-filter-dropdown"><span class="a-button-inner"><span class="a-button-text a-declarative" data-action="a-dropdown-button" role="button" tabIndex="0" aria-hidden="true"><span class="a-dropdown-prompt">Spitzenrezensionen</span></span><i class="a-icon a-icon-dropdown"></i></span></span></span></span></div><div class="a-row"><div class="a-section a-spacing-extra-large a-spacing-top-medium a-text-center review-load-error aok-hidden"><div class="a-box a-alert a-alert-error cr-error" aria-live="assertive" role="alert"><div class="a-box-inner a-alert-container"><h4 class="a-alert-heading">Derzeit tritt ein Problem beim Filtern der Rezensionen auf. Bitte versuchen Sie es später noch einmal.</h4><i class="a-icon a-icon-alert"></i><div class="a-alert-content"></div></div></div></div><div class="a-spinner-wrapper cr-reviews-loading aok-hidden"><span class="a-spinner a-spinner-medium"></span></div><div class="a-section reviews-content filterable-reviews-content celwidget"><div id="cm-cr-dp-review-list" data-hook="top-customer-reviews-widget" class="a-section review-views celwidget"><div id="R1S281N94MWU9C" data-hook="review" class="a-section review"><div id="customer_review-R1S281N94MWU9C" class="a-section celwidget"><div data-hook="genome-widget" class="a-row a-spacing-mini"><a href="/gp/profile/amzn1.account.AFRZFAKJ5M647TBGLJKW3HQUKW4A/ref=cm_cr_dp_d_gw_tr?ie=UTF8" class="a-profile" data-a-size="small"><div aria-hidden="true" class="a-profile-avatar-wrapper"><div class="a-profile-avatar"><img src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/grey-pixel.gif" class="a-lazy-loaded" data-src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars/default._CR0,0,1024,1024_SX48_.png"><noscript><img src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars/default._CR0,0,1024,1024_SX48_.png"></noscript></div></div><div class="a-profile-content"><span class="a-profile-name">NAME_NOT_RETURNED</span></div></a></div><div class="a-row"><a class="a-link-normal" title="3,0 von 5 Sternen" href="/gp/customer-reviews/R1S281N94MWU9C/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&amp;ASIN=B071FCV5KW"><i data-hook="review-star-rating" class="a-icon a-icon-star a-star-3 review-rating"><span class="a-icon-alt">3,0 von 5 Sternen</span></i></a><span class="a-letter-space"></span><a data-hook="review-title" class="a-size-base a-link-normal review-title a-color-base a-text-bold" href="/gp/customer-reviews/R1S281N94MWU9C/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&amp;ASIN=B071FCV5KW">Sprache und Plan</a></div><span data-hook="review-date" class="a-size-base a-color-secondary review-date">19. Dezember 2017</span><div class="a-row a-spacing-mini review-data review-format-strip"><span data-hook="format-strip-linkless" class="a-color-secondary">Format: Gebundene Ausgabe</span></div><div class="a-row a-spacing-small review-data"><span data-hook="review-body" class="a-size-base review-text"><div aria-live="polite" data-a-expander-name="review_text_read_more" data-a-expander-collapsed-height="300" class="a-expander-collapsed-height a-row a-expander-container a-expander-partial-collapse-container" style="max-height:300px"><div data-hook="review-collapsed" aria-expanded="false" class="a-expander-content a-expander-partial-collapse-content">Schade, dass die Sprache des Romans, die doch so oft reflektiert wird im Text, selbst so unglaublich bieder daherkommt, da flirrt gar nichts, und insofern ist das vermutlich grade eben doch das Maß an Argonautik, dass der Mainstream auszuhalten bereit ist... Siehe ein Zeitungslob für 'unverblasen' (eine Wortwahl natürlich selbst ein gen(d)eröses Moment ergibt;) - aber die doch öde, sehr brave Sprache inklusive einer gutgemeinten Gefühligkeit, die sich einen R. Barthes und sein Niveau der Umsetzung von &#34;Fragmenten einer Sprache der Liebe&#34; tatsächlich nur ins Boot (ein) holen kann, indem sie ihn zitiert, macht das Ganze bestenfalls so zu einem richtigen Luise Müller ihr gendertagebuch-Text - was freilich als Ankommen von Queer im Mainstream nur zu begrüßen ist. Insofern also ein paar Sterne, aber nicht alle.</div><div class="a-expander-header a-expander-partial-collapse-header"><div class="a-expander-content-fade"></div><a href="javascript:void(0)" data-hook="expand-collapse-read-more-less" data-action="a-expander-toggle" class="a-declarative" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;Lesen Sie weiter&quot;, &quot;collapse_prompt&quot;:&quot;Weniger lesen&quot;}"><i class="a-icon a-icon-extender-expand"></i><span class="a-expander-prompt">Lesen Sie weiter</span></a></div></div></span></div><div data-hook="review-comments" class="a-row review-comments"><span class="cr-vote" data-hook="review-voting-widget">

  <div class="a-row a-spacing-small"><span data-hook="helpful-vote-statement" class="a-size-base a-color-tertiary cr-vote-text">8 Personen fanden diese Informationen hilfreich</span></div><div class="cr-helpful-button cr-vote-component aok-float-left">
      <span class="a-declarative" data-action="reviews:vote-action" data-reviews:vote-action="{&quot;voteInstanceId&quot;:&quot;R1S281N94MWU9C&quot;,&quot;ajaxUrl&quot;:&quot;/hz/reviews-render/ajax/vote/submit/ref=cm_cr_dp_d_vote_lft&quot;,&quot;voteValue&quot;:&quot;1&quot;,&quot;cssSelectors&quot;:{&quot;onError&quot;:&quot;.cr-vote-error&quot;,&quot;inFlight&quot;:&quot;.cr-vote-feedback&quot;,&quot;hideVoteComponents&quot;:&quot;.cr-vote-component&quot;,&quot;onSuccess&quot;:&quot;.cr-vote-success&quot;},&quot;csrfT&quot;:&quot;gsTGz0GOHMwG0ARLG74GKykbHeMU8eX0+urAHkMAAAABAAAAAFwrpDtyYXcAAAAA+4kUEk/7iMGR3xPcX6iU&quot;,&quot;allowLinkDefault&quot;:&quot;1&quot;,&quot;voteDimension&quot;:&quot;Helpful&quot;}"><span class="a-button a-button-base"><span class="a-button-inner"><input data-hook="vote-helpful-button" class="a-button-input" type="submit"><span class="a-button-text" aria-hidden="true"><div class="cr-helpful-text">
            Nützlich</div>
        </span></span></span></span></div>
  <span class="cr-vote-feedback cr-vote-component aok-hidden">Senden von Feedback...</span><span data-hook="vote-success-message" class="cr-vote-success cr-vote-component aok-hidden"><div class="a-box a-alert-inline a-alert-inline-success cr-vote-helpful-yes"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">Vielen Dank für Ihr Feedback.</div></div></div></span><span class="cr-vote-error cr-vote-component aok-hidden"><div class="a-box a-alert-inline a-alert-inline-error" aria-live="assertive" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">Wir konnten Ihre Stimmabgabe leider nicht speichern. Bitte versuchen Sie es später noch einmal.</div></div></div></span></span>

<i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i><a data-hook="review-comment" class="a-size-base a-link-normal a-color-secondary a-text-normal" href="/gp/customer-reviews/R1S281N94MWU9C/ref=cm_cr_dp_d_rvw_btm?ie=UTF8&amp;ASIN=B071FCV5KW#wasThisHelpful">Kommentar</a><span class="cr-footer-line-height">
    <span><i class="a-icon a-icon-text-separator" role="img" aria-label="|"></i><span class="a-declarative" data-action="cr-popup" data-cr-popup="{&quot;width&quot;:&quot;580&quot;,&quot;title&quot;:&quot;ReportAbuse&quot;,&quot;url&quot;:&quot;/hz/reviews-render/report-abuse?ie=UTF8&amp;voteDomain=Reviews&amp;ref=cm_cr_dp_d_rvw_hlp&amp;csrfT=gsTGz0GOHMwG0ARLG74GKykbHeMU8eX0%2BurAHkMAAAABAAAAAFwrpDtyYXcAAAAA%2B4kUEk%2F7iMGR3xPcX6iU&amp;entityId=R1S281N94MWU9C&amp;sessionId=262-9898842-9713804&quot;,&quot;height&quot;:&quot;380&quot;}"><a class="a-size-base a-link-normal a-color-secondary report-abuse-link a-text-normal" href="/hz/reviews-render/report-abuse?ie=UTF8&amp;voteDomain=Reviews&amp;ref=cm_cr_dp_d_rvw_hlp&amp;csrfT=gsTGz0GOHMwG0ARLG74GKykbHeMU8eX0%2BurAHkMAAAABAAAAAFwrpDtyYXcAAAAA%2B4kUEk%2F7iMGR3xPcX6iU&amp;entityId=R1S281N94MWU9C&amp;sessionId=262-9898842-9713804">Missbrauch melden</a></span></span></span>

</div></div></div></div></div><a id="end-reviews" class="a-link-normal" href="#"></a></div><div id="reviews-medley-footer" data-hook="reviews-medley-footer" class="a-section"><div class="a-row"></div><div class="a-row a-spacing-large"><a data-hook="see-all-reviews-link-foot" class="a-link-emphasis a-text-bold" href="/Die-Argonauten-Maggie-Nelson-ebook/product-reviews/B071FCV5KW/ref=cm_cr_dp_d_show_all_btm?ie=UTF8&amp;reviewerType=all_reviews">Rezension anzeigen</a></div><div class="a-row"><span class="a-button a-button-base writeReviewButton"><span class="a-button-inner"><a href="/review/create-review/ref=cm_cr_dp_d_wr_but_btm?ie=UTF8&amp;channel=glance-detail&amp;asin=B071FCV5KW" data-hook="write-review-button" class="a-button-text" role="button">Kundenrezension verfassen</a></span></span></div></div></div>
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
  (window.AmazonUIPageJS ? AmazonUIPageJS : P).load.js('https://images-eu.ssl-images-amazon.com/images/I/41emlOKqoxL._RC|11Okj-9DxDL.js,31cv4y58k0L.js,21xlovrsqoL.js,01m8MBnPl6L.js_.js?AUIClients/BooksDetailPageMetaAsset#120834-T1.67277-C');
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
 

 
 



  
      
      


























<div id="vellumMsg">
  <div id="vellumMsgIco"></div>
  <div id="vellumMsgHdr"></div>
  <div id="vellumMsgTxt"></div>
  <div id="vellumMsgCls" onclick="javascript:Vellum.h()"></div>
</div>
<div id="vellumShade" onclick="javascript:Vellum.h()"></div>
<div id="vellumLdgIco"></div>
<div id="sitbReaderPlaceholder"></div>

<div style="display:none">
    <a id="sitbKcpPopoverTrigger" href="javascript:void(0)" class="a-popover-trigger a-declarative"> click to open popover <i class="a-icon a-icon-popover"></i></a>
</div>

<script>
    P.when('jQuery').execute(function(jQuery) {

     window.sitbWeblab = '';
     var postReftags = function(result, isReaderOpening) {
         if (result === undefined || result === null) {
             return;
         }
         var urls = isReaderOpening ? result.onReaderOpen : result.onDetailPage;
         if (urls === undefined || urls === null) {
             return;
         }
         for (var i = 0; urls.length !== undefined && urls.length !== null && i < urls.length; i++) {
             jQuery.post(urls[i]);
         }
    };
    if (typeof(Vellum) == 'undefined') {
        Vellum = {
            js: "https://images-na.ssl-images-amazon.com/images/S/sitbweb/sitb-reader/201812161927/de/sitb-library-js.js",
            sj: "/gp/search-inside/js?locale=de_DE&version=201812161927",
            css: "https://images-na.ssl-images-amazon.com/images/S/sitbweb/sitb-reader/201812161927/de/sitb-library-css-secure.css",
            pl: function(){Vellum.lj(Vellum.js, Vellum.sj, Vellum.css)},
            lj: function(u,u2,uc){
                if (window.vellumLjDone) return;
                window.vellumLjDone = true;
                var d = document;
                var s = d.createElement('link');
                s.type = 'text/css';
                s.rel = 'stylesheet';
                s.crossOrigin = 'anonymous';
                s.href = uc;
                d.getElementsByTagName("head")[0].appendChild(s);
                s = d.createElement('script');
                s.type = 'text/javascript';
                s.crossOrigin = 'anonymous';
                s.src = u2;
                d.getElementsByTagName("head")[0].appendChild(s);
            },
            lj2: function(u) {
                var d = document;
                var s = d.createElement('script');
                s.type = 'text/javascript';
                s.crossOrigin = 'anonymous';
                s.src = u;
                d.getElementsByTagName("head")[0].appendChild(s);
            },
            go: function(){
                sitbLodStart = new Date().getTime();
                jQuery('body').css('overflow', 'hidden');
                var jqw = jQuery(window);
                var h = jqw.height();
                var w = jqw.width();
                var st = jqw.scrollTop();

                jQuery('#vellumShade').css({ 'top' : st, 'height' : h, 'width' : w }).show();

                var vli = jQuery('#vellumLdgIco');
                var nl = (w/2)-(vli.width()/2);
                var nt = st + (h/2) - (vli.height()/2);
                vli.css({"left" : nl, "top" : nt }).show();
                setTimeout("Vellum.x()", 20000);
                Vellum.pl();
            },
            x: function(){
                jQuery('#vellumMsgTxt').html("Beim Anzeigen dieses Buchs ist ein Fehler aufgetreten.");
                jQuery('#vellumMsgHdr').html("Server-Timeout");
                jQuery('#vellumMsg').show();
                var reftagImage = new Image();
                reftagImage.src = '/gp/search-inside/reftag/ref=rdr_bar_jsto';
            },
            h: function() {
                jQuery('#vellumMsg').hide();
                jQuery('#vellumShade').hide();
                jQuery('#vellumLdgIco').hide();
                jQuery("body").css('overflow', 'auto');
            },
            cf: function(a) {
                return function() {v.mt = a; v.rg = Array.prototype.slice.call(arguments); v.go()}
            },
            c: function(a) {
                var v = Vellum;
                v.mt = 'c'; v.rg = [a]; v.pl();
            },
            asin: 'B071FCV5KW',
            detailPageType: 'kindle',
            onReaderOpen: function() {
                jQuery.ajax({
                    url: '/gp/search-inside/service-data?method=getDetailPageRefTags&asin=B071FCV5KW&isReaderURL=false&isOpen=true',
                    success: function(result) {postReftags(result, true);}
                });
            }
        }

        var f = "opqr".split('');
        for (var i in f) {
            var v = Vellum;
            v[f[i]] = v.cf(f[i]);
        }
        SitbReader = {
            LightboxActions: {
                openReader: function(r) {Vellum.o('B071FCV5KW', r); return false},
                openReaderToRandomPage: function(r) {Vellum.r('B071FCV5KW', r); return false},
                openReaderToSearchResults: function(q,r) {Vellum.q('B071FCV5KW',q,r); return false},
                openReaderToPage: function(p,t,r) {Vellum.p('B071FCV5KW',p,t,r); return false}
            }
        }
    }

      P.when('atf').execute(function() { Vellum.c('B071FCV5KW') } );

     jQuery.ajax({
       url: '/gp/search-inside/service-data?method=getDetailPageRefTags&asin=B071FCV5KW&isReaderURL=false&isOpen=false',
       success: function(result) {postReftags(result, false);}
       });
  });
</script>









    










 

    








            
            





























<script type="text/javascript">
    var kicsPopoverInit = function() {


    jQuery("#kinwbuy").amazonPopoverTrigger({
      draggable: true,
      title: "So bestellen Sie",
      location: function( popover, settings ) {
          return {
            left: jQuery(window).width()/2 - popover.outerWidth()/2,
            top: jQuery(window).height()/2 - popover.outerHeight()/2 +
                jQuery(window).scrollTop()
            }
      },
      showCloseButton: true,
      closeText: "Schließen",
      width: 490,
      destination: "/gp/digital/fiona/detail/kics-popups/?asin=B071FCV5KW&isKDK=0&isSub=0&isBlog=0&country=DE&popupId=kinwbuy"
    });

    jQuery("#kinwsam").amazonPopoverTrigger({
      draggable: true,
      title: "Gratis Leseprobe bestellen. So geht's.",
      location: function( popover, settings ) {
          return {
            left: jQuery(window).width()/2 - popover.outerWidth()/2,
            top: jQuery(window).height()/2 - popover.outerHeight()/2 +
                jQuery(window).scrollTop()
            }
      },
      showCloseButton: true,
      closeText: "Schließen",
      width: 490,
      destination: "/gp/digital/fiona/detail/kics-popups/?asin=B071FCV5KW&isKDK=0&isSub=0&isBlog=0&country=DE&popupId=kinwsam"
    });



      
  
    
    







    



    jQuery(".kinwhp").amazonPopoverTrigger({
      draggable: true,
      modal: true,
      title: "<img src=https://images-eu.ssl-images-amazon.com/images/G/03/kindle/merch/global/headphones._CB330308415_.png/> Fügen Sie das passende Audible Hörbuch zu Ihrem Kindle eBook hinzu",
      location: function( popover, settings ) {
          return {
            left: jQuery(window).width()/4,
            top: jQuery(window).height()/10
            }
      },
      showCloseButton: true,
      closeText: "close",
      width: 780,
      cacheable: false,
      loadingContent: "<div style='display: block; margin: auto; width: 50px; padding: 20px;'><img src='https://images-eu.ssl-images-amazon.com/images/G/03/amazonui/loading/loading-2x._CB398267880_.gif' /></div>",
      onHide: function(){
                if(typeof mp3Player === "object" 
                  && typeof mp3Player.playing === "object"
                  && mp3Player.playing[1]){
                    Mp3Interface.togglePause();
                    mp3Player.playing[1] = false;
                }
              },
      destination: "/gp/digital/fiona/detail/kics-popups/?asin=B071FCV5KW&isKDK=0&isSub=0&isBlog=0&country=DE&popupId=kinwhp&companionAsin=",
      skin: "<div class='ap_popover ap_popover_sprited popover_add_narration' surround='6,16,18,16' tabindex='0'><div class='ap_header'><div class='ap_left'></div> " +
            "<div class='ap_middle'></div> <div class='ap_right'></div> </div> <div class='ap_body'> <div class='ap_left'></div>" +
            "<div class='ap_content'></div> <div class='ap_right'></div> </div> <div class='ap_footer'><div class='ap_left'></div>" +
            "<div class='ap_middle'></div> <div class='ap_right'></div> </div> <div class='ap_titlebar' style='width: 744px;'>" +
            "<div class='ap_title'> </div> </div> <div class='ap_close' style='cursor: default;'><a href='#'><span class='ap_closetext' style='display: inline;'>" +
            "</span><span class='ap_closebutton'></span></a></div> </div>"
    });

        amznJQ.available('jQuery', function(){
          jQuery(".kinwhp").bind("click", function(event){
            jQuery.ajax({
                url: "/gp/digital/fiona/ajax/reftagCall.html/ref=kinwhp_" +  (event && event.target && event.target.classList && event.target.classList[1] || "buyBox") + "_clk",
                dataType: 'json',
                cache: false,
                type: 'GET'
            });
          });
        });


    
    if(jQuery && jQuery('.mp3Asin').length){
	    var addNarrationToolTip = jQuery.AmazonPopover.displayPopover({
	        locationMargin: 59,
	        showOnHover: false,
	        showCloseButton: true,
	        attached: true,
	        width: 250,
	        locationAlign: 'middle',
	        location: 'right',
	        locationElement: '.mp3Asin',
	        literalContent: '<span class="audHead">Passendes Hörbuch</span> <br/> <span class="audBody">Sie hören die Hörprobe des passenden Hörbuchs.</span> </br> <span class="audLearnMore"><a href="/dp/ref=kics_audio_dp_sample">Erfahren Sie mehr</a></span>'
	    }).hide();
	    jQuery('.mp3Asin').bind('click', function(){
	      if(jQuery(this).hasClass('mp3AsinActivePause') || mp3Player && mp3Player.playing && mp3Player.playing[1]){
	        addNarrationToolTip.fadeIn();
	      } else {
	        addNarrationToolTip.fadeOut();
	      }
	    });
    }





    jQuery("#kinwdft").amazonPopoverTrigger({
      draggable: true,
          title: "How Free Trial Works",
      location: function( popover, settings ) {
          return {
            left: jQuery(window).width()/2 - popover.outerWidth()/2,
            top: jQuery(window).height()/2 - popover.outerHeight()/2 +
                jQuery(window).scrollTop()
            }
      },
      showCloseButton: true,
      closeText: "Schließen",
      width: 490,
      destination: "/gp/digital/fiona/detail/kics-popups/?asin=B071FCV5KW&isKDK=0&isSub=0&isBlog=0&country=DE&popupId=kinwdft"
    });

      jQuery("#kinwshopnow").amazonPopoverTrigger({
        draggable: true,
        title: "",
        location: function( popover, settings ) {
            return {
              left: jQuery(window).width()/2 - popover.outerWidth()/2,
              top: jQuery(window).height()/2 - popover.outerHeight()/2 +
                  jQuery(window).scrollTop()
              }
        },
        showCloseButton: true,
        closeText: "Schließen",
        width: 550,
        literalContent: ""
      });

      jQuery("#kinwgiftbox").amazonPopoverTrigger({
        draggable: true,
        title: "",
        location: function( popover, settings ) {
            return {
              left: jQuery(window).width()/2 - popover.outerWidth()/2,
              top: jQuery(window).height()/2 - popover.outerHeight()/2 +
                  jQuery(window).scrollTop()
              }
        },
        showCloseButton: true,
        closeText: "Schließen",
        width: 550,
        literalContent: ""
      });



// end function kicsPopoverInit
    }

      amznJQ.onReady('popover', kicsPopoverInit);

</script>




























<script language="Javascript1.1" type="text/javascript">
<!--
  function getElement(id, d) {
    if (!d) d = document;
    if (d.getElementById) {
        return d.getElementById(id);
    }
    if (d.layers && d.layers[id]) {
      return d.layers[id];
    }
    if (d.all && d.all[id]) {
        return d.all[id];
    }
  }
//-->
</script>


<script language="Javascript1.1" type="text/javascript">

    function feedbackSubmit (form, subCategory, prefix) {        
        var iframeSrc = "/gp/product/features/fiona-feedback-email.html?" +
                        "&asin=" + "B071FCV5KW" +
                        "&message=" + encodeURIComponent(form.message.value) + "&type=" + encodeURIComponent(form.type.value) + "&location=" +encodeURIComponent(form.location.value) +
                        "&subCategory=" + encodeURIComponent(subCategory) + "&formNamePrefix=" + prefix + "&dpUrl=" + encodeURIComponent(document.URL) +
                        "&refUrl="+encodeURIComponent("https://www.amazon.de/gp/product/3446257071?pf_rd_p=d12b27d6-0a90-4a73-9da3-4e84e7c49e87&amp;pf_rd_r=K7WWFPPNPKQA5B2VJ741") +
                        "&productGroupID=" + encodeURIComponent("ebooks_display_on_website");
        getElement("RTEiFrame").src = iframeSrc;
        return false;
    }
  
</script>






 <iframe name="iFrameHMD" id="iFrameHMD" height="0" width="0" style="border:none" src="javascript:'<html></html>'">
 </iframe>





<a name="suggestion-box">&nbsp;<br /></a>
<center>
  <div style="background-color:#eff7fe;border:1px solid #0f3c6d;padding:10px;text-align:left;" class="small">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/03/x-locale/communities/reputation/suggestionbox._CB376123726_.gif" width="1" align="left" height="1" border="0" />
      <div name="hmdFormDiv" id="hmdFormDiv">          
      <table border="0" cellpadding="0" cellspacing="0">

      <tr>
      <td>
      <b class="h1">Feedback</b>
      <br/>
      <span style="line-height:200%;">
      <table border="0">
	  <tr><td>
	   <img src="https://images-eu.ssl-images-amazon.com/images/G/03/icons/orange-arrow._CB192193598_.gif" width="5" align="absmiddle" height="9" border="0" />    
	  Wenn Sie Hilfe benötigen oder dem Kundenservice eine Frage stellen möchten, <a href="/gp/help/customer/display.html/ref=cm_r8n_hmd_contact?ie=UTF8&amp;nodeId=504874"><b>kontaktieren Sie uns</b></a>.
	  </td></tr>



  <iframe name="RTEiFrame" id="RTEiFrame" src="" style="display:none"></iframe>




      <form method="POST" name="contentQualityForm" target=""
  onsubmit="javascript:return feedbackSubmit(this, 'Content or Formatting Quality', 'contentQuality');"
      >

    <tr><td>
	  <img src="https://images-eu.ssl-images-amazon.com/images/G/03/icons/orange-arrow._CB192193598_.gif" width="5" align="absmiddle" height="9" border="0" />
          Möchten Sie Qualitätsprobleme melden?
 
        
	  <b><a href="#suggestion-box" onClick='javascript:getElement("contentQualityDiv").style.display = "block";'>
          Bitte hier klicken
	  </a></b>

      
      	<div name="contentQualityDiv" id="contentQualityDiv" style="display:none">
		
	        <table>
	        <tr><td style="width:30%" align="right">
	        <label>Anliegen:</label>
	        <td style="width:70%">
	        <select name="type">
            <option value ="Schlechte Formatierung">Schlechte Formatierung</option>
            <option value ="Rechtschreibfehler">Rechtschreibfehler</option>
            <option value ="Abbildungen oder Tabellen von geringer Qualität">Abbildungen oder Tabellen von geringer Qualität</option>
            <option value ="Sonstiges (bitte unten angeben)">Sonstiges (bitte unten angeben)</option>
          </select>
          </td></tr>
          
          <tr><td style="width:30%" align="right">
	        <label>Problemstelle:</label>
	        <td style="width:70%">
	        <input type="text" name="location" maxlength="64" size="43" value="" />
	        </td>
          </tr>
	      
          <tr><td style="width:30%" align="right" valign="top">
	        <label>Mitteilung:</label>
	        <td style="width:70%">
	        <textarea name="message" rows="6" cols="32" maxlength="1000" style="width:95%"></textarea>
	        </td>
          </tr>
    <tr><td>&nbsp;</td><td><input type="image" src="https://images-eu.ssl-images-amazon.com/images/G/03/x-locale/communities/blogs/button_submit._CB370595603_.gif"  width="74" align="middle" alt="Abschicken" height="22" border="0" /></td></tr>
	    </table>
      <br/>

      </div>
      <div name="contentQualitySuccessDiv" id="contentQualitySuccessDiv" style="display:none;">
        <table style="width:80%">
          <tr><td align="left">
          <b>  Vielen Dank für Ihr Feedback.<br/>
          Ein Mitarbeiter unseres Kundenservices wird sich um Ihr Anliegen kümmern.</b>
          </td></tr></table>
      </div>
      <div name="contentQualityFailDiv" id="contentQualityFailDiv" style="display:none">
          <table style="width:60%">
            <tr><td align="left">
            <b>  Bei der Übermittlung Ihres Feedbacks ist ein Problem aufgetreten.<br/> </b>
            </td></tr>
            <tr><td align="left" style="font-size:70%;color:brown">
            Bitte versuchen Sie es später noch einmal.
            </td></tr></table>
      </div>
      
</td></tr>
</form>





      <form method="POST" name="inappForm" target=""
  onsubmit="javascript:return feedbackSubmit(this, 'Unzulässiger Inhalt', 'inapp');"
      >

    <tr><td>
	  <img src="https://images-eu.ssl-images-amazon.com/images/G/03/icons/orange-arrow._CB192193598_.gif" width="5" align="absmiddle" height="9" border="0" />
          Möchten Sie diesen Inhalt als anstößig melden?
 
        
	  <b><a href="#suggestion-box" onClick='javascript:getElement("inappDiv").style.display = "block";'>
          Bitte hier klicken
	  </a></b>

      
      	<div name="inappDiv" id="inappDiv" style="display:none">
		
	        <table>
	        <tr><td style="width:30%" align="right">
	        <label>Anliegen:</label>
	        <td style="width:70%">
	        <select name="type">
            <option value ="Pornografische Inhalte">Pornografische Inhalte</option>
            <option value ="Verstoß gegen die Amazon KDP-Nutzungsbedingungen">Verstoß gegen die Amazon KDP-Nutzungsbedingungen</option>
            <option value ="Sonstiges (bitte unten angeben)">Sonstiges (bitte unten angeben)</option>
          </select>
          </td></tr>
          
	        <tr><td><input type="hidden" name="location" maxlength="64" size="43" value="" /></td></tr>
          <tr><td style="width:30%" align="right" valign="top">
	        <label>Mitteilung:</label>
	        <td style="width:70%">
	        <textarea name="message" rows="6" cols="32" maxlength="1000" style="width:95%"></textarea>
	        </td>
          </tr>
    <tr><td>&nbsp;</td><td><input type="image" src="https://images-eu.ssl-images-amazon.com/images/G/03/x-locale/communities/blogs/button_submit._CB370595603_.gif"  width="74" align="middle" alt="Abschicken" height="22" border="0" /></td></tr>
	    </table>
      <br/>

      </div>
      <div name="inappSuccessDiv" id="inappSuccessDiv" style="display:none;">
        <table style="width:80%">
          <tr><td align="left">
          <b>  Vielen Dank für Ihr Feedback.<br/>
          Ein Mitarbeiter unseres Kundenservices wird sich innerhalb der nächsten 24 Stunden um Ihr Anliegen kümmern. Ein Amazon-Mitarbeiter setzt sich gegebenenfalls mit Ihnen per E-Mail in Verbindung, um weitere Informationen bezüglich des Problems zu erhalten.</b>
          </td></tr></table>
      </div>
      <div name="inappFailDiv" id="inappFailDiv" style="display:none">
          <table style="width:60%">
            <tr><td align="left">
            <b>  Bei der Übermittlung Ihres Feedbacks ist ein Problem aufgetreten.<br/> </b>
            </td></tr>
            <tr><td align="left" style="font-size:70%;color:brown">
            Bitte versuchen Sie es später noch einmal.
            </td></tr></table>
      </div>
      
</td></tr>
</form>


	  <tr><td>
	  <img src="https://images-eu.ssl-images-amazon.com/images/G/03/icons/orange-arrow._CB192193598_.gif" width="5" align="absmiddle" height="9" border="0" />    
	  Sind Sie der Meinung, dass dieser Artikel Urheberrechte verletzt?
	  	  <b><a href="/gp/help/customer/display.html?ie=UTF8&amp;nodeId=505048#Verkaufsbedingungen">Bitte hier klicken</a></b>
	  </td></tr>
    </table>
    </span>
    </td>
    </tr>
    </table>
    </div>
  </div>
</center>
<br />


  </div>















<table width="100%" align="center">






<tr><td colspan="2">
<table border="0" width="100%" cellpadding="1" cellspacing="0" bgcolor="#999999" style="margin-bottom: 15px;">
<tr><td>
<table border="0" width="100%" bgcolor="#ffffff" cellspacing="0" cellpadding="5">
<tr valign="top">
<td width="33%">
<h4 class="wonderbar-list-header">Wo ist meine Bestellung?</h4>
<ul class="wonderbar-list">
<li>Alle Informationen zu Ihren <a href="/gp/css/order-history/ref=hy_f_1?ie=UTF8&amp;is-secure=true&amp;orderFilter=wheres-my-stuff" rel="nofollow">letzten Bestellungen</a></li>
<li>Bearbeiten oder überprüfen Sie Ihre offenen Bestellungen in <a href="/gp/css/homepage.html/ref=hy_f_2" rel="nofollow">"Mein Konto"</a>.</li>
</ul>
</td>

<td width="33%">
<h4 class="wonderbar-list-header">Versand & Rücknahme</h4>
<ul class="wonderbar-list">














<li>Unsere <a href="http://www.amazon.de/gp/help/customer/display.html/ref=hy_f_3?ie=UTF8&amp;nodeId=504938">Versandbedingungen</a> und unsere <a href="http://www.amazon.de/gp/help/customer/display.html/ref=hy_f_3?ie=UTF8&amp;nodeId=504966">Sicherheitsgarantie</a></li>













<li>Artikel <a href="http://www.amazon.de/gp/css/returns/homepage.html/ref=hy_f_4"> zurücksenden?</a> &#40;Siehe <a href="/gp/help/customer/display.html?nodeId=201824330">Details zur Rücksendung</a>&#41;</li></ul>
</td>
















<td width="33%">
<h4 class="wonderbar-list-header">Brauchen Sie Hilfe?</h4>
<ul class="wonderbar-list">
<li><a href="/gp/css/account/forgot-password/email.html/ref=hy_f_6">Passwort vergessen?</a></li>
<li><a href="http://www.amazon.de/exec/obidos/tg/stores/static/-/gifts/gift-certificates/ref=hy_f_8">Geschenkgutscheine</a> verschenken oder einlösen</li>









<li>Besuchen Sie unsere <a href="http://www.amazon.de/gp/help/customer/display.html/ref=hy_f_9">Hilfeseiten</a>.</li></ul>
</td></tr>
</table>
</td></tr>
</table>
</td></tr>

</table>









  <script type="text/javascript">
    // Only execute if performance object is defined in JS
    if(typeof performance!= "undefined" && typeof performance.getEntries != "undefined") {




        var metaAssetNames = [];
        metaAssetNames.push("MediaDetailPageMetaAsset_TURBO_DESKTOP");
        metaAssetNames.push("AuthorFollowAssets");
        metaAssetNames.push("DetailPageDigitalBulkAssets");
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

   {"biaHcbRid":"7KW51GR72GBHGNNYKK1P"},
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
  window.$Nav && $Nav.when("data").run(function(data) { data({"shopAllContent":{"template":{"name":"itemList","data":{"items":[{"text":"Prime Video","panelKey":"InstantVideoPanel"},{"text":"Amazon Music","panelKey":"Mp3Panel"},{"text":"Fußball Live","panelKey":"PoldiPanel"},{"text":"Amazon Appstore","panelKey":"AndroidPanel"},{"text":"Amazon Photos","panelKey":"CloudDrivePanel"},{"text":"Echo & Alexa","panelKey":"KindleAmazonEchoPanel"},{"text":"Fire TV","panelKey":"FireTvPanel"},{"text":"Fire-Tablets","panelKey":"KindleFireTabletPanel"},{"text":"Kindle eReader & Bücher","panelKey":"KindleReaderPanel"},{"badgeText":"Neu","text":"AmazonFresh","dividerBefore":"1","panelKey":"AmazonFreshPanel"},{"text":"Bücher & Audible","dividerBefore":"1","panelKey":"BooksPanel"},{"text":"Filme, Serien, Musik & Games","panelKey":"MusicGamesFilmTvPanel"},{"text":"Elektronik & Computer","panelKey":"ElectronicsComputersPanel"},{"text":"Haushalt, Garten, Baumarkt","panelKey":"HomeGardenToolsPanel"},{"text":"Beauty, Drogerie & Lebensmittel","panelKey":"FoodBeveragesHealthBeautyPanel"},{"text":"Spielzeug & Baby","panelKey":"BabyKidsToysPanel"},{"text":"Kleidung, Schuhe & Uhren","panelKey":"ApparelShoesWatchesPanel"},{"text":"Sport & Freizeit","panelKey":"SportsOutdoorsPanel"},{"text":"Auto, Motorrad & Gewerbe","panelKey":"AutoMotorcycleIndustrialPanel"},{"text":"Handmade & Amazon Launchpad","panelKey":"HandmadeLaunchpadPanel"},{"text":"Amazon Storefronts","panelKey":"StorefrontsPanel"},{"text":"Alle Kategorien","decorate":"carat","url":"/gp/site-directory/ref=nav_shopall_fullstore","dividerBefore":"1"}]}}},"PoldiPanel":{"promoID":"nav-sa-poldi","template":{"name":"itemList","data":{"text":"Fußball Live","items":[{"text":"Fußball live streamen","items":[{"subtext":"Bundesliga und DFB-Pokal hören\\n","text":"Fußball live bei Amazon Music\\n","url":"/gp/dmusic/promotions/LiveSports/ref=nav_shopall_poldi_program"},{"subtext":"Wettbewerbe, Konferenz, Podcasts und mehr hören\\n","text":"Alle Spiele","url":"/fussballwebplayer/ref=nav_shopall_poldi_player"},{"subtext":"Musik und Fußball einfach überall genießen\\r\\n","text":"Amazon Music Apps\\r\\n","url":"/amazon-music-app/b/ref=nav_shopall_poldi_apps?ie=UTF8&node=1949586031"}]}]}}},"KindleReaderPanel":{"promoID":"nav-sa-kindle-reader","template":{"name":"itemList","data":{"text":"Kindle eReader & Bücher","items":[{"text":"Kindle eReader","items":[{"subtext":"100% Buch. Ohne Ablenkungen. Ohne Spiegeleffekte.","text":"Kindle","url":"/dp/B0186FESVC/ref=nav_shopall_k_keanab"},{"subtext":"Unser meistverkaufter Kindle - jetzt noch besser","text":"Der neue Kindle Paperwhite","url":"/dp/B07747FR44/ref=nav_shopall_k_k_ms"},{"subtext":"Großes 7 Zoll-Display. Wasserfest. Audible.","text":"Kindle Oasis","url":"/dp/B06XDK92KS/ref=nav_shopall_k_dpko"},{"subtext":"Hüllen, Ladegeräte, Sleeves und mehr","text":"Zubehör","url":"/Zubehoer-Amazon-Geraete-Kindle/b/ref=nav_shopall_k_kacceseink5?ie=UTF8&node=530884031"}]},{"text":"Kindle-Shop","dividerBefore":"1","items":[{"text":"Kindle eBooks","url":"/ebooks-kindle-buecher/b/ref=nav_shopall_kbo4?ie=UTF8&node=530886031"},{"text":"Englische eBooks","url":"/fremdsprachige-ebooks-kindle-buecher/b/ref=nav_shopall_kfb4?ie=UTF8&node=567135031"},{"subtext":"Grenzenloses Hör- & Lesevergnügen","text":"Kindle Unlimited","url":"/gp/kindle/ku/sign-up/ui/rw/about/ref=nav_shopall_kds"},{"text":"Prime Reading","url":"/kindle-dbs/hz/bookshelf/prime/ref=nav_shopall_ods_eink_con_pr"},{"text":"Newsstand","url":"/zeitschriften-ebooks-kindle/b/ref=nav_shopall_k_news?ie=UTF8&node=530887031"}]},{"text":"Inhalte und Verwaltung","columnBreak":"1","items":[{"subtext":"Für PC, iPad, iPhone, Android und mehr","text":"Gratis Kindle Lese-Apps","url":"/gp/digital/fiona/kcp-landing-page/ref=nav_shopall_krdg"},{"subtext":"Kindle eBooks im Browser lesen","text":"Kindle Cloud Reader","url":"/gp/redirect.html/ref=nav_shopall_kcr?location=https://lesen.amazon.de/&token=C9D67D90DB4DC93EBDCE5242DA6920A68E297DF7&source=standards","extra":"target=\\"_blank\\""},{"text":"Meine Inhalte und Geräte","url":"/gp/digital/fiona/manage/ref=nav_shopall_myk4"}]}]}}},"signinContent":{"html":"<div id='nav-signin-tooltip'><a href='/gp/navigation/redirector.html/ref=sign-in-redirect?ie=UTF8&amp;associationHandle=deflex&amp;currentPageURL=https%3A%2F%2Fwww.amazon.de%2Fgp%2Fyourstore%2Fhome%3Fie%3DUTF8%26ref_%3Dnav_custrec_signin&amp;pageType=&amp;switchAccount=&amp;yshURL=https%3A%2F%2Fwww.amazon.de%2Fgp%2Fyourstore%2Fhome%3Fie%3DUTF8%26ref_%3Dnav_custrec_signin' class='nav-action-button' data-nav-role='signin' data-nav-ref='nav_custrec_signin'><span class='nav-action-inner'>Anmelden</span></a><div class='nav-signin-tooltip-footer'>Neuer Kunde? <a href='https://www.amazon.de/ap/register?_encoding=UTF8&amp;openid.assoc_handle=deflex&amp;openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;openid.mode=checkid_setup&amp;openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&amp;openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&amp;openid.pape.max_auth_age=0&amp;openid.return_to=https%3A%2F%2Fwww.amazon.de%2Fgp%2Fyourstore%2Fhome%3Fie%3DUTF8%26ref_%3Dnav_custrec_newcust' class='nav-a'>Starten Sie hier.</a></div></div>"},"ElectronicsComputersPanel":{"promoID":"nav-sa-electronics-computers","template":{"name":"itemList","data":{"text":"Elektronik & Computer","items":[{"text":"Elektronik & Foto","items":[{"text":"Kamera & Foto","url":"/Kamera-Foto-Digitalkameras-Spiegelreflexkameras-Camcorder/b/ref=nav_shopall_p?ie=UTF8&node=571860"},{"text":"Smartphones & Zubehör","url":"/Handys-Smartphones-Handyvertr%C3%A4ge/b/ref=nav_shopall_wi?ie=UTF8&node=571954"},{"text":"TV, Fernseher & Heimkino","url":"/Heimkino-TV-Fernseher/b/ref=nav_shopall_av?ie=UTF8&node=761254"},{"text":"Audio & HiFi","url":"/Audio-Hifi/b/ref=nav_shopall_ah?ie=UTF8&node=1966060031"},{"text":"Musikinstrumente & DJ-Equipment","url":"/Musikinstrumente-DJ-Equipment/b/ref=nav_shopall_mi?ie=UTF8&node=340849031"},{"text":"Navigation","url":"/Navigationssystems-Car-HiFi-Autoradios/b/ref=nav_shopall_gps?ie=UTF8&node=236861011"},{"text":"Elektronik-Zubehör","url":"/Elektronik-Zubeh%C3%B6r/b/ref=nav_shopall_ele_acc?ie=UTF8&node=569866"},{"text":"Konsolen & Games-Zubehör","url":"/Zubeh%C3%B6r-Hardware-Games/b/ref=nav_shopall_gd?ie=UTF8&node=700032"},{"text":"Küchen- & Haushaltsgeräte","url":"/Elektrische-K%C3%BCchenger%C3%A4te/b/ref=nav_shopall_es?ie=UTF8&node=3169321"},{"text":"Elektro-Großgeräte\\n","url":"/Haushaltsger%C3%A4te-Hausger%C3%A4te/b/ref=nav_shopall_la?ie=UTF8&node=908823031"},{"text":"Alle Produkte","url":"/Elektronik-Foto/b/ref=nav_shopall_el?ie=UTF8&node=562066"},{"text":"Schnäppchen","url":"/bbp/ref=nav_shopall_bbp_bb_a77114_in_sd_w_na_na_de_de?_encoding=UTF8&category=%2Felectronics"}]},{"text":"Computer & Büro","columnBreak":"1","items":[{"text":"Laptops","url":"/NoteBooks/b/ref=nav_shopall_desk?ie=UTF8&node=427957031"},{"text":"Tablets","url":"/Tablet-PCs/b/ref=nav_shopall_tablets?ie=UTF8&node=429874031"},{"text":"Computer-Zubehör","url":"/Computerzubehoer-Maeuse-Netzwerk-Festplatten-Ssds-Speicherkarten-Notebook-Taschen-Tablet-Huellen-Kab/b/ref=nav_shopall_compz?ie=UTF8&node=514839031"},{"text":"PC-Komponenten","url":"/PC-Komponenten/b/ref=nav_shopall_compc?ie=UTF8&node=427956031"},{"text":"Software","url":"/Software/b/ref=nav_shopall_soft?ie=UTF8&node=301927"},{"text":"PC- & Video-Games","url":"/computer-video-spiele-games-konsolen/b/ref=nav_shopall_compg?ie=UTF8&node=300992"},{"text":"Drucker & Tintenpatronen","url":"/Tintenstrahldrucker-Laserdrucker/b/ref=nav_shopall_prin?ie=UTF8&node=427955031"},{"text":"Bürobedarf & Schreibwaren","url":"/B%C3%BCro-B%C3%BCromaterial-Schreibwaren-B%C3%BCrobedarf-B%C3%BCroartikel/b/ref=nav_shopall_op?ie=UTF8&node=192416031"}]}]}}},"ApparelShoesWatchesPanel":{"promoID":"nav-sa-apparel-shoes-watches","template":{"name":"itemList","data":{"text":"Kleidung, Schuhe & Uhren","items":[{"text":"Bekleidung & Schuhe","items":[{"text":"Damen","url":"/Damen-Amazon-Fashion-Mode/b/ref=nav_shopall_sl_gender_wom?ie=UTF8&node=12419317031"},{"text":"Herren","url":"/Herren-Amazon-Fashion-Mode/b/ref=nav_shopall_sl_gender_men?ie=UTF8&node=12419318031"},{"text":"Mädchen","url":"/M%C3%83%C2%A4dchen-Amazon-Fashion-Mode/b/ref=nav_shopall_sl_gender_girls?ie=UTF8&node=12419319031"},{"text":"Jungen","url":"/Jungen-Amazon-Fashion-Mode/b/ref=nav_shopall_sl_gender_boys?ie=UTF8&node=12419320031"},{"text":"Baby","url":"/Babys-Amazon-Fashion-Mode/b/ref=nav_shopall_sl_gender_baby?ie=UTF8&node=12419321031"}]},{"text":"Accessoires","dividerBefore":"1","items":[{"text":"Schmuck","url":"/Schmuck-Charms-Ohrringe-Ketten/b/ref=nav_shopall_sl_de_jewelry?ie=UTF8&node=327472011"},{"text":"Uhren","url":"/Uhren/b/ref=nav_shopall_sl_de_watches?ie=UTF8&node=193707031"},{"text":"Handtaschen","url":"/Taschen-Damen-Herren/b/ref=nav_shopall_sl_de_hbags?ie=UTF8&node=1760236031"},{"text":"Koffer, Rucksäcke & Taschen","url":"/koffer-rucks%C3%A4cke-taschen/b/ref=nav_shopall_sl_de_luggage?ie=UTF8&node=2454118031"},{"text":"Sonnenbrillen","url":"/Sonnenbrillen-Shop/b/ref=nav_shopall_sl_de_sunglasses?ie=UTF8&node=6080655031"}]},{"dividerBefore":"1","items":[{"text":"Sale %","url":"/fashion-sale/b/ref=nav_shopall_sl_de_sale?ie=UTF8&node=245404031"},{"text":"Schnäppchen","url":"/bbp/ref=nav_shopall_bbp_bb_757550_in_sd_w_na_na_de_de"}]}]}}},"FireTvPanel":{"promoID":"nav-sa-fire-tv","template":{"name":"itemList","data":{"text":"Fire TV","items":[{"text":"Video- und Spielespaß","items":[{"subtext":"Der leistungsstärkste 4K Streaming-Stick mit der neuen Alexa Sprachsteuerung\\n","text":"Wir präsentieren: Fire TV Stick 4K\\n","url":"/dp/B079QHMFWC/ref=nav_shopall_k_smp_mn"},{"subtext":"Unser Bestseller, Fire TV Stick","text":"Fire TV Stick","url":"/dp/B01ETRIS3K/ref=nav_shopall_k_fire_tv_tank"},{"subtext":"Adapter, Schutzpläne &amp; mehr ","text":"Zubehör ","url":"/Zubehoer-Amazon-Geraete-Kindle/b/ref=nav_shopall_k_fire_acc?ie=UTF8&node=530884031"}]},{"text":"Filme, Serien und mehr","columnBreak":"1","items":[{"text":"Prime Video - Enthalten in Prime","url":"/Prime-Video/b/ref=nav_shopall_k_fire_tv_piv?ie=UTF8&node=3279204031"},{"text":"Prime Video - Alle Videos","url":"/Amazon-Video/b/ref=nav_shopall_k_fire_tv_aiv?ie=UTF8&node=3010075031"},{"text":"Apps & Spiele für Fire TV","url":"/b/ref=nav_shopall_k_fire_tv_apps_games?ie=UTF8&node=5862541031"},{"text":"Amazon Photos","url":"/clouddrive/ref=nav_shopall_k_fire_tv_cd"}]}]}}},"Mp3Panel":{"promoID":"nav-sa-mp3","template":{"name":"itemList","data":{"text":"Amazon Music","items":[{"text":"Musik streamen","items":[{"subtext":"50 Millionen Songs und Fußball streamen","text":"Amazon Music Unlimited","url":"/gp/dmusic/promotions/AmazonMusicUnlimited/ref=nav_shopall_dm_amu"},{"subtext":"2 Millionen Songs und Bundesliga streamen","text":"Prime Music","url":"/b/ref=nav_shopall_dm_prime?ie=UTF8&node=5686557031"},{"subtext":"music.amazon.com","text":"Meine Musikbibliothek","url":"/gp/dmusic/mp3/player/ref=nav_shopall_dm_library","dividerBefore":"1","extra":"target=\\"_blank\\""},{"text":"Amazon Music Apps","url":"/amazon-music-app/b/ref=nav_shopall_dm_apps?ie=UTF8&node=1949586031"},{"text":"Amazon Music und Alexa","url":"/b/ref=nav_shopall_dm_veronica?ie=UTF8&node=12807138031"},{"text":"Fußball live bei Amazon Music\\n","url":"/gp/dmusic/promotions/LiveSports/ref=nav_shopall_dm_poldi"}]},{"text":"Musik kaufen","columnBreak":"1","items":[{"subtext":"Musik zum Anfassen","text":"CDs & Vinyl","url":"/b/ref=nav_shopall_dm_cds_vinyl?ie=UTF8&node=255882"},{"subtext":"Songs und Alben zum Herunterladen","text":"Musik-Downloads","url":"/MP3-Musik-Downloads/b/ref=nav_shopall_dm_store?ie=UTF8&node=77195031"}]}]}}},"MusicGamesFilmTvPanel":{"promoID":"nav-sa-music-games-film-tv","template":{"name":"itemList","data":{"text":"Filme, Serien, Musik & Games","items":[{"text":"Filme, Serien, Musik & Games","items":[{"text":"Prime Video - Alle Videos","url":"/Amazon-Video/b/ref=nav_shopall_aiv?ie=UTF8&node=3010075031"},{"text":"Alle DVDs & Blu-rays","url":"/dvd-blu-ray-filme-3D-vhs-video/b/ref=nav_shopall_dvd_blu?ie=UTF8&node=284266"},{"text":"Serien auf DVD & Blu-ray","url":"/TV-Serien-Produktionen-DVD-Blu-ray/b/ref=nav_shopall_tv_shows?ie=UTF8&node=508214"},{"text":"Blu-ray-Shop","url":"/Blu-ray-Filme-Neuheiten-Angebote/b/ref=nav_shopall_blu_ray?ie=UTF8&node=514450"},{"text":"Musik-CDs & Vinyl","url":"/b/ref=nav_shopall_mu?ie=UTF8&node=255882","dividerBefore":"1"},{"text":"Klassische Musik","url":"/Klassik-Klassiche-Musik-CDs/b/ref=nav_shopall_cm?ie=UTF8&node=255966"},{"text":"Musik-Downloads","url":"/MP3-Musik-Downloads/b/ref=nav_shopall_dm?ie=UTF8&node=77195031"},{"text":"Musikinstrumente & DJ-Equipment","url":"/Musikinstrumente-DJ-Equipment/b/ref=nav_shopall_mi?ie=UTF8&node=340849031"},{"text":"Games","url":"/computer-video-spiele-games-konsolen/b/ref=nav_shopall_cvg?ie=UTF8&node=300992","dividerBefore":"1"},{}]}]}}},"CloudDrivePanel":{"promoID":"nav-sa-cloud-drive","template":{"name":"itemList","data":{"text":"Amazon Photos","items":[{"text":"Amazon Photos","items":[{"subtext":"Unbegrenzter Fotospeicherplatz mit Prime","text":"Amazon Photos","url":"/clouddrive/primephotos/ref=nav_shopall_acd_prime"},{"subtext":"Sicherer Speicher für Dateien, Videos und mehr","text":"Amazon Drive","url":"/clouddrive/home/ref=nav_shopall_acd_about"},{"subtext":"Laden Sie die App für Mobilgeräte und Desktops herunter, um von überall auf Ihre Inhalte zuzugreifen","text":"Laden Sie die kostenlosen Apps herunter","url":"/clouddrive/home/ref=nav_shopall_acd_freeapps#download-section"},{"subtext":"Ihr Konto verwalten","text":"Anmelden","url":"/clouddrive/ref=nav_shopall_acd_urc?_encoding=UTF8&sf=1","extra":"target=\\"_blank\\""}]}]}}},"KindleFireTabletPanel":{"promoID":"nav-sa-kindle-fire-tablet","template":{"name":"itemList","data":{"text":"Fire-Tablets","items":[{"text":"Fire-Tablets","items":[{"subtext":"Unser meistverkauftes Tablet - jetzt noch besser","text":"Fire 7\\n","url":"/dp/B01J90P010/ref=nav_shopall_k_aus"},{"subtext":"Bis zu 10 Stunden Akku-Laufzeit. Brillante Farbdarstellung. Starke Leistung","text":"Das neue Fire HD 8","url":"/dp/B0794TLHP4/ref=nav_shopall_k_kar"},{"subtext":"1080p Full HD. 32 GB Speicherplatz. Mit Alexa Hands-free.","text":"Fire HD 10","url":"/dp/B01M3015CT/ref=nav_shopall_k_hd10_sue"},{"subtext":"Sollte es kaputt gehen, ersetzen wir es. Versprochen.","text":"Fire 7 Kids Edition","url":"/dp/B01J90R8D8/ref=nav_shopall_k_aket"},{"subtext":"Bis zu 10 Stunden Akku-Laufzeit. 32 GB Speicherplatz. 8-Zoll-HD-Bildschirm.","text":"Das neue Fire HD 8 Kids Edition","url":"/dp/B0794SNF6C/ref=nav_shopall_k_kket"},{"subtext":"Unser größtes und schnellstes Tablet für Kinder","text":"Das neue Fire HD 10 Kids Edition","url":"/dp/B079Z4NVTS/ref=nav_shopall_k_sket"},{"subtext":"Hüllen, Ladegeräte, Sleeves und mehr","text":"Zubehör","url":"/Zubehoer-Amazon-Geraete-Kindle/b/ref=nav_shopall_k_acc?ie=UTF8&node=530884031"}]},{"text":"Inhalte und Verwaltung","columnBreak":"1","items":[{"text":"Prime Video","url":"/Amazon-Video/b/ref=nav_shopall_k_aiv?ie=UTF8&node=3010075031"},{"text":"Apps & Spiele","url":"/Apps-Spiele-Fire-Tablet/b/ref=nav_shopall_k_apps?ie=UTF8&node=2656915031"},{"text":"Musik-Downloads","url":"/MP3-Musik-Downloads/b/ref=nav_shopall_k_mp3?ie=UTF8&node=77195031"},{"text":"Kindle eBooks","url":"/ebooks-kindle-buecher/b/ref=nav_shopall_k_books?ie=UTF8&node=530886031"},{"text":"Newsstand","url":"/zeitschriften-ebooks-kindle/b/ref=nav_shopall_k_news?ie=UTF8&node=530887031"},{"text":"Alle Hörbuch-Downloads","url":"/audible-h%C3%B6rbuch-downloads/b/ref=nav_shopall_k_aud?ie=UTF8&node=251105031"},{"text":"FreeTime Unlimited","url":"/Freetime-Unlimited-eBooks/b/ref=nav_shopall_k_ftu?ie=UTF8&node=7385957031"},{"text":"Meine Inhalte und Geräte","url":"/gp/digital/fiona/manage/ref=nav_shopall_k_myk"}]}]}}},"HandmadeLaunchpadPanel":{"promoID":"nav-sa-handmade-launchpad","template":{"name":"itemList","data":{"text":"Handmade & Amazon Launchpad","items":[{"text":"Handmade","items":[{"subtext":"Individuelle, handgefertigte Artikel","text":"Alle Handmade-Produkte","url":"/Handmade-Produkte/b/ref=nav_shopall_HM_Home?ie=UTF8&node=9699311031"},{"text":"Geschenke","url":"/b/ref=nav_shopall_HM_gifts?ie=UTF8&node=14133638031"},{"text":"Schmuck","url":"/Handgefertigter-Schmuck/b/ref=nav_shopall_HM_Jewelry?ie=UTF8&node=10733080031"},{"text":"Küche, Haushalt & Wohnen","url":"/Handgefertigte-Wohnaccessoires-Deko/b/ref=nav_shopall_HM_homekitchen?ie=UTF8&node=10733079031"},{"text":"Hochzeit","url":"/b/ref=nav_shopall_HM_wedding?ie=UTF8&node=14774986031"},{"text":"Bekleidung, Schuhe & Accessoires","url":"/Handgefertigte-Handtaschen-Accessoires/b/ref=nav_shopall_HM_accessories?ie=UTF8&node=10733075031"},{"text":"Schreibwaren & Partybedarf","url":"/Handgefertigte-Schreibwaren-Partybedarf/b/ref=nav_shopall_HM_stationery?ie=UTF8&node=10733081031"},{"text":"Baby","url":"/Handgefertigte-Babygeschenke/b/ref=nav_shopall_HM_baby?ie=UTF8&node=10733073031"},{"text":"Spielzeug & Spiele","url":"/Handgefertigtes-Spielzeug-Spiele/b/ref=nav_shopall_HM_toysgames?ie=UTF8&node=10733082031"},{"text":"Made in Italy","url":"/b/ref=nav_shopall_HM_mii?ie=UTF8&node=12440604031"}]},{"text":"Kontaktieren Sie uns","dividerBefore":"1","items":[{"text":"Sie erstellen Produkte in Handarbeit?","url":"/gp/redirect.html/ref=nav_shopall_HM_handmadeapply?location=https://services.amazon.de/handmade.html&token=96D7FEFC78E84CC78EC038EF30FD423C0291099E&source=standards"}]},{"text":"Amazon Launchpad","columnBreak":"1","items":[{"subtext":"Entdecken Sie innovative und einzigartige Start-up-Produkte","text":"Alle Produkte aus Amazon Launchpad ","url":"/Amazon-Launchpad/b/ref=nav_shopall_launch_all?ie=UTF8&node=9418395031"},{"text":"Elektronik & Gadgets","url":"/Elektronik/b/ref=nav_shopall_launch_gadgets?ie=UTF8&node=9418405031"},{"text":"Sport & Outdoor","url":"/Sport-Outdoor/b/ref=nav_shopall_launch_sports?ie=UTF8&node=9418413031"},{"text":"Körperpflege & Mode\\n","url":"/Koerperpflege/b/ref=nav_shopall_launch_body?ie=UTF8&node=9418396031"},{"text":"Essen & Trinken","url":"/Essen-Trinken/b/ref=nav_shopall_launch_food?ie=UTF8&node=9418401031"},{"text":"Haus & Garten","url":"/Haus/b/ref=nav_shopall_launch_house?ie=UTF8&node=9418415031"},{"text":"Spielzeug & Baby","url":"/b/ref=nav_shopall_launch_toys?ie=UTF8&node=13826914031"},{"text":"Start-ups aus Deutschland","url":"/Innovationen-aus-Deutschland/b/ref=nav_shopall_launch_germany?ie=UTF8&node=9418431031"},{"subtext":"Werden Sie Teil von Amazon Launchpad","text":"Sind Sie ein Start-up?","url":"/gp/launchpad/signup/ref=nav_shopall_nav_shopall_launch_signup"}]}]}}},"AutoMotorcycleIndustrialPanel":{"promoID":"nav-sa-auto-motorcycle-industrial","template":{"name":"itemList","data":{"text":"Auto, Motorrad & Gewerbe","items":[{"text":"Auto, Motorrad & Gewerbe","items":[{"text":"Alles in Gewerbe, Industrie & Wissenschaft","url":"/Gewerbe-Industrie-Wissenschaft/b/ref=nav_shopall_indus?ie=UTF8&node=5866098031"},{"text":"Labor","url":"/Labor-wissenschaftliche-Produkte/b/ref=nav_shopall_lab?ie=UTF8&node=6587769031"},{"text":"Reinigung","url":"/Sanitaerbedarfs-Gebaeudereinigungsmittel/b/ref=nav_shopall_jan?ie=UTF8&node=6588210031"},{"text":"Sicherheit","url":"/Produkte-Arbeitsmedizin-Sicherheit/b/ref=nav_shopall_safety?ie=UTF8&node=6588776031"}]},{"text":"Auto & Motorrad","dividerBefore":"1","items":[{"text":"Autoteile & -zubehör","url":"/auto-tuning-autoteile/b/ref=nav_shopall_am?ie=UTF8&node=78191031"},{"text":"Werkzeug & Wartung","url":"/Werkzeug-Wartung/b/ref=nav_shopall_toolseq?ie=UTF8&node=2611181031"},{"text":"Motorrad","url":"/Motorradreifen-Roller-Motorrad/b/ref=nav_shopall_mc?ie=UTF8&node=4606925031"},{"text":"Navigation & Car-Hi-Fi","url":"/Navigationssystems-Car-HiFi-Autoradios/b/ref=nav_shopall_hfn?ie=UTF8&node=236861011"}]}]}}},"AndroidPanel":{"promoID":"nav-sa-android","template":{"name":"itemList","data":{"text":"Amazon Appstore","items":[{"text":"Amazon Appstore","items":[{"subtext":"Für Kindle Fire und Android-Geräte","text":"Alle Apps und Spiele","url":"/mobile-apps/b/ref=nav_shopall_adr_app?ie=UTF8&node=1661648031"},{"text":"Spiele","url":"/Spiele-Apps-Adroid-Fire/b/ref=nav_shopall_adr_gam?ie=UTF8&node=1720689031"},{"subtext":"Weniger ausgeben, mehr spielen","text":"Amazon Coins","url":"/gp/feature.html/ref=nav_shopall_adr_coins?ie=UTF8&docId=1000749413"},{"subtext":"Kindle, mobiles Shopping, MP3 und mehr","text":"Amazon Apps","url":"/b/ref=nav_shopall_adr_amz?ie=UTF8&node=4951330031","dividerBefore":"1"},{"subtext":"Apps anzeigen und Abonnements verwalten","text":"Meine Apps und Abonnements","url":"/gp/mas/your-account/myapps/ref=nav_shopall_adr_yad3"}]}]}}},"wishlistContent":{"template":{"name":"itemList","data":{"items":[{"text":"Geschenke finden","url":"/gcx/Geschenkefinder/gfhz/ref=nav_wishlist_nav_wishlist_gf"},{"text":"Neue Liste anlegen\\n","url":"/gp/registry/wishlist/ref=nav_wishlist_gno_createwl?ie=UTF8&triggerElementID=createList"},{"text":"Liste finden","url":"/gp/registry/search.html/ref=nav_wishlist_gno_listpop_find?ie=UTF8&type=wishlist"},{"subtext":"Amazon Assistant installieren","text":"Artikel von überall speichern","url":"/gp/BIT/ref=nav_wishlist_bit_v2_a0021"},{"text":"Hochzeitsliste","url":"/gp/wedding/homepage/ref=nav_wishlist_gno_listpop_wr"},{"text":"Baby-Wunschliste","url":"/baby-reg/homepage/ref=nav_wishlist_gno_listpop_br"},{"text":"Amazon Scout | Stil-Berater","url":"/scout/ref=nav_wishlist_sbl"}]}}},"KindleAmazonEchoPanel":{"promoID":"nav-sa-kindle-amazon-echo","template":{"name":"itemList","data":{"text":"Echo & Alexa","items":[{"text":"Echo-Geräte","items":[{"subtext":"Alexa für jeden Raum","text":"Das neue Echo Dot","url":"/dp/B0792HCFTG/ref=nav_shopall_k_echo_dn"},{"subtext":"Immer verfügbar und schnell. Einfach fragen. ","text":"Amazon Echo","url":"/dp/B06ZXQV6P8/ref=nav_shopall_k_echo_rad"},{"subtext":"Mit Premiumklang und eingebautem Smart Home-Hub","text":"Das neue Echo Plus","url":"/dp/B07H2WSKVK/ref=nav_shopall_k_echo_ld"},{"subtext":"Stylisches, kompaktes Echo mit Bildschirm","text":"Echo Spot","url":"/dp/B01J2BL01K/ref=nav_shopall_k_echo_roo","dividerBefore":"1"},{"subtext":"Premiumlautsprecher mit brillantem 10-Zoll-HD-Display","text":"Das neue Echo Show","url":"/dp/B07H33PH9M/ref=nav_shopall_k_echo_bs"},{"subtext":"Geräte vergleichen, Informationen zu Alexa &amp; mehr ","text":"Alle Geräte mit Alexa anzeigen ","url":"/b/ref=nav_shopall_k_echo_catpg?ie=UTF8&node=14100226031","dividerBefore":"1"}]},{"text":"Mehr Inhalte","columnBreak":"1","items":[{"subtext":"Entdecken Sie, was Echo alles kann","text":"Alexa kennenlernen","url":"/b/ref=nav_shopall_k_echo_aug?ie=UTF8&node=12775495031"},{"subtext":"Für Fire OS, Android, iOS und Desktop Browser","text":"Alexa App","url":"/gp/help/customer/display.html/ref=nav_shopall_k_echo_app?ie=UTF8&nodeId=201549920"},{"subtext":"Alle Smart Home-Produkte und Geräte mit Sprachsteuerung","text":"Alexa & Smart Home","url":"/b/ref=nav_shopall_k_echo_smarthome?ie=UTF8&node=14536033031"},{"subtext":"Suchen Sie nach Skills in über 21 Kategorien","text":"Alexa Skills","url":"/alexa-skills/b/ref=nav_shopall_k_a2s_all?ie=UTF8&node=10068460031"},{"subtext":"40 Millionen Songs zum Streamen","text":"Amazon Music Unlimited","url":"/gp/dmusic/promotions/AmazonMusicUnlimited/ref=nav_shopall_k_echo_musicunlimited"},{"subtext":"Ihre Audible-Bibliothek einfach vorlesen lassen","text":"Audible-Hörbücher","url":"/audible-h%C3%B6rbuch-downloads/b/ref=nav_shopall_k_echo_audible?ie=UTF8&node=251105031"}]}]}}},"SportsOutdoorsPanel":{"promoID":"nav-sa-sports-outdoors","template":{"name":"itemList","data":{"text":"Sport & Freizeit","items":[{"text":"Sport & Freizeit","items":[{"text":"Alle Sport-Produkte","url":"/sport-freizeit-sportartikel/b/ref=nav_shopall_asf?ie=UTF8&node=16435051"},{"text":"Camping & Outdoor","url":"/Camping-Outdoor/b/ref=nav_shopall_camp?ie=UTF8&node=16435151"},{"text":"Fitness","url":"/Fitness/b/ref=nav_shopall_fit?ie=UTF8&node=16435171"},{"text":"Fußball","url":"/Fu%C3%9Fball/b/ref=nav_shopall_fball?ie=UTF8&node=16435181"},{"text":"Radsport","url":"/Radsport/b/ref=nav_shopall_rad?ie=UTF8&node=16435211"},{"text":"Running","url":"/Running/b/ref=nav_shopall_running?ie=UTF8&node=16435231"},{"text":"Sportelektronik","url":"/pulsuhren-gps-ger%C3%A4te/b/ref=nav_shopall_mongps?ie=UTF8&node=190534011"},{"text":"Sportbekleidung","url":"/Sportbekleidung/b/ref=nav_shopall_spw?ie=UTF8&node=3772226031"},{"text":"Sportschuhe","url":"/Sportschuhe-Laufschuhe-Fu%C3%9Fballschuhe/b/ref=nav_shopall_sportshoes?ie=UTF8&node=1948670031"},{"text":"Fußball live bei Amazon Music","url":"/gp/dmusic/promotions/LiveSports/ref=nav_shopall_dmm_sport_poldi"}]}]}}},"AmazonFreshPanel":{"promoID":"nav-sa-amazon-fresh","template":{"name":"itemList","data":{"badgeText":"Neu","text":"AmazonFresh","dividerBefore":"1","items":[{"text":"AmazonFresh","items":[{"text":"Alle AmazonFresh-Produkte","url":"/b/ref=nav_shopall_afs_aaf?_encoding=UTF8&node=6723195031"},{"text":"Frisches Obst","url":"/s/ref=nav_shopall_afs_ff?_encoding=UTF8&bbn=6723195031&node=7383624031"},{"text":"Frisches Gemüse","url":"/s/ref=nav_shopall_afs_fv?_encoding=UTF8&bbn=6723195031&node=7383623031"},{"text":"Brot & Backwaren","url":"/s/ref=nav_shopall_afs_bb?_encoding=UTF8&bbn=6723195031&node=358557031"},{"text":"Fleisch, Wurstwaren & Fisch","url":"/s/ref=nav_shopall_afs_ms?_encoding=UTF8&bbn=6723195031&node=7388515031"},{"text":"Milch- & Kühlprodukte","url":"/s/ref=nav_shopall_afs_dce?_encoding=UTF8&bbn=6723195031&node=358572031"},{"text":"Frische Fertiggerichte","url":"/s/ref=nav_shopall_afs_pm?_encoding=UTF8&bbn=6723195031&node=9732440031"},{"text":"Schokolade & Süßigkeiten","url":"/s/ref=nav_shopall_afs_ff?_encoding=UTF8&bbn=6723195031&node=358579031"},{"text":"Knabberartikel","url":"/s/ref=nav_shopall_afs_sb?_encoding=UTF8&bbn=6723195031&node=358568031"},{"text":"Tiefkühlprodukte","url":"/s/ref=nav_shopall_afs_ff?_encoding=UTF8&bbn=6723195031&node=7384443031"},{"text":"Getränke, Kaffee & Tee","url":"/s/ref=nav_shopall_afs_ctb?_encoding=UTF8&bbn=6723195031&node=358564031"},{"text":"Bier, Wein & Spirituosen","url":"/s/ref=nav_shopall_afs_cws?_encoding=UTF8&bbn=6723195031&node=358556031"},{"text":"Lieblingsläden","url":"/s/ref=nav_shopall_afs_nm?_encoding=UTF8&node=10550392031","dividerBefore":"1"},{"text":"Haushaltswaren","url":"/s/ref=nav_shopall_afs_hl?_encoding=UTF8&bbn=6723195031&node=64270031"},{"text":"Baby","url":"/s/ref=nav_shopall_afs_bc?_encoding=UTF8&bbn=6723195031&node=355007011"},{"text":"Beauty","url":"/s/ref=nav_shopall_afs_bty?_encoding=UTF8&bbn=6723195031&node=84230031"},{"text":"Haustiere","url":"/s/ref=nav_shopall_afs_pc?_encoding=UTF8&bbn=6723195031&node=340852031"},{"text":"Meine Produkte","url":"/afx/lists/pastpurchases/ref=nav_shopall_afs_pp","dividerBefore":"1"},{"text":"Meine Einkaufslisten","url":"/afx/lists/grocerylists/ref=nav_shopall_afs_gl"}]}]}}},"BabyKidsToysPanel":{"promoID":"nav-sa-baby-kids-toys","template":{"name":"itemList","data":{"text":"Spielzeug & Baby","items":[{"text":"Spielzeug & Baby","items":[{"text":"Spielzeug","url":"/spielzeug-brettspiele-baby-kleinkind/b/ref=nav_shopall_tg?ie=UTF8&node=12950651"},{"text":"Baby","url":"/baby-babyausstattung-babyartikel/b/ref=nav_shopall_ba?ie=UTF8&node=355007011"},{"text":"Babybekleidung & Babyschuhe","url":"/b/ref=nav_shopall_baby_clothing_shoes?ie=UTF8&node=12409931031"},{"text":"Brettspiele","url":"/Spiele-Brettspiele-Kinderspiele-Aktionsspiele-Haba-Monopoly/b/ref=nav_shopall_gbg?ie=UTF8&node=12956501"},{"text":"Baby-Wunschliste","url":"/baby-reg/homepage/ref=nav_shopall_babyreg"},{"subtext":"Bis zu 20% auf Windeln und Babynahrung für Prime-Mitglieder","text":"Amazon Family","url":"/gp/family/signup/welcome/ref=nav_shopall_amzn_family"}]}]}}},"HomeGardenToolsPanel":{"promoID":"nav-sa-home-garden-tools","template":{"name":"itemList","data":{"text":"Haushalt, Garten, Baumarkt","items":[{"text":"Küche, Haushalt & Wohnen","items":[{"text":"Küchen- & Haushaltsgeräte","url":"/Elektrische-K%C3%BCchenger%C3%A4te/b/ref=nav_shopall_es?ie=UTF8&node=3169321"},{"text":"Kaffee & Espresso","url":"/Espressomaschinen-Kaffeemaschine/b/ref=nav_shopall_coffee?ie=UTF8&node=3310781"},{"text":"Elektro-Großgeräte\\n","url":"/Haushaltsger%C3%A4te-Hausger%C3%A4te/b/ref=nav_shopall_la?ie=UTF8&node=908823031"},{"text":"Kochen & Essen","url":"/Kochen-Braten-Backen-K%C3%BCche-Haushalt/b/ref=nav_shopall_ki?ie=UTF8&node=257408011"},{"text":"Aufbewahren & Ordnen","url":"/aufbewahren-und-ordnen/b/ref=nav_shopall_storage?ie=UTF8&node=3437522031"},{"text":"Möbel & Wohnaccessoires","url":"/M%C3%B6bel-Dekoration/b/ref=nav_shopall_home_decor?ie=UTF8&node=3312261"},{"text":"Heimtextilien","url":"/Heimtextilien-Matratzen-Bettw%C3%A4sche/b/ref=nav_shopall_textiles?ie=UTF8&node=10176091"},{"text":"Beleuchtung","url":"/Beleuchtung/b/ref=nav_shopall_light?ie=UTF8&node=213083031"},{"text":"Alles in Küche, Haushalt & Wohnen","url":"/k%C3%83%C2%BCche-haushalt-wohnen/b/ref=nav_shopall_allkhprod?ie=UTF8&node=3167641"},{"text":"Schnäppchen","url":"/bbp/ref=nav_shopall_bbp_bb_01a411_in_sd_w_na_na_de_de?_encoding=UTF8&category=%2Fhome-decor"},{"text":"Amazon Scout | Stil-Berater","url":"/scout/ref=nav_shopall_sbl"}]},{"text":"Baumarkt, Garten & Tier","columnBreak":"1","items":[{"text":"Elektro- & Handwerkzeuge","url":"/elektrowerkzeuge-handwerkzeuge/b/ref=nav_shopall_paht?ie=UTF8&node=2076939031"},{"text":"Elektrisches Gartenwerkzeug","url":"/Elektrisches-Gartenwerkzeug-Gartenger%C3%A4te-Elektro-Handwerkzeuge-Produkte/b/ref=nav_shopall_lawn?ie=UTF8&node=120589031"},{"text":"Elektroinstallation","url":"/elektroinstallation-steckdosen-zeitschaltuhr/b/ref=nav_shopall_electric?ie=UTF8&node=2076361031"},{"text":"Heizen & Kühlen","url":"/heizen-k%C3%BChlen-luftbefeuchtung/b/ref=nav_shopall_heatfan?ie=UTF8&node=2076254031"},{"text":"Küchen- & Badinstallation","url":"/badinstallation-k%C3%BCcheninstallation/b/ref=nav_shopall_bathplumb?ie=UTF8&node=2076820031"},{"text":"Smart Home","url":"/Smart-Home-Automation/b/ref=nav_shopall_inth?ie=UTF8&node=4816541031"},{"text":"Werkzeuge für Profis","url":"/professionelle-werkzeuge-f%C3%BCr-handwerker/b/ref=nav_shopall_profst?ie=UTF8&node=5490374031"},{"text":"Alles in Baumarkt","url":"/baumarkt-werkzeug-heimwerken/b/ref=nav_shopall_diy?ie=UTF8&node=80084031"},{"text":"Alle Garten-Produkte","url":"/garten-shop/b/ref=nav_shopall_lg?ie=UTF8&node=10925031"},{"text":"Alles für Tiere","url":"/Tierbedarf-Tiernahrung/b/ref=nav_shopall_ps?ie=UTF8&node=340852031"}]}]}}},"yourAccountContent":{"template":{"name":"itemList","data":{"items":[{"text":"Mein Konto","url":"/gp/css/homepage.html/ref=nav_youraccount_ya"},{"text":"Meine Bestellungen","url":"/gp/css/order-history/ref=nav_youraccount_orders","id":"nav_prefetch_yourorders"},{"text":"Meine Dash Buttons","url":"/ddb/your-dash-buttons/ref=nav_youraccount_nav_youraccount_snk_ddb_ydb_d_nav_ya"},{"text":"Wunschzettel","url":"/gp/registry/wishlist/ref=nav_youraccount_wl?ie=UTF8&requiresSignIn=1"},{"text":"Empfehlungen","url":"/gp/yourstore/ref=nav_youraccount_recs"},{"text":"Spar-Abo verwalten","url":"/gp/subscribe-and-save/manager/viewsubscriptions/ref=nav_youraccount_sns"},{"text":"Ihre Mitgliedschaften und Abonnements","url":"/yourmembershipsandsubscriptions/ref=nav_youraccount_digital_subscriptions"},{"text":"Meine Prime-Mitgliedschaft","url":"/gp/subs/primeclub/account/homepage.html/ref=nav_youraccount_prime"},{"text":"Unternehmenskonto erstellen","url":"/b/ref=nav_youraccount_deb2b_reg?ie=UTF8&node=14154536031"},{"text":"Meine Inhalte und Geräte","url":"/gp/digital/fiona/manage/ref=nav_youraccount_myk","dividerBefore":"1"},{"text":"Mein Prime Music","url":"/b/ref=nav_youraccount_pmu?ie=UTF8&node=5686557031"},{"text":"Meine Musikbibliothek","url":"/gp/dmusic/mp3/player/ref=nav_youraccount_cldplyr"},{"text":"Mein Amazon Drive","url":"/clouddrive/ref=nav_youraccount_clddrv"},{"text":"Mein Prime Video","url":"/Prime-Video/b/ref=nav_youraccount_piv?ie=UTF8&node=3279204031"},{"text":"Mein Kindle Unlimited","url":"/gp/kindle/ku/ku_central/ref=nav_youraccount_ku"},{"text":"Meine Watchlist","url":"/gp/video/watchlist/ref=nav_youraccount_ywl"},{"text":"Meine Video-Bibliothek","url":"/gp/video/library/ref=nav_youraccount_yvl"},{"text":"Meine Games- & Software-Bibliothek","url":"/gp/swvgdtt/your-account/manage-downloads.html/ref=nav_youraccount_gsl"},{"text":"Meine Apps & Geräte","url":"/gp/mas/your-account/myapps/ref=nav_youraccount_aad"},{"dividerBefore":"1"},{"text":"Konten wechseln","url":"/gp/navigation/redirector.html/ref=sign-in-redirect?ie=UTF8&associationHandle=deflex&currentPageURL=https%3A%2F%2Fwww.amazon.de%2Fgp%2Fyourstore%2Fhome%3Fie%3DUTF8%26ref_%3Dnav_youraccount_switchacct&pageType=&switchAccount=picker&yshURL=https%3A%2F%2Fwww.amazon.de%2Fgp%2Fyourstore%2Fhome%3Fie%3DUTF8%26ref_%3Dnav_youraccount_switchacct","id":"nav-item-switch-account"},{"text":"Abmelden","url":"/gp/flex/sign-out.html/ref=nav_youraccount_signout?ie=UTF8&action=sign-out&path=%2Fgp%2Fyourstore%2Fhome&signIn=1&useRedirectOnSuccess=1","id":"nav-item-signout"}]}},"wlTriggers":"77689:98075:98076:85042"},"BooksPanel":{"promoID":"nav-sa-books","template":{"name":"itemList","data":{"text":"Bücher & Audible","dividerBefore":"1","items":[{"text":"Bücher","items":[{"text":"Alle Bücher","url":"/b%C3%BCcher-buch-lesen/b/ref=nav_shopall_bo?ie=UTF8&node=186606"},{"text":"Kindle eBooks","url":"/ebooks-kindle-buecher/b/ref=nav_shopall_kbo?ie=UTF8&node=530886031"},{"text":"Kindle Unlimited","url":"/gp/kindle/ku/sign-up/ref=nav_shopall_ods_books_con_ku"},{"text":"Prime Reading","url":"/kindle-dbs/hz/bookshelf/prime/ref=nav_shopall_ods_books_con_pr"},{"text":"Fremdsprachige Bücher","url":"/fremdsprachige-englische-b%C3%83%C2%BCcher-english-books/b/ref=nav_shopall_fbo?ie=UTF8&node=52044011"},{"text":"Fachbücher","url":"/fachb%C3%BCcher-fachbuch/b/ref=nav_shopall_probo?ie=UTF8&node=288100"},{"text":"Schulbücher & Lernhilfen","url":"/schule-lernen-b%C3%83%C2%BCcher/b/ref=nav_shopall_edubo?ie=UTF8&node=403432"},{"text":"Hörbücher","url":"/h%C3%83%C2%B6rb%C3%83%C2%BCcher-h%C3%83%C2%B6rbuch-h%C3%83%C2%B6rspiel-h%C3%83%C2%B6rspiele/b/ref=nav_shopall_abo?ie=UTF8&node=300259"}]},{"text":"Audible Hörbücher","dividerBefore":"1","items":[{"subtext":"30 Tage kostenlos testen","text":"Audible-Abo","url":"/dp/B00NTQ6K7E/ref=nav_shopall_aud_mem"},{"text":"Alle Hörbuch-Downloads","url":"/audible-h%C3%B6rbuch-downloads/b/ref=nav_shopall_aud_bks?ie=UTF8&node=251105031"},{"subtext":"Nahtlos zwischen Lesen und Hören wechseln","text":"Whispersync for Voice","url":"/Whispersync-For-Voice-eBooks/b/ref=nav_shopall_aud_wfv?ie=UTF8&node=4824719031"}]}]}}},"cartContent":{"html":"<div id='nav-cart-flyout' class='nav-empty nav-flyout-content' data-one='{count} Artikel' data-many='{count} Artikel'><div class='nav-dynamic-full'><div id='nav-cart-standard' class='nav-cart-content'><a href='/gp/cart/view.html/ref=nav_flyout_viewcart?ie=UTF8&amp;hasWorkingJavascript=1' class='nav-cart-title'>Artikel in Ihrem Einkaufswagen</a><div class='nav-cart-subtitle'></div><div class='nav-cart-items'></div></div><div id='nav-cart-pantry' class='nav-cart-content' data-box='{count} Karton' data-boxes='{count} Kartons' data-box-filled='{pct}% gefüllt' data-boxes-filled='{pct}% des aktuellen Kartons gefüllt'><a href='/gp/cart/view.html/ref=nav_flyout_viewcart?ie=UTF8&amp;hasWorkingJavascript=1' class='nav-cart-title'>Amazon Pantry Artikel</a><div class='nav-cart-subtitle'></div><div class='nav-cart-items'></div></div><div id='nav-cart-fresh' class='nav-cart-content'><a href='/gp/cart/view.html/ref=nav_flyout_viewcart?ie=UTF8&amp;hasWorkingJavascript=1' class='nav-cart-title'><img id='nav-cart-fresh-logo' src='https://images-eu.ssl-images-amazon.com/images/G/03/gno/ec-logo-fresh-color._CB533346845_.png'></a><div class='nav-cart-subtitle'></div><div class='nav-cart-items'></div></div></div><div class='nav-ajax-message'></div><div class='nav-dynamic-empty'><p class='nav_p nav-bold nav-cart-empty'> Ihr Einkaufswagen ist leer.</p><p class='nav_p '> Nutzen Sie ihn und befüllen Sie ihn mit Büchern, Filmen, Spielsachen, Elektronikartikeln und mehr.</p></div><div class='nav-ajax-error-msg'><p class='nav_p nav-bold'> Es gibt gegenwärtig ein Problem mit der Vorschau Ihres Einkaufswagen.</p><p class='nav_p '> Überprüfen Sie Ihre Internetverbindung und <a href='/gp/cart/view.html/ref=nav_flyout_viewcart?ie=UTF8&hasWorkingJavascript=1' class='nav_a'>gehen Sie zu Ihrem Einkaufswagen</a>, oder <a href='javascript:void(0);' class='nav_a nav-try-again'>versuchen Sie es erneut</a>.</p></div><div id='nav-cart-footer'><a href='/gp/cart/view.html/ref=nav_flyout_viewcart?ie=UTF8&amp;hasWorkingJavascript=1' id='nav-cart-menu-button' class='nav-action-button'><span class='nav-action-inner'>Einkaufswagen ansehen<span id='nav-cart-menu-button-count' ><span id='nav-cart-zero'>(<span class='nav-cart-count'>0</span> Artikel)</span><span id='nav-cart-one' style='display: none;'>(<span class='nav-cart-count'>0</span> Artikel)</span><span id='nav-cart-many' style='display: none;'>(<span class='nav-cart-count'>0</span> Artikel)</span></span></span></a></div></div>"},"InstantVideoPanel":{"promoID":"nav-sa-instant-video","template":{"name":"itemList","data":{"text":"Prime Video","items":[{"text":"Prime Video","items":[{"subtext":"Alle Filme und Serien, die Sie direkt ansehen können","text":"Alle Videos","url":"/Amazon-Video/b/ref=nav_shopall_aiv?ie=UTF8&node=3010075031"},{"subtext":"Unbegrenzter Film- und Seriengenuss","text":"Enthalten in Prime","url":"/Prime-Video/b/ref=nav_shopall_aiv_piv?ie=UTF8&node=3279204031"},{"subtext":"Buchen Sie Eurosport Player, Shudder, GEO und mehr","text":"Prime Video Channels","url":"/gp/video/storefront/ref=nav_shopall_nav_sa_aos?ie=UTF8&filterId=OFFER_FILTER%3DSUBSCRIPTIONS"},{"subtext":"Leihen oder Kaufen von Filmen und Serien","text":"Kaufen und leihen","url":"/filme-serien-kaufen-leihen-streamen-downloaden/b/ref=nav_shopall_aiv_vid?ie=UTF8&node=3279205031"},{"subtext":"Videos hinzufügen zum späteren Ansehen","text":"Meine Watchlist","url":"/gp/video/watchlist/ref=nav_shopall_aiv_wlst","dividerBefore":"1"},{"subtext":"Ihre ausgeliehenen und gekauften Videos","text":"Meine Video-Bibliothek","url":"/gp/video/library/ref=nav_shopall_aiv_yvl"},{"subtext":"Fire Tablets, iPad, Spielekonsolen, TV-Geräte und viele mehr","text":"Auf vielen Geräten verfügbar","url":"/b/ref=nav_shopall_aiv_wtv?ie=UTF8&node=5573494031"}]}]}}},"FoodBeveragesHealthBeautyPanel":{"promoID":"nav-sa-food-beverages-health-beauty","template":{"name":"itemList","data":{"text":"Beauty, Drogerie & Lebensmittel","items":[{"text":"Beauty & Drogerie","items":[{"text":"Beauty","url":"/Parf%C3%BCmerie-Kosmetik-Beauty/b/ref=nav_shopall_bty?ie=UTF8&node=84230031"},{"text":"Luxury Beauty","url":"/Premium-Beauty/b/ref=nav_shopall_lbty?ie=UTF8&node=3765352031"},{"text":"Männerpflege","url":"/m%C3%A4nnerpflege-rasiermesser-rasierer-m%C3%A4nnerparfum/b/ref=nav_shopall_men?ie=UTF8&node=4388424031"},{"text":"Drogerie, Körper- & Babypflege","url":"/Drogerie-K%C3%B6rperpflege/b/ref=nav_shopall_drog?ie=UTF8&node=64187031"},{"text":"Sanitätshaus","url":"/Medizinische-Geraete-Verbrauchsmaterialien/b/ref=nav_shopall_health?ie=UTF8&node=2860102031"}]},{"text":"Lebensmittel & Getränke","dividerBefore":"1","items":[{"text":"Lebensmittel & alkoholfreie Getränke","url":"/Lebensmittel-Getr%C3%A4nke/b/ref=nav_shopall_bev?ie=UTF8&node=340846031"},{"text":"Bier, Wein & Spirituosen","url":"/Bier-Wein-Spirituosen/b/ref=nav_shopall_wine?ie=UTF8&node=358556031"},{"subtext":"Bio, glutenfrei, laktosefrei, Fair Trade & vegan","text":"Bio & Clean Eating","url":"/Clean-Eating/b/ref=nav_shopall_bio?ie=UTF8&node=9501653031"},{"text":"AmazonFresh","url":"/b/ref=nav_shopall_grocery_fresh?_encoding=UTF8&node=6723195031"},{"text":"Sonderangebote","url":"/b/ref=nav_shopall_cons_deals?ie=UTF8&node=3599395031","dividerBefore":"1"},{"subtext":"Die Vorratskammer in der Box","text":"Amazon Pantry","url":"/amazon-pantry/b/ref=nav_shopall_prime_pantry?ie=UTF8&node=5787992031"},{"subtext":"Bis zu 15% sparen und kostenfreie Lieferung","text":"Spar-Abo","url":"/b/ref=nav_shopall_sns?ie=UTF8&node=365206031"}]}]}}},"StorefrontsPanel":{"promoID":"nav-sa-storefronts","template":{"name":"itemList","data":{"text":"Amazon Storefronts","items":[{"text":"Amazon Storefronts","items":[{"text":"Alle Storefronts-Produkte","url":"/b/ref=nav_shopall_storefronts_all?ie=UTF8&node=15428488031"},{"text":"Von Frauen geführte Unternehmen","url":"/b/ref=nav_shopall_storefronts_wom?ie=UTF8&node=15553097031"},{"text":"Familienunternehmen","url":"/b/ref=nav_shopall_storefronts_fam?ie=UTF8&node=15553098031"},{"text":"Produktinnovatoren","url":"/b/ref=nav_shopall_storefronts_inn?ie=UTF8&node=15553100031"},{"text":"Nachhaltige Unternehmen","url":"/b/ref=nav_shopall_storefronts_sus?ie=UTF8&node=15553099031"}]}]}}},"templates":{"asin-promo":"<a href='<#=destination #>' class='nav_asin_promo'>  <img src='<#=image #>' class='nav_asin_promo_img'/>  <span class='nav_asin_promo_headline'><#=headline #></span>  <span class='nav_asin_promo_info'>    <span class='nav_asin_promo_title'><#=productTitle #></span>    <span class='nav_asin_promo_title2'><#=productTitle2 #></span>    <span class='nav_asin_promo_price'><#=price #></span>  </span>  <span class='nav_asin_promo_button nav-sprite'><#=button #></span></a>","discoveryPanelList":"<# var renderItems = function(items) { #>    <span class='nav-dp-title nav-item'>    Deliveries at a glance    <div class='nav-divider-container'><div class='nav-divider'></div></div></span>    <# jQuery.each(items, function (i, item) { #>        <span class='nav-item'>            <a href='<#=item.order_link#>' class='nav-dp-link'>                <span class='nav-dp-left-column'>                    <img src='<#=item.image#>' class='nav-dp-image'/>                </span>                <span class='nav-dp-right-column'>                    <span class='nav-dp-text <#=item.status#>'>                        <#=item.status_text#>                        <br/>                    </span>                    <# if(item.secondary_status_text) { #>                        <span class='nav-dp-text-secondary <#=item.status#>'>                            <#=item.secondary_status_text#>                        </span>                    <# } #>                </span>            </a>            <div class='nav-divider-container'><div class='nav-divider'></div></div>        </span>  <# }); #>  <a href='/your-orders/ref=nav_dp_ayo' class='nav-dp-link-emphasis'>      View all orders  </a><# }; #><# renderItems(items); #>","itemList":"<# var hasColumns = (function () {  var checkColumns = function (_items) {    if (!_items) {      return false;    }    for (var i=0; i<_items.length; i++) {      if (_items[i].columnBreak || (_items[i].items && checkColumns(_items[i].items))) {        return true;      }    }    return false;  };  return checkColumns(items);}()); #><# if(hasColumns) { #>  <# if(items[0].image && items[0].image.src) { #>    <div class='nav-column nav-column-first nav-column-image'>  <# } else if (items[0].greeting) { #>    <div class='nav-column nav-column-first nav-column-greeting'>  <# } else { #>    <div class='nav-column nav-column-first'>  <# } #><# } #><# var renderItems = function(items) { #>  <# jQuery.each(items, function (i, item) { #>    <# if(hasColumns && item.columnBreak) { #>      <# if(item.image && item.image.src) { #>        </div><div class='nav-column nav-column-notfirst nav-column-break nav-column-image'>      <# } else if (item.greeting) { #>        </div><div class='nav-column nav-column-notfirst nav-column-break nav-column-greeting'>      <# } else { #>        </div><div class='nav-column nav-column-notfirst nav-column-break'>      <# } #>    <# } #>    <# if(item.dividerBefore) { #>      <div class='nav-divider'></div>    <# } #>    <# if(item.text || item.content) { #>      <# if(item.url) { #>        <a href='<#=item.url #>' class='nav-link      <# } else {#>        <span class='      <# } #>      <# if(item.panelKey) { #>        nav-hasPanel      <# } #>      <# if(item.items) { #>        nav-title      <# } #>      <# if(item.decorate == 'carat') { #>        nav-carat      <# } #>      <# if(item.decorate == 'nav-action-button') { #>        nav-action-button      <# } #>      nav-item'      <# if(item.extra) { #>        <#=item.extra #>      <# } #>      <# if(item.id) { #>        id='<#=item.id #>'      <# } #>      <# if(item.dataNavRole) { #>        data-nav-role='<#=item.dataNavRole #>'      <# } #>      <# if(item.dataNavRef) { #>        data-nav-ref='<#=item.dataNavRef #>'      <# } #>      <# if(item.panelKey) { #>        data-nav-panelkey='<#=item.panelKey #>'        role='navigation'        aria-label='<#=item.text#>'      <# } #>      <# if(item.subtextKey) { #>        data-nav-subtextkey='<#=item.subtextKey #>'      <# } #>      <# if(item.image && item.image.height > 16) { #>        style='line-height:<#=item.image.height #>px;'      <# } #>      >      <# if(item.decorate == 'carat') { #>        <i class='nav-icon'></i>      <# } #>      <# if(item.image && item.image.src) { #>        <img class='nav-image' src='<#=item.image.src #>' style='height:<#=item.image.height #>px; width:<#=item.image.width #>px;' />      <# } #>      <# if(item.text) { #>        <span class='nav-text<# if(item.classname) { #> <#=item.classname #><# } #>'><#=item.text#><# if(item.badgeText) { #>          <span class='nav-badge'><#=item.badgeText#></span>        <# } #></span>      <# } else if (item.content) { #>        <span class='nav-content'><# jQuery.each(item.content, function (j, cItem) { #><# if(cItem.url && cItem.text) { #><a href='<#=cItem.url #>' class='nav-a'><#=cItem.text #></a><# } else if (cItem.text) { #><#=cItem.text#><# } #><# }); #></span>      <# } #>      <# if(item.subtext) { #>        <span class='nav-subtext'><#=item.subtext #></span>      <# } #>      <# if(item.url) { #>        </a>      <# } else {#>        </span>      <# } #>    <# } #>    <# if(item.image && item.image.src) { #>      <# if(item.url) { #>        <a href='<#=item.url #>'>       <# } #>      <img class='nav-image'      <# if(item.id) { #>        id='<#=item.id #>'      <# } #>      src='<#=item.image.src #>' <# if (item.alt) { #> alt='<#= item.alt #>'<# } #>/>      <# if(item.url) { #>        </a>       <# } #>    <# } #>    <# if(item.items) { #>      <div class='nav-panel'> <# renderItems(item.items); #> </div>    <# } #>  <# }); #><# }; #><# renderItems(items); #><# if(hasColumns) { #>  </div><# } #>","notificationsList":"<div class='nav-item nav-title'>  Notifications</div><# jQuery.each(items || [], function (i, item) { #>  <div class='nav-item<# if (item.type) { #> nav-noti-list-<#= item.type #><# } #><# if (item.image && item.image.src) { #> nav-noti-list-with-image<# } #>'>    <# if (item.dismissId) { #>      <div class='nav-noti-list-x' data-noti-id='<#= item.dismissId #>'>&times;</div>    <# } #>    <# if (item.image && item.image.src) { #>      <div class='nav-noti-list-image'>        <img class='nav-noti-list-image-tag' src='<#= item.image.src #>' <# if (item.image.alt) { #> alt='<#= item.image.alt #>'<# } #> <# if (item.image.title) { #> title='<#= item.image.title #>'<# } #>/>      </div>    <# } #>    <# if (item.heading) { #>      <div class='nav-noti-list-heading'><#= item.heading #></div>    <# } #>    <# jQuery.each(item.content || [], function (j, itemContent) { #>      <# if (itemContent.url) { #>        <a href='<#= itemContent.url #>' class='nav-noti-list-content'>      <# } else { #>        <div class='nav-noti-list-content'>      <# } #>        <# if (itemContent.text) { #>          <span class='nav-noti-list-text'><#= itemContent.text #></span>        <# } #>        <# if (itemContent.subtext) { #>          <span class='nav-noti-list-subtext'><#= itemContent.subtext #></span>        <# } #>      <# if (itemContent.url) { #>        </a>      <# } else { #>        </div>      <# } #>    <# }); #>  </div><# }); #>","discoveryPanelSummary":"    <span class='nav-dp-title nav-item'>    Deliveries at a glance    <div class='nav-divider-container'><div class='nav-divider'></div></div></span>    <# jQuery.each(items || [], function (i, item) { #>        <span class='nav-item'>            <span class='nav-dp-left-column'>                <img src='<#=item.image.url#>' class='nav-dp-image' height='<#=item.image.height#>'/>            </span>            <span class='nav-dp-right-column'>                <#=item.status_text#>                <div class='nav-dp-secondary-row'>                    <a href='/your-orders/ref=nav_dp_ryo' class='nav-dp-link-emphasis'>                        Sign in to view orders                    </a>                </div>            </span>        </span>    <# }); #>","htmlList":"  <# jQuery.each(items, function (i, item) { #>    <div class='nav-item'>      <#=item #>    </div>  <# }); #>","subnav":"<# if (obj && obj.type === 'vertical') { #>  <# jQuery.each(obj.rows, function (i, row) { #>    <# if (row.flyoutElement === 'button') { #>      <div class='nav_sv_fo_v_button'        <# if (row.elementStyle) { #>          style='<#= row.elementStyle #>'        <# } #>      >        <a href='<#=row.url #>' class='nav-action-button nav-sprite'>          <#=row.text #>        </a>      </div>    <# } else if (row.flyoutElement === 'list' && row.list) { #>      <# jQuery.each(row.list, function (j, list) { #>        <div class='nav_sv_fo_v_column <#=(j === 0) ? 'nav_sv_fo_v_first' : '' #>'>          <ul class='<#=list.elementClass #>'>          <# jQuery.each(list.linkList, function (k, link) { #>            <# if (k === 0) { link.elementClass += ' nav_sv_fo_v_first'; } #>            <li class='<#=link.elementClass #>'>              <# if (link.url) { #>                <a href='<#=link.url #>' class='nav_a'><#=link.text #></a>              <# } else { #>                <span class='nav_sv_fo_v_span'><#=link.text #></span>              <# } #>            </li>          <# }); #>          </ul>        </div>      <# }); #>    <# } else if (row.flyoutElement === 'link') { #>      <# if (row.topSpacer) { #>        <div class='nav_sv_fo_v_clear'></div>      <# } #>      <div class='<#=row.elementClass #>'>        <a href='<#=row.url #>' class='nav_sv_fo_v_lmargin nav_a'>          <#=row.text #>        </a>      </div>    <# } #>  <# }); #><# } else if (obj) { #>  <div class='nav_sv_fo_scheduled'>    <#= obj #>  </div><# } #>","wishlist":"<# jQuery.each(wishlist, function (i, item) { #>  <li class='nav_pop_li'>    <a href='<#=item.url #>' class='nav_a'>      <#=item.name #>    </a>    <div class='nav_tag'>      <!--  this logic should now be in dynamic-wish-list.mi -->      <# if(typeof item.count !='undefined') { #>        <#=          (item.count == 1 ? '{count} Artikel' : '{count} Artikel')            .replace('{count}', item.count)        #>      <# } #>    </div>  </li><# }); #>","cart":"<# jQuery.each(items, function (i, item) { #>  <div class='nav-cart-item'>    <a href='<#=item.url #>' class='nav-cart-item-link'>      <img src='<#=item.img #>' class='nav-cart-item-image' />      <span class='nav-cart-item-title'><#=item.name #></span>      <# if (item.weight) { #>        <span class='nav-cart-item-weight' style='display:none;'>          <#= 'Versandgewicht: {value} {unit}'.replace('{value}', item.weight.value).replace('{unit}', item.weight.unit) #>        </span>      <# } #>      <# if (item.ourPrice) { #>        <span class='nav-cart-item-buyingPrice'><#=item.ourPrice #></span>      <# } #>      <# if (item.scarcityMessage) { #>        <span class='<#=item.scarcityClass #>'><#=item.scarcityMessage #></span>      <# } #>      <span class='nav-cart-item-quantity'>        <#= 'Menge: {count}'.replace('{count}', item.qty) #>      </span>    </a>  </div>  <# if (i%2==1) { #>    <div class='nav-cart-item-break'></div>  <# } #><# }); #><div class='nav-cart-item-break'></div>"}}); });
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
        {"rhfHandlerParams":{"rhfAsins":"","noP13NCache":"","weblabTriggers":"","auiDebug":"","keywords":"","k":"","rviAsins":"","url":"","parentSession":"262-9898842-9713804","rhfState":"","contextMetadataOverride":"","currentSubPageType":null,"field-keywords":"","relatedRequestId":"7KW51GR72GBHGNNYKK1P","recsAsins":"","excludeASIN":"QjA3MUZDVjVLVw==","auditEnabled":"","customerId":"A96YKT37ODSSG","testRecsFailure":"","previewCampaigns":"","forceWidgets":"","currentPageType":"Detail","stringDebug":""},"subPageType":null,"requestId":"7KW51GR72GBHGNNYKK1P","sessionId":"262-9898842-9713804","customerId":"A96YKT37ODSSG","pageType":"Detail","ybhHandlerParams":{"relatedRequestId":"7KW51GR72GBHGNNYKK1P","currentPageType":"Detail","parentSession":"262-9898842-9713804"}}
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
</div><!-- whfh-6YgHel/M5dirRiDueFsXWuOlJXn813Mf13YmTGWxeFFuKlOTe3BsBZX9ValB6GiA rid-7KW51GR72GBHGNNYKK1P -->
<div id="sis_pixel_r2" aria-hidden="true" style="height:1px; position: absolute; left: -1000000px; top: -1000000px;"></div><script>(function(a,b){a.attachEvent?a.attachEvent("onload",b):a.addEventListener&&a.addEventListener("load",b,!1)})(window,function(){setTimeout(function(){var el=document.getElementById("sis_pixel_r2");el&&(el.innerHTML='<iframe id="DAsis" src="//aax-eu.amazon-adsystem.com/s/iu3?d=amazon.de&slot=navFooter&a1=01011de74c445534ec931a3b5d0b3c250da26d1888348ac1bcf2305442c6ea5d3355&a2=01013341dab34071d377d77171a3ecbe11fc9e6abfb37247d72724774692d89c8cc4&old_oo=0&ts=1546363963166&s=AUBN7leI-_tEh49G6ieqMKQiNWW9AeETAIsq1TDEIzb4&cb=1546363963166" width="1" height="1" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>')},300)});</script><!-- footer tilu -->


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

var ue_spty = "kics";

var ue_pti = "B071FCV5KW";


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
    <img height="1" width="1" style='display:none;visibility:hidden;' src='//fls-eu.amazon.de/1/batch/1/OP/A1PA6795UKMFR9:262-9898842-9713804:7KW51GR72GBHGNNYKK1P$uedata=s:%2Fgp%2Fuedata%3Fnoscript%26id%3D7KW51GR72GBHGNNYKK1P:0' alt=""/>
</noscript>
</div></body></html>
<!--       _
       .__(.)< (MEOW)
        \\___)   
 ~~~~~~~~~~~~~~~~~~-->
<!-- sp:eh:xOQQnbAl4HaxJmb5e3XJERcXRyZ8idfmN+WKh3US5Ns8mnhkoGVB19N5jBgpPG850MOQiJ5ADP3pO+srtPmhkmssb/0aoWAFtIN0OAlFVP2u2UUE -->
`,
};
