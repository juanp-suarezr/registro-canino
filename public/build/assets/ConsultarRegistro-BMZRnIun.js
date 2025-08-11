import{B as P,o,c as n,q as k,d as e,K as A,i as b,a,u as p,w as u,F as w,Z as L,k as S,b as l,a2 as W,a1 as D,s as B,t as i,N as E}from"./app-Cb9PjypZ.js";import{A as K,_ as O}from"./PageLayout-BDvu0sWC.js";import{_ as U}from"./Pagination-C_ynhhfr.js";import{s as q}from"./index-ByAntTZV.js";import{_ as T}from"./TextInput-DN3OpuS2.js";import{_ as F}from"./SecondaryButton-vidMHGGF.js";import{N as H}from"./vue-easy-lightbox.esm.min-B1xqJ5ka.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as Z}from"./HomeIcon-K-iubrvH.js";import"./logo-D84yhy5B.js";var G=({dt:r})=>`
.p-progressspinner {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    display: inline-block;
}

.p-progressspinner::before {
    content: "";
    display: block;
    padding-top: 100%;
}

.p-progressspinner-spin {
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: p-progressspinner-rotate 2s linear infinite;
}

.p-progressspinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    stroke: ${r("progressspinner.colorOne")};
    animation: p-progressspinner-dash 1.5s ease-in-out infinite, p-progressspinner-color 6s ease-in-out infinite;
    stroke-linecap: round;
}

