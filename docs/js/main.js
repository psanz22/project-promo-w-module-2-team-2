const s=document.querySelector(".js-name-preview"),i=document.querySelector(".js-job-preview"),f=document.querySelector(".js-image-preview"),d=document.querySelector(".js-phone-preview"),u=document.querySelector(".js-mail-preview"),m=document.querySelector(".js-linkedin-preview"),p=document.querySelector(".js-github-preview"),g=document.querySelector(".js-form"),l=document.querySelector(".js-card"),S=document.querySelector(".js-checkOne"),b=document.querySelector(".js-checkTwo"),j=document.querySelector(".js-checkThree"),y=document.querySelector(".js-thumbnail"),v=document.querySelector(".js-reset"),w=document.querySelector(".js-mainForm"),k=document.querySelector(".js-create-button"),h=document.querySelector(".js-link"),L=document.querySelector(".js-twitter"),q=document.querySelector(".js-twitter-share-button");let c=JSON.parse(localStorage.getItem("localStorageData")),e={palette:"1",name:"",job:"",phone:"",email:"",linkedin:"",github:"",photo:""};const T=()=>{s.innerHTML=e.name,i.innerHTML=e.job,u.href=e.email,d.href=e.phone,m.href=e.linkedin,p.href=e.github,f.style.backgroundImage=`url('${e.photo}')`,e.palette==="2"?l.classList.add("palette2"):e.palette==="3"&&l.classList.add("palette3")};c!==null?(e=c,T()):e={palette:"1",name:"",job:"",phone:"",email:"",linkedin:"",github:"",photo:""};function P(){w.reset(),s.innerHTML="Nombre Apellido",i.innerHTML="Front-end developer",u.href="",d.href="",m.href="",p.href="",f.style.backgroundImage="url('https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg')",y.style.backgroundImage="url('')",l.classList.remove("palette2","palette3"),localStorage.removeItem("localStorageData")}v.addEventListener("click",P);const I=document.querySelector(".js-checkForm");function H(){S.checked?(l.classList.remove("palette2","palette3"),e.palette="1"):b.checked?(l.classList.add("palette2"),l.classList.remove("palette3"),e.palette="2"):j.checked&&(l.classList.add("palette3"),l.classList.remove("palette2"),e.palette="3")}I.addEventListener("click",H);const $=document.querySelectorAll(".js-collapsable-header"),F=document.querySelectorAll(".js-form-box");function D(o){const r=o.currentTarget.parentNode;for(const a of F)a===r?a.classList.toggle("collapsable--close"):a.classList.add("collapsable--close")}for(const o of $)o.addEventListener("click",D);function E(o){const t=o.target.value,r=o.target.id;e[r]=o.target.value,r==="name"?(s.innerHTML=t,e.name=t):r==="job"?(i.innerHTML=t,e.job=t):r==="email"?(u.href="mailto:"+t,e.email=t):r==="phone"?(d.href="tel:"+t,e.phone=t):r==="linkedin"?(m.href=`https://www.linkedin.com/in/${t}`,e.linkedin=t):r==="github"&&(p.href=`https://github.com/${t}`,e.github=t)}g.addEventListener("input",E);const M=o=>{o.preventDefault(),n.result===null?e.photo=c.photo:e.photo=`${n.result}`,console.log("dataphoto ",e.photo),localStorage.setItem("localStorageData",JSON.stringify(e)),console.log("localStorageData ",c),fetch("https://dev.adalab.es/api/card/",{method:"POST",body:JSON.stringify(e),headers:{"content-type":"application/json"}}).then(t=>t.json()).then(t=>{h.innerHTML=`${t.cardURL}`,h.href=`${t.cardURL}`,L.classList.remove("hidden"),q.href=`https://twitter.com/intent/tweet?text=${t.cardURL}`})};k.addEventListener("click",M);const n=new FileReader,R=document.querySelector(".js__profile-upload-btn"),O=document.querySelector(".js__profile-image"),_=document.querySelector(".js__profile-preview");function N(o){const t=o.currentTarget.files[0];n.addEventListener("load",A),n.readAsDataURL(t)}function A(){O.style.backgroundImage=`url(${n.result})`,_.style.backgroundImage=`url(${n.result})`}R.addEventListener("change",N);
//# sourceMappingURL=main.js.map
