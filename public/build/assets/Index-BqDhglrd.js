import{B as A,o,c as i,H as E,q as v,t as c,l as j,n as q,x as C,f as k,i as $,j as V,a as u,u as y,w as h,F as x,Z as L,b as w,d as t,h as _,M as N,a1 as z,R as F,S as K,s as S,O}from"./app-C3Vj7b-A.js";import{_ as U}from"./AuthenticatedLayout-B4tedMpf.js";import{_ as D}from"./PrimaryLink-B43W5bsm.js";import{_ as I}from"./Pagination-O6KutQSN.js";import{_ as M}from"./SecondaryLink-DdX6Vlhx.js";import{c as R}from"./index-Be1fzYNM.js";import{s as T}from"./index-B5dlSfmX.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./logo_white-NQYS-MzD.js";import"./HomeIcon-BCpCDXPz.js";var Z=({dt:e})=>`
.p-avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${e("avatar.width")};
    height: ${e("avatar.height")};
    font-size: ${e("avatar.font.size")};
    background: ${e("avatar.background")};
    color: ${e("avatar.color")};
    border-radius: ${e("avatar.border.radius")};
}

.p-avatar-image {
    background: transparent;
}

.p-avatar-circle {
    border-radius: 50%;
}

.p-avatar-circle img {
    border-radius: 50%;
}

.p-avatar-icon {
    font-size: ${e("avatar.icon.size")};
    width: ${e("avatar.icon.size")};
    height: ${e("avatar.icon.size")};
}

.p-avatar img {
    width: 100%;
    height: 100%;
}

.p-avatar-lg {
    width: ${e("avatar.lg.width")};
    height: ${e("avatar.lg.width")};
    font-size: ${e("avatar.lg.font.size")};
}

.p-avatar-lg .p-avatar-icon {
    font-size: ${e("avatar.lg.icon.size")};
    width: ${e("avatar.lg.icon.size")};
    height: ${e("avatar.lg.icon.size")};
}

.p-avatar-xl {
    width: ${e("avatar.xl.width")};
    height: ${e("avatar.xl.width")};
    font-size: ${e("avatar.xl.font.size")};
}

.p-avatar-xl .p-avatar-icon {
    font-size: ${e("avatar.xl.icon.size")};
    width: ${e("avatar.xl.icon.size")};
    height: ${e("avatar.xl.icon.size")};
}

.p-avatar-group {
    display: flex;
    align-items: center;
}

.p-avatar-group .p-avatar + .p-avatar {
    margin-inline-start: ${e("avatar.group.offset")};
}

.p-avatar-group .p-avatar {
    border: 2px solid ${e("avatar.group.border.color")};
}

.p-avatar-group .p-avatar-lg + .p-avatar-lg {
    margin-inline-start: ${e("avatar.lg.group.offset")};
}

.p-avatar-group .p-avatar-xl + .p-avatar-xl {
    margin-inline-start: ${e("avatar.xl.group.offset")};
}
`,H={root:function(a){var n=a.props;return["p-avatar p-component",{"p-avatar-image":n.image!=null,"p-avatar-circle":n.shape==="circle","p-avatar-lg":n.size==="large","p-avatar-xl":n.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},G=A.extend({name:"avatar",style:Z,classes:H}),J={name:"BaseAvatar",extends:T,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:G,provide:function(){return{$pcAvatar:this,$parentInstance:this}}};function f(e){"@babel/helpers - typeof";return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},f(e)}function B(e,a,n){return(a=Q(a))in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function Q(e){var a=W(e,"string");return f(a)=="symbol"?a:a+""}function W(e,a){if(f(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var l=n.call(e,a);if(f(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}var P={name:"Avatar",extends:J,inheritAttrs:!1,emits:["error"],methods:{onError:function(a){this.$emit("error",a)}},computed:{dataP:function(){return R(B(B({},this.shape,this.shape),this.size,this.size))}}},X=["aria-labelledby","aria-label","data-p"],Y=["data-p"],ee=["data-p"],te=["src","alt","data-p"];function ae(e,a,n,l,m,d){return o(),i("div",v({class:e.cx("root"),"aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel},e.ptmi("root"),{"data-p":d.dataP}),[E(e.$slots,"default",{},function(){return[e.label?(o(),i("span",v({key:0,class:e.cx("label")},e.ptm("label"),{"data-p":d.dataP}),c(e.label),17,Y)):e.$slots.icon?(o(),j(C(e.$slots.icon),{key:1,class:q(e.cx("icon"))},null,8,["class"])):e.icon?(o(),i("span",v({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon"),{"data-p":d.dataP}),null,16,ee)):e.image?(o(),i("img",v({key:3,src:e.image,alt:e.ariaLabel,onError:a[0]||(a[0]=function(){return d.onError&&d.onError.apply(d,arguments)})},e.ptm("image"),{"data-p":d.dataP}),null,16,te)):k("",!0)]})],16,X)}P.render=ae;const re={class:"inline-block min-w-full overflow-hidden mb-3 grid md:grid-cols-3 gap-4"},se={class:"..."},ne={class:"relative"},oe={class:"text-right p-4"},ie={class:"flex flex-col overflow-x-auto"},le={class:"inline-block rounded-lg shadow"},de={class:"inline-block min-w-full py-2"},pe={class:"overflow-x-auto"},ue={class:"min-w-full whitespace-no-wrap"},ce={class:"border-b border-gray-200 bg-white px-5 py-5 text-sm"},ge={class:"border-b border-gray-200 bg-white px-5 py-5 text-sm"},be={class:"text-gray-900 whitespace-no-wrap"},fe={class:"border-b border-gray-200 bg-white px-5 py-5 text-sm"},me={class:"text-gray-900 whitespace-no-wrap"},ve={class:"border-b border-gray-200 bg-white px-5 py-5 text-sm"},ye={class:"border-b border-gray-200 bg-white px-5 py-5 text-sm"},he={key:0,class:"bg-lime-500 text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded"},xe={key:1,class:"bg-red-500 text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-500"},we={class:"border-b border-gray-200 bg-white px-5 py-5 text-sm"},ke={class:"flex flex-col items-center border-t bg-white px-5 py-5 xs:flex-row xs:justify-between"},Ce={__name:"Index",props:{users:{type:Object,default:()=>({})},filters:{type:Object,default:()=>({})}},setup(e){const a=e;let n=$(a.filters.search),l=$(a.filters.estado_users??"");const m=()=>{O.get("/users",{search:n.value,estado_users:l.value},{preserveState:!0,replace:!0})},d=function(p){let r=p.split(" "),s="",g=0;for(var b=0;b<r.length&&g<2;b++)r[b].length>0&&r[b]!==""&&(s+=r[b][0],g++);return s};return V(n,p=>{console.log("Valor de búsqueda actualizado:",p)}),(p,r)=>(o(),i(x,null,[u(y(L),{title:"Usuarios"}),u(U,null,{header:h(()=>r[2]||(r[2]=[w(" Usuarios ")])),default:h(()=>[t("div",re,[t("div",null,[_(t("select",{id:"estado_users",name:"estado_users","onUpdate:modelValue":r[0]||(r[0]=s=>z(l)?l.value=s:l=s),onChange:m,class:"block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"},r[3]||(r[3]=[t("option",{selected:"",value:""},"Filtrar por estado",-1),t("option",{value:"Activo"},"Activo",-1),t("option",{value:"Bloqueado"},"Bloqueado",-1)]),544),[[N,y(l)]])]),t("div",se,[r[5]||(r[5]=t("label",{for:"default-search",class:"mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"},"Search",-1)),t("div",ne,[r[4]||(r[4]=t("div",{class:"absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"},[t("svg",{class:"w-4 h-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20"},[t("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"})])],-1)),_(t("input",{type:"search",onKeydown:K(m,["enter"]),"onUpdate:modelValue":r[1]||(r[1]=s=>z(n)?n.value=s:n=s),id:"default-search",class:"block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-0 focus:border-transparent",placeholder:"Busqueda de usuarios",required:""},null,544),[[F,y(n)]]),t("button",{type:"submit",onClick:m,class:"text-white absolute end-2.5 bottom-2.5 bg-sky-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-sky-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},"Buscar")])]),t("div",oe,[u(D,{href:p.route("users.create")},{default:h(()=>r[6]||(r[6]=[w(" Agregar ")])),_:1},8,["href"])])]),t("div",ie,[t("div",le,[t("div",de,[t("div",pe,[t("table",ue,[r[8]||(r[8]=t("thead",null,[t("tr",{class:"border-b bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500"},[t("th",{colspan:"2",class:"border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"}," Nombre "),t("th",{class:"border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"}," Email "),t("th",{class:"border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"}," Roles "),t("th",{class:"border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"}," Estado "),t("th",{class:"border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600"}," Acciones ")])],-1)),t("tbody",null,[(o(!0),i(x,null,S(e.users.data,s=>(o(),i("tr",{key:s.id,class:"text-gray-700"},[t("td",ce,[u(y(P),{label:d(s.name),class:"bg-indigo-200 text-indigo-800 text-xl",size:"large",shape:"circle"},null,8,["label"])]),t("td",ge,[t("p",be,c(s.name),1)]),t("td",fe,[t("p",me,c(s.email),1)]),t("td",ve,[(o(!0),i(x,null,S(s.roles,g=>(o(),i("span",{key:g.id,class:"bg-indigo-100 text-indigo-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded"},c(g.name),1))),128))]),t("td",ye,[s.estado=="Activo"?(o(),i("span",he,c(s.estado),1)):k("",!0),s.estado=="Bloqueado"?(o(),i("span",xe,c(s.estado),1)):k("",!0)]),t("td",we,[u(M,{href:p.route("users.edit",s.id)},{default:h(()=>r[7]||(r[7]=[w(" Editar ")])),_:2},1032,["href"])])]))),128))])])])])])]),t("div",ke,[u(I,{links:e.users.links},null,8,["links"])])]),_:1})],64))}};export{Ce as default};