@keyframes p-progressspinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}
@keyframes p-progressspinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}
@keyframes p-progressspinner-color {
    100%,
    0% {
        stroke: ${r("progressspinner.color.one")};
    }
    40% {
        stroke: ${r("progressspinner.color.two")};
    }
    66% {
        stroke: ${r("progressspinner.color.three")};
    }
    80%,
    90% {
        stroke: ${r("progressspinner.color.four")};
    }
}
`,J={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},Q=P.extend({name:"progressspinner",style:G,classes:J}),X={name:"BaseProgressSpinner",extends:q,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:Q,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},I={name:"ProgressSpinner",extends:X,inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},Y=["fill","stroke-width"];function ee(r,$,v,h,c,d){return o(),n("div",k({class:r.cx("root"),role:"progressbar"},r.ptmi("root")),[(o(),n("svg",k({class:r.cx("spin"),viewBox:"25 25 50 50",style:d.svgStyle},r.ptm("spin")),[e("circle",k({class:r.cx("circle"),cx:"50",cy:"50",r:"20",fill:r.fill,"stroke-width":r.strokeWidth,strokeMiterlimit:"10"},r.ptm("circle")),null,16,Y)],16))],16)}I.render=ee;const se="/build/assets/perrito2-BCVB6cWq.png",re={class:"w-full !bg-option2 relative"},te={class:"w-full text-sm px-2 md:px-16 pt-8"},oe={class:"w-full h-full flex"},ne={class:"w-full px-6 flex sm:flex-row flex-col-reverse flex-wrap bg-gradient-to-t from-option1 via-white to-option2"},le={class:"sm:w-[35%] w-full h-full"},ie={class:"w-full flex inline-flex justify-center"},ae=["src"],de={class:"sm:w-[60%] w-full"},pe={class:"mt-12"},ue={class:"bg-white shadow-md rounded-lg p-4"},ce={class:"sm:flex items-center gap-2 mt-2 h-full"},ge={class:"mt-6"},fe={class:"bg-white shadow-md rounded-lg p-4"},me={key:0,class:"w-full overflow-x-auto"},be={class:"table-medium w-full border-collapse border border-gray-200"},ye={class:"border border-gray-300 px-4 py-2"},xe={class:"border border-gray-300 px-4 py-2 break-words"},ve={class:"border border-gray-300 px-4 py-2"},he={class:"border border-gray-300 px-4 py-2"},_e={class:"border border-gray-300 px-4 py-2"},ke={class:"border border-gray-300 px-4 py-2"},we={class:"border border-gray-300 px-4 py-2"},Se=["src","onClick"],$e={key:1},Ce={class:"table-responsive grid grid-cols-1 gap-4 sm:hidden"},je=["src","onClick"],Ne={key:1},Be={key:1,class:"w-full flex justify-center items-center"},Ee={key:2,class:"w-full flex justify-center items-center"},Fe={key:0,class:"text-xl"},Ie={key:1,class:"w-1/2 flex justify-center items-center"},Re={class:"bg-azul rounded-md shadow-lg p-4"},Ve={class:"text-white sm:text-2xl text-xl text-center"},ze={__name:"ConsultarRegistro",props:{registro:{type:Object},filters:{type:Object,default:()=>({})}},setup(r){K.init();const $=A("$swal"),v=r,h=b(!1),c=b(!1);console.log(v);let d=b(v.filters.identificacion);const C=b(""),_=b(!1),j=x=>{C.value=x,_.value=!0},R=()=>{_.value=!1},y=x=>`/storage/uploads/caninos/${x}`,N=()=>{c.value=!0,E.get("/consultar",{identificacion:d.value},{onSuccess:()=>{c.value=!1,h.value=!0},onError:()=>{c.value=!1,$.fire({icon:"error",title:"Error",text:"No se encontraron registros."})}},{preserveState:!0,replace:!0})},V=()=>{d.value="",E.get("/consultar",{identificacion:d.value},{replace:!0})};return(x,s)=>(o(),n(w,null,[a(p(L),{title:"Consultar registro"}),a(O,null,{default:u(()=>[e("div",re,[e("div",te,[e("div",oe,[a(p(S),{class:"text-indigo-600 hover:text-indigo-400 inline-flex pe-2",href:"/Welcome"},{default:u(()=>[a(p(Z),{class:"w-6 h-6 pe-2"}),s[1]||(s[1]=l(" Inicio "))]),_:1}),s[2]||(s[2]=l(" / Consultar registro "))]),s[3]||(s[3]=e("h1",{class:"text-lg sm:text-xl md:text-2xl mt-6 font-bold !font-sans"}," Consultar registro de caninos ",-1))])]),e("div",ne,[e("div",le,[e("div",ie,[e("img",{class:"w-full object-cover z-20",src:p(se),alt:"imagen de perrito jugando",title:"perrito jugando"},null,8,ae),s[4]||(s[4]=e("figcaption",{lang:"es",class:"hidden"}," Esta es una imagen de un canino jugando ",-1))])]),e("div",de,[e("div",pe,[e("div",ue,[s[7]||(s[7]=e("span",{class:"sm:text-lg mb-4"}," Ingresar número de identificación para consultar los caninos registrados a su nombre ",-1)),e("div",ce,[a(T,{id:"identificacion",modelValue:p(d),"onUpdate:modelValue":s[0]||(s[0]=t=>W(d)?d.value=t:d=t),placeholder:"Ingrese el número de identificación",class:"w-full mb-2",onKeydown:D(N,["enter"])},null,8,["modelValue"]),a(F,{class:"bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium text-white",onClick:N},{default:u(()=>s[5]||(s[5]=[l("Buscar")])),_:1}),a(F,{onClick:V,class:"hover:underline"},{default:u(()=>s[6]||(s[6]=[l(" Limpiar ")])),_:1})])])]),e("div",ge,[e("div",fe,[r.registro.data.length>0?(o(),n("div",me,[e("table",be,[s[8]||(s[8]=e("thead",{class:"bg-gray-100"},[e("tr",null,[e("th",{class:"border border-gray-300 px-4 py-2 text-left"}," # "),e("th",{class:"border border-gray-300 px-4 py-2 text-left"}," Nombre del Usuario "),e("th",{class:"border border-gray-300 px-4 py-2 text-left"}," Nombre del Canino "),e("th",{class:"border border-gray-300 px-4 py-2 text-left"}," Raza "),e("th",{class:"border border-gray-300 px-4 py-2 text-left"}," Edad "),e("th",{class:"border border-gray-300 px-4 py-2 text-left"}," Sexo "),e("th",{class:"border border-gray-300 px-4 py-2 text-left"}," Foto ")])],-1)),e("tbody",null,[(o(!0),n(w,null,B(r.registro.data,(t,g)=>{var f,m;return o(),n("tr",{key:g},[e("td",ye,i(g+1),1),e("td",xe,i(((m=(f=t.user)==null?void 0:f.informacion_usuario)==null?void 0:m.nombre_completo)||"Sin información"),1),e("td",ve,i(t.nombre),1),e("td",he,i(t.raza),1),e("td",_e,i(t.edad_canino),1),e("td",ke,i(t.sexo),1),e("td",we,[t.foto_url?(o(),n("img",{key:0,src:y(t.foto_url),alt:"Foto del canino",class:"sm:w-52 sm:h-32 object-cover rounded-full cursor-pointer",onClick:z=>j(y(t.foto_url))},null,8,Se)):(o(),n("span",$e,"No disponible"))])])}),128))])]),e("div",Ce,[(o(!0),n(w,null,B(r.registro.data,(t,g)=>{var f,m;return o(),n("div",{key:g,class:"border border-gray-300 rounded-lg p-4 shadow-md"},[e("p",null,[s[9]||(s[9]=e("strong",null,"#:",-1)),l(" "+i(g+1),1)]),e("p",null,[s[10]||(s[10]=e("strong",null,"Nombre del Usuario:",-1)),l(" "+i(((m=(f=t.user)==null?void 0:f.informacion_usuario)==null?void 0:m.nombre_completo)||"Sin información"),1)]),e("p",null,[s[11]||(s[11]=e("strong",null,"Nombre del Canino:",-1)),l(" "+i(t.nombre),1)]),e("p",null,[s[12]||(s[12]=e("strong",null,"Raza:",-1)),l(" "+i(t.raza),1)]),e("p",null,[s[13]||(s[13]=e("strong",null,"Edad:",-1)),l(" "+i(t.edad_canino),1)]),e("p",null,[s[14]||(s[14]=e("strong",null,"Sexo:",-1)),l(" "+i(t.sexo),1)]),e("div",null,[s[15]||(s[15]=e("strong",null,"Foto:",-1)),t.foto_url?(o(),n("img",{key:0,src:y(t.foto_url),alt:"Foto del canino",class:"w-full h-44 object-contain rounded-md mt-2 cursor-pointer",onClick:z=>j(y(t.foto_url))},null,8,je)):(o(),n("span",Ne,"No disponible"))])])}),128))])])):c.value?(o(),n("div",Be,[a(p(I),{style:{width:"50px",height:"50px"},strokeWidth:"8",fill:"transparent",animationDuration:".5s","aria-label":"Custom ProgressSpinner"})])):(o(),n("div",Ee,[p(d)&&h.value?(o(),n("em",Fe,[l("No hay caninos registrados al usuario con numero de identificación --> "+i(p(d))+". ",1),s[17]||(s[17]=e("br",null,null,-1)),s[18]||(s[18]=l(" Sí no esta registrado, por favor dirígete a la opción de ")),a(p(S),{class:"text-blue-500 hover:text-blue-700",href:"/register"},{default:u(()=>s[16]||(s[16]=[e("strong",null,"Registrar canino",-1)])),_:1})])):(o(),n("div",Ie,[e("div",Re,[e("h3",Ve,[s[20]||(s[20]=l(" Registrarse como usuario y añadir el canino, dando click ")),a(p(S),{class:"text-blue-500 hover:text-blue-700",href:"/register"},{default:u(()=>s[19]||(s[19]=[e("strong",null,"Aquí",-1)])),_:1})])])]))])),a(U,{links:r.registro.links,class:"mt-4"},null,8,["links"])])])])])]),_:1}),a(p(H),{visible:_.value,imgs:[C.value],onHide:R},null,8,["visible","imgs"])],64))}},He=M(ze,[["__scopeId","data-v-05bdc41a"]]);export{He as default};
