import{B as j,aa as ht,o as v,c as y,d as _,q as b,H as x,a9 as et,aO as ft,aP as pt,l as mt,a6 as vt,f as Q,ag as gt,al as yt,aD as Y,aQ as V,aR as T,C as bt,aC as $t,ax as Ct,aE as wt,W as St,aM as it,m as zt,r as It,F as G,s as nt,a as xt}from"./app-CglX8Z5j.js";import{s as U}from"./index-CC40cL9t.js";import{c as Pt}from"./index-Be1fzYNM.js";var Ot=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
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
`,kt=j.extend({name:"baseicon",css:Ot});function R(e){"@babel/helpers - typeof";return R=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(e)}function rt(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),i.push.apply(i,n)}return i}function st(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?rt(Object(i),!0).forEach(function(n){Lt(e,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):rt(Object(i)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))})}return e}function Lt(e,t,i){return(t=Bt(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function Bt(e){var t=Ft(e,"string");return R(t)=="symbol"?t:t+""}function Ft(e,t){if(R(e)!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var n=i.call(e,t);if(R(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Z={name:"BaseIcon",extends:U,props:{label:{type:String,default:void 0},spin:{type:Boolean,default:!1}},style:kt,provide:function(){return{$pcIcon:this,$parentInstance:this}},methods:{pti:function(){var t=ht(this.label);return st(st({},!this.isUnstyled&&{class:["p-icon",{"p-icon-spin":this.spin}]}),{},{role:t?void 0:"img","aria-label":t?void 0:this.label,"aria-hidden":t})}}},Vt={name:"CheckIcon",extends:Z};function Tt(e,t,i,n,s,r){return v(),y("svg",b({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[_("path",{d:"M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z",fill:"currentColor"},null,-1)]),16)}Vt.render=Tt;var At={name:"ChevronDownIcon",extends:Z};function Et(e,t,i,n,s,r){return v(),y("svg",b({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[_("path",{d:"M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z",fill:"currentColor"},null,-1)]),16)}At.render=Et;var jt={name:"SearchIcon",extends:Z};function _t(e,t,i,n,s,r){return v(),y("svg",b({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[_("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z",fill:"currentColor"},null,-1)]),16)}jt.render=_t;var ut={name:"SpinnerIcon",extends:Z};function Ht(e,t,i,n,s,r){return v(),y("svg",b({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[_("path",{d:"M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",fill:"currentColor"},null,-1)]),16)}ut.render=Ht;var Nt={name:"TimesIcon",extends:Z};function Rt(e,t,i,n,s,r){return v(),y("svg",b({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[_("path",{d:"M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z",fill:"currentColor"},null,-1)]),16)}Nt.render=Rt;var Mt=({dt:e})=>`
.p-iconfield {
    position: relative;
}

.p-inputicon {
    position: absolute;
    top: 50%;
    margin-top: calc(-1 * (${e("icon.size")} / 2));
    color: ${e("iconfield.icon.color")};
    line-height: 1;
    z-index: 1;
}

.p-iconfield .p-inputicon:first-child {
    inset-inline-start: ${e("form.field.padding.x")};
}

.p-iconfield .p-inputicon:last-child {
    inset-inline-end: ${e("form.field.padding.x")};
}

.p-iconfield .p-inputtext:not(:first-child),
.p-iconfield .p-inputwrapper:not(:first-child) .p-inputtext {
    padding-inline-start: calc((${e("form.field.padding.x")} * 2) + ${e("icon.size")});
}

.p-iconfield .p-inputtext:not(:last-child) {
    padding-inline-end: calc((${e("form.field.padding.x")} * 2) + ${e("icon.size")});
}

.p-iconfield:has(.p-inputfield-sm) .p-inputicon {
    font-size: ${e("form.field.sm.font.size")};
    width: ${e("form.field.sm.font.size")};
    height: ${e("form.field.sm.font.size")};
    margin-top: calc(-1 * (${e("form.field.sm.font.size")} / 2));
}

