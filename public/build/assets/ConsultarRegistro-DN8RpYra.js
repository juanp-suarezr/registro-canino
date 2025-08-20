import{B as D,o,c as n,q as C,d as e,K,i as u,a,u as d,w as c,f as S,F as $,Z as O,k as j,b as i,a2 as U,a1 as q,s as F,t as l,n as T,l as H,N as R}from"./app-CV-mMiPu.js";import{A as M,_ as Z}from"./PageLayout-DdIeVIsf.js";import{_ as G}from"./Pagination-C9Sc11Qm.js";import{s as J}from"./index-ptd-hmLm.js";import{_ as Q}from"./TextInput-CkKdPmiC.js";import{_ as N}from"./SecondaryButton-xoCEJc7R.js";import{N as X}from"./vue-easy-lightbox.esm.min-BM9Yhsbr.js";import{_ as Y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{r as ee}from"./HomeIcon-DQFyGGB_.js";import"./logo-C5N1mjxg.js";var se=({dt:t})=>`
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
    stroke: ${t("progressspinner.colorOne")};
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
        stroke: ${t("progressspinner.color.one")};
    }
    40% {
        stroke: ${t("progressspinner.color.two")};
    }
    66% {
        stroke: ${t("progressspinner.color.three")};
    }
    80%,
    90% {
        stroke: ${t("progressspinner.color.four")};
    }
}
`,re={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},te=D.extend({name:"progressspinner",style:se,classes:re}),oe={name:"BaseProgressSpinner",extends:J,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:te,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},A={name:"ProgressSpinner",extends:oe,inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},ne=["fill","stroke-width"];function le(t,B,x,y,v,h){return o(),n("div",C({class:t.cx("root"),role:"progressbar"},t.ptmi("root")),[(o(),n("svg",C({class:t.cx("spin"),viewBox:"25 25 50 50",style:h.svgStyle},t.ptm("spin")),[e("circle",C({class:t.cx("circle"),cx:"50",cy:"50",r:"20",fill:t.fill,"stroke-width":t.strokeWidth,strokeMiterlimit:"10"},t.ptm("circle")),null,16,ne)],16))],16)}A.render=le;const ie="/build/assets/perrito2-BCVB6cWq.png",ae={class:"w-full !bg-option2 relative"},de={class:"w-full text-sm px-2 md:px-16 pt-8"},pe={class:"w-full h-full flex"},ue={class:"w-full px-6 flex sm:flex-row flex-col-reverse flex-wrap bg-gradient-to-t from-option1 via-white to-option2"},ce={class:"sm:w-[35%] w-full h-full"},fe={class:"w-full flex inline-flex justify-center"},ge=["src"],me={class:"sm:w-[60%] w-full"},be={class:"mt-12"},xe={class:"bg-white shadow-md rounded-lg p-4"},ye={class:"sm:flex items-center gap-2 mt-2 h-full"},ve={class:"mt-6"},he={class:"bg-white shadow-md rounded-lg p-4"},_e={key:0,class:"w-full overflow-x-auto"},ke={class:"table-medium w-full border-collapse border border-gray-200"},we={class:"border border-gray-300 px-4 py-2"},Ce={class:"border border-gray-300 px-4 py-2 break-words"},Se={class:"border border-gray-300 px-4 py-2"},$e={class:"border border-gray-300 px-4 py-2"},je={class:"border border-gray-300 px-4 py-2"},Ne={class:"border border-gray-300 px-4 py-2"},Be={class:"border border-gray-300 px-4 py-2"},Ve={class:"border border-gray-300 px-4 py-2"},ze={class:"border border-gray-300 px-4 py-2"},Ie=["src","onClick"],Ee={key:1},Fe={class:"border border-gray-300 px-4 py-2"},Re={class:"table-responsive grid grid-cols-1 gap-4 sm:hidden"},Ae=["src","onClick"],Pe={key:1},Le={key:1,class:"w-full flex justify-center items-center"},We={key:2,class:"w-full flex justify-center items-center"},De={key:0,class:"text-xl"},Ke={key:1,class:"w-1/2 flex justify-center items-center"},Oe={class:"bg-azul rounded-md shadow-lg p-4"},Ue={class:"text-white sm:text-2xl text-xl text-center"},qe={key:0,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"},Te={class:"bg-white rounded-lg shadow-lg w-full lg:mx-24 mx-4 h-[90%]"},He={class:"flex justify-between items-center p-4 border-b"},Me={class:"px-2 pt-2 pb-2"},Ze=["src"],Ge={__name:"ConsultarRegistro",props:{registro:{type:Object},filters:{type:Object,default:()=>({})}},setup(t){M.init();const B=K("$swal"),x=t;console.log(x.registro);const y=u(""),v=u(!1),h=u(!1),_=u(!1);console.log(x);let p=u(x.filters.identificacion);const V=u(""),w=u(!1),z=f=>{V.value=f,w.value=!0},P=()=>{w.value=!1},k=f=>`/storage/uploads/caninos/${f}`,I=()=>{_.value=!0,R.get("/consultar",{identificacion:p.value},{onSuccess:()=>{_.value=!1,h.value=!0},onError:()=>{_.value=!1,B.fire({icon:"error",title:"Error",text:"No se encontraron registros."})}},{preserveState:!0,replace:!0})},L=()=>{p.value="",R.get("/consultar",{identificacion:p.value},{replace:!0})},W=f=>{y.value=route("certificados.ver",f),v.value=!0};return(f,s)=>(o(),n($,null,[a(d(O),{title:"Consultar registro"}),a(Z,null,{default:c(()=>[e("div",ae,[e("div",de,[e("div",pe,[a(d(j),{class:"text-indigo-600 hover:text-indigo-400 inline-flex pe-2",href:"/Welcome"},{default:c(()=>[a(d(ee),{class:"w-6 h-6 pe-2"}),s[2]||(s[2]=i(" Inicio "))]),_:1}),s[3]||(s[3]=i(" / Consultar registro "))]),s[4]||(s[4]=e("h1",{class:"text-lg sm:text-xl md:text-2xl mt-6 font-bold !font-sans"}," Consultar registro de caninos ",-1))])]),e("div",ue,[e("div",ce,[e("div",fe,[e("img",{class:"w-full object-cover z-20",src:d(ie),alt:"imagen de perrito jugando",title:"perrito jugando"},null,8,ge),s[5]||(s[5]=e("figcaption",{lang:"es",class:"hidden"}," Esta es una imagen de un canino jugando ",-1))])]),e("div",me,[e("div",be,[e("div",xe,[s[8]||(s[8]=e("span",{class:"sm:text-lg mb-4"}," Ingresar número de identificación para consultar los caninos registrados a su nombre ",-1)),e("div",ye,[a(Q,{id:"identificacion",modelValue:d(p),"onUpdate:modelValue":s[0]||(s[0]=r=>U(p)?p.value=r:p=r),placeholder:"Ingrese el número de identificación",class:"w-full mb-2",onKeydown:q(I,["enter"])},null,8,["modelValue"]),a(N,{class:"bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium text-white",onClick:I},{default:c(()=>s[6]||(s[6]=[i("Buscar")])),_:1}),a(N,{onClick:L,class:"hover:underline"},{default:c(()=>s[7]||(s[7]=[i(" Limpiar ")])),_:1})])])]),e("div",ve,[e("div",he,[t.registro.data.length>0?(o(),n("div",_e,[e("table",ke,[s[10]||(s[10]=e("thead",{class:"bg-gray-100"},[e("tr",null,[e("th",{class:"border border-gray-300 px-4 py-2 text-left"}," # "),e("th",{class:"border border-gray-300 px-4 py-2 text-left"}," Nombre del Usuario "),e("th",{class:"border border-gray-300 px-4 py-2 text-left"}," Nombre del Canino "),e("th",{class:"border border-gray-300 px-4 py-2 text-left"}," Raza "),e("th",{class:"border border-gray-300 px-4 py-2 text-left"}," Edad "),e("th",{class:"border border-gray-300 px-4 py-2 text-left"}," Sexo "),e("th",{class:"border border-gray-300 px-4 py-2 text-left"}," fecha vencimiento "),e("th",{class:"border border-gray-300 px-4 py-2 text-left"}," estado "),e("th",{class:"border border-gray-300 px-4 py-2 text-left"}," Foto "),e("th",{class:"border border-gray-300 px-4 py-2 text-left"}," Acciones ")])],-1)),e("tbody",null,[(o(!0),n($,null,F(t.registro.data,(r,g)=>{var m,b;return o(),n("tr",{key:g},[e("td",we,l(g+1),1),e("td",Ce,l(((b=(m=r.user)==null?void 0:m.informacion_usuario)==null?void 0:b.nombre_completo)||"Sin información"),1),e("td",Se,l(r.nombre),1),e("td",$e,l(r.raza),1),e("td",je,l(r.edad_canino),1),e("td",Ne,l(r.sexo),1),e("td",Be,l(r.certificado?r.certificado.fecha_vencimiento:"No disponible"),1),e("td",Ve,[e("span",{class:T(["text-green-200 bg-green-600 p-2 rounded-md",{"text-red-200 bg-red-600":r.estado==="Vencido"}])},l(r.estado),3)]),e("td",ze,[r.foto_url?(o(),n("img",{key:0,src:k(r.foto_url),alt:"Foto del canino",class:"w-full object-contain rounded-md cursor-pointer",onClick:E=>z(k(r.foto_url))},null,8,Ie)):(o(),n("span",Ee,"No disponible"))]),e("td",Fe,[r.certificado?(o(),H(N,{key:0,class:"border-blue-800 hover:!bg-blue-200",onClick:E=>W(r.certificado.id)},{default:c(()=>s[9]||(s[9]=[i(" Ver certificado ")])),_:2},1032,["onClick"])):S("",!0)])])}),128))])]),e("div",Re,[(o(!0),n($,null,F(t.registro.data,(r,g)=>{var m,b;return o(),n("div",{key:g,class:"border border-gray-300 rounded-lg p-4 shadow-md"},[e("p",null,[s[11]||(s[11]=e("strong",null,"#:",-1)),i(" "+l(g+1),1)]),e("p",null,[s[12]||(s[12]=e("strong",null,"Nombre del Usuario:",-1)),i(" "+l(((b=(m=r.user)==null?void 0:m.informacion_usuario)==null?void 0:b.nombre_completo)||"Sin información"),1)]),e("p",null,[s[13]||(s[13]=e("strong",null,"Nombre del Canino:",-1)),i(" "+l(r.nombre),1)]),e("p",null,[s[14]||(s[14]=e("strong",null,"Raza:",-1)),i(" "+l(r.raza),1)]),e("p",null,[s[15]||(s[15]=e("strong",null,"Edad:",-1)),i(" "+l(r.edad_canino),1)]),e("p",null,[s[16]||(s[16]=e("strong",null,"Sexo:",-1)),i(" "+l(r.sexo),1)]),e("div",null,[s[17]||(s[17]=e("strong",null,"Foto:",-1)),r.foto_url?(o(),n("img",{key:0,src:k(r.foto_url),alt:"Foto del canino",class:"w-full h-44 object-contain rounded-md mt-2 cursor-pointer",onClick:E=>z(k(r.foto_url))},null,8,Ae)):(o(),n("span",Pe,"No disponible"))])])}),128))])])):_.value?(o(),n("div",Le,[a(d(A),{style:{width:"50px",height:"50px"},strokeWidth:"8",fill:"transparent",animationDuration:".5s","aria-label":"Custom ProgressSpinner"})])):(o(),n("div",We,[d(p)&&h.value?(o(),n("em",De,[i("No hay caninos registrados al usuario con numero de identificación --> "+l(d(p))+". ",1),s[19]||(s[19]=e("br",null,null,-1)),s[20]||(s[20]=i(" Sí no esta registrado, por favor dirígete a la opción de ")),a(d(j),{class:"text-blue-500 hover:text-blue-700",href:"/register"},{default:c(()=>s[18]||(s[18]=[e("strong",null,"Registrar canino",-1)])),_:1})])):(o(),n("div",Ke,[e("div",Oe,[e("h3",Ue,[s[22]||(s[22]=i(" Registrarse como usuario y añadir el canino, dando click ")),a(d(j),{class:"text-blue-500 hover:text-blue-700",href:"/register"},{default:c(()=>s[21]||(s[21]=[e("strong",null,"Aquí",-1)])),_:1})])])]))])),a(G,{links:t.registro.links,class:"mt-4"},null,8,["links"])])])])])]),_:1}),a(d(X),{visible:w.value,imgs:[V.value],onHide:P},null,8,["visible","imgs"]),v.value?(o(),n("div",qe,[e("div",Te,[e("div",He,[s[23]||(s[23]=e("h2",{class:"text-xl font-bold text-gray-800"},"Vista del Certificado",-1)),e("button",{class:"text-gray-500 hover:text-gray-800",onClick:s[1]||(s[1]=r=>v.value=!1)}," ✕ ")]),e("div",Me,[y.value?(o(),n("iframe",{key:0,src:y.value,class:"w-full h-[70vh] rounded"},null,8,Ze)):S("",!0)])])])):S("",!0)],64))}},ls=Y(Ge,[["__scopeId","data-v-25be45d9"]]);export{ls as default};
