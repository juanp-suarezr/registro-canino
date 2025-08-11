import{s as b}from"./basecomponent.esm-CfcJWOSC.js";import{B as f,O as v,D as o,C as p,o as h,l as g,W as k,f as w,N as O}from"./app-CET1Dl7o.js";var S=`
.p-icon {
    display: inline-block;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,A=f.extend({name:"baseicon",css:S});function a(e){"@babel/helpers - typeof";return a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(e)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?d(Object(n),!0).forEach(function(i){E(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function E(e,t,n){return t=j(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e){var t=P(e,"string");return a(t)=="symbol"?t:String(t)}function P(e,t){if(a(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var i=n.call(e,t||"default");if(a(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var W={name:"BaseIcon",extends:b,props:{label:{type:String,default:void 0},spin:{type:Boolean,default:!1}},style:A,methods:{pti:function(){var t=v.isEmpty(this.label);return c(c({},!this.isUnstyled&&{class:["p-icon",{"p-icon-spin":this.spin}]}),{},{role:t?void 0:"img","aria-label":t?void 0:this.label,"aria-hidden":t})}}},T={name:"Portal",props:{appendTo:{type:[String,Object],default:"body"},disabled:{type:Boolean,default:!1}},data:function(){return{mounted:!1}},mounted:function(){this.mounted=o.isClient()},computed:{inline:function(){return this.disabled||this.appendTo==="self"}}};function _(e,t,n,i,r,s){return s.inline?p(e.$slots,"default",{key:0}):r.mounted?(h(),g(k,{key:1,to:n.appendTo},[p(e.$slots,"default")],8,["to"])):w("",!0)}T.render=_;var x={root:"p-ink"},C=f.extend({name:"ripple",classes:x}),D=O.extend({style:C});function I(e){return M(e)||U(e)||B(e)||$()}function $(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function B(e,t){if(e){if(typeof e=="string")return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}}function U(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function M(e){if(Array.isArray(e))return u(e)}function u(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var R=D.extend("ripple",{mounted:function(t){var n,i=t==null||(n=t.$instance)===null||n===void 0?void 0:n.$primevueConfig;i&&i.ripple&&(this.create(t),this.bindEvents(t),t.setAttribute("data-pd-ripple",!0))},unmounted:function(t){this.remove(t)},timeout:void 0,methods:{bindEvents:function(t){t.addEventListener("mousedown",this.onMouseDown.bind(this))},unbindEvents:function(t){t.removeEventListener("mousedown",this.onMouseDown.bind(this))},create:function(t){var n=o.createElement("span",{role:"presentation","aria-hidden":!0,"data-p-ink":!0,"data-p-ink-active":!1,class:!this.isUnstyled()&&this.cx("root"),onAnimationEnd:this.onAnimationEnd.bind(this),"p-bind":this.ptm("root")});t.appendChild(n),this.$el=n},remove:function(t){var n=this.getInk(t);n&&(this.unbindEvents(t),n.removeEventListener("animationend",this.onAnimationEnd),n.remove())},onMouseDown:function(t){var n=this,i=t.currentTarget,r=this.getInk(i);if(!(!r||getComputedStyle(r,null).display==="none")){if(!this.isUnstyled()&&o.removeClass(r,"p-ink-active"),r.setAttribute("data-p-ink-active","false"),!o.getHeight(r)&&!o.getWidth(r)){var s=Math.max(o.getOuterWidth(i),o.getOuterHeight(i));r.style.height=s+"px",r.style.width=s+"px"}var l=o.getOffset(i),m=t.pageX-l.left+document.body.scrollTop-o.getWidth(r)/2,y=t.pageY-l.top+document.body.scrollLeft-o.getHeight(r)/2;r.style.top=y+"px",r.style.left=m+"px",!this.isUnstyled()&&o.addClass(r,"p-ink-active"),r.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(function(){r&&(!n.isUnstyled()&&o.removeClass(r,"p-ink-active"),r.setAttribute("data-p-ink-active","false"))},401)}},onAnimationEnd:function(t){this.timeout&&clearTimeout(this.timeout),!this.isUnstyled()&&o.removeClass(t.currentTarget,"p-ink-active"),t.currentTarget.setAttribute("data-p-ink-active","false")},getInk:function(t){return t&&t.children?I(t.children).find(function(n){return o.getAttribute(n,"data-pc-name")==="ripple"}):void 0}}});export{R,T as a,W as s};
