(()=>{"use strict";class t{constructor(t){this.el=document.querySelector(t),this.chars=this.el.innerHTML.trim().split(""),this.el.innerHTML=this._splitText()}_splitText(){return this.chars.reduce(((t,e)=>`${t}<span class="char">${e=e.replace(/\s+/,"&nbsp;")}</span>`),"")}animate(){this.el.classList.toggle("inview")}}document.addEventListener("DOMContentLoaded",(function(){const e=new t(".animate-title"),s=new t(".animate-title-2");setTimeout((()=>{e.animate(),s.animate(),console.log("5000count!")}),5e3)}))})();