.p-iconfield:has(.p-inputfield-lg) .p-inputicon {
    font-size: ${e("form.field.lg.font.size")};
    width: ${e("form.field.lg.font.size")};
    height: ${e("form.field.lg.font.size")};
    margin-top: calc(-1 * (${e("form.field.lg.font.size")} / 2));
}
`,Wt={root:"p-iconfield"},Dt=j.extend({name:"iconfield",style:Mt,classes:Wt}),Ut={name:"BaseIconField",extends:U,style:Dt,provide:function(){return{$pcIconField:this,$parentInstance:this}}},Zt={name:"IconField",extends:Ut,inheritAttrs:!1};function Kt(e,t,i,n,s,r){return v(),y("div",b({class:e.cx("root")},e.ptmi("root")),[x(e.$slots,"default")],16)}Zt.render=Kt;var qt={root:"p-inputicon"},Qt=j.extend({name:"inputicon",classes:qt}),Xt={name:"BaseInputIcon",extends:U,style:Qt,props:{class:null},provide:function(){return{$pcInputIcon:this,$parentInstance:this}}},Yt={name:"InputIcon",extends:Xt,inheritAttrs:!1,computed:{containerClass:function(){return[this.cx("root"),this.class]}}};function Gt(e,t,i,n,s,r){return v(),y("span",b({class:r.containerClass},e.ptmi("root")),[x(e.$slots,"default")],16)}Yt.render=Gt;var Jt={name:"BaseEditableHolder",extends:U,emits:["update:modelValue","value-change"],props:{modelValue:{type:null,default:void 0},defaultValue:{type:null,default:void 0},name:{type:String,default:void 0},invalid:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},formControl:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0},$pcForm:{default:void 0},$pcFormField:{default:void 0}},data:function(){return{d_value:this.defaultValue||this.modelValue}},watch:{modelValue:function(t){this.d_value=t},defaultValue:function(t){this.d_value=t},$formName:{immediate:!0,handler:function(t){var i,n;this.formField=((i=this.$pcForm)===null||i===void 0||(n=i.register)===null||n===void 0?void 0:n.call(i,t,this.$formControl))||{}}},$formControl:{immediate:!0,handler:function(t){var i,n;this.formField=((i=this.$pcForm)===null||i===void 0||(n=i.register)===null||n===void 0?void 0:n.call(i,this.$formName,t))||{}}},$formDefaultValue:{immediate:!0,handler:function(t){this.d_value!==t&&(this.d_value=t)}},$formValue:{immediate:!1,handler:function(t){var i;(i=this.$pcForm)!==null&&i!==void 0&&i.getFieldState(this.$formName)&&t!==this.d_value&&(this.d_value=t)}}},formField:{},methods:{writeValue:function(t,i){var n,s;this.controlled&&(this.d_value=t,this.$emit("update:modelValue",t)),this.$emit("value-change",t),(n=(s=this.formField).onChange)===null||n===void 0||n.call(s,{originalEvent:i,value:t})},findNonEmpty:function(){for(var t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];return i.find(et)}},computed:{$filled:function(){return et(this.d_value)},$invalid:function(){var t,i;return!this.$formNovalidate&&this.findNonEmpty(this.invalid,(t=this.$pcFormField)===null||t===void 0||(t=t.$field)===null||t===void 0?void 0:t.invalid,(i=this.$pcForm)===null||i===void 0||(i=i.getFieldState(this.$formName))===null||i===void 0?void 0:i.invalid)},$formName:function(){var t;return this.$formNovalidate?void 0:this.name||((t=this.$formControl)===null||t===void 0?void 0:t.name)},$formControl:function(){var t;return this.formControl||((t=this.$pcFormField)===null||t===void 0?void 0:t.formControl)},$formNovalidate:function(){var t;return(t=this.$formControl)===null||t===void 0?void 0:t.novalidate},$formDefaultValue:function(){var t,i;return this.findNonEmpty(this.d_value,(t=this.$pcFormField)===null||t===void 0?void 0:t.initialValue,(i=this.$pcForm)===null||i===void 0||(i=i.initialValues)===null||i===void 0?void 0:i[this.$formName])},$formValue:function(){var t,i;return this.findNonEmpty((t=this.$pcFormField)===null||t===void 0||(t=t.$field)===null||t===void 0?void 0:t.value,(i=this.$pcForm)===null||i===void 0||(i=i.getFieldState(this.$formName))===null||i===void 0?void 0:i.value)},controlled:function(){return this.$inProps.hasOwnProperty("modelValue")||!this.$inProps.hasOwnProperty("modelValue")&&!this.$inProps.hasOwnProperty("defaultValue")},filled:function(){return this.$filled}}},te={name:"BaseInput",extends:Jt,props:{size:{type:String,default:null},fluid:{type:Boolean,default:null},variant:{type:String,default:null}},inject:{$parentInstance:{default:void 0},$pcFluid:{default:void 0}},computed:{$variant:function(){var t;return(t=this.variant)!==null&&t!==void 0?t:this.$primevue.config.inputStyle||this.$primevue.config.inputVariant},$fluid:function(){var t;return(t=this.fluid)!==null&&t!==void 0?t:!!this.$pcFluid},hasFluid:function(){return this.$fluid}}},ee=({dt:e})=>`
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${e("inputtext.color")};
    background: ${e("inputtext.background")};
    padding-block: ${e("inputtext.padding.y")};
    padding-inline: ${e("inputtext.padding.x")};
    border: 1px solid ${e("inputtext.border.color")};
    transition: background ${e("inputtext.transition.duration")}, color ${e("inputtext.transition.duration")}, border-color ${e("inputtext.transition.duration")}, outline-color ${e("inputtext.transition.duration")}, box-shadow ${e("inputtext.transition.duration")};
    appearance: none;
    border-radius: ${e("inputtext.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("inputtext.shadow")};
}

.p-inputtext:enabled:hover {
    border-color: ${e("inputtext.hover.border.color")};
}

.p-inputtext:enabled:focus {
    border-color: ${e("inputtext.focus.border.color")};
    box-shadow: ${e("inputtext.focus.ring.shadow")};
    outline: ${e("inputtext.focus.ring.width")} ${e("inputtext.focus.ring.style")} ${e("inputtext.focus.ring.color")};
    outline-offset: ${e("inputtext.focus.ring.offset")};
}

.p-inputtext.p-invalid {
    border-color: ${e("inputtext.invalid.border.color")};
}

.p-inputtext.p-variant-filled {
    background: ${e("inputtext.filled.background")};
}

.p-inputtext.p-variant-filled:enabled:hover {
    background: ${e("inputtext.filled.hover.background")};
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: ${e("inputtext.filled.focus.background")};
}

.p-inputtext:disabled {
    opacity: 1;
    background: ${e("inputtext.disabled.background")};
    color: ${e("inputtext.disabled.color")};
}

.p-inputtext::placeholder {
    color: ${e("inputtext.placeholder.color")};
}

.p-inputtext.p-invalid::placeholder {
    color: ${e("inputtext.invalid.placeholder.color")};
}

.p-inputtext-sm {
    font-size: ${e("inputtext.sm.font.size")};
    padding-block: ${e("inputtext.sm.padding.y")};
    padding-inline: ${e("inputtext.sm.padding.x")};
}

.p-inputtext-lg {
    font-size: ${e("inputtext.lg.font.size")};
    padding-block: ${e("inputtext.lg.padding.y")};
    padding-inline: ${e("inputtext.lg.padding.x")};
}

.p-inputtext-fluid {
    width: 100%;
}
`,ie={root:function(t){var i=t.instance,n=t.props;return["p-inputtext p-component",{"p-filled":i.$filled,"p-inputtext-sm p-inputfield-sm":n.size==="small","p-inputtext-lg p-inputfield-lg":n.size==="large","p-invalid":i.$invalid,"p-variant-filled":i.$variant==="filled","p-inputtext-fluid":i.$fluid}]}},ne=j.extend({name:"inputtext",style:ee,classes:ie}),re={name:"BaseInputText",extends:te,style:ne,provide:function(){return{$pcInputText:this,$parentInstance:this}}};function M(e){"@babel/helpers - typeof";return M=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(e)}function se(e,t,i){return(t=oe(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function oe(e){var t=le(e,"string");return M(t)=="symbol"?t:t+""}function le(e,t){if(M(e)!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var n=i.call(e,t);if(M(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var ae={name:"InputText",extends:re,inheritAttrs:!1,methods:{onInput:function(t){this.writeValue(t.target.value,t)}},computed:{attrs:function(){return b(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)},dataP:function(){return Pt(se({invalid:this.$invalid,fluid:this.$fluid,filled:this.$variant==="filled"},this.size,this.size))}}},ue=["value","name","disabled","aria-invalid","data-p"];function de(e,t,i,n,s,r){return v(),y("input",b({type:"text",class:e.cx("root"),value:e.d_value,name:e.name,disabled:e.disabled,"aria-invalid":e.$invalid||void 0,"data-p":r.dataP,onInput:t[0]||(t[0]=function(){return r.onInput&&r.onInput.apply(r,arguments)})},r.attrs),null,16,ue)}ae.render=de;var Ae=ft(),ce={name:"Portal",props:{appendTo:{type:[String,Object],default:"body"},disabled:{type:Boolean,default:!1}},data:function(){return{mounted:!1}},mounted:function(){this.mounted=pt()},computed:{inline:function(){return this.disabled||this.appendTo==="self"}}};function he(e,t,i,n,s,r){return r.inline?x(e.$slots,"default",{key:0}):s.mounted?(v(),mt(vt,{key:1,to:i.appendTo},[x(e.$slots,"default")],8,["to"])):Q("",!0)}ce.render=he;var fe=({dt:e})=>`
.p-ink {
    display: block;
    position: absolute;
    background: ${e("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
    pointer-events: none;
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,pe={root:"p-ink"},me=j.extend({name:"ripple-directive",style:fe,classes:pe}),ve=gt.extend({style:me});function W(e){"@babel/helpers - typeof";return W=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},W(e)}function ge(e){return Ce(e)||$e(e)||be(e)||ye()}function ye(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function be(e,t){if(e){if(typeof e=="string")return J(e,t);var i={}.toString.call(e).slice(8,-1);return i==="Object"&&e.constructor&&(i=e.constructor.name),i==="Map"||i==="Set"?Array.from(e):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?J(e,t):void 0}}function $e(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ce(e){if(Array.isArray(e))return J(e)}function J(e,t){(t==null||t>e.length)&&(t=e.length);for(var i=0,n=Array(t);i<t;i++)n[i]=e[i];return n}function ot(e,t,i){return(t=we(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function we(e){var t=Se(e,"string");return W(t)=="symbol"?t:t+""}function Se(e,t){if(W(e)!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var n=i.call(e,t);if(W(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var Ee=ve.extend("ripple",{watch:{"config.ripple":function(t){t?(this.createRipple(this.$host),this.bindEvents(this.$host),this.$host.setAttribute("data-pd-ripple",!0),this.$host.style.overflow="hidden",this.$host.style.position="relative"):(this.remove(this.$host),this.$host.removeAttribute("data-pd-ripple"))}},unmounted:function(t){this.remove(t)},timeout:void 0,methods:{bindEvents:function(t){t.addEventListener("mousedown",this.onMouseDown.bind(this))},unbindEvents:function(t){t.removeEventListener("mousedown",this.onMouseDown.bind(this))},createRipple:function(t){var i=this.getInk(t);i||(i=yt("span",ot(ot({role:"presentation","aria-hidden":!0,"data-p-ink":!0,"data-p-ink-active":!1,class:!this.isUnstyled()&&this.cx("root"),onAnimationEnd:this.onAnimationEnd.bind(this)},this.$attrSelector,""),"p-bind",this.ptm("root"))),t.appendChild(i),this.$el=i)},remove:function(t){var i=this.getInk(t);i&&(this.$host.style.overflow="",this.$host.style.position="",this.unbindEvents(t),i.removeEventListener("animationend",this.onAnimationEnd),i.remove())},onMouseDown:function(t){var i=this,n=t.currentTarget,s=this.getInk(n);if(!(!s||getComputedStyle(s,null).display==="none")){if(!this.isUnstyled()&&Y(s,"p-ink-active"),s.setAttribute("data-p-ink-active","false"),!V(s)&&!T(s)){var r=Math.max(bt(n),$t(n));s.style.height=r+"px",s.style.width=r+"px"}var l=Ct(n),a=t.pageX-l.left+document.body.scrollTop-T(s)/2,u=t.pageY-l.top+document.body.scrollLeft-V(s)/2;s.style.top=u+"px",s.style.left=a+"px",!this.isUnstyled()&&wt(s,"p-ink-active"),s.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(function(){s&&(!i.isUnstyled()&&Y(s,"p-ink-active"),s.setAttribute("data-p-ink-active","false"))},401)}},onAnimationEnd:function(t){this.timeout&&clearTimeout(this.timeout),!this.isUnstyled()&&Y(t.currentTarget,"p-ink-active"),t.currentTarget.setAttribute("data-p-ink-active","false")},getInk:function(t){return t&&t.children?ge(t.children).find(function(i){return St(i,"data-pc-name")==="ripple"}):void 0}}}),ze=({dt:e})=>`
.p-virtualscroller-loader {
    background: ${e("virtualscroller.loader.mask.background")};
    color: ${e("virtualscroller.loader.mask.color")};
}

.p-virtualscroller-loading-icon {
    font-size: ${e("virtualscroller.loader.icon.size")};
    width: ${e("virtualscroller.loader.icon.size")};
    height: ${e("virtualscroller.loader.icon.size")};
}
`,Ie=`
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}

.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}

.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}

.p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-virtualscroller-loader-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}

.p-virtualscroller .p-virtualscroller-loading {
    transform: none !important;
    min-height: 0;
    position: sticky;
    inset-block-start: 0;
    inset-inline-start: 0;
}
`,lt=j.extend({name:"virtualscroller",css:Ie,style:ze}),xe={name:"BaseVirtualScroller",extends:U,props:{id:{type:String,default:null},style:null,class:null,items:{type:Array,default:null},itemSize:{type:[Number,Array],default:0},scrollHeight:null,scrollWidth:null,orientation:{type:String,default:"vertical"},numToleratedItems:{type:Number,default:null},delay:{type:Number,default:0},resizeDelay:{type:Number,default:10},lazy:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loaderDisabled:{type:Boolean,default:!1},columns:{type:Array,default:null},loading:{type:Boolean,default:!1},showSpacer:{type:Boolean,default:!0},showLoader:{type:Boolean,default:!1},tabindex:{type:Number,default:0},inline:{type:Boolean,default:!1},step:{type:Number,default:0},appendOnly:{type:Boolean,default:!1},autoSize:{type:Boolean,default:!1}},style:lt,provide:function(){return{$pcVirtualScroller:this,$parentInstance:this}},beforeMount:function(){var t;lt.loadCSS({nonce:(t=this.$primevueConfig)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce})}};function D(e){"@babel/helpers - typeof";return D=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(e)}function at(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),i.push.apply(i,n)}return i}function N(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]!=null?arguments[t]:{};t%2?at(Object(i),!0).forEach(function(n){dt(e,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):at(Object(i)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))})}return e}function dt(e,t,i){return(t=Pe(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function Pe(e){var t=Oe(e,"string");return D(t)=="symbol"?t:t+""}function Oe(e,t){if(D(e)!="object"||!e)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var n=i.call(e,t);if(D(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var ke={name:"VirtualScroller",extends:xe,inheritAttrs:!1,emits:["update:numToleratedItems","scroll","scroll-index-change","lazy-load"],data:function(){var t=this.isBoth();return{first:t?{rows:0,cols:0}:0,last:t?{rows:0,cols:0}:0,page:t?{rows:0,cols:0}:0,numItemsInViewport:t?{rows:0,cols:0}:0,lastScrollPos:t?{top:0,left:0}:0,d_numToleratedItems:this.numToleratedItems,d_loading:this.loading,loaderArr:[],spacerStyle:{},contentStyle:{}}},element:null,content:null,lastScrollPos:null,scrollTimeout:null,resizeTimeout:null,defaultWidth:0,defaultHeight:0,defaultContentWidth:0,defaultContentHeight:0,isRangeChanged:!1,lazyLoadState:{},resizeListener:null,resizeObserver:null,initialized:!1,watch:{numToleratedItems:function(t){this.d_numToleratedItems=t},loading:function(t,i){this.lazy&&t!==i&&t!==this.d_loading&&(this.d_loading=t)},items:{handler:function(t,i){(!i||i.length!==(t||[]).length)&&(this.init(),this.calculateAutoSize())},deep:!0},itemSize:function(){this.init(),this.calculateAutoSize()},orientation:function(){this.lastScrollPos=this.isBoth()?{top:0,left:0}:0},scrollHeight:function(){this.init(),this.calculateAutoSize()},scrollWidth:function(){this.init(),this.calculateAutoSize()}},mounted:function(){this.viewInit(),this.lastScrollPos=this.isBoth()?{top:0,left:0}:0,this.lazyLoadState=this.lazyLoadState||{}},updated:function(){!this.initialized&&this.viewInit()},unmounted:function(){this.unbindResizeListener(),this.initialized=!1},methods:{viewInit:function(){it(this.element)&&(this.setContentEl(this.content),this.init(),this.calculateAutoSize(),this.bindResizeListener(),this.defaultWidth=T(this.element),this.defaultHeight=V(this.element),this.defaultContentWidth=T(this.content),this.defaultContentHeight=V(this.content),this.initialized=!0)},init:function(){this.disabled||(this.setSize(),this.calculateOptions(),this.setSpacerSize())},isVertical:function(){return this.orientation==="vertical"},isHorizontal:function(){return this.orientation==="horizontal"},isBoth:function(){return this.orientation==="both"},scrollTo:function(t){this.element&&this.element.scrollTo(t)},scrollToIndex:function(t){var i=this,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"auto",s=this.isBoth(),r=this.isHorizontal(),l=s?t.every(function(O){return O>-1}):t>-1;if(l){var a=this.first,u=this.element,d=u.scrollTop,o=d===void 0?0:d,c=u.scrollLeft,h=c===void 0?0:c,$=this.calculateNumItems(),m=$.numToleratedItems,g=this.getContentPosition(),C=this.itemSize,P=function(){var z=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,B=arguments.length>1?arguments[1]:void 0;return z<=B?0:z},S=function(z,B,E){return z*B+E},k=function(){var z=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,B=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return i.scrollTo({left:z,top:B,behavior:n})},f=s?{rows:0,cols:0}:0,A=!1,L=!1;s?(f={rows:P(t[0],m[0]),cols:P(t[1],m[1])},k(S(f.cols,C[1],g.left),S(f.rows,C[0],g.top)),L=this.lastScrollPos.top!==o||this.lastScrollPos.left!==h,A=f.rows!==a.rows||f.cols!==a.cols):(f=P(t,m),r?k(S(f,C,g.left),o):k(h,S(f,C,g.top)),L=this.lastScrollPos!==(r?h:o),A=f!==a),this.isRangeChanged=A,L&&(this.first=f)}},scrollInView:function(t,i){var n=this,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"auto";if(i){var r=this.isBoth(),l=this.isHorizontal(),a=r?t.every(function(C){return C>-1}):t>-1;if(a){var u=this.getRenderedRange(),d=u.first,o=u.viewport,c=function(){var P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return n.scrollTo({left:P,top:S,behavior:s})},h=i==="to-start",$=i==="to-end";if(h){if(r)o.first.rows-d.rows>t[0]?c(o.first.cols*this.itemSize[1],(o.first.rows-1)*this.itemSize[0]):o.first.cols-d.cols>t[1]&&c((o.first.cols-1)*this.itemSize[1],o.first.rows*this.itemSize[0]);else if(o.first-d>t){var m=(o.first-1)*this.itemSize;l?c(m,0):c(0,m)}}else if($){if(r)o.last.rows-d.rows<=t[0]+1?c(o.first.cols*this.itemSize[1],(o.first.rows+1)*this.itemSize[0]):o.last.cols-d.cols<=t[1]+1&&c((o.first.cols+1)*this.itemSize[1],o.first.rows*this.itemSize[0]);else if(o.last-d<=t+1){var g=(o.first+1)*this.itemSize;l?c(g,0):c(0,g)}}}}else this.scrollToIndex(t,s)},getRenderedRange:function(){var t=function(c,h){return Math.floor(c/(h||c))},i=this.first,n=0;if(this.element){var s=this.isBoth(),r=this.isHorizontal(),l=this.element,a=l.scrollTop,u=l.scrollLeft;if(s)i={rows:t(a,this.itemSize[0]),cols:t(u,this.itemSize[1])},n={rows:i.rows+this.numItemsInViewport.rows,cols:i.cols+this.numItemsInViewport.cols};else{var d=r?u:a;i=t(d,this.itemSize),n=i+this.numItemsInViewport}}return{first:this.first,last:this.last,viewport:{first:i,last:n}}},calculateNumItems:function(){var t=this.isBoth(),i=this.isHorizontal(),n=this.itemSize,s=this.getContentPosition(),r=this.element?this.element.offsetWidth-s.left:0,l=this.element?this.element.offsetHeight-s.top:0,a=function(h,$){return Math.ceil(h/($||h))},u=function(h){return Math.ceil(h/2)},d=t?{rows:a(l,n[0]),cols:a(r,n[1])}:a(i?r:l,n),o=this.d_numToleratedItems||(t?[u(d.rows),u(d.cols)]:u(d));return{numItemsInViewport:d,numToleratedItems:o}},calculateOptions:function(){var t=this,i=this.isBoth(),n=this.first,s=this.calculateNumItems(),r=s.numItemsInViewport,l=s.numToleratedItems,a=function(o,c,h){var $=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return t.getLast(o+c+(o<h?2:3)*h,$)},u=i?{rows:a(n.rows,r.rows,l[0]),cols:a(n.cols,r.cols,l[1],!0)}:a(n,r,l);this.last=u,this.numItemsInViewport=r,this.d_numToleratedItems=l,this.$emit("update:numToleratedItems",this.d_numToleratedItems),this.showLoader&&(this.loaderArr=i?Array.from({length:r.rows}).map(function(){return Array.from({length:r.cols})}):Array.from({length:r})),this.lazy&&Promise.resolve().then(function(){var d;t.lazyLoadState={first:t.step?i?{rows:0,cols:n.cols}:0:n,last:Math.min(t.step?t.step:u,((d=t.items)===null||d===void 0?void 0:d.length)||0)},t.$emit("lazy-load",t.lazyLoadState)})},calculateAutoSize:function(){var t=this;this.autoSize&&!this.d_loading&&Promise.resolve().then(function(){if(t.content){var i=t.isBoth(),n=t.isHorizontal(),s=t.isVertical();t.content.style.minHeight=t.content.style.minWidth="auto",t.content.style.position="relative",t.element.style.contain="none";var r=[T(t.element),V(t.element)],l=r[0],a=r[1];(i||n)&&(t.element.style.width=l<t.defaultWidth?l+"px":t.scrollWidth||t.defaultWidth+"px"),(i||s)&&(t.element.style.height=a<t.defaultHeight?a+"px":t.scrollHeight||t.defaultHeight+"px"),t.content.style.minHeight=t.content.style.minWidth="",t.content.style.position="",t.element.style.contain=""}})},getLast:function(){var t,i,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,s=arguments.length>1?arguments[1]:void 0;return this.items?Math.min(s?((t=this.columns||this.items[0])===null||t===void 0?void 0:t.length)||0:((i=this.items)===null||i===void 0?void 0:i.length)||0,n):0},getContentPosition:function(){if(this.content){var t=getComputedStyle(this.content),i=parseFloat(t.paddingLeft)+Math.max(parseFloat(t.left)||0,0),n=parseFloat(t.paddingRight)+Math.max(parseFloat(t.right)||0,0),s=parseFloat(t.paddingTop)+Math.max(parseFloat(t.top)||0,0),r=parseFloat(t.paddingBottom)+Math.max(parseFloat(t.bottom)||0,0);return{left:i,right:n,top:s,bottom:r,x:i+n,y:s+r}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}},setSize:function(){var t=this;if(this.element){var i=this.isBoth(),n=this.isHorizontal(),s=this.element.parentElement,r=this.scrollWidth||"".concat(this.element.offsetWidth||s.offsetWidth,"px"),l=this.scrollHeight||"".concat(this.element.offsetHeight||s.offsetHeight,"px"),a=function(d,o){return t.element.style[d]=o};i||n?(a("height",l),a("width",r)):a("height",l)}},setSpacerSize:function(){var t=this,i=this.items;if(i){var n=this.isBoth(),s=this.isHorizontal(),r=this.getContentPosition(),l=function(u,d,o){var c=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return t.spacerStyle=N(N({},t.spacerStyle),dt({},"".concat(u),(d||[]).length*o+c+"px"))};n?(l("height",i,this.itemSize[0],r.y),l("width",this.columns||i[1],this.itemSize[1],r.x)):s?l("width",this.columns||i,this.itemSize,r.x):l("height",i,this.itemSize,r.y)}},setContentPosition:function(t){var i=this;if(this.content&&!this.appendOnly){var n=this.isBoth(),s=this.isHorizontal(),r=t?t.first:this.first,l=function(o,c){return o*c},a=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return i.contentStyle=N(N({},i.contentStyle),{transform:"translate3d(".concat(o,"px, ").concat(c,"px, 0)")})};if(n)a(l(r.cols,this.itemSize[1]),l(r.rows,this.itemSize[0]));else{var u=l(r,this.itemSize);s?a(u,0):a(0,u)}}},onScrollPositionChange:function(t){var i=this,n=t.target,s=this.isBoth(),r=this.isHorizontal(),l=this.getContentPosition(),a=function(p,w){return p?p>w?p-w:p:0},u=function(p,w){return Math.floor(p/(w||p))},d=function(p,w,H,K,I,F){return p<=I?I:F?H-K-I:w+I-1},o=function(p,w,H,K,I,F,q,ct){if(p<=F)return 0;var X=Math.max(0,q?p<w?H:p-F:p>w?H:p-2*F),tt=i.getLast(X,ct);return X>tt?tt-I:X},c=function(p,w,H,K,I,F){var q=w+K+2*I;return p>=I&&(q+=I+1),i.getLast(q,F)},h=a(n.scrollTop,l.top),$=a(n.scrollLeft,l.left),m=s?{rows:0,cols:0}:0,g=this.last,C=!1,P=this.lastScrollPos;if(s){var S=this.lastScrollPos.top<=h,k=this.lastScrollPos.left<=$;if(!this.appendOnly||this.appendOnly&&(S||k)){var f={rows:u(h,this.itemSize[0]),cols:u($,this.itemSize[1])},A={rows:d(f.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],S),cols:d(f.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],k)};m={rows:o(f.rows,A.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],S),cols:o(f.cols,A.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],k,!0)},g={rows:c(f.rows,m.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0]),cols:c(f.cols,m.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],!0)},C=m.rows!==this.first.rows||g.rows!==this.last.rows||m.cols!==this.first.cols||g.cols!==this.last.cols||this.isRangeChanged,P={top:h,left:$}}}else{var L=r?$:h,O=this.lastScrollPos<=L;if(!this.appendOnly||this.appendOnly&&O){var z=u(L,this.itemSize),B=d(z,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,O);m=o(z,B,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,O),g=c(z,m,this.last,this.numItemsInViewport,this.d_numToleratedItems),C=m!==this.first||g!==this.last||this.isRangeChanged,P=L}}return{first:m,last:g,isRangeChanged:C,scrollPos:P}},onScrollChange:function(t){var i=this.onScrollPositionChange(t),n=i.first,s=i.last,r=i.isRangeChanged,l=i.scrollPos;if(r){var a={first:n,last:s};if(this.setContentPosition(a),this.first=n,this.last=s,this.lastScrollPos=l,this.$emit("scroll-index-change",a),this.lazy&&this.isPageChanged(n)){var u,d,o={first:this.step?Math.min(this.getPageByFirst(n)*this.step,(((u=this.items)===null||u===void 0?void 0:u.length)||0)-this.step):n,last:Math.min(this.step?(this.getPageByFirst(n)+1)*this.step:s,((d=this.items)===null||d===void 0?void 0:d.length)||0)},c=this.lazyLoadState.first!==o.first||this.lazyLoadState.last!==o.last;c&&this.$emit("lazy-load",o),this.lazyLoadState=o}}},onScroll:function(t){var i=this;if(this.$emit("scroll",t),this.delay){if(this.scrollTimeout&&clearTimeout(this.scrollTimeout),this.isPageChanged()){if(!this.d_loading&&this.showLoader){var n=this.onScrollPositionChange(t),s=n.isRangeChanged,r=s||(this.step?this.isPageChanged():!1);r&&(this.d_loading=!0)}this.scrollTimeout=setTimeout(function(){i.onScrollChange(t),i.d_loading&&i.showLoader&&(!i.lazy||i.loading===void 0)&&(i.d_loading=!1,i.page=i.getPageByFirst())},this.delay)}}else this.onScrollChange(t)},onResize:function(){var t=this;this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){if(it(t.element)){var i=t.isBoth(),n=t.isVertical(),s=t.isHorizontal(),r=[T(t.element),V(t.element)],l=r[0],a=r[1],u=l!==t.defaultWidth,d=a!==t.defaultHeight,o=i?u||d:s?u:n?d:!1;o&&(t.d_numToleratedItems=t.numToleratedItems,t.defaultWidth=l,t.defaultHeight=a,t.defaultContentWidth=T(t.content),t.defaultContentHeight=V(t.content),t.init())}},this.resizeDelay)},bindResizeListener:function(){var t=this;this.resizeListener||(this.resizeListener=this.onResize.bind(this),window.addEventListener("resize",this.resizeListener),window.addEventListener("orientationchange",this.resizeListener),this.resizeObserver=new ResizeObserver(function(){t.onResize()}),this.resizeObserver.observe(this.element))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),window.removeEventListener("orientationchange",this.resizeListener),this.resizeListener=null),this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null)},getOptions:function(t){var i=(this.items||[]).length,n=this.isBoth()?this.first.rows+t:this.first+t;return{index:n,count:i,first:n===0,last:n===i-1,even:n%2===0,odd:n%2!==0}},getLoaderOptions:function(t,i){var n=this.loaderArr.length;return N({index:t,count:n,first:t===0,last:t===n-1,even:t%2===0,odd:t%2!==0},i)},getPageByFirst:function(t){return Math.floor(((t??this.first)+this.d_numToleratedItems*4)/(this.step||1))},isPageChanged:function(t){return this.step&&!this.lazy?this.page!==this.getPageByFirst(t??this.first):!0},setContentEl:function(t){this.content=t||this.content||zt(this.element,'[data-pc-section="content"]')},elementRef:function(t){this.element=t},contentRef:function(t){this.content=t}},computed:{containerClass:function(){return["p-virtualscroller",this.class,{"p-virtualscroller-inline":this.inline,"p-virtualscroller-both p-both-scroll":this.isBoth(),"p-virtualscroller-horizontal p-horizontal-scroll":this.isHorizontal()}]},contentClass:function(){return["p-virtualscroller-content",{"p-virtualscroller-loading":this.d_loading}]},loaderClass:function(){return["p-virtualscroller-loader",{"p-virtualscroller-loader-mask":!this.$slots.loader}]},loadedItems:function(){var t=this;return this.items&&!this.d_loading?this.isBoth()?this.items.slice(this.appendOnly?0:this.first.rows,this.last.rows).map(function(i){return t.columns?i:i.slice(t.appendOnly?0:t.first.cols,t.last.cols)}):this.isHorizontal()&&this.columns?this.items:this.items.slice(this.appendOnly?0:this.first,this.last):[]},loadedRows:function(){return this.d_loading?this.loaderDisabled?this.loaderArr:[]:this.loadedItems},loadedColumns:function(){if(this.columns){var t=this.isBoth(),i=this.isHorizontal();if(t||i)return this.d_loading&&this.loaderDisabled?t?this.loaderArr[0]:this.loaderArr:this.columns.slice(t?this.first.cols:this.first,t?this.last.cols:this.last)}return this.columns}},components:{SpinnerIcon:ut}},Le=["tabindex"];function Be(e,t,i,n,s,r){var l=It("SpinnerIcon");return e.disabled?(v(),y(G,{key:1},[x(e.$slots,"default"),x(e.$slots,"content",{items:e.items,rows:e.items,columns:r.loadedColumns})],64)):(v(),y("div",b({key:0,ref:r.elementRef,class:r.containerClass,tabindex:e.tabindex,style:e.style,onScroll:t[0]||(t[0]=function(){return r.onScroll&&r.onScroll.apply(r,arguments)})},e.ptmi("root")),[x(e.$slots,"content",{styleClass:r.contentClass,items:r.loadedItems,getItemOptions:r.getOptions,loading:s.d_loading,getLoaderOptions:r.getLoaderOptions,itemSize:e.itemSize,rows:r.loadedRows,columns:r.loadedColumns,contentRef:r.contentRef,spacerStyle:s.spacerStyle,contentStyle:s.contentStyle,vertical:r.isVertical(),horizontal:r.isHorizontal(),both:r.isBoth()},function(){return[_("div",b({ref:r.contentRef,class:r.contentClass,style:s.contentStyle},e.ptm("content")),[(v(!0),y(G,null,nt(r.loadedItems,function(a,u){return x(e.$slots,"item",{key:u,item:a,options:r.getOptions(u)})}),128))],16)]}),e.showSpacer?(v(),y("div",b({key:0,class:"p-virtualscroller-spacer",style:s.spacerStyle},e.ptm("spacer")),null,16)):Q("",!0),!e.loaderDisabled&&e.showLoader&&s.d_loading?(v(),y("div",b({key:1,class:r.loaderClass},e.ptm("loader")),[e.$slots&&e.$slots.loader?(v(!0),y(G,{key:0},nt(s.loaderArr,function(a,u){return x(e.$slots,"loader",{key:u,options:r.getLoaderOptions(u,r.isBoth()&&{numCols:e.d_numItemsInViewport.cols})})}),128)):Q("",!0),x(e.$slots,"loadingicon",{},function(){return[xt(l,b({spin:"",class:"p-virtualscroller-loading-icon"},e.ptm("loadingIcon")),null,16)]})],16)):Q("",!0)],16,Le))}ke.render=Be;export{Ae as O,Ee as R,Z as a,ae as b,ce as c,At as d,ut as e,ke as f,Vt as g,Nt as h,Yt as i,Zt as j,jt as k,te as s};
