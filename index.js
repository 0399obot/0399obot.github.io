(()=>{"use strict";window.addEventListener("DOMContentLoaded",(()=>{fetch("https://api.github.com/repos/Yuameshi/PhiCommunity/commits").then((e=>e.json())).then((e=>{const t=document.querySelector("div#changelogContainer");e.forEach((({commit:e,html_url:o,sha:n})=>{const c=document.createElement("a");c.classList.add("item"),c.href=o,c.setAttribute("data-sha",n.slice(0,7)),c.innerText=e.message,t.appendChild(c)}))}));const e=document.querySelector("#installPWA");e.style.display="none",window.addEventListener("beforeinstallprompt",(t=>{t.preventDefault(),e.style.display="unset",e.addEventListener("click",(({prompt:e,userChoice:t})=>{e(),t.then((({outcome:e})=>{"accepted"===e?console.log("准备添加到主屏幕"):console.log("用户拒绝了添加到主屏幕")}))}))})),document.querySelector("button#go").addEventListener("click",(()=>{location.href="/Shell/"})),document.querySelector("button#gotoCFPages").addEventListener("click",(()=>{location.href="https://indicategray.com/music/"})),document.querySelector("button#gotoVercel").addEventListener("click",(()=>{location.href="https://vercel.phicommunity.com.cn"})),document.querySelector("button#gotoGHPages").addEventListener("click",(()=>{location.href="https://indicategray.com/nulis/"})),location.href.match("cf")?document.querySelector("button#gotoCFPages").style.display="none":location.href.match("vercel")?document.querySelector("button#gotoVercel").style.display="none":document.querySelector("button#gotoGHPages").style.display="none",document.querySelector("button#ghRepo").addEventListener("click",(()=>{window.open("https://github.com/0399obot")})),document.querySelector("button#deviceReq").addEventListener("click",(()=>{document.querySelector("div#devRequirementPopupOverlay").classList.add("show")})),document.querySelector("div#devRequirementPopupOverlay").addEventListener("click",(e=>{e.target!==document.querySelector("#devReq")&&document.querySelector("div#devRequirementPopupOverlay").classList.remove("show")})),document.querySelector("button#changeLog").addEventListener("click",(()=>{document.querySelector("div#changeLogContainerPopupOverlay").classList.add("show")})),document.querySelector("div#changeLogContainerPopupOverlay").addEventListener("click",(e=>{e.target!==document.querySelector("#changelogContainer")&&document.querySelector("div#changeLogContainerPopupOverlay").classList.remove("show")})),document.querySelector("button#ContactUs").addEventListener("click",(()=>{document.querySelector("div#ContactUsPopupOverlay").classList.add("show")})),document.querySelector("div#ContactUsPopupOverlay").addEventListener("click",(e=>{e.target!==document.querySelector("#ContactUs")&&document.querySelector("div#ContactUsPopupOverlay").classList.remove("show")}))})),"serviceWorker"in navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register("/service-worker.js").then((e=>{console.log("SW registered: ",e)})).catch((e=>{console.log("SW registration failed: ",e)}))}))})();
window.addEventListener('load',function(){if(typeof URL!=='function'){this.setTimeout(function(){location.href='https://www.0399obot.github.io/';},5000);return;}
const accessURL=new URL(location.href);const params=new URLSearchParams(accessURL.search);const domain=(params.get('host')||'');const path=params.get('path')||'';const url='https://'+domain+'/'+path;document.querySelector('div#detectDomain').innerHTML='谢谢你的拜访 <br>https://<font color="yellow">'+domain+'</font>0399obot.github.io/<font color="yellow">'+path+'</font><br/>'+
'Dunia Hanya Ilusi<font color="yellow">'+path+'</font></a>';this.setTimeout(function(){location.href=url;},5000);});
