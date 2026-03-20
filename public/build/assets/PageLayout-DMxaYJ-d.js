import{d as qn,l as Ye}from"./logo-CFx288gq.js";import{o as vn,c as pn,d as k,a5 as Vn,a6 as Xn,aH as Kn,g as xt,j as Zn,b2 as Qn,u as V,n as Yt,t as Jn,H as ta,a as $t,b3 as ea}from"./app-yP2LtXKY.js";function na(t,e){return vn(),pn("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[k("path",{"fill-rule":"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z","clip-rule":"evenodd"})])}const aa="/build/assets/gobierno-VHX8UfDK.webp",ra="/build/assets/logo-CNVft5c-.svg";var bn={exports:{}};(function(t,e){(function(n,a){t.exports=a()})(Vn,function(){return function(n){function a(i){if(r[i])return r[i].exports;var o=r[i]={exports:{},id:i,loaded:!1};return n[i].call(o.exports,o,o.exports,a),o.loaded=!0,o.exports}var r={};return a.m=n,a.c=r,a.p="dist/",a(0)}([function(n,a,r){function i(x){return x&&x.__esModule?x:{default:x}}var o=Object.assign||function(x){for(var $=1;$<arguments.length;$++){var q=arguments[$];for(var st in q)Object.prototype.hasOwnProperty.call(q,st)&&(x[st]=q[st])}return x},s=r(1),f=(i(s),r(6)),l=i(f),c=r(7),u=i(c),m=r(8),v=i(m),w=r(9),O=i(w),_=r(10),b=i(_),h=r(11),A=i(h),C=r(14),N=i(C),j=[],F=!1,E={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},L=function(){var x=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(x&&(F=!0),F)return j=(0,A.default)(j,E),(0,b.default)(j,E.once),j},K=function(){j=(0,N.default)(),L()},y=function(){j.forEach(function(x,$){x.node.removeAttribute("data-aos"),x.node.removeAttribute("data-aos-easing"),x.node.removeAttribute("data-aos-duration"),x.node.removeAttribute("data-aos-delay")})},p=function(x){return x===!0||x==="mobile"&&O.default.mobile()||x==="phone"&&O.default.phone()||x==="tablet"&&O.default.tablet()||typeof x=="function"&&x()===!0},S=function(x){E=o(E,x),j=(0,N.default)();var $=document.all&&!window.atob;return p(E.disable)||$?y():(E.disableMutationObserver||v.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),E.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",E.easing),document.querySelector("body").setAttribute("data-aos-duration",E.duration),document.querySelector("body").setAttribute("data-aos-delay",E.delay),E.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?L(!0):E.startEvent==="load"?window.addEventListener(E.startEvent,function(){L(!0)}):document.addEventListener(E.startEvent,function(){L(!0)}),window.addEventListener("resize",(0,u.default)(L,E.debounceDelay,!0)),window.addEventListener("orientationchange",(0,u.default)(L,E.debounceDelay,!0)),window.addEventListener("scroll",(0,l.default)(function(){(0,b.default)(j,E.once)},E.throttleDelay)),E.disableMutationObserver||v.default.ready("[data-aos]",K),j)};n.exports={init:S,refresh:L,refreshHard:K}},function(n,a){},,,,,function(n,a){(function(r){function i(p,S,x){function $(P){var W=G,ct=Q;return G=Q=void 0,ft=P,Y=p.apply(ct,W)}function q(P){return ft=P,R=setTimeout(bt,S),lt?$(P):Y}function st(P){var W=P-U,ct=P-ft,Fe=S-W;return et?K(Fe,J-ct):Fe}function pt(P){var W=P-U,ct=P-ft;return U===void 0||W>=S||W<0||et&&ct>=J}function bt(){var P=y();return pt(P)?Ft(P):void(R=setTimeout(bt,st(P)))}function Ft(P){return R=void 0,M&&G?$(P):(G=Q=void 0,Y)}function se(){R!==void 0&&clearTimeout(R),ft=0,G=U=Q=R=void 0}function Pt(){return R===void 0?Y:Ft(y())}function Z(){var P=y(),W=pt(P);if(G=arguments,Q=this,U=P,W){if(R===void 0)return q(U);if(et)return R=setTimeout(bt,S),$(U)}return R===void 0&&(R=setTimeout(bt,S)),Y}var G,Q,J,Y,R,U,ft=0,lt=!1,et=!1,M=!0;if(typeof p!="function")throw new TypeError(m);return S=c(S)||0,s(x)&&(lt=!!x.leading,et="maxWait"in x,J=et?L(c(x.maxWait)||0,S):J,M="trailing"in x?!!x.trailing:M),Z.cancel=se,Z.flush=Pt,Z}function o(p,S,x){var $=!0,q=!0;if(typeof p!="function")throw new TypeError(m);return s(x)&&($="leading"in x?!!x.leading:$,q="trailing"in x?!!x.trailing:q),i(p,S,{leading:$,maxWait:S,trailing:q})}function s(p){var S=typeof p>"u"?"undefined":u(p);return!!p&&(S=="object"||S=="function")}function f(p){return!!p&&(typeof p>"u"?"undefined":u(p))=="object"}function l(p){return(typeof p>"u"?"undefined":u(p))=="symbol"||f(p)&&E.call(p)==w}function c(p){if(typeof p=="number")return p;if(l(p))return v;if(s(p)){var S=typeof p.valueOf=="function"?p.valueOf():p;p=s(S)?S+"":S}if(typeof p!="string")return p===0?p:+p;p=p.replace(O,"");var x=b.test(p);return x||h.test(p)?A(p.slice(2),x?2:8):_.test(p)?v:+p}var u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},m="Expected a function",v=NaN,w="[object Symbol]",O=/^\s+|\s+$/g,_=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,h=/^0o[0-7]+$/i,A=parseInt,C=(typeof r>"u"?"undefined":u(r))=="object"&&r&&r.Object===Object&&r,N=(typeof self>"u"?"undefined":u(self))=="object"&&self&&self.Object===Object&&self,j=C||N||Function("return this")(),F=Object.prototype,E=F.toString,L=Math.max,K=Math.min,y=function(){return j.Date.now()};n.exports=o}).call(a,function(){return this}())},function(n,a){(function(r){function i(y,p,S){function x(M){var P=Z,W=G;return Z=G=void 0,U=M,J=y.apply(W,P)}function $(M){return U=M,Y=setTimeout(pt,p),ft?x(M):J}function q(M){var P=M-R,W=M-U,ct=p-P;return lt?L(ct,Q-W):ct}function st(M){var P=M-R,W=M-U;return R===void 0||P>=p||P<0||lt&&W>=Q}function pt(){var M=K();return st(M)?bt(M):void(Y=setTimeout(pt,q(M)))}function bt(M){return Y=void 0,et&&Z?x(M):(Z=G=void 0,J)}function Ft(){Y!==void 0&&clearTimeout(Y),U=0,Z=R=G=Y=void 0}function se(){return Y===void 0?J:bt(K())}function Pt(){var M=K(),P=st(M);if(Z=arguments,G=this,R=M,P){if(Y===void 0)return $(R);if(lt)return Y=setTimeout(pt,p),x(R)}return Y===void 0&&(Y=setTimeout(pt,p)),J}var Z,G,Q,J,Y,R,U=0,ft=!1,lt=!1,et=!0;if(typeof y!="function")throw new TypeError(u);return p=l(p)||0,o(S)&&(ft=!!S.leading,lt="maxWait"in S,Q=lt?E(l(S.maxWait)||0,p):Q,et="trailing"in S?!!S.trailing:et),Pt.cancel=Ft,Pt.flush=se,Pt}function o(y){var p=typeof y>"u"?"undefined":c(y);return!!y&&(p=="object"||p=="function")}function s(y){return!!y&&(typeof y>"u"?"undefined":c(y))=="object"}function f(y){return(typeof y>"u"?"undefined":c(y))=="symbol"||s(y)&&F.call(y)==v}function l(y){if(typeof y=="number")return y;if(f(y))return m;if(o(y)){var p=typeof y.valueOf=="function"?y.valueOf():y;y=o(p)?p+"":p}if(typeof y!="string")return y===0?y:+y;y=y.replace(w,"");var S=_.test(y);return S||b.test(y)?h(y.slice(2),S?2:8):O.test(y)?m:+y}var c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(y){return typeof y}:function(y){return y&&typeof Symbol=="function"&&y.constructor===Symbol&&y!==Symbol.prototype?"symbol":typeof y},u="Expected a function",m=NaN,v="[object Symbol]",w=/^\s+|\s+$/g,O=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,b=/^0o[0-7]+$/i,h=parseInt,A=(typeof r>"u"?"undefined":c(r))=="object"&&r&&r.Object===Object&&r,C=(typeof self>"u"?"undefined":c(self))=="object"&&self&&self.Object===Object&&self,N=A||C||Function("return this")(),j=Object.prototype,F=j.toString,E=Math.max,L=Math.min,K=function(){return N.Date.now()};n.exports=i}).call(a,function(){return this}())},function(n,a){function r(c){var u=void 0,m=void 0;for(u=0;u<c.length;u+=1)if(m=c[u],m.dataset&&m.dataset.aos||m.children&&r(m.children))return!0;return!1}function i(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function o(){return!!i()}function s(c,u){var m=window.document,v=i(),w=new v(f);l=u,w.observe(m.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function f(c){c&&c.forEach(function(u){var m=Array.prototype.slice.call(u.addedNodes),v=Array.prototype.slice.call(u.removedNodes),w=m.concat(v);if(r(w))return l()})}Object.defineProperty(a,"__esModule",{value:!0});var l=function(){};a.default={isSupported:o,ready:s}},function(n,a){function r(m,v){if(!(m instanceof v))throw new TypeError("Cannot call a class as a function")}function i(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(a,"__esModule",{value:!0});var o=function(){function m(v,w){for(var O=0;O<w.length;O++){var _=w[O];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(v,_.key,_)}}return function(v,w,O){return w&&m(v.prototype,w),O&&m(v,O),v}}(),s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,f=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,l=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=function(){function m(){r(this,m)}return o(m,[{key:"phone",value:function(){var v=i();return!(!s.test(v)&&!f.test(v.substr(0,4)))}},{key:"mobile",value:function(){var v=i();return!(!l.test(v)&&!c.test(v.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),m}();a.default=new u},function(n,a){Object.defineProperty(a,"__esModule",{value:!0});var r=function(o,s,f){var l=o.node.getAttribute("data-aos-once");s>o.position?o.node.classList.add("aos-animate"):typeof l<"u"&&(l==="false"||!f&&l!=="true")&&o.node.classList.remove("aos-animate")},i=function(o,s){var f=window.pageYOffset,l=window.innerHeight;o.forEach(function(c,u){r(c,l+f,s)})};a.default=i},function(n,a,r){function i(l){return l&&l.__esModule?l:{default:l}}Object.defineProperty(a,"__esModule",{value:!0});var o=r(12),s=i(o),f=function(l,c){return l.forEach(function(u,m){u.node.classList.add("aos-init"),u.position=(0,s.default)(u.node,c.offset)}),l};a.default=f},function(n,a,r){function i(l){return l&&l.__esModule?l:{default:l}}Object.defineProperty(a,"__esModule",{value:!0});var o=r(13),s=i(o),f=function(l,c){var u=0,m=0,v=window.innerHeight,w={offset:l.getAttribute("data-aos-offset"),anchor:l.getAttribute("data-aos-anchor"),anchorPlacement:l.getAttribute("data-aos-anchor-placement")};switch(w.offset&&!isNaN(w.offset)&&(m=parseInt(w.offset)),w.anchor&&document.querySelectorAll(w.anchor)&&(l=document.querySelectorAll(w.anchor)[0]),u=(0,s.default)(l).top,w.anchorPlacement){case"top-bottom":break;case"center-bottom":u+=l.offsetHeight/2;break;case"bottom-bottom":u+=l.offsetHeight;break;case"top-center":u+=v/2;break;case"bottom-center":u+=v/2+l.offsetHeight;break;case"center-center":u+=v/2+l.offsetHeight/2;break;case"top-top":u+=v;break;case"bottom-top":u+=l.offsetHeight+v;break;case"center-top":u+=l.offsetHeight/2+v}return w.anchorPlacement||w.offset||isNaN(c)||(m=c),u+m};a.default=f},function(n,a){Object.defineProperty(a,"__esModule",{value:!0});var r=function(i){for(var o=0,s=0;i&&!isNaN(i.offsetLeft)&&!isNaN(i.offsetTop);)o+=i.offsetLeft-(i.tagName!="BODY"?i.scrollLeft:0),s+=i.offsetTop-(i.tagName!="BODY"?i.scrollTop:0),i=i.offsetParent;return{top:s,left:o}};a.default=r},function(n,a){Object.defineProperty(a,"__esModule",{value:!0});var r=function(i){return i=i||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(i,function(o){return{node:o}})};a.default=r}])})})(bn);var ia=bn.exports;const oa=Xn(ia);function $e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?$e(Object(n),!0).forEach(function(a){D(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$e(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Jt(t){"@babel/helpers - typeof";return Jt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Jt(t)}function sa(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function fa(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function la(t,e,n){return e&&fa(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function D(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _e(t,e){return ua(t)||da(t,e)||gn(t,e)||pa()}function Lt(t){return ca(t)||ma(t)||gn(t)||va()}function ca(t){if(Array.isArray(t))return ve(t)}function ua(t){if(Array.isArray(t))return t}function ma(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function da(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,s;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(a.push(o.value),!(e&&a.length===e));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return a}}function gn(t,e){if(t){if(typeof t=="string")return ve(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ve(t,e)}}function ve(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function va(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pa(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var We=function(){},Pe={},hn={},yn=null,wn={mark:We,measure:We};try{typeof window<"u"&&(Pe=window),typeof document<"u"&&(hn=document),typeof MutationObserver<"u"&&(yn=MutationObserver),typeof performance<"u"&&(wn=performance)}catch{}var ba=Pe.navigator||{},He=ba.userAgent,Ue=He===void 0?"":He,mt=Pe,T=hn,Be=yn,Wt=wn;mt.document;var ot=!!T.documentElement&&!!T.head&&typeof T.addEventListener=="function"&&typeof T.createElement=="function",xn=~Ue.indexOf("MSIE")||~Ue.indexOf("Trident/"),Ht,Ut,Bt,Gt,qt,at="___FONT_AWESOME___",pe=16,kn="fa",An="svg-inline--fa",yt="data-fa-i2svg",be="data-fa-pseudo-element",ga="data-fa-pseudo-element-pending",Ee="data-prefix",Ce="data-icon",Ge="fontawesome-i2svg",ha="async",ya=["HTML","HEAD","STYLE","SCRIPT"],On=function(){try{return!0}catch{return!1}}(),I="classic",z="sharp",Ne=[I,z];function Rt(t){return new Proxy(t,{get:function(n,a){return a in n?n[a]:n[I]}})}var It=Rt((Ht={},D(Ht,I,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),D(Ht,z,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Ht)),Tt=Rt((Ut={},D(Ut,I,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),D(Ut,z,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Ut)),jt=Rt((Bt={},D(Bt,I,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),D(Bt,z,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Bt)),wa=Rt((Gt={},D(Gt,I,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),D(Gt,z,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Gt)),xa=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Sn="fa-layers-text",ka=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Aa=Rt((qt={},D(qt,I,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),D(qt,z,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),qt)),_n=[1,2,3,4,5,6,7,8,9,10],Oa=_n.concat([11,12,13,14,15,16,17,18,19,20]),Sa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],gt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Mt=new Set;Object.keys(Tt[I]).map(Mt.add.bind(Mt));Object.keys(Tt[z]).map(Mt.add.bind(Mt));var _a=[].concat(Ne,Lt(Mt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",gt.GROUP,gt.SWAP_OPACITY,gt.PRIMARY,gt.SECONDARY]).concat(_n.map(function(t){return"".concat(t,"x")})).concat(Oa.map(function(t){return"w-".concat(t)})),Ct=mt.FontAwesomeConfig||{};function Pa(t){var e=T.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Ea(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(T&&typeof T.querySelector=="function"){var Ca=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ca.forEach(function(t){var e=_e(t,2),n=e[0],a=e[1],r=Ea(Pa(n));r!=null&&(Ct[a]=r)})}var Pn={styleDefault:"solid",familyDefault:"classic",cssPrefix:kn,replacementClass:An,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ct.familyPrefix&&(Ct.cssPrefix=Ct.familyPrefix);var St=d(d({},Pn),Ct);St.autoReplaceSvg||(St.observeMutations=!1);var g={};Object.keys(Pn).forEach(function(t){Object.defineProperty(g,t,{enumerable:!0,set:function(n){St[t]=n,Nt.forEach(function(a){return a(g)})},get:function(){return St[t]}})});Object.defineProperty(g,"familyPrefix",{enumerable:!0,set:function(e){St.cssPrefix=e,Nt.forEach(function(n){return n(g)})},get:function(){return St.cssPrefix}});mt.FontAwesomeConfig=g;var Nt=[];function Na(t){return Nt.push(t),function(){Nt.splice(Nt.indexOf(t),1)}}var ut=pe,tt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ia(t){if(!(!t||!ot)){var e=T.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=T.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return T.head.insertBefore(e,a),t}}var Ta="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function zt(){for(var t=12,e="";t-- >0;)e+=Ta[Math.random()*62|0];return e}function _t(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Ie(t){return t.classList?_t(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function En(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ja(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(En(t[n]),'" ')},"").trim()}function ae(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Te(t){return t.size!==tt.size||t.x!==tt.x||t.y!==tt.y||t.rotate!==tt.rotate||t.flipX||t.flipY}function Ma(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:l}}function za(t){var e=t.transform,n=t.width,a=n===void 0?pe:n,r=t.height,i=r===void 0?pe:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&xn?f+="translate(".concat(e.x/ut-a/2,"em, ").concat(e.y/ut-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(e.x/ut,"em), calc(-50% + ").concat(e.y/ut,"em)) "):f+="translate(".concat(e.x/ut,"em, ").concat(e.y/ut,"em) "),f+="scale(".concat(e.size/ut*(e.flipX?-1:1),", ").concat(e.size/ut*(e.flipY?-1:1),") "),f+="rotate(".concat(e.rotate,"deg) "),f}var La=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Cn(){var t=kn,e=An,n=g.cssPrefix,a=g.replacementClass,r=La;if(n!==t||a!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var qe=!1;function fe(){g.autoAddCss&&!qe&&(Ia(Cn()),qe=!0)}var Ra={mixout:function(){return{dom:{css:Cn,insertCss:fe}}},hooks:function(){return{beforeDOMElementCreation:function(){fe()},beforeI2svg:function(){fe()}}}},rt=mt||{};rt[at]||(rt[at]={});rt[at].styles||(rt[at].styles={});rt[at].hooks||(rt[at].hooks={});rt[at].shims||(rt[at].shims=[]);var X=rt[at],Nn=[],Da=function t(){T.removeEventListener("DOMContentLoaded",t),te=1,Nn.map(function(e){return e()})},te=!1;ot&&(te=(T.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(T.readyState),te||T.addEventListener("DOMContentLoaded",Da));function Fa(t){ot&&(te?setTimeout(t,0):Nn.push(t))}function Dt(t){var e=t.tag,n=t.attributes,a=n===void 0?{}:n,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?En(t):"<".concat(e," ").concat(ja(a),">").concat(i.map(Dt).join(""),"</").concat(e,">")}function Ve(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var le=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=n,f,l,c;for(a===void 0?(f=1,c=e[i[0]]):(f=0,c=a);f<o;f++)l=i[f],c=s(c,e[l],l,e);return c};function Ya(t){for(var e=[],n=0,a=t.length;n<a;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function ge(t){var e=Ya(t);return e.length===1?e[0].toString(16):null}function $a(t,e){var n=t.length,a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Xe(t){return Object.keys(t).reduce(function(e,n){var a=t[n],r=!!a.icon;return r?e[a.iconName]=a.icon:e[n]=a,e},{})}function he(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=Xe(e);typeof X.hooks.addPack=="function"&&!r?X.hooks.addPack(t,Xe(e)):X.styles[t]=d(d({},X.styles[t]||{}),i),t==="fas"&&he("fa",e)}var Vt,Xt,Kt,kt=X.styles,Wa=X.shims,Ha=(Vt={},D(Vt,I,Object.values(jt[I])),D(Vt,z,Object.values(jt[z])),Vt),je=null,In={},Tn={},jn={},Mn={},zn={},Ua=(Xt={},D(Xt,I,Object.keys(It[I])),D(Xt,z,Object.keys(It[z])),Xt);function Ba(t){return~_a.indexOf(t)}function Ga(t,e){var n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Ba(r)?r:null}var Ln=function(){var e=function(i){return le(kt,function(o,s,f){return o[f]=le(s,i,{}),o},{})};In=e(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),Tn=e(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),zn=e(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var n="far"in kt||g.autoFetchSvg,a=le(Wa,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});jn=a.names,Mn=a.unicodes,je=re(g.styleDefault,{family:g.familyDefault})};Na(function(t){je=re(t.styleDefault,{family:g.familyDefault})});Ln();function Me(t,e){return(In[t]||{})[e]}function qa(t,e){return(Tn[t]||{})[e]}function ht(t,e){return(zn[t]||{})[e]}function Rn(t){return jn[t]||{prefix:null,iconName:null}}function Va(t){var e=Mn[t],n=Me("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function dt(){return je}var ze=function(){return{prefix:null,iconName:null,rest:[]}};function re(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,a=n===void 0?I:n,r=It[a][t],i=Tt[a][t]||Tt[a][r],o=t in X.styles?t:null;return i||o||null}var Ke=(Kt={},D(Kt,I,Object.keys(jt[I])),D(Kt,z,Object.keys(jt[z])),Kt);function ie(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(e={},D(e,I,"".concat(g.cssPrefix,"-").concat(I)),D(e,z,"".concat(g.cssPrefix,"-").concat(z)),e),o=null,s=I;(t.includes(i[I])||t.some(function(l){return Ke[I].includes(l)}))&&(s=I),(t.includes(i[z])||t.some(function(l){return Ke[z].includes(l)}))&&(s=z);var f=t.reduce(function(l,c){var u=Ga(g.cssPrefix,c);if(kt[c]?(c=Ha[s].includes(c)?wa[s][c]:c,o=c,l.prefix=c):Ua[s].indexOf(c)>-1?(o=c,l.prefix=re(c,{family:s})):u?l.iconName=u:c!==g.replacementClass&&c!==i[I]&&c!==i[z]&&l.rest.push(c),!r&&l.prefix&&l.iconName){var m=o==="fa"?Rn(l.iconName):{},v=ht(l.prefix,l.iconName);m.prefix&&(o=null),l.iconName=m.iconName||v||l.iconName,l.prefix=m.prefix||l.prefix,l.prefix==="far"&&!kt.far&&kt.fas&&!g.autoFetchSvg&&(l.prefix="fas")}return l},ze());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===z&&(kt.fass||g.autoFetchSvg)&&(f.prefix="fass",f.iconName=ht(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=dt()||"fas"),f}var Xa=function(){function t(){sa(this,t),this.definitions={}}return la(t,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=d(d({},n.definitions[s]||{}),o[s]),he(s,o[s]);var f=jt[I][s];f&&he(f,o[s]),Ln()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,l=o.icon,c=l[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(u){typeof u=="string"&&(n[s][u]=l)}),n[s][f]=l}),n}}]),t}(),Ze=[],At={},Ot={},Ka=Object.keys(Ot);function Za(t,e){var n=e.mixoutsTo;return Ze=t,At={},Object.keys(Ot).forEach(function(a){Ka.indexOf(a)===-1&&delete Ot[a]}),Ze.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),Jt(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){At[o]||(At[o]=[]),At[o].push(i[o])})}a.provides&&a.provides(Ot)}),n}function ye(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=At[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(a))}),e}function wt(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var r=At[t]||[];r.forEach(function(i){i.apply(null,n)})}function it(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ot[t]?Ot[t].apply(null,e):void 0}function we(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||dt();if(e)return e=ht(n,e)||e,Ve(Dn.definitions,n,e)||Ve(X.styles,n,e)}var Dn=new Xa,Qa=function(){g.autoReplaceSvg=!1,g.observeMutations=!1,wt("noAuto")},Ja={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ot?(wt("beforeI2svg",e),it("pseudoElements2svg",e),it("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;g.autoReplaceSvg===!1&&(g.autoReplaceSvg=!0),g.observeMutations=!0,Fa(function(){er({autoReplaceSvgRoot:n}),wt("watch",e)})}},tr={icon:function(e){if(e===null)return null;if(Jt(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ht(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=re(e[0]);return{prefix:a,iconName:ht(a,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(g.cssPrefix,"-"))>-1||e.match(xa))){var r=ie(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||dt(),iconName:ht(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var i=dt();return{prefix:i,iconName:ht(i,e)||e}}}},B={noAuto:Qa,config:g,dom:Ja,parse:tr,library:Dn,findIconDefinition:we,toHtml:Dt},er=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,a=n===void 0?T:n;(Object.keys(X.styles).length>0||g.autoFetchSvg)&&ot&&g.autoReplaceSvg&&B.dom.i2svg({node:a})};function oe(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return Dt(a)})}}),Object.defineProperty(t,"node",{get:function(){if(ot){var a=T.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function nr(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(Te(o)&&n.found&&!a.found){var s=n.width,f=n.height,l={x:s/f/2,y:.5};r.style=ae(d(d({},i),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function ar(t){var e=t.prefix,n=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(g.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:d(d({},r),{},{id:o}),children:a}]}]}function Le(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,l=t.maskId,c=t.titleId,u=t.extra,m=t.watchable,v=m===void 0?!1:m,w=a.found?a:n,O=w.width,_=w.height,b=r==="fak",h=[g.replacementClass,i?"".concat(g.cssPrefix,"-").concat(i):""].filter(function(L){return u.classes.indexOf(L)===-1}).filter(function(L){return L!==""||!!L}).concat(u.classes).join(" "),A={children:[],attributes:d(d({},u.attributes),{},{"data-prefix":r,"data-icon":i,class:h,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(O," ").concat(_)})},C=b&&!~u.classes.indexOf("fa-fw")?{width:"".concat(O/_*16*.0625,"em")}:{};v&&(A.attributes[yt]=""),f&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(c||zt())},children:[f]}),delete A.attributes.title);var N=d(d({},A),{},{prefix:r,iconName:i,main:n,mask:a,maskId:l,transform:o,symbol:s,styles:d(d({},C),u.styles)}),j=a.found&&n.found?it("generateAbstractMask",N)||{children:[],attributes:{}}:it("generateAbstractIcon",N)||{children:[],attributes:{}},F=j.children,E=j.attributes;return N.children=F,N.attributes=E,s?ar(N):nr(N)}function Qe(t){var e=t.content,n=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,l=d(d(d({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(l[yt]="");var c=d({},o.styles);Te(r)&&(c.transform=za({transform:r,startCentered:!0,width:n,height:a}),c["-webkit-transform"]=c.transform);var u=ae(c);u.length>0&&(l.style=u);var m=[];return m.push({tag:"span",attributes:l,children:[e]}),i&&m.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),m}function rr(t){var e=t.content,n=t.title,a=t.extra,r=d(d(d({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=ae(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var ce=X.styles;function xe(t){var e=t[0],n=t[1],a=t.slice(4),r=_e(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(g.cssPrefix,"-").concat(gt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat(gt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat(gt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var ir={found:!1,width:512,height:512};function or(t,e){!On&&!g.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function ke(t,e){var n=e;return e==="fa"&&g.styleDefault!==null&&(e=dt()),new Promise(function(a,r){if(it("missingIconAbstract"),n==="fa"){var i=Rn(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&ce[e]&&ce[e][t]){var o=ce[e][t];return a(xe(o))}or(t,e),a(d(d({},ir),{},{icon:g.showMissingIcons&&t?it("missingIconAbstract")||{}:{}}))})}var Je=function(){},Ae=g.measurePerformance&&Wt&&Wt.mark&&Wt.measure?Wt:{mark:Je,measure:Je},Et='FA "6.5.2"',sr=function(e){return Ae.mark("".concat(Et," ").concat(e," begins")),function(){return Fn(e)}},Fn=function(e){Ae.mark("".concat(Et," ").concat(e," ends")),Ae.measure("".concat(Et," ").concat(e),"".concat(Et," ").concat(e," begins"),"".concat(Et," ").concat(e," ends"))},Re={begin:sr,end:Fn},Zt=function(){};function tn(t){var e=t.getAttribute?t.getAttribute(yt):null;return typeof e=="string"}function fr(t){var e=t.getAttribute?t.getAttribute(Ee):null,n=t.getAttribute?t.getAttribute(Ce):null;return e&&n}function lr(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(g.replacementClass)}function cr(){if(g.autoReplaceSvg===!0)return Qt.replace;var t=Qt[g.autoReplaceSvg];return t||Qt.replace}function ur(t){return T.createElementNS("http://www.w3.org/2000/svg",t)}function mr(t){return T.createElement(t)}function Yn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,a=n===void 0?t.tag==="svg"?ur:mr:n;if(typeof t=="string")return T.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(Yn(o,{ceFn:a}))}),r}function dr(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Qt={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(Yn(r),n)}),n.getAttribute(yt)===null&&g.keepOriginalSource){var a=T.createComment(dr(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(e){var n=e[0],a=e[1];if(~Ie(n).indexOf(g.replacementClass))return Qt.replace(e);var r=new RegExp("".concat(g.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,f){return f===g.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return Dt(s)}).join(`
`);n.setAttribute(yt,""),n.innerHTML=o}};function en(t){t()}function $n(t,e){var n=typeof e=="function"?e:Zt;if(t.length===0)n();else{var a=en;g.mutateApproach===ha&&(a=mt.requestAnimationFrame||en),a(function(){var r=cr(),i=Re.begin("mutate");t.map(r),i(),n()})}}var De=!1;function Wn(){De=!0}function Oe(){De=!1}var ee=null;function nn(t){if(Be&&g.observeMutations){var e=t.treeCallback,n=e===void 0?Zt:e,a=t.nodeCallback,r=a===void 0?Zt:a,i=t.pseudoElementsCallback,o=i===void 0?Zt:i,s=t.observeMutationsRoot,f=s===void 0?T:s;ee=new Be(function(l){if(!De){var c=dt();_t(l).forEach(function(u){if(u.type==="childList"&&u.addedNodes.length>0&&!tn(u.addedNodes[0])&&(g.searchPseudoElements&&o(u.target),n(u.target)),u.type==="attributes"&&u.target.parentNode&&g.searchPseudoElements&&o(u.target.parentNode),u.type==="attributes"&&tn(u.target)&&~Sa.indexOf(u.attributeName))if(u.attributeName==="class"&&fr(u.target)){var m=ie(Ie(u.target)),v=m.prefix,w=m.iconName;u.target.setAttribute(Ee,v||c),w&&u.target.setAttribute(Ce,w)}else lr(u.target)&&r(u.target)})}}),ot&&ee.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function vr(){ee&&ee.disconnect()}function pr(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function br(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=ie(Ie(t));return r.prefix||(r.prefix=dt()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=qa(r.prefix,t.innerText)||Me(r.prefix,ge(t.innerText))),!r.iconName&&g.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function gr(t){var e=_t(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return g.autoA11y&&(n?e["aria-labelledby"]="".concat(g.replacementClass,"-title-").concat(a||zt()):(e["aria-hidden"]="true",e.focusable="false")),e}function hr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:tt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function an(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=br(t),a=n.iconName,r=n.prefix,i=n.rest,o=gr(t),s=ye("parseNodeAttributes",{},t),f=e.styleParser?pr(t):[];return d({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:tt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var yr=X.styles;function Hn(t){var e=g.autoReplaceSvg==="nest"?an(t,{styleParser:!1}):an(t);return~e.extra.classes.indexOf(Sn)?it("generateLayersText",t,e):it("generateSvgReplacementMutation",t,e)}var vt=new Set;Ne.map(function(t){vt.add("fa-".concat(t))});Object.keys(It[I]).map(vt.add.bind(vt));Object.keys(It[z]).map(vt.add.bind(vt));vt=Lt(vt);function rn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ot)return Promise.resolve();var n=T.documentElement.classList,a=function(u){return n.add("".concat(Ge,"-").concat(u))},r=function(u){return n.remove("".concat(Ge,"-").concat(u))},i=g.autoFetchSvg?vt:Ne.map(function(c){return"fa-".concat(c)}).concat(Object.keys(yr));i.includes("fa")||i.push("fa");var o=[".".concat(Sn,":not([").concat(yt,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(yt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=_t(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=Re.begin("onTree"),l=s.reduce(function(c,u){try{var m=Hn(u);m&&c.push(m)}catch(v){On||v.name==="MissingIcon"&&console.error(v)}return c},[]);return new Promise(function(c,u){Promise.all(l).then(function(m){$n(m,function(){a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),f(),c()})}).catch(function(m){f(),u(m)})})}function wr(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Hn(t).then(function(n){n&&$n([n],e)})}function xr(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:we(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:we(r||{})),t(a,d(d({},n),{},{mask:r}))}}var kr=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?tt:a,i=n.symbol,o=i===void 0?!1:i,s=n.mask,f=s===void 0?null:s,l=n.maskId,c=l===void 0?null:l,u=n.title,m=u===void 0?null:u,v=n.titleId,w=v===void 0?null:v,O=n.classes,_=O===void 0?[]:O,b=n.attributes,h=b===void 0?{}:b,A=n.styles,C=A===void 0?{}:A;if(e){var N=e.prefix,j=e.iconName,F=e.icon;return oe(d({type:"icon"},e),function(){return wt("beforeDOMElementCreation",{iconDefinition:e,params:n}),g.autoA11y&&(m?h["aria-labelledby"]="".concat(g.replacementClass,"-title-").concat(w||zt()):(h["aria-hidden"]="true",h.focusable="false")),Le({icons:{main:xe(F),mask:f?xe(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:N,iconName:j,transform:d(d({},tt),r),symbol:o,title:m,maskId:c,titleId:w,extra:{attributes:h,styles:C,classes:_}})})}},Ar={mixout:function(){return{icon:xr(kr)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=rn,n.nodeCallback=wr,n}}},provides:function(e){e.i2svg=function(n){var a=n.node,r=a===void 0?T:a,i=n.callback,o=i===void 0?function(){}:i;return rn(r,o)},e.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,f=a.transform,l=a.symbol,c=a.mask,u=a.maskId,m=a.extra;return new Promise(function(v,w){Promise.all([ke(r,s),c.iconName?ke(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(O){var _=_e(O,2),b=_[0],h=_[1];v([n,Le({icons:{main:b,mask:h},prefix:s,iconName:r,transform:f,symbol:l,maskId:u,title:i,titleId:o,extra:m,watchable:!0})])}).catch(w)})},e.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,f=ae(s);f.length>0&&(r.style=f);var l;return Te(o)&&(l=it("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(l||i.icon),{children:a,attributes:r}}}},Or={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return oe({type:"layer"},function(){wt("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(g.cssPrefix,"-layers")].concat(Lt(i)).join(" ")},children:o}]})}}}},Sr={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,f=a.attributes,l=f===void 0?{}:f,c=a.styles,u=c===void 0?{}:c;return oe({type:"counter",content:n},function(){return wt("beforeDOMElementCreation",{content:n,params:a}),rr({content:n.toString(),title:i,extra:{attributes:l,styles:u,classes:["".concat(g.cssPrefix,"-layers-counter")].concat(Lt(s))}})})}}}},_r={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?tt:r,o=a.title,s=o===void 0?null:o,f=a.classes,l=f===void 0?[]:f,c=a.attributes,u=c===void 0?{}:c,m=a.styles,v=m===void 0?{}:m;return oe({type:"text",content:n},function(){return wt("beforeDOMElementCreation",{content:n,params:a}),Qe({content:n,transform:d(d({},tt),i),title:s,extra:{attributes:u,styles:v,classes:["".concat(g.cssPrefix,"-layers-text")].concat(Lt(l))}})})}}},provides:function(e){e.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,s=null,f=null;if(xn){var l=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/l,f=c.height/l}return g.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Qe({content:n.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},Pr=new RegExp('"',"ug"),on=[1105920,1112319];function Er(t){var e=t.replace(Pr,""),n=$a(e,0),a=n>=on[0]&&n<=on[1],r=e.length===2?e[0]===e[1]:!1;return{value:ge(r?e[0]:e),isSecondary:a||r}}function sn(t,e){var n="".concat(ga).concat(e.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(n)!==null)return a();var i=_t(t.children),o=i.filter(function(F){return F.getAttribute(be)===e})[0],s=mt.getComputedStyle(t,e),f=s.getPropertyValue("font-family").match(ka),l=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&c!=="none"&&c!==""){var u=s.getPropertyValue("content"),m=~["Sharp"].indexOf(f[2])?z:I,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?Tt[m][f[2].toLowerCase()]:Aa[m][l],w=Er(u),O=w.value,_=w.isSecondary,b=f[0].startsWith("FontAwesome"),h=Me(v,O),A=h;if(b){var C=Va(O);C.iconName&&C.prefix&&(h=C.iconName,v=C.prefix)}if(h&&!_&&(!o||o.getAttribute(Ee)!==v||o.getAttribute(Ce)!==A)){t.setAttribute(n,A),o&&t.removeChild(o);var N=hr(),j=N.extra;j.attributes[be]=e,ke(h,v).then(function(F){var E=Le(d(d({},N),{},{icons:{main:F,mask:ze()},prefix:v,iconName:A,extra:j,watchable:!0})),L=T.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(L,t.firstChild):t.appendChild(L),L.outerHTML=E.map(function(K){return Dt(K)}).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Cr(t){return Promise.all([sn(t,"::before"),sn(t,"::after")])}function Nr(t){return t.parentNode!==document.head&&!~ya.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(be)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function fn(t){if(ot)return new Promise(function(e,n){var a=_t(t.querySelectorAll("*")).filter(Nr).map(Cr),r=Re.begin("searchPseudoElements");Wn(),Promise.all(a).then(function(){r(),Oe(),e()}).catch(function(){r(),Oe(),n()})})}var Ir={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=fn,n}}},provides:function(e){e.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?T:a;g.searchPseudoElements&&fn(r)}}},ln=!1,Tr={mixout:function(){return{dom:{unwatch:function(){Wn(),ln=!0}}}},hooks:function(){return{bootstrap:function(){nn(ye("mutationObserverCallbacks",{}))},noAuto:function(){vr()},watch:function(n){var a=n.observeMutationsRoot;ln?Oe():nn(ye("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},cn=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},jr={mixout:function(){return{parse:{transform:function(n){return cn(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=cn(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(f," ").concat(l," ").concat(c)},m={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:u,path:m};return{tag:"g",attributes:d({},v.outer),children:[{tag:"g",attributes:d({},v.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:d(d({},a.icon.attributes),v.path)}]}]}}}},ue={x:0,y:0,width:"100%",height:"100%"};function un(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Mr(t){return t.tag==="g"?t.children:[t]}var zr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?ie(r.split(" ").map(function(o){return o.trim()})):ze();return i.prefix||(i.prefix=dt()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,f=n.transform,l=i.width,c=i.icon,u=o.width,m=o.icon,v=Ma({transform:f,containerWidth:u,iconWidth:l}),w={tag:"rect",attributes:d(d({},ue),{},{fill:"white"})},O=c.children?{children:c.children.map(un)}:{},_={tag:"g",attributes:d({},v.inner),children:[un(d({tag:c.tag,attributes:d(d({},c.attributes),v.path)},O))]},b={tag:"g",attributes:d({},v.outer),children:[_]},h="mask-".concat(s||zt()),A="clip-".concat(s||zt()),C={tag:"mask",attributes:d(d({},ue),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,b]},N={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:Mr(m)},C]};return a.push(N,{tag:"rect",attributes:d({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(h,")")},ue)}),{children:a,attributes:r}}}},Lr={provides:function(e){var n=!1;mt.matchMedia&&(n=mt.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:d(d({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=d(d({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:d(d({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:d(d({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:d(d({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:d(d({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:d(d({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:d(d({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:d(d({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Rr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},Dr=[Ra,Ar,Or,Sr,_r,Ir,Tr,jr,zr,Lr,Rr];Za(Dr,{mixoutsTo:B});B.noAuto;B.config;B.library;B.dom;var Se=B.parse;B.findIconDefinition;B.toHtml;var Fr=B.icon;B.layer;B.text;B.counter;function mn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function nt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?mn(Object(n),!0).forEach(function(a){H(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):mn(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Yr(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function $r(t){var e=Yr(t,"string");return typeof e=="symbol"?e:e+""}function ne(t){"@babel/helpers - typeof";return ne=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ne(t)}function H(t,e,n){return e=$r(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Wr(t,e){if(t==null)return{};var n={};for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){if(e.indexOf(a)>=0)continue;n[a]=t[a]}return n}function Hr(t,e){if(t==null)return{};var n=Wr(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var Ur=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Un={exports:{}};(function(t){(function(e){var n=function(b,h,A){if(!l(h)||u(h)||m(h)||v(h)||f(h))return h;var C,N=0,j=0;if(c(h))for(C=[],j=h.length;N<j;N++)C.push(n(b,h[N],A));else{C={};for(var F in h)Object.prototype.hasOwnProperty.call(h,F)&&(C[b(F,A)]=n(b,h[F],A))}return C},a=function(b,h){h=h||{};var A=h.separator||"_",C=h.split||/(?=[A-Z])/;return b.split(C).join(A)},r=function(b){return w(b)?b:(b=b.replace(/[\-_\s]+(.)?/g,function(h,A){return A?A.toUpperCase():""}),b.substr(0,1).toLowerCase()+b.substr(1))},i=function(b){var h=r(b);return h.substr(0,1).toUpperCase()+h.substr(1)},o=function(b,h){return a(b,h).toLowerCase()},s=Object.prototype.toString,f=function(b){return typeof b=="function"},l=function(b){return b===Object(b)},c=function(b){return s.call(b)=="[object Array]"},u=function(b){return s.call(b)=="[object Date]"},m=function(b){return s.call(b)=="[object RegExp]"},v=function(b){return s.call(b)=="[object Boolean]"},w=function(b){return b=b-0,b===b},O=function(b,h){var A=h&&"process"in h?h.process:h;return typeof A!="function"?b:function(C,N){return A(C,b,N)}},_={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(b,h){return n(O(r,h),b)},decamelizeKeys:function(b,h){return n(O(o,h),b,h)},pascalizeKeys:function(b,h){return n(O(i,h),b)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=_:e.humps=_})(Ur)})(Un);var Br=Un.exports,Gr=["class","style"];function qr(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=Br.camelize(n.slice(0,a)),i=n.slice(a+1).trim();return e[r]=i,e},{})}function Vr(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Bn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(f){return Bn(f)}),r=Object.keys(t.attributes||{}).reduce(function(f,l){var c=t.attributes[l];switch(l){case"class":f.class=Vr(c);break;case"style":f.style=qr(c);break;default:f.attrs[l]=c}return f},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Hr(n,Gr);return Qn(t.tag,nt(nt(nt({},e),{},{class:r.class,style:nt(nt({},r.style),o)},r.attrs),s),a)}var Gn=!1;try{Gn=!0}catch{}function Xr(){if(!Gn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function me(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?H({},t,e):{}}function Kr(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},H(H(H(H(H(H(H(H(H(H(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),H(H(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function dn(t){if(t&&ne(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Se.icon)return Se.icon(t);if(t===null)return null;if(ne(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var de=Kn({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var a=n.attrs,r=xt(function(){return dn(e.icon)}),i=xt(function(){return me("classes",Kr(e))}),o=xt(function(){return me("transform",typeof e.transform=="string"?Se.transform(e.transform):e.transform)}),s=xt(function(){return me("mask",dn(e.mask))}),f=xt(function(){return Fr(r.value,nt(nt(nt(nt({},i.value),o.value),s.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});Zn(f,function(c){if(!c)return Xr("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var l=xt(function(){return f.value?Bn(f.value.abstract[0],{},a):null});return function(){return l.value}}}),Zr={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},Qr={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]},Jr={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]};const ti={class:"w-auto flex flex-col overflow-x-hidden bg-option1"},ei={class:"w-full py-2 ps-8 flex bg-[#3366cc] z-30"},ni={class:"flex w-5/6 sm:w-[20%] md:w-[10%] z-20",href:"https://www.gov.co/",target:"_blank"},ai=["src"],ri={class:"bg-white text-parrafo flex py-1 w-full"},ii={class:"container mx-auto flex flex-wrap items-center justify-between"},oi={class:"flex items-center flex-shrink-0 mr-6 sm:w-1/6 w-3/6"},si={href:"/Welcome",class:"w-full"},fi=["src"],li={class:"flex items-center sm:w-4/6 w-2/6"},ci={class:"sm:flex flex-wrap items-center justify-end sm:space-x-4 text-primary text-sm sm:text-base"},ui={href:"/login",class:"hover:text-parrafo transition duration-300"},mi={class:"flex-1 overflow-x-hidden overflow-y-hidden bg-white text-black"},di={class:"px-2 bg-option2/90 text-parrafo flex flex-col py-6"},vi={class:"container mx-auto flex flex-wrap items-center justify-between"},pi={class:"flex items-center flex-shrink-0 mr-6 w-1/6"},bi={href:"/Welcome",class:"w-full"},gi=["src"],hi={class:"flex justify-center items-center space-x-4 text-primary"},yi={href:"https://www.instagram.com/alcaldiadepereira/",target:"_blank",class:"hover:text-parrafo transition duration-300"},wi={href:"https://www.facebook.com/AlcaldiaDePereira/",target:"_blank",class:"hover:text-parrafo transition duration-300"},xi={href:"https://www.youtube.com/channel/UCAFZZcG6RI0gw5DkrT6kMSQ/videos",target:"_blank",class:"hover:text-parrafo transition duration-300"},ki={href:"#inicio",class:"text-primary hover:text-parrafo transition duration-300"},Ai={class:"w-full py-4 ps-8 flex bg-[#3366cc]"},Oi={class:"flex w-5/6 sm:w-[25%] md:w-[15%]",href:"https://www.gov.co/",target:"_blank"},Si=["src"],Ei={__name:"PageLayout",setup(t){qn.useToast(),oa.init();const e=n=>window.location.pathname===n;return(n,a)=>(vn(),pn("div",ti,[k("header",ei,[k("a",ni,[k("figure",null,[k("img",{class:"w-full sm:w-5/6",src:V(ra),alt:"imagen de logo",title:"Gobierno colombiano"},null,8,ai),a[0]||(a[0]=k("figcaption",{lang:"es",class:"hidden"},"Esta es una imagen del logo del gobierno actual de colombia ",-1))])])]),k("nav",ri,[k("div",ii,[k("div",oi,[k("a",si,[k("figure",null,[k("img",{class:"w-full",src:V(Ye),alt:"imagen de logo",title:"Alcaldía de Pereira"},null,8,fi),a[1]||(a[1]=k("figcaption",{lang:"es",class:"hidden"},"Esta es una imagen del logo de la alcaldía de Pereira ",-1))])])]),k("div",li,[k("ul",ci,[k("li",{class:Yt(["sm:border-white border-gray-400 sm:pr-2 border-b",{"font-bold":e("/register")}])},a[2]||(a[2]=[k("a",{href:"/register",class:"hover:text-parrafo transition duration-300"},"Registro",-1)]),2),k("li",{class:Yt(["sm:border-white border-gray-400 sm:pr-2 border-b",{"font-bold":e("/consultar")}])},a[3]||(a[3]=[k("a",{href:"/consultar",class:"hover:text-parrafo transition duration-300"},"Consultar registro",-1)]),2),k("li",{class:Yt(["sm:border-white border-gray-400 sm:pr-2 border-b",{"font-bold":e("/busqueda-perdidos")}])},a[4]||(a[4]=[k("a",{href:"/busqueda-perdidos",class:"hover:text-parrafo transition duration-300"},"Caninos perdidos",-1)]),2),k("li",{class:Yt(["sm:border-white border-gray-400 sm:pr-2 border-b",{"font-bold":e("/login")}])},[k("a",ui,Jn(n.$page.props.auth.user?"Dashboard":"Iniciar sesión"),1)],2)])])])]),k("main",mi,[ta(n.$slots,"default")]),k("footer",di,[k("div",vi,[k("div",pi,[k("a",bi,[k("figure",null,[k("img",{class:"w-full",src:V(Ye),alt:"imagen de logo",title:"Alcaldía de Pereira"},null,8,gi),a[5]||(a[5]=k("figcaption",{lang:"es",class:"hidden"},"Esta es una imagen del logo de la alcaldía de Pereira ",-1))])])]),k("div",hi,[k("a",yi,[$t(V(de),{icon:V(Zr),size:"xl"},null,8,["icon"])]),k("a",wi,[$t(V(de),{icon:V(Qr),size:"xl"},null,8,["icon"])]),k("a",xi,[$t(V(de),{icon:V(Jr),size:"xl"},null,8,["icon"])])]),k("div",null,[k("a",ki,[$t(V(na),{class:"w-12 animate-bounce"})])])]),a[6]||(a[6]=ea('<div class="container mx-auto flex flex-wrap items-center justify-between px-4 mt-8"><div class=""><h2 class="font-sans text-primary font-bold text-base sm:text-lg"> Línea de atención ciudadana </h2><span class="text-sm sm:text-base flex flex-col flex-wrap whitespace-nowrap"><br><b>Conmutador:</b> (+57) 6 3248000 - 6 3248179 <br><b>Línea Anticorrupción:</b> (+57) 01 8000 919748 <br><b>Línea de servicio a la ciudadanía:</b> (+57) 6 3248000 - 6 3248179 <br><b>Correo electrónico:</b> <a class="text-azul hover:text-primary focus:text-primary" href="mailto:contactenos@pereira.gov.co" target="_blank">contactenos@pereira.gov.co</a><br><b>Notificaciones judiciales:</b> <a class="text-azul hover:text-primary focus:text-primary" href="mailto:notificaciones_judicialesalcaldia@pereira.gov.co" target="_blank">notificaciones_judicialesalcaldia@pereira.gov.co</a><br><br><b>Nit:</b> 891.480.030-2 </span></div><div class="flex font-bold h-full text-xs sm:text-base"> Diseñado por Secretaría TIC. </div></div>',1))]),k("div",Ai,[k("a",Oi,[k("figure",null,[k("img",{class:"w-full sm:w-5/6",src:V(aa),alt:"imagen de logo",title:"Gobierno colombiano"},null,8,Si),a[7]||(a[7]=k("figcaption",{lang:"es",class:"hidden"},"Esta es una imagen del logo del gobierno actual de colombia ",-1))])])])]))}};export{oa as A,Ei as _};
