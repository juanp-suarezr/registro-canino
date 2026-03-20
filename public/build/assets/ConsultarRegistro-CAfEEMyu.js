import{B as K,o,c as n,q as j,d as e,K as U,i as c,a,u as d,w as u,f as w,F as N,Z as q,k as V,b as i,a3 as T,a2 as H,s as R,t as l,n as A,l as P,O as L}from"./app-DacohUe7.js";import{A as M,_ as Z}from"./PageLayout-XuMtZmvD.js";import{_ as G}from"./Pagination-DzNQQzFh.js";import{s as J}from"./index-BbuNuGMg.js";import{_ as Q}from"./TextInput-Dea03L2D.js";import{_ as C}from"./SecondaryButton-CSkdYuBD.js";import{N as X}from"./vue-easy-lightbox.esm.min-Cv80cvxD.js";import{_ as Y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as ee}from"./HomeIcon-BoZWwsAB.js";import"./logo-CMdZr9l8.js";var se=({dt:r})=>`
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
`,te={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},re=K.extend({name:"progressspinner",style:se,classes:te}),oe={name:"BaseProgressSpinner",extends:J,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:re,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},O={name:"ProgressSpinner",extends:oe,inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},ne=["fill","stroke-width"];function le(r,B,x,y,v,h){return o(),n("div",j({class:r.cx("root"),role:"progressbar"},r.ptmi("root")),[(o(),n("svg",j({class:r.cx("spin"),viewBox:"25 25 50 50",style:h.svgStyle},r.ptm("spin")),[e("circle",j({class:r.cx("circle"),cx:"50",cy:"50",r:"20",fill:r.fill,"stroke-width":r.strokeWidth,strokeMiterlimit:"10"},r.ptm("circle")),null,16,ne)],16))],16)}O.render=le;const ie="/build/assets/perrito2-BCVB6cWq.png",ae={class:"w-full !bg-option2 relative"},de={class:"w-full text-sm px-2 md:px-16 pt-8"},pe={class:"w-full h-full flex"},ue={class:"w-full px-6 flex sm:flex-row flex-col-reverse flex-wrap bg-gradient-to-t from-option1 via-white to-option2"},ce={class:"sm:w-[35%] w-full h-full"},fe={class:"w-full flex inline-flex justify-center"},ge=["src"],me={class:"sm:w-[60%] w-full"},be={class:"mt-12"},xe={class:"bg-white shadow-md rounded-lg p-4"},ye={class:"sm:flex items-center gap-2 mt-2 h-full"},ve={class:"mt-6"},he={class:"bg-white shadow-md rounded-lg p-4"},_e={key:0,class:"w-full overflow-x-auto"},ke={class:"table-medium w-full border-collapse border border-gray-200"},we={class:"border border-gray-300 px-4 py-2"},Ce={class:"border border-gray-300 px-4 py-2 break-words"},$e={class:"border border-gray-300 px-4 py-2"},Se={class:"border border-gray-300 px-4 py-2"},je={class:"border border-gray-300 px-4 py-2"},Ne={class:"border border-gray-300 px-4 py-2"},Ve={class:"border border-gray-300 px-4 py-2"},Be={class:"border border-gray-300 px-4 py-2"},ze={class:"border border-gray-300 px-4 py-2"},Ee=["src","onClick"],Fe={key:1},Ie={class:"border border-gray-300 px-4 py-2"},Re={class:"table-responsive grid grid-cols-1 gap-4 sm:hidden"},Ae=["src","onClick"],Pe={key:1},Le={key:1,class:"w-full flex justify-center items-center"},Oe={key:2,class:"w-full flex justify-center items-center"},We={key:0,class:"text-xl"},De={key:1,class:"w-1/2 flex justify-center items-center"},Ke={class:"bg-azul rounded-md shadow-lg p-4"},Ue={class:"text-white sm:text-2xl text-xl text-center"},qe={key:0,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"},Te={class:"bg-white rounded-lg shadow-lg w-full lg:mx-24 mx-4 h-[90%]"},He={class:"flex justify-between items-center p-4 border-b"},Me={class:"px-2 pt-2 pb-2"},Ze=["src"],Ge={__name:"ConsultarRegistro",props:{registro:{type:Object},filters:{type:Object,default:()=>({})}},setup(r){M.init();const B=U("$swal"),x=r;console.log(x.registro);const y=c(""),v=c(!1),h=c(!1),_=c(!1);console.log(x);let p=c(x.filters.identificacion);const z=c(""),$=c(!1),E=f=>{z.value=f,$.value=!0},W=()=>{$.value=!1},k=f=>`/storage/uploads/caninos/${f}`,F=()=>{_.value=!0,L.get("/consultar",{identificacion:p.value},{onSuccess:()=>{_.value=!1,h.value=!0},onError:()=>{_.value=!1,B.fire({icon:"error",title:"Error",text:"No se encontraron registros."})}},{preserveState:!0,replace:!0})},D=()=>{p.value="",L.get("/consultar",{identificacion:p.value},{replace:!0})},I=f=>{y.value=route("certificados.ver",f),v.value=!0};return(f,s)=>(o(),n(N,null,[a(d(q),{title:"Consultar registro"}),a(Z,null,{default:u(()=>[e("div",ae,[e("div",de,[e("div",pe,[a(d(V),{class:"text-indigo-600 hover:text-indigo-400 inline-flex pe-2",href:"/Welcome"},{default:u(()=>[a(d(ee),{class:"w-6 h-6 pe-2"}),s[2]||(s[2]=i(" Inicio "))]),_:1}),s[3]||(s[3]=i(" / Consultar registro "))]),s[4]||(s[4]=e("h1",{class:"text-lg sm:text-xl md:text-2xl mt-6 font-bold !font-sans"}," Consultar registro de caninos ",-1))])]),e("div",ue,[e("div",ce,[e("div",fe,[e("img",{class:"w-full object-cover z-20",src:d(ie),alt:"imagen de perrito jugando",title:"perrito jugando"},null,8,ge),s[5]||(s[5]=e("figcaption",{lang:"es",class:"hidden"}," Esta es una imagen de un canino jugando ",-1))])]),e("div",me,[e("div",be,[e("div",xe,[s[8]||(s[8]=e("span",{class:"sm:text-lg mb-4"}," Ingresar número de identificación para consultar los caninos registrados a su nombre ",-1)),e("div",ye,[a(Q,{id:"identificacion",modelValue:d(p),"onUpdate:modelValue":s[0]||(s[0]=t=>T(p)?p.value=t:p=t),placeholder:"Ingrese el número de identificación",class:"w-full mb-2",onKeydown:H(F,["enter"])},null,8,["modelValue"]),a(C,{class:"bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium text-white",onClick:F},{default:u(()=>s[6]||(s[6]=[i("Buscar")])),_:1}),a(C,{onClick:D,class:"hover:underline"},{default:u(()=>s[7]||(s[7]=[i(" Limpiar ")])),_:1})])])]),e("div",ve,[e("div",he,[r.registro.data.length>0?(o(),n("div",_e,[e("table",ke,[s[10]||(s[10]=e("thead",{class:"bg-gray-100"},[e("tr",null,[e("th",{class:"border border-gray-300 px-4 py-2 text-left"}," # "),e("th",{class:"border border-gray-300 px-4 py-2 text-left"}," Nombre del Usuario "),e("th",{class:"border border-gray-300 px-4 py-2 text-left"}," Nombre del Canino "),e("th",{class:"border border-gray-300 px-4 py-2 text-left"}," Raza "),e("th",{class:"border border-gray-300 px-2 py-2 text-left"}," Edad "),e("th",{class:"border border-gray-300 px-2 py-2 text-left"}," Sexo "),e("th",{class:"border border-gray-300 px-4 py-2 text-left"}," fecha vencimiento "),e("th",{class:"border border-gray-300 px-4 py-2 text-left"}," estado "),e("th",{class:"border border-gray-300 px-2 py-2 text-left"}," Foto "),e("th",{class:"border border-gray-300 px-4 py-2 text-left"}," Acciones ")])],-1)),e("tbody",null,[(o(!0),n(N,null,R(r.registro.data,(t,g)=>{var m,b;return o(),n("tr",{key:g},[e("td",we,l(g+1),1),e("td",Ce,l(((b=(m=t.user)==null?void 0:m.informacion_usuario)==null?void 0:b.nombre_completo)||"Sin información"),1),e("td",$e,l(t.nombre),1),e("td",Se,l(t.raza),1),e("td",je,l(t.edad_canino),1),e("td",Ne,l(t.sexo),1),e("td",Ve,l(t.certificado?t.certificado.fecha_vencimiento:"No disponible"),1),e("td",Be,[e("span",{class:A(["text-green-200 bg-green-600 p-2 rounded-md",{"text-red-200 bg-red-600":t.estado==="Vencido"}])},l(t.estado),3)]),e("td",ze,[t.foto_url?(o(),n("img",{key:0,src:k(t.foto_url),alt:"Foto del canino",class:"w-full object-contain rounded-md cursor-pointer",onClick:S=>E(k(t.foto_url))},null,8,Ee)):(o(),n("span",Fe,"No disponible"))]),e("td",Ie,[t.certificado?(o(),P(C,{key:0,class:"border-blue-800 hover:!bg-blue-200",onClick:S=>I(t.certificado.id)},{default:u(()=>s[9]||(s[9]=[i(" Ver certificado ")])),_:2},1032,["onClick"])):w("",!0)])])}),128))])]),e("div",Re,[(o(!0),n(N,null,R(r.registro.data,(t,g)=>{var m,b;return o(),n("div",{key:g,class:"border border-gray-300 rounded-lg p-4 shadow-md"},[e("p",null,[s[11]||(s[11]=e("strong",null,"#:",-1)),i(" "+l(g+1),1)]),e("p",null,[s[12]||(s[12]=e("strong",null,"Nombre del Usuario:",-1)),i(" "+l(((b=(m=t.user)==null?void 0:m.informacion_usuario)==null?void 0:b.nombre_completo)||"Sin información"),1)]),e("p",null,[s[13]||(s[13]=e("strong",null,"Nombre del Canino:",-1)),i(" "+l(t.nombre),1)]),e("p",null,[s[14]||(s[14]=e("strong",null,"Raza:",-1)),i(" "+l(t.raza),1)]),e("p",null,[s[15]||(s[15]=e("strong",null,"Edad:",-1)),i(" "+l(t.edad_canino),1)]),e("p",null,[s[16]||(s[16]=e("strong",null,"Sexo:",-1)),i(" "+l(t.sexo),1)]),e("p",null,[s[17]||(s[17]=e("strong",null,"Fecha vencimiento:",-1)),i(" "+l(t.certificado?t.certificado.fecha_vencimiento:"No disponible"),1)]),e("p",null,[s[18]||(s[18]=e("strong",null,"Estado:",-1)),e("span",{class:A(["ms-2 text-green-200 bg-green-600 p-1 rounded-md",{"text-red-200 bg-red-600":t.estado==="Vencido"}])},l(t.estado),3)]),e("div",null,[s[20]||(s[20]=e("strong",null,"Foto:",-1)),t.foto_url?(o(),n("img",{key:0,src:k(t.foto_url),alt:"Foto del canino",class:"w-full h-44 object-contain rounded-md mt-2 cursor-pointer",onClick:S=>E(k(t.foto_url))},null,8,Ae)):(o(),n("span",Pe,"No disponible")),t.certificado?(o(),P(C,{key:2,class:"border-blue-800 hover:!bg-blue-200 mt-2",onClick:S=>I(t.certificado.id)},{default:u(()=>s[19]||(s[19]=[i(" Ver certificado ")])),_:2},1032,["onClick"])):w("",!0)])])}),128))])])):_.value?(o(),n("div",Le,[a(d(O),{style:{width:"50px",height:"50px"},strokeWidth:"8",fill:"transparent",animationDuration:".5s","aria-label":"Custom ProgressSpinner"})])):(o(),n("div",Oe,[d(p)&&h.value?(o(),n("em",We,[i("No hay caninos registrados al usuario con numero de identificación --> "+l(d(p))+". ",1),s[22]||(s[22]=e("br",null,null,-1)),s[23]||(s[23]=i(" Sí no esta registrado, por favor dirígete a la opción de ")),a(d(V),{class:"text-blue-500 hover:text-blue-700",href:"/register"},{default:u(()=>s[21]||(s[21]=[e("strong",null,"Registrar canino",-1)])),_:1})])):(o(),n("div",De,[e("div",Ke,[e("h3",Ue,[s[25]||(s[25]=i(" Registrarse como usuario y añadir el canino, dando click ")),a(d(V),{class:"text-blue-500 hover:text-blue-700",href:"/register"},{default:u(()=>s[24]||(s[24]=[e("strong",null,"Aquí",-1)])),_:1})])])]))])),a(G,{links:r.registro.links,class:"mt-4"},null,8,["links"])])])])])]),_:1}),a(d(X),{visible:$.value,imgs:[z.value],onHide:W},null,8,["visible","imgs"]),v.value?(o(),n("div",qe,[e("div",Te,[e("div",He,[s[26]||(s[26]=e("h2",{class:"text-xl font-bold text-gray-800"},"Vista del Certificado",-1)),e("button",{class:"text-gray-500 hover:text-gray-800",onClick:s[1]||(s[1]=t=>v.value=!1)}," ✕ ")]),e("div",Me,[y.value?(o(),n("iframe",{key:0,src:y.value,class:"w-full h-[70vh] rounded"},null,8,Ze)):w("",!0)])])])):w("",!0)],64))}},ls=Y(Ge,[["__scopeId","data-v-b77a55c7"]]);export{ls as default};
