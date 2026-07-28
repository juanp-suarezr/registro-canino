import{B as U,o,c as n,q as N,d as e,K as q,i as c,a,u as d,w as u,f as C,F as V,Z as T,k as B,b as i,a1 as H,S as M,s as A,t as l,n as P,l as L,O}from"./app-OheQZcdY.js";import{A as Z,_ as G}from"./PageLayout-ytmpw3X-.js";import{_ as J}from"./Pagination-DgKyBUEF.js";import{s as Q}from"./index-CG9aqFe4.js";import{_ as X}from"./TextInput-B1gTJ0be.js";import{_ as S}from"./SecondaryButton-VXKnlcqz.js";import{N as Y}from"./vue-easy-lightbox.esm.min-CNFqikDo.js";import{_ as ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as se}from"./HomeIcon-lYUDnbT7.js";import"./logo-BtsHgyqK.js";var te=({dt:r})=>`
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
`,re={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},oe=U.extend({name:"progressspinner",style:te,classes:re}),ne={name:"BaseProgressSpinner",extends:Q,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:oe,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},W={name:"ProgressSpinner",extends:ne,inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},le=["fill","stroke-width"];function ie(r,z,y,v,h,_){return o(),n("div",N({class:r.cx("root"),role:"progressbar"},r.ptmi("root")),[(o(),n("svg",N({class:r.cx("spin"),viewBox:"25 25 50 50",style:_.svgStyle},r.ptm("spin")),[e("circle",N({class:r.cx("circle"),cx:"50",cy:"50",r:"20",fill:r.fill,"stroke-width":r.strokeWidth,strokeMiterlimit:"10"},r.ptm("circle")),null,16,le)],16))],16)}W.render=ie;const ae="/build/assets/perrito2-BCVB6cWq.png",de={class:"w-full !bg-option2 relative"},pe={class:"w-full text-sm px-2 md:px-16 pt-8"},ue={class:"w-full h-full flex"},ce={class:"w-full px-6 flex sm:flex-row flex-col-reverse flex-wrap bg-gradient-to-t from-option1 via-white to-option2"},fe={class:"sm:w-[35%] w-full h-full"},ge={class:"w-full flex inline-flex justify-center"},me=["src"],be={class:"sm:w-[60%] w-full"},xe={class:"mt-12"},ye={class:"bg-white shadow-md rounded-lg p-4"},ve={class:"sm:flex items-center gap-2 mt-2 h-full"},he={class:"mt-6"},_e={class:"bg-white shadow-md rounded-lg p-4"},ke={key:0,class:"w-full overflow-x-auto"},we={class:"table-medium w-full border-collapse border border-gray-200"},Ce={class:"border border-gray-300 px-4 py-2"},Se={class:"border border-gray-300 px-4 py-2 break-words"},$e={class:"border border-gray-300 px-4 py-2"},je={class:"border border-gray-300 px-4 py-2"},Ne={class:"border border-gray-300 px-4 py-2"},Ve={class:"border border-gray-300 px-4 py-2"},Be={class:"border border-gray-300 px-4 py-2"},ze={class:"border border-gray-300 px-4 py-2"},Ee={class:"border border-gray-300 px-4 py-2"},Fe=["src","onClick"],Ie={key:1},Re={class:"border border-gray-300 px-4 py-2"},Ae={class:"table-responsive grid grid-cols-1 gap-4 sm:hidden"},Pe=["src","onClick"],Le={key:1},Oe={key:1,class:"w-full flex justify-center items-center"},We={key:2,class:"w-full flex justify-center items-center"},De={key:0,class:"text-xl"},Ke={key:1,class:"w-1/2 flex justify-center items-center"},Ue={class:"bg-azul rounded-md shadow-lg p-4"},qe={class:"text-white sm:text-2xl text-xl text-center"},Te={key:0,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"},He={class:"bg-white rounded-lg shadow-lg w-full lg:mx-24 mx-4 h-[90%]"},Me={class:"flex justify-between items-center p-4 border-b"},Ze={class:"px-2 pt-2 pb-2"},Ge=["src"],Je={__name:"ConsultarRegistro",props:{registro:{type:Object},filters:{type:Object,default:()=>({})}},setup(r){Z.init();const z=q("$swal"),y=r;console.log(y.registro);const v=c(""),h=c(!1),_=c(!1),k=c(!1);console.log(y);let p=c(y.filters.identificacion);const E=c(""),$=c(!1),F=f=>{E.value=f,$.value=!0},D=()=>{$.value=!1},w=f=>`/storage/uploads/caninos/${f}`,I=()=>{k.value=!0,O.get("/consultar",{identificacion:p.value},{onSuccess:()=>{k.value=!1,_.value=!0},onError:()=>{k.value=!1,z.fire({icon:"error",title:"Error",text:"No se encontraron registros."})}},{preserveState:!0,replace:!0})},K=()=>{p.value="",O.get("/consultar",{identificacion:p.value},{replace:!0})},R=f=>{v.value=route("certificados.ver",f),h.value=!0};return(f,s)=>(o(),n(V,null,[a(d(T),{title:"Consultar registro"}),a(G,null,{default:u(()=>[e("div",de,[e("div",pe,[e("div",ue,[a(d(B),{class:"text-indigo-600 hover:text-indigo-400 inline-flex pe-2",href:"/Welcome"},{default:u(()=>[a(d(se),{class:"w-6 h-6 pe-2"}),s[2]||(s[2]=i(" Inicio "))]),_:1}),s[3]||(s[3]=i(" / Consultar registro "))]),s[4]||(s[4]=e("h1",{class:"text-lg sm:text-xl md:text-2xl mt-6 font-bold !font-sans"}," Consultar registro de caninos ",-1))])]),e("div",ce,[e("div",fe,[e("div",ge,[e("img",{class:"w-full object-cover z-20",src:d(ae),alt:"imagen de perrito jugando",title:"perrito jugando"},null,8,me),s[5]||(s[5]=e("figcaption",{lang:"es",class:"hidden"}," Esta es una imagen de un canino jugando ",-1))])]),e("div",be,[e("div",xe,[e("div",ye,[s[8]||(s[8]=e("span",{class:"sm:text-lg mb-4"}," Ingresar número de identificación para consultar los caninos registrados a su nombre ",-1)),e("div",ve,[a(X,{id:"identificacion",modelValue:d(p),"onUpdate:modelValue":s[0]||(s[0]=t=>H(p)?p.value=t:p=t),placeholder:"Ingrese el número de identificación",class:"w-full mb-2",onKeydown:M(I,["enter"])},null,8,["modelValue"]),a(S,{class:"bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium text-white",onClick:I},{default:u(()=>s[6]||(s[6]=[i("Buscar")])),_:1}),a(S,{onClick:K,class:"hover:underline"},{default:u(()=>s[7]||(s[7]=[i(" Limpiar ")])),_:1})])])]),e("div",he,[e("div",_e,[r.registro.data.length>0?(o(),n("div",ke,[e("table",we,[s[10]||(s[10]=e("thead",{class:"bg-gray-100"},[e("tr",null,[e("th",{class:"border border-gray-300 px-4 py-2 text-left"}," # "),e("th",{class:"border border-gray-300 px-4 py-2 text-left"}," Nombre del Usuario "),e("th",{class:"border border-gray-300 px-4 py-2 text-left"}," Nombre del Canino "),e("th",{class:"border border-gray-300 px-4 py-2 text-left"}," Raza "),e("th",{class:"border border-gray-300 px-2 py-2 text-left"}," Edad "),e("th",{class:"border border-gray-300 px-2 py-2 text-left"}," Sexo "),e("th",{class:"border border-gray-300 px-4 py-2 text-left"}," fecha vencimiento "),e("th",{class:"border border-gray-300 px-4 py-2 text-left"}," estado "),e("th",{class:"border border-gray-300 px-2 py-2 text-left"}," Foto "),e("th",{class:"border border-gray-300 px-4 py-2 text-left"}," Acciones ")])],-1)),e("tbody",null,[(o(!0),n(V,null,A(r.registro.data,(t,g)=>{var m,b,x;return o(),n("tr",{key:g},[e("td",Ce,l(g+1),1),e("td",Se,l(((b=(m=t.user)==null?void 0:m.informacion_usuario)==null?void 0:b.nombre_completo)||((x=t.user)==null?void 0:x.name)||"Sin información"),1),e("td",$e,l(t.nombre),1),e("td",je,l(t.raza),1),e("td",Ne,l(t.edad_canino),1),e("td",Ve,l(t.sexo),1),e("td",Be,l(t.certificado?t.certificado.fecha_vencimiento:"No disponible"),1),e("td",ze,[e("span",{class:P(["text-green-200 bg-green-600 p-2 rounded-md",{"text-red-200 bg-red-600":t.estado==="Vencido"}])},l(t.estado),3)]),e("td",Ee,[t.foto_url?(o(),n("img",{key:0,src:w(t.foto_url),alt:"Foto del canino",class:"w-full object-contain rounded-md cursor-pointer",onClick:j=>F(w(t.foto_url))},null,8,Fe)):(o(),n("span",Ie,"No disponible"))]),e("td",Re,[t.certificado?(o(),L(S,{key:0,class:"border-blue-800 hover:!bg-blue-200",onClick:j=>R(t.certificado.id)},{default:u(()=>s[9]||(s[9]=[i(" Ver certificado ")])),_:2},1032,["onClick"])):C("",!0)])])}),128))])]),e("div",Ae,[(o(!0),n(V,null,A(r.registro.data,(t,g)=>{var m,b,x;return o(),n("div",{key:g,class:"border border-gray-300 rounded-lg p-4 shadow-md"},[e("p",null,[s[11]||(s[11]=e("strong",null,"#:",-1)),i(" "+l(g+1),1)]),e("p",null,[s[12]||(s[12]=e("strong",null,"Nombre del Usuario:",-1)),i(" "+l(((b=(m=t.user)==null?void 0:m.informacion_usuario)==null?void 0:b.nombre_completo)||((x=t.user)==null?void 0:x.name)||"Sin información"),1)]),e("p",null,[s[13]||(s[13]=e("strong",null,"Nombre del Canino:",-1)),i(" "+l(t.nombre),1)]),e("p",null,[s[14]||(s[14]=e("strong",null,"Raza:",-1)),i(" "+l(t.raza),1)]),e("p",null,[s[15]||(s[15]=e("strong",null,"Edad:",-1)),i(" "+l(t.edad_canino),1)]),e("p",null,[s[16]||(s[16]=e("strong",null,"Sexo:",-1)),i(" "+l(t.sexo),1)]),e("p",null,[s[17]||(s[17]=e("strong",null,"Fecha vencimiento:",-1)),i(" "+l(t.certificado?t.certificado.fecha_vencimiento:"No disponible"),1)]),e("p",null,[s[18]||(s[18]=e("strong",null,"Estado:",-1)),e("span",{class:P(["ms-2 text-green-200 bg-green-600 p-1 rounded-md",{"text-red-200 bg-red-600":t.estado==="Vencido"}])},l(t.estado),3)]),e("div",null,[s[20]||(s[20]=e("strong",null,"Foto:",-1)),t.foto_url?(o(),n("img",{key:0,src:w(t.foto_url),alt:"Foto del canino",class:"w-full h-44 object-contain rounded-md mt-2 cursor-pointer",onClick:j=>F(w(t.foto_url))},null,8,Pe)):(o(),n("span",Le,"No disponible")),t.certificado?(o(),L(S,{key:2,class:"border-blue-800 hover:!bg-blue-200 mt-2",onClick:j=>R(t.certificado.id)},{default:u(()=>s[19]||(s[19]=[i(" Ver certificado ")])),_:2},1032,["onClick"])):C("",!0)])])}),128))])])):k.value?(o(),n("div",Oe,[a(d(W),{style:{width:"50px",height:"50px"},strokeWidth:"8",fill:"transparent",animationDuration:".5s","aria-label":"Custom ProgressSpinner"})])):(o(),n("div",We,[d(p)&&_.value?(o(),n("em",De,[i("No hay caninos registrados al usuario con numero de identificación --> "+l(d(p))+". ",1),s[22]||(s[22]=e("br",null,null,-1)),s[23]||(s[23]=i(" Sí no esta registrado, por favor dirígete a la opción de ")),a(d(B),{class:"text-blue-500 hover:text-blue-700",href:"/register"},{default:u(()=>s[21]||(s[21]=[e("strong",null,"Registrar canino",-1)])),_:1})])):(o(),n("div",Ke,[e("div",Ue,[e("h3",qe,[s[25]||(s[25]=i(" Registrarse como usuario y añadir el canino, dando click ")),a(d(B),{class:"text-blue-500 hover:text-blue-700",href:"/register"},{default:u(()=>s[24]||(s[24]=[e("strong",null,"Aquí",-1)])),_:1})])])]))])),a(J,{links:r.registro.links,class:"mt-4"},null,8,["links"])])])])])]),_:1}),a(d(Y),{visible:$.value,imgs:[E.value],onHide:D},null,8,["visible","imgs"]),h.value?(o(),n("div",Te,[e("div",He,[e("div",Me,[s[26]||(s[26]=e("h2",{class:"text-xl font-bold text-gray-800"},"Vista del Certificado",-1)),e("button",{class:"text-gray-500 hover:text-gray-800",onClick:s[1]||(s[1]=t=>h.value=!1)}," ✕ ")]),e("div",Ze,[v.value?(o(),n("iframe",{key:0,src:v.value,class:"w-full h-[70vh] rounded"},null,8,Ge)):C("",!0)])])])):C("",!0)],64))}},is=ee(Je,[["__scopeId","data-v-3c34e4ab"]]);export{is as default};
